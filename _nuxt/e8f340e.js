(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{581:function(t,e,r){"use strict";e.a=function(title,t,e,image){return{title:title,meta:[{hid:"og:title",property:"og:title",content:title+" - Gioele Crispo"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+e},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title+" - Gioele Crispo"},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}]}}},583:function(t,e,r){},589:function(t,e,r){"use strict";r(583)},609:function(t,e,r){"use strict";var n={name:"Article",components:{},props:["article"],data:function(){return{}},computed:{img:function(){return r(349)("./".concat(this.article.img))}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}},o=(r(589),r(21)),c=r(28),l=r.n(c),d=r(229),f=r(53),m=r(571),v=r(579),h=r(618),y=r(192),w=r(570),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"flip-in-ver-right",class:n?"expand":"",attrs:{height:n?510:500,elevation:n?20:8,nuxt:"",to:"/blog/"+t.article.slug}},[r("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[r("v-row",{staticClass:"pb-2"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[r("v-img",{staticClass:"white--text",attrs:{height:"200px",src:t.img}})],1)],1),t._v(" "),r("v-row",{staticClass:"pb-2"},[r("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[t.article.tags?r("v-card-subtitle",{staticClass:"pl-4 pr-0 py-0 secondary--text"},[t._v(t._s(t.article.tags.map((function(t){return"#"+t})).join(", "))+"\n                        ")]):t._e()],1),t._v(" "),r("v-col",{staticClass:"pa-0"}),t._v(" "),r("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[r("v-card-subtitle",{staticClass:"px-4 py-0"},[t._v(t._s(t.formatDate(t.article.createdAt)))])],1)],1),t._v(" "),r("v-row",{staticClass:"px-2 py-2"},[r("v-card-title",{staticClass:"px-4 py-2",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.article.title)}})],1),t._v(" "),r("v-row",{staticClass:"px-2 py-2"},[r("v-card-text",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.description)}})],1)],1)],1)]}}])})}),[],!1,null,"792e5d76",null);e.a=component.exports;l()(component,{VCard:d.a,VCardSubtitle:f.a,VCardText:f.b,VCardTitle:f.c,VCol:m.a,VContainer:v.a,VHover:h.a,VImg:y.a,VRow:w.a})},619:function(t,e,r){},643:function(t,e,r){t.exports=r.p+"img/55cc3fb.jpg"},644:function(t,e,r){"use strict";r(619)},683:function(t,e,r){"use strict";r.r(e);r(10),r(8),r(12),r(13),r(9),r(14);var n=r(1),o=r(27),c=(r(57),r(35),r(3),r(625),r(626),r(628),r(629),r(630),r(631),r(632),r(633),r(634),r(635),r(636),r(637),r(638),r(639),r(640),r(641),r(642),r(39),r(22),r(245),r(89),r(52)),l=r(609),d=r(581);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"ArticlesList",layout:"page",mixins:[r(47).a],middleware:["blogDataFetcher"],head:function(){return Object(d.a)("Blog","Visit my blog section to discover all my post about machine learning and similar!",this.$route.path,r(643))},components:{Article:l.a},props:{},data:function(){return{filters:{query:"",topics:""},blogArticles:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.filterArticles("",t.allBlogTopics);case 2:t.blogArticles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("DataState",{allBlogArticles:"getBlogArticles",allBlogTopics:"getBlogTopics"})),created:function(){this.$store.dispatch("AppState/setAppToolbarTitle","Blog"),this.filters.topics=Array.from(new Set(this.allBlogTopics))},methods:{filterArticles:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.$content("blog").search(t).sortBy("createdAt","desc").where({tags:{$containsAny:e}}).fetch();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}},watch:{filters:{deep:!0,immediate:!1,handler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.query||(t.query=""),r.next=3,e.filterArticles(t.query,t.topics);case 3:e.blogArticles=r.sent;case 4:case"end":return r.stop()}}),r)})))()}}}},v=m,h=(r(644),r(21)),y=r(28),w=r.n(y),C=r(676),x=r(620),_=r(571),O=r(579),j=r(570),A=r(148),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"pt-3 pb-12",attrs:{justyfy:"center"}},[r("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[r("v-text-field",{staticClass:"centered-input",attrs:{color:"primary",label:"Search posts",filled:"","hide-details":"",autocomplete:"off",outlined:"",clearable:"","prepend-inner-icon":"search"},model:{value:t.filters.query,callback:function(e){t.$set(t.filters,"query",e)},expression:"filters.query"}})],1),t._v(" "),r("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[r("v-autocomplete",{staticClass:"centered-input",attrs:{color:"secondary",label:"Filter by topic",items:t.allBlogTopics,elevation:"0","hide-details":"",outlined:"",filled:"",multiple:"","prepend-inner-icon":"mdi-pound"},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item,o=e.index;return[o<=1?r("v-chip",{attrs:{color:"secondary",label:""}},[r("span",[t._v(t._s(n))])]):t._e(),t._v(" "),2===o?r("span",{staticClass:"grey--text caption"},[t._v("\n                      (+"+t._s(t.filters.topics.length-2)+" others)\n                    ")]):t._e()]}}]),model:{value:t.filters.topics,callback:function(e){t.$set(t.filters,"topics",e)},expression:"filters.topics"}})],1)],1),t._v(" "),r("v-row",{staticClass:"pb-12"},t._l(t.blogArticles,(function(article){return r("v-col",{key:article.slug,staticClass:"pa-2",staticStyle:{"align-items":"center"},attrs:{cols:"12",sm:"6",md:"4"}},[r("NuxtLink",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:{name:"blog-id",params:{id:article.slug}}}},[r("Article",{attrs:{article:article}})],1)],1)})),1)],1)}),[],!1,null,"383bcb96",null);e.default=component.exports;w()(component,{VAutocomplete:C.a,VChip:x.a,VCol:_.a,VContainer:O.a,VRow:j.a,VTextField:A.a})}}]);