(this["webpackJsonptest-reactivate"]=this["webpackJsonptest-reactivate"]||[]).push([[0],{25:function(n,t,e){n.exports=e(48)},48:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(18),i=e.n(a),c=e(2),u=e(3),l=e(4),s=e(6),d=e.n(s),p=e(19);var f=e(20),b=e.n(f);function h(){var n=Object(c.a)(["\n    min-width:50px;\n    max-height:50px;\n    padding:5px 8px;\n    background-color:blue;\n    border:1px solid blue;\n    border-radius:2px;\n    color:white;\n    cursor:pointer;\n    transition:0.2s;\n    \n    :hover{\n        background-color:white;\n        color:blue;\n    }\n    :active{\n        transform:scale(0.95);\n    }\n"]);return h=function(){return n},n}var g=u.b.button(h()),v=function(n){var t=n.text,e=void 0===t?"default":t,r=n.type,a=void 0===r?"button":r,i=n.fnClick,c=void 0===i?function(){}:i,u=n.fnChange,l=void 0===u?function(){}:u;return o.a.createElement(g,{type:a,onClick:c,onChange:l,name:e},e)};function m(){var n=Object(c.a)(["\n    position: fixed;\n    top:5%;\n    left:50%;\n    transform:translate(-50%, -50%);\n    min-width:250px;\n    min-height:30px;\n    padding: 0 5px;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    input{\n        cursor:pointer;\n    }\n"]);return m=function(){return n},n}var x=u.b.div(m()),w=function(n){n.checked,n.fhChange;var t=Object(r.useState)("Determine my position"),e=Object(l.a)(t,2),a=e[0],i=e[1],c="www.metaweather.com/api/location/search/?lattlong=",u=function(){var n=Object(p.a)(d.a.mark((function n(){var t,e;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.geolocation?(navigator.geolocation.getCurrentPosition((function(n){var t=n.coords.latitude,e=n.coords.longitude;return console.log("Latitude: ".concat(t," \xb0, Longitude: ").concat(e," \xb0")),"Latitude: ".concat(t," \xb0, Longitude: ").concat(e," \xb0")}),(function(){return"Unable to retrieve your location"})),"Locating\u2026"):"Geolocation is not supported by your browser";case 2:return t=n.sent,i(t),console.log("test Url","".concat(c).concat("36.96,-122.02")),n.next=7,b.a.get("".concat(c).concat("36.96,-122.02"));case 7:e=n.sent,console.log(e);case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return o.a.createElement(x,null,o.a.createElement("p",null,a),o.a.createElement(v,{type:"button",text:"Request",fnClick:u}))};function j(){var n=Object(c.a)(["\n    appearance: none;\n    width: 100%;\n    height: 25px;\n    background: #d3d3d3;\n    border-radius:2px;\n    opacity:.7;\n    transition:.2s;\n    :hover{\n        opacity:1\n    }\n    ::-webkit-slider-thumb {\n    appearance: none;\n    width: 25px;\n    height: 25px;\n    background: blue;\n    border-radius:2px;\n    cursor: pointer; \n}\n"]);return j=function(){return n},n}function O(){var n=Object(c.a)(["\n    position: fixed;\n    bottom:5%;\n    left:50%;\n    transform:translate(-50%, -50%);\n    min-width:250px;\n    min-height:30px;\n"]);return O=function(){return n},n}var y=u.b.div(O()),k=u.b.input(j()),E=function(n){var t=n.value,e=void 0===t?5:t,r=n.fnInput,a=void 0===r?function(){}:r;return o.a.createElement(y,null,o.a.createElement(k,{type:"range",min:"1",max:"765",step:"1",name:"slider",value:e,onInput:a}))};function C(){var n=Object(c.a)(["\n    width:100vw;\n    height:100vh;\n    background-color:",";\n"]);return C=function(){return n},n}var L=u.b.div(C(),(function(n){return"RGB(".concat(n.bg,")")})),S=function(){var n=Object(r.useState)("0,255,255"),t=Object(l.a)(n,2),e=t[0],a=t[1],i=Object(r.useState)(5),c=Object(l.a)(i,2),u=c[0],s=c[1],d=Object(r.useState)(!1),p=Object(l.a)(d,2),f=p[0],b=p[1],h=Object(r.useState)(""),g=Object(l.a)(h,2),v=(g[0],g[1]);Object(r.useEffect)((function(){a(function(n){var t="0,255,255".split(",");return n<=255?(t.splice(2,1,255-n),t.join()):n>255&&n<=510?(t.splice(0,3,n-255,255,0),t.join()):n>510&&n<=765?(t.splice(0,3,255,255-(n-510),0),t.join()):void 0}(u))}),[u]);var m=function(n){"myGeolocation"===n.target.name?b(n.target.checked):"position"===n.target.name?v(n.target.value):"slider"===n.target.name&&s(n.target.value)};return o.a.createElement(L,{bg:e},o.a.createElement(w,{checked:f,fhChange:m}),o.a.createElement(E,{value:u,fnInput:m}))};function I(){var n=Object(c.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  *:after, *:before {\n    box-sizing: inherit;\n  }\n\n  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{\n    margin: 0;\n    padding: 0;\n  }\n  h1, h2, h3, h4,h5, h6{\n    font-weight: normal;\n  }\n  input, button{\n    outline:none;\n    border:none;\n    background:none;\n  }\n\n  body{\n    font-family: 'Helvetica', sans-serif;\n    font-size: 14px;\n    color: #000000;\n    font-weight: 400;\n    min-width: 320px;\n    overflow-x: hidden;\n    background: #ffffff;\n    line-height: normal;\n  }\n\n  input, textarea{\n    outline: none;\n  }\n\n"]);return I=function(){return n},n}var z=Object(u.a)(I());var G=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(z,null),o.a.createElement(S,null))};i.a.render(o.a.createElement(G,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.4478eeb7.chunk.js.map