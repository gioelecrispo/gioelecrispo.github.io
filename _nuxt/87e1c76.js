(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{633:function(t,e,o){"use strict";o(260);e.a=function(title,t,e,image){var o=e.endsWith("/")?e:"".concat(e,"/");return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+o},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}],link:[{hid:"canonical",rel:"canonical",href:"https://gioelecrispo.github.io"+o}]}}},657:function(t,e,o){"use strict";var r=o(167),n=o(78),c=o(6),l=o(11);e.a=Object(c.a)(r.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},682:function(t,e,o){},683:function(t,e,o){},724:function(t,e,o){"use strict";o(682)},725:function(t,e,o){"use strict";o(683)},758:function(t,e,o){"use strict";o.r(e);var r=o(625),n=o(630),c=o(623),l=(o(9),o(8),o(10),o(3),o(12),o(7),o(13),o(1)),d=o(246),h=o(30),f=o(657),y=o(207),m=(o(96),o(67),o(72),{name:"Book",components:{},props:["book"],data:function(){return{}},computed:{img:function(){return this.book.img}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}}),v=(o(724),o(17)),k=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(f.a,{scopedSlots:t._u([{key:"default",fn:function(o){var l=o.hover;return[e(d.a,{staticClass:"flip-in-ver-right",class:"".concat(l?"expand":""),attrs:{height:l?470:460,elevation:l?20:8,nuxt:"",to:"/books/".concat(t.book.id)}},[e(n.a,{staticClass:"pt-0",attrs:{fluid:""}},[e(c.a,{staticClass:"pb-2"},[e(r.a,{staticClass:"pa-0",attrs:{cols:"6"}},[e(y.a,{staticClass:"white--text",attrs:{src:t.img}})],1),t._v(" "),e(r.a,{staticClass:"pa-2",attrs:{cols:"6"}},[e(c.a,{staticClass:"pb-0"},[t.book.tags?e(h.a,{staticClass:"pl-4 pr-0 py-0 primary--text"},[t._v(t._s(t.book.tags.map((function(t){return"#"+t})).join(", "))+"\n                            ")]):t._e()],1),t._v(" "),e(c.a,{staticClass:"pb-2"},[e(r.a,{staticClass:"pa-0",attrs:{cols:"auto"}},[e(h.a,{staticClass:"px-4 py-0"},[t._v(t._s(t.formatDate(t.book.publishedAt)))])],1)],1),t._v(" "),e(c.a,{staticClass:"px-2 py-2"},[e(h.c,{staticClass:"px-4 py-2 title",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.book.title)}}),t._v(" "),e(h.a,{staticClass:"px-4 py-4 subtitle",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.book.subtitle)}})],1),t._v(" "),e(c.a,{staticClass:"px-2 py-2"},[e(h.b,{staticClass:"px-4 py-2",staticStyle:{"line-height":"1.2"},domProps:{innerHTML:t._s(t.book.description)}})],1)],1)],1)],1)],1)]}}])})}),[],!1,null,"b0b78504",null).exports,w=o(633),O=o(46),_=o(44);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var C={name:"BookList",layout:"page",mixins:[O.a],head:function(){return Object(w.a)("Books","Visit my books section to discover all my books!",this.$route.path,"".concat("https://gioelecrispo.github.io","/seo/books.jpg"))},components:{Book:k},props:{},data:function(){return{}},created:function(){this.$store.dispatch("AppState/setAppToolbarTitle","Books")},mounted:function(){this.$router.push("/books/discover-chatgpt-by-asking-it")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(_.b)("DataState",{books:"getBooks"}))},x=C,S=(o(725),Object(v.a)(x,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{fluid:""}},[e(n.a,[e(c.a,{staticClass:"pb-12"},t._l(t.books,(function(t,o){return e(r.a,{key:o,staticClass:"pa-2",staticStyle:{"align-items":"center"},attrs:{cols:"12"}},[e("NuxtLink",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:{name:"books-id",params:{id:t.id}}}},[e("Book",{attrs:{book:t}})],1)],1)})),1)],1)],1)}),[],!1,null,"0b32c374",null));e.default=S.exports}}]);