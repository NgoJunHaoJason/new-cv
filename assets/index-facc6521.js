(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const m={},qe=(e,t)=>e===t,w=Symbol("solid-proxy"),de=Symbol("solid-track"),R={equals:qe};let Re=Ne;const $=1,U=2,Ce={owned:null,cleanups:null,context:null,owner:null};var p=null;let O=null,h=null,y=null,k=null,le=0;function Ue(e,t){const n=h,r=p,o=e.length===0,i=o?Ce:{owned:null,cleanups:null,context:null,owner:t||r},s=o?e:()=>e(()=>E(()=>ce(i)));p=i,h=null;try{return T(s,!0)}finally{h=n,p=r}}function xe(e,t){t=t?Object.assign({},R,t):R;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),ke(n,o));return[Oe.bind(n),r]}function A(e,t,n){const r=$e(e,t,!1,$);Z(r)}function v(e,t,n){n=n?Object.assign({},R,n):R;const r=$e(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,Z(r),Oe.bind(r)}function Ke(e){return T(e,!1)}function E(e){const t=h;h=null;try{return e()}finally{h=t}}function ve(){return h}function Ae(e,t){const n=Symbol("context");return{id:n,Provider:Qe(n),defaultValue:e}}function Se(e){let t;return(t=_e(p,e.id))!==void 0?t:e.defaultValue}function We(e){const t=v(e),n=v(()=>ee(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Oe(){const e=O;if(this.sources&&(this.state||e))if(this.state===$||e)Z(this);else{const t=y;y=null,T(()=>K(this),!1),y=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function ke(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&T(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],s=O&&O.running;s&&O.disposed.has(i),(s&&!i.tState||!s&&!i.state)&&(i.pure?y.push(i):k.push(i),i.observers&&Le(i)),s||(i.state=$)}if(y.length>1e6)throw y=[],new Error},!1)),t}function Z(e){if(!e.fn)return;ce(e);const t=p,n=h,r=le;h=p=e,Je(e,e.value,r),h=n,p=t}function Je(e,t,n){let r;try{r=e.fn(t)}catch(o){e.pure&&(e.state=$),je(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ke(e,r):e.value=r,e.updatedAt=n)}function $e(e,t,n,r=$,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==Ce&&(p.owned?p.owned.push(i):p.owned=[i]),i}function Pe(e){const t=O;if(e.state===0||t)return;if(e.state===U||t)return K(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===$||t)Z(e);else if(e.state===U||t){const o=y;y=null,T(()=>K(e,n[0]),!1),y=o}}function T(e,t){if(y)return e();let n=!1;t||(y=[]),k?n=!0:k=[],le++;try{const r=e();return Xe(n),r}catch(r){y||(k=null),je(r)}}function Xe(e){if(y&&(Ne(y),y=null),e)return;const t=k;k=null,t.length&&T(()=>Re(t),!1)}function Ne(e){for(let t=0;t<e.length;t++)Pe(e[t])}function K(e,t){const n=O;e.state=0;for(let r=0;r<e.sources.length;r+=1){const o=e.sources[r];o.sources&&(o.state===$||n?o!==t&&Pe(o):(o.state===U||n)&&K(o,t))}}function Le(e){const t=O;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=U,r.pure?y.push(r):k.push(r),r.observers&&Le(r))}}function ce(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),s=n.observerSlots.pop();r<o.length&&(i.sourceSlots[s]=r,o[r]=i,n.observerSlots[r]=s)}}if(e.owned){for(t=0;t<e.owned.length;t++)ce(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Ze(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function je(e){throw e=Ze(e),e}function _e(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:_e(e.owner,t):void 0}function ee(e){if(typeof e=="function"&&!e.length)return ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=ee(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Qe(e,t){return function(r){let o;return A(()=>o=E(()=>(p.context={[e]:r.value},We(()=>r.children))),void 0),o}}function f(e,t){return E(()=>e(t||{}))}function z(){return!0}const Ee={get(e,t,n){return t===w?n:e.get(t)},has(e,t){return t===w?!0:e.has(t)},set:z,deleteProperty:z,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:z,deleteProperty:z}},ownKeys(e){return e.keys()}};function Y(e){return(e=typeof e=="function"?e():e)?e:{}}function q(...e){let t=!1;for(let r=0;r<e.length;r++){const o=e[r];t=t||!!o&&w in o,e[r]=typeof o=="function"?(t=!0,v(o)):o}if(t)return new Proxy({get(r){for(let o=e.length-1;o>=0;o--){const i=Y(e[o])[r];if(i!==void 0)return i}},has(r){for(let o=e.length-1;o>=0;o--)if(r in Y(e[o]))return!0;return!1},keys(){const r=[];for(let o=0;o<e.length;o++)r.push(...Object.keys(Y(e[o])));return[...new Set(r)]}},Ee);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const o=Object.getOwnPropertyDescriptors(e[r]);for(const i in o)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let s=e.length-1;s>=0;s--){const l=(e[s]||{})[i];if(l!==void 0)return l}}})}return n}function Te(e,...t){const n=new Set(t.flat()),r=Object.getOwnPropertyDescriptors(e),o=w in e;o||t.push(Object.keys(r).filter(s=>!n.has(s)));const i=t.map(s=>{const l={};for(let c=0;c<s.length;c++){const a=s[c];!o&&!(a in e)||Object.defineProperty(l,a,r[a]?r[a]:{get(){return e[a]},set(){return!0},enumerable:!0})}return l});return o&&i.push(new Proxy({get(s){return n.has(s)?void 0:e[s]},has(s){return n.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!n.has(s))}},Ee)),i}const Ye=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],et=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ye]),tt=new Set(["innerHTML","textContent","innerText","children"]),nt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),he=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),rt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ot=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),it={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function st(e,t,n){let r=n.length,o=t.length,i=r,s=0,l=0,c=t[o-1].nextSibling,a=null;for(;s<o||l<i;){if(t[s]===n[l]){s++,l++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===s){const u=i<r?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],u)}else if(i===l)for(;s<o;)(!a||!a.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[i-1]&&n[l]===t[o-1]){const u=t[--o].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--i],u),t[o]=n[i]}else{if(!a){a=new Map;let d=l;for(;d<i;)a.set(n[d],d++)}const u=a.get(t[s]);if(u!=null)if(l<u&&u<i){let d=s,g=1,M;for(;++d<o&&d<i&&!((M=a.get(t[d]))==null||M!==u+g);)g++;if(g>u-l){const Q=t[s];for(;l<u;)e.insertBefore(n[l++],Q)}else e.replaceChild(n[l++],t[s++])}else s++;else t[s++].remove()}}}const ge="_$DX_DELEGATE";function lt(e,t,n,r={}){let o;return Ue(i=>{o=i,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function P(e,t,n){const r=document.createElement("template");r.innerHTML=e;let o=r.content.firstChild;return n&&(o=o.firstChild),o}function ct(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let r=0,o=e.length;r<o;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,mt))}}function j(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function at(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function ft(e,t){t==null?e.removeAttribute("class"):e.className=t}function ut(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function dt(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let i,s;for(i=0,s=o.length;i<s;i++){const l=o[i];!l||l==="undefined"||t[l]||(ye(e,l,!1),delete n[l])}for(i=0,s=r.length;i<s;i++){const l=r[i],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(ye(e,l,!0),n[l]=c)}return n}function Me(e,t,n){if(!t)return n?j(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function ae(e,t={},n,r){const o={};return r||A(()=>o.children=_(e,t.children,o.children)),A(()=>t.ref&&t.ref(e)),A(()=>ht(e,t,n,!0,o,!0)),o}function C(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return _(e,t,r,n);A(o=>_(e,t(),o,n),r)}function ht(e,t,n,r,o={},i=!1){t||(t={});for(const s in o)if(!(s in t)){if(s==="children")continue;o[s]=me(e,s,null,o[s],n,i)}for(const s in t){if(s==="children"){r||_(e,t.children);continue}const l=t[s];o[s]=me(e,s,l,o[s],n,i)}}function gt(e){let t,n;return!m.context||!(t=m.registry.get(n=pt()))?e.cloneNode(!0):(m.completed&&m.completed.add(t),m.registry.delete(n),t)}function yt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ye(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function me(e,t,n,r,o,i){let s,l,c;if(t==="style")return Me(e,n,r);if(t==="classList")return dt(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);r&&e.removeEventListener(a,r),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);r&&e.removeEventListener(a,r,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),u=rt.has(a);if(!u&&r){const d=Array.isArray(r)?r[0]:r;e.removeEventListener(a,d)}(u||n)&&(ut(e,a,n,u),u&&ct([a]))}else if((c=tt.has(t))||!o&&(he[t]||(l=et.has(t)))||(s=e.nodeName.includes("-")))t==="class"||t==="className"?ft(e,n):s&&!l&&!c?e[yt(t)]=n:e[he[t]||t]=n;else{const a=o&&t.indexOf(":")>-1&&it[t.split(":")[0]];a?at(e,a,t,n):j(e,nt[t]||t,n)}return n}function mt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),m.registry&&!m.done&&(m.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>r.remove()));n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function _(e,t,n,r,o){for(m.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(m.context)return n;if(i==="number"&&(t=t.toString()),s){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=N(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(m.context)return n;n=N(e,n,r)}else{if(i==="function")return A(()=>{let l=t();for(;typeof l=="function";)l=l();n=_(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(te(l,t,n,o))return A(()=>n=_(e,l,n,r,!0)),()=>n;if(m.context){if(!l.length)return n;for(let a=0;a<l.length;a++)if(l[a].parentNode)return n=l}if(l.length===0){if(n=N(e,n,r),s)return n}else c?n.length===0?pe(e,l,r):st(e,n,l):(n&&N(e),pe(e,l));n=l}else if(t instanceof Node){if(m.context&&t.parentNode)return n=s?[t]:t;if(Array.isArray(n)){if(s)return n=N(e,n,r,t);N(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function te(e,t,n,r){let o=!1;for(let i=0,s=t.length;i<s;i++){let l=t[i],c=n&&n[i];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))o=te(e,l,c)||o;else if(typeof l=="function")if(r){for(;typeof l=="function";)l=l();o=te(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||o}else e.push(l),o=!0;else{const a=String(l);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return o}function pe(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function N(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const c=l.parentNode===e;!i&&!s?c?e.replaceChild(o,l):e.insertBefore(o,n):c&&l.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}function pt(){const e=m.context;return`${e.id}${e.count++}`}const bt=!1,wt="http://www.w3.org/2000/svg";function Ct(e,t=!1){return t?document.createElementNS(wt,e):document.createElement(e)}function xt(e){const[t,n]=Te(e,["component"]),r=v(()=>t.component);return v(()=>{const o=r();switch(typeof o){case"function":return E(()=>o(n));case"string":const i=ot.has(o),s=m.context?gt():Ct(o,i);return ae(s,n,i),s}})}let vt={data:""},At=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||vt,St=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Ot=/\/\*[^]*?\*\/|  +/g,be=/\n+/g,S=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?S(s,i):i+"{"+S(s,i[1]=="k"?"":t)+"}":typeof s=="object"?r+=S(s,t?t.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=S.p?S.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},x={},De=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+De(e[n]);return t}return e},kt=(e,t,n,r,o)=>{let i=De(e),s=x[i]||(x[i]=(c=>{let a=0,u=11;for(;a<c.length;)u=101*u+c.charCodeAt(a++)>>>0;return"go"+u})(i));if(!x[s]){let c=i!==e?e:(a=>{let u,d,g=[{}];for(;u=St.exec(a.replace(Ot,""));)u[4]?g.shift():u[3]?(d=u[3].replace(be," ").trim(),g.unshift(g[0][d]=g[0][d]||{})):g[0][u[1]]=u[2].replace(be," ").trim();return g[0]})(e);x[s]=S(o?{["@keyframes "+s]:c}:c,n?"":"."+s)}let l=n&&x.g?x.g:null;return n&&(x.g=x[s]),((c,a,u,d)=>{d?a.data=a.data.replace(d,c):a.data.indexOf(c)===-1&&(a.data=u?c+a.data:a.data+c)})(x[s],t,r,l),s},$t=(e,t,n)=>e.reduce((r,o,i)=>{let s=t[i];if(s&&s.call){let l=s(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=c?"."+c:l&&typeof l=="object"?l.props?"":S(l,""):l===!1?"":l}return r+o+(s??"")},"");function W(e){let t=this||{},n=e.call?e(t.p):e;return kt(n.unshift?n.raw?$t(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,At(t.target),t.g,t.o,t.k)}W.bind({g:1});W.bind({k:1});const Pt=Ae();function Be(e){let t=this||{};return(...n)=>{const r=o=>{const i=Se(Pt),s=q(o,{theme:i}),l=q(s,{get class(){const M=s.class,Q="class"in s&&/^go[0-9]+/.test(M);let Ve=W.apply({target:t.target,o:Q,p:s,g:t.g},n);return[M,Ve].filter(Boolean).join(" ")}}),[c,a]=Te(l,["as","theme"]),u=a,d=c.as||e;let g;return typeof d=="function"?g=d(u):t.g==1?(g=document.createElement(d),ae(g,u)):g=xt(q({component:d},u)),g};return r.class=o=>E(()=>W.apply({target:t.target,p:o,g:t.g},n)),r}}const b=new Proxy(Be,{get(e,t){return e(t)}});function Nt(){const e=Be.call({g:1},"div").apply(null,arguments);return function(n){return e(n),null}}const ne=Symbol("store-raw"),B=Symbol("store-node"),Lt=Symbol("store-name");function He(e,t){let n=e[w];if(!n&&(Object.defineProperty(e,w,{value:n=new Proxy(e,Et)}),!Array.isArray(e))){const r=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let i=0,s=r.length;i<s;i++){const l=r[i];if(o[l].get){const c=o[l].get.bind(n);Object.defineProperty(e,l,{enumerable:o[l].enumerable,get:c})}}}return n}function J(e){let t;return e!=null&&typeof e=="object"&&(e[w]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function H(e,t=new Set){let n,r,o,i;if(n=e!=null&&e[ne])return n;if(!J(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,l=e.length;s<l;s++)o=e[s],(r=H(o,t))!==o&&(e[s]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let c=0,a=s.length;c<a;c++)i=s[c],!l[i].get&&(o=e[i],(r=H(o,t))!==o&&(e[i]=r))}return e}function fe(e){let t=e[B];return t||Object.defineProperty(e,B,{value:t={}}),t}function re(e,t,n){return e[t]||(e[t]=ze(n))}function jt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===w||t===B||t===Lt||(delete n.value,delete n.writable,n.get=()=>e[w][t]),n}function Fe(e){if(ve()){const t=fe(e);(t._||(t._=ze()))()}}function _t(e){return Fe(e),Reflect.ownKeys(e)}function ze(e){const[t,n]=xe(e,{equals:!1,internal:!0});return t.$=n,t}const Et={get(e,t,n){if(t===ne)return e;if(t===w)return n;if(t===de)return Fe(e),n;const r=fe(e),o=r.hasOwnProperty(t);let i=o?r[t]():e[t];if(t===B||t==="__proto__")return i;if(!o){const s=Object.getOwnPropertyDescriptor(e,t);ve()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(i=re(r,t,i)())}return J(i)?He(i):i},has(e,t){return t===ne||t===w||t===de||t===B||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:_t,getOwnPropertyDescriptor:jt};function X(e,t,n,r=!1){if(!r&&e[t]===n)return;const o=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let s=fe(e),l;(l=re(s,t,o))&&l.$(()=>n),Array.isArray(e)&&e.length!==i&&(l=re(s,"length",i))&&l.$(e.length),(l=s._)&&l.$()}function Ie(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];X(e,o,t[o])}}function Tt(e,t){if(typeof t=="function"&&(t=t(e)),t=H(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const o=t[n];e[n]!==o&&X(e,n,o)}X(e,"length",r)}else Ie(e,t)}function D(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const s=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)D(e,[r[c]].concat(t),n);return}else if(l&&s==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&D(e,[c].concat(t),n);return}else if(l&&s==="object"){const{from:c=0,to:a=e.length-1,by:u=1}=r;for(let d=c;d<=a;d+=u)D(e,[d].concat(t),n);return}else if(t.length>1){D(e[r],t,[r].concat(n));return}o=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(o,n),i===o)||r===void 0&&i==null||(i=H(i),r===void 0||J(o)&&J(i)&&!Array.isArray(i)?Ie(o,i):X(e,r,i))}function Mt(...[e,t]){const n=H(e||{}),r=Array.isArray(n),o=He(n);function i(...s){Ke(()=>{r&&s.length===1?Tt(n,s[0]):D(n,s)})}return[o,i]}var oe=(e,t,n)=>{const r=t.trim().split(".").reduce((o,i)=>o?o[i]:void 0,e);return r!==void 0?r:n},Dt=(e,t,n=/{{(.*?)}}/g)=>e.replace(n,(r,o)=>oe(t,o,"")),Bt=(e={},t=navigator.language in e?navigator.language:Object.keys(e)[0])=>{const[n,r]=xe(t),[o,i]=Mt(e);return[(c,a,u)=>{const d=oe(o[n()],c,u||"");return typeof d=="function"?d(a):typeof d=="string"?Dt(d,a||{}):d},{add(c,a){i(c,u=>Object.assign(u||{},a))},locale:c=>c?r(c):n(),dict:c=>oe(o,c)}]},Ge=Ae({}),ue=()=>Se(Ge);const Ht=""+new URL("profile_picture-3e49284a.png",import.meta.url).href,Ft=P('<svg><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path></svg>',4,!0),zt=P('<svg><path fill="currentColor" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></path></svg>',4,!0),It=()=>f(Vt,{"data-testid":Gt,class:"github-corner",viewBox:"0 0 250 250",get children(){return[f(qt,{}),f(Rt,{}),f(Kt,{})]}}),Gt="github-corner",Vt=b.svg`
  color: white;
  fill: steelblue;
  position: absolute;
  border: 0;
  right: 0;
  top: 0;
  z-index: 1;
  width: 80px;
  height: 80px;

  &:hover {
    fill: #0096ff;
  }

  @media (prefers-color-scheme: dark) {
    fill: aqua;

    &:hover {
      fill: darkturquoise;
    }
  }
`,qt=()=>Ft.cloneNode(!0),Rt=()=>f(Ut,{fill:"currentColor",d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"}),Ut=b.path`
  transform-origin: 130px 106px;

  .github-corner:hover & {
    animation: OctocatWave 560ms ease-in-out;
  }

  @keyframes OctocatWave {
    0%,
    100% {
      transform: rotate(0);
    }

    20%,
    60% {
      transform: rotate(-25deg);
    }

    40%,
    80% {
      transform: rotate(10deg);
    }
  }

  @media (max-width: 500px) {
    .github-corner:hover & {
      animation: none;
    }

    .github-corner & {
      animation: OctocatWave 560ms ease-in-out;
    }
  }
`,Kt=()=>zt.cloneNode(!0),Wt=P('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>'),Jt=P("<title></title>");function F(e,t){const n=q(e.a,t);return(()=>{const r=Wt.cloneNode(!0);return ae(r,n,!0,!0),C(r,()=>bt,null),C(r,(()=>{const o=v(()=>!!t.title,!0);return()=>o()&&(()=>{const i=Jt.cloneNode(!0);return C(i,()=>t.title),i})()})(),null),A(o=>{const i=e.a.stroke,s={...t.style,overflow:"visible",color:t.color||"currentColor"},l=t.size||"1em",c=t.size||"1em",a=e.c;return i!==o._v$&&j(r,"stroke",o._v$=i),o._v$2=Me(r,s,o._v$2),l!==o._v$3&&j(r,"height",o._v$3=l),c!==o._v$4&&j(r,"width",o._v$4=c),a!==o._v$5&&(r.innerHTML=o._v$5=a),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})()}function Xt(e){return F({a:{viewBox:"0 0 1024 1024"},c:'<path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"/>'},e)}function Zt(e){return F({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"/><path d="M4.603 12.087a.81.81 0 01-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 011.482-.645 19.701 19.701 0 001.062-2.227 7.269 7.269 0 01-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 01.477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 00.98 1.686 5.753 5.753 0 011.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 01-.354.416.856.856 0 01-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 01-.911-.95 11.642 11.642 0 00-1.997.406 11.311 11.311 0 01-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 01-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 00.035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 00.45-.606zm1.64-1.33a12.647 12.647 0 011.01-.193 11.666 11.666 0 01-.51-.858 20.741 20.741 0 01-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 00.07-.015.307.307 0 00.094-.125.436.436 0 00.059-.2.095.095 0 00-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 00-.612-.053zM8.078 5.8a6.7 6.7 0 00.2-.828c.031-.188.043-.343.038-.465a.613.613 0 00-.032-.198.517.517 0 00-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>'},e)}function Qt(e){return F({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'},e)}function Yt(e){return F({a:{fill:"currentColor",viewBox:"0 0 24 24"},c:'<path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"/>'},e)}const L=({children:e,href:t,testId:n="anchor"})=>f(en,{"data-testid":n,href:t,rel:"noopener noreferrer",target:"_blank",children:e}),en=b.a`
  color: steelblue;
  text-decoration: none;

  &:hover {
    color: #0096FF;
  }

  @media (prefers-color-scheme: dark) {
    color: aqua;

    &:hover {
      color: darkturquoise;
    }
  }
`,tn=()=>{const[e]=ue();return f(rn,{"data-testid":nn,get children(){return[f(I,{get children(){return f(L,{href:"mailto:njhjason@protonmail.com",get children(){return f(G,{get children(){return[f(Qt,{})," njhjason@protonmail.com"]}})}})}}),f(I,{get children(){return f(L,{href:"https://github.com/NgoJunHaoJason",get children(){return f(G,{get children(){return[f(Yt,{})," ",v(()=>e("header.github"))]}})}})}}),f(I,{get children(){return f(L,{href:"https://www.linkedin.com/in/ngo-jun-hao-jason",get children(){return f(G,{get children(){return[f(Xt,{})," ",v(()=>e("header.linkedin"))]}})}})}}),f(I,{get children(){return f(L,{href:"./documents/ngo_jun_hao_jason_curriculum_vitae.pdf",get children(){return f(G,{get children(){return[f(Zt,{})," ",v(()=>e("header.pdf"))]}})}})}})]}})},nn="header-information",rn=b.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,I=b.li`
  margin-bottom: 4px;
`,G=b.div`
  line-height: 20px;
`,on=b.img`
  border-color: lightgray;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  width: 80px;
`;function sn(e){return F({a:{viewBox:"0 0 24 24"},c:'<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 00-2-2h-4v-3a2 2 0 002-2V7h1a2 2 0 002-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 01-1.67 4.873z"/>'},e)}const ln="Jason Ngo",cn="Aspiring Software Craftsman",an="GitHub profile",fn="LinkedIn profile",un="PDF version",dn="中文",hn={title:ln,subtitle:cn,github:an,linkedin:fn,pdf:un,translate:dn},gn="伍俊豪",yn="立志成为软件工匠",mn="GitHub简介",pn="LinkedIn简介",bn="PDF版",wn="English",Cn={title:gn,subtitle:yn,github:mn,linkedin:pn,pdf:bn,translate:wn},ie="en",se="zh",xn={[ie]:{header:hn},[se]:{header:Cn}},vn=Bt(xn,"en"),An=()=>{const[e,{locale:t}]=ue();return f(On,{"data-testid":Sn,onClick:()=>{const r=t();if(r===ie)t(se);else if(r===se)t(ie);else throw Error(`Unknown locale: ${r}`)},get children(){return[f(sn,{})," ",f(kn,{get children(){return e("header.translate")}})]}})},Sn="translate-button",On=b.button`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1px;
  background-color: lightgray;
  border: 1px solid lightgray;
  border-bottom-right-radius: 4px;
  width: 80px;
  padding: 4px;
  display: flex;
`,kn=b.div`
  line-height: 16px;
  margin-left: 10px;
`,V=b.div`
  display: flex;
  justify-content: center;
`,$n=P("<div><br></div>"),Pn=()=>{const[e]=ue();return(()=>{const t=$n.cloneNode(!0),n=t.firstChild;return j(t,"data-testid",Nn),C(t,f(An,{}),n),C(t,f(L,{href:"https://github.com/NgoJunHaoJason/NgoJunHaoJason.github.io",get children(){return f(It,{})}}),n),C(t,f(V,{get children(){return f(on,{"data-testid":Ln,alt:"profile picture",src:Ht})}}),n),C(t,f(V,{get children(){return f(jn,{get children(){return e("header.title")}})}}),n),C(t,f(V,{get children(){return f(_n,{get children(){return f(L,{href:"https://manifesto.softwarecraftsmanship.org/",get children(){return e("header.subtitle")}})}})}}),n),C(t,f(V,{get children(){return f(tn,{})}}),null),t})()},Nn="header",Ln="profile-picture",jn=b.h1`
  font-weight: 600;
  line-height: 40px;
`,_n=b.h3`
  font-weight: 400;
  line-height: 24px;
`,En=b.div`
  border-bottom-color: lightgray;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`,we=P("<br>"),Tn=P("<h1>Hello World</h1>"),Mn=()=>f(Dn,{get children(){return[we.cloneNode(!0),f(Pn,{}),we.cloneNode(!0),f(En,{}),Tn.cloneNode(!0)]}}),Dn=b.div`
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #303030;
  }
`,Bn=Nt`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: black;
    margin: 0;
  }

  @media (prefers-color-scheme: dark) {
    h1, h2, h3, h4, h5, h6, p {
      color: white;
    }
  }
`,Hn=()=>f(Ge.Provider,{value:vn,get children(){return[f(Bn,{}),f(Mn,{})]}});lt(()=>f(Hn,{}),document.getElementById("root"));