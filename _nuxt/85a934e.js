(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{649:function(t,e,o){"use strict";o(262);e.a=function(title,t,e,image){var o=e.endsWith("/")?e:"".concat(e,"/");return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+o},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}],link:[{hid:"canonical",rel:"canonical",href:"https://gioelecrispo.github.io"+o}]}}},673:function(t,e,o){"use strict";var r=o(166),n=o(80),c=o(6),l=o(11);e.a=Object(c.a)(r.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},698:function(t,e,o){t.exports={}},699:function(t,e,o){t.exports={}},740:function(t,e,o){"use strict";o(698)},741:function(t,e,o){"use strict";o(699)},774:function(t,e,o){"use strict";o.r(e);var r=o(640),n=o(646),c=o(639),l=(o(9),o(7),o(10),o(3),o(12),o(8),o(13),o(1)),d=o(248),h=o(31),f=o(673),m=o(210),y=(o(97),o(69),o(70),{name:"Book",components:{},props:["book"],data:function(){return{}},computed:{img:function(){return this.book.img}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}}),v=(o(740),o(17)),k=Object(v.a)(y,(function(){var t=this,e=t._self._c;return e(f.a,{scopedSlots:t._u([{key:"default",fn:function(o){var l=o.hover;return[e(d.a,{staticClass:"flip-in-ver-right",class:"".concat(l?"expand":""),attrs:{height:l?470:460,elevation:l?20:8,nuxt:"",to:"/books/".concat(t.book.id)}},[e(n.a,{staticClass:"pt-0",attrs:{fluid:""}},[e(c.a,{staticClass:"pb-2"},[e(r.a,{staticClass:"pa-0",attrs:{cols:"6"}},[e(m.a,{staticClass:"white--text",attrs:{height:l?470:460,src:t.img}})],1),t._v(" "),e(r.a,{staticClass:"pa-2",attrs:{cols:"6"}},[e(c.a,{staticClass:"pb-0"},[t.book.tags?e(h.a,{staticClass:"pl-4 pr-0 py-0 primary--text"},[t._v(t._s(t.book.tags.map((function(t){return"#"+t})).join(", "))+"\n                            ")]):t._e()],1),t._v(" "),e(c.a,{staticClass:"pb-2"},[e(r.a,{staticClass:"pa-0",attrs:{cols:"auto"}},[e(h.a,{staticClass:"px-4 py-0"},[t._v(t._s(t.formatDate(t.book.publishedAt)))])],1)],1),t._v(" "),e(c.a,{staticClass:"px-2 py-2"},[e(h.c,{staticClass:"px-4 py-2 title",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.book.title)}}),t._v(" "),e(h.a,{staticClass:"px-4 py-4 subtitle",staticStyle:{"word-break":"break-word"},domProps:{innerHTML:t._s(t.book.subtitle)}})],1),t._v(" "),e(c.a,{staticClass:"px-2 py-2"},[e(h.b,{staticClass:"px-4 py-2",staticStyle:{"line-height":"1.2"},domProps:{innerHTML:t._s(t.book.description)}})],1)],1)],1)],1)],1)]}}])})}),[],!1,null,"e0efb9d4",null).exports,w=o(649),O=o(48),_=o(45);function j(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}var x={name:"BookList",layout:"page",mixins:[O.a],head:function(){return Object(w.a)("Books","Visit my books section to discover all my books!",this.$route.path,"".concat("https://gioelecrispo.github.io","/seo/books.jpg"))},components:{Book:k},props:{},data:function(){return{}},created:function(){this.$store.dispatch("AppState/setAppToolbarTitle","Books")},mounted:function(){},computed:function(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?j(Object(o),!0).forEach((function(e){Object(l.a)(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):j(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}({},Object(_.b)("DataState",{books:"getBooks"}))},C=x,S=(o(741),Object(v.a)(C,(function(){var t=this,e=t._self._c;return e(n.a,{attrs:{fluid:""}},[e(n.a,[e(c.a,{staticClass:"pb-12"},t._l(t.books,(function(t,o){return e(r.a,{key:o,staticClass:"pa-2",staticStyle:{"align-items":"center"},attrs:{cols:"12"}},[e("NuxtLink",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:{name:"books-id",params:{id:t.id}}}},[e("Book",{attrs:{book:t}})],1)],1)})),1)],1)],1)}),[],!1,null,"0cde6334",null));e.default=S.exports}}]);