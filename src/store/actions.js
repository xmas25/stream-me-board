import { getVideoTime, FINGERPRINT, VOTE_TIMEOUT } from '../common'
import shortid from 'shortid'
const firestore = firebase.firestore()
firestore.settings({ timestampsInSnapshots: true })
let unsubscribeChat = () => { }

export default {
	notify({ }, payload) { },
	async saveMyInfo({ state, dispatch, commit }, payload) {
		try {
			await firestore.collection('user').doc(state.myUid).set(payload)
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	addExp({ getters, dispatch }, payload) {
		if (payload > 100)
			dispatch('notify', { type: 'error', text: `unsupport addExp ${payload}` })
		getters.myInfo.exp += payload
		if (getters.myInfo.exp >= 100) {
			getters.myInfo.level++
			getters.myInfo.exp -= 100
			const nextAvatar = getters.randomNextAvatar
			if (null === nextAvatar) {
				dispatch('notify', { text: '升滿了?! 你真的有認真在看直播嗎?' })
			} else {
				getters.myInfo.avatarList.push(nextAvatar)
				dispatch('notify', { data: { avatar: nextAvatar }, text: '升級! 獲得新角色!' })
			}
		}
		dispatch('saveMyInfo', getters.myInfo)
	},
	checkTrophy({ getters, state, dispatch }) {
		if (!getters.myInfo.name)
			return
		if (state.stream.streaming && !getters.myInfo.viewedStream.includes(state.stream.time)) {
			getters.myInfo.viewedStream.push(state.stream.time)
			if (!getters.myInfo.trophy.includes('WATCH_FIRST_TIME')) {
				getters.myInfo.trophy.push('WATCH_FIRST_TIME')
				notify('第一次來看直播！')
			}
			dispatch('saveMyInfo', getters.myInfo)
			dispatch('addExp', 100)
		}
		function notify(msg) {
			dispatch('notify', { data: { symbol: 'trophy' }, text: msg })
		}
	},
	async sendHeartbeat({ state }) {
		try {
			const anonymousUid = `${FINGERPRINT} ${state.anonymousAvatar}`
			if (state.myUid) {
				firestore.doc('activity/onlineUsers').update({
					[state.myUid]: firebase.firestore.FieldValue.serverTimestamp()
				})
				firestore.doc('activity/onlineUsers').update({
					[anonymousUid]: firebase.firestore.FieldValue.delete()
				})
			} else {
				firestore.doc('activity/onlineUsers').update({
					[anonymousUid]: firebase.firestore.FieldValue.serverTimestamp()
				})
			}
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	subscribeData({ state, commit, dispatch }) {
		// Is me banned?
		firestore.doc('system/ban').onSnapshot(doc => {
			if (doc.data().fingerprint.find(hash => hash == FINGERPRINT)) {
				dispatch('logout')
				dispatch('notify', { type: 'error', text: 'You got banned!' })
			}
		})
		// all users
		firestore.collection('user').onSnapshot(snap => {
			let allUsers = {}
			snap.forEach(doc => allUsers[doc.id] = doc.data())
			commit('setAllUsers', allUsers)
		})
		// online user
		setInterval(() => dispatch('sendHeartbeat'), 60000)
		firestore.doc('activity/onlineUsers').onSnapshot(doc => commit('setOnlineUids', Object.keys(doc.data())))
		// system info
		firestore.doc('system/stream').onSnapshot(doc => {
			const stream = doc.data()
			if (state.stream.time != stream.time) {
				unsubscribeChat()
				unsubscribeChat = firestore.collection(`allChat/${stream.time}/chat-line`).onSnapshot(snap => {
					commit('setChatLines', snap.docs.map(doc => doc.data()).reverse())
					commit('updateUiMode', { chat: true })
				})
			}
			commit('setStream', stream)
			dispatch('checkTrophy')
		})
		firestore.doc("system/info").onSnapshot(doc => {
			if (doc.data().emergency)
				location.replace('//live-2-0-131ee.firebaseapp.com/watch.html')
			if (null != doc.data().version && state.systemInfo && state.systemInfo.version != doc.data().version)
				window.location.reload(true)
			commit('setSystemInfo', doc.data())
		})
		// my login info
		firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
		firebase.auth().onAuthStateChanged(async user => {
			try {
				if (user) {
					commit('setMyUid', user.uid)
					commit('updateUiMode', { account: 'MY_INFO' })
					try {
						await firestore.collection('adminUser').get()
						commit('setIsAdmin', true)
					} catch (error) {
						if ("permission-denied" == error.code)
							commit('setIsAdmin', false)
						else
							throw error
					}
				} else {
					commit('setIsAdmin', false)
					commit('setMyUid', null)
					commit('updateUiMode', { account: 'ANONYMOUS' })
				}
				dispatch('sendHeartbeat')
			} catch (error) {
				dispatch('notify', { type: 'error', text: error.message })
				throw error
			}
		})
		// vote
		firestore.doc("system/vote").onSnapshot(doc => commit('setVoteInfo', doc.data()))
		firestore.doc("activity/vote").onSnapshot(doc => {
			const roster = []
			for (const uid in doc.data()) {
				doc.data()[uid].forEach((count, i) => {
					if (!roster[i])
						roster[i] = { users: [], total: 0 }
					if (0 == count)
						return
					roster[i].users.push(state.allUsers[uid])
					roster[i].total += count
				})
			}
			commit('updateVoteRoster', roster)
		})
		setInterval(() => commit('updateVoting'), 1000)
		// history video
		fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBCYPReX74lujmX9tg8AiM-OFGqmKYMZkU&channelId=UCLeQT6hvBgnq_-aKKlcgj1Q&part=snippet,id&order=date&maxResults=50').then(res => res.json()).then(data => commit('setHistoryVideo', data.items.filter(item => item.id.videoId)))
		// font loaded
		document.fonts.ready.then(() => commit('setFontLoaded', true));
	},
	async loginAdmin({ state, dispatch }, payload) {
		try {
			const me = Object.values(state.allUsers).find(user => user.name == payload.name)
			await firebase.auth().signInWithEmailAndPassword(me.email, payload.password)
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	async loginVisitor({ dispatch, state }, payload) {
		const name = payload
		try {
			const me = Object.values(state.allUsers).find(user => user.name == name)
			if (me) {
				await firebase.auth().signInWithEmailAndPassword(me.email, 'dummy-password')
			} else {
				// create user
				const email = `${shortid.generate()}@mail.net`
				const user = await firebase.auth().createUserWithEmailAndPassword(email, 'dummy-password')
				await firestore.collection('user').doc(user.uid).set({
					name: name,
					uid: user.uid,
					avatarList: [state.anonymousAvatar],
					avatarSelected: state.anonymousAvatar,
					level: 1,
					exp: 0,
					email: email,
					viewedStream: [],
					trophy: []
				})
				dispatch('checkTrophy')
			}
		} catch (error) {
			if ('auth/wrong-password' == error.code) {
				dispatch('notify', { type: 'error', text: '暱稱已被使用!' })
				dispatch('promptLogin')
			} else {
				dispatch('notify', { type: 'error', text: error.message })
				throw error
			}
		}
	},
	async logout({ state, dispatch, commit }) {
		try {
			commit('generateAnonymousAvatar')
			await firestore.doc('activity/onlineUsers').update({
				[state.myUid]: firestore.FieldValue.delete()
			})
			await firebase.auth().signOut()
			commit('updateUiMode', { selectAvatar: false })
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	changeAvatar({ dispatch, commit, getters }, payload) {
		if (!getters.myInfo.avatarList.includes(payload))
			return
		getters.myInfo.avatarSelected = payload
		dispatch('saveMyInfo', getters.myInfo)
		commit('updateUiMode', { selectAvatar: false })
	},
	async sendChat({ dispatch, commit, state }, payload) {
		try {
			let index = (parseInt('zzz', 36) - state.chatLines.length).toString(36)
			index += payload.text.substr(0, 10)
			const time = getVideoTime()
			await firestore.collection(`allChat/${state.stream.time}/chat-line`).doc(index).set({
				...payload,
				fingerprint: FINGERPRINT,
				videoTime: Math.floor(time / 3600) + ':' + Math.floor(time % 3600 / 60) + ':' + Math.floor(time % 3600 % 60),
				id: shortid.generate(),
				time: firebase.firestore.FieldValue.serverTimestamp()
			})
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	promptLogin({ commit, dispatch }) {
		commit('updateUiMode', { account: 'LOGIN' })
		dispatch('notify', { type: 'warn', text: '要先輸入暱稱才能繼續喲！', data: { symbol: 'exclamation-triangle' } })
	},
	promptSelectAvatar({ commit }) {
		commit('updateUiMode', { selectAvatar: true })
	},
	async saveGameTitle({ dispatch, state }, payload) {
		try {
			await firestore.doc('system/stream').update({
				gameTitle: payload
			})
			dispatch('notify', { text: '已更新直播主題' })
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	async saveGameUrl({ dispatch, state }, payload) {
		try {
			await firestore.doc('system/stream').update({
				gameUrl: payload
			})
			dispatch('notify', { text: '已更新直播主題的連結' })
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	async saveGameDescription({ dispatch, state }, payload) {
		try {
			await firestore.doc('system/stream').update({
				gameDescription: payload
			})
			dispatch('notify', { text: '已更新直播主題的簡述' })
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	async saveVideoUrl({ dispatch, state }, payload) {
		try {
			await firestore.doc('system/stream').set({
				...state.stream,
				videoUrl: convertToEmbeded(payload)
			})
			dispatch('notify', { text: '已更新直播影片網址' })
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
		function convertToEmbeded(url) {
			let arr = /\/\/youtu.be\/(.*)/.exec(url)
			if (arr)
				return convertToYoutube(arr[1])
			arr = /\/\/www\.youtube\.com\/watch\?v=([^&]+)/.exec(url)
			if (arr)
				return convertToYoutube(arr[1])
			arr = /\/\/www\.youtube\.com\/embed\/([^?]+)/.exec(url)
			if (arr)
				return convertToYoutube(arr[1])
		}
	},
	async startStream({ dispatch, state }, payload) {
		try {
			await firestore.doc('system/stream').update({
				time: new Date().toLocaleString().replace(/\//g, '-'),
				streaming: true
			})
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	async stopStream({ dispatch, state }, payload) {
		try {
			await firestore.doc('system/stream').update({
				streaming: false
			})
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	async startVote({ dispatch }, payload) {
		try {
			await firestore.doc('activity/vote').set({})
			await firestore.doc('system/vote').set({
				time: firebase.firestore.FieldValue.serverTimestamp(),
				optionCount: payload,
			})
		} catch (error) {
			dispatch('notify', { type: 'error', text: error.message })
			throw error
		}
	},
	async sendVote({ state, dispatch }, payload) {
		const max = Math.random() * 3 + 28
		const arr = payload.map(count => count > max ? max : count)
		await firestore.doc('activity/vote').update({
			[state.myUid]: arr
		})
		dispatch('sendChat', {
			uid: state.myUid,
			text: arr.reduce((acc, val) => acc + val) + '票！',
		})
	},
	playHistory({ commit }, payload) {
		commit('setSelectedVideoUrl', convertToYoutube(payload))
	}
}

function convertToYoutube(id) { return '//www.youtube.com/embed/' + id + '?enablejsapi=1' }