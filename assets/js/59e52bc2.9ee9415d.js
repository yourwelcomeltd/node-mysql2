"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[184],{6259:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>p});var t=r(4848),s=r(8453),l=r(1470),a=r(9365),o=r(185),i=r(4443);const c={sidebar_position:3,tags:["query"]},u="DELETE",d={id:"examples/queries/simple-queries/delete",title:"DELETE",description:"The examples below also work for the execute method.",source:"@site/docs/examples/queries/simple-queries/delete.mdx",sourceDirName:"examples/queries/simple-queries",slug:"/examples/queries/simple-queries/delete",permalink:"/node-mysql2/docs/examples/queries/simple-queries/delete",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/queries/simple-queries/delete.mdx",tags:[{inline:!0,label:"query",permalink:"/node-mysql2/docs/tags/query"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["query"]},sidebar:"examples",previous:{title:"UPDATE",permalink:"/node-mysql2/docs/examples/queries/simple-queries/update"},next:{title:"Prepared Statements",permalink:"/node-mysql2/docs/examples/queries/prepared-statements/"}},h={},p=[{value:"query(sql)",id:"querysql",level:2},{value:"query(options)",id:"queryoptions",level:2},{value:"Glossary",id:"glossary",level:2},{value:"ResultSetHeader",id:"resultsetheader",level:3},{value:"QueryOptions",id:"queryoptions-1",level:3}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"delete",children:"DELETE"}),"\n",(0,t.jsxs)(n.p,{children:["The examples below also work for the ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements/delete",children:(0,t.jsx)(n.code,{children:"execute"})})," method."]}),"\n",(0,t.jsx)(n.h2,{id:"querysql",children:"query(sql)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"query(sql: string)"})}),"\n"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(a.A,{value:"promise.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\n  // highlight-next-line\n  const [result, fields] = await connection.query(sql);\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.A,{value:"callback.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\nconnection.query(sql, (err, result, fields) => {\n  if (err instanceof Error) {\n    console.log(err);\n    return;\n  }\n\n  console.log(result);\n  console.log(fields);\n});\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"result"}),": contains a ",(0,t.jsx)(n.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The connection used for the query (",(0,t.jsx)(n.code,{children:".query()"}),") can be obtained through the ",(0,t.jsx)(n.code,{children:"createConnection"}),", ",(0,t.jsx)(n.code,{children:"createPool"})," or ",(0,t.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"queryoptions",children:"query(options)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.strong,{children:["query(options: ",(0,t.jsx)(n.a,{href:"#queryoptions",children:"QueryOptions"}),")"]})}),"\n"]}),"\n",(0,t.jsxs)(l.A,{children:[(0,t.jsx)(a.A,{value:"promise.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\n  // highlight-start\n  const [result, fields] = await connection.query({\n    sql,\n    // ... other options\n  });\n  // highlight-end\n\n  console.log(result);\n  console.log(fields);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.A,{value:"callback.js",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const sql = 'DELETE FROM `users` WHERE `name` = \"Page\" LIMIT 1';\n\nconnection.query(\n  {\n    sql,\n    // ... other options\n  },\n  (err, result, fields) => {\n    if (err instanceof Error) {\n      console.log(err);\n      return;\n    }\n\n    console.log(result);\n    console.log(fields);\n  }\n);\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"result"}),": contains a ",(0,t.jsx)(n.a,{href:"#resultsetheader",children:"ResultSetHeader"})," object, which provides details about the operation executed by the server."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"fields"})," contains extra meta data about the operation, if available"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["The connection used for the query (",(0,t.jsx)(n.code,{children:".query()"}),") can be obtained through the ",(0,t.jsx)(n.code,{children:"createConnection"}),", ",(0,t.jsx)(n.code,{children:"createPool"})," or ",(0,t.jsx)(n.code,{children:"createPoolCluster"})," methods."]})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h2,{id:"glossary",children:"Glossary"}),"\n",(0,t.jsx)(n.h3,{id:"resultsetheader",children:"ResultSetHeader"}),"\n",(0,t.jsx)(o.T,{title:"ResultSetHeader Specification",children:(0,t.jsx)(i.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/packets/ResultSetHeader.d.ts",extractMethod:"ResultSetHeader",methodType:"interface"})}),"\n",(0,t.jsx)(n.h3,{id:"queryoptions-1",children:"QueryOptions"}),"\n",(0,t.jsx)(o.T,{title:"QueryOptions Specification",children:(0,t.jsx)(i.S,{language:"ts",url:"https://raw.githubusercontent.com/sidorares/node-mysql2/master/typings/mysql/lib/protocol/sequences/Query.d.ts",extractMethod:"QueryOptions",methodType:"interface"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>a});r(6540);var t=r(4164);const s={tabItem:"tabItem_Ymn6"};var l=r(4848);function a(e){let{children:n,hidden:r,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,a),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>v});var t=r(6540),s=r(4164),l=r(3104),a=r(6347),o=r(205),i=r(7485),c=r(1682),u=r(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:s}}=e;return{value:n,label:r,attributes:t,default:s}}))}(r);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const s=(0,a.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(s.location.search);n.set(l,e),s.replace({...s.location,search:n.toString()})}),[l,s])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:s}=e,l=h(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,d]=m({queryString:r,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,l]=(0,u.Dv)(r);return[s,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:s}),b=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function j(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),s=o[r].value;s!==t&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,s.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function y(e){let{lazy:n,children:r,selectedValue:s}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function q(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(y,{...n,...e})]})}function v(e){const n=(0,f.A)();return(0,g.jsx)(q,{...e,children:d(e.children)},String(n))}},4443:(e,n,r)=>{r.d(n,{S:()=>i});var t=r(6540),s=r(4586),l=r(1432),a=r(4848);const o=()=>(0,a.jsx)("span",{className:"loader"}),i=e=>{let{url:n,language:r,extractMethod:i,methodType:c}=e;const[u,d]=(0,t.useState)(""),[h,p]=(0,t.useState)(!0),[m,x]=(0,t.useState)(!0),{siteConfig:f}=(0,s.A)(),b=f.baseUrl.replace(/\/$/,""),g=/^\//.test(n)?`${b}${n}`:n;return(0,t.useEffect)((()=>{const e=new AbortController,n=e.signal;return fetch(g,{signal:n}).then((e=>e.text())).then((e=>{const n=i&&c?((e,n,r)=>{const t=e.split("\n"),s=`${r} ${n}`;let l=!1,a=0,o="";for(const i of t)if(i.includes(s)&&(l=!0),l&&(i.includes("{")&&a++,o+=i+"\n",i.includes("}")&&(a--,0===a)))break;return o.trim()||e})(e,i,c):e;d(n||e),p(!1),x(!1)})).catch((()=>{x(!0),p(!1)})),()=>{e.abort()}}),[g,i,c]),(0,a.jsx)(a.Fragment,{children:h?(0,a.jsx)(o,{}):(0,a.jsx)(a.Fragment,{children:m?(0,a.jsxs)("div",{children:["Unable to access the requested link: ",(0,a.jsx)("code",{children:g}),". Please verify the link or try again later."]}):(0,a.jsx)(l.A,{className:`language-${r}`,children:u})})})}},185:(e,n,r)=>{r.d(n,{T:()=>l});var t=r(1622),s=r(4848);const l=e=>{let{children:n,open:r,title:l}=e;return(0,s.jsx)(t.A,{open:r,className:"faq",summary:(0,s.jsx)("summary",{children:(0,s.jsx)("strong",{children:l})}),children:(0,s.jsx)("section",{children:n})})}}}]);