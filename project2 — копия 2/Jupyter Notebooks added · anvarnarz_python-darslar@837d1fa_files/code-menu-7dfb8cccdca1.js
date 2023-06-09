"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["code-menu"],{4722:(e,t,o)=>{var n=o(41246)},87551:(e,t,o)=>{function n(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}function r(e){let t=(e.getAttribute("data-platforms")||"").split(","),o=n();return Boolean(o&&t.includes(o))}o.d(t,{X:()=>n}),(0,o(36071).N7)(".js-remove-unless-platform",function(e){r(e)||e.remove()})},41246:(e,t,o)=>{o.d(t,{b:()=>d});var n=o(76006),r=o(87551),a=o(44544),s=function(e,t,o,n){var r,a=arguments.length,s=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,o,s):r(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let{getItem:i,setItem:l}=(0,a.Z)("localStorage"),c="code-button-default-tab",d=class GetRepoElement extends HTMLElement{showDownloadMessage(e){let t=this.findPlatform(e);t&&this.showPlatform(t)}showCodespaces(e){let t=this.findPlatform(e);t&&(this.showPlatform(t),this.loadAndUpdateContent())}showCodespaceSelector(e){let t=this.findPlatform(e);t&&(this.showPlatform(t),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(e){for(let e of(this.modal.hidden=!1,this.platforms))e.hidden=!0;let t=e.target;t&&t.open&&(!this.hasForcedCodespaceTabDefault&&this.forceCodespaceTabDefault?(this.hasForcedCodespaceTabDefault=!0,this.selectDefaultTab(!0)):this.selectDefaultTab(!1))}onDetailsKeydown(e){if("Escape"===e.key){this.modal.hidden=!0;let t=e.target;t?.closest("details")?.removeAttribute("open")}}showPlatform(e){for(let t of(this.modal.hidden=!0,this.platforms))t.hidden=t.getAttribute("data-platform")!==e}findPlatform(e){return e.currentTarget.getAttribute("data-open-app")||(0,r.X)()}refreshOnError(){window.location.reload()}pollForVscode(e){this.showPlatform("vscode");let t=e.currentTarget.getAttribute("data-src");t&&this.vscodePoller.setAttribute("src",t)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){l(c,"local")}cloudTabSelected(){l(c,"cloud"),this.codespaceList?.id==="lazyLoadedCodespacesList"&&this.loadAndUpdateContent()}selectDefaultTab(e){let t=e?"cloud":i(c);if(!t)return;let o=this.querySelector(`button[data-tab="${t}"`);o&&o.click()}loadAndUpdateContent(){this.codespaceList?.setAttribute("src",this.codespaceList.getAttribute("data-src"))}constructor(...e){super(...e),this.shouldRefreshList=!1,this.hasForcedCodespaceTabDefault=!1,this.forceCodespaceTabDefault=!1}};s([n.Lj],d.prototype,"forceCodespaceTabDefault",void 0),s([n.fA],d.prototype,"modal",void 0),s([n.fA],d.prototype,"codespaceForm",void 0),s([n.fA],d.prototype,"codespaceLoadingMenu",void 0),s([n.fA],d.prototype,"codespaceList",void 0),s([n.fA],d.prototype,"codespaceSelector",void 0),s([n.fA],d.prototype,"openOrCreateInCodespace",void 0),s([n.fA],d.prototype,"vscodePoller",void 0),s([n.GO],d.prototype,"platforms",void 0),d=s([n.Ih],d)},4412:(e,t,o)=>{o.d(t,{C:()=>a,x:()=>r});var n=o(86283);let r=n.n4?.readyState==="interactive"||n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),a=n.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{n.iG?.addEventListener("load",e)})},46426:(e,t,o)=>{o.d(t,{$:()=>l,c:()=>s});var n=o(15205);let r=(0,n.Z)(a);function a(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}let s=(0,n.Z)(i);function i(e){return -1!==r().indexOf(e)}let l={isFeatureEnabled:s}},53729:(e,t,o)=>{o.d(t,{A7:()=>u,ko:()=>c,q1:()=>i});var n=o(15205),r=o(86283);let a=(0,n.Z)(s);function s(){return r.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let i=(0,n.Z)(l);function l(){return r.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let c=(0,n.Z)(d);function d(){return"enterprise"===a()}let u="webpack"},44544:(e,t,o)=>{o.d(t,{Z:()=>s,_:()=>i});var n=o(86283),r=o(71643);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function s(e,t={throwQuotaErrorsOnSet:!1},o=n.iG,s=e=>e,i=e=>e){let l;try{if(!o)throw Error();l=o[e]||new a}catch{l=new a}let{throwQuotaErrorsOnSet:c}=t;function d(e){t.sendCacheStats&&(0,r.b)({incrementKey:e})}function u(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let o=l.getItem(e);if(!o)return null;let n=`${e}:expiry`,r=Number(l.getItem(n));if(r&&t>r)return u(e),u(n),d("SAFE_STORAGE_VALUE_EXPIRED"),null;return d("SAFE_STORAGE_VALUE_WITHIN_TTL"),s(o)}catch(e){return null}},setItem:function(e,o,n=new Date().getTime()){try{if(l.setItem(e,i(o)),t.ttl){let o=`${e}:expiry`,r=n+t.ttl;l.setItem(o,r.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:u,clear:l.clear,key:l.key,get length(){return l.length}}}function i(e){return s(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283:(e,t,o)=>{o.d(t,{Qg:()=>n.Qg,W6:()=>n.W6,cF:()=>n.cF,iG:()=>r.iG,jX:()=>r.jX,n4:()=>r.n4,zu:()=>r.zu});var n=o(35647),r=o(73614)},73614:(e,t,o)=>{o.d(t,{iG:()=>r,jX:()=>s,n4:()=>n,zu:()=>a});let n="undefined"==typeof document?void 0:document,r="undefined"==typeof window?void 0:window,a="undefined"==typeof history?void 0:history,s="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},35647:(e,t,o)=>{o.d(t,{Qg:()=>a,W6:()=>r,cF:()=>s});var n=o(73614);let r=void 0===n.n4,a=!r;function s(){return!!r||Boolean(n.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(e,t,o)=>{o.d(t,{B:()=>g,b:()=>l});var n=o(86283),r=o(4412),a=o(53729),s=o(46426);let i=[];function l(e,t=!1){!0!==(0,s.c)("BROWSER_STATS_DISABLED")&&(void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=m(),e.staff=g(),e.bundler=a.A7,i.push(e),t?u():d())}let c=null;async function d(){await r.C,null==c&&(c=window.requestIdleCallback(u))}function u(){if(c=null,!i.length)return;let e=n.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=f(i);for(let o of t)p(e,`{"stats": [${o.join(",")}] }`);i=[]}function f(e){let t=[],o=e.map(e=>JSON.stringify(e));for(;o.length>0;)t.push(h(o));return t}function h(e){let t=e.shift(),o=[t],n=t.length;for(;e.length>0&&n<=65536;){let t=e[0].length;if(n+t<=65536){let r=e.shift();o.push(r),n+=t}else break}return o}function p(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function m(){return!!n.n4?.head?.querySelector('meta[name="user-login"]')?.content}function g(){return!!n.n4?.head?.querySelector('meta[name="user-staff"]')?.content}n.n4?.addEventListener("pagehide",u),n.n4?.addEventListener("visibilitychange",u)},76006:(e,t,o)=>{let n;o.d(t,{Lj:()=>v,Ih:()=>k,P4:()=>h,nW:()=>j,fA:()=>E,GO:()=>P});let r=new WeakSet;function a(e){r.add(e),e.shadowRoot&&s(e.shadowRoot),c(e),l(e.ownerDocument)}function s(e){c(e),l(e)}let i=new WeakMap;function l(e=document){if(i.has(e))return i.get(e);let t=!1,o=new MutationObserver(e=>{for(let t of e)if("attributes"===t.type&&t.target instanceof Element)f(t.target);else if("childList"===t.type&&t.addedNodes.length)for(let e of t.addedNodes)e instanceof Element&&c(e)});o.observe(e,{childList:!0,subtree:!0,attributeFilter:["data-action"]});let n={get closed(){return t},unsubscribe(){t=!0,i.delete(e),o.disconnect()}};return i.set(e,n),n}function c(e){for(let t of e.querySelectorAll("[data-action]"))f(t);e instanceof Element&&e.hasAttribute("data-action")&&f(e)}function d(e){let t=e.currentTarget;for(let o of u(t))if(e.type===o.type){let n=t.closest(o.tag);r.has(n)&&"function"==typeof n[o.method]&&n[o.method](e);let a=t.getRootNode();if(a instanceof ShadowRoot&&r.has(a.host)&&a.host.matches(o.tag)){let t=a.host;"function"==typeof t[o.method]&&t[o.method](e)}}}function*u(e){for(let t of(e.getAttribute("data-action")||"").trim().split(/\s+/)){let e=t.lastIndexOf(":"),o=Math.max(0,t.lastIndexOf("#"))||t.length;yield{type:t.slice(0,e),tag:t.slice(e+1,o),method:t.slice(o+1)||"handleEvent"}}}function f(e){for(let t of u(e))e.addEventListener(t.type,d)}function h(e,t){let o=e.tagName.toLowerCase();if(e.shadowRoot){for(let n of e.shadowRoot.querySelectorAll(`[data-target~="${o}.${t}"]`))if(!n.closest(o))return n}for(let n of e.querySelectorAll(`[data-target~="${o}.${t}"]`))if(n.closest(o)===e)return n}function p(e,t){let o=e.tagName.toLowerCase(),n=[];if(e.shadowRoot)for(let r of e.shadowRoot.querySelectorAll(`[data-targets~="${o}.${t}"]`))r.closest(o)||n.push(r);for(let r of e.querySelectorAll(`[data-targets~="${o}.${t}"]`))r.closest(o)===e&&n.push(r);return n}let m=e=>String("symbol"==typeof e?e.description:e).replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/--/g,"-").replace(/^-|-$/,"").toLowerCase(),g=(e,t="property")=>{let o=m(e);if(!o.includes("-"))throw new DOMException(`${t}: ${String(e)} is not a valid ${t} name`,"SyntaxError");return o};function b(e){let t=m(e.name).replace(/-element$/,"");try{window.customElements.define(t,e),window[e.name]=customElements.get(t)}catch(e){if(!(e instanceof DOMException&&"NotSupportedError"===e.name))throw e}return e}function y(e){for(let t of e.querySelectorAll("template[data-shadowroot]"))t.parentElement===e&&e.attachShadow({mode:"closed"===t.getAttribute("data-shadowroot")?"closed":"open"}).append(t.content.cloneNode(!0))}let w="attr";function v(e,t){O(e,w).add(t)}let A=new WeakSet;function C(e,t){if(A.has(e))return;A.add(e);let o=Object.getPrototypeOf(e),n=o?.constructor?.attrPrefix??"data-";for(let r of(t||(t=O(o,w)),t)){let t=e[r],o=g(`${n}${r}`),a={configurable:!0,get(){return this.getAttribute(o)||""},set(e){this.setAttribute(o,e||"")}};"number"==typeof t?a={configurable:!0,get(){return Number(this.getAttribute(o)||0)},set(e){this.setAttribute(o,e)}}:"boolean"==typeof t&&(a={configurable:!0,get(){return this.hasAttribute(o)},set(e){this.toggleAttribute(o,e)}}),Object.defineProperty(e,r,a),r in e&&!e.hasAttribute(o)&&a.set.call(e,t)}}function S(e){let t=e.observedAttributes||[],o=e.attrPrefix??"data-",n=e=>g(`${o}${e}`);Object.defineProperty(e,"observedAttributes",{configurable:!0,get:()=>[...O(e.prototype,w)].map(n).concat(t),set(e){t=e}})}let L=Symbol.for("catalyst");let CatalystDelegate=class CatalystDelegate{constructor(e){let t=this,o=e.prototype.connectedCallback;e.prototype.connectedCallback=function(){t.connectedCallback(this,o)};let n=e.prototype.disconnectedCallback;e.prototype.disconnectedCallback=function(){t.disconnectedCallback(this,n)};let r=e.prototype.attributeChangedCallback;e.prototype.attributeChangedCallback=function(e,o,n){t.attributeChangedCallback(this,e,o,n,r)};let a=e.observedAttributes||[];Object.defineProperty(e,"observedAttributes",{configurable:!0,get(){return t.observedAttributes(this,a)},set(e){a=e}}),S(e),b(e)}observedAttributes(e,t){return t}connectedCallback(e,t){e.toggleAttribute("data-catalyst",!0),customElements.upgrade(e),y(e),C(e),a(e),t?.call(e),e.shadowRoot&&s(e.shadowRoot)}disconnectedCallback(e,t){t?.call(e)}attributeChangedCallback(e,t,o,n,r){C(e),"data-catalyst"!==t&&r&&r.call(e,t,o,n)}};function O(e,t){if(!Object.prototype.hasOwnProperty.call(e,L)){let t=e[L],o=e[L]=new Map;if(t)for(let[e,n]of t)o.set(e,new Set(n))}let o=e[L];return o.has(t)||o.set(t,new Set),o.get(t)}function E(e,t){O(e,"target").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return h(this,t)}})}function P(e,t){O(e,"targets").add(t),Object.defineProperty(e,t,{configurable:!0,get(){return p(this,t)}})}function k(e){new CatalystDelegate(e)}let I=new Map,T=new Promise(e=>{"loading"!==document.readyState?e():document.addEventListener("readystatechange",()=>e(),{once:!0})}),D=new Promise(e=>{let t=new AbortController;t.signal.addEventListener("abort",()=>e());let o={once:!0,passive:!0,signal:t.signal},n=()=>t.abort();document.addEventListener("mousedown",n,o),document.addEventListener("touchstart",n,o),document.addEventListener("keydown",n,o),document.addEventListener("pointerdown",n,o)}),$=e=>new Promise(t=>{let o=new IntersectionObserver(e=>{for(let n of e)if(n.isIntersecting){t(),o.disconnect();return}},{rootMargin:"0px 0px 256px 0px",threshold:.01});for(let t of document.querySelectorAll(e))o.observe(t)}),R={ready:()=>T,firstInteraction:()=>D,visible:$},q=new WeakMap;function M(e){cancelAnimationFrame(q.get(e)||0),q.set(e,requestAnimationFrame(()=>{for(let t of I.keys()){let o=e.matches(t)?e:e.querySelector(t);if(customElements.get(t)||o){let n=o?.getAttribute("data-load-on")||"ready",r=n in R?R[n]:R.ready;for(let e of I.get(t)||[])r(t).then(e);I.delete(t),q.delete(e)}}}))}function j(e,t){I.has(e)||I.set(e,new Set),I.get(e).add(t),M(document.body),n||(n=new MutationObserver(e=>{if(I.size)for(let t of e)for(let e of t.addedNodes)e instanceof Element&&M(e)})).observe(document,{subtree:!0,childList:!0})}},15205:(e,t,o)=>{function n(...e){return JSON.stringify(e,(e,t)=>"object"==typeof t?t:String(t))}function r(e,t={}){let{hash:o=n,cache:r=new Map}=t;return function(...t){let n=o.apply(this,t);if(r.has(n))return r.get(n);let a=e.apply(this,t);return a instanceof Promise&&(a=a.catch(e=>{throw r.delete(n),e})),r.set(n,a),a}}o.d(t,{Z:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js"],()=>t(4722));var o=e.O()}]);
//# sourceMappingURL=code-menu-ee1c9efb7f76.js.map