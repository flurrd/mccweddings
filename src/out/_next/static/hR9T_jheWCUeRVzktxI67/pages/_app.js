(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{0:function(e,t,n){n("3Ckp"),e.exports=n("bBV7")},"1TCz":function(e,t,n){"use strict";n.r(t);var a=n("U8Yc"),r=n.n(a);function i(){return(i=r.a||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o=n("LkAs"),s=n("Moms"),c=n("bMj6"),l=n("hZod"),u=n("tEuJ"),p=n("mXGw"),d=n.n(p),f=n("o42t"),m=n.n(f),h=n("azxR"),v=n("YIwv"),x=n.n(v),g=n("5dyF"),b=n.n(g),w=n("BVxp"),k=d.a.createElement;function y(e){return k("header",{id:"header",className:"jsx-1616941640 header"},k(w.Link,Object(h.a)({className:"btn contact-btn",to:"contact",spy:!0,smooth:!0},"to","contact"),"Get in touch"),k(x.a,{id:"1616941640"},[".header.jsx-1616941640{position:fixed;top:0;right:0;width:100%;height:65px;z-index:9;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-right:100px;padding-top:36px;}"]))}var j=n("2peb"),C=d.a.createElement,_={open:{top:0,right:0,position:"fixed",zIndex:1e4,width:"100%",height:"100%",opacity:1,x:0},closed:{top:0,right:0,position:"fixed",zIndex:1e4,width:0,height:"100%",opacity:1,x:"100%"}},N={closed:{width:"0",height:"0",transform:"translateX(-50px)translateY(50px)"},open:{width:"300vmax",height:"300vmax",transform:"translateX(20%)translateY(-20%)"}},O=[{title:"about me",path:"about"},{title:"book an appointment",path:"contact"},{title:"services & rates",path:"servicesandrates"},{title:"testamonials",path:"testamonials"},{title:"contact",path:"contact"}],A={closed:{transition:{duration:0}},open:{transition:{staggerChildren:.1}}},E={open:{opacity:1,x:0,pointerEvents:"all"},closed:{opacity:0,x:"-50%",pointerEvents:"none",transition:{duration:.05}}},S=function(e){return C(j.a.path,i({fill:"transparent",strokeWidth:"3",stroke:"#fff",strokeLinecap:"round"},e))},M=function(){var e=Object(p.useState)(!1),t=e[0],n=e[1];Object(j.d)().scrollYProgress.current.iwidth;return C("div",{className:"jsx-1163900099"},C(b.a,{href:"/"},C("div",{className:"jsx-1163900099 logo-wrap"})),C(j.a.svg,{className:"content-svg",x:"0px",y:"0px",initial:"closed",variants:N,transition:{duration:.45},animate:t?"open":"closed",viewBox:"0 0 200 200"},C("circle",{fill:"rgba(255,255,255,1)",cx:"100",cy:"100",r:"100",className:"jsx-1163900099"})),C("button",{onClick:function(){return n(!t)},className:"jsx-1163900099 hamburger"},C("svg",{width:"20",height:"20",viewBox:"0 0 20 20",className:"jsx-1163900099"},C(S,{animate:t?"open":"closed",initial:"closed",variants:{closed:{d:"M 2 2.5 L 20 2.5"},open:{d:"M 3 16.5 L 17 2.5"}}}),C(S,{animate:t?"open":"closed",d:"M 2 9.423 L 20 9.423",initial:"closed",variants:{closed:{opacity:1},open:{opacity:0}},transition:{duration:.1}}),C(S,{initial:"closed",animate:t?"open":"closed",variants:{closed:{d:"M 2 16.346 L 20 16.346"},open:{d:"M 3 2.5 L 17 16.346"}}}))),C("div",{className:"jsx-1163900099 motion-nav nav-wrap"},C(j.a.nav,{animate:t?"open":"closed",variants:_,className:"nav",initial:"closed",role:"navigation","aria-label":"main navigation",transition:{duration:.2,delay:.2}},C(j.a.div,{className:"nav-links",variants:A,initial:"closed",animate:t?"open":"closed"},O.length>1&&O.map((function(e){return C(j.a.div,{className:"nav-link-wrap",variants:E,key:e.path,whileHover:{scale:1.1},whileTap:{scale:.9}},C(w.Link,Object(h.a)({onClick:function(){return n(!t)},className:"nav__link",to:e.path,spy:!0,smooth:!0},"to",e.path),e.title))}))))),C(x.a,{id:"1163900099"},[".logo-wrap{top:1.5rem;left:1.5rem;position:fixed;z-index:100000;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}",".img-switcha{width:80px;height:80px;position:relative;border-radius:50%;border:2px solid white;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:all 0.6s;transition:all 0.6s;}",".img-switcha img{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-transition:all 0.6s;transition:all 0.6s;}",".top-img.img{opacity:1;}",".bottom-img{opacity:1;mix-blend-mode:screen;}",".logo-wrap:hover .top-img{opacity:0;}",".logo-wrap:hover .img-switcha{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-color:var(--theme-color-accent);background:var(--theme-color-accent);}",".nav{position:fixed;color:var(--theme-color-nav-links);background:var(--fullscreen-nav-background-color);}",".nav-link-wrap{cursor:pointer;}",".nav-links a{color:var(--fullscreen-nav-color);font-size:18px;display:block;margin:1.5em;text-transform:uppercase;}",".nav-links{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;}",".hamburger{top:1.5rem;right:1.5rem;position:fixed;border:none;outline:none;color:white;z-index:100000;cursor:pointer;height:50px;width:50px;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:var(--theme-color-accent);}",".hamburger svg{width:15px;line-height:0;}",".hamburger svg path{fill:#fff;}",".hamburger svg.menu--open path{fill:#fff;}",".hamburger svg{width:15px;line-height:0;}",".hamburger svg path{fill:#fff;}",".hamburger svg.menu--open path{fill:#fff;}",".avatar-home-link{width:80px;}",".content-svg{position:fixed;border:none;outline:none;color:white;z-index:100;cursor:pointer;right:0;top:0;}",".content-svg circle{fill:var(--theme-color-nav-background);}"]))},I=d.a.createElement,P=[{title:"About me",path:"about"},{title:"Get in touch",path:"contact"},{title:"Services & rates",path:"servicesandrates"},{title:"Testimonials",path:"testimonials"}];function T(e){return I("footer",{className:"footer"},I("div",{className:"jsx-1697334239 footer-content"},I("section",{className:"jsx-1697334239 footer-info"},I("img",{width:"100px",src:"../static/circle.png",className:"jsx-1697334239 mandala"}),I("h5",{className:"jsx-1697334239"},"CELEBRANT"),I("h2",{className:"jsx-1697334239"},"Maureen Catherine Crawley"),I("a",{href:"tel:+61 448 914 993",className:"jsx-1697334239 footer__contact-link"},"+61 448 914 993"),I("br",{className:"jsx-1697334239"}),I("a",{href:"mailto:mc@mccweddings.com",className:"jsx-1697334239 footer__contact-link"},"mc@mccweddings.com")),I("div",{className:"jsx-1697334239 footer-links"},P.length>1&&P.map((function(e){return I("div",{key:e.path,className:"jsx-1697334239 footer__link"},I(w.Link,Object(h.a)({className:"footer__link-a",to:e.path,spy:!0,smooth:!0},"to",e.path),e.title))}))),I(x.a,{id:"1697334239"},[])))}var X=d.a.createElement,G=function(e){var t=e.children;return X(d.a.Fragment,null,X(M,null),X(y,null),X("div",{className:"content"},t),X(T,null))},z=n("9fEB"),L=n.n(z),F=d.a.createElement,V=function(e){return F(L.a,null,F("title",null,"Celebrant | Maureen Catherine Crawley"),F("meta",{name:"description",content:e.desc}),F("link",{rel:"icon",type:"image/png",href:"../static/favicon.ico"}),F("link",{rel:"apple-touch-icon",href:"../static/favicon.ico"}),F("script",{src:"https://kit.fontawesome.com/595162865f.js",crossOrigin:"anonymous"}),F("link",{rel:"stylesheet",type:"text/css",charset:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),F("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}))},B=d.a.createElement,J=function(e){var t=e.children;return B("div",{className:"jsx-4158932565 default-container"},B("div",{className:"jsx-4158932565 main"},t),B(x.a,{id:"4158932565"},[]))},Y=(n("OdrH"),d.a.createElement),H=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps,a=e.router,r=t.Layout||J;return Y("div",null,Y(G,n,Y(V,n.data),Y(r,null,Y(t,i({},n,{key:a.route})))))}}]),t}(m.a);t.default=H},"2agv":function(e,t,n){"use strict";var a=n("8Xl/"),r=n("/6KZ"),i=n("dCrc"),o=n("oICS"),s=n("Ng5M"),c=n("gou2"),l=n("ErhN"),u=n("VJcA");r(r.S+r.F*!n("Clx3")((function(e){Array.from(e)})),"Array",{from:function(e){var t,n,r,p,d=i(e),f="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,v=void 0!==h,x=0,g=u(d);if(v&&(h=a(h,m>2?arguments[2]:void 0,2)),void 0==g||f==Array&&s(g))for(n=new f(t=c(d.length));t>x;x++)l(n,x,v?h(d[x],x):d[x]);else for(p=g.call(d),n=new f;!(r=p.next()).done;x++)l(n,x,v?o(p,h,[r.value,x],!0):r.value);return n.length=x,n}})},"3Ckp":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},"4hjl":function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"6jsY":function(e,t,n){"use strict";var a=n("x9yg"),r=n("KBEF"),i=n("J/q3"),o=n("3esu"),s=n("8m4E"),c=n("Od8a"),l=n("UrUy"),u=n("PL1w");t.__esModule=!0,t.Container=function(e){0;return e.children},t.createUrl=h,t.default=void 0;var p=u(n("mXGw")),d=n("z4BS");function f(e){var t,n,a;return l.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.Component,n=e.ctx,r.next=3,l.awrap((0,d.loadGetInitialProps)(t,n));case 3:return a=r.sent,r.abrupt("return",{pageProps:a});case 5:case"end":return r.stop()}}))}t.AppInitialProps=d.AppInitialProps;var m=function(e){function t(){return r(this,t),o(this,s(t).apply(this,arguments))}return c(t,e),i(t,[{key:"componentDidCatch",value:function(e,t){throw e}},{key:"render",value:function(){var e=this.props,t=e.router,n=e.Component,r=e.pageProps,i=h(t);return p.default.createElement(n,a({},r,{url:i}))}}]),t}(p.default.Component);function h(e){var t=e.pathname,n=e.asPath,a=e.query;return{get query(){return a},get pathname(){return t},get asPath(){return n},back:function(){e.back()},push:function(t,n){return e.push(t,n)},pushTo:function(t,n){var a=n?t:"",r=n||t;return e.push(a,r)},replace:function(t,n){return e.replace(t,n)},replaceTo:function(t,n){var a=n?t:"",r=n||t;return e.replace(a,r)}}}t.default=m,m.origGetInitialProps=f,m.getInitialProps=f},"8ET1":function(e,t,n){e.exports=n("Vlwe")},"8qpp":function(e,t,n){var a=n("s20r");e.exports=function(e){if(a(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},"9fEB":function(e,t,n){"use strict";var a=n("OAWj"),r=n("hHgk"),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};r(t,"__esModule",{value:!0});var o=i(n("mXGw")),s=i(n("GlZI")),c=n("9rrO"),l=n("bxxT"),u=n("vI6Y");function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=p;var f=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new a,t=new a,n=new a,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,l=f.length;c<l;c++){var u=f[c];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var p=i.props[u],d=r[u]||new a;d.has(p)?o=!1:(d.add(p),r[u]=d)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=s.default();function v(e){var t=e.children;return o.default.createElement(c.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(l.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:m,handleStateChange:n,inAmpMode:u.isInAmpMode(e)},t)}))}))}v.rewind=h.rewind,t.default=v},"9rrO":function(e,t,n){"use strict";var a=n("hHgk"),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};a(t,"__esModule",{value:!0});var i=r(n("mXGw"));t.AmpStateContext=i.createContext({})},AFnJ:function(e,t,n){n("CAwg"),e.exports=n("TaGV").Object.assign},CAwg:function(e,t,n){var a=n("/6KZ");a(a.S+a.F,"Object",{assign:n("tbIA")})},GlZI:function(e,t,n){"use strict";var a=n("KBEF"),r=n("3esu"),i=n("8m4E"),o=n("oS/Z"),s=n("J/q3"),c=n("Od8a"),l=n("fvvH"),u=n("OAWj");n("hHgk")(t,"__esModule",{value:!0});var p=n("mXGw"),d=!1;t.default=function(){var e,t=new u;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){function u(e){var s;return a(this,u),s=r(this,i(u).call(this,e)),d&&(t.add(o(s)),n(o(s))),s}return c(u,l),s(u,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),s(u,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component)}},"IXD+":function(e,t,n){"use strict";var a=n("Yvct"),r=n("O/tV");e.exports=n("VX2v")("Set",(function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},OAWj:function(e,t,n){e.exports=n("bdJ0")},U8Yc:function(e,t,n){e.exports=n("AFnJ")},Vlwe:function(e,t,n){n("WwSA"),n("2agv"),e.exports=n("TaGV").Array.from},XZM3:function(e,t,n){n("pFlO")("Set")},bdJ0:function(e,t,n){n("iKhv"),n("WwSA"),n("k/kI"),n("IXD+"),n("mVXz"),n("XZM3"),n("mPQl"),e.exports=n("TaGV").Set},fvvH:function(e,t,n){var a=n("8qpp"),r=n("itsi"),i=n("4hjl");e.exports=function(e){return a(e)||r(e)||i()}},itsi:function(e,t,n){var a=n("8ET1"),r=n("7X5e");e.exports=function(e){if(r(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return a(e)}},mPQl:function(e,t,n){n("+9rI")("Set")},mVXz:function(e,t,n){var a=n("/6KZ");a(a.P+a.R,"Set",{toJSON:n("BGbK")("Set")})},o42t:function(e,t,n){e.exports=n("6jsY")},vI6Y:function(e,t,n){"use strict";var a=n("hHgk"),r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};a(t,"__esModule",{value:!0});var i=r(n("mXGw")),o=n("9rrO");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,i=e.hasQuery;return n||r&&(void 0!==i&&i)}t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))}}},[[0,1,2,4,0,3,11]]]);