(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{485:function(t,e,n){"use strict";e.a=function(title,t,e,image){return{title:title,meta:[{hid:"og:title",property:"og:title",content:title+" - Gioele Crispo"},{hid:"description",name:"description",content:t},{hid:"og:description",name:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://gioelecrispo.github.io"+e},{hid:"og:image",property:"og:image",content:image},{hid:"twitter:card",property:"twitter:card",content:"summary_large_image"},{hid:"twitter:title",property:"twitter:title",content:title+" - Gioele Crispo"},{hid:"twitter:description",name:"twitter:description",content:t},{hid:"twitter:image",property:"twitter:image",content:image}]}}},488:function(t,e,n){},495:function(t,e,n){"use strict";n(488)},509:function(t,e,n){"use strict";var r={name:"Article",components:{},props:["article"],data:function(){return{}},computed:{img:function(){return n(306)("./".concat(this.article.img))}},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})}}},o=(n(495),n(22)),c=n(28),l=n.n(c),h=n(190),d=n(124),f=n(477),m=n(483),v=n(517),y=n(153),I=n(476),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[n("v-card",{staticClass:"flip-in-ver-right",class:r?"expand":"",attrs:{"max-width":r?360:350,height:r?510:500,elevation:r?20:8,nuxt:"",to:"/blog/"+t.article.slug}},[n("v-container",{staticClass:"pt-0",attrs:{fluid:""}},[n("v-row",{staticClass:"pb-2"},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[n("v-img",{staticClass:"white--text",attrs:{height:"200px",src:t.img}})],1)],1),t._v(" "),n("v-row",{staticClass:"pb-2"},[n("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[t.article.tags?n("v-card-subtitle",{staticClass:"pl-4 pr-0 py-0 secondary--text"},[t._v(t._s(t.article.tags.map((function(t){return"#"+t})).join(", "))+"\n                        ")]):t._e()],1),t._v(" "),n("v-col",{staticClass:"pa-0"}),t._v(" "),n("v-col",{staticClass:"pa-0",attrs:{cols:"auto"}},[n("v-card-subtitle",{staticClass:"px-4 py-0"},[t._v(t._s(t.formatDate(t.article.createdAt)))])],1)],1),t._v(" "),n("v-row",{staticClass:"px-2 py-2"},[n("v-card-title",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.title)}})],1),t._v(" "),n("v-row",{staticClass:"px-2 py-2"},[n("v-card-text",{staticClass:"px-4 py-2",domProps:{innerHTML:t._s(t.article.description)}})],1)],1)],1)]}}])})}),[],!1,null,"7a3da2ce",null);e.a=component.exports;l()(component,{VCard:h.a,VCardSubtitle:d.a,VCardText:d.b,VCardTitle:d.c,VCol:f.a,VContainer:m.a,VHover:v.a,VImg:y.a,VRow:I.a})},517:function(t,e,n){"use strict";var r=n(203),o=n(61),c=n(9),l=n(10);e.a=Object(c.a)(r.a,o.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(l.c)("v-hover should only contain a single element",this),element)):(Object(l.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},518:function(t,e,n){},530:function(t,e,n){t.exports=n.p+"img/55cc3fb.jpg"},531:function(t,e,n){"use strict";n(518)},532:function(t,e,n){},571:function(t,e,n){"use strict";n.r(e);n(7),n(5),n(8),n(11),n(6),n(12);var r=n(1),o=n(23),c=(n(32),n(205),n(90),n(44)),l=n(509),h=n(485);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f={name:"ArticlesList",layout:"page",mixins:[n(38).a],head:function(){return Object(h.a)("Blog","Visit my blog section to discover all my post about machine learning and similar!",this.$route.path,n(530))},components:{Article:l.a},props:{},data:function(){return{filters:{query:"",topics:""},blogArticles:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.filterArticles("",t.allBlogTopics);case 2:t.blogArticles=e.sent;case 3:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)("DataState",{allBlogArticles:"getBlogArticles",allBlogTopics:"getBlogTopics"})),created:function(){this.$store.dispatch("AppState/setAppToolbarTitle","Blog"),this.filters.topics=this.allBlogTopics},methods:{filterArticles:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.$content("blog").search(t).sortBy("createdAt","desc").where({tags:{$containsAny:e}}).fetch();case 2:return r.abrupt("return",r.sent);case 3:case"end":return r.stop()}}),r)})))()}},watch:{filters:{deep:!0,immediate:!1,handler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.query||(t.query=""),n.next=3,e.filterArticles(t.query,t.topics);case 3:e.blogArticles=n.sent;case 4:case"end":return n.stop()}}),n)})))()}}}},m=(n(531),n(22)),v=n(28),y=n.n(v),I=(n(70),n(75),n(88),n(33),n(60),n(532),n(507)),S=n(524),x=n(68),w=n(0);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D=O(O({},I.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),j=I.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:I.a.options.props.menuProps.type,default:function(){return D}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return O(O({},I.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(w.q)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=I.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),O(O({},D),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=I.a.options.computed.listData.call(this);return data.props=O(O({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===w.w.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===w.w.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==w.w.backspace&&t!==w.w.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,I.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=S.a.options.methods.genInput.call(this);return input.data=Object(x.a)(input.data,{attrs:{"aria-activedescendant":Object(w.o)(this.$refs.menu,"activeTile.id"),autocomplete:Object(w.o)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=I.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?I.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[w.w.home,w.w.end].includes(e)||I.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){I.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){I.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){I.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}}),_=n(521),A=n(477),V=n(483),T=n(476),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"pt-3 pb-12",attrs:{justyfy:"center"}},[n("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[n("v-text-field",{staticClass:"centered-input",attrs:{color:"primary",label:"Search posts",filled:"","hide-details":"",autocomplete:"off",outlined:"",clearable:"","prepend-inner-icon":"search"},model:{value:t.filters.query,callback:function(e){t.$set(t.filters,"query",e)},expression:"filters.query"}})],1),t._v(" "),n("v-col",{staticClass:"py-1",attrs:{cols:"12",md:"6"}},[n("v-autocomplete",{staticClass:"centered-input",attrs:{color:"secondary",label:"Filter by topic",items:t.allBlogTopics,elevation:"0","hide-details":"",outlined:"",filled:"",multiple:"","prepend-inner-icon":"mdi-pound"},scopedSlots:t._u([{key:"selection",fn:function(e){var r=e.item,o=e.index;return[o<=1?n("v-chip",{attrs:{color:"secondary",label:""}},[n("span",[t._v(t._s(r))])]):t._e(),t._v(" "),o>1?n("span",{staticClass:"grey--text caption"},[t._v("\n                      (+"+t._s(t.filters.topics.length-2)+" others)\n                    ")]):t._e()]}}]),model:{value:t.filters.topics,callback:function(e){t.$set(t.filters,"topics",e)},expression:"filters.topics"}})],1)],1),t._v(" "),n("v-row",{staticClass:"pb-12"},t._l(t.blogArticles,(function(article){return n("v-col",{key:article.slug,staticClass:"pa-2",attrs:{cols:"12",sm:"6",md:"4"}},[n("NuxtLink",{staticStyle:{"text-decoration":"none",color:"inherit"},attrs:{to:{name:"blog-id",params:{id:article.slug}}}},[n("Article",{attrs:{article:article}})],1)],1)})),1)],1)}),[],!1,null,"608975ac",null);e.default=component.exports;y()(component,{VAutocomplete:j,VChip:_.a,VCol:A.a,VContainer:V.a,VRow:T.a,VTextField:S.a})}}]);