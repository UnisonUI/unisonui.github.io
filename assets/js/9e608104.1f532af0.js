"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5866],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3255:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return f},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={date:"2020-06-13T20:00"},c="0.5.1",u={permalink:"/releases/0.5.1",source:"@site/changelog/source/0.5.1.md",title:"0.5.1",description:"Code Refactoring",date:"2020-06-13T20:00:00.000Z",formattedDate:"June 13, 2020",tags:[],truncated:!0,authors:[],frontMatter:{date:"2020-06-13T20:00"},prevItem:{title:"0.5.2",permalink:"/releases/0.5.2"},nextItem:{title:"0.5.0",permalink:"/releases/0.5.0"},listPageLink:"/releases/"},p={authorsImageUrls:[]},f=[{value:"\ud83d\udc7b Code Refactoring",id:"-code-refactoring",children:[],level:3},{value:"\ud83d\udcdd Documentation",id:"-documentation",children:[],level:3},{value:"\ud83d\udd27 Build",id:"-build",children:[],level:3}],s={toc:f};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"-code-refactoring"},"\ud83d\udc7b Code Refactoring"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udca1 Allow git cache, avoid cloning every time (#47)")),(0,a.kt)("h3",{id:"-documentation"},"\ud83d\udcdd Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u270f\ufe0f Changelog update")),(0,a.kt)("h3",{id:"-build"},"\ud83d\udd27 Build"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"(deps)")," Bump swagger-ui-react from 3.26.0 to 3.26.1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"(deps-dev)")," Bump exports-loader from 0.7.0 to 1.0.0 (#44)")))}m.isMDXComponent=!0}}]);