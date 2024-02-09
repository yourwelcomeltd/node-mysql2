"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3561],{3788:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var a=t(5893),r=t(1151),s=t(4866),o=t(5162);const u={},l="Row Data Packet (Row as Array)",i={id:"examples/typescript/row-data/row-as-array",title:"Row Data Packet (Row as Array)",description:"",source:"@site/docs/examples/typescript/row-data/01-row-as-array.mdx",sourceDirName:"examples/typescript/row-data",slug:"/examples/typescript/row-data/row-as-array",permalink:"/node-mysql2/docs/examples/typescript/row-data/row-as-array",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/typescript/row-data/01-row-as-array.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"examples",previous:{title:"Row Data Packet",permalink:"/node-mysql2/docs/examples/typescript/row-data/index"},next:{title:"Row Data Packet (Multi Statements)",permalink:"/node-mysql2/docs/examples/typescript/row-data/multi-statements"}},c={},d=[];function p(e){const n={code:"code",h1:"h1",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"row-data-packet-row-as-array",children:"Row Data Packet (Row as Array)"}),"\n",(0,a.jsx)(s.Z,{children:(0,a.jsx)(o.Z,{value:"index.ts",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"/**\n * The types are explicity for learning purpose\n * By extending the `RowDataPacket`, you can use your Interface in `query` and `execute`\n */\n\nimport mysql, {\n  ConnectionOptions,\n  ResultSetHeader,\n  RowDataPacket,\n} from 'mysql2/promise';\n\ninterface User extends RowDataPacket {\n  /** id */\n  0: number;\n  /** name */\n  1: string;\n}\n\n(async () => {\n  const access: ConnectionOptions = {\n    host: '',\n    user: '',\n    password: '',\n    database: '',\n    rowsAsArray: true,\n  };\n\n  const conn = await mysql.createConnection(access);\n\n  /** Deleting the `users` table, if it exists */\n  await conn.query<ResultSetHeader>('DROP TABLE IF EXISTS `users`;');\n\n  /** Creating a minimal user table */\n  await conn.query<ResultSetHeader>(\n    'CREATE TABLE `users` (`id` INT(11) AUTO_INCREMENT, `name` VARCHAR(50), PRIMARY KEY (`id`));'\n  );\n\n  /** Inserting some users */\n  const [inserted] = await conn.execute<ResultSetHeader>(\n    'INSERT INTO `users`(`name`) VALUES(?), (?), (?), (?);',\n    ['Josh', 'John', 'Marie', 'Gween']\n  );\n\n  console.log('Inserted:', inserted.affectedRows);\n\n  /** Getting users */\n  const [users] = await conn.query<User[]>(\n    'SELECT * FROM `users` ORDER BY `name` ASC;'\n  );\n\n  users.forEach((user) => {\n    console.log('-----------');\n    console.log('id:  ', user[0]);\n    console.log('name:', user[1]);\n  });\n\n  await conn.end();\n})();\n\n/** Output\n *\n * Inserted: 4\n * -----------\n * id:   4\n * name: Gween\n * -----------\n * id:   2\n * name: John\n * -----------\n * id:   1\n * name: Josh\n * -----------\n * id:   3\n * name: Marie\n */\n"})})})})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(7294),r=t(512),s=t(2466),o=t(6550),u=t(469),l=t(1980),i=t(7392),c=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,d]=f({queryString:t,groupId:r}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),w=(()=>{const e=i??h;return m({value:e,tabValues:s})?e:null})();(0,u.Z)((()=>{w&&l(w)}),[w]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(2389);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(5893);function v(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=u[t].value;r!==a&&(i(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=h(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",w.tabList),children:[(0,y.jsx)(v,{...e,...n}),(0,y.jsx)(g,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>o});var a=t(7294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);