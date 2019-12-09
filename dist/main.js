!function(e) {
  const n={}; function t(a) {
    if (n[a]) return n[a].exports; const r=n[a]={i: a, l: !1, exports: {}}; return e[a].call(r.exports, r, r.exports, t), r.l=!0, r.exports;
  }t.m=e, t.c=n, t.d=function(e, n, a) {
    t.o(e, n)||Object.defineProperty(e, n, {enumerable: !0, get: a});
  }, t.r=function(e) {
    'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(e, '__esModule', {value: !0});
  }, t.t=function(e, n) {
    if (1&n&&(e=t(e)), 8&n) return e; if (4&n&&'object'==typeof e&&e&&e.__esModule) return e; const a=Object.create(null); if (t.r(a), Object.defineProperty(a, 'default', {enumerable: !0, value: e}), 2&n&&'string'!=typeof e) {
      for (const r in e) {
        t.d(a, r, function(n) {
          return e[n];
        }.bind(null, r));
      }
    } return a;
  }, t.n=function(e) {
    const n=e&&e.__esModule?function() {
      return e.default;
    }:function() {
      return e;
    }; return t.d(n, 'a', n), n;
  }, t.o=function(e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, t.p='', t(t.s=4);
}([function(e, n, t) {
  let a=t(1); 'string'==typeof a&&(a=[[e.i, a, '']]); const r={insert: 'head', singleton: !1}; t(3)(a, r); a.locals&&(e.exports=a.locals);
}, function(e, n, t) {
  (e.exports=t(2)(!1)).push([e.i, 'body {\n  margin: 0;\n  padding: 0;\n  background: #d1d1d1;\n}\n\nh1 {\n  text-align: center;\n  color: white;\n  text-shadow: 1px 1px 1px black;\n}\n\np {\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  text-align: center;\n  padding: 10px;\n  max-width: 1000px;\n  margin: 0 auto;\n  text-shadow: 1px 1px 1px black;\n}\n\n#main {\n  padding: 50px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  text-align: center;\n  min-height: 80vh;\n}\n\n.cont-info {\n  background: #363636;\n  padding: 10px;\n  max-width: 1000px;\n  border-radius: 20px;\n  margin: 0 auto;\n  border: 1px solid white;\n}\n\n.top-menu {\n  display: flex;\n  justify-content: space-around;\n  background: #363636;\n  color: white;\n  margin: 0;\n  padding: 25px;\n  font-size: 20px;\n  align-items: center;\n}\n\n.top-menu li {\n  list-style: none;\n  cursor: pointer;\n}\n\n.top-menu li:hover {\n  color: grey;\n}\n\n.logo {\n  width: 75px;\n  cursor: pointer;\n}\n\n.footer-wrapper {\n  margin: 0;\n  background: #363636;\n  padding: 10px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.footer-wrapper li{\n  list-style: none;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.fa-facebook {\n  background: #1e16ba;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 20px;\n}\n\n.fa-facebook {\n  background: #1e16ba;\n  color: white;\n  padding: 10px 15px;\n  border-radius: 20px;\n}\n\n.fa-facebook:hover {\n  background: #4366d1;\n}\n\n.fa-instagram {\n  background: #d41cb8;\n  color: white;\n  padding: 10px;\n  border-radius: 20px;\n}\n\n.fa-instagram:hover {\n  background: #e880dc;\n}\n', '']);
}, function(e, n, t) {
  'use strict'; e.exports=function(e) {
    const n=[]; return n.toString=function() {
      return this.map((function(n) {
        const t=function(e, n) {
          const t=e[1]||''; const a=e[3]; if (!a) return t; if (n&&'function'==typeof btoa) {
            const r=(i=a, d=btoa(unescape(encodeURIComponent(JSON.stringify(i)))), c='sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(d), '/*# '.concat(c, ' */')); const o=a.sources.map((function(e) {
              return '/*# sourceURL='.concat(a.sourceRoot).concat(e, ' */');
            })); return [t].concat(o).concat([r]).join('\n');
          } let i; let d; let c; return [t].join('\n');
        }(n, e); return n[2]?'@media '.concat(n[2], '{').concat(t, '}'):t;
      })).join('');
    }, n.i=function(e, t) {
      'string'==typeof e&&(e=[[null, e, '']]); for (var a={}, r=0; r<this.length; r++) {
        const o=this[r][0]; null!=o&&(a[o]=!0);
      } for (let i=0; i<e.length; i++) {
        const d=e[i]; null!=d[0]&&a[d[0]]||(t&&!d[2]?d[2]=t:t&&(d[2]='('.concat(d[2], ') and (').concat(t, ')')), n.push(d));
      }
    }, n;
  };
}, function(e, n, t) {
  'use strict'; let a; const r={}; const o=function() {
    return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)), a;
  }; const i=function() {
    const e={}; return function(n) {
      if (void 0===e[n]) {
        let t=document.querySelector(n); if (window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement) {
          try {
            t=t.contentDocument.head;
          } catch (e) {
            t=null;
          }
        }e[n]=t;
      } return e[n];
    };
  }(); function d(e, n) {
    for (var t=[], a={}, r=0; r<e.length; r++) {
      const o=e[r]; const i=n.base?o[0]+n.base:o[0]; const d={css: o[1], media: o[2], sourceMap: o[3]}; a[i]?a[i].parts.push(d):t.push(a[i]={id: i, parts: [d]});
    } return t;
  } function c(e, n) {
    for (let t=0; t<e.length; t++) {
      const a=e[t]; const o=r[a.id]; let i=0; if (o) {
        for (o.refs++; i<o.parts.length; i++)o.parts[i](a.parts[i]); for (;i<a.parts.length; i++)o.parts.push(b(a.parts[i], n));
      } else {
        for (var d=[]; i<a.parts.length; i++)d.push(b(a.parts[i], n)); r[a.id]={id: a.id, refs: 1, parts: d};
      }
    }
  } function l(e) {
    const n=document.createElement('style'); if (void 0===e.attributes.nonce) {
      const a=t.nc; a&&(e.attributes.nonce=a);
    } if (Object.keys(e.attributes).forEach((function(t) {
      n.setAttribute(t, e.attributes[t]);
    })), 'function'==typeof e.insert)e.insert(n); else {
      const r=i(e.insert||'head'); if (!r) throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.'); r.appendChild(n);
    } return n;
  } let s; const u=(s=[], function(e, n) {
    return s[e]=n, s.filter(Boolean).join('\n');
  }); function p(e, n, t, a) {
    const r=t?'':a.css; if (e.styleSheet)e.styleSheet.cssText=u(n, r); else {
      const o=document.createTextNode(r); const i=e.childNodes; i[n]&&e.removeChild(i[n]), i.length?e.insertBefore(o, i[n]):e.appendChild(o);
    }
  } function f(e, n, t) {
    let a=t.css; const r=t.media; const o=t.sourceMap; if (r&&e.setAttribute('media', r), o&&btoa&&(a+='\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), ' */')), e.styleSheet)e.styleSheet.cssText=a; else {
      for (;e.firstChild;)e.removeChild(e.firstChild); e.appendChild(document.createTextNode(a));
    }
  } let m=null; let h=0; function b(e, n) {
    let t; let a; let r; if (n.singleton) {
      const o=h++; t=m||(m=l(n)), a=p.bind(null, t, o, !1), r=p.bind(null, t, o, !0);
    } else {
      t=l(n), a=f.bind(null, t, n), r=function() {
        !function(e) {
          if (null===e.parentNode) return !1; e.parentNode.removeChild(e);
        }(t);
      };
    } return a(e), function(n) {
      if (n) {
        if (n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap) return; a(e=n);
      } else r();
    };
  }e.exports=function(e, n) {
    (n=n||{}).attributes='object'==typeof n.attributes?n.attributes:{}, n.singleton||'boolean'==typeof n.singleton||(n.singleton=o()); const t=d(e, n); return c(t, n), function(e) {
      for (var a=[], o=0; o<t.length; o++) {
        const i=t[o]; const l=r[i.id]; l&&(l.refs--, a.push(l));
      }e&&c(d(e, n), n); for (let s=0; s<a.length; s++) {
        const u=a[s]; if (0===u.refs) {
          for (let p=0; p<u.parts.length; p++)u.parts[p](); delete r[u.id];
        }
      }
    };
  };
}, function(e, n, t) {
  'use strict'; t.r(n); t(0); const a=()=>{
    container.innerHTML+='<nav>\n    <ul class="top-menu">\n      <li id="about">About us</li>\n      <li id="contact">Contact us</li>\n      <li id="home"><img class="logo" src="https://pitchcardiff.com/wp-content/uploads/2018/03/Asset-5@330x-1-uai-258x192.png" alt="logo"></li>\n      <li id="drinks">Drinks</li>\n      <li id="food">Food</li>\n    </ul>\n  </nav>';
  }; const r=()=>{
    const e=document.createElement('footer'); const n=document.createElement('ul'); n.classList.add('footer-wrapper'); const t=document.createElement('li'); const a=document.createElement('span'); a.classList.add('fa'), a.classList.add('fa-facebook'), t.appendChild(a); const r=document.createElement('li'); const o=document.createElement('span'); o.classList.add('fa'), o.classList.add('fa-instagram'), r.appendChild(o), n.appendChild(t), n.appendChild(r), e.appendChild(n), container.appendChild(e);
  }; const o=()=>{
    main.innerHTML=''; const e=document.createElement('h1'); const n=document.createTextNode('CROESO, WELCOME TO PITCH BAR & EATERY, MILL LANE CARDIFF'); e.appendChild(n), main.appendChild(e); const t=document.createElement('p'); const a=document.createTextNode('We’re fiercely independent, priding ourself on simple,\n  honest, modern Welsh food. Obsessively, we seek the best, most mouth-watering\n  ingredients we can find locally from farmers, growers, makers and markets,\n  fusing them together to create innovative flavours and fresh, vibrant,\n  sumptuous dishes; putting our passion for your palate on a plate.'); t.appendChild(a), main.appendChild(t);
  }; const i=()=>{
    main.innerHTML=''; const e=document.createElement('h1'); const n=document.createTextNode('What Our Guests Say'); e.appendChild(n), main.appendChild(e); const t=document.createElement('p'); const a=document.createTextNode('“The food and the waitstaff are incredible!\n    I wanted to try a Welsh dish, so the chef whipped up rarebit on the spot. The\n    lamb cawl was very tender, like it had been slow cooked for hours. The staff\n    was attentive and gave us tips on things to do in the area. It was so easy to\n    talk to them. We really felt comfortable there.”'); t.appendChild(a), main.appendChild(t);
  }; const d=t.p+'fe48325f58b0deb7d431af6a90253062.png'; const c=()=>{
    main.innerHTML=''; const e=document.createElement('img'); e.setAttribute('src', d), e.setAttribute('alt', 'Drinks menu'), main.appendChild(e);
  }; const l=t.p+'3d74d57c9189b6deecbe6b1c4ecda941.png'; const s=t.p+'4bdea78d87011ebddb4f3306f285d00c.png'; const u=(e)=>{
    main.innerHTML=''; const n=document.createElement('img'); n.setAttribute('alt', 'food'), 1==e?n.setAttribute('src', s):n.setAttribute('src', l), main.appendChild(n);
  }; const p=()=>{
    main.innerHTML=''; const e=document.createElement('div'); e.classList.add('cont-info'); const n=document.createElement('h1'); n.appendChild(document.createTextNode('Contact Info')), e.appendChild(n); const t=document.createElement('p'); t.appendChild(document.createTextNode('Book a table for either food or drinks, parties of groups!')), e.appendChild(t); const a=document.createElement('p'); a.appendChild(document.createTextNode('Phone number: 02920 228 882')), e.appendChild(a); const r=document.createElement('p'); r.appendChild(document.createTextNode('Email: bookings@pitchcardiff.com')), e.appendChild(r); const o=document.createElement('p'); o.appendChild(document.createTextNode('Open from breakfast \'till cocktails daily, every dish we serve is lovingly handmade with heart from our home on Mill Lane.')), e.appendChild(o), main.appendChild(e);
  }; const f=t.p+'0b04178237375ba558ada041da615745.jpg'; const m=document.getElementById('container'); a(); let h; const b=document.createElement('MAIN'); b.id='main', m.appendChild(b), b.style.backgroundImage=`url(${f})`; let g=1; o(), r(), document.getElementById('about').addEventListener('click', ()=>{
    i(), clearInterval(h);
  }, !1), document.getElementById('home').addEventListener('click', ()=>{
    o(), clearInterval(h);
  }, !1), document.getElementById('drinks').addEventListener('click', ()=>{
    c(), clearInterval(h);
  }, !1), document.getElementById('contact').addEventListener('click', ()=>{
    p(), clearInterval(h);
  }, !1), document.getElementById('food').addEventListener('click', ()=>{
    u(2), h=window.setInterval((function() {
      u(g), g=1==g?2:1;
    }), 5e3);
  }, !1);
}]);
