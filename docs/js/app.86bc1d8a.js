(function(t){function e(e){for(var s,r,o=e[0],l=e[1],p=e[2],c=0,u=[];c<o.length;c++)r=o[c],a[r]&&u.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);h&&h(e);while(u.length)u.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/splitpanes/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var h=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0312":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),a=n("ce5b"),i=n.n(a);n("bf40"),n("15f5");s["default"].use(i.a,{iconfont:["md","fa"],theme:{primary:"#42b983",lightgrey:"#eee"}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"white"},[s("v-container",[s("div",{staticClass:"text-xs-center"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05"),height:"40"}}),s("h1",{staticClass:"mb-3 headline"},[t._v("Vue Split Panes")]),s("p",{staticClass:"subheading"},[t._v("A Vue JS reliable, simple and touch-ready panes splitter / resizer.")])]),s("v-layout",{attrs:{row:""}},[s("v-flex",[s("h2",{staticClass:"mt-5 mb-2 title"},[t._v("Features")]),s("ul",[s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Nesting supported")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Light weight & no dependencies other than Vue JS")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Responsive")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Support for touch devices")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Push other panes or not")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Adding panes on the fly automatically adds splitters")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Don't bother with verbose children syntax, it's automatic")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Simple yet efficient")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("More features to come!")],1)])]),s("div",[s("div",{staticClass:"mt-5 mb-3 title"},[t._v("Github project")]),s("v-layout",{staticClass:"mb-5",attrs:{"align-center":"",shrink:""}},[s("v-icon",{staticClass:"pr-4 lightgrey--text",attrs:{"x-large":""}},[t._v("fab fa-github")]),s("a",{attrs:{href:"https://github.com/antoniandre/splitpanes",target:"_blank"}},[t._v("//github.com/antoniandre/splitpanes "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)],1)],1)],1),s("h2",{staticClass:"mt-5 mb-2 subheading"},[t._v("# Demo - try it yourself:"),s("a",{staticClass:"ml-2 d-inline-flex align-center",attrs:{href:"https://codepen.io/antoniandre/pen/XybPKP",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/XybPKP"),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"default-theme example example1",staticStyle:{height:"400px"}},[s("span",{attrs:{"splitpanes-min":"20"}},[t._v("1"),s("br"),s("em",{staticClass:"specs"},[t._v("I have a min width of 20%")])]),s("splitpanes",{staticClass:"default-theme example",attrs:{horizontal:""}},[s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")])]),s("span",[t._v("5")])],1),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes style="height: 400px">\n  <span splitpanes-min="20">1</span>\n  <splitpanes horizontal>\n    <span>2</span>\n    <span>3</span>\n    <span>4</span>\n  </splitpanes>\n  <span>5</span>\n</splitpanes>')]),s("ssh-pre",{pre:!0,attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes__pane {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.splitpanes__pane span {\n  font-family: Helvetica, Arial, sans-serif;\n  color: #fff;\n  font-size: 5em;\n  opacity: 0.6;\n}\n")]),s("h2",{staticClass:"mt-5 mb-2 headline"},[s("a",{attrs:{href:"#installation"}},[t._v("Installation")]),s("a",{attrs:{name:"installation"}})]),s("p",[t._v("You have two options: "),s("em",[t._v("NPM")]),s("strong",{staticClass:"mx-2"},[t._v("or")]),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag.")]),s("h3",[t._v("Via NPM")]),s("ssh-pre",{attrs:{language:"shell",label:"Shell"}},[t._v("npm install splitpanes --save-dev")]),s("p",[t._v("Then import the component and CSS:")]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("// In your VueJS component.\nimport { Splitpanes } from 'splitpanes'\nimport 'splitpanes/dist/splitpanes.css'\n\nexport default {\n  components: { Splitpanes },\n  ...\n}\n")]),s("h3",[t._v("Via "),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag")]),s("p",[t._v("Include the Splitpanes script in your document "),s("span",{staticClass:"code"},[t._v("<head>")]),t._v(" as follows:")]),s("ssh-pre",{attrs:{language:"html",label:"HTML"}},[t._v('<head>\n  ...\n  <script src="https://unpkg.com/vue"><\/script>\n  <script src="https://unpkg.com/splitpanes"><\/script>\n  <link href="https://unpkg.com/splitpanes/dist/splitpanes.css" rel="stylesheet">\n</head>\n')]),s("h2",{staticClass:"mt-5 mb-2"},[s("a",{staticClass:"headline",attrs:{href:"#how-to-use"}},[t._v("How to use")]),s("a",{attrs:{name:"how-to-use"}})]),s("p",[t._v("Once included in your project, use as follows.\n")]),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes class="default-theme">\n  <div v-for="i in 3" :key="i">{{ i }}</div>\n</splitpanes>\n')]),s("highlight-message",{attrs:{type:"success"}},[s("strong",[t._v("Have you noticed? No splitter tags and just use your own tags as you want,\nsplitpanes will do the rest!"),s("br")]),s("span",[t._v("All the direct children of the "),s("span",{staticClass:"code"},[t._v("<splitpanes>")]),t._v(" tag will be\nwrapped into panes & the splitters will be added automatically between them.\n")])]),s("highlight-message",{attrs:{type:"tips"}},[t._v("By default the layout is 'column' (vertical), if you need you can set the attribute\n"),s("span",{staticClass:"code"},[t._v("horizontal")]),t._v(" on the "),s("span",{staticClass:"code"},[t._v("<splitpanes>")]),t._v(" tag to change the layout to rows.\n")]),s("highlight-message",{attrs:{type:"tips"}},[t._v("The CSS is external so you can easily override or choose not to include it at all."),s("br"),t._v("\nIf you want to use it, you can also optionally use the CSS class "),s("span",{staticClass:"code"},[t._v("default-theme")]),t._v("\nat the root of your splitpanes to apply the default theme like on this page."),s("br"),t._v("\nIf you want to go with your own style, you can check the "),s("a",{attrs:{href:"#do-your-own-style"}},[t._v("Do Your Own Style example")]),t._v(".\n")]),s("h2",{staticClass:"mt-5 mb-2 headline"},[s("a",{attrs:{href:"#more-examples"}},[t._v("More examples")]),s("a",{attrs:{name:"more-examples"}})]),s("h3",{staticClass:"mb-2 subheading"},[s("a",{attrs:{href:"#horizontal-layout"}},[t._v("# Horizontal layout & push other panes")]),s("a",{attrs:{name:"horizontal-layout"}})]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("span",{attrs:{"splitpanes-min":"25"}},[t._v("1"),s("br"),s("em",{staticClass:"specs"},[t._v("I have a min height of 25%")])]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme" horizontal style="height:400px">\n  <span>1</span>\n  <span>2</span>\n  <span>3</span>\n</splitpanes>\n')]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#nested-splitpanes"}},[t._v("# Mix layout with nested splitpanes & prevent pushing other panes")]),s("a",{attrs:{name:"nested-splitpanes"}})]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/PypgKY",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/PypgKY "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"},attrs:{horizontal:"","push-other-panes":!1}},[s("span",[t._v("1")]),s("splitpanes",{attrs:{"push-other-panes":!1}},[s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")])]),s("span",[t._v("5")])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme" horizontal :push-other-panes="false" style="height:400px">\n  <span>1</span>\n  <splitpanes :push-other-panes="false">\n    <span>2</span>\n    <span>3</span>\n    <span>4</span>\n  </splitpanes>\n  <span>5</span>\n</splitpanes>\n')]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#lots-of-splitters"}},[t._v("# Lots of splitters & push other panes - all panes have a min width of 5%")]),s("a",{attrs:{name:"lots-of-splitters"}})]),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"}},t._l(8,function(e){return s("span",{key:e,attrs:{"splitpanes-min":"5"}},[t._v(t._s(e))])})),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme" style="height:400px">\n  <span v-for="i in 8" :key="i" splitpanes-min="5">{{ i }}</span>\n</splitpanes>\n')]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#adding-splitters-on-the-fly"}},[t._v("# Adding splitters on the fly")]),s("a",{attrs:{name:"adding-splitters-on-the-fly"}})]),s("p",[t._v("This example shows the reactivity when you add a new element dynamically in splitpanes."),s("v-btn",{attrs:{color:"primary",small:""},on:{click:function(e){t.panesNumber++}}},[s("v-icon",[t._v("add")]),t._v("Add pane")],1)],1),s("splitpanes",{staticClass:"default-theme example",staticStyle:{height:"400px"}},t._l(t.panesNumber,function(e){return s("span",{key:e},[t._v(t._s(e))])})),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML"}},[t._v('<button @click="panesNumber++">Add pane</button>\n\n<splitpanes class="default-theme" style="height:400px">\n  <span v-for="i in panesNumber" :key="i">{{ i }}</span>\n</splitpanes>\n')]),s("ssh-pre",{pre:!0,attrs:{language:"js",label:"Javascript"}},[t._v("// In your Vue component.\ndata: () => ({\n  panesNumber: 3\n})\n")]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#increased-touch-zone"}},[t._v("# Increased reactive touch zone for touch devices")]),s("a",{attrs:{name:"increased-touch-zone"}})]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/XxRZmB",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/XxRZmB "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"touch-example",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("splitpanes",{staticClass:"touch-example"},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("div",{staticClass:"text"},[s("p",[t._v("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!\n"),s("em",[t._v("Hover a splitter to see the Fat-fingers reactive zone. ")])])])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes class="default-theme touch-example" horizontal style="height:400px">\n  <splitpanes :push-other-panes="false">\n    <span>1</span>\n    <span>2</span>\n    <span>3</span>\n  </splitpanes>\n  <p>In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!</p>\n</splitpanes>\n')]),s("ssh-pre",{attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes {background-color: #f8f8f8;}\n\n.splitpanes__splitter {background-color: #ccc;position: relative;}\n.splitpanes__splitter:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: opacity 0.4s;\n  background-color: rgba(255, 0, 0, 0.3);\n  opacity: 0;\n  z-index: 1;\n}\n.splitpanes__splitter:hover:before {opacity: 1;}\n.splitpanes--vertical > .splitpanes__splitter:before {left: -30px;right: -30px;height: 100%;}\n.splitpanes--horizontal > .splitpanes__splitter:before {top: -30px;bottom: -30px;width: 100%;}\n")]),s("h3",{staticClass:"mt-5 mb-2 subheading"},[s("a",{attrs:{href:"#do-your-own-style"}},[t._v("# Do your own style")]),s("a",{attrs:{name:"do-your-own-style"}})]),s("p",[t._v("If you don't want to use the default style, here is how to do your own.")]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/mzGZXR",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/mzGZXR "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"example-own-style",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("splitpanes",{attrs:{vertical:""}},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("span",[t._v("4")])],1),s("ssh-pre",{attrs:{language:"html-vue",label:"HTML"}},[t._v('<splitpanes horizontal style="height:400px">\n  <splitpanes vertical>\n    <span>1</span>\n    <span>2</span>\n    <span>3</span>\n  </splitpanes>\n  <span>4</span>\n</splitpanes>\n')]),s("ssh-pre",{attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes {\n  background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);\n}\n\n.splitpanes__pane {\n  box-shadow: 0 0 5px rgba(0, 0, 0, .2) inset;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.splitpanes--vertical > .splitpanes__splitter {\n  min-width: 6px;\n  background: linear-gradient(90deg, #ccc, #111);\n}\n\n.splitpanes--horizontal > .splitpanes__splitter {\n  min-height: 6px;\n  background: linear-gradient(0deg, #ccc, #111);\n}")])],1)],1)},o=[];function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){p(t,e,n[e])})}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function h(t){return d(t)||u(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var v,f,m={props:{horizontal:{type:Boolean,default:!1},pushOtherPanes:{type:Boolean,default:!0}},data:function(){return{container:{vnode:null,offsetLeft:null,offsetTop:null},slotsCount:0,vnodes:[],panes:[],splitters:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null}}},methods:{bindEvents:function(){var t="ontouchstart"in window;document.addEventListener(t?"touchmove":"mousemove",this.onMouseMove,{passive:!1}),document.addEventListener(t?"touchend":"mouseup",this.onMouseUp)},onMouseDown:function(t,e){this.touch.mouseDown=!0,this.touch.activeSplitter=e},onMouseMove:function(t){this.touch.mouseDown&&(t.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(t)))},onMouseUp:function(){this.touch.mouseDown=!1,this.touch.dragging=!1},getCurrentMouseDrag:function(t){return{x:"ontouchstart"in window?t.touches[0].clientX:t.clientX,y:"ontouchstart"in window?t.touches[0].clientY:t.clientY}},getContainerOffsetTop:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetTop||t){var e=this.container.vnode,n=e.offsetTop;while(e=e.offsetParent)n+=e.offsetTop;this.container.offsetTop=n}return this.container.offsetTop},getContainerOffsetLeft:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetLeft||t){var e=this.container.vnode,n=e.offsetLeft;while(e=e.offsetParent)n+=e.offsetLeft;this.container.offsetLeft=n}return this.container.offsetLeft},getCurrentDragPercentage:function(t){var e=this.touch.activeSplitter,n=document.documentElement,s=this.horizontal?(window.pageYOffset||n.scrollTop)-(n.clientTop||0):null,a=this["getContainerOffset".concat(this.horizontal?"Top":"Left")]();t=t[this.horizontal?"y":"x"]-a+s;var i=this.container.vnode[this.horizontal?"clientHeight":"clientWidth"],r=0;return this.panes.forEach(function(t,n){return r+=n<e?t.width:0}),100*t/i},calculatePanesSize:function(t){var e=this.touch.activeSplitter,n={prevPanesSize:this.sumPrevPanesSize(e),nextPanesSize:this.sumNextPanesSize(e),prevReachedMinPanes:0,nextReachedMinPanes:0},s=0+(this.pushOtherPanes?0:n.prevPanesSize),a=100-(this.pushOtherPanes?0:n.nextPanesSize),i=Math.max(Math.min(this.getCurrentDragPercentage(t),a),s),r=[e,e+1];if(this.pushOtherPanes){var o=this.doPushOtherPanes(n,i);if(!o)return;n=o.sums,r=o.panesToResize}var l=this.panes[r[0]]||null,p=this.panes[r[1]]||null;null!==l&&(l.width=Math.min(Math.max(i-n.prevPanesSize-n.prevReachedMinPanes,l.min),l.max)),null!==p&&(p.width=Math.min(Math.max(100-i-n.nextPanesSize-n.nextReachedMinPanes,p.min),p.max))},doPushOtherPanes:function(t,e){var n=this,s=this.touch.activeSplitter,a=[s,s+1];return e<t.prevPanesSize+this.panes[a[0]].min&&(a[0]=this.findPrevExpandedPane(s).index,t.prevReachedMinPanes=0,a[0]<s&&this.panes.forEach(function(e,n){n>a[0]&&n<=s&&(e.width=e.min,t.prevReachedMinPanes+=e.min)}),t.prevPanesSize=this.sumPrevPanesSize(a[0]),void 0===a[0])?(t.prevReachedMinPanes=0,this.panes[0].width=this.panes[0].min,this.panes.forEach(function(e,n){n>0&&n<=s&&(e.width=e.min,t.prevReachedMinPanes+=e.min)}),this.panes[a[1]].width=100-t.prevReachedMinPanes-this.panes[0].min-t.prevPanesSize-t.nextPanesSize,null):e>100-t.nextPanesSize-this.panes[a[1]].min&&(a[1]=this.findNextExpandedPane(s).index,t.nextReachedMinPanes=0,a[1]>s+1&&this.panes.forEach(function(e,n){n>s&&n<a[1]&&(e.width=e.min,t.nextReachedMinPanes+=e.min)}),t.nextPanesSize=this.sumNextPanesSize(a[1]-1),void 0===a[1])?(t.nextReachedMinPanes=0,this.panes[this.panes.length-1].width=this.panes[this.panes.length-1].min,this.panes.forEach(function(e,a){a<n.panes.length-1&&a>=s+1&&(e.width=e.min,t.nextReachedMinPanes+=e.min)}),this.panes[a[0]].width=100-t.prevPanesSize-t.nextReachedMinPanes-this.panes[this.panes.length-1].min-t.nextPanesSize,null):{sums:t,panesToResize:a}},sumPrevPanesSize:function(t){return this.panes.reduce(function(e,n,s){return e+(s<t?n.width:0)},0)},sumNextPanesSize:function(t){return this.panes.reduce(function(e,n,s){return e+(s>t+1?n.width:0)},0)},findPrevExpandedPane:function(t){var e={},n=h(this.panes);return n.reverse().some(function(n){return n.index<t&&n.width>n.min&&(e=n),n.index<t&&n.width>n.min}),e},findNextExpandedPane:function(t){var e={};return this.panes.some(function(n){return n.index>t+1&&n.width>n.min&&(e=n),n.index>t+1&&n.width>n.min}),e}},mounted:function(){this.container.vnode=this.$refs.container,this.bindEvents()},computed:{defaultWidth:function(){return 100/this.vnodes.length}},render:function(t){var e=this,n=[];this.$slots.default?(this.slotsCount!==this.$slots.default.length&&(this.vnodes=this.$slots.default.filter(function(t){return t.tag||(t.text||"").trim()}),this.vnodes.forEach(function(t,n){var s=t.data;s=void 0===s?{}:s;var a=s.attrs,i=void 0===a?{}:a,r=i["splitpanes-min"],o=void 0===r?0:r,l=i["splitpanes-max"],p=void 0===l?100:l;e.$set(e.panes,n,{width:e.defaultWidth,index:n,min:parseFloat(o),max:parseFloat(p)}),n&&e.$set(e.splitters,n-1,{id:"splitter-".concat(n-1),index:n-1})}),this.slotsCount=this.$slots.default.length),this.vnodes.forEach(function(s,a){if(a){var i={id:a-1,class:"splitpanes__splitter",ref:"splitter-".concat(a-1),on:p({},"ontouchstart"in window?"touchstart":"mousedown",function(t){return e.onMouseDown(t,a-1)})};n.push(t("div",i))}var r={id:a,class:"splitpanes__pane",style:l({},e.horizontal?{height:"".concat(e.panes[a].width,"%")}:null,e.horizontal?null:{width:"".concat(e.panes[a].width,"%")})};n.push(t("div",r,[s]))})):n.push(t("div","Splitpanes needs some contents here."));var s={class:["splitpanes","splitpanes--".concat(this.horizontal?"horizontal":"vertical"),this.touch.dragging?"splitpanes--dragging":""],ref:"container"};return t("div",s,n)}},g=m,_=(n("5b84"),n("2877")),y=Object(_["a"])(g,v,f,!1,null,null,null);y.options.__file="splitpanes.vue";var b=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:"highlight "+t.type},[n("v-icon",[t._v(t._s(t.icon))]),t._t("default")],2)},w=[],P={props:{tag:{type:String,default:"p"},type:{type:String,default:"info"}},computed:{icon:function(){switch(this.type){case"success":return"check";case"error":return"close";case"warning":return"priority_high";case"tips":return"wb_incandescent";case"info":default:return"priority_high"}}}},S=P,z=(n("aef5"),Object(_["a"])(S,x,w,!1,null,null,null));z.options.__file="highlight-message.vue";var C=z.exports,M=n("40bd"),k=(n("b565"),{name:"app",components:{Splitpanes:b,sshPre:M["simpleSyntaxHighlighter"],highlightMessage:C},data:function(){return{panesNumber:3}}}),O=k,T=(n("6294"),Object(_["a"])(O,r,o,!1,null,null,null));T.options.__file="app.vue";var j=T.exports;n("d5e8"),n("d1e7");s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(j)}}).$mount("#app")},"5b84":function(t,e,n){"use strict";var s=n("7ba0"),a=n.n(s);a.a},6294:function(t,e,n){"use strict";var s=n("7fba"),a=n.n(s);a.a},"7ba0":function(t,e,n){},"7fba":function(t,e,n){},aef5:function(t,e,n){"use strict";var s=n("0312"),a=n.n(s);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.86bc1d8a.js.map