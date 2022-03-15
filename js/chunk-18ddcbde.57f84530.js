(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18ddcbde"],{"262f":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pt-6 pa-2"},[s("div",{staticClass:"google-font primary--text pa-0 ma-0",staticStyle:{"font-weight":"350","font-size":"2.0rem"}},[e._t("title")],2),s("div",{staticClass:"google-font mx-2 py-0",staticStyle:{"font-size":"1.0rem"}},[e._t("subtitle")],2)])},r=[],i=s("2877"),o={},n=Object(i["a"])(o,a,r,!1,null,null,null);t["a"]=n.exports},"70c5":function(e,t,s){},"73c6":function(e,t,s){"use strict";s("9fd7")},"9fd7":function(e,t,s){},d4f4:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"pa-0 pb-4 ma-0",attrs:{fluid:""}},[s("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[s("v-col",{staticClass:"pa-0 ma-0",attrs:{cols:"12",lg:"10"}},[s("Header",[s("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Validate")]),s("div",{staticClass:"ma-0",attrs:{slot:"subtitle"},slot:"subtitle"},[s("p",{staticClass:"mx-0"},[e._v("\n          These open-source community-based InSpec profiles validate the\n          security of common system components. CMS ISPG is helping to provide\n          stewardship over these profiles, hosted here and at other community\n          vendor sites. If you are interested in new profiles, please contact\n          us at\n          "),s("a",{attrs:{href:e.mail_link}},[e._v(e._s(e.db.communityEmail))]),e._v(". If you are interested in developing and contributing your own\n          profiles, please see our links to Training material.\n        ")]),s("p",{staticClass:"mx-0"},[e._v("\n          All assessment tests under SAF are associated with CMS ARS 3.1 (NIST\n          SP 800-53) Security Controls. Explore these associations in this\n          "),s("router-link",{attrs:{to:"control-table"}},[e._v("Control Assessment Range table")]),e._v("!\n        ")],1),s("p",{staticClass:"mx-0"},[e._v("\n          For CMS Cloud users, AWS Foundations and Infrastructure scans are\n          also provided via AWS SecurityHub. See the\n          "),s("a",{attrs:{href:"https://cloud.cms.gov",target:"_blank"}},[e._v("CMS Cloud website")]),e._v("\n          for details.\n        ")])])])],1)],1),s("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[s("v-col",{attrs:{cols:"12",lg:"10"}},[s("profileTemplateCompact",{attrs:{profiles:e.profiles.profiles}})],1)],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-content",{staticClass:"pa-0"},e._l(e.categoryOrder,(function(t){return s("v-card",{key:t,staticClass:"ma-2",attrs:{outlined:""}},[s("v-row",{class:e.$vuetify.theme.dark?"black":"white",attrs:{align:"center",dense:"","no-gutters":"",justify:"center"}},[s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],attrs:{cols:"2"}},[s("h2",{staticClass:"font-weight-bold ma-2 break-word justify-center text-center ",class:{"subtitle-2":e.$vuetify.breakpoint.mdAndDown,black:e.$vuetify.theme.dark,white:!e.$vuetify.theme.dark}},[e._v("\n          "+e._s(t)+"\n        ")])]),s("v-col",{attrs:{cols:e.$vuetify.breakpoint.xs?"12":"10"}},[s("v-container",{staticClass:"pa-0"},[s("v-row",{attrs:{dense:"","no-gutters":"",align:"center",justify:"center"}},[s("v-col",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],attrs:{cols:"auto"}},[s("h2",{staticClass:"font-weight-bold text-h6 ma-2 break-word justify-center text-center "},[e._v("\n                "+e._s(t)+"\n              ")])])],1),e._l(e.getByCategory(e.profiles,[t]),(function(t,a){return s("v-card",{key:a,staticClass:"d-flex px-1 ma-2",class:e.$vuetify.theme.dark?"grey darken-4":"grey lighten-5",attrs:{outlined:""}},[e.$vuetify.breakpoint.mdAndUp?s("rowView",{attrs:{entry:t}}):s("colView",{attrs:{entry:t}})],1)}))],2)],1)],1)],1)})),1)},o=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"pa-0 my-4",attrs:{fluid:""}},[s("v-row",{staticClass:"pa-1",attrs:{dense:"",align:"center"}},[s("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[e.getByFips(e.entry,"none")?s("v-row",{attrs:{justify:"start"}},[s("profileChip",{staticClass:"pa-0 ml-3",attrs:{entry:e.getByFips(e.entry,"none")}})],1):s("div",{staticClass:"body-1 break-word pa-0"},[e._v(e._s(e.entry.name))])],1),e.getByFips(e.entry,"low")||e.getByFips(e.entry,"mod")||e.getByFips(e.entry,"high")?s("v-col",{staticClass:"pa-0",attrs:{cols:"8"}},[e.getByFips(e.entry,"low")||e.getByFips(e.entry,"mod")||e.getByFips(e.entry,"high")?s("v-container",{staticClass:"pa-0 pl-2 mt-1",attrs:{fluid:""}},[s("v-row",{attrs:{align:"center"}},[s("v-col",{staticClass:"pa-0"},[s("v-row",{attrs:{justify:"center"}},[s("profileChip",{attrs:{entry:e.getByFips(e.entry,"low")}})],1)],1),s("v-col",{staticClass:"pa-0"},[s("v-row",{attrs:{justify:"center"}},[s("profileChip",{attrs:{entry:e.getByFips(e.entry,"mod")}})],1)],1),s("v-col",{staticClass:"pa-0"},[s("v-row",{attrs:{justify:"center"}},[s("profileChip",{attrs:{entry:e.getByFips(e.entry,"high")}})],1)],1)],1)],1):e._e()],1):e._e()],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.entry?a("v-card",{staticClass:" break-word text-none pa-0 ma-0",attrs:{href:e.entry.link,target:"_blank",outlined:!this.$vuetify.theme.dark}},[a("v-list",{staticClass:"pa-0",attrs:{color:this.$vuetify.theme.dark?"grey darken-3":""}},[a("v-list-item",{staticClass:"ma-0 pa-0 pr-2",attrs:{dense:""}},[a("v-list-item-avatar",{staticClass:"ma-0 pa-0",attrs:{width:"20px",height:"20px"}},[a("v-img",{directives:[{name:"show",rawName:"v-show",value:e.entry.svg,expression:"entry.svg"}],staticStyle:{"max-width":"20px","max-height":"20px"},attrs:{src:s("57ae")("./"+e.entry.svg+".svg")}})],1),e._v("\n      "+e._s(e.entry.name)+"\n    ")],1)],1)],1):e._e()},m=[],g={props:{entry:Object}},p=g,b=(s("fca2"),s("2877")),u=s("6544"),v=s.n(u),d=s("b0af"),h=s("adda"),S=s("8860"),f=s("da13"),y=s("8270"),k=Object(b["a"])(p,c,m,!1,null,"23b89b94",null),C=k.exports;v()(k,{VCard:d["a"],VImg:h["a"],VList:S["a"],VListItem:f["a"],VListItemAvatar:y["a"]});var w={components:{profileChip:C},props:{entry:Object},methods:{getByFips:function(e,t){var s,a;for(s=0;s<e.links.length;s++)for(a=0;a<e.links[s].fips.length;a++)if(e.links[s].fips[a]==t)return e.links[s]}}},M=w,A=s("62ad"),R=s("a523"),I=s("0fd9"),V=Object(b["a"])(M,n,l,!1,null,null,null),_=V.exports;v()(V,{VCol:A["a"],VContainer:R["a"],VRow:I["a"]});var x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{staticClass:"pa-0 ma-5",attrs:{fluid:""}},[s("v-row",{attrs:{justify:"center"}},[s("v-col",{staticClass:"pa-0 ma-2",attrs:{cols:"12"}},[s("v-row",{attrs:{justify:"center"}},[e.getByFips(this.entry,"none")?s("profileChip",{attrs:{entry:e.getByFips(this.entry,"none")}}):s("div",{staticClass:"ma-1 body-2 break-word"},[e._v("\n          "+e._s(e.entry.name)+"\n        ")])],1),s("v-row",{attrs:{justify:"center"}},[e.getByFips(e.entry,"low")?s("profileChip",{staticClass:"ma-1",attrs:{entry:e.getByFips(e.entry,"low")}}):e._e(),e.getByFips(this.entry,"mod")?s("profileChip",{staticClass:"ma-1",attrs:{entry:e.getByFips(e.entry,"mod")}}):e._e(),e.getByFips(this.entry,"high")?s("profileChip",{staticClass:"ma-1",attrs:{entry:e.getByFips(e.entry,"high")}}):e._e()],1)],1)],1)],1)},O=[],P={components:{profileChip:C},props:{entry:Object},methods:{getByFips:function(e,t){var s,a;for(s=0;s<e.links.length;s++)for(a=0;a<e.links[s].fips.length;a++)if(e.links[s].fips[a]==t)return e.links[s]}}},G=P,B=Object(b["a"])(G,x,O,!1,null,null,null),j=B.exports;v()(B,{VCol:A["a"],VContainer:R["a"],VRow:I["a"]});var T={props:{profiles:Array},data:function(){return{fab:!1,categoryOrder:["Manual Controls","Cloud Service Providers","Virtual Platforms","Operating Systems","Databases","Application Logic","Web Servers"]}},components:{rowView:_,colView:j},methods:{make_linkable:function(e){return e.replace(/\s+/g,"-").toLowerCase()},onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>200}},toTop:function(){this.$vuetify.goTo(0)},getByCategory:function(e,t){var s,a,r=[];for(s=0;s<e.length;s++)for(a=0;a<e[s].category.length;a++)e[s].category[a]==t&&r.push(e[s]);return r.sort((function(e,t){return e["name"]>t["name"]?1:e["name"]<t["name"]?-1:0}))}},computed:{moveForBottomNavStyle:function(){return this.$vuetify.breakpoint.smAndDown?"z-index: 10; bottom: 60px":""}}},W=T,D=(s("73c6"),s("a75b")),E=Object(b["a"])(W,i,o,!1,null,"3f3c5bdd",null),L=E.exports;v()(E,{VCard:d["a"],VCol:A["a"],VContainer:R["a"],VContent:D["a"],VRow:I["a"]});var F=s("262f"),H=s("f784"),$=s("d67c"),N=s("2f62");function q(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function Q(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?q(Object(s),!0).forEach((function(t){J(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):q(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function J(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}var K={components:{profileTemplateCompact:L,Header:F["a"]},data:function(){return{profiles:H,db:$,isCompact:!1}},computed:{mail_link:function(){return"mailto:"+$.communityEmail},showCompact:function(){return this.$store.state.isCompact}},methods:Q({},Object(N["d"])(["toggleCompact"]))},X=K,U=Object(b["a"])(X,a,r,!1,null,null,null);t["default"]=U.exports;v()(U,{VCol:A["a"],VContainer:R["a"],VRow:I["a"]})},f784:function(e){e.exports=JSON.parse('{"profiles":[{"name":"AWS S3","category":["Cloud Service Providers"],"links":[{"name":"AWS S3","fips":["none"],"link":"https://github.com/mitre/aws-s3-baseline","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS MSQL Server Instance 2014 STIG","category":["Databases"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-microsoft-sql-server-2014-instance-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS Oracle Database 12c STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-aws-rds-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Ubuntu 16.04 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-canonical-ubuntu-16.04-lts-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"IIS 8.5 Server STIG","category":["Web Servers"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-iis-8.5-server-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"IIS 8.5 Site STIG","category":["Web Servers"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-iis-8.5-site-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"MSQL Server 2014 Database STIG","category":["Databases"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-sql-server-2014-database-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"MSQL Server 2014 Instance STIG","category":["Databases"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-sql-server-2014-instance-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Windows 2012 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-2012r2-member-server-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Windows 2016 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-server-2016-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"RSA Archer 6 SCG","category":["Application Logic"],"links":[{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-rsa-archer-6-security-configuration-guide-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS Foundations CIS","category":["Cloud Service Providers"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-foundations-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS PostgreSQL 9.x STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-crunchy-data-postgresql-9-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS Infrastructure CIS","category":["Cloud Service Providers"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-infrastructure-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS Oracle MySQL EE 5.7 CIS","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-aws-rds-oracle-mysql-ee-5.7-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"PostgreSQL 9.x STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-crunchy-data-postgresql-9-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"MongoDB STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-mongodb-enterprise-advanced-3-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"NGINX","category":["Web Servers"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-nginx-overlay","svg":"inspec-blue-black-border"}]},{"name":"Oracle Database 12c STIG","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-database-12c-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Java Runtime Environment 7 STIG","category":["Application Logic"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-java-runtime-environment-7-unix-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Java Runtime Environment 8 STIG","category":["Application Logic"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-java-runtime-environment-8-unix-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Oracle MySQL EE 5.7 CIS","category":["Databases"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-oracle-mysql-ee-5.7-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"Red Hat 6 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-6-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Red Hat 7 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-7-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Red Hat 8 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-red-hat-enterprise-linux-8-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-enterprise-linux-8-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-red-hat-enterprise-linux-8-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"Red Hat Jboss 6.3 STIG","category":["Application Logic"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-red-hat-jboss-eap-6.3-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS Linux 2 CIS","category":["Operating Systems"],"links":[{"name":"AWS Linux 2 CIS","fips":["none"],"link":"https://github.com/CMSgov/CMS-AWS-West-AWS-Linux2-CIS-Benchmark","svg":"inspec-blue-black-border"}]},{"name":"Red Hat CVE Vulnerability Scan","category":["Operating Systems"],"links":[{"name":"Red Hat CVE Vulnerability Scan","fips":["none"],"link":"https://github.com/CMSgov/rhel_cve_vulnerability_scan_baseline","svg":"inspec-blue-black-border"}]},{"name":"Windows 2019 STIG","category":["Operating Systems"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-microsoft-windows-server-2019-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-microsoft-windows-server-2019-stig-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-microsoft-windows-server-2019-stig-overlay","svg":"inspec-blue-black-border"}]},{"name":"ARS 3.1 Manual Controls","category":["Manual Controls"],"links":[{"name":"ARS 3.1 Manual Controls Baseline","fips":["none"],"link":"https://github.com/CMSgov/cms-ars-3.1-manual-controls-baseline","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-manual-controls-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-manual-controls-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-manual-controls-overlay","svg":"inspec-blue-black-border"}]},{"name":"Docker CE CIS","category":["Virtual Platforms"],"links":[{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-docker-ce-cis-overlay","svg":"inspec-blue-black-border"}]},{"name":"VMWare ESXI 6.7 STIG","category":["Virtual Platforms"],"links":[{"name":"VMWare ESXI 6.7 STIG Baseline","fips":["none"],"link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-esxi-6.7-stig-baseline","svg":"inspec-blue-black-border"}]},{"name":"VMWare vSphere 6.7 STIG","category":["Virtual Platforms"],"links":[{"name":"VMWare vSphere 6.7 STIG Baseline","fips":["none"],"link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vsphere/inspec/vmware-vm-6.7-stig-baseline","svg":"inspec-blue-black-border"}]},{"name":"VMWare vSphere VM 6.5 STIG","category":["Virtual Platforms"],"links":[{"name":"VMWare vSphere VM 6.5 STIG Baseline","fips":["none"],"link":"https://github.com/kclinden/vmware-vsphere-65-virtual-machine-stig-baseline","svg":"inspec-blue-black-border"}]},{"name":"VMWare ESXI 6.5 STIG","category":["Virtual Platforms"],"links":[{"name":"VMWare ESXI 6.5 STIG Baseline","fips":["none"],"link":"https://github.com/kclinden/vmware-esxi-6.5-stig-baseline","svg":"inspec-blue-black-border"}]},{"name":"VMWare VCSA 6.7 STIG","category":["Virtual Platforms"],"links":[{"name":"VMWare VCSA 6.7 STIG Baseline","fips":["none"],"link":"https://github.com/vmware/dod-compliance-and-automation/tree/master/vsphere/6.7/vcsa/inspec/vmware-vcsa-6.7-stig-baseline","svg":"inspec-blue-black-border"}]},{"name":"Kubernetes CIS","category":["Virtual Platforms"],"links":[{"name":"Kubernetes CIS","fips":["none"],"link":"https://github.com/mitre/kubernetes-cis-baseline","svg":"inspec-blue-black-border"}]},{"name":"Google Cloud Platform PCI-DSS 3.2.1","category":["Cloud Service Providers"],"links":[{"name":"Google Cloud Platform PCI-DSS 3.2.1","fips":["none"],"link":"https://github.com/GoogleCloudPlatform/inspec-gcp-pci-profile","svg":"inspec-blue-black-border"}]},{"name":"Google Cloud Platform CIS","category":["Cloud Service Providers"],"links":[{"name":"Google Cloud Platform CIS","fips":["none"],"link":"https://github.com/GoogleCloudPlatform/inspec-gcp-cis-benchmark","svg":"inspec-blue-black-border"}]},{"name":"Google Kubernetes Engine CIS","category":["Virtual Platforms"],"links":[{"name":"Google Kubernetes Engine CIS","fips":["none"],"link":"https://github.com/GoogleCloudPlatform/inspec-gke-cis-benchmark","svg":"inspec-blue-black-border"}]},{"name":"EKS Cluster CIS","category":["Virtual Platforms"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-eks-cis-cluster-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-eks-cis-cluster-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-eks-cis-cluster-overlay","svg":"inspec-blue-black-border"}]},{"name":"EKS Node CIS","category":["Virtual Platforms"],"links":[{"name":"ARS 3.1 Low","fips":["low"],"link":"https://github.com/CMSgov/cms-ars-3.1-low-eks-cis-node-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 Moderate","fips":["mod"],"link":"https://github.com/CMSgov/cms-ars-3.1-moderate-eks-cis-node-overlay","svg":"inspec-blue-black-border"},{"name":"ARS 3.1 High","fips":["high"],"link":"https://github.com/CMSgov/cms-ars-3.1-high-eks-cis-node-overlay","svg":"inspec-blue-black-border"}]},{"name":"AWS RDS Best Practices Benchmark","links":[{"name":"AWS RDS Best Practices Benchmark","link":"https://github.com/Staggerlee011/rds-bp-benchmark","fips":["none"],"svg":"inspec-blue-back-border"}],"category":["Cloud Service Providers"],"gitHash":"0"},{"name":"AWS S3 Best Practices Benchmark","links":[{"name":"AWS S3 Best Practices Benchmark","link":"https://github.com/Staggerlee011/s3-bp-benchmark","fips":["none"],"svg":"inspec-blue-back-border"}],"category":["Cloud Service Providers"],"gitHash":"0"}]}')},fca2:function(e,t,s){"use strict";s("70c5")}}]);