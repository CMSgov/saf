(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6100920a"],{1681:function(t,a,e){},"23a7":function(t,a,e){"use strict";e("5803");var i=e("2677"),s=e("cc20"),n=e("80d2"),o=e("d9bd"),r=e("d9f7");function l(t){return m(t)||d(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,a){if(t){if("string"===typeof t)return p(t,a);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,a):void 0}}function d(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function m(t){if(Array.isArray(t))return p(t)}function p(t,a){(null==a||a>t.length)&&(a=t.length);for(var e=0,i=new Array(a);e<a;e++)i[e]=t[e];return i}function v(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function f(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?v(Object(e),!0).forEach((function(a){h(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):v(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function h(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}a["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(n["F"])(t).every((function(t){return null!=t&&"object"===b(t)}))}}},computed:{classes:function(){return f(f({},i["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var a=this.internalArrayValue.reduce((function(t,a){var e=a.size,i=void 0===e?0:e;return t+i}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(n["v"])(a,1024===this.base))},internalArrayValue:function(){return Object(n["F"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(a){var e=a.name,i=void 0===e?"":e,s=a.size,o=void 0===s?0:s,r=t.truncateText(i);return t.showSize?"".concat(r," (").concat(Object(n["v"])(o,1024===t.base),")"):r})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(o["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var a=this.isMultiple?t:t?[t]:[];Object(n["i"])(a,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(a,e){return t.$createElement(s["a"],{props:{small:t.smallChips},on:{"click:close":function(){var a=t.internalValue;a.splice(e,1),t.internalValue=a}}},[a])})):[]},genControl:function(){var t=i["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(r["c"])(t.data.style,{display:"none"})),t},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var a=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[a])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,a=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(e,i){t.$scopedSlots.selection&&a.push(t.$scopedSlots.selection({text:t.text[i],file:e,index:i}))})):a.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},a)},genTextFieldSlot:function(){var t=this,a=i["a"].options.methods.genTextFieldSlot.call(this);return a.data.on=f(f({},a.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),a},onInput:function(t){var a=l(t.target.files||[]);this.internalValue=this.isMultiple?a:a[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var a=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,a),"…").concat(t.slice(t.length-a))}}})},2677:function(t,a,e){"use strict";var i=e("8654");a["a"]=i["a"]},"30dc":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[e("v-container",{staticClass:"text-center ",attrs:{fluid:""}},[e("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.snackbarSuccess,callback:function(a){t.snackbarSuccess=a},expression:"snackbarSuccess"}},[t._v("\n      Team Member Edited Successfully\n      "),e("v-btn",{attrs:{color:"pink",text:""},on:{click:function(a){t.snackbarSuccess=!1}}},[t._v("\n        Close\n      ")])],1),e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-toolbar",{staticClass:"elevation-1"},[e("router-link",{staticClass:"ma-0  mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/team/",color:1==t.$vuetify.theme.dark?"white":"black"}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left-thick")]),t._v("\n            Team")],1),t._v("\n           \n          "),e("div",{staticClass:"flex-grow-1"}),t.showTeamData?e("editTeam",{staticClass:"mr-2",attrs:{teamData:t.teamData},on:{editedSuccess:t.editedSuccessFun}}):t._e(),t._v("\n           \n          "),t.showTeamData?e("removeTeam",{staticClass:"mr-1",attrs:{teamData:{id:t.$route.params.id,name:t.teamData.name}}}):t._e(),t.showTeamData?e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{icon:"",target:"_blank"},on:{click:function(a){return t.showPublicURL(t.$route.params.id)}}},i),[e("v-icon",{attrs:{color:"indigo"}},[t._v("mdi-eye")])],1)]}}],null,!1,2902102809)},[e("span",[t._v("Show Public URL")])]):t._e()],1)],1)],1),t.showLoader?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):t._e(),t.showTeamData?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{col:"12",md:"3"}},[e("v-avatar",{attrs:{size:"120"}},[e("img",{attrs:{src:t.getImgUrl(t.teamData.image),"lazy-src":t.getImgUrl(t.teamData.image),alt:""}})]),e("p",{staticClass:"mt-3 mb-0  mb-0",staticStyle:{"font-size":"120%"}},[t._v("\n                "+t._s(t.teamData.name)+"\n              ")]),e("p",{staticClass:"mt-1 mb-0  mt-0",staticStyle:{"font-size":"100%"}},[t._v("\n                "+t._s(t.teamData.designation)+"\n              ")]),e("v-chip",{staticClass:"mt-2",attrs:{small:""}},[t._v(t._s(t.teamData.role))]),e("br"),e("br"),t.teamData.visible?e("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Visible")]):e("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Visible")]),t.teamData.active?e("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Active")]):e("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Active")]),e("br"),e("br"),e("br")],1),e("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{col:"12",md:"9"}},[e("p",{staticClass:"mb-0"},[e("b",[t._v("Bio")])]),e("p",{staticClass:"mt-1 mb-0  mt-0",staticStyle:{"font-size":"110%"}},[t._v("\n                "+t._s(t.teamData.bio)+"\n              ")]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("Email")])]),e("p",{staticClass:"mt-0 mb-0  mt-0",staticStyle:{"font-size":"110%"}},[t._v("\n                "+t._s(t.teamData.email)+"\n              ")]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("Mobile")])]),e("p",{staticClass:"mt-0 mb-0  mt-0",staticStyle:{"font-size":"110%"}},[t._v("\n                "+t._s(t.teamData.mbnumber)+"\n              ")]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("User ID")])]),e("p",{staticClass:"mt-0 mb-0  mt-0",staticStyle:{"font-size":"110%"}},[t._v("\n                "+t._s(t.teamData.id)+"\n              ")]),e("p",{staticClass:"mb-0 mt-3"},[e("b",[t._v("Social Links")])]),e("p",{staticClass:"mt-1 mb-0  mt-0",staticStyle:{"font-size":"110%"}},t._l(t.teamData.socialLinks,(function(a,i){return e("span",{key:i,staticClass:"mr-1",staticStyle:{cursor:"pointer"}},[a?e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:a,target:"_blank"}},[e("v-chip",{staticStyle:{"text-transform":"uppercase"},attrs:{small:""}},[t._v(t._s(i))])],1):t._e()])})),0)])],1)],1)],1)],1):t._e(),t.userNotFound?e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{attrs:{cols:"12",md:"11"}},[e("v-container",{attrs:{fluid:""}},[e("v-row",{staticClass:"elevation-1 pa-3 white"},[e("v-col",[e("h1",[t._v("User Not Found")])])],1)],1)],1)],1):t._e()],1)],1)},s=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"max-width":"300"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{icon:"",dark:"",color:"red"},on:{click:function(a){a.stopPropagation(),t.dialog=!0}}},i),[e("v-icon",[t._v("mdi-delete")])],1)]}}])},[e("span",[t._v("Remove "+t._s(t.teamData.name)+" ")])]),e("v-card",[e("v-card-title",{staticClass:"headline"},[t._v("Are you sure?")]),e("v-card-text",[t._v("\n      Would you like to remove "+t._s(t.teamData.name)+" form the Team?\n    ")]),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("\n        Disagree\n      ")]),e("v-btn",{attrs:{color:"green darken-1",text:"",loading:t.loading},on:{click:function(a){return t.deleteItem(t.teamData.id)}}},[t._v("\n        Agree\n      ")])],1)],1)],1)},o=[],r={props:{teamData:{}},data:function(){return{dialog:!1,loading:!1}}},l=r,c=e("2877"),u=e("6544"),d=e.n(u),m=e("8336"),p=e("b0af"),v=e("99d9"),f=e("169a"),h=e("132d"),b=e("3a2f"),g=Object(c["a"])(l,n,o,!1,null,null,null),y=g.exports;d()(g,{VBtn:m["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VDialog:f["a"],VIcon:h["a"],VTooltip:b["a"]});var D=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"1200"},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({attrs:{icon:"",color:"primary",dark:""},on:{click:function(a){a.stopPropagation(),t.dialog=!0}}},i),[e("v-icon",[t._v("mdi-lead-pencil")])],1)]}}])},[e("span",[t._v("Edit "+t._s(t.teamData.name)+" Details ")])]),t.dialog?e("v-card",[e("v-card-title",{staticClass:"headline white",attrs:{"primary-title":""}},[t._v("\n      Edit "+t._s(t.teamData.name)+" Details\n    ")]),e("v-card-text",{},[e("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[e("v-row",{staticClass:"pa-0"},[e("v-col",{attrs:{md:"12",cols:"12"}},[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("\n                    Team Member Status\n                  ")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-select",{attrs:{items:t.items,label:"Active Status",outlined:""},model:{value:t.updatedData.active,callback:function(a){t.$set(t.updatedData,"active",a)},expression:"updatedData.active"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-select",{attrs:{items:t.items,label:"Visiblity Status",outlined:""},model:{value:t.updatedData.visible,callback:function(a){t.$set(t.updatedData,"visible",a)},expression:"updatedData.visible"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{disabled:"",label:"ID",type:"text",outlined:""},model:{value:t.updatedData.id,callback:function(a){t.$set(t.updatedData,"id",a)},expression:"updatedData.id"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"3",xs:"3",cols:"12"}},[e("v-select",{attrs:{items:t.teamRole,label:"Role",outlined:""},model:{value:t.updatedData.role,callback:function(a){t.$set(t.updatedData,"role",a)},expression:"updatedData.role"}})],1)],1),e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Team Member Info")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{rules:t.nameRules,label:"Name",outlined:""},model:{value:t.updatedData.name,callback:function(a){t.$set(t.updatedData,"name",a)},expression:"updatedData.name"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{rules:t.nameRules,label:"Desigination",outlined:""},model:{value:t.updatedData.designation,callback:function(a){t.$set(t.updatedData,"designation",a)},expression:"updatedData.designation"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Image URL",outlined:""},model:{value:t.updatedData.image,callback:function(a){t.$set(t.updatedData,"image",a)},expression:"updatedData.image"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[e("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[e("v-btn",t._g({staticClass:"mt-n6",attrs:{color:"primary",loading:t.imageUploading,dark:""}},i),[t._v("Upload Image")])]}}],null,!1,3016959100),model:{value:t.dialogImageUload,callback:function(a){t.dialogImageUload=a},expression:"dialogImageUload"}},[e("v-card",[e("v-card-title",[t._v("Upload Team Image")]),e("v-card-text",[e("v-img",{staticClass:"mb-6",attrs:{src:t.imagePre}}),e("v-file-input",{attrs:{accept:"image/*",label:"File input","prepend-icon":"",outlined:""},on:{change:t.onFileChange},model:{value:t.imageUpload,callback:function(a){t.imageUpload=a},expression:"imageUpload"}})],1),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(a){t.dialogImageUload=!1}}},[t._v("Disagree")]),e("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.uploadImage}},[t._v("Agree")])],1)],1)],1)],1),e("v-col",{staticClass:"pa-1 ma-0 red",attrs:{md:"4",xs:"12",cols:"12"}},[e("v-img",{staticClass:"mt-n7",attrs:{src:t.updatedData.image}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",xs:"12",cols:"12"}},[e("v-textarea",{attrs:{outlined:"",name:"input-7-4",label:"Bio"},model:{value:t.updatedData.bio,callback:function(a){t.$set(t.updatedData,"bio",a)},expression:"updatedData.bio"}})],1)],1),e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Personal Info")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Contact Number",outlined:""},model:{value:t.updatedData.mbnumber,callback:function(a){t.$set(t.updatedData,"mbnumber",a)},expression:"updatedData.mbnumber"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"8",xs:"8",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{rules:t.emailRules,label:"Email Id",outlined:""},model:{value:t.updatedData.email,callback:function(a){t.$set(t.updatedData,"email",a)},expression:"updatedData.email"}})],1)],1),e("v-row",{staticClass:"pa-3"},[e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"12",cols:"12"}},[e("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Social Links")])]),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Facebook",outlined:""},model:{value:t.updatedData.socialLinks.facebook,callback:function(a){t.$set(t.updatedData.socialLinks,"facebook",a)},expression:"updatedData.socialLinks.facebook"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Github",outlined:""},model:{value:t.updatedData.socialLinks.github,callback:function(a){t.$set(t.updatedData.socialLinks,"github",a)},expression:"updatedData.socialLinks.github"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Linkedin",outlined:""},model:{value:t.updatedData.socialLinks.linkedin,callback:function(a){t.$set(t.updatedData.socialLinks,"linkedin",a)},expression:"updatedData.socialLinks.linkedin"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Meetup",outlined:""},model:{value:t.updatedData.socialLinks.meetup,callback:function(a){t.$set(t.updatedData.socialLinks,"meetup",a)},expression:"updatedData.socialLinks.meetup"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Twitter",outlined:""},model:{value:t.updatedData.socialLinks.twitter,callback:function(a){t.$set(t.updatedData.socialLinks,"twitter",a)},expression:"updatedData.socialLinks.twitter"}})],1),e("v-col",{staticClass:"pa-1 ma-0",attrs:{md:"4",xs:"4",cols:"12"}},[e("v-text-field",{staticClass:"ma-0",attrs:{label:"Website/Blog",outlined:""},model:{value:t.updatedData.socialLinks.web,callback:function(a){t.$set(t.updatedData.socialLinks,"web",a)},expression:"updatedData.socialLinks.web"}})],1)],1)],1)],1)],1)],1)],1),e("v-divider"),e("v-card-actions",[e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("\n        Close\n      ")]),e("v-btn",{attrs:{color:"primary",disabled:!t.valid,loading:t.loading},on:{click:t.UpdateData}},[t._v("\n        Update "+t._s(t.teamData.name)+" Details\n      ")])],1)],1):t._e()],1)},k=[],w={props:{teamData:{}},data:function(){return{imageUpload:[],imagePre:"",imageUploading:!1,valid:!0,dialogImageUload:!1,nameRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=20||"Name must be less than 10 characters"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],teamRole:["Core Team","Organizing Team","Volunteer"],dialog:!1,loading:!1,items:[!0,!1],active:Boolean,visible:Boolean,id:"",mbnumber:"",name:"",facebook:"",github:"",linkedin:"",email:"",meetup:"",twitter:"",web:"",bio:"",imageURL:"",image:"",designation:"",role:null,updatedData:{active:this.teamData.active,visible:this.teamData.visible,name:this.teamData.name,designation:this.teamData.designation,mbnumber:this.teamData.mbnumber,email:this.teamData.email,image:this.teamData.image,bio:this.teamData.bio,id:this.teamData.id,role:this.teamData.role,socialLinks:{facebook:this.teamData.socialLinks.facebook,github:this.teamData.socialLinks.github,linkedin:this.teamData.socialLinks.linkedin,meetup:this.teamData.socialLinks.meetup,twitter:this.teamData.socialLinks.twitter,web:this.teamData.socialLinks.web}}}}},C=w,x=e("62ad"),_=e("a523"),S=e("ce7e"),V=e("23a7"),O=e("4bd4"),$=e("adda"),j=e("0fd9"),I=e("b974"),T=e("2fa4"),z=e("8654"),L=e("a844"),P=Object(c["a"])(C,D,k,!1,null,null,null),B=P.exports;d()(P,{VBtn:m["a"],VCard:p["a"],VCardActions:v["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:x["a"],VContainer:_["a"],VDialog:f["a"],VDivider:S["a"],VFileInput:V["a"],VForm:O["a"],VIcon:h["a"],VImg:$["a"],VRow:j["a"],VSelect:I["a"],VSpacer:T["a"],VTextField:z["a"],VTextarea:L["a"],VTooltip:b["a"]});var E={components:{removeTeam:y,editTeam:B},name:"admin-dashboard",data:function(){return{snackbarSuccess:!1,userNotFound:!1,showTeamData:!1,showLoader:!0,teamLoader:!0,search:"",loading:!0,teamData:[]}},created:function(){this.$route.params.id&&this.getTeamData()},methods:{showPublicURL:function(t){var a=this.$router.resolve({path:"/team/".concat(t)});window.open(a.href,"_blank")},editedSuccessFun:function(){this.snackbarSuccess=!0,this.getTeamData()},getTeamData:function(){this.showLoader=!0,this.showTeamData=!1,this.userNotFound=!1},showTeam:function(t){this.$router.replace("/admin/dashboard/team/"+t)},getImgUrl:function(t){return t.length>0?t:e("72ab")}}},U=E,A=e("8212"),F=e("cc20"),N=e("a75b"),R=e("490a"),M=e("2db4"),H=e("71d9"),G=Object(c["a"])(U,i,s,!1,null,null,null);a["default"]=G.exports;d()(G,{VAvatar:A["a"],VBtn:m["a"],VChip:F["a"],VCol:x["a"],VContainer:_["a"],VContent:N["a"],VIcon:h["a"],VProgressCircular:R["a"],VRow:j["a"],VSnackbar:M["a"],VToolbar:H["a"],VTooltip:b["a"]})},"4bd4":function(t,a,e){"use strict";var i=e("58df"),s=e("7e2b"),n=e("3206");function o(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function r(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?o(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}a["a"]=Object(i["a"])(s["a"],Object(n["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var a=Object.values(t).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var a=this,e=function(t){return t.$watch("hasError",(function(e){a.$set(a.errorBag,t._uid,e)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(s){s&&(a.errorBag.hasOwnProperty(t._uid)||(i.valid=e(t)))})):i.valid=e(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var a=this.inputs.find((function(a){return a._uid===t._uid}));if(a){var e=this.watchers.find((function(t){return t._uid===a._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==a._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==a._uid})),this.$delete(this.errorBag,a._uid)}}},render:function(t){var a=this;return t("form",{staticClass:"v-form",attrs:r({novalidate:!0},this.attrs$),on:{submit:function(t){return a.$emit("submit",t)}}},this.$slots.default)}})},5803:function(t,a,e){},"72ab":function(t,a,e){t.exports=e.p+"img/avatar.d5a816ad.png"},a844:function(t,a,e){"use strict";e("1681");var i=e("8654"),s=e("58df");function n(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,i)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?n(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}var l=Object(s["a"])(i["a"]);a["a"]=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return o({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var a=t.scrollHeight,e=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(e,a)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);