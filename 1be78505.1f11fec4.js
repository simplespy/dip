(window.webpackJsonp=window.webpackJsonp||[]).push([[8,39],{194:function(e,t,a){"use strict";a.r(t);a(25),a(19),a(20),a(59),a(288),a(56);var n=a(0),r=a.n(n),i=a(198),c=a(199),l=a(70),o=a(206),s=a(205).DocSidebar,u=a(222),f=a(241),m=a(229),d=a(237),p=a(217),v=a(238),h=a(168),b=a.n(h),y=function(e){var t=e.children;return r.a.createElement("div",{className:b.a.root},t,r.a.createElement("span",{className:b.a.community},r.a.createElement("a",{href:"https://community.libra.org/"},"Ask the community")," for support"),r.a.createElement("hr",null))},E={Icon:d.b,LIPTable:p.a,LIPProcessInfographic:v.a,Section:y},O=a(169),g=a.n(O),j=Object.assign(u.a,E);t.default=function(e){var t=e.route,a=e.docsMetadata,n=e.location,u=t.routes.find((function(e){return Object(m.b)(n.pathname,e)}))||{},d=a.permalinkToSidebar,p=a.docsSidebars,v=a.version,h=d[u.path]||"main",b=Object(c.a)(),y=b.siteConfig,E=(y=void 0===y?{}:y).themeConfig,O=void 0===E?{}:E,P=b.isClient,N=O.sidebarCollapsible,A=void 0===N||N;return 0===Object.keys(u).length?r.a.createElement(f.default,e):r.a.createElement(o.b,{version:v,key:P},r.a.createElement("div",{className:g.a.docPage},h&&r.a.createElement("div",{className:g.a.docSidebarContainer},r.a.createElement(s,{docsSidebars:p,path:u.path,sidebar:h,sidebarCollapsible:A})),r.a.createElement("main",{className:g.a.docMainContainer},r.a.createElement(i.a,{components:j},Object(l.a)(t.routes)))))}},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},f=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(a),d=n,p=f["".concat(c,".").concat(d)]||f[d]||m[d]||i;return a?r.a.createElement(p,l({ref:t},s,{components:a})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<i;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(0);var n=a(205),r=a.n(n),i=r.a.OVERFLOW_CONTAINER_CLASS;t.b=r.a.Layout},208:function(e,t){t.LIP_STATUS={DRAFT:"draft",LAST_CALL:"last call",ACCEPTED:"accepted",FINAL:"final",REJECTED:"rejected"},t.LIP_TYPE={CORE:"core",NETWORKING:"networking",INTERFACE:"interface",APPLICATION:"application",INFORMATIONAL:"informational",META:"meta"}},212:function(e,t,a){"use strict";var n=a(12),r=a(28),i=a(27),c=a(14),l=[].sort,o=[1,2,3];n(n.P+n.F*(c((function(){o.sort(void 0)}))||!c((function(){o.sort(null)}))||!a(213)(l)),"Array",{sort:function(e){return void 0===e?l.call(i(this)):l.call(i(this),r(e))}})},213:function(e,t,a){"use strict";var n=a(14);e.exports=function(e,t){return!!e&&n((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},214:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.index,a=e.title,n=e.username,i=(t>0?", ":"")+a;return n?r.a.createElement("a",{href:"https://github.com/"+n,target:"_blank"},i):i}},215:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));a(209),a(210),a(211),a(77);var n=/@\w+/g,r=function(e){return e.split(",").map((function(e){var t;return e.match(n)?t=e.match(n)[0].substring(1):e.trim().includes(" ")||(t=e),{title:e,username:t}}))},i=function(e){return e.split(" ").map((function(e){return""+e[0].toUpperCase()+e.substring(1)})).join("")}},216:function(e,t,a){"use strict";var n=a(9),r=a(0),i=a.n(r),c=a(203),l=a.n(c),o=a(199),s=(a(131),a(132)),u=a.n(s);t.a=function(e){return function(t){var a,r=t.id,c=Object(n.a)(t,["id"]),s=Object(o.a)().siteConfig,f=(s=void 0===s?{}:s).themeConfig,m=(f=void 0===f?{}:f).navbar,d=(m=void 0===m?{}:m).hideOnScroll,p=void 0!==d&&d;return r?i.a.createElement(e,c,i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:l()("anchor",(a={},a[u.a.enhancedAnchor]=!p,a)),id:r}),i.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#"),c.children):i.a.createElement(e,c)}}},217:function(e,t,a){"use strict";a(25),a(19),a(20),a(80),a(212);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),l=a(199),o=a(200),s=a(214),u=a(218),f=a(208),m=a(215),d=a(133),p=a.n(d),v=function(e){var t=e.authors,a=e.num,n=e.title,i=(Object(l.a)().siteConfig.themeConfig,Object(m.a)(t));return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("a",{href:Object(o.a)("/lip-"+a)},a)),r.a.createElement("td",null,n),r.a.createElement("td",null,i.map((function(e,t){var a=e.title,n=e.username;return r.a.createElement(s.a,{index:t,title:a,username:n})}))))},h=function(e){var t=e.status,a=(e.title,function(e,t){return t.reduce((function(t,a){return t.concat(u[a][e])}),[]).sort((function(e,t){return e.lip<t.lip?1:-1}))}(t,e.types));return r.a.createElement("table",{className:p.a.table},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Number"),r.a.createElement("th",{className:p.a.title},"Title"),r.a.createElement("th",null,"Author(s)"))),r.a.createElement("tbody",null,a.map((function(e){var t=e.lip,a=e.authors,n=e.title;return r.a.createElement(v,{authors:a,key:t,num:t,title:n})}))))};h.propTypes={status:c.a.oneOf(Object.values(f.LIP_STATUS)).isRequired,types:c.a.arrayOf(c.a.oneOf(Object.values(f.LIP_TYPE)))},h.defaultProps={types:Object.values(f.LIP_TYPE)},t.a=h},218:function(e){e.exports=JSON.parse('{"core":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"networking":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"interface":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"application":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]},"informational":{"draft":[{"lip":2,"title":"Libra Roles and Permissions","authors":"Sam Blackshear, Tim Zakian, Junkil Park","status":"draft","type":"informational","created":"06/26/2020"},{"lip":3,"title":"Libra Upgrade Management","authors":"Zekun Li (@zekun000)","status":"draft","type":"informational","created":"06/09/2020"},{"lip":6,"title":"Libra Validator Configuration Management","authors":"Valeria Nikolaenko, David Wolinsky, David Dill, Dahlia Malkhi","status":"draft","type":"informational","created":"07/30/2020"},{"lip":8,"title":"Off-chain API Version 1 Extensions","authors":"Kevin Hurley (@kphfb)","status":"draft","type":"informational","created":"09/18/2020"}],"last call":[{"lip":4,"title":"Transaction Metadata Specification","authors":"Kevin Hurley (@kphfb)","status":"last call","type":"informational","created":"06/26/2020"},{"lip":5,"title":"Address formatting","authors":"Dmitry Pimenov (@dpim), Kevin Hurley (@kphfb)","status":"last call","type":"informational","created":"07/08/2020"}],"accepted":[],"final":[{"lip":0,"title":"Libra Improvement Proposals","authors":"libra","status":"final","type":"informational","created":"2/26/20"},{"lip":1,"title":"Off-chain API","authors":"Kevin Hurley (@kphfb), Dmitry Pimenov, George Danezis","status":"final","type":"informational","created":"05/29/2020"}],"rejected":[]},"meta":{"draft":[],"last call":[],"accepted":[],"final":[],"rejected":[]}}')},220:function(e,t,a){"use strict";var n=a(0);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=n.createElement("path",{d:"M314.82 292.65a192 192 0 0023.31-32.92l-39.45-19.64A120.78 120.78 0 01278 266c-11 10.21-22.7 16.16-34.61 17.68-23 2.94-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24 3.08-46.06 15.66-65.44 37.39A191.89 191.89 0 000 306.13l39.44 19.64a121.7 121.7 0 0120.64-25.93c10.88-10.07 22.52-16 34.62-17.51a79.51 79.51 0 0110-.66c18.14 0 32.71 7 52.52 19.71 23 14.77 51.66 33.15 92.17 28 24.48-3.16 46.5-15.51 65.43-36.73zm0-117.48a192 192 0 0023.31-32.92l-39.45-19.64A121 121 0 01278 148.53c-11 10.21-22.7 16.16-34.61 17.68-23 2.93-39.07-4.17-62.51-19.21-24.63-15.8-52.54-33.71-92.15-28.65-24 3.08-46.06 15.65-65.44 37.39A191.5 191.5 0 000 188.65l39.44 19.64a122 122 0 0120.64-25.94C71 172.29 82.6 166.4 94.7 164.85a79.51 79.51 0 0110-.66c18.14 0 32.71 7 52.52 19.71 23 14.77 51.66 33.15 92.17 28 24.48-3.16 46.5-15.51 65.43-36.73zm0-117.48a192 192 0 0023.31-32.92L298.68 5.13A121 121 0 01278 31.05c-11 10.21-22.7 16.16-34.61 17.68-23 2.93-39.07-4.17-62.51-19.21-24.6-15.8-52.51-33.71-92.12-28.65C64.72 4 42.7 16.52 23.32 38.26A191.5 191.5 0 000 71.17l39.44 19.64a122 122 0 0120.64-25.94C71 54.81 82.6 48.92 94.7 47.37a79.51 79.51 0 0110-.66c18.14 0 32.71 7 52.52 19.71 23 14.77 51.64 33.14 92.17 28 24.48-3.16 46.5-15.51 65.43-36.73zM452.56 5.45v321.16H407V5.45zm48.09 92.44v228.72h45.6V97.89zM929.5 150.7c18.77-12.62 40.86-16.24 63-12.71v-39.8a125.23 125.23 0 00-15.42-1c-31.27 0-56.07 9.56-68 26.22l-5.6 7.78V97.63h-45.64v229h45.37v-79.58c0-14.57-.16-26.82 0-41.39.29-24.04 8.39-42.91 26.29-54.96zm300.28 175.91v-229h-42.41v25.15l-5.1-4.39c-19.87-17.1-43.94-25.77-71.54-25.77-20.55 0-39.9 5-56 14.58-37 21.87-59 61.09-59 104.92s21.88 82.74 58.53 104.42c15.9 9.44 37.38 15.08 57.46 15.08 26.92 0 52-9.14 70.49-25.73l5.15-4.61v25.33zm-60.51-57.25a73.75 73.75 0 01-51.27 23.35c-.92 0-1.82.05-2.71.05-45.5 0-81.14-35.42-81.14-80.64 0-21.28 7.64-41.26 21.52-56.26 14.55-15.72 34.84-24.38 57.12-24.38 1 0 2.1 0 3.16.05a75.59 75.59 0 0152.75 23.78 78.06 78.06 0 0121.52 54v7.44a76.41 76.41 0 01-20.95 52.61zm-455.89 62.26c20.55 0 39.9-5 56-14.58 37-21.87 59-61.09 59-104.92s-21.88-82.74-58.53-104.42c-15.9-9.44-37.39-15.08-57.47-15.08-26.91 0-51.94 9.14-70.49 25.74l-5.15 4.6V5.45h-42.4v321.16h42.4v-25.15l5.11 4.39c19.87 17.15 43.94 25.77 71.53 25.77zM633.94 215v-7.44a76.46 76.46 0 0120.9-52.64 73.78 73.78 0 0151.33-23.35c.91 0 1.81-.05 2.71-.05 45.5 0 81.14 35.42 81.14 80.64 0 21.28-7.65 41.26-21.53 56.26-14.55 15.72-34.83 24.38-57.11 24.38-1 0-2.11 0-3.16-.05a75.61 75.61 0 01-52.76-23.78A78.11 78.11 0 01633.94 215zM546.25 5.45h-45.6V51h45.6z"});t.a=function(e){return n.createElement("svg",r({fill:"#42318C",className:"logo_svg__Logo",viewBox:"0 0 1229.78 330.24"},e),i)}},222:function(e,t,a){"use strict";var n=a(1),r=a(0),i=a.n(r),c=a(207),l=a(205).CodeBlock,o=a(216),s=a(134),u=a.n(s);t.a={code:function(e){var t=e.children;return"string"==typeof t?i.a.createElement(l,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?i.a.createElement("a",e):i.a.createElement(c.a,e)},pre:function(e){return i.a.createElement("div",Object(n.a)({className:u.a.mdxCodeBlock},e))},h1:Object(o.a)("h1"),h2:Object(o.a)("h2"),h3:Object(o.a)("h3"),h4:Object(o.a)("h4"),h5:Object(o.a)("h5"),h6:Object(o.a)("h6")}},237:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(25),a(19),a(20),a(80);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),l=a(137),o=a.n(l),s={INLINE_START:"inline-start",DEFAULT:"defalt"},u=function(e){var t=e.src,a=e.type;return r.a.createElement("img",{className:o.a[a],src:t})};u.propTypes={type:c.a.oneOf(Object.values(s)),src:c.a.string.isRequired},u.defaultProps={type:s.DEFAULT},t.b=u},238:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(138),c=a.n(i);t.a=function(e){var t=e.stages;return r.a.createElement("div",{className:c.a.root},r.a.createElement("div",{className:c.a.stagesContainer},t.map((function(e,a){return r.a.createElement(r.a.Fragment,{key:e},r.a.createElement("div",{className:c.a.stage},r.a.createElement("span",{className:c.a.counter},"0",a+1),r.a.createElement("span",{className:c.a.stageName},e)),a+1!==t.length&&r.a.createElement("hr",{className:c.a.divider}))}))))}},241:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(206);t.default=function(){return r.a.createElement(i.b,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},288:function(e,t,a){"use strict";var n=a(12),r=a(289)(5),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),n(n.P+n.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(81)("find")},289:function(e,t,a){var n=a(32),r=a(62),i=a(27),c=a(24),l=a(290);e.exports=function(e,t){var a=1==e,o=2==e,s=3==e,u=4==e,f=6==e,m=5==e||f,d=t||l;return function(t,l,p){for(var v,h,b=i(t),y=r(b),E=n(l,p,3),O=c(y.length),g=0,j=a?d(t,O):o?d(t,0):void 0;O>g;g++)if((m||g in y)&&(h=E(v=y[g],g,b),e))if(a)j[g]=h;else if(h)switch(e){case 3:return!0;case 5:return v;case 6:return g;case 2:j.push(v)}else if(u)return!1;return f?-1:s||u?u:j}}},290:function(e,t,a){var n=a(291);e.exports=function(e,t){return new(n(e))(t)}},291:function(e,t,a){var n=a(15),r=a(245),i=a(2)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[i])&&(t=void 0)),void 0===t?Array:t}}}]);