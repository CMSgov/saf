(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ab0c7f8"],{"39c6":function(t,a,e){"use strict";var s=e("9460"),n=e.n(s);n.a},"8fc8":function(t,a,e){var s={"./android.svg":"d2c1","./angular.svg":"8350","./aog.png":"0f8b","./assessment_chevron.svg":"0860","./development_chevron.svg":"5672","./firebase.svg":"f558","./gcp.svg":"8d14","./howWeSupportIt.png":"195f","./notFound.png":"1d36","./operations_chevron.svg":"89f8","./planning_chevron.svg":"3d23","./polymer.svg":"5c35","./tf.svg":"4805","./whenToUseIt.png":"1ad8"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="8fc8"},9460:function(t,a,e){},a078:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var s={}},a272:function(t,a,e){},aa9c:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-content",{staticClass:"pa-0 pt-5"},[e("v-container",{staticClass:"pa-0 pt-5 mt-2",attrs:{fluid:""}},[e("v-row",{staticClass:"py-0 my-0",class:1==this.$vuetify.theme.dark?"grey darken-4":"grey lighten-4",attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"py-3 my-0",attrs:{md:"12",lg:"10",xs:"12"}},[e("eventsHeader"),e("upcomingEvents")],1)],1)],1),e("v-container",{staticClass:"pa-0 py-2",attrs:{fluid:""}},[e("v-row",{attrs:{justify:"center",align:"center"}},[e("v-col",{staticClass:"py-0",attrs:{md:"12",lg:"10",xs:"12"}},[e("pastEvents")],1)],1)],1)],1)},n=[],r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-row",{attrs:{align:"center"}},[e("v-col",{attrs:{md:"12",sm:"12",cols:"12"}},[e("p",{staticClass:" mb-0",staticStyle:{"font-weight":"350","font-size":"200%"}},[e("b",[t._v("\n          Our\n          "),e("span",{staticStyle:{color:"#1a73e8"}},[t._v("Events")])])]),e("p",{staticClass:" mt-0",staticStyle:{"font-size":"120%"}},[t._v("\n        Questions? Please contact\n        "),e("a",{staticStyle:{color:"#1565C0","text-decoration":"none"},attrs:{href:"mailto:"+t.communityData.communityEmail}},[t._v(t._s(t.communityData.communityEmail))])])])],1)],1)},i=[],o=e("d67c"),c={data:function(){return{communityData:o}}},l=c,d=e("2877"),m=e("6544"),v=e.n(m),u=e("62ad"),p=e("a523"),h=e("0fd9"),f=Object(d["a"])(l,r,i,!1,null,null,null),g=f.exports;v()(f,{VCol:u["a"],VContainer:p["a"],VRow:h["a"]});var C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-snackbar",{attrs:{bottom:"",left:""},model:{value:t.errorAlert,callback:function(a){t.errorAlert=a},expression:"errorAlert"}},[t._v("\n    "+t._s(t.errorMsg)+"\n    "),e("v-btn",{attrs:{color:"pink",text:""},on:{click:function(a){t.errorAlert=!1}}},[t._v("Close")])],1),e("v-col",{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[e("p",{staticClass:" mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Upcoming Events")]),e("p",{staticClass:" mt-0",staticStyle:{"font-size":"95%"}},[t._v("As events and Trainings are scheduled, they will appear below along with additional contact information for those events. ")]),t.showLoader?e("v-row",t._l(3,(function(t,a){return e("v-col",{key:a,staticClass:"pa-2",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("upcomingEventLoader")],1)})),1):e("v-row",t._l(t.eventsData,(function(a,s){return e("v-col",{key:s,staticClass:"pa-2",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("v-slide-y-reverse-transition",[e("upcomingEvent",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],attrs:{data:{data:a}}})],1)],1)})),1),t.notFoundUpcomingEventFlag?e("v-row",{staticClass:"pa-2"},[e("v-col",{staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{md:"3",lg:"3",sm:"6",cols:"12"}},[e("p",{staticClass:" px-2 mb-0",staticStyle:{"font-size":"140%"}},[e("v-icon",[t._v("mdi-calendar-blank")]),e("br"),t._v("No Upcoming Events!\n          ")],1)])],1):t._e()],1)],1)},_=[],b=e("a078"),y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("div",t._g({staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",staticStyle:{cursor:"pointer"}},s),[e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t._f("dateFilter")(t.data.data.local_date)))]),e("p",{staticClass:" ma-0 mt-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.data.data.name))]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.data.data.local_time))]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.data.data.venue.name))]),e("p",{staticClass:"mb-0 mt-2 ",staticStyle:{color:"#1a73e8"}},[t._v("See More")])])]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[t.dialog?e("v-card",{attrs:{color:""}},[e("v-card-title",{staticClass:"px-5 py-5 ",staticStyle:{"background-position":"right bottom"}},[t._v(t._s(t.data.data.name))]),e("v-card-text",{staticClass:"pa-5"},[e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Venue:")]),t._v("\n        "+t._s(t.data.data.venue.name)+"\n      ")]),e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Date:")]),t._v("\n        "+t._s(t._f("dateFilter")(t.data.data.local_date))+"\n      ")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Time:")]),t._v("\n        "+t._s(t.data.data.local_time)+"\n      ")]),e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Description:")]),e("span",{domProps:{innerHTML:t._s(t.$options.filters.summary(t.data.data.description,100))}})]),t.data.data.link.length>0?e("v-btn",{staticClass:"ma-0 elevation-0 my-2 mr-3",staticStyle:{"text-transform":"capitalize"},attrs:{color:"#1a73e8",href:t.data.data.link,target:"_blank",dark:""}},[t._v("See More at Meetup")]):t._e()],1),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")])],1)],1):t._e()],1)},w=[],S={props:{data:{data:{}}},data:function(){return{dialog:!1}},methods:{getCharString:function(t){var a=t.split(" ");return a.length>1?(a[0].substring(0,1)+""+a[1].substring(0,1)).toUpperCase():a[0].substring(0,1).toUpperCase()}},filters:{summary:function(t,a){return t.length>a?t.substring(0,a)+"..":t},dateFilter:function(t){var a=new Date(t);return a.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric"})}}},k=S,x=e("8336"),V=e("b0af"),E=e("99d9"),D=e("169a"),z=e("ce7e"),M=e("2fa4"),U=Object(d["a"])(k,y,w,!1,null,null,null),A=U.exports;v()(U,{VBtn:x["a"],VCard:V["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VDialog:D["a"],VDivider:z["a"],VSpacer:M["a"]});var F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"ma-1 pa-1 my-0",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{flat:""}},[e("v-card-title",{staticClass:"mb-0"},[e("div",[e("p",{staticClass:" mb-2 animate-shimmer",staticStyle:{color:"#424242",width:"120px",height:"10px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"140px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}})])]),e("v-card-actions",{staticClass:"mt-0"},[e("span",{staticClass:"animate-shimmer ml-2",staticStyle:{color:"#424242",width:"60px",height:"25px"}})])],1)},L=[],$=(e("39c6"),{}),j=Object(d["a"])($,F,L,!1,null,null,null),T=j.exports;v()(j,{VCard:V["a"],VCardActions:E["a"],VCardTitle:E["d"]});var O={name:"App",components:{upcomingEvent:A,upcomingEventLoader:T},data:function(){return{eventsData:[],showLoader:!0,showData:!1,notFoundUpcomingEventFlag:!1,errorAlert:!1,errorMsg:""}},created:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+b["a"].MeetupURLName+"/events?&sign=true").then((function(t){return t.json()})).then((function(a){a.length>0?(t.showLoader=!1,t.showData=!0,t.eventsData=a):(t.showLoader=!1,t.notFoundUpcomingEventFlag=!0)})).catch((function(a){t.showLoader=!1,t.errorMsg="Issue found with "+a,t.errorAlert=!0,t.notFoundUpcomingEventFlag=!0}))},methods:{getImgUrl:function(t){return t.length>0?e("8fc8")("./"+t):e("1d36")}}},I=O,N=e("132d"),R=e("0789"),B=e("2db4"),H=Object(d["a"])(I,C,_,!1,null,null,null),P=H.exports;v()(H,{VBtn:x["a"],VCol:u["a"],VContainer:p["a"],VIcon:N["a"],VRow:h["a"],VSlideYReverseTransition:R["e"],VSnackbar:B["a"]});var J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{attrs:{fluid:""}},[e("v-snackbar",{attrs:{bottom:"",left:""},model:{value:t.errorAlert,callback:function(a){t.errorAlert=a},expression:"errorAlert"}},[t._v("\n    "+t._s(t.errorMsg)+"\n    "),e("v-btn",{attrs:{color:"pink",text:""},on:{click:function(a){t.errorAlert=!1}}},[t._v("Close")])],1),e("v-row",{staticClass:"mb-5",attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",md:"12",lg:"12",sm:"12"}},[e("p",{staticClass:" mb-0",staticStyle:{"font-size":"150%",color:"#1a73e8"}},[t._v("Directory of past events")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"95%"}},[t._v("Events are listed in reverse chronological order by date.")]),e("p",{staticClass:" mt-0",staticStyle:{"font-size":"95%"}},[t._v("\n        Here are the recent 10 meetups. To know more about the past meetups\n        "),e("a",{staticStyle:{"text-decoration":"none",color:"#0277bd"},attrs:{href:t.communityData.CommunityMeetupLink,target:"_blank"}},[t._v("Click here")])]),t.showLoader?e("v-row",t._l(6,(function(t){return e("v-col",{key:t,staticClass:"pa-0",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("pastEventCardLoader")],1)})),1):e("v-row",t._l(t.eventsData,(function(a,s){return e("v-col",{key:s,staticClass:"pa-0",attrs:{md:"4",lg:"4",sm:"6",cols:"12"}},[e("v-slide-y-reverse-transition",[e("pastEventCard",{directives:[{name:"show",rawName:"v-show",value:t.showData,expression:"showData"}],attrs:{data:{data:a}}})],1)],1)})),1),t.notFoundUpcomingEventFlag?e("v-row",{staticClass:"pa-2"},[e("v-col",{staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",attrs:{md:"3",lg:"3",sm:"6",cols:"6"}},[e("p",{staticClass:" px-2 mb-0",staticStyle:{"font-size":"140%"}},[e("v-icon",[t._v("mdi-calendar-blank")]),e("br"),t._v("No Past Events!\n          ")],1)])],1):t._e()],1)],1)],1)},Y=[],q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{width:"700"},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[e("div",t._g({staticClass:"pa-3",class:1==t.$vuetify.theme.dark?"darkModeCard":"lightModeCard",staticStyle:{cursor:"pointer"}},s),[e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"90%"}},[t._v(t._s(t.item.date))]),e("p",{staticClass:" ma-0 mt-0",staticStyle:{"font-size":"120%"}},[t._v(t._s(t.item.name))]),e("v-btn",t._g({},s),[t._v("See More")])],1)]}}]),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-card",[e("v-card-title",{staticClass:"px-5 py-5 ",staticStyle:{"background-position":"right bottom"}},[t._v(t._s(t.item.name))]),e("v-card-text",{staticClass:"pa-5"},[e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Venue:")]),t._v("\n          "+t._s(t.item.venue)+"\n        ")]),e("p",{staticClass:" mt-1 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Date:")]),t._v("\n          "+t._s(t.item.date)+"\n        ")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Video Day 1:")]),t._v("\n          "+t._s(t.item.D1link)+"\n        ")]),e("p",{staticClass:" mt-0 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Video Day 2:")]),t._v("\n          "+t._s(t.item.D2link)+"\n        ")]),e("p",{staticClass:" mt-3 mb-0",staticStyle:{"font-size":"110%"}},[e("b",[t._v("Description:")]),t._v("\n          "+t._s(t.item.description)+"\n        ")])]),e("v-divider"),e("v-card-actions",[e("v-spacer"),e("v-btn",{attrs:{color:"primary",text:""},on:{click:function(a){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)},Q=[],W={name:"App",components:{},data:function(){return{dialog:!1}}},G=W,K=Object(d["a"])(G,q,Q,!1,null,null,null),X=K.exports;v()(K,{VBtn:x["a"],VCard:V["a"],VCardActions:E["a"],VCardText:E["c"],VCardTitle:E["d"],VDialog:D["a"],VDivider:z["a"],VSpacer:M["a"]});var Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"ma-1 pa-1 my-0 elevation-0",staticStyle:{"border-radius":"7px",border:"1px #ddd solid"},attrs:{flat:""}},[e("v-card-title",{staticClass:"mb-0"},[e("div",[e("p",{staticClass:" mb-2 animate-shimmer",staticStyle:{color:"#424242",width:"200px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}}),e("p",{staticClass:" mt-1 mb-0 animate-shimmer",staticStyle:{color:"#424242",width:"100px",height:"20px"}})])]),e("v-card-actions",{staticClass:"mt-0"},[e("v-spacer"),e("span",{staticClass:"animate-shimmer",staticStyle:{color:"#424242",width:"60px",height:"25px"}})],1)],1)},tt=[],at=(e("b38d"),{}),et=Object(d["a"])(at,Z,tt,!1,null,null,null),st=et.exports;v()(et,{VCard:V["a"],VCardActions:E["a"],VCardTitle:E["d"],VSpacer:M["a"]});var nt={name:"App",components:{pastEventCard:X,pastEventCardLoader:st},data:function(){return{communityData:o,eventsData:[],showData:!1,showLoader:!0,notFoundUpcomingEventFlag:!1,errorAlert:!1,errorMsg:""}},created:function(){var t=this;fetch("https://cors-anywhere.herokuapp.com/https://api.meetup.com/"+b["a"].MeetupURLName+"/events?desc=true&photo-host=public&page=8&status=past&sign=true").then((function(t){return t.json()})).then((function(a){a.length>0?(t.showLoader=!1,t.showData=!0,t.eventsData=a):(t.showLoader=!1,t.notFoundUpcomingEventFlag=!0)})).catch((function(a){t.showLoader=!1,t.errorMsg="Issue found with "+a,t.errorAlert=!0,t.notFoundUpcomingEventFlag=!0}))},methods:{getImgUrl:function(t){return t.length>0?e("8fc8")("./"+t):e("1d36")},getCharString:function(t){var a=t.split(" ");return a.length>1?(a[0].substring(0,1)+""+a[1].substring(0,1)).toUpperCase():a[0].substring(0,1).toUpperCase()}},filters:{summery:function(t,a){return t.substring(0,a)+".."},dateFilter:function(t){var a=new Date(t);return a.toLocaleString(["en-US"],{month:"short",day:"2-digit",year:"numeric"})}}},rt=nt,it=Object(d["a"])(rt,J,Y,!1,null,null,null),ot=it.exports;v()(it,{VBtn:x["a"],VCol:u["a"],VContainer:p["a"],VIcon:N["a"],VRow:h["a"],VSlideYReverseTransition:R["e"],VSnackbar:B["a"]});var ct={components:{eventsHeader:g,upcomingEvents:P,pastEvents:ot},created:function(){var t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd")}},lt=ct,dt=e("a75b"),mt=Object(d["a"])(lt,s,n,!1,null,null,null);a["default"]=mt.exports;v()(mt,{VCol:u["a"],VContainer:p["a"],VContent:dt["a"],VRow:h["a"]})},b38d:function(t,a,e){"use strict";var s=e("a272"),n=e.n(s);n.a}}]);