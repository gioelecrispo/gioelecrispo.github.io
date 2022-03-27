(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{581:function(t,e,r){"use strict";e.a=function(title,t,e,image){return{title:title,meta:[{hid:"og:title",property:"og:title",content:title+" - Gioele Crispo"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+e},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title+" - Gioele Crispo"},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}]}}},583:function(t,e,r){},585:function(t,e,r){},586:function(t,e,r){},589:function(t,e,r){"use strict";r(583)},593:function(t,e,r){var map={"./aws.png":366,"./c++.png":356,"./c.png":357,"./car.png":376,"./css.png":594,"./database.png":367,"./docker.png":595,"./elastic.png":363,"./git.png":370,"./html.png":359,"./java.png":354,"./javascript.png":353,"./jupyter notebook.png":596,"./kubernetes.png":369,"./matlab.png":355,"./neural.png":362,"./nodejs.png":365,"./python.png":352,"./pytorch.png":361,"./rabbitmq.png":368,"./soft/businessman.png":597,"./soft/goal.png":374,"./soft/leadership.png":375,"./soft/profile.png":598,"./soft/punctual.png":373,"./soft/teamwork.png":372,"./spring.png":364,"./sql.png":358,"./task.png":371,"./tensorflow.png":360,"./vue.png":599};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=593},594:function(t,e,r){t.exports=r.p+"img/843e631.png"},595:function(t,e,r){t.exports=r.p+"img/c1f953a.png"},596:function(t,e,r){t.exports=r.p+"img/6d270da.png"},597:function(t,e,r){t.exports=r.p+"img/33b7ef2.png"},598:function(t,e,r){t.exports=r.p+"img/5faf09a.png"},599:function(t,e,r){t.exports=r.p+"img/0a03702.png"},600:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return c}));var n=r(27),o=(r(89),function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e({url:"https://api.github.com/users/gioelecrispo",method:"get"}).then((function(t){return t.data})).catch((function(t){console.error("setGithubUserInfo - Too Much Requests",t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e({url:"https://api.github.com/users/gioelecrispo/repos",method:"get"}).then((function(t){return t.data})).catch((function(t){console.error("setGithubUserInfo - Too Much Requests",t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},601:function(t,e,r){"use strict";r(585)},604:function(t,e,r){"use strict";r(586)},608:function(t,e,r){"use strict";r(42);var n={name:"Certification",components:{},props:["certification"],mixins:[{data:function(){return{}},computed:{},methods:{hexToRgb:function(t){var e=parseInt(t,16);return(e>>16&255)+","+(e>>8&255)+","+(255&e)}}}],data:function(){return{}},computed:{style:function(){var t=this.hexToRgb(this.certification.color.slice(1));return this.$vuetify.theme.isDark&&(t="0,0,0"),{"background-image":"linear-gradient(to right, rgba("+t+",0.99) 30%, rgba("+t+",0)), url("+this.certification.imageUrl+")!important"}}},methods:{}},o=(r(604),r(21)),c=r(28),l=r.n(c),v=r(671),d=r(571),h=r(570),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-alert",{staticClass:"py-2 px-4 mb-1 imageBackground",style:t.style,attrs:{text:"",width:"100%",border:"bottom",color:t.certification.color}},[r("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[r("v-col",{staticClass:"pa-2 pt-1"},[r("h3",{staticClass:"headline white--text"},[t._v("\n                "+t._s(t.certification.title)+"\n            ")]),t._v(" "),r("v-row",{staticClass:"py-0",attrs:{align:"center"}},[r("v-col",{staticClass:"py-0 pr-2",attrs:{cols:"auto"}},[r("h5",{staticClass:"white--text"},[t._v(t._s(t.certification.id))])]),t._v(" "),t.certification.credential?r("v-col",{staticClass:"pa-0 white--text",attrs:{cols:"auto"}},[t._v("\n                    ·\n                ")]):t._e(),t._v(" "),t.certification.credential?r("v-col",{staticClass:"py-0 pl-2",attrs:{cols:"auto"}},[r("span",{staticClass:"subtitle-2"},[r("a",{staticClass:"white--text",attrs:{href:t.certification.credential}},[t._v("View credential")])])]):t._e()],1),t._v(" "),r("div",{staticClass:"white--text"},[t._v(t._s(t.certification.date)+" ")])],1)],1)],1)}),[],!1,null,"5433f5c9",null);e.a=component.exports;l()(component,{VAlert:v.a,VCol:d.a,VRow:h.a})},609:function(t,e,r){"use strict";var n={name:"Article",components:{},props:["article"],data:function(){return{}},computed:{img:function(){return r(349)("./".concat(this.article.img))}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}},o=(r(589),r(21)),c=r(28),l=r.n(c),v=r(229),d=r(53),h=r(571),m=r(579),f=r(618),_=r(192),y=r(570),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"flip-in-ver-right",class:n?"expand":"",attrs:{height:n?510:500,elevation:n?20:8,nuxt:"",to:"/blog/"+t.article.slug}},[r("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[r("v-row",{staticClass:"pb-2"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[r("v-img",{staticClass:"white--text",attrs:{height:"200px",src:t.img}})],1)],1),t._v(" "),r("v-row",{staticClass:"pb-2"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[t.article.tags?r("v-card-subtitle",{staticClass:"pl-4 pr-0 py-0 secondary--text"},[t._v(t._s(t.article.tags.map((function(t){return"#"+t})).join(", "))+"\n                        ")]):t._e()],1),t._v(" "),r("v-col",{staticClass:"pa-0"}),t._v(" "),r("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[r("v-card-subtitle",{staticClass:"px-4 py-0"},[t._v(t._s(t.formatDate(t.article.createdAt)))])],1)],1),t._v(" "),r("v-row",{staticClass:"px-2 py-2"},[r("v-card-title",{staticClass:"px-4 py-2",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.article.title)}})],1),t._v(" "),r("v-row",{staticClass:"px-2 py-2"},[r("v-card-text",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.description)}})],1)],1)],1)]}}])})}),[],!1,null,"792e5d76",null);e.a=component.exports;l()(component,{VCard:v.a,VCardSubtitle:d.a,VCardText:d.b,VCardTitle:d.c,VCol:h.a,VContainer:m.a,VHover:f.a,VImg:_.a,VRow:y.a})},610:function(t,e,r){"use strict";var n={name:"GithubProject",components:{},props:["project"],data:function(){return{}},computed:{},methods:{}},o=r(21),c=r(28),l=r.n(c),v=r(554),d=r(229),h=r(571),m=r(579),f=r(192),_=r(555),y=r(553),C=r(238),w=r(570),x=r(677),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"slide-in-bottom",attrs:{outlined:""}},[t.project?n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("v-container",[n("v-row",[n("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[n("v-row",[n("v-list",[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("h2",{staticClass:"mb-1"},[t._v(t._s(t.project.name))]),t._v(" "),n("v-list-item-subtitle",[n("v-row",{staticClass:"pl-3",attrs:{align:"center"}},[t.project.license?n("span",{staticClass:"overline my-1"},[t._v(t._s(t.project.license.name))]):t._e(),t._v(" "),t.project.license?n("span",{staticClass:"mx-2"},[t._v("|")]):t._e(),t._v(" "),n("span",{staticClass:"my-1 overline"},[t._v("Language")]),t._v(" "),null!=t.project.language?n("v-avatar",{staticClass:"ml-3",attrs:{size:"20",tile:""}},[n("v-img",{attrs:{src:r(593)("./"+t.project.language.toLowerCase()+".png")}})],1):t._e()],1)],1),t._v(" "),n("v-list-item-subtitle",[n("span",[t._v(t._s(t.project.description))])]),t._v(" "),n("v-list-item-subtitle",{staticClass:"mt-2"},[n("a",{attrs:{href:t.project.html_url,rel:"noreferrer",target:"_blank"}},[t._v("Go to the project")])])],1)],1)],1)],1)],1)],1)],1)],1):n("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[n("v-skeleton-loader",{staticClass:"pa-2",staticStyle:{width:"100%"},attrs:{elevation:"0",boilerplate:"",type:"article, actions"}})],1)])}),[],!1,null,"71576f6e",null);e.a=component.exports;l()(component,{VAvatar:v.a,VCard:d.a,VCol:h.a,VContainer:m.a,VImg:f.a,VList:_.a,VListItem:y.a,VListItemContent:C.a,VListItemSubtitle:C.b,VRow:w.a,VSkeletonLoader:x.a})},611:function(t,e,r){"use strict";r(12),r(3);var n={name:"Project",components:{},mixins:[r(47).a],props:["project"],data:function(){return{opened:!1,isPlaying:!1,playerVars:{autoplay:1}}},computed:{topImg:function(){return this.project.resources.filter((function(t){return void 0!==t.img}))[0].img},videoId:function(){var t=this.project.resources.filter((function(t){return void 0!==t.videoId}));if(t.length>0&&void 0!==t[0].videoId)return this.project.resources.filter((function(t){return void 0!==t.videoId}))[0].videoId}},methods:{background:function(t){return"blue"===t?"background: rgba(76, 85, 210, 0.75)":"light blue"===t?"background: rgba(0, 191, 205, 0.75)":"dark blue"===t?"background: rgba(0, 0, 55, 0.75)":"green"===t?"background: rgba(56, 145, 50, 0.75)":"red"===t?"background: rgba(176, 75, 80, 0.75)":"purple"===t?"background: rgba(155, 75, 155, 0.75)":"gray"===t?"background: rgba(75, 75, 75, 0.75)":"background: rgba(255, 255, 255, 0.75)"},playVideo:function(t){t&&this.$refs[t]&&this.$refs[t][0].player.playVideo()},pauseVideo:function(t){t&&this.$refs[t]&&this.$refs[t][0].player.pauseVideo()},stopVideo:function(t){t&&this.$refs[t]&&this.$refs[t][0].player.stopVideo()},close:function(){this.videoId&&this.pauseVideo(this.videoId),this.opened=!1}}},o=(r(601),r(21)),c=r(28),l=r.n(c),v=r(552),d=r(229),h=r(670),m=r(672),f=r(571),_=r(579),y=r(572),C=r(557),w=r(196),x=r(618),j=r(231),V=r(192),k=r(570),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fade-in-fwd"},[r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"mx-auto",class:n?"expanded":"",attrs:{tile:"",color:"transparent",elevation:n?12:0},on:{click:function(e){t.opened=!t.opened}}},[r("v-img",{attrs:{src:t.topImg,"aspect-ratio":"1.3"}},[r("v-fade-transition",[r("v-container",{staticClass:"transition-fast-in-fast-out v-card--reveal white--text",staticStyle:{height:"100%"},style:t.background(t.project.color),attrs:{fluid:"","fill-height":""}},[r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-container",[r("v-row",{staticClass:"overline title font-weight-medium ma-2",attrs:{justify:"center",align:"center"}},[r("h1",{staticClass:"text-center",staticStyle:{"letter-spacing":"0","line-height":"0.9"}},[t._v("\n                                        "+t._s(t.project.name)+"\n                                    ")])]),t._v(" "),r("v-row",[r("v-divider",{staticClass:"mx-4 my-2",attrs:{color:"white"}})],1),t._v(" "),r("v-row",{staticClass:"overline subtitle-2 font-weight-light ma-2",attrs:{justify:"center",align:"center"}},[r("h4",{staticClass:"text-center",staticStyle:{"line-height":"0.9"}},[t._v(t._s(t.project.area))])])],1)],1)],1)],1)],1)],1)]}}])}),t._v(" "),r("v-dialog",{attrs:{"max-width":t.tabletAndDown()?"100%":"70%",fullscreen:t.tabletAndDown()},on:{"click:outside":function(e){return t.close()}},model:{value:t.opened,callback:function(e){t.opened=e},expression:"opened"}},[r("v-card",[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-row",{attrs:{justify:"end",align:"start"}},[r("v-col",{staticClass:"pa-0 pr-3",attrs:{cols:"auto"}},[r("v-btn",{attrs:{elevation:"0",small:"",icon:""},on:{click:function(e){return t.close()}}},[r("v-icon",[t._v("mdi-close")])],1)],1)],1),t._v(" "),r("v-row",{staticClass:"px-3",staticStyle:{"margin-top":"-25px!important"},attrs:{justify:"center",align:"start"}},[r("v-col",[r("h2",{staticClass:"text-center"},[t._v(t._s(t.project.name))])])],1),t._v(" "),r("v-row",{class:t.mobile()?"":"pa-2"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"12",md:"6"}},[r("v-carousel",{attrs:{cycle:!t.isPlaying,height:"400","hide-delimiter-background":"","show-arrows-on-hover":""},on:{change:function(e){return t.pauseVideo(t.videoId)}}},t._l(t.project.resources,(function(e,i){return r("div",{key:i},[r("v-carousel-item",{attrs:{"reverse-transition":"fade-transition",transition:"fade-transition"}},[r("v-card",{attrs:{dark:"",elevation:"0",height:"400"}},[r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-row",{attrs:{align:"center"}},[e.videoId?r("youtube",{ref:e.videoId,refInFor:!0,attrs:{"video-id":e.videoId,"player-vars":t.playerVars,"fit-parent":"",resize:""},on:{playing:function(e){t.isPlaying=!0},paused:function(e){t.isPlaying=!1},ended:function(e){t.isPlaying=!1},click:function(r){return t.playVideo(e.videoId)}}}):r("v-img",{staticStyle:{"margin-top":"-5px"},attrs:{height:"385",src:e.img,contain:"","aspect-ratio":"1"}})],1)],1)],1)],1)],1)})),0)],1),t._v(" "),r("v-col",{staticClass:"py-0 px-3",class:t.tabletAndDown()?"pt-3 px-0":"pr-2 pl-4",attrs:{cols:"12",md:"6"}},[r("h3",{staticClass:"mb-1"},[t._v("Project info")]),t._v(" "),r("p",{staticClass:"pb-2"},[t._v(t._s(t.project.description))]),t._v(" "),r("h3",{staticClass:"mt-4 mb-1"},[t._v("Project details")]),t._v(" "),r("p",{staticClass:"py-2 mb-0"},[r("b",[t._v("Area:")]),t._v(" "+t._s(t.project.area))]),t._v(" "),r("v-divider"),t._v(" "),r("p",{staticClass:"py-2 mb-0"},[r("b",[t._v("Technologies:")]),t._v(" "+t._s(t.project.technologies))]),t._v(" "),r("v-divider"),t._v(" "),r("p",{staticClass:"py-2 mb-0"},[r("b",[t._v("Group:")]),t._v(" "+t._s(t.project.group))]),t._v(" "),r("v-divider"),t._v(" "),r("p",{staticClass:"py-2 mb-0"},[r("b",[t._v("Date:")]),t._v(" "+t._s(t.project.date))])],1)],1)],1)],1)],1)],1)}),[],!1,null,"e34660ba",null);e.a=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCarousel:h.a,VCarouselItem:m.a,VCol:f.a,VContainer:_.a,VDialog:y.a,VDivider:C.a,VFadeTransition:w.c,VHover:x.a,VIcon:j.a,VImg:V.a,VRow:k.a})},612:function(t,e,r){"use strict";var n={name:"Skill",components:{},props:["skill"],data:function(){return{colors:{"DEEP ORANGE":"#FF5722",ORANGE:"#FF9800",LIME:"#CDDC39","LIGHT GREEN":"#8BC34A",GREEN:"#4CAF50"}}},computed:{},methods:{getColor:function(t){return t>=0&&t<20?this.colors["DEEP ORANGE"]:t>=20&&t<40?this.colors.ORANGE:t>=40&&t<60?this.colors.LIME:t>=60&&t<80?this.colors["LIGHT GREEN"]:this.colors.GREEN}}},o=r(21),c=r(28),l=r.n(c),v=r(571),d=r(192),h=r(230),m=r(570),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"pa-1",attrs:{cols:"auto"}},[r("v-img",{attrs:{"max-height":"50","max-width":"50",src:t.skill.avatar}})],1),t._v(" "),r("v-col",{staticClass:"py-0 pl-3 pr-0"},[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"pb-0",domProps:{innerHTML:t._s(t.skill.title)}}),t._v(" "),t.skill.value?r("v-col",{staticClass:"pb-0"},[r("v-progress-linear",{attrs:{rounded:"",value:t.skill.value,color:t.getColor(t.skill.value),height:"10"}})],1):t._e()],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"pt-1",domProps:{innerHTML:t._s(t.skill.subtitle)}})],1)],1)],1)}),[],!1,null,"3e20e66b",null);e.a=component.exports;l()(component,{VCol:v.a,VImg:d.a,VProgressLinear:h.a,VRow:m.a})},613:function(t,e,r){"use strict";var n={name:"Experience",components:{},props:["experience","forceDate"],mixins:[r(47).a],data:function(){return{}},computed:{},methods:{}},o=r(21),c=r(28),l=r.n(c),v=r(229),d=r(53),h=r(571),m=r(579),f=r(231),_=r(570),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:t.experience.color,dark:""}},[r("v-card-title",{staticClass:"py-2 px-4"},[r("v-container",{staticClass:"py-0",attrs:{fluid:""}},[r("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[r("v-row",{staticClass:"pa-0"},[r("h3",[t._v("\n                        "+t._s(t.experience.position)+"\n                    ")])]),t._v(" "),r("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[r("span",{staticClass:"ma-0 subtitle-2 mr-2"},[t._v(t._s(t.experience.company))]),t._v(" "),r("span",{staticClass:"mr-2"},[t._v("·")]),t._v(" "),r("span",{staticClass:"mt-1 overline",staticStyle:{"line-height":"100%"}},[t._v(t._s(t.experience.location))])])],1)],1)],1),t._v(" "),r("v-card-text",{staticClass:"white--text"},[t.tabletAndDown()||t.forceDate?r("v-row",{staticClass:"pt-0"},[r("v-icon",{staticClass:"mx-3",attrs:{color:"white"}},[t._v("\n                mdi-clock\n            ")]),t._v(" "),r("p",{staticClass:"ma-0 py-2 outline"},[t._v("\n                "+t._s(t.experience.date)+"\n            ")])],1):t._e(),t._v(" "),r("p",{staticClass:"py-2 ma-0"},[t._v("\n            "+t._s(t.experience.text)+"\n        ")])],1)],1)}),[],!1,null,"c7c75ae6",null);e.a=component.exports;l()(component,{VCard:v.a,VCardText:d.b,VCardTitle:d.c,VCol:h.a,VContainer:m.a,VIcon:f.a,VRow:_.a})},614:function(t,e,r){"use strict";var n={name:"Publication",components:{},props:["publication"],data:function(){return{}},computed:{}},o=r(21),c=r(28),l=r.n(c),v=r(552),d=r(229),h=r(53),m=r(571),f=r(579),_=r(231),y=r(570),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{outlined:"",elevation:"0",width:"100%"}},[r("v-container",{staticClass:"py-0",attrs:{fluid:""}},[r("v-row",{attrs:{align:"center","no-gutters":""}},[r("v-col",[r("v-card-title",{staticClass:"pl-1 py-2",staticStyle:{"word-break":"break-word"}},[r("b",[t._v(t._s(t.publication.title))])])],1),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{staticClass:"mr-1",attrs:{icon:"",target:"_blank",href:t.publication.href,rel:"noreferrer"}},[r("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],1),t._v(" "),r("v-card-text",{staticClass:"py-1"},[r("b",[t._v(t._s(t.publication.date))]),t._v(" · "+t._s(t.publication.location)+"\n    ")]),t._v(" "),r("v-card-text",{staticClass:"pt-0 pb-1"},[t._v("\n        "+t._s(t.publication.authors)+"\n    ")])],1)}),[],!1,null,"32ba2104",null);e.a=component.exports;l()(component,{VBtn:v.a,VCard:d.a,VCardText:h.b,VCardTitle:h.c,VCol:m.a,VContainer:f.a,VIcon:_.a,VRow:y.a})},615:function(t,e,r){"use strict";var n={name:"CVBtnDownload",components:{},props:["isFab"],data:function(){return{fabShow:!1,href:"docs/cv_eng.pdf"}},computed:{},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fabShow=e>60}}}},o=r(21),c=r(28),l=r.n(c),v=r(552),d=r(231),h=r(606),m=r.n(h),f=r(263),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:!t.isFab||t.isFab&&t.fabShow,expression:"!isFab || (isFab && fabShow)"}],staticClass:"scale-in-center",staticStyle:{"z-index":"2",padding:"30px!important"},attrs:{href:t.href,elevation:"0",color:t.isFab?"secondary":"primary",outlined:!t.isFab,rounded:"",download:"",fixed:t.isFab,bottom:t.isFab,right:t.isFab}},[t._v("\n    Download CV\n    "),r("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("\n        mdi-download\n    ")])],1)}),[],!1,null,"4063b1c0",null);e.a=component.exports;l()(component,{VBtn:v.a,VIcon:d.a}),m()(component,{Scroll:f.b})},622:function(t,e,r){},661:function(t,e,r){"use strict";r(622)},682:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(13),r(9),r(14);var n=r(1),o=r(27),c=(r(42),r(12),r(3),r(25),r(89),r(52)),l=r(47),v=r(333),d=r(609),h=r(610),m=r(611),f=r(613),_=r(612),y=r(608),C=r(614),w={name:"PageNavigator",components:{},mixins:[l.a],props:["text","icon","path"],data:function(){return{}},computed:{},methods:{}},x=r(21),j=r(28),V=r.n(j),k=r(552),P=r(579),I=r(231),S=r(570),component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"py-0",attrs:{fluid:"","fill-height":""}},[r("v-row",{staticStyle:{height:"100%"},attrs:{justify:"center",align:"center"}},[r("v-btn",{staticClass:"pa-0",attrs:{height:"100%",text:"",large:"",block:"",color:"primary",nuxt:"",to:t.path}},[t._v("\n            "+t._s(t.text)+"\n            "),r("v-icon",{staticClass:"ml-2",attrs:{large:""}},[t._v("\n                "+t._s(t.icon)+"\n            ")])],1)],1)],1)}),[],!1,null,"1915dd50",null),O=component.exports;V()(component,{VBtn:k.a,VContainer:P.a,VIcon:I.a,VRow:S.a});var D=r(615),E=r(581),A=r(600);function G(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function R(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?G(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):G(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var L={name:"Home",layout:"home",mixins:[l.a],middleware:["blogDataFetcher"],components:{CVBtnDownload:D.a,PageNavigator:O,Experience:f.a,GithubProject:h.a,Project:m.a,UserIntro:v.a,Article:d.a,Certification:y.a,Publication:C.a,Skill:_.a},props:{},data:function(){return{githubProjects:void 0,options:{duration:700,offset:0,easing:"easeInOutCubic"},selector:"#footer"}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(A.a)(t.$axios).then((function(e){return t.githubProjects=e}));case 1:case"end":return e.stop()}}),e)})))()},created:function(){this.$fetch()},mounted:function(){},head:function(){return Object(E.a)("Home","Check out my website for Machine Learning blog and ideas!",this.$route.path,"https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80")},computed:R(R(R({},Object(c.b)("AppState",{isDark:"isDark"})),Object(c.b)("DataState",{articles:"getBlogArticles",projects:"getProjects",skills:"getSkills",experiences:"getExperiences",certifications:"getCertifications",publications:"getPublications"})),{},{visibleExperiences:function(){return this.experiences?this.experiences.slice(0,1):this.experiences},visibleCertifications:function(){return this.certifications?this.certifications.slice(0,1):this.certifications},visibleSkills:function(){return this.skills?this.skills["Programming Languages"].slice(0,2):this.skills},visiblePublications:function(){return this.publications?this.publications.slice(0,2):this.publications},visibleGithubProjects:function(){return this.githubProjects?(console.log(this.githubProjects.filter((function(t){return"aas"===t.name}))),this.githubProjects.slice(0,5)):this.githubProjects},visibleProjects:function(){return this.projects?this.projects.slice(0,5):this.projects},visibleArticles:function(){return this.articles?this.articles.slice(0,2):this.articles}}),methods:{}},T=(r(661),r(671)),F=r(229),N=r(571),$=r(557),M=r(68),B=r(576),H=Object(x.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-sheet",{attrs:{color:"homeSectionPrimary"}},[r("v-container",{staticClass:"py-12"},[r("v-row",{staticClass:"mt-10 pb-3",attrs:{justify:"center"}},[r("h1",[t._v("Know Me More")])]),t._v(" "),r("v-row",{staticClass:"py-4"},[r("blockquote",{class:t.isDark?"dark-theme":"light-theme"},[t._v("\n                    I was born in 1993 in Salerno, Italy. Passionate about technology and electronics since\n                    childhood,\n                    I always want to experiment and learn.\n                    I graduated with honors in Computer Engineering and I am continuously learning on topics related\n                    to\n                    "),r("b",[t._v("Deep Learning")]),t._v(" and "),r("b",[t._v("Artificial Intelligence")]),t._v(" in general.\n                    "),r("br"),r("br"),t._v("\n                    Today, I work as a "),r("b",[t._v("Machine Learning Engineer")]),t._v(", focused on Natural Language Processing\n                    topics.\n                    As a team leader on several projects, I have always demonstrated discrete leadership and\n                    coordination\n                    skills and also excellent analytical, design and team working capabilities.\n                    I consider myself attentive to details and precise in meeting deadlines.\n                    Looking for stimulating activities related to artificial intelligence that allow me to expand my\n                    current\n                    knowledge and soft skills.\n                    "),r("br"),r("br"),t._v("\n                    I pursue a number of personal "),r("b",[t._v("projects")]),t._v(", participate to hackathons and contribute to open\n                    source software.\n                    My other hobbies include electronics, photography, graphics, videogames and music.\n                ")])]),t._v(" "),r("v-row",{staticClass:"pt-4",attrs:{align:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-row",{staticClass:"px-2 py-0",attrs:{align:"center"}},[r("v-col",{staticClass:"py-2",attrs:{cols:"auto"}},[r("span",[t._v("Name:")])]),t._v(" "),r("v-col",{staticClass:"py-2"},[r("h3",[t._v("Gioele Crispo")])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{staticClass:"px-2 py-1",attrs:{align:"center"}},[r("v-col",{staticClass:"py-2",attrs:{cols:"auto"}},[r("span",[t._v("From:")])]),t._v(" "),r("v-col",{staticClass:"py-2"},[r("h3",[t._v("Salerno, Italy")])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{staticClass:"px-2 py-1",attrs:{align:"center"}},[r("v-col",{staticClass:"py-2",attrs:{cols:"auto"}},[r("span",[t._v("Birthdate:")])]),t._v(" "),r("v-col",{staticClass:"py-2"},[r("h3",[t._v("19 Jun 1993")])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-row",{staticClass:"px-2 py-1",attrs:{align:"center"}},[r("v-col",{staticClass:"py-2",attrs:{cols:"auto"}},[r("span",[t._v("E-mail:")])]),t._v(" "),r("v-col",{staticClass:"py-2"},[r("h3",[t._v("crispogioele@gmail.com")])])],1),t._v(" "),r("v-row",{staticClass:"px-2 py-5",attrs:{align:"center",justify:"center"}},[r("CVBtnDownload",{attrs:{isFab:!1}})],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12",sm:"6"}},[r("v-alert",{staticClass:"pb-6",attrs:{color:"primary",dark:"",border:"left",prominent:""}},[r("v-row",{attrs:{align:"center"}},[r("v-col",{staticClass:"ml-3"},[r("h2",[t._v("Contacts")])]),t._v(" "),r("v-col",{staticClass:"mx-3",attrs:{cols:"auto"}},[r("v-icon",{attrs:{large:""}},[t._v("mdi-at")])],1)],1),t._v(" "),r("v-row",{staticClass:"px-3",attrs:{align:"center"}},[r("v-col",{staticClass:"py-0"},[t._v("\n                                I am open to collaborations on interesting projects and ideas regarding artificial\n                                intelligence\n                                and related.\n                                If you want to propose a work or exchange an opinion do not hesitate to contact me.\n                            ")])],1),t._v(" "),r("v-row",{attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"mt-5"},[r("v-btn",{attrs:{outlined:"",large:"",color:"white"},on:{click:function(e){return t.$vuetify.goTo(t.selector,t.options)}}},[t._v("\n                                    Go to my contacts\n                                    "),r("v-icon",{staticClass:"ml-2"},[t._v("mdi-chevron-down")])],1)],1)])],1)],1)],1)],1)],1),t._v(" "),r("v-sheet",{attrs:{color:"homeSectionSecondary"}},[r("v-container",{staticClass:"py-12"},[r("v-row",{staticClass:"mt-10 pb-3",attrs:{justify:"center"}},[r("h1",[t._v("Works and Experiences")])]),t._v(" "),r("v-row",{staticClass:"px-3"},[t._v("\n                My career is mainly focused on artificial intelligence projects.\n                During my employment at NTT Data I have explored various architectural solutions (streaming, real\n                time,\n                batch, and others) based on microservices for complex artificial intelligence problems.\n                I also achieved the AWS Machine Learning Specialty certification, with which I also projected the\n                solutions\n                into the AWS domain.\n            ")]),t._v(" "),r("v-row",{staticClass:"py-3 px-3",attrs:{align:"start"}},[r("v-col",{class:t.mobile()?"pa-0 py-1":"pl-0 pr-2 py-1",attrs:{cols:"12",sm:"6"}},[r("v-row",{staticClass:"py-0",attrs:{align:"center"}},[r("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[r("h3",{staticClass:"pt-3 py-1"},[t._v("Current job")])]),t._v(" "),r("v-spacer")],1),t._v(" "),t._l(t.visibleExperiences,(function(t){return r("div",[r("Experience",{attrs:{experience:t,forceDate:!0}})],1)})),t._v(" "),r("h3",{staticClass:"pt-3 py-1"},[t._v("Certifications")]),t._v(" "),t._l(t.visibleCertifications,(function(t){return r("div",[r("Certification",{attrs:{certification:t}})],1)}))],2),t._v(" "),r("v-col",{class:t.mobile()?"pa-0 py-1":"pr-0 pl-2 py-1",attrs:{cols:"12",sm:"6"}},[r("h3",{staticClass:"pt-3 py-1"},[t._v("Publications")]),t._v(" "),t._l(t.visiblePublications,(function(t){return r("div",{staticClass:"pb-1"},[r("Publication",{attrs:{publication:t}})],1)}))],2),t._v(" "),r("v-col",{class:t.mobile()?"pa-0 py-1":"px-0 py-1",attrs:{cols:"12"}},[r("v-card",{staticClass:"pa-0",attrs:{height:"100px",elevation:"0",color:"transparent"}},[r("PageNavigator",{attrs:{text:"View my CV",icon:"mdi-timeline-text",path:"/cv"}})],1)],1)],1)],1)],1),t._v(" "),r("v-sheet",{attrs:{color:"homeSectionPrimary"}},[r("v-container",{staticClass:"py-12"},[r("v-row",{staticClass:"mt-10 py-3",attrs:{justify:"center"}},[r("h1",[t._v("Projects")])]),t._v(" "),r("v-row",{staticClass:"px-3"},[t._v("\n                I have built many systems, mainly focused on artificial intelligence and machine learning.\n            ")]),t._v(" "),r("v-row",{staticClass:"py-3 px-0"},[t._l(t.visibleProjects,(function(t){return r("v-col",{key:t.name,staticClass:"pa-0",attrs:{cols:"12",sm:"6",md:"4"}},[r("Project",{attrs:{project:t}})],1)})),t._v(" "),r("v-col",{class:t.mobile()?"pb-2 px-0":"pa-0",attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"pa-0",attrs:{height:t.mobile()?"100px":"100%",elevation:"0",color:"transparent"}},[r("PageNavigator",{attrs:{text:"Discover all",icon:"mdi-briefcase",path:"/projects"}})],1)],1)],2)],1)],1),t._v(" "),r("v-sheet",{attrs:{color:"homeSectionSecondary"}},[r("v-container",{staticClass:"py-12"},[r("v-row",{staticClass:"mt-10 pt-3 px-3",attrs:{justify:"center"}},[r("h1",[t._v("Github")])]),t._v(" "),r("v-row",{staticClass:"px-3"},[t._v('\n                I use Github a lot to save my efforts, make them available for me and others. I like a lot facing\n                with\n                challenges and solve tricky problems.\n                In fact, my first development in Python was "dictipy", a library that overcomes the limitations of\n                json.dumps and __dict__ methods.\n            ')]),t._v(" "),r("v-row",{staticClass:"py-4 px-3"},[t._l(t.visibleGithubProjects,(function(e){return r("v-col",{key:e.id,class:t.mobile()?"pa-0 pb-2":"pa-0 pr-3 pb-2",attrs:{cols:"12",sm:"6",md:"4"}},[r("GithubProject",{attrs:{project:e}})],1)})),t._v(" "),r("v-col",{class:t.mobile()?"pa-0 pb-2":"pa-0 pr-3 pb-2",attrs:{cols:"12",sm:"6",md:"4"}},[r("v-card",{staticClass:"pa-0",attrs:{height:t.mobile()?"100px":"100%",elevation:"0",color:"transparent"}},[r("PageNavigator",{attrs:{text:"Explore all my projects",icon:"mdi-github",path:"/github"}})],1)],1)],2)],1)],1),t._v(" "),r("v-sheet",{attrs:{color:"homeSectionPrimary"}},[r("v-container",{staticClass:"py-12"},[r("v-row",{staticClass:"mt-10 py-3 px-3",attrs:{justify:"center"}},[r("h1",{staticClass:"decorated-title"},[t._v("Latest Posts")])]),t._v(" "),r("v-row",{staticClass:"px-3"},[t._v("\n                Since childhood, I've always been very curious and eager to perfect my things.\n                From here my articles are born, which are related to projects or personal insights to improve my\n                skills.\n            ")]),t._v(" "),r("v-row",{staticClass:"pt-3 pb-12 px-3"},[t._l(t.visibleArticles,(function(article){return r("v-col",{key:article.id,staticClass:"pa-2",attrs:{cols:"12",sm:"6",md:"4"}},[r("Article",{attrs:{article:article}})],1)})),t._v(" "),r("v-col",{staticClass:"pa-2",attrs:{cols:"12",sm:"12",md:"4"}},[r("v-card",{staticClass:"pa-0",attrs:{height:t.tabletAndDown()?"100px":"100%",elevation:"0",color:"transparent"}},[r("PageNavigator",{attrs:{text:"View all my posts",icon:"mdi-file-document-outline",path:"/blog"}})],1)],1)],2)],1)],1)],1)}),[],!1,null,"578e1712",null);e.default=H.exports;V()(H,{VAlert:T.a,VBtn:k.a,VCard:F.a,VCol:N.a,VContainer:P.a,VDivider:$.a,VIcon:I.a,VRow:S.a,VSheet:M.a,VSpacer:B.a})}}]);