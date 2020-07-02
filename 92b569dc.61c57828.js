(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return o}));var a=n(2),l=(n(0),n(117));const b={id:"manifest-json",title:"manifest.json"},i={id:"manifest-json",isDocsHomePage:!1,title:"manifest.json",description:"A manifest file describes the properties that a particular component accepts, and which controls to display in the Adalo editor. Think of them like React PropTypes, but with types specific to Adalo. You should have one manifest file per component in your library.",source:"@site/docs/manifest-json.md",permalink:"/manifest-json",sidebar:"docs",previous:{title:"package.json",permalink:"/package-json"}},r=[{value:"Keys",id:"keys",children:[{value:"<code>displayName</code>",id:"displayname",children:[]},{value:"<code>defaultWidth</code>",id:"defaultwidth",children:[]},{value:"<code>defaultHeight</code>",id:"defaultheight",children:[]},{value:"<code>props</code>",id:"props",children:[]},{value:"<code>childComponents</code>",id:"childcomponents",children:[]},{value:"<code>icon</code>",id:"icon",children:[]},{value:"<code>resizeX</code>",id:"resizex",children:[]},{value:"<code>resizeY</code>",id:"resizey",children:[]}]},{value:"Props",id:"props-1",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>displayName</code>",id:"displayname-1",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>hidden</code>",id:"hidden",children:[]},{value:"<code>default</code>",id:"default",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>control</code>",id:"control",children:[]},{value:"<code>role</code>",id:"role",children:[]},{value:"<code>reference</code>",id:"reference",children:[]},{value:"<code>dynamic</code>",id:"dynamic",children:[]}]},{value:"Reserved Prop Names",id:"reserved-prop-names",children:[{value:"<code>enabled</code>",id:"enabled-1",children:[]}]},{value:"Controls Reference",id:"controls-reference",children:[{value:"Menu Example",id:"menu-example",children:[]},{value:"Slider Example",id:"slider-example",children:[]}]},{value:"Child Components",id:"child-components",children:[{value:"Example",id:"example-8",children:[]},{value:"Keys",id:"keys-1",children:[]}]},{value:"Lists",id:"lists",children:[{value:"List Prop Type",id:"list-prop-type",children:[]},{value:"Other Props",id:"other-props",children:[]},{value:"Child Components",id:"child-components-1",children:[]},{value:"Example",id:"example-9",children:[]}]},{value:"Actions",id:"actions",children:[{value:"Arguments",id:"arguments",children:[]}]}],c={rightToc:r};function o({components:e,...t}){return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A manifest file describes the properties that a particular component accepts, and which controls to display in the Adalo editor. Think of them like React PropTypes, but with types specific to Adalo. You should have one manifest file per component in your library."),Object(l.b)("h2",{id:"keys"},"Keys"),Object(l.b)("p",null,"Manifests include several important properties that help inform Adalo which controls to show in the Editor."),Object(l.b)("h3",{id:"displayname"},Object(l.b)("inlineCode",{parentName:"h3"},"displayName")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"String"))),Object(l.b)("p",null,"The name of the component that will be shown in the editor"),Object(l.b)("h4",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "displayName": "Your Component Name"\n}\n')),Object(l.b)("h3",{id:"defaultwidth"},Object(l.b)("inlineCode",{parentName:"h3"},"defaultWidth")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"integer"))),Object(l.b)("p",null,"The width of a new component instance"),Object(l.b)("h4",{id:"example-1"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "defaultWidth": 160\n}\n')),Object(l.b)("h3",{id:"defaultheight"},Object(l.b)("inlineCode",{parentName:"h3"},"defaultHeight")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"integer"))),Object(l.b)("p",null,"The height of a new component instance"),Object(l.b)("h4",{id:"example-2"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "defaultHeight": 24\n}\n')),Object(l.b)("h3",{id:"props"},Object(l.b)("inlineCode",{parentName:"h3"},"props")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Array"))),Object(l.b)("p",null,"List of top-level props. See Props"),Object(l.b)("h3",{id:"childcomponents"},Object(l.b)("inlineCode",{parentName:"h3"},"childComponents")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Array"))),Object(l.b)("p",null,"List of child components. See Child Components"),Object(l.b)("h3",{id:"icon"},Object(l.b)("inlineCode",{parentName:"h3"},"icon")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"String")),Object(l.b)("li",{parentName:"ul"},"Format: Relative path to image"),Object(l.b)("li",{parentName:"ul"},"Allowed File Extensions: ",Object(l.b)("inlineCode",{parentName:"li"},".png")),Object(l.b)("li",{parentName:"ul"},"Dimensions:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"min-height: 268px")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"min-width: 312px"))))),Object(l.b)("p",null,"The path to the icon for this component. This will be used as a thumbnail in the Components Panel."),Object(l.b)("h4",{id:"example-icon"},"Example Icon"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/static/img/example-icon.png",alt:"Example icon for a Libraries Component"}))),Object(l.b)("h3",{id:"resizex"},Object(l.b)("inlineCode",{parentName:"h3"},"resizeX")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Boolean")),Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("inlineCode",{parentName:"li"},"true"))),Object(l.b)("p",null,"Whether the component can be horizontally resized"),Object(l.b)("h3",{id:"resizey"},Object(l.b)("inlineCode",{parentName:"h3"},"resizeY")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Boolean")),Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"))),Object(l.b)("p",null,"Whether the component can be vertically resized"),Object(l.b)("h2",{id:"props-1"},"Props"),Object(l.b)("p",null,"Props is a list of properties that can be set on a particular component, with their types, default values, and other constraints."),Object(l.b)("h3",{id:"name"},Object(l.b)("inlineCode",{parentName:"h3"},"name")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"String"))),Object(l.b)("p",null,"Technical name of the prop. This should be the same as the react component prop name. See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#reserved-prop-names"}),"Reserved Prop Names")),Object(l.b)("h4",{id:"example-3"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "name": "propName"\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"displayname-1"},Object(l.b)("inlineCode",{parentName:"h3"},"displayName")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"String"))),Object(l.b)("p",null,"The name to show in the Adalo editor and displayed to the end user"),Object(l.b)("h4",{id:"example-4"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "displayName": "My Component"\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"enabled"},Object(l.b)("inlineCode",{parentName:"h3"},"enabled")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Object"))),Object(l.b)("p",null,"This is used to show or hide this specific prop based on the value of another prop. To use, pass an object with a single key (the prop name) and value (the desired value)"),Object(l.b)("h4",{id:"example-5"},"Example"),Object(l.b)("p",null,'For example { "type": "outlined" } would cause this particular prop to be disabled / invisible unless the prop named "type" had the value "outlined"'),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "enabled": {\n        "type": "outlined"\n      }\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"hidden"},Object(l.b)("inlineCode",{parentName:"h3"},"hidden")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Boolean")),Object(l.b)("li",{parentName:"ul"},"Default: ",Object(l.b)("inlineCode",{parentName:"li"},"false"))),Object(l.b)("p",null,"Whether or not to show this prop in the UI. Useful for ",Object(l.b)("inlineCode",{parentName:"p"},"formChangeHandler")," or anywhere that you want the default value to be passed."),Object(l.b)("h4",{id:"example-6"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "hidden": true\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"default"},Object(l.b)("inlineCode",{parentName:"h3"},"default")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Any"))),Object(l.b)("p",null,"The default value of this prop"),Object(l.b)("h3",{id:"type"},Object(l.b)("inlineCode",{parentName:"h3"},"type")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"String"))),Object(l.b)("p",null,"The type of value that is expected"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"text")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Arbitrary text. This may be either static or dynamic.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Arbitrary number.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Boolean value. This will display a checkbox.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"icon")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The name of a material icon to use. For a full list of possible icon name, see ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://oblador.github.io/react-native-vector-icons/"}),"Material Icons"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A color string: ",Object(l.b)("inlineCode",{parentName:"td"},"#ffffff")," or ",Object(l.b)("inlineCode",{parentName:"td"},"rgba(255, 255, 255, 1)"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"date")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"https://en.wikipedia.org/wiki/ISO_8601"}),"ISO-8601")," date string: ",Object(l.b)("inlineCode",{parentName:"td"},'"2018-01-01T00:00:00.000Z"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"list")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An array of dynamic data. See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#lists"}),"Lists"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"action")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A user action such as linking to another page, calling an API, etc. Your component will receive a function returning a promise. The promise will return when all of the associated actions have completed.")))),Object(l.b)("h4",{id:"example-7"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "props": [\n    {\n      "type": "text"\n    }\n  ]\n}\n')),Object(l.b)("h3",{id:"control"},Object(l.b)("inlineCode",{parentName:"h3"},"control")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Object"))),Object(l.b)("p",null,"Customize the type of control presented to the user"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"type")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The type of control to use: See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#controls-reference"}),"Controls Reference"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dependent on ",Object(l.b)("inlineCode",{parentName:"td"},"type"),": See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#controls-reference"}),"Controls Reference"))))),Object(l.b)("h3",{id:"role"},Object(l.b)("inlineCode",{parentName:"h3"},"role")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"String"))),Object(l.b)("p",null,"Designate this as a special prop."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Key"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"listItem")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This prop will be a list child: See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:""}),"Lists"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"formValue")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This prop is the ",Object(l.b)("inlineCode",{parentName:"td"},"value")," of a controlled input")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"formChangeHandler")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"This prop is the ",Object(l.b)("inlineCode",{parentName:"td"},"onChange")," of a controlled input: ",Object(l.b)("inlineCode",{parentName:"td"},"type")," should be ",Object(l.b)("inlineCode",{parentName:"td"},'"action"'))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"autosaveInput")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Instead of the normal value, this prop will pass a ",Object(l.b)("inlineCode",{parentName:"td"},"{ value, onChange }")," object that can be used like a react ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:""}),"Controlled Component"),". Value will be typed based on ",Object(l.b)("inlineCode",{parentName:"td"},"type"),", and ",Object(l.b)("inlineCode",{parentName:"td"},"onChange")," will be a function that takes a single argument, ",Object(l.b)("inlineCode",{parentName:"td"},"newValue"))))),Object(l.b)("h3",{id:"reference"},Object(l.b)("inlineCode",{parentName:"h3"},"reference")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"String"))),Object(l.b)("p",null,"Used in conjunction with ",Object(l.b)("inlineCode",{parentName:"p"},"role")," to reference a related prop."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"If role is ",Object(l.b)("inlineCode",{parentName:"li"},'"listItem"')," this should be a prop with ",Object(l.b)("inlineCode",{parentName:"li"},'type: "list"')),Object(l.b)("li",{parentName:"ul"},"If role is ",Object(l.b)("inlineCode",{parentName:"li"},'"formChangeHandler"')," this should be the ",Object(l.b)("inlineCode",{parentName:"li"},'"formValue"')," prop name")),Object(l.b)("h3",{id:"dynamic"},Object(l.b)("inlineCode",{parentName:"h3"},"dynamic")),Object(l.b)("h2",{id:"reserved-prop-names"},"Reserved Prop Names"),Object(l.b)("h3",{id:"enabled-1"},Object(l.b)("inlineCode",{parentName:"h3"},"enabled")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Type: ",Object(l.b)("inlineCode",{parentName:"li"},"Boolean"))),Object(l.b)("p",null,"This will be displayed as a switch if present in a child component's props"),Object(l.b)("h2",{id:"controls-reference"},"Controls Reference"),Object(l.b)("p",null,"To customize the control for a prop, you can pass an object containing type and options to the control key of a prop. The available types of controls are:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Keys"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"text")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for text and number props"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"dynamic")," (",Object(l.b)("inlineCode",{parentName:"td"},"Boolean")," ","|"," Default: ",Object(l.b)("inlineCode",{parentName:"td"},"true"),") - whether or not to allow dynamic text")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"checkbox")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for boolean props"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"no options"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"icon")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for icon props"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"no options"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"color")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for color props"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"no options"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"action")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the default for action props"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("em",{parentName:"td"},"no options"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"menu")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"special control type for text and number props"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"options")," (",Object(l.b)("inlineCode",{parentName:"td"},"Array"),") - see ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#menu-example"}),"Menu Example")," below")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"slider")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"special control type for number props that adds a slider to control the value"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"min")," / ",Object(l.b)("inlineCode",{parentName:"td"},"max"))))),Object(l.b)("h3",{id:"menu-example"},"Menu Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[{ "label": "Hello World", "value": "helloWorld" }]\n')),Object(l.b)("h3",{id:"slider-example"},"Slider Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "name": "slider",\n  "displayName": "Slider",\n  "type": "number",\n  "control": {\n    "type": "slider",\n    "min": 1,\n    "max": 100\n  }\n}\n')),Object(l.b)("h2",{id:"child-components"},"Child Components"),Object(l.b)("p",null,"Child components allow you to specify props for child components within your component. For example, if you create a button component, and have props specific to the icon in that button, you can optionally place those props within the ",Object(l.b)("inlineCode",{parentName:"p"},"childComponents")," section."),Object(l.b)("h3",{id:"example-8"},"Example"),Object(l.b)("p",null,"Child component props will then be passed to your component in a nested format."),Object(l.b)("p",null,"If you have the following in your ",Object(l.b)("inlineCode",{parentName:"p"},"manifest.json")," file:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  childComponents: [\n    {\n      "name": "rightIcon",\n      "displayName": "Right Icon",\n      "props": [\n        {\n          "name": "icon",\n          "displayName": "Icon",\n          "type": "icon",\n          "default": "arrow-back"\n        }\n      ]\n    }\n  ]\n}\n')),Object(l.b)("p",null,"Then your component will receive the following props:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...,\n  "rightIcon": {\n    "icon": "arrow-back"\n  }\n}\n')),Object(l.b)("h3",{id:"keys-1"},"Keys"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"name")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the technical name of the child component")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"displayName")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the name to display in the Adalo editor")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"props")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"a list of props for the child component. See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#props"}),"Props"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"role")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the role of this child component. See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#lists"}),"Lists"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"reference")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"the ",Object(l.b)("inlineCode",{parentName:"td"},"name")," of a top-level prop to which this child component is related. See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#lists"}),"Lists"))))),Object(l.b)("h2",{id:"lists"},"Lists"),Object(l.b)("p",null,"Components that intend to display dynamic lists of content must conform to a particular format in order to receive the necessary information."),Object(l.b)("h3",{id:"list-prop-type"},"List Prop Type"),Object(l.b)("p",null,"Lists must have one top-level prop of type ",Object(l.b)("inlineCode",{parentName:"p"},"list"),". The name of this prop will be referenced in child components."),Object(l.b)("h3",{id:"other-props"},"Other Props"),Object(l.b)("p",null,"Other top-level ",Object(l.b)("inlineCode",{parentName:"p"},"props")," that related to the ",Object(l.b)("inlineCode",{parentName:"p"},"list")," prop can be denoted with the following attributes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'role: "listItem"')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'reference: "YOUR_LIST_PROP"'))),Object(l.b)("p",null,"This is applicable to both actions and normal props. Then the props passed to your component will be nested under ",Object(l.b)("inlineCode",{parentName:"p"},"YOUR_LIST_PROP"),"."),Object(l.b)("h3",{id:"child-components-1"},"Child Components"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"childComponents")," items can also be given the ",Object(l.b)("inlineCode",{parentName:"p"},'role: "listItem"')," and ",Object(l.b)("inlineCode",{parentName:"p"},"ref")," attributes to be considered list item props."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'role: "listItem"')),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'reference: "YOUR_LIST_PROP"'))),Object(l.b)("p",null,"Then the props passed to your component will be nested within the list items of ",Object(l.b)("inlineCode",{parentName:"p"},"YOUR_LIST_PROP")," instead of at the top level."),Object(l.b)("h3",{id:"example-9"},"Example"),Object(l.b)("p",null,"The easiest way to understand this is by looking at a simple example. Let's say you are building a simple list component."),Object(l.b)("h4",{id:"manifestjson"},Object(l.b)("inlineCode",{parentName:"h4"},"manifest.json")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  props: [\n    {\n      "name": "listItems",\n      "displayName": "Select list items",\n      "type": "list"\n    }\n  ],\n  "childComponents: [\n     {\n       "name": "itemTitle",\n       "role": "listItem",\n       "reference": "listItems",\n       "props": [\n         {\n           "name": "text",\n           "displayName": "Text",\n           "type": "text",\n           "default": "Some title text"\n         }\n       ]\n     }\n  ]\n}\n')),Object(l.b)("h4",{id:"props-2"},"Props"),Object(l.b)("p",null,"Then our component would receive the following props:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "listItems": [\n    "id": "1",\n    "itemTitle": {\n        "text": "Some title text"\n    }\n  ]\n}\n')),Object(l.b)("h2",{id:"actions"},"Actions"),Object(l.b)("h3",{id:"arguments"},"Arguments"),Object(l.b)("p",null,"Whenever you call Adalo actions, you can give that action arguments, and those arguments will be available as magic text in the edit action panel."),Object(l.b)("p",null,"To make the argument to show up in the magic text selector, you must specify the argument in the manifest.json:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "props": [\n    {\n      "name": "testAction",\n      "displayName": "Action",\n      "type": "action",\n      "arguments": [\n        {\n          "type": "number",\n          "displayName": "Time (milliseconds)",\n        },\n      ]\n    }\n  ]\n}\n')),Object(l.b)("p",null,"Each argument needs two options: displayName and type. Type refers to the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#type"}),"Adalo datatypes"),", excluding list and action."),Object(l.b)("p",null,"When you call the action in your code, you just have to call the action with the intended arguments:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { testAction } = this.props\ntestAction(arg1, arg2)\n")))}o.isMDXComponent=!0},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),l=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),p=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},j=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(n),j=a,O=d["".concat(i,".").concat(j)]||d[j]||m[j]||b;return n?l.a.createElement(O,r(r({ref:t},o),{},{components:n})):l.a.createElement(O,r({ref:t},o))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=j;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var o=2;o<b;o++)i[o]=n[o];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);