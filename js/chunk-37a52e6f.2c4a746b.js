(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37a52e6f"],{"2db4":function(t,a,e){"use strict";e("ca71");var s=e("8dd9"),i=e("a9ad"),n=e("7560"),r=e("f2e7"),o=e("fe6c"),c=e("58df"),l=e("80d2"),d=e("d9bd");a["a"]=Object(c["a"])(s["a"],i["a"],r["a"],Object(o["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:n["a"].options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:t,bottom:a,footer:e,insetFooter:s,left:i,right:n,top:r}=this.$vuetify.application;return{paddingBottom:Object(l["h"])(a+e+s),paddingLeft:Object(l["h"])(i),paddingRight:Object(l["h"])(n),paddingTop:Object(l["h"])(t+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&Object(d["e"])("auto-height",this),0==this.timeout&&Object(d["d"])('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["s"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[Object(l["s"])(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,a=t(this.color,{staticClass:"v-snack__wrapper",class:s["a"].options.computed.classes.call(this),style:s["a"].options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",a,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout(()=>{this.isActive=!1},t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"39c6":function(t,a,e){"use strict";e("636e")},"636e":function(t,a,e){},"8fc8":function(t,a,e){var s={"./android.svg":"d2c1","./angular.svg":"8350","./aog.png":"0f8b","./assessment_chevron.svg":"0860","./development_chevron.svg":"5672","./firebase.svg":"f558","./gcp.svg":"8d14","./howWeSupportIt.png":"195f","./notFound.png":"1d36","./operations_chevron.svg":"89f8","./planning_chevron.svg":"3d23","./polymer.svg":"5c35","./tf.svg":"4805","./whenToUseIt.png":"1ad8"};function i(t){var a=n(t);return e(a)}function n(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="8fc8"},a078:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var s={}},aa9c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-content",{staticClass:"pa-0 pt-5"},[e("v-container",{staticClass:"pa-0 pt-5 mt-2",attrs:{fluid:""}},[e("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[e("eventsHeader"),e("upcomingEvents")],1)],1)],1),e("v-container",{staticClass:"pa-0 py-2",attrs:{fluid:""}},[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"10",xs:"12"}},[e("pastEvents")],1)],1)],1)],1)},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[e("p",{staticClass:" mb-0",staticStyle:{"font-weight":"350","font-size":"200%"}},[e("b",[t._v(" Our "),e("span",{staticStyle:{color:"#1a73e8"}},[t._v("Events")])])]),e("p",{staticClass:" mt-0",staticStyle:{"font-size":"120%"}},[t._v(" Questions? Please contact "),e("a",{staticStyle:{color:"#1565C0","text-decoration":"none"},attrs:{href:"mailto:"+t.communityData.communityEmail}},[t._v(t._s(t.communityData.communityEmail))])])])],1)],1)},r=[],o=e("d67c"),c={data:function(){return{communityData:o}}},l=c,d=e("2877"),m=e("6544"),u=e.n(m),v=e("62ad"),p=e("a523"),h=e("0fd9"),g=Object(d["a"])(l,n,r,!1,null,null,null),f=g.exports;u()(g,{VCol:v["a"],VContainer:p["a"],VRow:h["a"]});var b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-snackbar",{attrs:{bottom:"",left:""},model:{value:t.errorAlert,callback:function(a){t.errorAlert=a},expression:"errorAlert"}},[t._v(" "+t._s(t.errorMsg)+" "),e("v-btn",{attrs:{color:"pink",text:""},on:{click:function(a){t.errorAlert=!1}}},[t._v("Close")])],1),e("v-col",{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[e("p",{staticClass:" mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Upcoming Events")]),e("p",{staticClass:" mt-0",staticStyle:{"font-size":"95%"}},[t._v("As events and Trainings are scheduled, they will appear below along with additional contact information for those events. ")]),t.showLoader?e("v-row",t._l(3,(function(t,a){return e("v-col",{key:a,staticClass:"pa-2",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("upcomingEventLoader")],1)})),1):e("v-row",t._l(t.eventsData,(function(a,s){return e("v-col",{key:s,staticClass:"pa-2",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("v-slide-y-reverse-transition",[e("upcomingEvent",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],attrs:{data:{data:a}}})],1)],1)})),1),t.notFoundUpcomingEventFlag?e("v-row",{staticClass:"pa-2"},[e("v-col",{staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{md:"3",lg:"3",sm:"6",cols:"12"}},[e("p",{staticClass:" px-2 mb-0",staticStyle:{"font-size":"140%"}},[e("v-icon",[t._v("mdi-calendar-blank")]),e("br"),t._v("No Upcoming Events! ")],1)])],1):t._e()],1)],1)},C=[],_=e("a078"),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("div",t._g({staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",staticStyle:{cursor:"pointer"}},s),[e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t._f("dateFilter")(t.data.data.local_date)))]),e("p",{staticClass:" ma-0 mt-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.data.data.name))]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.data.data.local_time))]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.data.data.venue.name))]),e("p",{staticClass:"mb-0 mt-2 ",staticStyle:{color:"#1a73e8"}},[t._v("See More")])])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[t.dialog?e("v-card",{attrs:{color:""}},[e("v-card-title",{staticClass:"px-5 py-5 ",staticStyle:{"background-position":"right bottom"}},[t._v(t._s(t.data.data.name))]),e("v-card-text",{staticClass:"pa-5"},[e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Venue:")]),t._v(" "+t._s(t.data.data.venue.name)+" ")]),e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Date:")]),t._v(" "+t._s(t._f("dateFilter")(t.data.data.local_date))+" ")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Time:")]),t._v(" "+t._s(t.data.data.local_time)+" ")]),e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Description:")]),e("span",{domProps:{innerHTML:t._s(t.$options.filters.summary(t.data.data.description,100))}})]),t.data.data.link.length>0?e("v-btn",{staticClass:"ma-0 elevation-0 my-2 mr-3",staticStyle:{"text-transform":"capitalize"},attrs:{color:"#1a73e8",href:t.data.data.link,target:"_blank",dark:""}},[t._v("See More at Meetup")]):t._e()],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")])],1)],1):t._e()],1)},w=[],k={props:{data:{data:{}}},data:function(){return{dialog:!1}},methods:{getCharString:function(t){var a=t.split(" ");return a.length>1?(a[0].substring(0,1)+""+a[1].substring(0,1)).toUpperCase():a[0].substring(0,1).toUpperCase()}},filters:{summary:function(t,a){return t.length>a?t.substring(0,a)+"..":t},dateFilter:function(t){var a=new Date(t);return a.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric"})}}},S=k,x=e("8336"),V=e("b0af"),E=e("99d9"),D=e("169a"),A=e("ce7e"),T=e("2fa4"),z=Object(d["a"])(S,y,w,!1,null,null,null),M=z.exports;u()(z,{VBtn:x["a"],VCard:V["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VDialog:D["a"],VDivider:A["a"],VSpacer:T["a"]});var j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"ma-1 pa-1 my-0",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{flat:""}},[e("v-card-title",{staticClass:"mb-0"},[e("div",[e("p",{staticClass:" mb-2 animate-shimmer",staticStyle:{color:"#424242",width:"120px",height:"10px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"140px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}})])]),e("v-card-actions",{staticClass:"mt-0"},[e("span",{staticClass:"animate-shimmer ml-2",staticStyle:{color:"#424242",width:"60px",height:"25px"}})])],1)},L=[],O=(e("39c6"),{}),F=Object(d["a"])(O,j,L,!1,null,null,null),U=F.exports;u()(F,{VCard:V["a"],VCardActions:E["a"],VCardTitle:E["d"]});var $={name:"App",components:{upcomingEvent:M,upcomingEventLoader:U},data:function(){return{eventsData:[],showLoader:!0,showData:!1,notFoundUpcomingEventFlag:!1,errorAlert:!1,errorMsg:""}},created:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+_["a"].MeetupURLName+"/events?&sign=true").then((function(t){return t.json()})).then((function(a){a.length>0?(t.showLoader=!1,t.showData=!0,t.eventsData=a):(t.showLoader=!1,t.notFoundUpcomingEventFlag=!0)})).catch((function(a){t.showLoader=!1,t.errorMsg="Issue found with "+a,t.errorAlert=!0,t.notFoundUpcomingEventFlag=!0}))},methods:{getImgUrl:function(t){return t.length>0?e("8fc8")("./"+t):e("1d36")}}},B=$,N=e("132d"),R=e("0789"),I=e("2db4"),H=Object(d["a"])(B,b,C,!1,null,null,null),P=H.exports;u()(H,{VBtn:x["a"],VCol:v["a"],VContainer:p["a"],VIcon:N["a"],VRow:h["a"],VSlideYReverseTransition:R["e"],VSnackbar:I["a"]});var W=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-snackbar",{attrs:{bottom:"",left:""},model:{value:t.errorAlert,callback:function(a){t.errorAlert=a},expression:"errorAlert"}},[t._v(" "+t._s(t.errorMsg)+" "),e("v-btn",{attrs:{color:"pink",text:""},on:{click:function(a){t.errorAlert=!1}}},[t._v("Close")])],1),e("v-row",{staticClass:"mb-5",attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[e("p",{staticClass:" mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Directory of past events")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"95%"}},[t._v("Events are listed in reverse chronological order by date.")]),e("p",{staticClass:" mt-0",staticStyle:{"font-size":"95%"}},[t._v(" Here are the recent 10 meetups. To know more about the past meetups "),e("a",{staticStyle:{"text-decoration":"none",color:"#0277bd"},attrs:{href:t.communityData.CommunityMeetupLink,target:"_blank"}},[t._v("Click here")])]),t.showLoader?e("v-row",t._l(6,(function(t){return e("v-col",{key:t,staticClass:"pa-0",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("pastEventCardLoader")],1)})),1):e("v-row",t._l(t.eventsData,(function(a,s){return e("v-col",{key:s,staticClass:"pa-0",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("v-slide-y-reverse-transition",[e("pastEventCard",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],attrs:{data:{data:a}}})],1)],1)})),1),t.notFoundUpcomingEventFlag?e("v-row",{staticClass:"pa-2"},[e("v-col",{staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{md:"3",lg:"3",sm:"6",cols:"6"}},[e("p",{staticClass:" px-2 mb-0",staticStyle:{"font-size":"140%"}},[e("v-icon",[t._v("mdi-calendar-blank")]),e("br"),t._v("No Past Events! ")],1)])],1):t._e()],1)],1)],1)},J=[],Y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("div",t._g({staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",staticStyle:{cursor:"pointer"}},s),[e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.item.date))]),e("p",{staticClass:" ma-0 mt-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.item.name))]),e("v-btn",t._g({},s),[t._v("See More")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"px-5 py-5 ",staticStyle:{"background-position":"right bottom"}},[t._v(t._s(t.item.name))]),e("v-card-text",{staticClass:"pa-5"},[e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Venue:")]),t._v(" "+t._s(t.item.venue)+" ")]),e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Date:")]),t._v(" "+t._s(t.item.date)+" ")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Video Day 1:")]),t._v(" "+t._s(t.item.D1link)+" ")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Video Day 2:")]),t._v(" "+t._s(t.item.D2link)+" ")]),e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Description:")]),t._v(" "+t._s(t.item.description)+" ")])]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)},q=[],Q={name:"App",components:{},data:function(){return{dialog:!1}}},G=Q,K=Object(d["a"])(G,Y,q,!1,null,null,null),X=K.exports;u()(K,{VBtn:x["a"],VCard:V["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VDialog:D["a"],VDivider:A["a"],VSpacer:T["a"]});var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"ma-1 pa-1 my-0 elevation-0",staticStyle:{"border-radius":"7px",border:"1px #ddd solid"},attrs:{flat:""}},[e("v-card-title",{staticClass:"mb-0"},[e("div",[e("p",{staticClass:" mb-2 animate-shimmer",staticStyle:{color:"#424242",width:"200px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}})])]),e("v-card-actions",{staticClass:"mt-0"},[e("v-spacer"),e("span",{staticClass:"animate-shimmer",staticStyle:{color:"#424242",width:"60px",height:"25px"}})],1)],1)},tt=[],at=(e("b38d"),{}),et=Object(d["a"])(at,Z,tt,!1,null,null,null),st=et.exports;u()(et,{VCard:V["a"],VCardActions:E["a"],VCardTitle:E["d"],VSpacer:T["a"]});var it={name:"App",components:{pastEventCard:X,pastEventCardLoader:st},data:function(){return{communityData:o,eventsData:[],showData:!1,showLoader:!0,notFoundUpcomingEventFlag:!1,errorAlert:!1,errorMsg:""}},created:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+_["a"].MeetupURLName+"/events?desc=true&photo-host=public&page=8&status=past&sign=true").then((function(t){return t.json()})).then((function(a){a.length>0?(t.showLoader=!1,t.showData=!0,t.eventsData=a):(t.showLoader=!1,t.notFoundUpcomingEventFlag=!0)})).catch((function(a){t.showLoader=!1,t.errorMsg="Issue found with "+a,t.errorAlert=!0,t.notFoundUpcomingEventFlag=!0}))},methods:{getImgUrl:function(t){return t.length>0?e("8fc8")("./"+t):e("1d36")},getCharString:function(t){var a=t.split(" ");return a.length>1?(a[0].substring(0,1)+""+a[1].substring(0,1)).toUpperCase():a[0].substring(0,1).toUpperCase()}},filters:{summery:function(t,a){return t.substring(0,a)+".."},dateFilter:function(t){var a=new Date(t);return a.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric"})}}},nt=it,rt=Object(d["a"])(nt,W,J,!1,null,null,null),ot=rt.exports;u()(rt,{VBtn:x["a"],VCol:v["a"],VContainer:p["a"],VIcon:N["a"],VRow:h["a"],VSlideYReverseTransition:R["e"],VSnackbar:I["a"]});var ct={components:{eventsHeader:f,upcomingEvents:P,pastEvents:ot},created:function(){var t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd")}},lt=ct,dt=e("a75b"),mt=Object(d["a"])(lt,s,i,!1,null,null,null);a["default"]=mt.exports;u()(mt,{VCol:v["a"],VContainer:p["a"],VContent:dt["a"],VRow:h["a"]})},b38d:function(t,a,e){"use strict";e("d6c8")},ca71:function(t,a,e){},d6c8:function(t,a,e){}}]);