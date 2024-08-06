"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3406],{2765:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var r=s(4848),t=s(8453),l=s(1470),a=s(9365),o=s(185),c=s(4443);const i={sidebar_position:1,tags:["Prepared Statements","Placeholders","Parameters","execute"]},u="SELECT",d={id:"examples/queries/prepared-statements/select",title:"SELECT",description:"execute(sql, values)",source:"@site/docs/examples/queries/prepared-statements/select.mdx",sourceDirName:"examples/queries/prepared-statements",slug:"/examples/queries/prepared-statements/select",permalink:"/node-mysql2/zh-CN/docs/examples/queries/prepared-statements/select",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/queries/prepared-statements/select.mdx",tags:[{inline:!0,label:"Prepared Statements",permalink:"/node-mysql2/zh-CN/docs/tags/prepared-statements"},{inline:!0,label:"Placeholders",permalink:"/node-mysql2/zh-CN/docs/tags/placeholders"},{inline:!0,label:"Parameters",permalink:"/node-mysql2/zh-CN/docs/tags/parameters"},{inline:!0,label:"execute",permalink:"/node-mysql2/zh-CN/docs/tags/execute"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["Prepared Statements","Placeholders","Parameters","execute"]},sidebar:"examples",previous:{title:"INSERT",permalink:"/node-mysql2/zh-CN/docs/examples/queries/prepared-statements/insert"},next:{title:"UPDATE",permalink:"/node-mysql2/zh-CN/docs/examples/queries/prepared-statements/update"}},h={},p=[{value:"execute(sql, values)",id:"executesql-values",level:2},{value:"execute(options)",id:"executeoptions",level:2},{value:"execute(options, values)",id:"executeoptions-values",level:2},{value:"Glossary",id:"glossary",level:2},{value:"QueryOptions",id:"queryoptions",level:3}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"select",children:"SELECT"}),"\n",(0,r.jsx)(n.h2,{id:"executesql-values",children:"execute(sql, values)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"execute(sql: string, values: any[])"})}),"\n"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(a.A,{value:"promise.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?';\n  const values = ['Page', 45];\n\n  // highlight-next-line\n  const [rows, fields] = await connection.execute(sql, values);\n\n  console.log(rows);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(a.A,{value:"callback.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const sql = 'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?';\nconst values = ['Page', 45];\n\nconnection.execute(sql, values, (err, rows, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(rows);\n  console.log(fields);\n});\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rows"})," contains rows returned by server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"fields"})," contains extra meta data about rows, if available"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The connection used for the query (",(0,r.jsx)(n.code,{children:"execute"}),") can be obtained through the ",(0,r.jsx)(n.code,{children:"createConnection"}),", ",(0,r.jsx)(n.code,{children:"createPool"})," or ",(0,r.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"executeoptions",children:"execute(options)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["execute(options: ",(0,r.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),")"]})}),"\n"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(a.A,{value:"promise.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?';\n  const values = ['Page', 45];\n\n  // highlight-start\n  const [rows, fields] = await connection.execute({\n    sql,\n    values,\n    // ... other options\n  });\n  // highlight-end\n\n  console.log(rows);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(a.A,{value:"callback.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const sql = 'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?';\nconst values = ['Page', 45];\n\nconnection.execute(\n  {\n    sql,\n    values,\n    // ... other options\n  },\n  (err, rows, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(rows);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rows"})," contains rows returned by server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"fields"})," contains extra meta data about rows, if available"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The connection used for the query (",(0,r.jsx)(n.code,{children:"execute"}),") can be obtained through the ",(0,r.jsx)(n.code,{children:"createConnection"}),", ",(0,r.jsx)(n.code,{children:"createPool"})," or ",(0,r.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"executeoptions-values",children:"execute(options, values)"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["execute(options: ",(0,r.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),", values: any[])"]})}),"\n"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(a.A,{value:"promise.js",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?';\n  const values = ['Page', 45];\n\n  // highlight-start\n  const [rows, fields] = await connection.execute(\n    {\n      sql,\n      // ... other options\n    },\n    values\n  );\n  // highlight-end\n\n  console.log(rows);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,r.jsx)(a.A,{value:"callback.js",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const sql = 'SELECT * FROM `users` WHERE `name` = ? AND `age` > ?';\nconst values = ['Page', 45];\n\nconnection.execute(\n  {\n    sql,\n    // ... other options\n  },\n  values,\n  (err, rows, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(rows);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"rows"})," contains rows returned by server"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"fields"})," contains extra meta data about rows, if available"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The connection used for the query (",(0,r.jsx)(n.code,{children:"execute"}),") can be obtained through the ",(0,r.jsx)(n.code,{children:"createConnection"}),", ",(0,r.jsx)(n.code,{children:"createPool"})," or ",(0,r.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,r.jsx)("hr",{}),"\n",(0,r.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,r.jsx)(n.h3,{id:"queryoptions",children:"QueryOptions"}),"\n",(0,r.jsx)(o.T,{title:"QueryOptions Specification",children:(0,r.jsx)(c.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/sequences/Query.d.ts",extractMethod:"QueryOptions",methodType:"interface"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var r=s(4164);const t={tabItem:"tabItem_Ymn6"};var l=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,a),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>q});var r=s(6540),t=s(4164),l=s(3104),a=s(6347),o=s(205),c=s(7485),i=s(1682),u=s(679);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,l=h(e),[a,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,d]=x({queryString:s,groupId:t}),[m,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,u.Dv)(s);return[t,(0,r.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:t}),j=(()=>{const e=i??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=s(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function b(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),u=e=>{const n=e.currentTarget,s=c.indexOf(n),t=o[s].value;t!==r&&(i(n),a(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":s},n),children:o.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...l,className:(0,t.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:t}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function q(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},4443:(e,n,s)=>{s.d(n,{S:()=>c});var r=s(6540),t=s(4586),l=s(1432),a=s(4848);const o=()=>(0,a.jsx)("span",{className:"loader"}),c=e=>{let{url:n,language:s,extractMethod:c,methodType:i}=e;const[u,d]=(0,r.useState)(""),[h,p]=(0,r.useState)(!0),[x,m]=(0,r.useState)(!0),{siteConfig:g}=(0,t.A)(),j=g.baseUrl.replace(/\/$/,""),f=/^\//.test(n)?`${j}${n}`:n;return(0,r.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(f,{signal:n}).then((e=>e.text())).then((e=>{const n=c&&i?((e,n,s)=>{const r=e.split("\n"),t=`${s} ${n}`;let l=!1,a=0,o="";for(const c of r)if(c.includes(t)&&(l=!0),l&&(c.includes("{")&&a++,o+=c+"\n",c.includes("}")&&(a--,0===a)))break;return o.trim()||e})(e,c,i):e;d(n||e),p(!1),m(!1)})).catch((()=>{m(!0),p(!1)})),()=>{e.abort()}}),[f,c,i]),(0,a.jsx)(a.Fragment,{children:h?(0,a.jsx)(o,{}):(0,a.jsx)(a.Fragment,{children:x?(0,a.jsxs)("div",{children:["Unable to access the requested link: ",(0,a.jsx)("code",{children:f}),". Please verify the link or try again later."]}):(0,a.jsx)(l.A,{className:`language-${s}`,children:u})})})}},185:(e,n,s)=>{s.d(n,{T:()=>l});var r=s(1622),t=s(4848);const l=e=>{let{children:n,open:s,title:l}=e;return(0,t.jsx)(r.A,{open:s,className:"faq",summary:(0,t.jsx)("summary",{children:(0,t.jsx)("strong",{children:l})}),children:(0,t.jsx)("section",{children:n})})}}}]);