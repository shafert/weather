var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/components/builder-header/docs.mdx.js"]=function(e){function t(t){for(var a,r,i=t[0],d=t[1],o=t[2],c=0,m=[];c<i.length;c++)r=i[c],s[r]&&m.push(s[r][0]),s[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,o||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,i=1;i<l.length;i++){var d=l[i];0!==s[d]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=l[0]))}return e}var a={},s={7:0},n=[];function r(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=a,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var u=d;return n.push([100,0]),l()}({0:function(e,t){e.exports=React},100:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=l(0),s=(u(a),l(7)),n=u(s),r=u(l(9)),i=(u(l(11)),u(l(10))),d=u(l(12)),o=u(l(99));u(l(98));function u(e){return e&&e.__esModule?e:{default:e}}var c=s.factories.h2,m=t.getElement=function(){return(0,a.createElement)(n.default,{},(0,a.createElement)("div",{className:"doc lead"},"Every builder needs a builder header, which contains basic navigation elements. It also shows the builder type and content name."),c({id:"Usage"},"Usage"),(0,a.createElement)(d.default,{type:"note",header:"Design Guidelines"},"To learn more about the Builder pattern in general, check out our ",(0,a.createElement)("a",{href:"/guidelines/builder"},"guidelines"),", which includes a section about how to use the ",(0,a.createElement)("a",{href:"/guidelines/builder/#Builder-Header"},"Builder Header"),"."),c({id:"Base"},"Base"),(0,a.createElement)(i.default,{title:"Base"},(0,a.createElement)(r.default,null,(0,a.createElement)("div",{style:{position:"relative",height:"100px"}},(0,a.createElement)(o.default,null)))),c({id:"With-A-Toolbar"},"With A Toolbar"),(0,a.createElement)(i.default,{title:"Base"},(0,a.createElement)(r.default,null,(0,a.createElement)("div",{style:{position:"relative",height:"100px"}},(0,a.createElement)(o.default,{showToolbar:!0})))))};t.getContents=function(){return(0,s.createTableOfContents)(m())}},6:function(e,t){e.exports=JSBeautify},97:function(e,t){e.exports=".docs-codeblock-example .slds-builder-header_container {\n  position: absolute; }\n"},98:function(e,t,l){var a=l(97);"string"==typeof a&&(a=[[e.i,a,""]]);var s={hmr:!0,transform:void 0};l(18)(a,s);a.locals&&(e.exports=a.locals)},99:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),s=l(0),n=o(s),r=o(l(4)),i=o(l(3)),d=l(8);function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(){return n.default.createElement("div",{className:"slds-builder-header__item"},n.default.createElement("div",{className:"slds-builder-header__item-label slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(d.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"builder",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"App Name")))},b=function(e){return n.default.createElement("nav",{className:"slds-builder-header__item slds-builder-header__nav"},n.default.createElement("ul",{className:"slds-builder-header__nav-list"},n.default.createElement(_,{symbol:"settings"}),n.default.createElement(_,{symbol:"page",dropdown:!0})))},_=function(e){return n.default.createElement("li",{className:"slds-builder-header__nav-item"},e.dropdown?n.default.createElement("button",{className:"slds-button slds-builder-header__item-action slds-media slds-media_center","aria-haspopup":"true",title:"Click to open menu"},n.default.createElement("span",{className:"slds-media__figure"},n.default.createElement(d.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:e.symbol,assistiveText:!1,title:!1})),n.default.createElement("span",{className:"slds-media__body"},n.default.createElement("span",{className:"slds-truncate",title:"Dropdown"},"Dropdown"),n.default.createElement(d.UtilityIcon,{containerClassName:"slds-current-color slds-m-left_small",className:"slds-icon_x-small",symbol:"chevrondown",assistiveText:!1,title:!1}))):n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("span",{className:"slds-media__figure"},n.default.createElement(d.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:e.symbol,assistiveText:!1,title:!1})),n.default.createElement("span",{className:"slds-media__body"},n.default.createElement("span",{className:"slds-truncate",title:"Link"},"Link"))))},p=function(e){return n.default.createElement("div",{className:"slds-builder-header__item"},n.default.createElement("h1",{className:"slds-builder-header__item-label"},"Page Type"))},h=function(e){return n.default.createElement("div",{className:"slds-builder-header__utilities-item"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(d.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"back",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"Back")))},v=function(e){return n.default.createElement("div",{className:"slds-builder-header__utilities-item"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(d.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"help",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"Help")))},E=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__item-group","aria-label":"Canvas Actions"},n.default.createElement("div",{className:"slds-button-group"},n.default.createElement(i.default,{className:"slds-button_icon-border",symbol:"undo",assistiveText:"Undo",title:"Undo",tabIndex:"0"}),n.default.createElement(i.default,{className:"slds-button_icon-border",symbol:"redo",assistiveText:"Redo",title:"Redo",tabIndex:"-1"})))},y=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__item-group","aria-label":"Edit actions"},n.default.createElement("div",{className:"slds-button-group"},n.default.createElement(i.default,{className:"slds-button_icon-border",symbol:"cut",assistiveText:"Cut",title:"Cut",tabIndex:"-1"}),n.default.createElement(i.default,{className:"slds-button_icon-border",symbol:"copy",assistiveText:"Copy",title:"Copy",tabIndex:"-1"}),n.default.createElement(i.default,{className:"slds-button_icon-border",symbol:"paste",assistiveText:"Paste",title:"Paste",tabIndex:"-1"})))},N=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__actions","aria-label":"Document actions"},n.default.createElement("button",{className:"slds-button slds-button_neutral"},n.default.createElement(r.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"right"})," ","Run"),n.default.createElement("button",{className:"slds-button slds-button_neutral"},"Save As"),n.default.createElement("button",{className:"slds-button slds-button_brand"},"Save"))},g=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,s.Component),a(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"slds-builder-toolbar",role:"toolbar"},n.default.createElement(E,null),n.default.createElement(y,null),n.default.createElement(N,null))}}]),t}(),x=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,s.Component),a(t,[{key:"render",value:function(){var e=this.props.showToolbar;return n.default.createElement("div",{className:"slds-builder-header_container"},n.default.createElement("header",{className:"slds-builder-header"},n.default.createElement(f,null),n.default.createElement(b,null),n.default.createElement(p,null),n.default.createElement("div",{className:"slds-builder-header__item slds-builder-header__utilities"},n.default.createElement(h,null),n.default.createElement(v,null))),e&&n.default.createElement(g,null))}}]),t}();t.default=x}});