/*! For license information please see 72.6fdf778a.chunk.js.LICENSE.txt */
(this["webpackJsonpbitcoin-price-betting"]=this["webpackJsonpbitcoin-price-betting"]||[]).push([[72],{437:function(e,t,r){"use strict";r.r(t);var n=r(10),a=r(8),o=r(3),i=r(1),c=r.n(i),l=r(394),s=r(113),u=r(387),m=r(388),d=r(372),h=r(381),p=r(353),f=r(421),v=r.n(f),g=r(340),y=r(404),x=r(17),b=r(420),E=r(428),w=r(425),O=r(46),j=r(25),k=r.n(j),L=r(155),S=(r(154),r(45)),C=r(33),N=r(30),B=(r(436),r(293)),_=r(173),P=r(413),I=r.n(P),T=r(412),F=r.n(T);function G(){G=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var u={};function m(){}function d(){}function h(){}var p={};c(p,a,(function(){return this}));var f=Object.getPrototypeOf,v=f&&f(f(j([])));v&&v!==t&&r.call(v,a)&&(p=v);var g=h.prototype=m.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function x(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,c(g,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(x.prototype),c(x.prototype,o,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new x(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},y(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;w(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var D=Object(g.a)((function(e){var t,r;return{commentfullBox:{position:"relative","& .canelIcon":{position:"fixed",top:"20px",left:"20px",fontSize:"30px"}},rightBox:(t={display:"flex",alignItems:"center",justifyContent:"center",height:"97vh"},Object(o.a)(t,e.breakpoints.down("sm"),{height:"auto",paddingTop:"50px"}),Object(o.a)(t,"& img",{width:"auto",maxWidth:"100%",maxHeight:"90vh"}),Object(o.a)(t,"& video",{width:"auto",maxWidth:"100%",maxHeight:"90vh"}),t),commentBox:{borderTop:"0.5px solid #737373",borderBottom:"0.5px solid #737373",marginTop:"16px",padding:"5px 0","& button":{"& svg":{fontSize:"20px",marginRight:"5px"}}},searchaddress:{paddingTop:"16px","& .figure":{margin:"0",marginRight:"15px",position:"relative","& .profileimage":(r={display:"flex",height:"50px",width:"50px",borderRadius:"50%",overflow:"hidden",backgroundColor:"#101010"},Object(o.a)(r,e.breakpoints.down("xs"),{height:"40px",width:"40px"}),Object(o.a)(r,"& img",{width:"auto",minWidth:"100%",minHeight:"50px"}),r)},"& button":Object(o.a)({backgroundColor:"#373636",height:"40px",borderRadius:"5px"},e.breakpoints.down("xs"),{height:"40px"})},mainBox:{padding:"20px"},emojiBox:{position:"absolute",width:"100%",zIndex:"100"}}}));t.default=function(e){var t,r,o,f,g,j,P=Object(i.useContext)(C.a),T=e.data,W=e.setOpenCommentBox,z=e.openCommentBox,H=e.openCommentBoxId,R=e.listPublicExclusiveHandler,U=Object(x.g)(),A=D(),J=c.a.useState(!1),M=Object(a.a)(J,2),Y=(M[0],M[1],Object(i.useState)(!1)),q=Object(a.a)(Y,2),K=(q[0],q[1],Object(x.h)()),Q=Object(i.useState)(),V=Object(a.a)(Q,2),X=V[0],Z=V[1],$=Object(i.useState)(),ee=Object(a.a)($,2),te=ee[0],re=ee[1],ne=Object(i.useState)(!0),ae=Object(a.a)(ne,2),oe=ae[0],ie=ae[1],ce=Object(i.useState)(""),le=Object(a.a)(ce,2),se=le[0],ue=le[1],me=c.a.useState(!1),de=Object(a.a)(me,2),he=(de[0],de[1],c.a.useState(!1)),pe=Object(a.a)(he,2),fe=pe[0],ve=pe[1],ge=Object(i.useState)(null),ye=Object(a.a)(ge,2),xe=ye[0],be=ye[1];if((null===(t=P.userData)||void 0===t?void 0:t._id)&&te){var Ee,we=null===te||void 0===te||null===(Ee=te.reactOnPost)||void 0===Ee?void 0:Ee.filter((function(e){var t;return e.userId===(null===(t=P.userData)||void 0===t?void 0:t._id)}));j=(null===we||void 0===we?void 0:we.length)>0}var Oe=function(){var e=Object(n.a)(G().mark((function e(){var t;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({method:"GET",url:N.a.viewExclusivepost+"".concat(H||X),headers:{token:window.localStorage.getItem("token")}});case 3:200===(t=e.sent).data.responseCode&&re(t.data.result),ie(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),re();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(n.a)(G().mark((function e(t){var r;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),ve(!0),""===se){e.next=14;break}return e.prev=3,e.next=6,k()({method:"POST",url:N.a.commentOnpost,headers:{token:window.localStorage.getItem("token")},data:{postId:te._id,message:se}});case 6:200===(r=e.sent).data.responseCode&&(ve(!1),Oe(),S.b.success(r.data.responseMessage),ue("")),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),S.b.error(e.t0),ve(!1);case 14:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){if(K.search.substring(1,K.search.length)){var e=K.search.substring(1,K.search.length);Z(e)}(H||X)&&Oe(),Oe()}),[K.search,H,X]);var ke=function(){var e=Object(n.a)(G().mark((function e(t){var r;return G().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k()({method:"GET",url:N.a.reactOnPost+t,headers:{token:window.localStorage.getItem("token")},data:{postId:t},params:{emoji:xe}});case 3:200===(r=e.sent).data.responseCode&&(R(),Oe(),be(null),S.b.success(r.data.responseMessage),ie(!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),be(null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),Le=null===te||void 0===te||null===(r=te.mediaUrl)||void 0===r?void 0:r.includes(".mp4"),Se=Object(i.useState)(!1),Ce=Object(a.a)(Se,2),Ne=(Ce[0],Ce[1]);return Object(i.useEffect)((function(){Oe()})),c.a.createElement(y.a,{title:"Dashboard"},c.a.createElement(l.a,{maxWidth:"fixed"},oe?c.a.createElement(s.a,{className:A.commentfullBox},c.a.createElement(_.a,null)):c.a.createElement(c.a.Fragment,null,void 0!==te?c.a.createElement(s.a,{className:A.commentfullBox},c.a.createElement(u.a,{"aria-label":"cancle",onClick:function(){z?W(!1):U.goBack()},className:"canelIcon"},c.a.createElement(O.c,null)),c.a.createElement(m.a,{container:!0,spacing:2},c.a.createElement(m.a,{item:!0,sm:12,md:6,lg:8},c.a.createElement(s.a,{className:A.rightBox},Le?c.a.createElement("video",{width:"100%",style:{cursor:"pointer"},controls:!0},c.a.createElement("source",{src:te.mediaUrl,type:"video/mp4"})):c.a.createElement("img",{src:null===te||void 0===te?void 0:te.mediaUrl,style:{cursor:"pointer"}}))),c.a.createElement(m.a,{item:!0,sm:12,md:6,lg:4},c.a.createElement(s.a,{mt:3},c.a.createElement(s.a,{className:A.mainBox},c.a.createElement(s.a,{mb:3},c.a.createElement(E.a,{dataList:te})),c.a.createElement(s.a,null,c.a.createElement(m.a,{container:!0,alignItems:"center"},c.a.createElement(m.a,{item:!0,xs:5}," ",(null===te||void 0===te?void 0:te.reactOnPostCount)>0?c.a.createElement(s.a,null,"+",null===te||void 0===te?void 0:te.reactOnPostCount,"\xa0 Likes"):c.a.createElement(s.a,null,null===te||void 0===te?void 0:te.reactOnPostCount,"\xa0Likes")),c.a.createElement(m.a,{item:!0,xs:7,align:"right"},c.a.createElement("label",null,null===te||void 0===te?void 0:te.totalComment," Comments")," ","\xa0 \xa0 \xa0 \xa0",c.a.createElement("label",null,"PUBLIC"===(null===te||void 0===te?void 0:te.postType)&&c.a.createElement(c.a.Fragment,null,null===te||void 0===te?void 0:te.amount,"\xa0",L.f)," ")))),c.a.createElement(s.a,{className:A.commentBox,mb:3},c.a.createElement(m.a,{container:!0},c.a.createElement(m.a,{item:!0,xs:4},c.a.createElement(m.a,{item:!0,xs:4,align:"right"},c.a.createElement(u.a,{className:A.iconbutton,onClick:function(){be("new"),Ne(!1),ke(te._id)}},j?c.a.createElement(c.a.Fragment,null,c.a.createElement(F.a,{style:{color:"red"}})):c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,{style:{color:"#BFBFBF"}}))))),c.a.createElement(m.a,{item:!0,xs:6,align:"center"},c.a.createElement(d.a,{color:"primary",size:"large"}," ",c.a.createElement(w.a,null),"Comments")))),c.a.createElement(s.a,{className:"CommentscrollDiv"},(null===te||void 0===te?void 0:te.comment)&&(null===te||void 0===te||null===(o=te.comment)||void 0===o?void 0:o.map((function(e,t){return c.a.createElement(b.a,{key:t,listPublicExclusiveHandler:Oe,data:e,dataList:te,dataParent:T})})))),c.a.createElement(s.a,{className:A.searchaddress,mt:3},c.a.createElement(m.a,{container:!0,spacing:1,alignItems:"center"},c.a.createElement(m.a,{item:!0,xs:2,sm:2},c.a.createElement(s.a,{className:"figure"},c.a.createElement(s.a,{className:"profileimage"},c.a.createElement("img",{src:(null===(f=P.userData)||void 0===f?void 0:f.profilePic)?null===(g=P.userData)||void 0===g?void 0:g.profilePic:"images/user.png",alt:"user data"})))),c.a.createElement(m.a,{item:!0,xs:10,sm:10},c.a.createElement(s.a,{className:"figure"},c.a.createElement("form",{onSubmit:function(e){return je(e)}},c.a.createElement(m.a,{container:!0,spacing:1},c.a.createElement(m.a,{item:!0,xs:9,sm:9},c.a.createElement(h.a,{id:"outlined-basic",variant:"outlined",name:"Text Field",placeholder:"Write here...",type:"text",value:se,onChange:function(e){return ue(e.target.value)},fullWidth:!0,error:fe&&""===se}),c.a.createElement(p.a,{error:!0},fe&&""===se&&c.a.createElement(s.a,{ml:1,style:{fontSize:"12px"}},"Comment is required"))),c.a.createElement(m.a,{item:!0,xs:3,sm:3,align:"center"},c.a.createElement(d.a,{size:"large",color:"primary",type:"submit",style:{height:"40px"},fullWidth:!0,onClick:je},c.a.createElement(v.a,{style:{color:"#E31A89"}})))))))))))))):c.a.createElement(B.a,null))))}}}]);
//# sourceMappingURL=72.6fdf778a.chunk.js.map