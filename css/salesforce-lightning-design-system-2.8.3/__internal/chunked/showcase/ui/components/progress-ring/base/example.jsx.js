var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/progress-ring/base/example.jsx.js"]=function(e){function t(t){for(var n,a,s=t[0],o=t[1],c=t[2],p=0,d=[];p<s.length;p++)a=s[p],l[a]&&d.push(l[a][0]),l[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(u&&u(t);d.length;)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var o=r[s];0!==l[o]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},l={180:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;return i.push([259,0]),r()}({0:function(e,t){e.exports=React},259:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var n=a(r(0)),l=a(r(70)),i=r(6);function a(e){return e&&e.__esModule?e:{default:e}}t.default=n.default.createElement(l.default,{percent:100});t.examples=[{id:"progress-ring-partially-drained",label:"Partially Drained",element:n.default.createElement(l.default,{percent:88})},{id:"progress-ring-partially-filled",label:"Partially Filled",element:n.default.createElement(l.default,{percent:40,isFilling:!0})},{id:"progress-ring-warning",label:"Partially Drained With Warning Icon",element:n.default.createElement(l.default,{percent:20,isWarning:!0},n.default.createElement(i.UtilityIcon,{symbol:"warning",title:"Warning",assistiveText:"Warning"}))},{id:"progress-ring-partially-filled-warning",label:"Partially Filled with Warning Icon",element:n.default.createElement(l.default,{percent:75,isFilling:!0,isWarning:!0},n.default.createElement(i.UtilityIcon,{symbol:"warning",title:"Warning",assistiveText:"Warning"}))},{id:"progress-ring-expired",label:"With Expired Icon",element:n.default.createElement(l.default,{percent:0,isExpired:!0},n.default.createElement(i.UtilityIcon,{symbol:"error",title:"Expired",assistiveText:"Expired"}))},{id:"progress-ring-complete",label:"Complete",element:n.default.createElement(l.default,{percent:100,isComplete:!0},n.default.createElement(i.UtilityIcon,{symbol:"check",title:"Complete",assistiveText:"Complete"}))}]}});