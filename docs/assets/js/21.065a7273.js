(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{251:function(t,e,i){},269:function(t,e,i){"use strict";i(251)},282:function(t,e,i){"use strict";i.r(e);var s={name:"ThemeSwitcher",data:()=>({isLight:"light"}),beforeMount(){let t=document.getElementsByTagName("html")[0];if(!window.localStorage)return console.log("The browser needs to support localstorage."),!1;var e=window.localStorage;if(!e.getItem("myth"))return window.localStorage.setItem("theme","light"),void t.setAttribute("data-theme","light");this.isLight=e.getItem("theme"),"light"===this.isLight?(this.isLight=!0,window.localStorage.setItem("theme","light"),t.setAttribute("data-theme","light"),this.$emit("themeMode","light")):(this.isLight=!1,window.localStorage.setItem("theme","dark"),t.setAttribute("data-theme","dark"),this.$emit("themeMode","dark"))},methods:{themeSwitch(){window.location,window.localStorage.setItem("myth","1"),this.isLight=!this.isLight;let t=document.getElementsByTagName("html")[0];this.isLight?(window.localStorage.setItem("theme","light"),t.setAttribute("data-theme","light"),this.$emit("themeMode","light")):(window.localStorage.setItem("theme","dark"),t.setAttribute("data-theme","dark"),this.$emit("themeMode","dark"))}}},a=(i(269),i(7)),h=Object(a.a)(s,(function(){var t=this._self._c;return t("div",{staticClass:"theme-switcher"},[t("a",{staticClass:"switch",class:{light:this.isLight,dark:!this.isLight},on:{click:this.themeSwitch}},[t("span",[this.isLight?t("i",{staticClass:"fa fa-sun",attrs:{"aria-hidden":"true"}}):t("i",{staticClass:"fa fa-moon",attrs:{"aria-hidden":"true"}})])])])}),[],!1,null,null,null);e.default=h.exports}}]);