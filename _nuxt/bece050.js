(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{597:function(t,e,r){"use strict";e.a=function(title,t,e,image){return{title:title,meta:[{hid:"og:title",property:"og:title",content:title+" - Gioele Crispo"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+e},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title+" - Gioele Crispo"},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}]}}},704:function(t,e,r){"use strict";r.r(e);var n=r(28),o=(r(91),r(22),r(63),r(8),r(62),r(39),r(597)),c={head:function(){var title=this.article.title.replace(/<[^>]*>?/gm,"");return Object(o.a)(title,this.article.description,this.$route.path,r(358)("./"+this.article.img))},name:"ArticleDetails",layout:"post",components:{},props:["articleId"],asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,article;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.$content,o=t.params,e.next=3,n("blog",o.id).fetch();case 3:return article=e.sent,r.dispatch("AppState/setAppToolbarImage",article.img),e.abrupt("return",{article:article});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{production:!0,article:void 0,htmlSource:""}},mounted:function(){this.production&&this.createDisqusScript()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},createDisqusScript:function(){var t,s;this.$route.path;t=document,(s=t.createElement("script")).src="https://gioelecrispo.disqus.com/embed.js",s.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(s)}},watch:{"$vuetify.theme.dark":function(t,e){this.production&&window.DISQUS.reset({reload:!0})},"$vuetify.theme.themes.dark.primary":function(t,e){this.production&&window.DISQUS.reset({reload:!0})}}},d=r(17),l=r(25),m=r.n(l),h=r(237),v=r(51),f=r(586),w=r(595),y=r(588),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-container",[r("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[r("v-col",{attrs:{lg:"10",xl:"9"}},[r("v-card",{staticClass:"pa-0 py-2 mb-8",attrs:{color:"transparent",height:"30",elevation:"0"}},[t.article.tags?r("v-card-title",{staticClass:"px-0 py-0 primary--text"},[t._v(t._s(t.article.tags.map((function(t){return"#"+t})).join(", "))+"\n                    ")]):t._e(),t._v(" "),r("v-card-text",{staticClass:"px-0 py-0 grey--text"},[t._v("Written on: "+t._s(t.formatDate(t.article.createdAt))+"\n                    ")]),t._v(" "),r("v-card-text",{staticClass:"px-0 py-0 grey--text"},[t._v("Latest update: "+t._s(t.formatDate(t.article.updatedAt))+"\n                    ")])],1),t._v(" "),r("article",{staticClass:"pt-12"},[r("nuxt-content",{attrs:{document:t.article}})],1)],1)],1),t._v(" "),t.production?r("client-only",{attrs:{placeholder:"loading..."}},[r("h2",{staticClass:"mt-12 mb-2"},[t._v("Comments")]),t._v(" "),r("div",{attrs:{id:"disqus_thread"}})]):t._e()],1)],1)}),[],!1,null,"576c2ddc",null);e.default=component.exports;m()(component,{VCard:h.a,VCardText:v.b,VCardTitle:v.c,VCol:f.a,VContainer:w.a,VRow:y.a})}}]);