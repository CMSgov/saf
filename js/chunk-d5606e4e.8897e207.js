(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5606e4e"],{"262f":function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"pt-6 pa-2"},[t("div",{staticClass:"google-font primary--text pa-0 ma-0",staticStyle:{"font-weight":"350","font-size":"2.0rem"}},[e._t("title")],2),t("div",{staticClass:"google-font mx-2 py-0",staticStyle:{"font-size":"1.0rem"}},[e._t("subtitle")],2)])},r=[],o=t("2877"),i={},n=Object(o["a"])(i,a,r,!1,null,null,null);s["a"]=n.exports},"73c6":function(e,s,t){"use strict";t("7497")},7497:function(e,s,t){},d4f4:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",{staticClass:"pa-0 pb-4 ma-0",attrs:{fluid:""}},[t("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[t("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",lg:"10"}},[t("Header",[t("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Validate")]),t("div",{staticClass:"ma-0",attrs:{slot:"subtitle"},slot:"subtitle"},[t("p",{staticClass:"mx-0"},[e._v(" These open-source community-based InSpec profiles validate the security of common system components. CMS ISPG is helping to provide stewardship over these profiles, hosted here and at other community vendor sites. If you are interested in new profiles, please contact us at "),t("a",{attrs:{href:e.mail_link}},[e._v(e._s(e.db.communityEmail))]),e._v(". If you are interested in developing and contributing your own profiles, please see our links to Training material. ")]),t("p",{staticClass:"mx-0"},[e._v(" All assessment tests under SAF are associated with CMS ARS (NIST SP 800-53) Security Controls. ")]),t("p",{staticClass:"mx-0"},[e._v(" For CMS Cloud users, AWS Foundations and Infrastructure scans are also provided via AWS SecurityHub. See the "),t("a",{attrs:{href:"https://cloud.cms.gov",target:"_blank"}},[e._v("CMS Cloud website")]),e._v(" for details. ")])])])],1)],1),t("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[t("v-col",{attrs:{cols:"12",lg:"10"}},[t("profileTemplateCompact",{attrs:{profiles:e.profiles.profiles}})],1)],1)],1)},r=[],o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-content",{staticClass:"pa-0"},e._l(e.categoryOrder,(function(s){return t("v-card",{key:s,staticClass:"ma-2",attrs:{outlined:""}},[t("v-row",{class:e.$vuetify.theme.dark?"black":"white",attrs:{align:"center",dense:"","no-gutters":"",justify:"center"}},[t("v-col",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{cols:"2"}},[t("h2",{staticClass:"font-weight-bold ma-2 break-word justify-center text-center ",class:{"subtitle-2":e.$vuetify.breakpoint.mdAndDown,black:e.$vuetify.theme.dark,white:!e.$vuetify.theme.dark}},[e._v(" "+e._s(s)+" ")])]),t("v-col",{attrs:{cols:e.$vuetify.breakpoint.xs?"12":"10"}},[t("v-container",{staticClass:"pa-0"},[t("v-row",{attrs:{dense:"","no-gutters":"",align:"center",justify:"center"}},[t("v-col",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],attrs:{cols:"auto"}},[t("h2",{staticClass:"font-weight-bold text-h6 ma-2 break-word justify-center text-center "},[e._v(" "+e._s(s)+" ")])])],1),e._l(e.getByCategory(e.profiles,[s]),(function(s,a){return t("v-card",{key:a,staticClass:"d-flex px-1 ma-2",class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-5",attrs:{outlined:""}},[e.$vuetify.breakpoint.mdAndUp?t("rowView",{attrs:{entry:s}}):t("colView",{attrs:{entry:s}})],1)}))],2)],1)],1)],1)})),1)},i=[],n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",{staticClass:"pa-0 my-4",attrs:{fluid:""}},[t("v-row",{staticClass:"pa-1",attrs:{dense:"",align:"center"}},[t("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[e.entry.links.baseline?t("v-row",{attrs:{justify:"start"}},[t("profileChip",{staticClass:"pa-0 ml-3",attrs:{entry:e.entry.links.baseline}})],1):t("div",{staticClass:"body-1 break-word pa-0"},[e._v(e._s(e.entry.name))])],1),e.entry.links.ars5||e.entry.links.low||e.entry.links.mod||e.entry.links.high?t("v-col",{staticClass:"pa-0",attrs:{cols:"8"}},[t("v-container",{staticClass:"pa-0 pl-2 mt-1",attrs:{fluid:""}},[t("v-row",{attrs:{align:"center"}},e._l(["ars5","low","mod","high"],(function(s,a){return t("v-col",{key:a,staticClass:"pa-0"},[t("v-row",{attrs:{justify:"center"}},[e.entry.links[s]?t("profileChip",{attrs:{entry:e.entry.links[s]}}):e._e()],1)],1)})),1)],1)],1):e._e()],1)],1)},l=[],c=function(){var e=this,s=e.$createElement,a=e._self._c||s;return e.entry?a("v-card",{staticClass:" break-word text-none pa-0 ma-0",attrs:{href:e.entry.link,target:"_blank",outlined:!this.$vuetify.theme.dark}},[a("v-list",{staticClass:"pa-0",attrs:{color:this.$vuetify.theme.dark?"grey darken-3":""}},[a("v-list-item",{staticClass:"ma-0 pa-0 pr-2",attrs:{dense:""}},[a("v-list-item-avatar",{staticClass:"ma-0 pa-0",attrs:{width:"20px",height:"20px"}},[a("v-img",{directives:[{name:"show",rawName:"v-show",value:e.entry.svg,expression:"entry.svg"}],staticStyle:{"max-width":"20px","max-height":"20px"},attrs:{src:t("57ae")("./"+e.entry.svg+".svg")}})],1),e._v(" "+e._s(e.entry.name)+" ")],1)],1)],1):e._e()},m=[],g={props:{entry:Object}},b=g,u=(t("fca2"),t("2877")),v=t("6544"),h=t.n(v),p=t("b0af"),d=t("adda"),S=t("8860"),k=t("da13"),y=t("8270"),C=Object(u["a"])(b,c,m,!1,null,"23b89b94",null),f=C.exports;h()(C,{VCard:p["a"],VImg:d["a"],VList:S["a"],VListItem:k["a"],VListItemAvatar:y["a"]});var w={components:{profileChip:f},props:{entry:Object}},M=w,A=t("62ad"),R=t("a523"),I=t("0fd9"),V=Object(u["a"])(M,n,l,!1,null,null,null),_=V.exports;h()(V,{VCol:A["a"],VContainer:R["a"],VRow:I["a"]});var G=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("v-container",{staticClass:"pa-0 ma-5",attrs:{fluid:""}},[t("v-row",{attrs:{justify:"center"}},[t("v-col",{staticClass:"pa-0 ma-2",attrs:{cols:"12"}},[t("v-row",{attrs:{justify:"center"}},[e.entry.links.baseline?t("profileChip",{attrs:{entry:e.entry.links.baseline}}):t("div",{staticClass:"ma-1 body-2 break-word"},[e._v(" "+e._s(e.entry.name)+" ")])],1),t("v-row",{attrs:{justify:"center"}},e._l(["ars5","low","mod","high"],(function(s,a){return t("div",{key:a},[e.entry.links[s]?t("profileChip",{staticClass:"ma-1",attrs:{entry:e.entry.links[s]}}):e._e()],1)})),0)],1)],1)],1)},x=[],T={components:{profileChip:f},props:{entry:Object},methods:{getByFips:function(e,s){var t,a;for(t=0;t<e.links.length;t++)for(a=0;a<e.links[t].fips.length;a++)if(e.links[t].fips[a]==s)return e.links[t]}}},P=T,O=Object(u["a"])(P,G,x,!1,null,null,null),D=O.exports;h()(O,{VCol:A["a"],VContainer:R["a"],VRow:I["a"]});var W={props:{profiles:Array},data:function(){return{fab:!1,categoryOrder:["Manual Controls","Cloud Service Providers","Virtual Platforms","Operating Systems","Databases","Application Logic","Web Servers"]}},components:{rowView:_,colView:D},methods:{make_linkable:function(e){return e.replace(/\s+/g,"-").toLowerCase()},onScroll:function(e){if("undefined"!==typeof window){var s=window.pageYOffset||e.target.scrollTop||0;this.fab=s>200}},toTop:function(){this.$vuetify.goTo(0)},getByCategory:function(e,s){var t,a,r=[];for(t=0;t<e.length;t++)for(a=0;a<e[t].category.length;a++)e[t].category[a]==s&&r.push(e[t]);return r.sort((function(e,s){return e["name"]>s["name"]?1:e["name"]<s["name"]?-1:0}))}},computed:{moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}}},j=W,E=(t("73c6"),t("a75b")),L=Object(u["a"])(j,o,i,!1,null,"3f3c5bdd",null),H=L.exports;h()(L,{VCard:p["a"],VCol:A["a"],VContainer:R["a"],VContent:E["a"],VRow:I["a"]});var $=t("262f"),q=t("f784"),B=t("d67c"),Q=t("2f62");function N(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);s&&(a=a.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,a)}return t}function K(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?N(Object(t),!0).forEach((function(s){F(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function F(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}var J={components:{profileTemplateCompact:H,Header:$["a"]},data:function(){return{profiles:q,db:B,isCompact:!1}},computed:{mail_link:function(){return"mailto:"+B.communityEmail},showCompact:function(){return this.$store.state.isCompact}},methods:K({},Object(Q["d"])(["toggleCompact"]))},X=J,U=Object(u["a"])(X,a,r,!1,null,null,null);s["default"]=U.exports;h()(U,{VCol:A["a"],VContainer:R["a"],VRow:I["a"]})},ec31:function(e,s,t){},f784:function(e){e.exports=JSON.parse('{"profiles":[{"name":"AWS S3","category":["Cloud Service Providers"],"links":{"baseline":{"name":"AWS S3","link":"https://github.com/mitre/aws-s3-baseline","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS MSQL Server Instance 2014 STIG","category":["Databases"],"links":{"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-microsoft-sql-server-2014-instance-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS MSQL Server 2017 CIS","category":["Databases"],"links":{"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-aws-rds-microsoft-sql-server-2017-cis-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-microsoft-sql-server-2017-cis-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-microsoft-sql-server-2017-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"MSQL Server 2017 CIS","category":["Databases"],"links":{"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-microsoft-sql-server-2017-cis-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-microsoft-sql-server-2017-cis-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-sql-server-2017-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS PostgreSQL 10-13 STIG","category":["Databases"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-aws-rds-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"},"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-aws-rds-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"PostgreSQL 10-13 STIG","category":["Databases"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"},"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-crunchy-data-postgresql-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Oracle Database 19c CIS","category":["Databases"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-oracle-19c-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS Oracle Database 19c CIS","category":["Databases"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-aws-rds-oracle-19c-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS Oracle Database 12c STIG","category":["Databases"],"links":{"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Ubuntu 16.04 STIG","category":["Operating Systems"],"links":{"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"IIS 8.5 Server STIG","category":["Web Servers"],"links":{"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-iis-8.5-server-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"IIS 8.5 Site STIG","category":["Web Servers"],"links":{"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-iis-8.5-site-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Apache 2.4 Server STIG","category":["Web Servers"],"links":{"baseline":{"name":"Apache 2.4 Server STIG","link":"https://github.com/CMSgov/httpd_2.4x_server","svg":"inspec-blue-black-border"}}},{"name":"Apache 2.4 Site STIG","category":["Web Servers"],"links":{"baseline":{"name":"Apache 2.4 Site STIG","link":"https://github.com/CMSgov/httpd_2.4x_site","svg":"inspec-blue-black-border"}}},{"name":"Apache Tomcat 9 STIG","category":["Web Servers"],"links":{"baseline":{"name":"Apache Tomcat 9 STIG","link":"https://github.com/CMSgov/tomcat_9.x","svg":"inspec-blue-black-border"}}},{"name":"MSQL Server 2014 Database STIG","category":["Databases"],"links":{"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-sql-server-2014-database-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"MSQL Server 2014 Instance STIG","category":["Databases"],"links":{"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-sql-server-2014-instance-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Windows 2012 STIG","category":["Operating Systems"],"links":{"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-2012r2-member-server-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Windows 2016 STIG","category":["Operating Systems"],"links":{"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"RSA Archer 6 SCG","category":["Application Logic"],"links":{"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-rsa-archer-6-security-configuration-guide-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS Foundations CIS","category":["Cloud Service Providers"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-foundations-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS PostgreSQL 9.x STIG","category":["Databases"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-crunchy-data-postgresql-9-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS Infrastructure CIS","category":["Cloud Service Providers"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-infrastructure-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS Oracle MySQL EE 5.7 CIS","category":["Databases"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-oracle-mysql-ee-5.7-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"PostgreSQL 9.x STIG","category":["Databases"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-crunchy-data-postgresql-9-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"MongoDB STIG","category":["Databases"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-mongodb-enterprise-advanced-3-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"NGINX","category":["Web Servers"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-nginx-overlay","svg":"inspec-blue-black-border"}}},{"name":"Oracle Database 12c STIG","category":["Databases"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Java Runtime Environment 7 STIG","category":["Application Logic"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-java-runtime-environment-7-unix-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Java Runtime Environment 8 STIG","category":["Application Logic"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-java-runtime-environment-8-unix-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Oracle MySQL EE 5.7 CIS","category":["Databases"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-mysql-ee-5.7-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"Red Hat 6 STIG","category":["Operating Systems"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-6-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Red Hat 7 STIG","category":["Operating Systems"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-7-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Red Hat 8 STIG","category":["Operating Systems"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMSgov/cms-ars-5.0-red-hat-enterprise-linux-8-stig-overlay","svg":"inspec-blue-black-border"},"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-red-hat-enterprise-linux-8-stig-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-8-stig-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-red-hat-enterprise-linux-8-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"Red Hat Jboss 6.3 STIG","category":["Application Logic"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-jboss-eap-6.3-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS Linux 2 CIS","category":["Operating Systems"],"links":{"baseline":{"name":"AWS Linux 2 CIS","link":"https://github.com/CMSgov/CMS-AWS-West-AWS-Linux2-CIS-Benchmark","svg":"inspec-blue-black-border"}}},{"name":"Red Hat CVE Vulnerability Scan","category":["Operating Systems"],"links":{"baseline":{"name":"Red Hat CVE Vulnerability Scan","link":"https://github.com/CMSgov/rhel_cve_vulnerability_scan_baseline","svg":"inspec-blue-black-border"}}},{"name":"Windows 2019 STIG","category":["Operating Systems"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMSgov/cms-ars-5.0-microsoft-windows-server-2019-stig-overlay","svg":"inspec-blue-black-border"},"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-microsoft-windows-server-2019-stig-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-microsoft-windows-server-2019-stig-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-server-2019-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"ARS 3.1 Manual Controls","category":["Manual Controls"],"links":{"baseline":{"name":"ARS 3.1 Manual Controls Baseline","link":"https://github.com/CMSgov/cms-ars-3.1-manual-controls-baseline","svg":"inspec-blue-black-border"},"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-manual-controls-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-manual-controls-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-manual-controls-overlay","svg":"inspec-blue-black-border"}}},{"name":"Docker CE CIS","category":["Virtual Platforms"],"links":{"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-docker-ce-cis-overlay","svg":"inspec-blue-black-border"}}},{"name":"VMWare ESXI 6.7 STIG","category":["Virtual Platforms"],"links":{"baseline":{"name":"VMWare ESXI 6.7 STIG Baseline","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-esxi-6.7-stig-baseline","svg":"inspec-blue-black-border"}}},{"name":"VMWare vSphere 6.7 STIG","category":["Virtual Platforms"],"links":{"baseline":{"name":"VMWare vSphere 6.7 STIG Baseline","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-vm-6.7-stig-baseline","svg":"inspec-blue-black-border"}}},{"name":"VMWare vSphere VM 6.5 STIG","category":["Virtual Platforms"],"links":{"baseline":{"name":"VMWare vSphere VM 6.5 STIG Baseline","link":"https://github.com/kclinden/vmware-vsphere-65-virtual-machine-stig-baseline","svg":"inspec-blue-black-border"}}},{"name":"VMWare ESXI 6.5 STIG","category":["Virtual Platforms"],"links":{"baseline":{"name":"VMWare ESXI 6.5 STIG Baseline","link":"https://github.com/kclinden/vmware-esxi-6.5-stig-baseline","svg":"inspec-blue-black-border"}}},{"name":"VMWare VCSA 6.7 STIG","category":["Virtual Platforms"],"links":{"baseline":{"name":"VMWare VCSA 6.7 STIG Baseline","link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vcsa/inspec/vmware-vcsa-6.7-stig-baseline","svg":"inspec-blue-black-border"}}},{"name":"Kubernetes CIS","category":["Virtual Platforms"],"links":{"baseline":{"name":"Kubernetes CIS","link":"https://github.com/mitre/kubernetes-cis-baseline","svg":"inspec-blue-black-border"}}},{"name":"Google Cloud Platform PCI-DSS 3.2.1","category":["Cloud Service Providers"],"links":{"baseline":{"name":"Google Cloud Platform PCI-DSS 3.2.1","link":"https://github.com/GoogleCloudPlatform/inspec-gcp-pci-profile","svg":"inspec-blue-black-border"}}},{"name":"Google Cloud Platform CIS","category":["Cloud Service Providers"],"links":{"baseline":{"name":"Google Cloud Platform CIS","link":"https://github.com/GoogleCloudPlatform/inspec-gcp-cis-benchmark","svg":"inspec-blue-black-border"}}},{"name":"Google Kubernetes Engine CIS","category":["Virtual Platforms"],"links":{"baseline":{"name":"Google Kubernetes Engine CIS","link":"https://github.com/GoogleCloudPlatform/inspec-gke-cis-benchmark","svg":"inspec-blue-black-border"}}},{"name":"EKS Cluster CIS","category":["Virtual Platforms"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-eks-cis-cluster-overlay","svg":"inspec-blue-black-border"},"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-eks-cis-cluster-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-eks-cis-cluster-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-eks-cis-cluster-overlay","svg":"inspec-blue-black-border"}}},{"name":"EKS Node CIS","category":["Virtual Platforms"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-eks-cis-node-overlay","svg":"inspec-blue-black-border"},"low":{"name":"ARS 3.1 Low","link":"https://github.com/CMSgov/cms-ars-3.1-low-eks-cis-node-overlay","svg":"inspec-blue-black-border"},"mod":{"name":"ARS 3.1 Moderate","link":"https://github.com/CMSgov/cms-ars-3.1-moderate-eks-cis-node-overlay","svg":"inspec-blue-black-border"},"high":{"name":"ARS 3.1 High","link":"https://github.com/CMSgov/cms-ars-3.1-high-eks-cis-node-overlay","svg":"inspec-blue-black-border"}}},{"name":"K8S Cluster STIG","category":["Virtual Platforms"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-k8s-cluster-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"K8S Node STIG","category":["Virtual Platforms"],"links":{"ars5":{"name":"ARS 5.0","link":"https://github.com/CMS-Enterprise/cms-ars-5.0-k8s-node-stig-overlay","svg":"inspec-blue-black-border"}}},{"name":"AWS RDS Best Practices Benchmark","links":{"baseline":{"name":"AWS RDS Best Practices Benchmark","link":"https://github.com/Staggerlee011/rds-bp-benchmark","svg":"inspec-blue-back-border"}},"category":["Cloud Service Providers"],"gitHash":"0"},{"name":"AWS S3 Best Practices Benchmark","links":{"baseline":{"name":"AWS S3 Best Practices Benchmark","link":"https://github.com/Staggerlee011/s3-bp-benchmark","svg":"inspec-blue-back-border"}},"category":["Cloud Service Providers"],"gitHash":"0"}]}')},fca2:function(e,s,t){"use strict";t("ec31")}}]);