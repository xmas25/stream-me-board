webpackJsonp([4],{"+qkd":function(e,t){},"0BLA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),a=(n("VN6J"),n("Dd8w")),i=n.n(a),s=n("G4pG"),o=n("HyL5"),c=n("C8CC"),u={props:["text","user","sticker","stickerCategory"],components:{Avatar:s.a,NameBadge:o.a,Sticker:c.a}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"line"},[n("Avatar",{staticClass:"vertical",attrs:{index:e.user.avatarSelected,preserved:e.user.preserved}}),e._v(" "),n("NameBadge",{attrs:{user:e.user}}),e._v(" "),n("span",[e._v(e._s(e.text))]),e._v(" "),isNaN(e.sticker)?e._e():n("Sticker",{staticStyle:{"margin-left":"5px"},attrs:{index:e.sticker,category:e.stickerCategory,size:"100",align:"middle"}})],1)},staticRenderFns:[]};var f=n("VU/8")(u,d,!1,function(e){n("BvZ0")},"data-v-6814230b",null).exports,l={data:function(){return{micOffAlert:!1,errMsg:null,meter:null}},created:function(){var e=this;window.AudioContext=window.AudioContext||window.webkitAudioContext;var t=new AudioContext;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({audio:{mandatory:{googEchoCancellation:"false",googAutoGainControl:"false",googNoiseSuppression:"false",googHighpassFilter:"false"},optional:[]}},function(n){var r=t.createMediaStreamSource(n);e.meter=createAudioMeter(t),r.connect(e.meter)},function(){return e.errMsg="Mic stream generation failed."})},mounted:function(){var e=this,t=(new Date).getTime();setInterval(function(){e.meter&&(e.meter.volume>.001&&(t=(new Date).getTime()),e.micOffAlert=(new Date).getTime()-t>6e4)},1e3)}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mic-warning-bar"},[e.micOffAlert?n("div",[e._v("=====麥克風是不是沒開？=====")]):e._e(),e._v(" "),e.errMsg?n("div",[e._v(e._s(e.errMsg))]):e._e()])},staticRenderFns:[]};var p=n("VU/8")(l,m,!1,function(e){n("+qkd")},null,null).exports,v=n("NYxO"),h={components:{ChatLine:f,MicWarningBar:p},computed:i()({},Object(v.e)(["allUsers","chatLines"])),created:function(){this.subscribeData()},methods:i()({},Object(v.b)(["subscribeData"])),watch:{chatLines:function(){this.$nextTick(function(){return window.scrollTo(0,document.body.scrollHeight)})}}},y={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("MicWarningBar"),e._v(" "),e._l(e.chatLines.slice(-300),function(t,r){return n("ChatLine",{key:r,staticClass:"animated flipInX",attrs:{user:e.allUsers[t.uid],text:t.text,sticker:t.sticker,stickerCategory:t.stickerCategory}})})],2)},staticRenderFns:[]},x=n("VU/8")(h,y,!1,null,null,null).exports,g=n("wtEF");r.default.config.productionTip=!1,new r.default({store:g.a,el:"#app",components:{Page:x},template:"<Page/>"})},BvZ0:function(e,t){},C1Bd:function(e,t){},C8CC:function(e,t,n){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("img",{staticClass:"sticker",style:this.style,attrs:{src:"static/blank.png",align:this.align}})},staticRenderFns:[]};var a=n("VU/8")({props:["index","category","size","align"],computed:{style:function(){var e=1;return this.size&&(e=this.size/100),{"background-image":"url(static/sticker.png)","background-size":200*e+"px "+1900*e+"px","background-position-x":-100*e*this.category+"px","background-position-y":-100*e*this.index+"px",width:this.size+"px",height:this.size+"px"}}}},r,!1,function(e){n("C1Bd")},"data-v-0a9c6724",null);t.a=a.exports},G4pG:function(e,t,n){"use strict";var r={props:["index","large","whoAmI","preserved","align"],computed:{style:function(){var e=void 0,t=void 0,n=this.preserved?"preserved":"character";return this.large?(e=32,t="large"):(e=24,t="small"),{"background-image":"url(static/"+n+"-"+t+".png)","background-position-x":-1*e*(this.index%10)+"px","background-position-y":-1*e*Math.floor(this.index/10)+"px",width:e+"px",height:e+"px",filter:this.whoAmI?"brightness(0%)":"initial"}}}},a={render:function(){var e=this.$createElement;return(this._self._c||e)("img",{staticClass:"avatar",style:this.style,attrs:{src:"static/blank.png",align:this.align}})},staticRenderFns:[]};var i=n("VU/8")(r,a,!1,function(e){n("uw/i")},"data-v-3ea37591",null);t.a=i.exports},HyL5:function(e,t,n){"use strict";var r=n("MvGc"),a={props:["user"],computed:{nameStyle:function(){return{"background-color":"#"+(this.user.preserved?r.d:r.a)[this.user.avatarSelected]}}}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"name",style:this.nameStyle},[this._v(this._s(this.user.name))])},staticRenderFns:[]};var s=n("VU/8")(a,i,!1,function(e){n("wR67")},"data-v-2acdf705",null);t.a=s.exports},MvGc:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"f",function(){return a}),n.d(t,"d",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"l",function(){return c}),n.d(t,"h",function(){return u}),n.d(t,"j",function(){return d}),n.d(t,"i",function(){return f}),n.d(t,"g",function(){return l}),n.d(t,"e",function(){return m}),n.d(t,"b",function(){return p}),n.d(t,"k",function(){return v});var r=["FF004D","00E756","FFF1E8","FF77A8","00E756","FF004D","AB5236","FFFF27","FFFF27","00E756","FF77A8","7E2553","008751","29ADFF","1D2B53","FF004D","FF004D","83769C","83769C","7E2553","29ADFF","FFA300","FF004D","AB5236","FFFF27","FFFF27","FF004D","29ADFF","FFA300","FF77A8","29ADFF","FF004D","FF77A8","FFA300","AB5236","AB5236","83769C","83769C","83769C","83769C"],a=r.length,i=["6ACAAD"],s=(new Fingerprint2).getSync().fprint,o=void 0,c=function(e){return o=e},u=function(){return o&&o.getCurrentTime?o.getCurrentTime():-1},d=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},f=function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},l=27e3,m=2e4,p=9e3,v={system:{avatarSelected:0,exp:100,name:"系統",preserved:!0}}},"uw/i":function(e,t){},wR67:function(e,t){},wtEF:function(e,t,n){"use strict";var r=n("lHA8"),a=n.n(r),i=n("Gu7T"),s=n.n(i),o=n("Dd8w"),c=n.n(o),u=n("d7EF"),d=n.n(u),f=n("W3Iv"),l=n.n(f),m=n("7+uW"),p=n("NYxO"),v=n("gRE1"),h=n.n(v),y=n("bOdI"),x=n.n(y),g=n("BO1k"),w=n.n(g),b=n("Xxa5"),A=n.n(b),k=n("exGp"),F=n.n(k),I=n("fZjL"),U=n.n(I),M=n("2aIq"),S=n.n(M),C=n("MvGc"),T=n("Z8es"),L=n.n(T),E=firebase.firestore();E.settings({timestampsInSnapshots:!0});var z=function(){},R={notify:function(e){S()(e)},subscribeData:function(e){var t,n=this,r=e.state,a=e.commit,i=e.dispatch;E.doc("system/ban").onSnapshot(function(e){e.data().fingerprint.find(function(e){return e==C.c})&&(i("logout"),i("notify",{type:"error",text:"You got banned!"}))}),E.collection("user").onSnapshot(function(e){var t=c()({},C.k);e.forEach(function(e){return t[e.id]=e.data()}),a("setAllUsers",t)}),setInterval(function(){return i("sendHeartbeat")},12e4),E.doc("activity/online").onSnapshot(function(e){return a("setOnlineUids",U()(e.data()))}),E.doc("system/stream").onSnapshot(function(e){r.stream.time!=e.data().time&&(z(),z=E.collection("allChat/"+e.data().time+"/chat-line").onSnapshot(function(e){a("setChatLines",e.docs.map(function(e){return e.data()}).reverse())})),a("setStream",e.data()),i("checkTrophy")}),E.doc("system/info").onSnapshot(function(e){e.data().version&&e.data().version!=localStorage.version&&(localStorage.version=e.data().version,window.location.reload(!0)),a("setSystemInfo",e.data())}),firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL),firebase.auth().onAuthStateChanged((t=F()(A.a.mark(function e(t){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=19;break}return a("setMyUid",t.uid),a("updateUiMode",{account:"MY_INFO"}),e.prev=4,e.next=7,E.collection("adminUser").get();case 7:a("setIsAdmin",!0),e.next=17;break;case 10:if(e.prev=10,e.t0=e.catch(4),"permission-denied"!=e.t0.code){e.next=16;break}a("setIsAdmin",!1),e.next=17;break;case 16:throw e.t0;case 17:e.next=22;break;case 19:a("setIsAdmin",!1),a("setMyUid",null),a("updateUiMode",{account:"ANONYMOUS"});case 22:i("sendHeartbeat"),e.next=29;break;case 25:throw e.prev=25,e.t1=e.catch(0),i("notify",{type:"error",text:e.t1.message}),e.t1;case 29:case"end":return e.stop()}},e,n,[[0,25],[4,10]])})),function(e){return t.apply(this,arguments)})),E.doc("system/vote").onSnapshot(function(e){e.data().ended?setTimeout(function(){return a("updateUiMode",{vote:!1})},3e3):a("updateUiMode",{vote:!0}),(!r.voteInfo.time||e.data().time&&r.voteInfo.time.seconds!=e.data().time.seconds)&&a("initVoteRoster",e.data().optionCount),a("setVoteInfo",e.data())}),E.doc("activity/vote").onSnapshot({includeMetadataChanges:!0},function(e){if(!e.metadata.hasPendingWrites){var t=!0,n=!1,r=void 0;try{for(var i,s=w()(l()(e.data()));!(t=(i=s.next()).done);t=!0){var o=i.value,c=d()(o,2),u=c[0],f=c[1];a("addVotes",{uid:u,votes:f})}}catch(e){n=!0,r=e}finally{try{!t&&s.return&&s.return()}finally{if(n)throw r}}}}),E.doc("system/quiz").onSnapshot(function(e){e.data().ended?(r.quizInfo.A===r.myAnswer&&i("addExp",12),setTimeout(function(){return a("updateUiMode",{quiz:!1})},3e3)):(a("setMyAnswer",null),a("updateUiMode",{quiz:!0})),(!r.quizInfo.time||e.data().time&&r.quizInfo.time.seconds!=e.data().time.seconds)&&a("initQuizRoster",e.data().OP),a("setQuizInfo",e.data())}),E.doc("activity/quiz").onSnapshot({includeMetadataChanges:!0},function(e){if(!e.metadata.hasPendingWrites){var t=!0,n=!1,r=void 0;try{for(var i,s=w()(l()(e.data()));!(t=(i=s.next()).done);t=!0){var o=i.value,c=d()(o,2),u=c[0],f=c[1];a("addAnswer",{uid:u,answer:f})}}catch(e){n=!0,r=e}finally{try{!t&&s.return&&s.return()}finally{if(n)throw r}}}}),fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyBCYPReX74lujmX9tg8AiM-OFGqmKYMZkU&channelId=UCLeQT6hvBgnq_-aKKlcgj1Q&part=snippet,id&order=date&maxResults=20").then(function(e){return e.json()}).then(function(e){return a("setHistoryVideo",e.items.filter(function(e){return e.id.videoId}))}),a("addPreLoadItem","font"),document.fonts.check("1em Zpix")&&document.fonts.check("1em Mobile Font")?a("donePreLoadItem","font"):document.fonts.addEventListener("loadingdone",function(){return a("donePreLoadItem","font")}),setTimeout(function(){return a("donePreLoadAll")},3e3)},saveMyExp:function(e,t){var n=this,r=e.state;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("user").doc(r.myUid).update({exp:t});case 2:case"end":return e.stop()}},e,n)}))()},saveMyAvatar:function(e,t){var n=this,r=e.state;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("user").doc(r.myUid).update({avatarSelected:t});case 2:case"end":return e.stop()}},e,n)}))()},saveMyBestVoteRecord:function(e,t){var n=this,r=e.state;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("user").doc(r.myUid).update({bestVoteRecord:t});case 2:case"end":return e.stop()}},e,n)}))()},saveMyAvatarList:function(e,t){var n=this,r=e.state;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("user").doc(r.myUid).update({avatarList:t});case 2:case"end":return e.stop()}},e,n)}))()},getTrophy:function(e,t){var n=this,r=e.state,a=e.getters,i=e.dispatch;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.myInfo.trophy.includes(t.id)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,E.collection("user").doc(r.myUid).update({trophy:[].concat(s()(a.myInfo.trophy),[t.id])});case 4:i("addExp",100),i("notify",{data:{symbol:"trophy"},text:t.text});case 6:case"end":return e.stop()}},e,n)}))()},addMyViewedStream:function(e,t){var n=this,r=e.state,a=e.getters;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("user").doc(r.myUid).update({viewedStream:[].concat(s()(a.myInfo.viewedStream),[t])});case 2:case"end":return e.stop()}},e,n)}))()},addExp:function(e,t){var n=e.getters,r=e.dispatch,a=n.myInfo.exp+t;if(Math.floor(a/100)>Math.floor(n.myInfo.exp/100)){var i=n.randomNextAvatar;null===i?r("notify",{text:"升滿了?! 你真的有認真在看直播嗎?"}):(r("saveMyAvatarList",[].concat(s()(n.myInfo.avatarList),[i])),r("notify",{data:{avatar:i},text:"升級! 獲得新角色!"}))}r("saveMyExp",a)},checkTrophy:function(e){var t=e.getters,n=e.state,r=e.dispatch;t.myInfo.name&&("STARTED"!=n.stream.status||t.myInfo.viewedStream.includes(n.stream.time)||(t.myInfo.trophy.includes("WATCH_FIRST_TIME")?r("notify",{data:{symbol:"trophy"},text:"上來看直播！"}):r("getTrophy",{text:"第一次來看直播！",id:"WATCH_FIRST_TIME"}),r("addExp",100),n.isAdmin||setTimeout(function(){return r("sayHello")},5e3),r("addMyViewedStream",n.stream.time)))},sendHeartbeat:function(e){var t=this,n=e.state,r=e.getters;return F()(A.a.mark(function e(){var a;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=C.c+" "+n.anonymousAvatar,!n.myUid){e.next=9;break}return e.next=4,E.doc("activity/online").update(x()({},n.myUid,firebase.firestore.FieldValue.serverTimestamp()));case 4:return bowser.name!=r.myInfo.browser&&E.collection("user").doc(n.myUid).update({browser:bowser.name}),e.next=7,E.doc("activity/online").update(x()({},a,firebase.firestore.FieldValue.delete()));case 7:e.next=11;break;case 9:return e.next=11,E.doc("activity/online").update(x()({},a,firebase.firestore.FieldValue.serverTimestamp()));case 11:case"end":return e.stop()}},e,t)}))()},loginAdmin:function(e,t){var n=this,r=e.state,a=e.dispatch;return F()(A.a.mark(function e(){var i;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=h()(r.allUsers).find(function(e){return e.name==t.name}),e.next=4,firebase.auth().signInWithEmailAndPassword(i.email,t.password);case 4:e.next=10;break;case 6:throw e.prev=6,e.t0=e.catch(0),a("notify",{type:"error",text:e.t0.message}),e.t0;case 10:case"end":return e.stop()}},e,n,[[0,6]])}))()},loginVisitor:function(e,t){var n=this,r=e.dispatch,a=e.state;return F()(A.a.mark(function e(){var i,s,o,c,u,f,m,p,v,y,x;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,i=!0,s=!1,o=void 0,e.prev=4,c=w()(l()(C.k));case 6:if(i=(u=c.next()).done){e.next=16;break}if(f=u.value,m=d()(f,2),m[0],p=m[1],t!=p.name){e.next=13;break}throw{code:"auth/wrong-password"};case 13:i=!0,e.next=6;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),s=!0,o=e.t0;case 22:e.prev=22,e.prev=23,!i&&c.return&&c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw o;case 28:return e.finish(25);case 29:return e.finish(22);case 30:if(!(v=h()(a.allUsers).find(function(e){return e.name==t}))){e.next=36;break}return e.next=34,firebase.auth().signInWithEmailAndPassword(v.email,"dummy-password");case 34:e.next=43;break;case 36:return y=L.a.generate()+"@mail.net",e.next=39,firebase.auth().createUserWithEmailAndPassword(y,"dummy-password");case 39:return x=e.sent,e.next=42,E.collection("user").doc(x.uid).set({name:t,uid:x.uid,avatarList:[a.anonymousAvatar],avatarSelected:a.anonymousAvatar,exp:0,email:y,viewedStream:[],trophy:[]});case 42:r("checkTrophy");case 43:e.next=54;break;case 45:if(e.prev=45,e.t1=e.catch(0),"auth/wrong-password"!=e.t1.code){e.next=52;break}r("notify",{type:"error",text:"暱稱已被使用!"}),r("promptLogin"),e.next=54;break;case 52:throw r("notify",{type:"error",text:e.t1.message}),e.t1;case 54:case"end":return e.stop()}},e,n,[[0,45],[4,18,22,30],[23,,25,29]])}))()},logout:function(e){var t=this,n=e.state,r=e.dispatch,a=e.commit;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a("generateAnonymousAvatar"),e.next=4,E.doc("activity/online").update(x()({},n.myUid,firebase.firestore.FieldValue.delete()));case 4:return e.next=6,firebase.auth().signOut();case 6:a("updateUiMode",{selectAvatar:!1}),e.next=13;break;case 9:throw e.prev=9,e.t0=e.catch(0),r("notify",{type:"error",text:e.t0.message}),e.t0;case 13:case"end":return e.stop()}},e,t,[[0,9]])}))()},changeAvatar:function(e,t){var n=e.dispatch,r=e.commit;n("saveMyAvatar",t),r("updateUiMode",{selectAvatar:!1})},sendChat:function(e,t){var n=this,r=e.dispatch,a=e.state;return F()(A.a.mark(function e(){var i,s;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=(parseInt("zzz",36)-a.chatLines.length).toString(36),i+=t.text.substr(0,10).replace(/\//g,"／"),s=Object(C.h)(),e.next=5,E.collection("allChat").doc(a.stream.time).collection("chat-line").doc(i).set(c()({},t,{uid:t.uid||a.myUid,fingerprint:C.c,videoTime:Math.floor(s/3600)+":"+Math.floor(s%3600/60)+":"+Math.floor(s%3600%60),id:L.a.generate(),time:firebase.firestore.FieldValue.serverTimestamp()}));case 5:"STARTED"==a.stream.status&&r("addExp",3);case 6:case"end":return e.stop()}},e,n)}))()},sendSticker:function(e,t){var n=this,r=e.dispatch,a=e.state;return F()(A.a.mark(function e(){var i,s;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=(parseInt("zzz",36)-a.chatLines.length).toString(36),s=Object(C.h)(),e.next=4,E.collection("allChat").doc(a.stream.time).collection("chat-line").doc(i).set(c()({},t,{uid:t.uid||a.myUid,fingerprint:C.c,videoTime:Math.floor(s/3600)+":"+Math.floor(s%3600/60)+":"+Math.floor(s%3600%60),id:L.a.generate(),time:firebase.firestore.FieldValue.serverTimestamp()}));case 4:"STARTED"==a.stream.status&&r("addExp",3);case 5:case"end":return e.stop()}},e,n)}))()},promptLogin:function(e){var t=e.commit,n=e.dispatch;t("updateUiMode",{account:"LOGIN"}),n("notify",{type:"warn",text:"輸入暱稱才能繼續喲!",data:{symbol:"exclamation-triangle"}})},promptSelectAvatar:function(e){(0,e.commit)("updateUiMode",{selectAvatar:!0})},saveGameTitle:function(e,t){var n=this,r=e.dispatch;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/stream").update({gameTitle:t});case 2:r("notify",{text:"已更新直播主題"});case 3:case"end":return e.stop()}},e,n)}))()},saveGameUrl:function(e,t){var n=this,r=e.dispatch;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/stream").update({gameUrl:t});case 2:r("notify",{text:"已更新直播主題的連結"});case 3:case"end":return e.stop()}},e,n)}))()},saveGameDescription:function(e,t){var n=this,r=e.dispatch;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/stream").update({gameDescription:t});case 2:r("notify",{text:"已更新直播主題的簡述"});case 3:case"end":return e.stop()}},e,n)}))()},saveVideoUrl:function(e,t){var n=this,r=e.dispatch,a=e.state;return F()(A.a.mark(function e(){var i;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=function(e){var t=/\/\/youtu.be\/(.*)/.exec(e);return t?_(t[1]):(t=/\/\/www\.youtube\.com\/watch\?v=([^&]+)/.exec(e))?_(t[1]):(t=/\/\/www\.youtube\.com\/embed\/([^?]+)/.exec(e))?_(t[1]):void 0},e.next=3,E.doc("system/stream").set(c()({},a.stream,{videoUrl:i(t)}));case 3:r("notify",{text:"已更新直播影片網址"});case 4:case"end":return e.stop()}},e,n)}))()},startStream:function(e){var t=this;return S()(e),F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/stream").update({status:"STARTED"});case 2:case"end":return e.stop()}},e,t)}))()},streamWillStart:function(e){var t=this;return S()(e),F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/stream").update({time:(new Date).toLocaleString().replace(/\//g,"-"),status:"WILL_START"});case 2:case"end":return e.stop()}},e,t)}))()},stopStream:function(e){var t=this;return S()(e),F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/stream").update({status:"ENDED"});case 2:case"end":return e.stop()}},e,t)}))()},startVote:function(e,t){var n=this;return S()(e),F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/vote").set({time:firebase.firestore.FieldValue.serverTimestamp(),optionCount:t,ended:!1});case 2:return e.next=4,E.doc("activity/vote").set({});case 4:case"end":return e.stop()}},e,n)}))()},sendVote:function(e,t){var n=this,r=e.state,a=e.dispatch;return F()(A.a.mark(function e(){var i;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.doc("activity/vote").update(x()({},r.myUid,t));case 3:i=t.reduce(function(e,t){return e+t}),a("sendChat",{text:"+"+i+"票！"}),i>20&&a("getTrophy",{text:"快手指！投超過20票！",id:"QUICK_VOTE_FINGER"}),a("addExp",i-3),e.next=15;break;case 9:if(e.prev=9,e.t0=e.catch(0),"permission-denied"!=e.t0.code){e.next=13;break}return e.abrupt("return");case 13:throw a("notify",{type:"error",text:e.t0.message}),e.t0;case 15:case"end":return e.stop()}},e,n,[[0,9]])}))()},sendAnswer:function(e,t){var n=this,r=e.state,a=e.dispatch,i=e.commit;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.doc("activity/quiz").update(x()({},r.myUid,t));case 3:"STARTED"==r.stream.status&&a("sendChat",{text:r.quizInfo.OP[t]+"+1"}),i("setMyAnswer",t),e.next=13;break;case 7:if(e.prev=7,e.t0=e.catch(0),"permission-denied"!=e.t0.code){e.next=11;break}return e.abrupt("return");case 11:throw a("notify",{type:"error",text:e.t0.message}),e.t0;case 13:case"end":return e.stop()}},e,n,[[0,7]])}))()},playHistory:function(e,t){(0,e.commit)("setSelectedVideoUrl",_(t))},sayHello:function(e){var t=["安安ice 安安祥平 平安喜樂","YO~ice~祥平","ice、祥平我來啦！","ㄤㄤice&祥平&大家！","哈囉大家～","哈囉ice&祥平","大家空邦挖～ice和祥平空邦挖～","上來看實況喔耶！","Hi~~~~ice&祥平","(拉椅子、望向ice和祥平)","(悄悄地登入)","(用力地揮手)"];(0,e.dispatch)("sendChat",{text:t[Math.floor(Math.random()*t.length)]})},runTest:function(e){var t=this;e.state,e.dispatch,e.commit;return F()(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.doc("system/quizHistory").set({});case 2:case"end":return e.stop()}},e,t)}))()}};function _(e){return"//www.youtube.com/embed/"+e+"?enablejsapi=1"}m.default.use(p.a);var V=function(){return Math.floor(Math.random()*C.f)};t.a=new p.a.Store({state:{myUid:null,allUsers:{},isAdmin:null,stream:{},systemInfo:null,selectedVideoUrl:null,uiMode:{},anonymousAvatar:V(),chatLines:[],onlineUids:[],historyVideo:null,preLoadedItems:{},voteInfo:{ended:!0},voteRoster:[],quizInfo:{ended:!0},quizRoster:[],myAnswer:null},getters:{myInfo:function(e){return e.allUsers[e.myUid]||{}},randomNextAvatar:function(e,t){if(!t.myInfo.name)return V();var n=new Array(C.f).fill(0).map(function(e,t){return t}).filter(function(e){return t.myInfo.avatarList.indexOf(e)<0});return 0==n.length?null:n[Math.floor(Math.random()*n.length)]},onlineUsers:function(e){return e.onlineUids.map(function(t){var n=t.split(" ");return 1==n.length?e.allUsers[t]:{avatarSelected:n[1]}})},videoUrl:function(e){return"STARTED"==e.stream.status?e.stream.videoUrl:e.selectedVideoUrl},voteStartTime:function(e){return e.voteInfo.time?1e3*e.voteInfo.time.seconds:0},voted:function(e){return!!e.voteRoster.find(function(t,n){return t.uids.indexOf(e.myUid)>=0})},quizStartTime:function(e){return e.quizInfo.time?1e3*e.quizInfo.time.seconds:0},quizAnswered:function(e){return!!e.quizRoster.find(function(t,n){return t.uids.indexOf(e.myUid)>=0})},preLoaded:function(e){return l()(e.preLoadedItems).length>0&&0>l()(e.preLoadedItems).findIndex(function(e){var t=d()(e,2);t[0];return 0==t[1]})}},mutations:{setStream:function(e,t){e.stream=t},setSystemInfo:function(e,t){e.systemInfo=t},setAllUsers:function(e,t){e.allUsers=t},setMyUid:function(e,t){e.myUid=t},updateUiMode:function(e,t){e.uiMode=c()({},e.uiMode,t)},setUiMode:function(e,t){e.uiMode=t},setChatLines:function(e,t){e.chatLines=t},setIsAdmin:function(e,t){e.isAdmin=t},generateAnonymousAvatar:function(e,t){e.anonymousAvatar=V()},setOnlineUids:function(e,t){e.onlineUids=t},setHistoryVideo:function(e,t){e.historyVideo=[].concat(s()(t))},setSelectedVideoUrl:function(e,t){e.selectedVideoUrl=t},addPreLoadItem:function(e,t){m.default.set(e.preLoadedItems,t,!1)},donePreLoadItem:function(e,t){m.default.set(e.preLoadedItems,t,!0)},donePreLoadAll:function(e,t){for(var n in e.preLoadedItems)m.default.set(e.preLoadedItems,n,!0)},setVoteInfo:function(e,t){e.voteInfo=t},setMyAnswer:function(e,t){e.myAnswer=t},initVoteRoster:function(e,t){e.voteRoster=new Array(t).fill(0).map(function(e,t){return{option:String.fromCharCode(65+t),uids:[],total:0}})},addVotes:function(e,t){e.voteInfo.ended||t.votes.forEach(function(n,r){if(0!=n&&e.voteRoster[r]&&!(e.voteRoster[r].uids.indexOf(t.uid)>=0)){var a=c()({},e.voteRoster[r]);a.uids=[].concat(s()(a.uids),[t.uid]),a.total+=n,m.default.set(e.voteRoster,r,a)}})},setQuizInfo:function(e,t){e.quizInfo=t},initQuizRoster:function(e,t){e.quizRoster=t.map(function(e,t){return{option:e,uids:[]}})},addAnswer:function(e,t){e.quizInfo.ended||(e.quizRoster[t.answer].uids=[].concat(s()(new a.a([].concat(s()(e.quizRoster[t.answer].uids),[t.uid])))))}},actions:R})}},["0BLA"]);
//# sourceMappingURL=chat.f6624f2da72986b87f58.js.map