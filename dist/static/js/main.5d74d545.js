/*! For license information please see main.5d74d545.js.LICENSE.txt */
!function(){var e,t={1110:function(e,t,r){"use strict";var n=r(3935),o=(r(2526),r(1817),r(1539),r(2165),r(6992),r(8783),r(3948),r(7042),r(1038),r(4916),r(7601),r(1703),r(7294)),i=(r(7327),r(6699),r(2023),r(9826),r(1249),r(8674),r(2443),r(9341),r(3706),r(2703),r(9070),r(489),r(4747),r(8304),r(7941),r(5003),r(9337),r(3321),r(5147)),a=r(1945),c=r(3561),s=r(9454),l=r(682),u=r(4051),d=r(1555),h=r(6431),f=r(947),p=(r(4970),r(7536)),v=r(381),y=r.n(v),j=r(1721),m=r(9198),g=r.n(m),b=(r(2596),(0,o.createContext)()),x="[auth] login",w=r(8521);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function d(){}function h(){}function f(){}var p={};c(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==t&&r.call(y,o)&&(p=y);var j=f.prototype=d.prototype=Object.create(p);function m(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function n(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==O(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:E}}function E(){return{value:void 0,done:!0}}return h.prototype=f,c(j,"constructor",f),c(f,"constructor",h),h.displayName=c(f,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,a,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},m(g.prototype),c(g.prototype,i,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},m(j),c(j,a,"Generator"),c(j,o,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function C(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(){var e,t,r=(e=(0,o.useState)(!0),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],i=r[1],u=(0,p.cI)(),d=u.handleSubmit,h=u.control,f=(0,o.useContext)(b).dispatch,v=function(){var e,t=(e=L().mark((function e(t){var r;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.codigo,e.next=3,j.ZP.post("/api/login",{codigo:r}).then((function(e){alert("Bienvenida/o, ".concat(e.data.responsable)),f({type:x,payload:{user:e.data.responsable}}),i(!1)})).catch((function(e){console.error(e),alert("Datos incorrectos. Por favor, intente nuevamente.")}));case 3:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){C(i,n,o,a,c,"next",e)}function c(e){C(i,n,o,a,c,"throw",e)}a(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,w.jsxs)(s.Z,{show:n,backdrop:"static",keyboard:!1,children:[(0,w.jsx)(s.Z.Header,{children:(0,w.jsx)(s.Z.Title,{children:"Iniciar sesión"})}),(0,w.jsxs)(c.Z,{onSubmit:d(v),children:[(0,w.jsx)(s.Z.Body,{children:(0,w.jsx)(l.Z,{id:"form-container",children:(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formNombres",children:[(0,w.jsx)(c.Z.Label,{children:"Código de usuario"}),(0,w.jsx)(p.Qr,{control:h,name:"codigo",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{type:"text",onChange:r,value:n,autoFocus:!0})}})]})})}),(0,w.jsx)(s.Z.Footer,{children:(0,w.jsx)(a.Z,{variant:"primary",type:"submit",onClick:d,children:"Iniciar sesión"})})]})]})};function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(){I=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u={};function d(){}function h(){}function f(){}var p={};c(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(L([])));y&&y!==t&&r.call(y,o)&&(p=y);var j=f.prototype=d.prototype=Object.create(p);function m(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){function n(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==k(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=f,c(j,"constructor",f),c(f,"constructor",h),h.displayName=c(f,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,a,"GeneratorFunction")),e.prototype=Object.create(j),e},e.awrap=function(e){return{__await:e}},m(g.prototype),c(g.prototype,i,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},m(j),c(j,a,"Generator"),c(j,o,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}function _(e,t,r,n,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){_(i,n,o,a,c,"next",e)}function c(e){_(i,n,o,a,c,"throw",e)}a(void 0)}))}}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T=function(){var e=G((0,o.useState)(!1),2),t=e[0],r=e[1],n=G((0,o.useState)("no"),2),v=n[0],m=n[1],x=G((0,o.useState)([]),2),O=x[0],L=x[1],C=G((0,o.useState)(!0),2),S=C[0],k=C[1],Z=G((0,o.useState)(""),2),N=Z[0],_=Z[1],z=G((0,o.useState)(""),2),T=z[0],D=z[1],F=G((0,o.useState)("nombres"),2),M=F[0],V=F[1],B=G((0,o.useState)(new Date),2),Y=B[0],H=B[1],Q=(0,o.useContext)(b).user.user;console.log(Q);var R=function(){var e=A(I().mark((function e(){var t;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.ZP.get("/api/data");case 2:t=e.sent,L(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){R()}),[S]);var U=[];N?("nombres"===M&&(U=O.filter((function(e){return e.nombres.toLowerCase().includes(N.toLocaleLowerCase())}))),"cedula"===M&&(U=O.filter((function(e){return e.ci.toLowerCase().includes(N.toLocaleLowerCase())}))),"empresa"===M&&(U=O.filter((function(e){return e.empresa.toLowerCase().includes(N.toLocaleLowerCase())}))),"direccion"===M&&(U=O.filter((function(e){return e.direccion.toLowerCase().includes(N.toLocaleLowerCase())}))),"fecha"===M&&(U=O.filter((function(e){return y()(e.diaentrada).isSame(N)})))):U=O;var $=function(){return r(!1)},q=(0,p.cI)(),J=q.register,K=q.handleSubmit,W=q.control,X=q.reset,ee=q.setValue,te=[],re=function(){var e=A(I().mark((function e(t){var r,n,o,i,a,c,s,l,u,d;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=y()().format("YYYY-MM-DD"),n=y()().format("HH:mm"),o=t.nombres,i=t.ci,a=t.telefono,c=t.empresa,s=t.direccion,l=t.observaciones,u=t.carnet,d=t.contacto,console.log(Q),e.next=6,j.ZP.post("/api/register",{nombres:o,ci:i,telefono:a,empresa:c,direccion:s,observaciones:l,carnet:u,contacto:d,alerta:v,diaentrada:r,horaentrada:n,registrado:Q}).then((function(){alert("Entrada registrada exitosamente"),$(),k(!S),X(),m("no")})).catch((function(e){return console.error(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("h3",{children:"Registro de Entrada de la Corporación Venezolana de Minería"}),(0,w.jsx)(E,{}),(0,w.jsxs)(l.Z,{id:"btn-container",children:[(0,w.jsxs)(h.Z,{className:"mb-3",id:"input-buscar",children:[(0,w.jsx)(h.Z.Text,{id:"basic-addon1",children:(0,w.jsx)(f.dVI,{})}),(0,w.jsx)(c.Z.Control,{placeholder:"Buscar","aria-label":"Buscar","aria-describedby":"basic-addon1",value:N,onChange:function(e){_(e.target.value)}})]}),(0,w.jsx)("h5",{id:"text-search",children:"Buscar por:"}),(0,w.jsxs)(c.Z.Select,{id:"btn-searchtypes",onChange:function(e){V(e.target.value)},children:[(0,w.jsx)("option",{value:"nombres",default:!0,children:"Nombres"}),(0,w.jsx)("option",{value:"cedula",children:"Cédula"}),(0,w.jsx)("option",{value:"empresa",children:"Empresa"}),(0,w.jsx)("option",{value:"direccion",children:"Dirección"}),(0,w.jsx)("option",{value:"fecha",children:"Fecha"})]}),"fecha"===M&&(0,w.jsx)(g(),{selected:Y,onChange:function(e){H(e)},onSelect:function(e){return _(y()(e).format("YYYY-MM-DD"))},id:"datepicker"}),(0,w.jsx)(l.Z,{id:"btns-container",children:(0,w.jsx)(a.Z,{variant:"success",id:"btn-agregarregistro",onClick:function(){return r(!0)},children:"Agregar Registro"})})]}),(0,w.jsxs)(s.Z,{show:t,onHide:$,backdrop:"static",keyboard:!1,children:[(0,w.jsxs)(s.Z.Header,{closeButton:!0,id:"modal-header",children:[(0,w.jsx)(s.Z.Title,{children:"Añadir registro"}),(0,w.jsxs)(l.Z,{id:"bs-search",children:[(0,w.jsx)(h.Z,{className:"mb-3",id:"input-cedulabuscar",children:(0,w.jsx)(c.Z.Control,{placeholder:"Buscar por cédula","aria-label":"Buscar por cédula","aria-describedby":"basic-addon1",value:T,onChange:function(e){D(e.target.value)}})}),(0,w.jsx)(a.Z,{onClick:function(){R(),U=O,T&&(te=U.find((function(e){return e.ci.toLowerCase().includes(T.toLocaleLowerCase())}))),console.log(te),"si"===te.alerta&&alert("Este usuario posee una alerta reciente."),ee("nombres",te.nombres),ee("ci",te.ci),ee("telefono",te.telefono),ee("carnet",te.carnet),D("")},children:(0,w.jsx)(f.dVI,{})})]})]}),(0,w.jsx)(s.Z.Body,{children:(0,w.jsx)(c.Z,{onSubmit:K(re),children:(0,w.jsxs)(l.Z,{id:"form-container",children:[(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formNombres",children:[(0,w.jsx)(c.Z.Label,{children:"Nombres y Apellidos"}),(0,w.jsx)(p.Qr,{control:W,name:"nombres",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{type:"text",onChange:r,value:n,autoFocus:!0,placeholder:"Nombres y Apellidos"})}})]}),(0,w.jsxs)(u.Z,{children:[(0,w.jsx)(d.Z,{children:(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formCedula",children:[(0,w.jsx)(c.Z.Label,{children:"Documento de Identidad"}),(0,w.jsx)(p.Qr,{control:W,name:"ci",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{type:"number",onChange:r,value:n,placeholder:"12345678"})}})]})}),(0,w.jsx)(d.Z,{children:(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formTelefono",children:[(0,w.jsx)(c.Z.Label,{children:"Número de teléfono"}),(0,w.jsx)(p.Qr,{control:W,name:"telefono",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{type:"text",onChange:r,value:n,placeholder:"Número de teléfono"})}})]})})]}),(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formEmpresa",children:[(0,w.jsx)(c.Z.Label,{children:"Empresa"}),(0,w.jsx)(p.Qr,{control:W,name:"empresa",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{type:"text",onChange:r,value:n,placeholder:"Corporación Venezolana de Minería"})}})]}),(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formDireccion",children:[(0,w.jsx)(c.Z.Label,{children:"A dónde se dirige"}),(0,w.jsxs)(c.Z.Select,P(P({"aria-label":"Elija hacia dónde se dirige"},J("direccion")),{},{children:[(0,w.jsx)("option",{children:"Elija hacia dónde se dirige"}),(0,w.jsx)("option",{value:"Administración",children:"Administración"}),(0,w.jsx)("option",{value:"Auditoría Interna",children:"Auditoría Interna"}),(0,w.jsx)("option",{value:"Catastro Minero",children:"Catastro Minero"}),(0,w.jsx)("option",{value:"Comercialización",children:"Comercialización"}),(0,w.jsx)("option",{value:"Consultoría Jurídica",children:"Consultoría Jurídica"}),(0,w.jsx)("option",{value:"Gestión Comunicacional",children:"Gestión Comunicacional"}),(0,w.jsx)("option",{value:"Gestión Ecosocialista",children:"Gestión Ecosocialista"}),(0,w.jsx)("option",{value:"Gestión Humana",children:"Gestión Humana"}),(0,w.jsx)("option",{value:"Planificación y Presupuesto",children:"Planificación y Presupuesto"}),(0,w.jsx)("option",{value:"Presidencia",children:"Presidencia"}),(0,w.jsx)("option",{value:"Producción Minera",children:"Producción Minera"}),(0,w.jsx)("option",{value:"Proyectos y Desarrollo Minero",children:"Proyectos y Desarrollo Minero"}),(0,w.jsx)("option",{value:"Seguridad Integral",children:"Seguridad Integral"}),(0,w.jsx)("option",{value:"Seguimiento y Control",children:"Seguimiento y Control"}),(0,w.jsx)("option",{value:"OAC",children:"OAC"}),(0,w.jsx)("option",{value:"OTI",children:"OTI"}),(0,w.jsx)("option",{value:"Vicepresidencia",children:"Vicepresidencia"})]}))]}),(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formEmpresa",children:[(0,w.jsx)(c.Z.Label,{children:"Carnet"}),(0,w.jsx)(p.Qr,{control:W,name:"carnet",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{type:"text",onChange:r,value:n,placeholder:"Número de carnet"})}})]}),(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formObservaciones",children:[(0,w.jsx)(c.Z.Label,{children:"Contacto"}),(0,w.jsx)(p.Qr,{control:W,name:"contacto",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{type:"text",onChange:r,value:n,placeholder:"Contacto"})}})]}),(0,w.jsxs)(c.Z.Group,{className:"mb-3",controlId:"formObservaciones",children:[(0,w.jsx)(c.Z.Label,{children:"Observaciones"}),(0,w.jsx)(p.Qr,{control:W,name:"observaciones",defaultValue:"",render:function(e){var t=e.field,r=t.onChange,n=t.value;return(0,w.jsx)(c.Z.Control,{as:"textarea",onChange:r,value:n,rows:3,placeholder:"Observaciones"})}})]}),(0,w.jsx)(a.Z,{variant:"danger",id:"alert-btn",onClick:function(){"no"===v?(m("si"),alert("La alerta se encuentra activada")):(m("no"),alert("La alerta se encuentra desactivada"))},children:"Alerta"}),(0,w.jsx)(a.Z,{variant:"primary",type:"submit",id:"form-btn",children:"Guardar"})]})})}),(0,w.jsx)(s.Z.Footer,{children:(0,w.jsx)(a.Z,{variant:"secondary",onClick:$,children:"Cerrar"})})]}),(0,w.jsxs)(i.Z,{striped:!0,bordered:!0,hover:!0,id:"tabla-registro",children:[(0,w.jsx)("thead",{children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("th",{children:"#"}),(0,w.jsx)("th",{children:"Nombres y Apellidos"}),(0,w.jsx)("th",{children:"Documento de identidad"}),"Richard Barrera"===Q&&(0,w.jsx)("th",{children:"Número de Teléfono"}),(0,w.jsx)("th",{children:"Empresa"}),(0,w.jsx)("th",{children:"Fecha"}),(0,w.jsx)("th",{children:"Hora de entrada"}),(0,w.jsx)("th",{children:"Dirección"}),(0,w.jsx)("th",{children:"Contacto"}),(0,w.jsx)("th",{children:"Observaciones"}),"Richard Barrera"===Q&&(0,w.jsx)("th",{children:"Registrado por"}),(0,w.jsx)("th",{children:"Número de carnet"})]})}),(0,w.jsx)("tbody",{children:U.reverse().map((function(e,t){return(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{children:t+1}),(0,w.jsx)("td",{children:e.nombres}),(0,w.jsx)("td",{children:e.ci}),"Richard Barrera"===Q&&(0,w.jsx)("td",{children:e.telefono}),(0,w.jsx)("td",{children:e.empresa}),(0,w.jsx)("td",{children:e.diaentrada}),(0,w.jsx)("td",{children:e.horaentrada}),(0,w.jsx)("td",{children:e.direccion}),(0,w.jsx)("td",{children:e.contacto}),(0,w.jsx)("td",{children:e.observaciones}),"Richard Barrera"===Q&&(0,w.jsx)("td",{children:e.registrado}),(0,w.jsx)("td",{children:e.carnet})]},e.id)}))})]})]})};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===x?F(F({},t.payload),{},{logged:!0}):e};function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Y=function(){var e,t,r=(e=(0,o.useReducer)(V,{}),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],i=r[1];return(0,w.jsxs)(b.Provider,{value:{user:n,dispatch:i},children:[(0,w.jsx)(T,{}),";"]})};n.render((0,w.jsx)(Y,{}),document.getElementById("root"))},6700:function(e,t,r){var n={"./af":2786,"./af.js":2786,"./ar":867,"./ar-dz":4130,"./ar-dz.js":4130,"./ar-kw":6737,"./ar-kw.js":6737,"./ar-ly":6440,"./ar-ly.js":6440,"./ar-ma":7702,"./ar-ma.js":7702,"./ar-sa":6040,"./ar-sa.js":6040,"./ar-tn":7100,"./ar-tn.js":7100,"./ar.js":867,"./az":1083,"./az.js":1083,"./be":9808,"./be.js":9808,"./bg":8338,"./bg.js":8338,"./bm":7438,"./bm.js":7438,"./bn":8905,"./bn-bd":6225,"./bn-bd.js":6225,"./bn.js":8905,"./bo":1560,"./bo.js":1560,"./br":1278,"./br.js":1278,"./bs":622,"./bs.js":622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":877,"./cv.js":877,"./cy":7373,"./cy.js":7373,"./da":4780,"./da.js":4780,"./de":9740,"./de-at":217,"./de-at.js":217,"./de-ch":894,"./de-ch.js":894,"./de.js":9740,"./dv":5300,"./dv.js":5300,"./el":837,"./el.js":837,"./en-au":8348,"./en-au.js":8348,"./en-ca":7925,"./en-ca.js":7925,"./en-gb":2243,"./en-gb.js":2243,"./en-ie":6436,"./en-ie.js":6436,"./en-il":7207,"./en-il.js":7207,"./en-in":4175,"./en-in.js":4175,"./en-nz":6319,"./en-nz.js":6319,"./en-sg":1662,"./en-sg.js":1662,"./eo":2915,"./eo.js":2915,"./es":5655,"./es-do":5251,"./es-do.js":5251,"./es-mx":6112,"./es-mx.js":6112,"./es-us":1146,"./es-us.js":1146,"./es.js":5655,"./et":5603,"./et.js":5603,"./eu":7763,"./eu.js":7763,"./fa":6959,"./fa.js":6959,"./fi":1897,"./fi.js":1897,"./fil":2549,"./fil.js":2549,"./fo":4694,"./fo.js":4694,"./fr":4470,"./fr-ca":3049,"./fr-ca.js":3049,"./fr-ch":2330,"./fr-ch.js":2330,"./fr.js":4470,"./fy":5044,"./fy.js":5044,"./ga":9295,"./ga.js":9295,"./gd":2101,"./gd.js":2101,"./gl":8794,"./gl.js":8794,"./gom-deva":7884,"./gom-deva.js":7884,"./gom-latn":3168,"./gom-latn.js":3168,"./gu":5349,"./gu.js":5349,"./he":4206,"./he.js":4206,"./hi":94,"./hi.js":94,"./hr":316,"./hr.js":316,"./hu":2138,"./hu.js":2138,"./hy-am":1423,"./hy-am.js":1423,"./id":9218,"./id.js":9218,"./is":135,"./is.js":135,"./it":626,"./it-ch":150,"./it-ch.js":150,"./it.js":626,"./ja":9183,"./ja.js":9183,"./jv":4286,"./jv.js":4286,"./ka":2105,"./ka.js":2105,"./kk":7772,"./kk.js":7772,"./km":8758,"./km.js":8758,"./kn":9282,"./kn.js":9282,"./ko":3730,"./ko.js":3730,"./ku":1408,"./ku.js":1408,"./ky":3291,"./ky.js":3291,"./lb":6841,"./lb.js":6841,"./lo":5466,"./lo.js":5466,"./lt":7010,"./lt.js":7010,"./lv":7595,"./lv.js":7595,"./me":9861,"./me.js":9861,"./mi":5493,"./mi.js":5493,"./mk":5966,"./mk.js":5966,"./ml":7341,"./ml.js":7341,"./mn":5115,"./mn.js":5115,"./mr":370,"./mr.js":370,"./ms":9847,"./ms-my":1237,"./ms-my.js":1237,"./ms.js":9847,"./mt":2126,"./mt.js":2126,"./my":6165,"./my.js":6165,"./nb":4924,"./nb.js":4924,"./ne":6744,"./ne.js":6744,"./nl":3901,"./nl-be":9814,"./nl-be.js":9814,"./nl.js":3901,"./nn":3877,"./nn.js":3877,"./oc-lnc":2135,"./oc-lnc.js":2135,"./pa-in":5858,"./pa-in.js":5858,"./pl":4495,"./pl.js":4495,"./pt":9520,"./pt-br":7971,"./pt-br.js":7971,"./pt.js":9520,"./ro":6459,"./ro.js":6459,"./ru":1793,"./ru.js":1793,"./sd":950,"./sd.js":950,"./se":7930,"./se.js":7930,"./si":124,"./si.js":124,"./sk":4249,"./sk.js":4249,"./sl":4985,"./sl.js":4985,"./sq":1104,"./sq.js":1104,"./sr":9131,"./sr-cyrl":9915,"./sr-cyrl.js":9915,"./sr.js":9131,"./ss":5893,"./ss.js":5893,"./sv":8760,"./sv.js":8760,"./sw":1172,"./sw.js":1172,"./ta":7333,"./ta.js":7333,"./te":3110,"./te.js":3110,"./tet":2095,"./tet.js":2095,"./tg":7321,"./tg.js":7321,"./th":9041,"./th.js":9041,"./tk":9005,"./tk.js":9005,"./tl-ph":5768,"./tl-ph.js":5768,"./tlh":9444,"./tlh.js":9444,"./tr":2397,"./tr.js":2397,"./tzl":8254,"./tzl.js":8254,"./tzm":1106,"./tzm-latn":699,"./tzm-latn.js":699,"./tzm.js":1106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":7691,"./uk.js":7691,"./ur":3795,"./ur.js":3795,"./uz":6791,"./uz-latn":588,"./uz-latn.js":588,"./uz.js":6791,"./vi":5666,"./vi.js":5666,"./x-pseudo":4378,"./x-pseudo.js":4378,"./yo":5805,"./yo.js":5805,"./zh-cn":3839,"./zh-cn.js":3839,"./zh-hk":5726,"./zh-hk.js":5726,"./zh-mo":9807,"./zh-mo.js":9807,"./zh-tw":4152,"./zh-tw.js":4152};function o(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=i,e.exports=o,o.id=6700}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var a=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],i=e[u][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){var e={179:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},r=self.webpackChunkalianzas=self.webpackChunkalianzas||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[161],(function(){return n(1110)}));o=n.O(o)}();
//# sourceMappingURL=main.5d74d545.js.map