"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5638:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:5,sidebar_label:"Configuring Hasura"},o="Configuring Hasura",s={unversionedId:"quickstart/configure_hasura",id:"quickstart/configure_hasura",title:"Configuring Hasura",description:"Hasura is an open-source engine that provides instant GraphQL APIs for your existing databases. It allows you to rapidly build and deploy GraphQL APIs without writing complex backend code.",source:"@site/docs/quickstart/configure_hasura.md",sourceDirName:"quickstart",slug:"/quickstart/configure_hasura",permalink:"/docs/quickstart/configure_hasura",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/configure_hasura.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Configuring Hasura"},sidebar:"tutorialSidebar",previous:{title:"Organizations and user setup",permalink:"/docs/quickstart/org_setup"},next:{title:"Connectors",permalink:"/docs/category/connectors"}},l={},u=[{value:"Step 1: Initialize using hasura-init.sh",id:"step-1-initialize-using-hasura-initsh",level:3},{value:"Step 2: directly import the metadata",id:"step-2-directly-import-the-metadata",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"configuring-hasura"},"Configuring Hasura"),(0,n.kt)("p",null,"Hasura is an open-source engine that provides instant GraphQL APIs for your existing databases. It allows you to rapidly build and deploy GraphQL APIs without writing complex backend code."),(0,n.kt)("p",null,"This comprehensive guide is designed to help you swiftly set up and start using the Hasura GraphQL Engine along with a Postgres database, both running as Docker containers using Docker Compose. To begin the process, you can refer to the following link which provides detailed instructions on how to set up Hasura in a Docker environment: ",(0,n.kt)("a",{parentName:"p",href:"https://hasura.io/docs/latest/getting-started/docker-simple/"},"Click here"),"."),(0,n.kt)("p",null,"Before performing any initialization process, you need to run your ",(0,n.kt)("a",{parentName:"p",href:"/docs/quickstart/start_fabriq"},"Fabriq app and GraphQL engine"),"."),(0,n.kt)("p",null,"There are two options to initialize Hasura metadata:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The first option is to run the ",(0,n.kt)("inlineCode",{parentName:"li"},"hasura-init.sh")," file. "),(0,n.kt)("li",{parentName:"ul"},"The second option is to directly import the metadata.")),(0,n.kt)("h3",{id:"step-1-initialize-using-hasura-initsh"},"Step 1: Initialize using hasura-init.sh"),(0,n.kt)("p",null,"Before proceeding with the initialization process using ",(0,n.kt)("inlineCode",{parentName:"p"},"hasura-init.sh"),", ensure that your GraphQL engine is running. Additionally, make sure that you have provided valid database details and the Hasura URL in the ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/fabriq-labs/fabriq-platform.git\ncd fabriq-platform/resource/scripts\n./hasura-init.sh\n")),(0,n.kt)("p",null,"After running the script file, you will receive an output similar to the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Build Database URL For database name\nAppend database details in the metadata is inprogress\nAppend database details in the metadata Successfully\nImport Metadata to hasura http://localhost:8081\n{"inconsistent_objects":[],"is_consistent":true}Import Metadata Successfully\n')),(0,n.kt)("h3",{id:"step-2-directly-import-the-metadata"},"Step 2: directly import the metadata"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can obtain the Hasura metadata by accessing it   ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/fabriq-labs/fabriq-platform/blob/master/resources/hasura_metadata.json"},"here")," ")),(0,n.kt)("p",null,"After downloading the files, remember to update the database details in the following section:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"configuration": {\n  "connection_info": {\n    "database_url": "postgres://postgres:postgres@localhost:5432/meta_dev",\n    "isolation_level": "read-committed",\n    "use_prepared_statements": false\n  }\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After Hasura is online, go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Settings")," tab in the Hasura admin console.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(5510).Z,width:"1905",height:"882"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on the 'Import' button, select the respective metadata file, and upload it to import the metadata.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Alt text",src:a(5273).Z,width:"1905",height:"882"})))}d.isMDXComponent=!0},5273:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hasura_import-9bd220205c3d59a371d656547f7c8fbe.png"},5510:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/hasura_settings-2a49331de7b638996ed8b2dc178e0f92.png"}}]);