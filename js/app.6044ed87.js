(function(t){function n(n){for(var a,o,c=n[0],s=n[1],l=n[2],u=0,f=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);_&&_(n);while(f.length)f.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,o=1;o<e.length;o++){var c=e[o];0!==r[c]&&(a=!1)}a&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},o={app:0},r={app:0},i=[];function c(t){return s.p+"js/"+({portfolio:"portfolio"}[t]||t)+"."+{portfolio:"258d0c89"}[t]+".js"}function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.e=function(t){var n=[],e={portfolio:1};o[t]?n.push(o[t]):0!==o[t]&&e[t]&&n.push(o[t]=new Promise(function(n,e){for(var a="css/"+({portfolio:"portfolio"}[t]||t)+"."+{portfolio:"a5f7d4aa"}[t]+".css",r=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return n()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){l=f[c],u=l.getAttribute("data-href");if(u===a||u===r)return n()}var _=document.createElement("link");_.rel="stylesheet",_.type="text/css",_.onload=n,_.onerror=function(n){var a=n&&n.target&&n.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],_.parentNode.removeChild(_),e(i)},_.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(_)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(function(n,e){a=r[t]=[n,e]});n.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var f=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(_);var e=r[t];if(0!==e){if(e){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",f.name="ChunkLoadError",f.type=a,f.request=o,e[1](f)}r[t]=void 0}};var _=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/portfolio/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var _=u;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0618":function(t,n,e){},"1acb":function(t,n,e){},"2f48":function(t,n,e){"use strict";var a=e("db86"),o=e.n(a);o.a},4433:function(t,n,e){"use strict";var a=e("0618"),o=e.n(a);o.a},"4a71":function(t,n,e){"use strict";var a=e("875e"),o=e.n(a);o.a},"4f87":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("brand-component"),e("navigation-component"),e("contact-component"),e("router-view"),e("footer-component")],1)},r=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("router-link",{staticClass:"brand",attrs:{to:"/about"}},[e("picture",{staticClass:"brand__img"},[e("source",{attrs:{srcset:"/img/brand_2x.png 1x, /img/brand_large_2x.png 2x",media:"(min-width: 120em)"}}),e("img",{staticClass:"brand__img",attrs:{srcset:"/img/brand_1x.png 1x, /img/brand_2x.png 2x",alt:"Martin Zane Brand Image"}})])])},c=[],s={},l=s,u=(e("2f48"),e("2877")),f=Object(u["a"])(l,i,c,!1,null,null,null),_=f.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"navigation"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.navActive,expression:"navActive"}],staticClass:"navigation__checkbox",attrs:{type:"checkbox",id:"nav_toggle"},domProps:{checked:Array.isArray(t.navActive)?t._i(t.navActive,null)>-1:t.navActive},on:{change:function(n){var e=t.navActive,a=n.target,o=!!a.checked;if(Array.isArray(e)){var r=null,i=t._i(e,r);a.checked?i<0&&(t.navActive=e.concat([r])):i>-1&&(t.navActive=e.slice(0,i).concat(e.slice(i+1)))}else t.navActive=o}}}),t._m(0),e("nav",{staticClass:"navigation__nav"},[e("ul",{staticClass:"navigation__list"},[e("li",{staticClass:"navigation__item",on:{click:function(n){t.navActive=!1}}},[e("router-link",{staticClass:"navigation__link",attrs:{to:"/about"}},[e("span",[t._v("About")])])],1),e("li",{staticClass:"navigation__item",on:{click:function(n){t.navActive=!1}}},[e("router-link",{staticClass:"navigation__link",attrs:{to:"/portfolio"}},[e("span",[t._v("Portfolio")])])],1)])])])},p=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("label",{staticClass:"navigation__button",attrs:{for:"nav_toggle"}},[e("div",{staticClass:"navigation__line"}),e("div",{staticClass:"navigation__line"}),e("div",{staticClass:"navigation__line"})])}],d={data:function(){return{navActive:!1}}},m=d,g=(e("f920"),Object(u["a"])(m,v,p,!1,null,null,null)),b=g.exports,h=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"contact"},[e("ul",{staticClass:"contact__list"},[e("li",{staticClass:"contact__item"},[e("a",{staticClass:"contact__link contact__link--linkedin",attrs:{href:"https://www.linkedin.com/in/realmartinzane/",target:"_blank"}},[e("span",{staticClass:"contact__label"},[t._v("Linkedin")]),e("font-awesome-icon",{attrs:{icon:["fab","linkedin"]}})],1)]),e("li",{staticClass:"contact__item"},[e("a",{staticClass:"contact__link contact__link--github",attrs:{href:"https://github.com/realmartinzane",target:"_blank"}},[e("span",{staticClass:"contact__label"},[t._v("Github")]),e("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),e("li",{staticClass:"contact__item"},[e("a",{staticClass:"contact__link contact__link--email",attrs:{href:"mailto:realmartinzane@gmail.com",target:"_blank"}},[e("span",{staticClass:"contact__label"},[t._v("Email")]),e("font-awesome-icon",{attrs:{icon:["far","envelope"]}})],1)]),e("li",{staticClass:"contact__item"},[e("a",{staticClass:"contact__link contact__link--resume",attrs:{href:"",target:"_blank"}},[e("span",{staticClass:"contact__label"},[t._v("Resume")]),e("font-awesome-icon",{attrs:{icon:["fas","portrait"]}})],1)])])])},C=[],k={},y=k,w=(e("4433"),Object(u["a"])(y,h,C,!1,null,null,null)),A=w.exports,x=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"footer__item"},[t._v("\n        © 2019 Martin Zane. All Rights Reserved.\n    ")]),e("div",{staticClass:"footer__item"},[e("div",{staticClass:"footer__contact"},[t._v("Email: "),e("a",{staticClass:"footer__link",attrs:{href:"mailto:realmartinzane@gmail.com"}},[t._v("realmartinzane@gmail.com")])]),e("div",{staticClass:"footer__contact"},[t._v("Tel: "),e("a",{staticClass:"footer__link",attrs:{href:"tel: +46729726764"}},[t._v("+46729726764")])])])])}],O={},j=O,P=(e("4a71"),Object(u["a"])(j,x,E,!1,null,null,null)),S=P.exports,T={components:{BrandComponent:_,NavigationComponent:b,ContactComponent:A,FooterComponent:S}},$=T,N=(e("5c0b"),Object(u["a"])($,o,r,!1,null,null,null)),L=N.exports,M=(e("4f87"),e("8c4f"));a["a"].use(M["a"]);var z=new M["a"]({routes:[{path:"/",redirect:"/about"},{path:"/about",name:"about",component:function(){return e.e("portfolio").then(e.bind(null,"f820"))}},{path:"/portfolio",name:"portfolio",component:function(){return e.e("portfolio").then(e.bind(null,"c9e5"))}}]}),B=e("ecee"),R=e("c074"),q=e("f2d1"),D=e("b702"),F=e("ad3d");B["c"].add(R["b"],R["a"],q["a"],q["b"],D["a"],R["c"],R["d"]),a["a"].component("font-awesome-icon",F["a"]),a["a"].config.productionTip=!1,new a["a"]({router:z,render:function(t){return t(L)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var a=e("1acb"),o=e.n(a);o.a},"875e":function(t,n,e){},db86:function(t,n,e){},f6d6:function(t,n,e){},f920:function(t,n,e){"use strict";var a=e("f6d6"),o=e.n(a);o.a}});
//# sourceMappingURL=app.6044ed87.js.map