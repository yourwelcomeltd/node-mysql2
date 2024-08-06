"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[587],{7208:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var s=t(4848),r=t(8453),l=t(1470),a=t(9365),o=t(185),i=t(4443);const c={sidebar_position:3,tags:["Prepared Statements","Placeholders","Parameters","execute"]},u="DELETE",d={id:"examples/queries/prepared-statements/delete",title:"DELETE",description:"execute(sql, values)",source:"@site/docs/examples/queries/prepared-statements/delete.mdx",sourceDirName:"examples/queries/prepared-statements",slug:"/examples/queries/prepared-statements/delete",permalink:"/node-mysql2/zh-CN/docs/examples/queries/prepared-statements/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/queries/prepared-statements/delete.mdx",tags:[{inline:!0,label:"Prepared Statements",permalink:"/node-mysql2/zh-CN/docs/tags/prepared-statements"},{inline:!0,label:"Placeholders",permalink:"/node-mysql2/zh-CN/docs/tags/placeholders"},{inline:!0,label:"Parameters",permalink:"/node-mysql2/zh-CN/docs/tags/parameters"},{inline:!0,label:"execute",permalink:"/node-mysql2/zh-CN/docs/tags/execute"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["Prepared Statements","Placeholders","Parameters","execute"]},sidebar:"examples",previous:{title:"UPDATE",permalink:"/node-mysql2/zh-CN/docs/examples/queries/prepared-statements/update"},next:{title:"Binlog Watcher",permalink:"/node-mysql2/zh-CN/docs/examples/binlog-watcher"}},h={},p=[{value:"execute(sql, values)",id:"executesql-values",level:2},{value:"execute(options)",id:"executeoptions",level:2},{value:"execute(options, values)",id:"executeoptions-values",level:2},{value:"Glossary",id:"glossary",level:2},{value:"ResultSetHeader",id:"resultsetheader",level:3},{value:"QueryOptions",id:"queryoptions",level:3}];function x(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"delete",children:"DELETE"}),"\n",(0,s.jsx)(n.h2,{id:"executesql-values",children:"execute(sql, values)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"execute(sql: string, values: any[])"})}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'DELETE FROM `users` WHERE `name` = ? LIMIT 1';\n  const values = ['Page'];\n\n  // highlight-next-line\n  const [result, fields] = await connection.execute(sql, values);\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(a.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sql = 'DELETE FROM `users` WHERE `name` = ? LIMIT 1';\nconst values = ['Page'];\n\nconnection.execute(sql, values, (err, result, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(result);\n  console.log(fields);\n});\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"result"}),": contains a ",(0,s.jsx)(n.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:"execute"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"executeoptions",children:"execute(options)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["execute(options: ",(0,s.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),")"]})}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'DELETE FROM `users` WHERE `name` = ? LIMIT 1';\n  const values = ['Page'];\n\n  // highlight-start\n  const [result, fields] = await connection.execute({\n    sql,\n    values,\n    // ... other options\n  });\n  // highlight-end\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(a.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sql = 'DELETE FROM `users` WHERE `name` = ? LIMIT 1';\nconst values = ['Page'];\n\nconnection.execute(\n  {\n    sql,\n    values,\n    // ... other options\n  },\n  (err, result, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(result);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"result"}),": contains a ",(0,s.jsx)(n.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:"execute"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"executeoptions-values",children:"execute(options, values)"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["execute(options: ",(0,s.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),", values: any[])"]})}),"\n"]}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(a.A,{value:"promise.js",default:!0,children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'DELETE FROM `users` WHERE `name` = ? LIMIT 1';\n  const values = ['Page'];\n\n  // highlight-start\n  const [result, fields] = await connection.execute(\n    {\n      sql,\n      // ... other options\n    },\n    values\n  );\n  // highlight-end\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,s.jsx)(a.A,{value:"callback.js",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const sql = 'DELETE FROM `users` WHERE `name` = ? LIMIT 1';\nconst values = ['Page'];\n\nconnection.execute(\n  {\n    sql,\n    // ... other options\n  },\n  values,\n  (err, result, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(result);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"result"}),": contains a ",(0,s.jsx)(n.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["The connection used for the query (",(0,s.jsx)(n.code,{children:"execute"}),") can be obtained through the ",(0,s.jsx)(n.code,{children:"createConnection"}),", ",(0,s.jsx)(n.code,{children:"createPool"})," or ",(0,s.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,s.jsx)("hr",{}),"\n",(0,s.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,s.jsx)(n.h3,{id:"resultsetheader",children:"ResultSetHeader"}),"\n",(0,s.jsx)(o.T,{title:"ResultSetHeader Specification",children:(0,s.jsx)(i.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/packets/ResultSetHeader.d.ts",extractMethod:"ResultSetHeader",methodType:"interface"})}),"\n",(0,s.jsx)(n.h3,{id:"queryoptions",children:"QueryOptions"}),"\n",(0,s.jsx)(o.T,{title:"QueryOptions Specification",children:(0,s.jsx)(i.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/sequences/Query.d.ts",extractMethod:"QueryOptions",methodType:"interface"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>a});t(6540);var s=t(4164);const r={tabItem:"tabItem_Ymn6"};var l=t(4848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,a),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>q});var s=t(6540),r=t(4164),l=t(3104),a=t(6347),o=t(205),i=t(7485),c=t(1682),u=t(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,d]=x({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),j=(()=>{const e=c??m;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{j&&i(j)}),[j]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,l]),tabValues:l}}var g=t(2303);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==s&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.A)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(b,{...n,...e}),(0,f.jsx)(v,{...n,...e})]})}function q(e){const n=(0,g.A)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},4443:(e,n,t)=>{t.d(n,{S:()=>i});var s=t(6540),r=t(4586),l=t(1432),a=t(4848);const o=()=>(0,a.jsx)("span",{className:"loader"}),i=e=>{let{url:n,language:t,extractMethod:i,methodType:c}=e;const[u,d]=(0,s.useState)(""),[h,p]=(0,s.useState)(!0),[x,m]=(0,s.useState)(!0),{siteConfig:g}=(0,r.A)(),j=g.baseUrl.replace(/\/$/,""),f=/^\//.test(n)?`${j}${n}`:n;return(0,s.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(f,{signal:n}).then((e=>e.text())).then((e=>{const n=i&&c?((e,n,t)=>{const s=e.split("\n"),r=`${t} ${n}`;let l=!1,a=0,o="";for(const i of s)if(i.includes(r)&&(l=!0),l&&(i.includes("{")&&a++,o+=i+"\n",i.includes("}")&&(a--,0===a)))break;return o.trim()||e})(e,i,c):e;d(n||e),p(!1),m(!1)})).catch((()=>{m(!0),p(!1)})),()=>{e.abort()}}),[f,i,c]),(0,a.jsx)(a.Fragment,{children:h?(0,a.jsx)(o,{}):(0,a.jsx)(a.Fragment,{children:x?(0,a.jsxs)("div",{children:["Unable to access the requested link: ",(0,a.jsx)("code",{children:f}),". Please verify the link or try again later."]}):(0,a.jsx)(l.A,{className:`language-${t}`,children:u})})})}},185:(e,n,t)=>{t.d(n,{T:()=>l});var s=t(1622),r=t(4848);const l=e=>{let{children:n,open:t,title:l}=e;return(0,r.jsx)(s.A,{open:t,className:"faq",summary:(0,r.jsx)("summary",{children:(0,r.jsx)("strong",{children:l})}),children:(0,r.jsx)("section",{children:n})})}}}]);