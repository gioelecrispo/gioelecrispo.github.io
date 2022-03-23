(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{581:function(t,e,n){"use strict";e.a=function(title,t,e,image){return{title:title,meta:[{hid:"og:title",property:"og:title",content:title+" - Gioele Crispo"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+e},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title+" - Gioele Crispo"},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}]}}},585:function(t,e,n){},593:function(t,e,n){"use strict";n(585)},608:function(t,e,n){"use strict";n(42);var r={name:"Certification",components:{},props:["certification"],mixins:[{data:function(){return{}},computed:{},methods:{hexToRgb:function(t){var e=parseInt(t,16);return(e>>16&255)+","+(e>>8&255)+","+(255&e)}}}],data:function(){return{}},computed:{style:function(){var t=this.hexToRgb(this.certification.color.slice(1));return this.$vuetify.theme.isDark&&(t="0,0,0"),{"background-image":"linear-gradient(to right, rgba("+t+",0.99) 30%, rgba("+t+",0)), url("+this.certification.imageUrl+")!important"}}},methods:{}},o=(n(593),n(21)),c=n(28),l=n.n(c),d=n(671),v=n(571),f=n(570),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-alert",{staticClass:"py-2 px-4 mb-1 imageBackground",style:t.style,attrs:{text:"",width:"100%",border:"bottom",color:t.certification.color}},[n("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[n("v-col",{staticClass:"pa-2 pt-1"},[n("h3",{staticClass:"headline white--text"},[t._v("\n                "+t._s(t.certification.title)+"\n            ")]),t._v(" "),n("v-row",{staticClass:"py-0",attrs:{align:"center"}},[n("v-col",{staticClass:"py-0 pr-2",attrs:{cols:"auto"}},[n("h5",{staticClass:"white--text"},[t._v(t._s(t.certification.id))])]),t._v(" "),t.certification.credential?n("v-col",{staticClass:"pa-0 white--text",attrs:{cols:"auto"}},[t._v("\n                    ·\n                ")]):t._e(),t._v(" "),t.certification.credential?n("v-col",{staticClass:"py-0 pl-2",attrs:{cols:"auto"}},[n("span",{staticClass:"subtitle-2"},[n("a",{staticClass:"white--text",attrs:{href:t.certification.credential}},[t._v("View credential")])])]):t._e()],1),t._v(" "),n("div",{staticClass:"white--text"},[t._v(t._s(t.certification.date)+" ")])],1)],1)],1)}),[],!1,null,"5433f5c9",null);e.a=component.exports;l()(component,{VAlert:d.a,VCol:v.a,VRow:f.a})},610:function(t,e,n){"use strict";var r={name:"Skill",components:{},props:["skill"],data:function(){return{colors:{"DEEP ORANGE":"#FF5722",ORANGE:"#FF9800",LIME:"#CDDC39","LIGHT GREEN":"#8BC34A",GREEN:"#4CAF50"}}},computed:{},methods:{getColor:function(t){return t>=0&&t<20?this.colors["DEEP ORANGE"]:t>=20&&t<40?this.colors.ORANGE:t>=40&&t<60?this.colors.LIME:t>=60&&t<80?this.colors["LIGHT GREEN"]:this.colors.GREEN}}},o=n(21),c=n(28),l=n.n(c),d=n(571),v=n(192),f=n(230),m=n(570),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"auto"}},[n("v-img",{attrs:{"max-height":"50","max-width":"50",src:t.skill.avatar}})],1),t._v(" "),n("v-col",{staticClass:"py-0 pl-3 pr-0"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"pb-0",domProps:{innerHTML:t._s(t.skill.title)}}),t._v(" "),t.skill.value?n("v-col",{staticClass:"pb-0"},[n("v-progress-linear",{attrs:{rounded:"",value:t.skill.value,color:t.getColor(t.skill.value),height:"10"}})],1):t._e()],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pt-1",domProps:{innerHTML:t._s(t.skill.subtitle)}})],1)],1)],1)}),[],!1,null,"3e20e66b",null);e.a=component.exports;l()(component,{VCol:d.a,VImg:v.a,VProgressLinear:f.a,VRow:m.a})},611:function(t,e,n){"use strict";var r={name:"Experience",components:{},props:["experience","forceDate"],mixins:[n(47).a],data:function(){return{}},computed:{},methods:{}},o=n(21),c=n(28),l=n.n(c),d=n(229),v=n(53),f=n(571),m=n(579),_=n(231),h=n(570),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.experience.color,dark:""}},[n("v-card-title",{staticClass:"py-2 px-4"},[n("v-container",{staticClass:"py-0",attrs:{fluid:""}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[n("v-row",{staticClass:"pa-0"},[n("p",{staticClass:"ma-0 title"},[t._v("\n                        "+t._s(t.experience.position)+"\n                    ")])]),t._v(" "),n("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[n("span",{staticClass:"ma-0 subtitle-2 mr-2"},[t._v(t._s(t.experience.company))]),t._v(" "),n("span",{staticClass:"mr-2"},[t._v("·")]),t._v(" "),n("span",{staticClass:"mt-1 overline",staticStyle:{"line-height":"100%"}},[t._v(t._s(t.experience.location))])])],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t.tabletAndDown()||t.forceDate?n("v-row",{staticClass:"pt-0"},[n("v-icon",{staticClass:"mx-3",attrs:{color:"white"}},[t._v("\n                mdi-clock\n            ")]),t._v(" "),n("p",{staticClass:"ma-0 py-2 outline"},[t._v("\n                "+t._s(t.experience.date)+"\n            ")])],1):t._e(),t._v(" "),n("p",{staticClass:"py-2 ma-0"},[t._v("\n            "+t._s(t.experience.text)+"\n        ")])],1)],1)}),[],!1,null,"77b492b3",null);e.a=component.exports;l()(component,{VCard:d.a,VCardText:v.b,VCardTitle:v.c,VCol:f.a,VContainer:m.a,VIcon:_.a,VRow:h.a})},612:function(t,e,n){"use strict";var r={name:"Publication",components:{},props:["publication"],data:function(){return{}},computed:{}},o=n(21),c=n(28),l=n.n(c),d=n(552),v=n(229),f=n(53),m=n(571),_=n(579),h=n(231),w=n(570),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:"",elevation:"0",width:"100%"}},[n("v-container",{staticClass:"py-0",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center","no-gutters":""}},[n("v-col",[n("v-card-title",{staticClass:"py-2",staticStyle:{"word-break":"break-word"}},[t._v("\n                "+t._s(t.publication.title)+"\n            ")])],1),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"mr-3",attrs:{icon:"",target:"_blank",href:t.publication.href,rel:"noreferrer"}},[n("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"py-1"},[n("b",[t._v(t._s(t.publication.date))]),t._v(" · "+t._s(t.publication.location)+"\n    ")]),t._v(" "),n("v-card-text",{staticClass:"pt-0 pb-1"},[t._v("\n        "+t._s(t.publication.authors)+"\n    ")])],1)}),[],!1,null,"6c1c3fe2",null);e.a=component.exports;l()(component,{VBtn:d.a,VCard:v.a,VCardText:f.b,VCardTitle:f.c,VCol:m.a,VContainer:_.a,VIcon:h.a,VRow:w.a})},613:function(t,e,n){"use strict";var r={name:"CVBtnDownload",components:{},props:["isFab"],data:function(){return{fabShow:!1,href:"docs/cv_eng.pdf"}},computed:{},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fabShow=e>60}}}},o=n(21),c=n(28),l=n.n(c),d=n(552),v=n(231),f=n(595),m=n.n(f),_=n(263),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:!t.isFab||t.isFab&&t.fabShow,expression:"!isFab || (isFab && fabShow)"}],staticClass:"scale-in-center",staticStyle:{"z-index":"2",padding:"30px!important"},attrs:{href:t.href,elevation:"0",color:t.isFab?"secondary":"primary",outlined:!t.isFab,rounded:"",download:"",fixed:t.isFab,bottom:t.isFab,right:t.isFab}},[t._v("\n    Download CV\n    "),n("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("\n        mdi-download\n    ")])],1)}),[],!1,null,"4063b1c0",null);e.a=component.exports;l()(component,{VBtn:d.a,VIcon:v.a}),m()(component,{Scroll:_.b})},621:function(t,e,n){},652:function(t,e,n){t.exports=n.p+"img/0bb6c2a.jpg"},653:function(t,e,n){"use strict";n(621)},684:function(t,e,n){"use strict";n.r(e);n(10),n(8),n(12),n(3),n(13),n(9),n(14);var r=n(1),o=(n(25),n(52)),c=n(610),l=n(611),d=n(608),v=n(612),f=n(613),m=n(581);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={name:"Works",layout:"page",scrollToTop:!0,head:function(){return Object(m.a)("Curriculum Vitae","A complete Curriculum Vitae with experiences, certifications, skill and so on.",this.$route.path,n(652))},components:{CVBtnDownload:f.a,Experience:l.a,Skill:c.a,Certification:d.a,Publication:v.a},props:{},data:function(){return{cvFabShow:!1,languages:{tableHeaders:[{text:"Language",align:"center",sortable:!1,value:"language"},{text:"Listening",align:"center",sortable:!1,value:"listening"},{text:"Reading",align:"center",sortable:!1,value:"reading"},{text:"Spoken Interaction",align:"center",sortable:!1,value:"spokenInteraction"},{text:"Spoken Production",align:"center",sortable:!1,value:"spokenProduction"},{text:"Writing",align:"center",sortable:!1,value:"writing"}],tableValues:[{language:"English",listening:"B2",reading:"C1",spokenInteraction:"B2",spokenProduction:"B2",writing:"B2"},{language:"Spanish",listening:"A2",reading:"B1",spokenInteraction:"A2",spokenProduction:"A2",writing:"A2"}]}}},created:function(){this.$store.dispatch("AppState/setAppToolbarTitle","Curriculum Vitae")},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("DataState",{certifications:"getCertifications",publications:"getPublications",skills:"getSkills",experiences:"getExperiences"})),methods:{tabletAndDown:function(){return"xs"===this.$vuetify.breakpoint.name||"sm"===this.$vuetify.breakpoint.name}}},w=h,C=(n(653),n(21)),x=n(28),y=n.n(x),k=n(571),V=n(579),E=n(681),O=n(570),j=n(677),S=n(678),component=Object(C.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"fade-in-fwd",attrs:{justify:"center",align:"center","no-gutters":""}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"auto"}},[n("CVBtnDownload",{attrs:{isFab:!1}})],1)],1),t._v(" "),n("CVBtnDownload",{attrs:{isFab:!0}}),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Experiences")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},[n("v-timeline",{attrs:{dense:t.tabletAndDown()}},t._l(t.experiences,(function(e,i){return n("v-timeline-item",{key:i,attrs:{color:e.color,icon:e.icon,"fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[t.tabletAndDown()?t._e():n("span",{class:"body-1 font-weight-bold",domProps:{textContent:t._s(e.date)}})]},proxy:!0}],null,!0)},[t._v(" "),n("Experience",{attrs:{experience:e,forceDate:!1}})],1)})),1)],1),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Certifications")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},t._l(t.certifications,(function(t){return n("div",{key:t.id,staticClass:"awards-container pb-2 mx-2"},[n("Certification",{attrs:{certification:t}})],1)})),0)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-row",{attrs:{justify:"center"}},[n("h1",[t._v("Publications")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},t._l(t.publications,(function(t){return n("div",{key:t.title,staticClass:"awards-container pb-2 mx-2"},[n("Publication",{attrs:{publication:t}})],1)})),0)],1)],1),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Skills")])]),t._v(" "),t._l(t.skills,(function(e,r){return n("div",{key:r},[n("v-row",{staticClass:"pt-6 pb-2 slide-in-bottom"},[n("h3",[t._v(t._s(r))])]),t._v(" "),t._l(e,(function(t){return n("Skill",{key:t.title,attrs:{skill:t}})}))],2)})),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Languages")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom",attrs:{justify:"center"}},[n("v-data-table",{staticClass:"elevation-0",staticStyle:{width:"90%"},attrs:{headers:t.languages.tableHeaders,items:t.languages.tableValues,"hide-default-footer":""}})],1),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},[n("p",{staticClass:"my-2"},[t._v("\n            Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2:\n            Proficient user - (*) Common European Framework of Reference for Languages\n        ")])])],2)}),[],!1,null,"7aa9f952",null);e.default=component.exports;y()(component,{VCol:k.a,VContainer:V.a,VDataTable:E.a,VRow:O.a,VTimeline:j.a,VTimelineItem:S.a})}}]);