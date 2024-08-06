"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3322],{8604:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(4848),s=t(8453),o=t(1470),a=t(9365);const l={},u="MySQL Proxy",c={id:"examples/tests/mysql-proxy",title:"MySQL Proxy",description:"",source:"@site/docs/examples/tests/mysql-proxy.mdx",sourceDirName:"examples/tests",slug:"/examples/tests/mysql-proxy",permalink:"/node-mysql2/zh-CN/docs/examples/tests/mysql-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/tests/mysql-proxy.mdx",tags:[],version:"current",frontMatter:{},sidebar:"examples",previous:{title:"await \u2014 co",permalink:"/node-mysql2/zh-CN/docs/examples/promise-wrapper/co-await"},next:{title:"Pool",permalink:"/node-mysql2/zh-CN/docs/examples/tests/pool"}},i={},d=[];function m(e){const n={code:"code",h1:"h1",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mysql-proxy",children:"MySQL Proxy"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsx)(a.A,{value:"index.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"'use strict';\n\nconst mysql = require('mysql2');\nconst ClientFlags = require('mysql2/lib/constants/client.js');\n\nconst server = mysql.createServer();\nserver.listen(3307);\n\nserver.on('connection', (conn) => {\n  console.log('connection');\n\n  conn.serverHandshake({\n    protocolVersion: 10,\n    serverVersion: 'node.js rocks',\n    connectionId: 1234,\n    statusFlags: 2,\n    characterSet: 8,\n    capabilityFlags: 0xffffff ^ ClientFlags.COMPRESS,\n  });\n\n  conn.on('field_list', (table, fields) => {\n    console.log('field list:', table, fields);\n    conn.writeEof();\n  });\n\n  const remote = mysql.createConnection({\n    user: 'root',\n    database: 'dbname',\n    host: 'server.example.com',\n    password: 'secret',\n  });\n\n  conn.on('query', (sql) => {\n    console.log(`proxying query: ${sql}`);\n    remote.query(sql, function (err) {\n      // overloaded args, either (err, result :object)\n      // or (err, rows :array, columns :array)\n      if (Array.isArray(arguments[1])) {\n        // response to a 'select', 'show' or similar\n        const rows = arguments[1],\n          columns = arguments[2];\n        console.log('rows', rows);\n        console.log('columns', columns);\n        conn.writeTextResult(rows, columns);\n      } else {\n        // response to an 'insert', 'update' or 'delete'\n        const result = arguments[1];\n        console.log('result', result);\n        conn.writeOk(result);\n      }\n    });\n  });\n\n  conn.on('end', remote.end.bind(remote));\n});\n"})})})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var r=t(4164);const s={tabItem:"tabItem_Ymn6"};var o=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>q});var r=t(6540),s=t(4164),o=t(3104),a=t(6347),l=t(205),u=t(7485),c=t(1682),i=t(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=m(e),[a,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=f({queryString:t,groupId:s}),[b,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,i.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),y=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{y&&u(y)}),[y]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),i=e=>{const n=e.currentTarget,t=u.indexOf(n),s=l[t].value;s!==r&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:i,...o,className:(0,s.A)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",y.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(g,{...n,...e})]})}function q(e){const n=(0,h.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(6540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);