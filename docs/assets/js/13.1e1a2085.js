(window.webpackJsonp=window.webpackJsonp||[]).push([[13,23,24],{245:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return s})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return _})),n.d(e,"l",(function(){return p})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return b}));n(94);const r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(r,"").replace(i,"")}function l(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function f(t){if(l(t))return t;const e=t.match(r),n=e?e[0]:"",i=o(t);return a.test(i)?t:i+".html"+n}function h(t,e){const n=decodeURIComponent(t.hash),i=function(t){const e=t.match(r);if(e)return e[0]}(e);if(i&&n!==i)return!1;return o(t.path)===o(e)}function _(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){const r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;const i=e.split("/");n&&i[i.length-1]||i.pop();const a=t.replace(/^\//,"").split("/");for(let t=0;t<a.length;t++){const e=a[t];".."===e?i.pop():"."!==e&&i.push(e)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));const r=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===r)return Object.assign({},t[e],{type:"page",path:f(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function p(t,e,n,r){const{pages:i,themeConfig:a}=n,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return d(t);const o=s.sidebar||a.sidebar;if(o){const{base:n,config:r}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const r in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(r)))return{base:r,config:e[r]};var n;return{}}(e,o);return"auto"===r?d(t):r?r.map(t=>function t(e,n,r,i=1){if("string"==typeof e)return _(n,e,r);if(Array.isArray(e))return Object.assign(_(n,e[0],r),{title:e[1]});{const a=e.children||[];return 0===a.length&&e.path?Object.assign(_(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,icon:e.icon,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map(e=>t(e,n,r,i+1)),collapsable:!1!==e.collapsable}}}(t,i,n)):[]}return[]}function d(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,icon:t.icon,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},249:function(t,e,n){},257:function(t,e,n){"use strict";n.r(e);var r=n(245),i={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(r.b)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link},isNonHttpURI(){return Object(r.g)(this.link)||Object(r.h)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(r.f)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.f)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},a=n(7),s=Object(a.a)(i,(function(){var t=this,e=t._self._c;return t.isInternal?e("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t.item.icon?e("i",{class:t.item.icon}):t._e(),t._v(" "),e("span",[t._v(t._s(t.item.text))])]):e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t.item.icon?e("i",{class:t.item.icon}):t._e(),t._v(" "),e("span",[t._v(t._s(t.item.text))]),t._v(" "),t.isBlankTarget?e("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.default=s.exports},265:function(t,e,n){"use strict";n(249)},266:function(t,e,n){},280:function(t,e,n){"use strict";n.r(e);const r={Email:"fa fa-envelope",GitHub:"fab fa-github",GitLab:"fab fa-gitlab",WeChat:"fab fa-weixin",QQ:"fab fa-qq",Weibo:"fab fa-weibo",Music:"fa fa-music",Twitter:"fab fa-twitter",Telegram:"fab fa-telegram",LinkedIn:"fab fa-linkedin",YouTube:"fab fa-youtube-square",Facebook:"fab fa-facebook-square",Instagram:"fab fa-instagram",CodePen:"fab fa-codepen",Medium:"fab fa-medium"};var i={props:{link:{type:String,required:!0},type:{type:String,required:!0,validator:t=>Object.keys(r).includes(t)},extraClass:{type:String}},computed:{iconClass(){return r[this.type]}}},a=(n(265),n(7)),s=Object(a.a)(i,(function(){var t=this._self._c;return t("li",[t("a",{class:this.extraClass,attrs:{href:this.link,title:this.type,target:"_blank",rel:"noopener noreferrer"}},[t("i",{staticClass:"fa-lg",class:this.iconClass}),this._v(" "),t("span",{staticClass:"sr-only"},[this._v(this._s(this.type))])])])}),[],!1,null,null,null);e.default=s.exports},290:function(t,e,n){"use strict";n(266)},302:function(t,e,n){"use strict";n.r(e);var r=n(257),i=n(280),a={name:"Home",components:{NavLink:r.default,SocialIcon:i.default},computed:{data(){return this.$page.frontmatter},tagline(){return this.data.tagline||this.$description||"欢迎来到你的 VuePress 网站"},footer(){return this.$themeConfig.footer},copyright(){return this.$themeConfig.footer.copyright}}},s=(n(290),n(7)),o=Object(s.a)(a,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero inner"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("h2",{staticClass:"tagline",domProps:{innerHTML:t._s(t.tagline)}}):t._e(),t._v(" "),t.data.action?e("ul",{staticClass:"action"},[t._l(t.data.action,(function(n){return[n.text&&n.link?e("li",{key:n.link},[e("a",{staticClass:"nav-link action-button",attrs:{href:n.link}},[n.icon?e("i",{class:n.icon}):t._e(),t._v("\n            "+t._s(n.text)+"\n          ")])]):t._e()]}))],2):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("article",{staticClass:"features inner"},t._l(t.data.features,(function(n,r){return e("section",{key:r,staticClass:"feature"},[n.title?[n.link?e("a",{attrs:{href:n.link}},[n.imgUrl?e("img",{attrs:{src:t.$withBase(n.imgUrl),alt:n.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.desc))])]):e("span",[n.imgUrl?e("img",{attrs:{src:t.$withBase(n.imgUrl),alt:n.title}}):t._e(),t._v(" "),e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",{domProps:{innerHTML:t._s(n.desc)}},[t._v(t._s(n.desc))])])]:t._e()],2)})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-vpx-content custom inner"}),t._v(" "),t.$themeConfig.footer?e("footer",[t.data.footerWrap?e("div",{staticClass:"footer-links"},t._l(t.data.footerWrap,(function(n){return e("section",{key:n.title,staticClass:"wrap"},[e("h4",[n.icon?e("i",{staticClass:"fa-fw",class:n.icon}):t._e(),t._v(t._s(n.title))]),t._v(" "),e("ul",t._l(n.item,(function(n){return e("li",{key:n.text},[e("a",{attrs:{href:n.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(n.text))]),t._v(" "),n.desc?e("span",[t._v("- "+t._s(n.desc))]):t._e()])})),0)])})),0):t._e(),t._v(" "),e("div",{staticClass:"footer-copyright"},[t.data.socialIcons?e("p",{staticClass:"left-wrap"},[e("ul",t._l(t.data.socialIcons,(function(t){return e("SocialIcon",{key:t.link,staticClass:"social-icon",attrs:{type:t.type,link:t.link,"extra-class":"inverted"}})})),1)]):t._e(),t._v(" "),e("p",{staticClass:"right-wrap"},[e("ul",{staticClass:"copyright"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t.footer.licensedLink?e("li",[e("a",{attrs:{href:t.footer.licensedLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.footer.licensed))]),t._v(" Licensed\n          ")]):t._e(),t._v(" "),t.footer.createYear<(new Date).getFullYear()?e("li",[t._v("\n            © "+t._s(t.footer.createYear)+"-"+t._s((new Date).getFullYear())+"\n            "),t.footer.authorLink?e("a",{attrs:{href:t.footer.authorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.author)+" ")]):[t._v(" "+t._s(t.footer.author)+" ")]],2):t.footer.createYear?e("li",[t._v("\n            Copyright © "+t._s(t.footer.createYear)+"\n            "),t.footer.authorLink?e("a",{attrs:{href:t.footer.authorLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(" "+t._s(t.footer.author)+" ")]):[t._v(" "+t._s(t.footer.author)+" ")]],2):t._e(),t._v(" "),t.footer.beianLink?e("li",[e("a",{attrs:{href:t.footer.beianLink,target:"_blank",rel:"noopener noreferrer"}},[t.footer.beianicon?e("img",{attrs:{src:t.footer.beianicon}}):t._e(),t._v("  "+t._s(t.footer.beian)+"\n            ")])]):t._e(),t._v(" "),t._l(t.copyright,(function(n){return e("li",{key:n.link},[n.link?e("a",{attrs:{href:n.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(n.text))]):[e("span",{domProps:{innerHTML:t._s(n.text)}},[t._v(t._s(n.text))])]],2)}))],2)])])]):t._e()],1)}),[function(){var t=this._self._c;return t("li",[this._v("Theme by "),t("a",{attrs:{href:"https://gitee.com/qcyblm/vuepress-theme-vpx",title:"本站主题",target:"_blank",rel:"noopener noreferrer"}},[this._v("VPX")])])},function(){var t=this._self._c;return t("li",[this._v("Powered by "),t("a",{attrs:{href:"https://www.vuepress.cn/",target:"_blank",rel:"noopener noreferrer"}},[this._v("VuePress")])])}],!1,null,null,null);e.default=o.exports}}]);