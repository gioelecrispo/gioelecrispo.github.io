(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(t,e,n){"use strict";var o=n(148),r=n(149),c={name:"AppContent",components:{ContentBody:o.a,ContentFooter:r.a},methods:{}},l=n(22),d=n(37),f=n.n(d),m=n(484),h=n(477),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{id:"app-content"}},[n("v-row",{staticClass:"pa-0 ma-0"},[n("ContentBody")],1),t._v(" "),t.$store.state.showContentFooter?n("ContentFooter"):t._e()],1)}),[],!1,null,"1b2cb8de",null);e.a=component.exports;f()(component,{VContainer:m.a,VRow:h.a})},148:function(t,e,n){"use strict";var o={name:"ContentBody",data:function(){return{}}},r=n(22),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},149:function(t,e,n){"use strict";var o={name:"ContentFooter",data:function(){return{}}},r=n(22),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,"34a97a82",null);e.a=component.exports},150:function(t,e,n){"use strict";var o={name:"AppFooter",mixins:[n(62).a],data:function(){return{showInfoReference:!1,socialMedias:[{name:"Facebook",icon:"fab fa-facebook",href:"https://www.facebook.com/gioelecrispo"},{name:"LinkedIn",icon:"fab fa-linkedin",href:"https://www.linkedin.com/in/gioele-crispo/"},{name:"Instagram",icon:"fab fa-instagram",href:"https://www.instagram.com/gioelecrispo"},{name:"YouTube",icon:"fab fa-youtube",href:"https://www.youtube.com/channel/UCX38YLmygw3cfwljiNlBBQw"}]}},methods:{}},r=(n(374),n(22)),c=n(37),l=n.n(c),d=n(465),f=n(190),m=n(118),h=n(478),v=n(484),w=n(479),y=n(467),C=n(480),_=n(461),k=n(477),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{attrs:{id:"footer"}},[n("v-footer",{attrs:{color:"toolbars",padless:"",dark:"",height:"auto"}},[n("svg",{staticClass:"footer-svg",attrs:{viewBox:"0 0 120 28"}},[n("defs",[n("path",{attrs:{id:"wave",d:"M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"}})]),t._v(" "),n("use",{staticClass:"wave",attrs:{id:"wave3","xlink:href":"#wave",x:"0",y:"-2"}}),t._v(" "),n("use",{staticClass:"wave",attrs:{id:"wave2","xlink:href":"#wave",x:"0",y:"0"}}),t._v(" "),n("use",{staticClass:"wave",attrs:{id:"wave1","xlink:href":"#wave",x:"0",y:"1"}})]),t._v(" "),n("v-card",{staticClass:"text-center footer-content",attrs:{elevation:"0",width:"100%",tile:""}},[n("v-container",{staticClass:"pa-2"},[n("v-row",{staticClass:"mx-2",attrs:{align:"center"}},[n("v-col",[n("v-divider")],1),t._v(" "),n("v-col",[n("span",{staticClass:"overline",staticStyle:{"font-size":"16px!important"}},[t._v("Stay in touch")])]),t._v(" "),n("v-col",[n("v-divider")],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"pt-3 pb-4"},[n("blockquote",{staticClass:"subheader pa-0"},[t._v("\n                    You can not discover new oceans if you do not have the courage to\n                    lose sight of the shore.\n                ")])]),t._v(" "),n("v-card-text",{staticClass:"py-2"},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"6"}},t._l(t.socialMedias,(function(e){return n("v-btn",{key:e.href,staticClass:"mx-2",attrs:{href:e.href,rel:"noreferrer",target:"_blank",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v("\n                                "+t._s(e.icon)+"\n                            ")])],1)})),1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"6"}},[n("v-icon",{staticClass:"ml-3 mr-1"},[t._v("\n                            mdi-at\n                        ")]),t._v(" "),n("span",[t._v("crispogioele@gmail.com")]),t._v(" "),n("v-icon",{staticClass:"ml-3 mr-1"},[t._v("\n                            mdi-skype\n                        ")]),t._v(" "),n("span",[t._v("gioele.crispo")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"py-3"},[t._v("\n                "+t._s((new Date).getFullYear())+" — "),n("span",{staticClass:"subtitle-1"},[t._v("Gioele Crispo")]),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{small:"",icon:""},on:{click:function(e){t.showInfoReference=!0}}},[n("v-icon",{attrs:{size:"20px"}},[t._v("\n                        mdi-information-outline\n                    ")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"300"},model:{value:t.showInfoReference,callback:function(e){t.showInfoReference=e},expression:"showInfoReference"}},[n("v-card",{staticClass:"pa-3"},[n("v-card-text",{staticClass:"text-center py-2"},[t._v("\n                    Icons made by "),n("a",{attrs:{href:"https://www.flaticon.com/authors/vectors-market",title:"Vectors Market"}},[t._v("Vectors\n                    Market")]),t._v(" from "),n("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")]),t._v(" is\n                    licensed by:\n                    "),n("a",{attrs:{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank"}},[t._v("CC 3.0 BY")])])],1)],1)],1)],1)}),[],!1,null,"6c3daf97",null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:f.a,VCardText:m.b,VCol:h.a,VContainer:v.a,VDialog:w.a,VDivider:y.a,VFooter:C.a,VIcon:_.a,VRow:k.a})},151:function(t,e,n){"use strict";n(8),n(5),n(10),n(11),n(6),n(12);var o=n(1),r=n(68);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"NavigationDrawer",mixins:[n(62).a],props:["right"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)("AppState",{isLeftNavDrawer:"isLeftNavDrawer",appNavDrawElements:"getNavLinks"})),data:function(){return{model:1,disableResizeWatcher:!0,darkTheme:!1}},methods:{closeLeftNavBar:function(){this.$store.dispatch("AppState/setLeftNavDrawer",!1)},navigate:function(path){this.$router.push(path),this.closeLeftNavBar()}}},d=n(22),f=n(37),m=n.n(f),h=n(462),v=n(465),w=n(478),y=n(484),C=n(461),_=n(463),k=n(460),A=n(464),I=n(481),x=n(477),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-navigation-drawer",{attrs:{value:t.isLeftNavDrawer,right:t.right,width:"100%",app:""}},[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-row",{staticClass:"mr-3",attrs:{justify:"end"}},[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.closeLeftNavBar()}}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-row",{staticClass:"pt-6",attrs:{justify:"center"}},[o("v-avatar",{attrs:{size:"104"}},[o("img",{attrs:{src:n(223),alt:"Gioele Crispo"}})])],1),t._v(" "),o("v-list",{staticClass:"pt-0 mt-12",attrs:{dense:"",rounded:""}},[o("v-list-item-group",{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.appNavDrawElements,(function(element){return o("v-list-item",{key:element.title,staticClass:"text-center",on:{click:function(e){return t.navigate(element.path)}}},[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-row",{attrs:{justify:"center"}},[o("v-icon",{staticClass:"mr-4"},[t._v("\n                                            "+t._s(element.icon)+"\n                                        ")]),t._v("\n                                        "+t._s(element.title)+"\n                                    ")],1)],1)],1)],1)})),1)],1)],1)],1)],1)],1)}),[],!1,null,"5d6b6160",null);e.a=component.exports;m()(component,{VAvatar:h.a,VBtn:v.a,VCol:w.a,VContainer:y.a,VIcon:C.a,VList:_.a,VListItem:k.a,VListItemGroup:A.a,VNavigationDrawer:I.a,VRow:x.a})},152:function(t,e,n){"use strict";n(8),n(5),n(10),n(11),n(6),n(12);var o=n(1),r=n(68);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"AppToolbar",components:{},mixins:[n(62).a],data:function(){return{}},created:function(){},computed:l(l({},Object(r.b)("AppState",{isLeftNavDrawer:"isLeftNavDrawer",isDark:"isDark",appToolbarElements:"getNavLinks",appToolbarImage:"getAppToolbarImage"})),{},{showNavigationDrawerIcon:function(){return this.$store.state.showAppNavigationDrawer&&this.tabletAndDown()}}),props:["title"],methods:{toggleLeftNavBar:function(t){this.$store.dispatch("AppState/setLeftNavDrawer",t)},setTheme:function(){this.$store.dispatch("AppState/setIsDark",!this.isDark),this.$vuetify.theme.dark=!0===this.isDark},setToolbarColor:function(){var t="toolbars";return this.$store.state.showContentHeader?t="transparent":this.$store.state.showAppToolbarImage&&(t="#0055DD"),t},getAppToolbarImage:function(){return this.appToolbarImage?n(304)("./"+this.appToolbarImage):"https://picsum.photos/1920/1080?random"}}},f=n(22),m=n(37),h=n.n(m),v=n(485),w=n(465),y=n(461),C=n(154),_=n(477),k=n(482),A=n(294),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"","elevate-on-scroll":!0,collapse:!1,short:!1,color:t.setToolbarColor(),dark:t.$store.state.showAppToolbarImage,src:t.$store.state.showAppToolbarImage?t.getAppToolbarImage():"","fade-img-on-scroll":t.$store.state.showAppToolbarImage,"shrink-on-scroll":t.$store.state.showAppToolbarImage,prominent:t.$store.state.showAppToolbarImage,"scroll-threshold":t.$store.state.showAppToolbarImage?"150":"",height:t.$store.state.showAppToolbarImage?"350":""},scopedSlots:t._u([t.$store.state.showAppToolbarImage?{key:"img",fn:function(e){var o=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(0,100,205,0.7), rgba(0,2,216,0.7)"}},"v-img",o,!1))]}}:null],null,!0)},[t._v(" "),t.showNavigationDrawerIcon?n("v-btn",{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.toggleLeftNavBar(!0)}}},[n("v-icon",[t._v("mdi-menu")])],1):t._e(),t._v(" "),t.tabletAndDown()||t.$store.state.showAppToolbarImage?n("v-toolbar-title",{staticClass:"pl-1 pr-3"},[n("h3",[t._v(t._s(t.title))])]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-row",{attrs:{align:"center",justify:"end"}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.setTheme()}}},[n("v-icon",[t._v(t._s(t.isDark?"mdi-white-balance-sunny":"far fa-moon"))])],1),t._v(" "),t._l(t.appToolbarElements,(function(element){return t.showNavigationDrawerIcon?t._e():n("v-btn",{key:element.id,class:t.$route.path===element.path?"active-button":"",attrs:{color:t.$route.path===element.path?"primary":"",text:"",tile:"",large:""},on:{click:function(e){return t.$router.push(element.path)}}},[n("v-icon",{staticClass:"mr-1"},[t._v("\n            "+t._s(element.icon)+"\n        ")]),t._v("\n        "+t._s(element.title)+"\n    ")],1)}))],2)],1)}),[],!1,null,"1284b40c",null);e.a=component.exports;h()(component,{VAppBar:v.a,VBtn:w.a,VIcon:y.a,VImg:C.a,VRow:_.a,VSpacer:k.a,VToolbarTitle:A.a})},153:function(t,e,n){"use strict";n(8),n(5),n(10),n(11),n(6),n(12);var o=n(1),r=(n(35),n(290)),c=n(68);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"ContentHeader",props:[],mixins:[n(62).a],components:{UserIntro:r.a},data:function(){return{}},computed:d(d({},Object(c.b)("AppState",{isDark:"isDark",navLinks:"getNavLinks"})),{},{visibleNavLinks:function(){return this.navLinks?this.navLinks.slice(1,this.navLinks.length):this.navLinks}}),methods:{setTheme:function(){this.$store.dispatch("AppState/setIsDark",!this.isDark),this.$vuetify.theme.dark=!0===this.isDark},getAnimationClass:function(t){return"slide-in-top-"+(25*t+75)}}},m=(n(406),n(22)),h=n(37),v=n.n(h),w=n(465),y=n(478),C=n(484),_=n(461),k=n(477),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parallax"},[n("div",{staticClass:"bg bg-overlay "}),t._v(" "),n("v-container",{staticClass:"caption",attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:t.isUiLarger?"auto":"12",md:"auto"}},[n("UserIntro")],1),t._v(" "),n("v-col",{attrs:{cols:"auto"}},t._l(t.visibleNavLinks,(function(e,o){return n("v-row",{key:o,staticClass:"pa-4",class:t.getAnimationClass(o)},[n("v-btn",{attrs:{dark:"",block:"",text:""},on:{click:function(n){return t.$router.push(e.path)}}},[t._v("\n                        "+t._s(e.title)+"\n                    ")])],1)})),1)],1)],1),t._v(" "),n("v-btn",{attrs:{fab:"",dark:"",color:"secondary",absolute:"",bottom:"",right:""},on:{click:function(e){return t.setTheme()}}},[n("v-icon",[t._v(t._s(t.isDark?"mdi-white-balance-sunny":"far fa-moon"))])],1)],1)}),[],!1,null,"134f2dca",null);e.a=component.exports;v()(component,{VBtn:w.a,VCol:y.a,VContainer:C.a,VIcon:_.a,VRow:k.a})},197:function(t,e,n){"use strict";var o=n(2),r=n(298),c=n.n(r);o.a.use(c.a)},223:function(t,e,n){t.exports=n.p+"img/9d8aa01.jpg"},258:function(t,e,n){},265:function(t,e,n){},271:function(t,e,n){},290:function(t,e,n){"use strict";var o={name:"UserIntro",components:{},mixins:[n(62).a],props:{},data:function(){return{}},computed:{},methods:{}},r=n(22),c=n(37),l=n.n(c),d=n(462),f=n(190),m=n(478),h=n(467),v=n(477),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{attrs:{dark:"",width:"100%",elevation:"0",outlined:"",color:"transparent"}},[o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{cols:"12",md:"auto"}},[o("v-avatar",{staticClass:"fade-in-fwd",attrs:{tile:!1,size:t.tabletAndDown()?"124":"164",color:"grey lighten-4"}},[o("img",{attrs:{src:n(223),alt:"avatar"}})])],1),t._v(" "),o("v-col",[o("v-row",{attrs:{justify:"center"}},[o("p",{staticClass:"display-3 font-weight-medium ma-0 px-3 text-focus-in"},[t._v("\n                    Gioele Crispo\n                ")])]),t._v(" "),o("v-row",{staticClass:"pt-2",attrs:{justify:"center"}},[o("p",{staticClass:"headline font-weight-thin mx-0 mt-0 mb-3 px-3 text-focus-in"},[t._v("\n                    Machine Learning engineer\n                ")])]),t._v(" "),o("v-row",[o("v-divider")],1),t._v(" "),o("v-row",{attrs:{justify:"center"}},[o("span",{staticClass:"font-weight-thin pt-1 mb-3 px-3 text-focus-in"},[t._v("\n                Curious, enthusiastic and highly organized ")])])],1)],1)],1)}),[],!1,null,"44f14446",null);e.a=component.exports;l()(component,{VAvatar:d.a,VCard:f.a,VCol:m.a,VDivider:h.a,VRow:v.a})},301:function(t,e,n){"use strict";var o=n(151),r=n(147),c=n(152),l=n(150),d=n(153),f={name:"AppStructure",mixins:[n(62).a],components:{NavigationDrawer:o.a,AppToolbar:c.a,AppContent:r.a,AppFooter:l.a,ContentHeader:d.a},props:{},computed:{},data:function(){return{}},methods:{}},m=n(22),h=n(37),v=n.n(h),w=n(476),y=n(483),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"app"}},[t.tabletAndDown()?n("NavigationDrawer",{attrs:{right:!1}}):t._e(),t._v(" "),t.$store.state.showAppToolbar?n("AppToolbar",{attrs:{id:"app-toolbar",title:t.$store.state.appToolbarTitle}}):t._e(),t._v(" "),n("v-main",[t.$store.state.showContentHeader?n("ContentHeader"):t._e(),t._v(" "),n("AppContent")],1),t._v(" "),t.$store.state.showAppFooter?n("AppFooter"):t._e()],1)}),[],!1,null,"1a647670",null);e.a=component.exports;v()(component,{VApp:w.a,VMain:y.a})},304:function(t,e,n){var map={"./a-novel-writing-order-recovery-approach-for-handwriting-specimens.png":401,"./mitigate-risk-and-enhance-productivity-with-mlops.jpg":402,"./s-o-l-i-d-rules-to-build-a-solid-software-architecture.png":403};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=304},305:function(t,e,n){t.exports=n.p+"img/b38be53.png"},306:function(t,e,n){t.exports=n.p+"img/09c62e8.png"},307:function(t,e,n){t.exports=n.p+"img/f5dd86c.png"},308:function(t,e,n){t.exports=n.p+"img/0cfc826.png"},309:function(t,e,n){t.exports=n.p+"img/52ab564.png"},310:function(t,e,n){t.exports=n.p+"img/8d0eb91.png"},311:function(t,e,n){t.exports=n.p+"img/939a37d.png"},312:function(t,e,n){t.exports=n.p+"img/350b6ab.png"},313:function(t,e,n){t.exports=n.p+"img/c61aa50.png"},314:function(t,e,n){t.exports=n.p+"img/ac002b3.png"},315:function(t,e,n){t.exports=n.p+"img/3c5e8e1.png"},316:function(t,e,n){t.exports=n.p+"img/6ab8768.png"},317:function(t,e,n){t.exports=n.p+"img/208c7a3.png"},318:function(t,e,n){t.exports=n.p+"img/51b7b2d.png"},319:function(t,e,n){t.exports=n.p+"img/fc46455.png"},320:function(t,e,n){t.exports=n.p+"img/ed9830e.png"},321:function(t,e,n){t.exports=n.p+"img/affaa60.png"},322:function(t,e,n){t.exports=n.p+"img/104c5e8.png"},323:function(t,e,n){t.exports=n.p+"img/c67e6b3.png"},324:function(t,e,n){t.exports=n.p+"img/ee62e81.png"},325:function(t,e,n){t.exports=n.p+"img/41bd1c5.png"},326:function(t,e,n){t.exports=n.p+"img/15eb264.png"},327:function(t,e,n){t.exports=n.p+"img/afce145.png"},328:function(t,e,n){t.exports=n.p+"img/66f6ba0.png"},329:function(t,e,n){t.exports=n.p+"img/a556433.png"},334:function(t,e,n){t.exports=n(335)},350:function(t,e,n){"use strict";n.r(e);var o=n(23);n(88),n(17),n(30),n(33);e.default=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,o,r,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,o=e.$axios,r=e.$content,c=[],(l=n.state.DataState).githubUserInfo||c.push(o({url:"https://api.github.com/users/gioelecrispo",method:"get"}).then((function(t){n.dispatch("DataState/setGithubUserInfo",t.data)})).catch((function(t){console.error("setGithubUserInfo - Too Much Requests",t)}))),l.githubProjects||c.push(o({url:"https://api.github.com/users/gioelecrispo/repos",method:"get"}).then((function(t){n.dispatch("DataState/setGithubProjects",t.data)})).catch((function(t){console.error("setGithubProjects - Too Much Requests",t)}))),l.blogArticles||r("blog").only(["title","description","img","slug","tags","createdAt","updatedAt"]).sortBy("createdAt","desc").fetch().then((function(t){n.dispatch("DataState/setBlogArticles",t)})),t.abrupt("return",Promise.all(c));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},351:function(t,e,n){"use strict";n.r(e);var o=n(15),r=n(14);n(252);e.default=function(t){var e=t.store,n=t.route,meta=(t.redirect,n.meta[0]);if("object"===Object(r.a)(meta))for(var c=0,l=Object.entries(meta);c<l.length;c++){var d=Object(o.a)(l[c],2),f=d[0],m=d[1];e.commit("setProperty",{property:f,value:m})}}},358:function(t,e,n){"use strict";n(258)},361:function(t,e,n){},374:function(t,e,n){"use strict";n(265)},401:function(t,e,n){t.exports=n.p+"img/ee46707.png"},402:function(t,e,n){t.exports=n.p+"img/9fb9dc7.jpg"},403:function(t,e,n){t.exports=n.p+"img/d00c6f8.png"},406:function(t,e,n){"use strict";n(271)},408:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return r}));var o=function(){return{appToolbarTitle:"",showAppToolbar:!1,showAppToolbarImage:!1,showAppNavigationDrawer:!1,showAppFooter:!1,showContentToolbar:!1,showContentHeader:!1,showContentFooter:!1}},r={setProperty:function(t,e){var n=e.property,o=e.value;t[n]=o}}},409:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"actions",(function(){return c})),n.d(e,"mutations",(function(){return l}));var o=function(){return{appToolbarTitle:"",appToolbarImage:void 0,showAppToolbar:!1,showAppToolbarImage:!1,showAppNavigationDrawer:!1,showAppFooter:!1,showContentToolbar:!1,showContentHeader:!1,showContentFooter:!1,leftNavDrawer:!1,isDark:!1,navLinks:[{id:"home",title:"Home",icon:"mdi-home",path:"/"},{id:"cv",title:"Curriculum Vitae",icon:"mdi-timeline-text",path:"/cv"},{id:"applications",title:"Applications",icon:"mdi-briefcase-outline",path:"/applications"},{id:"projects",title:"Projects",icon:"mdi-github",path:"/projects"},{id:"blog",title:"Blog",icon:"mdi-file-document-outline",path:"/blog"}]}},r={isLeftNavDrawer:function(t){return t.leftNavDrawer},isDark:function(t){return t.isDark},getAppToolbarImage:function(t){return t.appToolbarImage},getNavLinks:function(t){return t.navLinks}},c={resetState:function(t){(0,t.commit)("resetState")},setIsDark:function(t,e){(0,t.commit)("setIsDark",e)},setAppToolbarImage:function(t,e){(0,t.commit)("setAppToolbarImage",e)},setLeftNavDrawer:function(t,e){(0,t.commit)("setLeftNavDrawer",e)},setProperty:function(t,e){(0,t.commit)("setProperty",{property:e.property,value:e.value})}},l={setIsDark:function(t,e){t.isDark=e},setAppToolbarImage:function(t,e){t.appToolbarImage=e},setLeftNavDrawer:function(t,e){t.leftNavDrawer=e},setProperty:function(t,e){var n=e.property,o=e.value;t[n]=o}}},410:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return c})),n.d(e,"getters",(function(){return l})),n.d(e,"actions",(function(){return d})),n.d(e,"mutations",(function(){return f}));n(35),n(17),n(20),n(50),n(30),n(5),n(44),n(60),n(33);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,c=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw c}}}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c=function(){return{githubUserInfo:void 0,githubProjects:void 0,blogArticles:void 0,certifications:[{id:"MLS-C01",title:"AWS Machine Learning Specialty",date:"9 Mar 2021",color:"orange darken-2",icon:"mdi-medal",credential:"https://www.youracclaim.com/badges/314500b7-2107-4355-b4c7-10f1c7972a75?source=linked_in_profile"},{id:"B1.1 of the CEFR",title:"Trinity - Grade 5",date:"23 Jan 2015",color:"blue darken-2",icon:"mdi-web"}],publications:[{title:"Writing Order Recovery in Complex and Long Static Handwriting",authors:"Moises Diaz · Gioele Crispo · Antonio Parziale · Angelo Marcelli · Miguel A. Ferrer",href:"https://www.researchgate.net/publication/349988795_Writing_Order_Recovery_in_Complex_and_Long_Static_Handwriting",date:"March 2021",location:"International Journal of Interactive Multimedia and Artificial Intelligence – IJIMAI"},{title:"Tracking the Ballistic Trajectory in Complex and Long Handwritten Signatures",authors:"Gioele Crispo · Moises Diaz · Angelo Marcelli · Miguel A. Ferrer",href:"https://www.researchgate.net/publication/327405064_Tracking_the_Ballistic_Trajectory_in_Complex_and_Long_Handwritten_Signatures",date:"August 2018",location:"Conference: 16th International Conference on Frontiers in Handwriting Recognition (ICFHR) At: Niagara Falls, USA"}],experiences:[{color:"blue darken-2",icon:"mdi-briefcase",date:"May 2018 - now",location:"Naples (Italy)",position:"AI Software Engineer",company:"NTT Data Italia",text:"Software engineer focused on issues of Artificial Intelligence and Natural Language Processing. Main duties:  design of software architectures in AI projects; design and implementation of the AI and NLP functionalities with an eye on the efficiency and reusability of the models;  team coordination in various projects."},{color:"orange darken-1",icon:"mdi-briefcase-search",date:"Nov 2017 - Feb 2018",location:"Las Palmas de Gran Canaria (Spain)",position:"Research Internship",company:"Universidad del'Atlantico Medio",text:"The work was focused on pattern recognition and pattern prediction on signatures. The result was a conference paper, Tracking the Ballistic Trajectory in Complex and Long Handwritten Signatures, was written and published at the 16th International Conference on Frontiers in Handwriting Recognition."},{color:"orange darken-1",icon:"mdi-briefcase-search",location:"Fisciano, Salerno (Italy)",position:"Company Internship",company:"A.I Tech",date:"Nov 2014 - Jun 2015",text:"The work was focused on the design and implementation of a gesture recognition system on a Kinect sensor. I proposed a new feature extraction method for gestures."},{color:"red darken-2",icon:"mdi-school",date:"Oct 2015 - Feb 2018",location:"Fisciano, Salerno (Italy)",position:"Master's Degree - Computer Engineering",company:"Università degli Studi di Salerno",text:"Skills acquired: Semantic technologies, Data Mining and Machine Learning, Network Security, Robotics, Artificial Intelligence and Artificial Vision, Sistributed programming.",vote:"110/110 cum laude"},{color:"red darken-2",icon:"mdi-school",date:"Oct 2011 - Jun 2015",location:"Fisciano, Salerno (Italy)",position:"Bachelor's Degree - Computer Engineering",company:"Università degli Studi di Salerno",text:"Skills acquired: Object Oriented Programming; Automatic Controls; Internet and Network stacks; Mathematics, Statistics,Telecommunications and Physics fundamentals.",vote:"103/110"}],skills:{"Programming Languages":[{avatar:n(305),title:"<span><strong>Python</strong></span>",subtitle:"<span>Data Science</span> &mdash; with AI Frameworks, numpy, pandas, g-unicorn, aiohttp, Flask and others for making microservices",value:95},{avatar:n(306),title:"<span><strong>Javascript</strong></span>",subtitle:"<span>Backend and Frontend</span> &mdash; NodeJS, VueJS;  use of NodeJS to create NodeVM sandboxed microservices in javascript",value:90},{avatar:n(307),title:"<span><strong>Java</strong></span>",subtitle:"<span>Backend</span> &mdash; Spring, Spring Boot, Javadoc, Stream, Eureka, Swagger codegen, microservices",value:85},{avatar:n(308),title:"<span><strong>Matlab</strong></span>",subtitle:"<span>Data Science</span> &mdash; Master's degree thesis strongly focused on Pattern Recognition and Image Analysis",value:85},{avatar:n(309),title:"<span><strong>C++</strong></span>",subtitle:"<span>Computer Vision</span> &mdash; OpenCV based bachelor's degree thesis",value:39},{avatar:n(310),title:"<span><strong>C</strong></span>",subtitle:"<span>Generic use</span> &mdash; Some project focused on CV and IoT made on Raspberry Pi 3",value:65},{avatar:n(311),title:"<span><strong>SQL</strong></span>",subtitle:"<span>Databases</span> &mdash; used for many projects",value:90},{avatar:n(312),title:"<span><strong>HTML, CSS</strong></span>",subtitle:"<span>Frontend</span> &mdash; used with VueJS",value:80}],"Data Science and AI Frameworks":[{avatar:n(313),title:"<span><strong>Tensorflow, Keras</strong></span>",subtitle:"<span>NLP and Audio Projects</span>",value:70},{avatar:n(314),title:"<span><strong>PyTorch, FastAI</strong></span>",subtitle:"<span>NLP projects</span> &mdash; GPU optimized",value:70},{avatar:n(315),title:"<span><strong>BERT, Scikit-learn</strong></span>",subtitle:"<span>NLP projects</span>",value:90},{avatar:n(316),title:"<span><strong>Elastic Stack</strong></span>",subtitle:"<span>Big Data</span> &mdash; Elasticsearch, Kibana, Logstash, MetricBeat, FileBeat",value:75}],"General Frameworks":[{avatar:n(317),title:"<span><strong>Spring 5.X, Spring Boot 2.X</strong></span>",subtitle:"<span>Enterprise Java</span> &mdash; MVC and Reactor, REST, Hibernate, String Security, Spring Data",value:75},{avatar:n(318),title:"<span><strong>NodeJS 10.X, VueJS 2.X</strong></span>",subtitle:"<span>Backend and Frontend</span>",value:85}],Tools:[{avatar:n(319),title:"<span><strong>AWS Services</strong></span>",subtitle:"<span>Lambda, S3, DynamoDB, EC2, Kinesis, SageMaker </span> &mdash; and other stuff of AI projects.",value:70},{avatar:n(320),title:"<span><strong>MongoDB, MariaDB</strong></span>",subtitle:"<span>Data storages</span> &mdash; for multi-clustered cloud architectures",value:80},{avatar:n(321),title:"<span><strong>RabbitMQ, ZMQ, Kafka</strong></span>",subtitle:"<span>Message Brokers, Data stream</span> &mdash; used in high rate cloud architectures",value:70},{avatar:n(322),title:"<span><strong>Docker, Kubernetes</strong></span>",subtitle:"<span>Deployment</span> &mdash; Containers, PODS, microservices",value:50}],"Project Management tools":[{avatar:n(323),title:"<span><strong>Git, SVN</strong></span>",subtitle:"<span>Source version control</span>"},{avatar:n(324),title:"<span><strong>Jira, Redmine</strong></span>",subtitle:"<span>Agile development</span> &mdash; with Issues / Bugs tracking"}],"Communication capabilities":[{avatar:n(325),title:"<span><strong>Teamwork</strong></span>",subtitle:"<span>Focused on team and cooperation</span>"}],"Organisational / managerial skills":[{avatar:n(326),title:"<span><strong>Punctual</strong></span>",subtitle:"<span>Careful in meeting deadlines</span>"},{avatar:n(327),title:"<span><strong>Goal oriented</strong></span>",subtitle:"<span>Projected on the goal, but also giving importance to the details</span>"},{avatar:n(328),title:"<span><strong>Leadership</strong></span>",subtitle:"<span>Team leader in several projects</span>"}],"Driving Licence":[{avatar:n(329),title:"<span><strong>A1, B</strong></span>",subtitle:"<span>Driving licence for car and scooter with 125 cc max</span>"}]},applications:[{name:"Self Driving model car",description:"Self driving model car in style Duckietown. Features a homemade lane following algorithm as well a road sign detector and classifier based on cascade detector and HOG descriptor.",type:"Artificial Intelligence",area:"Computer Vision",color:"blue",group:"4 people",technologies:"ROS, C++, OpenCV",date:"July 2017",resources:[{videoId:"nC_KHnol8jI"},{img:n(411)},{img:n(412)},{img:n(413)}]},{name:"Remake of a classic videogame",description:'As a coursework, we did our own version of the classic game "Galaga" in Java, using the Extreme Programming methodology.',type:"Other",area:"Software Engineering",color:"purple",group:"8 people",technologies:"Java, Extreme Programming",date:"Jan 2016",resources:[{videoId:"8vTdgrHNEMY"},{img:n(414)}]},{name:"Mobile App",description:"Mobile hybrid app for the attendees to a conference. The app allows to browse the attendees to the conference, to view the scientific program, to enable notifications for specific talks and to gather general information about the conference.\nThe app interfaces with a web service to update the information, but also features a local cache to allow offline browsing. The app interfaces with the Scopus database to automatically show blbliometrics about the many speakers. The project involved developing both the server web-service and the app (released on the Google Play Store and on the Apple Store). The app was developed using the hybrid technology Ionic 2.",type:"Other",area:"Mobile App",color:"gray",group:"4 people",technologies:"ROS, C++, OpenCV",date:"July 2017",resources:[{img:n(415)},{img:n(416)}]},{name:"Mrs. Pacman A.I. player - Evolutionary programming",description:"A rule-based Artificial Intelligent player. Genetic Algorithm was used to optimize the performance. Based on Pambush III.",type:"Artificial Intelligence",color:"red",area:"Artificial Intelligence",group:"3 people",technologies:"Java",date:"July 2017",resources:[{videoId:"8_R36Kj4Njo"},{img:n(417)}]},{name:"Writing Order Recovery in complex and long static handwriting",description:"Algorithm for writing order recovery of long static handwriting. A pattern recognition system was made to detect all the trace intersections, then a global reconstruction phase was carried out to connect all the traces. A genetic algorithm was used to optimize the hyperparameters of the pattern recognition system.",type:"Artificial Intelligence",color:"blue",area:"Computer Vision & Pattern Recognition",group:"1 person",technologies:"Matlab, Python, OpenCV",date:"February 2018",resources:[{videoId:"TYoZZ8CThhw"},{img:n(418)}]},{name:"Smart Waste Bin",description:"A Smart Waste Bin made for NTT DATA Italy at AI Hackathon 2020 (24 hours).\n\nThe system is composed of:\n- An Artificial Intelligence model for the recognition of waste material (paper, plastic, cardboard, metal, glass) trained on a dataset of 2400 images\n- A Raspberry pi 3 model B;\n- A HC-SR04 ultrasonic sensor;\n- A 1602 ° LCD display;\n- A Smartphone with FullHD camera;\n- A Simulated 5G connection.",type:"Artificial Intelligence",color:"blue",area:"Computer Vision  &  IoT",group:"7 people",technologies:"Java",date:"February 2020",resources:[{videoId:"2Zgz2MiItXI"},{img:n(419)},{img:n(420)}]},{name:"Control of Industrial Robot Comau SmartSix",description:"Pick-and-place like application with ROS and Industrial robot Comau SmartSix",type:"Other",color:"green",area:"Robotics",group:"2 people",technologies:"C++, Ros, Matlab, Simulink",date:"July 2017",resources:[{videoId:"cZCZZ23GLLc"},{img:n(421)}]},{name:"Gesture Recognition & Robot control system",description:"A gesture recognition & Robot Control System made for a Bachelor's thesis work. The system was realized through OpenCV, Kinect SDK and Qt in C++.\nIt is composed of a Pioneer robot, a Kinect sensor and a Ad-hoc Wi-Fi connection for the PC-robot communication. \nThe images captured by the Kinect sensor are processed by the PC, which identifies and evaluates the gestures (up, down, left, right and stop) in a time window and passes the commands to the robot via a Wi-Fi-based protocol.",type:"Artificial Intelligence",color:"blue",area:"Computer Vision",group:"2 people",technologies:"C++, OpenCV, Kinect SDK",date:"February 2020",resources:[{videoId:"w_z12qTZt-U"},{img:n(422)}]}]}},l={getGithubUserInfo:function(t){return t.githubUserInfo},getGithubProjects:function(t){return t.githubProjects},getApplications:function(t){return t.applications},getCertifications:function(t){return t.certifications},getPublications:function(t){return t.publications},getSkills:function(t){return t.skills},getExperiences:function(t){return t.experiences},getBlogArticles:function(t){return t.blogArticles},getBlogTopics:function(t){var e,n=[],r=o(t.blogArticles);try{for(r.s();!(e=r.n()).done;){var c,l=o(e.value.tags);try{for(l.s();!(c=l.n()).done;){var d=c.value;n.push(d)}}catch(t){l.e(t)}finally{l.f()}}}catch(t){r.e(t)}finally{r.f()}return n}},d={setGithubUserInfo:function(t,e){(0,t.commit)("setGithubUserInfo",e)},setGithubProjects:function(t,e){(0,t.commit)("setGithubProjects",e)},setBlogArticles:function(t,e){(0,t.commit)("setBlogArticles",e)}},f={setGithubUserInfo:function(t,e){t.githubUserInfo=e},setGithubProjects:function(t,e){t.githubProjects=e},setBlogArticles:function(t,e){t.blogArticles=e}}},411:function(t,e,n){t.exports=n.p+"img/074d0fe.jpg"},412:function(t,e,n){t.exports=n.p+"img/74a9d0e.jpg"},413:function(t,e,n){t.exports=n.p+"img/a9f9fa2.jpg"},414:function(t,e,n){t.exports=n.p+"img/0bb1cb9.jpg"},415:function(t,e,n){t.exports=n.p+"img/610251c.jpg"},416:function(t,e,n){t.exports=n.p+"img/6749722.jpg"},417:function(t,e,n){t.exports=n.p+"img/3bc25a7.jpg"},418:function(t,e,n){t.exports=n.p+"img/8240951.png"},419:function(t,e,n){t.exports=n.p+"img/8cd0e26.jpg"},420:function(t,e,n){t.exports=n.p+"img/7dc34a9.jpg"},421:function(t,e,n){t.exports=n.p+"img/bedb879.jpg"},422:function(t,e,n){t.exports=n.p+"img/1866566.png"},62:function(t,e,n){"use strict";n(20);e.a={data:function(){return{}},computed:{},methods:{mobile:function(){return"xs"===this.$vuetify.breakpoint.name},tablet:function(){return"sm"===this.$vuetify.breakpoint.name},tabletAndDown:function(){return"xs"===this.$vuetify.breakpoint.name||"sm"===this.$vuetify.breakpoint.name},isUiLarger:function(){return this.$vuetify.breakpoint.width>this.$vuetify.breakpoint.height}}}},84:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(358),n(22)),c=n(37),l=n.n(c),d=n(476),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n        "+t._s(t.pageNotFound)+"\n    ")]):n("h1",[t._v("\n        "+t._s(t.otherError)+"\n    ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n        Home page\n    ")])],1)}),[],!1,null,"c3fa6e66",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[334,9,2,10]]]);