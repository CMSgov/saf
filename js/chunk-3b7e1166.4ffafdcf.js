(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7e1166"],{"262f":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-6 pa-2"},[a("div",{staticClass:"google-font primary--text pa-0 ma-0",staticStyle:{"font-weight":"350","font-size":"2.0rem"}},[t._t("title")],2),a("div",{staticClass:"google-font mx-2 py-0",staticStyle:{"font-size":"1.0rem"}},[t._t("subtitle")],2)])},n=[],o=a("2877"),i={},r=Object(o["a"])(i,s,n,!1,null,null,null);e["a"]=r.exports},"6f90":function(t){t.exports=JSON.parse('{"CMSTeams":[{"name":"ACT","scope":"Uses security testing data and Heimdall from this framework to support Assessments"},{"name":"IUSG","scope":"Incorporates tools from this framework into their CMS DevSecOps guidance"},{"name":"BCDA","scope":""},{"name":"CFACTS","scope":""},{"name":"T-MSIS","scope":""},{"name":"IDM","scope":""},{"name":"MACFin","scope":""},{"name":"Lewin Group","scope":""},{"name":"Maximus","scope":""},{"name":"MACPro","scope":""},{"name":"MARx","scope":""},{"name":"DRFP","scope":""},{"name":"REGTAP","scope":""},{"name":"MPSM","scope":""},{"name":"DBidS","scope":""},{"name":"MLMS","scope":""},{"name":"RAD","scope":""},{"name":"AREMAC","scope":""},{"name":"ACO-OS","scope":""}]}')},f2fb:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[a("Header",[a("h3",{attrs:{slot:"title"},slot:"title"},[t._v("CMS Teams Using SAF")])])],1)],1),a("v-row",{staticClass:"py-0 my-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"py-3",attrs:{md:"12",lg:"10",xs:"12"}},[a("div",{staticClass:"ml-2"},[a("p",{staticStyle:{"font-size":"1.5rem"}},[t._v("\n          CMS SAF techniques and tools have seen wide adoption by CMS teams.\n          Practitioners include:\n        ")]),a("CMSTeamsInfo")],1)])],1)],1)},n=[],o=a("262f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"py-",attrs:{fluid:""}},[a("v-row",{staticClass:"py-0 my-0"},[a("v-col",{attrs:{md:"10",lg:"9",xs:"12",xl:"6"}},[a("v-row",t._l(t.CMSTeams.CMSTeams,(function(e,s){return a("v-col",{key:s,attrs:{smAndUp:"4",xs:"12"}},[a("v-card",{staticClass:"ma-2 pa-4",attrs:{height:"150px",width:"350px",outlined:""}},[a("p",{staticStyle:{"font-size":"3rem"},attrs:{align:"center"}},[t._v("\n              "+t._s(e.name)+"\n            ")])])],1)})),1)],1)],1)],1)},r=[],c=a("d67c"),l=a("6f90"),m=a("07f2"),p={name:"App",data:function(){return{communityData:c,CMSTeams:l,wwdCard:m["a"],dialog:!1,dialogData:{name:"",date:"",link:""}}},computed:{color_mode:function(){return this.$vuetify.theme.dark?"darkModeContainer":"lightModeContainer"},moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}},methods:{make_linkable:function(t){return t.replace(/\s+/g,"-").toLowerCase()},passItemData:function(t){this.dialogData=t}}},u=p,d=a("2877"),f=a("6544"),C=a.n(f),v=a("b0af"),S=a("62ad"),h=a("a523"),y=a("0fd9"),M=Object(d["a"])(u,i,r,!1,null,null,null),w=M.exports;C()(M,{VCard:v["a"],VCol:S["a"],VContainer:h["a"],VRow:y["a"]});var g={components:{Header:o["a"],CMSTeamsInfo:w},created:function(){var t=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?t.setAttribute("content","#212121"):t.setAttribute("content","#0277bd")}},A=g,x=Object(d["a"])(A,s,n,!1,null,null,null);e["default"]=x.exports;C()(x,{VCol:S["a"],VContainer:h["a"],VRow:y["a"]})}}]);