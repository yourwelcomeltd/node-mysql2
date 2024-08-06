"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[308],{6523:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var t=s(4848),o=s(8453),r=s(1470),a=s(9365),l=s(1747);const i={slug:"/",position:1,title:"Quickstart",description:"MySQL client for Node.js with focus on performance"},c="MySQL2",u={id:"index",title:"Quickstart",description:"MySQL client for Node.js with focus on performance",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/node-mysql2/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/index.mdx",tags:[],version:"current",frontMatter:{slug:"/",position:1,title:"Quickstart",description:"MySQL client for Node.js with focus on performance"},sidebar:"docs",next:{title:"History and Why MySQL2",permalink:"/node-mysql2/docs/history-and-why-mysq2"}},d={},h=[{value:"Installation",id:"installation",level:2},{value:"First Query",id:"first-query",level:3},{value:"Using Prepared Statements",id:"using-prepared-statements",level:3},{value:"Using Connection Pools",id:"using-connection-pools",level:3},{value:"Using Promise Wrapper",id:"using-promise-wrapper",level:3},{value:"Array Results",id:"array-results",level:3},{value:"Connection Level",id:"connection-level",level:4},{value:"Query Level",id:"query-level",level:4}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.s,{title:"MySQL2 | Quickstart"}),"\n",(0,t.jsx)(n.h1,{id:"mysql2",children:"MySQL2"}),"\n","\n",(0,t.jsx)(n.p,{children:"MySQL client for Node.js with focus on performance. Supports prepared statements, non-utf8 encodings, binary log protocol, compression, ssl much more."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://npmjs.org/package/mysql2",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/v/mysql2.svg",alt:"NPM Version"})}),"\n",(0,t.jsx)(n.a,{href:"https://npmjs.org/package/mysql2",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/dm/mysql2.svg",alt:"NPM Downloads"})}),"\n",(0,t.jsx)(n.a,{href:"https://nodejs.org/download/",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/node/v/mysql2.svg",alt:"Node.js Version"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/actions/workflows/ci-coverage.yml?query=branch%3Amaster",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/github/actions/workflow/status/sidorares/node-mysql2/ci-coverage.yml?event=push&style=flat&label=CI&branch=master",alt:"GitHub Workflow Status (with event)"})}),"\n",(0,t.jsx)(n.a,{href:"https://app.codecov.io/github/sidorares/node-mysql2",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/codecov/c/github/sidorares/node-mysql2",alt:"Codecov"})}),"\n",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/blob/master/License",children:(0,t.jsx)(n.img,{src:"https://img.shields.io/npm/l/mysql2.svg?maxAge=2592000",alt:"License"})})]}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"MySQL2 is free from native bindings and can be installed on Linux, Mac OS or Windows without any issues."}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"JavaScript",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save mysql2\n"})})}),(0,t.jsxs)(a.A,{value:"TypeScript",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save mysql2\nnpm install --save-dev @types/node\n"})}),(0,t.jsxs)(n.p,{children:["For TypeScript documentation and examples, see ",(0,t.jsx)(n.a,{href:"/docs/documentation/typescript-examples",children:"here"}),"."]})]})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"first-query",children:"First Query"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["To explore more queries examples, please visit the example sections ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/simple-queries",children:(0,t.jsx)(n.strong,{children:"Simple Queries"})})," and ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:(0,t.jsx)(n.strong,{children:"Prepared Statements"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Get the client\nimport mysql from 'mysql2/promise';\n\n// Create the connection to database\nconst connection = await mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\n// A simple SELECT query\ntry {\n  const [results, fields] = await connection.query(\n    'SELECT * FROM `table` WHERE `name` = \"Page\" AND `age` > 45'\n  );\n\n  console.log(results); // results contains rows returned by server\n  console.log(fields); // fields contains extra meta data about results, if available\n} catch (err) {\n  console.log(err);\n}\n\n// Using placeholders\ntry {\n  const [results] = await connection.query(\n    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n    ['Page', 45]\n  );\n\n  console.log(results);\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.A,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Get the client\nconst mysql = require('mysql2');\n\n// Create the connection to database\nconst connection = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\n// A simple SELECT query\nconnection.query(\n  'SELECT * FROM `table` WHERE `name` = \"Page\" AND `age` > 45',\n  function (err, results, fields) {\n    console.log(results); // results contains rows returned by server\n    console.log(fields); // fields contains extra meta data about results, if available\n  }\n);\n\n// Using placeholders\nconnection.query(\n  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n  ['Page', 45],\n  function (err, results) {\n    console.log(results);\n  }\n);\n"})})})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"using-prepared-statements",children:"Using Prepared Statements"}),"\n",(0,t.jsx)(n.p,{children:"With MySQL2 you also get the prepared statements. With prepared statements MySQL doesn't have to prepare plan for same query every time, this results in better performance. If you don't know why they are important, please check these discussions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/8263371/how-can-prepared-statements-protect-from-sql-injection-attacks",children:"How prepared statements can protect from SQL Injection attacks"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 provides ",(0,t.jsx)(n.code,{children:"execute"})," helper which will prepare and query the statement. You can also manually prepare / unprepare statement with ",(0,t.jsx)(n.code,{children:"prepare"})," / ",(0,t.jsx)(n.code,{children:"unprepare"})," methods."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["To explore more Prepared Statements and Placeholders examples, please visit the example section ",(0,t.jsx)(n.a,{href:"/docs/examples/queries/prepared-statements",children:(0,t.jsx)(n.strong,{children:"Prepared Statements"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\ntry {\n  // create the connection to database\n  const connection = await mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n  });\n\n  // execute will internally call prepare and query\n  const [results, fields] = await connection.execute(\n    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n    ['Rick C-137', 53]\n  );\n\n  console.log(results); // results contains rows returned by server\n  console.log(fields); // fields contains extra meta data about results, if available\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.A,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\n// create the connection to database\nconst connection = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\n// execute will internally call prepare and query\nconnection.execute(\n  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n  ['Rick C-137', 53],\n  function (err, results, fields) {\n    console.log(results); // results contains rows returned by server\n    console.log(fields); // fields contains extra meta data about results, if available\n  }\n);\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"If you execute same statement again, it will be picked from a LRU cache which will save query preparation time and give better performance."})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"using-connection-pools",children:"Using Connection Pools"}),"\n",(0,t.jsx)(n.p,{children:"Connection pools help reduce the time spent connecting to the MySQL server by reusing a previous connection, leaving them open instead of closing when you are done with them."}),"\n",(0,t.jsx)(n.p,{children:"This improves the latency of queries as you avoid all of the overhead that comes with establishing a new connection."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["To explore more Connection Pools examples, please visit the example section ",(0,t.jsx)(n.a,{href:"/docs/examples/connections/create-pool",children:(0,t.jsx)(n.strong,{children:"createPool"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\n// Create the connection pool. The pool-specific settings are the defaults\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  waitForConnections: true,\n  connectionLimit: 10,\n  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`\n  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000\n  queueLimit: 0,\n  enableKeepAlive: true,\n  keepAliveInitialDelay: 0,\n});\n"})})}),(0,t.jsx)(a.A,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const mysql = require('mysql2');\n\n// Create the connection pool. The pool-specific settings are the defaults\nconst pool = mysql.createPool({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  waitForConnections: true,\n  connectionLimit: 10,\n  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`\n  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000\n  queueLimit: 0,\n  enableKeepAlive: true,\n  keepAliveInitialDelay: 0,\n});\n"})})})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The pool does not create all connections upfront but creates them on demand until the connection limit is reached."})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsxs)(n.p,{children:["You can use the pool in the same way as connections (using ",(0,t.jsx)(n.code,{children:"pool.query()"})," and ",(0,t.jsx)(n.code,{children:"pool.execute()"}),"):"]}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"try {\n  // For pool initialization, see above\n  const [rows, fields] = await pool.query('SELECT `field` FROM `table`');\n  // Connection is automatically released when query resolves\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.A,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// For pool initialization, see above\npool.query('SELECT `field` FROM `table`', function (err, rows, fields) {\n  // Connection is automatically released when query resolves\n});\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Alternatively, there is also the possibility of manually acquiring a connection from the pool and returning it later:"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// For pool initialization, see above\nconst conn = await pool.getConnection();\n\n// Do something with the connection\nawait conn.query(/* ... */);\n\n// Don't forget to release the connection when finished!\npool.releaseConnection(conn);\n"})})}),(0,t.jsx)(a.A,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// For pool initialization, see above\npool.getConnection(function (err, conn) {\n  // Do something with the connection\n  conn.query(/* ... */);\n\n  // Don't forget to release the connection when finished!\n  pool.releaseConnection(conn);\n});\n"})})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Additionally, directly release the connection using the ",(0,t.jsx)(n.code,{children:"connection"})," object:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"conn.release();\n"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"using-promise-wrapper",children:"Using Promise Wrapper"}),"\n",(0,t.jsx)(n.p,{children:"MySQL2 also support Promise API. Which works very well with ES7 async await."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2/promise';\n\nasync function main() {\n  // create the connection\n  const connection = await mysql.createConnection({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n  });\n\n  // query database\n  const [rows, fields] = await connection.execute(\n    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n    ['Morty', 14]\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 use default ",(0,t.jsx)(n.code,{children:"Promise"})," object available in scope. But you can choose which ",(0,t.jsx)(n.code,{children:"Promise"})," implementation you want to use."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// get the client\nimport mysql from 'mysql2/promise';\n\n// get the promise implementation, we will use bluebird\nimport bluebird from 'bluebird';\n\n// create the connection, specify bluebird as Promise\nconst connection = await mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n  Promise: bluebird,\n});\n\n// query database\nconst [rows, fields] = await connection.execute(\n  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',\n  ['Morty', 14]\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 also exposes a ",(0,t.jsx)(n.code,{children:".promise()"})," function on Pools, so you can create a promise/non-promise connections from the same pool."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import mysql from 'mysql2';\n\nasync function main() {\n  // create the pool\n  const pool = mysql.createPool({\n    host: 'localhost',\n    user: 'root',\n    database: 'test',\n  });\n\n  // now get a Promise wrapped instance of that pool\n  const promisePool = pool.promise();\n\n  // query database using promises\n  const [rows, fields] = await promisePool.query('SELECT 1');\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["MySQL2 exposes a ",(0,t.jsx)(n.code,{children:".promise()"}),' function on Connections, to "upgrade" an existing non-promise connection to use promise.']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{11}",children:"const mysql = require('mysql2');\n\n// create the connection\nconst conn = mysql.createConnection({\n  host: 'localhost',\n  user: 'root',\n  database: 'test',\n});\n\nconn\n  .promise()\n  .query('SELECT 1')\n  .then(([rows, fields]) => {\n    console.log(rows);\n  })\n  .catch(console.log)\n  .then(() => conn.end());\n"})}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.h3,{id:"array-results",children:"Array Results"}),"\n",(0,t.jsxs)(n.p,{children:["If you have two columns with the same name, you might want to get results as an array rather than an object to prevent them from clashing. This is a deviation from the ",(0,t.jsx)(n.a,{href:"https://github.com/mysqljs/mysql",children:"Node MySQL"})," library."]}),"\n",(0,t.jsxs)(n.p,{children:["For example: ",(0,t.jsx)(n.code,{children:"SELECT 1 AS `foo`, 2 AS `foo`"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"You can enable this setting at either the connection level (applies to all queries), or at the query level (applies only to that specific query)."}),"\n",(0,t.jsx)(n.h4,{id:"connection-level",children:"Connection Level"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{5}",children:"const conn = await mysql.createConnection({\n  host: 'localhost',\n  database: 'test',\n  user: 'root',\n  rowsAsArray: true,\n});\n"})})}),(0,t.jsx)(a.A,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{5}",children:"const conn = mysql.createConnection({\n  host: 'localhost',\n  database: 'test',\n  user: 'root',\n  rowsAsArray: true,\n});\n"})})})]}),"\n",(0,t.jsx)(n.h4,{id:"query-level",children:"Query Level"}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsx)(a.A,{value:"Promise",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{4}",children:"try {\n  const [results, fields] = await conn.query({\n    sql: 'SELECT 1 AS `foo`, 2 AS `foo`',\n    rowsAsArray: true,\n  });\n\n  console.log(results); // in this query, results will be an array of arrays rather than an array of objects\n  console.log(fields); // fields are unchanged\n} catch (err) {\n  console.log(err);\n}\n"})})}),(0,t.jsx)(a.A,{value:"Callback",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{4}",children:"conn.query(\n  {\n    sql: 'SELECT 1 AS `foo`, 2 AS `foo`',\n    rowsAsArray: true,\n  },\n  function (err, results, fields) {\n    console.log(results); // in this query, results will be an array of arrays rather than an array of objects\n    console.log(fields); // fields are unchanged\n  }\n);\n"})})})]}),"\n",(0,t.jsx)("hr",{}),"\n",(0,t.jsx)(n.admonition,{title:"Getting Help",type:"tip",children:(0,t.jsxs)(n.p,{children:["Need help? Ask your question on ",(0,t.jsx)(n.a,{href:"https://stackoverflow.com/questions/tagged/mysql2",children:"Stack Overflow"})," or ",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/discussions",children:"GitHub"}),".\nIf you've encountered an issue, please ",(0,t.jsx)(n.a,{href:"https://github.com/sidorares/node-mysql2/issues",children:"file it on GitHub"}),"."]})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},9365:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var t=s(4164);const o={tabItem:"tabItem_Ymn6"};var r=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(o.tabItem,a),hidden:s,children:n})}},1470:(e,n,s)=>{s.d(n,{A:()=>q});var t=s(6540),o=s(4164),r=s(3104),a=s(6347),l=s(205),i=s(7485),c=s(1682),u=s(679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:o}}=e;return{value:n,label:s,attributes:t,default:o}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function m(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const o=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:o}=e,r=h(e),[a,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[c,d]=p({queryString:s,groupId:o}),[x,y]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,u.Dv)(s);return[o,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:o}),f=(()=>{const e=c??x;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{f&&i(f)}),[f]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),y(e)}),[d,y,r]),tabValues:r}}var y=s(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(4848);function j(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,s=i.indexOf(n),o=l[s].value;o!==t&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function b(e){let{lazy:n,children:s,selectedValue:o}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function v(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,o.A)("tabs-container",f.tabList),children:[(0,g.jsx)(j,{...n,...e}),(0,g.jsx)(b,{...n,...e})]})}function q(e){const n=(0,y.A)();return(0,g.jsx)(v,{...e,children:d(e.children)},String(n))}},1747:(e,n,s)=>{s.d(n,{s:()=>r});var t=s(5260),o=s(4848);const r=e=>{let{title:n}=e;return(0,o.jsx)(t.A,{children:(0,o.jsx)("title",{children:n})})}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var t=s(6540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);