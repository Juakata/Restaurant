!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};t(3)(o,r);o.locals&&(e.exports=o.locals)},function(e,n,t){(e.exports=t(2)(!1)).push([e.i,"body {\n  margin: 0;\n  padding: 0;\n  background: #d1d1d1;\n}\n\nh1 {\n  text-align: center;\n  color: white;\n  text-shadow: 1px 1px 1px black;\n}\n\np {\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  padding: 10px;\n  max-width: 1000px;\n  margin: 0 auto;\n  text-shadow: 1px 1px 1px black;\n}\n\n#main {\n  padding: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n  min-height: 80vh;\n}\n\n.cont-info {\n  background: #363636;\n  padding: 10px;\n  max-width: 1000px;\n  border-radius: 20px;\n  margin: 0 auto;\n  border: 1px solid white;\n}\n\n.top-menu {\n  display: flex;\n  justify-content: space-around;\n  background: #363636;\n  color: white;\n  margin: 0;\n  padding: 25px;\n  font-size: 20px;\n  align-items: center;\n}\n\n.top-menu li {\n  list-style: none;\n  cursor: pointer;\n}\n\n.top-menu li:hover {\n  color: grey;\n}\n\n.logo {\n  width: 75px;\n  cursor: pointer;\n}\n\n.footer-wrapper {\n  margin: 0;\n  background: #363636;\n  padding: 10px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.footer-wrapper li{\n  list-style: none;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.fa-facebook {\n  background: #1e16ba;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 20px;\n}\n\n.fa-facebook {\n  background: #1e16ba;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 20px;\n}\n\n.fa-facebook:hover {\n  background: #4366d1;\n}\n\n.fa-instagram {\n  background: #d41cb8;\n  color: white;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n.fa-instagram:hover {\n  background: #e880dc;\n}\n",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,d,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t})).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var i=0;i<e.length;i++){var d=e[i];null!=d[0]&&o[d[0]]||(t&&!d[2]?d[2]=t:t&&(d[2]="(".concat(d[2],") and (").concat(t,")")),n.push(d))}},n}},function(e,n,t){"use strict";var o,r={},a=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}();function d(e,n){for(var t=[],o={},r=0;r<e.length;r++){var a=e[r],i=n.base?a[0]+n.base:a[0],d={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(d):t.push(o[i]={id:i,parts:[d]})}return t}function c(e,n){for(var t=0;t<e.length;t++){var o=e[t],a=r[o.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](o.parts[i]);for(;i<o.parts.length;i++)a.parts.push(g(o.parts[i],n))}else{for(var d=[];i<o.parts.length;i++)d.push(g(o.parts[i],n));r[o.id]={id:o.id,refs:1,parts:d}}}}function s(e){var n=document.createElement("style");if(void 0===e.attributes.nonce){var o=t.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(t){n.setAttribute(t,e.attributes[t])})),"function"==typeof e.insert)e.insert(n);else{var r=i(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function m(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function g(e,n){var t,o,r;if(n.singleton){var a=h++;t=f||(f=s(n)),o=p.bind(null,t,a,!1),r=p.bind(null,t,a,!0)}else t=s(n),o=m.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).attributes="object"==typeof n.attributes?n.attributes:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a());var t=d(e,n);return c(t,n),function(e){for(var o=[],a=0;a<t.length;a++){var i=t[a],s=r[i.id];s&&(s.refs--,o.push(s))}e&&c(d(e,n),n);for(var l=0;l<o.length;l++){var u=o[l];if(0===u.refs){for(var p=0;p<u.parts.length;p++)u.parts[p]();delete r[u.id]}}}}},function(e,n,t){"use strict";t.r(n);t(0);var o=()=>{document.getElementById("container").innerHTML+='<nav>\n    <ul class="top-menu">\n      <li id="about">About us</li>\n      <li id="contact">Contact us</li>\n      <li id="home"><img class="logo" src="https://pitchcardiff.com/wp-content/uploads/2018/03/Asset-5@330x-1-uai-258x192.png" alt="logo"></li>\n      <li id="drinks">Drinks</li>\n      <li id="food">Food</li>\n    </ul>\n  </nav>'};var r=()=>{const e=document.getElementById("container"),n=document.createElement("footer"),t=document.createElement("ul");t.classList.add("footer-wrapper");const o=document.createElement("li"),r=document.createElement("span");r.classList.add("fa"),r.classList.add("fa-facebook"),o.appendChild(r);const a=document.createElement("li"),i=document.createElement("span");i.classList.add("fa"),i.classList.add("fa-instagram"),a.appendChild(i),t.appendChild(o),t.appendChild(a),n.appendChild(t),e.appendChild(n)};var a=()=>{const e=document.getElementById("main");e.innerHTML="";const n=document.createElement("h1"),t=document.createTextNode("CROESO, WELCOME TO PITCH BAR & EATERY, MILL LANE CARDIFF");n.appendChild(t),e.appendChild(n);const o=document.createElement("p"),r=document.createTextNode("We’re fiercely independent, priding ourself on simple,\n  honest, modern Welsh food. Obsessively, we seek the best, most mouth-watering\n  ingredients we can find locally from farmers, growers, makers and markets,\n  fusing them together to create innovative flavours and fresh, vibrant,\n  sumptuous dishes; putting our passion for your palate on a plate.");o.appendChild(r),e.appendChild(o)};var i=()=>{const e=document.getElementById("main");e.innerHTML="";const n=document.createElement("h1"),t=document.createTextNode("What Our Guests Say");n.appendChild(t),e.appendChild(n);const o=document.createElement("p"),r=document.createTextNode("“The food and the waitstaff are incredible!\n    I wanted to try a Welsh dish, so the chef whipped up rarebit on the spot. The\n    lamb cawl was very tender, like it had been slow cooked for hours. The staff\n    was attentive and gave us tips on things to do in the area. It was so easy to\n    talk to them. We really felt comfortable there.”");o.appendChild(r),e.appendChild(o)},d=t.p+"fe48325f58b0deb7d431af6a90253062.png";var c=()=>{const e=document.getElementById("main");e.innerHTML="";const n=document.createElement("img");n.setAttribute("src",d),n.setAttribute("alt","Drinks menu"),e.appendChild(n)},s=t.p+"3d74d57c9189b6deecbe6b1c4ecda941.png",l=t.p+"4bdea78d87011ebddb4f3306f285d00c.png";var u=e=>{const n=document.getElementById("main");n.innerHTML="";const t=document.createElement("img");t.setAttribute("alt","food"),1===e?t.setAttribute("src",l):t.setAttribute("src",s),n.appendChild(t)};var p=()=>{const e=document.getElementById("main");e.innerHTML="";const n=document.createElement("div");n.classList.add("cont-info");const t=document.createElement("h1");t.appendChild(document.createTextNode("Contact Info")),n.appendChild(t);const o=document.createElement("p");o.appendChild(document.createTextNode("Book a table for either food or drinks, parties of groups!")),n.appendChild(o);const r=document.createElement("p");r.appendChild(document.createTextNode("Phone number: 02920 228 882")),n.appendChild(r);const a=document.createElement("p");a.appendChild(document.createTextNode("Email: bookings@pitchcardiff.com")),n.appendChild(a);const i=document.createElement("p");i.appendChild(document.createTextNode("Open from breakfast 'till cocktails daily, every dish we serve is lovingly handmade with heart from our home on Mill Lane.")),n.appendChild(i),e.appendChild(n)},m=t.p+"0b04178237375ba558ada041da615745.jpg";const f=document.getElementById("container");o();const h=document.createElement("main");h.id="main",h.style.backgroundImage=`url(${m})`,f.appendChild(h),window.setInterval((function(){u(g),g=1===g?2:1}),5e3);let g=1;a(),r(),document.getElementById("about").addEventListener("click",()=>{i(),clearInterval(timemenu)},!1),document.getElementById("home").addEventListener("click",()=>{a(),clearInterval(timemenu)},!1),document.getElementById("drinks").addEventListener("click",()=>{c(),clearInterval(timemenu)},!1),document.getElementById("contact").addEventListener("click",()=>{p(),clearInterval(timemenu)},!1),document.getElementById("food").addEventListener("click",()=>{u(2),timemenu()},!1)}]);