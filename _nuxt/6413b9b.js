(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{484:function(t,e,n){},485:function(t,e,n){},489:function(t,e,n){"use strict";n(484)},492:function(t,e,n){var map={"./mlops.jpg":304,"./solid-rules.png":493,"./wor-talk.png":494};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=492},493:function(t,e,n){t.exports=n.p+"img/7448a71.png"},494:function(t,e,n){t.exports=n.p+"img/077706c.png"},495:function(t,e,n){"use strict";n(485)},498:function(t,e,n){var map={"./Kafka.png":499,"./aws.png":319,"./c++.png":309,"./c.png":310,"./car.png":329,"./css.png":500,"./database.png":320,"./docker.png":501,"./elastic.png":316,"./git.png":323,"./html.png":312,"./java.png":307,"./javascript.png":502,"./js.png":306,"./jupyter notebook.png":503,"./kubernetes.png":322,"./matlab.png":308,"./neural.png":315,"./nodejs.png":318,"./python.png":305,"./pytorch.png":314,"./rabbitmq.png":321,"./soft/businessman.png":504,"./soft/goal.png":327,"./soft/leadership.png":328,"./soft/profile.png":505,"./soft/punctual.png":326,"./soft/teamwork.png":325,"./spring.png":317,"./sql.png":311,"./task.png":324,"./tensorflow.png":313,"./vue.png":506};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=498},499:function(t,e,n){t.exports=n.p+"img/0a15ad9.png"},500:function(t,e,n){t.exports=n.p+"img/9bfae50.png"},501:function(t,e,n){t.exports=n.p+"img/c1f953a.png"},502:function(t,e,n){t.exports=n.p+"img/7f1c919.png"},503:function(t,e,n){t.exports=n.p+"img/6d270da.png"},504:function(t,e,n){t.exports=n.p+"img/33b7ef2.png"},505:function(t,e,n){t.exports=n.p+"img/5faf09a.png"},506:function(t,e,n){t.exports=n.p+"img/caab925.png"},507:function(t,e,n){"use strict";n(10);var r={name:"Application",components:{},mixins:[n(60).a],props:["application"],data:function(){return{opened:!1,isPlaying:!1,playerVars:{autoplay:1}}},computed:{topImg:function(){return this.application.resources.filter((function(t){return void 0!==t.img}))[0].img},videoId:function(){var t=this.application.resources.filter((function(t){return void 0!==t.videoId}));if(t.length>0&&void 0!==t[0].videoId)return this.application.resources.filter((function(t){return void 0!==t.videoId}))[0].videoId}},methods:{background:function(t){return"blue"===t?"background: rgba(76, 85, 210, 0.75)":"green"===t?"background: rgba(56, 145, 50, 0.75)":"red"===t?"background: rgba(176, 75, 80, 0.75)":"purple"===t?"background: rgba(155, 75, 155, 0.75)":"gray"===t?"background: rgba(75, 75, 75, 0.75)":"background: rgba(255, 255, 255, 0.75)"},playVideo:function(t){t&&this.$refs[t]&&this.$refs[t][0].player.playVideo()},pauseVideo:function(t){t&&this.$refs[t]&&this.$refs[t][0].player.pauseVideo()},stopVideo:function(t){t&&this.$refs[t]&&this.$refs[t][0].player.stopVideo()},close:function(){this.videoId&&this.pauseVideo(this.videoId),this.opened=!1}}},o=(n(489),n(21)),c=n(36),l=n.n(c),v=n(462),d=n(190),m=n(547),f=n(549),h=n(475),_=n(481),C=n(476),y=n(464),w=n(159),x=n(516),V=n(458),j=n(154),k=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fade-in-fwd"},[n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"mx-auto",class:r?"expand":"",attrs:{tile:"",color:"transparent",elevation:r?12:0},on:{click:function(e){t.opened=!t.opened}}},[n("v-img",{attrs:{src:t.topImg,"aspect-ratio":"1.3"}},[n("v-fade-transition",[n("v-container",{staticClass:"transition-fast-in-fast-out v-card--reveal white--text",staticStyle:{height:"100%"},style:t.background(t.application.color),attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-container",[n("v-row",{staticClass:"overline title font-weight-medium ma-2",attrs:{justify:"center",align:"center"}},[n("h1",{staticClass:"text-center",staticStyle:{"letter-spacing":"0px","line-height":"0.9"}},[t._v("\n                                        "+t._s(t.application.name)+"\n                                    ")])]),t._v(" "),n("v-row",[n("v-divider",{staticClass:"mx-4 my-2",attrs:{color:"white"}})],1),t._v(" "),n("v-row",{staticClass:"overline subtitle-2 font-weight-light ma-2",attrs:{justify:"center",align:"center"}},[n("h4",{staticClass:"text-center",staticStyle:{"line-height":"0.9"}},[t._v(t._s(t.application.area))])])],1)],1)],1)],1)],1)],1)]}}])}),t._v(" "),n("v-dialog",{attrs:{"max-width":t.tabletAndDown()?"100%":"70%",fullscreen:t.tabletAndDown()},on:{"click:outside":function(e){return t.close()}},model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[n("v-card",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{justify:"end",align:"start"}},[n("v-col",{staticClass:"pa-0 pr-3",attrs:{cols:"auto"}},[n("v-btn",{attrs:{elevation:"0",small:"",icon:""},on:{click:function(e){return t.close()}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"px-3",staticStyle:{"margin-top":"-25px!important"},attrs:{justify:"center",align:"start"}},[n("v-col",[n("h2",{staticClass:"text-center"},[t._v(t._s(t.application.name))])])],1),t._v(" "),n("v-row",{class:t.mobile()?"":"pa-2"},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6"}},[n("v-carousel",{attrs:{cycle:!t.isPlaying,height:"400","hide-delimiter-background":"","show-arrows-on-hover":""},on:{change:function(e){return t.pauseVideo(t.videoId)}}},t._l(t.application.resources,(function(e,i){return n("div",{key:i},[n("v-carousel-item",{attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[n("v-card",{attrs:{dark:"",elevation:"0",height:"400"}},[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{align:"center"}},[e.videoId?n("youtube",{ref:e.videoId,refInFor:!0,attrs:{"video-id":e.videoId,"player-vars":t.playerVars,"fit-parent":"",resize:""},on:{playing:function(e){t.isPlaying=!0},paused:function(e){t.isPlaying=!1},ended:function(e){t.isPlaying=!1},click:function(n){return t.playVideo(e.videoId)}}}):n("v-img",{staticStyle:{"margin-top":"-5px"},attrs:{height:"385",src:e.img,contain:"","aspect-ratio":"1"}})],1)],1)],1)],1)],1)})),0)],1),t._v(" "),n("v-col",{staticClass:"py-0 px-3",class:t.tabletAndDown()?"pt-3 px-0":"pr-2 pl-4",attrs:{cols:"12",md:"6"}},[n("h3",{staticClass:"mb-1"},[t._v("Project info")]),t._v(" "),n("p",{staticClass:"pb-2"},[t._v(t._s(t.application.description))]),t._v(" "),n("h3",{staticClass:"mt-4 mb-1"},[t._v("Project details")]),t._v(" "),n("p",{staticClass:"py-2 mb-0"},[n("b",[t._v("Area:")]),t._v(" "+t._s(t.application.area))]),t._v(" "),n("v-divider"),t._v(" "),n("p",{staticClass:"py-2 mb-0"},[n("b",[t._v("Technologies:")]),t._v(" "+t._s(t.application.technologies))]),t._v(" "),n("v-divider"),t._v(" "),n("p",{staticClass:"py-2 mb-0"},[n("b",[t._v("Group:")]),t._v(" "+t._s(t.application.group))]),t._v(" "),n("v-divider"),t._v(" "),n("p",{staticClass:"py-2 mb-0"},[n("b",[t._v("Date:")]),t._v(" "+t._s(t.application.date))])],1)],1)],1)],1)],1)],1)}),[],!1,null,"153f45b7",null);e.a=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCarousel:m.a,VCarouselItem:f.a,VCol:h.a,VContainer:_.a,VDialog:C.a,VDivider:y.a,VFadeTransition:w.c,VHover:x.a,VIcon:V.a,VImg:j.a,VRow:k.a})},508:function(t,e,n){"use strict";var r={name:"Article",components:{},props:["article"],data:function(){return{}},computed:{img:function(){return n(492)("./".concat(this.article.img))}},methods:{navigate:function(t){var path={name:"articles-id",params:{id:t}};this.$router.push(path)},formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}},o=(n(495),n(21)),c=n(36),l=n.n(c),v=n(190),d=n(118),m=n(475),f=n(481),h=n(516),_=n(154),C=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"flip-in-ver-right",class:r?"expand":"",attrs:{"max-width":r?360:350,height:r?510:500,elevation:r?20:8}},[n("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[n("v-row",{staticClass:"pb-2"},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:t.img}})],1)],1),t._v(" "),n("v-row",{staticClass:"pb-2"},[n("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[t.article.tags?n("v-card-subtitle",{staticClass:"pl-4 pr-0 py-0 secondary--text"},[t._v(t._s(t.article.tags.map((function(t){return"#"+t})).join(", "))+"\n                        ")]):t._e()],1),t._v(" "),n("v-col",{staticClass:"pa-0"}),t._v(" "),n("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[n("v-card-subtitle",{staticClass:"px-4 py-0"},[t._v(t._s(t.formatDate(t.article.createdAt)))])],1)],1),t._v(" "),n("v-row",{staticClass:"px-2 py-2"},[n("v-card-title",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.title)}})],1),t._v(" "),n("v-row",{staticClass:"px-2 py-2"},[n("v-card-text",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.description)}})],1)],1)],1)]}}])})}),[],!1,null,"d395f0a6",null);e.a=component.exports;l()(component,{VCard:v.a,VCardSubtitle:d.a,VCardText:d.b,VCardTitle:d.c,VCol:m.a,VContainer:f.a,VHover:h.a,VImg:_.a,VRow:C.a})},509:function(t,e,n){"use strict";var r={name:"Skill",components:{},props:["skill"],data:function(){return{colors:{"DEEP ORANGE":"#FF5722",ORANGE:"#FF9800",LIME:"#CDDC39","LIGHT GREEN":"#8BC34A",GREEN:"#4CAF50"}}},computed:{},methods:{getColor:function(t){return t>=0&&t<20?this.colors["DEEP ORANGE"]:t>=20&&t<40?this.colors.ORANGE:t>=40&&t<60?this.colors.LIME:t>=60&&t<80?this.colors["LIGHT GREEN"]:this.colors.GREEN}}},o=n(21),c=n(36),l=n.n(c),v=n(475),d=n(154),m=n(191),f=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"auto"}},[n("v-img",{attrs:{"max-height":"50","max-width":"50",src:t.skill.avatar}})],1),t._v(" "),n("v-col",{staticClass:"py-0 pl-3 pr-0"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"pb-0",domProps:{innerHTML:t._s(t.skill.title)}}),t._v(" "),t.skill.value?n("v-col",{staticClass:"pb-0"},[n("v-progress-linear",{attrs:{rounded:"",value:t.skill.value,color:t.getColor(t.skill.value),height:"10"}})],1):t._e()],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pt-1",domProps:{innerHTML:t._s(t.skill.subtitle)}})],1)],1)],1)}),[],!1,null,"3e20e66b",null);e.a=component.exports;l()(component,{VCol:v.a,VImg:d.a,VProgressLinear:m.a,VRow:f.a})},510:function(t,e,n){"use strict";var r={name:"Experience",components:{},props:["experience","forceDate"],mixins:[n(60).a],data:function(){return{}},computed:{},methods:{}},o=n(21),c=n(36),l=n.n(c),v=n(190),d=n(118),m=n(475),f=n(481),h=n(458),_=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.experience.color,dark:""}},[n("v-card-title",{staticClass:"py-2 px-4"},[n("v-container",{staticClass:"py-0",attrs:{fluid:""}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[n("v-row",{staticClass:"pa-0"},[n("p",{staticClass:"ma-0 title"},[t._v("\n                        "+t._s(t.experience.position)+"\n                    ")])]),t._v(" "),n("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[n("span",{staticClass:"ma-0 subtitle-2 mr-2"},[t._v(t._s(t.experience.company))]),t._v(" "),n("span",{staticClass:"mr-2"},[t._v("·")]),t._v(" "),n("span",{staticClass:"mt-1 overline",staticStyle:{"line-height":"100%"}},[t._v(t._s(t.experience.location))])])],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t.tabletAndDown()||t.forceDate?n("v-row",{staticClass:"pt-0"},[n("v-icon",{staticClass:"mx-3",attrs:{color:"white"}},[t._v("\n                mdi-clock\n            ")]),t._v(" "),n("p",{staticClass:"ma-0 py-2 outline"},[t._v("\n                "+t._s(t.experience.date)+"\n            ")])],1):t._e(),t._v(" "),n("p",{staticClass:"py-2 ma-0"},[t._v("\n            "+t._s(t.experience.text)+"\n        ")])],1)],1)}),[],!1,null,"77b492b3",null);e.a=component.exports;l()(component,{VCard:v.a,VCardText:d.b,VCardTitle:d.c,VCol:m.a,VContainer:f.a,VIcon:h.a,VRow:_.a})},511:function(t,e,n){"use strict";var r={name:"Certification",components:{},props:["certification"],data:function(){return{}},computed:{}},o=n(21),c=n(36),l=n.n(c),v=n(548),d=n(475),m=n(458),f=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-alert",{staticClass:"py-2 px-4 mb-1",attrs:{text:"",width:"100%",border:"bottom",color:t.certification.color}},[n("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-icon",{attrs:{large:"",color:t.certification.color}},[t._v(t._s(t.certification.icon))])],1),t._v(" "),n("v-col",{staticClass:"pa-2 pt-1"},[n("h3",{staticClass:"headline"},[t._v("\n                "+t._s(t.certification.title)+"\n            ")]),t._v(" "),n("v-row",{staticClass:"py-0",attrs:{align:"center"}},[n("v-col",{staticClass:"py-0 pr-2",attrs:{cols:"auto"}},[n("h5",[t._v(t._s(t.certification.id))])]),t._v(" "),t.certification.credential?n("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[t._v("\n                    ·\n                ")]):t._e(),t._v(" "),t.certification.credential?n("v-col",{staticClass:"py-0 pl-2",attrs:{cols:"auto"}},[n("span",{staticClass:"subtitle-2"},[n("a",{attrs:{href:t.certification.credential}},[t._v("View credential")])])]):t._e()],1),t._v(" "),n("div",[t._v(t._s(t.certification.date)+" ")])],1)],1)],1)}),[],!1,null,"33b4958c",null);e.a=component.exports;l()(component,{VAlert:v.a,VCol:d.a,VIcon:m.a,VRow:f.a})},512:function(t,e,n){"use strict";var r={name:"Publication",components:{},props:["publication"],data:function(){return{}},computed:{}},o=n(21),c=n(36),l=n.n(c),v=n(462),d=n(190),m=n(118),f=n(475),h=n(481),_=n(458),C=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:"",elevation:"0",width:"100%"}},[n("v-container",{staticClass:"py-0",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center","no-gutters":""}},[n("v-col",[n("v-card-title",{staticClass:"py-2"},[t._v("\n                "+t._s(t.publication.title)+"\n            ")])],1),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"mr-3",attrs:{icon:"",target:"_blank",href:t.publication.href}},[n("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"py-1"},[n("b",[t._v(t._s(t.publication.date))]),t._v(" · "+t._s(t.publication.location)+"\n    ")]),t._v(" "),n("v-card-text",{staticClass:"pt-0 pb-1"},[t._v("\n        "+t._s(t.publication.authors)+"\n    ")])],1)}),[],!1,null,"635ebd50",null);e.a=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardText:m.b,VCardTitle:m.c,VCol:f.a,VContainer:h.a,VIcon:_.a,VRow:C.a})},513:function(t,e,n){"use strict";var r={name:"CVBtnDownload",components:{},props:["isFab"],data:function(){return{fabShow:!1,href:"docs/cv_eng.pdf"}},computed:{},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fabShow=e>60}}}},o=n(21),c=n(36),l=n.n(c),v=n(462),d=n(458),m=n(497),f=n.n(m),h=n(225),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:!t.isFab||t.isFab&&t.fabShow,expression:"!isFab || (isFab && fabShow)"}],staticClass:"scale-in-center",staticStyle:{"z-index":"2"},attrs:{href:t.href,elevation:"0",color:t.isFab?"secondary":"primary",outlined:!t.isFab,rounded:"",download:"",fixed:t.isFab,bottom:t.isFab,right:t.isFab}},[t._v("\n    Download CV\n    "),n("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("\n        mdi-download\n    ")])],1)}),[],!1,null,"a9ab0d98",null);e.a=component.exports;l()(component,{VBtn:v.a,VIcon:d.a}),f()(component,{Scroll:h.b})},514:function(t,e,n){"use strict";var r={name:"Project",components:{},props:["project"],data:function(){return{}},computed:{},methods:{}},o=n(21),c=n(36),l=n.n(c),v=n(459),d=n(190),m=n(475),f=n(481),h=n(154),_=n(460),C=n(457),y=n(198),w=n(474),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"slide-in-bottom",attrs:{outlined:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-container",[r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-row",[r("v-list",[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("h2",{staticClass:"mb-1"},[t._v(t._s(t.project.name))]),t._v(" "),r("v-list-item-subtitle",[r("v-row",{staticClass:"pl-3",attrs:{align:"center"}},[t.project.license?r("span",{staticClass:"overline my-1"},[t._v(t._s(t.project.license.name))]):t._e(),t._v(" "),t.project.license?r("span",{staticClass:"mx-2"},[t._v("|")]):t._e(),t._v(" "),r("span",{staticClass:"my-1 overline"},[t._v("Language")]),t._v(" "),null!=t.project.language?r("v-avatar",{staticClass:"ml-3",attrs:{size:"20",tile:""}},[r("v-img",{attrs:{src:n(498)("./"+t.project.language.toLowerCase()+".png")}})],1):t._e()],1)],1),t._v(" "),r("v-list-item-subtitle",[r("span",[t._v(t._s(t.project.description))])]),t._v(" "),r("v-list-item-subtitle",{staticClass:"mt-2"},[r("a",{attrs:{href:t.project.html_url,target:"_blank"}},[t._v("Go to the project")])])],1)],1)],1)],1)],1)],1)],1)],1)])}),[],!1,null,"654fd8fc",null);e.a=component.exports;l()(component,{VAvatar:v.a,VCard:d.a,VCol:m.a,VContainer:f.a,VImg:h.a,VList:_.a,VListItem:C.a,VListItemContent:y.a,VListItemSubtitle:y.b,VRow:w.a})},519:function(t,e,n){},539:function(t,e,n){"use strict";n(519)},556:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(10),n(11),n(6),n(12);var r=n(1),o=(n(37),n(68)),c=n(60),l=n(291),v=n(508),d=n(514),m=n(507),f=n(510),h=n(509),_=n(511),C=n(512),y={name:"PageNavigator",components:{},mixins:[c.a],props:["text","icon","path"],data:function(){return{}},computed:{},methods:{}},w=n(21),x=n(36),V=n.n(x),j=n(462),k=n(481),I=n(458),O=n(474),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"py-0",attrs:{fluid:"","fill-height":""}},[n("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[n("v-btn",{staticClass:"pa-0",attrs:{height:"100%",text:"",large:"",block:"",color:"primary"},on:{click:function(e){return t.$router.push(t.path)}}},[t._v("\n           "+t._s(t.text)+"\n            "),n("v-icon",{staticClass:"ml-2",attrs:{large:""}},[t._v("\n               "+t._s(t.icon)+"\n            ")])],1)],1)],1)}),[],!1,null,"75da0c39",null),P=component.exports;V()(component,{VBtn:j.a,VContainer:k.a,VIcon:I.a,VRow:O.a});var E=n(513);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={name:"Home",layout:"AppStructure",mixins:[c.a],components:{CVBtnDownload:E.a,PageNavigator:P,Experience:f.a,Project:d.a,Application:m.a,UserIntro:l.a,Article:v.a,Certification:_.a,Publication:C.a,Skill:h.a},props:{},data:function(){return{options:{duration:700,offset:0,easing:"easeInOutCubic"},selector:"#footer"}},meta:{showAppToolbar:!1,showAppToolbarImage:!1,showAppNavigationDrawer:!1,showAppFooter:!0,showContentHeader:!0},computed:A(A(A({},Object(o.b)("AppState",{isDark:"isDark"})),Object(o.b)("DataState",{articles:"getBlogArticles",projects:"getGithubProjects",applications:"getApplications",skills:"getSkills",experiences:"getExperiences",certifications:"getCertifications",publications:"getPublications"})),{},{visibleExperiences:function(){return this.experiences?this.experiences.slice(0,1):this.experiences},visibleCertifications:function(){return this.certifications?this.certifications.slice(0,1):this.certifications},visibleSkills:function(){return this.skills?this.skills["Programming Languages"].slice(0,2):this.skills},visiblePublications:function(){return this.publications?this.publications.slice(0,2):this.publications},visibleProjects:function(){return this.projects?this.projects.slice(0,5):this.projects},visibleApplications:function(){return this.applications?this.applications.slice(0,5):this.applications},visibleArticles:function(){return this.articles&&console.log("OOOOH",this.articles),this.articles.slice(0,2)}}),methods:{}},L=(n(539),n(548)),N=n(190),F=n(475),T=n(464),$=Object(w.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"py-4"},[n("blockquote",{class:t.isDark?"dark-theme":"light-theme"},[t._v("\n            Enthusiastic Machine Learning Engineer with excellent analytical, design and team working skills,\n            focused on Natural Language Processing topics.\n            As a team leader on several projects, I have always demonstrated excellent leadership and coordination\n            skills.\n            I consider myself attentive to details and precise in meeting deadlines.\n            Looking for stimulating activities related to artificial intelligence that allow me to expand my current\n            knowledge and soft skills.\n        ")])]),t._v(" "),n("v-row",{staticClass:"pt-4",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-row",{staticClass:"px-2 py-0",attrs:{align:"center"}},[n("v-col",{staticClass:"py-2",attrs:{cols:"auto"}},[n("span",[t._v("Name:")])]),t._v(" "),n("v-col",{staticClass:"py-2"},[n("h3",[t._v("Gioele Crispo")])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"px-2 py-1",attrs:{align:"center"}},[n("v-col",{staticClass:"py-2",attrs:{cols:"auto"}},[n("span",[t._v("From:")])]),t._v(" "),n("v-col",{staticClass:"py-2"},[n("h3",[t._v("Salerno, Italy")])])],1),t._v(" "),n("v-divider"),t._v(" "),n("v-row",{staticClass:"px-2 py-1",attrs:{align:"center"}},[n("v-col",{staticClass:"py-2",attrs:{cols:"auto"}},[n("span",[t._v("Birthdate:")])]),t._v(" "),n("v-col",{staticClass:"py-2"},[n("h3",[t._v("19 Jun 1993")])])],1),t._v(" "),n("v-row",{staticClass:"px-2 py-5",attrs:{align:"center",justify:"center"}},[n("CVBtnDownload",{attrs:{isFab:!1}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-alert",{attrs:{color:"primary",dark:"",border:"left",prominent:""}},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"ml-3"},[n("h2",[t._v("Contacts")])]),t._v(" "),n("v-col",{staticClass:"mx-3",attrs:{cols:"auto"}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-at")])],1)],1),t._v(" "),n("v-row",{staticClass:"px-3",attrs:{align:"center"}},[n("v-col",{staticClass:"py-0"},[t._v("\n                        I am open to collaborations on interesting projects and ideas regarding artificial intelligence\n                        and related.\n                        If you want to propose a work or exchange an opinion do not hesitate to contact me.\n                    ")])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("div",{staticClass:"mt-5"},[n("v-btn",{attrs:{outlined:"",large:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo(t.selector,t.options)}}},[t._v("\n                            Go to my contacts\n                            "),n("v-icon",{staticClass:"ml-2"},[t._v("mdi-chevron-down")])],1)],1)])],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-10 pt-12 pb-3",attrs:{justify:"center"}},[n("h1",[t._v("Works and Experiences")])]),t._v(" "),n("v-row",[t._v("\n        My career is mainly focused on artificial intelligence projects.\n        During my employment at NTT Data I have explored various architectural solutions (streaming, real time,\n        batch, and others) based on microservices for complex artificial intelligence problems.\n        I also achieved the AWS Machine Learning Specialty certification, with which I also projected the solutions\n        into the AWS domain.\n    ")]),t._v(" "),n("v-row",{staticClass:"py-3",attrs:{align:"start"}},[n("v-col",{class:t.mobile()?"pa-0 py-1":"pl-0 pr-2 py-1",attrs:{cols:"12",sm:"6"}},[n("h3",{staticClass:"pt-3 py-1"},[t._v("Current job")]),t._v(" "),t._l(t.visibleExperiences,(function(t){return n("div",[n("Experience",{attrs:{experience:t,forceDate:!0}})],1)})),t._v(" "),n("h3",{staticClass:"pt-3 py-1"},[t._v("Certifications")]),t._v(" "),t._l(t.visibleCertifications,(function(t){return n("div",[n("Certification",{attrs:{certification:t}})],1)}))],2),t._v(" "),n("v-col",{class:t.mobile()?"pa-0 py-1":"pr-0 pl-2 py-1",attrs:{cols:"12",sm:"6"}},[n("h3",{staticClass:"pt-3 py-1"},[t._v("Publications")]),t._v(" "),t._l(t.visiblePublications,(function(t){return n("div",{staticClass:"pb-1"},[n("Publication",{attrs:{publication:t}})],1)}))],2),t._v(" "),n("v-col",{class:t.mobile()?"pa-0 py-1":"px-0 py-1",attrs:{cols:"12"}},[n("v-card",{staticClass:"pa-0",attrs:{height:"100px",elevation:"0",color:"transparent"}},[n("PageNavigator",{attrs:{text:"View my CV",icon:"mdi-timeline-text",path:"/cv"}})],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-10 pt-12 pb-3",attrs:{justify:"center"}},[n("h1",[t._v("Applications")])]),t._v(" "),n("v-row",[t._v("\n        I have built many systems, mainly focused on artificial intelligence and machine learning.\n    ")]),t._v(" "),n("v-row",{staticClass:"py-3 px-0"},[t._l(t.visibleApplications,(function(t){return n("v-col",{key:t.id,staticClass:"pa-0",attrs:{cols:"12",sm:"6",md:"4"}},[n("Application",{attrs:{application:t}})],1)})),t._v(" "),n("v-col",{class:t.mobile()?"pb-2 px-0":"pa-0",attrs:{cols:"12",sm:"6",md:"4"}},[n("v-card",{staticClass:"pa-0",attrs:{height:t.mobile()?"100px":"100%",elevation:"0",color:"transparent"}},[n("PageNavigator",{attrs:{text:"Discover all",icon:"mdi-briefcase",path:"/applications"}})],1)],1)],2),t._v(" "),n("v-row",{staticClass:"mt-10 pt-12 pb-3",attrs:{justify:"center"}},[n("h1",[t._v("Projects")])]),t._v(" "),n("v-row",[t._v('\n        I use Github a lot to save my efforts, make them available for me and others. I like a lot facing with\n        challenges and solve tricky problems.\n        In fact, my first development in Python was "dictipy", a library that overcomes the limitations of\n        json.dumps and __dict__ methods.\n    ')]),t._v(" "),n("v-row",{staticClass:"py-4"},[t._l(t.visibleProjects,(function(e){return n("v-col",{key:e.id,class:t.mobile()?"pa-0 pb-2":"pa-0 pr-3 pb-2",attrs:{cols:"12",sm:"6",md:"4"}},[n("Project",{attrs:{project:e}})],1)})),t._v(" "),n("v-col",{class:t.mobile()?"pa-0 pb-2":"pa-0 pr-3 pb-2",attrs:{cols:"12",sm:"6",md:"4"}},[n("v-card",{staticClass:"pa-0",attrs:{height:t.mobile()?"100px":"100%",elevation:"0",color:"transparent"}},[n("PageNavigator",{attrs:{text:"Explore all my projects",icon:"mdi-github-circle",path:"/projects"}})],1)],1)],2),t._v(" "),n("v-row",{staticClass:"mt-10 pt-12 pb-3",attrs:{justify:"center"}},[n("h1",{staticClass:"decorated-title"},[t._v("Latest Post")])]),t._v(" "),n("v-row",[t._v("\n        Since childhood, I've always been very curious and eager to perfect my things.\n        From here my articles are born, which are related to projects or personal insights to improve my skills.\n    ")]),t._v(" "),n("v-row",{staticClass:"pt-3 pb-12"},[t._l(t.visibleArticles,(function(article){return n("v-col",{key:article.id,staticClass:"pa-2",attrs:{cols:"12",sm:"6",md:"4"}},[n("Article",{attrs:{article:article}})],1)})),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[n("v-card",{staticClass:"pa-0",attrs:{height:t.tabletAndDown()?"100px":"100%",elevation:"0",color:"transparent"}},[n("PageNavigator",{attrs:{text:"View all my posts",icon:"mdi-file-document-outline",path:"/blog"}})],1)],1)],2)],1)}),[],!1,null,"eed289a6",null);e.default=$.exports;V()($,{VAlert:L.a,VBtn:j.a,VCard:N.a,VCol:F.a,VContainer:k.a,VDivider:T.a,VIcon:I.a,VRow:O.a})}}]);