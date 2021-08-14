(this["webpackJsonpvr-apps.github.io"]=this["webpackJsonpvr-apps.github.io"]||[]).push([[0],{72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(47),c=n.n(o),s=n(5);function i(e){var t=e.Parent,n=e.Sandboxed;Object(r.useEffect)((function(){window.parent===window&&u()}),[]);var a=window.parent===window?t:n;return Object(s.jsx)(a,{})}function u(){var e;null===(e=document.querySelector("#security-sandbox-iframe"))||void 0===e||e.remove();var t=document.createElement("iframe");return t.id="security-sandbox-iframe",t.allow="xr-spatial-tracking",t.sandbox="allow-scripts allow-modals",t.src=window.location.href,document.body.prepend(t),t}function l(e){Object(r.useEffect)((function(){function t(t){var n=t.data;e(n)}return window.addEventListener("message",t),function(){return window.removeEventListener("message",t)}}),[e])}function p(e){(window.parent===window?document.querySelector("#security-sandbox-iframe").contentWindow:window.parent).postMessage(e,"*")}var d=n(19),f=n(95),b=n(96);var x=n(26),j=n.n(x),v=n(32),h=n(94),m=n(92),w=n(91),O=n(97),y=n(98),g=n(99);function S(e){var t=e.app,n=t.name,r=t.developer,a=t.js,o=t.thumbnail,c=e.onPlay;return Object(s.jsx)(m.a,{sx:{maxWidth:345,margin:"12px"},children:Object(s.jsxs)(w.a,{onClick:function(){c(a)},children:[Object(s.jsx)("span",{style:{fontSize:"70px",position:"absolute",top:"calc(100px - 35px)",left:"calc(150px - 35px)"},children:"\u25b6\ufe0f"}),Object(s.jsx)(O.a,{sx:{height:200,width:300},image:o}),Object(s.jsxs)(y.a,{children:[Object(s.jsx)(g.a,{gutterBottom:!0,variant:"h5",component:"div",children:n}),Object(s.jsx)(g.a,{variant:"body2",color:"text.secondary",children:r})]})]})})}function k(e){var t=e.apps,n=e.onPlay;return Object(r.useLayoutEffect)((function(){p({getScrollTo:!0})}),[]),Object(s.jsx)(h.a,{container:!0,justifyContent:"center",children:t.map((function(e,t){return Object(s.jsx)(h.a,{item:!0,children:Object(s.jsx)(S,{app:e,onPlay:n})},t)}))})}var E=n(44);function P(){return(P=Object(v.a)(j.a.mark((function e(){var t,n,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=8;break;case 3:return t=e.sent,e.next=6,t.text();case 6:return n=e.sent,e.abrupt("return",Object(E.parse)(n).apps.map((function(e){return e.js="https://vr-apps.github.io"+e.js,e.thumbnail="https://vr-apps.github.io"+e.thumbnail,e})));case 8:return e.next=10,fetch("/vr-apps-catalog/apps.yml");case 10:return r=e.sent,e.next=13,r.text();case 13:return a=e.sent,e.abrupt("return",Object(E.parse)(a).apps);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return e.filter("#dev"===location.hash?function(e){var t=e.main,n=e.dev;return t||n}:function(e){return e.main}).sort((function(e,t){return e.rating>t.rating?-1:1}))}function C(e){return L.apply(this,arguments)}function L(){return(L=Object(v.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.isSecureContext){e.next=2;break}return e.abrupt("return",{error:"need https"});case 2:if(navigator.xr){e.next=4;break}return e.abrupt("return",{error:"WebXR not supported"});case 4:return e.next=6,navigator.xr.isSessionSupported("immersive-vr");case 6:if(e.sent){e.next=9;break}return e.abrupt("return",{error:"VR in WebXR not supported"});case 9:return e.next=11,navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]});case 11:return n=e.sent,e.next=14,import(t);case 14:return r=e.sent,e.next=17,r.default.renderer.xr.setSession(n);case 17:return e.next=19,new Promise((function(e){n.addEventListener("end",e)}));case 19:return e.abrupt("return",{ok:!0});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(72);c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(i,{Parent:function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],o=Object(r.useState)({x:0,y:0}),c=Object(d.a)(o,2),i=c[0],x=c[1];return l((function(e){var t=e.load,r=e.unload,o=e.setScrollTo,c=e.getScrollTo;n?r&&(u(),a(!1)):(t&&a(!0),o&&x(o)),!0===c&&p({setScrollTo:i})})),n?Object(s.jsx)("div",{className:"Parent",children:Object(s.jsx)(f.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},onClick:function(){u(),a(!1)},children:Object(s.jsx)(b.a,{})})}):null},Sandboxed:function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){(function(){return P.apply(this,arguments)})().then(T).then(a)}),[]),l((function(e){var t=e.setScrollTo;t&&window.scrollTo(t.x,t.y)})),n?Object(s.jsx)(k,{apps:n,onPlay:function(){var e=Object(v.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p({load:!0,setScrollTo:{x:window.scrollX,y:window.scrollY}}),e.next=3,C(t);case 3:n=e.sent,(r=n.error)&&alert(r),p({unload:!0});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}):null}})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.fc8e0b44.chunk.js.map