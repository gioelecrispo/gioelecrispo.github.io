(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{485:function(t,e,r){},492:function(t,e,r){var map={"./mlops.jpg":304,"./solid-rules.png":493,"./wor-talk.png":494};function o(t){var e=n(t);return r(e)}function n(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=n,t.exports=o,o.id=492},493:function(t,e,r){t.exports=r.p+"img/7448a71.png"},494:function(t,e,r){t.exports=r.p+"img/077706c.png"},495:function(t,e,r){"use strict";r(485)},508:function(t,e,r){"use strict";var o={name:"Article",components:{},props:["article"],data:function(){return{}},computed:{img:function(){return r(492)("./".concat(this.article.img))}},methods:{navigate:function(t){var path={name:"articles-id",params:{id:t}};this.$router.push(path)},formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}},n=(r(495),r(21)),c=r(36),l=r.n(c),d=r(190),v=r(118),f=r(475),h=r(481),m=r(516),y=r(154),w=r(474),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.hover;return[r("v-card",{staticClass:"flip-in-ver-right",class:o?"expand":"",attrs:{"max-width":o?360:350,height:o?510:500,elevation:o?20:8}},[r("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[r("v-row",{staticClass:"pb-2"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[r("v-img",{staticClass:"white--text",attrs:{height:"200px",src:t.img}})],1)],1),t._v(" "),r("v-row",{staticClass:"pb-2"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[t.article.tags?r("v-card-subtitle",{staticClass:"pl-4 pr-0 py-0 secondary--text"},[t._v(t._s(t.article.tags.map((function(t){return"#"+t})).join(", "))+"\n                        ")]):t._e()],1),t._v(" "),r("v-col",{staticClass:"pa-0"}),t._v(" "),r("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[r("v-card-subtitle",{staticClass:"px-4 py-0"},[t._v(t._s(t.formatDate(t.article.createdAt)))])],1)],1),t._v(" "),r("v-row",{staticClass:"px-2 py-2"},[r("v-card-title",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.title)}})],1),t._v(" "),r("v-row",{staticClass:"px-2 py-2"},[r("v-card-text",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.description)}})],1)],1)],1)]}}])})}),[],!1,null,"d395f0a6",null);e.a=component.exports;l()(component,{VCard:d.a,VCardSubtitle:v.a,VCardText:v.b,VCardTitle:v.c,VCol:f.a,VContainer:h.a,VHover:m.a,VImg:y.a,VRow:w.a})},516:function(t,e,r){"use strict";var o=r(203),n=r(59),c=r(7),l=r(9);e.a=Object(c.a)(o.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},558:function(t,e,r){"use strict";r.r(e);r(8),r(5),r(10),r(11),r(6),r(12);var o=r(1),n=(r(22),r(68));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={name:"ArticlesList",layout:"AppStructure",head:function(){return{title:"Articles",meta:[{hid:"og:title",property:"og:title",content:"Articles"},{hid:"og:image",property:"og:image",content:"https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"},{hid:"description",name:"description",content:"Visit my blog section to discover all my post about machine learning and similar!"},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io/me/"+this.$route.path}]}},meta:{appToolbarTitle:"Articles",showAppToolbar:!0,showAppToolbarImage:!1,showAppFooter:!0,showAppNavigationDrawer:!0,showContentHeader:!1},components:{Article:r(508).a},props:{},data:function(){return{}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)("DataState",{blogArticles:"getBlogArticles"})),methods:{tabletAndDown:function(){return"xs"===this.$vuetify.breakpoint.name||"sm"===this.$vuetify.breakpoint.name}}},d=r(21),v=r(36),f=r.n(v),h=r(475),m=r(481),y=r(474),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"pb-12"},t._l(t.blogArticles,(function(article){return r("v-col",{key:article.slug,staticClass:"pa-2",attrs:{cols:"12",sm:"6",md:"4"}},[r("NuxtLink",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:{name:"blog-id",params:{id:article.slug}}}},[r("Article",{attrs:{article:article}})],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VCol:h.a,VContainer:m.a,VRow:y.a})}}]);