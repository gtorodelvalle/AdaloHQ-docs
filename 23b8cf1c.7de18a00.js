(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(6),o=(a(0),a(125)),l={id:"mobile-dev-toolkit",title:"Testing on Mobile"},r={id:"marketplace/testing/mobile-dev-toolkit",isDocsHomePage:!1,title:"Testing on Mobile",description:"Testing Adalo apps on mobile is a little more involved than testing on the web. Hopefully, by the end of this document, you will be able to test an Adalo app on mobile.",source:"@site/docs/marketplace/testing/mobile-dev-toolkit.md",permalink:"/marketplace/testing/mobile-dev-toolkit",sidebar:"docs",previous:{title:"Testing on Web",permalink:"/marketplace/testing/web-testing"},next:{title:"Publishing Adalo Libraries",permalink:"/marketplace/publish-new-adalo-library"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up mobile-previewer",id:"set-up-mobile-previewer",children:[]},{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"Testing local libraries",id:"testing-local-libraries",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],c={rightToc:b};function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Testing Adalo apps on mobile is a little more involved than testing on the web. Hopefully, by the end of this document, you will be able to test an Adalo app on mobile."),Object(o.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(o.b)("p",null,"If you haven't already, you will need to install several programs before continuing:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://apps.apple.com/us/app/xcode/id497799835?mt=12"}),"XCode")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.android.com/studio"}),"Android Studio")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://facebook.github.io/watchman/docs/install#buildinstall"}),"Watchman")," (For react native)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://cocoapods.org/"}),"Cocoapods")," (For iOS)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If you have Homebrew, you can install with Homebrew using ",Object(o.b)("inlineCode",{parentName:"li"},"brew install cocoapods")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node")," (>10)")),Object(o.b)("h3",{id:"set-up-mobile-previewer"},"Set up mobile-previewer"),Object(o.b)("p",null,"Clone ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/AdaloHQ/mobile-previewer"}),"@Adalo/mobile-previewer")," from Github. Run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," to install dependencies."),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("p",null,"To set up mobile-previewer for Android, you must first create a new emulator."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Follow the instructions on the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.android.com/studio/run/managing-avds#createavd"}),"Android docs"),"."),Object(o.b)("li",{parentName:"ul"},"You can access the AVD manager by clicking the gear icon in the bottom right corner of the welcome screen as well.")),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Make sure you are using API level 28 (Pie)."))),Object(o.b)("p",null,"Next, build the app."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer")," in your shell. Run ",Object(o.b)("inlineCode",{parentName:"li"},"yarn start"),"."),Object(o.b)("li",{parentName:"ul"},"Create another tab, and navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"mobile previewer")," again. Run ",Object(o.b)("inlineCode",{parentName:"li"},"npx react-native run-android"),"."),Object(o.b)("li",{parentName:"ul"},"It will now build the ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer")," app and install it on the emulator.")),Object(o.b)("p",null,"You should be all set to go with Android!"),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("p",null,"First, make sure you have cocoapods installed. If you don't, you can install with Homebrew: ",Object(o.b)("inlineCode",{parentName:"p"},"brew install cocoapods"),"."),Object(o.b)("p",null,"Install pods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer/ios")," in your shell."),Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"pod install"))),Object(o.b)("p",null,"Build app:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer/ios"),"."),Object(o.b)("li",{parentName:"ul"},"Open AdaloApp.xcworkspace with XCode. ",Object(o.b)("em",{parentName:"li"},"This will take a while")),Object(o.b)("li",{parentName:"ul"},'Press the "play" button in the upper left corner. This will build the app, open the iOS simulator, and install the app on it.')),Object(o.b)("p",null,"Similar to Android, make sure the react-native packager is running by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn start")," inside of ",Object(o.b)("inlineCode",{parentName:"p"},"mobile-previewer"),"."),Object(o.b)("p",null,"That should be it! You should now be able to access any apps you've created with Adalo and run them on iOS or Android."),Object(o.b)("p",null,"If you're developing custom components or testing changes to ",Object(o.b)("inlineCode",{parentName:"p"},"runner")," (Adalo developers only), keep reading."),Object(o.b)("h3",{id:"testing-local-libraries"},"Testing local libraries"),Object(o.b)("p",null,"Instead of running a local development server to test a local library (such as a custom component or any Adalo libraries), you must install them into template-app. To do so, follow these steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer/package.json"),", and add your package in the list of dependencies."),Object(o.b)("li",{parentName:"ul"},"Instead of specifying a version, put the relative path to your package. For example, if I were trying to add my stopwatch component, I would add the line: ",Object(o.b)("inlineCode",{parentName:"li"},'"stopwatch": "../stopwatch",')," under dependencies."),Object(o.b)("li",{parentName:"ul"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"yarn")," inside of ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer"),". Your package should be installed now."),Object(o.b)("li",{parentName:"ul"},"If you're an Adalo developer working on an Adalo package, simply replace the version number with the relative path to the package locally."),Object(o.b)("li",{parentName:"ul"},"If you're working on a custom component, and your library includes a package that has native code, you ",Object(o.b)("strong",{parentName:"li"},"must")," add that package as a direct dependency. For example, when testing my ",Object(o.b)("inlineCode",{parentName:"li"},"audio-player")," component I must also add ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-track-player")," as a direct dependency because that library has native code in it. This must be done for linking purposes.",Object(o.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-important alert alert--info"}),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Important: When Adalo builds your library from the component marketplace, we will automatically check to see if your library has dependencies that have native code, and will add them for you."))))),Object(o.b)("p",null,"Next, you must modify ",Object(o.b)("inlineCode",{parentName:"p"},"mobile-previewer/libraries.js")," so that Adalo will recognize your package as an Adalo library:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer/libraries.js")),Object(o.b)("li",{parentName:"ul"},"Add a line under imports like this: ",Object(o.b)("inlineCode",{parentName:"li"},"import * as lib<X> from '<library-name>'"),", where <X",">"," is the next number, i.e. lib3, and <library-name",">"," is the name of your library."),Object(o.b)("li",{parentName:"ul"},"Add a line under ",Object(o.b)("inlineCode",{parentName:"li"},"export default")," like this: ",Object(o.b)("inlineCode",{parentName:"li"},"<library-name>: lib<X>,")," where <library-name",">"," is the name of your library, and <X",">"," is the same number you used above.")),Object(o.b)("p",null,"After completing those steps, you should be good to go!"),Object(o.b)("p",null,"If you modify any code in your library, your changes ",Object(o.b)("strong",{parentName:"p"},"will not")," be automatically reflected in the code. In order to refresh ",Object(o.b)("inlineCode",{parentName:"p"},"mobile-previewer"),", you must reinstall the dependencies using ",Object(o.b)("inlineCode",{parentName:"p"},"yarn --force"),".\nAlternatively, you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wix/wml"}),"wml"),", a tool that uses watchman to make concrete symlinks. If you use wml, changes will be automatically reflected and hot-reloaded. This saves a lot of time."),Object(o.b)("p",null,"If your component requires custom configuration, you can instruct the Adalo build system to make these changes using install scripts. See the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/marketplace/getting-started"}),"component developer docs")," or the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://youtu.be/6VAdoYKaNgc"}),"tutorial video")," to learn how."),Object(o.b)("h3",{id:"troubleshooting"},"Troubleshooting"),Object(o.b)("p",null,"This section will organically grow over time as developers run into more build issues..."),Object(o.b)("h4",{id:"common-build-issues-and-how-to-fix-them-android"},"Common build issues and how to fix them (Android):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you run into an error that looks like: ",Object(o.b)("inlineCode",{parentName:"li"},"java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Update gradle. To do so, open ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer/android/gradle/wrapper/gradle-wrapper.properties"),". Change ",Object(o.b)("inlineCode",{parentName:"li"},"distributionUrl")," to be: ",Object(o.b)("inlineCode",{parentName:"li"},"distributionUrl=https\\://services.gradle.org/distributions/gradle-6.3-all.zip"),"."))),Object(o.b)("li",{parentName:"ul"},'If you run into an error that looks like "Missing SDK path".',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add a new file ",Object(o.b)("inlineCode",{parentName:"li"},"mobile-previewer/android/local.properties"),", which will only have one line: ",Object(o.b)("inlineCode",{parentName:"li"},"sdk.dir=/path/to/android/sdk/locally"),". On mac, this path will look like ",Object(o.b)("inlineCode",{parentName:"li"},"/Users/username/Library/Android/sdk"),", where ",Object(o.b)("inlineCode",{parentName:"li"},"username")," is your username. ")))),Object(o.b)("h4",{id:"common-build-issues-and-how-to-fix-them-ios"},"Common build issues and how to fix them (iOS):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pod install")," fails on line ",Object(o.b)("inlineCode",{parentName:"li"},"use_native_modules!"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Make sure Node is properly installed. Run ",Object(o.b)("inlineCode",{parentName:"li"},"node -v"),". If this fails, download and run the node js installer from their website."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pod install"),' fails with an error that looks like "SDK "iphoneos" cannot be located"',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You likely installed XCode's command line tools separately before installing XCode's editor. See ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ryadel.com/en/xcode-sdk-iphoneos-cannot-be-located-mac-osx-error-fix/"}),"this")," post for more details.")))))}p.isMDXComponent=!0},125:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(l,".").concat(u)]||s[u]||d[u]||o;return a?i.a.createElement(m,r(r({ref:t},c),{},{components:a})):i.a.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<o;c++)l[c]=a[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);