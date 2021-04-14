(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{509:function(t,e,n){"use strict";var o={name:"Skill",components:{},props:["skill"],data:function(){return{colors:{"DEEP ORANGE":"#FF5722",ORANGE:"#FF9800",LIME:"#CDDC39","LIGHT GREEN":"#8BC34A",GREEN:"#4CAF50"}}},computed:{},methods:{getColor:function(t){return t>=0&&t<20?this.colors["DEEP ORANGE"]:t>=20&&t<40?this.colors.ORANGE:t>=40&&t<60?this.colors.LIME:t>=60&&t<80?this.colors["LIGHT GREEN"]:this.colors.GREEN}}},r=n(21),l=n(36),c=n.n(l),v=n(475),d=n(154),f=n(191),m=n(474),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"auto"}},[n("v-img",{attrs:{"max-height":"50","max-width":"50",src:t.skill.avatar}})],1),t._v(" "),n("v-col",{staticClass:"py-0 pl-3 pr-0"},[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"pb-0",domProps:{innerHTML:t._s(t.skill.title)}}),t._v(" "),t.skill.value?n("v-col",{staticClass:"pb-0"},[n("v-progress-linear",{attrs:{rounded:"",value:t.skill.value,color:t.getColor(t.skill.value),height:"10"}})],1):t._e()],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"pt-1",domProps:{innerHTML:t._s(t.skill.subtitle)}})],1)],1)],1)}),[],!1,null,"3e20e66b",null);e.a=component.exports;c()(component,{VCol:v.a,VImg:d.a,VProgressLinear:f.a,VRow:m.a})},510:function(t,e,n){"use strict";var o={name:"Experience",components:{},props:["experience","forceDate"],mixins:[n(60).a],data:function(){return{}},computed:{},methods:{}},r=n(21),l=n(36),c=n.n(l),v=n(190),d=n(118),f=n(475),m=n(481),_=n(458),C=n(474),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{color:t.experience.color,dark:""}},[n("v-card-title",{staticClass:"py-2 px-4"},[n("v-container",{staticClass:"py-0",attrs:{fluid:""}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[n("v-row",{staticClass:"pa-0"},[n("p",{staticClass:"ma-0 title"},[t._v("\n                        "+t._s(t.experience.position)+"\n                    ")])]),t._v(" "),n("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[n("span",{staticClass:"ma-0 subtitle-2 mr-2"},[t._v(t._s(t.experience.company))]),t._v(" "),n("span",{staticClass:"mr-2"},[t._v("·")]),t._v(" "),n("span",{staticClass:"mt-1 overline",staticStyle:{"line-height":"100%"}},[t._v(t._s(t.experience.location))])])],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"white--text"},[t.tabletAndDown()||t.forceDate?n("v-row",{staticClass:"pt-0"},[n("v-icon",{staticClass:"mx-3",attrs:{color:"white"}},[t._v("\n                mdi-clock\n            ")]),t._v(" "),n("p",{staticClass:"ma-0 py-2 outline"},[t._v("\n                "+t._s(t.experience.date)+"\n            ")])],1):t._e(),t._v(" "),n("p",{staticClass:"py-2 ma-0"},[t._v("\n            "+t._s(t.experience.text)+"\n        ")])],1)],1)}),[],!1,null,"77b492b3",null);e.a=component.exports;c()(component,{VCard:v.a,VCardText:d.b,VCardTitle:d.c,VCol:f.a,VContainer:m.a,VIcon:_.a,VRow:C.a})},511:function(t,e,n){"use strict";var o={name:"Certification",components:{},props:["certification"],data:function(){return{}},computed:{}},r=n(21),l=n(36),c=n.n(l),v=n(548),d=n(475),f=n(458),m=n(474),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-alert",{staticClass:"py-2 px-4 mb-1",attrs:{text:"",width:"100%",border:"bottom",color:t.certification.color}},[n("v-row",{staticClass:"pa-0 pt-1",attrs:{align:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-icon",{attrs:{large:"",color:t.certification.color}},[t._v(t._s(t.certification.icon))])],1),t._v(" "),n("v-col",{staticClass:"pa-2 pt-1"},[n("h3",{staticClass:"headline"},[t._v("\n                "+t._s(t.certification.title)+"\n            ")]),t._v(" "),n("v-row",{staticClass:"py-0",attrs:{align:"center"}},[n("v-col",{staticClass:"py-0 pr-2",attrs:{cols:"auto"}},[n("h5",[t._v(t._s(t.certification.id))])]),t._v(" "),t.certification.credential?n("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[t._v("\n                    ·\n                ")]):t._e(),t._v(" "),t.certification.credential?n("v-col",{staticClass:"py-0 pl-2",attrs:{cols:"auto"}},[n("span",{staticClass:"subtitle-2"},[n("a",{attrs:{href:t.certification.credential}},[t._v("View credential")])])]):t._e()],1),t._v(" "),n("div",[t._v(t._s(t.certification.date)+" ")])],1)],1)],1)}),[],!1,null,"33b4958c",null);e.a=component.exports;c()(component,{VAlert:v.a,VCol:d.a,VIcon:f.a,VRow:m.a})},512:function(t,e,n){"use strict";var o={name:"Publication",components:{},props:["publication"],data:function(){return{}},computed:{}},r=n(21),l=n(36),c=n.n(l),v=n(462),d=n(190),f=n(118),m=n(475),_=n(481),C=n(458),w=n(474),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:"",elevation:"0",width:"100%"}},[n("v-container",{staticClass:"py-0",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center","no-gutters":""}},[n("v-col",[n("v-card-title",{staticClass:"py-2"},[t._v("\n                "+t._s(t.publication.title)+"\n            ")])],1),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"mr-3",attrs:{icon:"",target:"_blank",href:t.publication.href}},[n("v-icon",[t._v("mdi-open-in-new")])],1)],1)],1)],1),t._v(" "),n("v-card-text",{staticClass:"py-1"},[n("b",[t._v(t._s(t.publication.date))]),t._v(" · "+t._s(t.publication.location)+"\n    ")]),t._v(" "),n("v-card-text",{staticClass:"pt-0 pb-1"},[t._v("\n        "+t._s(t.publication.authors)+"\n    ")])],1)}),[],!1,null,"635ebd50",null);e.a=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardText:f.b,VCardTitle:f.c,VCol:m.a,VContainer:_.a,VIcon:C.a,VRow:w.a})},513:function(t,e,n){"use strict";var o={name:"CVBtnDownload",components:{},props:["isFab"],data:function(){return{fabShow:!1,href:"docs/cv_eng.pdf"}},computed:{},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fabShow=e>60}}}},r=n(21),l=n(36),c=n.n(l),v=n(462),d=n(458),f=n(497),m=n.n(f),_=n(225),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:!t.isFab||t.isFab&&t.fabShow,expression:"!isFab || (isFab && fabShow)"}],staticClass:"scale-in-center",staticStyle:{"z-index":"2"},attrs:{href:t.href,elevation:"0",color:t.isFab?"secondary":"primary",outlined:!t.isFab,rounded:"",download:"",fixed:t.isFab,bottom:t.isFab,right:t.isFab}},[t._v("\n    Download CV\n    "),n("v-icon",{staticClass:"ml-2",attrs:{small:""}},[t._v("\n        mdi-download\n    ")])],1)}),[],!1,null,"a9ab0d98",null);e.a=component.exports;c()(component,{VBtn:v.a,VIcon:d.a}),m()(component,{Scroll:_.b})},517:function(t,e,n){},522:function(t,e,n){"use strict";n(517)},559:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(10),n(11),n(6),n(12);var o=n(1),r=(n(22),n(68)),l=n(509),c=n(510),v=n(511),d=n(512);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={name:"Works",layout:"AppStructure",head:function(){return{title:"Curriculum Vitae",meta:[{hid:"og:title",property:"og:title",content:"Curriculum Vitae"},{hid:"og:image",property:"og:image",content:"https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"},{hid:"description",name:"description",content:"A complete Curriculum Vitae with experiences, certifications, skill and so on."},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io/me"+this.$route.path}]}},meta:{appToolbarTitle:"Curriculum Vitae",showAppToolbar:!0,showAppToolbarImage:!1,showAppFooter:!0,showAppNavigationDrawer:!0,showContentHeader:!1},components:{CVBtnDownload:n(513).a,Experience:c.a,Skill:l.a,Certification:v.a,Publication:d.a},props:{},data:function(){return{cvFabShow:!1,languages:{tableHeaders:[{text:"Language",align:"center",sortable:!1,value:"language"},{text:"Listening",align:"center",sortable:!1,value:"listening"},{text:"Reading",align:"center",sortable:!1,value:"reading"},{text:"Spoken Interaction",align:"center",sortable:!1,value:"spokenInteraction"},{text:"Spoken Production",align:"center",sortable:!1,value:"spokenProduction"},{text:"Writing",align:"center",sortable:!1,value:"writing"}],tableValues:[{language:"English",listening:"B2",reading:"C1",spokenInteraction:"B2",spokenProduction:"B2",writing:"B2"},{language:"Spanish",listening:"A2",reading:"B1",spokenInteraction:"A2",spokenProduction:"A2",writing:"A2"}]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)("DataState",{certifications:"getCertifications",publications:"getPublications",skills:"getSkills",experiences:"getExperiences"})),methods:{tabletAndDown:function(){return"xs"===this.$vuetify.breakpoint.name||"sm"===this.$vuetify.breakpoint.name}}},_=(n(522),n(21)),C=n(36),w=n.n(C),h=n(475),x=n(481),y=n(555),V=n(474),k=n(552),E=n(553),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"fade-in-fwd ",attrs:{justify:"center",align:"center","no-gutters":""}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"auto"}},[n("CVBtnDownload",{attrs:{isFab:!1}})],1)],1),t._v(" "),n("CVBtnDownload",{attrs:{isFab:!0}}),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Certifications")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},t._l(t.certifications,(function(t){return n("div",{key:t.id,staticClass:"awards-container pb-2"},[n("Certification",{attrs:{certification:t}})],1)})),0),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Publications")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},t._l(t.publications,(function(t){return n("div",{key:t.title,staticClass:"awards-container pb-2"},[n("Publication",{attrs:{publication:t}})],1)})),0),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Experiences")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},[n("v-timeline",{attrs:{dense:t.tabletAndDown()}},t._l(t.experiences,(function(e,i){return n("v-timeline-item",{key:i,attrs:{color:e.color,icon:e.icon,"fill-dot":""},scopedSlots:t._u([{key:"opposite",fn:function(){return[t.tabletAndDown()?t._e():n("span",{class:"body-1 font-weight-bold",domProps:{textContent:t._s(e.date)}})]},proxy:!0}],null,!0)},[t._v(" "),n("Experience",{attrs:{experience:e,forceDate:!1}})],1)})),1)],1),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Skills")])]),t._v(" "),t._l(t.skills,(function(e,o){return n("div",{key:o},[n("v-row",{staticClass:"pt-6 pb-2 slide-in-bottom"},[n("h3",[t._v(t._s(o))])]),t._v(" "),t._l(e,(function(t){return n("Skill",{key:t.title,attrs:{skill:t}})}))],2)})),t._v(" "),n("v-row",{staticClass:"pt-8 pb-3 slide-in-bottom",attrs:{justify:"center"}},[n("h1",[t._v("Languages")])]),t._v(" "),n("v-row",{staticClass:"slide-in-bottom",attrs:{justify:"center"}},[n("v-data-table",{staticClass:"elevation-0",staticStyle:{width:"90%"},attrs:{headers:t.languages.tableHeaders,items:t.languages.tableValues,"hide-default-footer":""}})],1),t._v(" "),n("v-row",{staticClass:"slide-in-bottom"},[n("p",{staticClass:"my-2"},[t._v("\n            Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2:\n            Proficient user - (*) Common European Framework of Reference for Languages\n        ")])])],2)}),[],!1,null,"47c89f09",null);e.default=component.exports;w()(component,{VCol:h.a,VContainer:x.a,VDataTable:y.a,VRow:V.a,VTimeline:k.a,VTimelineItem:E.a})}}]);