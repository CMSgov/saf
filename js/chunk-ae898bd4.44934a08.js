(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae898bd4"],{"167f":function(t,e,a){"use strict";a("580a")},1681:function(t,e,a){},"23a7":function(t,e,a){"use strict";a("5803");var i=a("2677"),n=a("cc20"),s=a("80d2"),r=a("d9bd"),o=a("d9f7");function l(t){return p(t)||d(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){if(t){if("string"===typeof t)return f(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(t,e):void 0}}function d(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function p(t){if(Array.isArray(t))return f(t)}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function b(t){return b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}e["a"]=i["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:function(t){return"boolean"===typeof t||[1e3,1024].includes(t)}},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:function(t){return Object(s["F"])(t).every((function(t){return null!=t&&"object"===b(t)}))}}},computed:{classes:function(){return v(v({},i["a"].options.computed.classes.call(this)),{},{"v-file-input":!0})},computedCounterValue:function(){var t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);var e=this.internalArrayValue.reduce((function(t,e){var a=e.size,i=void 0===a?0:a;return t+i}),0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(s["v"])(e,1024===this.base))},internalArrayValue:function(){return Object(s["F"])(this.internalValue)},internalValue:{get:function(){return this.lazyValue},set:function(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty:function(){return this.internalArrayValue.length>0},isLabelActive:function(){return this.isDirty},isMultiple:function(){return this.$attrs.hasOwnProperty("multiple")},text:function(){var t=this;return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map((function(e){var a=e.name,i=void 0===a?"":a,n=e.size,r=void 0===n?0:n,o=t.truncateText(i);return t.showSize?"".concat(o," (").concat(Object(s["v"])(r,1024===t.base),")"):o})):[this.placeholder]},base:function(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips:function(){return this.chips||this.smallChips}},watch:{readonly:{handler:function(t){!0===t&&Object(r["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value:function(t){var e=this.isMultiple?t:t?[t]:[];Object(s["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback:function(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips:function(){var t=this;return this.isDirty?this.text.map((function(e,a){return t.$createElement(n["a"],{props:{small:t.smallChips},on:{"click:close":function(){var e=t.internalValue;e.splice(a,1),t.internalValue=e}}},[e])})):[]},genControl:function(){var t=i["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(o["c"])(t.data.style,{display:"none"})),t},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot:function(){var t=this;if(!this.prependIcon)return null;var e=this.genIcon("prepend",(function(){t.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText:function(){var t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections:function(){var t=this,e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((function(a,i){t.$scopedSlots.selection&&e.push(t.$scopedSlots.selection({text:t.text[i],file:a,index:i}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot:function(){var t=this,e=i["a"].options.methods.genTextFieldSlot.call(this);return e.data.on=v(v({},e.data.on||{}),{},{click:function(){return t.$refs.input.click()}}),e},onInput:function(t){var e=l(t.target.files||[]);this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown:function(t){this.$emit("keydown",t)},truncateText:function(t){if(t.length<Number(this.truncateLength))return t;var e=Math.floor((Number(this.truncateLength)-1)/2);return"".concat(t.slice(0,e),"…").concat(t.slice(t.length-e))}}})},2677:function(t,e,a){"use strict";var i=a("8654");e["a"]=i["a"]},"4bd4":function(t,e,a){"use strict";var i=a("58df"),n=a("7e2b"),s=a("3206");function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]=Object(i["a"])(n["a"],Object(s["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,a=function(t){return t.$watch("hasError",(function(a){e.$set(e.errorBag,t._uid,a)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(n){n&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=a(t)))})):i.valid=a(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var a=this.watchers.find((function(t){return t._uid===e._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:o({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},5803:function(t,e,a){},"580a":function(t,e,a){},"608c":function(t,e,a){},"651b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[i("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.snackbarSuccess,callback:function(e){t.snackbarSuccess=e},expression:"snackbarSuccess"}},[t._v("\n    Speaker Edited Successfully\n    "),i("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbarSuccess=!1}}},[t._v("Close")])],1),i("v-container",{staticClass:"text-center",attrs:{fluid:""}},[i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",md:"11"}},[i("v-toolbar",{staticClass:"elevation-1"},[i("router-link",{staticClass:"ma-0  mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/speaker/",color:1==t.$vuetify.theme.dark?"white":"black"}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left-thick")]),i("span",{class:1==t.$vuetify.theme.dark?"white--text":"black--text"},[t._v("Speakers")])],1),i("v-spacer"),!t.isLoading&&t.isSpeakerFound?i("editSpeaker",{staticClass:"mr-5",attrs:{speakerData:t.speaker},on:{showEditSuccess:t.editSuccessFunction}}):t._e(),!t.isLoading&&t.isSpeakerFound?i("removeSpeakers",{staticClass:"mr-5",attrs:{speakerData:{id:t.$route.params.id,name:t.speaker.name}}}):t._e()],1)],1)],1),t.isLoading?i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",md:"11"}},[i("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):!t.isLoading&&t.isSpeakerFound?i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",md:"11"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",[i("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"3"}},[i("v-avatar",{attrs:{size:"120"}},[i("img",{attrs:{src:t.speaker.image.length>0?t.speaker.image:a("72ab"),alt:t.speaker.name}})]),i("p",{staticClass:"mt-3 mb-0  mb-0 text--black",staticStyle:{"font-size":"120%"}},[t._v("\n                "+t._s(t.speaker.name)+"\n              ")]),i("p",{staticClass:"mt-1 mb-0  mt-0 greyText",staticStyle:{"font-size":"100%"}},[t._v("\n                "+t._s(t.speaker.designation)+"\n              ")]),i("v-chip",{staticClass:"mt-2",attrs:{href:t.speaker.company.url,target:"_blank",small:""}},[t._v(t._s(t.speaker.company.name))]),i("br"),i("br"),t.speaker.visible?i("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Visible")]):i("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Visible")])],1),i("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"9"}},[i("p",{staticClass:"mb-0"},[i("b",[t._v("Bio")])]),i("p",{staticClass:"mt-1 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.bio))]),i("p",{staticClass:"mb-0 mt-3"},[i("b",[t._v("Email")])]),i("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.email))]),i("p",{staticClass:"mb-0 mt-3"},[i("b",[t._v("Mobile")])]),i("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.mbnumber))]),i("p",{staticClass:"mb-0 mt-3"},[i("b",[t._v("Location")])]),i("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v("\n                "+t._s(t.speaker.city)+", "+t._s(t.speaker.country)+"\n              ")]),i("p",{staticClass:"mb-0 mt-3"},[i("b",[t._v("User ID")])]),i("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.id))]),i("p",{staticClass:"mb-0 mt-3"},[i("b",[t._v("Social Links")])]),i("p",{staticClass:"mt-1 mb-0 mt-0"},[i("v-chip-group",{attrs:{column:""}},t._l(t.speaker.socialLinks,(function(e,a){return i("v-chip",{key:a,attrs:{href:e,target:"_blank"}},[t._v(t._s(a.charAt(0).toUpperCase()+a.slice(1)))])})),1)],1)])],1)],1)],1)],1):i("v-row",{attrs:{justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"12",md:"11"}},[i("v-container",{attrs:{fluid:""}},[i("v-row",{staticClass:"elevation-1 pa-3 white"},[i("v-col",[i("h1",[t._v("User Not Found")])])],1)],1)],1)],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:"",dark:"",color:"red"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},i),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("Remove "+t._s(t.speakerData.name))])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure?")]),a("v-card-text",[t._v("Would you like to remove "+t._s(t.speakerData.name)+"?")]),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("No")]),a("v-btn",{attrs:{color:"red darken-1",text:"",loading:t.isLoading},on:{click:function(e){return t.deleteItem(t.speakerData.id)}}},[t._v("Remove")])],1)],1)],1)},r=[],o={props:{speakerData:{}},data:function(){return{dialog:!1,isLoading:!1}},methods:{deleteItem:function(t){this.isLoading=!0}}},l=o,c=a("2877"),u=a("6544"),d=a.n(u),p=a("8336"),f=a("b0af"),h=a("99d9"),v=a("169a"),m=a("132d"),b=a("3a2f"),g=Object(c["a"])(l,s,r,!1,null,null,null),y=g.exports;d()(g,{VBtn:p["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VDialog:v["a"],VIcon:m["a"],VTooltip:b["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{scrollable:"",width:"1200"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:"",color:"primary",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},i),[a("v-icon",[t._v("mdi-lead-pencil")])],1)]}}])},[a("span",[t._v("Edit "+t._s(t.speakerData.name)+" Details")])]),t.dialog?a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("Edit "+t._s(t.speakerData.name.split(" ")[0])+"'s Details")]),a("v-card-text",{},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-form",{attrs:{"lazy-validation":""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker Status")])]),a("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[a("v-select",{attrs:{items:t.visiblity,label:"Visiblity Status",outlined:""},model:{value:t.updatedData.visible,callback:function(e){t.$set(t.updatedData,"visible",e)},expression:"updatedData.visible"}})],1),a("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[a("v-text-field",{attrs:{disabled:"",label:"ID",type:"text",outlined:""},model:{value:t.updatedData.id,callback:function(e){t.$set(t.updatedData,"id",e)},expression:"updatedData.id"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker info")])]),a("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"8",xl:"3"}},[a("v-text-field",{attrs:{label:"Full Name",type:"text",outlined:""},model:{value:t.updatedData.name,callback:function(e){t.$set(t.updatedData,"name",e)},expression:"updatedData.name"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"4",xl:"3"}},[a("v-text-field",{attrs:{label:"Desigination",type:"text",outlined:""},model:{value:t.updatedData.designation,callback:function(e){t.$set(t.updatedData,"designation",e)},expression:"updatedData.designation"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Profile Image URL",type:"text",outlined:""},model:{value:t.updatedData.image,callback:function(e){t.$set(t.updatedData,"image",e)},expression:"updatedData.image"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({staticClass:"mt-n6",attrs:{color:"primary",loading:t.imageUploading,dark:""}},i),[t._v("Upload Image")])]}}],null,!1,3016959100),model:{value:t.dialogImageUload,callback:function(e){t.dialogImageUload=e},expression:"dialogImageUload"}},[a("v-card",[a("v-card-title",[t._v("Upload Speaker Image")]),a("v-card-text",[a("v-img",{staticClass:"mb-6",attrs:{src:t.imagePre}}),a("v-file-input",{attrs:{accept:"image/*",label:"Select Image","prepend-icon":"",outlined:""},on:{change:t.onFileChange},model:{value:t.imageUpload,callback:function(e){t.imageUpload=e},expression:"imageUpload"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogImageUload=!1}}},[t._v("Discard")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.uploadImage}},[t._v("Upload Image")])],1)],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[a("v-img",{staticClass:"mt-n7",attrs:{src:t.updatedData.image}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"10"}},[a("v-textarea",{attrs:{outlined:"",label:"Bio"},model:{value:t.updatedData.bio,callback:function(e){t.$set(t.updatedData,"bio",e)},expression:"updatedData.bio"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Personal Info")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Contact Number",type:"tel",outlined:""},model:{value:t.updatedData.mbnumber,callback:function(e){t.$set(t.updatedData,"mbnumber",e)},expression:"updatedData.mbnumber"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Email",type:"email",outlined:""},model:{value:t.updatedData.email,callback:function(e){t.$set(t.updatedData,"email",e)},expression:"updatedData.email"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Company Name",type:"text",outlined:""},model:{value:t.updatedData.company.name,callback:function(e){t.$set(t.updatedData.company,"name",e)},expression:"updatedData.company.name"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Company URL",type:"url",outlined:""},model:{value:t.updatedData.company.url,callback:function(e){t.$set(t.updatedData.company,"url",e)},expression:"updatedData.company.url"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"City",type:"text",outlined:""},model:{value:t.updatedData.city,callback:function(e){t.$set(t.updatedData,"city",e)},expression:"updatedData.city"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Country",type:"text",outlined:""},model:{value:t.updatedData.country,callback:function(e){t.$set(t.updatedData,"country",e)},expression:"updatedData.country"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Social Links")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Facebook",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.facebook,callback:function(e){t.$set(t.updatedData.socialLinks,"facebook",e)},expression:"updatedData.socialLinks.facebook"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Twitter",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.twitter,callback:function(e){t.$set(t.updatedData.socialLinks,"twitter",e)},expression:"updatedData.socialLinks.twitter"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Github",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.github,callback:function(e){t.$set(t.updatedData.socialLinks,"github",e)},expression:"updatedData.socialLinks.github"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"LinkdeIN",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.linkedin,callback:function(e){t.$set(t.updatedData.socialLinks,"linkedin",e)},expression:"updatedData.socialLinks.linkedin"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Medium",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.medium,callback:function(e){t.$set(t.updatedData.socialLinks,"medium",e)},expression:"updatedData.socialLinks.medium"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Website",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.web,callback:function(e){t.$set(t.updatedData.socialLinks,"web",e)},expression:"updatedData.socialLinks.web"}})],1)],1)],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"primary",loading:t.isUpdating},on:{click:t.updateData}},[t._v("Update Details")])],1)],1):t._e()],1)},w=[],O={props:{speakerData:{}},data:function(){return{dialog:!1,visiblity:[!0,!1],imageUploading:!1,imagePre:"",dialogImageUload:!1,imageUpload:[],isUpdating:!1,updatedData:{visible:this.speakerData.visible,name:this.speakerData.name,designation:this.speakerData.designation,mbnumber:this.speakerData.mbnumber,email:this.speakerData.email,image:this.speakerData.image,bio:this.speakerData.bio,id:this.speakerData.id,city:this.speakerData.city,country:this.speakerData.country,company:{name:this.speakerData.company.name,url:this.speakerData.company.url},socialLinks:{facebook:this.speakerData.socialLinks.facebook,github:this.speakerData.socialLinks.github,linkedin:this.speakerData.socialLinks.linkedin,medium:this.speakerData.socialLinks.medium,twitter:this.speakerData.socialLinks.twitter,web:this.speakerData.socialLinks.web}}}},methods:{onFileChange:function(){var t=this,e=new FileReader;e.readAsDataURL(this.imageUpload),e.onload=function(){t.imagePre=e.result}},uploadImage:function(){this.imageUploading=!0;"".concat(this.updatedData.id,".").concat(this.imageUpload.name.split(".")[1]);this.dialogImageUload=!1},updateData:function(){this.isUpdating=!0}}},x=O,D=a("62ad"),C=a("a523"),S=a("ce7e"),_=a("23a7"),$=a("4bd4"),j=a("adda"),V=a("0fd9"),P=a("b974"),I=a("2fa4"),L=a("8654"),T=a("a844"),z=Object(c["a"])(x,k,w,!1,null,null,null),E=z.exports;d()(z,{VBtn:p["a"],VCard:f["a"],VCardActions:h["a"],VCardText:h["c"],VCardTitle:h["d"],VCol:D["a"],VContainer:C["a"],VDialog:v["a"],VDivider:S["a"],VFileInput:_["a"],VForm:$["a"],VIcon:m["a"],VImg:j["a"],VRow:V["a"],VSelect:P["a"],VSpacer:I["a"],VTextField:L["a"],VTextarea:T["a"],VTooltip:b["a"]});var A={name:"viewSpeakers",components:{removeSpeakers:y,editSpeaker:E},data:function(){return{speaker:{},isLoading:!0,isSpeakerFound:!0,snackbarSuccess:!1}},methods:{editSuccessFunction:function(){this.snackbarSuccess=!0,this.loadData()},loadData:function(){this.isLoading=!0}},created:function(){this.loadData()}},U=A,B=(a("167f"),a("8212")),M=a("cc20"),F=(a("8f5a"),a("7efd")),N=a("a9ad"),R=a("58df");function W(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function H(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?W(Object(a),!0).forEach((function(e){G(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function G(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var X=Object(R["a"])(F["a"],N["a"]).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return H(H({},F["a"].options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,H({},F["a"].options.methods.genData.call(this)))}}}),Y=a("a75b"),J=a("490a"),K=a("2db4"),q=a("71d9"),Q=Object(c["a"])(U,i,n,!1,null,null,null);e["default"]=Q.exports;d()(Q,{VAvatar:B["a"],VBtn:p["a"],VChip:M["a"],VChipGroup:X,VCol:D["a"],VContainer:C["a"],VContent:Y["a"],VIcon:m["a"],VProgressCircular:J["a"],VRow:V["a"],VSnackbar:K["a"],VSpacer:I["a"],VToolbar:q["a"]})},"72ab":function(t,e,a){t.exports=a.p+"img/avatar.d5a816ad.png"},"7efd":function(t,e,a){"use strict";a.d(e,"a",(function(){return f}));a("608c");var i=a("9d26"),n=a("0789"),s=a("604c"),r=a("e4cd"),o=a("dc22"),l=a("c3f0"),c=a("58df");function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var f=Object(c["a"])(s["a"],r["a"]).extend({name:"base-slide-group",directives:{Resize:o["a"],Touch:l["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"===typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!==typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return d(d({},s["a"].options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,a=t.wrapper;return e>Math.abs(this.scrollOffset)+a},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var a="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(a)];return this.showArrows||n?this.$createElement(i["a"],{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(n["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,a,i){var n=a?-1:1,s=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(s,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,a=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(a),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,e=t.content,a=t.wrapper,i=e.clientWidth-a.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-i&&(this.scrollOffset=-i):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,a,i){var n=t.clientWidth,s=a?e.content-t.offsetLeft-n:t.offsetLeft;a&&(i=-i);var r=e.wrapper+i,o=n+s,l=.4*n;return s<=i?i=Math.max(s-l,0):r<=o&&(i=Math.min(i-(r-o-l),e.content-e.wrapper)),a?-i:i},calculateCenteredOffset:function(t,e,a){var i=t.offsetLeft,n=t.clientWidth;if(a){var s=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,s))}var r=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,r))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,a=e.content,i=e.wrapper;t.widths={content:a?a.clientWidth:0,wrapper:i?i.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=f.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},"8f5a":function(t,e,a){},a844:function(t,e,a){"use strict";a("1681");var i=a("8654"),n=a("58df");function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=Object(n["a"])(i["a"]);e["a"]=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return r({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=i["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);