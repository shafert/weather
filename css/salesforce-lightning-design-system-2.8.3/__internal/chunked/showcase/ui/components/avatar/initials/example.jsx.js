var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/avatar/initials/example.jsx.js"]=function(e){function t(t){for(var a,i,s=t[0],o=t[1],c=t[2],p=0,f=[];p<s.length;p++)i=s[p],r[i]&&f.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);for(u&&u(t);f.length;)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==r[o]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={173:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},l=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=o;return l.push([251,0]),n()}({0:function(e,t){e.exports=React},251:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=void 0;var a=function(e){return e&&e.__esModule?e:{default:e}}(n(0)),r=n(18),l=n(39);t.default=a.default.createElement(r.Avatar,null,a.default.createElement(l.AvatarInitials,{iconClassName:"slds-icon-standard-account",title:"company name",initials:"Ac"}));t.examples=[{id:"linked-avatar-initials",label:"Wrapped in a link",element:a.default.createElement("a",{href:"javascript:void(0);"},a.default.createElement(r.Avatar,null,a.default.createElement(l.AvatarInitials,{iconClassName:"slds-icon-standard-account",title:"company name",initials:"Ac"})))}]}});