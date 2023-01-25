(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{633:function(t,e,n){"use strict";n(260);e.a=function(title,t,e,image){var n=e.endsWith("/")?e:"".concat(e,"/");return{title:title,meta:[{hid:"og:title",property:"og:title",content:title},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+n},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}],link:[{hid:"canonical",rel:"canonical",href:"https://gioelecrispo.github.io"+n}]}}},641:function(t,e,n){t.exports=n.p+"img/843e631.png"},642:function(t,e,n){t.exports=n.p+"img/c1f953a.png"},643:function(t,e,n){t.exports=n.p+"img/6d270da.png"},644:function(t,e,n){t.exports=n.p+"img/33b7ef2.png"},645:function(t,e,n){t.exports=n.p+"img/5faf09a.png"},646:function(t,e,n){t.exports=n.p+"img/0a03702.png"},659:function(t,e,n){var map={"./aws.png":394,"./c++.png":384,"./c.png":385,"./car.png":404,"./css.png":641,"./database.png":395,"./docker.png":642,"./elastic.png":391,"./git.png":398,"./html.png":387,"./java.png":382,"./javascript.png":381,"./jupyter notebook.png":643,"./kubernetes.png":397,"./matlab.png":383,"./neural.png":390,"./nodejs.png":393,"./python.png":380,"./pytorch.png":389,"./rabbitmq.png":396,"./soft/businessman.png":644,"./soft/goal.png":402,"./soft/leadership.png":403,"./soft/profile.png":645,"./soft/punctual.png":401,"./soft/teamwork.png":400,"./spring.png":392,"./sql.png":386,"./task.png":399,"./tensorflow.png":388,"./vue.png":646};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=659},660:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n(25),o=(n(93),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e({url:"https://api.github.com/users/gioelecrispo",method:"get"}).then((function(t){return t.data})).catch((function(t){console.error("setGithubUserInfo - Too Much Requests",t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),c=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e({url:"https://api.github.com/users/gioelecrispo/repos",method:"get"}).then((function(t){return t.data})).catch((function(t){console.error("setGithubUserInfo - Too Much Requests",t)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},670:function(t,e,n){"use strict";var r=n(608),o=n(246),c=n(625),l=n(630),h=n(207),f=n(606),m=n(605),d=n(258),v=n(623),_=n(753),j=(n(24),n(8),n(72),{name:"GithubProject",components:{},props:["project"],data:function(){return{}},computed:{},methods:{}}),C=n(17),component=Object(C.a)(j,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"slide-in-bottom",attrs:{outlined:""}},[t.project?e("div",{staticClass:"d-flex flex-no-wrap justify-space-between",attrs:{href:t.project.html_url,target:"_blank"}},[e(l.a,[e(v.a,[e(c.a,{staticClass:"py-0",attrs:{cols:"12"}},[e(v.a,[e(f.a,[e(m.a,{attrs:{"three-line":""}},[e(d.a,[e("h2",{staticClass:"mb-1 primary--text text--darken-2"},[t._v(t._s(t.project.name))]),t._v(" "),e(d.b,[e(v.a,{staticClass:"pl-3",attrs:{align:"center"}},[t.project.license?e("span",{staticClass:"overline my-1"},[t._v(t._s(t.project.license.name))]):t._e(),t._v(" "),t.project.license?e("span",{staticClass:"mx-2"},[t._v("|")]):t._e(),t._v(" "),e("span",{staticClass:"my-1 overline"},[t._v("Language")]),t._v(" "),null!=t.project.language?e(r.a,{staticClass:"ml-3",attrs:{size:"20",tile:""}},[e(h.a,{attrs:{src:n(659)("./"+t.project.language.toLowerCase()+".png")}})],1):t._e()],1)],1),t._v(" "),e(d.b,[e("span",[t._v(t._s(t.project.description))])]),t._v(" "),e(d.b,{staticClass:"mt-2"},[e("a",{attrs:{href:t.project.html_url,rel:"noreferrer",target:"_blank"}},[t._v("Go to the project")])])],1)],1)],1)],1)],1)],1)],1)],1):e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e(_.a,{staticClass:"pa-2",staticStyle:{width:"100%"},attrs:{elevation:"0",boilerplate:"",type:"article, actions"}})],1)])}),[],!1,null,"272a1da6",null);e.a=component.exports},761:function(t,e,n){"use strict";n.r(e);var r=n(608),o=n(246),c=n(625),l=n(630),h=n(248),f=n(207),m=n(606),d=n(605),v=n(258),_=n(245),j=n(623),C=n(753),y=n(25),w=(n(93),n(670)),x=n(46),k=n(633),U=n(660),P={name:"Projects",layout:"page",components:{PersonalAvatar:n(195).a,GithubProject:w.a},props:{},mixins:[x.a],data:function(){return{githubUserInfo:void 0,githubProjects:void 0}},fetch:function(){var t=this;return Object(y.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(U.b)(t.$axios).then((function(e){t.githubUserInfo=e})),Object(U.a)(t.$axios).then((function(e){t.githubProjects=e}));case 2:case"end":return e.stop()}}),e)})))()},head:function(){return Object(k.a)("Github Projects","A complete collection of my Github projects.",this.$route.path,"".concat("https://gioelecrispo.github.io","/seo/github.jpg"))},created:function(){this.$store.dispatch("AppState/setAppToolbarTitle","Github"),this.$fetch()},methods:{}},I=n(17),component=Object(I.a)(P,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{"fill-height":""}},[e(j.a,{staticClass:"scale-in-center",attrs:{justify:"center"}},[e(c.a,{attrs:{cols:"12"}},[e(o.a,{staticClass:"mx-auto",attrs:{"max-width":"500",outlined:"",shaped:"",href:"https://github.com/gioelecrispo",target:"_blank"}},[t.githubUserInfo?e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e(m.a,{attrs:{color:"transparent"}},[e(d.a,{attrs:{"three-line":""}},[e(v.a,[e(j.a,{staticClass:"mb-2 pl-3",attrs:{align:"center"}},[e(h.a,{staticClass:"mr-3"},[t._v("\n                                        mdi-github\n                                    ")]),t._v(" "),e("span",{staticClass:"overline"},[t._v("Github")])],1),t._v(" "),e("h2",{staticClass:"mb-1"},[t._v("\n                                    "+t._s(t.githubUserInfo.login)+"\n                                ")]),t._v(" "),e(v.b,[e(l.a,{staticClass:"py-1"},[e(j.a,{attrs:{align:"center"}},[e("span",[t._v(t._s(t.githubUserInfo.location))]),t._v(" "),t.mobile()?t._e():e("span",{staticClass:"mx-2"},[t._v("|")]),t._v(" "),e("span",{staticClass:"overline mt-1"},[t._v("\n                                                "+t._s(t.githubUserInfo.company)+"\n                                            ")])])],1)],1)],1)],1),t._v(" "),e(d.a,{attrs:{"three-line":""}},[e(v.a,[e(v.b,{staticClass:"py-0"},[e(j.a,{staticClass:"pl-3",attrs:{align:"center"}},[e(h.a,{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                            mdi-briefcase\n                                        ")]),t._v("\n                                        Projects: "+t._s(t.githubUserInfo.public_repos)+"\n                                    ")],1)],1),t._v(" "),e(v.b,{staticClass:"py-0"},[e(j.a,{staticClass:"pl-3",attrs:{align:"center"}},[e(h.a,{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                            mdi-account-tie\n                                        ")]),t._v("\n                                        Followers: "+t._s(t.githubUserInfo.followers)+"\n                                    ")],1)],1),t._v(" "),e(v.b,{staticClass:"py-0"},[e(j.a,{staticClass:"pl-3",attrs:{align:"center"}},[e(h.a,{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                            mdi-account-tie\n                                        ")]),t._v("\n                                        Following: "+t._s(t.githubUserInfo.following)+"\n                                    ")],1)],1),t._v(" "),e(v.b,{staticClass:"py-0"},[e(j.a,{staticClass:"pl-3",attrs:{align:"center"}},[e(h.a,{staticClass:"mr-2",attrs:{small:""}},[t._v("\n                                            mdi-card-text-outline\n                                        ")]),t._v("\n                                        "+t._s(t.githubUserInfo.bio)+"\n                                    ")],1)],1)],1)],1)],1),t._v(" "),e(j.a,{staticClass:"mx-3",attrs:{align:"center",color:"transparent"}},[e("PersonalAvatar",{staticClass:"ma-3",attrs:{size:125}})],1)],1):e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e(C.a,{staticClass:"pa-2",staticStyle:{width:"100%"},attrs:{boilerplate:"",type:"article, actions"}}),t._v(" "),e(j.a,{staticClass:"mx-3",attrs:{align:"center",color:"transparent"}},[e(r.a,{staticClass:"ma-3",attrs:{size:"125",tile:""}},[e(f.a,{attrs:{"lazy-src":n(379)},scopedSlots:t._u([{key:"placeholder",fn:function(){return[e(j.a,{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[e(_.a,{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)],1)],1)])],1)],1),t._v(" "),e(j.a,{staticClass:"px-2"},[e(c.a,{attrs:{cols:"12"}},[e(j.a,{attrs:{align:"center"}},t._l(t.githubProjects,(function(t){return e(c.a,{key:t.id,attrs:{cols:"12",sm:"6",md:"6"}},[e("GithubProject",{attrs:{project:t}})],1)})),1),t._v(" "),t.githubProjects?t._e():e(j.a,{attrs:{align:"center"}},t._l(10,(function(t){return e(c.a,{key:t,attrs:{cols:"12",sm:"6",md:"6"}},[e("GithubProject")],1)})),1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);