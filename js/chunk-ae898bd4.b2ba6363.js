(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ae898bd4"],{"167f":function(t,e,a){"use strict";a("580a")},1681:function(t,e,a){},"23a7":function(t,e,a){"use strict";a("5803");var s=a("2677"),i=a("cc20"),l=a("80d2"),n=a("d9bd"),r=a("d9f7");e["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>Object(l["F"])(t).every(t=>null!=t&&"object"===typeof t)}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.isMultiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,{size:e=0})=>t+e,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(l["v"])(e,1024===this.base))},internalArrayValue(){return Object(l["F"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},isMultiple(){return this.$attrs.hasOwnProperty("multiple")},text(){return this.isDirty||!this.isFocused&&this.hasLabel?this.internalArrayValue.map(t=>{const{name:e="",size:a=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${Object(l["v"])(a,1024===this.base)})`:s}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(n["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.isMultiple?t:t?[t]:[];Object(l["i"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.isMultiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(i["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genControl(){const t=s["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(r["c"])(t.data.style,{display:"none"})),t},genInput(){const t=s["a"].options.methods.genInput.call(this);return delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=s["a"].options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:()=>this.$refs.input.click()},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.isMultiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},2677:function(t,e,a){"use strict";var s=a("8654");e["a"]=s["a"]},"4bd4":function(t,e,a){"use strict";var s=a("58df"),i=a("7e2b"),l=a("3206");e["a"]=Object(s["a"])(i["a"],Object(l["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),a={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?a.shouldValidate=t.$watch("shouldValidate",s=>{s&&(this.errorBag.hasOwnProperty(t._uid)||(a.valid=e(t)))}):a.valid=e(t),a},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const a=this.watchers.find(t=>t._uid===e._uid);a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},5803:function(t,e,a){},"580a":function(t,e,a){},"608c":function(t,e,a){},"651b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-content",{class:1==t.$vuetify.theme.dark?"blank":"grey lighten-5"},[s("v-snackbar",{attrs:{timeout:5e3,bottom:"",right:""},model:{value:t.snackbarSuccess,callback:function(e){t.snackbarSuccess=e},expression:"snackbarSuccess"}},[t._v("\n    Speaker Edited Successfully\n    "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbarSuccess=!1}}},[t._v("Close")])],1),s("v-container",{staticClass:"text-center",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-toolbar",{staticClass:"elevation-1"},[s("router-link",{staticClass:"ma-0  mb-0",staticStyle:{"border-radius":"5px","text-transform":"capitalize","text-decoration":"none"},attrs:{to:"/admin/dashboard/speaker/",color:1==t.$vuetify.theme.dark?"white":"black"}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-arrow-left-thick")]),s("span",{class:1==t.$vuetify.theme.dark?"white--text":"black--text"},[t._v("Speakers")])],1),s("v-spacer"),!t.isLoading&&t.isSpeakerFound?s("editSpeaker",{staticClass:"mr-5",attrs:{speakerData:t.speaker},on:{showEditSuccess:t.editSuccessFunction}}):t._e(),!t.isLoading&&t.isSpeakerFound?s("removeSpeakers",{staticClass:"mr-5",attrs:{speakerData:{id:t.$route.params.id,name:t.speaker.name}}}):t._e()],1)],1)],1),t.isLoading?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-progress-circular",{attrs:{width:4,size:70,color:"indigo",indeterminate:""}})],1)],1):!t.isLoading&&t.isSpeakerFound?s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",[s("v-col",{staticClass:"pa-1 elevation-1 py-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"3"}},[s("v-avatar",{attrs:{size:"120"}},[s("img",{attrs:{src:t.speaker.image.length>0?t.speaker.image:a("72ab"),alt:t.speaker.name}})]),s("p",{staticClass:"mt-3 mb-0  mb-0 text--black",staticStyle:{"font-size":"120%"}},[t._v("\n                "+t._s(t.speaker.name)+"\n              ")]),s("p",{staticClass:"mt-1 mb-0  mt-0 greyText",staticStyle:{"font-size":"100%"}},[t._v("\n                "+t._s(t.speaker.designation)+"\n              ")]),s("v-chip",{staticClass:"mt-2",attrs:{href:t.speaker.company.url,target:"_blank",small:""}},[t._v(t._s(t.speaker.company.name))]),s("br"),s("br"),t.speaker.visible?s("v-chip",{staticClass:"ma-1",attrs:{dark:"",label:"",color:"green",small:""}},[t._v("Visible")]):s("v-chip",{staticClass:"ma-1",attrs:{label:"",dark:"",color:"red",small:""}},[t._v("Not Visible")])],1),s("v-col",{staticClass:"elevation-1 py-5 text-left pa-5",class:1==t.$vuetify.theme.dark?"grey darken-4":"white",attrs:{cols:"12",md:"9"}},[s("p",{staticClass:"mb-0"},[s("b",[t._v("Bio")])]),s("p",{staticClass:"mt-1 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.bio))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Email")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.email))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Mobile")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.mbnumber))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Location")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v("\n                "+t._s(t.speaker.city)+", "+t._s(t.speaker.country)+"\n              ")]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("User ID")])]),s("p",{staticClass:"mt-0 mb-0  greyText mt-0"},[t._v(t._s(t.speaker.id))]),s("p",{staticClass:"mb-0 mt-3"},[s("b",[t._v("Social Links")])]),s("p",{staticClass:"mt-1 mb-0 mt-0"},[s("v-chip-group",{attrs:{column:""}},t._l(t.speaker.socialLinks,(function(e,a){return s("v-chip",{key:a,attrs:{href:e,target:"_blank"}},[t._v(t._s(a.charAt(0).toUpperCase()+a.slice(1)))])})),1)],1)])],1)],1)],1)],1):s("v-row",{attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",md:"11"}},[s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"elevation-1 pa-3 white"},[s("v-col",[s("h1",[t._v("User Not Found")])])],1)],1)],1)],1)],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{"max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:"",dark:"",color:"red"},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},s),[a("v-icon",[t._v("mdi-delete")])],1)]}}],null,!0)},[a("span",[t._v("Remove "+t._s(t.speakerData.name))])])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Are you sure?")]),a("v-card-text",[t._v("Would you like to remove "+t._s(t.speakerData.name)+"?")]),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("No")]),a("v-btn",{attrs:{color:"red darken-1",text:"",loading:t.isLoading},on:{click:function(e){return t.deleteItem(t.speakerData.id)}}},[t._v("Remove")])],1)],1)],1)},n=[],r={props:{speakerData:{}},data:function(){return{dialog:!1,isLoading:!1}}},o=r,c=a("2877"),d=a("6544"),u=a.n(d),p=a("8336"),h=a("b0af"),m=a("99d9"),v=a("169a"),f=a("132d"),g=a("3a2f"),b=Object(c["a"])(o,l,n,!1,null,null,null),k=b.exports;u()(b,{VBtn:p["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VDialog:v["a"],VIcon:f["a"],VTooltip:g["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{scrollable:"",width:"1200"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({attrs:{icon:"",color:"primary",dark:""},on:{click:function(e){e.stopPropagation(),t.dialog=!0}}},s),[a("v-icon",[t._v("mdi-lead-pencil")])],1)]}}])},[a("span",[t._v("Edit "+t._s(t.speakerData.name)+" Details")])]),t.dialog?a("v-card",[a("v-card-title",{staticClass:"headline",attrs:{"primary-title":""}},[t._v("Edit "+t._s(t.speakerData.name.split(" ")[0])+"'s Details")]),a("v-card-text",{},[a("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[a("v-form",{attrs:{"lazy-validation":""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker Status")])]),a("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[a("v-select",{attrs:{items:t.visiblity,label:"Visiblity Status",outlined:""},model:{value:t.updatedData.visible,callback:function(e){t.$set(t.updatedData,"visible",e)},expression:"updatedData.visible"}})],1),a("v-col",{attrs:{cols:"6",md:"4",xl:"3"}},[a("v-text-field",{attrs:{disabled:"",label:"ID",type:"text",outlined:""},model:{value:t.updatedData.id,callback:function(e){t.$set(t.updatedData,"id",e)},expression:"updatedData.id"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Speaker info")])]),a("v-col",{attrs:{cols:"12",sm:"8",md:"10"}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"8",xl:"3"}},[a("v-text-field",{attrs:{label:"Full Name",type:"text",outlined:""},model:{value:t.updatedData.name,callback:function(e){t.$set(t.updatedData,"name",e)},expression:"updatedData.name"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"4",xl:"3"}},[a("v-text-field",{attrs:{label:"Desigination",type:"text",outlined:""},model:{value:t.updatedData.designation,callback:function(e){t.$set(t.updatedData,"designation",e)},expression:"updatedData.designation"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Profile Image URL",type:"text",outlined:""},model:{value:t.updatedData.image,callback:function(e){t.$set(t.updatedData,"image",e)},expression:"updatedData.image"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",sm:"6"}},[a("v-dialog",{attrs:{"max-width":"290"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-btn",t._g({staticClass:"mt-n6",attrs:{color:"primary",loading:t.imageUploading,dark:""}},s),[t._v("Upload Image")])]}}],null,!1,3016959100),model:{value:t.dialogImageUload,callback:function(e){t.dialogImageUload=e},expression:"dialogImageUload"}},[a("v-card",[a("v-card-title",[t._v("Upload Speaker Image")]),a("v-card-text",[a("v-img",{staticClass:"mb-6",attrs:{src:t.imagePre}}),a("v-file-input",{attrs:{accept:"image/*",label:"Select Image","prepend-icon":"",outlined:""},on:{change:t.onFileChange},model:{value:t.imageUpload,callback:function(e){t.imageUpload=e},expression:"imageUpload"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialogImageUload=!1}}},[t._v("Discard")]),a("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:t.uploadImage}},[t._v("Upload Image")])],1)],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",sm:"4",md:"2"}},[a("v-img",{staticClass:"mt-n7",attrs:{src:t.updatedData.image}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"10"}},[a("v-textarea",{attrs:{outlined:"",label:"Bio"},model:{value:t.updatedData.bio,callback:function(e){t.$set(t.updatedData,"bio",e)},expression:"updatedData.bio"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Personal Info")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Contact Number",type:"tel",outlined:""},model:{value:t.updatedData.mbnumber,callback:function(e){t.$set(t.updatedData,"mbnumber",e)},expression:"updatedData.mbnumber"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Email",type:"email",outlined:""},model:{value:t.updatedData.email,callback:function(e){t.$set(t.updatedData,"email",e)},expression:"updatedData.email"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Company Name",type:"text",outlined:""},model:{value:t.updatedData.company.name,callback:function(e){t.$set(t.updatedData.company,"name",e)},expression:"updatedData.company.name"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Company URL",type:"url",outlined:""},model:{value:t.updatedData.company.url,callback:function(e){t.$set(t.updatedData.company,"url",e)},expression:"updatedData.company.url"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"City",type:"text",outlined:""},model:{value:t.updatedData.city,callback:function(e){t.$set(t.updatedData,"city",e)},expression:"updatedData.city"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Country",type:"text",outlined:""},model:{value:t.updatedData.country,callback:function(e){t.$set(t.updatedData,"country",e)},expression:"updatedData.country"}})],1)],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("p",{staticClass:"my-0",staticStyle:{"font-size":"120%"}},[t._v("Social Links")])]),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Facebook",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.facebook,callback:function(e){t.$set(t.updatedData.socialLinks,"facebook",e)},expression:"updatedData.socialLinks.facebook"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Twitter",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.twitter,callback:function(e){t.$set(t.updatedData.socialLinks,"twitter",e)},expression:"updatedData.socialLinks.twitter"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Github",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.github,callback:function(e){t.$set(t.updatedData.socialLinks,"github",e)},expression:"updatedData.socialLinks.github"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"LinkdeIN",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.linkedin,callback:function(e){t.$set(t.updatedData.socialLinks,"linkedin",e)},expression:"updatedData.socialLinks.linkedin"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Medium",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.medium,callback:function(e){t.$set(t.updatedData.socialLinks,"medium",e)},expression:"updatedData.socialLinks.medium"}})],1),a("v-col",{staticClass:"pa-1 ma-0",attrs:{cols:"12",md:"6"}},[a("v-text-field",{attrs:{label:"Website",type:"url",outlined:""},model:{value:t.updatedData.socialLinks.web,callback:function(e){t.$set(t.updatedData.socialLinks,"web",e)},expression:"updatedData.socialLinks.web"}})],1)],1)],1)],1)],1)],1)],1),a("v-divider"),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"primary",loading:t.isUpdating},on:{click:t.updateData}},[t._v("Update Details")])],1)],1):t._e()],1)},w=[],x={props:{speakerData:{}},data:function(){return{dialog:!1,visiblity:[!0,!1],imageUploading:!1,imagePre:"",dialogImageUload:!1,imageUpload:[],isUpdating:!1,updatedData:{visible:this.speakerData.visible,name:this.speakerData.name,designation:this.speakerData.designation,mbnumber:this.speakerData.mbnumber,email:this.speakerData.email,image:this.speakerData.image,bio:this.speakerData.bio,id:this.speakerData.id,city:this.speakerData.city,country:this.speakerData.country,company:{name:this.speakerData.company.name,url:this.speakerData.company.url},socialLinks:{facebook:this.speakerData.socialLinks.facebook,github:this.speakerData.socialLinks.github,linkedin:this.speakerData.socialLinks.linkedin,medium:this.speakerData.socialLinks.medium,twitter:this.speakerData.socialLinks.twitter,web:this.speakerData.socialLinks.web}}}}},C=x,_=a("62ad"),D=a("a523"),$=a("ce7e"),S=a("23a7"),V=a("4bd4"),I=a("adda"),O=a("0fd9"),L=a("b974"),z=a("2fa4"),T=a("8654"),B=a("a844"),E=Object(c["a"])(C,y,w,!1,null,null,null),M=E.exports;u()(E,{VBtn:p["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VCol:_["a"],VContainer:D["a"],VDialog:v["a"],VDivider:$["a"],VFileInput:S["a"],VForm:V["a"],VIcon:f["a"],VImg:I["a"],VRow:O["a"],VSelect:L["a"],VSpacer:z["a"],VTextField:T["a"],VTextarea:B["a"],VTooltip:g["a"]});var A={name:"viewSpeakers",components:{removeSpeakers:k,editSpeaker:M},data:function(){return{speaker:{},isLoading:!0,isSpeakerFound:!0,snackbarSuccess:!1}},methods:{editSuccessFunction:function(){this.snackbarSuccess=!0,this.loadData()},loadData:function(){this.isLoading=!0}},created:function(){this.loadData()}},U=A,N=(a("167f"),a("8212")),P=a("cc20"),F=(a("8f5a"),a("7efd")),j=a("a9ad"),W=a("58df"),R=Object(W["a"])(F["a"],j["a"]).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...F["a"].options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(t){t&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...F["a"].options.methods.genData.call(this)})}}}),H=a("a75b"),G=a("490a"),X=a("2db4"),Y=a("71d9"),J=Object(c["a"])(U,s,i,!1,null,null,null);e["default"]=J.exports;u()(J,{VAvatar:N["a"],VBtn:p["a"],VChip:P["a"],VChipGroup:R,VCol:_["a"],VContainer:D["a"],VContent:H["a"],VIcon:f["a"],VProgressCircular:G["a"],VRow:O["a"],VSnackbar:X["a"],VSpacer:z["a"],VToolbar:Y["a"]})},"72ab":function(t,e,a){t.exports=a.p+"img/avatar.d5a816ad.png"},"7efd":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a("608c");var s=a("9d26"),i=a("0789"),l=a("604c"),n=a("e4cd"),r=a("dc22"),o=a("c3f0"),c=a("58df");const d=Object(c["a"])(l["a"],n["a"]).extend({name:"base-slide-group",directives:{Resize:r["a"],Touch:o["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...l["a"].options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$refs.content.style.transform=`translateX(${-t}px)`}},beforeUpdate(){this.internalItemsLength=(this.$children||[]).length},updated(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const a=`${t[0].toUpperCase()}${t.slice(1)}`,i=this["has"+a];return this.showArrows||i?this.$createElement(s["a"],{props:{disabled:!i}},this[e+"Icon"]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(i["c"],[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset(t,e,a,s){const i=a?-1:1,l=i*s+("prev"===t?-1:1)*e.wrapper;return i*Math.max(Math.min(l,e.content-e.wrapper),0)},onAffixClick(t){this.$emit("click:"+t),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,a=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(a),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,a=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-a&&(this.scrollOffset=-a):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=a&&(this.scrollOffset=a),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset(t,e,a,s){const i=t.clientWidth,l=a?e.content-t.offsetLeft-i:t.offsetLeft;a&&(s=-s);const n=e.wrapper+s,r=i+l,o=.4*i;return l<=s?s=Math.max(l-o,0):n<=r&&(s=Math.min(s-(n-r-o),e.content-e.wrapper)),a?-s:s},calculateCenteredOffset(t,e,a){const{offsetLeft:s,clientWidth:i}=t;if(a){const t=e.content-s-i/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=s+i/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame(()=>{const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()})}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e["b"]=d.extend({name:"v-slide-group",provide(){return{slideGroup:this}}})},"8f5a":function(t,e,a){},a844:function(t,e,a){"use strict";a("1681");var s=a("8654"),i=a("58df");const l=Object(i["a"])(s["a"]);e["a"]=l.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);