webpackJsonp([3],{"1GE1":function(t,e){},"6EPt":function(t,e,n){"use strict";var r={props:["rate"],computed:{degree:function(){return isNaN(this.rate)||this.rate<=0?0:this.rate>=1?359:360*this.rate},leftStyle:function(){return{transform:"rotate("+this.degree+"deg)"}}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pie-wrapper"},[n("div",{staticClass:"pie",class:{"over-half":t.degree>180}},[n("div",{staticClass:"half-circle shadow",style:t.leftStyle}),t._v(" "),n("div",{staticClass:"half-circle",style:t.leftStyle}),t._v(" "),t.degree>180?n("div",{staticClass:"half-circle right-side shadow"}):t._e(),t._v(" "),t.degree>180?n("div",{staticClass:"half-circle right-side"}):t._e()])])},staticRenderFns:[]};var i=n("VU/8")(r,a,!1,function(t){n("luSO")},null,null);e.a=i.exports},C1Bd:function(t,e){},C8CC:function(t,e,n){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"sticker",style:this.style,attrs:{src:"static/blank.png",align:this.align}})},staticRenderFns:[]};var a=n("VU/8")({props:["index","category","size","align"],computed:{style:function(){var t=1;return this.size&&(t=this.size/100),{"background-image":"url(static/sticker.png)","background-size":200*t+"px "+1900*t+"px","background-position-x":-100*t*this.category+"px","background-position-y":-100*t*this.index+"px",width:this.size+"px",height:this.size+"px"}}}},r,!1,function(t){n("C1Bd")},"data-v-0a9c6724",null);e.a=a.exports},FRA0:function(t,e){},G4pG:function(t,e,n){"use strict";var r={props:["index","large","whoAmI","preserved","align"],computed:{style:function(){var t=void 0,e=void 0,n=this.preserved?"preserved":"character";return this.large?(t=32,e="large"):(t=24,e="small"),{"background-image":"url(static/"+n+"-"+e+".png)","background-position-x":-1*t*(this.index%10)+"px","background-position-y":-1*t*Math.floor(this.index/10)+"px",width:t+"px",height:t+"px",filter:this.whoAmI?"brightness(0%)":"initial"}}}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"avatar",style:this.style,attrs:{src:"static/blank.png",align:this.align}})},staticRenderFns:[]};var i=n("VU/8")(r,a,!1,function(t){n("uw/i")},"data-v-3ea37591",null);e.a=i.exports},GSwj:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=(n("VN6J"),n("Dd8w")),i=n.n(a),s=n("Gu7T"),o=n.n(s),c=n("MvGc"),u={props:["x","y"],computed:{width:function(){return this.$el.clientWidth},height:function(){return this.$el.clientHeight},getWindowWidth:c.j,getWindowHeight:c.i}},d={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"cbbl",class:{"cbbl--right":this.x<this.getWindowWidth/2,"cbbl--up":this.y<this.getWindowHeight/2},style:{position:"fixed",left:this.x+"px",top:this.y+"px"}},[this._t("default")],2)},staticRenderFns:[]};var f=n("VU/8")(u,d,!1,function(t){n("FRA0")},null,null).exports,l=n("G4pG"),h=n("HyL5"),m=n("C8CC"),p=n("NYxO"),v={props:["chat","dummy","sticker","stickerCategory"],components:{ComicBubble:f,NameBadge:h.a,Avatar:l.a,Sticker:m.a},computed:i()({user:function(){return this.allUsers[this.chat.uid]},width:function(){return this.$refs.bubble.width},height:function(){return this.$refs.bubble.height}},Object(p.e)(["allUsers"]))},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ComicBubble",{ref:"bubble",class:{jello:t.chat.x,animated:t.chat.x},style:{visibility:t.chat.x?"visible":"hidden"},attrs:{x:t.chat.x,y:t.chat.y,dummy:t.dummy}},[n("Avatar",{staticStyle:{"vertical-align":"middle"},attrs:{index:t.user.avatarSelected,preserved:t.user.preserved}}),t._v(" "),n("NameBadge",{attrs:{user:t.user}}),t._v(" "),n("span",{staticClass:"text"},[t._v(t._s(t.chat.text))]),t._v(" "),isNaN(t.sticker)?t._e():n("Sticker",{staticStyle:{"margin-left":"5px"},attrs:{index:t.sticker,category:t.stickerCategory,size:"75",align:"top"}})],1)],1)},staticRenderFns:[]};var x={data:function(){return{chats:[],dummy:null}},components:{ChatBubble:n("VU/8")(v,y,!1,function(t){n("1GE1")},null,null).exports},computed:i()({},Object(p.e)(["chatLines"])),watch:{chatLines:function(t,e){var n=this;t.forEach(function(t){n.chats.find(function(e){return e.id==t.id})||n.chats.push(i()({},t))}),this.rmObsolete(),this.$nextTick(function(){return n.placeChat()})}},methods:{rmObsolete:function(){this.chats=this.chats.filter(function(t){return(new Date).getTime()-1e3*t.time.seconds<c.b})},placeChat:function(){var t=this;function e(t,e){var n=t-Object(c.j)()/2,r=Object(c.i)()/2-e,a=180*Math.atan2(r,n)/Math.PI;return Math.floor((a+360+90)%360)}this.chats.forEach(function(e,n){e.width=t.$refs.bubbles[n].width,e.height=t.$refs.bubbles[n].height}),this.chats.forEach(function(n){if(null==n.x){for(var r=t.chats.filter(function(t){return t.x}),a=[e(0,Object(c.i)()),e(Object(c.j)(),Object(c.i)())].concat(o()(r.map(function(t){return e(t.centerX,t.centerY)}))).sort(function(t,e){return t>e}),i=void 0,s=-1,u=0;u<a.length-1;u++){var d=a[u+1]-a[u];d>s&&(i=(a[u]+a[u+1])/2,s=d)}var f=1/0,l=null;new Array(30).fill(0).map(function(){var t=Math.random()*(Object(c.j)()-n.width-20),e=Math.random()*(Object(c.i)()-n.height-20),r=1,a=1,i=Math.floor(3*Math.random());return 0==i?(r=Object(c.j)()-n.width-20,a=e):1==i?r=t:a=e,{x:r,y:a,centerX:r+n.width/2,centerY:a+n.height/2}}).forEach(function(t){l=l||t;var n=e(t.centerX,t.centerY),r=Math.abs(i-n);r<f&&(l=t,f=r)}),n.x=l.x,n.y=l.y,n.centerX=l.centerX,n.centerY=l.centerY}}),this.dummy=Math.random()}},mounted:function(){var t=this;this.rmObsoleteHandler=setInterval(function(){return t.rmObsolete()},1e3)},beforeDestroy:function(){clearInterval(this.rmObsoleteHandler)}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.chats,function(e){return n("ChatBubble",{key:e.id,ref:"bubbles",refInFor:!0,attrs:{chat:e,sticker:e.sticker,stickerCategory:e.stickerCategory,dummy:t.dummy}})}))},staticRenderFns:[]},w=n("VU/8")(x,b,!1,null,null,null).exports,g=n("6EPt"),I={data:function(){return{fliper:[],timeout:null,timerRate:0}},components:{Avatar:l.a,PieChart:g.a},mounted:function(){var t=this;this.flipInterval=setInterval(function(){t.voteRoster.forEach(function(e,n){null==t.fliper[n]&&t.$set(t.fliper,n,0),t.fliper[n]<e.total&&t.$set(t.fliper,n,t.fliper[n]+Math.ceil((e.total-t.fliper[n])/5)),t.fliper[n]>e.total&&t.$set(t.fliper,n,e.total)}),t.timerRate=1-((new Date).getTime()-t.voteStartTime)/c.g},100)},methods:{optionClass:function(t){if(this.voteInfo.ended)return Math.max.apply(Math,o()(this.voteRoster.map(function(t){return t.total})))!=this.voteRoster[t].total?"animated bounceOut":void 0}},beforeDestroy:function(){clearInterval(this.flipInterval)},computed:i()({},Object(p.e)(["voteInfo","voteRoster","allUsers"]),Object(p.c)(["voteStartTime"]))},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[t.voteStartTime?n("div",{staticClass:"title animated flipInX"},[n("i",{staticClass:"fas fa-dice"}),t._v(" 投票啦!"),n("PieChart",{staticStyle:{margin:"0 0.1em"},attrs:{rate:t.timerRate}})],1):t._e(),t._v(" "),n("div",{staticClass:"option-container"},t._l(t.voteRoster,function(e,r){return n("div",{key:r,staticClass:"option",class:t.optionClass(r)},[n("div",{staticClass:"code MobileFont animated flipInY"},[t._v(t._s(e.option))]),t._v(" "),n("div",{staticClass:"count animated flipInX"},[t._v("("+t._s(t.fliper[r])+"票)")]),t._v(" "),e.uids.length?n("div",{staticClass:"arrow animated flipInY"},[n("i",{staticClass:"fas fa-arrow-up"})]):t._e(),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},t._l(e.uids,function(e,r){return n("Avatar",{key:r,staticClass:"animated flipInY",attrs:{index:t.allUsers[e].avatarSelected,preserved:t.allUsers[e].preserved,large:!0}})}))])}))])])},staticRenderFns:[]};var k={components:{BubbleContainer:w,Vote:n("VU/8")(I,A,!1,function(t){n("eOZh")},"data-v-cef5c132",null).exports},created:function(){this.subscribeData()},computed:i()({},Object(p.e)(["uiMode"])),methods:i()({},Object(p.b)(["subscribeData"]))},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.uiMode.vote?e("Vote",{staticStyle:{opacity:"0.75"}}):this._e(),this._v(" "),e("BubbleContainer",{staticStyle:{opacity:"0.75"}})],1)},staticRenderFns:[]};var U=n("VU/8")(k,F,!1,function(t){n("uGQy")},null,null).exports,S=n("wtEF");r.default.config.productionTip=!1,new r.default({store:S.a,el:"#app",components:{Page:U},template:"<Page/>"})},HyL5:function(t,e,n){"use strict";var r=n("MvGc"),a={props:["user"],computed:{nameStyle:function(){return{"background-color":"#"+(this.user.preserved?r.d:r.a)[this.user.avatarSelected]}}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"name",style:this.nameStyle},[this._v(this._s(this.user.name))])},staticRenderFns:[]};var s=n("VU/8")(a,i,!1,function(t){n("wR67")},"data-v-2acdf705",null);e.a=s.exports},MvGc:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"f",function(){return a}),n.d(e,"d",function(){return i}),n.d(e,"c",function(){return s}),n.d(e,"l",function(){return c}),n.d(e,"h",function(){return u}),n.d(e,"j",function(){return d}),n.d(e,"i",function(){return f}),n.d(e,"g",function(){return l}),n.d(e,"e",function(){return h}),n.d(e,"b",function(){return m}),n.d(e,"k",function(){return p});var r=["FF004D","00E756","FFF1E8","FF77A8","00E756","FF004D","AB5236","FFFF27","FFFF27","00E756","FF77A8","7E2553","008751","29ADFF","1D2B53","FF004D","FF004D","83769C","83769C","7E2553","29ADFF","FFA300","FF004D","AB5236","FFFF27","FFFF27","FF004D","29ADFF","FFA300","FF77A8","29ADFF","FF004D","FF77A8","FFA300","AB5236","AB5236","83769C","83769C","83769C","83769C"],a=r.length,i=["6ACAAD"],s=(new Fingerprint2).getSync().fprint,o=void 0,c=function(t){return o=t},u=function(){return o&&o.getCurrentTime?o.getCurrentTime():-1},d=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},f=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},l=27e3,h=2e4,m=9e3,p={system:{avatarSelected:0,exp:100,name:"系統",preserved:!0}}},eOZh:function(t,e){},luSO:function(t,e){},uGQy:function(t,e){},"uw/i":function(t,e){},wR67:function(t,e){},wtEF:function(t,e,n){"use strict";var r=n("lHA8"),a=n.n(r),i=n("Gu7T"),s=n.n(i),o=n("Dd8w"),c=n.n(o),u=n("d7EF"),d=n.n(u),f=n("W3Iv"),l=n.n(f),h=n("7+uW"),m=n("NYxO"),p=n("gRE1"),v=n.n(p),y=n("bOdI"),x=n.n(y),b=n("BO1k"),w=n.n(b),g=n("Xxa5"),I=n.n(g),A=n("exGp"),k=n.n(A),F=n("fZjL"),U=n.n(F),S=n("2aIq"),C=n.n(S),M=n("MvGc"),_=n("Z8es"),E=n.n(_),T=firebase.firestore();T.settings({timestampsInSnapshots:!0});var R=function(){},O={notify:function(t){C()(t)},subscribeData:function(t){var e,n=this,r=t.state,a=t.commit,i=t.dispatch;T.doc("system/ban").onSnapshot(function(t){t.data().fingerprint.find(function(t){return t==M.c})&&(i("logout"),i("notify",{type:"error",text:"You got banned!"}))}),T.collection("user").onSnapshot(function(t){var e=c()({},M.k);t.forEach(function(t){return e[t.id]=t.data()}),a("setAllUsers",e)}),setInterval(function(){return i("sendHeartbeat")},12e4),T.doc("activity/online").onSnapshot(function(t){return a("setOnlineUids",U()(t.data()))}),T.doc("system/stream").onSnapshot(function(t){r.stream.time!=t.data().time&&(R(),R=T.collection("allChat/"+t.data().time+"/chat-line").onSnapshot(function(t){a("setChatLines",t.docs.map(function(t){return t.data()}).reverse())})),a("setStream",t.data()),i("checkTrophy")}),T.doc("system/info").onSnapshot(function(t){t.data().version&&t.data().version!=localStorage.version&&(localStorage.version=t.data().version,window.location.reload(!0)),a("setSystemInfo",t.data())}),firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL),firebase.auth().onAuthStateChanged((e=k()(I.a.mark(function t(e){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e){t.next=19;break}return a("setMyUid",e.uid),a("updateUiMode",{account:"MY_INFO"}),t.prev=4,t.next=7,T.collection("adminUser").get();case 7:a("setIsAdmin",!0),t.next=17;break;case 10:if(t.prev=10,t.t0=t.catch(4),"permission-denied"!=t.t0.code){t.next=16;break}a("setIsAdmin",!1),t.next=17;break;case 16:throw t.t0;case 17:t.next=22;break;case 19:a("setIsAdmin",!1),a("setMyUid",null),a("updateUiMode",{account:"ANONYMOUS"});case 22:i("sendHeartbeat"),t.next=29;break;case 25:throw t.prev=25,t.t1=t.catch(0),i("notify",{type:"error",text:t.t1.message}),t.t1;case 29:case"end":return t.stop()}},t,n,[[0,25],[4,10]])})),function(t){return e.apply(this,arguments)})),T.doc("system/vote").onSnapshot(function(t){t.data().ended?setTimeout(function(){return a("updateUiMode",{vote:!1})},3e3):a("updateUiMode",{vote:!0}),(!r.voteInfo.time||t.data().time&&r.voteInfo.time.seconds!=t.data().time.seconds)&&a("initVoteRoster",t.data().optionCount),a("setVoteInfo",t.data())}),T.doc("activity/vote").onSnapshot({includeMetadataChanges:!0},function(t){if(!t.metadata.hasPendingWrites){var e=!0,n=!1,r=void 0;try{for(var i,s=w()(l()(t.data()));!(e=(i=s.next()).done);e=!0){var o=i.value,c=d()(o,2),u=c[0],f=c[1];a("addVotes",{uid:u,votes:f})}}catch(t){n=!0,r=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw r}}}}),T.doc("system/quiz").onSnapshot(function(t){t.data().ended?(r.quizInfo.A===r.myAnswer&&i("addExp",12),setTimeout(function(){return a("updateUiMode",{quiz:!1})},3e3)):(a("setMyAnswer",null),a("updateUiMode",{quiz:!0})),(!r.quizInfo.time||t.data().time&&r.quizInfo.time.seconds!=t.data().time.seconds)&&a("initQuizRoster",t.data().OP),a("setQuizInfo",t.data())}),T.doc("activity/quiz").onSnapshot({includeMetadataChanges:!0},function(t){if(!t.metadata.hasPendingWrites){var e=!0,n=!1,r=void 0;try{for(var i,s=w()(l()(t.data()));!(e=(i=s.next()).done);e=!0){var o=i.value,c=d()(o,2),u=c[0],f=c[1];a("addAnswer",{uid:u,answer:f})}}catch(t){n=!0,r=t}finally{try{!e&&s.return&&s.return()}finally{if(n)throw r}}}}),fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBCYPReX74lujmX9tg8AiM-OFGqmKYMZkU&channelId=UCLeQT6hvBgnq_-aKKlcgj1Q&part=snippet,id&order=date&maxResults=20").then(function(t){return t.json()}).then(function(t){return a("setHistoryVideo",t.items.filter(function(t){return t.id.videoId}))}),a("addPreLoadItem","font"),document.fonts.check("1em Zpix")&&document.fonts.check("1em Mobile Font")?a("donePreLoadItem","font"):document.fonts.addEventListener("loadingdone",function(){return a("donePreLoadItem","font")}),setTimeout(function(){return a("donePreLoadAll")},3e3)},saveMyExp:function(t,e){var n=this,r=t.state;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("user").doc(r.myUid).update({exp:e});case 2:case"end":return t.stop()}},t,n)}))()},saveMyAvatar:function(t,e){var n=this,r=t.state;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("user").doc(r.myUid).update({avatarSelected:e});case 2:case"end":return t.stop()}},t,n)}))()},saveMyBestVoteRecord:function(t,e){var n=this,r=t.state;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("user").doc(r.myUid).update({bestVoteRecord:e});case 2:case"end":return t.stop()}},t,n)}))()},saveMyAvatarList:function(t,e){var n=this,r=t.state;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("user").doc(r.myUid).update({avatarList:e});case 2:case"end":return t.stop()}},t,n)}))()},getTrophy:function(t,e){var n=this,r=t.state,a=t.getters,i=t.dispatch;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a.myInfo.trophy.includes(e.id)){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,T.collection("user").doc(r.myUid).update({trophy:[].concat(s()(a.myInfo.trophy),[e.id])});case 4:i("addExp",100),i("notify",{data:{symbol:"trophy"},text:e.text});case 6:case"end":return t.stop()}},t,n)}))()},addMyViewedStream:function(t,e){var n=this,r=t.state,a=t.getters;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.collection("user").doc(r.myUid).update({viewedStream:[].concat(s()(a.myInfo.viewedStream),[e])});case 2:case"end":return t.stop()}},t,n)}))()},addExp:function(t,e){var n=t.getters,r=t.dispatch,a=n.myInfo.exp+e;if(Math.floor(a/100)>Math.floor(n.myInfo.exp/100)){var i=n.randomNextAvatar;null===i?r("notify",{text:"升滿了?! 你真的有認真在看直播嗎?"}):(r("saveMyAvatarList",[].concat(s()(n.myInfo.avatarList),[i])),r("notify",{data:{avatar:i},text:"升級! 獲得新角色!"}))}r("saveMyExp",a)},checkTrophy:function(t){var e=t.getters,n=t.state,r=t.dispatch;e.myInfo.name&&("STARTED"!=n.stream.status||e.myInfo.viewedStream.includes(n.stream.time)||(e.myInfo.trophy.includes("WATCH_FIRST_TIME")?r("notify",{data:{symbol:"trophy"},text:"上來看直播！"}):r("getTrophy",{text:"第一次來看直播！",id:"WATCH_FIRST_TIME"}),r("addExp",100),n.isAdmin||setTimeout(function(){return r("sayHello")},5e3),r("addMyViewedStream",n.stream.time)))},sendHeartbeat:function(t){var e=this,n=t.state,r=t.getters;return k()(I.a.mark(function t(){var a;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=M.c+" "+n.anonymousAvatar,!n.myUid){t.next=9;break}return t.next=4,T.doc("activity/online").update(x()({},n.myUid,firebase.firestore.FieldValue.serverTimestamp()));case 4:return bowser.name!=r.myInfo.browser&&T.collection("user").doc(n.myUid).update({browser:bowser.name}),t.next=7,T.doc("activity/online").update(x()({},a,firebase.firestore.FieldValue.delete()));case 7:t.next=11;break;case 9:return t.next=11,T.doc("activity/online").update(x()({},a,firebase.firestore.FieldValue.serverTimestamp()));case 11:case"end":return t.stop()}},t,e)}))()},loginAdmin:function(t,e){var n=this,r=t.state,a=t.dispatch;return k()(I.a.mark(function t(){var i;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i=v()(r.allUsers).find(function(t){return t.name==e.name}),t.next=4,firebase.auth().signInWithEmailAndPassword(i.email,e.password);case 4:t.next=10;break;case 6:throw t.prev=6,t.t0=t.catch(0),a("notify",{type:"error",text:t.t0.message}),t.t0;case 10:case"end":return t.stop()}},t,n,[[0,6]])}))()},loginVisitor:function(t,e){var n=this,r=t.dispatch,a=t.state;return k()(I.a.mark(function t(){var i,s,o,c,u,f,h,m,p,y,x;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,i=!0,s=!1,o=void 0,t.prev=4,c=w()(l()(M.k));case 6:if(i=(u=c.next()).done){t.next=16;break}if(f=u.value,h=d()(f,2),h[0],m=h[1],e!=m.name){t.next=13;break}throw{code:"auth/wrong-password"};case 13:i=!0,t.next=6;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(4),s=!0,o=t.t0;case 22:t.prev=22,t.prev=23,!i&&c.return&&c.return();case 25:if(t.prev=25,!s){t.next=28;break}throw o;case 28:return t.finish(25);case 29:return t.finish(22);case 30:if(!(p=v()(a.allUsers).find(function(t){return t.name==e}))){t.next=36;break}return t.next=34,firebase.auth().signInWithEmailAndPassword(p.email,"dummy-password");case 34:t.next=43;break;case 36:return y=E.a.generate()+"@mail.net",t.next=39,firebase.auth().createUserWithEmailAndPassword(y,"dummy-password");case 39:return x=t.sent,t.next=42,T.collection("user").doc(x.uid).set({name:e,uid:x.uid,avatarList:[a.anonymousAvatar],avatarSelected:a.anonymousAvatar,exp:0,email:y,viewedStream:[],trophy:[]});case 42:r("checkTrophy");case 43:t.next=54;break;case 45:if(t.prev=45,t.t1=t.catch(0),"auth/wrong-password"!=t.t1.code){t.next=52;break}r("notify",{type:"error",text:"暱稱已被使用!"}),r("promptLogin"),t.next=54;break;case 52:throw r("notify",{type:"error",text:t.t1.message}),t.t1;case 54:case"end":return t.stop()}},t,n,[[0,45],[4,18,22,30],[23,,25,29]])}))()},logout:function(t){var e=this,n=t.state,r=t.dispatch,a=t.commit;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a("generateAnonymousAvatar"),t.next=4,T.doc("activity/online").update(x()({},n.myUid,firebase.firestore.FieldValue.delete()));case 4:return t.next=6,firebase.auth().signOut();case 6:a("updateUiMode",{selectAvatar:!1}),t.next=13;break;case 9:throw t.prev=9,t.t0=t.catch(0),r("notify",{type:"error",text:t.t0.message}),t.t0;case 13:case"end":return t.stop()}},t,e,[[0,9]])}))()},changeAvatar:function(t,e){var n=t.dispatch,r=t.commit;n("saveMyAvatar",e),r("updateUiMode",{selectAvatar:!1})},sendChat:function(t,e){var n=this,r=t.dispatch,a=t.state;return k()(I.a.mark(function t(){var i,s;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=(parseInt("zzz",36)-a.chatLines.length).toString(36),i+=e.text.substr(0,10).replace(/\//g,"／"),s=Object(M.h)(),t.next=5,T.collection("allChat").doc(a.stream.time).collection("chat-line").doc(i).set(c()({},e,{uid:e.uid||a.myUid,fingerprint:M.c,videoTime:Math.floor(s/3600)+":"+Math.floor(s%3600/60)+":"+Math.floor(s%3600%60),id:E.a.generate(),time:firebase.firestore.FieldValue.serverTimestamp()}));case 5:"STARTED"==a.stream.status&&r("addExp",3);case 6:case"end":return t.stop()}},t,n)}))()},sendSticker:function(t,e){var n=this,r=t.dispatch,a=t.state;return k()(I.a.mark(function t(){var i,s;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=(parseInt("zzz",36)-a.chatLines.length).toString(36),s=Object(M.h)(),t.next=4,T.collection("allChat").doc(a.stream.time).collection("chat-line").doc(i).set(c()({},e,{uid:e.uid||a.myUid,fingerprint:M.c,videoTime:Math.floor(s/3600)+":"+Math.floor(s%3600/60)+":"+Math.floor(s%3600%60),id:E.a.generate(),time:firebase.firestore.FieldValue.serverTimestamp()}));case 4:"STARTED"==a.stream.status&&r("addExp",3);case 5:case"end":return t.stop()}},t,n)}))()},promptLogin:function(t){var e=t.commit,n=t.dispatch;e("updateUiMode",{account:"LOGIN"}),n("notify",{type:"warn",text:"輸入暱稱才能繼續喲!",data:{symbol:"exclamation-triangle"}})},promptSelectAvatar:function(t){(0,t.commit)("updateUiMode",{selectAvatar:!0})},saveGameTitle:function(t,e){var n=this,r=t.dispatch;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/stream").update({gameTitle:e});case 2:r("notify",{text:"已更新直播主題"});case 3:case"end":return t.stop()}},t,n)}))()},saveGameUrl:function(t,e){var n=this,r=t.dispatch;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/stream").update({gameUrl:e});case 2:r("notify",{text:"已更新直播主題的連結"});case 3:case"end":return t.stop()}},t,n)}))()},saveGameDescription:function(t,e){var n=this,r=t.dispatch;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/stream").update({gameDescription:e});case 2:r("notify",{text:"已更新直播主題的簡述"});case 3:case"end":return t.stop()}},t,n)}))()},saveVideoUrl:function(t,e){var n=this,r=t.dispatch,a=t.state;return k()(I.a.mark(function t(){var i;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(t){var e=/\/\/youtu.be\/(.*)/.exec(t);return e?V(e[1]):(e=/\/\/www\.youtube\.com\/watch\?v=([^&]+)/.exec(t))?V(e[1]):(e=/\/\/www\.youtube\.com\/embed\/([^?]+)/.exec(t))?V(e[1]):void 0},t.next=3,T.doc("system/stream").set(c()({},a.stream,{videoUrl:i(e)}));case 3:r("notify",{text:"已更新直播影片網址"});case 4:case"end":return t.stop()}},t,n)}))()},startStream:function(t){var e=this;return C()(t),k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/stream").update({status:"STARTED"});case 2:case"end":return t.stop()}},t,e)}))()},streamWillStart:function(t){var e=this;return C()(t),k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/stream").update({time:(new Date).toLocaleString().replace(/\//g,"-"),status:"WILL_START"});case 2:case"end":return t.stop()}},t,e)}))()},stopStream:function(t){var e=this;return C()(t),k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/stream").update({status:"ENDED"});case 2:case"end":return t.stop()}},t,e)}))()},startVote:function(t,e){var n=this;return C()(t),k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/vote").set({time:firebase.firestore.FieldValue.serverTimestamp(),optionCount:e,ended:!1});case 2:return t.next=4,T.doc("activity/vote").set({});case 4:case"end":return t.stop()}},t,n)}))()},sendVote:function(t,e){var n=this,r=t.state,a=t.dispatch;return k()(I.a.mark(function t(){var i;return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.doc("activity/vote").update(x()({},r.myUid,e));case 3:i=e.reduce(function(t,e){return t+e}),a("sendChat",{text:"+"+i+"票！"}),i>20&&a("getTrophy",{text:"快手指！投超過20票！",id:"QUICK_VOTE_FINGER"}),a("addExp",i-3),t.next=15;break;case 9:if(t.prev=9,t.t0=t.catch(0),"permission-denied"!=t.t0.code){t.next=13;break}return t.abrupt("return");case 13:throw a("notify",{type:"error",text:t.t0.message}),t.t0;case 15:case"end":return t.stop()}},t,n,[[0,9]])}))()},sendAnswer:function(t,e){var n=this,r=t.state,a=t.dispatch,i=t.commit;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.doc("activity/quiz").update(x()({},r.myUid,e));case 3:"STARTED"==r.stream.status&&a("sendChat",{text:r.quizInfo.OP[e]+"+1"}),i("setMyAnswer",e),t.next=13;break;case 7:if(t.prev=7,t.t0=t.catch(0),"permission-denied"!=t.t0.code){t.next=11;break}return t.abrupt("return");case 11:throw a("notify",{type:"error",text:t.t0.message}),t.t0;case 13:case"end":return t.stop()}},t,n,[[0,7]])}))()},playHistory:function(t,e){(0,t.commit)("setSelectedVideoUrl",V(e))},sayHello:function(t){var e=["安安ice 安安祥平 平安喜樂","YO~ice~祥平","ice、祥平我來啦！","ㄤㄤice&祥平&大家！","哈囉大家～","哈囉ice&祥平","大家空邦挖～ice和祥平空邦挖～","上來看實況喔耶！","Hi~~~~ice&祥平","(拉椅子、望向ice和祥平)","(悄悄地登入)","(用力地揮手)"];(0,t.dispatch)("sendChat",{text:e[Math.floor(Math.random()*e.length)]})},runTest:function(t){var e=this;t.state,t.dispatch,t.commit;return k()(I.a.mark(function t(){return I.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T.doc("system/quizHistory").set({});case 2:case"end":return t.stop()}},t,e)}))()}};function V(t){return"//www.youtube.com/embed/"+t+"?enablejsapi=1"}h.default.use(m.a);var L=function(){return Math.floor(Math.random()*M.f)};e.a=new m.a.Store({state:{myUid:null,allUsers:{},isAdmin:null,stream:{},systemInfo:null,selectedVideoUrl:null,uiMode:{},anonymousAvatar:L(),chatLines:[],onlineUids:[],historyVideo:null,preLoadedItems:{},voteInfo:{ended:!0},voteRoster:[],quizInfo:{ended:!0},quizRoster:[],myAnswer:null},getters:{myInfo:function(t){return t.allUsers[t.myUid]||{}},randomNextAvatar:function(t,e){if(!e.myInfo.name)return L();var n=new Array(M.f).fill(0).map(function(t,e){return e}).filter(function(t){return e.myInfo.avatarList.indexOf(t)<0});return 0==n.length?null:n[Math.floor(Math.random()*n.length)]},onlineUsers:function(t){return t.onlineUids.map(function(e){var n=e.split(" ");return 1==n.length?t.allUsers[e]:{avatarSelected:n[1]}})},videoUrl:function(t){return"STARTED"==t.stream.status?t.stream.videoUrl:t.selectedVideoUrl},voteStartTime:function(t){return t.voteInfo.time?1e3*t.voteInfo.time.seconds:0},voted:function(t){return!!t.voteRoster.find(function(e,n){return e.uids.indexOf(t.myUid)>=0})},quizStartTime:function(t){return t.quizInfo.time?1e3*t.quizInfo.time.seconds:0},quizAnswered:function(t){return!!t.quizRoster.find(function(e,n){return e.uids.indexOf(t.myUid)>=0})},preLoaded:function(t){return l()(t.preLoadedItems).length>0&&0>l()(t.preLoadedItems).findIndex(function(t){var e=d()(t,2);e[0];return 0==e[1]})}},mutations:{setStream:function(t,e){t.stream=e},setSystemInfo:function(t,e){t.systemInfo=e},setAllUsers:function(t,e){t.allUsers=e},setMyUid:function(t,e){t.myUid=e},updateUiMode:function(t,e){t.uiMode=c()({},t.uiMode,e)},setUiMode:function(t,e){t.uiMode=e},setChatLines:function(t,e){t.chatLines=e},setIsAdmin:function(t,e){t.isAdmin=e},generateAnonymousAvatar:function(t,e){t.anonymousAvatar=L()},setOnlineUids:function(t,e){t.onlineUids=e},setHistoryVideo:function(t,e){t.historyVideo=[].concat(s()(e))},setSelectedVideoUrl:function(t,e){t.selectedVideoUrl=e},addPreLoadItem:function(t,e){h.default.set(t.preLoadedItems,e,!1)},donePreLoadItem:function(t,e){h.default.set(t.preLoadedItems,e,!0)},donePreLoadAll:function(t,e){for(var n in t.preLoadedItems)h.default.set(t.preLoadedItems,n,!0)},setVoteInfo:function(t,e){t.voteInfo=e},setMyAnswer:function(t,e){t.myAnswer=e},initVoteRoster:function(t,e){t.voteRoster=new Array(e).fill(0).map(function(t,e){return{option:String.fromCharCode(65+e),uids:[],total:0}})},addVotes:function(t,e){t.voteInfo.ended||e.votes.forEach(function(n,r){if(0!=n&&t.voteRoster[r]&&!(t.voteRoster[r].uids.indexOf(e.uid)>=0)){var a=c()({},t.voteRoster[r]);a.uids=[].concat(s()(a.uids),[e.uid]),a.total+=n,h.default.set(t.voteRoster,r,a)}})},setQuizInfo:function(t,e){t.quizInfo=e},initQuizRoster:function(t,e){t.quizRoster=e.map(function(t,e){return{option:t,uids:[]}})},addAnswer:function(t,e){t.quizInfo.ended||(t.quizRoster[e.answer].uids=[].concat(s()(new a.a([].concat(s()(t.quizRoster[e.answer].uids),[e.uid])))))}},actions:O})}},["GSwj"]);
//# sourceMappingURL=streamOverlay.6208426019d9715a8ec5.js.map