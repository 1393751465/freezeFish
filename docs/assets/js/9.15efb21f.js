(window.webpackJsonp=window.webpackJsonp||[]).push([[9,22],{247:function(e,t,s){},255:function(e,t,s){},256:function(e,t,s){},260:function(e,t,s){"use strict";s(247)},261:function(e,t,s){"use strict";s.r(t);var i=s(279),n=s(262),a=s(245);function r(e,t){return"group"===t.type&&t.children.some(t=>"group"===t.type?r(e,t):"page"===t.type&&Object(a.e)(e,t.path))}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:n.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const e=function(e,t){for(let s=0;s<t.length;s++){const i=t[s];if(r(e,i))return s}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive(e){return Object(a.e)(this.$route,e.regularPath)}}},l=s(7),p=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(s,i){return t("li",{key:i},["group"===s.type?t("SidebarGroup",{attrs:{item:s,open:i===e.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(i)}}}):t("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:s}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},262:function(e,t,s){"use strict";s.r(t);var i=s(245);function n(e,t,s,i,n){const a={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return n>2&&(a.style={"padding-left":n+"rem"}),e("RouterLink",a,s)}function a(e,t,s,r,o,l=1){return!t||l>o?null:e("ul",{class:"sidebar-sub-headers"},t.map(t=>{const p=Object(i.e)(r,s+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[n(e,s+"#"+t.slug,t.title,p,t.level-1),a(e,t.children,s,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:s,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:p,sidebarDepth:u}}){const c=Object(i.e)(r,p.path),d="auto"===p.type?c||p.children.some(e=>Object(i.e)(r,p.basePath+"#"+e.slug)):c,h="external"===p.type?function(e,t,s){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,e("OutboundLink")])}(e,p.path,p.title||p.path):n(e,p.path,p.title||p.path,d),b=[t.frontmatter.sidebarDepth,u,l.sidebarDepth,o.sidebarDepth,1].find(e=>void 0!==e),f=l.displayAllHeaders||o.displayAllHeaders;if("auto"===p.type)return[h,a(e,p.children,p.basePath,r,b)];if((d||f)&&p.headers&&!i.d.test(p.path)){return[h,a(e,Object(i.c)(p.headers),p.path,r,b)]}return h}},o=(s(260),s(7)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.default=l.exports},276:function(e,t,s){"use strict";s(255)},277:function(e,t,s){"use strict";s(256)},278:function(e,t,s){},279:function(e,t,s){"use strict";s.r(t);var i=s(245),n={name:"SidebarGroup",components:{DropdownTransition:s(258).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(261).default},methods:{isActive:i.e}},a=(s(277),s(7)),r=Object(a.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[e.item.icon?t("i",{class:e.item.icon}):t("i",{class:e.$page.frontmatter.icon}),e._v(" "),t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[e.item.icon?t("i",{class:e.item.icon}):t("i",{class:e.$page.frontmatter.icon}),e._v(" "),t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=r.exports},286:function(e,t,s){"use strict";s.r(t);var i={name:"Ads",computed:{ads(){return this.$themeConfig.ads}}},n=(s(276),s(7)),a=Object(n.a)(i,(function(){var e=this._self._c;return e("a",{staticClass:"ads",attrs:{href:this.ads.link,target:"_blank",title:this.ads.desc,rel:"noopener sponsored"}},[e("img",{attrs:{src:this.ads.img,alt:this.ads.text,border:"0"}})])}),[],!1,null,null,null);t.default=a.exports},294:function(e,t,s){"use strict";s(278)},304:function(e,t,s){"use strict";s.r(t);var i=s(286),n=s(261),a=s(281),r={name:"Sidebar",components:{Ads:i.default,SidebarLinks:n.default,NavLinks:a.default},props:["items"]},o=(s(294),s(7)),l=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("aside",{staticClass:"sidebar"},[e.$themeConfig.ads?t("Ads"):e._e(),e._v(" "),t("NavLinks"),e._v(" "),e._t("top"),e._v(" "),t("SidebarLinks",{attrs:{depth:0,items:e.items}}),e._v(" "),e._t("bottom")],2)}),[],!1,null,null,null);t.default=l.exports}}]);