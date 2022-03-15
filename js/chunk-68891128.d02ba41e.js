(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68891128"],{"10c2":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"pa-0 pb-4 ma-0",attrs:{fluid:""}},[n("v-row",{staticClass:"mx-0",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[n("Header",[n("h3",{attrs:{slot:"title"},slot:"title"},[e._v("Frequently Asked Questions")]),n("p",{attrs:{slot:"subtitle"},slot:"subtitle"},[e._v("\n          Have a question you don't see covered here? Please contact\n          "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"mailto:"+e.communityData.communityEmail}},[e._v("\n            "+e._s(e.communityData.communityEmail)+"\n          ")]),e._v("\n          .\n        ")])])],1)],1),n("v-row",{staticClass:"mx-0 pb-5",attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"pa-0",attrs:{cols:"12",lg:"10"}},[n("faqInfo")],1)],1)],1)},a=[],i=n("262f"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",{attrs:{fluid:""}},[s("v-expansion-panels",{attrs:{focusable:"",hover:"",tile:"",multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.faqs,(function(t,a){return s("v-expansion-panel",{key:a},[s("v-expansion-panel-header",{staticClass:"google-font",staticStyle:{"font-weight":"300","font-size":"120%"}},[s("div",[s("v-btn",{staticClass:"mr-2",attrs:{icon:"",to:e.$route.path+"#"+t.tag},nativeOn:{click:function(e){e.stopPropagation()}}},[s("v-icon",[e._v("mdi-link")])],1),s("span",[e._v(e._s(a+1)+". "+e._s(t.question))])],1)]),s("v-expansion-panel-content",{staticClass:"my-2 pa-0"},[s("span",{domProps:{innerHTML:e._s(t.answer)}})]),t.links?s("v-expansion-panel-content",[s("ul",e._l(t.links,(function(t,n){return s("li",{key:n},[s("span",[t.router_link?s("router-link",{attrs:{to:t.router_link}},[e._v(e._s(t.name))]):s("a",{attrs:{href:t.download_link?t.download_link:t.link,target:"_blank",download:t.download_link}},[e._v(e._s(t.name))]),e._v("\n              "+e._s(t.desc)+"\n            ")],1),t.bullets?s("ul",e._l(t.bullets,(function(t){return s("li",{key:t},[e._v(e._s(t))])})),0):e._e()])})),0)]):e._e(),t.images?s("v-expansion-panel-content",{staticClass:"pa-0 ma-0"},[s("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[s("v-row",{staticClass:"ma-0 pa-0",attrs:{justify:"center"}},e._l(t.images,(function(e){return s("v-col",{key:e.path,staticClass:"d-flex ma-0 pa-0",attrs:{cols:"auto"}},[s("v-img",{staticClass:"ma-2",attrs:{src:n("508a")("./"+e.path),width:e.maxwidth?e.maxwidth:""}})],1)})),1)],1)],1):e._e()],1)})),1)],1)},r=[],l=n("3c6c"),c={data:function(){return{faqs:l.faqs}},computed:{panel:{get:function(){var e=this.$route.hash.slice(1);return[this.lookupOrder(e)]},set:function(e){return[e]}}},methods:{lookupOrder:function(e){var t;for(t=0;t<this.faqs.length;t++){var n=this.faqs[t];if(n.tag==e||String(t+1)==e)return t}}}},p=c,d=n("2877"),u=n("6544"),h=n.n(u),m=n("8336"),f=n("62ad"),v=n("a523"),g=n("4e82"),b=n("3206"),C=n("80d2"),w=n("58df"),y=Object(w["a"])(Object(g["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(b["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick(()=>this.$emit("change"))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(C["s"])(this))}}),k=n("0789"),x=n("9d65"),S=n("a9ad");const _=Object(w["a"])(x["a"],S["a"],Object(b["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var I=_.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick(()=>this.isActive=e)}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(k["a"],this.showLazyContent(()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(C["s"])(this))])]))}}),A=n("9d26"),O=n("5607");const E=Object(w["a"])(S["a"],Object(b["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var T=E.extend().extend({name:"v-expansion-panel-header",directives:{ripple:O["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=Object(C["s"])(this,"actions")||[this.$createElement(A["a"],this.expandIcon)];return this.$createElement(k["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[Object(C["s"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),H=(n("210b"),n("604c")),P=n("d9bd"),j=H["a"].extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...H["a"].options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&Object(P["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object(P["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const n=this.getValue(e,t),s=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(s)}}}),R=n("132d"),L=n("adda"),q=n("0fd9"),F=Object(d["a"])(p,o,r,!1,null,null,null),D=F.exports;h()(F,{VBtn:m["a"],VCol:f["a"],VContainer:v["a"],VExpansionPanel:y,VExpansionPanelContent:I,VExpansionPanelHeader:T,VExpansionPanels:j,VIcon:R["a"],VImg:L["a"],VRow:q["a"]});var N=n("d67c"),$={data:function(){return{communityData:N}},components:{Header:i["a"],faqInfo:D}},B=$,V=Object(d["a"])(B,s,a,!1,null,null,null);t["default"]=V.exports;h()(V,{VCol:f["a"],VContainer:v["a"],VRow:q["a"]})},"210b":function(e,t,n){},"262f":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-6 pa-2"},[n("div",{staticClass:"google-font primary--text pa-0 ma-0",staticStyle:{"font-weight":"350","font-size":"2.0rem"}},[e._t("title")],2),n("div",{staticClass:"google-font mx-2 py-0",staticStyle:{"font-size":"1.0rem"}},[e._t("subtitle")],2)])},a=[],i=n("2877"),o={},r=Object(i["a"])(o,s,a,!1,null,null,null);t["a"]=r.exports},"3c6c":function(e){e.exports=JSON.parse('{"faqs":[{"question":"How many ARS (NIST SP 800-53) security controls are assessed under the CMS SAF?","answer":"Currently, about 121 CMS ARS 3.1 (NIST SP 800-53) security controls are assessed under this framework. Note that assessment coverage varies based on the component type. For more information, explore this Control Assessment Range table!","links":[{"name":"Control Assessment Range table","router_link":"/control-table"}],"tag":"ars-range"},{"question":"How are ARS (NIST SP 800-53) Security Control associations included in the assessment tests used in this framework?","answer":"NIST SP 800-53 associations are included in all InSpec profiles and output from other security tools processed through Heimdall_tools. See our presentation to learn more!","links":[{"name":"InSpec, HDF, and NIST SP 800-53 Security Controls","download_link":"CMS_InSpec_Profiles_and_HDF_include_NIST_SP-800-53_associations_04232020.pdf"}],"tag":"security-control-associations"},{"question":"Which tools are supported by the CMS SAF?","answer":"","links":[{"name":"InSpec (and our InSpec profiles)","link":"https://saf.cms.gov/#/validation","desc":" for assessing configuration settings, vulnerabilities, and least functionality"},{"name":"SAF CLI","link":"https://sadf-cli.mitre.org","desc":"to serve as a utility to assist with end-to-end automation tasks, including generating metadata for new InSpec profiles, converting between security tool output formats, and deploying Heimdall"},{"name":"Heimdall Server","link":"https://heimdall.mitre.org","desc":" to visualize security data using a full viewer instance to store results, coordinate across the development team, and more"},{"name":"Heimdall Lite","link":"https://heimdall-lite.cms.gov","desc":" to visualize security data easily from anywhere, using a lightweight in-browser version of Heimdall for simple use cases"}],"tag":"tools"},{"question":"What happened to Heimdall_Tools and InSpec_Tools?","answer":"SAF CLI has combined the functionality of many of the older CMS SAF-supported tools, including Heimdall_Tools and InSpec_Tools, into a single utility. The new tool covers the same use cases as the old ones in a more convenient package. Similarly, our GitHub Actions for the older tools have been replaced by the SAF CLI GitHub Action.","links":[{"name":"SAF CLI","link":"http://saf-cli.mitre.org/"},{"name":"SAF CLI GitHub Action","link":"https://github.com/mitre/saf_action"}],"tag":"deprecated_tools"},{"question":"What is the ACT process?","answer":"The Adaptive Capabilities Testing program is the CMS risk-based security assessment for CMS systems. See the videos below to learn more about ACT.","links":[{"name":"A Brief Look at Adaptive Capabilities Testing","link":"https://youtu.be/VZl_zTwFgz4"},{"name":"Adaptive Capabilities Testing Overview","link":"https://youtu.be/mLgmDwyZjrs"}],"tag":"act"},{"question":"What is a recommended best practice for Code Review?","answer":"Teams should follow the code review recommendations given here:","links":[{"name":"SAF Code Review Recommendations","download_link":"SAF_Code_Review_Recommendations.pdf"}],"tag":"code-review"},{"question":"How is InSpec deployed?","answer":"It is intended and recommended that InSpec be installed on a \\"runner\\" host (such as a DevOps orchestration server, an administrative management system, or a developer\'s workstation/laptop) and run against the target remotely. However, InSpec may be deployed in various ways depending on the needs of the user:","images":[{"name":"Inspec Runners","path":"inspec-runner.png"}],"tag":"runners"},{"question":"How can I use InSpec tests in my CI/CD pipeline?","answer":"InSpec tests can be integrated as part of a test battery in your favorite CI platform. For example, you can add InSpec testing to your Travis CI file to run InSpec automatically. For further details, please see our Advanced InSpec Developer\'s Course.","code":"// travis.yml\\n\\nsudo: required\\n\\n# blocklist\\n#branches:\\n#  except:\\n#  - development\\n\\n# safelist\\n#branches:\\n#  only:\\n#  - master\\n#  - stable\\n\\nlanguage: ruby\\nrvm:\\n  - 2.6.1\\n\\ncache: bundler\\n\\naddons:\\n  apt:\\n    sources:\\n      - chef-current-xenial\\n    # packages:\\n    #   - chef-workstation\\n  #artifacts: true\\n\\n# Don\'t `bundle install` which takes about 1.5 mins\\ninstall:\\n\\nservices: docker\\n\\nenv:\\n  matrix:\\n  - INSTANCE=default-ubuntu-1604\\n\\nbefore_script:\\n  - wget https://packages.chef.io/files/stable/chef-workstation/0.5.1/ubuntu/16.04/chef-workstation_0.5.1-1_amd64.deb\\n  - sudo dpkg -i chef-workstation_*.deb\\n  - rm chef-workstation_*.deb\\n  - sudo iptables -L DOCKER || ( echo \\"DOCKER iptables chain missing\\" ; sudo iptables -N DOCKER )\\n  - eval\\\\$(chef shell-init bash)\\"\\n  - gem install bundler:2.0.1\\n  - gem install inspec_tools\\n  - inspec --version\\n  - CHEF_LICENSE=accept chef gem update inspec\\n  - CHEF_LICENSE=accept chef gem update inspec-bin\\n  - /opt/chef-workstation/embedded/bin/gem update inspec\\n  - /opt/chef-workstation/embedded/bin/gem update inspec-bin\\n  - inspec --version\\n  - bundle update --bundler\\n  - bundle install\\n  - chef --version\\n  - cookstyle --version\\n  - foodcritic --version\\n\\nscript: \\n  - CHEF_LICENSE=accept-no-persist KITCHEN_LOCAL_YAML=kitchen.dokken.yml CHEF_VERSION=\\\\${CHEF_VERSION} kitchen verify \\\\${INSTANCE} || true\\n  - export RESULTS=\\\\$(ls results/*.json)\\n  - inspec_tools compliance -j $RESULTS -f threshold.yml","links":[{"name":"InSpec Pipeline Integration Example","link":"https://mitre-inspec-advanced-developer.netlify.com/course/4.html"}],"tag":"pipeline"},{"question":"What is the difference between Chef InSpec and CINC Auditor?","answer":"<p> All Chef software source code, including Chef InSpec, is open source under the Apache-2.0 license. </p> <p> Use of Chef\'s binary builds requires a paid license for use in production. </p> <p> Use of Chef binaries and releases in development, test, evaluation and demonstration do not require a formal support agreement. </p> <p> This is a common model in Enterprise Open Source software companies. The first major example of this was when Red Hat updated its licensing model. The open-community created the CentOS project to produce distributions of the RedHat OSS licensed code as a fully open-source software distribution. </p> <p> For more information about Chef\'s goals and intentions for this update, please see <a href=\'https://blog.chef.io/chef-software-announces-the-enterprise-automation-stack/\' >https://blog.chef.io/chef-software-announces-the-enterprise-automation-stack/</a > and the <a href=\'https://www.chef.io/subscription-model-faq/\' >https://www.chef.io/subscription-model-faq/</a >. </p> <p> Chef Inc. is working with the Cinc Project and the OSU Open Source Lab in support of the open source community. Chef and Cinc have worked hard to ensure that both the commercial-support and community-support model is easy for the end-user community. </p> <p> Cinc project is creating community distributions that follow the Apache-2.0 and Chef End User License Agreement (EULA) for the community to use freely and without a license. </p> <p> If you need Chef support for production use and deployment of Chef binaries, please <a href=\'https://pages.chef.io/2020-OSS-LandingPage.html\' >https://pages.chef.io/2020-OSS-LandingPage.html</a > about their various options. </p> <p> The Cinc project is not a fork, the Cinc and Chef binaries are functionally identical and build from the exact same OSS code on GitHub. </p> <p> The Cinc distributions remove all trademarked and Chef owned intellectual property and images, etc. This makes them compliant with the Chef Software Trademark policy and EULA, and provides the community with a freely distributable and purely open-source option to use Chef\'s open source technology. </p> <p> The <a href=\'https://cinc.sh/goals/\'>Cinc project\'s goals</a> are to provide the community with a freely distributable and purely open-source option to use Chef\'s open source technology. </p>","links":[{"name":"CINC Project","link":"https://cinc.sh"},{"name":"Chef EULA Changes","link":"https://blog.chef.io/chef-software-announces-the-enterprise-automation-stack/"},{"name":"Chef Subscription Model FAQ","link":"https://www.chef.io/subscription-model-faq/"}],"tag":"inspec-cinc"}]}')},"508a":function(e,t,n){var s={"./aws_lambda_logo.png":"36e8","./cinc.png":"ff26","./emass.png":"8b63","./emass.svg":"d7e2","./emass_dark.png":"f029","./heimdall.png":"7d9c","./heimdall_logo.png":"101e","./inspec-delta-icon.png":"b3ef","./inspec-runner.png":"9c84","./inspec_logo.png":"2133","./saf_logo.png":"1bcf","./splunk-black-white-bg.png":"0dd5","./splunk-white-black-bg.png":"51d2"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=i,e.exports=a,a.id="508a"},d7e2:function(e,t,n){e.exports=n.p+"img/emass.be352006.svg"}}]);