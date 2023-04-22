(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const Ve=(e,t)=>e===t,b=Symbol("solid-proxy"),de=Symbol("solid-track"),Ge=Symbol("solid-dev-component"),G={equals:Ve};let Re=ke;const P=1,R=2,we={owned:null,cleanups:null,context:null,owner:null};var m=null;let Y=null,g=null,y=null,S=null,J=0;function Ue(e,t){const n=g,r=m,o=e.length===0,i=o?we:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},s=o?e:()=>e(()=>k(()=>Z(i)));m=i,g=null;try{return E(s,!0)}finally{g=n,m=r}}function Ce(e,t){t=t?Object.assign({},G,t):G;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=o=>(typeof o=="function"&&(o=o(n.value)),Se(n,o));return[Oe.bind(n),r]}function v(e,t,n){const r=$e(e,t,!1,P);X(r)}function A(e,t,n){n=n?Object.assign({},G,n):G;const r=$e(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,X(r),Oe.bind(r)}function qe(e){return E(e,!1)}function k(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function Ae(){return g}function ve(e,t){const n=Symbol("context");return{id:n,Provider:Xe(n),defaultValue:e}}function xe(e){let t;return(t=Ne(m,e.id))!==void 0?t:e.defaultValue}function Ke(e){const t=A(e),n=A(()=>te(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Oe(){if(this.sources&&this.state)if(this.state===P)X(this);else{const e=y;y=null,E(()=>U(this),!1),y=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function Se(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&E(()=>{for(let o=0;o<e.observers.length;o+=1){const i=e.observers[o],s=Y&&Y.running;s&&Y.disposed.has(i),(s?!i.tState:!i.state)&&(i.pure?y.push(i):S.push(i),i.observers&&Le(i)),s||(i.state=P)}if(y.length>1e6)throw y=[],new Error},!1)),t}function X(e){if(!e.fn)return;Z(e);const t=m,n=g,r=J;g=m=e,We(e,e.value,r),g=n,m=t}function We(e,t,n){let r;try{r=e.fn(t)}catch(o){return e.pure&&(e.state=P,e.owned&&e.owned.forEach(Z),e.owned=null),e.updatedAt=n+1,je(o)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Se(e,r):e.value=r,e.updatedAt=n)}function $e(e,t,n,r=P,o){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:m,context:null,pure:n};return m===null||m!==we&&(m.owned?m.owned.push(i):m.owned=[i]),i}function Pe(e){if(e.state===0)return;if(e.state===R)return U(e);if(e.suspense&&k(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===P)X(e);else if(e.state===R){const r=y;y=null,E(()=>U(e,t[0]),!1),y=r}}function E(e,t){if(y)return e();let n=!1;t||(y=[]),S?n=!0:S=[],J++;try{const r=e();return Je(n),r}catch(r){n||(S=null),y=null,je(r)}}function Je(e){if(y&&(ke(y),y=null),e)return;const t=S;S=null,t.length&&E(()=>Re(t),!1)}function ke(e){for(let t=0;t<e.length;t++)Pe(e[t])}function U(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const o=r.state;o===P?r!==t&&(!r.updatedAt||r.updatedAt<J)&&Pe(r):o===R&&U(r,t)}}}function Le(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=R,n.pure?y.push(n):S.push(n),n.observers&&Le(n))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),o=n.observers;if(o&&o.length){const i=o.pop(),s=n.observerSlots.pop();r<o.length&&(i.sourceSlots[s]=r,o[r]=i,n.observerSlots[r]=s)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function je(e){throw e}function Ne(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Ne(e.owner,t):void 0}function te(e){if(typeof e=="function"&&!e.length)return te(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=te(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Xe(e,t){return function(r){let o;return v(()=>o=k(()=>(m.context={[e]:r.value},Ke(()=>r.children))),void 0),o}}function u(e,t){return k(()=>e(t||{}))}function B(){return!0}const ne={get(e,t,n){return t===b?n:e.get(t)},has(e,t){return t===b?!0:e.has(t)},set:B,deleteProperty:B,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:B,deleteProperty:B}},ownKeys(e){return e.keys()}};function ee(e){return(e=typeof e=="function"?e():e)?e:{}}function V(...e){let t=!1;for(let r=0;r<e.length;r++){const o=e[r];t=t||!!o&&b in o,e[r]=typeof o=="function"?(t=!0,A(o)):o}if(t)return new Proxy({get(r){for(let o=e.length-1;o>=0;o--){const i=ee(e[o])[r];if(i!==void 0)return i}},has(r){for(let o=e.length-1;o>=0;o--)if(r in ee(e[o]))return!0;return!1},keys(){const r=[];for(let o=0;o<e.length;o++)r.push(...Object.keys(ee(e[o])));return[...new Set(r)]}},ne);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const o=Object.getOwnPropertyDescriptors(e[r]);for(const i in o)i in n||Object.defineProperty(n,i,{enumerable:!0,get(){for(let s=e.length-1;s>=0;s--){const l=(e[s]||{})[i];if(l!==void 0)return l}}})}return n}function _e(e,...t){const n=new Set(t.flat());if(b in e){const o=t.map(i=>new Proxy({get(s){return i.includes(s)?e[s]:void 0},has(s){return i.includes(s)&&s in e},keys(){return i.filter(s=>s in e)}},ne));return o.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},ne)),o}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(o=>!n.has(o))),t.map(o=>{const i={};for(let s=0;s<o.length;s++){const l=o[s];l in e&&Object.defineProperty(i,l,r[l]?r[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return i})}const Ze=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Qe=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ze]),Ye=new Set(["innerHTML","textContent","innerText","children"]),et=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),tt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function nt(e,t){const n=tt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const rt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ot=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),it={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function st(e,t,n){let r=n.length,o=t.length,i=r,s=0,l=0,c=t[o-1].nextSibling,f=null;for(;s<o||l<i;){if(t[s]===n[l]){s++,l++;continue}for(;t[o-1]===n[i-1];)o--,i--;if(o===s){const d=i<r?l?n[l-1].nextSibling:n[i-l]:c;for(;l<i;)e.insertBefore(n[l++],d)}else if(i===l)for(;s<o;)(!f||!f.has(t[s]))&&t[s].remove(),s++;else if(t[s]===n[i-1]&&n[l]===t[o-1]){const d=t[--o].nextSibling;e.insertBefore(n[l++],t[s++].nextSibling),e.insertBefore(n[--i],d),t[o]=n[i]}else{if(!f){f=new Map;let a=l;for(;a<i;)f.set(n[a],a++)}const d=f.get(t[s]);if(d!=null)if(l<d&&d<i){let a=s,h=1,x;for(;++a<o&&a<i&&!((x=f.get(t[a]))==null||x!==d+h);)h++;if(h>d-l){const Q=t[s];for(;l<d;)e.insertBefore(n[l++],Q)}else e.replaceChild(n[l++],t[s++])}else s++;else t[s++].remove()}}}const he="_$DX_DELEGATE";function lt(e,t,n,r={}){let o;return Ue(i=>{o=i,t===document?e():w(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{o(),t.textContent=""}}function L(e,t,n){let r;const o=()=>{const s=document.createElement("template");return s.innerHTML=e,n?s.content.firstChild.firstChild:s.content.firstChild},i=t?()=>(r||(r=o())).cloneNode(!0):()=>k(()=>document.importNode(r||(r=o()),!0));return i.cloneNode=i,i}function ct(e,t=window.document){const n=t[he]||(t[he]=new Set);for(let r=0,o=e.length;r<o;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,yt))}}function $(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function ut(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function at(e,t){t==null?e.removeAttribute("class"):e.className=t}function ft(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const o=n[0];e.addEventListener(t,n[0]=i=>o.call(e,n[1],i))}else e.addEventListener(t,n)}function dt(e,t,n={}){const r=Object.keys(t||{}),o=Object.keys(n);let i,s;for(i=0,s=o.length;i<s;i++){const l=o[i];!l||l==="undefined"||t[l]||(ge(e,l,!1),delete n[l])}for(i=0,s=r.length;i<s;i++){const l=r[i],c=!!t[l];!l||l==="undefined"||n[l]===c||!c||(ge(e,l,!0),n[l]=c)}return n}function Ee(e,t,n){if(!t)return n?$(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let o,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)o=t[i],o!==n[i]&&(r.setProperty(i,o),n[i]=o);return n}function ue(e,t={},n,r){const o={};return r||v(()=>o.children=_(e,t.children,o.children)),v(()=>t.ref&&t.ref(e)),v(()=>ht(e,t,n,!0,o,!0)),o}function w(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return _(e,t,r,n);v(o=>_(e,t(),o,n),r)}function ht(e,t,n,r,o={},i=!1){t||(t={});for(const s in o)if(!(s in t)){if(s==="children")continue;o[s]=ye(e,s,null,o[s],n,i)}for(const s in t){if(s==="children"){r||_(e,t.children);continue}const l=t[s];o[s]=ye(e,s,l,o[s],n,i)}}function gt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ge(e,t,n){const r=t.trim().split(/\s+/);for(let o=0,i=r.length;o<i;o++)e.classList.toggle(r[o],n)}function ye(e,t,n,r,o,i){let s,l,c,f,d;if(t==="style")return Ee(e,n,r);if(t==="classList")return dt(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);r&&e.removeEventListener(a,r),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);r&&e.removeEventListener(a,r,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),h=rt.has(a);if(!h&&r){const x=Array.isArray(r)?r[0]:r;e.removeEventListener(a,x)}(h||n)&&(ft(e,a,n,h),h&&ct([a]))}else if(t.slice(0,5)==="attr:")$(e,t.slice(5),n);else if((d=t.slice(0,5)==="prop:")||(c=Ye.has(t))||!o&&((f=nt(t,e.tagName))||(l=Qe.has(t)))||(s=e.nodeName.includes("-")))d&&(t=t.slice(5),l=!0),t==="class"||t==="className"?at(e,n):s&&!l&&!c?e[gt(t)]=n:e[f||t]=n;else{const a=o&&t.indexOf(":")>-1&&it[t.split(":")[0]];a?ut(e,a,t,n):$(e,et[t]||t,n)}return n}function yt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const o=n[`${t}Data`];if(o!==void 0?r.call(n,o,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function _(e,t,n,r,o){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,s=r!==void 0;if(e=s&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),s){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=j(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=j(e,n,r);else{if(i==="function")return v(()=>{let l=t();for(;typeof l=="function";)l=l();n=_(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],c=n&&Array.isArray(n);if(re(l,t,n,o))return v(()=>n=_(e,l,n,r,!0)),()=>n;if(l.length===0){if(n=j(e,n,r),s)return n}else c?n.length===0?me(e,l,r):st(e,n,l):(n&&j(e),me(e,l));n=l}else if(t instanceof Node){if(Array.isArray(n)){if(s)return n=j(e,n,r,t);j(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function re(e,t,n,r){let o=!1;for(let i=0,s=t.length;i<s;i++){let l=t[i],c=n&&n[i];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))o=re(e,l,c)||o;else if(typeof l=="function")if(r){for(;typeof l=="function";)l=l();o=re(e,Array.isArray(l)?l:[l],Array.isArray(c)?c:[c])||o}else e.push(l),o=!0;else{const f=String(l);c&&c.nodeType===3?(c.data=f,e.push(c)):e.push(document.createTextNode(f))}}return o}function me(e,t,n=null){for(let r=0,o=t.length;r<o;r++)e.insertBefore(t[r],n)}function j(e,t,n,r){if(n===void 0)return e.textContent="";const o=r||document.createTextNode("");if(t.length){let i=!1;for(let s=t.length-1;s>=0;s--){const l=t[s];if(o!==l){const c=l.parentNode===e;!i&&!s?c?e.replaceChild(o,l):e.insertBefore(o,n):c&&l.remove()}else i=!0}}else e.insertBefore(o,n);return[o]}const mt=!1,pt="http://www.w3.org/2000/svg";function bt(e,t=!1){return t?document.createElementNS(pt,e):document.createElement(e)}function wt(e){const[t,n]=_e(e,["component"]),r=A(()=>t.component);return A(()=>{const o=r();switch(typeof o){case"function":return Object.assign(o,{[Ge]:!0}),k(()=>o(n));case"string":const i=ot.has(o),s=bt(o,i);return ue(s,n,i),s}})}let Ct={data:""},At=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Ct,vt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,xt=/\/\*[^]*?\*\/|  +/g,pe=/\n+/g,O=(e,t)=>{let n="",r="",o="";for(let i in e){let s=e[i];i[0]=="@"?i[1]=="i"?n=i+" "+s+";":r+=i[1]=="f"?O(s,i):i+"{"+O(s,i[1]=="k"?"":t)+"}":typeof s=="object"?r+=O(s,t?t.replace(/([^,])+/g,l=>i.replace(/(^:.*)|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,l):l?l+" "+c:c)):i):s!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=O.p?O.p(i,s):i+":"+s+";")}return n+(t&&o?t+"{"+o+"}":o)+r},C={},Te=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Te(e[n]);return t}return e},Ot=(e,t,n,r,o)=>{let i=Te(e),s=C[i]||(C[i]=(c=>{let f=0,d=11;for(;f<c.length;)d=101*d+c.charCodeAt(f++)>>>0;return"go"+d})(i));if(!C[s]){let c=i!==e?e:(f=>{let d,a,h=[{}];for(;d=vt.exec(f.replace(xt,""));)d[4]?h.shift():d[3]?(a=d[3].replace(pe," ").trim(),h.unshift(h[0][a]=h[0][a]||{})):h[0][d[1]]=d[2].replace(pe," ").trim();return h[0]})(e);C[s]=O(o?{["@keyframes "+s]:c}:c,n?"":"."+s)}let l=n&&C.g?C.g:null;return n&&(C.g=C[s]),((c,f,d,a)=>{a?f.data=f.data.replace(a,c):f.data.indexOf(c)===-1&&(f.data=d?c+f.data:f.data+c)})(C[s],t,r,l),s},St=(e,t,n)=>e.reduce((r,o,i)=>{let s=t[i];if(s&&s.call){let l=s(n),c=l&&l.props&&l.props.className||/^go/.test(l)&&l;s=c?"."+c:l&&typeof l=="object"?l.props?"":O(l,""):l===!1?"":l}return r+o+(s??"")},"");function q(e){let t=this||{},n=e.call?e(t.p):e;return Ot(n.unshift?n.raw?St(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,At(t.target),t.g,t.o,t.k)}q.bind({g:1});q.bind({k:1});const $t=ve();function Me(e){let t=this||{};return(...n)=>{const r=o=>{const i=xe($t),s=V(o,{theme:i}),l=V(s,{get class(){const x=s.class,Q="class"in s&&/^go[0-9]+/.test(x);let He=q.apply({target:t.target,o:Q,p:s,g:t.g},n);return[x,He].filter(Boolean).join(" ")}}),[c,f]=_e(l,["as","theme"]),d=f,a=c.as||e;let h;return typeof a=="function"?h=a(d):t.g==1?(h=document.createElement(a),ue(h,d)):h=wt(V({component:a},d)),h};return r.class=o=>k(()=>q.apply({target:t.target,p:o,g:t.g},n)),r}}const p=new Proxy(Me,{get(e,t){return e(t)}});function Pt(){const e=Me.call({g:1},"div").apply(null,arguments);return function(n){return e(n),null}}const oe=Symbol("store-raw"),M=Symbol("store-node");function De(e){let t=e[b];if(!t&&(Object.defineProperty(e,b,{value:t=new Proxy(e,jt)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let o=0,i=n.length;o<i;o++){const s=n[o];r[s].get&&Object.defineProperty(e,s,{enumerable:r[s].enumerable,get:r[s].get.bind(t)})}}return t}function K(e){let t;return e!=null&&typeof e=="object"&&(e[b]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function D(e,t=new Set){let n,r,o,i;if(n=e!=null&&e[oe])return n;if(!K(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,l=e.length;s<l;s++)o=e[s],(r=D(o,t))!==o&&(e[s]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let c=0,f=s.length;c<f;c++)i=s[c],!l[i].get&&(o=e[i],(r=D(o,t))!==o&&(e[i]=r))}return e}function ae(e){let t=e[M];return t||Object.defineProperty(e,M,{value:t=Object.create(null)}),t}function ie(e,t,n){return e[t]||(e[t]=Be(n))}function kt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===b||t===M||(delete n.value,delete n.writable,n.get=()=>e[b][t]),n}function Ie(e){if(Ae()){const t=ae(e);(t._||(t._=Be()))()}}function Lt(e){return Ie(e),Reflect.ownKeys(e)}function Be(e){const[t,n]=Ce(e,{equals:!1,internal:!0});return t.$=n,t}const jt={get(e,t,n){if(t===oe)return e;if(t===b)return n;if(t===de)return Ie(e),n;const r=ae(e),o=r[t];let i=o?o():e[t];if(t===M||t==="__proto__")return i;if(!o){const s=Object.getOwnPropertyDescriptor(e,t);Ae()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(i=ie(r,t,i)())}return K(i)?De(i):i},has(e,t){return t===oe||t===b||t===de||t===M||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Lt,getOwnPropertyDescriptor:kt};function W(e,t,n,r=!1){if(!r&&e[t]===n)return;const o=e[t],i=e.length;n===void 0?delete e[t]:e[t]=n;let s=ae(e),l;(l=ie(s,t,o))&&l.$(()=>n),Array.isArray(e)&&e.length!==i&&(l=ie(s,"length",i))&&l.$(e.length),(l=s._)&&l.$()}function ze(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const o=n[r];W(e,o,t[o])}}function Nt(e,t){if(typeof t=="function"&&(t=t(e)),t=D(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const o=t[n];e[n]!==o&&W(e,n,o)}W(e,"length",r)}else ze(e,t)}function T(e,t,n=[]){let r,o=e;if(t.length>1){r=t.shift();const s=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)T(e,[r[c]].concat(t),n);return}else if(l&&s==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&T(e,[c].concat(t),n);return}else if(l&&s==="object"){const{from:c=0,to:f=e.length-1,by:d=1}=r;for(let a=c;a<=f;a+=d)T(e,[a].concat(t),n);return}else if(t.length>1){T(e[r],t,[r].concat(n));return}o=e[r],n=[r].concat(n)}let i=t[0];typeof i=="function"&&(i=i(o,n),i===o)||r===void 0&&i==null||(i=D(i),r===void 0||K(o)&&K(i)&&!Array.isArray(i)?ze(o,i):W(e,r,i))}function _t(...[e,t]){const n=D(e||{}),r=Array.isArray(n),o=De(n);function i(...s){qe(()=>{r&&s.length===1?Nt(n,s[0]):T(n,s)})}return[o,i]}function se(e,t,n){const r=t.trim().split(".").reduce((o,i)=>o?o[i]:void 0,e);return r!==void 0?r:n}var Et=(e,t,n=/{{([^{}]+)}}/g)=>e.replace(n,(r,o)=>se(t,o,"")),Tt=(e={},t=typeof navigator<"u"&&navigator.language in e?navigator.language:Object.keys(e)[0]??"")=>{const[n,r]=Ce(t),[o,i]=_t(e);return[(c,f,d)=>{const a=se(o[n()],c,d||"");return typeof a=="function"?a(f):typeof a=="string"?Et(a,f||{}):a},{add(c,f){i(c,d=>Object.assign(d||{},f))},locale:c=>c?r(c):n(),dict:c=>se(o,c)}]},Fe=ve({}),fe=()=>xe(Fe);const Mt=""+new URL("profile_picture-3e49284a.png",import.meta.url).href,Dt=L('<svg><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></svg>',!1,!0),It=L('<svg><path fill="currentColor" d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"></svg>',!1,!0),Bt=()=>u(Ft,{"data-testid":zt,class:"github-corner",viewBox:"0 0 250 250",get children(){return[u(Ht,{}),u(Vt,{}),u(Rt,{})]}}),zt="github-corner",Ft=p.svg`
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
`,Ht=()=>Dt(),Vt=()=>u(Gt,{fill:"currentColor",d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"}),Gt=p.path`
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
`,Rt=()=>It(),Ut=L('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',2),qt=L("<title></title>",2);function I(e,t){const n=V(e.a,t);return(()=>{const r=Ut.cloneNode(!0);return ue(r,n,!0,!0),w(r,()=>mt,null),w(r,(()=>{const o=A(()=>!!t.title,!0);return()=>o()&&(()=>{const i=qt.cloneNode(!0);return w(i,()=>t.title),i})()})(),null),v(o=>{const i=e.a.stroke,s={...t.style,overflow:"visible",color:t.color||"currentColor"},l=t.size||"1em",c=t.size||"1em",f=e.c;return i!==o._v$&&$(r,"stroke",o._v$=i),o._v$2=Ee(r,s,o._v$2),l!==o._v$3&&$(r,"height",o._v$3=l),c!==o._v$4&&$(r,"width",o._v$4=c),f!==o._v$5&&(r.innerHTML=o._v$5=f),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),r})()}function Kt(e){return I({a:{viewBox:"0 0 1024 1024"},c:'<path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 10-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"/>'},e)}function Wt(e){return I({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm0 1h8a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V2a1 1 0 011-1z"/><path d="M4.603 12.087a.81.81 0 01-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 011.482-.645 19.701 19.701 0 001.062-2.227 7.269 7.269 0 01-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 01.477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 00.98 1.686 5.753 5.753 0 011.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 01-.354.416.856.856 0 01-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 01-.911-.95 11.642 11.642 0 00-1.997.406 11.311 11.311 0 01-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 01-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 00.035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 00.45-.606zm1.64-1.33a12.647 12.647 0 011.01-.193 11.666 11.666 0 01-.51-.858 20.741 20.741 0 01-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 00.07-.015.307.307 0 00.094-.125.436.436 0 00.059-.2.095.095 0 00-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 00-.612-.053zM8.078 5.8a6.7 6.7 0 00.2-.828c.031-.188.043-.343.038-.465a.613.613 0 00-.032-.198.517.517 0 00-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"/>'},e)}function Jt(e){return I({a:{fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'},e)}function Xt(e){return I({a:{fill:"currentColor",viewBox:"0 0 24 24"},c:'<path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 01-.728-.728v-3.73a2.497 2.497 0 00-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 00.09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 00-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 01-.728.728.718.718 0 01-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 016.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z"/>'},e)}const N=({children:e,href:t,testId:n="anchor"})=>u(Zt,{"data-testid":n,href:t,rel:"noopener noreferrer",target:"_blank",children:e}),Zt=p.a`
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
`,Qt=()=>{const[e]=fe();return u(en,{"data-testid":Yt,get children(){return[u(z,{get children(){return u(N,{href:"mailto:njhjason@protonmail.com",get children(){return u(F,{get children(){return[u(Jt,{})," njhjason@protonmail.com"]}})}})}}),u(z,{get children(){return u(N,{href:"https://github.com/NgoJunHaoJason",get children(){return u(F,{get children(){return[u(Xt,{})," ",A(()=>e("header.github"))]}})}})}}),u(z,{get children(){return u(N,{href:"https://www.linkedin.com/in/ngo-jun-hao-jason",get children(){return u(F,{get children(){return[u(Kt,{})," ",A(()=>e("header.linkedin"))]}})}})}}),u(z,{get children(){return u(N,{href:"./documents/ngo_jun_hao_jason_curriculum_vitae.pdf",get children(){return u(F,{get children(){return[u(Wt,{})," ",A(()=>e("header.pdf"))]}})}})}})]}})},Yt="header-information",en=p.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`,z=p.li`
  margin-bottom: 4px;
`,F=p.div`
  line-height: 20px;
`,tn=p.img`
  border-color: lightgray;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  width: 80px;
`;function nn(e){return I({a:{viewBox:"0 0 24 24"},c:'<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 00-2-2h-4v-3a2 2 0 002-2V7h1a2 2 0 002-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 01-1.67 4.873z"/>'},e)}const rn="Jason Ngo",on="Aspiring Software Craftsman",sn="GitHub profile",ln="LinkedIn profile",cn="PDF version",un="中文",an={title:rn,subtitle:on,github:sn,linkedin:ln,pdf:cn,translate:un},fn="伍俊豪",dn="立志成为软件工匠",hn="GitHub简介",gn="LinkedIn简介",yn="PDF版",mn="English",pn={title:fn,subtitle:dn,github:hn,linkedin:gn,pdf:yn,translate:mn},le="en",ce="zh",bn={[le]:{header:an},[ce]:{header:pn}},wn=Tt(bn,"en"),Cn=()=>{const[e,{locale:t}]=fe();return u(vn,{"data-testid":An,onClick:()=>{const r=t();if(r===le)t(ce);else if(r===ce)t(le);else throw Error(`Unknown locale: ${r}`)},get children(){return[u(nn,{})," ",u(xn,{get children(){return e("header.translate")}})]}})},An="translate-button",vn=p.button`
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
`,xn=p.div`
  line-height: 16px;
  margin-left: 10px;
`,H=p.div`
  display: flex;
  justify-content: center;
`,On=L("<div><br>"),Sn=()=>{const[e]=fe();return(()=>{const t=On(),n=t.firstChild;return $(t,"data-testid",$n),w(t,u(Cn,{}),n),w(t,u(N,{href:"https://github.com/NgoJunHaoJason/NgoJunHaoJason.github.io",get children(){return u(Bt,{})}}),n),w(t,u(H,{get children(){return u(tn,{"data-testid":Pn,alt:"profile picture",src:Mt})}}),n),w(t,u(H,{get children(){return u(kn,{get children(){return e("header.title")}})}}),n),w(t,u(H,{get children(){return u(Ln,{get children(){return u(N,{href:"https://manifesto.softwarecraftsmanship.org/",get children(){return e("header.subtitle")}})}})}}),n),w(t,u(H,{get children(){return u(Qt,{})}}),null),t})()},$n="header",Pn="profile-picture",kn=p.h1`
  font-weight: 600;
  line-height: 40px;
`,Ln=p.h3`
  font-weight: 400;
  line-height: 24px;
`,jn=p.div`
  border-bottom-color: lightgray;
  border-bottom-style: solid;
  border-bottom-width: 1px;
`,be=L("<br>"),Nn=L("<h1>Hello World"),_n=()=>u(En,{get children(){return[be(),u(Sn,{}),be(),u(jn,{}),Nn()]}}),En=p.div`
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #303030;
  }
`,Tn=Pt`
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
`,Mn=()=>u(Fe.Provider,{value:wn,get children(){return[u(Tn,{}),u(_n,{})]}});lt(()=>u(Mn,{}),document.getElementById("root"));
