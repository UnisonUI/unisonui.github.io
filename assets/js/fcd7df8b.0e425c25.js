"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5789],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||o;return t?r.createElement(f,a(a({ref:n},l),{},{components:t})):r.createElement(f,a({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5100:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],u={sidebar_position:1,title:"Usage",description:"Up and running in under a minute"},c="Getting started with UnisonUI",s={unversionedId:"getting-started/usage",id:"version-1.0.0/getting-started/usage",title:"Usage",description:"Up and running in under a minute",source:"@site/versioned_docs/version-1.0.0/getting-started/usage.md",sourceDirName:"getting-started",slug:"/getting-started/usage",permalink:"/docs/getting-started/usage",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Usage",description:"Up and running in under a minute"},sidebar:"tutorialSidebar",next:{title:"Configuration",permalink:"/docs/getting-started/configuration"}},l=[{value:"Running UnisonUI",id:"running-unisonui",children:[{value:"Docker",id:"docker",children:[],level:3},{value:"Binary",id:"binary",children:[],level:3}],level:2}],p={toc:l};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-unisonui"},"Getting started with UnisonUI"),(0,o.kt)("h2",{id:"running-unisonui"},"Running UnisonUI"),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull unisonui/unisonui\ndocker run -p 8080:8080 unisonui/unisonui\n")),(0,o.kt)("p",null,"More information about configuring UnisonUI can be found here."),(0,o.kt)("p",null,"In addition to the previous configuration method you can use variable\nenvironments in order to configure it."),(0,o.kt)("p",null,"For that take the path, uppercase it and replace the ",(0,o.kt)("inlineCode",{parentName:"p"},".")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"-"),"\nrespectively by ",(0,o.kt)("inlineCode",{parentName:"p"},"_")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"__"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -p 8081:8081 -e UNISONUI_HTTP_PORT=8081 unisonui/unisonui\n")),(0,o.kt)("h3",{id:"binary"},"Binary"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"WARNING"),": UnisonUI requires ",(0,o.kt)("em",{parentName:"p"},"Java 11+")," in order to run."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"You can download the binary here."),(0,o.kt)("p",null,"Once downloaded unzip the package, go to the created folder and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl -L https://github.com/UnisonUI/unisonui/releases/download/v1.0.0/unisonui.zip -o unisonui.zip # Download the package\nunzip unisonui.zip # Unzip the package\ncd unisonui # Go to the extracted folded\nbin/unisonui # Start UnisonUI\n")),(0,o.kt)("p",null,"More information about how to configure UnisonUI can be found ",(0,o.kt)("a",{parentName:"p",href:"./configuration/"},"here"),"."))}d.isMDXComponent=!0}}]);