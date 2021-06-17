(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65e5c558"],{"262ff":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:" primary--text pa-0 ma-0",staticStyle:{"font-weight":"350","font-size":"2.0rem"}},[e._t("title")],2),a("div",{staticClass:" ma-0 pa-0",staticStyle:{"font-size":"1.0rem"}},[e._t("subtitle")],2)])},i=[],o=a("2877"),s={},r=Object(o["a"])(s,n,i,!1,null,null,null);t["a"]=r.exports},"2a16":function(e,t,a){"use strict";var n=a("8044"),i=a.n(n);i.a},"36d6":function(e){e.exports=JSON.parse('{"items":[{"name":"Quick Start Steps","desc":"<h4 class=\\"mb-2\\">Step 1: What are you creating?</h4><p class=\\"ml-4\\">Which component types are being used to build your system? Consider types of Cloud Services, Virtualization Platforms, Operating Systems, Databases, Application Logic, and Web Servers.</p><h4 class=\\"mb-2\\"> Step 2: What can be hardened using CMS SAF?</h4><p class=\\"ml-4\\">See our <a href=\\"https://saf.cms.gov/#/implementation\\"> CMS SAF Implementation/Hardening page</a> for scripts to automatically harden the system components you identified in Step 1 every time you build or fix them.</p><h4 class=\\"mb-2\\">Step 3: What can be validated using CMS SAF?</h4><p class=\\"ml-4\\">See our <a href=\\"https://saf.cms.gov/#/validation\\" target=\\"_blank\\">CMS SAF Validation page</a> for scripts to automatically validate the security of your system components identified in Step 1 every time you build or fix them.</p><h4 class=\\"mb-2\\">Step 4: Decide how to integrate the hardening and validation runners into your specific workflow.</h4><p class=\\"ml-4\\">Depending on how you develop and operate your system, be it traditional administrative servers or DevOps orchestration pipelines, you can decide where it makes the most sense to stage the hardening (Kitchen, Ansible, Terraform, Puppet, etc) and validation (InSpec) runners for the scripts identified in Steps 2 and 3 (See graphic below on the many ways InSpec can be installed).<p><h4 class=\\"mb-2\\">Step 5: What Static and Dynamic Code Analysis Tools are you using?</h4><p class=\\"ml-4\\">See our <a href=\\"https://saf.cms.gov/#/faq#tools\\" target=\\"_blank\\">Heimdall_tools page</a> to find code to convert the output from common Static and Dynamic Code Analysis Tools into the CMS ISPG standard Heimdall Data Format (HDF). HDF security validation data can be visualized for analysis using Heimdall Lite or Heimdall Server (more on those in Step 6!).</p><h4 class=\\"mb-2\\">Step 6: Visualize and start fixing!</h4><p class=\\"ml-4\\">Use <a href=\\"https://heimdall-lite.mitre.org/\\" target=\\"_blank\\">Heimdall Lite</a> or your own <a href=\\"https://heimdall.mitre.org/\\" target=\\"_blank\\">Heimdall Server</a> to visualize and identify remediation steps in the output from InSpec (Step 3 Validation) and Heimdall_tools (Step 5). <a href=\\"https://heimdall-lite.mitre.org/\\" target=\\"_blank\\">Heimdall Lite</a> is a single-page browser-based solution, while <a href=\\"https://heimdall.mitre.org/\\" target=\\"_blank\\">Heimdall Server</a> provides your team with its own back-end database for storing security validation data and more! Both allow the user to ingest security validation data via a GUI, the API, Splunk, or S3!</p><h4 class=\\"mb-2\\">Step 7: Give us feedback!</h4><p class=\\"ml-4\\">If you don’t see a hardening script, validation script, or security tool converter you need here, click on the \\"Give Us Feedback\\" button in the header above and let us know your interest!</p><p class=\\"ml-4\\">Want more context? The steps above embrace the best practices cited below. We also provide more perspective below on InSpec, the core CMS SAF tool for automated security configuration validation.</p>"},{"name":"Mature DevSecOps Best Practices","desc":"DevSecOps is a software development framework that stresses automation and rapid user feedback to deliver quality, secure software quickly. A DevSecOps pipline is a collection of tools and practices that can automate as much of development as possible, from testing to change management to deployment.","values":[{"name":"DevSecOps Checklist","desc":"","download_link":"DevSecOps-Checklist-07022020.pdf"},{"name":"DevSecOps Best Practices Guide","desc":"","download_link":"CMS-SAF-DevSecOps_Best_Practices_Guide_Jan_2021.pdf"},{"name":"InSpec Profile Lifecycle SOP","desc":"","download_link":"CMS_InSpec_Profile_Lifecycle_SOP_v1.0_20190702.pdf"}]},{"name":"InSpec","desc":"InSpec is a free and open-source Chef framework for testing and auditing applications and infrastructure. InSpec is designed to integrate very easily into existing DevSecOps pipelines. CMS has partnered with the open-source community to create a growing number of baseline testing profiles to make it easy for developers to jump right in.","values":[{"name":"InSpec Documentation","desc":"InSpec\'s main webpage containing all written documentation and walkthroughs of the tool","link":"https://www.inspec.io/docs/"},{"name":"InSpec Profile Resources Reference","desc":"List of the existing systems InSpec available for the user to search through (known as InSpec \\"resources\\")","link":"https://www.inspec.io/docs/reference/resources/"},{"name":"Introduction to InSpec Video Courses","desc":"Video tutorials demonstrating and explaining how InSpec operates","link":"https://www.youtube.com/playlist?list=PLSZbtIlMt5rcbXOpMRucKzRMXR7HX7awy"},{"name":"InSpec Profile Developers Course","desc":"Reviews the basics on how to write and run tests","link":"https://mitre-inspec-developer.netlify.com/"},{"name":"InSpec Advanced Developer Course","desc":"In depth explaination of some of the higher functionalities provided by InSpec","link":"https://mitre-inspec-advanced-developer.netlify.com/"},{"name":"InSpec Tools and Utilization","desc":"Guide to installation of InSpec Tools","link":"https://mitre.github.io/inspec_tools/"}]},{"name":"How is InSpec deployed?","desc":"It is intended and recommended that InSpec be installed on a \\"runner\\" host (such as a DevOps orchestration server, an administrative management system, or a developer\'s workstation/laptop) and run against the target remotely. However, InSpec may be deployed in various ways depending on the needs of the user:","image":"inspec-runner.png"}]}')},"504b":function(e){e.exports=JSON.parse('{"pastTraining":{"introTraining":[{"name":"Introductory InSpec Profile Developer Training","date":"March 7-8th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"March 13-14th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"August 28-29th 2019","description":"","link":""},{"name":"Introductory InSpec Profile Developer Training","date":"November 13-14 2019","description":"","link":""}],"advTraining":[{"name":"Adavanced InSpec Profile Developer Training","date":"September 5-6th 2019","description":"","link":""}]},"upcomingTraining":{"introTraining":[{"name":"Upcoming Training Sessions will appear here as they are announced!","date":"TBD","description":"","link":""}]}}')},"508a":function(e,t,a){var n={"./cinc.png":"ff26","./heimdall.png":"7d9c","./inspec-runner.png":"9c84"};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="508a"},"6b6c":function(e,t,a){"use strict";var n=a("9858"),i=a.n(n);i.a},"7d9c":function(e,t,a){e.exports=a.p+"img/heimdall.70231d48.png"},8044:function(e,t,a){},9858:function(e,t,a){},"9c84":function(e,t,a){e.exports=a.p+"img/inspec-runner.4b9c1ac4.png"},e333:function(e,t,a){var n={"./cinc.png":"ff26","./heimdall.png":"7d9c","./inspec-runner.png":"9c84"};function i(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id="e333"},e575:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[a("Header",[a("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Getting Started")])])],1)],1),a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[a("gsInfo")],1)],1)],1)},i=[],o=a("262ff"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("div",{key:e.index,staticClass:"ms-2"},[n("h2",[e._v("Video Tutorials")]),n("v-row",{staticClass:"mx-0 my-8",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0",attrs:{md:"12",lg:"10",xs:"12"}},[n("v-row",{staticClass:"pa-2",attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{sm:"4",md:"4",lg:"4",xl:"4",xs:"12"}},[n("VideoCard",{attrs:{item:e.heimdall_video}})],1),e.$vuetify.breakpoint.mdAndDown?e._e():n("v-col",{attrs:{cols:"2"}}),n("v-col",{attrs:{sm:"4",md:"4",lg:"4",xl:"4",xs:"12"}},[n("VideoCard",{attrs:{item:e.cinc_video}})],1)],1)],1)],1)],1),e._l(e.resources.items,(function(t,i){return[n("div",{key:i,staticClass:"ms-2"},[n("h2",[e._v(e._s(t.name))]),n("span",{domProps:{innerHTML:e._s(t.desc)}}),e._l(t.values,(function(t){return n("p",{key:t.name,staticClass:"ma-2",attrs:{flat:"",dense:""}},[n("span",[t.link?n("a",{attrs:{href:t.link,target:"_blank"}},[e._v(e._s(t.name))]):e._e(),t.download_link?n("a",{attrs:{href:t.download_link,target:"_blank",download:""}},[e._v(e._s(t.name))]):e._e()])])})),t.image?n("v-img",{attrs:{src:a("508a")("./"+t.image)}}):e._e()],2)]}))],2)},r=[],l=a("d67c"),c=a("504b"),d=a("36d6"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var i=t.hover;return[n("v-card",{staticClass:"d-flex flex-column",class:i&&(e.item.link||e.item.router_link)?e.getHighlight():"",staticStyle:{width:"100%"},attrs:{outlined:"",to:e.item.router_link,href:e.item.link,target:e.item.link?"_blank":""}},[e.item.icon?n("v-icon",{staticClass:"mt-4",staticStyle:{"font-size":"300%"},attrs:{large:"",color:i&&(e.item.router_link||e.item.link)?"#1a73e8":""}},[e._v("mdi-"+e._s(e.item.icon))]):e._e(),e.item.image?n("v-img",{staticClass:"ma-2 mx-auto",attrs:{src:a("e333")("./"+e.item.image+".png"),"max-height":"100","max-width":"100"}}):e._e(),n("v-card-title",{staticClass:"google-font mt-2 title align-bottom justify-center break-word"},[n("v-icon",{staticClass:"mr-2"},[e._v("mdi-"+e._s(e.item.side_icon))]),n("span",{domProps:{innerHTML:e._s(e.make_readable(e.item.name))}})],1),n("v-spacer"),e.item.desc?n("v-card-text",{staticClass:"pa-2 body-1"},[e._v(e._s(e.item.desc))]):e._e()],1)]}}])})},p=[],u={data:function(){return{mouseOverCheck:""}},props:{item:Object},components:{},methods:{make_readable:function(e){return e.replace(/_/," ")},getHighlight:function(){return{lighten:this.$vuetify.theme.isDark,darken:!this.$vuetify.theme.isDark}}}},h=u,f=(a("6b6c"),a("2877")),g=a("6544"),v=a.n(g),y=a("b0af"),S=a("99d9"),b=a("ce87"),w=a("132d"),A=a("adda"),k=a("2fa4"),C=Object(f["a"])(h,m,p,!1,null,"47244bd2",null),D=C.exports;v()(C,{VCard:y["a"],VCardText:S["c"],VCardTitle:S["d"],VHover:b["a"],VIcon:w["a"],VImg:A["a"],VSpacer:k["a"]});var I={name:"App",data:function(){return{communityData:l,trainingData:c,resources:d,dialog:!1,dialogData:{name:"",date:"",link:""},heimdall_video:{name:"VIDEO: Heimdall Docker Installation",image:"heimdall",link:"https://youtu.be/irFLngy1PCA",height:"200px"},cinc_video:{name:"VIDEO: CINC-Auditor Installation",image:"cinc",link:"https://youtu.be/HSFWE3KEu7o",height:"200px"}}},components:{VideoCard:D},computed:{color_mode:function(){return this.$vuetify.theme.dark?"darkModeContainer":"lightModeContainer"},moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}},methods:{make_linkable:function(e){return e.replace(/\s+/g,"-").toLowerCase()},passItemData:function(e){this.dialogData=e}}},_=I,O=(a("2a16"),a("62ad")),N=a("a523"),x=a("0fd9"),M=Object(f["a"])(_,s,r,!1,null,"9d038604",null),T=M.exports;v()(M,{VCol:O["a"],VContainer:N["a"],VImg:A["a"],VRow:x["a"]});var E={components:{Header:o["a"],gsInfo:T},created:function(){var e=document.querySelector("meta[name=theme-color]");this.$vuetify.theme.dark?e.setAttribute("content","#212121"):e.setAttribute("content","#0277bd")}},H=E,z=Object(f["a"])(H,n,i,!1,null,null,null);t["default"]=z.exports;v()(z,{VCol:O["a"],VContainer:N["a"],VRow:x["a"]})},ff26:function(e,t){e.exports="data:image/png;base64,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"}}]);