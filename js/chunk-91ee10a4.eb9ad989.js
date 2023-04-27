(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91ee10a4"],{"262f":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-6 pa-2"},[a("div",{staticClass:"google-font primary--text pa-0 ma-0",staticStyle:{"font-weight":"350","font-size":"2.0rem"}},[t._t("title")],2),a("div",{staticClass:"google-font mx-2 py-0",staticStyle:{"font-size":"1.0rem"}},[t._t("subtitle")],2)])},n=[],r=a("2877"),s={},i=Object(r["a"])(s,o,n,!1,null,null,null);e["a"]=i.exports},a2f9:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-0 ma-0",attrs:{fluid:""}},[a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[a("Header",[a("h3",{attrs:{slot:"title"},slot:"title"},[t._v("What's New")])])],1)],1),a("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[a("newsInfo")],1)],1)],1)},n=[],r=a("262f"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"ma-0",attrs:{fluid:""}},t._l(t.newsData.whatsnew,(function(e,o){return a("div",{key:o},[a("h2",[t._v(t._s(e.header))]),a("p",[a("ul",t._l(e.content,(function(e,o){return a("li",{key:o},[a("span",{domProps:{innerHTML:t._s(e)}})])})),0)])])})),0)},i=[],l=a("dc16"),c={data:function(){return{newsData:l}},components:{}},u=c,d=a("2877"),h=a("6544"),p=a.n(h),m=a("a523"),f=Object(d["a"])(u,s,i,!1,null,null,null),S=f.exports;p()(f,{VContainer:m["a"]});var v={components:{Header:r["a"],newsInfo:S}},g=v,y=a("62ad"),w=a("0fd9"),b=Object(d["a"])(g,o,n,!1,null,null,null);e["default"]=b.exports;p()(b,{VCol:y["a"],VContainer:m["a"],VRow:w["a"]})},dc16:function(t){t.exports=JSON.parse('{"whatsnew":{"new":{"header":"New","content":["ARS (Acceptable Risk Safeguards) 5 Support!  CMS SAF has updated relevant InSpec profiles (see “ARS 5” links on our <a href=\\"https://saf.cms.gov/#/validate\\">Validate page</a>) to allow teams to validate against CMS’ latest organizational-specific requirements!","Open-source tool support! The SAF CLI’s <a href=\\"https://github.com/mitre/saf#convert-hdf-to-other-formats\\">\\"convert\\"</a> tool continues to support import/export/interchange of security data for a variety of open-source and vendor security tools.","<a href=\\"https://github.com/mitre/saf#attest\\">Attestation</a> support! Sometimes requirements can’t be tested automatically by security tools and hence require manual review, whereby someone interviews people and/or examines a system to confirm (i.e., attest as to) whether the requirements have been satisfied. The SAF CLI’s “attest” tool lets you create and apply attestations for all your security data.","The MITRE Security Automation Framework (SAF©) is excited to join the OASIS Open Standards Body in publicly announcing the launch of the <a href=\\"https://www.oasis-open.org/2023/04/12/industry-leaders-unite-at-oasis-open-to-define-heimdall-data-format\\">OASIS Heimdall Data Format (OHDF) Technical Committee</a>.  Cisco, Intel, Sophos, and others have teamed with MITRE to advance the OHDF standard that supports cybersecurity product interoperability. \\"This standard, vendor-neutral data format will support cybersecurity product interoperability without having to create customized integrations\\" by \\"exchanging normalized data between cybersecurity tools.\\""]},"reminders":{"header":"Reminders","content":["<a href=\\"https://saf-cli.mitre.org/\\">SAF CLI</a> consolidates SAF automation goals into a convenient command-line tool, including commands to: generate InSpec security validation code, set and validate threshold checks within a pipeline, convert security tool test data to and from our standard Heimdall Data Format (HDF), and automate Heimdall setup and deployment.","AWS Security Hub Support! <a href=\\"https://github.com/mitre/saf#hdf-to-asff\\">SAF to Security Hub</a> and <a href=\\"https://github.com/mitre/saf#asff-to-hdf\\">Security Hub to SAF</a>","Splunk Support! <a href=\\"https://github.com/mitre/saf#hdf-to-splunk\\">SAF to Splunk</a> and <a href=\\"https://github.com/mitre/saf#splunk-to-hdf\\">Splunk to SAF</a>","Container Support! CMS SAF now supports InSpec validation of Kubernetes (K8S, K3S, EKS)! Also, web, application, and database profiles have been confirmed/updated to work against containerized instances.","AWS Lambda Support - SAF now offers an <a href=\\"https://github.com/mitre/serverless-inspec-lambda\\">AWS Lambda runner for InSpec</a> – convenient scans without having to set up a runner!","<a href=\\"https://heimdall-lite.cms.gov/\\">Heimdall-lite.cms.gov</a> is live! CMS now has its own version of Heimdall-lite, an in-browser tool for analyzing security data!","<a href=\\"https://github.com/mitre/heimdall2/releases\\">Heimdall Server</a> supports role-based access, multi-target CAAT export, and more! Follow releases <a href=\\"https://github.com/mitre/heimdall2/releases\\">here</a>.","Drag and drop data visualization - <a href=\\"https://heimdall-lite.cms.gov/\\">Heimdall Lite</a> and <a href=\\"https://github.com/mitre/heimdall2/releases\\">Server</a> can auto-convert native security data file formats just through drag and drop! These are the same formats supported by the <a href=\\"https://github.com/mitre/saf#convert\\">saf convert</a> tool.","Check back often to find the latest information on <a href=\\"https://saf.cms.gov/#/validate\\">InSpec profiles</a>, <a href=\'https://saf-cli.mitre.org/#convert/\'>SAF CLI format converters</a>, and <a href=\\"https://github.com/mitre/heimdall2/releases\\">Heimdall updates!</a>"]},"coming-soon":{"header":"Coming Soon","content":["Support for CMS ARS 5 Control Elements! Align your security data to these new, more granular security control definitions!","Amazon Linux 2 STIG InSpec Profile, with overlay profile tailored to CMS ARS 5 requirements!","Support for scanning containers running in AWS Fargate."]}}}')}}]);