"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8406],{5721:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),s=t(4866),o=t(5162);const l={},u="Server",c={id:"examples/tests/server",title:"Server",description:"",source:"@site/docs/examples/tests/server.mdx",sourceDirName:"examples/tests",slug:"/examples/tests/server",permalink:"/node-mysql2/zh-CN/docs/examples/tests/server",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/tests/server.mdx",tags:[],version:"current",frontMatter:{},sidebar:"examples",previous:{title:"Pool",permalink:"/node-mysql2/zh-CN/docs/examples/tests/pool"},next:{title:"Basic Custom Class",permalink:"/node-mysql2/zh-CN/docs/examples/typescript/basic-custom-class"}},i={},d=[];function m(e){const n={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"server",children:"Server"}),"\n",(0,r.jsx)(s.Z,{children:(0,r.jsx)(o.Z,{value:"index.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"'use strict';\n\nconst mysql = require('mysql2');\nconst flags = require('mysql2/lib/constants/client.js');\nconst auth = require('mysql2/lib/auth_41.js');\n\nfunction authenticate(params, cb) {\n  console.log(params);\n  const doubleSha = auth.doubleSha1('pass123');\n  const isValid = auth.verifyToken(\n    params.authPluginData1,\n    params.authPluginData2,\n    params.authToken,\n    doubleSha\n  );\n  if (isValid) {\n    cb(null);\n  } else {\n    // for list of codes lib/constants/errors.js\n    cb(null, { message: 'wrong password dude', code: 1045 });\n  }\n}\n\nconst server = mysql.createServer();\nserver.listen(3333);\nserver.on('connection', (conn) => {\n  // we can deny connection here:\n  // conn.writeError({ message: 'secret', code: 123 });\n  // conn.close();\n  conn.serverHandshake({\n    protocolVersion: 10,\n    serverVersion: '5.6.10', // 'node.js rocks',\n    connectionId: 1234,\n    statusFlags: 2,\n    characterSet: 8,\n    // capabilityFlags: 0xffffff,\n    // capabilityFlags: -2113931265,\n    capabilityFlags: 2181036031,\n    authCallback: authenticate,\n  });\n\n  conn.on('field_list', (table, fields) => {\n    console.log('FIELD LIST:', table, fields);\n    conn.writeEof();\n  });\n\n  conn.on('query', (query) => {\n    conn.writeColumns([\n      {\n        catalog: 'def',\n        schema: 'test',\n        table: 'test_table',\n        orgTable: 'test_table',\n        name: 'beta',\n        orgName: 'beta',\n        characterSet: 33,\n        columnLength: 384,\n        columnType: 253,\n        flags: 0,\n        decimals: 0,\n      },\n    ]);\n    conn.writeTextRow(['test \u0442\u0435\u0441\u0442 \u30c6\u30b9\u30c8 \u0583\u0578\u0580\u0571\u0561\u0580\u056f\u0578\u0582\u0574 \u09aa\u09b0\u09c0\u0995\u09cd\u09b7\u09be ki\u1ec3m tra ']);\n    conn.writeTextRow(['\u10e2\u10d4\u10e1\u10e2\u10d8 \u0aaa\u0ab0\u0ac0\u0a95\u0acd\u0ab7\u0aa3  \u05de\u05d1\u05d7\u05df \u05e4\u05bc\u05e8\u05d5\u05d1\u05d9\u05e8\u05df \u0627\u062e\u062a\u0628\u0627\u0631 \u092a\u0930\u0940\u0915\u094d\u0937\u0923']);\n    conn.writeEof();\n    conn.close();\n  });\n});\n"})})})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),a=t(512),s=t(2466),o=t(6550),l=t(469),u=t(1980),c=t(7392),i=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=f({queryString:t,groupId:a}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,i.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),i=e=>{const n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:i,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function k(e){const n=(0,h.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(7294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);