var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/form-element/stacked/example.jsx.js"]=function(e){function t(t){for(var l,r,o=t[0],c=t[1],i=t[2],u=0,p=[];u<o.length;u++)r=o[u],n[r]&&p.push(n[r][0]),n[r]=0;for(l in c)Object.prototype.hasOwnProperty.call(c,l)&&(e[l]=c[l]);for(s&&s(t);p.length;)p.shift()();return d.push.apply(d,i||[]),a()}function a(){for(var e,t=0;t<d.length;t++){for(var a=d[t],l=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(l=!1)}l&&(d.splice(t--,1),e=r(r.s=a[0]))}return e}var l={},n={154:0,7:0,8:0,15:0,16:0,22:0,32:0,38:0,42:0,45:0,54:0,58:0,59:0,63:0,64:0,67:0,71:0,75:0,77:0,80:0,84:0,87:0,88:0,93:0,99:0,100:0,104:0,106:0,114:0,117:0,118:0,122:0,124:0,125:0,126:0,127:0,128:0,129:0,133:0,138:0,144:0,152:0,163:0,167:0,170:0,171:0,178:0,181:0,182:0},d=[];function r(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=l,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var s=c;return d.push([230,0]),a()}({0:function(e,t){e.exports=React},230:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.states=void 0;var l=u(a(0)),n=u(a(27)),d=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(34)),r=a(7),o=a(9),c=a(31),i=a(17),s=a(14);function u(e){return e&&e.__esModule?e:{default:e}}t.default=l.default.createElement(n.default,{direction:"stacked",snapshot:d.ObjectFieldTypes,isViewMode:!0,hasInlineEdit:!0});t.states=[{id:"edit-stacked",label:"Stacked form layout - Edit Mode",element:l.default.createElement(n.default,{direction:"stacked",snapshot:d.ObjectFieldTypes})}],t.examples=[{id:"stacked-single-column",label:"Stacked form layout - 1 column - Read Only Mode",element:l.default.createElement(n.default,{direction:"stacked",snapshot:d.ObjectFieldTypesSingleColumn,isViewMode:!0})},{id:"deprecated-view-stacked",label:"Deprecated - Stacked form layout - View Mode",element:l.default.createElement(n.default,{direction:"stacked",snapshot:d.DeprecatedObjectFieldTypes,isViewMode:!0,hasInlineEdit:!0,isDeprecated:!0})},{id:"deprecated-edit-stacked",label:"Deprecated - Stacked form layout - Edit Mode",element:l.default.createElement(n.default,{direction:"stacked",snapshot:d.DeprecatedObjectFieldTypes,isDeprecated:!0})},{id:"simple-stacked",label:"Simple - Stacked form layout",element:l.default.createElement("div",{className:"slds-form"},l.default.createElement(r.FormElement,{labelContent:"Text Input",inputId:"stacked-input-id-01",isStacked:!0},l.default.createElement(o.Input,{id:"stacked-input-id-01",placeholder:"Placeholder Text"})),l.default.createElement(r.FormElement,{labelContent:"Textarea Input",inputId:"stacked-input-id-02",isStacked:!0},l.default.createElement(c.Textarea,{id:"stacked-input-id-02",placeholder:"Placeholder Text"})),l.default.createElement(r.Fieldset,{label:"Checkbox Group label",isStacked:!0},l.default.createElement(s.Checkbox,{label:"All opportunities owned by you",name:"default"}),l.default.createElement(s.Checkbox,{label:"All contacts in the account owned by you",name:"default"})),l.default.createElement(r.Fieldset,{label:"Radio Group label",isStacked:!0},l.default.createElement(i.Radio,{label:"Lead Generation",name:"options"}),l.default.createElement(i.Radio,{label:"Education Leads",name:"options"})))}]}});