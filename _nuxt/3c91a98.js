(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(t,e,n){"use strict";var r=n(461);e.a=r.a},198:function(t,e,n){"use strict";n.d(e,"a",(function(){return E})),n.d(e,"c",(function(){return G})),n.d(e,"b",(function(){return L}));var r=n(0),o=n(463),c=(n(7),n(5),n(8),n(11),n(6),n(12),n(1)),l=(n(32),n(159),n(489),n(155)),v=n(460),h=(n(75),n(2).a.extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var data=e.data,n=e.children;return data.staticClass="v-list-item__icon ".concat(data.staticClass||"").trim(),t("div",data,n)}})),m=n(126),d=n(200),f=n(35),_=n(61),j=n(201),O=n(125),y=n(158),C=n(9);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(C.a)(m.a,d.a,f.a,Object(j.a)("list"),_.a).extend().extend({name:"v-list-group",directives:{ripple:O.a},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(l.a,t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(h,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(v.a,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(c.a)({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:I(I({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(r.r)(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(h,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,n=this._uid===t;n&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=n}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(y.a,this.genItems())])}}),x=n(464),k=n(486),$=(n(19),n(304));function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function V(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S=$.a.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return V(V({"v-list-item__avatar--horizontal":this.horizontal},$.a.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=$.a.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),D=Object(r.h)("v-list-item__action-text","span"),E=Object(r.h)("v-list-item__content","div"),G=Object(r.h)("v-list-item__title","div"),L=Object(r.h)("v-list-item__subtitle","div");o.a,v.a,k.a,x.a},304:function(t,e,n){"use strict";var r=n(462);e.a=r.a},485:function(t,e,n){"use strict";e.a=function(title,t,e,image){return{title:title,meta:[{hid:"og:title",property:"og:title",content:title+" - Gioele Crispo"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+e},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title+" - Gioele Crispo"},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}]}}},486:function(t,e,n){"use strict";n(8);var r=n(2);e.a=r.a.extend({name:"v-list-item-action",functional:!0,render:function(t,e){var data=e.data,n=e.children,r=void 0===n?[]:n;return data.staticClass=data.staticClass?"v-list-item__action ".concat(data.staticClass):"v-list-item__action",r.filter((function(t){return!1===t.isComment&&" "!==t.text})).length>1&&(data.staticClass+=" v-list-item__action--stack"),t("div",data,r)}})},489:function(t,e,n){},500:function(t,e,n){var map={"./aws.png":321,"./c++.png":311,"./c.png":312,"./car.png":331,"./css.png":501,"./database.png":322,"./docker.png":502,"./elastic.png":318,"./git.png":325,"./html.png":314,"./java.png":309,"./javascript.png":308,"./jupyter notebook.png":503,"./kubernetes.png":324,"./matlab.png":310,"./neural.png":317,"./nodejs.png":320,"./python.png":307,"./pytorch.png":316,"./rabbitmq.png":323,"./soft/businessman.png":504,"./soft/goal.png":329,"./soft/leadership.png":330,"./soft/profile.png":505,"./soft/punctual.png":328,"./soft/teamwork.png":327,"./spring.png":319,"./sql.png":313,"./task.png":326,"./tensorflow.png":315,"./vue.png":506};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=500},501:function(t,e,n){t.exports=n.p+"img/843e631.png"},502:function(t,e,n){t.exports=n.p+"img/c1f953a.png"},503:function(t,e,n){t.exports=n.p+"img/6d270da.png"},504:function(t,e,n){t.exports=n.p+"img/33b7ef2.png"},505:function(t,e,n){t.exports=n.p+"img/5faf09a.png"},506:function(t,e,n){t.exports=n.p+"img/0a03702.png"},515:function(t,e,n){"use strict";var r={name:"Project",components:{},props:["project"],data:function(){return{}},computed:{},methods:{}},o=n(22),c=n(28),l=n.n(c),v=n(462),h=n(190),m=n(477),d=n(483),f=n(153),_=n(463),j=n(460),O=n(198),y=n(476),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"slide-in-bottom",attrs:{outlined:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-container",[r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("v-row",[r("v-list",[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("h2",{staticClass:"mb-1"},[t._v(t._s(t.project.name))]),t._v(" "),r("v-list-item-subtitle",[r("v-row",{staticClass:"pl-3",attrs:{align:"center"}},[t.project.license?r("span",{staticClass:"overline my-1"},[t._v(t._s(t.project.license.name))]):t._e(),t._v(" "),t.project.license?r("span",{staticClass:"mx-2"},[t._v("|")]):t._e(),t._v(" "),r("span",{staticClass:"my-1 overline"},[t._v("Language")]),t._v(" "),null!=t.project.language?r("v-avatar",{staticClass:"ml-3",attrs:{size:"20",tile:""}},[r("v-img",{attrs:{src:n(500)("./"+t.project.language.toLowerCase()+".png")}})],1):t._e()],1)],1),t._v(" "),r("v-list-item-subtitle",[r("span",[t._v(t._s(t.project.description))])]),t._v(" "),r("v-list-item-subtitle",{staticClass:"mt-2"},[r("a",{attrs:{href:t.project.html_url,rel:"noreferrer",target:"_blank"}},[t._v("Go to the project")])])],1)],1)],1)],1)],1)],1)],1)],1)])}),[],!1,null,"55aed67e",null);e.a=component.exports;l()(component,{VAvatar:v.a,VCard:h.a,VCol:m.a,VContainer:d.a,VImg:f.a,VList:_.a,VListItem:j.a,VListItemContent:O.a,VListItemSubtitle:O.b,VRow:y.a})},578:function(t,e,n){"use strict";n.r(e);n(7),n(5),n(8),n(11),n(6),n(12);var r=n(1),o=n(44),c=n(515),l=n(38),v=n(485);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={name:"Projects",layout:"page",head:function(){return Object(v.a)("Github Projects","A complete collection of my Github projects.",this.$route.path,"https://unsplash.com/photos/842ofHC6MaI")},components:{Project:c.a},props:{},mixins:[l.a],data:function(){return{}},created:function(){this.$store.dispatch("AppState/setAppToolbarTitle","Projects")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("DataState",{githubUserInfo:"getGithubUserInfo",githubProjects:"getGithubProjects"})),methods:{}},d=n(22),f=n(28),_=n.n(f),j=n(462),O=n(190),y=n(477),C=n(483),w=n(461),I=n(153),P=n(463),x=n(460),k=n(198),$=n(476),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"scale-in-center",attrs:{justify:"center"}},[t.githubUserInfo?r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",outlined:"",shaped:""}},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-list",{attrs:{color:"transparent"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("v-row",{staticClass:"mb-2 pl-3",attrs:{align:"center"}},[r("v-icon",{staticClass:"mr-3",attrs:{small:""}},[t._v("\n                                    mdi-github-circle\n                                ")]),t._v(" "),r("span",{staticClass:"overline"},[t._v("Github")])],1),t._v(" "),r("h2",{staticClass:"mb-1"},[t._v("\n                                "+t._s(t.githubUserInfo.login)+"\n                            ")]),t._v(" "),r("v-list-item-subtitle",[r("v-container",{staticClass:"py-1"},[r("v-row",{attrs:{align:"center"}},[r("span",[t._v(t._s(t.githubUserInfo.location))]),t._v(" "),t.mobile()?t._e():r("span",{staticClass:"mx-2"},[t._v("|")]),t._v(" "),r("span",{staticClass:"overline mt-1"},[t._v("\n                                            "+t._s(t.githubUserInfo.company)+"\n                                        ")])])],1)],1)],1)],1),t._v(" "),r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-content",[r("v-list-item-subtitle",{staticClass:"py-0"},[r("v-row",{staticClass:"pl-3",attrs:{align:"center"}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                        mdi-briefcase\n                                    ")]),t._v("\n                                    Projects: "+t._s(t.githubUserInfo.public_repos)+"\n                                ")],1)],1),t._v(" "),r("v-list-item-subtitle",{staticClass:"py-0"},[r("v-row",{staticClass:"pl-3",attrs:{align:"center"}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                        mdi-account-tie\n                                    ")]),t._v("\n                                    Followers: "+t._s(t.githubUserInfo.followers)+"\n                                ")],1)],1),t._v(" "),r("v-list-item-subtitle",{staticClass:"py-0"},[r("v-row",{staticClass:"pl-3",attrs:{align:"center"}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                        mdi-account-tie\n                                    ")]),t._v("\n                                    Following: "+t._s(t.githubUserInfo.following)+"\n                                ")],1)],1),t._v(" "),r("v-list-item-subtitle",{staticClass:"py-0"},[r("v-row",{staticClass:"pl-3",attrs:{align:"center"}},[r("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                        mdi-card-text-outline\n                                    ")]),t._v("\n                                    "+t._s(t.githubUserInfo.bio)+"\n                                ")],1)],1)],1)],1)],1),t._v(" "),r("v-row",{staticClass:"mx-3",attrs:{align:"center",color:"transparent"}},[r("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[r("v-img",{attrs:{src:n(224)}})],1)],1)],1)]):t._e()],1),t._v(" "),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-row",{attrs:{align:"center"}},t._l(t.githubProjects,(function(t){return r("v-col",{key:t.id,attrs:{cols:"12",sm:"6",md:"6"}},[r("Project",{attrs:{project:t}})],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VAvatar:j.a,VCard:O.a,VCol:y.a,VContainer:C.a,VIcon:w.a,VImg:I.a,VList:P.a,VListItem:x.a,VListItemContent:k.a,VListItemSubtitle:k.b,VRow:$.a})}}]);