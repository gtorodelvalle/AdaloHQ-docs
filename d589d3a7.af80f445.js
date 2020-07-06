(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(2),a=r(6),o=(r(0),r(117)),i={id:"getting-started",title:"Getting Started"},c={id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Overview of the Adalo developers documentation and related resources.",source:"@site/docs/getting-started.md",permalink:"/getting-started",sidebar:"docs",next:{title:"Library Standards",permalink:"/library-standards"}},l=[{value:"Library Standards",id:"library-standards",children:[]},{value:"Create a New Adalo Library",id:"create-a-new-adalo-library",children:[]},{value:"Something Missing?",id:"something-missing",children:[]}],s={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Overview of the Adalo developers documentation and related resources."),Object(o.b)("p",null,"If videos are your thing, we have a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/playlist?list=PLBUOs6aGzPnS_B3jisLbMMyjIcDB7dPaC"}),"playlist of Component Development Tutorials")),Object(o.b)("h2",{id:"library-standards"},"Library Standards"),Object(o.b)("p",null,"Each Adalo Library should strive to solve one particular use case, and solve it well. Don\u2019t be a jack of all trades. Be the master of one. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/library-standards"}),"Read More")),Object(o.b)("h2",{id:"create-a-new-adalo-library"},"Create a New Adalo Library"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"create-adalo-component")," is a powerful and quick bootstrapping tool for creating new Adalo Libraries and is the recommended way to start building a new library for Adalo. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/create-new-adalo-library"}),"Read More")),Object(o.b)("h2",{id:"something-missing"},"Something Missing?"),Object(o.b)("p",null,"If something is missing the documentation or if you found something confusing, please ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/adalohq/docs/issues/new"}),"file an issue for the documentation repository")," with your suggestions for improvement."))}d.isMDXComponent=!0},117:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=n,f=u["".concat(i,".").concat(b)]||u[b]||p[b]||o;return r?a.a.createElement(f,c(c({ref:t},s),{},{components:r})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);