/*! For license information please see 68.9d44a5af.chunk.js.LICENSE.txt */
(this["webpackJsonpbitcoin-price-betting"]=this["webpackJsonpbitcoin-price-betting"]||[]).push([[68],{1568:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return j}));var n=r(10),o=(r(54),r(8)),a=r(3),i=r(1),c=r.n(i),u=r(340),s=r(113),l=r(71),f=r(150),p=r(381),h=r(17),d=r(372),v=r(25),g=r.n(v),m=r(30),b=r(45),y=r(33),x=r(154),w=r(631);function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var l={};function f(){}function p(){}function h(){}var d={};c(d,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==e&&r.call(g,o)&&(d=g);var m=h.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function y(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=h,c(m,"constructor",h),c(h,"constructor",p),p.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},b(y.prototype),c(y.prototype,a,(function(){return this})),t.AsyncIterator=y,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new y(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(m),c(m,i,"Generator"),c(m,o,(function(){return this})),c(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}var O=Object(u.a)((function(t){var e;return{heading:{"& h4":Object(a.a)({fontSize:"30px",color:"#696969"},t.breakpoints.down("xs"),{fontSize:"18px"}),"& p":{color:"#696969",maxWidth:"384px",lineHeight:"24px",marginTop:"10px"}},bannerBox:(e={padding:"10px 0px 150px 0px"},Object(a.a)(e,t.breakpoints.down("xs"),{padding:"90px 0"}),Object(a.a)(e,"& label",{color:"#e8aa3e",fontSize:"14px"}),e),root:Object(a.a)({padding:"25px"},t.breakpoints.down("xs"),{padding:"10px"}),button:{fontWeight:"400",fontSize:"14px",lineHeight:"0px",boxShadow:"none",borderBottom:"0",borderRadius:"0",height:"40px",background:"transparent",color:"#7E6196 ","& svg":{width:"34px",height:"35px",background:"#FCF2FA",borderRadius:"10px",padding:"5px 6px",color:"rgba(152, 126, 171, 0.5)"},"&:hover":{backgroundColor:"#E6E6E6",boxShadow:"none",borderRadius:"5px"}},Buttonbox:{"& Button":{marginRight:"5px",minWidth:"106px",boxSizing:"border-box",fontWeight:"400",borderRadius:"10px",padding:"11px 16px",background:"#242526",color:"#9E9E9E",fontFamily:"'Montserrat'",marginTop:"7px",fontSize:"14px","&:hover":{background:"#EC167F",color:"#fff"},"&:active":{background:"#EC167F",color:"#fff"}}}}}));function j(){var t,e,r,a=Object(h.g)(),u=O(),v=Object(i.useContext)(y.a),j=Object(i.useState)(!1),k=Object(o.a)(j,2),L=k[0],S=k[1],_=Object(i.useState)([]),N=Object(o.a)(_,2),F=(N[0],N[1],Object(i.useState)([])),T=Object(o.a)(F,2),C=T[0],G=T[1],I=Object(i.useState)(""),P=Object(o.a)(I,2),B=P[0],R=(P[1],Object(i.useState)()),z=Object(o.a)(R,2),A=z[0],D=z[1],W=Object(i.useState)(!1),M=Object(o.a)(W,2),Y=(M[0],M[1],function(){var t=Object(n.a)(E().mark((function t(e){var r,n;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g()({method:"GET",url:m.a.listInterest});case 3:200===(r=t.sent).data.responseCode&&(n=r.data.result.docs.map((function(t,e){return t.name})),G(n)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}());Object(i.useEffect)((function(){Y()}),[]);var H=function(){var t=Object(n.a)(E().mark((function t(){var e;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((null===A||void 0===A?void 0:A.length)>2)){t.next=17;break}return t.prev=1,S(!0),B.split(","),t.next=6,g.a.put(m.a.addInterest,{interest:A},{headers:{token:localStorage.getItem("token")}});case 6:200===(e=t.sent).data.responseCode?(b.b.success(e.data.responseMessage),v.handleUserProfileApi(),setTimeout((function(){a.push("/explore")}),3e3)):b.b.error(e.data.responseMessage),S(!1),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),b.b.error(t.t0.message),S(!1);case 15:t.next=18;break;case 17:b.b.warn("Select atleast 3 interest");case 18:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){var t;v.userData&&D(null===(t=v.userData)||void 0===t?void 0:t.interest)}),[v.userData]),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{className:u.bannerBox},c.a.createElement(l.a,{className:u.root,elevation:2},c.a.createElement(s.a,{className:u.root},c.a.createElement(s.a,{className:u.heading,align:"center"},c.a.createElement(f.a,{variant:"h4"},"Tell us more about your interest."),c.a.createElement(f.a,{variant:"body2"},"Pick at least 3 favorite topics of yours.")),c.a.createElement(s.a,{mt:2},c.a.createElement(w.a,{multiple:!0,id:"tags-standard",options:C,value:A,defaultValue:null===(t=v.userData)||void 0===t?void 0:t.interest,onChange:function(t,e){D(e)},getOptionLabel:function(t){return t},renderInput:function(t){return c.a.createElement(p.a,Object.assign({},t,{variant:"outlined",label:"Interest"}))}})),c.a.createElement(s.a,{className:u.Buttonbox,mt:3},c.a.createElement(s.a,{style:{marginBottom:"-10px"}},"Your interests"),c.a.createElement(s.a,{mt:3,textAlign:"left",display:"flex",style:{maxWidth:"100%",overflow:"auto",marginTop:"24px"}},null===v||void 0===v||null===(e=v.userData)||void 0===e||null===(r=e.interest)||void 0===r?void 0:r.map((function(t){return c.a.createElement(f.a,{style:{background:"#e31a89",marginRight:"10px",borderRadius:"5px",padding:"5px"}},t)}))),c.a.createElement(s.a,{mt:3,textAlign:"center"},c.a.createElement(d.a,{variant:"contained",style:{backgroundColor:"#e31a89",color:"#fff"},onClick:function(){return H()},disabled:L},"Submit ",L&&c.a.createElement(x.a,null))))))))}}}]);
//# sourceMappingURL=68.9d44a5af.chunk.js.map