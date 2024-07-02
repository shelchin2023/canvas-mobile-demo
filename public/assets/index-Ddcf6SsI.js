function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DoZ0fCqV.js","assets/___vite-browser-external_commonjs-proxy-C-82VKgB.js","assets/index.es-0SmgF1UF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const ig="modulepreload",rg=function(t){return"/"+t},A0={},ui=function(e,n,i){let o=Promise.resolve();if(n&&n.length>0){const r=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));o=Promise.all(n.map(c=>{if(c=rg(c),c in A0)return;A0[c]=!0;const l=c.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!i)for(let b=r.length-1;b>=0;b--){const _=r[b];if(_.href===c&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":ig,l||(f.as="script",f.crossOrigin=""),f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((b,_)=>{f.addEventListener("load",b),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tl(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Ax(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var o=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,o.get?o:{enumerable:!0,get:function(){return t[i]}})}),n}const og="2.9.26",sg=t=>t,dd=t=>t,ag=()=>`viem@${og}`;let te=class xu extends Error{constructor(e,n={}){var r;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:ag()});const i=n.cause instanceof xu?n.cause.details:(r=n.cause)!=null&&r.message?n.cause.message:n.details,o=n.cause instanceof xu&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: https://viem.sh${o}${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=i,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return up(this,e)}};function up(t,e){return e!=null&&e(t)?t:t&&typeof t=="object"&&"cause"in t?up(t.cause,e):e?null:t}class cg extends te{constructor({max:e,min:n,signed:i,size:o,value:r}){super(`Number "${r}" is not in safe ${o?`${o*8}-bit ${i?"signed":"unsigned"} `:""}integer range ${e?`(${n} to ${e})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class lg extends te{constructor(e){super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesBooleanError"})}}class ug extends te{constructor({givenSize:e,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}class dp extends te{constructor({offset:e,position:n,size:i}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${i}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class hp extends te{constructor({size:e,targetSize:n,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} size (${e}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}class $0 extends te{constructor({size:e,targetSize:n,type:i}){super(`${i.charAt(0).toUpperCase()}${i.slice(1).toLowerCase()} is expected to be ${n} ${i} long, but is ${e} ${i} long.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidBytesLengthError"})}}function Ko(t,{dir:e,size:n=32}={}){return typeof t=="string"?Mi(t,{dir:e,size:n}):dg(t,{dir:e,size:n})}function Mi(t,{dir:e,size:n=32}={}){if(n===null)return t;const i=t.replace("0x","");if(i.length>n*2)throw new hp({size:Math.ceil(i.length/2),targetSize:n,type:"hex"});return`0x${i[e==="right"?"padEnd":"padStart"](n*2,"0")}`}function dg(t,{dir:e,size:n=32}={}){if(n===null)return t;if(t.length>n)throw new hp({size:t.length,targetSize:n,type:"bytes"});const i=new Uint8Array(n);for(let o=0;o<n;o++){const r=e==="right";i[r?o:n-o-1]=t[r?o:t.length-o-1]}return i}function Jr(t,{strict:e=!0}={}){return!t||typeof t!="string"?!1:e?/^0x[0-9a-fA-F]*$/.test(t):t.startsWith("0x")}function _t(t){return Jr(t,{strict:!1})?Math.ceil((t.length-2)/2):t.length}function ka(t,{dir:e="left"}={}){let n=typeof t=="string"?t.replace("0x",""):t,i=0;for(let o=0;o<n.length-1&&n[e==="left"?o:n.length-o-1].toString()==="0";o++)i++;return n=e==="left"?n.slice(i):n.slice(0,n.length-i),typeof t=="string"?(n.length===1&&e==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}const hg=new TextEncoder;function nl(t,e={}){return typeof t=="number"||typeof t=="bigint"?fg(t,e):typeof t=="boolean"?pg(t,e):Jr(t)?zi(t,e):br(t,e)}function pg(t,e={}){const n=new Uint8Array(1);return n[0]=Number(t),typeof e.size=="number"?(Rn(n,{size:e.size}),Ko(n,{size:e.size})):n}const si={zero:48,nine:57,A:65,F:70,a:97,f:102};function S0(t){if(t>=si.zero&&t<=si.nine)return t-si.zero;if(t>=si.A&&t<=si.F)return t-(si.A-10);if(t>=si.a&&t<=si.f)return t-(si.a-10)}function zi(t,e={}){let n=t;e.size&&(Rn(n,{size:e.size}),n=Ko(n,{dir:"right",size:e.size}));let i=n.slice(2);i.length%2&&(i=`0${i}`);const o=i.length/2,r=new Uint8Array(o);for(let s=0,a=0;s<o;s++){const c=S0(i.charCodeAt(a++)),l=S0(i.charCodeAt(a++));if(c===void 0||l===void 0)throw new te(`Invalid byte sequence ("${i[a-2]}${i[a-1]}" in "${i}").`);r[s]=c*16+l}return r}function fg(t,e){const n=Fe(t,e);return zi(n)}function br(t,e={}){const n=hg.encode(t);return typeof e.size=="number"?(Rn(n,{size:e.size}),Ko(n,{dir:"right",size:e.size})):n}function Rn(t,{size:e}){if(_t(t)>e)throw new ug({givenSize:_t(t),maxSize:e})}function il(t,e={}){const{signed:n}=e;e.size&&Rn(t,{size:e.size});const i=BigInt(t);if(!n)return i;const o=(t.length-2)/2,r=(1n<<BigInt(o)*8n-1n)-1n;return i<=r?i:i-BigInt(`0x${"f".padStart(o*2,"f")}`)-1n}function bo(t,e={}){return Number(il(t,e))}function pp(t,e={}){let n=zi(t);return e.size&&(Rn(n,{size:e.size}),n=ka(n,{dir:"right"})),new TextDecoder().decode(n)}const gg=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Aa(t,e={}){return typeof t=="number"||typeof t=="bigint"?Fe(t,e):typeof t=="string"?hd(t,e):typeof t=="boolean"?fp(t,e):kt(t,e)}function fp(t,e={}){const n=`0x${Number(t)}`;return typeof e.size=="number"?(Rn(n,{size:e.size}),Ko(n,{size:e.size})):n}function kt(t,e={}){let n="";for(let o=0;o<t.length;o++)n+=gg[t[o]];const i=`0x${n}`;return typeof e.size=="number"?(Rn(i,{size:e.size}),Ko(i,{dir:"right",size:e.size})):i}function Fe(t,e={}){const{signed:n,size:i}=e,o=BigInt(t);let r;i?n?r=(1n<<BigInt(i)*8n-1n)-1n:r=2n**(BigInt(i)*8n)-1n:typeof t=="number"&&(r=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof r=="bigint"&&n?-r-1n:0;if(r&&o>r||o<s){const c=typeof t=="bigint"?"n":"";throw new cg({max:r?`${r}${c}`:void 0,min:`${s}${c}`,signed:n,size:i,value:`${t}${c}`})}const a=`0x${(n&&o<0?(1n<<BigInt(i*8))+BigInt(o):o).toString(16)}`;return i?Ko(a,{size:i}):a}const mg=new TextEncoder;function hd(t,e={}){const n=mg.encode(t);return kt(n,e)}function vo(t,{includeName:e=!1}={}){if(t.type!=="function"&&t.type!=="event"&&t.type!=="error")throw new Ag(t.type);return`${t.name}(${pd(t.inputs,{includeName:e})})`}function pd(t,{includeName:e=!1}={}){return t?t.map(n=>wg(n,{includeName:e})).join(e?", ":","):""}function wg(t,{includeName:e}){return t.type.startsWith("tuple")?`(${pd(t.components,{includeName:e})})${t.type.slice(5)}`:t.type+(e&&t.name?` ${t.name}`:"")}class bg extends te{constructor({data:e,params:n,size:i}){super([`Data size of ${i} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${pd(n,{includeName:!0})})`,`Data:   ${e} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=n,this.size=i}}class rl extends te{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class vg extends te{constructor({expectedLength:e,givenLength:n,type:i}){super([`ABI encoding array length mismatch for type ${i}.`,`Expected length: ${e}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class yg extends te{constructor({expectedSize:e,value:n}){super(`Size of bytes "${n}" (bytes${_t(n)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class xg extends te{constructor({expectedLength:e,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${e}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class gp extends te{constructor(e,{docsPath:n}){super([`Encoded error signature "${e}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class dc extends te{constructor(e,{docsPath:n}={}){super([`Function ${e?`"${e}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class Cg extends te{constructor(e,{docsPath:n}){super([`Function "${e}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class _g extends te{constructor(e,n){super("Found ambiguous types in overloaded ABI items.",{metaMessages:[`\`${e.type}\` in \`${vo(e.abiItem)}\`, and`,`\`${n.type}\` in \`${vo(n.abiItem)}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItemAmbiguityError"})}}class Eg extends te{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class Tg extends te{constructor(e,{docsPath:n}){super([`Type "${e}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class kg extends te{constructor(e){super([`Value "${e}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class Ag extends te{constructor(e){super([`"${e}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}function xr(t){return typeof t[0]=="string"?mp(t):$g(t)}function $g(t){let e=0;for(const o of t)e+=o.length;const n=new Uint8Array(e);let i=0;for(const o of t)n.set(o,i),i+=o.length;return n}function mp(t){return`0x${t.reduce((e,n)=>e+n.replace("0x",""),"")}`}class $s extends te{constructor({address:e}){super(`Address "${e}" is invalid.`,{metaMessages:["- Address must be a hex value of 20 bytes (40 hex characters).","- Address must match its checksum counterpart."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}class Sg extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}set(e,n){return super.set(e,n),this.maxSize&&this.size>this.maxSize&&this.delete(this.keys().next().value),this}}function I0(t){if(!Number.isSafeInteger(t)||t<0)throw new Error(`Wrong positive integer: ${t}`)}function wp(t,...e){if(!(t instanceof Uint8Array))throw new Error("Expected Uint8Array");if(e.length>0&&!e.includes(t.length))throw new Error(`Expected Uint8Array of length ${e}, not of length=${t.length}`)}function hc(t,e=!0){if(t.destroyed)throw new Error("Hash instance has been destroyed");if(e&&t.finished)throw new Error("Hash#digest() has already been called")}function bp(t,e){wp(t);const n=e.outputLen;if(t.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const Ga=BigInt(2**32-1),R0=BigInt(32);function Ig(t,e=!1){return e?{h:Number(t&Ga),l:Number(t>>R0&Ga)}:{h:Number(t>>R0&Ga)|0,l:Number(t&Ga)|0}}function Rg(t,e=!1){let n=new Uint32Array(t.length),i=new Uint32Array(t.length);for(let o=0;o<t.length;o++){const{h:r,l:s}=Ig(t[o],e);[n[o],i[o]]=[r,s]}return[n,i]}const Pg=(t,e,n)=>t<<n|e>>>32-n,Og=(t,e,n)=>e<<n|t>>>32-n,Ng=(t,e,n)=>e<<n-32|t>>>64-n,Bg=(t,e,n)=>t<<n-32|e>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const Mg=t=>t instanceof Uint8Array,Dg=t=>new Uint32Array(t.buffer,t.byteOffset,Math.floor(t.byteLength/4)),Wl=t=>new DataView(t.buffer,t.byteOffset,t.byteLength),Ln=(t,e)=>t<<32-e|t>>>e,Lg=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!Lg)throw new Error("Non little-endian hardware is not supported");function jg(t){if(typeof t!="string")throw new Error(`utf8ToBytes expected string, got ${typeof t}`);return new Uint8Array(new TextEncoder().encode(t))}function fd(t){if(typeof t=="string"&&(t=jg(t)),!Mg(t))throw new Error(`expected Uint8Array, got ${typeof t}`);return t}class vp{clone(){return this._cloneInto()}}function yp(t){const e=i=>t().update(fd(i)).digest(),n=t();return e.outputLen=n.outputLen,e.blockLen=n.blockLen,e.create=()=>t(),e}const[xp,Cp,_p]=[[],[],[]],Ug=BigInt(0),cs=BigInt(1),Wg=BigInt(2),zg=BigInt(7),Fg=BigInt(256),Hg=BigInt(113);for(let t=0,e=cs,n=1,i=0;t<24;t++){[n,i]=[i,(2*n+3*i)%5],xp.push(2*(5*i+n)),Cp.push((t+1)*(t+2)/2%64);let o=Ug;for(let r=0;r<7;r++)e=(e<<cs^(e>>zg)*Hg)%Fg,e&Wg&&(o^=cs<<(cs<<BigInt(r))-cs);_p.push(o)}const[Vg,Zg]=Rg(_p,!0),P0=(t,e,n)=>n>32?Ng(t,e,n):Pg(t,e,n),O0=(t,e,n)=>n>32?Bg(t,e,n):Og(t,e,n);function Gg(t,e=24){const n=new Uint32Array(10);for(let i=24-e;i<24;i++){for(let s=0;s<10;s++)n[s]=t[s]^t[s+10]^t[s+20]^t[s+30]^t[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,c=(s+2)%10,l=n[c],d=n[c+1],p=P0(l,d,1)^n[a],f=O0(l,d,1)^n[a+1];for(let b=0;b<50;b+=10)t[s+b]^=p,t[s+b+1]^=f}let o=t[2],r=t[3];for(let s=0;s<24;s++){const a=Cp[s],c=P0(o,r,a),l=O0(o,r,a),d=xp[s];o=t[d],r=t[d+1],t[d]=c,t[d+1]=l}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=t[s+a];for(let a=0;a<10;a++)t[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}t[0]^=Vg[i],t[1]^=Zg[i]}n.fill(0)}class gd extends vp{constructor(e,n,i,o=!1,r=24){if(super(),this.blockLen=e,this.suffix=n,this.outputLen=i,this.enableXOF=o,this.rounds=r,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,I0(i),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=Dg(this.state)}keccak(){Gg(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){hc(this);const{blockLen:n,state:i}=this;e=fd(e);const o=e.length;for(let r=0;r<o;){const s=Math.min(n-this.pos,o-r);for(let a=0;a<s;a++)i[this.pos++]^=e[r++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:e,suffix:n,pos:i,blockLen:o}=this;e[i]^=n,n&128&&i===o-1&&this.keccak(),e[o-1]^=128,this.keccak()}writeInto(e){hc(this,!1),wp(e),this.finish();const n=this.state,{blockLen:i}=this;for(let o=0,r=e.length;o<r;){this.posOut>=i&&this.keccak();const s=Math.min(i-this.posOut,r-o);e.set(n.subarray(this.posOut,this.posOut+s),o),this.posOut+=s,o+=s}return e}xofInto(e){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return I0(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(bp(e,this),this.finished)throw new Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){const{blockLen:n,suffix:i,outputLen:o,rounds:r,enableXOF:s}=this;return e||(e=new gd(n,i,o,s,r)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=r,e.suffix=i,e.outputLen=o,e.enableXOF=s,e.destroyed=this.destroyed,e}}const qg=(t,e,n)=>yp(()=>new gd(e,t,n)),Yg=qg(1,136,256/8);function Ss(t,e){const n=e||"hex",i=Yg(Jr(t,{strict:!1})?nl(t):t);return n==="bytes"?i:Aa(i)}function md(t,e){const n=e?`${e}${t.toLowerCase()}`:t.substring(2).toLowerCase(),i=Ss(br(n),"bytes"),o=(e?n.substring(`${e}0x`.length):n).split("");for(let r=0;r<40;r+=2)i[r>>1]>>4>=8&&o[r]&&(o[r]=o[r].toUpperCase()),(i[r>>1]&15)>=8&&o[r+1]&&(o[r+1]=o[r+1].toUpperCase());return`0x${o.join("")}`}function bn(t,e){if(!Fi(t,{strict:!1}))throw new $s({address:t});return md(t,e)}const Kg=/^0x[a-fA-F0-9]{40}$/,zl=new Sg(8192);function Fi(t,e){const{strict:n=!0}=e??{};if(zl.has(t))return zl.get(t);const i=Kg.test(t)?t.toLowerCase()===t?!0:n?md(t)===t:!0:!1;return zl.set(t,i),i}function pc(t,e,n,{strict:i}={}){return Jr(t,{strict:!1})?Jg(t,e,n,{strict:i}):kp(t,e,n,{strict:i})}function Ep(t,e){if(typeof e=="number"&&e>0&&e>_t(t)-1)throw new dp({offset:e,position:"start",size:_t(t)})}function Tp(t,e,n){if(typeof e=="number"&&typeof n=="number"&&_t(t)!==n-e)throw new dp({offset:n,position:"end",size:_t(t)})}function kp(t,e,n,{strict:i}={}){Ep(t,e);const o=t.slice(e,n);return i&&Tp(o,e,n),o}function Jg(t,e,n,{strict:i}={}){Ep(t,e);const o=`0x${t.replace("0x","").slice((e??0)*2,(n??t.length)*2)}`;return i&&Tp(o,e,n),o}function Xg(t,e){if(t.length!==e.length)throw new xg({expectedLength:t.length,givenLength:e.length});const n=Qg({params:t,values:e}),i=bd(n);return i.length===0?"0x":i}function Qg({params:t,values:e}){const n=[];for(let i=0;i<t.length;i++)n.push(wd({param:t[i],value:e[i]}));return n}function wd({param:t,value:e}){const n=vd(t.type);if(n){const[i,o]=n;return tm(e,{length:i,param:{...t,type:o}})}if(t.type==="tuple")return sm(e,{param:t});if(t.type==="address")return em(e);if(t.type==="bool")return im(e);if(t.type.startsWith("uint")||t.type.startsWith("int")){const i=t.type.startsWith("int");return rm(e,{signed:i})}if(t.type.startsWith("bytes"))return nm(e,{param:t});if(t.type==="string")return om(e);throw new Eg(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function bd(t){let e=0;for(let r=0;r<t.length;r++){const{dynamic:s,encoded:a}=t[r];s?e+=32:e+=_t(a)}const n=[],i=[];let o=0;for(let r=0;r<t.length;r++){const{dynamic:s,encoded:a}=t[r];s?(n.push(Fe(e+o,{size:32})),i.push(a),o+=_t(a)):n.push(a)}return xr([...n,...i])}function em(t){if(!Fi(t))throw new $s({address:t});return{dynamic:!1,encoded:Mi(t.toLowerCase())}}function tm(t,{length:e,param:n}){const i=e===null;if(!Array.isArray(t))throw new kg(t);if(!i&&t.length!==e)throw new vg({expectedLength:e,givenLength:t.length,type:`${n.type}[${e}]`});let o=!1;const r=[];for(let s=0;s<t.length;s++){const a=wd({param:n,value:t[s]});a.dynamic&&(o=!0),r.push(a)}if(i||o){const s=bd(r);if(i){const a=Fe(r.length,{size:32});return{dynamic:!0,encoded:r.length>0?xr([a,s]):a}}if(o)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:xr(r.map(({encoded:s})=>s))}}function nm(t,{param:e}){const[,n]=e.type.split("bytes"),i=_t(t);if(!n){let o=t;return i%32!==0&&(o=Mi(o,{dir:"right",size:Math.ceil((t.length-2)/2/32)*32})),{dynamic:!0,encoded:xr([Mi(Fe(i,{size:32})),o])}}if(i!==parseInt(n))throw new yg({expectedSize:parseInt(n),value:t});return{dynamic:!1,encoded:Mi(t,{dir:"right"})}}function im(t){if(typeof t!="boolean")throw new te(`Invalid boolean value: "${t}" (type: ${typeof t}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:Mi(fp(t))}}function rm(t,{signed:e}){return{dynamic:!1,encoded:Fe(t,{size:32,signed:e})}}function om(t){const e=hd(t),n=Math.ceil(_t(e)/32),i=[];for(let o=0;o<n;o++)i.push(Mi(pc(e,o*32,(o+1)*32),{dir:"right"}));return{dynamic:!0,encoded:xr([Mi(Fe(_t(e),{size:32})),...i])}}function sm(t,{param:e}){let n=!1;const i=[];for(let o=0;o<e.components.length;o++){const r=e.components[o],s=Array.isArray(t)?o:r.name,a=wd({param:r,value:t[s]});i.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?bd(i):xr(i.map(({encoded:o})=>o))}}function vd(t){const e=t.match(/^(.*)\[(\d+)?\]$/);return e?[e[2]?Number(e[2]):null,e[1]]:void 0}function ei(t){return typeof t=="string"?{address:t,type:"json-rpc"}:t}class Ap extends te{constructor({docsPath:e}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class Cu extends te{constructor({blockNumber:e,chain:n,contract:i}){super(`Chain "${n.name}" does not support contract "${i.name}".`,{metaMessages:["This could be due to any of the following:",...e&&i.blockCreated&&i.blockCreated>e?[`- The contract "${i.name}" was not deployed until block ${i.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${i.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class am extends te{constructor({chain:e,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class cm extends te{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class $p extends te{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}function lm({chain:t,currentChainId:e}){if(!t)throw new cm;if(e!==t.id)throw new am({chain:t,currentChainId:e})}const um={gwei:9,wei:18},Sp={ether:-9,wei:9},dm={ether:-18,gwei:-9};function $a(t,e){let n=t.toString();const i=n.startsWith("-");i&&(n=n.slice(1)),n=n.padStart(e,"0");let[o,r]=[n.slice(0,n.length-e),n.slice(n.length-e)];return r=r.replace(/(0+)$/,""),`${i?"-":""}${o||"0"}${r?`.${r}`:""}`}function Wt(t,e="wei"){return $a(t,Sp[e])}class po extends te{constructor({cause:e,message:n}={}){var o;const i=(o=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:o.replace("execution reverted","");super(`Execution reverted ${i?`with reason: ${i}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(po,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(po,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class fc extends te{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Wt(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(fc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class _u extends te{constructor({cause:e,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${Wt(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(_u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class Eu extends te{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(Eu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class Tu extends te{constructor({cause:e,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(Tu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class ku extends te{constructor({cause:e,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(ku,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Au extends te{constructor({cause:e}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Au,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class $u extends te{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty($u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class Su extends te{constructor({cause:e,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(Su,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Iu extends te{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Iu,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class gc extends te{constructor({cause:e,maxPriorityFeePerGas:n,maxFeePerGas:i}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${Wt(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${i?` = ${Wt(i)} gwei`:""}).`].join(`
`),{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(gc,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class ol extends te{constructor({cause:e}){super(`An error occurred while executing: ${e==null?void 0:e.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}function yd(t,e="wei"){return $a(t,um[e])}function Sa(t){const e=Object.entries(t).map(([i,o])=>o===void 0||o===!1?null:[i,o]).filter(Boolean),n=e.reduce((i,[o])=>Math.max(i,o.length),0);return e.map(([i,o])=>`  ${`${i}:`.padEnd(n+1)}  ${o}`).join(`
`)}class hm extends te{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class pm extends te{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",Sa(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class fm extends te{constructor(e,{account:n,docsPath:i,chain:o,data:r,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:f}){var _;const b=Sa({chain:o&&`${o==null?void 0:o.name} (id: ${o==null?void 0:o.id})`,from:n==null?void 0:n.address,to:p,value:typeof f<"u"&&`${yd(f)} ${((_=o==null?void 0:o.nativeCurrency)==null?void 0:_.symbol)||"ETH"}`,data:r,gas:s,gasPrice:typeof a<"u"&&`${Wt(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Wt(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Wt(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class Ip extends te{constructor({blockHash:e,blockNumber:n,blockTag:i,hash:o,index:r}){let s="Transaction";i&&r!==void 0&&(s=`Transaction at block time "${i}" at index "${r}"`),e&&r!==void 0&&(s=`Transaction at block hash "${e}" at index "${r}"`),n&&r!==void 0&&(s=`Transaction at block number "${n}" at index "${r}"`),o&&(s=`Transaction with hash "${o}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class Rp extends te{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class gm extends te{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}const zn=(t,e,n)=>JSON.stringify(t,(i,o)=>{const r=typeof o=="bigint"?o.toString():o;return typeof e=="function"?e(i,r):r},n);class bs extends te{constructor({body:e,details:n,headers:i,status:o,url:r}){super("HTTP request failed.",{details:n,metaMessages:[o&&`Status: ${o}`,`URL: ${dd(r)}`,e&&`Request body: ${zn(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=i,this.status=o,this.url=r}}class Pp extends te{constructor({body:e,error:n,url:i}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${dd(i)}`,`Request body: ${zn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class N0 extends te{constructor({body:e,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${dd(n)}`,`Request body: ${zn(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const mm=-1;class Vt extends te{constructor(e,{code:n,docsPath:i,metaMessages:o,shortMessage:r}){super(r,{cause:e,docsPath:i,metaMessages:o||(e==null?void 0:e.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof Pp?e.code:n??mm}}class Jo extends Vt{constructor(e,n){super(e,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class Is extends Vt{constructor(e){super(e,{code:Is.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(Is,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Rs extends Vt{constructor(e){super(e,{code:Rs.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Rs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Ps extends Vt{constructor(e){super(e,{code:Ps.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Ps,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Os extends Vt{constructor(e){super(e,{code:Os.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Os,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Cr extends Vt{constructor(e){super(e,{code:Cr.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Cr,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class Ns extends Vt{constructor(e){super(e,{code:Ns.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(Ns,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class Bs extends Vt{constructor(e){super(e,{code:Bs.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(Bs,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class Di extends Vt{constructor(e){super(e,{code:Di.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(Di,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Ms extends Vt{constructor(e){super(e,{code:Ms.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Ms,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Ds extends Vt{constructor(e){super(e,{code:Ds.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Ds,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class yo extends Vt{constructor(e){super(e,{code:yo.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(yo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Ls extends Vt{constructor(e){super(e,{code:Ls.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Ls,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class ct extends Jo{constructor(e){super(e,{code:ct.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(ct,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class js extends Jo{constructor(e){super(e,{code:js.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(js,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Us extends Jo{constructor(e){super(e,{code:Us.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Us,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Ws extends Jo{constructor(e){super(e,{code:Ws.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(Ws,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class zs extends Jo{constructor(e){super(e,{code:zs.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(zs,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class _n extends Jo{constructor(e){super(e,{code:_n.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(_n,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class wm extends Vt{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}function xd(t,e){const n=(t.details||"").toLowerCase(),i=t instanceof te?t.walk(o=>o.code===po.code):t;return i instanceof te?new po({cause:t,message:i.details}):po.nodeMessage.test(n)?new po({cause:t,message:t.details}):fc.nodeMessage.test(n)?new fc({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):_u.nodeMessage.test(n)?new _u({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas}):Eu.nodeMessage.test(n)?new Eu({cause:t,nonce:e==null?void 0:e.nonce}):Tu.nodeMessage.test(n)?new Tu({cause:t,nonce:e==null?void 0:e.nonce}):ku.nodeMessage.test(n)?new ku({cause:t,nonce:e==null?void 0:e.nonce}):Au.nodeMessage.test(n)?new Au({cause:t}):$u.nodeMessage.test(n)?new $u({cause:t,gas:e==null?void 0:e.gas}):Su.nodeMessage.test(n)?new Su({cause:t,gas:e==null?void 0:e.gas}):Iu.nodeMessage.test(n)?new Iu({cause:t}):gc.nodeMessage.test(n)?new gc({cause:t,maxFeePerGas:e==null?void 0:e.maxFeePerGas,maxPriorityFeePerGas:e==null?void 0:e.maxPriorityFeePerGas}):new ol({cause:t})}function bm(t,{docsPath:e,...n}){const i=(()=>{const o=xd(t,n);return o instanceof ol?t:o})();return new fm(i,{docsPath:e,...n})}function Cd(t,{format:e}){if(!e)return{};const n={};function i(r){const s=Object.keys(r);for(const a of s)a in t&&(n[a]=t[a]),r[a]&&typeof r[a]=="object"&&!Array.isArray(r[a])&&i(r[a])}const o=e(t||{});return i(o),n}const vm={legacy:"0x0",eip2930:"0x1",eip1559:"0x2",eip4844:"0x3"};function _d(t){const e={};return typeof t.accessList<"u"&&(e.accessList=t.accessList),typeof t.blobVersionedHashes<"u"&&(e.blobVersionedHashes=t.blobVersionedHashes),typeof t.blobs<"u"&&(typeof t.blobs[0]!="string"?e.blobs=t.blobs.map(n=>kt(n)):e.blobs=t.blobs),typeof t.data<"u"&&(e.data=t.data),typeof t.from<"u"&&(e.from=t.from),typeof t.gas<"u"&&(e.gas=Fe(t.gas)),typeof t.gasPrice<"u"&&(e.gasPrice=Fe(t.gasPrice)),typeof t.maxFeePerBlobGas<"u"&&(e.maxFeePerBlobGas=Fe(t.maxFeePerBlobGas)),typeof t.maxFeePerGas<"u"&&(e.maxFeePerGas=Fe(t.maxFeePerGas)),typeof t.maxPriorityFeePerGas<"u"&&(e.maxPriorityFeePerGas=Fe(t.maxPriorityFeePerGas)),typeof t.nonce<"u"&&(e.nonce=Fe(t.nonce)),typeof t.to<"u"&&(e.to=t.to),typeof t.type<"u"&&(e.type=vm[t.type]),typeof t.value<"u"&&(e.value=Fe(t.value)),e}function qe(t,e,n){return i=>{var o,r;return((o=t[e.name])==null?void 0:o.call(t,i))??((r=t[n])==null?void 0:r.call(t,i))??e(t,i)}}function sl(t){const{account:e,gasPrice:n,maxFeePerGas:i,maxPriorityFeePerGas:o,to:r}=t,s=e?ei(e):void 0;if(s&&!Fi(s.address))throw new $s({address:s.address});if(r&&!Fi(r))throw new $s({address:r});if(typeof n<"u"&&(typeof i<"u"||typeof o<"u"))throw new hm;if(i&&i>2n**256n-1n)throw new fc({maxFeePerGas:i});if(o&&i&&o>i)throw new gc({maxFeePerGas:i,maxPriorityFeePerGas:o})}async function Op(t){const e=await t.request({method:"eth_chainId"});return bo(e)}class ym extends te{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class Ed extends te{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class xm extends te{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${Wt(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class Np extends te{constructor({blockHash:e,blockNumber:n}){let i="Block";e&&(i=`Block at hash "${e}"`),n&&(i=`Block at number "${n}"`),super(`${i} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}const Bp={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559","0x3":"eip4844"};function Mp(t){const e={...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,chainId:t.chainId?bo(t.chainId):void 0,gas:t.gas?BigInt(t.gas):void 0,gasPrice:t.gasPrice?BigInt(t.gasPrice):void 0,maxFeePerBlobGas:t.maxFeePerBlobGas?BigInt(t.maxFeePerBlobGas):void 0,maxFeePerGas:t.maxFeePerGas?BigInt(t.maxFeePerGas):void 0,maxPriorityFeePerGas:t.maxPriorityFeePerGas?BigInt(t.maxPriorityFeePerGas):void 0,nonce:t.nonce?bo(t.nonce):void 0,to:t.to?t.to:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,type:t.type?Bp[t.type]:void 0,typeHex:t.type?t.type:void 0,value:t.value?BigInt(t.value):void 0,v:t.v?BigInt(t.v):void 0};return e.yParity=(()=>{if(t.yParity)return Number(t.yParity);if(typeof e.v=="bigint"){if(e.v===0n||e.v===27n)return 0;if(e.v===1n||e.v===28n)return 1;if(e.v>=35n)return e.v%2n===0n?1:0}})(),e.type==="legacy"&&(delete e.accessList,delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas,delete e.yParity),e.type==="eip2930"&&(delete e.maxFeePerBlobGas,delete e.maxFeePerGas,delete e.maxPriorityFeePerGas),e.type==="eip1559"&&delete e.maxFeePerBlobGas,e}function Cm(t){var n;const e=(n=t.transactions)==null?void 0:n.map(i=>typeof i=="string"?i:Mp(i));return{...t,baseFeePerGas:t.baseFeePerGas?BigInt(t.baseFeePerGas):null,blobGasUsed:t.blobGasUsed?BigInt(t.blobGasUsed):void 0,difficulty:t.difficulty?BigInt(t.difficulty):void 0,excessBlobGas:t.excessBlobGas?BigInt(t.excessBlobGas):void 0,gasLimit:t.gasLimit?BigInt(t.gasLimit):void 0,gasUsed:t.gasUsed?BigInt(t.gasUsed):void 0,hash:t.hash?t.hash:null,logsBloom:t.logsBloom?t.logsBloom:null,nonce:t.nonce?t.nonce:null,number:t.number?BigInt(t.number):null,size:t.size?BigInt(t.size):void 0,timestamp:t.timestamp?BigInt(t.timestamp):void 0,transactions:e,totalDifficulty:t.totalDifficulty?BigInt(t.totalDifficulty):null}}async function Fs(t,{blockHash:e,blockNumber:n,blockTag:i,includeTransactions:o}={}){var d,p,f;const r=i??"latest",s=o??!1,a=n!==void 0?Fe(n):void 0;let c=null;if(e?c=await t.request({method:"eth_getBlockByHash",params:[e,s]}):c=await t.request({method:"eth_getBlockByNumber",params:[a||r,s]}),!c)throw new Np({blockHash:e,blockNumber:n});return(((f=(p=(d=t.chain)==null?void 0:d.formatters)==null?void 0:p.block)==null?void 0:f.format)||Cm)(c)}async function Dp(t){const e=await t.request({method:"eth_gasPrice"});return BigInt(e)}async function _m(t,e){var r,s,a;const{block:n,chain:i=t.chain,request:o}=e||{};if(typeof((r=i==null?void 0:i.fees)==null?void 0:r.defaultPriorityFee)=="function"){const c=n||await qe(t,Fs,"getBlock")({});return i.fees.defaultPriorityFee({block:c,client:t,request:o})}if(typeof((s=i==null?void 0:i.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=i==null?void 0:i.fees)==null?void 0:a.defaultPriorityFee;try{const c=await t.request({method:"eth_maxPriorityFeePerGas"});return il(c)}catch{const[c,l]=await Promise.all([n?Promise.resolve(n):qe(t,Fs,"getBlock")({}),qe(t,Dp,"getGasPrice")({})]);if(typeof c.baseFeePerGas!="bigint")throw new Ed;const d=l-c.baseFeePerGas;return d<0n?0n:d}}async function B0(t,e){var f,b;const{block:n,chain:i=t.chain,request:o,type:r="eip1559"}=e||{},s=await(async()=>{var _,$;return typeof((_=i==null?void 0:i.fees)==null?void 0:_.baseFeeMultiplier)=="function"?i.fees.baseFeeMultiplier({block:n,client:t,request:o}):(($=i==null?void 0:i.fees)==null?void 0:$.baseFeeMultiplier)??1.2})();if(s<1)throw new ym;const c=10**(((f=s.toString().split(".")[1])==null?void 0:f.length)??0),l=_=>_*BigInt(Math.ceil(s*c))/BigInt(c),d=n||await qe(t,Fs,"getBlock")({});if(typeof((b=i==null?void 0:i.fees)==null?void 0:b.estimateFeesPerGas)=="function"){const _=await i.fees.estimateFeesPerGas({block:n,client:t,multiply:l,request:o,type:r});if(_!==null)return _}if(r==="eip1559"){if(typeof d.baseFeePerGas!="bigint")throw new Ed;const _=typeof(o==null?void 0:o.maxPriorityFeePerGas)=="bigint"?o.maxPriorityFeePerGas:await _m(t,{block:d,chain:i,request:o}),$=l(d.baseFeePerGas);return{maxFeePerGas:(o==null?void 0:o.maxFeePerGas)??$+_,maxPriorityFeePerGas:_}}return{gasPrice:(o==null?void 0:o.gasPrice)??l(await qe(t,Dp,"getGasPrice")({}))}}class Em extends te{constructor(e,{account:n,docsPath:i,chain:o,data:r,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:f}){var _;const b=Sa({from:n==null?void 0:n.address,to:p,value:typeof f<"u"&&`${yd(f)} ${((_=o==null?void 0:o.nativeCurrency)==null?void 0:_.symbol)||"ETH"}`,data:r,gas:s,gasPrice:typeof a<"u"&&`${Wt(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Wt(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Wt(l)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",b].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}function Tm(t,{docsPath:e,...n}){const i=(()=>{const o=xd(t,n);return o instanceof ol?t:o})();return new Em(i,{docsPath:e,...n})}async function Td(t,e){var o,r,s;const n=e.account??t.account,i=n?ei(n):void 0;try{const{accessList:a,blobs:c,blobVersionedHashes:l,blockNumber:d,blockTag:p,data:f,gas:b,gasPrice:_,maxFeePerBlobGas:$,maxFeePerGas:I,maxPriorityFeePerGas:L,nonce:T,to:U,value:M,...W}=await Ad(t,{...e,parameters:(i==null?void 0:i.type)==="local"?void 0:["blobVersionedHashes"]}),Q=(d?Fe(d):void 0)||p;sl(e);const g=(s=(r=(o=t.chain)==null?void 0:o.formatters)==null?void 0:r.transactionRequest)==null?void 0:s.format,v=(g||_d)({...Cd(W,{format:g}),from:i==null?void 0:i.address,accessList:a,blobs:c,blobVersionedHashes:l,data:f,gas:b,gasPrice:_,maxFeePerBlobGas:$,maxFeePerGas:I,maxPriorityFeePerGas:L,nonce:T,to:U,value:M}),S=await t.request({method:"eth_estimateGas",params:Q?[v,Q]:[v]});return BigInt(S)}catch(a){throw Tm(a,{...e,account:i,chain:t.chain})}}async function km(t,{address:e,blockTag:n="latest",blockNumber:i}){const o=await t.request({method:"eth_getTransactionCount",params:[e,i?Fe(i):n]});return bo(o)}function Lp(t){const{kzg:e}=t,n=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(r=>zi(r)):t.blobs,o=[];for(const r of i)o.push(Uint8Array.from(e.blobToKzgCommitment(r)));return n==="bytes"?o:o.map(r=>kt(r))}function jp(t){const{kzg:e}=t,n=t.to??(typeof t.blobs[0]=="string"?"hex":"bytes"),i=typeof t.blobs[0]=="string"?t.blobs.map(s=>zi(s)):t.blobs,o=typeof t.commitments[0]=="string"?t.commitments.map(s=>zi(s)):t.commitments,r=[];for(let s=0;s<i.length;s++){const a=i[s],c=o[s];r.push(Uint8Array.from(e.computeBlobKzgProof(a,c)))}return n==="bytes"?r:r.map(s=>kt(s))}function Am(t,e,n,i){if(typeof t.setBigUint64=="function")return t.setBigUint64(e,n,i);const o=BigInt(32),r=BigInt(4294967295),s=Number(n>>o&r),a=Number(n&r),c=i?4:0,l=i?0:4;t.setUint32(e+c,s,i),t.setUint32(e+l,a,i)}class $m extends vp{constructor(e,n,i,o){super(),this.blockLen=e,this.outputLen=n,this.padOffset=i,this.isLE=o,this.finished=!1,this.length=0,this.pos=0,this.destroyed=!1,this.buffer=new Uint8Array(e),this.view=Wl(this.buffer)}update(e){hc(this);const{view:n,buffer:i,blockLen:o}=this;e=fd(e);const r=e.length;for(let s=0;s<r;){const a=Math.min(o-this.pos,r-s);if(a===o){const c=Wl(e);for(;o<=r-s;s+=o)this.process(c,s);continue}i.set(e.subarray(s,s+a),this.pos),this.pos+=a,s+=a,this.pos===o&&(this.process(n,0),this.pos=0)}return this.length+=e.length,this.roundClean(),this}digestInto(e){hc(this),bp(e,this),this.finished=!0;const{buffer:n,view:i,blockLen:o,isLE:r}=this;let{pos:s}=this;n[s++]=128,this.buffer.subarray(s).fill(0),this.padOffset>o-s&&(this.process(i,0),s=0);for(let p=s;p<o;p++)n[p]=0;Am(i,o-8,BigInt(this.length*8),r),this.process(i,0);const a=Wl(e),c=this.outputLen;if(c%4)throw new Error("_sha2: outputLen should be aligned to 32bit");const l=c/4,d=this.get();if(l>d.length)throw new Error("_sha2: outputLen bigger than state");for(let p=0;p<l;p++)a.setUint32(4*p,d[p],r)}digest(){const{buffer:e,outputLen:n}=this;this.digestInto(e);const i=e.slice(0,n);return this.destroy(),i}_cloneInto(e){e||(e=new this.constructor),e.set(...this.get());const{blockLen:n,buffer:i,length:o,finished:r,destroyed:s,pos:a}=this;return e.length=o,e.pos=a,e.finished=r,e.destroyed=s,o%n&&e.buffer.set(i),e}}const Sm=(t,e,n)=>t&e^~t&n,Im=(t,e,n)=>t&e^t&n^e&n,Rm=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Ti=new Uint32Array([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]),ki=new Uint32Array(64);class Pm extends $m{constructor(){super(64,32,8,!1),this.A=Ti[0]|0,this.B=Ti[1]|0,this.C=Ti[2]|0,this.D=Ti[3]|0,this.E=Ti[4]|0,this.F=Ti[5]|0,this.G=Ti[6]|0,this.H=Ti[7]|0}get(){const{A:e,B:n,C:i,D:o,E:r,F:s,G:a,H:c}=this;return[e,n,i,o,r,s,a,c]}set(e,n,i,o,r,s,a,c){this.A=e|0,this.B=n|0,this.C=i|0,this.D=o|0,this.E=r|0,this.F=s|0,this.G=a|0,this.H=c|0}process(e,n){for(let p=0;p<16;p++,n+=4)ki[p]=e.getUint32(n,!1);for(let p=16;p<64;p++){const f=ki[p-15],b=ki[p-2],_=Ln(f,7)^Ln(f,18)^f>>>3,$=Ln(b,17)^Ln(b,19)^b>>>10;ki[p]=$+ki[p-7]+_+ki[p-16]|0}let{A:i,B:o,C:r,D:s,E:a,F:c,G:l,H:d}=this;for(let p=0;p<64;p++){const f=Ln(a,6)^Ln(a,11)^Ln(a,25),b=d+f+Sm(a,c,l)+Rm[p]+ki[p]|0,$=(Ln(i,2)^Ln(i,13)^Ln(i,22))+Im(i,o,r)|0;d=l,l=c,c=a,a=s+b|0,s=r,r=o,o=i,i=b+$|0}i=i+this.A|0,o=o+this.B|0,r=r+this.C|0,s=s+this.D|0,a=a+this.E|0,c=c+this.F|0,l=l+this.G|0,d=d+this.H|0,this.set(i,o,r,s,a,c,l,d)}roundClean(){ki.fill(0)}destroy(){this.set(0,0,0,0,0,0,0,0),this.buffer.fill(0)}}const Om=yp(()=>new Pm);function Nm(t,e){const n=e||"hex",i=Om(Jr(t,{strict:!1})?nl(t):t);return n==="bytes"?i:Aa(i)}function Bm(t){const{commitment:e,version:n=1}=t,i=t.to??(typeof e=="string"?"hex":"bytes"),o=Nm(e,"bytes");return o.set([n],0),i==="bytes"?o:kt(o)}function Mm(t){const{commitments:e,version:n}=t,i=t.to??(typeof e[0]=="string"?"hex":"bytes"),o=[];for(const r of e)o.push(Bm({commitment:r,to:i,version:n}));return o}const M0=6,Up=32,kd=4096,Wp=Up*kd,D0=Wp*M0-1-1*kd*M0;class Dm extends te{constructor({maxSize:e,size:n}){super("Blob size is too large.",{metaMessages:[`Max: ${e} bytes`,`Given: ${n} bytes`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlobSizeTooLargeError"})}}class Lm extends te{constructor(){super("Blob data must not be empty."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EmptyBlobError"})}}class L0 extends te{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class jm extends te{constructor({length:e,position:n}){super(`Position \`${n}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}class Um extends te{constructor({count:e,limit:n}){super(`Recursive read limit of \`${n}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RecursiveReadLimitExceededError"})}}const Wm={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new Um({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(t){if(t<0||t>this.bytes.length-1)throw new jm({length:this.bytes.length,position:t})},decrementPosition(t){if(t<0)throw new L0({offset:t});const e=this.position-t;this.assertPosition(e),this.position=e},getReadCount(t){return this.positionReadCount.get(t||this.position)||0},incrementPosition(t){if(t<0)throw new L0({offset:t});const e=this.position+t;this.assertPosition(e),this.position=e},inspectByte(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectBytes(t,e){const n=e??this.position;return this.assertPosition(n+t-1),this.bytes.subarray(n,n+t)},inspectUint8(t){const e=t??this.position;return this.assertPosition(e),this.bytes[e]},inspectUint16(t){const e=t??this.position;return this.assertPosition(e+1),this.dataView.getUint16(e)},inspectUint24(t){const e=t??this.position;return this.assertPosition(e+2),(this.dataView.getUint16(e)<<8)+this.dataView.getUint8(e+2)},inspectUint32(t){const e=t??this.position;return this.assertPosition(e+3),this.dataView.getUint32(e)},pushByte(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushBytes(t){this.assertPosition(this.position+t.length-1),this.bytes.set(t,this.position),this.position+=t.length},pushUint8(t){this.assertPosition(this.position),this.bytes[this.position]=t,this.position++},pushUint16(t){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,t),this.position+=2},pushUint24(t){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,t>>8),this.dataView.setUint8(this.position+2,t&255),this.position+=3},pushUint32(t){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,t),this.position+=4},readByte(){this.assertReadLimit(),this._touch();const t=this.inspectByte();return this.position++,t},readBytes(t,e){this.assertReadLimit(),this._touch();const n=this.inspectBytes(t);return this.position+=e??t,n},readUint8(){this.assertReadLimit(),this._touch();const t=this.inspectUint8();return this.position+=1,t},readUint16(){this.assertReadLimit(),this._touch();const t=this.inspectUint16();return this.position+=2,t},readUint24(){this.assertReadLimit(),this._touch();const t=this.inspectUint24();return this.position+=3,t},readUint32(){this.assertReadLimit(),this._touch();const t=this.inspectUint32();return this.position+=4,t},get remaining(){return this.bytes.length-this.position},setPosition(t){const e=this.position;return this.assertPosition(t),this.position=t,()=>this.position=e},_touch(){if(this.recursiveReadLimit===1/0)return;const t=this.getReadCount();this.positionReadCount.set(this.position,t+1),t>0&&this.recursiveReadCount++}};function zp(t,{recursiveReadLimit:e=8192}={}){const n=Object.create(Wm);return n.bytes=t,n.dataView=new DataView(t.buffer,t.byteOffset,t.byteLength),n.positionReadCount=new Map,n.recursiveReadLimit=e,n}function zm(t){const e=t.to??(typeof t.data=="string"?"hex":"bytes"),n=typeof t.data=="string"?zi(t.data):t.data,i=_t(n);if(!i)throw new Lm;if(i>D0)throw new Dm({maxSize:D0,size:i});const o=[];let r=!0,s=0;for(;r;){const a=zp(new Uint8Array(Wp));let c=0;for(;c<kd;){const l=n.slice(s,s+(Up-1));if(a.pushByte(0),a.pushBytes(l),l.length<31){a.pushByte(128),r=!1;break}c++,s+=31}o.push(a)}return e==="bytes"?o.map(a=>a.bytes):o.map(a=>kt(a.bytes))}function Fm(t){const{data:e,kzg:n,to:i}=t,o=t.blobs??zm({data:e,to:i}),r=t.commitments??Lp({blobs:o,kzg:n,to:i}),s=t.proofs??jp({blobs:o,commitments:r,kzg:n,to:i}),a=[];for(let c=0;c<o.length;c++)a.push({blob:o[c],commitment:r[c],proof:s[c]});return a}function Hm(t){if(t.type)return t.type;if(typeof t.blobs<"u"||typeof t.blobVersionedHashes<"u"||typeof t.maxFeePerBlobGas<"u"||typeof t.sidecars<"u")return"eip4844";if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")return"eip1559";if(typeof t.gasPrice<"u")return typeof t.accessList<"u"?"eip2930":"legacy";throw new pm({transaction:t})}const Fp=["blobVersionedHashes","chainId","fees","gas","nonce","type"];async function Ad(t,e){const{account:n=t.account,blobs:i,chain:o,chainId:r,gas:s,kzg:a,nonce:c,parameters:l=Fp,type:d}=e,p=n?ei(n):void 0,f={...e,...p?{from:p==null?void 0:p.address}:{}};let b;async function _(){return b||(b=await qe(t,Fs,"getBlock")({blockTag:"latest"}),b)}if((l.includes("blobVersionedHashes")||l.includes("sidecars"))&&i&&a){const $=Lp({blobs:i,kzg:a});if(l.includes("blobVersionedHashes")){const I=Mm({commitments:$,to:"hex"});f.blobVersionedHashes=I}if(l.includes("sidecars")){const I=jp({blobs:i,commitments:$,kzg:a}),L=Fm({blobs:i,commitments:$,proofs:I,to:"hex"});f.sidecars=L}}if(l.includes("chainId")&&(o?f.chainId=o.id:typeof r<"u"?f.chainId=r:f.chainId=await qe(t,Op,"getChainId")({})),l.includes("nonce")&&typeof c>"u"&&p&&(f.nonce=await qe(t,km,"getTransactionCount")({address:p.address,blockTag:"pending"})),(l.includes("fees")||l.includes("type"))&&typeof d>"u")try{f.type=Hm(f)}catch{const $=await _();f.type=typeof($==null?void 0:$.baseFeePerGas)=="bigint"?"eip1559":"legacy"}if(l.includes("fees"))if(f.type!=="legacy"&&f.type!=="eip2930"){if(typeof f.maxFeePerGas>"u"||typeof f.maxPriorityFeePerGas>"u"){const $=await _(),{maxFeePerGas:I,maxPriorityFeePerGas:L}=await B0(t,{block:$,chain:o,request:f});if(typeof e.maxPriorityFeePerGas>"u"&&e.maxFeePerGas&&e.maxFeePerGas<L)throw new xm({maxPriorityFeePerGas:L});f.maxPriorityFeePerGas=L,f.maxFeePerGas=I}}else{if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")throw new Ed;const $=await _(),{gasPrice:I}=await B0(t,{block:$,chain:o,request:f,type:"legacy"});f.gasPrice=I}return l.includes("gas")&&typeof s>"u"&&(f.gas=await qe(t,Td,"estimateGas")({...f,account:p?{address:p.address,type:"json-rpc"}:void 0})),sl(f),delete f.parameters,f}async function Vm(t,{serializedTransaction:e}){return t.request({method:"eth_sendRawTransaction",params:[e]},{retryCount:0})}async function Hp(t,e){var L,T,U,M;const{account:n=t.account,chain:i=t.chain,accessList:o,blobs:r,data:s,gas:a,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:f,to:b,value:_,...$}=e;if(!n)throw new Ap({docsPath:"/docs/actions/wallet/sendTransaction"});const I=ei(n);try{sl(e);let W;if(i!==null&&(W=await qe(t,Op,"getChainId")({}),lm({currentChainId:W,chain:i})),I.type==="local"){const w=await qe(t,Ad,"prepareTransactionRequest")({account:I,accessList:o,blobs:r,chain:i,chainId:W,data:s,gas:a,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:f,parameters:[...Fp,"sidecars"],to:b,value:_,...$}),v=(L=i==null?void 0:i.serializers)==null?void 0:L.transaction,S=await I.signTransaction(w,{serializer:v});return await qe(t,Vm,"sendRawTransaction")({serializedTransaction:S})}const Z=(M=(U=(T=t.chain)==null?void 0:T.formatters)==null?void 0:U.transactionRequest)==null?void 0:M.format,g=(Z||_d)({...Cd($,{format:Z}),accessList:o,blobs:r,data:s,from:I.address,gas:a,gasPrice:c,maxFeePerBlobGas:l,maxFeePerGas:d,maxPriorityFeePerGas:p,nonce:f,to:b,value:_});return await t.request({method:"eth_sendTransaction",params:[g]},{retryCount:0})}catch(W){throw bm(W,{...e,account:I,chain:e.chain||void 0})}}const Ru=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],Vp=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"},{inputs:[],name:"ResolverNotContract",type:"error"},{inputs:[{name:"returnData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{components:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"errors",type:"tuple[]"}],name:"HttpError",type:"error"}],Zm=[...Vp,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]},{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],Gm=[...Vp,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]},{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],j0=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}];function qm(t,e={}){typeof e.size<"u"&&Rn(t,{size:e.size});const n=kt(t,e);return il(n,e)}function Ym(t,e={}){let n=t;if(typeof e.size<"u"&&(Rn(n,{size:e.size}),n=ka(n)),n.length>1||n[0]>1)throw new lg(n);return!!n[0]}function di(t,e={}){typeof e.size<"u"&&Rn(t,{size:e.size});const n=kt(t,e);return bo(n,e)}function Km(t,e={}){let n=t;return typeof e.size<"u"&&(Rn(n,{size:e.size}),n=ka(n,{dir:"right"})),new TextDecoder().decode(n)}function Zp(t,e){const n=typeof e=="string"?zi(e):e,i=zp(n);if(_t(n)===0&&t.length>0)throw new rl;if(_t(e)&&_t(e)<32)throw new bg({data:typeof e=="string"?e:kt(e),params:t,size:_t(e)});let o=0;const r=[];for(let s=0;s<t.length;++s){const a=t[s];i.setPosition(o);const[c,l]=fo(i,a,{staticPosition:0});o+=l,r.push(c)}return r}function fo(t,e,{staticPosition:n}){const i=vd(e.type);if(i){const[o,r]=i;return Xm(t,{...e,type:r},{length:o,staticPosition:n})}if(e.type==="tuple")return nw(t,e,{staticPosition:n});if(e.type==="address")return Jm(t);if(e.type==="bool")return Qm(t);if(e.type.startsWith("bytes"))return ew(t,e,{staticPosition:n});if(e.type.startsWith("uint")||e.type.startsWith("int"))return tw(t,e);if(e.type==="string")return iw(t,{staticPosition:n});throw new Tg(e.type,{docsPath:"/docs/contract/decodeAbiParameters"})}const U0=32,Pu=32;function Jm(t){const e=t.readBytes(32);return[md(kt(kp(e,-20))),32]}function Xm(t,e,{length:n,staticPosition:i}){if(!n){const s=di(t.readBytes(Pu)),a=i+s,c=a+U0;t.setPosition(a);const l=di(t.readBytes(U0)),d=Hs(e);let p=0;const f=[];for(let b=0;b<l;++b){t.setPosition(c+(d?b*32:p));const[_,$]=fo(t,e,{staticPosition:c});p+=$,f.push(_)}return t.setPosition(i+32),[f,32]}if(Hs(e)){const s=di(t.readBytes(Pu)),a=i+s,c=[];for(let l=0;l<n;++l){t.setPosition(a+l*32);const[d]=fo(t,e,{staticPosition:a});c.push(d)}return t.setPosition(i+32),[c,32]}let o=0;const r=[];for(let s=0;s<n;++s){const[a,c]=fo(t,e,{staticPosition:i+o});o+=c,r.push(a)}return[r,o]}function Qm(t){return[Ym(t.readBytes(32),{size:32}),32]}function ew(t,e,{staticPosition:n}){const[i,o]=e.type.split("bytes");if(!o){const s=di(t.readBytes(32));t.setPosition(n+s);const a=di(t.readBytes(32));if(a===0)return t.setPosition(n+32),["0x",32];const c=t.readBytes(a);return t.setPosition(n+32),[kt(c),32]}return[kt(t.readBytes(parseInt(o),32)),32]}function tw(t,e){const n=e.type.startsWith("int"),i=parseInt(e.type.split("int")[1]||"256"),o=t.readBytes(32);return[i>48?qm(o,{signed:n}):di(o,{signed:n}),32]}function nw(t,e,{staticPosition:n}){const i=e.components.length===0||e.components.some(({name:s})=>!s),o=i?[]:{};let r=0;if(Hs(e)){const s=di(t.readBytes(Pu)),a=n+s;for(let c=0;c<e.components.length;++c){const l=e.components[c];t.setPosition(a+r);const[d,p]=fo(t,l,{staticPosition:a});r+=p,o[i?c:l==null?void 0:l.name]=d}return t.setPosition(n+32),[o,32]}for(let s=0;s<e.components.length;++s){const a=e.components[s],[c,l]=fo(t,a,{staticPosition:n});o[i?s:a==null?void 0:a.name]=c,r+=l}return[o,r]}function iw(t,{staticPosition:e}){const n=di(t.readBytes(32)),i=e+n;t.setPosition(i);const o=di(t.readBytes(32));if(o===0)return t.setPosition(e+32),["",32];const r=t.readBytes(o,32),s=Km(ka(r));return t.setPosition(e+32),[s,32]}function Hs(t){var i;const{type:e}=t;if(e==="string"||e==="bytes"||e.endsWith("[]"))return!0;if(e==="tuple")return(i=t.components)==null?void 0:i.some(Hs);const n=vd(t.type);return!!(n&&Hs({...t,type:n[1]}))}function rw(t,e){const n=t.exec(e);return n==null?void 0:n.groups}const W0=/^tuple(?<array>(\[(\d*)\])*)$/;function Ou(t){let e=t.type;if(W0.test(t.type)&&"components"in t){e="(";const n=t.components.length;for(let o=0;o<n;o++){const r=t.components[o];e+=Ou(r),o<n-1&&(e+=", ")}const i=rw(W0,t.type);return e+=`)${(i==null?void 0:i.array)??""}`,Ou({...t,type:e})}return"indexed"in t&&t.indexed&&(e=`${e} indexed`),t.name?`${e} ${t.name}`:e}function ls(t){let e="";const n=t.length;for(let i=0;i<n;i++){const o=t[i];e+=Ou(o),i!==n-1&&(e+=", ")}return e}function ow(t){return t.type==="function"?`function ${t.name}(${ls(t.inputs)})${t.stateMutability&&t.stateMutability!=="nonpayable"?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${ls(t.outputs)})`:""}`:t.type==="event"?`event ${t.name}(${ls(t.inputs)})`:t.type==="error"?`error ${t.name}(${ls(t.inputs)})`:t.type==="constructor"?`constructor(${ls(t.inputs)})${t.stateMutability==="payable"?" payable":""}`:t.type==="fallback"?"fallback()":"receive() external payable"}const sw=t=>Ss(nl(t));function aw(t){return sw(t)}function cw(t){let e=!0,n="",i=0,o="",r=!1;for(let s=0;s<t.length;s++){const a=t[s];if(["(",")",","].includes(a)&&(e=!0),a==="("&&i++,a===")"&&i--,!!e){if(i===0){if(a===" "&&["event","function",""].includes(o))o="";else if(o+=a,a===")"){r=!0;break}continue}if(a===" "){t[s-1]!==","&&n!==","&&n!==",("&&(n="",e=!1);continue}o+=a,n+=a}}if(!r)throw new te("Unable to normalize signature.");return o}const lw=t=>{const e=typeof t=="string"?t:ow(t);return cw(e)};function Gp(t){return aw(lw(t))}const uw=Gp,$d=t=>pc(Gp(t),0,4);function Sd(t){const{abi:e,args:n=[],name:i}=t,o=Jr(i,{strict:!1}),r=e.filter(a=>o?a.type==="function"?$d(a)===i:a.type==="event"?uw(a)===i:!1:"name"in a&&a.name===i);if(r.length===0)return;if(r.length===1)return r[0];let s;for(const a of r){if(!("inputs"in a))continue;if(!n||n.length===0){if(!a.inputs||a.inputs.length===0)return a;continue}if(!a.inputs||a.inputs.length===0||a.inputs.length!==n.length)continue;if(n.every((l,d)=>{const p="inputs"in a&&a.inputs[d];return p?Nu(l,p):!1})){if(s&&"inputs"in s&&s.inputs){const l=qp(a.inputs,s.inputs,n);if(l)throw new _g({abiItem:a,type:l[0]},{abiItem:s,type:l[1]})}s=a}}return s||r[0]}function Nu(t,e){const n=typeof t,i=e.type;switch(i){case"address":return Fi(t,{strict:!1});case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return i==="tuple"&&"components"in e?Object.values(e.components).every((o,r)=>Nu(Object.values(t)[r],o)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)?n==="string"||t instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)?Array.isArray(t)&&t.every(o=>Nu(o,{...e,type:i.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function qp(t,e,n){for(const i in t){const o=t[i],r=e[i];if(o.type==="tuple"&&r.type==="tuple"&&"components"in o&&"components"in r)return qp(o.components,r.components,n[i]);const s=[o.type,r.type];if(s.includes("address")&&s.includes("bytes20")?!0:s.includes("address")&&s.includes("string")?Fi(n[i],{strict:!1}):s.includes("address")&&s.includes("bytes")?Fi(n[i],{strict:!1}):!1)return s}}const Fl="/docs/contract/decodeFunctionResult";function Ia(t){const{abi:e,args:n,functionName:i,data:o}=t;let r=e[0];if(i){const a=Sd({abi:e,args:n,name:i});if(!a)throw new dc(i,{docsPath:Fl});r=a}if(r.type!=="function")throw new dc(void 0,{docsPath:Fl});if(!r.outputs)throw new Cg(r.name,{docsPath:Fl});const s=Zp(r.outputs,o);if(s&&s.length>1)return s;if(s&&s.length===1)return s[0]}const z0="/docs/contract/encodeFunctionData";function dw(t){const{abi:e,args:n,functionName:i}=t;let o=e[0];if(i){const r=Sd({abi:e,args:n,name:i});if(!r)throw new dc(i,{docsPath:z0});o=r}if(o.type!=="function")throw new dc(void 0,{docsPath:z0});return{abi:[o],functionName:$d(vo(o))}}function Xo(t){const{args:e}=t,{abi:n,functionName:i}=(()=>{var a;return t.abi.length===1&&((a=t.functionName)!=null&&a.startsWith("0x"))?t:dw(t)})(),o=n[0],r=i,s="inputs"in o&&o.inputs?Xg(o.inputs,e??[]):void 0;return mp([r,s??"0x"])}function al({blockNumber:t,chain:e,contract:n}){var o;const i=(o=e==null?void 0:e.contracts)==null?void 0:o[n];if(!i)throw new Cu({chain:e,contract:{name:n}});if(t&&i.blockCreated&&i.blockCreated>t)throw new Cu({blockNumber:t,chain:e,contract:{name:n,blockCreated:i.blockCreated}});return i.address}const Yp={1:"An `assert` condition failed.",17:"Arithmetic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},hw={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},pw={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function fw(t){const{abi:e,data:n}=t,i=pc(n,0,4);if(i==="0x")throw new rl;const r=[...e||[],hw,pw].find(s=>s.type==="error"&&i===$d(vo(s)));if(!r)throw new gp(i,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:r,args:"inputs"in r&&r.inputs&&r.inputs.length>0?Zp(r.inputs,pc(n,4)):void 0,errorName:r.name}}function Kp({abiItem:t,args:e,includeFunctionName:n=!0,includeName:i=!1}){if("name"in t&&"inputs"in t&&t.inputs)return`${n?t.name:""}(${t.inputs.map((o,r)=>`${i&&o.name?`${o.name}: `:""}${typeof e[r]=="object"?zn(e[r]):e[r]}`).join(", ")})`}class gw extends te{constructor({address:e}){super(`State for account "${e}" is set multiple times.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountStateConflictError"})}}class mw extends te{constructor(){super("state and stateDiff are set on the same account."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"StateAssignmentConflictError"})}}function F0(t){return t.reduce((e,{slot:n,value:i})=>`${e}        ${n}: ${i}
`,"")}function ww(t){return t.reduce((e,{address:n,...i})=>{let o=`${e}    ${n}:
`;return i.nonce&&(o+=`      nonce: ${i.nonce}
`),i.balance&&(o+=`      balance: ${i.balance}
`),i.code&&(o+=`      code: ${i.code}
`),i.state&&(o+=`      state:
`,o+=F0(i.state)),i.stateDiff&&(o+=`      stateDiff:
`,o+=F0(i.stateDiff)),o},`  State Override:
`).slice(0,-1)}class bw extends te{constructor(e,{account:n,docsPath:i,chain:o,data:r,gas:s,gasPrice:a,maxFeePerGas:c,maxPriorityFeePerGas:l,nonce:d,to:p,value:f,stateOverride:b}){var I;const _=n?ei(n):void 0;let $=Sa({from:_==null?void 0:_.address,to:p,value:typeof f<"u"&&`${yd(f)} ${((I=o==null?void 0:o.nativeCurrency)==null?void 0:I.symbol)||"ETH"}`,data:r,gas:s,gasPrice:typeof a<"u"&&`${Wt(a)} gwei`,maxFeePerGas:typeof c<"u"&&`${Wt(c)} gwei`,maxPriorityFeePerGas:typeof l<"u"&&`${Wt(l)} gwei`,nonce:d});b&&($+=`
${ww(b)}`),super(e.shortMessage,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",$].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class Id extends te{constructor(e,{abi:n,args:i,contractAddress:o,docsPath:r,functionName:s,sender:a}){const c=Sd({abi:n,args:i,name:s}),l=c?Kp({abiItem:c,args:i,includeFunctionName:!1,includeName:!1}):void 0,d=c?vo(c,{includeName:!0}):void 0,p=Sa({address:o&&sg(o),function:d,args:l&&l!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${l}`,sender:a});super(e.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=i,this.cause=e,this.contractAddress=o,this.functionName=s,this.sender=a}}class Bu extends te{constructor({abi:e,data:n,functionName:i,message:o}){let r,s,a,c;if(n&&n!=="0x")try{s=fw({abi:e,data:n});const{abiItem:d,errorName:p,args:f}=s;if(p==="Error")c=f[0];else if(p==="Panic"){const[b]=f;c=Yp[b]}else{const b=d?vo(d,{includeName:!0}):void 0,_=d&&f?Kp({abiItem:d,args:f,includeFunctionName:!1,includeName:!1}):void 0;a=[b?`Error: ${b}`:"",_&&_!=="()"?`       ${[...Array((p==null?void 0:p.length)??0).keys()].map(()=>" ").join("")}${_}`:""]}}catch(d){r=d}else o&&(c=o);let l;r instanceof gp&&(l=r.signature,a=[`Unable to decode signature "${l}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${l}.`]),super(c&&c!=="execution reverted"||l?[`The contract function "${i}" reverted with the following ${l?"signature":"reason"}:`,c||l].join(`
`):`The contract function "${i}" reverted.`,{cause:r,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=c,this.signature=l}}class vw extends te{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Rd extends te{constructor({data:e,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}function Jp(t,e){var i,o,r,s,a,c;if(!(t instanceof te))return!1;const n=t.walk(l=>l instanceof Bu);return n instanceof Bu?!!(((i=n.data)==null?void 0:i.errorName)==="ResolverNotFound"||((o=n.data)==null?void 0:o.errorName)==="ResolverWildcardNotSupported"||((r=n.data)==null?void 0:r.errorName)==="ResolverNotContract"||((s=n.data)==null?void 0:s.errorName)==="ResolverError"||((a=n.data)==null?void 0:a.errorName)==="HttpError"||(c=n.reason)!=null&&c.includes("Wildcard on non-extended resolvers is not supported")||e==="reverse"&&n.reason===Yp[50]):!1}function Xp(t){if(t.length!==66||t.indexOf("[")!==0||t.indexOf("]")!==65)return null;const e=`0x${t.slice(1,65)}`;return Jr(e)?e:null}function yw(t){let e=new Uint8Array(32).fill(0);if(!t)return kt(e);const n=t.split(".");for(let i=n.length-1;i>=0;i-=1){const o=Xp(n[i]),r=o?nl(o):Ss(br(n[i]),"bytes");e=Ss(xr([e,r]),"bytes")}return kt(e)}function xw(t){return`[${t.slice(2)}]`}function Cw(t){const e=new Uint8Array(32).fill(0);return t?Xp(t)||Ss(br(t)):kt(e)}function Qp(t){const e=t.replace(/^\.|\.$/gm,"");if(e.length===0)return new Uint8Array(1);const n=new Uint8Array(br(e).byteLength+2);let i=0;const o=e.split(".");for(let r=0;r<o.length;r++){let s=br(o[r]);s.byteLength>255&&(s=br(xw(Cw(o[r])))),n[i]=s.length,n.set(s,i+1),i+=s.length+1}return n.byteLength!==i+1?n.slice(0,i+1):n}const _w=3;function mc(t,{abi:e,address:n,args:i,docsPath:o,functionName:r,sender:s}){const{code:a,data:c,message:l,shortMessage:d}=t instanceof Rd?t:t instanceof te?t.walk(f=>"data"in f)||t.walk():{},p=t instanceof rl?new vw({functionName:r}):[_w,Cr.code].includes(a)&&(c||l||d)?new Bu({abi:e,data:typeof c=="object"?c.data:c,functionName:r,message:d??l}):t;return new Id(p,{abi:e,args:i,contractAddress:n,docsPath:o,functionName:r,sender:s})}const Ew="0x82ad56cb";function Tw(t,{docsPath:e,...n}){const i=(()=>{const o=xd(t,n);return o instanceof ol?t:o})();return new bw(i,{docsPath:e,...n})}const Hl=new Map;function ef({fn:t,id:e,shouldSplitBatch:n,wait:i=0,sort:o}){const r=async()=>{const d=c();s();const p=d.map(({args:f})=>f);p.length!==0&&t(p).then(f=>{var b;o&&Array.isArray(f)&&f.sort(o);for(let _=0;_<d.length;_++){const{pendingPromise:$}=d[_];(b=$.resolve)==null||b.call($,[f[_],f])}}).catch(f=>{var b;for(let _=0;_<d.length;_++){const{pendingPromise:$}=d[_];(b=$.reject)==null||b.call($,f)}})},s=()=>Hl.delete(e),a=()=>c().map(({args:d})=>d),c=()=>Hl.get(e)||[],l=d=>Hl.set(e,[...c(),d]);return{flush:s,async schedule(d){const p={},f=new Promise(($,I)=>{p.resolve=$,p.reject=I});return(n==null?void 0:n([...a(),d]))&&r(),c().length>0?(l({args:d,pendingPromise:p}),f):(l({args:d,pendingPromise:p}),setTimeout(r,i),f)}}}async function Pd(t,e){var M,W,Z,Q;const{account:n=t.account,batch:i=!!((M=t.batch)!=null&&M.multicall),blockNumber:o,blockTag:r="latest",accessList:s,blobs:a,data:c,gas:l,gasPrice:d,maxFeePerBlobGas:p,maxFeePerGas:f,maxPriorityFeePerGas:b,nonce:_,to:$,value:I,stateOverride:L,...T}=e,U=n?ei(n):void 0;try{sl(e);const w=(o?Fe(o):void 0)||r,v=Iw(L),S=(Q=(Z=(W=t.chain)==null?void 0:W.formatters)==null?void 0:Z.transactionRequest)==null?void 0:Q.format,N=(S||_d)({...Cd(T,{format:S}),from:U==null?void 0:U.address,accessList:s,blobs:a,data:c,gas:l,gasPrice:d,maxFeePerBlobGas:p,maxFeePerGas:f,maxPriorityFeePerGas:b,nonce:_,to:$,value:I});if(i&&kw({request:N})&&!v)try{return await Aw(t,{...N,blockNumber:o,blockTag:r})}catch(E){if(!(E instanceof $p)&&!(E instanceof Cu))throw E}const B=await t.request({method:"eth_call",params:v?[N,w,v]:[N,w]});return B==="0x"?{data:void 0}:{data:B}}catch(g){const w=$w(g),{offchainLookup:v,offchainLookupSignature:S}=await ui(()=>import("./ccip-BtSPBP0h.js"),[]);if(t.ccipRead!==!1&&(w==null?void 0:w.slice(0,10))===S&&$)return{data:await v(t,{data:w,to:$})};throw Tw(g,{...e,account:U,chain:t.chain})}}function kw({request:t}){const{data:e,to:n,...i}=t;return!(!e||e.startsWith(Ew)||!n||Object.values(i).filter(o=>typeof o<"u").length>0)}async function Aw(t,e){var $;const{batchSize:n=1024,wait:i=0}=typeof(($=t.batch)==null?void 0:$.multicall)=="object"?t.batch.multicall:{},{blockNumber:o,blockTag:r="latest",data:s,multicallAddress:a,to:c}=e;let l=a;if(!l){if(!t.chain)throw new $p;l=al({blockNumber:o,chain:t.chain,contract:"multicall3"})}const p=(o?Fe(o):void 0)||r,{schedule:f}=ef({id:`${t.uid}.${p}`,wait:i,shouldSplitBatch(I){return I.reduce((T,{data:U})=>T+(U.length-2),0)>n*2},fn:async I=>{const L=I.map(M=>({allowFailure:!0,callData:M.data,target:M.to})),T=Xo({abi:Ru,args:[L],functionName:"aggregate3"}),U=await t.request({method:"eth_call",params:[{data:T,to:l},p]});return Ia({abi:Ru,args:[L],functionName:"aggregate3",data:U||"0x"})}}),[{returnData:b,success:_}]=await f({data:s,to:c});if(!_)throw new Rd({data:b});return b==="0x"?{data:void 0}:{data:b}}function $w(t){var n;if(!(t instanceof te))return;const e=t.walk();return typeof(e==null?void 0:e.data)=="object"?(n=e.data)==null?void 0:n.data:e.data}function H0(t){if(!(!t||t.length===0))return t.reduce((e,{slot:n,value:i})=>{if(n.length!==66)throw new $0({size:n.length,targetSize:66,type:"hex"});if(i.length!==66)throw new $0({size:i.length,targetSize:66,type:"hex"});return e[n]=i,e},{})}function Sw(t){const{balance:e,nonce:n,state:i,stateDiff:o,code:r}=t,s={};if(r!==void 0&&(s.code=r),e!==void 0&&(s.balance=Fe(e)),n!==void 0&&(s.nonce=Fe(n)),i!==void 0&&(s.state=H0(i)),o!==void 0){if(s.state)throw new mw;s.stateDiff=H0(o)}return s}function Iw(t){if(!t)return;const e={};for(const{address:n,...i}of t){if(!Fi(n,{strict:!1}))throw new $s({address:n});if(e[n])throw new gw({address:n});e[n]=Sw(i)}return e}async function xo(t,e){const{abi:n,address:i,args:o,functionName:r,...s}=e,a=Xo({abi:n,args:o,functionName:r});try{const{data:c}=await qe(t,Pd,"call")({...s,data:a,to:i});return Ia({abi:n,args:o,functionName:r,data:c||"0x"})}catch(c){throw mc(c,{abi:n,address:i,args:o,docsPath:"/docs/contract/readContract",functionName:r})}}class Rw extends te{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class us extends te{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Od extends te{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class Pw extends te{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const Ow=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,Nw=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,Bw=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,Mw=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Dw(t){try{const e=await fetch(t,{method:"HEAD"});if(e.status===200){const n=e.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(e){return typeof e=="object"&&typeof e.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const i=new Image;i.onload=()=>{n(!0)},i.onerror=()=>{n(!1)},i.src=t})}}function V0(t,e){return t?t.endsWith("/")?t.slice(0,-1):t:e}function tf({uri:t,gatewayUrls:e}){const n=Bw.test(t);if(n)return{uri:t,isOnChain:!0,isEncoded:n};const i=V0(e==null?void 0:e.ipfs,"https://ipfs.io"),o=V0(e==null?void 0:e.arweave,"https://arweave.net"),r=t.match(Ow),{protocol:s,subpath:a,target:c,subtarget:l=""}=(r==null?void 0:r.groups)||{},d=s==="ipns:/"||a==="ipns/",p=s==="ipfs:/"||a==="ipfs/"||Nw.test(t);if(t.startsWith("http")&&!d&&!p){let b=t;return e!=null&&e.arweave&&(b=t.replace(/https:\/\/arweave.net/g,e==null?void 0:e.arweave)),{uri:b,isOnChain:!1,isEncoded:!1}}if((d||p)&&c)return{uri:`${i}/${d?"ipns":"ipfs"}/${c}${l}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&c)return{uri:`${o}/${c}${l||""}`,isOnChain:!1,isEncoded:!1};let f=t.replace(Mw,"");if(f.startsWith("<svg")&&(f=`data:image/svg+xml;base64,${btoa(f)}`),f.startsWith("data:")||f.startsWith("{"))return{uri:f,isOnChain:!0,isEncoded:!1};throw new Od({uri:t})}function nf(t){if(typeof t!="object"||!("image"in t)&&!("image_url"in t)&&!("image_data"in t))throw new Rw({data:t});return t.image||t.image_url||t.image_data}async function Lw({gatewayUrls:t,uri:e}){try{const n=await fetch(e).then(o=>o.json());return await Nd({gatewayUrls:t,uri:nf(n)})}catch{throw new Od({uri:e})}}async function Nd({gatewayUrls:t,uri:e}){const{uri:n,isOnChain:i}=tf({uri:e,gatewayUrls:t});if(i||await Dw(n))return n;throw new Od({uri:e})}function jw(t){let e=t;e.startsWith("did:nft:")&&(e=e.replace("did:nft:","").replace(/_/g,"/"));const[n,i,o]=e.split("/"),[r,s]=n.split(":"),[a,c]=i.split(":");if(!r||r.toLowerCase()!=="eip155")throw new us({reason:"Only EIP-155 supported"});if(!s)throw new us({reason:"Chain ID not found"});if(!c)throw new us({reason:"Contract address not found"});if(!o)throw new us({reason:"Token ID not found"});if(!a)throw new us({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:c,tokenID:o}}async function Uw(t,{nft:e}){if(e.namespace==="erc721")return xo(t,{address:e.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(e.tokenID)]});if(e.namespace==="erc1155")return xo(t,{address:e.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(e.tokenID)]});throw new Pw({namespace:e.namespace})}async function Ww(t,{gatewayUrls:e,record:n}){return/eip155:/i.test(n)?zw(t,{gatewayUrls:e,record:n}):Nd({uri:n,gatewayUrls:e})}async function zw(t,{gatewayUrls:e,record:n}){const i=jw(n),o=await Uw(t,{nft:i}),{uri:r,isOnChain:s,isEncoded:a}=tf({uri:o,gatewayUrls:e});if(s&&(r.includes("data:application/json;base64,")||r.startsWith("{"))){const l=a?atob(r.replace("data:application/json;base64,","")):r,d=JSON.parse(l);return Nd({uri:nf(d),gatewayUrls:e})}let c=i.tokenID;return i.namespace==="erc1155"&&(c=c.replace("0x","").padStart(64,"0")),Lw({gatewayUrls:e,uri:r.replace(/(?:0x)?{id}/,c)})}async function Fw(t,{blockNumber:e,blockTag:n,name:i,key:o,gatewayUrls:r,strict:s,universalResolverAddress:a}){let c=a;if(!c){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");c=al({blockNumber:e,chain:t.chain,contract:"ensUniversalResolver"})}try{const l={address:c,abi:Zm,functionName:"resolve",args:[Aa(Qp(i)),Xo({abi:j0,functionName:"text",args:[yw(i),o]})],blockNumber:e,blockTag:n},d=qe(t,xo,"readContract"),p=r?await d({...l,args:[...l.args,r]}):await d(l);if(p[0]==="0x")return null;const f=Ia({abi:j0,functionName:"text",data:p[0]});return f===""?null:f}catch(l){if(s)throw l;if(Jp(l,"resolve"))return null;throw l}}async function Hw(t,{blockNumber:e,blockTag:n,assetGatewayUrls:i,name:o,gatewayUrls:r,strict:s,universalResolverAddress:a}){const c=await qe(t,Fw,"getEnsText")({blockNumber:e,blockTag:n,key:"avatar",name:o,universalResolverAddress:a,gatewayUrls:r,strict:s});if(!c)return null;try{return await Ww(t,{record:c,gatewayUrls:i})}catch{return null}}async function Vw(t,{address:e,blockNumber:n,blockTag:i,gatewayUrls:o,strict:r,universalResolverAddress:s}){let a=s;if(!a){if(!t.chain)throw new Error("client chain not configured. universalResolverAddress is required.");a=al({blockNumber:n,chain:t.chain,contract:"ensUniversalResolver"})}const c=`${e.toLowerCase().substring(2)}.addr.reverse`;try{const l={address:a,abi:Gm,functionName:"reverse",args:[Aa(Qp(c))],blockNumber:n,blockTag:i},d=qe(t,xo,"readContract"),[p,f]=o?await d({...l,args:[...l.args,o]}):await d(l);return e.toLowerCase()!==f.toLowerCase()?null:p}catch(l){if(r)throw l;if(Jp(l,"reverse"))return null;throw l}}async function Zw(t,{address:e,blockNumber:n,blockTag:i="latest"}){const o=n?Fe(n):void 0,r=await t.request({method:"eth_getBalance",params:[e,o||i]});return BigInt(r)}const Gw=new Map,qw=new Map;function Yw(t){const e=(o,r)=>({clear:()=>r.delete(o),get:()=>r.get(o),set:s=>r.set(o,s)}),n=e(t,Gw),i=e(t,qw);return{clear:()=>{n.clear(),i.clear()},promise:n,response:i}}async function Kw(t,{cacheKey:e,cacheTime:n=1/0}){const i=Yw(e),o=i.response.get();if(o&&n>0&&new Date().getTime()-o.created.getTime()<n)return o.data;let r=i.promise.get();r||(r=t(),i.promise.set(r));try{const s=await r;return i.response.set({created:new Date,data:s}),s}finally{i.promise.clear()}}const Jw=t=>`blockNumber.${t}`;async function Xw(t,{cacheTime:e=t.cacheTime}={}){const n=await Kw(()=>t.request({method:"eth_blockNumber"}),{cacheKey:Jw(t.uid),cacheTime:e});return BigInt(n)}async function Qw(t,e){const{abi:n,address:i,args:o,dataSuffix:r,functionName:s,...a}=e,c=a.account?ei(a.account):t.account,l=Xo({abi:n,args:o,functionName:s});try{const{data:d}=await qe(t,Pd,"call")({batch:!1,data:`${l}${r?r.replace("0x",""):""}`,to:i,...a,account:c}),p=Ia({abi:n,args:o,functionName:s,data:d||"0x"}),f=n.filter(b=>"name"in b&&b.name===e.functionName);return{result:p,request:{abi:f,address:i,args:o,dataSuffix:r,functionName:s,...a,account:c}}}catch(d){throw mc(d,{abi:n,address:i,args:o,docsPath:"/docs/contract/simulateContract",functionName:s,sender:c==null?void 0:c.address})}}function e2(t,{args:e,eventName:n}={}){return{...t,blockHash:t.blockHash?t.blockHash:null,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,logIndex:t.logIndex?Number(t.logIndex):null,transactionHash:t.transactionHash?t.transactionHash:null,transactionIndex:t.transactionIndex?Number(t.transactionIndex):null,...n?{args:e,eventName:n}:{}}}const Vl=new Map,Z0=new Map;let t2=0;function Mu(t,e,n){const i=++t2,o=()=>Vl.get(t)||[],r=()=>{const d=o();Vl.set(t,d.filter(p=>p.id!==i))},s=()=>{const d=Z0.get(t);o().length===1&&d&&d(),r()},a=o();if(Vl.set(t,[...a,{id:i,fns:e}]),a&&a.length>0)return s;const c={};for(const d in e)c[d]=(...p)=>{var b,_;const f=o();if(f.length!==0)for(const $ of f)(_=(b=$.fns)[d])==null||_.call(b,...p)};const l=n(c);return typeof l=="function"&&Z0.set(t,l),s}async function Du(t){return new Promise(e=>setTimeout(e,t))}function n2(t,{emitOnBegin:e,initialWaitTime:n,interval:i}){let o=!0;const r=()=>o=!1;return(async()=>{let a;e&&(a=await t({unpoll:r}));const c=await(n==null?void 0:n(a))??i;await Du(c);const l=async()=>{o&&(await t({unpoll:r}),await Du(i),l())};l()})(),r}async function i2(t,e){const{abi:n,address:i,args:o,dataSuffix:r,functionName:s,...a}=e,c=Xo({abi:n,args:o,functionName:s});return qe(t,Hp,"sendTransaction")({data:`${c}${r?r.replace("0x",""):""}`,to:i,...a})}const Lu=256;let qa=Lu,Ya;function r2(t=11){if(!Ya||qa+t>Lu*2){Ya="",qa=0;for(let e=0;e<Lu;e++)Ya+=(256+Math.random()*256|0).toString(16).substring(1)}return Ya.substring(qa,qa+++t)}function rf(t){const{batch:e,cacheTime:n=t.pollingInterval??4e3,ccipRead:i,key:o="base",name:r="Base Client",pollingInterval:s=4e3,type:a="base"}=t,c=t.chain,l=t.account?ei(t.account):void 0,{config:d,request:p,value:f}=t.transport({chain:c,pollingInterval:s}),b={...d,...f},_={account:l,batch:e,cacheTime:n,ccipRead:i,chain:c,key:o,name:r,pollingInterval:s,request:p,transport:b,type:a,uid:r2()};function $(I){return L=>{const T=L(I);for(const M in _)delete T[M];const U={...I,...T};return Object.assign(U,{extend:$(U)})}}return Object.assign(_,{extend:$(_)})}function wc(t,{delay:e=100,retryCount:n=2,shouldRetry:i=()=>!0}={}){return new Promise((o,r)=>{const s=async({count:a=0}={})=>{const c=async({error:l})=>{const d=typeof e=="function"?e({count:a,error:l}):e;d&&await Du(d),s({count:a+1})};try{const l=await t();o(l)}catch(l){if(a<n&&await i({count:a,error:l}))return c({error:l});r(l)}};s()})}function o2(t,e={}){return async(n,i={})=>{const{retryDelay:o=150,retryCount:r=3}={...e,...i};return wc(async()=>{try{return await t(n)}catch(s){const a=s;switch(a.code){case Is.code:throw new Is(a);case Rs.code:throw new Rs(a);case Ps.code:throw new Ps(a);case Os.code:throw new Os(a);case Cr.code:throw new Cr(a);case Ns.code:throw new Ns(a);case Bs.code:throw new Bs(a);case Di.code:throw new Di(a);case Ms.code:throw new Ms(a);case Ds.code:throw new Ds(a);case yo.code:throw new yo(a);case Ls.code:throw new Ls(a);case ct.code:throw new ct(a);case js.code:throw new js(a);case Us.code:throw new Us(a);case Ws.code:throw new Ws(a);case zs.code:throw new zs(a);case _n.code:throw new _n(a);case 5e3:throw new ct(a);default:throw s instanceof te?s:new wm(a)}}},{delay:({count:s,error:a})=>{var c;if(a&&a instanceof bs){const l=(c=a==null?void 0:a.headers)==null?void 0:c.get("Retry-After");if(l!=null&&l.match(/\d/))return parseInt(l)*1e3}return~~(1<<s)*o},retryCount:r,shouldRetry:({error:s})=>s2(s)})}}function s2(t){return"code"in t&&typeof t.code=="number"?t.code===-1||t.code===yo.code||t.code===Cr.code:t instanceof bs&&t.status?t.status===403||t.status===408||t.status===413||t.status===429||t.status===500||t.status===502||t.status===503||t.status===504:!0}function of({key:t,name:e,request:n,retryCount:i=3,retryDelay:o=150,timeout:r,type:s},a){return{config:{key:t,name:e,request:n,retryCount:i,retryDelay:o,timeout:r,type:s},request:o2(n,{retryCount:i,retryDelay:o}),value:a}}function a2(t,e={}){const{key:n="custom",name:i="Custom Provider",retryDelay:o}=e;return({retryCount:r})=>of({key:n,name:i,request:t.request.bind(t),retryCount:e.retryCount??r,retryDelay:o,type:"custom"})}class c2 extends te{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function sf(t,{errorInstance:e=new Error("timed out"),timeout:n,signal:i}){return new Promise((o,r)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{i?a.abort():r(e)},n)),o(await t({signal:(a==null?void 0:a.signal)||null}))}catch(a){a.name==="AbortError"&&r(e),r(a)}finally{clearTimeout(s)}})()})}function l2(){return{current:0,take(){return this.current++},reset(){this.current=0}}}const G0=l2();function u2(t,e={}){return{async request(n){var p;const{body:i,fetchOptions:o={},onRequest:r=e.onRequest,onResponse:s=e.onResponse,timeout:a=e.timeout??1e4}=n,{headers:c,method:l,signal:d}={...e.fetchOptions,...o};try{const f=await sf(async({signal:_})=>{const $={...o,body:Array.isArray(i)?zn(i.map(T=>({jsonrpc:"2.0",id:T.id??G0.take(),...T}))):zn({jsonrpc:"2.0",id:i.id??G0.take(),...i}),headers:{...c,"Content-Type":"application/json"},method:l||"POST",signal:d||(a>0?_:null)},I=new Request(t,$);return r&&await r(I),await fetch(t,$)},{errorInstance:new N0({body:i,url:t}),timeout:a,signal:!0});s&&await s(f);let b;if((p=f.headers.get("Content-Type"))!=null&&p.startsWith("application/json")?b=await f.json():(b=await f.text(),b=JSON.parse(b||"{}")),!f.ok)throw new bs({body:i,details:zn(b.error)||f.statusText,headers:f.headers,status:f.status,url:t});return b}catch(f){throw f instanceof bs||f instanceof N0?f:new bs({body:i,details:f.message,url:t})}}}}function q0(t,e={}){const{batch:n,fetchOptions:i,key:o="http",name:r="HTTP JSON-RPC",onFetchRequest:s,onFetchResponse:a,retryDelay:c}=e;return({chain:l,retryCount:d,timeout:p})=>{const{batchSize:f=1e3,wait:b=0}=typeof n=="object"?n:{},_=e.retryCount??d,$=p??e.timeout??1e4,I=t||(l==null?void 0:l.rpcUrls.default.http[0]);if(!I)throw new c2;const L=u2(I,{fetchOptions:i,onRequest:s,onResponse:a,timeout:$});return of({key:o,name:r,async request({method:T,params:U}){const M={method:T,params:U},{schedule:W}=ef({id:`${t}`,wait:b,shouldSplitBatch(w){return w.length>f},fn:w=>L.request({body:w}),sort:(w,v)=>w.id-v.id}),Z=async w=>n?W(w):[await L.request({body:w})],[{error:Q,result:g}]=await Z(M);if(Q)throw new Pp({body:M,error:Q,url:I});return g},retryCount:_,retryDelay:c,timeout:$,type:"http"},{fetchOptions:i,url:I})}}function d2(t){return{formatters:void 0,fees:void 0,serializers:void 0,...t}}const h2={"0x0":"reverted","0x1":"success"};function p2(t){const e={...t,blockNumber:t.blockNumber?BigInt(t.blockNumber):null,contractAddress:t.contractAddress?t.contractAddress:null,cumulativeGasUsed:t.cumulativeGasUsed?BigInt(t.cumulativeGasUsed):null,effectiveGasPrice:t.effectiveGasPrice?BigInt(t.effectiveGasPrice):null,gasUsed:t.gasUsed?BigInt(t.gasUsed):null,logs:t.logs?t.logs.map(n=>e2(n)):null,to:t.to?t.to:null,transactionIndex:t.transactionIndex?bo(t.transactionIndex):null,status:t.status?h2[t.status]:null,type:t.type?Bp[t.type]||t.type:null};return t.blobGasPrice&&(e.blobGasPrice=BigInt(t.blobGasPrice)),t.blobGasUsed&&(e.blobGasUsed=BigInt(t.blobGasUsed)),e}function af(t,e){let[n,i="0"]=t.split(".");const o=n.startsWith("-");if(o&&(n=n.slice(1)),i=i.replace(/(0+)$/,""),e===0)Math.round(+`.${i}`)===1&&(n=`${BigInt(n)+1n}`),i="";else if(i.length>e){const[r,s,a]=[i.slice(0,e-1),i.slice(e-1,e),i.slice(e)],c=Math.round(+`${s}.${a}`);c>9?i=`${BigInt(r)+BigInt(1)}0`.padStart(r.length+1,"0"):i=`${r}${c}`,i.length>e&&(i=i.slice(1),n=`${BigInt(n)+1n}`),i=i.slice(0,e)}else i=i.padEnd(e,"0");return BigInt(`${o?"-":""}${n}${i}`)}function f2(t,e="wei"){return af(t,Sp[e])}async function cf(t,{blockHash:e,blockNumber:n,blockTag:i,hash:o,index:r}){var d,p,f;const s=i||"latest",a=n!==void 0?Fe(n):void 0;let c=null;if(o?c=await t.request({method:"eth_getTransactionByHash",params:[o]}):e?c=await t.request({method:"eth_getTransactionByBlockHashAndIndex",params:[e,Fe(r)]}):(a||s)&&(c=await t.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,Fe(r)]})),!c)throw new Ip({blockHash:e,blockNumber:n,blockTag:s,hash:o,index:r});return(((f=(p=(d=t.chain)==null?void 0:d.formatters)==null?void 0:p.transaction)==null?void 0:f.format)||Mp)(c)}async function Y0(t,{hash:e}){var o,r,s;const n=await t.request({method:"eth_getTransactionReceipt",params:[e]});if(!n)throw new Rp({hash:e});return(((s=(r=(o=t.chain)==null?void 0:o.formatters)==null?void 0:r.transactionReceipt)==null?void 0:s.format)||p2)(n)}async function g2(t,e){var I;const{allowFailure:n=!0,batchSize:i,blockNumber:o,blockTag:r,multicallAddress:s,stateOverride:a}=e,c=e.contracts,l=i??(typeof((I=t.batch)==null?void 0:I.multicall)=="object"&&t.batch.multicall.batchSize||1024);let d=s;if(!d){if(!t.chain)throw new Error("client chain not configured. multicallAddress is required.");d=al({blockNumber:o,chain:t.chain,contract:"multicall3"})}const p=[[]];let f=0,b=0;for(let L=0;L<c.length;L++){const{abi:T,address:U,args:M,functionName:W}=c[L];try{const Z=Xo({abi:T,args:M,functionName:W});b+=(Z.length-2)/2,l>0&&b>l&&p[f].length>0&&(f++,b=(Z.length-2)/2,p[f]=[]),p[f]=[...p[f],{allowFailure:!0,callData:Z,target:U}]}catch(Z){const Q=mc(Z,{abi:T,address:U,args:M,docsPath:"/docs/contract/multicall",functionName:W});if(!n)throw Q;p[f]=[...p[f],{allowFailure:!0,callData:"0x",target:U}]}}const _=await Promise.allSettled(p.map(L=>qe(t,xo,"readContract")({abi:Ru,address:d,args:[L],blockNumber:o,blockTag:r,functionName:"aggregate3",stateOverride:a}))),$=[];for(let L=0;L<_.length;L++){const T=_[L];if(T.status==="rejected"){if(!n)throw T.reason;for(let M=0;M<p[L].length;M++)$.push({status:"failure",error:T.reason,result:void 0});continue}const U=T.value;for(let M=0;M<U.length;M++){const{returnData:W,success:Z}=U[M],{callData:Q}=p[L][M],{abi:g,address:w,functionName:v,args:S}=c[$.length];try{if(Q==="0x")throw new rl;if(!Z)throw new Rd({data:W});const P=Ia({abi:g,args:S,data:W,functionName:v});$.push(n?{result:P,status:"success"}:P)}catch(P){const N=mc(P,{abi:g,address:w,args:S,docsPath:"/docs/contract/multicall",functionName:v});if(!n)throw N;$.push({error:N,result:void 0,status:"failure"})}}}if($.length!==c.length)throw new te("multicall results mismatch");return $}function m2(t,{emitOnBegin:e=!1,emitMissed:n=!1,onBlockNumber:i,onError:o,poll:r,pollingInterval:s=t.pollingInterval}){const a=typeof r<"u"?r:!(t.transport.type==="webSocket"||t.transport.type==="fallback"&&t.transport.transports[0].config.type==="webSocket");let c;return a?(()=>{const p=zn(["watchBlockNumber",t.uid,e,n,s]);return Mu(p,{onBlockNumber:i,onError:o},f=>n2(async()=>{var b;try{const _=await qe(t,Xw,"getBlockNumber")({cacheTime:0});if(c){if(_===c)return;if(_-c>1&&n)for(let $=c+1n;$<_;$++)f.onBlockNumber($,c),c=$}(!c||_>c)&&(f.onBlockNumber(_,c),c=_)}catch(_){(b=f.onError)==null||b.call(f,_)}},{emitOnBegin:e,interval:s}))})():(()=>{const p=zn(["watchBlockNumber",t.uid,e,n]);return Mu(p,{onBlockNumber:i,onError:o},f=>{let b=!0,_=()=>b=!1;return(async()=>{try{const $=(()=>{if(t.transport.type==="fallback"){const L=t.transport.transports.find(T=>T.config.type==="webSocket");return L?L.value:t.transport}return t.transport})(),{unsubscribe:I}=await $.subscribe({params:["newHeads"],onData(L){var U;if(!b)return;const T=il((U=L.result)==null?void 0:U.number);f.onBlockNumber(T,c),c=T},onError(L){var T;(T=f.onError)==null||T.call(f,L)}});_=I,b||_()}catch($){o==null||o($)}})(),()=>_()})})()}async function w2(t,{confirmations:e=1,hash:n,onReplaced:i,pollingInterval:o=t.pollingInterval,retryCount:r=6,retryDelay:s=({count:c})=>~~(1<<c)*200,timeout:a}){const c=zn(["waitForTransactionReceipt",t.uid,n]);let l,d,p,f=!1;return new Promise((b,_)=>{a&&setTimeout(()=>_(new gm({hash:n})),a);const $=Mu(c,{onReplaced:i,resolve:b,reject:_},I=>{const L=qe(t,m2,"watchBlockNumber")({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:o,async onBlockNumber(T){if(f)return;let U=T;const M=W=>{L(),W(),$()};try{if(p){if(e>1&&(!p.blockNumber||U-p.blockNumber+1n<e))return;M(()=>I.resolve(p));return}if(l||(f=!0,await wc(async()=>{l=await qe(t,cf,"getTransaction")({hash:n}),l.blockNumber&&(U=l.blockNumber)},{delay:s,retryCount:r}),f=!1),p=await qe(t,Y0,"getTransactionReceipt")({hash:n}),e>1&&(!p.blockNumber||U-p.blockNumber+1n<e))return;M(()=>I.resolve(p))}catch(W){if(W instanceof Ip||W instanceof Rp){if(!l){f=!1;return}try{d=l,f=!0;const Z=await wc(()=>qe(t,Fs,"getBlock")({blockNumber:U,includeTransactions:!0}),{delay:s,retryCount:r,shouldRetry:({error:w})=>w instanceof Np});f=!1;const Q=Z.transactions.find(({from:w,nonce:v})=>w===d.from&&v===d.nonce);if(!Q||(p=await qe(t,Y0,"getTransactionReceipt")({hash:Q.hash}),e>1&&(!p.blockNumber||U-p.blockNumber+1n<e)))return;let g="replaced";Q.to===d.to&&Q.value===d.value?g="repriced":Q.from===Q.to&&Q.value===0n&&(g="cancelled"),M(()=>{var w;(w=I.onReplaced)==null||w.call(I,{reason:g,replacedTransaction:d,transaction:Q,transactionReceipt:p}),I.resolve(p)})}catch(Z){M(()=>I.reject(Z))}}else M(()=>I.reject(W))}}})})})}async function b2(t,{account:e=t.account,message:n}){if(!e)throw new Ap({docsPath:"/docs/actions/wallet/signMessage"});const i=ei(e);if(i.type==="local")return i.signMessage({message:n});const o=typeof n=="string"?hd(n):n.raw instanceof Uint8Array?Aa(n.raw):n.raw;return t.request({method:"personal_sign",params:[o,i.address]},{retryCount:0})}function v2(t){const e=n=>t(n.detail);return window.addEventListener("eip6963:announceProvider",e),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",e)}function y2(){const t=new Set;let e=[];const n=()=>v2(o=>{e.some(({info:r})=>r.uuid===o.info.uuid)||(e=[...e,o],t.forEach(r=>r(e,{added:[o]})))});let i=n();return{_listeners(){return t},clear(){t.forEach(o=>o([],{removed:[...e]})),e=[]},destroy(){this.clear(),t.clear(),i()},findProvider({rdns:o}){return e.find(r=>r.info.rdns===o)},getProviders(){return e},reset(){this.clear(),i(),i=n()},subscribe(o,{emitImmediately:r}={}){return t.add(o),r&&o(e,{added:e}),()=>t.delete(o)}}}var x2={VITE_ENV:"dev",VITE_USER_NODE_ENV:"production",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const C2=t=>(e,n,i)=>{const o=i.subscribe;return i.subscribe=(s,a,c)=>{let l=s;if(a){const d=(c==null?void 0:c.equalityFn)||Object.is;let p=s(i.getState());l=f=>{const b=s(f);if(!d(p,b)){const _=p;a(p=b,_)}},c!=null&&c.fireImmediately&&a(p,p)}return o(l)},t(e,n,i)},_2=C2;function E2(t,e){let n;try{n=t()}catch{return}return{getItem:o=>{var r;const s=c=>c===null?null:JSON.parse(c,e==null?void 0:e.reviver),a=(r=n.getItem(o))!=null?r:null;return a instanceof Promise?a.then(s):s(a)},setItem:(o,r)=>n.setItem(o,JSON.stringify(r,e==null?void 0:e.replacer)),removeItem:o=>n.removeItem(o)}}const Vs=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(i){return Vs(i)(n)},catch(i){return this}}}catch(n){return{then(i){return this},catch(i){return Vs(i)(n)}}}},T2=(t,e)=>(n,i,o)=>{let r={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:I=>I,version:0,merge:(I,L)=>({...L,...I}),...e},s=!1;const a=new Set,c=new Set;let l;try{l=r.getStorage()}catch{}if(!l)return t((...I)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...I)},i,o);const d=Vs(r.serialize),p=()=>{const I=r.partialize({...i()});let L;const T=d({state:I,version:r.version}).then(U=>l.setItem(r.name,U)).catch(U=>{L=U});if(L)throw L;return T},f=o.setState;o.setState=(I,L)=>{f(I,L),p()};const b=t((...I)=>{n(...I),p()},i,o);let _;const $=()=>{var I;if(!l)return;s=!1,a.forEach(T=>T(i()));const L=((I=r.onRehydrateStorage)==null?void 0:I.call(r,i()))||void 0;return Vs(l.getItem.bind(l))(r.name).then(T=>{if(T)return r.deserialize(T)}).then(T=>{if(T)if(typeof T.version=="number"&&T.version!==r.version){if(r.migrate)return r.migrate(T.state,T.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return T.state}).then(T=>{var U;return _=r.merge(T,(U=i())!=null?U:b),n(_,!0),p()}).then(()=>{L==null||L(_,void 0),s=!0,c.forEach(T=>T(_))}).catch(T=>{L==null||L(void 0,T)})};return o.persist={setOptions:I=>{r={...r,...I},I.getStorage&&(l=I.getStorage())},clearStorage:()=>{l==null||l.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>$(),hasHydrated:()=>s,onHydrate:I=>(a.add(I),()=>{a.delete(I)}),onFinishHydration:I=>(c.add(I),()=>{c.delete(I)})},$(),_||b},k2=(t,e)=>(n,i,o)=>{let r={storage:E2(()=>localStorage),partialize:$=>$,version:0,merge:($,I)=>({...I,...$}),...e},s=!1;const a=new Set,c=new Set;let l=r.storage;if(!l)return t((...$)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),n(...$)},i,o);const d=()=>{const $=r.partialize({...i()});return l.setItem(r.name,{state:$,version:r.version})},p=o.setState;o.setState=($,I)=>{p($,I),d()};const f=t((...$)=>{n(...$),d()},i,o);let b;const _=()=>{var $,I;if(!l)return;s=!1,a.forEach(T=>{var U;return T((U=i())!=null?U:f)});const L=((I=r.onRehydrateStorage)==null?void 0:I.call(r,($=i())!=null?$:f))||void 0;return Vs(l.getItem.bind(l))(r.name).then(T=>{if(T)if(typeof T.version=="number"&&T.version!==r.version){if(r.migrate)return r.migrate(T.state,T.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return T.state}).then(T=>{var U;return b=r.merge(T,(U=i())!=null?U:f),n(b,!0),d()}).then(()=>{L==null||L(b,void 0),b=i(),s=!0,c.forEach(T=>T(b))}).catch(T=>{L==null||L(void 0,T)})};return o.persist={setOptions:$=>{r={...r,...$},$.storage&&(l=$.storage)},clearStorage:()=>{l==null||l.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>_(),hasHydrated:()=>s,onHydrate:$=>(a.add($),()=>{a.delete($)}),onFinishHydration:$=>(c.add($),()=>{c.delete($)})},r.skipHydration||_(),b||f},A2=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((x2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),T2(t,e)):k2(t,e),$2=A2;var S2={VITE_ENV:"dev",VITE_USER_NODE_ENV:"production",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const K0=t=>{let e;const n=new Set,i=(c,l)=>{const d=typeof c=="function"?c(e):c;if(!Object.is(d,e)){const p=e;e=l??typeof d!="object"?d:Object.assign({},e,d),n.forEach(f=>f(e,p))}},o=()=>e,a={setState:i,getState:o,subscribe:c=>(n.add(c),()=>n.delete(c)),destroy:()=>{(S2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return e=t(i,o,a),a},Zl=t=>t?K0(t):K0;var lf={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,n="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(n=!1));function o(c,l,d){this.fn=c,this.context=l,this.once=d||!1}function r(c,l,d,p,f){if(typeof d!="function")throw new TypeError("The listener must be a function");var b=new o(d,p||c,f),_=n?n+l:l;return c._events[_]?c._events[_].fn?c._events[_]=[c._events[_],b]:c._events[_].push(b):(c._events[_]=b,c._eventsCount++),c}function s(c,l){--c._eventsCount===0?c._events=new i:delete c._events[l]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var l=[],d,p;if(this._eventsCount===0)return l;for(p in d=this._events)e.call(d,p)&&l.push(n?p.slice(1):p);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(d)):l},a.prototype.listeners=function(l){var d=n?n+l:l,p=this._events[d];if(!p)return[];if(p.fn)return[p.fn];for(var f=0,b=p.length,_=new Array(b);f<b;f++)_[f]=p[f].fn;return _},a.prototype.listenerCount=function(l){var d=n?n+l:l,p=this._events[d];return p?p.fn?1:p.length:0},a.prototype.emit=function(l,d,p,f,b,_){var $=n?n+l:l;if(!this._events[$])return!1;var I=this._events[$],L=arguments.length,T,U;if(I.fn){switch(I.once&&this.removeListener(l,I.fn,void 0,!0),L){case 1:return I.fn.call(I.context),!0;case 2:return I.fn.call(I.context,d),!0;case 3:return I.fn.call(I.context,d,p),!0;case 4:return I.fn.call(I.context,d,p,f),!0;case 5:return I.fn.call(I.context,d,p,f,b),!0;case 6:return I.fn.call(I.context,d,p,f,b,_),!0}for(U=1,T=new Array(L-1);U<L;U++)T[U-1]=arguments[U];I.fn.apply(I.context,T)}else{var M=I.length,W;for(U=0;U<M;U++)switch(I[U].once&&this.removeListener(l,I[U].fn,void 0,!0),L){case 1:I[U].fn.call(I[U].context);break;case 2:I[U].fn.call(I[U].context,d);break;case 3:I[U].fn.call(I[U].context,d,p);break;case 4:I[U].fn.call(I[U].context,d,p,f);break;default:if(!T)for(W=1,T=new Array(L-1);W<L;W++)T[W-1]=arguments[W];I[U].fn.apply(I[U].context,T)}}return!0},a.prototype.on=function(l,d,p){return r(this,l,d,p,!1)},a.prototype.once=function(l,d,p){return r(this,l,d,p,!0)},a.prototype.removeListener=function(l,d,p,f){var b=n?n+l:l;if(!this._events[b])return this;if(!d)return s(this,b),this;var _=this._events[b];if(_.fn)_.fn===d&&(!f||_.once)&&(!p||_.context===p)&&s(this,b);else{for(var $=0,I=[],L=_.length;$<L;$++)(_[$].fn!==d||f&&!_[$].once||p&&_[$].context!==p)&&I.push(_[$]);I.length?this._events[b]=I.length===1?I[0]:I:s(this,b)}return this},a.prototype.removeAllListeners=function(l){var d;return l?(d=n?n+l:l,this._events[d]&&s(this,d)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,t.exports=a})(lf);var I2=lf.exports;const R2=tl(I2);var ds=function(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)},pr;class P2{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),pr.set(this,new R2)}on(e,n){ds(this,pr,"f").on(e,n)}once(e,n){ds(this,pr,"f").once(e,n)}off(e,n){ds(this,pr,"f").off(e,n)}emit(e,...n){const i=n[0];ds(this,pr,"f").emit(e,{uid:this.uid,...i})}listenerCount(e){return ds(this,pr,"f").listenerCount(e)}}pr=new WeakMap;function O2(t){return new P2(t)}function N2(t,e){return JSON.parse(t,(n,i)=>{let o=i;return(o==null?void 0:o.__type)==="bigint"&&(o=BigInt(o.value)),(o==null?void 0:o.__type)==="Map"&&(o=new Map(o.value)),(e==null?void 0:e(n,o))??o})}function J0(t,e){return t.slice(0,e).join(".")||"."}function X0(t,e){const{length:n}=t;for(let i=0;i<n;++i)if(t[i]===e)return i+1;return 0}function B2(t,e){const n=typeof t=="function",i=typeof e=="function",o=[],r=[];return function(a,c){if(typeof c=="object")if(o.length){const l=X0(o,this);l===0?o[o.length]=this:(o.splice(l),r.splice(l)),r[r.length]=a;const d=X0(o,c);if(d!==0)return i?e.call(this,a,c,J0(r,d)):`[ref=${J0(r,d)}]`}else o[0]=c,r[0]=a;return n?t.call(this,a,c):c}}function M2(t,e,n,i){return JSON.stringify(t,B2((o,r)=>{let s=r;return typeof s=="bigint"&&(s={__type:"bigint",value:r.toString()}),s instanceof Map&&(s={__type:"Map",value:Array.from(r.entries())}),(e==null?void 0:e(o,s))??s},i),n??void 0)}function D2(t){const{deserialize:e=N2,key:n="wagmi",serialize:i=M2,storage:o=uf}=t;function r(s){return s instanceof Promise?s.then(a=>a).catch(()=>null):s}return{...o,key:n,async getItem(s,a){const c=o.getItem(`${n}.${s}`),l=await r(c);return l?e(l)??null:a??null},async setItem(s,a){const c=`${n}.${s}`;a===null?await r(o.removeItem(c)):await r(o.setItem(c,i(a)))},async removeItem(s){await r(o.removeItem(`${n}.${s}`))}}}const uf={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};const oc="2.6.17",L2=()=>`@wagmi/core@${oc}`;var df=function(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)},bc,hf;class pi extends Error{get docsBaseUrl(){return"https://wagmi.sh/core"}get version(){return L2()}constructor(e,n={}){var r;super(),bc.add(this),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WagmiCoreError"});const i=n.cause instanceof pi?n.cause.details:(r=n.cause)!=null&&r.message?n.cause.message:n.details,o=n.cause instanceof pi&&n.cause.docsPath||n.docsPath;this.message=[e||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...o?[`Docs: ${this.docsBaseUrl}${o}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...i?[`Details: ${i}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=i,this.docsPath=o,this.metaMessages=n.metaMessages,this.shortMessage=e}walk(e){return df(this,bc,"m",hf).call(this,this,e)}}bc=new WeakSet,hf=function t(e,n){return n!=null&&n(e)?e:e.cause?df(this,bc,"m",t).call(this,e.cause,n):e};class Co extends pi{constructor(){super("Chain not configured."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotConfiguredError"})}}class j2 extends pi{constructor(){super("Connector already connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAlreadyConnectedError"})}}class U2 extends pi{constructor(){super("Connector not connected."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorNotConnectedError"})}}class W2 extends pi{constructor({address:e,connector:n}){super(`Account "${e}" not found for connector "${n.name}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ConnectorAccountNotFoundError"})}}class fr extends pi{constructor(){super("Provider not found."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderNotFoundError"})}}class z2 extends pi{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainNotSupportedError"})}}const F2={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider(t){return t!=null&&t.coinbaseWalletExtension?t.coinbaseWalletExtension:sc(t,"isCoinbaseWallet")}},metaMask:{id:"metaMask",name:"MetaMask",provider(t){return sc(t,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;const n=["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPortal","isRabby","isTokenPocket","isTokenary","isZerion"];for(const i of n)if(e[i])return!1;return!0})}},phantom:{id:"phantom",name:"Phantom",provider(t){var e,n;return(e=t==null?void 0:t.phantom)!=null&&e.ethereum?(n=t.phantom)==null?void 0:n.ethereum:sc(t,"isPhantom")}}};cl.type="injected";function cl(t={}){const{shimDisconnect:e=!0,unstable_shimAsyncInject:n}=t;function i(){const c=t.target;if(typeof c=="function"){const l=c();if(l)return l}return typeof c=="object"?c:typeof c=="string"?{...F2[c]??{id:c,name:`${c[0].toUpperCase()}${c.slice(1)}`,provider:`is${c[0].toUpperCase()}${c.slice(1)}`}}:{id:"injected",name:"Injected",provider(l){return l==null?void 0:l.ethereum}}}let o,r,s,a;return c=>({get icon(){return i().icon},get id(){return i().id},get name(){return i().name},type:cl.type,async setup(){const l=await this.getProvider();l&&t.target&&(s||(s=this.onConnect.bind(this),l.on("connect",s)),o||(o=this.onAccountsChanged.bind(this),l.on("accountsChanged",o)))},async connect({chainId:l,isReconnecting:d}={}){var b,_,$,I,L,T;const p=await this.getProvider();if(!p)throw new fr;let f=[];if(d)f=await this.getAccounts().catch(()=>[]);else if(e)try{f=(I=($=(_=(b=(await p.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]}))[0])==null?void 0:b.caveats)==null?void 0:_[0])==null?void 0:$.value)==null?void 0:I.map(M=>bn(M))}catch(U){const M=U;if(M.code===ct.code)throw new ct(M);if(M.code===Di.code)throw M}try{!(f!=null&&f.length)&&!d&&(f=(await p.request({method:"eth_requestAccounts"})).map(W=>bn(W))),s&&(p.removeListener("connect",s),s=void 0),o||(o=this.onAccountsChanged.bind(this),p.on("accountsChanged",o)),r||(r=this.onChainChanged.bind(this),p.on("chainChanged",r)),a||(a=this.onDisconnect.bind(this),p.on("disconnect",a));let U=await this.getChainId();if(l&&U!==l){const M=await this.switchChain({chainId:l}).catch(W=>{if(W.code===ct.code)throw W;return{id:U}});U=(M==null?void 0:M.id)??U}return e&&(await((L=c.storage)==null?void 0:L.removeItem(`${this.id}.disconnected`)),t.target||await((T=c.storage)==null?void 0:T.setItem("injected.connected",!0))),{accounts:f,chainId:U}}catch(U){const M=U;throw M.code===ct.code?new ct(M):M.code===Di.code?new Di(M):M}},async disconnect(){var d,p;const l=await this.getProvider();if(!l)throw new fr;r&&(l.removeListener("chainChanged",r),r=void 0),a&&(l.removeListener("disconnect",a),a=void 0),s||(s=this.onConnect.bind(this),l.on("connect",s)),e&&(await((d=c.storage)==null?void 0:d.setItem(`${this.id}.disconnected`,!0)),t.target||await((p=c.storage)==null?void 0:p.removeItem("injected.connected")))},async getAccounts(){const l=await this.getProvider();if(!l)throw new fr;return(await l.request({method:"eth_accounts"})).map(p=>bn(p))},async getChainId(){const l=await this.getProvider();if(!l)throw new fr;const d=await l.request({method:"eth_chainId"});return Number(d)},async getProvider(){if(typeof window>"u")return;let l;const d=i();return typeof d.provider=="function"?l=d.provider(window):typeof d.provider=="string"?l=sc(window,d.provider):l=d.provider,l&&!l.removeListener&&("off"in l&&typeof l.off=="function"?l.removeListener=l.off:l.removeListener=()=>{}),l},async isAuthorized(){var l,d;try{if(e&&await((l=c.storage)==null?void 0:l.getItem(`${this.id}.disconnected`))||!t.target&&!await((d=c.storage)==null?void 0:d.getItem("injected.connected")))return!1;if(!await this.getProvider()){if(n!==void 0&&n!==!1){const _=async()=>(typeof window<"u"&&window.removeEventListener("ethereum#initialized",_),!!await this.getProvider()),$=typeof n=="number"?n:1e3;if(await Promise.race([...typeof window<"u"?[new Promise(L=>window.addEventListener("ethereum#initialized",()=>L(_()),{once:!0}))]:[],new Promise(L=>setTimeout(()=>L(_()),$))]))return!0}throw new fr}return!!(await wc(()=>sf(()=>this.getAccounts(),{timeout:100}))).length}catch{return!1}},async switchChain({chainId:l}){var f,b,_;const d=await this.getProvider();if(!d)throw new fr;const p=c.chains.find($=>$.id===l);if(!p)throw new _n(new Co);try{return await Promise.all([d.request({method:"wallet_switchEthereumChain",params:[{chainId:Fe(l)}]}),new Promise($=>{const I=L=>{console.log("[injected] switchChain.listener",{data:L,chainId:l}),Number(L)===l&&(d.removeListener("chainChanged",I),$())};d.on("chainChanged",I)})]),p}catch($){const I=$;if(I.code===4902||((b=(f=I==null?void 0:I.data)==null?void 0:f.originalError)==null?void 0:b.code)===4902)try{const{default:L,...T}=p.blockExplorers??{};let U;if(L&&(U=[L.url,...Object.values(T).map(W=>W.url)]),await d.request({method:"wallet_addEthereumChain",params:[{chainId:Fe(l),chainName:p.name,nativeCurrency:p.nativeCurrency,rpcUrls:[((_=p.rpcUrls.default)==null?void 0:_.http[0])??""],blockExplorerUrls:U}]}),await this.getChainId()!==l)throw new ct(new Error("User rejected switch after adding network."));return p}catch(L){throw new ct(L)}throw I.code===ct.code?new ct(I):new _n(I)}},async onAccountsChanged(l){var d;if(console.log("[injected] onAccountsChanged",l),l.length===0)this.onDisconnect();else if(c.emitter.listenerCount("connect")){const p=(await this.getChainId()).toString();this.onConnect({chainId:p}),e&&await((d=c.storage)==null?void 0:d.removeItem(`${this.id}.disconnected`))}else c.emitter.emit("change",{accounts:l.map(p=>bn(p))})},onChainChanged(l){console.log("[injected] onChainChanged",l);const d=Number(l);c.emitter.emit("change",{chainId:d})},async onConnect(l){const d=await this.getAccounts();if(d.length===0)return;const p=Number(l.chainId);c.emitter.emit("connect",{accounts:d,chainId:p});const f=await this.getProvider();f&&(s&&(f.removeListener("connect",s),s=void 0),o||(o=this.onAccountsChanged.bind(this),f.on("accountsChanged",o)),r||(r=this.onChainChanged.bind(this),f.on("chainChanged",r)),a||(a=this.onDisconnect.bind(this),f.on("disconnect",a)))},async onDisconnect(l){const d=await this.getProvider();l&&l.code===1013&&d&&(await this.getAccounts()).length||(c.emitter.emit("disconnect"),d&&(r&&(d.removeListener("chainChanged",r),r=void 0),a&&(d.removeListener("disconnect",a),a=void 0),s||(s=this.onConnect.bind(this),d.on("connect",s))))}})}function sc(t,e){function n(o){return typeof e=="function"?e(o):typeof e=="string"?o[e]:!0}const i=t.ethereum;if(i!=null&&i.providers)return i.providers.find(o=>n(o));if(i&&n(i))return i}const ju=256;let Ka=ju,Ja;function H2(t=11){if(!Ja||Ka+t>ju*2){Ja="",Ka=0;for(let e=0;e<ju;e++)Ja+=(256+Math.random()*256|0).toString(16).substring(1)}return Ja.substring(Ka,Ka+++t)}function V2(t){const{multiInjectedProviderDiscovery:e=!0,storage:n=D2({storage:typeof window<"u"&&window.localStorage?window.localStorage:uf}),syncConnectedChain:i=!0,ssr:o,...r}=t,s=typeof window<"u"&&e?y2():void 0,a=Zl(()=>r.chains),c=Zl(()=>[...r.connectors??[],...o?[]:(s==null?void 0:s.getProviders().map(d))??[]].map(l));function l(M){var Q;const W=O2(H2()),Z={...M({emitter:W,chains:a.getState(),storage:n}),emitter:W,uid:W.uid};return W.on("connect",T),(Q=Z.setup)==null||Q.call(Z),Z}function d(M){const{info:W}=M,Z=M.provider;return cl({target:{...W,id:W.rdns,provider:Z}})}const p=new Map;function f(M={}){const W=M.chainId??I.getState().chainId,Z=a.getState().find(g=>g.id===W);if(M.chainId&&!Z)throw new Co;{const g=p.get(I.getState().chainId);if(g&&!Z)return g;if(!Z)throw new Co}{const g=p.get(W);if(g)return g}let Q;if(r.client)Q=r.client({chain:Z});else{const g=Z.id,w=a.getState().map(P=>P.id),v={},S=Object.entries(r);for(const[P,N]of S)if(!(P==="chains"||P==="client"||P==="connectors"||P==="transports"))if(typeof N=="object")if(g in N)v[P]=N[g];else{if(w.some(E=>E in N))continue;v[P]=N}else v[P]=N;Q=rf({...v,chain:Z,batch:v.batch??{multicall:!0},transport:P=>r.transports[g]({...P,connectors:c})})}return p.set(W,Q),Q}function b(){return{chainId:a.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let _;const $="0.0.0-canary-";oc.startsWith($)?_=parseInt(oc.replace($,"")):_=parseInt(oc.split(".")[0]??"0");const I=Zl(_2(n?$2(b,{migrate(M,W){if(W===_)return M;const Z=b(),Q=M&&typeof M=="object"&&"chainId"in M&&typeof M.chainId=="number"?M.chainId:Z.chainId;return{...Z,chainId:Q}},name:"store",partialize(M){return{connections:{__type:"Map",value:Array.from(M.connections.entries()).map(([W,Z])=>{const{id:Q,name:g,type:w,uid:v}=Z.connector;return[W,{...Z,connector:{id:Q,name:g,type:w,uid:v}}]})},chainId:M.chainId,current:M.current}},skipHydration:o,storage:n,version:_}):b));i&&I.subscribe(({connections:M,current:W})=>{var Z;return W?(Z=M.get(W))==null?void 0:Z.chainId:void 0},M=>{if(a.getState().some(Z=>Z.id===M))return I.setState(Z=>({...Z,chainId:M??Z.chainId}))}),s==null||s.subscribe(M=>{const W=new Map;for(const Q of c.getState())W.set(Q.id,!0);const Z=[];for(const Q of M){const g=l(d(Q));W.has(g.id)||Z.push(g)}n&&!I.persist.hasHydrated()||c.setState(Q=>[...Q,...Z],!0)});function L(M){I.setState(W=>{const Z=W.connections.get(M.uid);return Z?{...W,connections:new Map(W.connections).set(M.uid,{accounts:M.accounts??Z.accounts,chainId:M.chainId??Z.chainId,connector:Z.connector})}:W})}function T(M){I.getState().status==="connecting"||I.getState().status==="reconnecting"||I.setState(W=>{const Z=c.getState().find(Q=>Q.uid===M.uid);return Z?(Z.emitter.listenerCount("connect")&&Z.emitter.off("connect",L),Z.emitter.listenerCount("change")||Z.emitter.on("change",L),Z.emitter.listenerCount("disconnect")||Z.emitter.on("disconnect",U),{...W,connections:new Map(W.connections).set(M.uid,{accounts:M.accounts,chainId:M.chainId,connector:Z}),current:M.uid,status:"connected"}):W})}function U(M){I.setState(W=>{const Z=W.connections.get(M.uid);if(Z){const g=Z.connector;g.emitter.listenerCount("change")&&Z.connector.emitter.off("change",L),g.emitter.listenerCount("disconnect")&&Z.connector.emitter.off("disconnect",U),g.emitter.listenerCount("connect")||Z.connector.emitter.on("connect",T)}if(W.connections.delete(M.uid),W.connections.size===0)return{...W,connections:new Map,current:null,status:"disconnected"};const Q=W.connections.values().next().value;return{...W,connections:new Map(W.connections),current:Q.connector.uid}})}return{get chains(){return a.getState()},get connectors(){return c.getState()},storage:n,getClient:f,get state(){return I.getState()},setState(M){let W;typeof M=="function"?W=M(I.getState()):W=M;const Z=b();typeof W!="object"&&(W=Z),Object.keys(Z).some(g=>!(g in W))&&(W=Z),I.setState(W,!0)},subscribe(M,W,Z){return I.subscribe(M,W,Z?{...Z,fireImmediately:Z.emitImmediately}:void 0)},_internal:{mipd:s,store:I,ssr:!!o,syncConnectedChain:i,transports:r.transports,chains:{setState(M){const W=typeof M=="function"?M(a.getState()):M;if(W.length!==0)return a.setState(W,!0)},subscribe(M){return a.subscribe(M)}},connectors:{providerDetailToConnector:d,setup:l,setState(M){return c.setState(typeof M=="function"?M(c.getState()):M,!0)},subscribe(M){return c.subscribe(M)}},events:{change:L,connect:T,disconnect:U}}}}function Bt(t,e,n){const i=t[e.name];if(typeof i=="function")return i;const o=t[n];return typeof o=="function"?o:r=>e(t,r)}async function Q0(t,e){var i;let n;if(typeof e.connector=="function"?n=t._internal.connectors.setup(e.connector):n=e.connector,n.uid===t.state.current)throw new j2;try{t.setState(s=>({...s,status:"connecting"})),n.emitter.emit("message",{type:"connecting"});const o=await n.connect({chainId:e.chainId}),r=o.accounts;return n.emitter.off("connect",t._internal.events.connect),n.emitter.on("change",t._internal.events.change),n.emitter.on("disconnect",t._internal.events.disconnect),await((i=t.storage)==null?void 0:i.setItem("recentConnectorId",n.id)),t.setState(s=>({...s,connections:new Map(s.connections).set(n.uid,{accounts:r,chainId:o.chainId,connector:n}),current:n.uid,status:"connected"})),{accounts:r,chainId:o.chainId}}catch(o){throw t.setState(r=>({...r,status:r.current?"connected":"disconnected"})),o}}async function pf(t,e={}){var o,r;let n;if(e.connector)n=e.connector;else{const{connections:s,current:a}=t.state,c=s.get(a);n=c==null?void 0:c.connector}const i=t.state.connections;n&&(await n.disconnect(),n.emitter.off("change",t._internal.events.change),n.emitter.off("disconnect",t._internal.events.disconnect),n.emitter.on("connect",t._internal.events.connect),i.delete(n.uid)),t.setState(s=>{if(i.size===0)return{...s,connections:new Map,current:null,status:"disconnected"};const a=i.values().next().value;return{...s,connections:new Map(i),current:a.connector.uid}});{const s=t.state.current;if(!s)return;const a=(o=t.state.connections.get(s))==null?void 0:o.connector;if(!a)return;await((r=t.storage)==null?void 0:r.setItem("recentConnectorId",a.id))}}async function Qo(t,e={}){let n;if(e.connector){const{connector:c}=e,[l,d]=await Promise.all([c.getAccounts(),c.getChainId()]);n={accounts:l,chainId:d,connector:c}}else n=t.state.connections.get(t.state.current);if(!n)throw new U2;const i=e.chainId??n.chainId,o=n.connector;if(o.getClient)return o.getClient({chainId:i});const r=ei(e.account??n.accounts[0]);r.address=bn(r.address);const s=t.chains.find(c=>c.id===i),a=await n.connector.getProvider({chainId:i});if(e.account&&!n.accounts.includes(r.address))throw new W2({address:r.address,connector:o});return rf({account:r,chain:s,name:"Connector Client",transport:c=>a2(a)({...c,retryCount:0})})}async function Z2(t,e){const{chainId:n,connector:i,...o}=e;let r;e.account?r=e.account:r=(await Qo(t,{account:e.account,chainId:n,connector:i})).account;const s=t.getClient({chainId:n});return Bt(s,Td,"estimateGas")({...o,account:r})}function ff(t){return typeof t=="number"?t:t==="wei"?0:Math.abs(dm[t])}function ll(t){const e=t.state.current,n=t.state.connections.get(e),i=n==null?void 0:n.accounts,o=i==null?void 0:i[0],r=t.chains.find(a=>a.id===(n==null?void 0:n.chainId)),s=t.state.status;switch(s){case"connected":return{address:o,addresses:i,chain:r,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:s};case"reconnecting":return{address:o,addresses:i,chain:r,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!!o,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:s};case"connecting":return{address:o,addresses:i,chain:r,chainId:n==null?void 0:n.chainId,connector:n==null?void 0:n.connector,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:s};case"disconnected":return{address:void 0,addresses:void 0,chain:void 0,chainId:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:s}}}async function G2(t,e){const{allowFailure:n=!0,chainId:i,contracts:o,...r}=e,s=t.getClient({chainId:i});return Bt(s,g2,"multicall")({allowFailure:n,contracts:o,...r})}function gf(t,e){const{chainId:n,...i}=e,o=t.getClient({chainId:n});return Bt(o,xo,"readContract")(i)}async function q2(t,e){const{allowFailure:n=!0,blockNumber:i,blockTag:o,...r}=e,s=e.contracts;try{const a=s.reduce((p,f,b)=>{const _=f.chainId??t.state.chainId;return{...p,[_]:[...p[_]||[],{contract:f,index:b}]}},{}),c=()=>Object.entries(a).map(([p,f])=>G2(t,{...r,allowFailure:n,blockNumber:i,blockTag:o,chainId:parseInt(p),contracts:f.map(({contract:b})=>b)})),l=(await Promise.all(c())).flat(),d=Object.values(a).flatMap(p=>p.map(({index:f})=>f));return l.reduce((p,f,b)=>(p&&(p[d[b]]=f),p),[])}catch(a){if(a instanceof Id)throw a;const c=()=>s.map(l=>gf(t,{...l,blockNumber:i,blockTag:o}));return n?(await Promise.allSettled(c())).map(l=>l.status==="fulfilled"?{result:l.value,status:"success"}:{error:l.reason,result:void 0,status:"failure"}):await Promise.all(c())}}async function mf(t,e){const{address:n,blockNumber:i,blockTag:o,chainId:r,token:s,unit:a="ether"}=e;if(s)try{return eh(t,{balanceAddress:n,chainId:r,symbolType:"string",tokenAddress:s})}catch(f){if(f instanceof Id){const b=await eh(t,{balanceAddress:n,chainId:r,symbolType:"bytes32",tokenAddress:s}),_=pp(ka(b.symbol,{dir:"right"}));return{...b,symbol:_}}throw f}const c=t.getClient({chainId:r}),d=await Bt(c,Zw,"getBalance")(i?{address:n,blockNumber:i}:{address:n,blockTag:o}),p=t.chains.find(f=>f.id===r)??c.chain;return{decimals:p.nativeCurrency.decimals,formatted:$a(d,ff(a)),symbol:p.nativeCurrency.symbol,value:d}}async function eh(t,e){const{balanceAddress:n,chainId:i,symbolType:o,tokenAddress:r,unit:s}=e,a={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:o}]}],address:r},[c,l,d]=await q2(t,{allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[n],chainId:i},{...a,functionName:"decimals",chainId:i},{...a,functionName:"symbol",chainId:i}]}),p=$a(c??"0",ff(s??l));return{decimals:l,formatted:p,symbol:d,value:c}}function Uu(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;let n,i;if(Array.isArray(t)&&Array.isArray(e)){if(n=t.length,n!==e.length)return!1;for(i=n;i--!==0;)if(!Uu(t[i],e[i]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();const o=Object.keys(t);if(n=o.length,n!==Object.keys(e).length)return!1;for(i=n;i--!==0;)if(!Object.prototype.hasOwnProperty.call(e,o[i]))return!1;for(i=n;i--!==0;){const r=o[i];if(r&&!Uu(t[r],e[r]))return!1}return!0}return t!==t&&e!==e}function Y2(t,e){const{chainId:n,...i}=e,o=t.getClient({chainId:n});return Bt(o,Hw,"getEnsAvatar")(i)}function K2(t,e){const{chainId:n,...i}=e,o=t.getClient({chainId:n});return Bt(o,Vw,"getEnsName")(i)}async function J2(t,e){const{account:n,chainId:i,connector:o,...r}=e;let s;return typeof n=="object"&&n.type==="local"?s=t.getClient({chainId:i}):s=await Qo(t,{account:n,chainId:i,connector:o}),Bt(s,Ad,"prepareTransactionRequest")({...r,...n?{account:n}:{}})}let Gl=!1;async function X2(t,e={}){var l,d;if(Gl)return[];Gl=!0,t.setState(p=>({...p,status:p.current?"reconnecting":"connecting"}));const n=[];if((l=e.connectors)!=null&&l.length)for(const p of e.connectors){let f;typeof p=="function"?f=t._internal.connectors.setup(p):f=p,n.push(f)}else n.push(...t.connectors);let i;try{i=await((d=t.storage)==null?void 0:d.getItem("recentConnectorId"))}catch{}const o={};for(const[,p]of t.state.connections)o[p.connector.id]=1;i&&(o[i]=0);const r=Object.keys(o).length>0?[...n].sort((p,f)=>(o[p.id]??10)-(o[f.id]??10)):n;let s=!1;const a=[],c=[];for(const p of r){const f=await p.getProvider();if(!f||c.some($=>$===f)||!await p.isAuthorized())continue;const _=await p.connect({isReconnecting:!0}).catch(()=>null);_&&(p.emitter.off("connect",t._internal.events.connect),p.emitter.on("change",t._internal.events.change),p.emitter.on("disconnect",t._internal.events.disconnect),t.setState($=>{const I=new Map(s?$.connections:new Map).set(p.uid,{accounts:_.accounts,chainId:_.chainId,connector:p});return{...$,current:s?$.current:p.uid,connections:I}}),a.push({accounts:_.accounts,chainId:_.chainId,connector:p}),c.push(f),s=!0)}return(t.state.status==="reconnecting"||t.state.status==="connecting")&&(s?t.setState(p=>({...p,status:"connected"})):t.setState(p=>({...p,connections:new Map,current:null,status:"disconnected"}))),Gl=!1,a}async function Q2(t,e){const{account:n,chainId:i,connector:o,gas:r,...s}=e;let a;typeof n=="object"&&n.type==="local"?a=t.getClient({chainId:i}):a=await Qo(t,{account:n,chainId:i,connector:o});const c=await(async()=>{if(r!==null)return r===void 0?Bt(a,Td,"estimateGas")({...s,account:n,chain:i?{id:i}:null}):r})();return await Bt(a,Hp,"sendTransaction")({...s,...n?{account:n}:{},gas:c,chain:i?{id:i}:null})}async function wf(t,e){const{account:n,connector:i,...o}=e;let r;return typeof n=="object"&&n.type==="local"?r=t.getClient():r=await Qo(t,{account:n,connector:i}),Bt(r,b2,"signMessage")({...o,...n?{account:n}:{}})}async function e3(t,e){const{abi:n,chainId:i,connector:o,...r}=e;let s;e.account?s=e.account:s=(await Qo(t,{chainId:i,connector:o})).account;const a=t.getClient({chainId:i}),c=Bt(a,Qw,"simulateContract"),{result:l,request:d}=await c({...r,abi:n,account:s});return{chainId:a.chain.id,result:l,request:{__mode:"prepared",...d,chainId:i}}}async function bf(t,e){var r;const{chainId:n}=e,i=t.state.connections.get(((r=e.connector)==null?void 0:r.uid)??t.state.current);if(i){const s=i.connector;if(!s.switchChain)throw new z2({connector:s});return await s.switchChain({chainId:n})}const o=t.chains.find(s=>s.id===n);if(!o)throw new Co;return t.setState(s=>({...s,chainId:n})),o}function vf(t,e){const{onChange:n}=e;return t.subscribe(()=>ll(t),n,{equalityFn(i,o){const{connector:r,...s}=i,{connector:a,...c}=o;return Uu(s,c)&&(r==null?void 0:r.id)===(a==null?void 0:a.id)&&(r==null?void 0:r.uid)===(a==null?void 0:a.uid)}})}function t3(t,e){const{onChange:n}=e;return t._internal.connectors.subscribe((i,o)=>{n(Object.values(i),o)})}async function yf(t,e){const{chainId:n,timeout:i=0,...o}=e,r=t.getClient({chainId:n}),a=await Bt(r,w2,"waitForTransactionReceipt")({...o,timeout:i});if(a.status==="reverted"){const l=await Bt(r,cf,"getTransaction")({hash:a.transactionHash}),p=await Bt(r,Pd,"call")({...l,gasPrice:l.type!=="eip1559"?l.gasPrice:void 0,maxFeePerGas:l.type==="eip1559"?l.maxFeePerGas:void 0,maxPriorityFeePerGas:l.type==="eip1559"?l.maxPriorityFeePerGas:void 0}),f=p?pp(`0x${p.substring(138)}`):"unknown reason";throw new Error(f)}return{...a,chainId:r.chain.id}}async function n3(t,e){const{account:n,chainId:i,connector:o,__mode:r,...s}=e;let a;typeof n=="object"&&n.type==="local"?a=t.getClient({chainId:i}):a=await Qo(t,{account:n,chainId:i,connector:o});let c;if(r==="prepared")c=s;else{const{request:p}=await e3(t,{...s,account:n,chainId:i});c=p}return await Bt(a,i2,"writeContract")({...c,...n?{account:n}:{},chain:i?{id:i}:null})}const xf=d2({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://cloudflare-eth.com"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xce01f8eee7E479C928F8919abD53E553a36CeF67",blockCreated:19258213},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),i3=Symbol(),th=Object.getPrototypeOf,Wu=new WeakMap,r3=t=>t&&(Wu.has(t)?Wu.get(t):th(t)===Object.prototype||th(t)===Array.prototype),o3=t=>r3(t)&&t[i3]||null,nh=(t,e=!0)=>{Wu.set(t,e)};var vc={VITE_ENV:"dev",VITE_USER_NODE_ENV:"production",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const ql=t=>typeof t=="object"&&t!==null,Si=new WeakMap,gs=new WeakSet,s3=(t=Object.is,e=(l,d)=>new Proxy(l,d),n=l=>ql(l)&&!gs.has(l)&&(Array.isArray(l)||!(Symbol.iterator in l))&&!(l instanceof WeakMap)&&!(l instanceof WeakSet)&&!(l instanceof Error)&&!(l instanceof Number)&&!(l instanceof Date)&&!(l instanceof String)&&!(l instanceof RegExp)&&!(l instanceof ArrayBuffer),i=l=>{switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:throw l}},o=new WeakMap,r=(l,d,p=i)=>{const f=o.get(l);if((f==null?void 0:f[0])===d)return f[1];const b=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l));return nh(b,!0),o.set(l,[d,b]),Reflect.ownKeys(l).forEach(_=>{if(Object.getOwnPropertyDescriptor(b,_))return;const $=Reflect.get(l,_),I={value:$,enumerable:!0,configurable:!0};if(gs.has($))nh($,!1);else if($ instanceof Promise)delete I.value,I.get=()=>p($);else if(Si.has($)){const[L,T]=Si.get($);I.value=r(L,T(),p)}Object.defineProperty(b,_,I)}),Object.preventExtensions(b)},s=new WeakMap,a=[1,1],c=l=>{if(!ql(l))throw new Error("object required");const d=s.get(l);if(d)return d;let p=a[0];const f=new Set,b=(w,v=++a[0])=>{p!==v&&(p=v,f.forEach(S=>S(w,v)))};let _=a[1];const $=(w=++a[1])=>(_!==w&&!f.size&&(_=w,L.forEach(([v])=>{const S=v[1](w);S>p&&(p=S)})),p),I=w=>(v,S)=>{const P=[...v];P[1]=[w,...P[1]],b(P,S)},L=new Map,T=(w,v)=>{if((vc?"production":void 0)!=="production"&&L.has(w))throw new Error("prop listener already exists");if(f.size){const S=v[3](I(w));L.set(w,[v,S])}else L.set(w,[v])},U=w=>{var v;const S=L.get(w);S&&(L.delete(w),(v=S[1])==null||v.call(S))},M=w=>(f.add(w),f.size===1&&L.forEach(([S,P],N)=>{if((vc?"production":void 0)!=="production"&&P)throw new Error("remove already exists");const B=S[3](I(N));L.set(N,[S,B])}),()=>{f.delete(w),f.size===0&&L.forEach(([S,P],N)=>{P&&(P(),L.set(N,[S]))})}),W=Array.isArray(l)?[]:Object.create(Object.getPrototypeOf(l)),Q=e(W,{deleteProperty(w,v){const S=Reflect.get(w,v);U(v);const P=Reflect.deleteProperty(w,v);return P&&b(["delete",[v],S]),P},set(w,v,S,P){const N=Reflect.has(w,v),B=Reflect.get(w,v,P);if(N&&(t(B,S)||s.has(S)&&t(B,s.get(S))))return!0;U(v),ql(S)&&(S=o3(S)||S);let E=S;if(S instanceof Promise)S.then(k=>{S.status="fulfilled",S.value=k,b(["resolve",[v],k])}).catch(k=>{S.status="rejected",S.reason=k,b(["reject",[v],k])});else{!Si.has(S)&&n(S)&&(E=c(S));const k=!gs.has(E)&&Si.get(E);k&&T(v,k)}return Reflect.set(w,v,E,P),b(["set",[v],S,B]),!0}});s.set(l,Q);const g=[W,$,r,M];return Si.set(Q,g),Reflect.ownKeys(l).forEach(w=>{const v=Object.getOwnPropertyDescriptor(l,w);"value"in v&&(Q[w]=l[w],delete v.value,delete v.writable),Object.defineProperty(W,w,v)}),Q})=>[c,Si,gs,t,e,n,i,o,r,s,a],[a3]=s3();function Et(t={}){return a3(t)}function qt(t,e,n){const i=Si.get(t);(vc?"production":void 0)!=="production"&&!i&&console.warn("Please use proxy object");let o;const r=[],s=i[3];let a=!1;const l=s(d=>{if(r.push(d),n){e(r.splice(0));return}o||(o=Promise.resolve().then(()=>{o=void 0,a&&e(r.splice(0))}))});return a=!0,()=>{a=!1,l()}}function Cf(t,e){const n=Si.get(t);(vc?"production":void 0)!=="production"&&!n&&console.warn("Please use proxy object");const[i,o,r]=n;return r(i,o(),e)}function _o(t){return gs.add(t),t}function en(t,e,n,i){let o=t[e];return qt(t,()=>{const r=t[e];Object.is(o,r)||n(o=r)},i)}const Yl="https://secure.walletconnect.com",_f=[{label:"Coinbase",name:"coinbase",feeRange:"1-2%",url:""}],lt={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,SECURE_SITE:Yl,SECURE_SITE_DASHBOARD:`${Yl}/dashboard`,SECURE_SITE_FAVICON:`${Yl}/images/favicon.png`,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],WC_COINBASE_PAY_SDK_CHAINS:["ethereum","arbitrum","polygon","avalanche-c-chain","optimism","celo","base"],WC_COINBASE_PAY_SDK_FALLBACK_CHAIN:"ethereum",WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP:{Ethereum:"ethereum","Arbitrum One":"arbitrum",Polygon:"polygon",Avalanche:"avalanche-c-chain","OP Mainnet":"optimism",Celo:"celo",Base:"base"},WC_COINBASE_ONRAMP_APP_ID:"bf18c88d-495a-463b-b249-0b9d3656cf5e",SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],NATIVE_TOKEN_ADDRESS:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",CONVERT_SLIPPAGE_TOLERANCE:1},re={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},checkCaipNetwork(t,e=""){return t==null?void 0:t.id.toLocaleLowerCase().includes(e.toLowerCase())},isAndroid(){const t=window.navigator.userAgent.toLowerCase();return re.isMobile()&&t.includes("android")},isIos(){const t=window.navigator.userAgent.toLowerCase();return re.isMobile()&&(t.includes("iphone")||t.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(t){return t?t-Date.now()<=lt.TEN_SEC_MS:!0},isAllowedRetry(t){return Date.now()-t>=lt.ONE_SEC_MS},copyToClopboard(t){navigator.clipboard.writeText(t)},getPairingExpiry(){return Date.now()+lt.FOUR_MINUTES_MS},getPlainAddress(t){return t.split(":")[2]},async wait(t){return new Promise(e=>{setTimeout(e,t)})},debounce(t,e=500){let n;return(...i)=>{function o(){t(...i)}n&&clearTimeout(n),n=setTimeout(o,e)}},isHttpUrl(t){return t.startsWith("http://")||t.startsWith("https://")},formatNativeUrl(t,e){if(re.isHttpUrl(t))return this.formatUniversalUrl(t,e);let n=t;n.includes("://")||(n=t.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const i=encodeURIComponent(e);return{redirect:`${n}wc?uri=${i}`,href:n}},formatUniversalUrl(t,e){if(!re.isHttpUrl(t))return this.formatNativeUrl(t,e);let n=t;n.endsWith("/")||(n=`${n}/`);const i=encodeURIComponent(e);return{redirect:`${n}wc?uri=${i}`,href:n}},openHref(t,e,n){window.open(t,e,n||"noreferrer noopener")},async preloadImage(t){const e=new Promise((n,i)=>{const o=new Image;o.onload=n,o.onerror=i,o.crossOrigin="anonymous",o.src=t});return Promise.race([e,re.wait(2e3)])},formatBalance(t,e){var i;let n;if(t==="0")n="0.000";else if(typeof t=="string"){const o=Number(t);o&&(n=(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return n?`${n} ${e??""}`:`0.000 ${e??""}`},formatBalance2(t,e){var i;let n;if(t==="0")n="0";else if(typeof t=="string"){const o=Number(t);o&&(n=(i=o.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:i[0])}return{value:n??"0",rest:n==="0"?"000":"",symbol:e}},isRestrictedRegion(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return lt.RESTRICTED_TIMEZONES.includes(e)}catch{return!1}},getApiUrl(){return re.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return re.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return re.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})},parseError(t){var e,n;return typeof t=="string"?t:typeof((n=(e=t==null?void 0:t.issues)==null?void 0:e[0])==null?void 0:n.message)=="string"?t.issues[0].message:t instanceof Error?t.message:"Unknown error"},sortRequestedNetworks(t,e=[]){const n={};return e&&t&&(t.forEach((i,o)=>{n[i]=o}),e.sort((i,o)=>{const r=n[i.id],s=n[o.id];return r!==void 0&&s!==void 0?r-s:r!==void 0?-1:s!==void 0?1:0})),e},calculateBalance(t){let e=0;for(const n of t)e+=n.value??0;return e},formatTokenBalance(t){const e=t.toFixed(2),[n,i]=e.split(".");return{dollars:n,pennies:i}},isAddress(t){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)){if(/^(?:0x)?[0-9a-f]{40}$/iu.test(t)||/^(?:0x)?[0-9A-F]{40}$/iu.test(t))return!0}else return!1;return!1}};class Bd{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,signal:n,...i}){const o=this.createUrl(i);return(await fetch(o,{method:"GET",headers:e,signal:n,cache:"no-cache"})).json()}async getBlob({headers:e,signal:n,...i}){const o=this.createUrl(i);return(await fetch(o,{method:"GET",headers:e,signal:n})).blob()}async post({body:e,headers:n,signal:i,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"POST",headers:n,body:e?JSON.stringify(e):void 0,signal:i})).json()}async put({body:e,headers:n,signal:i,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"PUT",headers:n,body:e?JSON.stringify(e):void 0,signal:i})).json()}async delete({body:e,headers:n,signal:i,...o}){const r=this.createUrl(o);return(await fetch(r,{method:"DELETE",headers:n,body:e?JSON.stringify(e):void 0,signal:i})).json()}createUrl({path:e,params:n}){const i=new URL(e,this.baseUrl);return n&&Object.entries(n).forEach(([o,r])=>{r&&i.searchParams.append(o,r)}),i}}const vt=Et({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),pe={state:vt,subscribeKey(t,e){return en(vt,t,e)},setProjectId(t){vt.projectId=t},setAllWallets(t){vt.allWallets=t},setIncludeWalletIds(t){vt.includeWalletIds=t},setExcludeWalletIds(t){vt.excludeWalletIds=t},setFeaturedWalletIds(t){vt.featuredWalletIds=t},setTokens(t){vt.tokens=t},setTermsConditionsUrl(t){vt.termsConditionsUrl=t},setPrivacyPolicyUrl(t){vt.privacyPolicyUrl=t},setCustomWallets(t){vt.customWallets=t},setIsSiweEnabled(t){vt.isSiweEnabled=t},setEnableAnalytics(t){vt.enableAnalytics=t},setSdkVersion(t){vt.sdkVersion=t},setMetadata(t){vt.metadata=t},setOnrampEnabled(t){vt.enableOnramp=t},setWalletFeaturesEnabled(t){vt.enableWalletFeatures=t}},c3={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},l3=re.getBlockchainApiUrl(),on=new Bd({baseUrl:l3}),Nt={fetchIdentity({address:t}){return on.get({path:`/v1/identity/${t}`,params:{projectId:pe.state.projectId}})},fetchTransactions({account:t,projectId:e,cursor:n,onramp:i,signal:o}){const r=n?{cursor:n}:{};return on.get({path:`/v1/account/${t}/history?projectId=${e}${i?`&onramp=${i}`:""}`,params:r,signal:o})},fetchConvertTokens({projectId:t,chainId:e}){return on.get({path:`/v1/convert/tokens?projectId=${t}&chainId=${e}`})},fetchTokenPrice({projectId:t,addresses:e}){return on.post({path:"/v1/fungible/price",body:{projectId:t,currency:"usd",addresses:e},headers:{"Content-Type":"application/json"}})},fetchConvertAllowance({projectId:t,tokenAddress:e,userAddress:n}){const{sdkType:i,sdkVersion:o}=pe.state;return on.get({path:`/v1/convert/allowance?projectId=${t}&tokenAddress=${e}&userAddress=${n}`,headers:{"Content-Type":"application/json","x-sdk-type":i,"x-sdk-version":o}})},fetchGasPrice({projectId:t,chainId:e}){const{sdkType:n,sdkVersion:i}=pe.state;return on.get({path:`/v1/convert/gas-price?projectId=${t}&chainId=${e}`,headers:{"Content-Type":"application/json","x-sdk-type":n,"x-sdk-version":i}})},generateConvertCalldata({amount:t,from:e,projectId:n,to:i,userAddress:o}){return on.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:t,eip155:{slippage:lt.CONVERT_SLIPPAGE_TOLERANCE},from:e,projectId:n,to:i,userAddress:o}})},generateApproveCalldata({from:t,projectId:e,to:n,userAddress:i}){const{sdkType:o,sdkVersion:r}=pe.state;return on.get({path:`/v1/convert/build-approve?projectId=${e}&userAddress=${i}&from=${t}&to=${n}`,headers:{"Content-Type":"application/json","x-sdk-type":o,"x-sdk-version":r}})},async getBalance(t,e){const{sdkType:n,sdkVersion:i}=pe.state;return on.get({path:`/v1/account/${t}/balance`,headers:{"x-sdk-type":n,"x-sdk-version":i},params:{currency:"usd",projectId:pe.state.projectId,chainId:e}})},async generateOnRampURL({destinationWallets:t,partnerUserId:e,defaultNetwork:n,purchaseAmount:i,paymentAmount:o}){return(await on.post({path:`/v1/generators/onrampurl?projectId=${pe.state.projectId}`,body:{destinationWallets:t,defaultNetwork:n,partnerUserId:e,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:o}})).url},async getOnrampOptions(){try{return await on.get({path:`/v1/onramp/options?projectId=${pe.state.projectId}`})}catch{return c3}},async getOnrampQuote({purchaseCurrency:t,paymentCurrency:e,amount:n,network:i}){try{return await on.post({path:`/v1/onramp/quote?projectId=${pe.state.projectId}`,body:{purchaseCurrency:t,paymentCurrency:e,amount:n,network:i}})}catch{return{coinbaseFee:{amount:n,currency:e.id},networkFee:{amount:n,currency:e.id},paymentSubtotal:{amount:n,currency:e.id},paymentTotal:{amount:n,currency:e.id},purchaseAmount:{amount:n,currency:e.id},quoteId:"mocked-quote-id"}}}},ai=Et({message:"",variant:"success",open:!1}),Me={state:ai,subscribeKey(t,e){return en(ai,t,e)},showSuccess(t){ai.message=t,ai.variant="success",ai.open=!0},showError(t){const e=re.parseError(t);ai.message=e,ai.variant="error",ai.open=!0},hide(){ai.open=!1}},Kl="WALLETCONNECT_DEEPLINK_CHOICE",ih="@w3m/recent",rh="@w3m/connected_wallet_image_url",oh="@w3m/connected_connector",ut={setWalletConnectDeepLink({href:t,name:e}){try{localStorage.setItem(Kl,JSON.stringify({href:t,name:e}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const t=localStorage.getItem(Kl);if(t)return JSON.parse(t)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(Kl)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(t){try{const e=ut.getRecentWallets();e.find(i=>i.id===t.id)||(e.unshift(t),e.length>2&&e.pop(),localStorage.setItem(ih,JSON.stringify(e)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const t=localStorage.getItem(ih);return t?JSON.parse(t):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(t){try{localStorage.setItem(rh,t)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(rh)}catch{console.info("Unable to set Connected Wallet Image Url")}},setConnectedConnector(t){try{localStorage.setItem(oh,t)}catch{console.info("Unable to set Connected Connector")}},getConnectedConnector(){try{return localStorage.getItem(oh)}catch{console.info("Unable to get Connected Connector")}}},u3=re.getAnalyticsUrl(),d3=new Bd({baseUrl:u3}),h3=["MODAL_CREATED"],ao=Et({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),me={state:ao,subscribe(t){return qt(ao,()=>t(ao))},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=pe.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _sendAnalyticsEvent(t){try{if(h3.includes(t.data.event)||typeof window>"u")return;await d3.post({path:"/e",headers:me._getApiHeaders(),body:{eventId:re.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:t.timestamp,props:t.data}})}catch{}},sendEvent(t){ao.timestamp=Date.now(),ao.data=t,pe.state.enableAnalytics&&me._sendAnalyticsEvent(ao)}},Xe=Et({transactions:[],coinbaseTransactions:{},transactionsByYear:{},loading:!1,empty:!1,next:void 0}),Tt={state:Xe,subscribe(t){return qt(Xe,()=>t(Xe))},async fetchTransactions(t,e){const{projectId:n}=pe.state;if(!n||!t)throw new Error("Transactions can't be fetched without a projectId and an accountAddress");Xe.loading=!0;try{const i=await Nt.fetchTransactions({account:t,projectId:n,cursor:Xe.next,onramp:e}),o=this.filterSpamTransactions(i.data),r=[...Xe.transactions,...o];Xe.loading=!1,e==="coinbase"?Xe.coinbaseTransactions=this.groupTransactionsByYearAndMonth(Xe.coinbaseTransactions,i.data):(Xe.transactions=r,Xe.transactionsByYear=this.groupTransactionsByYearAndMonth(Xe.transactionsByYear,o)),Xe.empty=r.length===0,Xe.next=i.next?i.next:void 0}catch{me.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:t,projectId:n,cursor:Xe.next}}),Me.showError("Failed to fetch transactions"),Xe.loading=!1,Xe.empty=!0,Xe.next=void 0}},groupTransactionsByYearAndMonth(t={},e=[]){const n=t;return e.forEach(i=>{const o=new Date(i.metadata.minedAt).getFullYear(),r=new Date(i.metadata.minedAt).getMonth(),s=n[o]??{},c=(s[r]??[]).filter(l=>l.id!==i.id);n[o]={...s,[r]:[...c,i].sort((l,d)=>new Date(d.metadata.minedAt).getTime()-new Date(l.metadata.minedAt).getTime())}}),n},filterSpamTransactions(t){return t.filter(e=>!e.transfers.every(i=>{var o;return((o=i.nft_info)==null?void 0:o.flags.is_spam)===!0}))},clearCursor(){Xe.next=void 0},resetTransactions(){Xe.transactions=[],Xe.transactionsByYear={},Xe.loading=!1,Xe.empty=!1,Xe.next=void 0}},pt=Et({wcError:!1,buffering:!1}),$e={state:pt,subscribeKey(t,e){return en(pt,t,e)},_getClient(){if(!pt._client)throw new Error("ConnectionController client not set");return pt._client},setClient(t){pt._client=_o(t)},connectWalletConnect(){pt.wcPromise=this._getClient().connectWalletConnect(t=>{pt.wcUri=t,pt.wcPairingExpiry=re.getPairingExpiry()}),ut.setConnectedConnector("WALLET_CONNECT")},async connectExternal(t){var e,n;await((n=(e=this._getClient()).connectExternal)==null?void 0:n.call(e,t)),ut.setConnectedConnector(t.type)},async signMessage(t){return this._getClient().signMessage(t)},parseUnits(t,e){return this._getClient().parseUnits(t,e)},formatUnits(t,e){return this._getClient().formatUnits(t,e)},async sendTransaction(t){return this._getClient().sendTransaction(t)},async estimateGas(t){return this._getClient().estimateGas(t)},checkInstalled(t){var e,n;return(n=(e=this._getClient()).checkInstalled)==null?void 0:n.call(e,t)},resetWcConnection(){pt.wcUri=void 0,pt.wcPairingExpiry=void 0,pt.wcPromise=void 0,pt.wcLinking=void 0,pt.recentWallet=void 0,Tt.resetTransactions(),ut.deleteWalletConnectDeepLink()},setWcLinking(t){pt.wcLinking=t},setWcError(t){pt.wcError=t,pt.buffering=!1},setRecentWallet(t){pt.recentWallet=t},setBuffering(t){pt.buffering=t},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},hs=Et({loading:!1,open:!1,selectedNetworkId:void 0}),vr={state:hs,subscribe(t){return qt(hs,()=>t(hs))},set(t){Object.assign(hs,{...hs,...t})}};var Ef={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(ud,function(){var n=1e3,i=6e4,o=36e5,r="millisecond",s="second",a="minute",c="hour",l="day",d="week",p="month",f="quarter",b="year",_="date",$="Invalid Date",I=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,L=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,T={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(B){var E=["th","st","nd","rd"],k=B%100;return"["+B+(E[(k-20)%10]||E[k]||E[0])+"]"}},U=function(B,E,k){var O=String(B);return!O||O.length>=E?B:""+Array(E+1-O.length).join(k)+B},M={s:U,z:function(B){var E=-B.utcOffset(),k=Math.abs(E),O=Math.floor(k/60),R=k%60;return(E<=0?"+":"-")+U(O,2,"0")+":"+U(R,2,"0")},m:function B(E,k){if(E.date()<k.date())return-B(k,E);var O=12*(k.year()-E.year())+(k.month()-E.month()),R=E.clone().add(O,p),F=k-R<0,Y=E.clone().add(O+(F?-1:1),p);return+(-(O+(k-R)/(F?R-Y:Y-R))||0)},a:function(B){return B<0?Math.ceil(B)||0:Math.floor(B)},p:function(B){return{M:p,y:b,w:d,d:l,D:_,h:c,m:a,s,ms:r,Q:f}[B]||String(B||"").toLowerCase().replace(/s$/,"")},u:function(B){return B===void 0}},W="en",Z={};Z[W]=T;var Q="$isDayjsObject",g=function(B){return B instanceof P||!(!B||!B[Q])},w=function B(E,k,O){var R;if(!E)return W;if(typeof E=="string"){var F=E.toLowerCase();Z[F]&&(R=F),k&&(Z[F]=k,R=F);var Y=E.split("-");if(!R&&Y.length>1)return B(Y[0])}else{var K=E.name;Z[K]=E,R=K}return!O&&R&&(W=R),R||!O&&W},v=function(B,E){if(g(B))return B.clone();var k=typeof E=="object"?E:{};return k.date=B,k.args=arguments,new P(k)},S=M;S.l=w,S.i=g,S.w=function(B,E){return v(B,{locale:E.$L,utc:E.$u,x:E.$x,$offset:E.$offset})};var P=function(){function B(k){this.$L=w(k.locale,null,!0),this.parse(k),this.$x=this.$x||k.x||{},this[Q]=!0}var E=B.prototype;return E.parse=function(k){this.$d=function(O){var R=O.date,F=O.utc;if(R===null)return new Date(NaN);if(S.u(R))return new Date;if(R instanceof Date)return new Date(R);if(typeof R=="string"&&!/Z$/i.test(R)){var Y=R.match(I);if(Y){var K=Y[2]-1||0,se=(Y[7]||"0").substring(0,3);return F?new Date(Date.UTC(Y[1],K,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,se)):new Date(Y[1],K,Y[3]||1,Y[4]||0,Y[5]||0,Y[6]||0,se)}}return new Date(R)}(k),this.init()},E.init=function(){var k=this.$d;this.$y=k.getFullYear(),this.$M=k.getMonth(),this.$D=k.getDate(),this.$W=k.getDay(),this.$H=k.getHours(),this.$m=k.getMinutes(),this.$s=k.getSeconds(),this.$ms=k.getMilliseconds()},E.$utils=function(){return S},E.isValid=function(){return this.$d.toString()!==$},E.isSame=function(k,O){var R=v(k);return this.startOf(O)<=R&&R<=this.endOf(O)},E.isAfter=function(k,O){return v(k)<this.startOf(O)},E.isBefore=function(k,O){return this.endOf(O)<v(k)},E.$g=function(k,O,R){return S.u(k)?this[O]:this.set(R,k)},E.unix=function(){return Math.floor(this.valueOf()/1e3)},E.valueOf=function(){return this.$d.getTime()},E.startOf=function(k,O){var R=this,F=!!S.u(O)||O,Y=S.p(k),K=function(Rt,it){var rt=S.w(R.$u?Date.UTC(R.$y,it,Rt):new Date(R.$y,it,Rt),R);return F?rt:rt.endOf(l)},se=function(Rt,it){return S.w(R.toDate()[Rt].apply(R.toDate("s"),(F?[0,0,0,0]:[23,59,59,999]).slice(it)),R)},Te=this.$W,Oe=this.$M,ye=this.$D,Ne="set"+(this.$u?"UTC":"");switch(Y){case b:return F?K(1,0):K(31,11);case p:return F?K(1,Oe):K(0,Oe+1);case d:var Ve=this.$locale().weekStart||0,bt=(Te<Ve?Te+7:Te)-Ve;return K(F?ye-bt:ye+(6-bt),Oe);case l:case _:return se(Ne+"Hours",0);case c:return se(Ne+"Minutes",1);case a:return se(Ne+"Seconds",2);case s:return se(Ne+"Milliseconds",3);default:return this.clone()}},E.endOf=function(k){return this.startOf(k,!1)},E.$set=function(k,O){var R,F=S.p(k),Y="set"+(this.$u?"UTC":""),K=(R={},R[l]=Y+"Date",R[_]=Y+"Date",R[p]=Y+"Month",R[b]=Y+"FullYear",R[c]=Y+"Hours",R[a]=Y+"Minutes",R[s]=Y+"Seconds",R[r]=Y+"Milliseconds",R)[F],se=F===l?this.$D+(O-this.$W):O;if(F===p||F===b){var Te=this.clone().set(_,1);Te.$d[K](se),Te.init(),this.$d=Te.set(_,Math.min(this.$D,Te.daysInMonth())).$d}else K&&this.$d[K](se);return this.init(),this},E.set=function(k,O){return this.clone().$set(k,O)},E.get=function(k){return this[S.p(k)]()},E.add=function(k,O){var R,F=this;k=Number(k);var Y=S.p(O),K=function(Oe){var ye=v(F);return S.w(ye.date(ye.date()+Math.round(Oe*k)),F)};if(Y===p)return this.set(p,this.$M+k);if(Y===b)return this.set(b,this.$y+k);if(Y===l)return K(1);if(Y===d)return K(7);var se=(R={},R[a]=i,R[c]=o,R[s]=n,R)[Y]||1,Te=this.$d.getTime()+k*se;return S.w(Te,this)},E.subtract=function(k,O){return this.add(-1*k,O)},E.format=function(k){var O=this,R=this.$locale();if(!this.isValid())return R.invalidDate||$;var F=k||"YYYY-MM-DDTHH:mm:ssZ",Y=S.z(this),K=this.$H,se=this.$m,Te=this.$M,Oe=R.weekdays,ye=R.months,Ne=R.meridiem,Ve=function(it,rt,Lt,Ye){return it&&(it[rt]||it(O,F))||Lt[rt].slice(0,Ye)},bt=function(it){return S.s(K%12||12,it,"0")},Rt=Ne||function(it,rt,Lt){var Ye=it<12?"AM":"PM";return Lt?Ye.toLowerCase():Ye};return F.replace(L,function(it,rt){return rt||function(Lt){switch(Lt){case"YY":return String(O.$y).slice(-2);case"YYYY":return S.s(O.$y,4,"0");case"M":return Te+1;case"MM":return S.s(Te+1,2,"0");case"MMM":return Ve(R.monthsShort,Te,ye,3);case"MMMM":return Ve(ye,Te);case"D":return O.$D;case"DD":return S.s(O.$D,2,"0");case"d":return String(O.$W);case"dd":return Ve(R.weekdaysMin,O.$W,Oe,2);case"ddd":return Ve(R.weekdaysShort,O.$W,Oe,3);case"dddd":return Oe[O.$W];case"H":return String(K);case"HH":return S.s(K,2,"0");case"h":return bt(1);case"hh":return bt(2);case"a":return Rt(K,se,!0);case"A":return Rt(K,se,!1);case"m":return String(se);case"mm":return S.s(se,2,"0");case"s":return String(O.$s);case"ss":return S.s(O.$s,2,"0");case"SSS":return S.s(O.$ms,3,"0");case"Z":return Y}return null}(it)||Y.replace(":","")})},E.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},E.diff=function(k,O,R){var F,Y=this,K=S.p(O),se=v(k),Te=(se.utcOffset()-this.utcOffset())*i,Oe=this-se,ye=function(){return S.m(Y,se)};switch(K){case b:F=ye()/12;break;case p:F=ye();break;case f:F=ye()/3;break;case d:F=(Oe-Te)/6048e5;break;case l:F=(Oe-Te)/864e5;break;case c:F=Oe/o;break;case a:F=Oe/i;break;case s:F=Oe/n;break;default:F=Oe}return R?F:S.a(F)},E.daysInMonth=function(){return this.endOf(p).$D},E.$locale=function(){return Z[this.$L]},E.locale=function(k,O){if(!k)return this.$L;var R=this.clone(),F=w(k,O,!0);return F&&(R.$L=F),R},E.clone=function(){return S.w(this.$d,this)},E.toDate=function(){return new Date(this.valueOf())},E.toJSON=function(){return this.isValid()?this.toISOString():null},E.toISOString=function(){return this.$d.toISOString()},E.toString=function(){return this.$d.toUTCString()},B}(),N=P.prototype;return v.prototype=N,[["$ms",r],["$s",s],["$m",a],["$H",c],["$W",l],["$M",p],["$y",b],["$D",_]].forEach(function(B){N[B[1]]=function(E){return this.$g(E,B[0],B[1])}}),v.extend=function(B,E){return B.$i||(B(E,P,v),B.$i=!0),v},v.locale=w,v.isDayjs=g,v.unix=function(B){return v(1e3*B)},v.en=Z[W],v.Ls=Z,v.p={},v})})(Ef);var p3=Ef.exports;const go=tl(p3);var Tf={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(ud,function(){return function(n,i,o){o.updateLocale=function(r,s){var a=o.Ls[r];if(a)return(s?Object.keys(s):[]).forEach(function(c){a[c]=s[c]}),a}}})})(Tf);var f3=Tf.exports;const g3=tl(f3);var kf={exports:{}};(function(t,e){(function(n,i){t.exports=i()})(ud,function(){return function(n,i,o){n=n||{};var r=i.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(l,d,p,f){return r.fromToBase(l,d,p,f)}o.en.relativeTime=s,r.fromToBase=function(l,d,p,f,b){for(var _,$,I,L=p.$locale().relativeTime||s,T=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],U=T.length,M=0;M<U;M+=1){var W=T[M];W.d&&(_=f?o(l).diff(p,W.d,!0):p.diff(l,W.d,!0));var Z=(n.rounding||Math.round)(Math.abs(_));if(I=_>0,Z<=W.r||!W.r){Z<=1&&M>0&&(W=T[M-1]);var Q=L[W.l];b&&(Z=b(""+Z)),$=typeof Q=="string"?Q.replace("%d",Z):Q(Z,d,W.l,I);break}}if(d)return $;var g=I?L.future:L.past;return typeof g=="function"?g($):g.replace("%s",$)},r.to=function(l,d){return a(l,d,this,!0)},r.from=function(l,d){return a(l,d,this)};var c=function(l){return l.$u?o.utc():o()};r.toNow=function(l){return this.to(c(this),l)},r.fromNow=function(l){return this.from(c(this),l)}}})})(kf);var m3=kf.exports;const w3=tl(m3);go.extend(w3);go.extend(g3);go.updateLocale("en",{relativeTime:{future:"in %s",past:"%s ago",s:"%s sec",m:"1 min",mm:"%d min",h:"1 hr",hh:"%d hrs",d:"1 d",dd:"%d d",M:"1 mo",MM:"%d mo",y:"1 yr",yy:"%d yr"}});const Md={getYear(t=new Date().toISOString()){return go(t).year()},getRelativeDateFromNow(t){return go(t).fromNow(!0)},formatDate(t,e="DD MMM"){return go(t).format(e)}},gr={caipNetworkIdToNumber(t){return t?Number(t.split(":")[1]):void 0}};var b3=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,Jl=Math.ceil,an=Math.floor,Ut="[BigNumber Error] ",sh=Ut+"Number primitive has more than 15 significant digits: ",mn=1e14,Ae=14,Xl=9007199254740991,Ql=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],Ai=1e7,ft=1e9;function Af(t){var e,n,i,o=T.prototype={constructor:T,toString:null,valueOf:null},r=new T(1),s=20,a=4,c=-7,l=21,d=-1e7,p=1e7,f=!1,b=1,_=0,$={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},I="0123456789abcdefghijklmnopqrstuvwxyz",L=!0;function T(g,w){var v,S,P,N,B,E,k,O,R=this;if(!(R instanceof T))return new T(g,w);if(w==null){if(g&&g._isBigNumber===!0){R.s=g.s,!g.c||g.e>p?R.c=R.e=null:g.e<d?R.c=[R.e=0]:(R.e=g.e,R.c=g.c.slice());return}if((E=typeof g=="number")&&g*0==0){if(R.s=1/g<0?(g=-g,-1):1,g===~~g){for(N=0,B=g;B>=10;B/=10,N++);N>p?R.c=R.e=null:(R.e=N,R.c=[g]);return}O=String(g)}else{if(!b3.test(O=String(g)))return i(R,O,E);R.s=O.charCodeAt(0)==45?(O=O.slice(1),-1):1}(N=O.indexOf("."))>-1&&(O=O.replace(".","")),(B=O.search(/e/i))>0?(N<0&&(N=B),N+=+O.slice(B+1),O=O.substring(0,B)):N<0&&(N=O.length)}else{if(Qe(w,2,I.length,"Base"),w==10&&L)return R=new T(g),Z(R,s+R.e+1,a);if(O=String(g),E=typeof g=="number"){if(g*0!=0)return i(R,O,E,w);if(R.s=1/g<0?(O=O.slice(1),-1):1,T.DEBUG&&O.replace(/^0\.0*|\./,"").length>15)throw Error(sh+g)}else R.s=O.charCodeAt(0)===45?(O=O.slice(1),-1):1;for(v=I.slice(0,w),N=B=0,k=O.length;B<k;B++)if(v.indexOf(S=O.charAt(B))<0){if(S=="."){if(B>N){N=k;continue}}else if(!P&&(O==O.toUpperCase()&&(O=O.toLowerCase())||O==O.toLowerCase()&&(O=O.toUpperCase()))){P=!0,B=-1,N=0;continue}return i(R,String(g),E,w)}E=!1,O=n(O,w,10,R.s),(N=O.indexOf("."))>-1?O=O.replace(".",""):N=O.length}for(B=0;O.charCodeAt(B)===48;B++);for(k=O.length;O.charCodeAt(--k)===48;);if(O=O.slice(B,++k)){if(k-=B,E&&T.DEBUG&&k>15&&(g>Xl||g!==an(g)))throw Error(sh+R.s*g);if((N=N-B-1)>p)R.c=R.e=null;else if(N<d)R.c=[R.e=0];else{if(R.e=N,R.c=[],B=(N+1)%Ae,N<0&&(B+=Ae),B<k){for(B&&R.c.push(+O.slice(0,B)),k-=Ae;B<k;)R.c.push(+O.slice(B,B+=Ae));B=Ae-(O=O.slice(B)).length}else B-=k;for(;B--;O+="0");R.c.push(+O)}}else R.c=[R.e=0]}T.clone=Af,T.ROUND_UP=0,T.ROUND_DOWN=1,T.ROUND_CEIL=2,T.ROUND_FLOOR=3,T.ROUND_HALF_UP=4,T.ROUND_HALF_DOWN=5,T.ROUND_HALF_EVEN=6,T.ROUND_HALF_CEIL=7,T.ROUND_HALF_FLOOR=8,T.EUCLID=9,T.config=T.set=function(g){var w,v;if(g!=null)if(typeof g=="object"){if(g.hasOwnProperty(w="DECIMAL_PLACES")&&(v=g[w],Qe(v,0,ft,w),s=v),g.hasOwnProperty(w="ROUNDING_MODE")&&(v=g[w],Qe(v,0,8,w),a=v),g.hasOwnProperty(w="EXPONENTIAL_AT")&&(v=g[w],v&&v.pop?(Qe(v[0],-ft,0,w),Qe(v[1],0,ft,w),c=v[0],l=v[1]):(Qe(v,-ft,ft,w),c=-(l=v<0?-v:v))),g.hasOwnProperty(w="RANGE"))if(v=g[w],v&&v.pop)Qe(v[0],-ft,-1,w),Qe(v[1],1,ft,w),d=v[0],p=v[1];else if(Qe(v,-ft,ft,w),v)d=-(p=v<0?-v:v);else throw Error(Ut+w+" cannot be zero: "+v);if(g.hasOwnProperty(w="CRYPTO"))if(v=g[w],v===!!v)if(v)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))f=v;else throw f=!v,Error(Ut+"crypto unavailable");else f=v;else throw Error(Ut+w+" not true or false: "+v);if(g.hasOwnProperty(w="MODULO_MODE")&&(v=g[w],Qe(v,0,9,w),b=v),g.hasOwnProperty(w="POW_PRECISION")&&(v=g[w],Qe(v,0,ft,w),_=v),g.hasOwnProperty(w="FORMAT"))if(v=g[w],typeof v=="object")$=v;else throw Error(Ut+w+" not an object: "+v);if(g.hasOwnProperty(w="ALPHABET"))if(v=g[w],typeof v=="string"&&!/^.?$|[+\-.\s]|(.).*\1/.test(v))L=v.slice(0,10)=="0123456789",I=v;else throw Error(Ut+w+" invalid: "+v)}else throw Error(Ut+"Object expected: "+g);return{DECIMAL_PLACES:s,ROUNDING_MODE:a,EXPONENTIAL_AT:[c,l],RANGE:[d,p],CRYPTO:f,MODULO_MODE:b,POW_PRECISION:_,FORMAT:$,ALPHABET:I}},T.isBigNumber=function(g){if(!g||g._isBigNumber!==!0)return!1;if(!T.DEBUG)return!0;var w,v,S=g.c,P=g.e,N=g.s;e:if({}.toString.call(S)=="[object Array]"){if((N===1||N===-1)&&P>=-ft&&P<=ft&&P===an(P)){if(S[0]===0){if(P===0&&S.length===1)return!0;break e}if(w=(P+1)%Ae,w<1&&(w+=Ae),String(S[0]).length==w){for(w=0;w<S.length;w++)if(v=S[w],v<0||v>=mn||v!==an(v))break e;if(v!==0)return!0}}}else if(S===null&&P===null&&(N===null||N===1||N===-1))return!0;throw Error(Ut+"Invalid BigNumber: "+g)},T.maximum=T.max=function(){return M(arguments,-1)},T.minimum=T.min=function(){return M(arguments,1)},T.random=function(){var g=9007199254740992,w=Math.random()*g&2097151?function(){return an(Math.random()*g)}:function(){return(Math.random()*1073741824|0)*8388608+(Math.random()*8388608|0)};return function(v){var S,P,N,B,E,k=0,O=[],R=new T(r);if(v==null?v=s:Qe(v,0,ft),B=Jl(v/Ae),f)if(crypto.getRandomValues){for(S=crypto.getRandomValues(new Uint32Array(B*=2));k<B;)E=S[k]*131072+(S[k+1]>>>11),E>=9e15?(P=crypto.getRandomValues(new Uint32Array(2)),S[k]=P[0],S[k+1]=P[1]):(O.push(E%1e14),k+=2);k=B/2}else if(crypto.randomBytes){for(S=crypto.randomBytes(B*=7);k<B;)E=(S[k]&31)*281474976710656+S[k+1]*1099511627776+S[k+2]*4294967296+S[k+3]*16777216+(S[k+4]<<16)+(S[k+5]<<8)+S[k+6],E>=9e15?crypto.randomBytes(7).copy(S,k):(O.push(E%1e14),k+=7);k=B/7}else throw f=!1,Error(Ut+"crypto unavailable");if(!f)for(;k<B;)E=w(),E<9e15&&(O[k++]=E%1e14);for(B=O[--k],v%=Ae,B&&v&&(E=Ql[Ae-v],O[k]=an(B/E)*E);O[k]===0;O.pop(),k--);if(k<0)O=[N=0];else{for(N=-1;O[0]===0;O.splice(0,1),N-=Ae);for(k=1,E=O[0];E>=10;E/=10,k++);k<Ae&&(N-=Ae-k)}return R.e=N,R.c=O,R}}(),T.sum=function(){for(var g=1,w=arguments,v=new T(w[0]);g<w.length;)v=v.plus(w[g++]);return v},n=function(){var g="0123456789";function w(v,S,P,N){for(var B,E=[0],k,O=0,R=v.length;O<R;){for(k=E.length;k--;E[k]*=S);for(E[0]+=N.indexOf(v.charAt(O++)),B=0;B<E.length;B++)E[B]>P-1&&(E[B+1]==null&&(E[B+1]=0),E[B+1]+=E[B]/P|0,E[B]%=P)}return E.reverse()}return function(v,S,P,N,B){var E,k,O,R,F,Y,K,se,Te=v.indexOf("."),Oe=s,ye=a;for(Te>=0&&(R=_,_=0,v=v.replace(".",""),se=new T(S),Y=se.pow(v.length-Te),_=R,se.c=w(ci(sn(Y.c),Y.e,"0"),10,P,g),se.e=se.c.length),K=w(v,S,P,B?(E=I,g):(E=g,I)),O=R=K.length;K[--R]==0;K.pop());if(!K[0])return E.charAt(0);if(Te<0?--O:(Y.c=K,Y.e=O,Y.s=N,Y=e(Y,se,Oe,ye,P),K=Y.c,F=Y.r,O=Y.e),k=O+Oe+1,Te=K[k],R=P/2,F=F||k<0||K[k+1]!=null,F=ye<4?(Te!=null||F)&&(ye==0||ye==(Y.s<0?3:2)):Te>R||Te==R&&(ye==4||F||ye==6&&K[k-1]&1||ye==(Y.s<0?8:7)),k<1||!K[0])v=F?ci(E.charAt(1),-Oe,E.charAt(0)):E.charAt(0);else{if(K.length=k,F)for(--P;++K[--k]>P;)K[k]=0,k||(++O,K=[1].concat(K));for(R=K.length;!K[--R];);for(Te=0,v="";Te<=R;v+=E.charAt(K[Te++]));v=ci(v,O,E.charAt(0))}return v}}(),e=function(){function g(S,P,N){var B,E,k,O,R=0,F=S.length,Y=P%Ai,K=P/Ai|0;for(S=S.slice();F--;)k=S[F]%Ai,O=S[F]/Ai|0,B=K*k+O*Y,E=Y*k+B%Ai*Ai+R,R=(E/N|0)+(B/Ai|0)+K*O,S[F]=E%N;return R&&(S=[R].concat(S)),S}function w(S,P,N,B){var E,k;if(N!=B)k=N>B?1:-1;else for(E=k=0;E<N;E++)if(S[E]!=P[E]){k=S[E]>P[E]?1:-1;break}return k}function v(S,P,N,B){for(var E=0;N--;)S[N]-=E,E=S[N]<P[N]?1:0,S[N]=E*B+S[N]-P[N];for(;!S[0]&&S.length>1;S.splice(0,1));}return function(S,P,N,B,E){var k,O,R,F,Y,K,se,Te,Oe,ye,Ne,Ve,bt,Rt,it,rt,Lt,Ye=S.s==P.s?1:-1,ot=S.c,Ke=P.c;if(!ot||!ot[0]||!Ke||!Ke[0])return new T(!S.s||!P.s||(ot?Ke&&ot[0]==Ke[0]:!Ke)?NaN:ot&&ot[0]==0||!Ke?Ye*0:Ye/0);for(Te=new T(Ye),Oe=Te.c=[],O=S.e-P.e,Ye=N+O+1,E||(E=mn,O=cn(S.e/Ae)-cn(P.e/Ae),Ye=Ye/Ae|0),R=0;Ke[R]==(ot[R]||0);R++);if(Ke[R]>(ot[R]||0)&&O--,Ye<0)Oe.push(1),F=!0;else{for(Rt=ot.length,rt=Ke.length,R=0,Ye+=2,Y=an(E/(Ke[0]+1)),Y>1&&(Ke=g(Ke,Y,E),ot=g(ot,Y,E),rt=Ke.length,Rt=ot.length),bt=rt,ye=ot.slice(0,rt),Ne=ye.length;Ne<rt;ye[Ne++]=0);Lt=Ke.slice(),Lt=[0].concat(Lt),it=Ke[0],Ke[1]>=E/2&&it++;do{if(Y=0,k=w(Ke,ye,rt,Ne),k<0){if(Ve=ye[0],rt!=Ne&&(Ve=Ve*E+(ye[1]||0)),Y=an(Ve/it),Y>1)for(Y>=E&&(Y=E-1),K=g(Ke,Y,E),se=K.length,Ne=ye.length;w(K,ye,se,Ne)==1;)Y--,v(K,rt<se?Lt:Ke,se,E),se=K.length,k=1;else Y==0&&(k=Y=1),K=Ke.slice(),se=K.length;if(se<Ne&&(K=[0].concat(K)),v(ye,K,Ne,E),Ne=ye.length,k==-1)for(;w(Ke,ye,rt,Ne)<1;)Y++,v(ye,rt<Ne?Lt:Ke,Ne,E),Ne=ye.length}else k===0&&(Y++,ye=[0]);Oe[R++]=Y,ye[0]?ye[Ne++]=ot[bt]||0:(ye=[ot[bt]],Ne=1)}while((bt++<Rt||ye[0]!=null)&&Ye--);F=ye[0]!=null,Oe[0]||Oe.splice(0,1)}if(E==mn){for(R=1,Ye=Oe[0];Ye>=10;Ye/=10,R++);Z(Te,N+(Te.e=R+O*Ae-1)+1,B,F)}else Te.e=O,Te.r=+F;return Te}}();function U(g,w,v,S){var P,N,B,E,k;if(v==null?v=a:Qe(v,0,8),!g.c)return g.toString();if(P=g.c[0],B=g.e,w==null)k=sn(g.c),k=S==1||S==2&&(B<=c||B>=l)?Qa(k,B):ci(k,B,"0");else if(g=Z(new T(g),w,v),N=g.e,k=sn(g.c),E=k.length,S==1||S==2&&(w<=N||N<=c)){for(;E<w;k+="0",E++);k=Qa(k,N)}else if(w-=B,k=ci(k,N,"0"),N+1>E){if(--w>0)for(k+=".";w--;k+="0");}else if(w+=N-E,w>0)for(N+1==E&&(k+=".");w--;k+="0");return g.s<0&&P?"-"+k:k}function M(g,w){for(var v,S,P=1,N=new T(g[0]);P<g.length;P++)S=new T(g[P]),(!S.s||(v=cr(N,S))===w||v===0&&N.s===w)&&(N=S);return N}function W(g,w,v){for(var S=1,P=w.length;!w[--P];w.pop());for(P=w[0];P>=10;P/=10,S++);return(v=S+v*Ae-1)>p?g.c=g.e=null:v<d?g.c=[g.e=0]:(g.e=v,g.c=w),g}i=function(){var g=/^(-?)0([xbo])(?=\w[\w.]*$)/i,w=/^([^.]+)\.$/,v=/^\.([^.]+)$/,S=/^-?(Infinity|NaN)$/,P=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(N,B,E,k){var O,R=E?B:B.replace(P,"");if(S.test(R))N.s=isNaN(R)?null:R<0?-1:1;else{if(!E&&(R=R.replace(g,function(F,Y,K){return O=(K=K.toLowerCase())=="x"?16:K=="b"?2:8,!k||k==O?Y:F}),k&&(O=k,R=R.replace(w,"$1").replace(v,"0.$1")),B!=R))return new T(R,O);if(T.DEBUG)throw Error(Ut+"Not a"+(k?" base "+k:"")+" number: "+B);N.s=null}N.c=N.e=null}}();function Z(g,w,v,S){var P,N,B,E,k,O,R,F=g.c,Y=Ql;if(F){e:{for(P=1,E=F[0];E>=10;E/=10,P++);if(N=w-P,N<0)N+=Ae,B=w,k=F[O=0],R=an(k/Y[P-B-1]%10);else if(O=Jl((N+1)/Ae),O>=F.length)if(S){for(;F.length<=O;F.push(0));k=R=0,P=1,N%=Ae,B=N-Ae+1}else break e;else{for(k=E=F[O],P=1;E>=10;E/=10,P++);N%=Ae,B=N-Ae+P,R=B<0?0:an(k/Y[P-B-1]%10)}if(S=S||w<0||F[O+1]!=null||(B<0?k:k%Y[P-B-1]),S=v<4?(R||S)&&(v==0||v==(g.s<0?3:2)):R>5||R==5&&(v==4||S||v==6&&(N>0?B>0?k/Y[P-B]:0:F[O-1])%10&1||v==(g.s<0?8:7)),w<1||!F[0])return F.length=0,S?(w-=g.e+1,F[0]=Y[(Ae-w%Ae)%Ae],g.e=-w||0):F[0]=g.e=0,g;if(N==0?(F.length=O,E=1,O--):(F.length=O+1,E=Y[Ae-N],F[O]=B>0?an(k/Y[P-B]%Y[B])*E:0),S)for(;;)if(O==0){for(N=1,B=F[0];B>=10;B/=10,N++);for(B=F[0]+=E,E=1;B>=10;B/=10,E++);N!=E&&(g.e++,F[0]==mn&&(F[0]=1));break}else{if(F[O]+=E,F[O]!=mn)break;F[O--]=0,E=1}for(N=F.length;F[--N]===0;F.pop());}g.e>p?g.c=g.e=null:g.e<d&&(g.c=[g.e=0])}return g}function Q(g){var w,v=g.e;return v===null?g.toString():(w=sn(g.c),w=v<=c||v>=l?Qa(w,v):ci(w,v,"0"),g.s<0?"-"+w:w)}return o.absoluteValue=o.abs=function(){var g=new T(this);return g.s<0&&(g.s=1),g},o.comparedTo=function(g,w){return cr(this,new T(g,w))},o.decimalPlaces=o.dp=function(g,w){var v,S,P,N=this;if(g!=null)return Qe(g,0,ft),w==null?w=a:Qe(w,0,8),Z(new T(N),g+N.e+1,w);if(!(v=N.c))return null;if(S=((P=v.length-1)-cn(this.e/Ae))*Ae,P=v[P])for(;P%10==0;P/=10,S--);return S<0&&(S=0),S},o.dividedBy=o.div=function(g,w){return e(this,new T(g,w),s,a)},o.dividedToIntegerBy=o.idiv=function(g,w){return e(this,new T(g,w),0,1)},o.exponentiatedBy=o.pow=function(g,w){var v,S,P,N,B,E,k,O,R,F=this;if(g=new T(g),g.c&&!g.isInteger())throw Error(Ut+"Exponent not an integer: "+Q(g));if(w!=null&&(w=new T(w)),E=g.e>14,!F.c||!F.c[0]||F.c[0]==1&&!F.e&&F.c.length==1||!g.c||!g.c[0])return R=new T(Math.pow(+Q(F),E?g.s*(2-Xa(g)):+Q(g))),w?R.mod(w):R;if(k=g.s<0,w){if(w.c?!w.c[0]:!w.s)return new T(NaN);S=!k&&F.isInteger()&&w.isInteger(),S&&(F=F.mod(w))}else{if(g.e>9&&(F.e>0||F.e<-1||(F.e==0?F.c[0]>1||E&&F.c[1]>=24e7:F.c[0]<8e13||E&&F.c[0]<=9999975e7)))return N=F.s<0&&Xa(g)?-0:0,F.e>-1&&(N=1/N),new T(k?1/N:N);_&&(N=Jl(_/Ae+2))}for(E?(v=new T(.5),k&&(g.s=1),O=Xa(g)):(P=Math.abs(+Q(g)),O=P%2),R=new T(r);;){if(O){if(R=R.times(F),!R.c)break;N?R.c.length>N&&(R.c.length=N):S&&(R=R.mod(w))}if(P){if(P=an(P/2),P===0)break;O=P%2}else if(g=g.times(v),Z(g,g.e+1,1),g.e>14)O=Xa(g);else{if(P=+Q(g),P===0)break;O=P%2}F=F.times(F),N?F.c&&F.c.length>N&&(F.c.length=N):S&&(F=F.mod(w))}return S?R:(k&&(R=r.div(R)),w?R.mod(w):N?Z(R,_,a,B):R)},o.integerValue=function(g){var w=new T(this);return g==null?g=a:Qe(g,0,8),Z(w,w.e+1,g)},o.isEqualTo=o.eq=function(g,w){return cr(this,new T(g,w))===0},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(g,w){return cr(this,new T(g,w))>0},o.isGreaterThanOrEqualTo=o.gte=function(g,w){return(w=cr(this,new T(g,w)))===1||w===0},o.isInteger=function(){return!!this.c&&cn(this.e/Ae)>this.c.length-2},o.isLessThan=o.lt=function(g,w){return cr(this,new T(g,w))<0},o.isLessThanOrEqualTo=o.lte=function(g,w){return(w=cr(this,new T(g,w)))===-1||w===0},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&this.c[0]==0},o.minus=function(g,w){var v,S,P,N,B=this,E=B.s;if(g=new T(g,w),w=g.s,!E||!w)return new T(NaN);if(E!=w)return g.s=-w,B.plus(g);var k=B.e/Ae,O=g.e/Ae,R=B.c,F=g.c;if(!k||!O){if(!R||!F)return R?(g.s=-w,g):new T(F?B:NaN);if(!R[0]||!F[0])return F[0]?(g.s=-w,g):new T(R[0]?B:a==3?-0:0)}if(k=cn(k),O=cn(O),R=R.slice(),E=k-O){for((N=E<0)?(E=-E,P=R):(O=k,P=F),P.reverse(),w=E;w--;P.push(0));P.reverse()}else for(S=(N=(E=R.length)<(w=F.length))?E:w,E=w=0;w<S;w++)if(R[w]!=F[w]){N=R[w]<F[w];break}if(N&&(P=R,R=F,F=P,g.s=-g.s),w=(S=F.length)-(v=R.length),w>0)for(;w--;R[v++]=0);for(w=mn-1;S>E;){if(R[--S]<F[S]){for(v=S;v&&!R[--v];R[v]=w);--R[v],R[S]+=mn}R[S]-=F[S]}for(;R[0]==0;R.splice(0,1),--O);return R[0]?W(g,R,O):(g.s=a==3?-1:1,g.c=[g.e=0],g)},o.modulo=o.mod=function(g,w){var v,S,P=this;return g=new T(g,w),!P.c||!g.s||g.c&&!g.c[0]?new T(NaN):!g.c||P.c&&!P.c[0]?new T(P):(b==9?(S=g.s,g.s=1,v=e(P,g,0,3),g.s=S,v.s*=S):v=e(P,g,0,b),g=P.minus(v.times(g)),!g.c[0]&&b==1&&(g.s=P.s),g)},o.multipliedBy=o.times=function(g,w){var v,S,P,N,B,E,k,O,R,F,Y,K,se,Te,Oe,ye=this,Ne=ye.c,Ve=(g=new T(g,w)).c;if(!Ne||!Ve||!Ne[0]||!Ve[0])return!ye.s||!g.s||Ne&&!Ne[0]&&!Ve||Ve&&!Ve[0]&&!Ne?g.c=g.e=g.s=null:(g.s*=ye.s,!Ne||!Ve?g.c=g.e=null:(g.c=[0],g.e=0)),g;for(S=cn(ye.e/Ae)+cn(g.e/Ae),g.s*=ye.s,k=Ne.length,F=Ve.length,k<F&&(se=Ne,Ne=Ve,Ve=se,P=k,k=F,F=P),P=k+F,se=[];P--;se.push(0));for(Te=mn,Oe=Ai,P=F;--P>=0;){for(v=0,Y=Ve[P]%Oe,K=Ve[P]/Oe|0,B=k,N=P+B;N>P;)O=Ne[--B]%Oe,R=Ne[B]/Oe|0,E=K*O+R*Y,O=Y*O+E%Oe*Oe+se[N]+v,v=(O/Te|0)+(E/Oe|0)+K*R,se[N--]=O%Te;se[N]=v}return v?++S:se.splice(0,1),W(g,se,S)},o.negated=function(){var g=new T(this);return g.s=-g.s||null,g},o.plus=function(g,w){var v,S=this,P=S.s;if(g=new T(g,w),w=g.s,!P||!w)return new T(NaN);if(P!=w)return g.s=-w,S.minus(g);var N=S.e/Ae,B=g.e/Ae,E=S.c,k=g.c;if(!N||!B){if(!E||!k)return new T(P/0);if(!E[0]||!k[0])return k[0]?g:new T(E[0]?S:P*0)}if(N=cn(N),B=cn(B),E=E.slice(),P=N-B){for(P>0?(B=N,v=k):(P=-P,v=E),v.reverse();P--;v.push(0));v.reverse()}for(P=E.length,w=k.length,P-w<0&&(v=k,k=E,E=v,w=P),P=0;w;)P=(E[--w]=E[w]+k[w]+P)/mn|0,E[w]=mn===E[w]?0:E[w]%mn;return P&&(E=[P].concat(E),++B),W(g,E,B)},o.precision=o.sd=function(g,w){var v,S,P,N=this;if(g!=null&&g!==!!g)return Qe(g,1,ft),w==null?w=a:Qe(w,0,8),Z(new T(N),g,w);if(!(v=N.c))return null;if(P=v.length-1,S=P*Ae+1,P=v[P]){for(;P%10==0;P/=10,S--);for(P=v[0];P>=10;P/=10,S++);}return g&&N.e+1>S&&(S=N.e+1),S},o.shiftedBy=function(g){return Qe(g,-Xl,Xl),this.times("1e"+g)},o.squareRoot=o.sqrt=function(){var g,w,v,S,P,N=this,B=N.c,E=N.s,k=N.e,O=s+4,R=new T("0.5");if(E!==1||!B||!B[0])return new T(!E||E<0&&(!B||B[0])?NaN:B?N:1/0);if(E=Math.sqrt(+Q(N)),E==0||E==1/0?(w=sn(B),(w.length+k)%2==0&&(w+="0"),E=Math.sqrt(+w),k=cn((k+1)/2)-(k<0||k%2),E==1/0?w="5e"+k:(w=E.toExponential(),w=w.slice(0,w.indexOf("e")+1)+k),v=new T(w)):v=new T(E+""),v.c[0]){for(k=v.e,E=k+O,E<3&&(E=0);;)if(P=v,v=R.times(P.plus(e(N,P,O,1))),sn(P.c).slice(0,E)===(w=sn(v.c)).slice(0,E))if(v.e<k&&--E,w=w.slice(E-3,E+1),w=="9999"||!S&&w=="4999"){if(!S&&(Z(P,P.e+s+2,0),P.times(P).eq(N))){v=P;break}O+=4,E+=4,S=1}else{(!+w||!+w.slice(1)&&w.charAt(0)=="5")&&(Z(v,v.e+s+2,1),g=!v.times(v).eq(N));break}}return Z(v,v.e+s+1,a,g)},o.toExponential=function(g,w){return g!=null&&(Qe(g,0,ft),g++),U(this,g,w,1)},o.toFixed=function(g,w){return g!=null&&(Qe(g,0,ft),g=g+this.e+1),U(this,g,w)},o.toFormat=function(g,w,v){var S,P=this;if(v==null)g!=null&&w&&typeof w=="object"?(v=w,w=null):g&&typeof g=="object"?(v=g,g=w=null):v=$;else if(typeof v!="object")throw Error(Ut+"Argument not an object: "+v);if(S=P.toFixed(g,w),P.c){var N,B=S.split("."),E=+v.groupSize,k=+v.secondaryGroupSize,O=v.groupSeparator||"",R=B[0],F=B[1],Y=P.s<0,K=Y?R.slice(1):R,se=K.length;if(k&&(N=E,E=k,k=N,se-=N),E>0&&se>0){for(N=se%E||E,R=K.substr(0,N);N<se;N+=E)R+=O+K.substr(N,E);k>0&&(R+=O+K.slice(N)),Y&&(R="-"+R)}S=F?R+(v.decimalSeparator||"")+((k=+v.fractionGroupSize)?F.replace(new RegExp("\\d{"+k+"}\\B","g"),"$&"+(v.fractionGroupSeparator||"")):F):R}return(v.prefix||"")+S+(v.suffix||"")},o.toFraction=function(g){var w,v,S,P,N,B,E,k,O,R,F,Y,K=this,se=K.c;if(g!=null&&(E=new T(g),!E.isInteger()&&(E.c||E.s!==1)||E.lt(r)))throw Error(Ut+"Argument "+(E.isInteger()?"out of range: ":"not an integer: ")+Q(E));if(!se)return new T(K);for(w=new T(r),O=v=new T(r),S=k=new T(r),Y=sn(se),N=w.e=Y.length-K.e-1,w.c[0]=Ql[(B=N%Ae)<0?Ae+B:B],g=!g||E.comparedTo(w)>0?N>0?w:O:E,B=p,p=1/0,E=new T(Y),k.c[0]=0;R=e(E,w,0,1),P=v.plus(R.times(S)),P.comparedTo(g)!=1;)v=S,S=P,O=k.plus(R.times(P=O)),k=P,w=E.minus(R.times(P=w)),E=P;return P=e(g.minus(v),S,0,1),k=k.plus(P.times(O)),v=v.plus(P.times(S)),k.s=O.s=K.s,N=N*2,F=e(O,S,N,a).minus(K).abs().comparedTo(e(k,v,N,a).minus(K).abs())<1?[O,S]:[k,v],p=B,F},o.toNumber=function(){return+Q(this)},o.toPrecision=function(g,w){return g!=null&&Qe(g,1,ft),U(this,g,w,2)},o.toString=function(g){var w,v=this,S=v.s,P=v.e;return P===null?S?(w="Infinity",S<0&&(w="-"+w)):w="NaN":(g==null?w=P<=c||P>=l?Qa(sn(v.c),P):ci(sn(v.c),P,"0"):g===10&&L?(v=Z(new T(v),s+P+1,a),w=ci(sn(v.c),v.e,"0")):(Qe(g,2,I.length,"Base"),w=n(ci(sn(v.c),P,"0"),10,g,S,!0)),S<0&&v.c[0]&&(w="-"+w)),w},o.valueOf=o.toJSON=function(){return Q(this)},o._isBigNumber=!0,o[Symbol.toStringTag]="BigNumber",o[Symbol.for("nodejs.util.inspect.custom")]=o.valueOf,t!=null&&T.set(t),T}function cn(t){var e=t|0;return t>0||t===e?e:e-1}function sn(t){for(var e,n,i=1,o=t.length,r=t[0]+"";i<o;){for(e=t[i++]+"",n=Ae-e.length;n--;e="0"+e);r+=e}for(o=r.length;r.charCodeAt(--o)===48;);return r.slice(0,o+1||1)}function cr(t,e){var n,i,o=t.c,r=e.c,s=t.s,a=e.s,c=t.e,l=e.e;if(!s||!a)return null;if(n=o&&!o[0],i=r&&!r[0],n||i)return n?i?0:-a:s;if(s!=a)return s;if(n=s<0,i=c==l,!o||!r)return i?0:!o^n?1:-1;if(!i)return c>l^n?1:-1;for(a=(c=o.length)<(l=r.length)?c:l,s=0;s<a;s++)if(o[s]!=r[s])return o[s]>r[s]^n?1:-1;return c==l?0:c>l^n?1:-1}function Qe(t,e,n,i){if(t<e||t>n||t!==an(t))throw Error(Ut+(i||"Argument")+(typeof t=="number"?t<e||t>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(t))}function Xa(t){var e=t.c.length-1;return cn(t.e/Ae)==e&&t.c[e]%2!=0}function Qa(t,e){return(t.length>1?t.charAt(0)+"."+t.slice(1):t)+(e<0?"e":"e+")+e}function ci(t,e,n){var i,o;if(e<0){for(o=n+".";++e;o+=n);t=o+t}else if(i=t.length,++e>i){for(o=n,e-=i;--e;o+=n);t+=o}else e<i&&(t=t.slice(0,e)+"."+t.slice(e));return t}var ec=Af();const Ct={bigNumber(t){return new ec(t)},multiply(t,e){if(t===void 0||e===void 0)return ec(0);const n=new ec(t),i=new ec(e);return n.multipliedBy(i)}},He=Et({supportsAllNetworks:!0,isDefaultCaipNetwork:!1,smartAccountEnabledNetworks:[]}),de={state:He,subscribe(t){return qt(He,()=>t(He))},subscribeKey(t,e){return en(He,t,e)},_getClient(){if(!He._client)throw new Error("NetworkController client not set");return He._client},setClient(t){He._client=_o(t)},setCaipNetwork(t){He.caipNetwork=t,vr.set({selectedNetworkId:t==null?void 0:t.id}),this.state.allowUnsupportedChain||this.checkIfSupportedNetwork()},setDefaultCaipNetwork(t){He.caipNetwork=t,vr.set({selectedNetworkId:t==null?void 0:t.id}),He.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(t){He.requestedCaipNetworks=t},setAllowUnsupportedChain(t){He.allowUnsupportedChain=t},setSmartAccountEnabledNetworks(t){He.smartAccountEnabledNetworks=t},getRequestedCaipNetworks(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:e}=He,n=t,i=e;return re.sortRequestedNetworks(n,i)},async getApprovedCaipNetworksData(){const t=await this._getClient().getApprovedCaipNetworksData();He.supportsAllNetworks=t.supportsAllNetworks,He.approvedCaipNetworkIds=t.approvedCaipNetworkIds},async switchActiveNetwork(t){await this._getClient().switchCaipNetwork(t),He.caipNetwork=t,t&&me.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:t.id}})},checkIfSupportedNetwork(){var t;He.isUnsupportedChain=!((t=He.requestedCaipNetworks)!=null&&t.some(e=>{var n;return e.id===((n=He.caipNetwork)==null?void 0:n.id)})),He.isUnsupportedChain&&this.showUnsupportedChainUI()},checkIfSmartAccountEnabled(){var e,n;const t=gr.caipNetworkIdToNumber((e=He.caipNetwork)==null?void 0:e.id);return t?!!((n=He.smartAccountEnabledNetworks)!=null&&n.includes(t)):!1},resetNetwork(){He.isDefaultCaipNetwork||(He.caipNetwork=void 0),He.approvedCaipNetworkIds=void 0,He.supportsAllNetworks=!0,He.smartAccountEnabledNetworks=[]},showUnsupportedChainUI(){setTimeout(()=>{Ie.open({view:"UnsupportedChain"})},300)}},ms={async getTokenList(){var n;return(await Nt.fetchConvertTokens({chainId:(n=de.state.caipNetwork)==null?void 0:n.id,projectId:pe.state.projectId})).tokens.map(i=>({...i,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))},async fetchGasPrice(){const t=pe.state.projectId,e=de.state.caipNetwork;return e?await Nt.fetchGasPrice({projectId:t,chainId:e.id}):null},async fetchConvertAllowance({tokenAddress:t,userAddress:e,sourceTokenAmount:n,sourceTokenDecimals:i}){const o=pe.state.projectId,r=await Nt.fetchConvertAllowance({projectId:o,tokenAddress:t,userAddress:e});if(r!=null&&r.allowance&&n&&i){const s=$e.parseUnits(n,i);return BigInt(r.allowance)>=s}return!1},async getMyTokensWithBalance(){const t=ne.state.address,e=de.state.caipNetwork;if(!t||!e)return[];const i=(await Nt.getBalance(t,e.id)).balances;return this.mapBalancesToConvertTokens(i)},mapBalancesToConvertTokens(t){return t.map(e=>{var n;return{symbol:e.symbol,name:e.name,address:e!=null&&e.address?e.address:`${(n=de.state.caipNetwork)==null?void 0:n.id}:${lt.NATIVE_TOKEN_ADDRESS}`,decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1,quantity:e.quantity,price:e.price,value:e.value}})}},Ge=Et({view:"Connect",history:["Connect"],transactionStack:[]}),G={state:Ge,subscribeKey(t,e){return en(Ge,t,e)},pushTransactionStack(t){Ge.transactionStack.push(t)},popTransactionStack(t){var n,i;const e=Ge.transactionStack.pop();e&&(t?(this.goBack(),(n=e==null?void 0:e.onCancel)==null||n.call(e)):(e.goBack?this.goBack():e.view&&this.reset(e.view),(i=e==null?void 0:e.onSuccess)==null||i.call(e)))},push(t,e){t!==Ge.view&&(Ge.view=t,Ge.history.push(t),Ge.data=e)},reset(t){Ge.view=t,Ge.history=[t]},replace(t,e){Ge.history.length>1&&Ge.history.at(-1)!==t&&(Ge.view=t,Ge.history[Ge.history.length-1]=t,Ge.data=e)},goBack(){if(Ge.history.length>1){Ge.history.pop();const[t]=Ge.history.slice(-1);t&&(Ge.view=t)}},goBackToIndex(t){if(Ge.history.length>1){Ge.history=Ge.history.slice(0,t+1);const[e]=Ge.history.slice(-1);e&&(Ge.view=e)}}},v3=15e4,X=Et({initialized:!1,loading:!1,loadingPrices:!1,approvalTransaction:void 0,convertTransaction:void 0,transactionError:void 0,transactionLoading:!1,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",inputError:void 0,slippage:lt.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:BigInt(0),gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0}),he={state:X,subscribe(t){return qt(X,()=>t(X))},subscribeKey(t,e){return en(X,t,e)},getParams(){var n,i,o,r,s;const{address:t}=ne.state,e=`${(n=de.state.caipNetwork)==null?void 0:n.id}:${lt.NATIVE_TOKEN_ADDRESS}`;if(!t)throw new Error("No address found to swap the tokens from.");return{networkAddress:e,fromAddress:t,fromCaipAddress:ne.state.caipAddress,sourceTokenAddress:(i=X.sourceToken)==null?void 0:i.address,toTokenAddress:(o=X.toToken)==null?void 0:o.address,toTokenAmount:X.toTokenAmount,toTokenDecimals:(r=X.toToken)==null?void 0:r.decimals,sourceTokenAmount:X.sourceTokenAmount,sourceTokenDecimals:(s=X.sourceToken)==null?void 0:s.decimals}},setLoading(t){X.loading=t},setSourceToken(t){t&&(X.sourceToken=t,this.setTokenValues(t.address,"sourceToken"))},setSourceTokenAmount(t){const{sourceTokenAddress:e}=this.getParams();X.sourceTokenAmount=t,e&&this.setTokenValues(e,"sourceToken")},setToToken(t){const{sourceTokenAddress:e,sourceTokenAmount:n}=this.getParams();if(!t){X.toTokenAmount="0",X.toTokenPriceInUSD=0;return}X.toToken=t,this.setTokenValues(t.address,"toToken"),e&&n&&this.makeChecks()},setToTokenAmount(t){const{toTokenAddress:e}=this.getParams();X.toTokenAmount=t,e&&this.setTokenValues(e,"toToken")},async setTokenValues(t,e){let n=X.tokensPriceMap[t]||0;n||(n=await this.getAddressPrice(t)),e==="sourceToken"?X.sourceTokenPriceInUSD=n:e==="toToken"&&(X.toTokenPriceInUSD=n)},switchTokens(){const t=X.toToken?{...X.toToken}:void 0,e=X.sourceToken?{...X.sourceToken}:void 0;this.setSourceToken(t),this.setToToken(e),this.setSourceTokenAmount(X.toTokenAmount||"0"),he.convertTokens()},resetTokens(){X.tokens=void 0,X.popularTokens=void 0,X.myTokensWithBalance=void 0,X.initialized=!1},resetValues(){var n;const{networkAddress:t}=this.getParams(),e=(n=X.tokens)==null?void 0:n.find(i=>i.address===t);this.setSourceToken(e),X.sourceTokenPriceInUSD=X.tokensPriceMap[t]||0,X.sourceTokenAmount="0",this.setToToken(void 0),X.gasPriceInUSD=0},clearError(){X.transactionError=void 0},async initializeState(){X.initialized||(await this.fetchTokens(),X.initialized=!0)},async fetchTokens(){var n;const{networkAddress:t}=this.getParams();await this.getTokenList(),await this.getNetworkTokenPrice(),await this.getMyTokensWithBalance();const e=(n=X.tokens)==null?void 0:n.find(i=>i.address===t);e&&this.setSourceToken(e)},async getTokenList(){const t=await ms.getTokenList();X.tokens=t,X.popularTokens=t.sort((e,n)=>e.symbol<n.symbol?-1:e.symbol>n.symbol?1:0).filter(e=>!!lt.POPULAR_TOKENS.includes(e.symbol),{}),X.suggestedTokens=t.filter(e=>!!lt.SUGGESTED_TOKENS.includes(e.symbol),{})},async getAddressPrice(t){var c,l;const e=X.tokensPriceMap[t];if(e)return e;const i=(await Nt.fetchTokenPrice({projectId:pe.state.projectId,addresses:[t]})).fungibles||[],o=[...X.tokens||[],...X.myTokensWithBalance||[]],r=(c=o==null?void 0:o.find(d=>d.address===t))==null?void 0:c.symbol,s=((l=i.find(d=>d.symbol===r))==null?void 0:l.price)||"0",a=parseFloat(s);return X.tokensPriceMap[t]=a,a},async getNetworkTokenPrice(){var o;const{networkAddress:t}=this.getParams(),n=(o=(await Nt.fetchTokenPrice({projectId:pe.state.projectId,addresses:[t]})).fungibles)==null?void 0:o[0],i=(n==null?void 0:n.price)||"0";X.tokensPriceMap[t]=parseFloat(i),X.networkPrice=i},async getMyTokensWithBalance(){const t=await ms.getMyTokensWithBalance();t&&(await this.getInitialGasPrice(),this.setBalances(t))},setBalances(t){const{networkAddress:e}=this.getParams(),n=t.find(i=>i.address===e);t.forEach(i=>{X.tokensPriceMap[i.address]=i.price||0}),X.myTokensWithBalance=t,X.networkBalanceInUSD=n?Ct.multiply(n.quantity.numeric,n.price).toString():"0"},async getInitialGasPrice(){const t=await ms.fetchGasPrice();if(!t)return;const e=t.instant,n=BigInt(e),i=BigInt(v3),o=this.calculateGasPriceInUSD(i,n);X.gasPriceInUSD=o},async refreshConvertValues(){const{fromAddress:t,toTokenDecimals:e,toTokenAddress:n}=this.getParams();if(t&&n&&e&&!X.loading){const i=await this.getTransaction();this.setTransactionDetails(i)}},calculateGasPriceInEther(t,e){const n=e*t;return Number(n)/1e18},calculateGasPriceInUSD(t,e){const n=this.calculateGasPriceInEther(t,e);return Ct.bigNumber(X.networkPrice).multipliedBy(n).toNumber()},calculatePriceImpact(t,e){const n=X.sourceTokenAmount,i=X.sourceTokenPriceInUSD,o=X.toTokenPriceInUSD;return Ct.bigNumber(n).multipliedBy(i).plus(e).dividedBy(t).minus(o).dividedBy(o).multipliedBy(100).toNumber()},calculateMaxSlippage(){const t=Ct.bigNumber(X.slippage).dividedBy(100);return Ct.multiply(X.sourceTokenAmount,t).toNumber()},async convertTokens(){const{sourceTokenAddress:t,toTokenAddress:e}=this.getParams();!t||!e||await this.makeChecks()},async makeChecks(){const{toTokenDecimals:t,toTokenAddress:e}=this.getParams();if(!t||!e)return;X.loading=!0;const n=await this.getTransaction();this.setTransactionDetails(n),X.loading=!1},async getTransaction(){const{fromCaipAddress:t,sourceTokenAddress:e,sourceTokenAmount:n,sourceTokenDecimals:i}=this.getParams();if(!t||!e||!n||parseFloat(n)===0||!i)return;const o=await ms.fetchConvertAllowance({userAddress:t,tokenAddress:e,sourceTokenAmount:n,sourceTokenDecimals:i});let r;return o?(X.approvalTransaction=void 0,r=await this.createConvert(),X.convertTransaction=r):(X.convertTransaction=void 0,r=await this.createTokenAllowance(),X.approvalTransaction=r),r},getToAmount(){const{sourceTokenDecimals:t}=this.getParams(),n=10**(t||18);return(X.sourceTokenPriceInUSD&&X.toTokenPriceInUSD&&X.sourceTokenAmount?Ct.bigNumber(X.sourceTokenAmount).multipliedBy(X.sourceTokenPriceInUSD).dividedBy(X.toTokenPriceInUSD):Ct.bigNumber(0)).multipliedBy(n).toString()},async createTokenAllowance(){const{fromCaipAddress:t,fromAddress:e,sourceTokenAddress:n,toTokenAddress:i}=this.getParams();if(!t||!i)return;if(!n)throw new Error(">>> createTokenAllowance - No source token address found.");const o=await Nt.generateApproveCalldata({projectId:pe.state.projectId,from:n,to:i,userAddress:t}),r=await $e.estimateGas({address:e,to:re.getPlainAddress(o.tx.to),data:o.tx.data}),s=this.getToAmount();return{data:o.tx.data,to:re.getPlainAddress(o.tx.from),gas:r,gasPrice:BigInt(o.tx.eip155.gasPrice),value:BigInt(o.tx.value),toAmount:s}},async sendTransactionForApproval(t){const{fromAddress:e}=this.getParams();X.transactionLoading=!0,G.pushTransactionStack({view:null,goBack:!0});try{await $e.sendTransaction({address:e,to:t.to,data:t.data,value:BigInt(t.value),gasPrice:BigInt(t.gasPrice)}),X.approvalTransaction=void 0,X.transactionLoading=!1,this.makeChecks()}catch(n){const i=n;X.transactionError=i==null?void 0:i.shortMessage,X.transactionLoading=!1}},async createConvert(){const{networkAddress:t,fromCaipAddress:e,sourceTokenAddress:n,sourceTokenDecimals:i,sourceTokenAmount:o,toTokenAddress:r}=this.getParams();if(!(!e||!o||!n||!r||!i))try{const s=$e.parseUnits(o,i).toString(),a=await Nt.generateConvertCalldata({projectId:pe.state.projectId,userAddress:e,from:n,to:r,amount:s}),c=n===t,l=this.getToAmount(),d=BigInt(a.tx.eip155.gas),p=BigInt(a.tx.eip155.gasPrice),f={data:a.tx.data,to:re.getPlainAddress(a.tx.to),gas:d,gasPrice:p,value:BigInt(c?s:"0"),toAmount:l};return X.gasPriceInUSD=this.calculateGasPriceInUSD(d,p),f}catch{return}},async sendTransactionForConvert(t){if(!t)return;const{fromAddress:e}=this.getParams();X.transactionLoading=!0,G.pushTransactionStack({view:"Account",goBack:!1,onSuccess(){he.resetValues()}});try{const n=await $e.sendTransaction({address:e,to:t.to,data:t.data,gas:t.gas,gasPrice:BigInt(t.gasPrice),value:t.value});return X.transactionLoading=!1,setTimeout(()=>{this.resetValues(),this.getMyTokensWithBalance()},1e3),n}catch(n){const i=n;X.transactionError=i==null?void 0:i.shortMessage,X.transactionLoading=!1,Me.showError((i==null?void 0:i.shortMessage)||"Transaction error");return}},getToTokenValues(t,e){const{toTokenAddress:n}=this.getParams();if(!n)return{toTokenAmount:"0",toTokenPriceInUSD:0};const i=Ct.bigNumber(t).dividedBy(10**e).toFixed(20),o=X.tokensPriceMap[n]||"0",r=Ct.bigNumber(o).toNumber();return{toTokenAmount:i,toTokenPriceInUSD:r}},isInsufficientNetworkTokenForGas(){return Ct.bigNumber(Ct.bigNumber(X.gasPriceInUSD||"0")).isGreaterThan(X.networkBalanceInUSD)},setTransactionDetails(t){const{toTokenAddress:e,toTokenDecimals:n}=this.getParams();if(!t||!e||!n)return;this.isInsufficientNetworkTokenForGas()?X.inputError="Insufficient balance":X.inputError=void 0;const{toTokenAmount:o,toTokenPriceInUSD:r}=this.getToTokenValues(t.toAmount,n);X.toTokenAmount=o,X.toTokenPriceInUSD=r,X.gasPriceInUSD=this.calculateGasPriceInUSD(t.gas,t.gasPrice),X.priceImpact=this.calculatePriceImpact(X.toTokenAmount,X.gasPriceInUSD),X.maxSlippage=this.calculateMaxSlippage()}},De=Et({isConnected:!1,currentTab:0,tokenBalance:[],smartAccountDeployed:!1}),ne={state:De,subscribe(t){return qt(De,()=>t(De))},subscribeKey(t,e){return en(De,t,e)},setIsConnected(t){De.isConnected=t},setCaipAddress(t){De.caipAddress=t,De.address=t?re.getPlainAddress(t):void 0},setBalance(t,e){De.balance=t,De.balanceSymbol=e},setProfileName(t){De.profileName=t},setProfileImage(t){De.profileImage=t},setAddressExplorerUrl(t){De.addressExplorerUrl=t},setSmartAccountDeployed(t){De.smartAccountDeployed=t},setCurrentTab(t){De.currentTab=t},setTokenBalance(t){t&&(De.tokenBalance=_o(t))},setConnectedWalletInfo(t){De.connectedWalletInfo=t},setPreferredAccountType(t){De.preferredAccountType=t},async fetchTokenBalance(){try{if(De.address){const t=await Nt.getBalance(De.address);this.setTokenBalance(t.balances),he.setBalances(ms.mapBalancesToConvertTokens(t.balances))}}catch{Me.showError("Failed to fetch token balance")}},resetAccount(){De.isConnected=!1,De.smartAccountDeployed=!1,De.currentTab=0,De.caipAddress=void 0,De.address=void 0,De.balance=void 0,De.balanceSymbol=void 0,De.profileName=void 0,De.profileImage=void 0,De.addressExplorerUrl=void 0,De.tokenBalance=[],De.connectedWalletInfo=void 0,De.preferredAccountType=void 0}},wn=Et({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),gt={state:wn,subscribeNetworkImages(t){return qt(wn.networkImages,()=>t(wn.networkImages))},subscribeKey(t,e){return en(wn,t,e)},subscribe(t){return qt(wn,()=>t(wn))},setWalletImage(t,e){wn.walletImages[t]=e},setNetworkImage(t,e){wn.networkImages[t]=e},setConnectorImage(t,e){wn.connectorImages[t]=e},setTokenImage(t,e){wn.tokenImages[t]=e},setCurrencyImage(t,e){wn.currencyImages[t]=e}},lr=Et({themeMode:"dark",themeVariables:{}}),ht={state:lr,subscribe(t){return qt(lr,()=>t(lr))},setThemeMode(t){lr.themeMode=t;try{const e=je.getEmailConnector();e&&e.provider.syncTheme({themeMode:ht.getSnapshot().themeMode})}catch{console.info("Unable to sync theme to email connector")}},setThemeVariables(t){lr.themeVariables={...lr.themeVariables,...t};try{const e=je.getEmailConnector();e&&e.provider.syncTheme({themeVariables:ht.getSnapshot().themeVariables})}catch{console.info("Unable to sync theme to email connector")}},getSnapshot(){return Cf(lr)}},$i=Et({connectors:[]}),je={state:$i,subscribeKey(t,e){return en($i,t,e)},setConnectors(t){$i.connectors=t.map(e=>_o(e))},addConnector(t){var e,n;if($i.connectors.push(_o(t)),t.id==="w3mEmail"){const i=t,o=Cf(pe.state);(n=(e=i==null?void 0:i.provider)==null?void 0:e.syncDappData)==null||n.call(e,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId}),i.provider.syncTheme({themeMode:ht.getSnapshot().themeMode,themeVariables:ht.getSnapshot().themeVariables})}},getEmailConnector(){return $i.connectors.find(t=>t.type==="EMAIL")},getAnnouncedConnectorRdns(){return $i.connectors.filter(t=>t.type==="ANNOUNCED").map(t=>{var e;return(e=t.info)==null?void 0:e.rdns})},getConnectors(){return $i.connectors},getConnector(t,e){return $i.connectors.find(n=>{var i;return n.explorerId===t||((i=n.info)==null?void 0:i.rdns)===e})}},y3=re.getApiUrl(),Pt=new Bd({baseUrl:y3}),x3="40",ah="4",yt=Et({page:1,count:0,featured:[],recommended:[],wallets:[],search:[],isAnalyticsEnabled:!1}),xe={state:yt,subscribeKey(t,e){return en(yt,t,e)},_getApiHeaders(){const{projectId:t,sdkType:e,sdkVersion:n}=pe.state;return{"x-project-id":t,"x-sdk-type":e,"x-sdk-version":n}},async _fetchWalletImage(t){const e=`${Pt.baseUrl}/getWalletImage/${t}`,n=await Pt.getBlob({path:e,headers:xe._getApiHeaders()});gt.setWalletImage(t,URL.createObjectURL(n))},async _fetchNetworkImage(t){const e=`${Pt.baseUrl}/public/getAssetImage/${t}`,n=await Pt.getBlob({path:e,headers:xe._getApiHeaders()});gt.setNetworkImage(t,URL.createObjectURL(n))},async _fetchConnectorImage(t){const e=`${Pt.baseUrl}/public/getAssetImage/${t}`,n=await Pt.getBlob({path:e,headers:xe._getApiHeaders()});gt.setConnectorImage(t,URL.createObjectURL(n))},async _fetchCurrencyImage(t){const e=`${Pt.baseUrl}/public/getCurrencyImage/${t}`,n=await Pt.getBlob({path:e,headers:xe._getApiHeaders()});gt.setCurrencyImage(t,URL.createObjectURL(n))},async _fetchTokenImage(t){const e=`${Pt.baseUrl}/public/getTokenImage/${t}`,n=await Pt.getBlob({path:e,headers:xe._getApiHeaders()});gt.setTokenImage(t,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:t}=de.state,e=t==null?void 0:t.map(({imageId:n})=>n).filter(Boolean);e&&await Promise.allSettled(e.map(n=>xe._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:t}=je.state,e=t.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(e.map(n=>xe._fetchConnectorImage(n)))},async fetchCurrencyImages(t=[]){await Promise.allSettled(t.map(e=>xe._fetchCurrencyImage(e)))},async fetchTokenImages(t=[]){await Promise.allSettled(t.map(e=>xe._fetchTokenImage(e)))},async fetchFeaturedWallets(){const{featuredWalletIds:t}=pe.state;if(t!=null&&t.length){const{data:e}=await Pt.get({path:"/getWallets",headers:xe._getApiHeaders(),params:{page:"1",entries:t!=null&&t.length?String(t.length):ah,include:t==null?void 0:t.join(",")}});e.sort((i,o)=>t.indexOf(i.id)-t.indexOf(o.id));const n=e.map(i=>i.image_id).filter(Boolean);await Promise.allSettled(n.map(i=>xe._fetchWalletImage(i))),yt.featured=e}},async fetchRecommendedWallets(){var l;const{includeWalletIds:t,excludeWalletIds:e,featuredWalletIds:n}=pe.state,i=[...e??[],...n??[]].filter(Boolean),{data:o,count:r}=await Pt.get({path:"/getWallets",headers:xe._getApiHeaders(),params:{page:"1",chains:(l=de.state.caipNetwork)==null?void 0:l.id,entries:ah,include:t==null?void 0:t.join(","),exclude:i==null?void 0:i.join(",")}}),s=ut.getRecentWallets(),a=o.map(d=>d.image_id).filter(Boolean),c=s.map(d=>d.image_id).filter(Boolean);await Promise.allSettled([...a,...c].map(d=>xe._fetchWalletImage(d))),yt.recommended=o,yt.count=r??0},async fetchWallets({page:t}){var c;const{includeWalletIds:e,excludeWalletIds:n,featuredWalletIds:i}=pe.state,o=[...yt.recommended.map(({id:l})=>l),...n??[],...i??[]].filter(Boolean),{data:r,count:s}=await Pt.get({path:"/getWallets",headers:xe._getApiHeaders(),params:{page:String(t),entries:x3,chains:(c=de.state.caipNetwork)==null?void 0:c.id,include:e==null?void 0:e.join(","),exclude:o.join(",")}}),a=r.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>xe._fetchWalletImage(l)),re.wait(300)]),yt.wallets=[...yt.wallets,...r],yt.count=s>yt.count?s:yt.count,yt.page=t},async searchWallet({search:t}){var r;const{includeWalletIds:e,excludeWalletIds:n}=pe.state;yt.search=[];const{data:i}=await Pt.get({path:"/getWallets",headers:xe._getApiHeaders(),params:{page:"1",entries:"100",search:t,chains:(r=de.state.caipNetwork)==null?void 0:r.id,include:e==null?void 0:e.join(","),exclude:n==null?void 0:n.join(",")}}),o=i.map(s=>s.image_id).filter(Boolean);await Promise.allSettled([...o.map(s=>xe._fetchWalletImage(s)),re.wait(300)]),yt.search=i},async reFetchWallets(){yt.page=1,yt.wallets=[],await xe.fetchFeaturedWallets(),await xe.fetchRecommendedWallets()},prefetch(){const t=[xe.fetchFeaturedWallets(),xe.fetchRecommendedWallets(),xe.fetchNetworkImages(),xe.fetchConnectorImages()];pe.state.enableAnalytics===void 0&&t.push(xe.fetchAnalyticsConfig()),yt.prefetchPromise=Promise.race([Promise.allSettled(t),re.wait(3e3)])},async fetchAnalyticsConfig(){const{isAnalyticsEnabled:t}=await Pt.get({path:"/getAnalyticsConfig",headers:xe._getApiHeaders()});pe.setEnableAnalytics(t)}},ur=Et({loading:!1,open:!1}),Ie={state:ur,subscribe(t){return qt(ur,()=>t(ur))},subscribeKey(t,e){return en(ur,t,e)},async open(t){await xe.state.prefetchPromise;const e=ne.state.isConnected;t!=null&&t.view?G.reset(t.view):e?G.reset("Account"):G.reset("Connect"),ur.open=!0,vr.set({open:!0}),me.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:e}})},close(){const t=ne.state.isConnected;ur.open=!1,vr.set({open:!1}),me.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}})},setLoading(t){ur.loading=t,vr.set({loading:t})}},vs={id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},zu={id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},C3={providers:_f,selectedProvider:null,error:null,purchaseCurrency:vs,paymentCurrency:zu,purchaseCurrencies:[vs],paymentCurrencies:[],quotesLoading:!1},Ue=Et(C3),We={state:Ue,subscribe(t){return qt(Ue,()=>t(Ue))},subscribeKey(t,e){return en(Ue,t,e)},setSelectedProvider(t){Ue.selectedProvider=t},setPurchaseCurrency(t){Ue.purchaseCurrency=t},setPaymentCurrency(t){Ue.paymentCurrency=t},setPurchaseAmount(t){this.state.purchaseAmount=t},setPaymentAmount(t){this.state.paymentAmount=t},async getAvailableCurrencies(){const t=await Nt.getOnrampOptions();Ue.purchaseCurrencies=t.purchaseCurrencies,Ue.paymentCurrencies=t.paymentCurrencies,Ue.paymentCurrency=t.paymentCurrencies[0]||zu,Ue.purchaseCurrency=t.purchaseCurrencies[0]||vs,await xe.fetchCurrencyImages(t.paymentCurrencies.map(e=>e.id)),await xe.fetchTokenImages(t.purchaseCurrencies.map(e=>e.symbol))},async getQuote(){var t,e;Ue.quotesLoading=!0;try{const n=await Nt.getOnrampQuote({purchaseCurrency:Ue.purchaseCurrency,paymentCurrency:Ue.paymentCurrency,amount:((t=Ue.paymentAmount)==null?void 0:t.toString())||"0",network:(e=Ue.purchaseCurrency)==null?void 0:e.symbol});return Ue.quotesLoading=!1,Ue.purchaseAmount=Number(n.purchaseAmount.amount),n}catch(n){return Ue.error=n.message,Ue.quotesLoading=!1,null}finally{Ue.quotesLoading=!1}},resetState(){Ue.providers=_f,Ue.selectedProvider=null,Ue.error=null,Ue.purchaseCurrency=vs,Ue.paymentCurrency=zu,Ue.purchaseCurrencies=[vs],Ue.paymentCurrencies=[],Ue.paymentAmount=void 0,Ue.purchaseAmount=void 0,Ue.quotesLoading=!1}},jt=Et({}),Ot={state:jt,subscribe(t){return qt(jt,()=>t(jt))},subscribeKey(t,e){return en(jt,t,e)},setToken(t){t&&(jt.token=_o(t))},setTokenAmount(t){jt.sendTokenAmount=t},setReceiverAddress(t){jt.receiverAddress=t},setReceiverProfileImageUrl(t){jt.receiverProfileImageUrl=t},setReceiverProfileName(t){jt.receiverProfileName=t},resetSend(){jt.token=void 0,jt.sendTokenAmount=void 0,jt.receiverAddress=void 0,jt.receiverProfileImageUrl=void 0,jt.receiverProfileName=void 0}},ze={getWalletImage(t){if(t!=null&&t.image_url)return t==null?void 0:t.image_url;if(t!=null&&t.image_id)return gt.state.walletImages[t.image_id]},getNetworkImage(t){if(t!=null&&t.imageUrl)return t==null?void 0:t.imageUrl;if(t!=null&&t.imageId)return gt.state.networkImages[t.imageId]},getConnectorImage(t){if(t!=null&&t.imageUrl)return t.imageUrl;if(t!=null&&t.imageId)return gt.state.connectorImages[t.imageId]}},Dd={goBackOrCloseModal(){G.state.history.length>1?G.goBack():Ie.close()},navigateAfterNetworkSwitch(){const{history:t}=G.state,e=t.findIndex(n=>n==="Networks");e>=1?G.goBackToIndex(e-1):Ie.close()}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ac=globalThis,Ld=ac.ShadowRoot&&(ac.ShadyCSS===void 0||ac.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jd=Symbol(),ch=new WeakMap;let $f=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==jd)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(Ld&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=ch.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ch.set(n,e))}return e}toString(){return this.cssText}};const jn=t=>new $f(typeof t=="string"?t:t+"",void 0,jd),ie=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new $f(n,t,jd)},_3=(t,e)=>{if(Ld)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),o=ac.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,t.appendChild(i)}},lh=Ld?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return jn(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:E3,defineProperty:T3,getOwnPropertyDescriptor:k3,getOwnPropertyNames:A3,getOwnPropertySymbols:$3,getPrototypeOf:S3}=Object,Li=globalThis,uh=Li.trustedTypes,I3=uh?uh.emptyScript:"",eu=Li.reactiveElementPolyfillSupport,ys=(t,e)=>t,yc={toAttribute(t,e){switch(e){case Boolean:t=t?I3:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},Ud=(t,e)=>!E3(t,e),dh={attribute:!0,type:String,converter:yc,reflect:!1,hasChanged:Ud};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Li.litPropertyMetadata??(Li.litPropertyMetadata=new WeakMap);let lo=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=dh){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,n);o!==void 0&&T3(this.prototype,e,o)}}static getPropertyDescriptor(e,n,i){const{get:o,set:r}=k3(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??dh}static _$Ei(){if(this.hasOwnProperty(ys("elementProperties")))return;const e=S3(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ys("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ys("properties"))){const n=this.properties,i=[...A3(n),...$3(n)];for(const o of i)this.createProperty(o,n[o])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,o]of n)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const o=this._$Eu(n,i);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)n.unshift(lh(o))}else e!==void 0&&n.push(lh(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _3(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EC(e,n){var r;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:yc).toAttribute(n,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,n){var r;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:yc;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Ud)(this[e],n))return;this.P(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,i){this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(n)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}};lo.elementStyles=[],lo.shadowRootOptions={mode:"open"},lo[ys("elementProperties")]=new Map,lo[ys("finalized")]=new Map,eu==null||eu({ReactiveElement:lo}),(Li.reactiveElementVersions??(Li.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs=globalThis,xc=xs.trustedTypes,hh=xc?xc.createPolicy("lit-html",{createHTML:t=>t}):void 0,Sf="$lit$",Ri=`lit$${Math.random().toFixed(9).slice(2)}$`,If="?"+Ri,R3=`<${If}>`,_r=document,Zs=()=>_r.createComment(""),Gs=t=>t===null||typeof t!="object"&&typeof t!="function",Rf=Array.isArray,P3=t=>Rf(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",tu=`[ 	
\f\r]`,ps=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ph=/-->/g,fh=/>/g,dr=RegExp(`>|${tu}(?:([^\\s"'>=/]+)(${tu}*=${tu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gh=/'/g,mh=/"/g,Pf=/^(?:script|style|textarea|title)$/i,Of=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),z=Of(1),J=Of(2),Er=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),wh=new WeakMap,mr=_r.createTreeWalker(_r,129);function Nf(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return hh!==void 0?hh.createHTML(e):e}const O3=(t,e)=>{const n=t.length-1,i=[];let o,r=e===2?"<svg>":"",s=ps;for(let a=0;a<n;a++){const c=t[a];let l,d,p=-1,f=0;for(;f<c.length&&(s.lastIndex=f,d=s.exec(c),d!==null);)f=s.lastIndex,s===ps?d[1]==="!--"?s=ph:d[1]!==void 0?s=fh:d[2]!==void 0?(Pf.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=dr):d[3]!==void 0&&(s=dr):s===dr?d[0]===">"?(s=o??ps,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?dr:d[3]==='"'?mh:gh):s===mh||s===gh?s=dr:s===ph||s===fh?s=ps:(s=dr,o=void 0);const b=s===dr&&t[a+1].startsWith("/>")?" ":"";r+=s===ps?c+R3:p>=0?(i.push(l),c.slice(0,p)+Sf+c.slice(p)+Ri+b):c+Ri+(p===-2?a:b)}return[Nf(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};let Fu=class Bf{constructor({strings:e,_$litType$:n},i){let o;this.parts=[];let r=0,s=0;const a=e.length-1,c=this.parts,[l,d]=O3(e,n);if(this.el=Bf.createElement(l,i),mr.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=mr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(Sf)){const f=d[s++],b=o.getAttribute(p).split(Ri),_=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:_[2],strings:b,ctor:_[1]==="."?B3:_[1]==="?"?M3:_[1]==="@"?D3:ul}),o.removeAttribute(p)}else p.startsWith(Ri)&&(c.push({type:6,index:r}),o.removeAttribute(p));if(Pf.test(o.tagName)){const p=o.textContent.split(Ri),f=p.length-1;if(f>0){o.textContent=xc?xc.emptyScript:"";for(let b=0;b<f;b++)o.append(p[b],Zs()),mr.nextNode(),c.push({type:2,index:++r});o.append(p[f],Zs())}}}else if(o.nodeType===8)if(o.data===If)c.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(Ri,p+1))!==-1;)c.push({type:7,index:r}),p+=Ri.length-1}r++}}static createElement(e,n){const i=_r.createElement("template");return i.innerHTML=e,i}};function Eo(t,e,n=t,i){var s,a;if(e===Er)return e;let o=i!==void 0?(s=n._$Co)==null?void 0:s[i]:n._$Cl;const r=Gs(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=o:n._$Cl=o),o!==void 0&&(e=Eo(t,o._$AS(t,e.values),o,i)),e}let N3=class{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??_r).importNode(n,!0);mr.currentNode=o;let r=mr.nextNode(),s=0,a=0,c=i[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new Wd(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new L3(r,this,e)),this._$AV.push(l),c=i[++a]}s!==(c==null?void 0:c.index)&&(r=mr.nextNode(),s++)}return mr.currentNode=_r,o}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}},Wd=class Mf{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,o){this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Eo(this,e,n),Gs(e)?e===st||e==null||e===""?(this._$AH!==st&&this._$AR(),this._$AH=st):e!==this._$AH&&e!==Er&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):P3(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==st&&Gs(this._$AH)?this._$AA.nextSibling.data=e:this.T(_r.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Fu.createElement(Nf(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new N3(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=wh.get(e.strings);return n===void 0&&wh.set(e.strings,n=new Fu(e)),n}k(e){Rf(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of e)o===n.length?n.push(i=new Mf(this.S(Zs()),this.S(Zs()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}},ul=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,o,r){this.type=1,this._$AH=st,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=st}_$AI(e,n=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Eo(this,e,n,0),s=!Gs(e)||e!==this._$AH&&e!==Er,s&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Eo(this,a[i+c],n,c),l===Er&&(l=this._$AH[c]),s||(s=!Gs(l)||l!==this._$AH[c]),l===st?e=st:e!==st&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},B3=class extends ul{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===st?void 0:e}},M3=class extends ul{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==st)}},D3=class extends ul{constructor(e,n,i,o,r){super(e,n,i,o,r),this.type=5}_$AI(e,n=this){if((e=Eo(this,e,n,0)??st)===Er)return;const i=this._$AH,o=e===st&&i!==st||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==st&&(i===st||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}},L3=class{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Eo(this,e)}};const nu=xs.litHtmlPolyfillSupport;nu==null||nu(Fu,Wd),(xs.litHtmlVersions??(xs.litHtmlVersions=[])).push("3.1.3");const j3=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const r=(n==null?void 0:n.renderBefore)??null;i._$litPart$=o=new Wd(e.insertBefore(Zs(),r),r,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let oe=class extends lo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=j3(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Er}};var ap;oe._$litElement$=!0,oe.finalized=!0,(ap=globalThis.litElementHydrateSupport)==null||ap.call(globalThis,{LitElement:oe});const iu=globalThis.litElementPolyfillSupport;iu==null||iu({LitElement:oe});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const Df=J`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4189">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M138.008 0H40C21.1438 0 11.7157 0 5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H189.992C189.958 4.89122 189.786 7.76279 188.914 10.1564C187.095 15.1562 183.156 19.0947 178.156 20.9145C175.174 22 171.449 22 164 22C156.551 22 152.826 22 149.844 20.9145C144.844 19.0947 140.905 15.1562 139.086 10.1564C138.214 7.76279 138.042 4.89122 138.008 0Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 0L139.008 -0.00694413L139.001 -1H138.008V0ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM189.992 0V-1H188.999L188.992 -0.00694413L189.992 0ZM188.914 10.1564L189.854 10.4984V10.4984L188.914 10.1564ZM178.156 20.9145L177.814 19.9748V19.9748L178.156 20.9145ZM149.844 20.9145L150.186 19.9748V19.9748L149.844 20.9145ZM139.086 10.1564L138.146 10.4984V10.4984L139.086 10.1564ZM40 1H138.008V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM288 99H40V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM189.992 1H288V-1H189.992V1ZM188.992 -0.00694413C188.958 4.90792 188.778 7.60788 187.975 9.81434L189.854 10.4984C190.793 7.9177 190.958 4.87452 190.992 0.00694413L188.992 -0.00694413ZM187.975 9.81434C186.256 14.5364 182.536 18.2561 177.814 19.9748L178.498 21.8542C183.776 19.9333 187.933 15.7759 189.854 10.4984L187.975 9.81434ZM177.814 19.9748C175.039 20.9848 171.536 21 164 21V23C171.362 23 175.308 23.0152 178.498 21.8542L177.814 19.9748ZM164 21C156.464 21 152.961 20.9848 150.186 19.9748L149.502 21.8542C152.692 23.0152 156.638 23 164 23V21ZM150.186 19.9748C145.464 18.2561 141.744 14.5364 140.025 9.81434L138.146 10.4984C140.067 15.7759 144.224 19.9333 149.502 21.8542L150.186 19.9748ZM140.025 9.81434C139.222 7.60788 139.042 4.90792 139.008 -0.00694413L137.008 0.00694413C137.042 4.87452 137.207 7.9177 138.146 10.4984L140.025 9.81434Z"
    mask="url(#path-1-inside-1_18299_4189)"
  />
</svg>`,Lf=J`<svg class="input_mask" width="328" height="100" viewBox="0 0 328 100" fill="none">
  <mask id="path-1-inside-1_18299_4168">
    <path
      class="input_mask__border"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
    />
  </mask>
  <path
    class="input_mask__background"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.85786 5.85786C0 11.7157 0 21.1438 0 40V60C0 78.8562 0 88.2843 5.85786 94.1421C11.7157 100 21.1438 100 40 100H138.008C138.042 95.1088 138.214 92.2372 139.086 89.8436C140.905 84.8438 144.844 80.9053 149.844 79.0855C152.826 78 156.551 78 164 78C171.449 78 175.174 78 178.156 79.0855C183.156 80.9053 187.095 84.8438 188.914 89.8436C189.786 92.2372 189.958 95.1088 189.992 100H288C306.856 100 316.284 100 322.142 94.1421C328 88.2843 328 78.8562 328 60V40C328 21.1438 328 11.7157 322.142 5.85786C316.284 0 306.856 0 288 0H40C21.1438 0 11.7157 0 5.85786 5.85786Z"
  />
  <path
    class="input_mask__border"
    d="M138.008 100V101H139.001L139.008 100.007L138.008 100ZM139.086 89.8436L138.146 89.5016L139.086 89.8436ZM149.844 79.0855L150.186 80.0252L149.844 79.0855ZM178.156 79.0855L177.814 80.0252L178.156 79.0855ZM188.914 89.8436L189.854 89.5016L188.914 89.8436ZM189.992 100L188.992 100.007L188.999 101H189.992V100ZM322.142 94.1421L322.849 94.8492H322.849L322.142 94.1421ZM322.142 5.85786L322.849 5.15076L322.849 5.15076L322.142 5.85786ZM1 40C1 30.5436 1.00212 23.552 1.72332 18.1878C2.44064 12.8524 3.85281 9.27713 6.56497 6.56497L5.15076 5.15076C2.00506 8.29646 0.488292 12.3641 -0.25885 17.9213C-1.00212 23.4497 -1 30.6002 -1 40H1ZM1 60V40H-1V60H1ZM6.56497 93.435C3.85281 90.7229 2.44064 87.1476 1.72332 81.8122C1.00212 76.448 1 69.4564 1 60H-1C-1 69.3998 -1.00212 76.5503 -0.25885 82.0787C0.488292 87.6358 2.00506 91.7035 5.15076 94.8492L6.56497 93.435ZM40 99C30.5436 99 23.552 98.9979 18.1878 98.2767C12.8524 97.5594 9.27713 96.1472 6.56497 93.435L5.15076 94.8492C8.29646 97.9949 12.3641 99.5117 17.9213 100.259C23.4497 101.002 30.6002 101 40 101V99ZM138.008 99H40V101H138.008V99ZM139.008 100.007C139.042 95.0921 139.222 92.3921 140.025 90.1857L138.146 89.5016C137.207 92.0823 137.042 95.1255 137.008 99.9931L139.008 100.007ZM140.025 90.1857C141.744 85.4636 145.464 81.7439 150.186 80.0252L149.502 78.1458C144.224 80.0667 140.067 84.2241 138.146 89.5016L140.025 90.1857ZM150.186 80.0252C152.961 79.0152 156.464 79 164 79V77C156.638 77 152.692 76.9848 149.502 78.1458L150.186 80.0252ZM164 79C171.536 79 175.039 79.0152 177.814 80.0252L178.498 78.1458C175.308 76.9848 171.362 77 164 77V79ZM177.814 80.0252C182.536 81.7439 186.256 85.4636 187.975 90.1857L189.854 89.5016C187.933 84.2241 183.776 80.0667 178.498 78.1458L177.814 80.0252ZM187.975 90.1857C188.778 92.3921 188.958 95.0921 188.992 100.007L190.992 99.9931C190.958 95.1255 190.793 92.0823 189.854 89.5016L187.975 90.1857ZM288 99H189.992V101H288V99ZM321.435 93.435C318.723 96.1472 315.148 97.5594 309.812 98.2767C304.448 98.9979 297.456 99 288 99V101C297.4 101 304.55 101.002 310.079 100.259C315.636 99.5117 319.704 97.9949 322.849 94.8492L321.435 93.435ZM327 60C327 69.4564 326.998 76.448 326.277 81.8122C325.559 87.1476 324.147 90.7229 321.435 93.435L322.849 94.8492C325.995 91.7035 327.512 87.6358 328.259 82.0787C329.002 76.5503 329 69.3998 329 60H327ZM327 40V60H329V40H327ZM321.435 6.56497C324.147 9.27713 325.559 12.8524 326.277 18.1878C326.998 23.552 327 30.5436 327 40H329C329 30.6002 329.002 23.4497 328.259 17.9213C327.512 12.3642 325.995 8.29646 322.849 5.15076L321.435 6.56497ZM288 1C297.456 1 304.448 1.00212 309.812 1.72332C315.148 2.44064 318.723 3.85281 321.435 6.56497L322.849 5.15076C319.704 2.00506 315.636 0.488292 310.079 -0.25885C304.55 -1.00212 297.4 -1 288 -1V1ZM40 1H288V-1H40V1ZM6.56497 6.56497C9.27713 3.85281 12.8524 2.44064 18.1878 1.72332C23.552 1.00212 30.5436 1 40 1V-1C30.6002 -1 23.4497 -1.00212 17.9213 -0.25885C12.3641 0.488292 8.29646 2.00506 5.15076 5.15076L6.56497 6.56497Z"
    mask="url(#path-1-inside-1_18299_4168)"
  />
</svg>`;let Cs,ji,Ui;function jf(t,e){Cs=document.createElement("style"),ji=document.createElement("style"),Ui=document.createElement("style"),Cs.textContent=mo(t).core.cssText,ji.textContent=mo(t).dark.cssText,Ui.textContent=mo(t).light.cssText,document.head.appendChild(Cs),document.head.appendChild(ji),document.head.appendChild(Ui),zd(e)}function zd(t){ji&&Ui&&(t==="light"?(ji.removeAttribute("media"),Ui.media="enabled"):(Ui.removeAttribute("media"),ji.media="enabled"))}function Uf(t){Cs&&ji&&Ui&&(Cs.textContent=mo(t).core.cssText,ji.textContent=mo(t).dark.cssText,Ui.textContent=mo(t).light.cssText)}function mo(t){return{core:ie`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
      :root {
        --w3m-color-mix-strength: ${jn(t!=null&&t["--w3m-color-mix-strength"]?`${t["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${jn((t==null?void 0:t["--w3m-font-family"])||"Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;")};
        --w3m-font-size-master: ${jn((t==null?void 0:t["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${jn((t==null?void 0:t["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${jn((t==null?void 0:t["--w3m-z-index"])||999)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-mini: calc(var(--w3m-font-size-master) * 0.8);
        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-medium: calc(var(--w3m-font-size-master) * 1.8);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);
        --wui-font-size-medium-title: calc(var(--w3m-font-size-master) * 2.4);
        --wui-font-size-2xl: calc(var(--w3m-font-size-master) * 4);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-2xl: -1.6px;
        --wui-letter-spacing-medium-title: -0.96px;
        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-medium: -0.72px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;
        --wui-letter-spacing-mini: -0.16px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-visual-size-size-inherit: inherit;
        --wui-visual-size-sm: 40px;
        --wui-visual-size-md: 55px;
        --wui-visual-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network-sm: path(
          'M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z'
        );

        --wui-path-network-md: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-width-network-sm: 36px;
        --wui-width-network-md: 48px;
        --wui-width-network-lg: 86px;

        --wui-height-network-sm: 40px;
        --wui-height-network-md: 54px;
        --wui-height-network-lg: 96px;

        --wui-icon-size-network-xs: 12px;
        --wui-icon-size-network-sm: 16px;
        --wui-icon-size-network-md: 24px;
        --wui-icon-size-network-lg: 42px;

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(20, 20, 20, 0.8);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:ie`
      :root {
        --w3m-color-mix: ${jn((t==null?void 0:t["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${jn((t==null?void 0:t["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-success-glass-001: rgba(38, 217, 98, 0.01);
        --wui-success-glass-002: rgba(38, 217, 98, 0.02);
        --wui-success-glass-005: rgba(38, 217, 98, 0.05);
        --wui-success-glass-010: rgba(38, 217, 98, 0.1);
        --wui-success-glass-015: rgba(38, 217, 98, 0.15);
        --wui-success-glass-020: rgba(38, 217, 98, 0.2);
        --wui-success-glass-025: rgba(38, 217, 98, 0.25);
        --wui-success-glass-030: rgba(38, 217, 98, 0.3);
        --wui-success-glass-060: rgba(38, 217, 98, 0.6);
        --wui-success-glass-080: rgba(38, 217, 98, 0.8);

        --wui-error-glass-001: rgba(242, 90, 103, 0.01);
        --wui-error-glass-002: rgba(242, 90, 103, 0.02);
        --wui-error-glass-005: rgba(242, 90, 103, 0.05);
        --wui-error-glass-010: rgba(242, 90, 103, 0.1);
        --wui-error-glass-015: rgba(242, 90, 103, 0.15);
        --wui-error-glass-020: rgba(242, 90, 103, 0.2);
        --wui-error-glass-025: rgba(242, 90, 103, 0.25);
        --wui-error-glass-030: rgba(242, 90, 103, 0.3);
        --wui-error-glass-060: rgba(242, 90, 103, 0.6);
        --wui-error-glass-080: rgba(242, 90, 103, 0.8);

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
        --wui-gray-glass-090: rgba(255, 255, 255, 0.9);
      }
    `,dark:ie`
      :root {
        --w3m-color-mix: ${jn((t==null?void 0:t["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${jn((t==null?void 0:t["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-success-glass-001: rgba(38, 181, 98, 0.01);
        --wui-success-glass-002: rgba(38, 181, 98, 0.02);
        --wui-success-glass-005: rgba(38, 181, 98, 0.05);
        --wui-success-glass-010: rgba(38, 181, 98, 0.1);
        --wui-success-glass-015: rgba(38, 181, 98, 0.15);
        --wui-success-glass-020: rgba(38, 181, 98, 0.2);
        --wui-success-glass-025: rgba(38, 181, 98, 0.25);
        --wui-success-glass-030: rgba(38, 181, 98, 0.3);
        --wui-success-glass-060: rgba(38, 181, 98, 0.6);
        --wui-success-glass-080: rgba(38, 181, 98, 0.8);

        --wui-error-glass-001: rgba(240, 81, 66, 0.01);
        --wui-error-glass-002: rgba(240, 81, 66, 0.02);
        --wui-error-glass-005: rgba(240, 81, 66, 0.05);
        --wui-error-glass-010: rgba(240, 81, 66, 0.1);
        --wui-error-glass-015: rgba(240, 81, 66, 0.15);
        --wui-error-glass-020: rgba(240, 81, 66, 0.2);
        --wui-error-glass-025: rgba(240, 81, 66, 0.25);
        --wui-error-glass-030: rgba(240, 81, 66, 0.3);
        --wui-error-glass-060: rgba(240, 81, 66, 0.6);
        --wui-error-glass-080: rgba(240, 81, 66, 0.8);

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
        --wui-gray-glass-090: rgba(0, 0, 0, 0.9);
      }
    `}}const ue=ie`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,Pe=ie`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, color;
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,Fd=ie`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function U3(t,e){const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(o){customElements.get(t)||customElements.define(t,o)}}}function W3(t,e){return customElements.get(t)||customElements.define(t,e),e}function V(t){return function(n){return typeof n=="function"?W3(t,n):U3(t,n)}}const z3=ie`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    box-shadow: 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;var F3=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Cc=class extends oe{render(){return z`<slot></slot>`}};Cc.styles=[ue,z3];Cc=F3([V("wui-card")],Cc);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H3={attribute:!0,type:String,converter:yc,reflect:!1,hasChanged:Ud},V3=(t=H3,e,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,t),i==="accessor"){const{name:s}=n;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(i==="setter"){const{name:s}=n;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,t)}}throw Error("Unsupported decorator location: "+i)};function C(t){return(e,n)=>typeof n=="object"?V3(t,e,n):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Hd(t){return C({...t,state:!0,attribute:!1})}const Z3=ie`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,G3=J`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,q3=J`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10.5 2.42908C6.31875 2.42908 2.92859 5.81989 2.92859 10.0034C2.92859 14.1869 6.31875 17.5777 10.5 17.5777C14.6813 17.5777 18.0714 14.1869 18.0714 10.0034C18.0714 5.81989 14.6813 2.42908 10.5 2.42908ZM0.928589 10.0034C0.928589 4.71596 5.21355 0.429077 10.5 0.429077C15.7865 0.429077 20.0714 4.71596 20.0714 10.0034C20.0714 15.2908 15.7865 19.5777 10.5 19.5777C5.21355 19.5777 0.928589 15.2908 0.928589 10.0034ZM10.5 5.75003C11.0523 5.75003 11.5 6.19774 11.5 6.75003L11.5 10.8343L12.7929 9.54137C13.1834 9.15085 13.8166 9.15085 14.2071 9.54137C14.5976 9.9319 14.5976 10.5651 14.2071 10.9556L11.2071 13.9556C10.8166 14.3461 10.1834 14.3461 9.79291 13.9556L6.79291 10.9556C6.40239 10.5651 6.40239 9.9319 6.79291 9.54137C7.18343 9.15085 7.8166 9.15085 8.20712 9.54137L9.50002 10.8343L9.50002 6.75003C9.50002 6.19774 9.94773 5.75003 10.5 5.75003Z"
    clip-rule="evenodd"
  /></svg
>`,Y3=J`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,K3=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,J3=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,X3=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,Q3=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e5=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,t5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,n5=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M10.537 2.34245C10.8997 2.64654 10.9471 3.187 10.6429 3.54959L5.61072 9.54757C5.45645 9.73144 5.23212 9.84222 4.99229 9.85295C4.75247 9.86368 4.51914 9.77337 4.34906 9.60401L1.40881 6.6761C1.07343 6.34213 1.07238 5.7996 1.40647 5.46433C1.74055 5.12906 2.28326 5.12801 2.61865 5.46198L4.89731 7.73108L9.32942 2.44834C9.63362 2.08576 10.1743 2.03835 10.537 2.34245Z"
    fill="currentColor"
  /></svg
>`,i5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,r5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,o5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,s5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,a5=J`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,c5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,l5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,u5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,d5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,h5=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M9.21498 1.28565H10.5944C11.1458 1.28562 11.6246 1.2856 12.0182 1.32093C12.4353 1.35836 12.853 1.44155 13.2486 1.66724C13.7005 1.92498 14.0749 2.29935 14.3326 2.75122C14.5583 3.14689 14.6415 3.56456 14.6789 3.9817C14.7143 4.37531 14.7142 4.85403 14.7142 5.40545V6.78489C14.7142 7.33631 14.7143 7.81503 14.6789 8.20865C14.6415 8.62578 14.5583 9.04345 14.3326 9.43912C14.0749 9.89099 13.7005 10.2654 13.2486 10.5231C12.853 10.7488 12.4353 10.832 12.0182 10.8694C11.7003 10.8979 11.3269 10.9034 10.9045 10.9045C10.9034 11.3269 10.8979 11.7003 10.8694 12.0182C10.832 12.4353 10.7488 12.853 10.5231 13.2486C10.2654 13.7005 9.89099 14.0749 9.43912 14.3326C9.04345 14.5583 8.62578 14.6415 8.20865 14.6789C7.81503 14.7143 7.33631 14.7142 6.78489 14.7142H5.40545C4.85403 14.7142 4.37531 14.7143 3.9817 14.6789C3.56456 14.6415 3.14689 14.5583 2.75122 14.3326C2.29935 14.0749 1.92498 13.7005 1.66724 13.2486C1.44155 12.853 1.35836 12.4353 1.32093 12.0182C1.2856 11.6246 1.28562 11.1458 1.28565 10.5944V9.21498C1.28562 8.66356 1.2856 8.18484 1.32093 7.79122C1.35836 7.37409 1.44155 6.95642 1.66724 6.56074C1.92498 6.10887 2.29935 5.73451 2.75122 5.47677C3.14689 5.25108 3.56456 5.16789 3.9817 5.13045C4.2996 5.10192 4.67301 5.09645 5.09541 5.09541C5.09645 4.67302 5.10192 4.2996 5.13045 3.9817C5.16789 3.56456 5.25108 3.14689 5.47676 2.75122C5.73451 2.29935 6.10887 1.92498 6.56074 1.66724C6.95642 1.44155 7.37409 1.35836 7.79122 1.32093C8.18484 1.2856 8.66356 1.28562 9.21498 1.28565ZM5.09541 7.09552C4.68397 7.09667 4.39263 7.10161 4.16046 7.12245C3.88053 7.14757 3.78516 7.18949 3.74214 7.21403C3.60139 7.29431 3.48478 7.41091 3.4045 7.55166C3.37997 7.59468 3.33804 7.69005 3.31292 7.96999C3.28659 8.26345 3.28565 8.65147 3.28565 9.25708V10.5523C3.28565 11.1579 3.28659 11.5459 3.31292 11.8394C3.33804 12.1193 3.37997 12.2147 3.4045 12.2577C3.48478 12.3985 3.60139 12.5151 3.74214 12.5954C3.78516 12.6199 3.88053 12.6618 4.16046 12.6869C4.45393 12.7133 4.84195 12.7142 5.44755 12.7142H6.74279C7.3484 12.7142 7.73641 12.7133 8.02988 12.6869C8.30981 12.6618 8.40518 12.6199 8.44821 12.5954C8.58895 12.5151 8.70556 12.3985 8.78584 12.2577C8.81038 12.2147 8.8523 12.1193 8.87742 11.8394C8.89825 11.6072 8.90319 11.3159 8.90435 10.9045C8.48219 10.9034 8.10898 10.8979 7.79122 10.8694C7.37409 10.832 6.95641 10.7488 6.56074 10.5231C6.10887 10.2654 5.73451 9.89099 5.47676 9.43912C5.25108 9.04345 5.16789 8.62578 5.13045 8.20865C5.10194 7.89089 5.09645 7.51767 5.09541 7.09552ZM7.96999 3.31292C7.69005 3.33804 7.59468 3.37997 7.55166 3.4045C7.41091 3.48478 7.29431 3.60139 7.21403 3.74214C7.18949 3.78516 7.14757 3.88053 7.12245 4.16046C7.09611 4.45393 7.09517 4.84195 7.09517 5.44755V6.74279C7.09517 7.3484 7.09611 7.73641 7.12245 8.02988C7.14757 8.30981 7.18949 8.40518 7.21403 8.4482C7.29431 8.58895 7.41091 8.70556 7.55166 8.78584C7.59468 8.81038 7.69005 8.8523 7.96999 8.87742C8.26345 8.90376 8.65147 8.9047 9.25708 8.9047H10.5523C11.1579 8.9047 11.5459 8.90376 11.8394 8.87742C12.1193 8.8523 12.2147 8.81038 12.2577 8.78584C12.3985 8.70556 12.5151 8.58895 12.5954 8.4482C12.6199 8.40518 12.6618 8.30981 12.6869 8.02988C12.7133 7.73641 12.7142 7.3484 12.7142 6.74279V5.44755C12.7142 4.84195 12.7133 4.45393 12.6869 4.16046C12.6618 3.88053 12.6199 3.78516 12.5954 3.74214C12.5151 3.60139 12.3985 3.48478 12.2577 3.4045C12.2147 3.37997 12.1193 3.33804 11.8394 3.31292C11.5459 3.28659 11.1579 3.28565 10.5523 3.28565H9.25708C8.65147 3.28565 8.26345 3.28659 7.96999 3.31292Z"
    fill="#788181"
  /></svg
>`,p5=J`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M7.0023 0.875C7.48571 0.875 7.8776 1.26675 7.8776 1.75V6.125H12.2541C12.7375 6.125 13.1294 6.51675 13.1294 7C13.1294 7.48325 12.7375 7.875 12.2541 7.875H7.8776V12.25C7.8776 12.7332 7.48571 13.125 7.0023 13.125C6.51889 13.125 6.12701 12.7332 6.12701 12.25V7.875H1.75054C1.26713 7.875 0.875244 7.48325 0.875244 7C0.875244 6.51675 1.26713 6.125 1.75054 6.125H6.12701V1.75C6.12701 1.26675 6.51889 0.875 7.0023 0.875Z"
    fill="#47A1FF"
  /></svg
>`,f5=J` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,g5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,m5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,w5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,b5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,v5=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,y5=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,x5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,C5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,_5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,E5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,T5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,k5=J`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,A5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,$5=J`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,S5=J`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,I5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,R5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,P5=J` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,O5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,N5=J`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,B5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,M5=J`<svg fill="none" viewBox="0 0 21 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.3808 4.34812C13.72 4.47798 12.8501 4.7587 11.5748 5.17296L9.00869 6.00646C6.90631 6.68935 5.40679 7.17779 4.38121 7.63178C3.87166 7.85734 3.5351 8.05091 3.32022 8.22035C3.11183 8.38466 3.07011 8.48486 3.05969 8.51817C2.98058 8.77103 2.98009 9.04195 3.05831 9.29509C3.06861 9.32844 3.10998 9.42878 3.31777 9.59384C3.53205 9.76404 3.86792 9.95881 4.37667 10.1862C5.29287 10.5957 6.58844 11.0341 8.35529 11.6164L10.8876 8.59854C11.2426 8.17547 11.8733 8.12028 12.2964 8.47528C12.7195 8.83029 12.7746 9.46104 12.4196 9.88412L9.88738 12.9019C10.7676 14.5408 11.4244 15.7406 11.9867 16.5718C12.299 17.0333 12.5491 17.3303 12.7539 17.5117C12.9526 17.6877 13.0586 17.711 13.0932 17.7154C13.3561 17.7484 13.6228 17.7009 13.8581 17.5791C13.8891 17.563 13.9805 17.5046 14.1061 17.2708C14.2357 17.0298 14.3679 16.6647 14.5015 16.1237C14.7705 15.0349 14.9912 13.4733 15.2986 11.2843L15.6738 8.61249C15.8603 7.28456 15.9857 6.37917 15.9989 5.7059C16.012 5.03702 15.9047 4.8056 15.8145 4.69183C15.7044 4.55297 15.5673 4.43792 15.4114 4.35365C15.2837 4.28459 15.0372 4.2191 14.3808 4.34812ZM7.99373 13.603C6.11919 12.9864 4.6304 12.4902 3.5606 12.0121C2.98683 11.7557 2.4778 11.4808 2.07383 11.1599C1.66337 10.8339 1.31312 10.4217 1.14744 9.88551C0.949667 9.24541 0.950886 8.56035 1.15094 7.92096C1.31852 7.38534 1.67024 6.97442 2.08185 6.64985C2.48697 6.33041 2.99697 6.05734 3.57166 5.80295C4.70309 5.3021 6.30179 4.78283 8.32903 4.12437L11.0196 3.25042C12.2166 2.86159 13.2017 2.54158 13.9951 2.38566C14.8065 2.22618 15.6202 2.19289 16.3627 2.59437C16.7568 2.80747 17.1035 3.09839 17.3818 3.4495C17.9062 4.111 18.0147 4.91815 17.9985 5.74496C17.9827 6.55332 17.8386 7.57903 17.6636 8.82534L17.2701 11.6268C16.9737 13.7376 16.7399 15.4022 16.4432 16.6034C16.2924 17.2135 16.1121 17.7632 15.8678 18.2176C15.6197 18.6794 15.2761 19.0971 14.7777 19.3551C14.1827 19.6632 13.5083 19.7833 12.8436 19.6997C12.2867 19.6297 11.82 19.3563 11.4277 19.0087C11.0415 18.6666 10.6824 18.213 10.3302 17.6925C9.67361 16.722 8.92648 15.342 7.99373 13.603Z"
    clip-rule="evenodd"
  />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="20"
    viewBox="0 0 21 20"
    fill="none"
  ></svg></svg
>`,D5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,L5=J`<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,j5=J`<svg
  width="14"
  height="14"
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M13.7306 3.24213C14.0725 3.58384 14.0725 4.13786 13.7306 4.47957L10.7418 7.46737C10.4 7.80908 9.84581 7.80908 9.50399 7.46737C9.16216 7.12567 9.16216 6.57165 9.50399 6.22994L10.9986 4.73585H5.34082C4.85741 4.73585 4.46553 4.3441 4.46553 3.86085C4.46553 3.3776 4.85741 2.98585 5.34082 2.98585L10.9986 2.98585L9.50399 1.49177C9.16216 1.15006 9.16216 0.596037 9.50399 0.254328C9.84581 -0.0873803 10.4 -0.0873803 10.7418 0.254328L13.7306 3.24213ZM9.52515 10.1352C9.52515 10.6185 9.13327 11.0102 8.64986 11.0102L2.9921 11.0102L4.48669 12.5043C4.82852 12.846 4.82852 13.4001 4.48669 13.7418C4.14487 14.0835 3.59066 14.0835 3.24884 13.7418L0.26003 10.754C0.0958806 10.5899 0.0036621 10.3673 0.00366211 10.1352C0.00366212 9.90318 0.0958806 9.68062 0.26003 9.51652L3.24884 6.52872C3.59066 6.18701 4.14487 6.18701 4.48669 6.52872C4.82851 6.87043 4.82851 7.42445 4.48669 7.76616L2.9921 9.26024L8.64986 9.26024C9.13327 9.26024 9.52515 9.65199 9.52515 10.1352Z"
    fill="currentColor"
  />
</svg>

`,U5=J`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path 
    fill="currentColor"
    fill-rule="evenodd" 
    clip-rule="evenodd" 
    d="M8.3071 0.292893C8.69763 0.683417 8.69763 1.31658 8.3071 1.70711L6.41421 3.6H11.3404C13.8368 3.6 16.0533 5.1975 16.8427 7.56588L16.9487 7.88377C17.1233 8.40772 16.8402 8.97404 16.3162 9.14868C15.7923 9.32333 15.226 9.04017 15.0513 8.51623L14.9453 8.19834C14.4281 6.64664 12.976 5.6 11.3404 5.6H6.41421L8.3071 7.49289C8.69763 7.88342 8.69763 8.51658 8.3071 8.90711C7.91658 9.29763 7.28341 9.29763 6.89289 8.90711L3.29289 5.30711C2.90236 4.91658 2.90236 4.28342 3.29289 3.89289L6.89289 0.292893C7.28341 -0.0976311 7.91658 -0.0976311 8.3071 0.292893ZM3.68377 10.8513C4.20771 10.6767 4.77403 10.9598 4.94868 11.4838L5.05464 11.8017C5.57188 13.3534 7.024 14.4 8.65964 14.4L13.5858 14.4L11.6929 12.5071C11.3024 12.1166 11.3024 11.4834 11.6929 11.0929C12.0834 10.7024 12.7166 10.7024 13.1071 11.0929L16.7071 14.6929C17.0976 15.0834 17.0976 15.7166 16.7071 16.1071L13.1071 19.7071C12.7166 20.0976 12.0834 20.0976 11.6929 19.7071C11.3024 19.3166 11.3024 18.6834 11.6929 18.2929L13.5858 16.4L8.65964 16.4C6.16314 16.4 3.94674 14.8025 3.15728 12.4341L3.05131 12.1162C2.87667 11.5923 3.15983 11.026 3.68377 10.8513Z" 
  />
</svg>`,W5=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,z5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,F5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,H5=J`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,V5=J`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,Z5=J`<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,G5=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="m4.1 12.43-.45-.78-.93-.2a1.65 1.65 0 0 1-1.31-1.8l.1-.86-.61-.71a1.65 1.65 0 0 1 0-2.16l.6-.7-.09-.85c-.1-.86.47-1.64 1.3-1.81l.94-.2.45-.78A1.65 1.65 0 0 1 6.23.9l.77.36.78-.36c.77-.36 1.69-.07 2.12.66l.47.8.91.2c.84.17 1.4.95 1.31 1.8l-.1.86.6.7c.54.62.54 1.54.01 2.16l-.6.71.09.86c.1.85-.47 1.63-1.3 1.8l-.92.2-.47.79a1.65 1.65 0 0 1-2.12.66L7 12.74l-.77.36c-.78.35-1.7.07-2.13-.67Zm5.74-6.9a1 1 0 1 0-1.68-1.07L6.32 7.3l-.55-.66a1 1 0 0 0-1.54 1.28l1.43 1.71a1 1 0 0 0 1.61-.1l2.57-4Z"
    clip-rule="evenodd"
  />
</svg>`,q5=J`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,Y5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,K5=J`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,J5=J`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`,X5=J`<svg
  fill="none"
  viewBox="0 0 21 20"
>
  <path
    fill="currentColor"
    d="M8.8071 0.292893C9.19763 0.683417 9.19763 1.31658 8.8071 1.70711L6.91421 3.6H11.8404C14.3368 3.6 16.5533 5.1975 17.3427 7.56588L17.4487 7.88377C17.6233 8.40772 17.3402 8.97404 16.8162 9.14868C16.2923 9.32333 15.726 9.04017 15.5513 8.51623L15.4453 8.19834C14.9281 6.64664 13.476 5.6 11.8404 5.6H6.91421L8.8071 7.49289C9.19763 7.88342 9.19763 8.51658 8.8071 8.90711C8.41658 9.29763 7.78341 9.29763 7.39289 8.90711L3.79289 5.30711C3.40236 4.91658 3.40236 4.28342 3.79289 3.89289L7.39289 0.292893C7.78341 -0.0976311 8.41658 -0.0976311 8.8071 0.292893ZM4.18377 10.8513C4.70771 10.6767 5.27403 10.9598 5.44868 11.4838L5.55464 11.8017C6.07188 13.3534 7.52401 14.4 9.15964 14.4L14.0858 14.4L12.1929 12.5071C11.8024 12.1166 11.8024 11.4834 12.1929 11.0929C12.5834 10.7024 13.2166 10.7024 13.6071 11.0929L17.2071 14.6929C17.5976 15.0834 17.5976 15.7166 17.2071 16.1071L13.6071 19.7071C13.2166 20.0976 12.5834 20.0976 12.1929 19.7071C11.8024 19.3166 11.8024 18.6834 12.1929 18.2929L14.0858 16.4L9.15964 16.4C6.66314 16.4 4.44674 14.8025 3.65728 12.4341L3.55131 12.1162C3.37667 11.5923 3.65983 11.026 4.18377 10.8513Z"
  /></svg
>`,Q5=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M5.61391 1.57124C5.85142 1.42873 6.14813 1.42873 6.38564 1.57124L11.0793 4.38749C11.9179 4.89067 11.5612 6.17864 10.5832 6.17864H9.96398V10.0358H10.2854C10.6996 10.0358 11.0354 10.3716 11.0354 10.7858C11.0354 11.2 10.6996 11.5358 10.2854 11.5358H1.71416C1.29995 11.5358 0.964172 11.2 0.964172 10.7858C0.964172 10.3716 1.29995 10.0358 1.71416 10.0358H2.03558L2.03558 6.17864H1.41637C0.438389 6.17864 0.0816547 4.89066 0.920263 4.38749L5.61391 1.57124ZM3.53554 6.17864V10.0358H5.24979V6.17864H3.53554ZM6.74976 6.17864V10.0358H8.46401V6.17864H6.74976ZM8.64913 4.67864H3.35043L5.99978 3.089L8.64913 4.67864Z"
    fill="currentColor"
  /></svg
>`,eb=J`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="13"
  viewBox="0 0 12 13"
  fill="none"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.16072 2C4.17367 2 4.18665 2 4.19968 2L7.83857 2C8.36772 1.99998 8.82398 1.99996 9.19518 2.04018C9.5895 2.0829 9.97577 2.17811 10.3221 2.42971C10.5131 2.56849 10.6811 2.73647 10.8198 2.92749C11.0714 3.27379 11.1666 3.66007 11.2094 4.0544C11.2496 4.42561 11.2496 4.88188 11.2495 5.41105V7.58896C11.2496 8.11812 11.2496 8.57439 11.2094 8.94561C11.1666 9.33994 11.0714 9.72621 10.8198 10.0725C10.6811 10.2635 10.5131 10.4315 10.3221 10.5703C9.97577 10.8219 9.5895 10.9171 9.19518 10.9598C8.82398 11 8.36772 11 7.83856 11H4.16073C3.63157 11 3.17531 11 2.80411 10.9598C2.40979 10.9171 2.02352 10.8219 1.67722 10.5703C1.48621 10.4315 1.31824 10.2635 1.17946 10.0725C0.927858 9.72621 0.832652 9.33994 0.78993 8.94561C0.749713 8.5744 0.749733 8.11813 0.749757 7.58896L0.749758 5.45C0.749758 5.43697 0.749758 5.42399 0.749757 5.41104C0.749733 4.88188 0.749713 4.42561 0.78993 4.0544C0.832652 3.66007 0.927858 3.27379 1.17946 2.92749C1.31824 2.73647 1.48621 2.56849 1.67722 2.42971C2.02352 2.17811 2.40979 2.0829 2.80411 2.04018C3.17531 1.99996 3.63157 1.99998 4.16072 2ZM2.96567 3.53145C2.69897 3.56034 2.60687 3.60837 2.55888 3.64324C2.49521 3.6895 2.43922 3.74549 2.39296 3.80916C2.35809 3.85715 2.31007 3.94926 2.28117 4.21597C2.26629 4.35335 2.25844 4.51311 2.25431 4.70832H9.74498C9.74085 4.51311 9.733 4.35335 9.71812 4.21597C9.68922 3.94926 9.6412 3.85715 9.60633 3.80916C9.56007 3.74549 9.50408 3.6895 9.44041 3.64324C9.39242 3.60837 9.30031 3.56034 9.03362 3.53145C8.75288 3.50103 8.37876 3.5 7.79961 3.5H4.19968C3.62053 3.5 3.24641 3.50103 2.96567 3.53145ZM9.74956 6.20832H2.24973V7.55C2.24973 8.12917 2.25076 8.5033 2.28117 8.78404C2.31007 9.05074 2.35809 9.14285 2.39296 9.19084C2.43922 9.25451 2.49521 9.31051 2.55888 9.35677C2.60687 9.39163 2.69897 9.43966 2.96567 9.46856C3.24641 9.49897 3.62053 9.5 4.19968 9.5H7.79961C8.37876 9.5 8.75288 9.49897 9.03362 9.46856C9.30032 9.43966 9.39242 9.39163 9.44041 9.35677C9.50408 9.31051 9.56007 9.25451 9.60633 9.19084C9.6412 9.14285 9.68922 9.05075 9.71812 8.78404C9.74854 8.5033 9.74956 8.12917 9.74956 7.55V6.20832ZM6.74963 8C6.74963 7.58579 7.08541 7.25 7.49961 7.25H8.2496C8.6638 7.25 8.99958 7.58579 8.99958 8C8.99958 8.41422 8.6638 8.75 8.2496 8.75H7.49961C7.08541 8.75 6.74963 8.41422 6.74963 8Z"
    fill="currentColor"
  /></svg
>`,tb=J`<svg
  width="13"
  height="12"
  viewBox="0 0 13 12"
  fill="none"
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0.794373 5.99982C0.794373 5.52643 1.17812 5.14268 1.6515 5.14268H5.643V1.15109C5.643 0.677701 6.02675 0.293946 6.50012 0.293945C6.9735 0.293946 7.35725 0.677701 7.35725 1.15109V5.14268H11.3488C11.8221 5.14268 12.2059 5.52643 12.2059 5.99982C12.2059 6.47321 11.8221 6.85696 11.3488 6.85696H7.35725V10.8486C7.35725 11.3219 6.9735 11.7057 6.50012 11.7057C6.02675 11.7057 5.643 11.3219 5.643 10.8486V6.85696H1.6515C1.17812 6.85696 0.794373 6.47321 0.794373 5.99982Z"
  /></svg
>`,nb=J`<svg fill="none" viewBox="0 0 14 6">
  <path style="fill: var(--wui-color-bg-150);" d="M0 1h14L9.21 5.12a3.31 3.31 0 0 1-4.49 0L0 1Z" />
  <path
    style="stroke: var(--wui-color-inverse-100);"
    stroke-opacity=".05"
    d="M1.33 1.5h11.32L8.88 4.75l-.01.01a2.81 2.81 0 0 1-3.8 0l-.02-.01L1.33 1.5Z"
  />
  <path
    style="fill: var(--wui-color-bg-150);"
    d="M1.25.71h11.5L9.21 3.88a3.31 3.31 0 0 1-4.49 0L1.25.71Z"
  />
</svg> `,ib=J`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.9576 2.23383C13.3807 2.58873 13.4361 3.21947 13.0812 3.64263L6.37159 11.6426C6.19161 11.8572 5.92989 11.9865 5.65009 11.999C5.3703 12.0115 5.09808 11.9062 4.89965 11.7085L0.979321 7.80331C0.588042 7.41354 0.586817 6.78038 0.976585 6.3891C1.36635 5.99782 1.99952 5.99659 2.3908 6.38636L5.53928 9.52268L11.5488 2.35742C11.9037 1.93426 12.5344 1.87893 12.9576 2.23383Z"
    clip-rule="evenodd"
  />
</svg>`;var dl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const rb={add:p5,allWallets:G3,arrowBottomCircle:q3,appStore:Y3,apple:K3,arrowBottom:J3,arrowLeft:X3,arrowRight:Q3,arrowTop:e5,bank:Q5,browser:t5,card:eb,checkmark:n5,checkmarkBold:ib,chevronBottom:i5,chevronLeft:r5,chevronRight:o5,chevronTop:s5,chromeStore:a5,clock:c5,close:l5,compass:d5,coinPlaceholder:u5,copy:h5,cursor:f5,cursorTransparent:nb,desktop:g5,disconnect:m5,discord:w5,etherscan:b5,extension:v5,externalLink:y5,facebook:x5,filters:C5,github:_5,google:E5,helpCircle:T5,infoCircle:k5,mail:A5,mobile:$5,networkPlaceholder:S5,nftPlaceholder:I5,off:R5,playStore:P5,plus:tb,qrCode:O5,recycleHorizontal:X5,refresh:N5,search:B5,send:M5,swapHorizontal:D5,swapHorizontalMedium:j5,swapHorizontalBold:L5,swapHorizontalRoundedBold:U5,swapVertical:W5,telegram:z5,twitch:F5,twitter:H5,twitterIcon:V5,verify:Z5,verifyFilled:G5,wallet:Y5,walletConnect:K5,walletPlaceholder:q5,warningCircle:J5};let Tr=class extends oe{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,z`${rb[this.name]}`}};Tr.styles=[ue,Fd,Z3];dl([C()],Tr.prototype,"size",void 0);dl([C()],Tr.prototype,"name",void 0);dl([C()],Tr.prototype,"color",void 0);Tr=dl([V("wui-icon")],Tr);const ob=ie`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var hl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let kr=class extends oe{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`
      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};
      `,z`<img src=${this.src} alt=${this.alt} />`}};kr.styles=[ue,Fd,ob];hl([C()],kr.prototype,"src",void 0);hl([C()],kr.prototype,"alt",void 0);hl([C()],kr.prototype,"size",void 0);kr=hl([V("wui-image")],kr);const sb=ie`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var ab=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let _c=class extends oe{render(){return z`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};_c.styles=[ue,sb];_c=ab([V("wui-loading-hexagon")],_c);const cb=ie`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var Vd=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let To=class extends oe{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,z`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};To.styles=[ue,cb];Vd([C()],To.prototype,"color",void 0);Vd([C()],To.prototype,"size",void 0);To=Vd([V("wui-loading-spinner")],To);const lb=ie`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Wf=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let qs=class extends oe{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,i=36-e,o=116+i,r=245+i,s=360+i*1.75;return z`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${o} ${r}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};qs.styles=[ue,lb];Wf([C({type:Number})],qs.prototype,"radius",void 0);qs=Wf([V("wui-loading-thumbnail")],qs);const ub=ie`
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var pl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ar=class extends oe{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,z`<slot></slot>`}};Ar.styles=[ub];pl([C()],Ar.prototype,"width",void 0);pl([C()],Ar.prototype,"height",void 0);pl([C()],Ar.prototype,"borderRadius",void 0);Ar=pl([V("wui-shimmer")],Ar);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zf={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ff=t=>(...e)=>({_$litDirective$:t,values:e});let Hf=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const db=Ff(class extends Hf{constructor(t){var e;if(super(t),t.type!==zf.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,o;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const n=t.element.classList;for(const r of this.st)r in e||(n.remove(r),this.st.delete(r));for(const r in e){const s=!!e[r];s===this.st.has(r)||(o=this.nt)!=null&&o.has(r)||(s?(n.add(r),this.st.add(r)):(n.remove(r),this.st.delete(r)))}return Er}}),hb=ie`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-title-600 {
    font-size: var(--wui-font-size-medium-title);
    letter-spacing: var(--wui-letter-spacing-medium-title);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var fl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let $r=class extends oe{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,z`<slot class=${db(e)}></slot>`}};$r.styles=[ue,hb];fl([C()],$r.prototype,"variant",void 0);fl([C()],$r.prototype,"color",void 0);fl([C()],$r.prototype,"align",void 0);$r=fl([V("wui-text")],$r);const pb=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,fb=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,gb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,mb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,wb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,bb=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,vb=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,yb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,xb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,Cb=J`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,_b=J`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Eb=J`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Tb=J`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,kb=J`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <g clip-path="url(#clip0_187_29)">
    <path d="M1.18187e-05 15.8055C1.18187e-05 9.8015 -5.19442e-07 6.91338 1.69991e-08 0C4.5 3.72236e-05 9.62249 0 16.5 0L23.5 4.31399e-05C29.9349 4.31399e-05 35.5 0.000206332 40 3.73468e-05C40 2.77754 40 9.36708 40 15.8055V22.8364C40 29.2647 40 33.7962 40 40C31.5 40 29.8337 40 23.4 40H16.6C10.5092 40 6.50004 40 4.04289e-05 40C3.05176e-05 32.2453 1.18187e-05 29.6382 1.18187e-05 22.8364V15.8055Z" fill="#0052FF"/>
    <path d="M20.0236 26.5C16.4342 26.5 13.5236 23.5931 13.5236 20C13.5236 16.4069 16.4342 13.5 20.0236 13.5C23.2411 13.5 25.9134 15.8472 26.4261 18.9167H32.9731C32.4206 12.2433 26.8342 7 20.02 7C12.8411 7 7.02002 12.8211 7.02002 20C7.02002 27.1789 12.8411 33 20.02 33C26.8342 33 32.4206 27.7567 32.9731 21.0833H26.4225C25.9061 24.1528 23.2411 26.5 20.0236 26.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_187_29">
      <rect width="40" height="40" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Ab=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#7D00FF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M28.306 15.381a3.69 3.69 0 1 0 0-7.381 3.69 3.69 0 0 0 0 7.381ZM16.987 32a8.991 8.991 0 1 1 .016-17.983A8.991 8.991 0 0 1 16.988 32Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,$b=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#635BFF"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.299 15.147c0-1.028.844-1.424 2.242-1.424 2.004 0 4.536.607 6.54 1.688V9.213C24.892 8.343 22.73 8 20.541 8c-5.354 0-8.915 2.796-8.915 7.464 0 7.279 10.022 6.118 10.022 9.257 0 1.213-1.055 1.609-2.531 1.609-2.19 0-4.985-.897-7.2-2.11v6.277a18.283 18.283 0 0 0 7.2 1.503c5.485 0 9.257-2.716 9.257-7.437-.027-7.86-10.075-6.462-10.075-9.416Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Sb=J`
  <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#a)">
      <path
        d="M0 16.6c0-6.168 0-9.251 1.314-11.555a10 10 0 0 1 3.731-3.731C7.35 0 10.432 0 16.6 0h6.8c6.168 0 9.252 0 11.555 1.314a10 10 0 0 1 3.731 3.731C40 7.35 40 10.432 40 16.6v6.8c0 6.168 0 9.252-1.314 11.555a10 10 0 0 1-3.731 3.731C32.652 40 29.568 40 23.4 40h-6.8c-6.168 0-9.251 0-11.555-1.314a10 10 0 0 1-3.731-3.731C0 32.652 0 29.568 0 23.4v-6.8Z"
        fill="#fff"
      />
      <path
        d="M.5 16.6c0-3.093 0-5.38.162-7.182.161-1.795.48-3.061 1.086-4.125a9.5 9.5 0 0 1 3.545-3.545C6.357 1.141 7.623.823 9.418.662 11.221.5 13.508.5 16.6.5h6.8c3.093 0 5.38 0 7.182.162 1.795.161 3.062.48 4.125 1.086a9.5 9.5 0 0 1 3.545 3.545c.607 1.064.925 2.33 1.086 4.125.161 1.803.162 4.09.162 7.182v6.8c0 3.093 0 5.38-.162 7.182-.161 1.795-.48 3.062-1.086 4.125a9.5 9.5 0 0 1-3.545 3.545c-1.063.607-2.33.925-4.125 1.086-1.803.161-4.09.162-7.182.162h-6.8c-3.093 0-5.38 0-7.182-.162-1.795-.161-3.061-.48-4.125-1.086a9.5 9.5 0 0 1-3.545-3.545c-.607-1.063-.925-2.33-1.086-4.125C.5 28.779.5 26.492.5 23.4v-6.8Z"
        stroke="#fff"
        stroke-opacity=".05"
      />
      <path
        d="M18.606 12.642a.781.781 0 0 0-.771.66l-1.281 8.125a.78.78 0 0 1 .77-.66h3.755a7.668 7.668 0 0 0 7.57-6.49 6.26 6.26 0 0 0 .075-.843c-.96-.504-2.089-.792-3.325-.792h-6.793Z"
        fill="#001C64"
      />
      <path
        d="M28.724 13.434c-.006.282-.03.564-.075.843a7.668 7.668 0 0 1-7.57 6.491h-3.754a.78.78 0 0 0-.771.66l-1.916 12.15a.634.634 0 0 0 .626.734h4.075a.781.781 0 0 0 .77-.66l1.074-6.807a.781.781 0 0 1 .772-.66h2.4a7.668 7.668 0 0 0 7.57-6.491c.415-2.651-.92-5.064-3.201-6.26Z"
        fill="#0070E0"
      />
      <path
        d="M13.977 7.226a.78.78 0 0 0-.771.658l-3.198 20.277a.634.634 0 0 0 .626.733h4.742l1.178-7.467 1.281-8.125a.782.782 0 0 1 .771-.66H25.4c1.237 0 2.364.289 3.325.792.065-3.4-2.74-6.208-6.599-6.208h-8.148Z"
        fill="#003087"
      />
    </g>
    <defs>
      <clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    </defs>
  </svg>
`,Ib=J`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,Rb=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,Pb=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Ob=J`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,Nb=ie`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var Zd=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const Bb={browser:pb,dao:fb,defi:gb,defiAlt:mb,eth:wb,layers:bb,lock:vb,login:yb,network:xb,nft:Cb,noun:_b,profile:Eb,system:Tb,coinbase:kb,onrampCard:Ib,moonpay:Ab,stripe:$b,paypal:Sb,google:Rb,pencil:Pb,lightbulb:Ob};let ko=class extends oe{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--wui-visual-size-${this.size});
   `,z`${Bb[this.name]}`}};ko.styles=[ue,Nb];Zd([C()],ko.prototype,"name",void 0);Zd([C()],ko.prototype,"size",void 0);ko=Zd([V("wui-visual")],ko);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yn=t=>t??st,be={getSpacingStyles(t,e){if(Array.isArray(t))return t[e]?`var(--wui-spacing-${t[e]})`:void 0;if(typeof t=="string")return`var(--wui-spacing-${t})`},getFormattedDate(t){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(t)},getHostName(t){return new URL(t).hostname},getTruncateString({string:t,charsStart:e,charsEnd:n,truncate:i}){return t.length<=e+n?t:i==="end"?`${t.substring(0,e)}...`:i==="start"?`...${t.substring(t.length-n)}`:`${t.substring(0,Math.floor(e))}...${t.substring(t.length-Math.floor(n))}`},generateAvatarColors(t){const n=t.toLowerCase().replace(/^0x/iu,"").substring(0,6),i=this.hexToRgb(n),o=getComputedStyle(document.documentElement).getPropertyValue("--w3m-border-radius-master"),s=100-3*Number(o==null?void 0:o.replace("px","")),a=`${s}% ${s}% at 65% 40%`,c=[];for(let l=0;l<5;l+=1){const d=this.tintColor(i,.15*l);c.push(`rgb(${d[0]}, ${d[1]}, ${d[2]})`)}return`
    --local-color-1: ${c[0]};
    --local-color-2: ${c[1]};
    --local-color-3: ${c[2]};
    --local-color-4: ${c[3]};
    --local-color-5: ${c[4]};
    --local-radial-circle: ${a}
   `},hexToRgb(t){const e=parseInt(t,16),n=e>>16&255,i=e>>8&255,o=e&255;return[n,i,o]},tintColor(t,e){const[n,i,o]=t,r=Math.round(n+(255-n)*e),s=Math.round(i+(255-i)*e),a=Math.round(o+(255-o)*e);return[r,s,a]},isNumber(t){return{number:/^[0-9]+$/u}.number.test(t)},getColorTheme(t){return t||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")},splitBalance(t){const e=t.split(".");return e.length===2?[e[0],e[1]]:["0","00"]},roundNumber(t,e,n){return Math.abs(t)>=e?Number(t.toFixed(n)):t},formatNumberToLocalString(t,e=2){return t===void 0?"0.00":typeof t=="number"?t.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):parseFloat(t).toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e})}},Mb=ie`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var tn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let At=class extends oe{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&be.getSpacingStyles(this.margin,3)};
    `,z`<slot></slot>`}};At.styles=[ue,Mb];tn([C()],At.prototype,"flexDirection",void 0);tn([C()],At.prototype,"flexWrap",void 0);tn([C()],At.prototype,"flexBasis",void 0);tn([C()],At.prototype,"flexGrow",void 0);tn([C()],At.prototype,"flexShrink",void 0);tn([C()],At.prototype,"alignItems",void 0);tn([C()],At.prototype,"justifyContent",void 0);tn([C()],At.prototype,"columnGap",void 0);tn([C()],At.prototype,"rowGap",void 0);tn([C()],At.prototype,"gap",void 0);tn([C()],At.prototype,"padding",void 0);tn([C()],At.prototype,"margin",void 0);At=tn([V("wui-flex")],At);const Db=ie`
  :host {
    display: block;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var gl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Sr=class extends oe{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return z`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",z`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const e=be.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};Sr.styles=[ue,Db];gl([C()],Sr.prototype,"imageSrc",void 0);gl([C()],Sr.prototype,"alt",void 0);gl([C()],Sr.prototype,"address",void 0);Sr=gl([V("wui-avatar")],Sr);const Lb=ie`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Ci=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let dn=class extends oe{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const e=this.iconSize||this.size,n=this.size==="lg",i=this.size==="xl",o=n?"12%":"16%",r=n?"xxs":i?"s":"3xl",s=this.background==="gray",a=this.background==="opaque",c=this.backgroundColor==="accent-100"&&a||this.backgroundColor==="success-100"&&a||this.backgroundColor==="error-100"&&a||this.backgroundColor==="inverse-100"&&a;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:s&&(l=`var(--wui-gray-${this.backgroundColor})`),this.style.cssText=`
       --local-bg-value: ${l};
       --local-bg-mix: ${c||s?"100%":o};
       --local-border-radius: var(--wui-border-radius-${r});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,z` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};dn.styles=[ue,Pe,Lb];Ci([C()],dn.prototype,"size",void 0);Ci([C()],dn.prototype,"backgroundColor",void 0);Ci([C()],dn.prototype,"iconColor",void 0);Ci([C()],dn.prototype,"iconSize",void 0);Ci([C()],dn.prototype,"background",void 0);Ci([C({type:Boolean})],dn.prototype,"border",void 0);Ci([C()],dn.prototype,"borderColor",void 0);Ci([C()],dn.prototype,"icon",void 0);dn=Ci([V("wui-icon-box")],dn);const jb=ie`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  button.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (max-width: 500px) {
    button {
      gap: 0px;
      padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) !important;
      height: 32px;
    }
    wui-image,
    wui-icon-box,
    button > wui-text {
      visibility: hidden;
      width: 0px;
      height: 0px;
    }
    button {
      border-radius: 0px;
      border: none;
      background: transparent;
      padding: 0px;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var Pn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let zt=class extends oe{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.isProfileName=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return z`
      <button
        ?disabled=${this.disabled}
        class=${yn(this.balance?void 0:"local-no-balance")}
      >
        ${this.balanceTemplate()}
        <wui-flex gap="xxs" alignItems="center">
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${this.address?be.getTruncateString({string:this.isProfileName?this.profileName:this.address,charsStart:this.isProfileName?18:this.charsStart,charsEnd:this.isProfileName?0:this.charsEnd,truncate:this.isProfileName?"end":"middle"}):null}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.isUnsupportedChain)return z` <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
        <wui-text variant="paragraph-600" color="inherit"> Switch Network</wui-text>`;if(this.balance){const e=this.networkSrc?z`<wui-image src=${this.networkSrc}></wui-image>`:z`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return z`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance}</wui-text>
      `}return null}};zt.styles=[ue,Pe,jb];Pn([C()],zt.prototype,"networkSrc",void 0);Pn([C()],zt.prototype,"avatarSrc",void 0);Pn([C()],zt.prototype,"balance",void 0);Pn([C({type:Boolean})],zt.prototype,"isUnsupportedChain",void 0);Pn([C({type:Boolean})],zt.prototype,"disabled",void 0);Pn([C({type:Boolean})],zt.prototype,"isProfileName",void 0);Pn([C()],zt.prototype,"address",void 0);Pn([C()],zt.prototype,"profileName",void 0);Pn([C()],zt.prototype,"charsStart",void 0);Pn([C()],zt.prototype,"charsEnd",void 0);zt=Pn([V("wui-account-button")],zt);const Ub=ie`
  :host {
    position: relative;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid var(--wui-color-bg-base-150, #1e1f1f);
    padding: 1px;
  }
`;var Xr=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Fn=class extends oe{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let e="xxs";return this.size==="lg"?e="m":this.size==="md"?e="xs":e="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),z`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?z`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?z`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:z`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Fn.styles=[ue,Ub];Xr([C()],Fn.prototype,"size",void 0);Xr([C()],Fn.prototype,"name",void 0);Xr([C()],Fn.prototype,"imageSrc",void 0);Xr([C()],Fn.prototype,"walletIcon",void 0);Xr([C({type:Boolean})],Fn.prototype,"installed",void 0);Xr([C()],Fn.prototype,"badgeSize",void 0);Fn=Xr([V("wui-wallet-image")],Fn);const Wb=ie`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-flex {
    padding: 2px;
    position: fixed;
    overflow: hidden;
    left: 34px;
    bottom: 8px;
    background: var(--dark-background-150, #1e1f1f);
    border-radius: 50%;
    z-index: 2;
    display: flex;
  }
`;var Vf=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const ru=4;let Ys=class extends oe{constructor(){super(...arguments),this.walletImages=[]}render(){const e=this.walletImages.length<ru;return z`${this.walletImages.slice(0,ru).map(({src:n,walletName:i})=>z`
            <wui-wallet-image
              size="inherit"
              imageSrc=${n}
              name=${yn(i)}
            ></wui-wallet-image>
          `)}
      ${e?[...Array(ru-this.walletImages.length)].map(()=>z` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}
      <wui-flex>
        <wui-icon-box
          size="xxs"
          iconSize="xxs"
          iconcolor="success-100"
          backgroundcolor="success-100"
          icon="checkmark"
          background="opaque"
        ></wui-icon-box>
      </wui-flex>`}};Ys.styles=[ue,Wb];Vf([C({type:Array})],Ys.prototype,"walletImages",void 0);Ys=Vf([V("wui-all-wallets-image")],Ys);const zb=ie`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--local-border-radius);
    width: var(--local-width);
    white-space: nowrap;
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  /* xs settings */
  button[data-size='xs'] {
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs);
  }

  button[data-size='xs'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-xxs);
  }

  button[data-size='xs'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-xxs);
  }

  /* sm settings */
  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'][data-icon-right='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'][data-icon-left='false'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  /* md settings */
  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'][data-icon-right='false'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'][data-icon-left='false'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  /* lg settings */
  button[data-size='lg'] {
    padding: var(--wui-spacing-m) var(--wui-spacing-2l);
  }

  button[data-size='lg'][data-icon-left='true'][data-icon-right='false'] {
    padding-left: var(--wui-spacing-m);
  }

  button[data-size='lg'][data-icon-right='true'][data-icon-left='false'] {
    padding-right: var(--wui-spacing-m);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var ti=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const Fb={xs:"small-600",sm:"paragraph-600",md:"small-600",mdl:"small-600",lg:"paragraph-600"};let Yt=class extends oe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill",this.hasIconLeft=!1,this.hasIconRight=!1,this.borderRadius="m"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};
    --local-border-radius: var(--wui-border-radius-${this.borderRadius});
    `;const e=this.textVariant??Fb[this.size];return z`
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `}handleSlotLeftChange(){this.hasIconLeft=!0}handleSlotRightChange(){this.hasIconRight=!0}loadingTemplate(){return this.loading?z`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:z``}};Yt.styles=[ue,Pe,zb];ti([C()],Yt.prototype,"size",void 0);ti([C({type:Boolean})],Yt.prototype,"disabled",void 0);ti([C({type:Boolean})],Yt.prototype,"fullWidth",void 0);ti([C({type:Boolean})],Yt.prototype,"loading",void 0);ti([C()],Yt.prototype,"variant",void 0);ti([C({type:Boolean})],Yt.prototype,"hasIconLeft",void 0);ti([C({type:Boolean})],Yt.prototype,"hasIconRight",void 0);ti([C()],Yt.prototype,"borderRadius",void 0);ti([C()],Yt.prototype,"textVariant",void 0);Yt=ti([V("wui-button")],Yt);const Zf=J`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,Hb=ie`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var Gf=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ks=class extends oe{constructor(){super(...arguments),this.type="wallet"}render(){return z`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?z` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${Zf}`:z`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};Ks.styles=[ue,Pe,Hb];Gf([C()],Ks.prototype,"type",void 0);Ks=Gf([V("wui-card-select-loader")],Ks);const Vb=J`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,Zb=J`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Gb=ie`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Ra=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Hi=class extends oe{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const e={sm:Vb,md:Zf,lg:Zb};return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: var(--wui-path-network-${this.size});
      --local-width:  var(--wui-width-network-${this.size});
      --local-height:  var(--wui-height-network-${this.size});
      --local-icon-size:  var(--wui-icon-size-network-${this.size});
    `,z`${this.templateVisual()} ${e[this.size]}`}templateVisual(){return this.imageSrc?z`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:z`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Hi.styles=[ue,Gb];Ra([C()],Hi.prototype,"size",void 0);Ra([C()],Hi.prototype,"name",void 0);Ra([C()],Hi.prototype,"imageSrc",void 0);Ra([C({type:Boolean})],Hi.prototype,"selected",void 0);Hi=Ra([V("wui-network-image")],Hi);const qb=ie`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: var(--wui-icon-box-size-xl);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var Qr=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Hn=class extends oe{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1,this.installed=!1}render(){return z`
      <button data-selected=${yn(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?z`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${yn(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:z`
      <wui-wallet-image
        size="md"
        imageSrc=${yn(this.imageSrc)}
        name=${this.name}
        .installed=${this.installed}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}};Hn.styles=[ue,Pe,qb];Qr([C()],Hn.prototype,"name",void 0);Qr([C()],Hn.prototype,"type",void 0);Qr([C()],Hn.prototype,"imageSrc",void 0);Qr([C({type:Boolean})],Hn.prototype,"disabled",void 0);Qr([C({type:Boolean})],Hn.prototype,"selected",void 0);Qr([C({type:Boolean})],Hn.prototype,"installed",void 0);Hn=Qr([V("wui-card-select")],Hn);const Yb=ie`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'],
  a[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  a[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent'],
  a[data-variant='success'],
  a[data-variant='shadeSmall'],
  a[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 10px;
  }

  a[data-variant='transparent']:has(wui-text:first-child),
  a[data-variant='success']:has(wui-text:first-child),
  a[data-variant='shadeSmall']:has(wui-text:first-child),
  a[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image,
  a[data-variant='success'] > wui-image,
  a[data-variant='shadeSmall'] > wui-image,
  a[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon,
  a[data-variant='success'] > wui-icon,
  a[data-variant='shadeSmall'] > wui-icon,
  a[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible,
  a[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  a[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover,
    a[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    a[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    a[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active,
  a[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  a[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  a[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var eo=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Vn=class extends oe{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href="",this.text=void 0}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return z`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${n} color="inherit">
          ${this.title?this.title:be.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?z`<wui-image src=${this.imageSrc}></wui-image>`:null}};Vn.styles=[ue,Pe,Yb];eo([C()],Vn.prototype,"variant",void 0);eo([C()],Vn.prototype,"imageSrc",void 0);eo([C({type:Boolean})],Vn.prototype,"disabled",void 0);eo([C()],Vn.prototype,"icon",void 0);eo([C()],Vn.prototype,"href",void 0);eo([C()],Vn.prototype,"text",void 0);Vn=eo([V("wui-chip")],Vn);const Kb=ie`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  @media (max-width: 500px) {
    button[data-size='md'] {
      height: 32px;
      padding: 5px 12px;
    }

    button[data-size='md'] > wui-text > slot {
      font-size: 14px !important;
    }
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var Gd=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ao=class extends oe{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const e=this.size==="md"?"paragraph-600":"small-600";return z`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?z`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Ao.styles=[ue,Pe,Kb];Gd([C()],Ao.prototype,"size",void 0);Gd([C({type:Boolean})],Ao.prototype,"loading",void 0);Ao=Gd([V("wui-connect-button")],Ao);const Jb=ie`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var ml=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ir=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return z`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ir.styles=[ue,Pe,Jb];ml([C({type:Boolean})],Ir.prototype,"disabled",void 0);ml([C()],Ir.prototype,"label",void 0);ml([C()],Ir.prototype,"buttonLabel",void 0);Ir=ml([V("wui-cta-button")],Ir);const Xb=ie`
  :host {
    display: block;
    padding: var(--wui-spacing-l) var(--wui-spacing-m);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
  }
`;var Qb=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ec=class extends oe{render(){return z`
      <wui-flex gap="xl" flexDirection="column" justifyContent="space-between" alignItems="center">
        <slot></slot>
      </wui-flex>
    `}};Ec.styles=[ue,Pe,Xb];Ec=Qb([V("wui-details-group")],Ec);const e4=ie`
  :host {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-l);
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }
`;var qf=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Js=class extends oe{constructor(){super(...arguments),this.name=""}render(){return z`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">${this.name}</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <slot></slot>
        </wui-flex>
      </wui-flex>
    `}};Js.styles=[ue,Pe,e4];qf([C()],Js.prototype,"name",void 0);Js=qf([V("wui-details-group-item")],Js);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const t4=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _s=(t,e)=>{var i;const n=t._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,e,!1),_s(o,e);return!0},Tc=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},Yf=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),r4(e)}};function n4(t){this._$AN!==void 0?(Tc(this),this._$AM=t,Yf(this)):this._$AM=t}function i4(t,e=!1,n=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=n;r<i.length;r++)_s(i[r],!1),Tc(i[r]);else i!=null&&(_s(i,!1),Tc(i));else _s(this,t)}const r4=t=>{t.type==zf.CHILD&&(t._$AP??(t._$AP=i4),t._$AQ??(t._$AQ=n4))};let o4=class extends Hf{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),Yf(this),this.isConnected=e._$AU}_$AO(e,n=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),n&&(_s(this,e),Tc(this))}setValue(e){if(t4(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qd=()=>new s4;let s4=class{};const ou=new WeakMap,Yd=Ff(class extends o4{render(t){return st}update(t,[e]){var i;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),st}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=ou.get(e);n===void 0&&(n=new WeakMap,ou.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=ou.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),a4=ie`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md,
  wui-loading-spinner + .wui-size-md {
    padding: 10.5px var(--wui-spacing-3xl) 10.5px 40px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  .wui-size-lg {
    padding: var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-s) var(--wui-spacing-l);
    letter-spacing: var(--wui-letter-spacing-medium-title);
    font-size: var(--wui-font-size-medium-title);
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    color: var(--wui-color-fg-100);
    height: 64px;
  }

  wui-icon + .wui-size-lg,
  wui-loading-spinner + .wui-size-lg {
    padding-left: 50px;
  }

  wui-icon[data-input='lg'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var er=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let En=class extends oe{constructor(){super(...arguments),this.inputElementRef=qd(),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.value=""}render(){const e=`wui-size-${this.size}`;return z` ${this.templateIcon()}
      <input
        ${Yd(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${yn(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
        .value=${this.value||""}
      />
      <slot></slot>`}templateIcon(){return this.icon?z`<wui-icon
        data-input=${this.size}
        size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:(e=this.inputElementRef.value)==null?void 0:e.value,bubbles:!0,composed:!0}))}};En.styles=[ue,Pe,a4];er([C()],En.prototype,"size",void 0);er([C()],En.prototype,"icon",void 0);er([C({type:Boolean})],En.prototype,"disabled",void 0);er([C()],En.prototype,"placeholder",void 0);er([C()],En.prototype,"type",void 0);er([C()],En.prototype,"keyHint",void 0);er([C()],En.prototype,"value",void 0);En=er([V("wui-input-text")],En);const c4=ie`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var wl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Rr=class extends oe{constructor(){super(...arguments),this.disabled=!1}render(){return z`
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?z`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Rr.styles=[ue,c4];wl([C()],Rr.prototype,"errorMessage",void 0);wl([C({type:Boolean})],Rr.prototype,"disabled",void 0);wl([C()],Rr.prototype,"value",void 0);Rr=wl([V("wui-email-input")],Rr);const l4=ie`
  button {
    border-radius: var(--local-border-radius);
    color: var(--wui-color-fg-100);
    padding: var(--local-padding);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var Pa=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Vi=class extends oe{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){const e=this.size==="lg"?"--wui-border-radius-xs":"--wui-border-radius-xxs",n=this.size==="lg"?"--wui-spacing-1xs":"--wui-spacing-2xs";return this.style.cssText=`
    --local-border-radius: var(${e});
    --local-padding: var(${n});
`,z`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Vi.styles=[ue,Pe,Fd,l4];Pa([C()],Vi.prototype,"size",void 0);Pa([C({type:Boolean})],Vi.prototype,"disabled",void 0);Pa([C()],Vi.prototype,"icon",void 0);Pa([C()],Vi.prototype,"iconColor",void 0);Vi=Pa([V("wui-icon-link")],Vi);const u4=ie`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var Kf=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Xs=class extends oe{constructor(){super(...arguments),this.icon="copy"}render(){return z`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};Xs.styles=[ue,Pe,u4];Kf([C()],Xs.prototype,"icon",void 0);Xs=Kf([V("wui-input-element")],Xs);const d4=ie`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition:
      background-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      border-color var(--wui-ease-inout-power-1) var(--wui-duration-md),
      box-shadow var(--wui-ease-inout-power-1) var(--wui-duration-md);
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-005);
  }

  input:focus:enabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }
`;var Kd=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let $o=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return z`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};$o.styles=[ue,Pe,d4];Kd([C({type:Boolean})],$o.prototype,"disabled",void 0);Kd([C({type:String})],$o.prototype,"value",void 0);$o=Kd([V("wui-input-numeric")],$o);const h4=ie`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var Jd=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let So=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return z`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};So.styles=[ue,Pe,h4];Jd([C({type:Boolean})],So.prototype,"disabled",void 0);Jd([C()],So.prototype,"color",void 0);So=Jd([V("wui-link")],So);const p4=ie`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition:
      color var(--wui-ease-out-power-1) var(--wui-duration-md),
      background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: color, background-color;
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
    transition: opacity var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: opacity;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var ni=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Kt=class extends oe{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return z`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${yn(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return z`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return z`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md",i=this.iconSize?this.iconSize:n;return z`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${i}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?z`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:z``}chevronTemplate(){return this.chevron?z`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Kt.styles=[ue,Pe,p4];ni([C()],Kt.prototype,"icon",void 0);ni([C()],Kt.prototype,"iconSize",void 0);ni([C()],Kt.prototype,"variant",void 0);ni([C()],Kt.prototype,"iconVariant",void 0);ni([C({type:Boolean})],Kt.prototype,"disabled",void 0);ni([C()],Kt.prototype,"imageSrc",void 0);ni([C()],Kt.prototype,"alt",void 0);ni([C({type:Boolean})],Kt.prototype,"chevron",void 0);ni([C({type:Boolean})],Kt.prototype,"loading",void 0);Kt=ni([V("wui-list-item")],Kt);var Hu;(function(t){t.approve="approved",t.bought="bought",t.borrow="borrowed",t.burn="burnt",t.cancel="canceled",t.claim="claimed",t.deploy="deployed",t.deposit="deposited",t.execute="executed",t.mint="minted",t.receive="received",t.repay="repaid",t.send="sent",t.sell="sold",t.stake="staked",t.trade="swapped",t.unstake="unstaked",t.withdraw="withdrawn"})(Hu||(Hu={}));const f4=ie`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`;var to=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Zn=class extends oe{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""}}render(){const[e,n]=this.images,i=(e==null?void 0:e.type)==="NFT",o=n!=null&&n.url?n.type==="NFT":i,r=i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)",s=o?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)";return this.style.cssText=`
    --local-left-border-radius: ${r};
    --local-right-border-radius: ${s};
    `,z`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[e,n]=this.images,i=e==null?void 0:e.type;return this.images.length===2&&(e!=null&&e.url||n!=null&&n.url)?z`<div class="swap-images-container">
        ${e!=null&&e.url?z`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${n!=null&&n.url?z`<wui-image src=${n.url} alt="Transaction image"></wui-image>`:null}
      </div>`:e!=null&&e.url?z`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:i==="NFT"?z`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:z`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}templateIcon(){let e="accent-100",n;return n=this.getIcon(),this.status&&(e=this.getStatusColor()),n?z`
      <wui-icon-box
        size="xxs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontalBold":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success-100";case"failed":return"error-100";case"pending":return"inverse-100";default:return"accent-100"}}};Zn.styles=[f4];to([C()],Zn.prototype,"type",void 0);to([C()],Zn.prototype,"status",void 0);to([C()],Zn.prototype,"direction",void 0);to([C({type:Boolean})],Zn.prototype,"onlyDirectionIcon",void 0);to([C({type:Array})],Zn.prototype,"images",void 0);to([C({type:Object})],Zn.prototype,"secondImage",void 0);Zn=to([V("wui-transaction-visual")],Zn);const g4=ie`
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-xs) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var On=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ft=class extends oe{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[],this.price=[],this.amount=[],this.symbol=[]}render(){return z`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${yn(this.direction)}
          type=${this.type}
          onlyDirectionIcon=${yn(this.onlyDirectionIcon)}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${Hu[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[0];return e?z`
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}templateSecondDescription(){var n;const e=(n=this.descriptions)==null?void 0:n[1];return e?z`
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        `:null}};Ft.styles=[ue,g4];On([C()],Ft.prototype,"type",void 0);On([C({type:Array})],Ft.prototype,"descriptions",void 0);On([C()],Ft.prototype,"date",void 0);On([C({type:Boolean})],Ft.prototype,"onlyDirectionIcon",void 0);On([C()],Ft.prototype,"status",void 0);On([C()],Ft.prototype,"direction",void 0);On([C({type:Array})],Ft.prototype,"images",void 0);On([C({type:Array})],Ft.prototype,"price",void 0);On([C({type:Array})],Ft.prototype,"amount",void 0);On([C({type:Array})],Ft.prototype,"symbol",void 0);Ft=On([V("wui-transaction-list-item")],Ft);const m4=ie`
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var w4=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let kc=class extends oe{render(){return z`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `}};kc.styles=[ue,m4];kc=w4([V("wui-transaction-list-item-loader")],kc);const b4=ie`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 9px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var Xd=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Io=class extends oe{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const e=this.size==="md"?"mini-700":"micro-700";return z`
      <wui-text data-variant=${this.variant} variant=${e} color="inherit">
        <slot></slot>
      </wui-text>
    `}};Io.styles=[ue,b4];Xd([C()],Io.prototype,"variant",void 0);Xd([C()],Io.prototype,"size",void 0);Io=Xd([V("wui-tag")],Io);const v4=ie`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Nn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ht=class extends oe{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.installed=!1,this.disabled=!1,this.showAllWallets=!1}render(){return z`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?z` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?z` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?z`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
        .installed=${this.installed}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?z`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?z`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?z`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Ht.styles=[ue,Pe,v4];Nn([C({type:Array})],Ht.prototype,"walletImages",void 0);Nn([C()],Ht.prototype,"imageSrc",void 0);Nn([C()],Ht.prototype,"name",void 0);Nn([C()],Ht.prototype,"tagLabel",void 0);Nn([C()],Ht.prototype,"tagVariant",void 0);Nn([C()],Ht.prototype,"icon",void 0);Nn([C()],Ht.prototype,"walletIcon",void 0);Nn([C({type:Boolean})],Ht.prototype,"installed",void 0);Nn([C({type:Boolean})],Ht.prototype,"disabled",void 0);Nn([C({type:Boolean})],Ht.prototype,"showAllWallets",void 0);Ht=Nn([V("wui-list-wallet")],Ht);const y4=ie`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var Jf=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Qs=class extends oe{constructor(){super(...arguments),this.logo="google"}render(){return z`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Qs.styles=[ue,y4];Jf([C()],Qs.prototype,"logo",void 0);Qs=Jf([V("wui-logo")],Qs);const x4=ie`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Qd=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ro=class extends oe{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return z`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ro.styles=[ue,Pe,x4];Qd([C()],Ro.prototype,"logo",void 0);Qd([C({type:Boolean})],Ro.prototype,"disabled",void 0);Ro=Qd([V("wui-logo-select")],Ro);const C4=ie`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`;var bl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Pr=class extends oe{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1}render(){return z`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?z`
        <wui-icon-box
          size="sm"
          iconColor="error-100"
          backgroundColor="error-100"
          icon="warningCircle"
        ></wui-icon-box>
      `:this.imageSrc?z`<wui-image src=${this.imageSrc}></wui-image>`:z`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Pr.styles=[ue,Pe,C4];bl([C()],Pr.prototype,"imageSrc",void 0);bl([C({type:Boolean})],Pr.prototype,"isUnsupportedChain",void 0);bl([C({type:Boolean})],Pr.prototype,"disabled",void 0);Pr=bl([V("wui-network-button")],Pr);const _4=ie`
  :host {
    position: relative;
    display: block;
  }
`;var vl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Or=class extends oe{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map(()=>""),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every(i=>i!==""),this.handleKeyDown=(e,n)=>{const i=e.target,o=this.getInputElement(i),r=["ArrowLeft","ArrowRight","Shift","Delete"];if(!o)return;r.includes(e.key)&&e.preventDefault();const s=o.selectionStart;switch(e.key){case"ArrowLeft":s&&o.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break;case"Backspace":o.value===""?this.focusInputField("prev",n):this.updateInput(o,n,"");break}},this.focusInputField=(e,n)=>{if(e==="next"){const i=n+1;if(!this.shouldInputBeEnabled(i))return;const o=this.numerics[i<this.length?i:n],r=o?this.getInputElement(o):void 0;r&&(r.disabled=!1,r.focus())}if(e==="prev"){const i=n-1,o=this.numerics[i>-1?i:n],r=o?this.getInputElement(o):void 0;r&&r.focus()}}}firstUpdated(){var n,i;this.otp&&(this.values=this.otp.split(""));const e=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e)),(i=this.numerics[0])==null||i.focus()}render(){return z`
      <wui-flex gap="xxs" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map((e,n)=>z`
            <wui-input-numeric
              @input=${i=>this.handleInput(i,n)}
              @click=${i=>this.selectInput(i)}
              @keydown=${i=>this.handleKeyDown(i,n)}
              .disabled=${!this.shouldInputBeEnabled(n)}
              .value=${this.values[n]||""}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}updateInput(e,n,i){const o=this.numerics[n],r=e||(o?this.getInputElement(o):void 0);r&&(r.value=i,this.values=this.values.map((s,a)=>a===n?i:s))}selectInput(e){const n=e.target;if(n){const i=this.getInputElement(n);i==null||i.select()}}handleInput(e,n){const i=e.target,o=this.getInputElement(i);if(o){const r=o.value;e.inputType==="insertFromPaste"?this.handlePaste(o,r,n):be.isNumber(r)&&e.data?(this.updateInput(o,n,e.data),this.focusInputField("next",n)):this.updateInput(o,n,"")}this.dispatchInputChangeEvent()}handlePaste(e,n,i){const o=n[0];if(o&&be.isNumber(o)){this.updateInput(e,i,o);const s=n.substring(1);if(i+1<this.length&&s.length){const a=this.numerics[i+1],c=a?this.getInputElement(a):void 0;c&&this.handlePaste(c,s,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){var n;return(n=e.shadowRoot)!=null&&n.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};Or.styles=[ue,_4];vl([C({type:Number})],Or.prototype,"length",void 0);vl([C({type:String})],Or.prototype,"otp",void 0);vl([Hd()],Or.prototype,"values",void 0);Or=vl([V("wui-otp")],Or);var Oa={},E4=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},Xf={},nn={};let e0;const T4=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];nn.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||e>40)throw new Error('"version" should be in range from 1 to 40');return e*4+17};nn.getSymbolTotalCodewords=function(e){return T4[e]};nn.getBCHDigit=function(t){let e=0;for(;t!==0;)e++,t>>>=1;return e};nn.setToSJISFunction=function(e){if(typeof e!="function")throw new Error('"toSJISFunc" is not a valid function.');e0=e};nn.isKanjiModeEnabled=function(){return typeof e0<"u"};nn.toSJIS=function(e){return e0(e)};var yl={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function e(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+n)}}t.isValid=function(i){return i&&typeof i.bit<"u"&&i.bit>=0&&i.bit<4},t.from=function(i,o){if(t.isValid(i))return i;try{return e(i)}catch{return o}}})(yl);function Qf(){this.buffer=[],this.length=0}Qf.prototype={get:function(t){const e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)===1},put:function(t,e){for(let n=0;n<e;n++)this.putBit((t>>>e-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var k4=Qf;function Na(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}Na.prototype.set=function(t,e,n,i){const o=t*this.size+e;this.data[o]=n,i&&(this.reservedBit[o]=!0)};Na.prototype.get=function(t,e){return this.data[t*this.size+e]};Na.prototype.xor=function(t,e,n){this.data[t*this.size+e]^=n};Na.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var A4=Na,e1={};(function(t){const e=nn.getSymbolSize;t.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,r=e(i),s=r===145?26:Math.ceil((r-13)/(2*o-2))*2,a=[r-7];for(let c=1;c<o-1;c++)a[c]=a[c-1]-s;return a.push(6),a.reverse()},t.getPositions=function(i){const o=[],r=t.getRowColCoords(i),s=r.length;for(let a=0;a<s;a++)for(let c=0;c<s;c++)a===0&&c===0||a===0&&c===s-1||a===s-1&&c===0||o.push([r[a],r[c]]);return o}})(e1);var t1={};const $4=nn.getSymbolSize,bh=7;t1.getPositions=function(e){const n=$4(e);return[[0,0],[n-bh,0],[0,n-bh]]};var n1={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};t.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},t.from=function(o){return t.isValid(o)?parseInt(o,10):void 0},t.getPenaltyN1=function(o){const r=o.size;let s=0,a=0,c=0,l=null,d=null;for(let p=0;p<r;p++){a=c=0,l=d=null;for(let f=0;f<r;f++){let b=o.get(p,f);b===l?a++:(a>=5&&(s+=e.N1+(a-5)),l=b,a=1),b=o.get(f,p),b===d?c++:(c>=5&&(s+=e.N1+(c-5)),d=b,c=1)}a>=5&&(s+=e.N1+(a-5)),c>=5&&(s+=e.N1+(c-5))}return s},t.getPenaltyN2=function(o){const r=o.size;let s=0;for(let a=0;a<r-1;a++)for(let c=0;c<r-1;c++){const l=o.get(a,c)+o.get(a,c+1)+o.get(a+1,c)+o.get(a+1,c+1);(l===4||l===0)&&s++}return s*e.N2},t.getPenaltyN3=function(o){const r=o.size;let s=0,a=0,c=0;for(let l=0;l<r;l++){a=c=0;for(let d=0;d<r;d++)a=a<<1&2047|o.get(l,d),d>=10&&(a===1488||a===93)&&s++,c=c<<1&2047|o.get(d,l),d>=10&&(c===1488||c===93)&&s++}return s*e.N3},t.getPenaltyN4=function(o){let r=0;const s=o.data.length;for(let c=0;c<s;c++)r+=o.data[c];return Math.abs(Math.ceil(r*100/s/5)-10)*e.N4};function n(i,o,r){switch(i){case t.Patterns.PATTERN000:return(o+r)%2===0;case t.Patterns.PATTERN001:return o%2===0;case t.Patterns.PATTERN010:return r%3===0;case t.Patterns.PATTERN011:return(o+r)%3===0;case t.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case t.Patterns.PATTERN101:return o*r%2+o*r%3===0;case t.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case t.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}t.applyMask=function(o,r){const s=r.size;for(let a=0;a<s;a++)for(let c=0;c<s;c++)r.isReserved(c,a)||r.xor(c,a,n(o,c,a))},t.getBestMask=function(o,r){const s=Object.keys(t.Patterns).length;let a=0,c=1/0;for(let l=0;l<s;l++){r(l),t.applyMask(l,o);const d=t.getPenaltyN1(o)+t.getPenaltyN2(o)+t.getPenaltyN3(o)+t.getPenaltyN4(o);t.applyMask(l,o),d<c&&(c=d,a=l)}return a}})(n1);var xl={};const Ni=yl,tc=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],nc=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];xl.getBlocksCount=function(e,n){switch(n){case Ni.L:return tc[(e-1)*4+0];case Ni.M:return tc[(e-1)*4+1];case Ni.Q:return tc[(e-1)*4+2];case Ni.H:return tc[(e-1)*4+3];default:return}};xl.getTotalCodewordsCount=function(e,n){switch(n){case Ni.L:return nc[(e-1)*4+0];case Ni.M:return nc[(e-1)*4+1];case Ni.Q:return nc[(e-1)*4+2];case Ni.H:return nc[(e-1)*4+3];default:return}};var i1={},Cl={};const Es=new Uint8Array(512),Ac=new Uint8Array(256);(function(){let e=1;for(let n=0;n<255;n++)Es[n]=e,Ac[e]=n,e<<=1,e&256&&(e^=285);for(let n=255;n<512;n++)Es[n]=Es[n-255]})();Cl.log=function(e){if(e<1)throw new Error("log("+e+")");return Ac[e]};Cl.exp=function(e){return Es[e]};Cl.mul=function(e,n){return e===0||n===0?0:Es[Ac[e]+Ac[n]]};(function(t){const e=Cl;t.mul=function(i,o){const r=new Uint8Array(i.length+o.length-1);for(let s=0;s<i.length;s++)for(let a=0;a<o.length;a++)r[s+a]^=e.mul(i[s],o[a]);return r},t.mod=function(i,o){let r=new Uint8Array(i);for(;r.length-o.length>=0;){const s=r[0];for(let c=0;c<o.length;c++)r[c]^=e.mul(o[c],s);let a=0;for(;a<r.length&&r[a]===0;)a++;r=r.slice(a)}return r},t.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let r=0;r<i;r++)o=t.mul(o,new Uint8Array([1,e.exp(r)]));return o}})(i1);const r1=i1;function t0(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}t0.prototype.initialize=function(e){this.degree=e,this.genPoly=r1.generateECPolynomial(this.degree)};t0.prototype.encode=function(e){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(e.length+this.degree);n.set(e);const i=r1.mod(n,this.genPoly),o=this.degree-i.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(i,o),r}return i};var S4=t0,o1={},tr={},n0={};n0.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40};var ii={};const s1="[0-9]+",I4="[A-Z $%*+\\-./:]+";let ea="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ea=ea.replace(/u/g,"\\u");const R4="(?:(?![A-Z0-9 $%*+\\-./:]|"+ea+`)(?:.|[\r
]))+`;ii.KANJI=new RegExp(ea,"g");ii.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");ii.BYTE=new RegExp(R4,"g");ii.NUMERIC=new RegExp(s1,"g");ii.ALPHANUMERIC=new RegExp(I4,"g");const P4=new RegExp("^"+ea+"$"),O4=new RegExp("^"+s1+"$"),N4=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");ii.testKanji=function(e){return P4.test(e)};ii.testNumeric=function(e){return O4.test(e)};ii.testAlphanumeric=function(e){return N4.test(e)};(function(t){const e=n0,n=ii;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(r,s){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?r.ccBits[0]:s<27?r.ccBits[1]:r.ccBits[2]},t.getBestModeForData=function(r){return n.testNumeric(r)?t.NUMERIC:n.testAlphanumeric(r)?t.ALPHANUMERIC:n.testKanji(r)?t.KANJI:t.BYTE},t.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},t.isValid=function(r){return r&&r.bit&&r.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+o)}}t.from=function(r,s){if(t.isValid(r))return r;try{return i(r)}catch{return s}}})(tr);(function(t){const e=nn,n=xl,i=yl,o=tr,r=n0,s=7973,a=e.getBCHDigit(s);function c(f,b,_){for(let $=1;$<=40;$++)if(b<=t.getCapacity($,_,f))return $}function l(f,b){return o.getCharCountIndicator(f,b)+4}function d(f,b){let _=0;return f.forEach(function($){const I=l($.mode,b);_+=I+$.getBitsLength()}),_}function p(f,b){for(let _=1;_<=40;_++)if(d(f,_)<=t.getCapacity(_,b,o.MIXED))return _}t.from=function(b,_){return r.isValid(b)?parseInt(b,10):_},t.getCapacity=function(b,_,$){if(!r.isValid(b))throw new Error("Invalid QR Code version");typeof $>"u"&&($=o.BYTE);const I=e.getSymbolTotalCodewords(b),L=n.getTotalCodewordsCount(b,_),T=(I-L)*8;if($===o.MIXED)return T;const U=T-l($,b);switch($){case o.NUMERIC:return Math.floor(U/10*3);case o.ALPHANUMERIC:return Math.floor(U/11*2);case o.KANJI:return Math.floor(U/13);case o.BYTE:default:return Math.floor(U/8)}},t.getBestVersionForData=function(b,_){let $;const I=i.from(_,i.M);if(Array.isArray(b)){if(b.length>1)return p(b,I);if(b.length===0)return 1;$=b[0]}else $=b;return c($.mode,$.getLength(),I)},t.getEncodedBits=function(b){if(!r.isValid(b)||b<7)throw new Error("Invalid QR Code version");let _=b<<12;for(;e.getBCHDigit(_)-a>=0;)_^=s<<e.getBCHDigit(_)-a;return b<<12|_}})(o1);var a1={};const Vu=nn,c1=1335,B4=21522,vh=Vu.getBCHDigit(c1);a1.getEncodedBits=function(e,n){const i=e.bit<<3|n;let o=i<<10;for(;Vu.getBCHDigit(o)-vh>=0;)o^=c1<<Vu.getBCHDigit(o)-vh;return(i<<10|o)^B4};var l1={};const M4=tr;function Po(t){this.mode=M4.NUMERIC,this.data=t.toString()}Po.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)};Po.prototype.getLength=function(){return this.data.length};Po.prototype.getBitsLength=function(){return Po.getBitsLength(this.data.length)};Po.prototype.write=function(e){let n,i,o;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),o=parseInt(i,10),e.put(o,10);const r=this.data.length-n;r>0&&(i=this.data.substr(n),o=parseInt(i,10),e.put(o,r*3+1))};var D4=Po;const L4=tr,su=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Oo(t){this.mode=L4.ALPHANUMERIC,this.data=t}Oo.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)};Oo.prototype.getLength=function(){return this.data.length};Oo.prototype.getBitsLength=function(){return Oo.getBitsLength(this.data.length)};Oo.prototype.write=function(e){let n;for(n=0;n+2<=this.data.length;n+=2){let i=su.indexOf(this.data[n])*45;i+=su.indexOf(this.data[n+1]),e.put(i,11)}this.data.length%2&&e.put(su.indexOf(this.data[n]),6)};var j4=Oo,U4=function(e){for(var n=[],i=e.length,o=0;o<i;o++){var r=e.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var s=e.charCodeAt(o+1);s>=56320&&s<=57343&&(r=(r-55296)*1024+s-56320+65536,o+=1)}if(r<128){n.push(r);continue}if(r<2048){n.push(r>>6|192),n.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){n.push(r>>12|224),n.push(r>>6&63|128),n.push(r&63|128);continue}if(r>=65536&&r<=1114111){n.push(r>>18|240),n.push(r>>12&63|128),n.push(r>>6&63|128),n.push(r&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const W4=U4,z4=tr;function No(t){this.mode=z4.BYTE,typeof t=="string"&&(t=W4(t)),this.data=new Uint8Array(t)}No.getBitsLength=function(e){return e*8};No.prototype.getLength=function(){return this.data.length};No.prototype.getBitsLength=function(){return No.getBitsLength(this.data.length)};No.prototype.write=function(t){for(let e=0,n=this.data.length;e<n;e++)t.put(this.data[e],8)};var F4=No;const H4=tr,V4=nn;function Bo(t){this.mode=H4.KANJI,this.data=t}Bo.getBitsLength=function(e){return e*13};Bo.prototype.getLength=function(){return this.data.length};Bo.prototype.getBitsLength=function(){return Bo.getBitsLength(this.data.length)};Bo.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let n=V4.toSJIS(this.data[e]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[e]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),t.put(n,13)}};var Z4=Bo,u1={exports:{}};(function(t){var e={single_source_shortest_paths:function(n,i,o){var r={},s={};s[i]=0;var a=e.PriorityQueue.make();a.push(i,0);for(var c,l,d,p,f,b,_,$,I;!a.empty();){c=a.pop(),l=c.value,p=c.cost,f=n[l]||{};for(d in f)f.hasOwnProperty(d)&&(b=f[d],_=p+b,$=s[d],I=typeof s[d]>"u",(I||$>_)&&(s[d]=_,a.push(d,_),r[d]=l))}if(typeof o<"u"&&typeof s[o]>"u"){var L=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(L)}return r},extract_shortest_path_from_predecessor_list:function(n,i){for(var o=[],r=i;r;)o.push(r),n[r],r=n[r];return o.reverse(),o},find_path:function(n,i,o){var r=e.single_source_shortest_paths(n,i,o);return e.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(n){var i=e.PriorityQueue,o={},r;n=n||{};for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=n.sorter||i.default_sorter,o},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var o={value:n,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=e})(u1);var G4=u1.exports;(function(t){const e=tr,n=D4,i=j4,o=F4,r=Z4,s=ii,a=nn,c=G4;function l(L){return unescape(encodeURIComponent(L)).length}function d(L,T,U){const M=[];let W;for(;(W=L.exec(U))!==null;)M.push({data:W[0],index:W.index,mode:T,length:W[0].length});return M}function p(L){const T=d(s.NUMERIC,e.NUMERIC,L),U=d(s.ALPHANUMERIC,e.ALPHANUMERIC,L);let M,W;return a.isKanjiModeEnabled()?(M=d(s.BYTE,e.BYTE,L),W=d(s.KANJI,e.KANJI,L)):(M=d(s.BYTE_KANJI,e.BYTE,L),W=[]),T.concat(U,M,W).sort(function(Q,g){return Q.index-g.index}).map(function(Q){return{data:Q.data,mode:Q.mode,length:Q.length}})}function f(L,T){switch(T){case e.NUMERIC:return n.getBitsLength(L);case e.ALPHANUMERIC:return i.getBitsLength(L);case e.KANJI:return r.getBitsLength(L);case e.BYTE:return o.getBitsLength(L)}}function b(L){return L.reduce(function(T,U){const M=T.length-1>=0?T[T.length-1]:null;return M&&M.mode===U.mode?(T[T.length-1].data+=U.data,T):(T.push(U),T)},[])}function _(L){const T=[];for(let U=0;U<L.length;U++){const M=L[U];switch(M.mode){case e.NUMERIC:T.push([M,{data:M.data,mode:e.ALPHANUMERIC,length:M.length},{data:M.data,mode:e.BYTE,length:M.length}]);break;case e.ALPHANUMERIC:T.push([M,{data:M.data,mode:e.BYTE,length:M.length}]);break;case e.KANJI:T.push([M,{data:M.data,mode:e.BYTE,length:l(M.data)}]);break;case e.BYTE:T.push([{data:M.data,mode:e.BYTE,length:l(M.data)}])}}return T}function $(L,T){const U={},M={start:{}};let W=["start"];for(let Z=0;Z<L.length;Z++){const Q=L[Z],g=[];for(let w=0;w<Q.length;w++){const v=Q[w],S=""+Z+w;g.push(S),U[S]={node:v,lastCount:0},M[S]={};for(let P=0;P<W.length;P++){const N=W[P];U[N]&&U[N].node.mode===v.mode?(M[N][S]=f(U[N].lastCount+v.length,v.mode)-f(U[N].lastCount,v.mode),U[N].lastCount+=v.length):(U[N]&&(U[N].lastCount=v.length),M[N][S]=f(v.length,v.mode)+4+e.getCharCountIndicator(v.mode,T))}}W=g}for(let Z=0;Z<W.length;Z++)M[W[Z]].end=0;return{map:M,table:U}}function I(L,T){let U;const M=e.getBestModeForData(L);if(U=e.from(T,M),U!==e.BYTE&&U.bit<M.bit)throw new Error('"'+L+'" cannot be encoded with mode '+e.toString(U)+`.
 Suggested mode is: `+e.toString(M));switch(U===e.KANJI&&!a.isKanjiModeEnabled()&&(U=e.BYTE),U){case e.NUMERIC:return new n(L);case e.ALPHANUMERIC:return new i(L);case e.KANJI:return new r(L);case e.BYTE:return new o(L)}}t.fromArray=function(T){return T.reduce(function(U,M){return typeof M=="string"?U.push(I(M,null)):M.data&&U.push(I(M.data,M.mode)),U},[])},t.fromString=function(T,U){const M=p(T,a.isKanjiModeEnabled()),W=_(M),Z=$(W,U),Q=c.find_path(Z.map,"start","end"),g=[];for(let w=1;w<Q.length-1;w++)g.push(Z.table[Q[w]].node);return t.fromArray(b(g))},t.rawSplit=function(T){return t.fromArray(p(T,a.isKanjiModeEnabled()))}})(l1);const _l=nn,au=yl,q4=k4,Y4=A4,K4=e1,J4=t1,Zu=n1,Gu=xl,X4=S4,$c=o1,Q4=a1,ev=tr,cu=l1;function tv(t,e){const n=t.size,i=J4.getPositions(e);for(let o=0;o<i.length;o++){const r=i[o][0],s=i[o][1];for(let a=-1;a<=7;a++)if(!(r+a<=-1||n<=r+a))for(let c=-1;c<=7;c++)s+c<=-1||n<=s+c||(a>=0&&a<=6&&(c===0||c===6)||c>=0&&c<=6&&(a===0||a===6)||a>=2&&a<=4&&c>=2&&c<=4?t.set(r+a,s+c,!0,!0):t.set(r+a,s+c,!1,!0))}}function nv(t){const e=t.size;for(let n=8;n<e-8;n++){const i=n%2===0;t.set(n,6,i,!0),t.set(6,n,i,!0)}}function iv(t,e){const n=K4.getPositions(e);for(let i=0;i<n.length;i++){const o=n[i][0],r=n[i][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?t.set(o+s,r+a,!0,!0):t.set(o+s,r+a,!1,!0)}}function rv(t,e){const n=t.size,i=$c.getEncodedBits(e);let o,r,s;for(let a=0;a<18;a++)o=Math.floor(a/3),r=a%3+n-8-3,s=(i>>a&1)===1,t.set(o,r,s,!0),t.set(r,o,s,!0)}function lu(t,e,n){const i=t.size,o=Q4.getEncodedBits(e,n);let r,s;for(r=0;r<15;r++)s=(o>>r&1)===1,r<6?t.set(r,8,s,!0):r<8?t.set(r+1,8,s,!0):t.set(i-15+r,8,s,!0),r<8?t.set(8,i-r-1,s,!0):r<9?t.set(8,15-r-1+1,s,!0):t.set(8,15-r-1,s,!0);t.set(i-8,8,1,!0)}function ov(t,e){const n=t.size;let i=-1,o=n-1,r=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let c=0;c<2;c++)if(!t.isReserved(o,a-c)){let l=!1;s<e.length&&(l=(e[s]>>>r&1)===1),t.set(o,a-c,l),r--,r===-1&&(s++,r=7)}if(o+=i,o<0||n<=o){o-=i,i=-i;break}}}function sv(t,e,n){const i=new q4;n.forEach(function(c){i.put(c.mode.bit,4),i.put(c.getLength(),ev.getCharCountIndicator(c.mode,t)),c.write(i)});const o=_l.getSymbolTotalCodewords(t),r=Gu.getTotalCodewordsCount(t,e),s=(o-r)*8;for(i.getLengthInBits()+4<=s&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const a=(s-i.getLengthInBits())/8;for(let c=0;c<a;c++)i.put(c%2?17:236,8);return av(i,t,e)}function av(t,e,n){const i=_l.getSymbolTotalCodewords(e),o=Gu.getTotalCodewordsCount(e,n),r=i-o,s=Gu.getBlocksCount(e,n),a=i%s,c=s-a,l=Math.floor(i/s),d=Math.floor(r/s),p=d+1,f=l-d,b=new X4(f);let _=0;const $=new Array(s),I=new Array(s);let L=0;const T=new Uint8Array(t.buffer);for(let Q=0;Q<s;Q++){const g=Q<c?d:p;$[Q]=T.slice(_,_+g),I[Q]=b.encode($[Q]),_+=g,L=Math.max(L,g)}const U=new Uint8Array(i);let M=0,W,Z;for(W=0;W<L;W++)for(Z=0;Z<s;Z++)W<$[Z].length&&(U[M++]=$[Z][W]);for(W=0;W<f;W++)for(Z=0;Z<s;Z++)U[M++]=I[Z][W];return U}function cv(t,e,n,i){let o;if(Array.isArray(t))o=cu.fromArray(t);else if(typeof t=="string"){let l=e;if(!l){const d=cu.rawSplit(t);l=$c.getBestVersionForData(d,n)}o=cu.fromString(t,l||40)}else throw new Error("Invalid data");const r=$c.getBestVersionForData(o,n);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!e)e=r;else if(e<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const s=sv(e,n,o),a=_l.getSymbolSize(e),c=new Y4(a);return tv(c,e),nv(c),iv(c,e),lu(c,n,0),e>=7&&rv(c,e),ov(c,s),isNaN(i)&&(i=Zu.getBestMask(c,lu.bind(null,c,n))),Zu.applyMask(i,c),lu(c,n,i),{modules:c,version:e,errorCorrectionLevel:n,maskPattern:i,segments:o}}Xf.create=function(e,n){if(typeof e>"u"||e==="")throw new Error("No input text");let i=au.M,o,r;return typeof n<"u"&&(i=au.from(n.errorCorrectionLevel,au.M),o=$c.from(n.version),r=Zu.from(n.maskPattern),n.toSJISFunc&&_l.setToSJISFunction(n.toSJISFunc)),cv(e,o,i,r)};var d1={},i0={};(function(t){function e(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}t.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin>"u"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,s=i.scale||4;return{width:r,scale:r?4:s,margin:o,color:{dark:e(i.color.dark||"#000000ff"),light:e(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},t.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},t.getImageWidth=function(i,o){const r=t.getScale(i,o);return Math.floor((i+o.margin*2)*r)},t.qrToImageData=function(i,o,r){const s=o.modules.size,a=o.modules.data,c=t.getScale(s,r),l=Math.floor((s+r.margin*2)*c),d=r.margin*c,p=[r.color.light,r.color.dark];for(let f=0;f<l;f++)for(let b=0;b<l;b++){let _=(f*l+b)*4,$=r.color.light;if(f>=d&&b>=d&&f<l-d&&b<l-d){const I=Math.floor((f-d)/c),L=Math.floor((b-d)/c);$=p[a[I*s+L]?1:0]}i[_++]=$.r,i[_++]=$.g,i[_++]=$.b,i[_]=$.a}}})(i0);(function(t){const e=i0;function n(o,r,s){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=s,r.width=s,r.style.height=s+"px",r.style.width=s+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(r,s,a){let c=a,l=s;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),s||(l=i()),c=e.getOptions(c);const d=e.getImageWidth(r.modules.size,c),p=l.getContext("2d"),f=p.createImageData(d,d);return e.qrToImageData(f.data,r,c),n(p,l,d),p.putImageData(f,0,0),l},t.renderToDataURL=function(r,s,a){let c=a;typeof c>"u"&&(!s||!s.getContext)&&(c=s,s=void 0),c||(c={});const l=t.render(r,s,c),d=c.type||"image/png",p=c.rendererOpts||{};return l.toDataURL(d,p.quality)}})(d1);var h1={};const lv=i0;function yh(t,e){const n=t.a/255,i=e+'="'+t.hex+'"';return n<1?i+" "+e+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function uu(t,e,n){let i=t+e;return typeof n<"u"&&(i+=" "+n),i}function uv(t,e,n){let i="",o=0,r=!1,s=0;for(let a=0;a<t.length;a++){const c=Math.floor(a%e),l=Math.floor(a/e);!c&&!r&&(r=!0),t[a]?(s++,a>0&&c>0&&t[a-1]||(i+=r?uu("M",c+n,.5+l+n):uu("m",o,0),o=0,r=!1),c+1<e&&t[a+1]||(i+=uu("h",s),s=0)):o++}return i}h1.render=function(e,n,i){const o=lv.getOptions(n),r=e.modules.size,s=e.modules.data,a=r+o.margin*2,c=o.color.light.a?"<path "+yh(o.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+yh(o.color.dark,"stroke")+' d="'+uv(s,r,o.margin)+'"/>',d='viewBox="0 0 '+a+" "+a+'"',f='<svg xmlns="http://www.w3.org/2000/svg" '+(o.width?'width="'+o.width+'" height="'+o.width+'" ':"")+d+' shape-rendering="crispEdges">'+c+l+`</svg>
`;return typeof i=="function"&&i(null,f),f};const dv=E4,qu=Xf,p1=d1,hv=h1;function r0(t,e,n,i,o){const r=[].slice.call(arguments,1),s=r.length,a=typeof r[s-1]=="function";if(!a&&!dv())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(o=n,n=e,e=i=void 0):s===3&&(e.getContext&&typeof o>"u"?(o=i,i=void 0):(o=i,i=n,n=e,e=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=e,e=i=void 0):s===2&&!e.getContext&&(i=n,n=e,e=void 0),new Promise(function(c,l){try{const d=qu.create(n,i);c(t(d,e,i))}catch(d){l(d)}})}try{const c=qu.create(n,i);o(null,t(c,e,i))}catch(c){o(c)}}Oa.create=qu.create;Oa.toCanvas=r0.bind(null,p1.render);Oa.toDataURL=r0.bind(null,p1.renderToDataURL);Oa.toString=r0.bind(null,function(t,e,n){return hv.render(t,n)});const pv=.1,xh=2.5,li=7;function du(t,e,n){return t===e?!1:(t-e<0?e-t:t-e)<=n+pv}function fv(t,e){const n=Array.prototype.slice.call(Oa.create(t,{errorCorrectionLevel:e}).modules.data,0),i=Math.sqrt(n.length);return n.reduce((o,r,s)=>(s%i===0?o.push([r]):o[o.length-1].push(r))&&o,[])}const gv={generate(t,e,n){const i="#141414",o="transparent",s=[],a=fv(t,"Q"),c=e/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:$,y:I})=>{const L=(a.length-li)*c*$,T=(a.length-li)*c*I,U=.45;for(let M=0;M<l.length;M+=1){const W=c*(li-M*2);s.push(J`
            <rect
              fill=${M===2?i:o}
              width=${M===0?W-5:W}
              rx= ${M===0?(W-5)*U:W*U}
              ry= ${M===0?(W-5)*U:W*U}
              stroke=${i}
              stroke-width=${M===0?5:0}
              height=${M===0?W-5:W}
              x= ${M===0?T+c*M+5/2:T+c*M}
              y= ${M===0?L+c*M+5/2:L+c*M}
            />
          `)}});const d=Math.floor((n+25)/c),p=a.length/2-d/2,f=a.length/2+d/2-1,b=[];a.forEach(($,I)=>{$.forEach((L,T)=>{if(a[I][T]&&!(I<li&&T<li||I>a.length-(li+1)&&T<li||I<li&&T>a.length-(li+1))&&!(I>p&&I<f&&T>p&&T<f)){const U=I*c+c/2,M=T*c+c/2;b.push([U,M])}})});const _={};return b.forEach(([$,I])=>{var L;_[$]?(L=_[$])==null||L.push(I):_[$]=[I]}),Object.entries(_).map(([$,I])=>{const L=I.filter(T=>I.every(U=>!du(T,U,c)));return[Number($),L]}).forEach(([$,I])=>{I.forEach(L=>{s.push(J`<circle cx=${$} cy=${L} fill=${i} r=${c/xh} />`)})}),Object.entries(_).filter(([$,I])=>I.length>1).map(([$,I])=>{const L=I.filter(T=>I.some(U=>du(T,U,c)));return[Number($),L]}).map(([$,I])=>{I.sort((T,U)=>T<U?-1:1);const L=[];for(const T of I){const U=L.find(M=>M.some(W=>du(T,W,c)));U?U.push(T):L.push([T])}return[$,L.map(T=>[T[0],T[T.length-1]])]}).forEach(([$,I])=>{I.forEach(([L,T])=>{s.push(J`
              <line
                x1=${$}
                x2=${$}
                y1=${L}
                y2=${T}
                stroke=${i}
                stroke-width=${c/(xh/2)}
                stroke-linecap="round"
              />
            `)})}),s}},mv=ie`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var no=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Gn=class extends oe{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),this.style.cssText=`--local-size: ${this.size}px`,z`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const e=this.theme==="light"?this.size:this.size-32;return J`
      <svg height=${e} width=${e}>
        ${gv.generate(this.uri,e,this.arenaClear?0:e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?z`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:z`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Gn.styles=[ue,mv];no([C()],Gn.prototype,"uri",void 0);no([C({type:Number})],Gn.prototype,"size",void 0);no([C()],Gn.prototype,"theme",void 0);no([C()],Gn.prototype,"imageSrc",void 0);no([C()],Gn.prototype,"alt",void 0);no([C({type:Boolean})],Gn.prototype,"arenaClear",void 0);Gn=no([V("wui-qr-code")],Gn);const wv=ie`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var bv=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Sc=class extends oe{constructor(){super(...arguments),this.inputComponentRef=qd()}render(){return z`
      <wui-input-text
        ${Yd(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const e=this.inputComponentRef.value,n=e==null?void 0:e.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};Sc.styles=[ue,wv];Sc=bv([V("wui-search-bar")],Sc);const vv=ie`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: var(--wui-spacing-xs) var(--wui-spacing-m) var(--wui-spacing-xs) var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    box-sizing: border-box;
    max-height: 40px;
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Ba=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Zi=class extends oe{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return z`
      <wui-icon-box
        size="sm"
        iconSize="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
        background="opaque"
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};Zi.styles=[ue,vv];Ba([C()],Zi.prototype,"backgroundColor",void 0);Ba([C()],Zi.prototype,"iconColor",void 0);Ba([C()],Zi.prototype,"icon",void 0);Ba([C()],Zi.prototype,"message",void 0);Zi=Ba([V("wui-snackbar")],Zi);const yv=ie`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color, opacity;
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: color var(--wui-e ase-out-power-1) var(--wui-duration-md);
    will-change: color;
  }

  button {
    width: var(--local-tab-width);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`;var nr=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Tn=class extends oe{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.localTabWidth="100px",this.activeTab=0,this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,n)=>{var o;const i=n===this.activeTab;return z`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${i}
          data-testid="tab-${(o=e.label)==null?void 0:o.toLowerCase()}"
        >
          ${this.iconTemplate(e)}
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}iconTemplate(e){return e.icon?z`<wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>`:null}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,n){const i=this.buttons[this.activeTab],o=this.buttons[e],r=i==null?void 0:i.querySelector("wui-text"),s=o==null?void 0:o.querySelector("wui-text"),a=o==null?void 0:o.getBoundingClientRect(),c=s==null?void 0:s.getBoundingClientRect();i&&r&&!n&&e!==this.activeTab&&(r.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),i.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),o&&a&&c&&s&&(e!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+c.width)+6}px`,o.animate([{width:`${a.width+c.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:125,delay:n?0:200,fill:"forwards",easing:"ease"}))}};Tn.styles=[ue,Pe,yv];nr([C({type:Array})],Tn.prototype,"tabs",void 0);nr([C()],Tn.prototype,"onTabChange",void 0);nr([C({type:Array})],Tn.prototype,"buttons",void 0);nr([C({type:Boolean})],Tn.prototype,"disabled",void 0);nr([C()],Tn.prototype,"localTabWidth",void 0);nr([Hd()],Tn.prototype,"activeTab",void 0);nr([Hd()],Tn.prototype,"isDense",void 0);Tn=nr([V("wui-tabs")],Tn);const xv=ie`
  :host {
    display: block;
  }

  :host > button {
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    border-width: 0px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
  }

  :host > button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var o0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Mo=class extends oe{constructor(){super(...arguments),this.text=""}render(){return z`
      <button ontouchstart>
        ${this.tokenTemplate()}
        <wui-text variant="paragraph-600" color="fg-100">${this.text}</wui-text>
      </button>
    `}tokenTemplate(){return this.imageSrc?z`<wui-image src=${this.imageSrc}></wui-image>`:z`
      <wui-icon-box
        size="sm"
        iconColor="fg-200"
        backgroundColor="fg-300"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Mo.styles=[ue,Pe,xv];o0([C()],Mo.prototype,"imageSrc",void 0);o0([C()],Mo.prototype,"text",void 0);Mo=o0([V("wui-token-button")],Mo);const Cv=ie`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);

    color: var(--wui-color-bg-100);
    position: relative;
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-bg-150);
    border: 1px solid var(--wui-gray-glass-005);
  }

  :host([data-variant='shade']) > wui-text {
    color: var(--wui-color-fg-150);
  }

  :host([data-variant='fill']) {
    background-color: var(--wui-color-fg-100);
    border: none;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var El=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Nr=class extends oe{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.message=""}render(){return this.dataset.variant=this.variant,z`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name=${this.variant==="fill"?"cursor":"cursorTransparent"}
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Nr.styles=[ue,Pe,Cv];El([C()],Nr.prototype,"placement",void 0);El([C()],Nr.prototype,"variant",void 0);El([C()],Nr.prototype,"message",void 0);Nr=El([V("wui-tooltip")],Nr);const _v=ie`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 100%;
    background-color: var(--wui-accent-glass-010);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-accent-glass-010);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  wui-tooltip {
    padding: 7px var(--wui-spacing-s) 8px var(--wui-spacing-s);
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translate(-50%, -100%);
    opacity: 0;
    display: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }

    button:active:enabled {
      background-color: var(--wui-accent-glass-020);
    }
  }
`;var s0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Do=class extends oe{constructor(){super(...arguments),this.text="",this.icon="card"}render(){return z`<button
        @mouseenter=${this.onMouseEnter.bind(this)}
        @mouseleave=${this.onMouseLeave.bind(this)}
        ontouchstart
      >
        <wui-icon color="accent-100" name=${this.icon} size="lg"></wui-icon>
      </button>
      <wui-tooltip variant="shade" message=${this.text} placement="top"></wui-tooltip>`}onMouseEnter(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-tooltip");e&&(e.style.display="flex",e==null||e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease",duration:250}))}onMouseLeave(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-tooltip");e&&(e.style.display="none",e==null||e.animate([{opacity:1},{opacity:0}],{fill:"forwards",easing:"ease",duration:200}))}};Do.styles=[ue,Pe,_v];s0([C()],Do.prototype,"text",void 0);s0([C()],Do.prototype,"icon",void 0);Do=s0([V("wui-tooltip-select")],Do);const Ev=ie`
  :host > wui-flex {
    cursor: pointer;
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-l);
    width: 100%;
    background-color: transparent;
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
    transition: background-color 0.2s linear;
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    position: relative;
  }

  :host > wui-flex > wui-image::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-l);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var es=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let fi=class extends oe{constructor(){super(...arguments),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0}render(){var n;const e=(n=Ct.multiply(this.price,this.amount))==null?void 0:n.toFixed(3);return z`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="3xs">
          <wui-flex justifyContent="space-between">
            <wui-text variant="paragraph-500" color="fg-100">${this.name}</wui-text>
            ${e?z`
                  <wui-text variant="paragraph-500" color="fg-100">
                    $${be.formatNumberToLocalString(e,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="small-400" color="fg-200">${this.symbol}</wui-text>
            ${this.amount&&z`<wui-text variant="small-400" color="fg-200"
              >${be.formatNumberToLocalString(this.amount,4)}</wui-text
            >`}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageSrc?z`<wui-image width="40" height="40" src=${this.imageSrc}></wui-image>`:null}};fi.styles=[ue,Pe,Ev];es([C()],fi.prototype,"imageSrc",void 0);es([C()],fi.prototype,"name",void 0);es([C()],fi.prototype,"symbol",void 0);es([C()],fi.prototype,"price",void 0);es([C()],fi.prototype,"amount",void 0);fi=es([V("wui-token-list-item")],fi);const Tv=ie`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--wui-icon-box-size-xl);
    height: var(--wui-icon-box-size-xl);
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Tl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Br=class extends oe{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,z`${this.templateVisual()}`}templateVisual(){return this.imageSrc?z`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:z`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};Br.styles=[ue,Tv];Tl([C()],Br.prototype,"imageSrc",void 0);Tl([C()],Br.prototype,"alt",void 0);Tl([C({type:Boolean})],Br.prototype,"borderRadiusFull",void 0);Br=Tl([V("wui-visual-thumbnail")],Br);const kv=ie`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`;var kl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Mr=class extends oe{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return z`
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `}};Mr.styles=[ue,Pe,kv];kl([C()],Mr.prototype,"label",void 0);kl([C()],Mr.prototype,"description",void 0);kl([C()],Mr.prototype,"icon",void 0);Mr=kl([V("wui-notice-card")],Mr);const Av=ie`
  button {
    height: auto;
    position: relative;
    flex-direction: column;
    gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  .overflowedContent {
    width: 100%;
    overflow: hidden;
  }

  .overflowedContent[data-active='false']:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, var(--wui-color-bg-200), transparent);
    border-bottom-left-radius: var(--wui-border-radius-xs);
    border-bottom-right-radius: var(--wui-border-radius-xs);
  }

  .heightContent {
    max-height: 100px;
  }

  pre {
    text-align: left;
    white-space: pre-wrap;
    height: auto;
    overflow-x: auto;
    overflow-wrap: anywhere;
  }
`;var a0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const hu=100;let Lo=class extends oe{constructor(){super(...arguments),this.textTitle="",this.overflowedContent="",this.toggled=!1,this.enableAccordion=!1,this.scrollElement=void 0,this.scrollHeightElement=0}updated(e){super.updated(e),(e.has("textTitle")||e.has("overflowedContent"))&&setTimeout(()=>{this.checkHeight()},1)}checkHeight(){this.updateComplete.then(()=>{var i,o;const e=(i=this.shadowRoot)==null?void 0:i.querySelector(".heightContent"),n=(o=this.shadowRoot)==null?void 0:o.querySelector(".textContent");if(e&&n){this.scrollElement=e;const r=n==null?void 0:n.scrollHeight;r&&r>hu&&(this.enableAccordion=!0,this.scrollHeightElement=r,this.requestUpdate())}})}render(){return z`
      <button ontouchstart @click=${()=>this.onClick()}>
        <wui-flex justifyContent="space-between" alignItems="center">
          <wui-text variant="paragraph-500" color="fg-100">${this.textTitle}</wui-text>
          ${this.chevronTemplate()}
        </wui-flex>
        <div
          data-active=${this.enableAccordion?!!this.toggled:!0}
          class="overflowedContent"
        >
          <div class="heightContent">
            <wui-text class="textContent" variant="paragraph-400" color="fg-200">
              <pre>${this.overflowedContent}</pre>
            </wui-text>
          </div>
        </div>
      </button>
    `}onClick(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-icon");this.enableAccordion&&(this.toggled=!this.toggled,this.requestUpdate(),this.scrollElement&&this.scrollElement.animate([{maxHeight:this.toggled?`${hu}px`:`${this.scrollHeightElement}px`},{maxHeight:this.toggled?`${this.scrollHeightElement}px`:`${hu}px`}],{duration:300,fill:"forwards",easing:"ease"}),e&&e.animate([{transform:this.toggled?"rotate(0deg)":"rotate(180deg)"},{transform:this.toggled?"rotate(180deg)":"rotate(0deg)"}],{duration:300,fill:"forwards",easing:"ease"}))}chevronTemplate(){return this.enableAccordion?z` <wui-icon color="fg-100" size="sm" name="chevronBottom"></wui-icon>`:null}};Lo.styles=[ue,Pe,Av];a0([C()],Lo.prototype,"textTitle",void 0);a0([C()],Lo.prototype,"overflowedContent",void 0);Lo=a0([V("wui-list-accordion")],Lo);const $v=ie`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-s);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var Al=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Dr=class extends oe{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return z`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color=${this.textValue?"fg-200":"fg-100"}>
          ${this.textTitle}
        </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?z`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?z` <wui-text variant="paragraph-400" color="fg-100"> ${this.textValue} </wui-text>`:z`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Dr.styles=[ue,Pe,$v];Al([C()],Dr.prototype,"imageSrc",void 0);Al([C()],Dr.prototype,"textTitle",void 0);Al([C()],Dr.prototype,"textValue",void 0);Dr=Al([V("wui-list-content")],Dr);const Sv=ie`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button[data-transparent='true'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var Ma=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Gi=class extends oe{constructor(){super(...arguments),this.imageSrc="",this.name="",this.disabled=!1,this.transparent=!1}render(){return z`
      <button data-transparent=${this.transparent} ?disabled=${this.disabled} ontouchstart>
        ${this.templateNetworkImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
      </button>
    `}templateNetworkImage(){return this.imageSrc?z`<wui-network-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-network-image>`:this.imageSrc?null:z`<wui-network-image size="sm" name=${this.name}></wui-network-image>`}};Gi.styles=[ue,Pe,Sv];Ma([C()],Gi.prototype,"imageSrc",void 0);Ma([C()],Gi.prototype,"name",void 0);Ma([C({type:Boolean})],Gi.prototype,"disabled",void 0);Ma([C({type:Boolean})],Gi.prototype,"transparent",void 0);Gi=Ma([V("wui-list-network")],Gi);const Iv=ie`
  :host {
    display: flex;
    flex-direction: column;
    gap: var(--wui-spacing-l);
    padding: 17px 18px 17px var(--wui-spacing-m);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-image {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-icon {
    width: var(--wui-icon-size-lg);
    height: var(--wui-icon-size-lg);
  }
`;var ts=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let gi=class extends oe{constructor(){super(...arguments),this.amount="",this.networkCurreny="",this.networkImageUrl="",this.receiverAddress="",this.addressExplorerUrl=""}render(){return z`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">Sending</wui-text>
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">
            ${this.amount} ${this.networkCurreny}
          </wui-text>
          ${this.templateNetworkVisual()}
        </wui-flex>
      </wui-flex>
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="paragraph-500" color="fg-200">To</wui-text>
        <wui-chip
          icon="externalLink"
          variant="shadeSmall"
          href=${this.addressExplorerUrl}
          title=${this.receiverAddress}
        ></wui-chip>
      </wui-flex>
    `}templateNetworkVisual(){return this.networkImageUrl?z`<wui-image src=${this.networkImageUrl} alt="Network Image"></wui-image>`:z`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};gi.styles=[ue,Pe,Iv];ts([C()],gi.prototype,"amount",void 0);ts([C()],gi.prototype,"networkCurreny",void 0);ts([C()],gi.prototype,"networkImageUrl",void 0);ts([C()],gi.prototype,"receiverAddress",void 0);ts([C()],gi.prototype,"addressExplorerUrl",void 0);gi=ts([V("wui-list-wallet-transaction")],gi);const Rv=ie`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
  }

  :host > wui-flex:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .purchase-image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: var(--wui-icon-box-size-lg);
    height: var(--wui-icon-box-size-lg);
  }

  .purchase-image-container wui-image {
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
  }

  .purchase-image-container wui-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-icon-box-size-lg) / 2);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .purchase-image-container wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var rn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let $t=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="Bought",this.purchaseValue="",this.purchaseCurrency="",this.date="",this.completed=!1,this.inProgress=!1,this.failed=!1,this.onClick=null,this.symbol=""}firstUpdated(){this.icon||this.fetchTokenImage()}render(){return z`
      <wui-flex>
        ${this.imageTemplate()}
        <wui-flex flexDirection="column" gap="4xs" flexGrow="1">
          <wui-flex gap="xxs" alignItems="center" justifyContent="flex-start">
            ${this.statusIconTemplate()}
            <wui-text variant="paragraph-500" color="fg-100"> ${this.label}</wui-text>
          </wui-flex>
          <wui-text variant="small-400" color="fg-200">
            + ${this.purchaseValue} ${this.purchaseCurrency}
          </wui-text>
        </wui-flex>
        ${this.inProgress?z`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:z`<wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>`}
      </wui-flex>
    `}async fetchTokenImage(){await xe._fetchTokenImage(this.purchaseCurrency)}statusIconTemplate(){return this.inProgress?null:this.completed?this.boughtIconTemplate():this.errorIconTemplate()}errorIconTemplate(){return z`<wui-icon-box
      size="xxs"
      iconColor="error-100"
      backgroundColor="error-100"
      background="opaque"
      icon="close"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}imageTemplate(){const e=this.icon||`https://avatar.vercel.sh/andrew.svg?size=50&text=${this.symbol}`;return z`<wui-flex class="purchase-image-container">
      <wui-image src=${e}></wui-image>
    </wui-flex>`}boughtIconTemplate(){return z`<wui-icon-box
      size="xxs"
      iconColor="success-100"
      backgroundColor="success-100"
      background="opaque"
      icon="arrowBottom"
      borderColor="wui-color-bg-125"
    ></wui-icon-box>`}};$t.styles=[ue,Pe,Rv];rn([C({type:Boolean})],$t.prototype,"disabled",void 0);rn([C()],$t.prototype,"color",void 0);rn([C()],$t.prototype,"label",void 0);rn([C()],$t.prototype,"purchaseValue",void 0);rn([C()],$t.prototype,"purchaseCurrency",void 0);rn([C()],$t.prototype,"date",void 0);rn([C({type:Boolean})],$t.prototype,"completed",void 0);rn([C({type:Boolean})],$t.prototype,"inProgress",void 0);rn([C({type:Boolean})],$t.prototype,"failed",void 0);rn([C()],$t.prototype,"onClick",void 0);rn([C()],$t.prototype,"symbol",void 0);rn([C()],$t.prototype,"icon",void 0);$t=rn([V("wui-onramp-activity-item")],$t);const Pv=ie`
  button {
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: var(--wui-spacing-s);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .provider-image {
    width: var(--wui-spacing-3xl);
    min-width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    position: relative;
    overflow: hidden;
  }

  .provider-image::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-xs) - calc(var(--wui-spacing-s) / 2));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  .network-icon {
    width: var(--wui-spacing-m);
    height: var(--wui-spacing-m);
    border-radius: calc(var(--wui-spacing-m) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
    transition: box-shadow var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-005),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var ir=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let kn=class extends oe{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return z`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-visual name=${yn(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="4xs">
          <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="l">
            <wui-text variant="tiny-500" color="fg-100">
              <wui-text variant="tiny-400" color="fg-200">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="xxs">
              <wui-icon name="bank" size="xs" color="fg-150"></wui-icon>
              <wui-icon name="card" size="xs" color="fg-150"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?z`<wui-loading-spinner color="fg-200" size="md"></wui-loading-spinner>`:z`<wui-icon name="chevronRight" color="fg-200" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var i;const e=de.getRequestedCaipNetworks(),n=(i=e==null?void 0:e.filter(o=>o==null?void 0:o.imageId))==null?void 0:i.slice(0,5);return z`
      <wui-flex class="networks">
        ${n==null?void 0:n.map(o=>z`
            <wui-flex class="network-icon">
              <wui-image src=${yn(ze.getNetworkImage(o))}></wui-image>
            </wui-flex>
          `)}
      </wui-flex>
    `}};kn.styles=[ue,Pe,Pv];ir([C({type:Boolean})],kn.prototype,"disabled",void 0);ir([C()],kn.prototype,"color",void 0);ir([C()],kn.prototype,"name",void 0);ir([C()],kn.prototype,"label",void 0);ir([C()],kn.prototype,"feeRange",void 0);ir([C({type:Boolean})],kn.prototype,"loading",void 0);ir([C()],kn.prototype,"onClick",void 0);kn=ir([V("wui-onramp-provider-item")],kn);const Ov=ie`
  button {
    display: flex;
    gap: var(--wui-spacing-3xs);
    align-items: center;
    padding: 6.25px var(--wui-spacing-xs) 7.25px var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-090);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-060);
    transition: background-color var(--wui-duration-md) var(--wui-ease-inout-power-1);
    will-change: background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-080);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-060);
    }
  }
`;var f1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ta=class extends oe{constructor(){super(...arguments),this.text=""}render(){return z`<button ontouchstart>
      <wui-text variant="small-600" color="bg-100">${this.text}</wui-text>
      <wui-icon color="bg-100" size="xs" name="arrowRight"></wui-icon>
    </button>`}};ta.styles=[ue,Pe,Ov];f1([C()],ta.prototype,"text",void 0);ta=f1([V("wui-promo")],ta);const Nv=ie`
  span {
    font-weight: 500;
    font-size: 40px;
    color: var(--wui-color-fg-100);
    line-height: 130%; /* 52px */
    letter-spacing: -1.6px;
    text-align: center;
  }

  .pennies {
    color: var(--wui-color-fg-200);
  }
`;var c0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let jo=class extends oe{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return z`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};jo.styles=[ue,Nv];c0([C()],jo.prototype,"dollars",void 0);c0([C()],jo.prototype,"pennies",void 0);jo=c0([V("wui-balance")],jo);const Bv=ie`
  button {
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    padding: var(--wui-spacing-xs) var(--wui-spacing-s) var(--wui-spacing-xs) var(--wui-spacing-xs);
    position: relative;
  }

  wui-avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 0;
    outline: 3px solid var(--wui-gray-glass-005);
  }

  wui-icon-box,
  wui-image {
    width: 16px;
    height: 16px;
    border-radius: var(--wui-border-radius-3xl);
    position: absolute;
    left: 26px;
    top: 24px;
  }

  wui-image {
    outline: 2px solid var(--wui-color-bg-125);
  }

  wui-icon-box {
    outline: 2px solid var(--wui-color-bg-200);
    background-color: var(--wui-color-bg-250);
  }
`;var ns=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let mi=class extends oe{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.isProfileName=!1,this.address="",this.icon="chevronBottom"}render(){return z`<button ontouchstart data-testid="wui-profile-button">
      <wui-flex gap="xs" alignItems="center">
        <wui-avatar
          .imageSrc=${this.avatarSrc}
          alt=${this.address}
          address=${this.address}
        ></wui-avatar>
        ${this.networkImageTemplate()}
        <wui-flex gap="xs" alignItems="center">
          <wui-text variant="large-600" color="fg-100">
            ${be.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:4,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
          <wui-icon size="sm" color="fg-200" name=${this.icon}></wui-icon>
        </wui-flex>
      </wui-flex>
    </button>`}networkImageTemplate(){return this.networkSrc?z`<wui-image src=${this.networkSrc}></wui-image>`:z`
      <wui-icon-box
        size="xxs"
        iconColor="fg-200"
        backgroundColor="bg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};mi.styles=[ue,Pe,Bv];ns([C()],mi.prototype,"networkSrc",void 0);ns([C()],mi.prototype,"avatarSrc",void 0);ns([C({type:Boolean})],mi.prototype,"isProfileName",void 0);ns([C()],mi.prototype,"address",void 0);ns([C()],mi.prototype,"icon",void 0);mi=ns([V("wui-profile-button")],mi);const Mv=ie`
  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  button.disabled > wui-icon,
  button.disabled > wui-image {
    filter: grayscale(1);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='shade'],
  button[data-variant='shadeSmall'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  button[data-variant='success'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-success-glass-010);
    background-color: var(--wui-success-glass-010);
    color: var(--wui-color-success-100);
  }

  button[data-variant='error'] {
    column-gap: var(--wui-spacing-xxs);
    border: 1px solid var(--wui-error-glass-010);
    background-color: var(--wui-error-glass-010);
    color: var(--wui-color-error-100);
  }

  button[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    color: var(--wui-color-fg-150);
  }

  button[data-variant='transparent'],
  button[data-variant='success'],
  button[data-variant='shadeSmall'],
  button[data-variant='error'] {
    padding: 7px var(--wui-spacing-s) 7px 8px;
  }

  button[data-variant='transparent']:has(wui-text:first-child),
  button[data-variant='success']:has(wui-text:first-child),
  button[data-variant='shadeSmall']:has(wui-text:first-child),
  button[data-variant='error']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  button[data-variant='fill'],
  button[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-variant='fill']:has(wui-text:first-child),
  button[data-variant='shade']:has(wui-text:first-child) {
    padding: 9px var(--wui-spacing-m) 9px var(--wui-spacing-m);
  }

  button[data-variant='fill'] > wui-image,
  button[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-variant='fill'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-color-accent-090);
  }

  button[data-variant='shade'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image {
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  button[data-variant='fill'] > wui-icon,
  button[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-image,
  button[data-variant='success'] > wui-image,
  button[data-variant='shadeSmall'] > wui-image,
  button[data-variant='error'] > wui-image {
    width: 14px;
    height: 14px;
  }

  button[data-variant='transparent'] > wui-icon,
  button[data-variant='success'] > wui-icon,
  button[data-variant='shadeSmall'] > wui-icon,
  button[data-variant='error'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='shade']:focus-visible,
  button[data-variant='shadeSmall']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='success']:focus-visible {
    background-color: var(--wui-success-glass-015);
  }

  button[data-variant='error']:focus-visible {
    background-color: var(--wui-error-glass-015);
  }

  button.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='shade']:hover,
    button[data-variant='shadeSmall']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    button[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }

    button[data-variant='success']:hover {
      background-color: var(--wui-success-glass-015);
    }

    button[data-variant='error']:hover {
      background-color: var(--wui-error-glass-015);
    }
  }

  button[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  button[data-variant='shade']:active,
  button[data-variant='shadeSmall']:active {
    background-color: var(--wui-gray-glass-020);
  }

  button[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='success']:active {
    background-color: var(--wui-success-glass-020);
  }

  button[data-variant='error']:active {
    background-color: var(--wui-error-glass-020);
  }
`;var is=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let wi=class extends oe{constructor(){super(...arguments),this.variant="fill",this.imageSrc="",this.disabled=!1,this.icon="externalLink",this.text=""}render(){const n=this.variant==="success"||this.variant==="transparent"||this.variant==="shadeSmall"?"small-600":"paragraph-600";return z`
      <button class=${this.disabled?"disabled":""} data-variant=${this.variant}>
        <wui-image src=${this.imageSrc}></wui-image>
        <wui-text variant=${n} color="inherit"> ${this.text} </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </button>
    `}};wi.styles=[ue,Pe,Mv];is([C()],wi.prototype,"variant",void 0);is([C()],wi.prototype,"imageSrc",void 0);is([C({type:Boolean})],wi.prototype,"disabled",void 0);is([C()],wi.prototype,"icon",void 0);is([C()],wi.prototype,"text",void 0);wi=is([V("wui-chip-button")],wi);const Dv=ie`
  button {
    display: flex;
    gap: var(--wui-spacing-xl);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-m) var(--wui-spacing-s);
  }

  wui-text {
    width: 100%;
  }

  wui-flex {
    width: auto;
  }

  .network-icon {
    width: var(--wui-spacing-2l);
    height: var(--wui-spacing-2l);
    border-radius: calc(var(--wui-spacing-2l) / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px var(--wui-gray-glass-002),
      0 0 0 3px var(--wui-color-modal-bg);
  }
`;var l0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Uo=class extends oe{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return z`
      <button ontouchstart>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
        <wui-flex gap="3xs" alignItems="center">
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="fg-200"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return z` <wui-flex class="networks">
      ${e==null?void 0:e.map(n=>z` <wui-flex class="network-icon"> <wui-image src=${n}></wui-image> </wui-flex>`)}
    </wui-flex>`}};Uo.styles=[ue,Pe,Dv];l0([C({type:Array})],Uo.prototype,"networkImages",void 0);l0([C()],Uo.prototype,"text",void 0);Uo=l0([V("wui-compatible-network")],Uo);const Lv=ie`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-1xs) var(--wui-spacing-s) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }
`;var u0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Wo=class extends oe{constructor(){super(...arguments),this.icon="externalLink",this.text=""}render(){return z`
      <wui-flex gap="1xs" alignItems="center">
        <wui-icon-box
          size="sm"
          iconcolor="fg-200"
          backgroundcolor="fg-200"
          icon=${this.icon}
          background="transparent"
        ></wui-icon-box>
        <wui-text variant="small-400" color="fg-200">${this.text}</wui-text>
      </wui-flex>
    `}};Wo.styles=[ue,Pe,Lv];u0([C()],Wo.prototype,"icon",void 0);u0([C()],Wo.prototype,"text",void 0);Wo=u0([V("wui-banner")],Wo);const jv=ie`
  button {
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    background-color: var(--wui-gray-glass-002);
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image {
    width: var(--wui-spacing-3xl);
    height: var(--wui-spacing-3xl);
    border-radius: var(--wui-border-radius-3xl);
  }
`;var io=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let qn=class extends oe{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return z`
      <button data-clickable=${String(this.clickable)} ontouchstart>
        <wui-flex gap="s" alignItems="center">
          <wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>
          <wui-flex flexDirection="column" justifyContent="spaceBetween">
            <wui-text variant="paragraph-500" color="fg-100">${this.tokenName}</wui-text>
            <wui-text variant="small-400" color="fg-200">
              ${be.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-text variant="paragraph-500" color="fg-100">$${this.tokenValue.toFixed(2)}</wui-text>
      </button>
    `}};qn.styles=[ue,Pe,jv];io([C()],qn.prototype,"tokenName",void 0);io([C()],qn.prototype,"tokenImageUrl",void 0);io([C({type:Number})],qn.prototype,"tokenValue",void 0);io([C()],qn.prototype,"tokenAmount",void 0);io([C()],qn.prototype,"tokenCurrency",void 0);io([C({type:Boolean})],qn.prototype,"clickable",void 0);qn=io([V("wui-list-token")],qn);const Uv=ie`
  button {
    width: 100%;
    display: flex;
    gap: var(--wui-spacing-s);
    align-items: center;
    justify-content: flex-start;
    padding: var(--wui-spacing-s) var(--wui-spacing-m) var(--wui-spacing-s) var(--wui-spacing-s);
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon-box {
    width: var(--wui-spacing-2xl);
    height: var(--wui-spacing-2xl);
  }

  wui-flex {
    width: auto;
  }
`;var rr=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let An=class extends oe{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.iconBackgroundColor="accent-100",this.iconColor="accent-100",this.disabled=!1}render(){return z`
      <button ontouchstart ?disabled=${this.disabled}>
        <wui-icon-box
          iconColor=${this.iconColor}
          backgroundColor=${this.iconBackgroundColor}
          size="inherit"
          icon=${this.icon}
          iconSize="md"
        ></wui-icon-box>
        <wui-flex flexDirection="column" justifyContent="spaceBetween">
          ${this.titleTemplate()}
          <wui-text variant="small-400" color="fg-200"> ${this.description}</wui-text></wui-flex
        >
      </button>
    `}titleTemplate(){return this.tag?z` <wui-flex alignItems="center" gap="xxs"
        ><wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text
        ><wui-tag tagType="main" size="md">${this.tag}</wui-tag>
      </wui-flex>`:z`<wui-text variant="paragraph-500" color="fg-100">${this.text}</wui-text>`}};An.styles=[ue,Pe,Uv];rr([C()],An.prototype,"icon",void 0);rr([C()],An.prototype,"text",void 0);rr([C()],An.prototype,"description",void 0);rr([C()],An.prototype,"tag",void 0);rr([C()],An.prototype,"iconBackgroundColor",void 0);rr([C()],An.prototype,"iconColor",void 0);rr([C({type:Boolean})],An.prototype,"disabled",void 0);An=rr([V("wui-list-description")],An);const Wv=ie`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    background: transparent;
    width: 100%;
    height: auto;
    font-family: var(--wui-font-family);
    color: var(--wui-color-fg-100);

    font-feature-settings: 'case' on;
    font-size: 32px;
    font-weight: var(--wui-font-weight-light);
    caret-color: var(--wui-color-accent-100);
    line-height: 130%;
    letter-spacing: -1.28px;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }
`,zv=/[.*+?^${}()|[\]\\]/gu,Fv=/[0-9,.]/u;var $l=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Lr=class extends oe{constructor(){super(...arguments),this.inputElementRef=qd(),this.disabled=!1,this.value="",this.placeholder="0"}render(){var e;return(e=this.inputElementRef)!=null&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),z`<input
      ${Yd(this.inputElementRef)}
      type="text"
      inputmode="numeric"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${this.value??""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    /> `}dispatchInputChangeEvent(e){var i,o;const n=e.data;n&&!Fv.test(n)&&(i=this.inputElementRef)!=null&&i.value&&(this.inputElementRef.value.value=this.value.replace(new RegExp(n.replace(zv,"\\$&"),"gu"),"")),this.dispatchEvent(new CustomEvent("inputChange",{detail:(o=this.inputElementRef.value)==null?void 0:o.value,bubbles:!0,composed:!0}))}};Lr.styles=[ue,Pe,Wv];$l([C({type:Boolean})],Lr.prototype,"disabled",void 0);$l([C({type:String})],Lr.prototype,"value",void 0);$l([C({type:String})],Lr.prototype,"placeholder",void 0);Lr=$l([V("wui-input-amount")],Lr);const Hv=ie`
  :host {
    display: flex;
    gap: var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-xs) var(--wui-spacing-2xs)
      var(--wui-spacing-s);
    align-items: center;
  }

  wui-avatar,
  wui-icon,
  wui-image {
    width: 32px;
    height: 32px;
    border: 1px solid var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-002);
  }
`;var Da=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let qi=class extends oe{constructor(){super(...arguments),this.text="",this.address="",this.isAddress=!1}render(){return z`<wui-text variant="large-500" color="fg-100">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.isAddress?z`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?z`<wui-image src=${this.imageSrc}></wui-image>`:z`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};qi.styles=[ue,Pe,Hv];Da([C()],qi.prototype,"text",void 0);Da([C()],qi.prototype,"address",void 0);Da([C()],qi.prototype,"imageSrc",void 0);Da([C({type:Boolean})],qi.prototype,"isAddress",void 0);qi=Da([V("wui-preview-item")],qi);const Vv=ie`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var fn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Mt=class extends oe{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&be.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&be.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&be.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&be.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&be.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&be.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&be.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&be.getSpacingStyles(this.margin,3)};
    `,z`<slot></slot>`}};Mt.styles=[ue,Vv];fn([C()],Mt.prototype,"gridTemplateRows",void 0);fn([C()],Mt.prototype,"gridTemplateColumns",void 0);fn([C()],Mt.prototype,"justifyItems",void 0);fn([C()],Mt.prototype,"alignItems",void 0);fn([C()],Mt.prototype,"justifyContent",void 0);fn([C()],Mt.prototype,"alignContent",void 0);fn([C()],Mt.prototype,"columnGap",void 0);fn([C()],Mt.prototype,"rowGap",void 0);fn([C()],Mt.prototype,"gap",void 0);fn([C()],Mt.prototype,"padding",void 0);fn([C()],Mt.prototype,"margin",void 0);Mt=fn([V("wui-grid")],Mt);const Zv=ie`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-modal-bg);
  }
`;var g1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let na=class extends oe{constructor(){super(...arguments),this.text=""}render(){return z`${this.template()}`}template(){return this.text?z`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};na.styles=[ue,Zv];g1([C()],na.prototype,"text",void 0);na=g1([V("wui-separator")],na);const ws={interpolate(t,e,n){if(t.length!==2||e.length!==2)throw new Error("inputRange and outputRange must be an array of length 2");const i=t[0]||0,o=t[1]||0,r=e[0]||0,s=e[1]||0;return n<i?r:n>o?s:(s-r)/(o-i)*(n-i)+r}},Gv=3,qv=["receive","deposit","borrow","claim"],Yv=["withdraw","repay","burn"],Bi={getMonthName(t){const e=new Date;return e.setMonth(t),e.toLocaleString("en-US",{month:"long"})},getTransactionGroupTitle(t,e){const n=Md.getYear(),i=this.getMonthName(e);return t===n?i:`${i} ${t}`},getTransactionImages(t){const[e,n]=t,i=!!e&&(t==null?void 0:t.every(s=>!!s.nft_info)),o=(t==null?void 0:t.length)>1;return(t==null?void 0:t.length)===2&&!i?[this.getTransactionImage(e),this.getTransactionImage(n)]:o?t.map(s=>this.getTransactionImage(s)):[this.getTransactionImage(e)]},getTransactionImage(t){return{type:Bi.getTransactionTransferTokenType(t),url:Bi.getTransactionImageURL(t)}},getTransactionImageURL(t){var o,r,s,a,c;let e;const n=!!(t!=null&&t.nft_info),i=!!(t!=null&&t.fungible_info);return t&&n?e=(s=(r=(o=t==null?void 0:t.nft_info)==null?void 0:o.content)==null?void 0:r.preview)==null?void 0:s.url:t&&i&&(e=(c=(a=t==null?void 0:t.fungible_info)==null?void 0:a.icon)==null?void 0:c.url),e},getTransactionTransferTokenType(t){if(t!=null&&t.fungible_info)return"FUNGIBLE";if(t!=null&&t.nft_info)return"NFT"},getTransactionDescriptions(t){var p,f,b;const e=(p=t==null?void 0:t.metadata)==null?void 0:p.operationType,n=t==null?void 0:t.transfers,i=((f=t==null?void 0:t.transfers)==null?void 0:f.length)>0,o=((b=t==null?void 0:t.transfers)==null?void 0:b.length)>1,r=i&&(n==null?void 0:n.every(_=>!!(_!=null&&_.fungible_info))),[s,a]=n;let c=this.getTransferDescription(s),l=this.getTransferDescription(a);if(!i)return(e==="send"||e==="receive")&&r?(c=be.getTruncateString({string:t==null?void 0:t.metadata.sentFrom,charsStart:4,charsEnd:6,truncate:"middle"}),l=be.getTruncateString({string:t==null?void 0:t.metadata.sentTo,charsStart:4,charsEnd:6,truncate:"middle"}),[c,l]):[t.metadata.status];if(o)return n.map(_=>this.getTransferDescription(_));let d="";return qv.includes(e)?d="+":Yv.includes(e)&&(d="-"),c=d.concat(c),[c]},getTransferDescription(t){var n;let e="";return t&&(t!=null&&t.nft_info?e=((n=t==null?void 0:t.nft_info)==null?void 0:n.name)||"-":t!=null&&t.fungible_info&&(e=this.getFungibleTransferDescription(t)||"-")),e},getFungibleTransferDescription(t){var i;return t?[this.getQuantityFixedValue(t==null?void 0:t.quantity.numeric),(i=t==null?void 0:t.fungible_info)==null?void 0:i.symbol].join(" ").trim():null},getQuantityFixedValue(t){return t?parseFloat(t).toFixed(Gv):null}},Kv=Object.freeze(Object.defineProperty({__proto__:null,MathUtil:ws,TransactionUtil:Bi,UiHelperUtil:be,get WuiAccountButton(){return zt},get WuiAllWalletsImage(){return Ys},get WuiAvatar(){return Sr},get WuiBalance(){return jo},get WuiBanner(){return Wo},get WuiButton(){return Yt},get WuiCard(){return Cc},get WuiCardSelect(){return Hn},get WuiCardSelectLoader(){return Ks},get WuiChip(){return Vn},get WuiChipButton(){return wi},get WuiCompatibleNetwork(){return Uo},get WuiConnectButton(){return Ao},get WuiCtaButton(){return Ir},get WuiDetailsGroup(){return Ec},get WuiDetailsGroupItem(){return Js},get WuiEmailInput(){return Rr},get WuiFlex(){return At},get WuiGrid(){return Mt},get WuiIcon(){return Tr},get WuiIconBox(){return dn},get WuiIconLink(){return Vi},get WuiImage(){return kr},get WuiInputAmount(){return Lr},get WuiInputElement(){return Xs},get WuiInputNumeric(){return $o},get WuiInputText(){return En},get WuiLink(){return So},get WuiListAccordion(){return Lo},get WuiListContent(){return Dr},get WuiListDescription(){return An},get WuiListItem(){return Kt},get WuiListNetwork(){return Gi},get WuiListToken(){return qn},get WuiListWallet(){return Ht},get WuiListWalletTransaction(){return gi},get WuiLoadingHexagon(){return _c},get WuiLoadingSpinner(){return To},get WuiLoadingThumbnail(){return qs},get WuiLogo(){return Qs},get WuiLogoSelect(){return Ro},get WuiNetworkButton(){return Pr},get WuiNetworkImage(){return Hi},get WuiNoticeCard(){return Mr},get WuiOnRampActivityItem(){return $t},get WuiOnRampProviderItem(){return kn},get WuiOtp(){return Or},get WuiPreviewItem(){return qi},get WuiProfileButton(){return mi},get WuiPromo(){return ta},get WuiQrCode(){return Gn},get WuiSearchBar(){return Sc},get WuiSeparator(){return na},get WuiShimmer(){return Ar},get WuiSnackbar(){return Zi},get WuiTabs(){return Tn},get WuiTag(){return Io},get WuiText(){return $r},get WuiTokenButton(){return Mo},get WuiTokenListItem(){return fi},get WuiTooltip(){return Nr},get WuiTooltipSelect(){return Do},get WuiTransactionListItem(){return Ft},get WuiTransactionListItemLoader(){return kc},get WuiTransactionVisual(){return Zn},get WuiVisual(){return ko},get WuiVisualThumbnail(){return Br},get WuiWalletImage(){return Fn},convertInputMaskBottomSvg:Df,convertInputMaskTopSvg:Lf,customElement:V,initializeTheming:jf,setColorTheme:zd,setThemeVariables:Uf},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cc=globalThis,d0=cc.ShadowRoot&&(cc.ShadyCSS===void 0||cc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h0=Symbol(),Ch=new WeakMap;let m1=class{constructor(e,n,i){if(this._$cssResult$=!0,i!==h0)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}get styleSheet(){let e=this.o;const n=this.t;if(d0&&e===void 0){const i=n!==void 0&&n.length===1;i&&(e=Ch.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ch.set(n,e))}return e}toString(){return this.cssText}};const Jv=t=>new m1(typeof t=="string"?t:t+"",void 0,h0),_e=(t,...e)=>{const n=t.length===1?t[0]:e.reduce((i,o,r)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[r+1],t[0]);return new m1(n,t,h0)},Xv=(t,e)=>{if(d0)t.adoptedStyleSheets=e.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of e){const i=document.createElement("style"),o=cc.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=n.cssText,t.appendChild(i)}},_h=d0?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let n="";for(const i of e.cssRules)n+=i.cssText;return Jv(n)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qv,defineProperty:ey,getOwnPropertyDescriptor:ty,getOwnPropertyNames:ny,getOwnPropertySymbols:iy,getPrototypeOf:ry}=Object,Wi=globalThis,Eh=Wi.trustedTypes,oy=Eh?Eh.emptyScript:"",pu=Wi.reactiveElementPolyfillSupport,Ts=(t,e)=>t,Ic={toAttribute(t,e){switch(e){case Boolean:t=t?oy:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=t!==null;break;case Number:n=t===null?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch{n=null}}return n}},p0=(t,e)=>!Qv(t,e),Th={attribute:!0,type:String,converter:Ic,reflect:!1,hasChanged:p0};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Wi.litPropertyMetadata??(Wi.litPropertyMetadata=new WeakMap);class uo extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,n=Th){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(e,n),!n.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,n);o!==void 0&&ey(this.prototype,e,o)}}static getPropertyDescriptor(e,n,i){const{get:o,set:r}=ty(this.prototype,e)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const a=o==null?void 0:o.call(this);r.call(this,s),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Th}static _$Ei(){if(this.hasOwnProperty(Ts("elementProperties")))return;const e=ry(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ts("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ts("properties"))){const n=this.properties,i=[...ny(n),...iy(n)];for(const o of i)this.createProperty(o,n[o])}const e=this[Symbol.metadata];if(e!==null){const n=litPropertyMetadata.get(e);if(n!==void 0)for(const[i,o]of n)this.elementProperties.set(i,o)}this._$Eh=new Map;for(const[n,i]of this.elementProperties){const o=this._$Eu(n,i);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const n=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const o of i)n.unshift(_h(o))}else e!==void 0&&n.push(_h(e));return n}static _$Eu(e,n){const i=n.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(n=>n(this))}addController(e){var n;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)==null||n.call(e))}removeController(e){var n;(n=this._$EO)==null||n.delete(e)}_$E_(){const e=new Map,n=this.constructor.elementProperties;for(const i of n.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xv(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostConnected)==null?void 0:i.call(n)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostDisconnected)==null?void 0:i.call(n)})}attributeChangedCallback(e,n,i){this._$AK(e,i)}_$EC(e,n){var r;const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(o!==void 0&&i.reflect===!0){const s=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Ic).toAttribute(n,i.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,n){var r;const i=this.constructor,o=i._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=i.getPropertyOptions(o),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((r=s.converter)==null?void 0:r.fromAttribute)!==void 0?s.converter:Ic;this._$Em=o,this[o]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(e,n,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??p0)(this[e],n))return;this.P(e,n,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,n,i){this._$AL.has(e)||this._$AL.set(e,n),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[r,s]of o)s.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],s)}let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),(i=this._$EO)==null||i.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(n)):this._$EU()}catch(o){throw e=!1,this._$EU(),o}e&&this._$AE(n)}willUpdate(e){}_$AE(e){var n;(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdated)==null?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(e){}firstUpdated(e){}}uo.elementStyles=[],uo.shadowRootOptions={mode:"open"},uo[Ts("elementProperties")]=new Map,uo[Ts("finalized")]=new Map,pu==null||pu({ReactiveElement:uo}),(Wi.reactiveElementVersions??(Wi.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ks=globalThis,Rc=ks.trustedTypes,kh=Rc?Rc.createPolicy("lit-html",{createHTML:t=>t}):void 0,w1="$lit$",Pi=`lit$${Math.random().toFixed(9).slice(2)}$`,b1="?"+Pi,sy=`<${b1}>`,jr=document,ia=()=>jr.createComment(""),ra=t=>t===null||typeof t!="object"&&typeof t!="function",v1=Array.isArray,ay=t=>v1(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",fu=`[ 	
\f\r]`,fs=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ah=/-->/g,$h=/>/g,hr=RegExp(`>|${fu}(?:([^\\s"'>=/]+)(${fu}*=${fu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sh=/'/g,Ih=/"/g,y1=/^(?:script|style|textarea|title)$/i,cy=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),A=cy(1),zo=Symbol.for("lit-noChange"),at=Symbol.for("lit-nothing"),Rh=new WeakMap,wr=jr.createTreeWalker(jr,129);function x1(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return kh!==void 0?kh.createHTML(e):e}const ly=(t,e)=>{const n=t.length-1,i=[];let o,r=e===2?"<svg>":"",s=fs;for(let a=0;a<n;a++){const c=t[a];let l,d,p=-1,f=0;for(;f<c.length&&(s.lastIndex=f,d=s.exec(c),d!==null);)f=s.lastIndex,s===fs?d[1]==="!--"?s=Ah:d[1]!==void 0?s=$h:d[2]!==void 0?(y1.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=hr):d[3]!==void 0&&(s=hr):s===hr?d[0]===">"?(s=o??fs,p=-1):d[1]===void 0?p=-2:(p=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?hr:d[3]==='"'?Ih:Sh):s===Ih||s===Sh?s=hr:s===Ah||s===$h?s=fs:(s=hr,o=void 0);const b=s===hr&&t[a+1].startsWith("/>")?" ":"";r+=s===fs?c+sy:p>=0?(i.push(l),c.slice(0,p)+w1+c.slice(p)+Pi+b):c+Pi+(p===-2?a:b)}return[x1(t,r+(t[n]||"<?>")+(e===2?"</svg>":"")),i]};class oa{constructor({strings:e,_$litType$:n},i){let o;this.parts=[];let r=0,s=0;const a=e.length-1,c=this.parts,[l,d]=ly(e,n);if(this.el=oa.createElement(l,i),wr.currentNode=this.el.content,n===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=wr.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(w1)){const f=d[s++],b=o.getAttribute(p).split(Pi),_=/([.?@])?(.*)/.exec(f);c.push({type:1,index:r,name:_[2],strings:b,ctor:_[1]==="."?dy:_[1]==="?"?hy:_[1]==="@"?py:Sl}),o.removeAttribute(p)}else p.startsWith(Pi)&&(c.push({type:6,index:r}),o.removeAttribute(p));if(y1.test(o.tagName)){const p=o.textContent.split(Pi),f=p.length-1;if(f>0){o.textContent=Rc?Rc.emptyScript:"";for(let b=0;b<f;b++)o.append(p[b],ia()),wr.nextNode(),c.push({type:2,index:++r});o.append(p[f],ia())}}}else if(o.nodeType===8)if(o.data===b1)c.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(Pi,p+1))!==-1;)c.push({type:7,index:r}),p+=Pi.length-1}r++}}static createElement(e,n){const i=jr.createElement("template");return i.innerHTML=e,i}}function Fo(t,e,n=t,i){var s,a;if(e===zo)return e;let o=i!==void 0?(s=n._$Co)==null?void 0:s[i]:n._$Cl;const r=ra(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((a=o==null?void 0:o._$AO)==null||a.call(o,!1),r===void 0?o=void 0:(o=new r(t),o._$AT(t,n,i)),i!==void 0?(n._$Co??(n._$Co=[]))[i]=o:n._$Cl=o),o!==void 0&&(e=Fo(t,o._$AS(t,e.values),o,i)),e}class uy{constructor(e,n){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:n},parts:i}=this._$AD,o=((e==null?void 0:e.creationScope)??jr).importNode(n,!0);wr.currentNode=o;let r=wr.nextNode(),s=0,a=0,c=i[0];for(;c!==void 0;){if(s===c.index){let l;c.type===2?l=new La(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new fy(r,this,e)),this._$AV.push(l),c=i[++a]}s!==(c==null?void 0:c.index)&&(r=wr.nextNode(),s++)}return wr.currentNode=jr,o}p(e){let n=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,n),n+=i.strings.length-2):i._$AI(e[n])),n++}}class La{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,n,i,o){this.type=2,this._$AH=at,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=n.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,n=this){e=Fo(this,e,n),ra(e)?e===at||e==null||e===""?(this._$AH!==at&&this._$AR(),this._$AH=at):e!==this._$AH&&e!==zo&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ay(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==at&&ra(this._$AH)?this._$AA.nextSibling.data=e:this.T(jr.createTextNode(e)),this._$AH=e}$(e){var r;const{values:n,_$litType$:i}=e,o=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oa.createElement(x1(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(n);else{const s=new uy(o,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(e){let n=Rh.get(e.strings);return n===void 0&&Rh.set(e.strings,n=new oa(e)),n}k(e){v1(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,o=0;for(const r of e)o===n.length?n.push(i=new La(this.S(ia()),this.S(ia()),this,this.options)):i=n[o],i._$AI(r),o++;o<n.length&&(this._$AR(i&&i._$AB.nextSibling,o),n.length=o)}_$AR(e=this._$AA.nextSibling,n){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,n);e&&e!==this._$AB;){const o=e.nextSibling;e.remove(),e=o}}setConnected(e){var n;this._$AM===void 0&&(this._$Cv=e,(n=this._$AP)==null||n.call(this,e))}}class Sl{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,n,i,o,r){this.type=1,this._$AH=at,this._$AN=void 0,this.element=e,this.name=n,this._$AM=o,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=at}_$AI(e,n=this,i,o){const r=this.strings;let s=!1;if(r===void 0)e=Fo(this,e,n,0),s=!ra(e)||e!==this._$AH&&e!==zo,s&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Fo(this,a[i+c],n,c),l===zo&&(l=this._$AH[c]),s||(s=!ra(l)||l!==this._$AH[c]),l===at?e=at:e!==at&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}s&&!o&&this.j(e)}j(e){e===at?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class dy extends Sl{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===at?void 0:e}}class hy extends Sl{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==at)}}class py extends Sl{constructor(e,n,i,o,r){super(e,n,i,o,r),this.type=5}_$AI(e,n=this){if((e=Fo(this,e,n,0)??at)===zo)return;const i=this._$AH,o=e===at&&i!==at||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==at&&(i===at||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,e):this._$AH.handleEvent(e)}}class fy{constructor(e,n,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Fo(this,e)}}const gu=ks.litHtmlPolyfillSupport;gu==null||gu(oa,La),(ks.litHtmlVersions??(ks.litHtmlVersions=[])).push("3.1.3");const gy=(t,e,n)=>{const i=(n==null?void 0:n.renderBefore)??e;let o=i._$litPart$;if(o===void 0){const r=(n==null?void 0:n.renderBefore)??null;i._$litPart$=o=new La(e.insertBefore(ia(),r),r,void 0,n??{})}return o._$AI(t),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ce=class extends uo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const e=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=e.firstChild),e}update(e){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gy(n,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return zo}};var cp;ce._$litElement$=!0,ce.finalized=!0,(cp=globalThis.litElementHydrateSupport)==null||cp.call(globalThis,{LitElement:ce});const mu=globalThis.litElementPolyfillSupport;mu==null||mu({LitElement:ce});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const my={attribute:!0,type:String,converter:Ic,reflect:!1,hasChanged:p0},wy=(t=my,e,n)=>{const{kind:i,metadata:o}=n;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(n.name,t),i==="accessor"){const{name:s}=n;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(s,c,t)},init(a){return a!==void 0&&this.P(s,void 0,t),a}}}if(i==="setter"){const{name:s}=n;return function(a){const c=this[s];e.call(this,a),this.requestUpdate(s,c,t)}}throw Error("Unsupported decorator location: "+i)};function ge(t){return(e,n)=>typeof n=="object"?wy(t,e,n):((i,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...i,wrapped:!0}:i),s?Object.getOwnPropertyDescriptor(o,r):void 0})(t,e,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(t){return ge({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=t=>t??at;var gn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Jt=class extends ce{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.address=ne.state.address,this.balanceVal=ne.state.balance,this.balanceSymbol=ne.state.balanceSymbol,this.profileName=ne.state.profileName,this.profileImage=ne.state.profileImage,this.network=de.state.caipNetwork,this.isUnsupportedChain=de.state.isUnsupportedChain,this.unsubscribe.push(ne.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),de.subscribeKey("caipNetwork",e=>this.network=e),de.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=ze.getNetworkImage(this.network),n=this.balance==="show";return A`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${this.isUnsupportedChain}
        address=${ve(this.address)}
        profileName=${ve(this.profileName)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${ve(e)}
        avatarSrc=${ve(this.profileImage)}
        balance=${n?re.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
        data-testid="account-button"
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
      >
      </wui-account-button>
    `}onClick(){this.isUnsupportedChain?Ie.open({view:"UnsupportedChain"}):Ie.open()}};gn([ge({type:Boolean})],Jt.prototype,"disabled",void 0);gn([ge()],Jt.prototype,"balance",void 0);gn([ge()],Jt.prototype,"charsStart",void 0);gn([ge()],Jt.prototype,"charsEnd",void 0);gn([j()],Jt.prototype,"address",void 0);gn([j()],Jt.prototype,"balanceVal",void 0);gn([j()],Jt.prototype,"balanceSymbol",void 0);gn([j()],Jt.prototype,"profileName",void 0);gn([j()],Jt.prototype,"profileImage",void 0);gn([j()],Jt.prototype,"network",void 0);gn([j()],Jt.prototype,"isUnsupportedChain",void 0);Jt=gn([V("w3m-account-button")],Jt);const by=_e`
  :host {
    display: block;
    width: max-content;
  }
`;var _i=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let $n=class extends ce{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.isAccount=ne.state.isConnected,this.unsubscribe.push(ne.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?A`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${ve(this.balance)}
            .charsStart=${ve(this.charsStart)}
            .charsEnd=${ve(this.charsEnd)}
          >
          </w3m-account-button>
        `:A`
          <w3m-connect-button
            size=${ve(this.size)}
            label=${ve(this.label)}
            loadingLabel=${ve(this.loadingLabel)}
          ></w3m-connect-button>
        `}};$n.styles=by;_i([ge({type:Boolean})],$n.prototype,"disabled",void 0);_i([ge()],$n.prototype,"balance",void 0);_i([ge()],$n.prototype,"size",void 0);_i([ge()],$n.prototype,"label",void 0);_i([ge()],$n.prototype,"loadingLabel",void 0);_i([ge()],$n.prototype,"charsStart",void 0);_i([ge()],$n.prototype,"charsEnd",void 0);_i([j()],$n.prototype,"isAccount",void 0);$n=_i([V("w3m-button")],$n);var rs=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ur=class extends ce{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=Ie.state.open,this.loading=Ie.state.loading,this.unsubscribe.push(Ie.subscribe(e=>{this.open=e.open,this.loading=e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.loading||this.open;return A`
      <wui-connect-button
        size=${ve(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
        data-testid="connect-button"
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?Ie.close():this.loading||Ie.open()}};rs([ge()],Ur.prototype,"size",void 0);rs([ge()],Ur.prototype,"label",void 0);rs([ge()],Ur.prototype,"loadingLabel",void 0);rs([j()],Ur.prototype,"open",void 0);rs([j()],Ur.prototype,"loading",void 0);Ur=rs([V("w3m-connect-button")],Ur);const vy=_e`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var Il=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const Ph="scroll-lock";let Wr=class extends ce{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=Ie.state.open,this.caipAddress=ne.state.caipAddress,this.isSiweEnabled=pe.state.isSiweEnabled,this.initializeTheming(),xe.prefetch(),this.unsubscribe.push(Ie.subscribeKey("open",e=>e?this.onOpen():this.onClose()),ne.subscribe(e=>this.onNewAccountState(e))),me.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?A`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){if(this.isSiweEnabled){const{SIWEController:e}=await ui(()=>import("./index-IVVnfiTN.js"),[]);e.state.status!=="success"&&await $e.disconnect()}Ie.close()}initializeTheming(){const{themeVariables:e,themeMode:n}=ht.state,i=be.getColorTheme(n);jf(e,i)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Me.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards"}).finished,this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Ph,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Ph}"]`);e&&e.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",i=>{if(i.key==="Escape")this.handleClose();else if(i.key==="Tab"){const{tagName:o}=i.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAccountState(e){const{isConnected:n,caipAddress:i}=e;if(this.isSiweEnabled){const{SIWEController:o}=await ui(()=>import("./index-IVVnfiTN.js"),[]);n&&!this.caipAddress&&(this.caipAddress=i),n&&i&&this.caipAddress!==i&&(await o.signOut(),this.onSiweNavigation(),this.caipAddress=i);try{const r=await o.getSession();r&&!n?await o.signOut():n&&!r&&this.onSiweNavigation()}catch{n&&this.onSiweNavigation()}}}onSiweNavigation(){this.open?G.push("ConnectingSiwe"):Ie.open({view:"ConnectingSiwe"})}};Wr.styles=vy;Il([j()],Wr.prototype,"open",void 0);Il([j()],Wr.prototype,"caipAddress",void 0);Il([j()],Wr.prototype,"isSiweEnabled",void 0);Wr=Il([V("w3m-modal")],Wr);const yy=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return Wr}},Symbol.toStringTag,{value:"Module"})),xy=_e`
  :host {
    display: block;
    width: max-content;
  }
`;var os=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Yi=class extends ce{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=de.state.caipNetwork,this.connected=ne.state.isConnected,this.loading=Ie.state.loading,this.isUnsupportedChain=de.state.isUnsupportedChain,this.unsubscribe.push(de.subscribeKey("caipNetwork",e=>this.network=e),ne.subscribeKey("isConnected",e=>this.connected=e),Ie.subscribeKey("loading",e=>this.loading=e),de.subscribeKey("isUnsupportedChain",e=>this.isUnsupportedChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e;return A`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${this.isUnsupportedChain}
        imageSrc=${ve(ze.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.isUnsupportedChain?"Switch Network":((e=this.network)==null?void 0:e.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){this.loading||(me.sendEvent({type:"track",event:"CLICK_NETWORKS"}),Ie.open({view:"Networks"}))}};Yi.styles=xy;os([ge({type:Boolean})],Yi.prototype,"disabled",void 0);os([j()],Yi.prototype,"network",void 0);os([j()],Yi.prototype,"connected",void 0);os([j()],Yi.prototype,"loading",void 0);os([j()],Yi.prototype,"isUnsupportedChain",void 0);Yi=os([V("w3m-network-button")],Yi);const Cy=_e`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var C1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Pc=class extends ce{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=G.state.view,this.unsubscribe.push(G.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{const n=`${e==null?void 0:e.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var e;(e=this.resizeObserver)==null||e.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return A`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return A`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return A`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return A`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return A`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return A`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return A`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return A`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return A`<w3m-account-view></w3m-account-view>`;case"AccountSettings":return A`<w3m-account-settings-view></w3m-account-settings-view>`;case"WhatIsAWallet":return A`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return A`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return A`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return A`<w3m-downloads-view></w3m-downloads-view>`;case"EmailVerifyOtp":return A`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return A`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"ApproveTransaction":return A`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"Transactions":return A`<w3m-transactions-view></w3m-transactions-view>`;case"UpgradeEmailWallet":return A`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpgradeToSmartAccount":return A`<w3m-upgrade-to-smart-account-view></w3m-upgrade-to-smart-account-view>`;case"UpdateEmailWallet":return A`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return A`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return A`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return A`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"OnRampProviders":return A`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampActivity":return A`<w3m-onramp-activity-view></w3m-onramp-activity-view>`;case"OnRampTokenSelect":return A`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return A`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"WhatIsABuy":return A`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"BuyInProgress":return A`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"WalletReceive":return A`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return A`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"Convert":return A`<w3m-convert-view></w3m-convert-view>`;case"ConvertSelectToken":return A`<w3m-convert-select-token-view></w3m-convert-select-token-view>`;case"ConvertPreview":return A`<w3m-convert-preview-view></w3m-convert-preview-view>`;case"WalletSend":return A`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return A`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return A`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;default:return A`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(e){const{history:n}=G.state;let i=-10,o=10;n.length<this.prevHistoryLength&&(i=10,o=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${i}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${o}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}};Pc.styles=Cy;C1([j()],Pc.prototype,"view",void 0);Pc=C1([V("w3m-router")],Pc);const _y=_e`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: var(--wui-border-radius-l);
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var or=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const Ey={USD:"$",EUR:"€",GBP:"£"},Ty=[100,250,500,1e3];let Yn=class extends ce{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.connected=ne.state.isConnected,this.loading=Ie.state.loading,this.paymentCurrency=We.state.paymentCurrency,this.paymentAmount=We.state.paymentAmount,this.purchaseAmount=We.state.purchaseAmount,this.quoteLoading=We.state.quotesLoading,this.unsubscribe.push(ne.subscribeKey("isConnected",e=>{this.connected=e}),Ie.subscribeKey("loading",e=>{this.loading=e}),We.subscribe(e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <w3m-swap-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-swap-input>
          <w3m-swap-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-swap-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="xs">
            ${Ty.map(e=>{var n;return A`<wui-button
                  variant=${this.paymentAmount===e?"accentBg":"shade"}
                  size="xs"
                  textVariant="paragraph-600"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${Ey[((n=this.paymentCurrency)==null?void 0:n.id)||"USD"]} ${e}`}</wui-button
                >`})}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.connected?A`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="fill"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:A`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accentBg"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||Ie.open({view:"OnRampProviders"})}openModal(){Ie.open({view:"Connect"})}async onPaymentAmountChange(e){We.setPaymentAmount(Number(e.detail)),await We.getQuote()}async selectPresetAmount(e){We.setPaymentAmount(e),await We.getQuote()}};Yn.styles=_y;or([ge({type:Boolean})],Yn.prototype,"disabled",void 0);or([j()],Yn.prototype,"connected",void 0);or([j()],Yn.prototype,"loading",void 0);or([j()],Yn.prototype,"paymentCurrency",void 0);or([j()],Yn.prototype,"paymentAmount",void 0);or([j()],Yn.prototype,"purchaseAmount",void 0);or([j()],Yn.prototype,"quoteLoading",void 0);Yn=or([V("w3m-onramp-widget")],Yn);const ky=_e`
  wui-flex {
    width: 100%;
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;

    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var _1={},Rl={};Rl.byteLength=Sy;Rl.toByteArray=Ry;Rl.fromByteArray=Ny;var Un=[],ln=[],Ay=typeof Uint8Array<"u"?Uint8Array:Array,wu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var co=0,$y=wu.length;co<$y;++co)Un[co]=wu[co],ln[wu.charCodeAt(co)]=co;ln[45]=62;ln[95]=63;function E1(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");n===-1&&(n=e);var i=n===e?0:4-n%4;return[n,i]}function Sy(t){var e=E1(t),n=e[0],i=e[1];return(n+i)*3/4-i}function Iy(t,e,n){return(e+n)*3/4-n}function Ry(t){var e,n=E1(t),i=n[0],o=n[1],r=new Ay(Iy(t,i,o)),s=0,a=o>0?i-4:i,c;for(c=0;c<a;c+=4)e=ln[t.charCodeAt(c)]<<18|ln[t.charCodeAt(c+1)]<<12|ln[t.charCodeAt(c+2)]<<6|ln[t.charCodeAt(c+3)],r[s++]=e>>16&255,r[s++]=e>>8&255,r[s++]=e&255;return o===2&&(e=ln[t.charCodeAt(c)]<<2|ln[t.charCodeAt(c+1)]>>4,r[s++]=e&255),o===1&&(e=ln[t.charCodeAt(c)]<<10|ln[t.charCodeAt(c+1)]<<4|ln[t.charCodeAt(c+2)]>>2,r[s++]=e>>8&255,r[s++]=e&255),r}function Py(t){return Un[t>>18&63]+Un[t>>12&63]+Un[t>>6&63]+Un[t&63]}function Oy(t,e,n){for(var i,o=[],r=e;r<n;r+=3)i=(t[r]<<16&16711680)+(t[r+1]<<8&65280)+(t[r+2]&255),o.push(Py(i));return o.join("")}function Ny(t){for(var e,n=t.length,i=n%3,o=[],r=16383,s=0,a=n-i;s<a;s+=r)o.push(Oy(t,s,s+r>a?a:s+r));return i===1?(e=t[n-1],o.push(Un[e>>2]+Un[e<<4&63]+"==")):i===2&&(e=(t[n-2]<<8)+t[n-1],o.push(Un[e>>10]+Un[e>>4&63]+Un[e<<2&63]+"=")),o.join("")}var f0={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */f0.read=function(t,e,n,i,o){var r,s,a=o*8-i-1,c=(1<<a)-1,l=c>>1,d=-7,p=n?o-1:0,f=n?-1:1,b=t[e+p];for(p+=f,r=b&(1<<-d)-1,b>>=-d,d+=a;d>0;r=r*256+t[e+p],p+=f,d-=8);for(s=r&(1<<-d)-1,r>>=-d,d+=i;d>0;s=s*256+t[e+p],p+=f,d-=8);if(r===0)r=1-l;else{if(r===c)return s?NaN:(b?-1:1)*(1/0);s=s+Math.pow(2,i),r=r-l}return(b?-1:1)*s*Math.pow(2,r-i)};f0.write=function(t,e,n,i,o,r){var s,a,c,l=r*8-o-1,d=(1<<l)-1,p=d>>1,f=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=i?0:r-1,_=i?1:-1,$=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=d):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),s+p>=1?e+=f/c:e+=f*Math.pow(2,1-p),e*c>=2&&(s++,c/=2),s+p>=d?(a=0,s=d):s+p>=1?(a=(e*c-1)*Math.pow(2,o),s=s+p):(a=e*Math.pow(2,p-1)*Math.pow(2,o),s=0));o>=8;t[n+b]=a&255,b+=_,a/=256,o-=8);for(s=s<<o|a,l+=o;l>0;t[n+b]=s&255,b+=_,s/=256,l-=8);t[n+b-_]|=$*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(t){const e=Rl,n=f0,i=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=a,t.SlowBuffer=T,t.INSPECT_MAX_BYTES=50;const o=2147483647;t.kMaxLength=o,a.TYPED_ARRAY_SUPPORT=r(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function r(){try{const m=new Uint8Array(1),u={foo:function(){return 42}};return Object.setPrototypeOf(u,Uint8Array.prototype),Object.setPrototypeOf(m,u),m.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(m){if(m>o)throw new RangeError('The value "'+m+'" is invalid for option "size"');const u=new Uint8Array(m);return Object.setPrototypeOf(u,a.prototype),u}function a(m,u,h){if(typeof m=="number"){if(typeof u=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return p(m)}return c(m,u,h)}a.poolSize=8192;function c(m,u,h){if(typeof m=="string")return f(m,u);if(ArrayBuffer.isView(m))return _(m);if(m==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof m);if(Dn(m,ArrayBuffer)||m&&Dn(m.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Dn(m,SharedArrayBuffer)||m&&Dn(m.buffer,SharedArrayBuffer)))return $(m,u,h);if(typeof m=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const x=m.valueOf&&m.valueOf();if(x!=null&&x!==m)return a.from(x,u,h);const D=I(m);if(D)return D;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof m[Symbol.toPrimitive]=="function")return a.from(m[Symbol.toPrimitive]("string"),u,h);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof m)}a.from=function(m,u,h){return c(m,u,h)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function l(m){if(typeof m!="number")throw new TypeError('"size" argument must be of type number');if(m<0)throw new RangeError('The value "'+m+'" is invalid for option "size"')}function d(m,u,h){return l(m),m<=0?s(m):u!==void 0?typeof h=="string"?s(m).fill(u,h):s(m).fill(u):s(m)}a.alloc=function(m,u,h){return d(m,u,h)};function p(m){return l(m),s(m<0?0:L(m)|0)}a.allocUnsafe=function(m){return p(m)},a.allocUnsafeSlow=function(m){return p(m)};function f(m,u){if((typeof u!="string"||u==="")&&(u="utf8"),!a.isEncoding(u))throw new TypeError("Unknown encoding: "+u);const h=U(m,u)|0;let x=s(h);const D=x.write(m,u);return D!==h&&(x=x.slice(0,D)),x}function b(m){const u=m.length<0?0:L(m.length)|0,h=s(u);for(let x=0;x<u;x+=1)h[x]=m[x]&255;return h}function _(m){if(Dn(m,Uint8Array)){const u=new Uint8Array(m);return $(u.buffer,u.byteOffset,u.byteLength)}return b(m)}function $(m,u,h){if(u<0||m.byteLength<u)throw new RangeError('"offset" is outside of buffer bounds');if(m.byteLength<u+(h||0))throw new RangeError('"length" is outside of buffer bounds');let x;return u===void 0&&h===void 0?x=new Uint8Array(m):h===void 0?x=new Uint8Array(m,u):x=new Uint8Array(m,u,h),Object.setPrototypeOf(x,a.prototype),x}function I(m){if(a.isBuffer(m)){const u=L(m.length)|0,h=s(u);return h.length===0||m.copy(h,0,0,u),h}if(m.length!==void 0)return typeof m.length!="number"||Ul(m.length)?s(0):b(m);if(m.type==="Buffer"&&Array.isArray(m.data))return b(m.data)}function L(m){if(m>=o)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+o.toString(16)+" bytes");return m|0}function T(m){return+m!=m&&(m=0),a.alloc(+m)}a.isBuffer=function(u){return u!=null&&u._isBuffer===!0&&u!==a.prototype},a.compare=function(u,h){if(Dn(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),Dn(h,Uint8Array)&&(h=a.from(h,h.offset,h.byteLength)),!a.isBuffer(u)||!a.isBuffer(h))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(u===h)return 0;let x=u.length,D=h.length;for(let H=0,q=Math.min(x,D);H<q;++H)if(u[H]!==h[H]){x=u[H],D=h[H];break}return x<D?-1:D<x?1:0},a.isEncoding=function(u){switch(String(u).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(u,h){if(!Array.isArray(u))throw new TypeError('"list" argument must be an Array of Buffers');if(u.length===0)return a.alloc(0);let x;if(h===void 0)for(h=0,x=0;x<u.length;++x)h+=u[x].length;const D=a.allocUnsafe(h);let H=0;for(x=0;x<u.length;++x){let q=u[x];if(Dn(q,Uint8Array))H+q.length>D.length?(a.isBuffer(q)||(q=a.from(q)),q.copy(D,H)):Uint8Array.prototype.set.call(D,q,H);else if(a.isBuffer(q))q.copy(D,H);else throw new TypeError('"list" argument must be an Array of Buffers');H+=q.length}return D};function U(m,u){if(a.isBuffer(m))return m.length;if(ArrayBuffer.isView(m)||Dn(m,ArrayBuffer))return m.byteLength;if(typeof m!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof m);const h=m.length,x=arguments.length>2&&arguments[2]===!0;if(!x&&h===0)return 0;let D=!1;for(;;)switch(u){case"ascii":case"latin1":case"binary":return h;case"utf8":case"utf-8":return jl(m).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return h*2;case"hex":return h>>>1;case"base64":return k0(m).length;default:if(D)return x?-1:jl(m).length;u=(""+u).toLowerCase(),D=!0}}a.byteLength=U;function M(m,u,h){let x=!1;if((u===void 0||u<0)&&(u=0),u>this.length||((h===void 0||h>this.length)&&(h=this.length),h<=0)||(h>>>=0,u>>>=0,h<=u))return"";for(m||(m="utf8");;)switch(m){case"hex":return F(this,u,h);case"utf8":case"utf-8":return B(this,u,h);case"ascii":return O(this,u,h);case"latin1":case"binary":return R(this,u,h);case"base64":return N(this,u,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,u,h);default:if(x)throw new TypeError("Unknown encoding: "+m);m=(m+"").toLowerCase(),x=!0}}a.prototype._isBuffer=!0;function W(m,u,h){const x=m[u];m[u]=m[h],m[h]=x}a.prototype.swap16=function(){const u=this.length;if(u%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let h=0;h<u;h+=2)W(this,h,h+1);return this},a.prototype.swap32=function(){const u=this.length;if(u%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let h=0;h<u;h+=4)W(this,h,h+3),W(this,h+1,h+2);return this},a.prototype.swap64=function(){const u=this.length;if(u%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let h=0;h<u;h+=8)W(this,h,h+7),W(this,h+1,h+6),W(this,h+2,h+5),W(this,h+3,h+4);return this},a.prototype.toString=function(){const u=this.length;return u===0?"":arguments.length===0?B(this,0,u):M.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(u){if(!a.isBuffer(u))throw new TypeError("Argument must be a Buffer");return this===u?!0:a.compare(this,u)===0},a.prototype.inspect=function(){let u="";const h=t.INSPECT_MAX_BYTES;return u=this.toString("hex",0,h).replace(/(.{2})/g,"$1 ").trim(),this.length>h&&(u+=" ... "),"<Buffer "+u+">"},i&&(a.prototype[i]=a.prototype.inspect),a.prototype.compare=function(u,h,x,D,H){if(Dn(u,Uint8Array)&&(u=a.from(u,u.offset,u.byteLength)),!a.isBuffer(u))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof u);if(h===void 0&&(h=0),x===void 0&&(x=u?u.length:0),D===void 0&&(D=0),H===void 0&&(H=this.length),h<0||x>u.length||D<0||H>this.length)throw new RangeError("out of range index");if(D>=H&&h>=x)return 0;if(D>=H)return-1;if(h>=x)return 1;if(h>>>=0,x>>>=0,D>>>=0,H>>>=0,this===u)return 0;let q=H-D,Be=x-h;const tt=Math.min(q,Be),Je=this.slice(D,H),nt=u.slice(h,x);for(let Ze=0;Ze<tt;++Ze)if(Je[Ze]!==nt[Ze]){q=Je[Ze],Be=nt[Ze];break}return q<Be?-1:Be<q?1:0};function Z(m,u,h,x,D){if(m.length===0)return-1;if(typeof h=="string"?(x=h,h=0):h>2147483647?h=2147483647:h<-2147483648&&(h=-2147483648),h=+h,Ul(h)&&(h=D?0:m.length-1),h<0&&(h=m.length+h),h>=m.length){if(D)return-1;h=m.length-1}else if(h<0)if(D)h=0;else return-1;if(typeof u=="string"&&(u=a.from(u,x)),a.isBuffer(u))return u.length===0?-1:Q(m,u,h,x,D);if(typeof u=="number")return u=u&255,typeof Uint8Array.prototype.indexOf=="function"?D?Uint8Array.prototype.indexOf.call(m,u,h):Uint8Array.prototype.lastIndexOf.call(m,u,h):Q(m,[u],h,x,D);throw new TypeError("val must be string, number or Buffer")}function Q(m,u,h,x,D){let H=1,q=m.length,Be=u.length;if(x!==void 0&&(x=String(x).toLowerCase(),x==="ucs2"||x==="ucs-2"||x==="utf16le"||x==="utf-16le")){if(m.length<2||u.length<2)return-1;H=2,q/=2,Be/=2,h/=2}function tt(nt,Ze){return H===1?nt[Ze]:nt.readUInt16BE(Ze*H)}let Je;if(D){let nt=-1;for(Je=h;Je<q;Je++)if(tt(m,Je)===tt(u,nt===-1?0:Je-nt)){if(nt===-1&&(nt=Je),Je-nt+1===Be)return nt*H}else nt!==-1&&(Je-=Je-nt),nt=-1}else for(h+Be>q&&(h=q-Be),Je=h;Je>=0;Je--){let nt=!0;for(let Ze=0;Ze<Be;Ze++)if(tt(m,Je+Ze)!==tt(u,Ze)){nt=!1;break}if(nt)return Je}return-1}a.prototype.includes=function(u,h,x){return this.indexOf(u,h,x)!==-1},a.prototype.indexOf=function(u,h,x){return Z(this,u,h,x,!0)},a.prototype.lastIndexOf=function(u,h,x){return Z(this,u,h,x,!1)};function g(m,u,h,x){h=Number(h)||0;const D=m.length-h;x?(x=Number(x),x>D&&(x=D)):x=D;const H=u.length;x>H/2&&(x=H/2);let q;for(q=0;q<x;++q){const Be=parseInt(u.substr(q*2,2),16);if(Ul(Be))return q;m[h+q]=Be}return q}function w(m,u,h,x){return Za(jl(u,m.length-h),m,h,x)}function v(m,u,h,x){return Za(Q1(u),m,h,x)}function S(m,u,h,x){return Za(k0(u),m,h,x)}function P(m,u,h,x){return Za(eg(u,m.length-h),m,h,x)}a.prototype.write=function(u,h,x,D){if(h===void 0)D="utf8",x=this.length,h=0;else if(x===void 0&&typeof h=="string")D=h,x=this.length,h=0;else if(isFinite(h))h=h>>>0,isFinite(x)?(x=x>>>0,D===void 0&&(D="utf8")):(D=x,x=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const H=this.length-h;if((x===void 0||x>H)&&(x=H),u.length>0&&(x<0||h<0)||h>this.length)throw new RangeError("Attempt to write outside buffer bounds");D||(D="utf8");let q=!1;for(;;)switch(D){case"hex":return g(this,u,h,x);case"utf8":case"utf-8":return w(this,u,h,x);case"ascii":case"latin1":case"binary":return v(this,u,h,x);case"base64":return S(this,u,h,x);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,u,h,x);default:if(q)throw new TypeError("Unknown encoding: "+D);D=(""+D).toLowerCase(),q=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function N(m,u,h){return u===0&&h===m.length?e.fromByteArray(m):e.fromByteArray(m.slice(u,h))}function B(m,u,h){h=Math.min(m.length,h);const x=[];let D=u;for(;D<h;){const H=m[D];let q=null,Be=H>239?4:H>223?3:H>191?2:1;if(D+Be<=h){let tt,Je,nt,Ze;switch(Be){case 1:H<128&&(q=H);break;case 2:tt=m[D+1],(tt&192)===128&&(Ze=(H&31)<<6|tt&63,Ze>127&&(q=Ze));break;case 3:tt=m[D+1],Je=m[D+2],(tt&192)===128&&(Je&192)===128&&(Ze=(H&15)<<12|(tt&63)<<6|Je&63,Ze>2047&&(Ze<55296||Ze>57343)&&(q=Ze));break;case 4:tt=m[D+1],Je=m[D+2],nt=m[D+3],(tt&192)===128&&(Je&192)===128&&(nt&192)===128&&(Ze=(H&15)<<18|(tt&63)<<12|(Je&63)<<6|nt&63,Ze>65535&&Ze<1114112&&(q=Ze))}}q===null?(q=65533,Be=1):q>65535&&(q-=65536,x.push(q>>>10&1023|55296),q=56320|q&1023),x.push(q),D+=Be}return k(x)}const E=4096;function k(m){const u=m.length;if(u<=E)return String.fromCharCode.apply(String,m);let h="",x=0;for(;x<u;)h+=String.fromCharCode.apply(String,m.slice(x,x+=E));return h}function O(m,u,h){let x="";h=Math.min(m.length,h);for(let D=u;D<h;++D)x+=String.fromCharCode(m[D]&127);return x}function R(m,u,h){let x="";h=Math.min(m.length,h);for(let D=u;D<h;++D)x+=String.fromCharCode(m[D]);return x}function F(m,u,h){const x=m.length;(!u||u<0)&&(u=0),(!h||h<0||h>x)&&(h=x);let D="";for(let H=u;H<h;++H)D+=tg[m[H]];return D}function Y(m,u,h){const x=m.slice(u,h);let D="";for(let H=0;H<x.length-1;H+=2)D+=String.fromCharCode(x[H]+x[H+1]*256);return D}a.prototype.slice=function(u,h){const x=this.length;u=~~u,h=h===void 0?x:~~h,u<0?(u+=x,u<0&&(u=0)):u>x&&(u=x),h<0?(h+=x,h<0&&(h=0)):h>x&&(h=x),h<u&&(h=u);const D=this.subarray(u,h);return Object.setPrototypeOf(D,a.prototype),D};function K(m,u,h){if(m%1!==0||m<0)throw new RangeError("offset is not uint");if(m+u>h)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let D=this[u],H=1,q=0;for(;++q<h&&(H*=256);)D+=this[u+q]*H;return D},a.prototype.readUintBE=a.prototype.readUIntBE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let D=this[u+--h],H=1;for(;h>0&&(H*=256);)D+=this[u+--h]*H;return D},a.prototype.readUint8=a.prototype.readUInt8=function(u,h){return u=u>>>0,h||K(u,1,this.length),this[u]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(u,h){return u=u>>>0,h||K(u,2,this.length),this[u]|this[u+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(u,h){return u=u>>>0,h||K(u,2,this.length),this[u]<<8|this[u+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(u,h){return u=u>>>0,h||K(u,4,this.length),(this[u]|this[u+1]<<8|this[u+2]<<16)+this[u+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(u,h){return u=u>>>0,h||K(u,4,this.length),this[u]*16777216+(this[u+1]<<16|this[u+2]<<8|this[u+3])},a.prototype.readBigUInt64LE=Ei(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&ot(u,this.length-8);const D=h+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24,H=this[++u]+this[++u]*2**8+this[++u]*2**16+x*2**24;return BigInt(D)+(BigInt(H)<<BigInt(32))}),a.prototype.readBigUInt64BE=Ei(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&ot(u,this.length-8);const D=h*2**24+this[++u]*2**16+this[++u]*2**8+this[++u],H=this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+x;return(BigInt(D)<<BigInt(32))+BigInt(H)}),a.prototype.readIntLE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let D=this[u],H=1,q=0;for(;++q<h&&(H*=256);)D+=this[u+q]*H;return H*=128,D>=H&&(D-=Math.pow(2,8*h)),D},a.prototype.readIntBE=function(u,h,x){u=u>>>0,h=h>>>0,x||K(u,h,this.length);let D=h,H=1,q=this[u+--D];for(;D>0&&(H*=256);)q+=this[u+--D]*H;return H*=128,q>=H&&(q-=Math.pow(2,8*h)),q},a.prototype.readInt8=function(u,h){return u=u>>>0,h||K(u,1,this.length),this[u]&128?(255-this[u]+1)*-1:this[u]},a.prototype.readInt16LE=function(u,h){u=u>>>0,h||K(u,2,this.length);const x=this[u]|this[u+1]<<8;return x&32768?x|4294901760:x},a.prototype.readInt16BE=function(u,h){u=u>>>0,h||K(u,2,this.length);const x=this[u+1]|this[u]<<8;return x&32768?x|4294901760:x},a.prototype.readInt32LE=function(u,h){return u=u>>>0,h||K(u,4,this.length),this[u]|this[u+1]<<8|this[u+2]<<16|this[u+3]<<24},a.prototype.readInt32BE=function(u,h){return u=u>>>0,h||K(u,4,this.length),this[u]<<24|this[u+1]<<16|this[u+2]<<8|this[u+3]},a.prototype.readBigInt64LE=Ei(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&ot(u,this.length-8);const D=this[u+4]+this[u+5]*2**8+this[u+6]*2**16+(x<<24);return(BigInt(D)<<BigInt(32))+BigInt(h+this[++u]*2**8+this[++u]*2**16+this[++u]*2**24)}),a.prototype.readBigInt64BE=Ei(function(u){u=u>>>0,Ye(u,"offset");const h=this[u],x=this[u+7];(h===void 0||x===void 0)&&ot(u,this.length-8);const D=(h<<24)+this[++u]*2**16+this[++u]*2**8+this[++u];return(BigInt(D)<<BigInt(32))+BigInt(this[++u]*2**24+this[++u]*2**16+this[++u]*2**8+x)}),a.prototype.readFloatLE=function(u,h){return u=u>>>0,h||K(u,4,this.length),n.read(this,u,!0,23,4)},a.prototype.readFloatBE=function(u,h){return u=u>>>0,h||K(u,4,this.length),n.read(this,u,!1,23,4)},a.prototype.readDoubleLE=function(u,h){return u=u>>>0,h||K(u,8,this.length),n.read(this,u,!0,52,8)},a.prototype.readDoubleBE=function(u,h){return u=u>>>0,h||K(u,8,this.length),n.read(this,u,!1,52,8)};function se(m,u,h,x,D,H){if(!a.isBuffer(m))throw new TypeError('"buffer" argument must be a Buffer instance');if(u>D||u<H)throw new RangeError('"value" argument is out of bounds');if(h+x>m.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(u,h,x,D){if(u=+u,h=h>>>0,x=x>>>0,!D){const Be=Math.pow(2,8*x)-1;se(this,u,h,x,Be,0)}let H=1,q=0;for(this[h]=u&255;++q<x&&(H*=256);)this[h+q]=u/H&255;return h+x},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(u,h,x,D){if(u=+u,h=h>>>0,x=x>>>0,!D){const Be=Math.pow(2,8*x)-1;se(this,u,h,x,Be,0)}let H=x-1,q=1;for(this[h+H]=u&255;--H>=0&&(q*=256);)this[h+H]=u/q&255;return h+x},a.prototype.writeUint8=a.prototype.writeUInt8=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,1,255,0),this[h]=u&255,h+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,2,65535,0),this[h]=u&255,this[h+1]=u>>>8,h+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,2,65535,0),this[h]=u>>>8,this[h+1]=u&255,h+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,4,4294967295,0),this[h+3]=u>>>24,this[h+2]=u>>>16,this[h+1]=u>>>8,this[h]=u&255,h+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,4,4294967295,0),this[h]=u>>>24,this[h+1]=u>>>16,this[h+2]=u>>>8,this[h+3]=u&255,h+4};function Te(m,u,h,x,D){Lt(u,x,D,m,h,7);let H=Number(u&BigInt(4294967295));m[h++]=H,H=H>>8,m[h++]=H,H=H>>8,m[h++]=H,H=H>>8,m[h++]=H;let q=Number(u>>BigInt(32)&BigInt(4294967295));return m[h++]=q,q=q>>8,m[h++]=q,q=q>>8,m[h++]=q,q=q>>8,m[h++]=q,h}function Oe(m,u,h,x,D){Lt(u,x,D,m,h,7);let H=Number(u&BigInt(4294967295));m[h+7]=H,H=H>>8,m[h+6]=H,H=H>>8,m[h+5]=H,H=H>>8,m[h+4]=H;let q=Number(u>>BigInt(32)&BigInt(4294967295));return m[h+3]=q,q=q>>8,m[h+2]=q,q=q>>8,m[h+1]=q,q=q>>8,m[h]=q,h+8}a.prototype.writeBigUInt64LE=Ei(function(u,h=0){return Te(this,u,h,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Ei(function(u,h=0){return Oe(this,u,h,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(u,h,x,D){if(u=+u,h=h>>>0,!D){const tt=Math.pow(2,8*x-1);se(this,u,h,x,tt-1,-tt)}let H=0,q=1,Be=0;for(this[h]=u&255;++H<x&&(q*=256);)u<0&&Be===0&&this[h+H-1]!==0&&(Be=1),this[h+H]=(u/q>>0)-Be&255;return h+x},a.prototype.writeIntBE=function(u,h,x,D){if(u=+u,h=h>>>0,!D){const tt=Math.pow(2,8*x-1);se(this,u,h,x,tt-1,-tt)}let H=x-1,q=1,Be=0;for(this[h+H]=u&255;--H>=0&&(q*=256);)u<0&&Be===0&&this[h+H+1]!==0&&(Be=1),this[h+H]=(u/q>>0)-Be&255;return h+x},a.prototype.writeInt8=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,1,127,-128),u<0&&(u=255+u+1),this[h]=u&255,h+1},a.prototype.writeInt16LE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,2,32767,-32768),this[h]=u&255,this[h+1]=u>>>8,h+2},a.prototype.writeInt16BE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,2,32767,-32768),this[h]=u>>>8,this[h+1]=u&255,h+2},a.prototype.writeInt32LE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,4,2147483647,-2147483648),this[h]=u&255,this[h+1]=u>>>8,this[h+2]=u>>>16,this[h+3]=u>>>24,h+4},a.prototype.writeInt32BE=function(u,h,x){return u=+u,h=h>>>0,x||se(this,u,h,4,2147483647,-2147483648),u<0&&(u=4294967295+u+1),this[h]=u>>>24,this[h+1]=u>>>16,this[h+2]=u>>>8,this[h+3]=u&255,h+4},a.prototype.writeBigInt64LE=Ei(function(u,h=0){return Te(this,u,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Ei(function(u,h=0){return Oe(this,u,h,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function ye(m,u,h,x,D,H){if(h+x>m.length)throw new RangeError("Index out of range");if(h<0)throw new RangeError("Index out of range")}function Ne(m,u,h,x,D){return u=+u,h=h>>>0,D||ye(m,u,h,4),n.write(m,u,h,x,23,4),h+4}a.prototype.writeFloatLE=function(u,h,x){return Ne(this,u,h,!0,x)},a.prototype.writeFloatBE=function(u,h,x){return Ne(this,u,h,!1,x)};function Ve(m,u,h,x,D){return u=+u,h=h>>>0,D||ye(m,u,h,8),n.write(m,u,h,x,52,8),h+8}a.prototype.writeDoubleLE=function(u,h,x){return Ve(this,u,h,!0,x)},a.prototype.writeDoubleBE=function(u,h,x){return Ve(this,u,h,!1,x)},a.prototype.copy=function(u,h,x,D){if(!a.isBuffer(u))throw new TypeError("argument should be a Buffer");if(x||(x=0),!D&&D!==0&&(D=this.length),h>=u.length&&(h=u.length),h||(h=0),D>0&&D<x&&(D=x),D===x||u.length===0||this.length===0)return 0;if(h<0)throw new RangeError("targetStart out of bounds");if(x<0||x>=this.length)throw new RangeError("Index out of range");if(D<0)throw new RangeError("sourceEnd out of bounds");D>this.length&&(D=this.length),u.length-h<D-x&&(D=u.length-h+x);const H=D-x;return this===u&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(h,x,D):Uint8Array.prototype.set.call(u,this.subarray(x,D),h),H},a.prototype.fill=function(u,h,x,D){if(typeof u=="string"){if(typeof h=="string"?(D=h,h=0,x=this.length):typeof x=="string"&&(D=x,x=this.length),D!==void 0&&typeof D!="string")throw new TypeError("encoding must be a string");if(typeof D=="string"&&!a.isEncoding(D))throw new TypeError("Unknown encoding: "+D);if(u.length===1){const q=u.charCodeAt(0);(D==="utf8"&&q<128||D==="latin1")&&(u=q)}}else typeof u=="number"?u=u&255:typeof u=="boolean"&&(u=Number(u));if(h<0||this.length<h||this.length<x)throw new RangeError("Out of range index");if(x<=h)return this;h=h>>>0,x=x===void 0?this.length:x>>>0,u||(u=0);let H;if(typeof u=="number")for(H=h;H<x;++H)this[H]=u;else{const q=a.isBuffer(u)?u:a.from(u,D),Be=q.length;if(Be===0)throw new TypeError('The value "'+u+'" is invalid for argument "value"');for(H=0;H<x-h;++H)this[H+h]=q[H%Be]}return this};const bt={};function Rt(m,u,h){bt[m]=class extends h{constructor(){super(),Object.defineProperty(this,"message",{value:u.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${m}]`,this.stack,delete this.name}get code(){return m}set code(D){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:D,writable:!0})}toString(){return`${this.name} [${m}]: ${this.message}`}}}Rt("ERR_BUFFER_OUT_OF_BOUNDS",function(m){return m?`${m} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Rt("ERR_INVALID_ARG_TYPE",function(m,u){return`The "${m}" argument must be of type number. Received type ${typeof u}`},TypeError),Rt("ERR_OUT_OF_RANGE",function(m,u,h){let x=`The value of "${m}" is out of range.`,D=h;return Number.isInteger(h)&&Math.abs(h)>2**32?D=it(String(h)):typeof h=="bigint"&&(D=String(h),(h>BigInt(2)**BigInt(32)||h<-(BigInt(2)**BigInt(32)))&&(D=it(D)),D+="n"),x+=` It must be ${u}. Received ${D}`,x},RangeError);function it(m){let u="",h=m.length;const x=m[0]==="-"?1:0;for(;h>=x+4;h-=3)u=`_${m.slice(h-3,h)}${u}`;return`${m.slice(0,h)}${u}`}function rt(m,u,h){Ye(u,"offset"),(m[u]===void 0||m[u+h]===void 0)&&ot(u,m.length-(h+1))}function Lt(m,u,h,x,D,H){if(m>h||m<u){const q=typeof u=="bigint"?"n":"";let Be;throw H>3?u===0||u===BigInt(0)?Be=`>= 0${q} and < 2${q} ** ${(H+1)*8}${q}`:Be=`>= -(2${q} ** ${(H+1)*8-1}${q}) and < 2 ** ${(H+1)*8-1}${q}`:Be=`>= ${u}${q} and <= ${h}${q}`,new bt.ERR_OUT_OF_RANGE("value",Be,m)}rt(x,D,H)}function Ye(m,u){if(typeof m!="number")throw new bt.ERR_INVALID_ARG_TYPE(u,"number",m)}function ot(m,u,h){throw Math.floor(m)!==m?(Ye(m,h),new bt.ERR_OUT_OF_RANGE(h||"offset","an integer",m)):u<0?new bt.ERR_BUFFER_OUT_OF_BOUNDS:new bt.ERR_OUT_OF_RANGE(h||"offset",`>= ${h?1:0} and <= ${u}`,m)}const Ke=/[^+/0-9A-Za-z-_]/g;function X1(m){if(m=m.split("=")[0],m=m.trim().replace(Ke,""),m.length<2)return"";for(;m.length%4!==0;)m=m+"=";return m}function jl(m,u){u=u||1/0;let h;const x=m.length;let D=null;const H=[];for(let q=0;q<x;++q){if(h=m.charCodeAt(q),h>55295&&h<57344){if(!D){if(h>56319){(u-=3)>-1&&H.push(239,191,189);continue}else if(q+1===x){(u-=3)>-1&&H.push(239,191,189);continue}D=h;continue}if(h<56320){(u-=3)>-1&&H.push(239,191,189),D=h;continue}h=(D-55296<<10|h-56320)+65536}else D&&(u-=3)>-1&&H.push(239,191,189);if(D=null,h<128){if((u-=1)<0)break;H.push(h)}else if(h<2048){if((u-=2)<0)break;H.push(h>>6|192,h&63|128)}else if(h<65536){if((u-=3)<0)break;H.push(h>>12|224,h>>6&63|128,h&63|128)}else if(h<1114112){if((u-=4)<0)break;H.push(h>>18|240,h>>12&63|128,h>>6&63|128,h&63|128)}else throw new Error("Invalid code point")}return H}function Q1(m){const u=[];for(let h=0;h<m.length;++h)u.push(m.charCodeAt(h)&255);return u}function eg(m,u){let h,x,D;const H=[];for(let q=0;q<m.length&&!((u-=2)<0);++q)h=m.charCodeAt(q),x=h>>8,D=h%256,H.push(D),H.push(x);return H}function k0(m){return e.toByteArray(X1(m))}function Za(m,u,h,x){let D;for(D=0;D<x&&!(D+h>=u.length||D>=m.length);++D)u[D+h]=m[D];return D}function Dn(m,u){return m instanceof u||m!=null&&m.constructor!=null&&m.constructor.name!=null&&m.constructor.name===u.name}function Ul(m){return m!==m}const tg=function(){const m="0123456789abcdef",u=new Array(256);for(let h=0;h<16;++h){const x=h*16;for(let D=0;D<16;++D)u[x+D]=m[h]+m[D]}return u}();function Ei(m){return typeof BigInt>"u"?ng:m}function ng(){throw new Error("BigInt not supported")}})(_1);var lp;typeof window<"u"&&(window.Buffer||(window.Buffer=_1.Buffer),window.global||(window.global=window),window.process||(window.process={}),(lp=window.process)!=null&&lp.env||(window.process={env:{}}));const un={APP_EVENT_KEY:"@w3m-app/",FRAME_EVENT_KEY:"@w3m-frame/",RPC_METHOD_KEY:"RPC_",STORAGE_KEY:"@w3m-storage/",SESSION_TOKEN_KEY:"SESSION_TOKEN_KEY",EMAIL_LOGIN_USED_KEY:"EMAIL_LOGIN_USED_KEY",LAST_USED_CHAIN_KEY:"LAST_USED_CHAIN_KEY",LAST_EMAIL_LOGIN_TIME:"LAST_EMAIL_LOGIN_TIME",EMAIL:"EMAIL",PREFERRED_ACCOUNT_TYPE:"PREFERRED_ACCOUNT_TYPE",SMART_ACCOUNT_ENABLED:"SMART_ACCOUNT_ENABLED",SMART_ACCOUNT_ENABLED_NETWORKS:"SMART_ACCOUNT_ENABLED_NETWORKS",APP_SWITCH_NETWORK:"@w3m-app/SWITCH_NETWORK",APP_CONNECT_EMAIL:"@w3m-app/CONNECT_EMAIL",APP_CONNECT_DEVICE:"@w3m-app/CONNECT_DEVICE",APP_CONNECT_OTP:"@w3m-app/CONNECT_OTP",APP_GET_USER:"@w3m-app/GET_USER",APP_SIGN_OUT:"@w3m-app/SIGN_OUT",APP_IS_CONNECTED:"@w3m-app/IS_CONNECTED",APP_GET_CHAIN_ID:"@w3m-app/GET_CHAIN_ID",APP_RPC_REQUEST:"@w3m-app/RPC_REQUEST",APP_UPDATE_EMAIL:"@w3m-app/UPDATE_EMAIL",APP_UPDATE_EMAIL_PRIMARY_OTP:"@w3m-app/UPDATE_EMAIL_PRIMARY_OTP",APP_UPDATE_EMAIL_SECONDARY_OTP:"@w3m-app/UPDATE_EMAIL_SECONDARY_OTP",APP_AWAIT_UPDATE_EMAIL:"@w3m-app/AWAIT_UPDATE_EMAIL",APP_SYNC_THEME:"@w3m-app/SYNC_THEME",APP_SYNC_DAPP_DATA:"@w3m-app/SYNC_DAPP_DATA",APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS:"@w3m-app/GET_SMART_ACCOUNT_ENABLED_NETWORKS",APP_INIT_SMART_ACCOUNT:"@w3m-app/INIT_SMART_ACCOUNT",APP_SET_PREFERRED_ACCOUNT:"@w3m-app/SET_PREFERRED_ACCOUNT",FRAME_SWITCH_NETWORK_ERROR:"@w3m-frame/SWITCH_NETWORK_ERROR",FRAME_SWITCH_NETWORK_SUCCESS:"@w3m-frame/SWITCH_NETWORK_SUCCESS",FRAME_CONNECT_EMAIL_ERROR:"@w3m-frame/CONNECT_EMAIL_ERROR",FRAME_CONNECT_EMAIL_SUCCESS:"@w3m-frame/CONNECT_EMAIL_SUCCESS",FRAME_CONNECT_DEVICE_ERROR:"@w3m-frame/CONNECT_DEVICE_ERROR",FRAME_CONNECT_DEVICE_SUCCESS:"@w3m-frame/CONNECT_DEVICE_SUCCESS",FRAME_CONNECT_OTP_SUCCESS:"@w3m-frame/CONNECT_OTP_SUCCESS",FRAME_CONNECT_OTP_ERROR:"@w3m-frame/CONNECT_OTP_ERROR",FRAME_GET_USER_SUCCESS:"@w3m-frame/GET_USER_SUCCESS",FRAME_GET_USER_ERROR:"@w3m-frame/GET_USER_ERROR",FRAME_SIGN_OUT_SUCCESS:"@w3m-frame/SIGN_OUT_SUCCESS",FRAME_SIGN_OUT_ERROR:"@w3m-frame/SIGN_OUT_ERROR",FRAME_IS_CONNECTED_SUCCESS:"@w3m-frame/IS_CONNECTED_SUCCESS",FRAME_IS_CONNECTED_ERROR:"@w3m-frame/IS_CONNECTED_ERROR",FRAME_GET_CHAIN_ID_SUCCESS:"@w3m-frame/GET_CHAIN_ID_SUCCESS",FRAME_GET_CHAIN_ID_ERROR:"@w3m-frame/GET_CHAIN_ID_ERROR",FRAME_RPC_REQUEST_SUCCESS:"@w3m-frame/RPC_REQUEST_SUCCESS",FRAME_RPC_REQUEST_ERROR:"@w3m-frame/RPC_REQUEST_ERROR",FRAME_SESSION_UPDATE:"@w3m-frame/SESSION_UPDATE",FRAME_UPDATE_EMAIL_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SUCCESS",FRAME_UPDATE_EMAIL_ERROR:"@w3m-frame/UPDATE_EMAIL_ERROR",FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_PRIMARY_OTP_ERROR",FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_SUCCESS",FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR:"@w3m-frame/UPDATE_EMAIL_SECONDARY_OTP_ERROR",FRAME_SYNC_THEME_SUCCESS:"@w3m-frame/SYNC_THEME_SUCCESS",FRAME_SYNC_THEME_ERROR:"@w3m-frame/SYNC_THEME_ERROR",FRAME_SYNC_DAPP_DATA_SUCCESS:"@w3m-frame/SYNC_DAPP_DATA_SUCCESS",FRAME_SYNC_DAPP_DATA_ERROR:"@w3m-frame/SYNC_DAPP_DATA_ERROR",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS",FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR:"@w3m-frame/GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR",FRAME_INIT_SMART_ACCOUNT_SUCCESS:"@w3m-frame/INIT_SMART_ACCOUNT_SUCCESS",FRAME_INIT_SMART_ACCOUNT_ERROR:"@w3m-frame/INIT_SMART_ACCOUNT_ERROR",FRAME_SET_PREFERRED_ACCOUNT_SUCCESS:"@w3m-frame/SET_PREFERRED_ACCOUNT_SUCCESS",FRAME_SET_PREFERRED_ACCOUNT_ERROR:"@w3m-frame/SET_PREFERRED_ACCOUNT_ERROR",RPC_RESPONSE_TYPE_ERROR:"RPC_RESPONSE_ERROR",RPC_RESPONSE_TYPE_TX:"RPC_RESPONSE_TRANSACTION_HASH",RPC_RESPONSE_TYPE_OBJECT:"RPC_RESPONSE_OBJECT"},Gt={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}};var Le;(function(t){t.assertEqual=o=>o;function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{const r={};for(const s of o)r[s]=s;return r},t.getValidEnumValues=o=>{const r=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(const a of r)s[a]=o[a];return t.objectValues(s)},t.objectValues=o=>t.objectKeys(o).map(function(r){return o[r]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{const r=[];for(const s in o)Object.prototype.hasOwnProperty.call(o,s)&&r.push(s);return r},t.find=(o,r)=>{for(const s of o)if(r(s))return s},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&isFinite(o)&&Math.floor(o)===o;function i(o,r=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(r)}t.joinValues=i,t.jsonStringifyReplacer=(o,r)=>typeof r=="bigint"?r.toString():r})(Le||(Le={}));var Yu;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Yu||(Yu={}));const ae=Le.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Oi=t=>{switch(typeof t){case"undefined":return ae.undefined;case"string":return ae.string;case"number":return isNaN(t)?ae.nan:ae.number;case"boolean":return ae.boolean;case"function":return ae.function;case"bigint":return ae.bigint;case"symbol":return ae.symbol;case"object":return Array.isArray(t)?ae.array:t===null?ae.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?ae.promise:typeof Map<"u"&&t instanceof Map?ae.map:typeof Set<"u"&&t instanceof Set?ae.set:typeof Date<"u"&&t instanceof Date?ae.date:ae.object;default:return ae.unknown}},ee=Le.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),By=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:");class xn extends Error{constructor(e){super(),this.issues=[],this.addIssue=i=>{this.issues=[...this.issues,i]},this.addIssues=(i=[])=>{this.issues=[...this.issues,...i]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}get errors(){return this.issues}format(e){const n=e||function(r){return r.message},i={_errors:[]},o=r=>{for(const s of r.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)i._errors.push(n(s));else{let a=i,c=0;for(;c<s.path.length;){const l=s.path[c];c===s.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(s))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return o(this),i}toString(){return this.message}get message(){return JSON.stringify(this.issues,Le.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){const n={},i=[];for(const o of this.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):i.push(e(o));return{formErrors:i,fieldErrors:n}}get formErrors(){return this.flatten()}}xn.create=t=>new xn(t);const sa=(t,e)=>{let n;switch(t.code){case ee.invalid_type:t.received===ae.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case ee.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Le.jsonStringifyReplacer)}`;break;case ee.unrecognized_keys:n=`Unrecognized key(s) in object: ${Le.joinValues(t.keys,", ")}`;break;case ee.invalid_union:n="Invalid input";break;case ee.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Le.joinValues(t.options)}`;break;case ee.invalid_enum_value:n=`Invalid enum value. Expected ${Le.joinValues(t.options)}, received '${t.received}'`;break;case ee.invalid_arguments:n="Invalid function arguments";break;case ee.invalid_return_type:n="Invalid function return type";break;case ee.invalid_date:n="Invalid date";break;case ee.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Le.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case ee.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case ee.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case ee.custom:n="Invalid input";break;case ee.invalid_intersection_types:n="Intersection results could not be merged";break;case ee.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case ee.not_finite:n="Number must be finite";break;default:n=e.defaultError,Le.assertNever(t)}return{message:n}};let T1=sa;function My(t){T1=t}function Oc(){return T1}const Nc=t=>{const{data:e,path:n,errorMaps:i,issueData:o}=t,r=[...n,...o.path||[]],s={...o,path:r};let a="";const c=i.filter(l=>!!l).slice().reverse();for(const l of c)a=l(s,{data:e,defaultError:a}).message;return{...o,path:r,message:o.message||a}},Dy=[];function le(t,e){const n=Nc({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,Oc(),sa].filter(i=>!!i)});t.common.issues.push(n)}class St{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){const i=[];for(const o of n){if(o.status==="aborted")return ke;o.status==="dirty"&&e.dirty(),i.push(o.value)}return{status:e.value,value:i}}static async mergeObjectAsync(e,n){const i=[];for(const o of n)i.push({key:await o.key,value:await o.value});return St.mergeObjectSync(e,i)}static mergeObjectSync(e,n){const i={};for(const o of n){const{key:r,value:s}=o;if(r.status==="aborted"||s.status==="aborted")return ke;r.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),r.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(i[r.value]=s.value)}return{status:e.value,value:i}}}const ke=Object.freeze({status:"aborted"}),k1=t=>({status:"dirty",value:t}),Dt=t=>({status:"valid",value:t}),Ku=t=>t.status==="aborted",Ju=t=>t.status==="dirty",aa=t=>t.status==="valid",Bc=t=>typeof Promise<"u"&&t instanceof Promise;var fe;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(fe||(fe={}));class Kn{constructor(e,n,i,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=i,this._key=o}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Oh=(t,e)=>{if(aa(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new xn(t.common.issues);return this._error=n,this._error}}};function Se(t){if(!t)return{};const{errorMap:e,invalid_type_error:n,required_error:i,description:o}=t;if(e&&(n||i))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>s.code!=="invalid_type"?{message:a.defaultError}:typeof a.data>"u"?{message:i??a.defaultError}:{message:n??a.defaultError},description:o}}class Re{constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return Oi(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new St,ctx:{common:e.parent.common,data:e.data,parsedType:Oi(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const n=this._parse(e);if(Bc(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){const n=this._parse(e);return Promise.resolve(n)}parse(e,n){const i=this.safeParse(e,n);if(i.success)return i.data;throw i.error}safeParse(e,n){var i;const o={common:{issues:[],async:(i=n==null?void 0:n.async)!==null&&i!==void 0?i:!1,contextualErrorMap:n==null?void 0:n.errorMap},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},r=this._parseSync({data:e,path:o.path,parent:o});return Oh(o,r)}async parseAsync(e,n){const i=await this.safeParseAsync(e,n);if(i.success)return i.data;throw i.error}async safeParseAsync(e,n){const i={common:{issues:[],contextualErrorMap:n==null?void 0:n.errorMap,async:!0},path:(n==null?void 0:n.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Oi(e)},o=this._parse({data:e,path:i.path,parent:i}),r=await(Bc(o)?o:Promise.resolve(o));return Oh(i,r)}refine(e,n){const i=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,r)=>{const s=e(o),a=()=>r.addIssue({code:ee.custom,...i(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(c=>c?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((i,o)=>e(i)?!0:(o.addIssue(typeof n=="function"?n(i,o):n),!1))}_refinement(e){return new Sn({schema:this,typeName:Ce.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return hi.create(this,this._def)}nullable(){return Hr.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Cn.create(this,this._def)}promise(){return Vo.create(this,this._def)}or(e){return da.create([this,e],this._def)}and(e){return ha.create(this,e,this._def)}transform(e){return new Sn({...Se(this._def),schema:this,typeName:Ce.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const n=typeof e=="function"?e:()=>e;return new wa({...Se(this._def),innerType:this,defaultValue:n,typeName:Ce.ZodDefault})}brand(){return new $1({typeName:Ce.ZodBranded,type:this,...Se(this._def)})}catch(e){const n=typeof e=="function"?e:()=>e;return new jc({...Se(this._def),innerType:this,catchValue:n,typeName:Ce.ZodCatch})}describe(e){const n=this.constructor;return new n({...this._def,description:e})}pipe(e){return ja.create(this,e)}readonly(){return Wc.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Ly=/^c[^\s-]{8,}$/i,jy=/^[a-z][a-z0-9]*$/,Uy=/^[0-9A-HJKMNP-TV-Z]{26}$/,Wy=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,zy=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Fy="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let bu;const Hy=/^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,Vy=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,Zy=t=>t.precision?t.offset?new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`):new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${t.precision}}Z$`):t.precision===0?t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$"):t.offset?new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"):new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");function Gy(t,e){return!!((e==="v4"||!e)&&Hy.test(t)||(e==="v6"||!e)&&Vy.test(t))}class vn extends Re{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==ae.string){const r=this._getOrReturnCtx(e);return le(r,{code:ee.invalid_type,expected:ae.string,received:r.parsedType}),ke}const i=new St;let o;for(const r of this._def.checks)if(r.kind==="min")e.data.length<r.value&&(o=this._getOrReturnCtx(e,o),le(o,{code:ee.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),i.dirty());else if(r.kind==="max")e.data.length>r.value&&(o=this._getOrReturnCtx(e,o),le(o,{code:ee.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!1,message:r.message}),i.dirty());else if(r.kind==="length"){const s=e.data.length>r.value,a=e.data.length<r.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?le(o,{code:ee.too_big,maximum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}):a&&le(o,{code:ee.too_small,minimum:r.value,type:"string",inclusive:!0,exact:!0,message:r.message}),i.dirty())}else if(r.kind==="email")zy.test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"email",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="emoji")bu||(bu=new RegExp(Fy,"u")),bu.test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"emoji",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="uuid")Wy.test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"uuid",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="cuid")Ly.test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"cuid",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="cuid2")jy.test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"cuid2",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="ulid")Uy.test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"ulid",code:ee.invalid_string,message:r.message}),i.dirty());else if(r.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),le(o,{validation:"url",code:ee.invalid_string,message:r.message}),i.dirty()}else r.kind==="regex"?(r.regex.lastIndex=0,r.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"regex",code:ee.invalid_string,message:r.message}),i.dirty())):r.kind==="trim"?e.data=e.data.trim():r.kind==="includes"?e.data.includes(r.value,r.position)||(o=this._getOrReturnCtx(e,o),le(o,{code:ee.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),i.dirty()):r.kind==="toLowerCase"?e.data=e.data.toLowerCase():r.kind==="toUpperCase"?e.data=e.data.toUpperCase():r.kind==="startsWith"?e.data.startsWith(r.value)||(o=this._getOrReturnCtx(e,o),le(o,{code:ee.invalid_string,validation:{startsWith:r.value},message:r.message}),i.dirty()):r.kind==="endsWith"?e.data.endsWith(r.value)||(o=this._getOrReturnCtx(e,o),le(o,{code:ee.invalid_string,validation:{endsWith:r.value},message:r.message}),i.dirty()):r.kind==="datetime"?Zy(r).test(e.data)||(o=this._getOrReturnCtx(e,o),le(o,{code:ee.invalid_string,validation:"datetime",message:r.message}),i.dirty()):r.kind==="ip"?Gy(e.data,r.version)||(o=this._getOrReturnCtx(e,o),le(o,{validation:"ip",code:ee.invalid_string,message:r.message}),i.dirty()):Le.assertNever(r);return{status:i.value,value:e.data}}_regex(e,n,i){return this.refinement(o=>e.test(o),{validation:n,code:ee.invalid_string,...fe.errToObj(i)})}_addCheck(e){return new vn({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...fe.errToObj(e)})}url(e){return this._addCheck({kind:"url",...fe.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...fe.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...fe.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...fe.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...fe.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...fe.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...fe.errToObj(e)})}datetime(e){var n;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(n=e==null?void 0:e.offset)!==null&&n!==void 0?n:!1,...fe.errToObj(e==null?void 0:e.message)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...fe.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n==null?void 0:n.position,...fe.errToObj(n==null?void 0:n.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...fe.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...fe.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...fe.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...fe.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...fe.errToObj(n)})}nonempty(e){return this.min(1,fe.errToObj(e))}trim(){return new vn({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new vn({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new vn({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get minLength(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}vn.create=t=>{var e;return new vn({checks:[],typeName:Ce.ZodString,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Se(t)})};function qy(t,e){const n=(t.toString().split(".")[1]||"").length,i=(e.toString().split(".")[1]||"").length,o=n>i?n:i,r=parseInt(t.toFixed(o).replace(".","")),s=parseInt(e.toFixed(o).replace(".",""));return r%s/Math.pow(10,o)}class Ki extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==ae.number){const r=this._getOrReturnCtx(e);return le(r,{code:ee.invalid_type,expected:ae.number,received:r.parsedType}),ke}let i;const o=new St;for(const r of this._def.checks)r.kind==="int"?Le.isInteger(e.data)||(i=this._getOrReturnCtx(e,i),le(i,{code:ee.invalid_type,expected:"integer",received:"float",message:r.message}),o.dirty()):r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:ee.too_small,minimum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),o.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:ee.too_big,maximum:r.value,type:"number",inclusive:r.inclusive,exact:!1,message:r.message}),o.dirty()):r.kind==="multipleOf"?qy(e.data,r.value)!==0&&(i=this._getOrReturnCtx(e,i),le(i,{code:ee.not_multiple_of,multipleOf:r.value,message:r.message}),o.dirty()):r.kind==="finite"?Number.isFinite(e.data)||(i=this._getOrReturnCtx(e,i),le(i,{code:ee.not_finite,message:r.message}),o.dirty()):Le.assertNever(r);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,fe.toString(n))}gt(e,n){return this.setLimit("min",e,!1,fe.toString(n))}lte(e,n){return this.setLimit("max",e,!0,fe.toString(n))}lt(e,n){return this.setLimit("max",e,!1,fe.toString(n))}setLimit(e,n,i,o){return new Ki({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:fe.toString(o)}]})}_addCheck(e){return new Ki({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:fe.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:fe.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:fe.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:fe.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:fe.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:fe.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:fe.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:fe.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:fe.toString(e)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Le.isInteger(e.value))}get isFinite(){let e=null,n=null;for(const i of this._def.checks){if(i.kind==="finite"||i.kind==="int"||i.kind==="multipleOf")return!0;i.kind==="min"?(n===null||i.value>n)&&(n=i.value):i.kind==="max"&&(e===null||i.value<e)&&(e=i.value)}return Number.isFinite(n)&&Number.isFinite(e)}}Ki.create=t=>new Ki({checks:[],typeName:Ce.ZodNumber,coerce:(t==null?void 0:t.coerce)||!1,...Se(t)});class Ji extends Re{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce&&(e.data=BigInt(e.data)),this._getType(e)!==ae.bigint){const r=this._getOrReturnCtx(e);return le(r,{code:ee.invalid_type,expected:ae.bigint,received:r.parsedType}),ke}let i;const o=new St;for(const r of this._def.checks)r.kind==="min"?(r.inclusive?e.data<r.value:e.data<=r.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:ee.too_small,type:"bigint",minimum:r.value,inclusive:r.inclusive,message:r.message}),o.dirty()):r.kind==="max"?(r.inclusive?e.data>r.value:e.data>=r.value)&&(i=this._getOrReturnCtx(e,i),le(i,{code:ee.too_big,type:"bigint",maximum:r.value,inclusive:r.inclusive,message:r.message}),o.dirty()):r.kind==="multipleOf"?e.data%r.value!==BigInt(0)&&(i=this._getOrReturnCtx(e,i),le(i,{code:ee.not_multiple_of,multipleOf:r.value,message:r.message}),o.dirty()):Le.assertNever(r);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,fe.toString(n))}gt(e,n){return this.setLimit("min",e,!1,fe.toString(n))}lte(e,n){return this.setLimit("max",e,!0,fe.toString(n))}lt(e,n){return this.setLimit("max",e,!1,fe.toString(n))}setLimit(e,n,i,o){return new Ji({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:i,message:fe.toString(o)}]})}_addCheck(e){return new Ji({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:fe.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:fe.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:fe.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:fe.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:fe.toString(n)})}get minValue(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}}Ji.create=t=>{var e;return new Ji({checks:[],typeName:Ce.ZodBigInt,coerce:(e=t==null?void 0:t.coerce)!==null&&e!==void 0?e:!1,...Se(t)})};class ca extends Re{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==ae.boolean){const i=this._getOrReturnCtx(e);return le(i,{code:ee.invalid_type,expected:ae.boolean,received:i.parsedType}),ke}return Dt(e.data)}}ca.create=t=>new ca({typeName:Ce.ZodBoolean,coerce:(t==null?void 0:t.coerce)||!1,...Se(t)});class zr extends Re{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==ae.date){const r=this._getOrReturnCtx(e);return le(r,{code:ee.invalid_type,expected:ae.date,received:r.parsedType}),ke}if(isNaN(e.data.getTime())){const r=this._getOrReturnCtx(e);return le(r,{code:ee.invalid_date}),ke}const i=new St;let o;for(const r of this._def.checks)r.kind==="min"?e.data.getTime()<r.value&&(o=this._getOrReturnCtx(e,o),le(o,{code:ee.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:"date"}),i.dirty()):r.kind==="max"?e.data.getTime()>r.value&&(o=this._getOrReturnCtx(e,o),le(o,{code:ee.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:"date"}),i.dirty()):Le.assertNever(r);return{status:i.value,value:new Date(e.data.getTime())}}_addCheck(e){return new zr({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:fe.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:fe.toString(n)})}get minDate(){let e=null;for(const n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}}zr.create=t=>new zr({checks:[],coerce:(t==null?void 0:t.coerce)||!1,typeName:Ce.ZodDate,...Se(t)});class Mc extends Re{_parse(e){if(this._getType(e)!==ae.symbol){const i=this._getOrReturnCtx(e);return le(i,{code:ee.invalid_type,expected:ae.symbol,received:i.parsedType}),ke}return Dt(e.data)}}Mc.create=t=>new Mc({typeName:Ce.ZodSymbol,...Se(t)});class la extends Re{_parse(e){if(this._getType(e)!==ae.undefined){const i=this._getOrReturnCtx(e);return le(i,{code:ee.invalid_type,expected:ae.undefined,received:i.parsedType}),ke}return Dt(e.data)}}la.create=t=>new la({typeName:Ce.ZodUndefined,...Se(t)});class ua extends Re{_parse(e){if(this._getType(e)!==ae.null){const i=this._getOrReturnCtx(e);return le(i,{code:ee.invalid_type,expected:ae.null,received:i.parsedType}),ke}return Dt(e.data)}}ua.create=t=>new ua({typeName:Ce.ZodNull,...Se(t)});class Ho extends Re{constructor(){super(...arguments),this._any=!0}_parse(e){return Dt(e.data)}}Ho.create=t=>new Ho({typeName:Ce.ZodAny,...Se(t)});class yr extends Re{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Dt(e.data)}}yr.create=t=>new yr({typeName:Ce.ZodUnknown,...Se(t)});class bi extends Re{_parse(e){const n=this._getOrReturnCtx(e);return le(n,{code:ee.invalid_type,expected:ae.never,received:n.parsedType}),ke}}bi.create=t=>new bi({typeName:Ce.ZodNever,...Se(t)});class Dc extends Re{_parse(e){if(this._getType(e)!==ae.undefined){const i=this._getOrReturnCtx(e);return le(i,{code:ee.invalid_type,expected:ae.void,received:i.parsedType}),ke}return Dt(e.data)}}Dc.create=t=>new Dc({typeName:Ce.ZodVoid,...Se(t)});class Cn extends Re{_parse(e){const{ctx:n,status:i}=this._processInputParams(e),o=this._def;if(n.parsedType!==ae.array)return le(n,{code:ee.invalid_type,expected:ae.array,received:n.parsedType}),ke;if(o.exactLength!==null){const s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(le(n,{code:s?ee.too_big:ee.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),i.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(le(n,{code:ee.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),i.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(le(n,{code:ee.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),i.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new Kn(n,s,n.path,a)))).then(s=>St.mergeArray(i,s));const r=[...n.data].map((s,a)=>o.type._parseSync(new Kn(n,s,n.path,a)));return St.mergeArray(i,r)}get element(){return this._def.type}min(e,n){return new Cn({...this._def,minLength:{value:e,message:fe.toString(n)}})}max(e,n){return new Cn({...this._def,maxLength:{value:e,message:fe.toString(n)}})}length(e,n){return new Cn({...this._def,exactLength:{value:e,message:fe.toString(n)}})}nonempty(e){return this.min(1,e)}}Cn.create=(t,e)=>new Cn({type:t,minLength:null,maxLength:null,exactLength:null,typeName:Ce.ZodArray,...Se(e)});function ho(t){if(t instanceof et){const e={};for(const n in t.shape){const i=t.shape[n];e[n]=hi.create(ho(i))}return new et({...t._def,shape:()=>e})}else return t instanceof Cn?new Cn({...t._def,type:ho(t.element)}):t instanceof hi?hi.create(ho(t.unwrap())):t instanceof Hr?Hr.create(ho(t.unwrap())):t instanceof Jn?Jn.create(t.items.map(e=>ho(e))):t}class et extends Re{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),n=Le.objectKeys(e);return this._cached={shape:e,keys:n}}_parse(e){if(this._getType(e)!==ae.object){const l=this._getOrReturnCtx(e);return le(l,{code:ee.invalid_type,expected:ae.object,received:l.parsedType}),ke}const{status:i,ctx:o}=this._processInputParams(e),{shape:r,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof bi&&this._def.unknownKeys==="strip"))for(const l in o.data)s.includes(l)||a.push(l);const c=[];for(const l of s){const d=r[l],p=o.data[l];c.push({key:{status:"valid",value:l},value:d._parse(new Kn(o,p,o.path,l)),alwaysSet:l in o.data})}if(this._def.catchall instanceof bi){const l=this._def.unknownKeys;if(l==="passthrough")for(const d of a)c.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(l==="strict")a.length>0&&(le(o,{code:ee.unrecognized_keys,keys:a}),i.dirty());else if(l!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const l=this._def.catchall;for(const d of a){const p=o.data[d];c.push({key:{status:"valid",value:d},value:l._parse(new Kn(o,p,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{const l=[];for(const d of c){const p=await d.key;l.push({key:p,value:await d.value,alwaysSet:d.alwaysSet})}return l}).then(l=>St.mergeObjectSync(i,l)):St.mergeObjectSync(i,c)}get shape(){return this._def.shape()}strict(e){return fe.errToObj,new et({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,i)=>{var o,r,s,a;const c=(s=(r=(o=this._def).errorMap)===null||r===void 0?void 0:r.call(o,n,i).message)!==null&&s!==void 0?s:i.defaultError;return n.code==="unrecognized_keys"?{message:(a=fe.errToObj(e).message)!==null&&a!==void 0?a:c}:{message:c}}}:{}})}strip(){return new et({...this._def,unknownKeys:"strip"})}passthrough(){return new et({...this._def,unknownKeys:"passthrough"})}extend(e){return new et({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new et({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:Ce.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new et({...this._def,catchall:e})}pick(e){const n={};return Le.objectKeys(e).forEach(i=>{e[i]&&this.shape[i]&&(n[i]=this.shape[i])}),new et({...this._def,shape:()=>n})}omit(e){const n={};return Le.objectKeys(this.shape).forEach(i=>{e[i]||(n[i]=this.shape[i])}),new et({...this._def,shape:()=>n})}deepPartial(){return ho(this)}partial(e){const n={};return Le.objectKeys(this.shape).forEach(i=>{const o=this.shape[i];e&&!e[i]?n[i]=o:n[i]=o.optional()}),new et({...this._def,shape:()=>n})}required(e){const n={};return Le.objectKeys(this.shape).forEach(i=>{if(e&&!e[i])n[i]=this.shape[i];else{let r=this.shape[i];for(;r instanceof hi;)r=r._def.innerType;n[i]=r}}),new et({...this._def,shape:()=>n})}keyof(){return A1(Le.objectKeys(this.shape))}}et.create=(t,e)=>new et({shape:()=>t,unknownKeys:"strip",catchall:bi.create(),typeName:Ce.ZodObject,...Se(e)});et.strictCreate=(t,e)=>new et({shape:()=>t,unknownKeys:"strict",catchall:bi.create(),typeName:Ce.ZodObject,...Se(e)});et.lazycreate=(t,e)=>new et({shape:t,unknownKeys:"strip",catchall:bi.create(),typeName:Ce.ZodObject,...Se(e)});class da extends Re{_parse(e){const{ctx:n}=this._processInputParams(e),i=this._def.options;function o(r){for(const a of r)if(a.result.status==="valid")return a.result;for(const a of r)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;const s=r.map(a=>new xn(a.ctx.common.issues));return le(n,{code:ee.invalid_union,unionErrors:s}),ke}if(n.common.async)return Promise.all(i.map(async r=>{const s={...n,common:{...n.common,issues:[]},parent:null};return{result:await r._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let r;const s=[];for(const c of i){const l={...n,common:{...n.common,issues:[]},parent:null},d=c._parseSync({data:n.data,path:n.path,parent:l});if(d.status==="valid")return d;d.status==="dirty"&&!r&&(r={result:d,ctx:l}),l.common.issues.length&&s.push(l.common.issues)}if(r)return n.common.issues.push(...r.ctx.common.issues),r.result;const a=s.map(c=>new xn(c));return le(n,{code:ee.invalid_union,unionErrors:a}),ke}}get options(){return this._def.options}}da.create=(t,e)=>new da({options:t,typeName:Ce.ZodUnion,...Se(e)});const lc=t=>t instanceof fa?lc(t.schema):t instanceof Sn?lc(t.innerType()):t instanceof ga?[t.value]:t instanceof Xi?t.options:t instanceof ma?Object.keys(t.enum):t instanceof wa?lc(t._def.innerType):t instanceof la?[void 0]:t instanceof ua?[null]:null;class Pl extends Re{_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ae.object)return le(n,{code:ee.invalid_type,expected:ae.object,received:n.parsedType}),ke;const i=this.discriminator,o=n.data[i],r=this.optionsMap.get(o);return r?n.common.async?r._parseAsync({data:n.data,path:n.path,parent:n}):r._parseSync({data:n.data,path:n.path,parent:n}):(le(n,{code:ee.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[i]}),ke)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,i){const o=new Map;for(const r of n){const s=lc(r.shape[e]);if(!s)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,r)}}return new Pl({typeName:Ce.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...Se(i)})}}function Xu(t,e){const n=Oi(t),i=Oi(e);if(t===e)return{valid:!0,data:t};if(n===ae.object&&i===ae.object){const o=Le.objectKeys(e),r=Le.objectKeys(t).filter(a=>o.indexOf(a)!==-1),s={...t,...e};for(const a of r){const c=Xu(t[a],e[a]);if(!c.valid)return{valid:!1};s[a]=c.data}return{valid:!0,data:s}}else if(n===ae.array&&i===ae.array){if(t.length!==e.length)return{valid:!1};const o=[];for(let r=0;r<t.length;r++){const s=t[r],a=e[r],c=Xu(s,a);if(!c.valid)return{valid:!1};o.push(c.data)}return{valid:!0,data:o}}else return n===ae.date&&i===ae.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}class ha extends Re{_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=(r,s)=>{if(Ku(r)||Ku(s))return ke;const a=Xu(r.value,s.value);return a.valid?((Ju(r)||Ju(s))&&n.dirty(),{status:n.value,value:a.data}):(le(i,{code:ee.invalid_intersection_types}),ke)};return i.common.async?Promise.all([this._def.left._parseAsync({data:i.data,path:i.path,parent:i}),this._def.right._parseAsync({data:i.data,path:i.path,parent:i})]).then(([r,s])=>o(r,s)):o(this._def.left._parseSync({data:i.data,path:i.path,parent:i}),this._def.right._parseSync({data:i.data,path:i.path,parent:i}))}}ha.create=(t,e,n)=>new ha({left:t,right:e,typeName:Ce.ZodIntersection,...Se(n)});class Jn extends Re{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ae.array)return le(i,{code:ee.invalid_type,expected:ae.array,received:i.parsedType}),ke;if(i.data.length<this._def.items.length)return le(i,{code:ee.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),ke;!this._def.rest&&i.data.length>this._def.items.length&&(le(i,{code:ee.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const r=[...i.data].map((s,a)=>{const c=this._def.items[a]||this._def.rest;return c?c._parse(new Kn(i,s,i.path,a)):null}).filter(s=>!!s);return i.common.async?Promise.all(r).then(s=>St.mergeArray(n,s)):St.mergeArray(n,r)}get items(){return this._def.items}rest(e){return new Jn({...this._def,rest:e})}}Jn.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Jn({items:t,typeName:Ce.ZodTuple,rest:null,...Se(e)})};class pa extends Re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ae.object)return le(i,{code:ee.invalid_type,expected:ae.object,received:i.parsedType}),ke;const o=[],r=this._def.keyType,s=this._def.valueType;for(const a in i.data)o.push({key:r._parse(new Kn(i,a,i.path,a)),value:s._parse(new Kn(i,i.data[a],i.path,a))});return i.common.async?St.mergeObjectAsync(n,o):St.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,i){return n instanceof Re?new pa({keyType:e,valueType:n,typeName:Ce.ZodRecord,...Se(i)}):new pa({keyType:vn.create(),valueType:e,typeName:Ce.ZodRecord,...Se(n)})}}class Lc extends Re{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ae.map)return le(i,{code:ee.invalid_type,expected:ae.map,received:i.parsedType}),ke;const o=this._def.keyType,r=this._def.valueType,s=[...i.data.entries()].map(([a,c],l)=>({key:o._parse(new Kn(i,a,i.path,[l,"key"])),value:r._parse(new Kn(i,c,i.path,[l,"value"]))}));if(i.common.async){const a=new Map;return Promise.resolve().then(async()=>{for(const c of s){const l=await c.key,d=await c.value;if(l.status==="aborted"||d.status==="aborted")return ke;(l.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(l.value,d.value)}return{status:n.value,value:a}})}else{const a=new Map;for(const c of s){const l=c.key,d=c.value;if(l.status==="aborted"||d.status==="aborted")return ke;(l.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(l.value,d.value)}return{status:n.value,value:a}}}}Lc.create=(t,e,n)=>new Lc({valueType:e,keyType:t,typeName:Ce.ZodMap,...Se(n)});class Fr extends Re{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.parsedType!==ae.set)return le(i,{code:ee.invalid_type,expected:ae.set,received:i.parsedType}),ke;const o=this._def;o.minSize!==null&&i.data.size<o.minSize.value&&(le(i,{code:ee.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&i.data.size>o.maxSize.value&&(le(i,{code:ee.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());const r=this._def.valueType;function s(c){const l=new Set;for(const d of c){if(d.status==="aborted")return ke;d.status==="dirty"&&n.dirty(),l.add(d.value)}return{status:n.value,value:l}}const a=[...i.data.values()].map((c,l)=>r._parse(new Kn(i,c,i.path,l)));return i.common.async?Promise.all(a).then(c=>s(c)):s(a)}min(e,n){return new Fr({...this._def,minSize:{value:e,message:fe.toString(n)}})}max(e,n){return new Fr({...this._def,maxSize:{value:e,message:fe.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}}Fr.create=(t,e)=>new Fr({valueType:t,minSize:null,maxSize:null,typeName:Ce.ZodSet,...Se(e)});class wo extends Re{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ae.function)return le(n,{code:ee.invalid_type,expected:ae.function,received:n.parsedType}),ke;function i(a,c){return Nc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Oc(),sa].filter(l=>!!l),issueData:{code:ee.invalid_arguments,argumentsError:c}})}function o(a,c){return Nc({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Oc(),sa].filter(l=>!!l),issueData:{code:ee.invalid_return_type,returnTypeError:c}})}const r={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Vo){const a=this;return Dt(async function(...c){const l=new xn([]),d=await a._def.args.parseAsync(c,r).catch(b=>{throw l.addIssue(i(c,b)),l}),p=await Reflect.apply(s,this,d);return await a._def.returns._def.type.parseAsync(p,r).catch(b=>{throw l.addIssue(o(p,b)),l})})}else{const a=this;return Dt(function(...c){const l=a._def.args.safeParse(c,r);if(!l.success)throw new xn([i(c,l.error)]);const d=Reflect.apply(s,this,l.data),p=a._def.returns.safeParse(d,r);if(!p.success)throw new xn([o(d,p.error)]);return p.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new wo({...this._def,args:Jn.create(e).rest(yr.create())})}returns(e){return new wo({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,i){return new wo({args:e||Jn.create([]).rest(yr.create()),returns:n||yr.create(),typeName:Ce.ZodFunction,...Se(i)})}}class fa extends Re{get schema(){return this._def.getter()}_parse(e){const{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}fa.create=(t,e)=>new fa({getter:t,typeName:Ce.ZodLazy,...Se(e)});class ga extends Re{_parse(e){if(e.data!==this._def.value){const n=this._getOrReturnCtx(e);return le(n,{received:n.data,code:ee.invalid_literal,expected:this._def.value}),ke}return{status:"valid",value:e.data}}get value(){return this._def.value}}ga.create=(t,e)=>new ga({value:t,typeName:Ce.ZodLiteral,...Se(e)});function A1(t,e){return new Xi({values:t,typeName:Ce.ZodEnum,...Se(e)})}class Xi extends Re{_parse(e){if(typeof e.data!="string"){const n=this._getOrReturnCtx(e),i=this._def.values;return le(n,{expected:Le.joinValues(i),received:n.parsedType,code:ee.invalid_type}),ke}if(this._def.values.indexOf(e.data)===-1){const n=this._getOrReturnCtx(e),i=this._def.values;return le(n,{received:n.data,code:ee.invalid_enum_value,options:i}),ke}return Dt(e.data)}get options(){return this._def.values}get enum(){const e={};for(const n of this._def.values)e[n]=n;return e}get Values(){const e={};for(const n of this._def.values)e[n]=n;return e}get Enum(){const e={};for(const n of this._def.values)e[n]=n;return e}extract(e){return Xi.create(e)}exclude(e){return Xi.create(this.options.filter(n=>!e.includes(n)))}}Xi.create=A1;class ma extends Re{_parse(e){const n=Le.getValidEnumValues(this._def.values),i=this._getOrReturnCtx(e);if(i.parsedType!==ae.string&&i.parsedType!==ae.number){const o=Le.objectValues(n);return le(i,{expected:Le.joinValues(o),received:i.parsedType,code:ee.invalid_type}),ke}if(n.indexOf(e.data)===-1){const o=Le.objectValues(n);return le(i,{received:i.data,code:ee.invalid_enum_value,options:o}),ke}return Dt(e.data)}get enum(){return this._def.values}}ma.create=(t,e)=>new ma({values:t,typeName:Ce.ZodNativeEnum,...Se(e)});class Vo extends Re{unwrap(){return this._def.type}_parse(e){const{ctx:n}=this._processInputParams(e);if(n.parsedType!==ae.promise&&n.common.async===!1)return le(n,{code:ee.invalid_type,expected:ae.promise,received:n.parsedType}),ke;const i=n.parsedType===ae.promise?n.data:Promise.resolve(n.data);return Dt(i.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Vo.create=(t,e)=>new Vo({type:t,typeName:Ce.ZodPromise,...Se(e)});class Sn extends Re{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===Ce.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:n,ctx:i}=this._processInputParams(e),o=this._def.effect||null,r={addIssue:s=>{le(i,s),s.fatal?n.abort():n.dirty()},get path(){return i.path}};if(r.addIssue=r.addIssue.bind(r),o.type==="preprocess"){const s=o.transform(i.data,r);return i.common.issues.length?{status:"dirty",value:i.data}:i.common.async?Promise.resolve(s).then(a=>this._def.schema._parseAsync({data:a,path:i.path,parent:i})):this._def.schema._parseSync({data:s,path:i.path,parent:i})}if(o.type==="refinement"){const s=a=>{const c=o.refinement(a,r);if(i.common.async)return Promise.resolve(c);if(c instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(i.common.async===!1){const a=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});return a.status==="aborted"?ke:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(a=>a.status==="aborted"?ke:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(i.common.async===!1){const s=this._def.schema._parseSync({data:i.data,path:i.path,parent:i});if(!aa(s))return s;const a=o.transform(s.value,r);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:i.data,path:i.path,parent:i}).then(s=>aa(s)?Promise.resolve(o.transform(s.value,r)).then(a=>({status:n.value,value:a})):s);Le.assertNever(o)}}Sn.create=(t,e,n)=>new Sn({schema:t,typeName:Ce.ZodEffects,effect:e,...Se(n)});Sn.createWithPreprocess=(t,e,n)=>new Sn({schema:e,effect:{type:"preprocess",transform:t},typeName:Ce.ZodEffects,...Se(n)});class hi extends Re{_parse(e){return this._getType(e)===ae.undefined?Dt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}hi.create=(t,e)=>new hi({innerType:t,typeName:Ce.ZodOptional,...Se(e)});class Hr extends Re{_parse(e){return this._getType(e)===ae.null?Dt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}Hr.create=(t,e)=>new Hr({innerType:t,typeName:Ce.ZodNullable,...Se(e)});class wa extends Re{_parse(e){const{ctx:n}=this._processInputParams(e);let i=n.data;return n.parsedType===ae.undefined&&(i=this._def.defaultValue()),this._def.innerType._parse({data:i,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}wa.create=(t,e)=>new wa({innerType:t,typeName:Ce.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Se(e)});class jc extends Re{_parse(e){const{ctx:n}=this._processInputParams(e),i={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:i.data,path:i.path,parent:{...i}});return Bc(o)?o.then(r=>({status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new xn(i.common.issues)},input:i.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new xn(i.common.issues)},input:i.data})}}removeCatch(){return this._def.innerType}}jc.create=(t,e)=>new jc({innerType:t,typeName:Ce.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Se(e)});class Uc extends Re{_parse(e){if(this._getType(e)!==ae.nan){const i=this._getOrReturnCtx(e);return le(i,{code:ee.invalid_type,expected:ae.nan,received:i.parsedType}),ke}return{status:"valid",value:e.data}}}Uc.create=t=>new Uc({typeName:Ce.ZodNaN,...Se(t)});const Yy=Symbol("zod_brand");class $1 extends Re{_parse(e){const{ctx:n}=this._processInputParams(e),i=n.data;return this._def.type._parse({data:i,path:n.path,parent:n})}unwrap(){return this._def.type}}class ja extends Re{_parse(e){const{status:n,ctx:i}=this._processInputParams(e);if(i.common.async)return(async()=>{const r=await this._def.in._parseAsync({data:i.data,path:i.path,parent:i});return r.status==="aborted"?ke:r.status==="dirty"?(n.dirty(),k1(r.value)):this._def.out._parseAsync({data:r.value,path:i.path,parent:i})})();{const o=this._def.in._parseSync({data:i.data,path:i.path,parent:i});return o.status==="aborted"?ke:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:i.path,parent:i})}}static create(e,n){return new ja({in:e,out:n,typeName:Ce.ZodPipeline})}}class Wc extends Re{_parse(e){const n=this._def.innerType._parse(e);return aa(n)&&(n.value=Object.freeze(n.value)),n}}Wc.create=(t,e)=>new Wc({innerType:t,typeName:Ce.ZodReadonly,...Se(e)});const S1=(t,e={},n)=>t?Ho.create().superRefine((i,o)=>{var r,s;if(!t(i)){const a=typeof e=="function"?e(i):typeof e=="string"?{message:e}:e,c=(s=(r=a.fatal)!==null&&r!==void 0?r:n)!==null&&s!==void 0?s:!0,l=typeof a=="string"?{message:a}:a;o.addIssue({code:"custom",...l,fatal:c})}}):Ho.create(),Ky={object:et.lazycreate};var Ce;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(Ce||(Ce={}));const Jy=(t,e={message:`Input not instance of ${t.name}`})=>S1(n=>n instanceof t,e),I1=vn.create,R1=Ki.create,Xy=Uc.create,Qy=Ji.create,P1=ca.create,e6=zr.create,t6=Mc.create,n6=la.create,i6=ua.create,r6=Ho.create,o6=yr.create,s6=bi.create,a6=Dc.create,c6=Cn.create,l6=et.create,u6=et.strictCreate,d6=da.create,h6=Pl.create,p6=ha.create,f6=Jn.create,g6=pa.create,m6=Lc.create,w6=Fr.create,b6=wo.create,v6=fa.create,y6=ga.create,x6=Xi.create,C6=ma.create,_6=Vo.create,Nh=Sn.create,E6=hi.create,T6=Hr.create,k6=Sn.createWithPreprocess,A6=ja.create,$6=()=>I1().optional(),S6=()=>R1().optional(),I6=()=>P1().optional(),R6={string:t=>vn.create({...t,coerce:!0}),number:t=>Ki.create({...t,coerce:!0}),boolean:t=>ca.create({...t,coerce:!0}),bigint:t=>Ji.create({...t,coerce:!0}),date:t=>zr.create({...t,coerce:!0})},P6=ke;var y=Object.freeze({__proto__:null,defaultErrorMap:sa,setErrorMap:My,getErrorMap:Oc,makeIssue:Nc,EMPTY_PATH:Dy,addIssueToContext:le,ParseStatus:St,INVALID:ke,DIRTY:k1,OK:Dt,isAborted:Ku,isDirty:Ju,isValid:aa,isAsync:Bc,get util(){return Le},get objectUtil(){return Yu},ZodParsedType:ae,getParsedType:Oi,ZodType:Re,ZodString:vn,ZodNumber:Ki,ZodBigInt:Ji,ZodBoolean:ca,ZodDate:zr,ZodSymbol:Mc,ZodUndefined:la,ZodNull:ua,ZodAny:Ho,ZodUnknown:yr,ZodNever:bi,ZodVoid:Dc,ZodArray:Cn,ZodObject:et,ZodUnion:da,ZodDiscriminatedUnion:Pl,ZodIntersection:ha,ZodTuple:Jn,ZodRecord:pa,ZodMap:Lc,ZodSet:Fr,ZodFunction:wo,ZodLazy:fa,ZodLiteral:ga,ZodEnum:Xi,ZodNativeEnum:ma,ZodPromise:Vo,ZodEffects:Sn,ZodTransformer:Sn,ZodOptional:hi,ZodNullable:Hr,ZodDefault:wa,ZodCatch:jc,ZodNaN:Uc,BRAND:Yy,ZodBranded:$1,ZodPipeline:ja,ZodReadonly:Wc,custom:S1,Schema:Re,ZodSchema:Re,late:Ky,get ZodFirstPartyTypeKind(){return Ce},coerce:R6,any:r6,array:c6,bigint:Qy,boolean:P1,date:e6,discriminatedUnion:h6,effect:Nh,enum:x6,function:b6,instanceof:Jy,intersection:p6,lazy:v6,literal:y6,map:m6,nan:Xy,nativeEnum:C6,never:s6,null:i6,nullable:T6,number:R1,object:l6,oboolean:I6,onumber:S6,optional:E6,ostring:$6,pipeline:A6,preprocess:k6,promise:_6,record:g6,set:w6,strictObject:u6,string:I1,symbol:t6,transformer:Nh,tuple:f6,undefined:n6,union:d6,unknown:o6,void:a6,NEVER:P6,ZodIssueCode:ee,quotelessJson:By,ZodError:xn});const xt=y.object({message:y.string()});function we(t){return y.literal(un[t])}y.object({accessList:y.array(y.string()),blockHash:y.string().nullable(),blockNumber:y.string().nullable(),chainId:y.string(),from:y.string(),gas:y.string(),hash:y.string(),input:y.string().nullable(),maxFeePerGas:y.string(),maxPriorityFeePerGas:y.string(),nonce:y.string(),r:y.string(),s:y.string(),to:y.string(),transactionIndex:y.string().nullable(),type:y.string(),v:y.string(),value:y.string()});const O6=y.object({chainId:y.number()}),N6=y.object({email:y.string().email()}),B6=y.object({otp:y.string()}),M6=y.object({chainId:y.optional(y.number()),preferredAccountType:y.optional(y.string())}),D6=y.object({email:y.string().email()}),L6=y.object({otp:y.string()}),j6=y.object({otp:y.string()}),U6=y.object({themeMode:y.optional(y.enum(["light","dark"])),themeVariables:y.optional(y.record(y.string(),y.string().or(y.number())))}),W6=y.object({metadata:y.object({name:y.string(),description:y.string(),url:y.string(),icons:y.array(y.string())}).optional(),sdkVersion:y.string(),projectId:y.string()}),z6=y.object({type:y.string()}),F6=y.object({action:y.enum(["VERIFY_DEVICE","VERIFY_OTP"])}),H6=y.object({action:y.enum(["VERIFY_PRIMARY_OTP","VERIFY_SECONDARY_OTP"])}),V6=y.object({email:y.string().email(),address:y.string(),chainId:y.number(),smartAccountDeployed:y.optional(y.boolean()),preferredAccountType:y.optional(y.string())}),Z6=y.object({isConnected:y.boolean()}),G6=y.object({chainId:y.number()}),q6=y.object({chainId:y.number()}),Y6=y.object({newEmail:y.string().email()}),K6=y.object({smartAccountEnabledNetworks:y.array(y.number())});y.object({address:y.string(),isDeployed:y.boolean()});const J6=y.object({type:y.string(),address:y.string()}),X6=y.any(),Q6=y.object({method:y.literal("eth_accounts")}),e8=y.object({method:y.literal("eth_blockNumber")}),t8=y.object({method:y.literal("eth_call"),params:y.array(y.any())}),n8=y.object({method:y.literal("eth_chainId")}),i8=y.object({method:y.literal("eth_estimateGas"),params:y.array(y.any())}),r8=y.object({method:y.literal("eth_feeHistory"),params:y.array(y.any())}),o8=y.object({method:y.literal("eth_gasPrice")}),s8=y.object({method:y.literal("eth_getAccount"),params:y.array(y.any())}),a8=y.object({method:y.literal("eth_getBalance"),params:y.array(y.any())}),c8=y.object({method:y.literal("eth_getBlockByHash"),params:y.array(y.any())}),l8=y.object({method:y.literal("eth_getBlockByNumber"),params:y.array(y.any())}),u8=y.object({method:y.literal("eth_getBlockReceipts"),params:y.array(y.any())}),d8=y.object({method:y.literal("eth_getBlockTransactionCountByHash"),params:y.array(y.any())}),h8=y.object({method:y.literal("eth_getBlockTransactionCountByNumber"),params:y.array(y.any())}),p8=y.object({method:y.literal("eth_getCode"),params:y.array(y.any())}),f8=y.object({method:y.literal("eth_getFilterChanges"),params:y.array(y.any())}),g8=y.object({method:y.literal("eth_getFilterLogs"),params:y.array(y.any())}),m8=y.object({method:y.literal("eth_getLogs"),params:y.array(y.any())}),w8=y.object({method:y.literal("eth_getProof"),params:y.array(y.any())}),b8=y.object({method:y.literal("eth_getStorageAt"),params:y.array(y.any())}),v8=y.object({method:y.literal("eth_getTransactionByBlockHashAndIndex"),params:y.array(y.any())}),y8=y.object({method:y.literal("eth_getTransactionByBlockNumberAndIndex"),params:y.array(y.any())}),x8=y.object({method:y.literal("eth_getTransactionByHash"),params:y.array(y.any())}),C8=y.object({method:y.literal("eth_getTransactionCount"),params:y.array(y.any())}),_8=y.object({method:y.literal("eth_getTransactionReceipt"),params:y.array(y.any())}),E8=y.object({method:y.literal("eth_getUncleCountByBlockHash"),params:y.array(y.any())}),T8=y.object({method:y.literal("eth_getUncleCountByBlockNumber"),params:y.array(y.any())}),k8=y.object({method:y.literal("eth_maxPriorityFeePerGas")}),A8=y.object({method:y.literal("eth_newBlockFilter")}),$8=y.object({method:y.literal("eth_newFilter"),params:y.array(y.any())}),S8=y.object({method:y.literal("eth_newPendingTransactionFilter")}),I8=y.object({method:y.literal("eth_sendRawTransaction"),params:y.array(y.any())}),R8=y.object({method:y.literal("eth_syncing"),params:y.array(y.any())}),P8=y.object({method:y.literal("eth_uninstallFilter"),params:y.array(y.any())}),Bh=y.object({method:y.literal("personal_sign"),params:y.array(y.any())}),O8=y.object({method:y.literal("eth_signTypedData_v4"),params:y.array(y.any())}),Mh=y.object({method:y.literal("eth_sendTransaction"),params:y.array(y.any())}),Dh=y.object({token:y.string()});y.object({type:we("APP_SWITCH_NETWORK"),payload:O6}).or(y.object({type:we("APP_CONNECT_EMAIL"),payload:N6})).or(y.object({type:we("APP_CONNECT_DEVICE")})).or(y.object({type:we("APP_CONNECT_OTP"),payload:B6})).or(y.object({type:we("APP_GET_USER"),payload:y.optional(M6)})).or(y.object({type:we("APP_SIGN_OUT")})).or(y.object({type:we("APP_IS_CONNECTED"),payload:y.optional(Dh)})).or(y.object({type:we("APP_GET_CHAIN_ID")})).or(y.object({type:we("APP_GET_SMART_ACCOUNT_ENABLED_NETWORKS")})).or(y.object({type:we("APP_INIT_SMART_ACCOUNT")})).or(y.object({type:we("APP_SET_PREFERRED_ACCOUNT"),payload:z6})).or(y.object({type:we("APP_RPC_REQUEST"),payload:Bh.or(Mh).or(Q6).or(e8).or(t8).or(n8).or(i8).or(r8).or(o8).or(s8).or(a8).or(c8).or(l8).or(u8).or(d8).or(h8).or(p8).or(f8).or(g8).or(m8).or(w8).or(b8).or(v8).or(y8).or(x8).or(C8).or(_8).or(E8).or(T8).or(k8).or(A8).or($8).or(S8).or(I8).or(R8).or(P8).or(Bh).or(O8).or(Mh)})).or(y.object({type:we("APP_UPDATE_EMAIL"),payload:D6})).or(y.object({type:we("APP_UPDATE_EMAIL_PRIMARY_OTP"),payload:L6})).or(y.object({type:we("APP_UPDATE_EMAIL_SECONDARY_OTP"),payload:j6})).or(y.object({type:we("APP_SYNC_THEME"),payload:U6})).or(y.object({type:we("APP_SYNC_DAPP_DATA"),payload:W6})),y.object({type:we("FRAME_SWITCH_NETWORK_ERROR"),payload:xt}).or(y.object({type:we("FRAME_SWITCH_NETWORK_SUCCESS"),payload:q6})).or(y.object({type:we("FRAME_CONNECT_EMAIL_ERROR"),payload:xt})).or(y.object({type:we("FRAME_CONNECT_EMAIL_SUCCESS"),payload:F6})).or(y.object({type:we("FRAME_CONNECT_OTP_ERROR"),payload:xt})).or(y.object({type:we("FRAME_CONNECT_OTP_SUCCESS")})).or(y.object({type:we("FRAME_CONNECT_DEVICE_ERROR"),payload:xt})).or(y.object({type:we("FRAME_CONNECT_DEVICE_SUCCESS")})).or(y.object({type:we("FRAME_GET_USER_ERROR"),payload:xt})).or(y.object({type:we("FRAME_GET_USER_SUCCESS"),payload:V6})).or(y.object({type:we("FRAME_SIGN_OUT_ERROR"),payload:xt})).or(y.object({type:we("FRAME_SIGN_OUT_SUCCESS")})).or(y.object({type:we("FRAME_IS_CONNECTED_ERROR"),payload:xt})).or(y.object({type:we("FRAME_IS_CONNECTED_SUCCESS"),payload:Z6})).or(y.object({type:we("FRAME_GET_CHAIN_ID_ERROR"),payload:xt})).or(y.object({type:we("FRAME_GET_CHAIN_ID_SUCCESS"),payload:G6})).or(y.object({type:we("FRAME_RPC_REQUEST_ERROR"),payload:xt})).or(y.object({type:we("FRAME_RPC_REQUEST_SUCCESS"),payload:X6})).or(y.object({type:we("FRAME_SESSION_UPDATE"),payload:Dh})).or(y.object({type:we("FRAME_UPDATE_EMAIL_ERROR"),payload:xt})).or(y.object({type:we("FRAME_UPDATE_EMAIL_SUCCESS"),payload:H6})).or(y.object({type:we("FRAME_UPDATE_EMAIL_PRIMARY_OTP_ERROR"),payload:xt})).or(y.object({type:we("FRAME_UPDATE_EMAIL_PRIMARY_OTP_SUCCESS")})).or(y.object({type:we("FRAME_UPDATE_EMAIL_SECONDARY_OTP_ERROR"),payload:xt})).or(y.object({type:we("FRAME_UPDATE_EMAIL_SECONDARY_OTP_SUCCESS"),payload:Y6})).or(y.object({type:we("FRAME_SYNC_THEME_ERROR"),payload:xt})).or(y.object({type:we("FRAME_SYNC_THEME_SUCCESS")})).or(y.object({type:we("FRAME_SYNC_DAPP_DATA_ERROR"),payload:xt})).or(y.object({type:we("FRAME_SYNC_DAPP_DATA_SUCCESS")})).or(y.object({type:we("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_SUCCESS"),payload:K6})).or(y.object({type:we("FRAME_GET_SMART_ACCOUNT_ENABLED_NETWORKS_ERROR"),payload:xt})).or(y.object({type:we("FRAME_INIT_SMART_ACCOUNT_ERROR"),payload:xt})).or(y.object({type:we("FRAME_SET_PREFERRED_ACCOUNT_SUCCESS"),payload:J6})).or(y.object({type:we("FRAME_SET_PREFERRED_ACCOUNT_ERROR"),payload:xt}));const Lh={set(t,e){Wn.isClient&&localStorage.setItem(`${un.STORAGE_KEY}${t}`,e)},get(t){return Wn.isClient?localStorage.getItem(`${un.STORAGE_KEY}${t}`):null},delete(t){Wn.isClient&&localStorage.removeItem(`${un.STORAGE_KEY}${t}`)}},jh={address:/^0x(?:[A-Fa-f0-9]{40})$/u,transactionHash:/^0x(?:[A-Fa-f0-9]{64})$/u,signedMessage:/^0x(?:[A-Fa-f0-9]{130})$/u},N8=["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],ic=30*1e3,Wn={getBlockchainApiUrl(){try{const{timeZone:t}=new Intl.DateTimeFormat().resolvedOptions(),e=t.toUpperCase();return N8.includes(e)?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"}catch{return!1}},checkIfAllowedToTriggerEmail(){const t=Lh.get(un.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<ic){const n=Math.ceil((ic-e)/1e3);throw new Error(`Please try again after ${n} seconds`)}}},getTimeToNextEmailLogin(){const t=Lh.get(un.LAST_EMAIL_LOGIN_TIME);if(t){const e=Date.now()-Number(t);if(e<ic)return Math.ceil((ic-e)/1e3)}return 0},checkIfRequestExists(t){const e=this.getRequestMethod(t);return Gt.NOT_SAFE_RPC_METHODS.includes(e)||Gt.SAFE_RPC_METHODS.includes(e)},getRequestMethod(t){var e;return(e=t==null?void 0:t.payload)==null?void 0:e.method},getResponseType(t){const{type:e,payload:n}=t;return e===un.FRAME_RPC_REQUEST_ERROR?un.RPC_RESPONSE_TYPE_ERROR:typeof n=="string"&&(n.match(jh.transactionHash)||n.match(jh.signedMessage))?un.RPC_RESPONSE_TYPE_TX:un.RPC_RESPONSE_TYPE_OBJECT},checkIfRequestIsAllowed(t){const e=this.getRequestMethod(t);return Gt.SAFE_RPC_METHODS.includes(e)},isClient:typeof window<"u"};var sr=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Xn=class extends ce{constructor(){super(),this.usubscribe=[],this.networkImages=gt.state.networkImages,this.address=ne.state.address,this.profileImage=ne.state.profileImage,this.profileName=ne.state.profileName,this.network=de.state.caipNetwork,this.preferredAccountType=ne.state.preferredAccountType,this.disconnecting=!1,this.loading=!1,this.usubscribe.push(ne.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):Ie.close()}),de.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){var n,i;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const e=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return A`
      <wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${ve(this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100" data-testid="account-settings-address">
              ${this.profileName?be.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):be.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="m">
        <wui-flex flexDirection="column" gap="xs" .padding=${["0","xl","m","xl"]}>
          ${this.emailBtnTemplate()}
          <wui-list-item
            .variant=${e?"image":"icon"}
            iconVariant="overlay"
            icon="networkPlaceholder"
            imageSrc=${ve(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="paragraph-500" color="fg-100">
              ${((i=this.network)==null?void 0:i.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.togglePreferredAccountBtnTemplate()}
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=de.state,n=e?e.length>1:!1,i=e==null?void 0:e.find(({id:o})=>{var r;return o===((r=this.network)==null?void 0:r.id)});return n||!i}onCopyAddress(){try{this.address&&(re.copyToClopboard(this.address),Me.showSuccess("Address copied"))}catch{Me.showError("Failed to copy")}}emailBtnTemplate(){const e=ut.getConnectedConnector(),n=je.getEmailConnector();if(!n||e!=="EMAIL")return null;const i=n.provider.getEmail()??"";return A`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(i)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${i}</wui-text>
      </wui-list-item>
    `}togglePreferredAccountBtnTemplate(){const e=de.checkIfSmartAccountEnabled(),n=ut.getConnectedConnector();if(!je.getEmailConnector()||n!=="EMAIL"||!e)return null;const o=this.preferredAccountType===Gt.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your smart account";return A`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="swapHorizontalBold"
        iconSize="sm"
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="paragraph-500" color="fg-100">${o}</wui-text>
      </wui-list-item>
    `}async changePreferredAccountType(){const e=de.checkIfSmartAccountEnabled(),n=this.preferredAccountType===Gt.ACCOUNT_TYPES.SMART_ACCOUNT||!e?Gt.ACCOUNT_TYPES.EOA:Gt.ACCOUNT_TYPES.SMART_ACCOUNT,i=je.getEmailConnector();i&&(this.loading=!0,await(i==null?void 0:i.provider.setPreferredAccount(n)),this.loading=!1,this.requestUpdate())}onGoToUpdateEmail(e){G.push("UpdateEmailWallet",{email:e})}onNetworks(){this.isAllowedNetworkSwitch()&&G.push("Networks")}async onDisconnect(){try{this.disconnecting=!0,await $e.disconnect(),me.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{me.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Me.showError("Failed to disconnect")}finally{this.disconnecting=!1}}};Xn.styles=ky;sr([j()],Xn.prototype,"address",void 0);sr([j()],Xn.prototype,"profileImage",void 0);sr([j()],Xn.prototype,"profileName",void 0);sr([j()],Xn.prototype,"network",void 0);sr([j()],Xn.prototype,"preferredAccountType",void 0);sr([j()],Xn.prototype,"disconnecting",void 0);sr([j()],Xn.prototype,"loading",void 0);Xn=sr([V("w3m-account-settings-view")],Xn);var B8=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Uh=class extends ce{render(){const e=ut.getConnectedConnector();return A`
      ${pe.state.enableWalletFeatures&&e==="EMAIL"?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return A`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return A`<w3m-account-default-widget></w3m-account-default-widget>`}};Uh=B8([V("w3m-account-view")],Uh);var O1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Qu=class extends ce{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=re.debounce(e=>{this.search=e})}render(){const e=this.search.length>=2;return A`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?A`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:A`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return re.isMobile()?A`
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){G.push("ConnectingWalletConnect")}};O1([j()],Qu.prototype,"search",void 0);Qu=O1([V("w3m-all-wallets-view")],Qu);const M8=_e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    width: var(--wui-wallet-image-size-lg);
    height: var(--wui-wallet-image-size-lg);
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(var(--wui-border-radius-5xs) * 9 - var(--wui-border-radius-xxs));
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity var(--wui-ease-out-power-2) var(--wui-duration-lg),
      transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
  }
`;var Bn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Xt=class extends ce{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=We.state.selectedProvider,this.uri=$e.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.startTime=null,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(We.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e})),this.watchTransactions()}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var i,o;let e="Continue in external window";this.error?e="Buy failed":this.selectedOnRampProvider&&(e=`Buy in ${(i=this.selectedOnRampProvider)==null?void 0:i.label}`);const n=this.error?"Buy can be declined from your side or due to and error on the provider app":"We’ll notify you once your Buy is processed";return A`
      <wui-flex
        data-error=${ve(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${ve((o=this.selectedOnRampProvider)==null?void 0:o.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${e}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}watchTransactions(){if(this.selectedOnRampProvider)switch(this.selectedOnRampProvider.name){case"coinbase":this.startTime=Date.now(),this.initializeCoinbaseTransactions();break}}async initializeCoinbaseTransactions(){await this.watchCoinbaseTransactions(),this.intervalId=setInterval(()=>this.watchCoinbaseTransactions(),4e3)}async watchCoinbaseTransactions(){try{const e=ne.state.address,n=pe.state.projectId;if(!e)throw new Error("No address found");(await Nt.fetchTransactions({account:e,onramp:"coinbase",projectId:n})).data.filter(r=>new Date(r.metadata.minedAt)>new Date(this.startTime)||r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length?(clearInterval(this.intervalId),G.replace("OnRampActivity")):this.startTime&&Date.now()-this.startTime>=18e4&&(clearInterval(this.intervalId),this.error=!0)}catch(e){Me.showError(e)}}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,re.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return(e=this.selectedOnRampProvider)!=null&&e.url?A`<wui-button variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=ht.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return A`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){var e;if(!((e=this.selectedOnRampProvider)!=null&&e.url)){Me.showError("No link found"),G.goBack();return}try{re.copyToClopboard(this.selectedOnRampProvider.url),Me.showSuccess("Link copied")}catch{Me.showError("Failed to copy")}}};Xt.styles=M8;Bn([j()],Xt.prototype,"selectedOnRampProvider",void 0);Bn([j()],Xt.prototype,"uri",void 0);Bn([j()],Xt.prototype,"ready",void 0);Bn([j()],Xt.prototype,"showRetry",void 0);Bn([j()],Xt.prototype,"buffering",void 0);Bn([j()],Xt.prototype,"error",void 0);Bn([j()],Xt.prototype,"intervalId",void 0);Bn([j()],Xt.prototype,"startTime",void 0);Bn([ge({type:Boolean})],Xt.prototype,"isMobile",void 0);Bn([ge()],Xt.prototype,"onRetry",void 0);Xt=Bn([V("w3m-buy-in-progress-view")],Xt);const D8=_e`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,Ee={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",COINBASE_SDK_CONNECTOR_ID:"coinbaseWalletSDK",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EMAIL_CONNECTOR_ID:"w3mEmail",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet"},VERSION:"4.1.11"},Ii={ConnectorExplorerIds:{[Ee.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Ee.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Ee.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700"},ConnectorImageIds:{[Ee.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Ee.COINBASE_SDK_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Ee.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[Ee.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[Ee.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Ee.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[Ee.INJECTED_CONNECTOR_ID]:"Browser Wallet",[Ee.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[Ee.COINBASE_CONNECTOR_ID]:"Coinbase",[Ee.COINBASE_SDK_CONNECTOR_ID]:"Coinbase",[Ee.LEDGER_CONNECTOR_ID]:"Ledger",[Ee.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[Ee.INJECTED_CONNECTOR_ID]:"INJECTED",[Ee.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[Ee.EIP6963_CONNECTOR_ID]:"ANNOUNCED",[Ee.EMAIL_CONNECTOR_ID]:"EMAIL"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},L8={getCaipTokens(t){if(!t)return;const e={};return Object.entries(t).forEach(([n,i])=>{e[`${Ee.EIP155}:${n}`]=i}),e}};var g0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ba=class extends ce{constructor(){super(),this.unsubscribe=[],this.connectors=je.state.connectors,this.count=xe.state.count,this.unsubscribe.push(je.subscribeKey("connectors",e=>this.connectors=e),xe.subscribeKey("count",e=>this.count=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.externalTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(re.isMobile())return null;const e=this.connectors.find(n=>n.type==="WALLET_CONNECT");return e?A`
      <wui-list-wallet
        imageSrc=${ve(ze.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
        data-testid="wallet-selector-walletconnect"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:e}=pe.state;return e!=null&&e.length?this.filterOutDuplicateWallets(e).map(i=>A`
        <wui-list-wallet
          imageSrc=${ve(ze.getWalletImage(i))}
          name=${i.name??"Unknown"}
          @click=${()=>this.onConnectWallet(i)}
          data-testid=${`wallet-selector-${i.id}`}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){if(!this.connectors.find(o=>o.type==="WALLET_CONNECT"))return null;const{featured:n}=xe.state;return n.length?this.filterOutDuplicateWallets(n).map(o=>A`
        <wui-list-wallet
          imageSrc=${ve(ze.getWalletImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onConnectWallet(o)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return ut.getRecentWallets().map(n=>A`
        <wui-list-wallet
          imageSrc=${ve(ze.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>e.type!=="ANNOUNCED"?null:A`
        <wui-list-wallet
          imageSrc=${ve(ze.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagVariant="success"
          .installed=${!0}
        >
        </wui-list-wallet>
      `)}injectedTemplate(){return this.connectors.map(e=>e.type!=="INJECTED"||!$e.checkInstalled()?null:A`
        <wui-list-wallet
          imageSrc=${ve(ze.getConnectorImage(e))}
          .installed=${!0}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}externalTemplate(){const e=je.getAnnouncedConnectorRdns();return this.connectors.map(n=>["WALLET_CONNECT","INJECTED","ANNOUNCED","EMAIL"].includes(n.type)||e.includes(Ee.CONNECTOR_RDNS_MAP[n.id])?null:A`
        <wui-list-wallet
          imageSrc=${ve(ze.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const e=this.connectors.find(a=>a.type==="WALLET_CONNECT"),{allWallets:n}=pe.state;if(!e||n==="HIDE"||n==="ONLY_MOBILE"&&!re.isMobile())return null;const i=xe.state.featured.length,o=this.count+i,r=o<10?o:Math.floor(o/10)*10,s=r<o?`${r}+`:`${r}`;return A`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="shade"
        data-testid="all-wallets"
      ></wui-list-wallet>
    `}recommendedTemplate(){if(!this.connectors.find(f=>f.type==="WALLET_CONNECT"))return null;const{recommended:n}=xe.state,{customWallets:i,featuredWalletIds:o}=pe.state,{connectors:r}=je.state,s=ut.getRecentWallets(),c=r.filter(f=>f.type==="INJECTED").filter(f=>f.name!=="Browser Wallet");if(o||i||!n.length)return null;const l=c.length+s.length,d=Math.max(0,2-l);return this.filterOutDuplicateWallets(n).slice(0,d).map(f=>A`
        <wui-list-wallet
          imageSrc=${ve(ze.getWalletImage(f))}
          name=${(f==null?void 0:f.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(f)}
        >
        </wui-list-wallet>
      `)}onConnector(e){e.type==="WALLET_CONNECT"?re.isMobile()?G.push("AllWallets"):G.push("ConnectingWalletConnect"):G.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){const n=ut.getRecentWallets(),i=this.connectors.map(a=>{var c;return(c=a.info)==null?void 0:c.rdns}).filter(Boolean),o=n.map(a=>a.rdns).filter(Boolean),r=i.concat(o);return e.filter(a=>!r.includes(String(a==null?void 0:a.rdns)))}onAllWallets(){me.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),G.push("AllWallets")}onConnectWallet(e){G.push("ConnectingWalletConnect",{wallet:e})}};ba.styles=D8;g0([j()],ba.prototype,"connectors",void 0);g0([j()],ba.prototype,"count",void 0);ba=g0([V("w3m-connect-view")],ba);const j8=_e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-2);
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var ro=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};class Zt extends ce{constructor(){var e,n,i,o;super(),this.wallet=(e=G.state.data)==null?void 0:e.wallet,this.connector=(n=G.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=ze.getWalletImage(this.wallet)??ze.getConnectorImage(this.connector),this.name=((i=this.wallet)==null?void 0:i.name)??((o=this.connector)==null?void 0:o.name)??"Wallet",this.isRetrying=!1,this.uri=$e.state.wcUri,this.error=$e.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push($e.subscribeKey("wcUri",r=>{var s;this.uri=r,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),$e.subscribeKey("wcError",r=>this.error=r),$e.subscribeKey("buffering",r=>this.buffering=r))}firstUpdated(){var e;(e=this.onAutoConnect)==null||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){var i;(i=this.onRender)==null||i.call(this),this.onShowRetry();const e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),A`
      <wui-flex
        data-error=${ve(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${ve(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?A`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,n;this.buffering||($e.setWcError(!1),this.onRetry?(this.isRetrying=!0,(e=this.onRetry)==null||e.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const e=ht.state.themeVariables["--w3m-border-radius-master"],n=e?parseInt(e.replace("px",""),10):4;return A`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(re.copyToClopboard(this.uri),Me.showSuccess("Link copied"))}catch{Me.showError("Failed to copy")}}}Zt.styles=j8;ro([j()],Zt.prototype,"uri",void 0);ro([j()],Zt.prototype,"error",void 0);ro([j()],Zt.prototype,"ready",void 0);ro([j()],Zt.prototype,"showRetry",void 0);ro([j()],Zt.prototype,"buffering",void 0);ro([ge({type:Boolean})],Zt.prototype,"isMobile",void 0);ro([ge()],Zt.prototype,"onRetry",void 0);var U8=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Wh=class extends Zt{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&ut.setConnectedWalletImageUrl(this.connector.imageUrl),await $e.connectExternal(this.connector),pe.state.isSiweEnabled?G.push("ConnectingSiwe"):Ie.close(),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:this.connector.name||"Unknown"}}))}catch(e){me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(e==null?void 0:e.message)??"Unknown"}}),this.error=!0}}};Wh=U8([V("w3m-connecting-external-view")],Wh);var m0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let zc=class extends ce{constructor(){var e;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(e=G.state.data)==null?void 0:e.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),lt.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),A`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):A`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{const{wcPairingExpiry:n}=$e.state;if(e||re.isPairingExpired(n)){if($e.connectWalletConnect(),this.wallet){const i=ze.getWalletImage(this.wallet);i&&ut.setConnectedWalletImageUrl(i)}else{const o=je.state.connectors.find(s=>s.type==="WALLET_CONNECT"),r=ze.getConnectorImage(o);r&&ut.setConnectedWalletImageUrl(r)}await $e.state.wcPromise,this.finalizeConnection(),pe.state.isSiweEnabled?G.push("ConnectingSiwe"):Ie.close()}}catch(n){me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),$e.setWcError(!0),re.isAllowedRetry(this.lastRetry)&&(Me.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){var i;const{wcLinking:e,recentWallet:n}=$e.state;e&&ut.setWalletConnectDeepLink(e),n&&ut.setWeb3ModalRecent(n),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode",name:((i=this.wallet)==null?void 0:i.name)||"Unknown"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:e,desktop_link:n,webapp_link:i,injected:o,rdns:r}=this.wallet,s=o==null?void 0:o.map(({injected_id:_})=>_).filter(Boolean),a=r?[r]:s??[],c=a.length,l=e,d=i,p=$e.checkInstalled(a),f=c&&p,b=n&&!re.isMobile();f&&this.platforms.push("browser"),l&&this.platforms.push(re.isMobile()?"mobile":"qrcode"),d&&this.platforms.push("web"),b&&this.platforms.push("desktop"),!f&&c&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return A`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return A`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return A`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return A`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return A`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return A`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?A`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var i;const n=(i=this.shadowRoot)==null?void 0:i.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};m0([j()],zc.prototype,"platform",void 0);m0([j()],zc.prototype,"platforms",void 0);zc=m0([V("w3m-connecting-wc-view")],zc);var W8=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let zh=class extends ce{constructor(){var e;super(...arguments),this.wallet=(e=G.state.data)==null?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return A`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return(e=this.wallet)!=null&&e.chrome_store?A`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return(e=this.wallet)!=null&&e.app_store?A`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return(e=this.wallet)!=null&&e.play_store?A`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return(e=this.wallet)!=null&&e.homepage?A`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var e;(e=this.wallet)!=null&&e.chrome_store&&re.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&re.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&re.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&re.openHref(this.wallet.homepage,"_blank")}};zh=W8([V("w3m-downloads-view")],zh);var z8=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const F8="https://walletconnect.com/explorer";let Fh=class extends ce{render(){return A`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{re.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:e,featured:n}=xe.state,{customWallets:i}=pe.state;return[...n,...i??[],...e].slice(0,4).map(r=>A`
        <wui-list-wallet
          name=${r.name??"Unknown"}
          tagVariant="main"
          imageSrc=${ve(ze.getWalletImage(r))}
          @click=${()=>{re.openHref(r.homepage??F8,"_blank")}}
        ></wui-list-wallet>
      `)}};Fh=z8([V("w3m-get-wallet-view")],Fh);const H8=_e`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var w0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let va=class extends ce{constructor(){var e;super(),this.network=(e=G.state.data)==null?void 0:e.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const e=this.getLabel(),n=this.getSubLabel();return A`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${ve(ze.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:A`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const e=ut.getConnectedConnector();return je.getEmailConnector()&&e==="EMAIL"?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var i;const e=ut.getConnectedConnector();return je.getEmailConnector()&&e==="EMAIL"?`Switching to ${((i=this.network)==null?void 0:i.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var e;if(this.error&&!this.showRetry){this.showRetry=!0;const n=(e=this.shadowRoot)==null?void 0:e.querySelector("wui-button");n==null||n.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await de.switchActiveNetwork(this.network),pe.state.isSiweEnabled||Dd.navigateAfterNetworkSwitch())}catch{this.error=!0}}};va.styles=H8;w0([j()],va.prototype,"showRetry",void 0);w0([j()],va.prototype,"error",void 0);va=w0([V("w3m-network-switch-view")],va);const V8=_e`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var N1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Fc=class extends ce{constructor(){super(),this.unsubscribe=[],this.caipNetwork=de.state.caipNetwork,this.unsubscribe.push(de.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-400" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){me.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),G.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,supportsAllNetworks:i}=de.state,o=re.sortRequestedNetworks(e,n);return o==null?void 0:o.map(r=>{var s;return A`
        <wui-card-select
          .selected=${((s=this.caipNetwork)==null?void 0:s.id)===r.id}
          imageSrc=${ve(ze.getNetworkImage(r))}
          type="network"
          name=${r.name??r.id}
          @click=${()=>this.onSwitchNetwork(r)}
          .disabled=${!i&&!(e!=null&&e.includes(r.id))}
          data-testid=${`w3m-network-switch-${r.name??r.id}`}
        ></wui-card-select>
      `})}async onSwitchNetwork(e){const{isConnected:n}=ne.state,{approvedCaipNetworkIds:i,supportsAllNetworks:o,caipNetwork:r}=de.state,{data:s}=G.state;n&&(r==null?void 0:r.id)!==e.id?i!=null&&i.includes(e.id)?(await de.switchActiveNetwork(e),Dd.navigateAfterNetworkSwitch()):o&&G.push("SwitchNetwork",{...s,network:e}):n||(de.setCaipNetwork(e),G.push("Connect"))}};Fc.styles=V8;N1([j()],Fc.prototype,"caipNetwork",void 0);Fc=N1([V("w3m-networks-view")],Fc);const Z8=_e`
  :host > wui-flex {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  :host > wui-flex > wui-flex {
    width: 100%;
  }

  wui-transaction-list-item-loader {
    width: 100%;
  }
`;var Ua=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const G8=7;let Vr=class extends ce{constructor(){super(),this.unsubscribe=[],this.refetchTimeout=void 0,this.selectedOnRampProvider=We.state.selectedProvider,this.loading=!1,this.coinbaseTransactions=Tt.state.coinbaseTransactions,this.tokenImages=gt.state.tokenImages,this.unsubscribe.push(We.subscribeKey("selectedProvider",e=>{this.selectedOnRampProvider=e}),gt.subscribeKey("tokenImages",e=>this.tokenImages=e),()=>{clearTimeout(this.refetchTimeout)},Tt.subscribe(e=>{this.coinbaseTransactions={...e.coinbaseTransactions}})),Tt.clearCursor(),this.fetchTransactions()}render(){return A`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.loading?this.templateLoading():this.templateTransactionsByYear()}
      </wui-flex>
    `}templateTransactions(e){return e==null?void 0:e.map(n=>{var a,c,l;const i=Md.formatDate((a=n==null?void 0:n.metadata)==null?void 0:a.minedAt),o=n.transfers[0],r=o==null?void 0:o.fungible_info;if(!r)return null;const s=((c=r==null?void 0:r.icon)==null?void 0:c.url)||((l=this.tokenImages)==null?void 0:l[r.symbol||""]);return A`
        <wui-onramp-activity-item
          label="Bought"
          .completed=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_SUCCESS"}
          .inProgress=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS"}
          .failed=${n.metadata.status==="ONRAMP_TRANSACTION_STATUS_FAILED"}
          purchaseCurrency=${ve(r.symbol)}
          purchaseValue=${o.quantity.numeric}
          date=${i}
          icon=${ve(s)}
          symbol=${ve(r.symbol)}
        ></wui-onramp-activity-item>
      `})}templateTransactionsByYear(){return Object.keys(this.coinbaseTransactions).sort().reverse().map(n=>{const i=parseInt(n,10);return new Array(12).fill(null).map((r,s)=>s).reverse().map(r=>{var c;const s=Bi.getTransactionGroupTitle(i,r),a=(c=this.coinbaseTransactions[i])==null?void 0:c[r];return a?A`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${s}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(a)}
            </wui-flex>
          </wui-flex>
        `:null})})}async fetchTransactions(){await this.fetchCoinbaseTransactions()}async fetchCoinbaseTransactions(){const e=ne.state.address,n=pe.state.projectId;if(!e)throw new Error("No address found");if(!n)throw new Error("No projectId found");this.loading=!0,await Tt.fetchTransactions(e,"coinbase"),this.loading=!1,this.refetchLoadingTransactions()}refetchLoadingTransactions(){var o;const e=new Date;if((((o=this.coinbaseTransactions[e.getFullYear()])==null?void 0:o[e.getMonth()])||[]).filter(r=>r.metadata.status==="ONRAMP_TRANSACTION_STATUS_IN_PROGRESS").length===0){clearTimeout(this.refetchTimeout);return}this.refetchTimeout=setTimeout(async()=>{const r=ne.state.address;await Tt.fetchTransactions(r,"coinbase"),this.refetchLoadingTransactions()},3e3)}templateLoading(){return Array(G8).fill(A` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e)}};Vr.styles=Z8;Ua([j()],Vr.prototype,"selectedOnRampProvider",void 0);Ua([j()],Vr.prototype,"loading",void 0);Ua([j()],Vr.prototype,"coinbaseTransactions",void 0);Ua([j()],Vr.prototype,"tokenImages",void 0);Vr=Ua([V("w3m-onramp-activity-view")],Vr);const q8=_e`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Ol=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Zo=class extends ce{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=We.state.paymentCurrency,this.currencies=We.state.paymentCurrencies,this.currencyImages=gt.state.currencyImages,this.unsubscribe.push(We.subscribe(e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies}),gt.subscribeKey("currencyImages",e=>this.currencyImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.currencies.map(e=>{var n;return A`
        <wui-list-item
          imageSrc=${ve((n=this.currencyImages)==null?void 0:n[e.id])}
          @click=${()=>this.selectCurrency(e)}
          variant="image"
        >
          <wui-text variant="paragraph-500" color="fg-100">${e.id}</wui-text>
        </wui-list-item>
      `})}selectCurrency(e){e&&(We.setPaymentCurrency(e),Ie.close())}};Zo.styles=q8;Ol([j()],Zo.prototype,"selectedCurrency",void 0);Ol([j()],Zo.prototype,"currencies",void 0);Ol([j()],Zo.prototype,"currencyImages",void 0);Zo=Ol([V("w3m-onramp-fiat-select-view")],Zo);var B1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ed=class extends ce{constructor(){super(),this.unsubscribe=[],this.providers=We.state.providers,this.unsubscribe.push(We.subscribeKey("providers",e=>{this.providers=e}))}firstUpdated(){const e=this.providers.map(async n=>n.name==="coinbase"?await this.getCoinbaseOnRampURL():Promise.resolve(n==null?void 0:n.url));Promise.all(e).then(n=>{this.providers=this.providers.map((i,o)=>({...i,url:n[o]||""}))})}render(){return A`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
      <w3m-onramp-providers-footer></w3m-onramp-providers-footer>
    `}onRampProvidersTemplate(){return this.providers.map(e=>A`
        <wui-onramp-provider-item
          label=${e.label}
          name=${e.name}
          feeRange=${e.feeRange}
          @click=${()=>{this.onClickProvider(e)}}
          ?disabled=${!e.url}
        ></wui-onramp-provider-item>
      `)}onClickProvider(e){We.setSelectedProvider(e),G.push("BuyInProgress"),re.openHref(e.url,"popupWindow","width=600,height=800,scrollbars=yes")}async getCoinbaseOnRampURL(){const e=ne.state.address,n=de.state.caipNetwork;if(!e)throw new Error("No address found");if(!(n!=null&&n.name))throw new Error("No network found");const i=lt.WC_COINBASE_PAY_SDK_CHAIN_NAME_MAP[n.name]??lt.WC_COINBASE_PAY_SDK_FALLBACK_CHAIN,o=We.state.purchaseCurrency,r=o?[o.symbol]:We.state.purchaseCurrencies.map(s=>s.symbol);return await Nt.generateOnRampURL({defaultNetwork:i,destinationWallets:[{address:e,blockchains:lt.WC_COINBASE_PAY_SDK_CHAINS,assets:r}],partnerUserId:e,purchaseAmount:We.state.purchaseAmount})}};B1([j()],ed.prototype,"providers",void 0);ed=B1([V("w3m-onramp-providers-view")],ed);const Y8=_e`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }
`;var Nl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Go=class extends ce{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=We.state.purchaseCurrencies,this.tokens=We.state.purchaseCurrencies,this.tokenImages=gt.state.tokenImages,this.unsubscribe.push(We.subscribe(e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies}),gt.subscribeKey("tokenImages",e=>this.tokenImages=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.currenciesTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}currenciesTemplate(){return this.tokens.map(e=>{var n;return A`
        <wui-list-item
          imageSrc=${ve((n=this.tokenImages)==null?void 0:n[e.symbol])}
          @click=${()=>this.selectToken(e)}
          variant="image"
        >
          <wui-flex gap="3xs" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-100">${e.name}</wui-text>
            <wui-text variant="small-400" color="fg-200">${e.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `})}selectToken(e){e&&(We.setPurchaseCurrency(e),Ie.close())}};Go.styles=Y8;Nl([j()],Go.prototype,"selectedCurrency",void 0);Nl([j()],Go.prototype,"tokens",void 0);Nl([j()],Go.prototype,"tokenImages",void 0);Go=Nl([V("w3m-onramp-token-select-view")],Go);const K8=_e`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
  }

  .action-button:disabled {
    border-color: 1px solid var(--wui-gray-glass-005);
  }

  .convert-inputs-container {
    position: relative;
  }

  .replace-tokens-button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: var(--wui-spacing-1xs);
    height: 40px;
    width: 40px;
    padding: var(--wui-spacing-xs);
    border: none;
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-005);
    transition: background-color var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: background-color;
    z-index: 20;
  }

  .replace-tokens-button:hover {
    background: var(--wui-gray-glass-010);
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var wt=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let dt=class extends ce{constructor(){var e;super(),this.unsubscribe=[],this.detailsOpen=!1,this.caipNetworkId=(e=de.state.caipNetwork)==null?void 0:e.id,this.initialized=he.state.initialized,this.loading=he.state.loading,this.loadingPrices=he.state.loadingPrices,this.sourceToken=he.state.sourceToken,this.sourceTokenAmount=he.state.sourceTokenAmount,this.sourceTokenPriceInUSD=he.state.sourceTokenPriceInUSD,this.toToken=he.state.toToken,this.toTokenAmount=he.state.toTokenAmount,this.toTokenPriceInUSD=he.state.toTokenPriceInUSD,this.inputError=he.state.inputError,this.gasPriceInUSD=he.state.gasPriceInUSD,this.priceImpact=he.state.priceImpact,this.maxSlippage=he.state.maxSlippage,this.transactionLoading=he.state.transactionLoading,this.onDebouncedGetSwapCalldata=re.debounce(async()=>{await he.convertTokens()},500),de.subscribeKey("caipNetwork",n=>{this.caipNetworkId!==(n==null?void 0:n.id)&&(this.caipNetworkId=n==null?void 0:n.id,he.resetTokens(),he.resetValues(),he.initializeState())}),this.unsubscribe.push(Ie.subscribeKey("open",n=>{n||he.resetValues()}),G.subscribeKey("view",n=>{n.includes("Convert")||he.resetValues()}),he.subscribe(n=>{this.initialized=n.initialized,this.loading=n.loading,this.loadingPrices=n.loadingPrices,this.transactionLoading=n.transactionLoading,this.sourceToken=n.sourceToken,this.sourceTokenAmount=n.sourceTokenAmount,this.sourceTokenPriceInUSD=n.sourceTokenPriceInUSD,this.toToken=n.toToken,this.toTokenAmount=n.toTokenAmount,this.toTokenPriceInUSD=n.toTokenPriceInUSD,this.inputError=n.inputError,this.gasPriceInUSD=n.gasPriceInUSD,this.priceImpact=n.priceImpact,this.maxSlippage=n.maxSlippage})),this.watchTokensAndValues()}firstUpdated(){this.initialized||he.initializeState()}disconnectedCallback(){he.setLoading(!1),this.unsubscribe.forEach(e=>e==null?void 0:e()),clearInterval(this.interval)}render(){return A`
      <wui-flex flexDirection="column" padding="l" gap="s">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}watchTokensAndValues(){this.interval=setInterval(()=>{he.getNetworkTokenPrice(),he.getMyTokensWithBalance(),he.refreshConvertValues()},2e4)}templateSwap(){return A`
      <wui-flex flexDirection="column" gap="l">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="xs"
          class="convert-inputs-container"
        >
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){return this.inputError?this.inputError:"Review convert"}templateReplaceTokensButton(){return A`
      <button class="replace-tokens-button" @click=${this.onSwitchTokens.bind(this)}>
        <wui-icon name="recycleHorizontal" color="fg-250" size="lg"></wui-icon>
      </button>
    `}templateLoading(){return A`<wui-flex
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="swapHorizontalRoundedBold"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>

      <wui-loading-hexagon></wui-loading-hexagon>
    </wui-flex>`}templateTokenInput(e,n){var a,c;const i=(a=he.state.myTokensWithBalance)==null?void 0:a.find(l=>(l==null?void 0:l.address)===(n==null?void 0:n.address)),o=e==="toToken"?this.toTokenAmount:this.sourceTokenAmount,r=e==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;let s=parseFloat(o)*r;return e==="toToken"&&(s-=this.gasPriceInUSD||0),A`<w3m-convert-input
      .value=${e==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      ?disabled=${this.loading&&e==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${e}
      .token=${n}
      .balance=${(c=i==null?void 0:i.quantity)==null?void 0:c.numeric}
      .price=${this.sourceTokenPriceInUSD}
      .marketValue=${isNaN(s)?"":be.formatNumberToLocalString(s)}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-convert-input>`}onSetMaxValue(e,n){const i=e==="sourceToken"?this.sourceToken:this.toToken,o=(i==null?void 0:i.address)===lt.NATIVE_TOKEN_ADDRESS;let r="0";if(!n){r="0",this.handleChangeAmount(e,r);return}if(!this.gasPriceInUSD){r=n,this.handleChangeAmount(e,r);return}const s=Ct.bigNumber(this.gasPriceInUSD.toFixed(5)).dividedBy(this.sourceTokenPriceInUSD),a=o?Ct.bigNumber(n).minus(s):Ct.bigNumber(n);this.handleChangeAmount(e,a.isGreaterThan(0)?a.toFixed(20):"0")}templateDetails(){var n,i;if(this.loading||this.inputError||!this.sourceToken||!this.toToken||!this.sourceTokenAmount||!this.toTokenAmount)return null;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return A`
      <w3m-convert-details
        .detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(n=this.sourceToken)==null?void 0:n.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(i=this.toToken)==null?void 0:i.symbol}
        toTokenConvertedAmount=${e}
        gasPriceInUSD=${this.gasPriceInUSD}
        .priceImpact=${this.priceImpact}
        slippageRate=${lt.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
      ></w3m-convert-details>
    `}handleChangeAmount(e,n){he.clearError(),e==="sourceToken"?he.setSourceTokenAmount(n):he.setToTokenAmount(n),this.onDebouncedGetSwapCalldata()}templateActionButton(){const e=!this.toToken||!this.sourceToken,n=this.loading||this.loadingPrices||this.transactionLoading;return A` <wui-flex gap="xs">
      <wui-button
        class="action-button"
        ?fullWidth=${!0}
        size="lg"
        borderRadius="xs"
        variant=${e?"shade":"fill"}
        .loading=${n}
        .disabled=${n||e||this.inputError}
        @click=${this.onConvertPreview}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}onSwitchTokens(){he.switchTokens()}onConvertPreview(){G.push("ConvertPreview")}};dt.styles=K8;wt([j()],dt.prototype,"interval",void 0);wt([j()],dt.prototype,"detailsOpen",void 0);wt([j()],dt.prototype,"caipNetworkId",void 0);wt([j()],dt.prototype,"initialized",void 0);wt([j()],dt.prototype,"loading",void 0);wt([j()],dt.prototype,"loadingPrices",void 0);wt([j()],dt.prototype,"sourceToken",void 0);wt([j()],dt.prototype,"sourceTokenAmount",void 0);wt([j()],dt.prototype,"sourceTokenPriceInUSD",void 0);wt([j()],dt.prototype,"toToken",void 0);wt([j()],dt.prototype,"toTokenAmount",void 0);wt([j()],dt.prototype,"toTokenPriceInUSD",void 0);wt([j()],dt.prototype,"inputError",void 0);wt([j()],dt.prototype,"gasPriceInUSD",void 0);wt([j()],dt.prototype,"priceImpact",void 0);wt([j()],dt.prototype,"maxSlippage",void 0);wt([j()],dt.prototype,"transactionLoading",void 0);dt=wt([V("w3m-convert-view")],dt);const J8=_e`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-item:hover {
    background: var(--wui-gray-glass-005);
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .action-buttons-container {
    width: 100%;
    gap: var(--wui-spacing-xs);
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: var(--wui-border-radius-xs);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .cancel-button:hover,
  .convert-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > button.convert-button {
    flex: 4;
    background-color: var(--wui-color-accent-090);
  }

  .action-buttons-container > button.convert-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    transition: background 0.2s linear;
  }

  .details-container > wui-flex > button:hover {
    background: var(--wui-gray-glass-002);
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s) var(--wui-spacing-xl);
    border-radius: var(--wui-border-radius-xxs);
    background: var(--wui-gray-glass-002);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var It=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let mt=class extends ce{constructor(){super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=he.state.approvalTransaction,this.convertTransaction=he.state.convertTransaction,this.sourceToken=he.state.sourceToken,this.sourceTokenAmount=he.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=he.state.sourceTokenPriceInUSD,this.toToken=he.state.toToken,this.toTokenAmount=he.state.toTokenAmount??"",this.toTokenPriceInUSD=he.state.toTokenPriceInUSD,this.caipNetwork=de.state.caipNetwork,this.transactionLoading=he.state.transactionLoading,this.balanceSymbol=ne.state.balanceSymbol,this.gasPriceInUSD=he.state.gasPriceInUSD,this.priceImpact=he.state.priceImpact,this.maxSlippage=he.state.maxSlippage,this.unsubscribe.push(ne.subscribeKey("balanceSymbol",e=>{this.balanceSymbol!==e&&G.goBack()}),de.subscribeKey("caipNetwork",e=>{this.caipNetwork!==e&&(this.caipNetwork=e)}),he.subscribe(e=>{this.approvalTransaction=e.approvalTransaction,this.convertTransaction=e.convertTransaction,this.sourceToken=e.sourceToken,this.gasPriceInUSD=e.gasPriceInUSD,this.toToken=e.toToken,this.transactionLoading=e.transactionLoading,this.gasPriceInUSD=e.gasPriceInUSD,this.toTokenPriceInUSD=e.toTokenPriceInUSD,this.sourceTokenAmount=e.sourceTokenAmount??"",this.toTokenAmount=e.toTokenAmount??"",this.priceImpact=e.priceImpact,this.maxSlippage=e.maxSlippage}))}render(){return A`
      <wui-flex flexDirection="column" padding="l" gap="s">${this.templateSwap()}</wui-flex>
    `}templateSwap(){var a,c,l,d;const e=`${be.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(a=this.sourceToken)==null?void 0:a.symbol}`,n=`${be.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(c=this.toToken)==null?void 0:c.symbol}`,i=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,o=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD-(this.gasPriceInUSD||0),r=be.formatNumberToLocalString(i),s=be.formatNumberToLocalString(o);return A`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="l">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Send</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${r}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${e}
              imageSrc=${(l=this.sourceToken)==null?void 0:l.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="fg-200" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="l"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="4xs">
              <wui-text variant="small-400" color="fg-150">Receive</wui-text>
              <wui-text variant="paragraph-400" color="fg-100">$${s}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${n}
              imageSrc=${(d=this.toToken)==null?void 0:d.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="xs">
          <wui-icon size="sm" color="fg-200" name="infoCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="xs"
        >
          <button
            class="cancel-button"
            ?disabled=${this.transactionLoading}
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="paragraph-600" color="fg-200">Cancel</wui-text>
          </button>
          <button
            class="convert-button"
            ?disabled=${this.transactionLoading}
            @click=${this.onSendTransaction.bind(this)}
          >
            ${this.transactionLoading?A`<wui-loading-spinner color="inverse-100"></wui-loading-spinner>`:A`<wui-text variant="paragraph-600" color="inverse-100">
                  ${this.actionButtonLabel()}
                </wui-text>`}
          </button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){var n,i;const e=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return A`
      <w3m-convert-details
        detailsOpen=${this.detailsOpen}
        sourceTokenSymbol=${(n=this.sourceToken)==null?void 0:n.symbol}
        sourceTokenPrice=${this.sourceTokenPriceInUSD}
        toTokenSymbol=${(i=this.toToken)==null?void 0:i.symbol}
        toTokenConvertedAmount=${e}
        gasPriceInUSD=${be.formatNumberToLocalString(this.gasPriceInUSD,3)}
        .priceImpact=${this.priceImpact}
        slippageRate=${lt.CONVERT_SLIPPAGE_TOLERANCE}
        .maxSlippage=${this.maxSlippage}
      ></w3m-convert-details>
    `}actionButtonLabel(){return this.approvalTransaction?"Approve":"Convert"}onCancelTransaction(){G.goBack()}onSendTransaction(){this.approvalTransaction?he.sendTransactionForApproval(this.approvalTransaction):he.sendTransactionForConvert(this.convertTransaction)}};mt.styles=J8;It([j()],mt.prototype,"detailsOpen",void 0);It([j()],mt.prototype,"approvalTransaction",void 0);It([j()],mt.prototype,"convertTransaction",void 0);It([j()],mt.prototype,"sourceToken",void 0);It([j()],mt.prototype,"sourceTokenAmount",void 0);It([j()],mt.prototype,"sourceTokenPriceInUSD",void 0);It([j()],mt.prototype,"toToken",void 0);It([j()],mt.prototype,"toTokenAmount",void 0);It([j()],mt.prototype,"toTokenPriceInUSD",void 0);It([j()],mt.prototype,"caipNetwork",void 0);It([j()],mt.prototype,"transactionLoading",void 0);It([j()],mt.prototype,"balanceSymbol",void 0);It([j()],mt.prototype,"gasPriceInUSD",void 0);It([j()],mt.prototype,"priceImpact",void 0);It([j()],mt.prototype,"maxSlippage",void 0);mt=It([V("w3m-convert-preview-view")],mt);const X8=_e`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .search-input-container,
  .suggested-tokens-container {
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-s);
  }

  .tokens-container .tokens {
    padding: 0px var(--wui-spacing-s);
    padding-bottom: var(--wui-spacing-s);
  }

  .search-input-container {
    padding-top: var(--wui-spacing-s);
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid var(--wui-gray-glass-005);
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xs);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: transparent;
    border-radius: var(--wui-border-radius-xxs);
    padding: var(--wui-spacing-xs);
    align-items: center;
    transition: background-color 0.2s linear;
  }

  .select-network-button:hover {
    background-color: var(--wui-gray-glass-002);
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: var(--wui-border-radius-xs);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }
`;var ss=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Qi=class extends ce{constructor(){var e;super(),this.unsubscribe=[],this.targetToken=(e=G.state.data)==null?void 0:e.target,this.sourceToken=he.state.sourceToken,this.toToken=he.state.toToken,this.searchValue="",this.unsubscribe.push(he.subscribe(n=>{this.sourceToken=n.sourceToken,this.toToken=n.toToken})),this.watchTokens()}updated(){var i,o;const e=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container");e==null||e.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const n=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");n==null||n.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var i,o;super.disconnectedCallback();const e=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container"),n=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");e==null||e.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),n==null||n.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return A`
      <wui-flex flexDirection="column" gap="s">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}watchTokens(){this.interval=setInterval(()=>{he.getNetworkTokenPrice(),he.getMyTokensWithBalance()},5e3)}onSelectToken(e){this.targetToken==="sourceToken"?he.setSourceToken(e):he.setToToken(e),G.goBack()}templateSearchInput(){return A`
      <wui-flex class="search-input-container" gap="xs">
        <wui-input-text
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const e=he.state.myTokensWithBalance?Object.values(he.state.myTokensWithBalance):[],n=he.state.popularTokens?he.state.popularTokens:[],i=this.filterTokensWithText(e,this.searchValue),o=this.filterTokensWithText(n,this.searchValue);return A`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" flexDirection="column">
          ${(i==null?void 0:i.length)>0?A`
                <wui-flex justifyContent="flex-start" padding="s">
                  <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
                </wui-flex>
                ${i.map(r=>{var a,c,l;const s=r.symbol===((a=this.sourceToken)==null?void 0:a.symbol)||r.symbol===((c=this.toToken)==null?void 0:c.symbol);return A`
                    <wui-token-list-item
                      name=${r.name}
                      ?disabled=${s}
                      symbol=${r.symbol}
                      price=${r==null?void 0:r.price}
                      amount=${(l=r==null?void 0:r.quantity)==null?void 0:l.numeric}
                      imageSrc=${r.logoUri}
                      @click=${()=>{s||this.onSelectToken(r)}}
                    >
                    </wui-token-list-item>
                  `})}
              `:null}

          <wui-flex justifyContent="flex-start" padding="s">
            <wui-text variant="paragraph-500" color="fg-200">Popular tokens</wui-text>
          </wui-flex>

          ${(o==null?void 0:o.length)>0?o.map(r=>A`
                  <wui-token-list-item
                    name=${r.name}
                    symbol=${r.symbol}
                    imageSrc=${r.logoUri}
                    @click=${()=>this.onSelectToken(r)}
                  >
                  </wui-token-list-item>
                `):null}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const e=he.state.suggestedTokens?he.state.suggestedTokens.slice(0,8):null;return e?A`
      <wui-flex class="suggested-tokens-container" gap="xs">
        ${e.map(n=>A`
            <wui-token-button
              text=${n.symbol}
              imageSrc=${n.logoUri}
              @click=${()=>this.onSelectToken(n)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(e){this.searchValue=e.detail}handleSuggestedTokensScroll(){var n;const e=(n=this.renderRoot)==null?void 0:n.querySelector(".suggested-tokens-container");e&&(e.style.setProperty("--suggested-tokens-scroll--left-opacity",ws.interpolate([0,100],[0,1],e.scrollLeft).toString()),e.style.setProperty("--suggested-tokens-scroll--right-opacity",ws.interpolate([0,100],[0,1],e.scrollWidth-e.scrollLeft-e.offsetWidth).toString()))}handleTokenListScroll(){var n;const e=(n=this.renderRoot)==null?void 0:n.querySelector(".tokens");e&&(e.style.setProperty("--tokens-scroll--top-opacity",ws.interpolate([0,100],[0,1],e.scrollTop).toString()),e.style.setProperty("--tokens-scroll--bottom-opacity",ws.interpolate([0,100],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString()))}filterTokensWithText(e,n){return e.filter(i=>`${i.symbol} ${i.name} ${i.address}`.toLowerCase().includes(n.toLowerCase()))}};Qi.styles=X8;ss([j()],Qi.prototype,"interval",void 0);ss([j()],Qi.prototype,"targetToken",void 0);ss([j()],Qi.prototype,"sourceToken",void 0);ss([j()],Qi.prototype,"toToken",void 0);ss([j()],Qi.prototype,"searchValue",void 0);Qi=ss([V("w3m-convert-select-token-view")],Qi);const Q8=_e`
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    padding: var(--wui-spacing-m);
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }
`;var e9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let td=class extends ce{render(){return A`
      <wui-flex flexDirection="column" gap="s">
        <w3m-activity-list page="activity"></w3m-activity-list>
      </wui-flex>
    `}};td.styles=Q8;td=e9([V("w3m-transactions-view")],td);var t9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const n9=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let Hh=class extends ce{render(){return A`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${n9}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{re.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Hh=t9([V("w3m-what-is-a-network-view")],Hh);var i9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const r9=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Vh=class extends ce{render(){return A`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${r9}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){me.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),G.push("GetWallet")}};Vh=i9([V("w3m-what-is-a-wallet-view")],Vh);var o9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Zh=class extends ce{render(){return A`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","3xl","xl","3xl"]}
        alignItems="center"
        gap="xl"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="xs" alignItems="center">
          <wui-text align="center" variant="paragraph-500" color="fg-100">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="small-400" color="fg-200">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${G.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};Zh=o9([V("w3m-what-is-a-buy-view")],Zh);const s9=_e`
  wui-loading-spinner {
    margin: 9px auto;
  }
`;var Bl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const a9=6;let vi=class extends ce{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=Wn.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=(e=G.state.data)==null?void 0:e.email,this.emailConnector=je.getEmailConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=!!this.timeoutTimeLeft,n=this.getFooterLabels(e);return A`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100">Enter the code we sent to</wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 20 minutes</wui-text>

        ${this.loading?A`<wui-loading-spinner size="xl" color="accent-100"></wui-loading-spinner>`:A` <wui-flex flexDirection="column" alignItems="center" gap="xs">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?A`
                    <wui-text variant="small-400" align="center" color="error-100">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">${n.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${n.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=Wn.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval(()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=Wn.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)},1e3)}async onOtpInputChange(e){var n;try{this.loading||(this.otp=e.detail,this.emailConnector&&this.otp.length===a9&&(this.loading=!0,await((n=this.onOtpSubmit)==null?void 0:n.call(this,this.otp))))}catch(i){this.error=re.parseError(i),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){if(this.error="",this.otp="",!je.getEmailConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),Me.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){Me.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:`Try again ${e?`in ${this.timeoutTimeLeft}s`:""}`}:{title:"Didn't receive it?",action:`Resend ${e?`in ${this.timeoutTimeLeft}s`:"Code"}`}}};vi.styles=s9;Bl([j()],vi.prototype,"loading",void 0);Bl([j()],vi.prototype,"timeoutTimeLeft",void 0);Bl([j()],vi.prototype,"error",void 0);vi=Bl([V("w3m-email-otp-widget")],vi);var M1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let nd=class extends vi{constructor(){super(),this.unsubscribe=[],this.smartAccountDeployed=ne.state.smartAccountDeployed,this.onOtpSubmit=async e=>{try{if(this.emailConnector){const n=de.checkIfSmartAccountEnabled();await this.emailConnector.provider.connectOtp({otp:e}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),await $e.connectExternal(this.emailConnector),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"email",name:this.emailConnector.name||"Unknown"}}),n&&!this.smartAccountDeployed?G.push("UpgradeToSmartAccount"):Ie.close()}}catch(n){throw me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),n}},this.onOtpResend=async e=>{this.emailConnector&&(await this.emailConnector.provider.connectEmail({email:e}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))},this.unsubscribe.push(ne.subscribeKey("smartAccountDeployed",e=>{this.smartAccountDeployed=e}))}};M1([j()],nd.prototype,"smartAccountDeployed",void 0);nd=M1([V("w3m-email-verify-otp-view")],nd);const c9=_e`
  wui-icon-box {
    height: var(--wui-icon-box-size-xl);
    width: var(--wui-icon-box-size-xl);
  }
`;var D1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Hc=class extends ce{constructor(){var e;super(),this.email=(e=G.state.data)==null?void 0:e.email,this.emailConnector=je.getEmailConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.emailConnector)throw new Error("w3m-email-verify-device-view: No email connector provided");return A`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["xxl","s","xxl","s"]}
        gap="l"
      >
        <wui-icon-box
          size="xl"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="verify"
          background="opaque"
        ></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="s">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-400" color="fg-100">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="paragraph-400" color="fg-100"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="small-400" color="fg-200" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section">
            <wui-text variant="small-400" color="fg-100" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.emailConnector)try{await this.emailConnector.provider.connectDevice(),me.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),G.replace("EmailVerifyOtp",{email:this.email})}catch{G.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.emailConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.emailConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),Me.showSuccess("Code email resent")}}catch(e){Me.showError(e)}finally{this.loading=!1}}};Hc.styles=c9;D1([j()],Hc.prototype,"loading",void 0);Hc=D1([V("w3m-email-verify-device-view")],Hc);const l9=_e`
  div {
    width: 100%;
    height: 400px;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var L1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const Gh=400,qh=360,u9=64;let Vc=class extends ce{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(Ie.subscribeKey("open",e=>{e||(this.onHideIframe(),G.popTransactionStack())}))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach(n=>n()),(e=this.bodyObserver)==null||e.unobserve(window.document.body)}async firstUpdated(){await this.syncTheme(),this.iframe.style.display="block",this.bodyObserver=new ResizeObserver(()=>{this.iframe.style.width=`${qh}px`,this.iframe.style.height=`${Gh}px`,this.iframe.style.left=`calc(50% - ${qh/2}px)`,this.iframe.style.top=`calc(50% - ${Gh/2}px + ${u9/2}px)`,this.ready=!0}),this.bodyObserver.observe(window.document.body)}render(){return this.ready&&this.onShowIframe(),A`<div data-ready=${this.ready}></div>`}onShowIframe(){const e=window.innerWidth<=430;this.iframe.animate([{opacity:0,transform:e?"translateY(50px)":"scale(.95)"},{opacity:1,transform:e?"translateY(0)":"scale(1)"}],{duration:200,easing:"ease",fill:"forwards"})}async onHideIframe(){this.iframe.style.display="none",await this.iframe.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished}async syncTheme(){const e=je.getEmailConnector();e&&await e.provider.syncTheme({themeVariables:ht.getSnapshot().themeVariables})}};Vc.styles=l9;L1([j()],Vc.prototype,"ready",void 0);Vc=L1([V("w3m-approve-transaction-view")],Vc);var d9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Yh=class extends ce{render(){return A`
      <wui-flex flexDirection="column" alignItems="center" gap="xl" padding="xl">
        <wui-text variant="paragraph-400" color="fg-100">Follow the instructions on</wui-text>
        <wui-chip
          icon="externalLink"
          variant="fill"
          href=${lt.SECURE_SITE_DASHBOARD}
          imageSrc=${lt.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-chip>
        <wui-text variant="small-400" color="fg-200">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};Yh=d9([V("w3m-upgrade-wallet-view")],Yh);var b0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Zc=class extends ce{constructor(){super(...arguments),this.emailConnector=je.getEmailConnector(),this.loading=!1,this.setPreferSmartAccount=async()=>{if(this.emailConnector)try{this.loading=!0,await this.emailConnector.provider.setPreferredAccount(Gt.ACCOUNT_TYPES.SMART_ACCOUNT),await this.emailConnector.provider.connect(),this.loading=!1,G.push("Account")}catch{Me.showError("Error upgrading to smart account")}}}render(){return A`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="xxl"
        .padding=${["0","0","l","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link>
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return A` <wui-flex
      flexDirection="column"
      gap="xxl"
      alignItems="center"
      .padding=${["0","xxl","0","xxl"]}
    >
      <wui-flex gap="s" alignItems="center" justifyContent="center">
        <wui-visual name="google"></wui-visual>
        <wui-visual name="pencil"></wui-visual>
        <wui-visual name="lightbulb"></wui-visual>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="s">
        <wui-text align="center" variant="medium-600" color="fg-100">
          Discover Smart Accounts
        </wui-text>
        <wui-text align="center" variant="paragraph-400" color="fg-100">
          Access advanced features such as username, social login, improved security and a smoother
          user experience!
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return A`<wui-flex .padding=${["0","2l","0","2l"]} gap="s">
      <wui-button
        variant="accentBg"
        @click=${this.redirectToAccount.bind(this)}
        size="lg"
        borderRadius="xs"
      >
        Do it later
      </wui-button>
      <wui-button
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.setPreferSmartAccount.bind(this)}
        >Continue
      </wui-button>
    </wui-flex>`}redirectToAccount(){G.push("Account")}};b0([j()],Zc.prototype,"emailConnector",void 0);b0([j()],Zc.prototype,"loading",void 0);Zc=b0([V("w3m-upgrade-to-smart-account-view")],Zc);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const h9=t=>t.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p9={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},f9=t=>(...e)=>({_$litDirective$:t,values:e});class g9{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,n,i){this._$Ct=e,this._$AM=n,this._$Ci=i}_$AS(e,n){return this.update(e,n)}update(e,n){return this.render(...n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const As=(t,e)=>{var i;const n=t._$AN;if(n===void 0)return!1;for(const o of n)(i=o._$AO)==null||i.call(o,e,!1),As(o,e);return!0},Gc=t=>{let e,n;do{if((e=t._$AM)===void 0)break;n=e._$AN,n.delete(t),t=e}while((n==null?void 0:n.size)===0)},j1=t=>{for(let e;e=t._$AM;t=e){let n=e._$AN;if(n===void 0)e._$AN=n=new Set;else if(n.has(t))break;n.add(t),b9(e)}};function m9(t){this._$AN!==void 0?(Gc(this),this._$AM=t,j1(this)):this._$AM=t}function w9(t,e=!1,n=0){const i=this._$AH,o=this._$AN;if(o!==void 0&&o.size!==0)if(e)if(Array.isArray(i))for(let r=n;r<i.length;r++)As(i[r],!1),Gc(i[r]);else i!=null&&(As(i,!1),Gc(i));else As(this,t)}const b9=t=>{t.type==p9.CHILD&&(t._$AP??(t._$AP=w9),t._$AQ??(t._$AQ=m9))};class v9 extends g9{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,n,i){super._$AT(e,n,i),j1(this),this.isConnected=e._$AU}_$AO(e,n=!0){var i,o;e!==this.isConnected&&(this.isConnected=e,e?(i=this.reconnected)==null||i.call(this):(o=this.disconnected)==null||o.call(this)),n&&(As(this,e),Gc(this))}setValue(e){if(h9(this._$Ct))this._$Ct._$AI(e,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=e,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qc=()=>new y9;class y9{}const vu=new WeakMap,Yc=f9(class extends v9{render(t){return at}update(t,[e]){var i;const n=e!==this.Y;return n&&this.Y!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.Y=e,this.ht=(i=t.options)==null?void 0:i.host,this.rt(this.ct=t.element)),at}rt(t){if(typeof this.Y=="function"){const e=this.ht??globalThis;let n=vu.get(e);n===void 0&&(n=new WeakMap,vu.set(e,n)),n.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),n.set(this.Y,t),t!==void 0&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){var t,e;return typeof this.Y=="function"?(t=vu.get(this.ht??globalThis))==null?void 0:t.get(this.Y):(e=this.Y)==null?void 0:e.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),x9=_e`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var v0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ya=class extends ce{constructor(){var e;super(...arguments),this.formRef=qc(),this.initialEmail=((e=G.state.data)==null?void 0:e.email)??"",this.email="",this.loading=!1}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return A`
      <wui-flex flexDirection="column" padding="m" gap="m">
        <form ${Yc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>

        <wui-flex gap="s">
          <wui-button size="md" variant="shade" fullWidth @click=${G.goBack}>
            Cancel
          </wui-button>

          <wui-button
            size="md"
            variant="fill"
            fullWidth
            @click=${this.onSubmitEmail.bind(this)}
            .disabled=${!e}
            .loading=${this.loading}
          >
            Save
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=je.getEmailConnector();if(!n)throw new Error("w3m-update-email-wallet: Email connector not found");const i=await n.provider.updateEmail({email:this.email});me.sendEvent({type:"track",event:"EMAIL_EDIT"}),i.action==="VERIFY_SECONDARY_OTP"?G.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email}):G.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email})}catch(n){Me.showError(n),this.loading=!1}}};ya.styles=x9;v0([j()],ya.prototype,"email",void 0);v0([j()],ya.prototype,"loading",void 0);ya=v0([V("w3m-update-email-wallet-view")],ya);var C9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Kh=class extends vi{constructor(){var e;super(),this.email=(e=G.state.data)==null?void 0:e.email,this.onOtpSubmit=async n=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailPrimaryOtp({otp:n}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),G.replace("UpdateEmailSecondaryOtp",G.state.data))}catch(i){throw me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),i}},this.onStartOver=()=>{G.replace("UpdateEmailWallet",G.state.data)}}};Kh=C9([V("w3m-update-email-primary-otp-view")],Kh);var _9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Jh=class extends vi{constructor(){var e;super(),this.email=(e=G.state.data)==null?void 0:e.newEmail,this.onOtpSubmit=async n=>{try{this.emailConnector&&(await this.emailConnector.provider.updateEmailSecondaryOtp({otp:n}),me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),G.reset("Account"))}catch(i){throw me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL"}),i}},this.onStartOver=()=>{G.replace("UpdateEmailWallet",G.state.data)}}};Jh=_9([V("w3m-update-email-secondary-otp-view")],Jh);const E9=_e`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var U1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Kc=class extends ce{constructor(){super(...arguments),this.disconecting=!1}render(){return A`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["m","xl","xs","xl"]}
          alignItems="center"
          gap="xl"
        >
          <wui-text variant="small-400" color="fg-200" align="center">
            This app doesn’t support your current network. Switch to an available option following
            to continue.
          </wui-text>
        </wui-flex>

        <wui-flex flexDirection="column" padding="s" gap="xs">
          ${this.networksTemplate()}
        </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="s" gap="xs">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="disconnect"
            ?chevron=${!1}
            .loading=${this.disconecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n}=de.state;return re.sortRequestedNetworks(e,n).map(o=>A`
        <wui-list-network
          imageSrc=${ve(ze.getNetworkImage(o))}
          name=${o.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(o)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconecting=!0,await $e.disconnect(),me.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{me.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Me.showError("Failed to disconnect")}finally{this.disconecting=!1}}async onSwitchNetwork(e){const{isConnected:n}=ne.state,{approvedCaipNetworkIds:i,supportsAllNetworks:o,caipNetwork:r}=de.state,{data:s}=G.state;n&&(r==null?void 0:r.id)!==e.id?i!=null&&i.includes(e.id)?(await de.switchActiveNetwork(e),Dd.navigateAfterNetworkSwitch()):o&&G.push("SwitchNetwork",{...s,network:e}):n||(de.setCaipNetwork(e),G.push("Connect"))}};Kc.styles=E9;U1([j()],Kc.prototype,"disconecting",void 0);Kc=U1([V("w3m-unsupported-chain-view")],Kc);const T9=_e`
  wui-compatible-network {
    margin-top: var(--wui-spacing-l);
  }
`;var Wa=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Zr=class extends ce{constructor(){super(),this.unsubscribe=[],this.address=ne.state.address,this.profileName=ne.state.profileName,this.network=de.state.caipNetwork,this.preferredAccountType=ne.state.preferredAccountType,this.unsubscribe.push(ne.subscribe(e=>{e.address?(this.address=e.address,this.profileName=e.profileName,this.preferredAccountType=e.preferredAccountType):Me.showError("Account not found")}),de.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const e=ze.getNetworkImage(this.network);return A` <wui-flex
      flexDirection="column"
      .padding=${["xl","l","l","l"]}
      alignItems="center"
    >
      <wui-chip-button
        @click=${this.onCopyClick.bind(this)}
        text=${be.getTruncateString({string:this.address??"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        imageSrc=${e||""}
        variant="shadeSmall"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["l","0","0","0"]}
        alignItems="center"
        gap="s"
      >
        <wui-qr-code
          size=${232}
          theme=${ht.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="paragraph-500" color="fg-100" align="center">
          Copy your address or scan this QR code
        </wui-text>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var s;const e=de.getRequestedCaipNetworks(),n=de.checkIfSmartAccountEnabled(),i=de.state.caipNetwork;if(this.preferredAccountType===Gt.ACCOUNT_TYPES.SMART_ACCOUNT&&n)return i?A`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[ze.getNetworkImage(i)??""]}
      ></wui-compatible-network>`:null;const r=((s=e==null?void 0:e.filter(a=>a==null?void 0:a.imageId))==null?void 0:s.slice(0,5)).map(ze.getNetworkImage).filter(Boolean);return A`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${r}
    ></wui-compatible-network>`}onReceiveClick(){G.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(re.copyToClopboard(this.address),Me.showSuccess("Address copied"))}catch{Me.showError("Failed to copy")}}};Zr.styles=T9;Wa([j()],Zr.prototype,"address",void 0);Wa([j()],Zr.prototype,"profileName",void 0);Wa([j()],Zr.prototype,"network",void 0);Wa([j()],Zr.prototype,"preferredAccountType",void 0);Zr=Wa([V("w3m-wallet-receive-view")],Zr);const k9=_e`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var W1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Jc=class extends ce{constructor(){super(),this.unsubscribe=[],this.preferredAccountType=ne.state.preferredAccountType,this.unsubscribe.push(ne.subscribeKey("preferredAccountType",e=>{this.preferredAccountType=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A` <wui-flex
      flexDirection="column"
      .padding=${["xs","s","m","s"]}
      gap="xs"
    >
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const{approvedCaipNetworkIds:e,requestedCaipNetworks:n,caipNetwork:i}=de.state,o=de.checkIfSmartAccountEnabled();let r=re.sortRequestedNetworks(e,n);if(o&&this.preferredAccountType===Gt.ACCOUNT_TYPES.SMART_ACCOUNT){if(!i)return null;r=[i]}return r.map(s=>A`
        <wui-list-network
          imageSrc=${ve(ze.getNetworkImage(s))}
          name=${s.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};Jc.styles=k9;W1([j()],Jc.prototype,"preferredAccountType",void 0);Jc=W1([V("w3m-wallet-compatible-networks-view")],Jc);const A9=_e`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xs) !important;
    border: 5px solid var(--wui-color-bg-125);
    background: var(--wui-color-bg-175);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  wui-button {
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var za=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Gr=class extends ce{constructor(){super(),this.unsubscribe=[],this.token=Ot.state.token,this.sendTokenAmount=Ot.state.sendTokenAmount,this.receiverAddress=Ot.state.receiverAddress,this.message="Preview Send",this.unsubscribe.push(Ot.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.getMessage(),A` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex class="inputContainer" gap="xs" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
        ></w3m-input-token>
        <wui-icon-box
          size="inherit"
          backgroundColor="fg-300"
          iconSize="lg"
          iconColor="fg-250"
          background="opaque"
          icon="arrowBottom"
        ></wui-icon-box>
        <w3m-input-address .receiverAddress=${this.receiverAddress}></w3m-input-address>
      </wui-flex>
      <wui-flex .margin=${["l","0","0","0"]}>
        <wui-button
          @click=${this.onButtonClick.bind(this)}
          ?disabled=${!this.message.startsWith("Preview Send")}
          size="lg"
          variant="fill"
          fullWidth
        >
          ${this.message}
        </wui-button>
      </wui-flex>
    </wui-flex>`}onButtonClick(){G.push("WalletSendPreview")}getMessage(){this.message="Preview Send",this.receiverAddress&&!re.isAddress(this.receiverAddress)&&(this.message="Invalid Address"),this.receiverAddress||(this.message="Add Address"),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message="Insufficient Funds"),this.sendTokenAmount||(this.message="Add Amount"),this.token||(this.message="Select Token")}};Gr.styles=A9;za([j()],Gr.prototype,"token",void 0);za([j()],Gr.prototype,"sendTokenAmount",void 0);za([j()],Gr.prototype,"receiverAddress",void 0);za([j()],Gr.prototype,"message",void 0);Gr=za([V("w3m-wallet-send-view")],Gr);const $9=_e`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }
`;var Ml=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let qo=class extends ce{constructor(){super(),this.unsubscribe=[],this.tokenBalance=ne.state.tokenBalance,this.search="",this.onDebouncedSearch=re.debounce(e=>{this.search=e}),this.unsubscribe.push(ne.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return A`
      <wui-flex gap="xs" padding="s">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e;return this.search?this.tokens=(e=this.tokenBalance)==null?void 0:e.filter(n=>n.name.toLowerCase().includes(this.search.toLowerCase())):this.tokens=this.tokenBalance,A`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","s","0","s"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["m","s","s","s"]}>
          <wui-text variant="paragraph-500" color="fg-200">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="xs">
          ${this.tokens&&this.tokens.length>0?this.tokens.map(n=>A`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,n)}
                    ?clickable=${!0}
                    tokenName=${n.name}
                    tokenImageUrl=${n.iconUrl}
                    tokenAmount=${n.quantity.numeric}
                    tokenValue=${n.value}
                    tokenCurrency=${n.symbol}
                  ></wui-list-token>`):A`<wui-flex
                .padding=${["4xl","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="l"
              >
                <wui-icon-box
                  icon="coinPlaceholder"
                  size="inherit"
                  iconColor="fg-200"
                  backgroundColor="fg-200"
                  iconSize="lg"
                ></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="xs"
                  flexDirection="column"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <wui-text variant="paragraph-500" align="center" color="fg-100"
                    >No tokens found</wui-text
                  >
                  <wui-text variant="small-400" align="center" color="fg-200"
                    >Your tokens will appear here</wui-text
                  >
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){G.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){Ot.setToken(e),Ot.setTokenAmount(void 0),G.goBack()}};qo.styles=$9;Ml([j()],qo.prototype,"tokenBalance",void 0);Ml([j()],qo.prototype,"tokens",void 0);Ml([j()],qo.prototype,"search",void 0);qo=Ml([V("w3m-wallet-send-select-token-view")],qo);const S9=_e`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: var(--wui-border-radius-3xl);
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: var(--wui-border-radius-xs) !important;
  }
`;var Fa=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let qr=class extends ce{constructor(){super(),this.unsubscribe=[],this.token=Ot.state.token,this.sendTokenAmount=Ot.state.sendTokenAmount,this.receiverAddress=Ot.state.receiverAddress,this.caipNetwork=de.state.caipNetwork,this.unsubscribe.push(Ot.subscribe(e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress}),de.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var e,n,i;return A` <wui-flex flexDirection="column" .padding=${["s","l","l","l"]}>
      <wui-flex gap="xs" flexDirection="column" .padding=${["0","xs","0","xs"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="4xs">
            <wui-text variant="small-400" color="fg-150">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${Number((e=this.token)==null?void 0:e.quantity.numeric).toFixed(2)} ${(n=this.token)==null?void 0:n.symbol}"
            .imageSrc=${(i=this.token)==null?void 0:i.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="fg-200" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="small-400" color="fg-150">To</wui-text>
          <wui-preview-item
            text=${be.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
            address=${this.receiverAddress??""}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["xxl","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="xxs" .padding=${["s","0","0","0"]}>
          <wui-icon size="sm" color="fg-200" name="warningCircle"></wui-icon>
          <wui-text variant="small-400" color="fg-200">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="s" .padding=${["l","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="shade"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="fill"
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const n=this.token.price*this.sendTokenAmount;return A`<wui-text variant="paragraph-400" color="fg-100"
        >$${n.toFixed(2)}</wui-text
      >`}return null}onSendClick(){G.reset("Account"),setTimeout(()=>{Ot.resetSend()},200)}onCancelClick(){G.goBack()}};qr.styles=S9;Fa([j()],qr.prototype,"token",void 0);Fa([j()],qr.prototype,"sendTokenAmount",void 0);Fa([j()],qr.prototype,"receiverAddress",void 0);Fa([j()],qr.prototype,"caipNetwork",void 0);qr=Fa([V("w3m-wallet-send-preview-view")],qr);const I9=_e`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;function z1(t){const{connectors:e}=je.state,n=e.filter(r=>r.type==="ANNOUNCED").reduce((r,s)=>{var a;return(a=s.info)!=null&&a.rdns&&(r[s.info.rdns]=!0),r},{});return t.map(r=>({...r,installed:!!r.rdns&&!!n[r.rdns??""]})).sort((r,s)=>Number(s.installed)-Number(r.installed))}var Ha=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const Xh="local-paginator";let Yr=class extends ce{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!xe.state.wallets.length,this.wallets=xe.state.wallets,this.recommended=xe.state.recommended,this.featured=xe.state.featured,this.unsubscribe.push(xe.subscribeKey("wallets",e=>this.wallets=e),xe.subscribeKey("recommended",e=>this.recommended=e),xe.subscribeKey("featured",e=>this.featured=e))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach(n=>n()),(e=this.paginationObserver)==null||e.disconnect()}render(){return A`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&e&&(await xe.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,n){return[...Array(e)].map(()=>A`
        <wui-card-select-loader type="wallet" id=${ve(n)}></wui-card-select-loader>
      `)}walletsTemplate(){const e=[...this.featured,...this.recommended,...this.wallets];return z1(e).map(i=>A`
        <wui-card-select
          imageSrc=${ve(ze.getWalletImage(i))}
          type="wallet"
          name=${i.name}
          @click=${()=>this.onConnectWallet(i)}
          .installed=${i.installed}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:e,recommended:n,featured:i,count:o}=xe.state,r=window.innerWidth<352?3:4,s=e.length+n.length;let c=Math.ceil(s/r)*r-s+r;return c-=e.length?i.length%r:0,o===0&&i.length>0?null:o===0||[...i,...e,...n].length<o?this.shimmerTemplate(c,Xh):null}createPaginationObserver(){var n;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${Xh}`);e&&(this.paginationObserver=new IntersectionObserver(([i])=>{if(i!=null&&i.isIntersecting&&!this.initial){const{page:o,count:r,wallets:s}=xe.state;s.length<r&&xe.fetchWallets({page:o+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){const n=je.getConnector(e.id,e.rdns);n?G.push("ConnectingExternal",{connector:n}):G.push("ConnectingWalletConnect",{wallet:e})}};Yr.styles=I9;Ha([j()],Yr.prototype,"initial",void 0);Ha([j()],Yr.prototype,"wallets",void 0);Ha([j()],Yr.prototype,"recommended",void 0);Ha([j()],Yr.prototype,"featured",void 0);Yr=Ha([V("w3m-all-wallets-list")],Yr);const R9=_e`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var y0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let xa=class extends ce{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?A`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await xe.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:e}=xe.state,n=z1(e);return e.length?A`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${n.map(i=>A`
            <wui-card-select
              imageSrc=${ve(ze.getWalletImage(i))}
              type="wallet"
              name=${i.name}
              @click=${()=>this.onConnectWallet(i)}
              .installed=${i.installed}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:A`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){const n=je.getConnector(e.id,e.rdns);n?G.push("ConnectingExternal",{connector:n}):G.push("ConnectingWalletConnect",{wallet:e})}};xa.styles=R9;y0([j()],xa.prototype,"loading",void 0);y0([ge()],xa.prototype,"query",void 0);xa=y0([V("w3m-all-wallets-search")],xa);var Dl=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ca=class extends ce{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push($e.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=this.generateTabs();return A`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:n})=>n),e}onTabChange(e){var i;const n=this.platformTabs[e];n&&((i=this.onSelectPlatfrom)==null||i.call(this,n))}};Dl([ge({type:Array})],Ca.prototype,"platforms",void 0);Dl([ge()],Ca.prototype,"onSelectPlatfrom",void 0);Dl([j()],Ca.prototype,"buffering",void 0);Ca=Dl([V("w3m-connecting-header")],Ca);var P9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Qh=class extends Zt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){var e;try{this.error=!1;const{connectors:n}=je.state,i=n.find(r=>{var s,a;return r.type==="ANNOUNCED"&&((s=r.info)==null?void 0:s.rdns)===((a=this.wallet)==null?void 0:a.rdns)}),o=n.find(r=>r.type==="INJECTED");i?await $e.connectExternal(i):o&&await $e.connectExternal(o),Ie.close(),me.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser",name:((e=this.wallet)==null?void 0:e.name)||"Unknown"}})}catch(n){me.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),this.error=!0}}};Qh=P9([V("w3m-connecting-wc-browser")],Qh);var O9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ep=class extends Zt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var e;(e=this.onConnect)==null||e.call(this)},200))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:i}=this.wallet,{redirect:o,href:r}=re.formatNativeUrl(n,this.uri);$e.setWcLinking({name:i,href:r}),$e.setRecentWallet(this.wallet),re.openHref(o,"_blank")}catch{this.error=!0}}};ep=O9([V("w3m-connecting-wc-desktop")],ep);var N9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let tp=class extends Zt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,(e=this.onConnect)==null||e.call(this))}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:i}=this.wallet,{redirect:o,href:r}=re.formatNativeUrl(n,this.uri);$e.setWcLinking({name:i,href:r}),$e.setRecentWallet(this.wallet),re.openHref(o,"_self")}catch{this.error=!0}}onBuffering(){const e=re.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&e&&($e.setBuffering(!0),setTimeout(()=>{$e.setBuffering(!1)},5e3))}};tp=N9([V("w3m-connecting-wc-mobile")],tp);const B9=_e`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var M9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let id=class extends Zt{constructor(){var e;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((e=this.wallet)==null?void 0:e.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),A`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>
        ${this.copyTemplate()}
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return $e.setWcLinking(void 0),$e.setRecentWallet(this.wallet),A` <wui-qr-code
      size=${e}
      theme=${ht.state.themeMode}
      uri=${this.uri}
      imageSrc=${ve(ze.getWalletImage(this.wallet))}
      alt=${ve(n)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return A`<wui-link
      .disabled=${e}
      @click=${this.onCopyUri}
      color="fg-200"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
      Copy link
    </wui-link>`}};id.styles=B9;id=M9([V("w3m-connecting-wc-qrcode")],id);var D9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let np=class extends ce{constructor(){var e;if(super(),this.wallet=(e=G.state.data)==null?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return A`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${ve(ze.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};np=D9([V("w3m-connecting-wc-unsupported")],np);var L9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ip=class extends Zt{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",me.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var e;if((e=this.wallet)!=null&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:i}=this.wallet,{redirect:o,href:r}=re.formatUniversalUrl(n,this.uri);$e.setWcLinking({name:i,href:r}),$e.setRecentWallet(this.wallet),re.openHref(o,"_blank")}catch{this.error=!0}}};ip=L9([V("w3m-connecting-wc-web")],ip);const j9=_e`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xxs);
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    cursor: pointer;
  }

  .details-content-container {
    padding: var(--wui-spacing-1xs);
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: var(--wui-spacing-s);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-1xs);
    border-radius: calc(var(--wui-border-radius-5xs) + var(--wui-border-radius-4xs));
    background: var(--wui-gray-glass-002);
  }

  .details-row.provider-free-row {
    padding-right: var(--wui-spacing-xs);
  }

  .free-badge {
    background: rgba(38, 217, 98, 0.15);
    border-radius: var(--wui-border-radius-4xs);
    padding: 4.5px 6px;
  }
`;var ri=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let hn=class extends ce{constructor(){super(...arguments),this.detailsOpen=!1,this.slippageRate=1}render(){return A`
      <wui-flex flexDirection="column" alignItems="center" gap="1xs" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","xs","0","xs"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="xs">
                <wui-text variant="small-400" color="fg-100"
                  >1 ${this.sourceTokenSymbol} =
                  ${be.formatNumberToLocalString(this.toTokenConvertedAmount,3)}
                  ${this.toTokenSymbol}</wui-text
                >
                <wui-text variant="small-400" color="fg-200">
                  $${be.formatNumberToLocalString(this.sourceTokenPrice)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?A`
                <wui-flex flexDirection="column" gap="xs" class="details-content-container">
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Network cost</wui-text>
                      <wui-text variant="small-400" color="fg-100">
                        $${be.formatNumberToLocalString(this.gasPriceInUSD,3)}
                      </wui-text>
                    </wui-flex>
                  </wui-flex>
                  ${this.priceImpact?A` <wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Price impact</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${be.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceTokenSymbol?A`<wui-flex flexDirection="column" gap="xs">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-text variant="small-400" color="fg-150">Max. slippage</wui-text>
                          <wui-flex>
                            <wui-text variant="small-400" color="fg-200">
                              ${be.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.sourceTokenSymbol} ${this.slippageRate}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="xs">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-text variant="small-400" color="fg-150">Provider fee</wui-text>
                      <wui-flex alignItems="center" justifyContent="center" class="free-badge">
                        <wui-text variant="micro-700" color="success-100">Free</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};hn.styles=[j9];ri([ge()],hn.prototype,"detailsOpen",void 0);ri([ge()],hn.prototype,"sourceTokenSymbol",void 0);ri([ge()],hn.prototype,"sourceTokenPrice",void 0);ri([ge()],hn.prototype,"toTokenSymbol",void 0);ri([ge()],hn.prototype,"toTokenConvertedAmount",void 0);ri([ge()],hn.prototype,"gasPriceInUSD",void 0);ri([ge()],hn.prototype,"priceImpact",void 0);ri([ge()],hn.prototype,"slippageRate",void 0);ri([ge()],hn.prototype,"maxSlippage",void 0);hn=ri([V("w3m-convert-details")],hn);const U9=_e`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: var(--wui-border-radius-s);
    padding: var(--wui-spacing-xl);
    padding-right: var(--wui-spacing-s);
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill var(--wui-duration-md) var(--wui-ease-out-power-1);
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: var(--wui-gray-glass-005);
  }

  :host wui-flex .input_mask__background {
    fill: var(--wui-gray-glass-002);
  }

  :host wui-flex.focus .input_mask__border {
    fill: var(--wui-gray-glass-020);
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: var(--wui-color-accent-100);
    color: var(--wui-color-fg-100);
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .token-select-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-xxs);
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-1xs);
    height: 40px;
    border: none;
    border-radius: 80px;
    background: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    cursor: pointer;
    transition: background 0.2s linear;
  }

  .token-select-button:hover {
    background: var(--wui-gray-glass-005);
  }

  .token-select-button wui-image {
    width: 24px;
    height: 24px;
    border-radius: var(--wui-border-radius-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-010);
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--wui-gray-glass-020);
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var Mn=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const W9=5e-5;let Qt=class extends ce{constructor(){super(...arguments),this.focused=!1,this.price=0,this.marketValue="$1.0345,00",this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const e=this.marketValue||"0",n=Ct.bigNumber(e).isGreaterThan(0);return A`
      <wui-flex class="${this.focused?"focus":""}" justifyContent="space-between">
        ${this.target==="sourceToken"?Lf:Df}
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            .value=${this.value}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
          />
          <wui-text class="market-value" variant="small-400" color="fg-200">
            ${n?`$${this.marketValue}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(e){const n=["Backspace","Meta","Ctrl","a","c","v","ArrowLeft","ArrowRight","Tab"],i=e.key===",",o=e.key===".",r=e.key>="0"&&e.key<="9",s=this.value;!r&&!n.includes(e.key)&&!o&&!i&&e.preventDefault(),(i||o)&&(s!=null&&s.includes(".")||s!=null&&s.includes(","))&&e.preventDefault()}dispatchInputChangeEvent(e){if(!this.onSetAmount)return;const n=e.target.value;n===","||n==="."?this.onSetAmount(this.target,"0."):n.endsWith(",")?this.onSetAmount(this.target,n.replace(",",".")):this.onSetAmount(this.target,n)}setMaxValueToInput(){var e;(e=this.onSetMaxValue)==null||e.call(this,this.target,this.balance)}templateTokenSelectButton(){if(!this.token)return A` <wui-button
        class="swap-token-button"
        size="md"
        variant="accentBg"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`;const e=this.token.logoUri?A`<wui-image src=${this.token.logoUri}></wui-image>`:A`
          <wui-icon-box
            size="sm"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="networkPlaceholder"
          ></wui-icon-box>
        `;return A`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="xxs"
      >
        <button
          size="sm"
          variant="shade"
          class="token-select-button"
          @click=${this.onSelectToken.bind(this)}
        >
          ${e}
          <wui-text variant="paragraph-600" color="fg-100">${this.token.symbol}</wui-text>
        </button>
        <wui-flex alignItems="center" gap="xxs"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){const e=Ct.multiply(this.balance,this.price),n=e?e==null?void 0:e.isGreaterThan(W9):!1;return A`
      ${n?A`<wui-text variant="small-400" color="fg-200">
            ${be.formatNumberToLocalString(this.balance,3)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(n):null}
    `}tokenActionButtonTemplate(e){return e?A` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-100" variant="small-600">Max</wui-text>
      </button>`:A` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-100" variant="small-600">Buy</wui-text>
    </button>`}onFocusChange(e){this.focused=e}onSelectToken(){me.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),G.push("ConvertSelectToken",{target:this.target})}onBuyToken(){G.push("OnRampProviders")}};Qt.styles=[U9];Mn([ge()],Qt.prototype,"focused",void 0);Mn([ge()],Qt.prototype,"balance",void 0);Mn([ge()],Qt.prototype,"value",void 0);Mn([ge()],Qt.prototype,"price",void 0);Mn([ge()],Qt.prototype,"marketValue",void 0);Mn([ge()],Qt.prototype,"disabled",void 0);Mn([ge()],Qt.prototype,"target",void 0);Mn([ge()],Qt.prototype,"token",void 0);Mn([ge()],Qt.prototype,"onSetAmount",void 0);Mn([ge()],Qt.prototype,"onSetMaxValue",void 0);Qt=Mn([V("w3m-convert-input")],Qt);const z9=_e`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var Ll=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};function rp(){var s,a,c,l,d,p,f;const t=(a=(s=G.state.data)==null?void 0:s.connector)==null?void 0:a.name,e=(l=(c=G.state.data)==null?void 0:c.wallet)==null?void 0:l.name,n=(p=(d=G.state.data)==null?void 0:d.network)==null?void 0:p.name,i=e??t,o=je.getConnectors();return{Connect:`Connect ${o.length===1&&((f=o[0])==null?void 0:f.id)==="w3m-email"?"Email":""} Wallet`,Account:void 0,AccountSettings:void 0,ConnectingExternal:i??"Connect Wallet",ConnectingWalletConnect:i??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a wallet",Downloads:i?`Get ${i}`:"Downloads",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",ApproveTransaction:"Approve Transaction",Transactions:"Activity",UpgradeEmailWallet:"Upgrade your Wallet",UpgradeToSmartAccount:void 0,UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",UnsupportedChain:"Switch Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",WhatIsABuy:"What is Buy?",BuyInProgress:"Buy",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview convert",WalletSend:"Send",WalletSendPreview:"Review send",WalletSendSelectToken:"Select Token"}}let Yo=class extends ce{constructor(){super(),this.unsubscribe=[],this.heading=rp()[G.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(G.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),$e.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
          data-testid="w3m-header-close"
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){me.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),G.push("WhatIsAWallet")}async onClose(){if(pe.state.isSiweEnabled){const{SIWEController:e}=await ui(()=>import("./index-IVVnfiTN.js"),[]);e.state.status!=="success"&&await $e.disconnect()}Ie.close()}titleTemplate(){return A`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:e}=G.state,n=e==="Connect",r=e==="ApproveTransaction"||e==="UpgradeToSmartAccount";return this.showBack&&!r?A`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>`:A`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?A`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){var i;const n=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-text");if(n){const o=rp()[e];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=o,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var i;const{history:e}=G.state,n=(i=this.shadowRoot)==null?void 0:i.querySelector("#dynamic");e.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){G.state.view==="ConnectingSiwe"?G.push("Connect"):G.goBack()}};Yo.styles=[z9];Ll([j()],Yo.prototype,"heading",void 0);Ll([j()],Yo.prototype,"buffering",void 0);Ll([j()],Yo.prototype,"showBack",void 0);Yo=Ll([V("w3m-header")],Yo);var F1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let rd=class extends ce{constructor(){super(...arguments),this.data=[]}render(){return A`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>A`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(n=>A`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};F1([ge({type:Array})],rd.prototype,"data",void 0);rd=F1([V("w3m-help-widget")],rd);const F9=_e`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--wui-spacing-1xs);
    height: 40px;
    padding: var(--wui-spacing-xs) var(--wui-spacing-1xs) var(--wui-spacing-xs)
      var(--wui-spacing-xs);
    min-width: 95px;
    border-radius: var(--FULL, 1000px);
    border: 1px solid var(--wui-gray-glass-002);
    background: var(--wui-gray-glass-002);
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var oo=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let yi=class extends ce{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=(e=this.currencies)==null?void 0:e[0],this.currencyImages=gt.state.currencyImages,this.tokenImages=gt.state.tokenImages,this.unsubscribe.push(We.subscribeKey("purchaseCurrency",n=>{!n||this.type==="Fiat"||(this.selectedCurrency=this.formatPurchaseCurrency(n))}),We.subscribeKey("paymentCurrency",n=>{!n||this.type==="Token"||(this.selectedCurrency=this.formatPaymentCurrency(n))}),We.subscribe(n=>{this.type==="Fiat"?this.currencies=n.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=n.paymentCurrencies.map(this.formatPaymentCurrency)}),gt.subscribe(n=>{this.currencyImages={...n.currencyImages},this.tokenImages={...n.tokenImages}}))}firstUpdated(){We.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;const e=((i=this.selectedCurrency)==null?void 0:i.symbol)||"",n=this.currencyImages[e]||this.tokenImages[e];return A`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?A` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="xxs"
            @click=${()=>Ie.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${ve(n)}></wui-image>
            <wui-text color="fg-100">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:A`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};yi.styles=F9;oo([ge({type:String})],yi.prototype,"type",void 0);oo([ge({type:Number})],yi.prototype,"value",void 0);oo([j()],yi.prototype,"currencies",void 0);oo([j()],yi.prototype,"selectedCurrency",void 0);oo([j()],yi.prototype,"currencyImages",void 0);oo([j()],yi.prototype,"tokenImages",void 0);yi=oo([V("w3m-swap-input")],yi);const H9=_e`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
  }
`;var V9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let od=class extends ce{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=pe.state;return!e&&!n?null:A`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-400" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=pe.state;return e&&n?"and":""}termsTemplate(){const{termsConditionsUrl:e}=pe.state;return e?A`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:e}=pe.state;return e?A`<a href=${e}>Privacy Policy</a>`:null}};od.styles=[H9];od=V9([V("w3m-legal-footer")],od);const Z9=_e`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var H1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Xc=class extends ce{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:n,play_store:i,chrome_store:o,homepage:r}=this.wallet,s=re.isMobile(),a=re.isIos(),c=re.isAndroid(),l=[n,i,r,o].filter(Boolean).length>1,d=be.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!s?A`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${()=>G.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&r?A`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?A`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&c?A`
        <wui-cta-button
          label=${`Don't have ${d}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;(e=this.wallet)!=null&&e.app_store&&re.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;(e=this.wallet)!=null&&e.play_store&&re.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;(e=this.wallet)!=null&&e.homepage&&re.openHref(this.wallet.homepage,"_blank")}};Xc.styles=[Z9];H1([ge({type:Object})],Xc.prototype,"wallet",void 0);Xc=H1([V("w3m-mobile-download-links")],Xc);const G9=_e`
  wui-flex {
    border-top: 1px solid var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
  }
`;var q9=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let sd=class extends ce{render(){const{termsConditionsUrl:e,privacyPolicyUrl:n}=pe.state;return!e&&!n?null:A`
      <wui-flex
        .padding=${["m","s","s","s"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="s"
      >
        <wui-text color="fg-250" variant="small-400" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return A` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){G.push("WhatIsABuy")}};sd.styles=[G9];sd=q9([V("w3m-onramp-providers-footer")],sd);const Y9=_e`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var V1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const K9={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let Qc=class extends ce{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Me.state.open,this.unsubscribe.push(Me.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){const{message:e,variant:n}=Me.state,i=K9[n];return A`
      <wui-snackbar
        message=${e}
        backgroundColor=${i.backgroundColor}
        iconColor=${i.iconColor}
        icon=${i.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Me.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Qc.styles=Y9;V1([j()],Qc.prototype,"open",void 0);Qc=V1([V("w3m-snackbar")],Qc);const J9=_e`
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 21px;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: var(--wui-spacing-xs);
  }

  wui-loading-spinner {
    right: var(--wui-spacing-m);
  }
`;var Va=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Kr=class extends ce{constructor(){super(),this.unsubscribe=[],this.formRef=qc(),this.connectors=je.state.connectors,this.email="",this.loading=!1,this.error="",this.unsubscribe.push(je.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){var e;(e=this.formRef.value)==null||e.addEventListener("keydown",n=>{n.key==="Enter"&&this.onSubmitEmail(n)})}render(){const e=this.connectors.length>1;return this.connectors.find(i=>i.type==="EMAIL")?A`
      <form ${Yc(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          .errorMessage=${this.error}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>

      ${e?A`<wui-separator text="or"></wui-separator>`:null}
    `:null}submitButtonTemplate(){return!this.loading&&this.email.length>3?A`
          <wui-icon-link
            size="sm"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?A`<wui-loading-spinner size="md" color="accent-100"></wui-loading-spinner>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=""}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const n=je.getEmailConnector();if(!n)throw new Error("w3m-email-login-widget: Email connector not found");const{action:i}=await n.provider.connectEmail({email:this.email});me.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),i==="VERIFY_OTP"?(me.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),G.push("EmailVerifyOtp",{email:this.email})):i==="VERIFY_DEVICE"&&G.push("EmailVerifyDevice",{email:this.email})}catch(n){const i=re.parseError(n);i!=null&&i.includes("Invalid email")?this.error="Invalid email. Try again.":Me.showError(n)}finally{this.loading=!1}}onFocusEvent(){me.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};Kr.styles=J9;Va([j()],Kr.prototype,"connectors",void 0);Va([j()],Kr.prototype,"email",void 0);Va([j()],Kr.prototype,"loading",void 0);Va([j()],Kr.prototype,"error",void 0);Kr=Va([V("w3m-email-login-widget")],Kr);const X9=_e`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-s);
    height: 48px;
    padding: var(--wui-spacing-xs);
    padding-right: var(--wui-spacing-s);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    border-radius: 24px;
    transaction: background-color 0.2s linear;
  }

  .account-button:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-md);
    will-change: background-color;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #47a1ff;
  }
`;var ar=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Qn=class extends ce{constructor(){super(),this.unsubscribe=[],this.address=ne.state.address,this.profileImage=ne.state.profileImage,this.profileName=ne.state.profileName,this.network=de.state.caipNetwork,this.disconnecting=!1,this.balance=ne.state.balance,this.balanceSymbol=ne.state.balanceSymbol,this.unsubscribe.push(ne.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):this.disconnecting||Me.showError("Account not found")}),de.subscribeKey("caipNetwork",e=>{e!=null&&e.id&&(this.network=e)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n;if(!this.address)throw new Error("w3m-account-view: No account provided");const e=ze.getNetworkImage(this.network);return A`<wui-flex
        flexDirection="column"
        .padding=${["0","xl","m","xl"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${ve(this.address)}
          address=${ve(this.address)}
          imageSrc=${ve(this.profileImage===null?void 0:this.profileImage)}
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="medium-title-600" color="fg-100">
              ${this.profileName?be.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):be.getTruncateString({string:this.address?this.address:"",charsStart:4,charsEnd:4,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-text variant="paragraph-500" color="fg-200"
            >${re.formatBalance(this.balance,this.balanceSymbol)}</wui-text
          >
        </wui-flex>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()} ${this.emailBtnTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${ve(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
          data-testid="w3m-account-select-network"
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((n=this.network)==null?void 0:n.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        ${this.onrampTemplate()}
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalMedium"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}onrampTemplate(){const{enableOnramp:e}=pe.state;return e?A`
      <wui-list-item
        iconVariant="blue"
        icon="card"
        ?chevron=${!0}
        @click=${this.handleClickPay.bind(this)}
      >
        <wui-text variant="paragraph-500" color="fg-100">Buy crypto</wui-text>
      </wui-list-item>
    `:null}emailCardTemplate(){const e=ut.getConnectedConnector(),n=je.getEmailConnector(),{origin:i}=location;return!n||e!=="EMAIL"||i.includes(lt.SECURE_SITE)?null:A`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickPay(){G.push("OnRampProviders")}explorerBtnTemplate(){const{addressExplorerUrl:e}=ne.state;return e?A`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}emailBtnTemplate(){const e=ut.getConnectedConnector(),n=je.getEmailConnector();if(!n||e!=="EMAIL")return null;const i=n.provider.getEmail()??"";return A`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="mail"
        iconSize="sm"
        data-testid="w3m-account-email-update"
        ?chevron=${!0}
        @click=${()=>this.onGoToUpdateEmail(i)}
      >
        <wui-text variant="paragraph-500" color="fg-100">${i}</wui-text>
      </wui-list-item>
    `}isAllowedNetworkSwitch(){const{requestedCaipNetworks:e}=de.state,n=e?e.length>1:!1,i=e==null?void 0:e.find(({id:o})=>{var r;return o===((r=this.network)==null?void 0:r.id)});return n||!i}onCopyAddress(){try{this.address&&(re.copyToClopboard(this.address),Me.showSuccess("Address copied"))}catch{Me.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&(me.sendEvent({type:"track",event:"CLICK_NETWORKS"}),G.push("Networks"))}onTransactions(){me.sendEvent({type:"track",event:"CLICK_TRANSACTIONS"}),G.push("Transactions")}async onDisconnect(){try{this.disconnecting=!0,await $e.disconnect(),me.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),Ie.close()}catch{me.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Me.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){const{addressExplorerUrl:e}=ne.state;e&&re.openHref(e,"_blank")}onGoToUpgradeView(){me.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),G.push("UpgradeEmailWallet")}onGoToUpdateEmail(e){G.push("UpdateEmailWallet",{email:e})}};Qn.styles=X9;ar([j()],Qn.prototype,"address",void 0);ar([j()],Qn.prototype,"profileImage",void 0);ar([j()],Qn.prototype,"profileName",void 0);ar([j()],Qn.prototype,"network",void 0);ar([j()],Qn.prototype,"disconnecting",void 0);ar([j()],Qn.prototype,"balance",void 0);ar([j()],Qn.prototype,"balanceSymbol",void 0);Qn=ar([V("w3m-account-default-widget")],Qn);const Q9=_e`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * var(--wui-spacing-2l));
  }

  wui-promo + wui-profile-button {
    margin-top: var(--wui-spacing-2l);
  }

  wui-tooltip-select {
    width: 100%;
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,ex={ACCOUNT_TABS:[{label:"Tokens"},{label:"NFTs"},{label:"Activity"}]};var oi=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let pn=class extends ce{constructor(){super(),this.unsubscribe=[],this.address=ne.state.address,this.profileImage=ne.state.profileImage,this.profileName=ne.state.profileName,this.smartAccountDeployed=ne.state.smartAccountDeployed,this.network=de.state.caipNetwork,this.currentTab=ne.state.currentTab,this.tokenBalance=ne.state.tokenBalance,this.preferredAccountType=ne.state.preferredAccountType,this.unsubscribe.push(ne.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance,this.smartAccountDeployed=e.smartAccountDeployed,this.preferredAccountType=e.preferredAccountType):Ie.close()}),de.subscribe(e=>{this.network=e.caipNetwork})),this.watchConvertValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}firstUpdated(){ne.fetchTokenBalance()}render(){if(!this.address)throw new Error("w3m-account-view: No account provided");const e=ze.getNetworkImage(this.network);return A`<wui-flex
      flexDirection="column"
      .padding=${["0","xl","m","xl"]}
      alignItems="center"
      gap="m"
    >
      ${this.activateAccountTemplate()}
      <wui-profile-button
        @click=${this.onProfileButtonClick.bind(this)}
        address=${ve(this.address)}
        networkSrc=${ve(e)}
        icon="chevronBottom"
        avatarSrc=${ve(this.profileImage?this.profileImage:void 0)}
        ?isprofilename=${!!this.profileName}
      ></wui-profile-button>
      ${this.tokenBalanceTemplate()}
      <wui-flex gap="s">
        <wui-tooltip-select
          @click=${this.onBuyClick.bind(this)}
          text="Buy"
          icon="card"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onConvertClick.bind(this)}
          text="Convert"
          icon="recycleHorizontal"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onReceiveClick.bind(this)}
          text="Receive"
          icon="arrowBottomCircle"
        ></wui-tooltip-select>
        <wui-tooltip-select
          @click=${this.onSendClick.bind(this)}
          text="Send"
          icon="send"
        ></wui-tooltip-select>
      </wui-flex>

      <wui-tabs
        .onTabChange=${this.onTabChange.bind(this)}
        .activeTab=${this.currentTab}
        localTabWidth="104px"
        .tabs=${ex.ACCOUNT_TABS}
      ></wui-tabs>
      ${this.listContentTemplate()}
    </wui-flex>`}watchConvertValues(){this.watchTokenBalance=setInterval(()=>ne.fetchTokenBalance(),1e4)}listContentTemplate(){return this.currentTab===0?A`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?A`<w3m-account-nfts-widget></w3m-account-nfts-widget>`:this.currentTab===2?A`<w3m-account-activity-widget></w3m-account-activity-widget>`:A`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var e;if(this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>=0){const n=re.calculateBalance(this.tokenBalance),{dollars:i="0",pennies:o="00"}=re.formatTokenBalance(n);return A`<wui-balance dollars=${i} pennies=${o}></wui-balance>`}return A`<wui-balance dollars="0" pennies="00"></wui-balance>`}activateAccountTemplate(){return!de.checkIfSmartAccountEnabled()||this.preferredAccountType!==Gt.ACCOUNT_TYPES.EOA||this.smartAccountDeployed?null:A` <wui-promo
      text=${"Activate your account"}
      @click=${this.onUpdateToSmartAccount.bind(this)}
      data-testid="activate-smart-account-promo"
    ></wui-promo>`}onTabChange(e){ne.setCurrentTab(e)}onProfileButtonClick(){G.push("AccountSettings")}onBuyClick(){G.push("OnRampProviders")}onConvertClick(){G.push("Convert")}onReceiveClick(){G.push("WalletReceive")}onSendClick(){G.push("WalletSend")}onUpdateToSmartAccount(){G.push("UpgradeToSmartAccount")}};pn.styles=Q9;oi([j()],pn.prototype,"watchTokenBalance",void 0);oi([j()],pn.prototype,"address",void 0);oi([j()],pn.prototype,"profileImage",void 0);oi([j()],pn.prototype,"profileName",void 0);oi([j()],pn.prototype,"smartAccountDeployed",void 0);oi([j()],pn.prototype,"network",void 0);oi([j()],pn.prototype,"currentTab",void 0);oi([j()],pn.prototype,"tokenBalance",void 0);oi([j()],pn.prototype,"preferredAccountType",void 0);pn=oi([V("w3m-account-wallet-features-widget")],pn);const tx=_e`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var nx=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let ad=class extends ce{render(){return A`<w3m-activity-list page="account"></w3m-activity-list>`}};ad.styles=tx;ad=nx([V("w3m-account-activity-widget")],ad);const ix=_e`
  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var rx=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let cd=class extends ce{render(){return A`${this.nftTemplate()}`}nftTemplate(){return A` <wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="wallet"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No NFTs yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Transfer from another wallets to get started</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Receive NFTs</wui-link>
    </wui-flex>`}onReceiveClick(){G.push("WalletReceive")}};cd.styles=ix;cd=rx([V("w3m-account-nfts-widget")],cd);const ox=_e`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }
`;var Z1=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let el=class extends ce{constructor(){super(),this.unsubscribe=[],this.tokenBalance=ne.state.tokenBalance,this.unsubscribe.push(ne.subscribe(e=>{this.tokenBalance=e.tokenBalance}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A`${this.tokenTemplate()}`}tokenTemplate(){var e;return this.tokenBalance&&((e=this.tokenBalance)==null?void 0:e.length)>0?A`<wui-flex class="contentContainer" flexDirection="column" gap="xs">
        ${this.tokenItemTemplate()}
      </wui-flex>`:A` <wui-flex flexDirection="column" gap="xs"
      ><wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
      ></wui-list-description
      ><wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Transfer tokens on your wallet"
        icon="arrowBottomCircle"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
      ></wui-list-description
    ></wui-flex>`}tokenItemTemplate(){var e;return(e=this.tokenBalance)==null?void 0:e.map(n=>A`<wui-list-token
          tokenName=${n.name}
          tokenImageUrl=${n.iconUrl}
          tokenAmount=${n.quantity.numeric}
          tokenValue=${n.value}
          tokenCurrency=${n.symbol}
        ></wui-list-token>`)}onReceiveClick(){G.push("WalletReceive")}onBuyClick(){G.push("OnRampProviders")}};el.styles=ox;Z1([j()],el.prototype,"tokenBalance",void 0);el=Z1([V("w3m-account-tokens-widget")],el);const sx=_e`
  :host {
    min-height: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-xxs);
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var so=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};const rc="last-transaction",ax=7;let xi=class extends ce{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.address=ne.state.address,this.transactionsByYear=Tt.state.transactionsByYear,this.loading=Tt.state.loading,this.empty=Tt.state.empty,this.next=Tt.state.next,Tt.clearCursor(),this.unsubscribe.push(ne.subscribe(e=>{e.isConnected&&this.address!==e.address&&(this.address=e.address,Tt.resetTransactions(),Tt.fetchTransactions(e.address))}),Tt.subscribe(e=>{this.transactionsByYear=e.transactionsByYear,this.loading=e.loading,this.empty=e.empty,this.next=e.next}))}firstUpdated(){Tt.fetchTransactions(this.address),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return A` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}templateTransactionsByYear(){const e=Object.keys(this.transactionsByYear).sort().reverse();return e.map((n,i)=>{const o=i===e.length-1,r=parseInt(n,10);return new Array(12).fill(null).map((a,c)=>c).reverse().map(a=>{var d;const c=Bi.getTransactionGroupTitle(r,a),l=(d=this.transactionsByYear[r])==null?void 0:d[a];return l?A`
          <wui-flex flexDirection="column">
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["xs","s","s","s"]}
            >
              <wui-text variant="paragraph-500" color="fg-200">${c}</wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="xs">
              ${this.templateTransactions(l,o)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(e,n){const{date:i,descriptions:o,direction:r,isAllNFT:s,images:a,status:c,transfers:l,type:d}=this.getTransactionListItemProps(e),p=(l==null?void 0:l.length)>1;return(l==null?void 0:l.length)===2&&!s?A`
        <wui-transaction-list-item
          date=${i}
          .direction=${r}
          id=${n&&this.next?rc:""}
          status=${c}
          type=${d}
          .images=${a}
          .descriptions=${o}
        ></wui-transaction-list-item>
      `:p?l.map((b,_)=>{const $=Bi.getTransferDescription(b),I=n&&_===l.length-1;return A` <wui-transaction-list-item
          date=${i}
          direction=${b.direction}
          id=${I&&this.next?rc:""}
          status=${c}
          type=${d}
          .onlyDirectionIcon=${!0}
          .images=${[a[_]]}
          .descriptions=${[$]}
        ></wui-transaction-list-item>`}):A`
      <wui-transaction-list-item
        date=${i}
        .direction=${r}
        id=${n&&this.next?rc:""}
        status=${c}
        type=${d}
        .images=${a}
        .descriptions=${o}
      ></wui-transaction-list-item>
    `}templateTransactions(e,n){return e.map((i,o)=>{const r=n&&o===e.length-1;return A`${this.templateRenderTransaction(i,r)}`})}emptyStateActivity(){return A`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["3xl","xl","3xl","xl"]}
      gap="xl"
    >
      <wui-icon-box
        backgroundColor="glass-005"
        background="gray"
        iconColor="fg-200"
        icon="wallet"
        size="lg"
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="xs">
        <wui-text align="center" variant="paragraph-500" color="fg-100"
          >No Transactions yet</wui-text
        >
        <wui-text align="center" variant="small-500" color="fg-200"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return A`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="l"
    >
      <wui-icon-box
        icon="swapHorizontal"
        size="inherit"
        iconColor="fg-200"
        backgroundColor="fg-200"
        iconSize="lg"
      ></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="xs"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100">No activity yet</wui-text>
        <wui-text variant="small-400" align="center" color="fg-200"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?A`${this.emptyStateAccount()}`:A`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?Array(ax).fill(A` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e=>e):null}onReceiveClick(){G.push("WalletReceive")}createPaginationObserver(){const{projectId:e}=pe.state;this.paginationObserver=new IntersectionObserver(([n])=>{n!=null&&n.isIntersecting&&!this.loading&&(Tt.fetchTransactions(this.address),me.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:this.address,projectId:e,cursor:this.next}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var n,i,o;(n=this.paginationObserver)==null||n.disconnect();const e=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${rc}`);e&&((o=this.paginationObserver)==null||o.observe(e))}getTransactionListItemProps(e){var c,l,d,p,f;const n=Md.formatDate((c=e==null?void 0:e.metadata)==null?void 0:c.minedAt),i=Bi.getTransactionDescriptions(e),o=e==null?void 0:e.transfers,r=(l=e==null?void 0:e.transfers)==null?void 0:l[0],s=!!r&&((d=e==null?void 0:e.transfers)==null?void 0:d.every(b=>!!b.nft_info)),a=Bi.getTransactionImages(o);return{date:n,direction:r==null?void 0:r.direction,descriptions:i,isAllNFT:s,images:a,status:(p=e.metadata)==null?void 0:p.status,transfers:o,type:(f=e.metadata)==null?void 0:f.operationType}}};xi.styles=sx;so([ge()],xi.prototype,"page",void 0);so([j()],xi.prototype,"address",void 0);so([j()],xi.prototype,"transactionsByYear",void 0);so([j()],xi.prototype,"loading",void 0);so([j()],xi.prototype,"empty",void 0);so([j()],xi.prototype,"next",void 0);xi=so([V("w3m-activity-list")],xi);const cx=_e`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;var x0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let _a=class extends ce{render(){return A` <wui-flex
      flexDirection="column"
      gap="4xs"
      .padding=${["xl","s","l","l"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${!this.token&&!0}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      <wui-flex alignItems="center" justifyContent="space-between">
        ${this.sendValueTemplate()}
        <wui-flex alignItems="center" gap="4xs" justifyContent="flex-end">
          ${this.maxAmountTemplate()} ${this.actionTemplate()}
        </wui-flex>
      </wui-flex>
    </wui-flex>`}buttonTemplate(){return this.token?A`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
        >Select token</wui-token-button
      >`:A`<wui-button
      size="md"
      variant="accentBg"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){G.push("WalletSendSelectToken")}sendValueTemplate(){if(this.token&&this.sendTokenAmount){const n=this.token.price*this.sendTokenAmount;return A`<wui-text variant="small-400" color="fg-200">$${n.toFixed(2)}</wui-text>`}return null}maxAmountTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?A` <wui-text variant="small-400" color="error-100">
          ${be.roundNumber(Number(this.token.quantity.numeric),6,5)}
        </wui-text>`:A` <wui-text variant="small-400" color="fg-200">
        ${be.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?this.sendTokenAmount&&this.sendTokenAmount>Number(this.token.quantity.numeric)?A`<wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>`:A`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}onInputChange(e){Ot.setTokenAmount(e.detail)}onMaxClick(){var e;this.token&&Ot.setTokenAmount(Number((e=this.token)==null?void 0:e.quantity.numeric))}onBuyClick(){G.push("OnRampProviders")}};_a.styles=cx;x0([ge({type:Object})],_a.prototype,"token",void 0);x0([ge({type:Number})],_a.prototype,"sendTokenAmount",void 0);_a=x0([V("w3m-input-token")],_a);const lx=_e`
  :host {
    width: 100%;
    height: 100px;
    border-radius: var(--wui-border-radius-s);
    border: 1px solid var(--wui-gray-glass-002);
    background-color: var(--wui-gray-glass-002);
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: var(--wui-gray-glass-005);
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: var(--wui-color-fg-100);
    margin: 0 var(--wui-spacing-xs);
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: var(--w3m-font-family);
    font-size: var(--wui-font-size-medium);
    font-style: normal;
    font-weight: var(--wui-font-weight-light);
    line-height: 130%;
    letter-spacing: var(--wui-letter-spacing-medium);
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var C0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ea=class extends ce{constructor(){super(...arguments),this.inputElementRef=qc(),this.instructionElementRef=qc(),this.instructionHidden=!!this.receiverAddress}firstUpdated(){this.receiverAddress&&(this.instructionHidden=!0),this.checkHidden()}render(){return A` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="4xs"
      .padding=${["2xl","l","xl","l"]}
    >
      <wui-text
        ${Yc(this.instructionElementRef)}
        class="instruction"
        color="fg-300"
        variant="medium-400"
      >
        Type or
        <wui-button
          size="sm"
          variant="shade"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        ?disabled=${!this.instructionHidden}
        ${Yc(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${this.receiverAddress??""}
        autocomplete="off"
      >
${this.receiverAddress??""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",(e=this.inputElementRef.value)==null||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",(e=this.inputElementRef.value)==null||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){!this.receiverAddress&&!this.instructionHidden&&this.focusInput()}onBlur(){!this.receiverAddress&&this.instructionHidden&&this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){const e=await navigator.clipboard.readText();Ot.setReceiverAddress(e)}onInputChange(e){const n=e.target;n.value&&!this.instructionHidden&&this.focusInput(),Ot.setReceiverAddress(n.value)}};Ea.styles=lx;C0([ge()],Ea.prototype,"receiverAddress",void 0);C0([j()],Ea.prototype,"instructionHidden",void 0);Ea=C0([V("w3m-input-address")],Ea);const ux=_e`
  :host {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: var(--wui-border-radius-1xs);
    border-radius: var(--wui-border-radius-s);
    background: var(--wui-gray-glass-002);
    padding: var(--wui-spacing-s) var(--wui-spacing-1xs) var(--wui-spacing-1xs)
      var(--wui-spacing-1xs);
  }

  wui-text {
    padding: 0 var(--wui-spacing-1xs);
  }

  wui-flex {
    margin-top: var(--wui-spacing-1xs);
  }

  .network {
    cursor: pointer;
    transition: background-color var(--wui-ease-out-power-1) var(--wui-duration-lg);
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  .network:hover {
    background-color: var(--wui-gray-glass-005);
  }

  .network:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var _0=function(t,e,n,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,n):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(o<3?s(r):o>3?s(e,n,r):s(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r};let Ta=class extends ce{render(){return A` <wui-text variant="small-400" color="fg-200">Details</wui-text>
      <wui-flex flexDirection="column" gap="xxs">
        <wui-list-content textTitle="Network cost" textValue="$3.20"></wui-list-content>
        <wui-list-content
          textTitle="Address"
          textValue=${be.getTruncateString({string:this.receiverAddress??"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return(e=this.caipNetwork)!=null&&e.name?A` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${ve(ze.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&G.push("Networks",{network:e})}};Ta.styles=ux;_0([ge()],Ta.prototype,"receiverAddress",void 0);_0([ge({type:Object})],Ta.prototype,"caipNetwork",void 0);Ta=_0([V("w3m-wallet-send-details")],Ta);let op=!1;class dx{constructor(e){this.initPromise=void 0,this.setIsConnected=n=>{ne.setIsConnected(n)},this.getIsConnectedState=()=>ne.state.isConnected,this.setCaipAddress=n=>{ne.setCaipAddress(n)},this.setBalance=(n,i)=>{ne.setBalance(n,i)},this.setProfileName=n=>{ne.setProfileName(n)},this.setProfileImage=n=>{ne.setProfileImage(n)},this.resetAccount=()=>{ne.resetAccount()},this.setCaipNetwork=n=>{de.setCaipNetwork(n)},this.getCaipNetwork=()=>de.state.caipNetwork,this.setRequestedCaipNetworks=n=>{de.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>de.getApprovedCaipNetworksData(),this.resetNetwork=()=>{de.resetNetwork()},this.setConnectors=n=>{je.setConnectors(n)},this.addConnector=n=>{je.addConnector(n)},this.getConnectors=()=>je.getConnectors(),this.resetWcConnection=()=>{$e.resetWcConnection()},this.fetchIdentity=n=>Nt.fetchIdentity(n),this.setAddressExplorerUrl=n=>{ne.setAddressExplorerUrl(n)},this.setSmartAccountDeployed=n=>{ne.setSmartAccountDeployed(n)},this.setConnectedWalletInfo=n=>{ne.setConnectedWalletInfo(n)},this.setSmartAccountEnabledNetworks=n=>{de.setSmartAccountEnabledNetworks(n)},this.setPreferredAccountType=n=>{ne.setPreferredAccountType(n)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),Ie.open(e)}async close(){await this.initOrContinue(),Ie.close()}setLoading(e){Ie.setLoading(e)}getThemeMode(){return ht.state.themeMode}getThemeVariables(){return ht.state.themeVariables}setThemeMode(e){ht.setThemeMode(e),zd(ht.state.themeMode)}setThemeVariables(e){ht.setThemeVariables(e),Uf(ht.state.themeVariables)}subscribeTheme(e){return ht.subscribe(e)}getWalletInfo(){return ne.state.connectedWalletInfo}subscribeWalletInfo(e){return ne.subscribeKey("connectedWalletInfo",e)}getState(){return vr.state}subscribeState(e){return vr.subscribe(e)}showErrorMessage(e){Me.showError(e)}showSuccessMessage(e){Me.showSuccess(e)}getEvent(){return{...me.state}}subscribeEvents(e){return me.subscribe(e)}redirect(e){G.push(e)}popTransactionStack(e){G.popTransactionStack(e)}isOpen(){return Ie.state.open}isTransactionStackEmpty(){return G.state.transactionStack.length===0}async initControllers(e){if(de.setClient(e.networkControllerClient),de.setDefaultCaipNetwork(e.defaultChain),pe.setProjectId(e.projectId),pe.setAllWallets(e.allWallets),pe.setIncludeWalletIds(e.includeWalletIds),pe.setExcludeWalletIds(e.excludeWalletIds),pe.setFeaturedWalletIds(e.featuredWalletIds),pe.setTokens(e.tokens),pe.setTermsConditionsUrl(e.termsConditionsUrl),pe.setPrivacyPolicyUrl(e.privacyPolicyUrl),pe.setCustomWallets(e.customWallets),pe.setEnableAnalytics(e.enableAnalytics),pe.setSdkVersion(e._sdkVersion),$e.setClient(e.connectionControllerClient),e.siweControllerClient){const{SIWEController:n}=await ui(()=>import("./index-IVVnfiTN.js"),[]);n.setSIWEClient(e.siweControllerClient)}e.metadata&&pe.setMetadata(e.metadata),e.themeMode&&ht.setThemeMode(e.themeMode),e.themeVariables&&ht.setThemeVariables(e.themeVariables),e.enableOnramp&&pe.setOnrampEnabled(!!e.enableOnramp),e.enableWalletFeatures&&pe.setWalletFeaturesEnabled(!!e.enableWalletFeatures),e.allowUnsupportedChain&&de.setAllowUnsupportedChain(e.allowUnsupportedChain)}async initOrContinue(){return!this.initPromise&&!op&&re.isClient()&&(op=!0,this.initPromise=new Promise(async e=>{await Promise.all([ui(()=>Promise.resolve().then(()=>Kv),void 0),ui(()=>Promise.resolve().then(()=>yy),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),e()})),this.initPromise}}function hx(t){if(t)return{id:`${Ee.EIP155}:${t.id}`,name:t.name,imageId:Ii.EIP155NetworkImageIds[t.id]}}async function px(t){var r,s,a,c;if(!t)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const e=await(t==null?void 0:t.getProvider()),n=(s=(r=e==null?void 0:e.signer)==null?void 0:r.session)==null?void 0:s.namespaces,i=(a=n==null?void 0:n[Ee.EIP155])==null?void 0:a.methods,o=(c=n==null?void 0:n[Ee.EIP155])==null?void 0:c.chains;return{supportsAllNetworks:!!(i!=null&&i.includes(Ee.ADD_CHAIN_METHOD)),approvedCaipNetworkIds:o}}function fx(){return{supportsAllNetworks:!1,approvedCaipNetworkIds:Ii.WalletConnectRpcChainIds.map(t=>`${Ee.EIP155}:${t}`)}}class gx extends dx{constructor(e){const{wagmiConfig:n,siweConfig:i,defaultChain:o,tokens:r,_sdkVersion:s,...a}=e;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");const c={switchCaipNetwork:async d=>{const p=gr.caipNetworkIdToNumber(d==null?void 0:d.id);p&&await bf(this.wagmiConfig,{chainId:p})},getApprovedCaipNetworksData:async()=>new Promise(d=>{var b,_;const f=new Map(n.state.connections).get(n.state.current||"");if(((b=f==null?void 0:f.connector)==null?void 0:b.id)===Ee.EMAIL_CONNECTOR_ID)d(fx());else if(((_=f==null?void 0:f.connector)==null?void 0:_.id)===Ee.WALLET_CONNECT_CONNECTOR_ID){const $=n.connectors.find(I=>I.id===Ee.WALLET_CONNECT_CONNECTOR_ID);d(px($))}d({approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})})},l={connectWalletConnect:async d=>{var _;const p=n.connectors.find($=>$.id===Ee.WALLET_CONNECT_CONNECTOR_ID);if(!p)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");(await p.getProvider()).on("display_uri",$=>{d($)});const b=gr.caipNetworkIdToNumber((_=this.getCaipNetwork())==null?void 0:_.id);await Q0(this.wagmiConfig,{connector:p,chainId:b})},connectExternal:async({id:d,provider:p,info:f})=>{var $,I;const b=n.connectors.find(L=>L.id===d);if(!b)throw new Error("connectionControllerClient:connectExternal - connector is undefined");p&&f&&b.id===Ee.EIP6963_CONNECTOR_ID&&(($=b.setEip6963Wallet)==null||$.call(b,{provider:p,info:f}));const _=gr.caipNetworkIdToNumber((I=this.getCaipNetwork())==null?void 0:I.id);await Q0(this.wagmiConfig,{connector:b,chainId:_})},checkInstalled:d=>{const p=this.getConnectors().find(f=>f.type==="INJECTED");return d?p&&window!=null&&window.ethereum?d.some(f=>{var b;return!!((b=window.ethereum)!=null&&b[String(f)])}):!1:!!window.ethereum},disconnect:async()=>{await pf(this.wagmiConfig)},signMessage:async d=>wf(this.wagmiConfig,{message:d}),estimateGas:async d=>{try{return await Z2(this.wagmiConfig,{account:d.address,to:d.to,data:d.data,type:"legacy"})}catch{return 0n}},sendTransaction:async d=>{const{chainId:p}=ll(this.wagmiConfig),f={account:d.address,to:d.to,value:d.value,gas:d.gas,gasPrice:d.gasPrice,data:d.data,chainId:p,type:"legacy"};await J2(this.wagmiConfig,f);const b=await Q2(this.wagmiConfig,f);return await yf(this.wagmiConfig,{hash:b,timeout:25e3}),b},parseUnits:af,formatUnits:$a};super({networkControllerClient:c,connectionControllerClient:l,siweControllerClient:i,defaultChain:hx(o),tokens:L8.getCaipTokens(r),_sdkVersion:s??`html-wagmi-${Ee.VERSION}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.wagmiConfig=n,this.syncRequestedNetworks([...n.chains]),this.syncConnectors([...n.connectors]),this.initEmailConnectorListeners([...n.connectors]),t3(this.wagmiConfig,{onChange:d=>this.syncConnectors(d)}),vf(this.wagmiConfig,{onChange:d=>this.syncAccount({...d})})}getState(){const e=super.getState();return{...e,selectedNetworkId:gr.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(n=>e({...n,selectedNetworkId:gr.caipNetworkIdToNumber(n.selectedNetworkId)}))}syncRequestedNetworks(e){const n=e==null?void 0:e.map(i=>{var o,r;return{id:`${Ee.EIP155}:${i.id}`,name:i.name,imageId:Ii.EIP155NetworkImageIds[i.id],imageUrl:(r=(o=this.options)==null?void 0:o.chainImages)==null?void 0:r[i.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount({address:e,isConnected:n,chainId:i,connector:o}){if(this.resetAccount(),this.syncNetwork(e,i,n),n&&e&&i){const r=`${Ee.EIP155}:${i}:${e}`;this.setIsConnected(n),this.setCaipAddress(r),await Promise.all([this.syncProfile(e,i),this.syncBalance(e,i),this.syncConnectedWalletInfo(o),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(e,n,i){var r,s,a,c;const o=this.wagmiConfig.chains.find(l=>l.id===n);if(o||n){const l=(o==null?void 0:o.name)??(n==null?void 0:n.toString()),d=Number((o==null?void 0:o.id)??n),p=`${Ee.EIP155}:${d}`;if(this.setCaipNetwork({id:p,name:l,imageId:Ii.EIP155NetworkImageIds[d],imageUrl:(s=(r=this.options)==null?void 0:r.chainImages)==null?void 0:s[d]}),i&&e&&n){const f=`${Ee.EIP155}:${d}:${e}`;if(this.setCaipAddress(f),(c=(a=o==null?void 0:o.blockExplorers)==null?void 0:a.default)!=null&&c.url){const b=`${o.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(b)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&(await this.syncProfile(e,n),await this.syncBalance(e,n))}}}async syncProfile(e,n){try{const{name:i,avatar:o}=await this.fetchIdentity({address:e});this.setProfileName(i),this.setProfileImage(o)}catch{if(n===xf.id){const i=await K2(this.wagmiConfig,{address:e,chainId:n});if(i){this.setProfileName(i);const o=await Y2(this.wagmiConfig,{name:i,chainId:n});o&&this.setProfileImage(o)}}else this.setProfileName(null),this.setProfileImage(null)}}async syncBalance(e,n){var o,r,s;const i=this.wagmiConfig.chains.find(a=>a.id===n);if(i){const a=await mf(this.wagmiConfig,{address:e,chainId:i.id,token:(s=(r=(o=this.options)==null?void 0:o.tokens)==null?void 0:r[i.id])==null?void 0:s.address});this.setBalance(a.formatted,a.symbol);return}this.setBalance(void 0,void 0)}async syncConnectedWalletInfo(e){var n;if(!e)throw Error("syncConnectedWalletInfo - connector is undefined");if(e.id===Ee.WALLET_CONNECT_CONNECTOR_ID&&e.getProvider){const i=await e.getProvider();i.session&&this.setConnectedWalletInfo({...i.session.peer.metadata,name:i.session.peer.metadata.name,icon:(n=i.session.peer.metadata.icons)==null?void 0:n[0]})}else this.setConnectedWalletInfo({name:e.name,icon:e.icon})}syncConnectors(e){const n=new Set,i=e.filter(a=>!n.has(a.id)&&n.add(a.id)),o=[],r=Ee.COINBASE_SDK_CONNECTOR_ID,s=i.find(a=>a.id===Ee.CONNECTOR_RDNS_MAP[Ee.COINBASE_CONNECTOR_ID]);i.forEach(({id:a,name:c,type:l,icon:d})=>{var b,_;s&&a===r||Ee.EMAIL_CONNECTOR_ID===a||o.push({id:a,explorerId:Ii.ConnectorExplorerIds[a],imageUrl:((_=(b=this.options)==null?void 0:b.connectorImages)==null?void 0:_[a])??d,name:Ii.ConnectorNamesMap[a]??c,imageId:Ii.ConnectorImageIds[a],type:Ii.ConnectorTypesMap[l]??"EXTERNAL",info:{rdns:a}})}),this.setConnectors(o),this.syncEmailConnector(i)}async syncEmailConnector(e){const n=e.find(({id:i})=>i===Ee.EMAIL_CONNECTOR_ID);if(n){const i=await n.getProvider();this.addConnector({id:Ee.EMAIL_CONNECTOR_ID,type:"EMAIL",name:"Email",provider:i})}}async initEmailConnectorListeners(e){const n=e.find(({id:i})=>i===Ee.EMAIL_CONNECTOR_ID);n&&(await this.listenEmailConnector(n),await this.listenModal(n))}async listenEmailConnector(e){if(typeof window<"u"&&e){super.setLoading(!0);const n=await e.getProvider(),i=n.getLoginEmailUsed();super.setLoading(i),i&&this.setIsConnected(!1),n.onRpcRequest(o=>{if(Wn.checkIfRequestExists(o))Wn.checkIfRequestIsAllowed(o)||(super.isOpen()?super.isTransactionStackEmpty()||super.redirect("ApproveTransaction"):super.open({view:"ApproveTransaction"}));else{super.open();const r=Wn.getRequestMethod(o);console.error(Gt.RPC_METHOD_NOT_ALLOWED_MESSAGE,{method:r}),setTimeout(()=>{this.showErrorMessage(Gt.RPC_METHOD_NOT_ALLOWED_UI_MESSAGE)},300),n.rejectRpcRequest()}}),n.onRpcResponse(o=>{switch(Wn.getResponseType(o)){case un.RPC_RESPONSE_TYPE_ERROR:{super.isOpen()&&(super.isTransactionStackEmpty()?super.close():super.popTransactionStack(!0));break}case un.RPC_RESPONSE_TYPE_TX:{super.isTransactionStackEmpty()?super.close():super.popTransactionStack();break}}}),n.onNotConnected(()=>{this.getIsConnectedState()||(this.setIsConnected(!1),super.setLoading(!1))}),n.onIsConnected(o=>{this.setIsConnected(!0),this.setSmartAccountDeployed(!!o.smartAccountDeployed),this.setPreferredAccountType(o.preferredAccountType),super.setLoading(!1)}),n.onGetSmartAccountEnabledNetworks(o=>{this.setSmartAccountEnabledNetworks(o)}),n.onSetPreferredAccount(({address:o,type:r})=>{var a;if(!o)return;const s=gr.caipNetworkIdToNumber((a=this.getCaipNetwork())==null?void 0:a.id);this.syncAccount({address:o,chainId:s,isConnected:!0,connector:e}).then(()=>this.setPreferredAccountType(r))})}}async listenModal(e){const n=await e.getProvider();this.subscribeState(i=>{i.open||n.rejectRpcRequest()})}}E0.type="coinbaseWallet";function E0(t){let n,i,o,r,s;return a=>({id:"coinbaseWalletSDK",name:"Coinbase Wallet",type:E0.type,async connect({chainId:c}={}){try{const l=await this.getProvider(),d=(await l.request({method:"eth_requestAccounts"})).map(f=>bn(f));o||(o=this.onAccountsChanged.bind(this),l.on("accountsChanged",o)),r||(r=this.onChainChanged.bind(this),l.on("chainChanged",r)),s||(s=this.onDisconnect.bind(this),l.on("disconnect",s));let p=await this.getChainId();if(c&&p!==c){const f=await this.switchChain({chainId:c}).catch(b=>{if(b.code===ct.code)throw b;return{id:p}});p=(f==null?void 0:f.id)??p}return{accounts:d,chainId:p}}catch(l){throw/(user closed modal|accounts received is empty|user denied account)/i.test(l.message)?new ct(l):l}},async disconnect(){const c=await this.getProvider();o&&(c.removeListener("accountsChanged",o),o=void 0),r&&(c.removeListener("chainChanged",r),r=void 0),s&&(c.removeListener("disconnect",s),s=void 0),c.disconnect(),c.close()},async getAccounts(){return(await(await this.getProvider()).request({method:"eth_accounts"})).map(l=>bn(l))},async getChainId(){const l=await(await this.getProvider()).request({method:"eth_chainId"});return Number(l)},async getProvider(){var c;if(!i){const{default:l}=await ui(()=>import("./index-DoZ0fCqV.js").then($=>$.i),__vite__mapDeps([0,1]));let d;typeof l!="function"&&typeof l.default=="function"?d=l.default:d=l,n=new d({reloadOnDisconnect:!1,...t});const p=(c=n.walletExtension)==null?void 0:c.getChainId(),f=a.chains.find($=>t.chainId?$.id===t.chainId:$.id===p)||a.chains[0],b=t.chainId||(f==null?void 0:f.id),_=t.jsonRpcUrl||(f==null?void 0:f.rpcUrls.default.http[0]);i=n.makeWeb3Provider(_,b)}return i},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({chainId:c}){var f,b;const l=a.chains.find(_=>_.id===c);if(!l)throw new _n(new Co);const d=await this.getProvider(),p=Fe(l.id);try{return await d.request({method:"wallet_switchEthereumChain",params:[{chainId:p}]}),l}catch(_){if(_.code===4902)try{return await d.request({method:"wallet_addEthereumChain",params:[{chainId:p,chainName:l.name,nativeCurrency:l.nativeCurrency,rpcUrls:[((f=l.rpcUrls.default)==null?void 0:f.http[0])??""],blockExplorerUrls:[(b=l.blockExplorers)==null?void 0:b.default.url]}]}),l}catch($){throw new ct($)}throw new _n(_)}},onAccountsChanged(c){c.length===0?this.onDisconnect():a.emitter.emit("change",{accounts:c.map(l=>bn(l))})},onChainChanged(c){const l=Number(c);a.emitter.emit("change",{chainId:l})},async onDisconnect(c){a.emitter.emit("disconnect");const l=await this.getProvider();o&&(l.removeListener("accountsChanged",o),o=void 0),r&&(l.removeListener("chainChanged",r),r=void 0),s&&(l.removeListener("disconnect",s),s=void 0)}})}T0.type="walletConnect";function T0(t){const e=t.isNewChainsStale??!0;let n,i;const o="eip155";return r=>({id:"walletConnect",name:"WalletConnect",type:T0.type,async setup(){const s=await this.getProvider().catch(()=>null);s&&(s.on("connect",this.onConnect.bind(this)),s.on("session_delete",this.onSessionDelete.bind(this)))},async connect({chainId:s,...a}={}){var c,l;try{const d=await this.getProvider();if(!d)throw new fr;d.on("display_uri",this.onDisplayUri);let p=s;if(!p){const $=await((c=r.storage)==null?void 0:c.getItem("state"))??{};r.chains.some(L=>L.id===$.chainId)?p=$.chainId:p=(l=r.chains[0])==null?void 0:l.id}if(!p)throw new Error("No chains found on connector.");const f=await this.isChainsStale();if(d.session&&f&&await d.disconnect(),!d.session||f){const $=r.chains.filter(I=>I.id!==p).map(I=>I.id);await d.connect({optionalChains:[p,...$],..."pairingTopic"in a?{pairingTopic:a.pairingTopic}:{}}),this.setRequestedChainsIds(r.chains.map(I=>I.id))}const b=(await d.enable()).map($=>bn($)),_=await this.getChainId();return d.removeListener("display_uri",this.onDisplayUri),d.removeListener("connect",this.onConnect.bind(this)),d.on("accountsChanged",this.onAccountsChanged.bind(this)),d.on("chainChanged",this.onChainChanged),d.on("disconnect",this.onDisconnect.bind(this)),d.on("session_delete",this.onSessionDelete.bind(this)),{accounts:b,chainId:_}}catch(d){throw/(user rejected|connection request reset)/i.test(d==null?void 0:d.message)?new ct(d):d}},async disconnect(){const s=await this.getProvider();try{await(s==null?void 0:s.disconnect())}catch(a){if(!/No matching key/i.test(a.message))throw a}finally{s==null||s.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),s==null||s.removeListener("chainChanged",this.onChainChanged),s==null||s.removeListener("disconnect",this.onDisconnect.bind(this)),s==null||s.removeListener("session_delete",this.onSessionDelete.bind(this)),s==null||s.on("connect",this.onConnect.bind(this)),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(a=>bn(a))},async getProvider({chainId:s}={}){var c;async function a(){const l=r.chains.map(p=>p.id);if(!l.length)return;const{EthereumProvider:d}=await ui(()=>import("./index.es-0SmgF1UF.js"),__vite__mapDeps([2,1]));return await d.init({...t,disableProviderPing:!0,optionalChains:l,projectId:t.projectId,rpcMap:Object.fromEntries(r.chains.map(p=>[p.id,p.rpcUrls.default.http[0]])),showQrModal:t.showQrModal??!0})}return n||(i||(i=a()),n=await i,n==null||n.events.setMaxListeners(1/0)),s&&await((c=this.switchChain)==null?void 0:c.call(this,{chainId:s})),n},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{const[s,a]=await Promise.all([this.getAccounts(),this.getProvider()]);return s.length?await this.isChainsStale()&&a.session?(await a.disconnect().catch(()=>{}),!1):!0:!1}catch{return!1}},async switchChain({chainId:s}){var c;const a=r.chains.find(l=>l.id===s);if(!a)throw new _n(new Co);try{const l=await this.getProvider(),d=this.getNamespaceChainsIds(),p=this.getNamespaceMethods();if(!d.includes(s)&&p.includes("wallet_addEthereumChain")){await l.request({method:"wallet_addEthereumChain",params:[{chainId:Fe(a.id),blockExplorerUrls:[(c=a.blockExplorers)==null?void 0:c.default.url],chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[...a.rpcUrls.default.http]}]});const b=await this.getRequestedChainsIds();this.setRequestedChainsIds([...b,s])}return await l.request({method:"wallet_switchEthereumChain",params:[{chainId:Fe(s)}]}),a}catch(l){const d=typeof l=="string"?l:l==null?void 0:l.message;throw/user rejected request/i.test(d)?new ct(l):new _n(l)}},onAccountsChanged(s){s.length===0?this.onDisconnect():r.emitter.emit("change",{accounts:s.map(a=>bn(a))})},onChainChanged(s){const a=Number(s);r.emitter.emit("change",{chainId:a})},async onConnect(s){const a=Number(s.chainId),c=await this.getAccounts();r.emitter.emit("connect",{accounts:c,chainId:a})},async onDisconnect(s){this.setRequestedChainsIds([]),r.emitter.emit("disconnect");const a=await this.getProvider();a.removeListener("accountsChanged",this.onAccountsChanged.bind(this)),a.removeListener("chainChanged",this.onChainChanged),a.removeListener("disconnect",this.onDisconnect.bind(this)),a.removeListener("session_delete",this.onSessionDelete.bind(this)),a.on("connect",this.onConnect.bind(this))},onDisplayUri(s){r.emitter.emit("message",{type:"display_uri",data:s})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds(){var a,c,l;return n?((l=(c=(a=n.session)==null?void 0:a.namespaces[o])==null?void 0:c.chains)==null?void 0:l.map(d=>parseInt(d.split(":")[1]||"")))??[]:[]},getNamespaceMethods(){var a,c;return n?((c=(a=n.session)==null?void 0:a.namespaces[o])==null?void 0:c.methods)??[]:[]},async getRequestedChainsIds(){var s;return await((s=r.storage)==null?void 0:s.getItem(this.requestedChainsStorageKey))??[]},async isChainsStale(){if(this.getNamespaceMethods().includes("wallet_addEthereumChain")||!e)return!1;const a=r.chains.map(d=>d.id),c=this.getNamespaceChainsIds();if(c.length&&!c.some(d=>a.includes(d)))return!1;const l=await this.getRequestedChainsIds();return!a.every(d=>l.includes(d))},async setRequestedChainsIds(s){var a;await((a=r.storage)==null?void 0:a.setItem(this.requestedChainsStorageKey,s))},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}})}function mx(t){return new gx({...t,_sdkVersion:`html-wagmi-${Ee.VERSION}`})}const as=6480,uc={648:"https://rpc-endurance-website.fusionist.io",6480:"https://abcdefg-myrpctestnet.ace31415926ace.xyz"},sp={648:"https://explorer-endurance.fusionist.io",6480:"https://abcdefg-myexplorertestnet.ace31415926ace.xyz"},wx="https://rpc-endurance.fusionist.io",bx={648:{id:648,name:"Endurance",nativeCurrency:{decimals:18,name:"ACE",symbol:"ACE"},rpcUrls:{default:{http:[uc[648]]},public:{http:[wx]}},blockExplorers:{default:{name:"Endurance Explore",url:sp[648]}}},6480:{id:6480,name:"Endurance Testnet",nativeCurrency:{decimals:18,name:"ACE",symbol:"ACE"},rpcUrls:{default:{http:[uc[6480]]},public:{http:[uc[6480]]}},blockExplorers:{default:{name:"Endurance Testnet Explore",url:sp[6480]}}}},G1="7ef7824583418b0e3914c981bd833ace",vx="fVGmgzQu3ua3GpHvHuT9BoMIyeT2pGDZ",q1={648:"0xDf6cB34380f7b1D2888825AEd379e34022FC115B",6480:"0xAc1109045200843d743fb41041d793e0aDE43201"},Y1=[{type:"constructor",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bytes32",name:"",internalType:"bytes32"}],name:"DEFAULT_ADMIN_ROLE",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"FeePercent",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bytes32",name:"",internalType:"bytes32"}],name:"PAUSER_ROLE",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bytes32",name:"",internalType:"bytes32"}],name:"SERVER_ROLE",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"address",name:"",internalType:"address payable"}],name:"TreasuryWallet",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"address",name:"",internalType:"address payable"}],name:"TreasuryWallet2",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bytes32",name:"",internalType:"bytes32"}],name:"UPGRADER_ROLE",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"WEI_NP",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"tuple",name:"body",internalType:"struct GacePointBridge.ResponseBody",components:[{type:"address"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint8"},{type:"uint64"}]}],name:"getLatestAnswerContent",inputs:[{type:"address",name:"who",internalType:"address"}]},{type:"function",stateMutability:"view",outputs:[{type:"tuple",name:"body",internalType:"struct GacePointBridge.RequestBody",components:[{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint8"}]}],name:"getLatestAskContent",inputs:[{type:"address",name:"who",internalType:"address"}]},{type:"function",stateMutability:"view",outputs:[{type:"bytes32",name:"",internalType:"bytes32"}],name:"getRoleAdmin",inputs:[{type:"bytes32",name:"role",internalType:"bytes32"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"grantRole",inputs:[{type:"bytes32",name:"role",internalType:"bytes32"},{type:"address",name:"account",internalType:"address"}]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"hasRole",inputs:[{type:"bytes32",name:"role",internalType:"bytes32"},{type:"address",name:"account",internalType:"address"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"initialize",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"isRequestComplete",inputs:[{type:"address",name:"who",internalType:"address"}]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"},{type:"tuple",name:"latestRequest",internalType:"struct GacePointBridge.RequestBody",components:[{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint8"}]}],name:"isRequestComplete2",inputs:[{type:"address",name:"who",internalType:"address"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"pause",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"paused",inputs:[]},{type:"function",stateMutability:"view",outputs:[{type:"bytes32",name:"",internalType:"bytes32"}],name:"proxiableUUID",inputs:[]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"renounceRole",inputs:[{type:"bytes32",name:"role",internalType:"bytes32"},{type:"address",name:"account",internalType:"address"}]},{type:"function",stateMutability:"payable",outputs:[],name:"request",inputs:[{type:"tuple",name:"content",internalType:"struct GacePointBridge.RequestBody",components:[{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint8"}]}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"response",inputs:[{type:"tuple",name:"content",internalType:"struct GacePointBridge.ResponseBody",components:[{type:"address"},{type:"uint256"},{type:"uint256"},{type:"uint256"},{type:"uint8"},{type:"uint64"}]}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"revokeRole",inputs:[{type:"bytes32",name:"role",internalType:"bytes32"},{type:"address",name:"account",internalType:"address"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"setTreasuryWallet",inputs:[{type:"address",name:"wallet",internalType:"address payable"},{type:"address",name:"wallet2",internalType:"address payable"}]},{type:"function",stateMutability:"view",outputs:[{type:"bool",name:"",internalType:"bool"}],name:"supportsInterface",inputs:[{type:"bytes4",name:"interfaceId",internalType:"bytes4"}]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"unpause",inputs:[]},{type:"function",stateMutability:"nonpayable",outputs:[],name:"upgradeTo",inputs:[{type:"address",name:"newImplementation",internalType:"address"}]},{type:"function",stateMutability:"payable",outputs:[],name:"upgradeToAndCall",inputs:[{type:"address",name:"newImplementation",internalType:"address"},{type:"bytes",name:"data",internalType:"bytes"}]},{type:"function",stateMutability:"payable",outputs:[],name:"withdraw",inputs:[{type:"uint256",name:"amount",internalType:"uint256"},{type:"address",name:"to",internalType:"address"}]},{type:"event",name:"AdminChanged",inputs:[{type:"address",name:"previousAdmin",indexed:!1},{type:"address",name:"newAdmin",indexed:!1}],anonymous:!1},{type:"event",name:"BeaconUpgraded",inputs:[{type:"address",name:"beacon",indexed:!0}],anonymous:!1},{type:"event",name:"EReceived",inputs:[{type:"address",name:"from",indexed:!0},{type:"uint256",name:"value",indexed:!1}],anonymous:!1},{type:"event",name:"Initialized",inputs:[{type:"uint8",name:"version",indexed:!1}],anonymous:!1},{type:"event",name:"Paused",inputs:[{type:"address",name:"account",indexed:!1}],anonymous:!1},{type:"event",name:"RequestSucc",inputs:[{type:"address",name:"who",indexed:!0},{type:"uint256",name:"nonce",indexed:!1}],anonymous:!1},{type:"event",name:"ResponseFail",inputs:[{type:"address",name:"who",indexed:!0},{type:"uint256",name:"nonce",indexed:!1}],anonymous:!1},{type:"event",name:"ResponseSucc",inputs:[{type:"address",name:"who",indexed:!0},{type:"uint256",name:"nonce",indexed:!1}],anonymous:!1},{type:"event",name:"RoleAdminChanged",inputs:[{type:"bytes32",name:"role",indexed:!0},{type:"bytes32",name:"previousAdminRole",indexed:!0},{type:"bytes32",name:"newAdminRole",indexed:!0}],anonymous:!1},{type:"event",name:"RoleGranted",inputs:[{type:"bytes32",name:"role",indexed:!0},{type:"address",name:"account",indexed:!0},{type:"address",name:"sender",indexed:!0}],anonymous:!1},{type:"event",name:"RoleRevoked",inputs:[{type:"bytes32",name:"role",indexed:!0},{type:"address",name:"account",indexed:!0},{type:"address",name:"sender",indexed:!0}],anonymous:!1},{type:"event",name:"Unpaused",inputs:[{type:"address",name:"account",indexed:!1}],anonymous:!1},{type:"event",name:"Upgraded",inputs:[{type:"address",name:"implementation",indexed:!0}],anonymous:!1},{type:"error",name:"ShouldBeAHuman",inputs:[]},{type:"error",name:"ShouldBeAbleToReceiveACE",inputs:[]},{type:"error",name:"ShouldBeZero",inputs:[]},{type:"error",name:"ShouldCompleteOldNonce",inputs:[]},{type:"error",name:"ShouldExplicitFuncName",inputs:[]},{type:"error",name:"ShouldIncrementNonce",inputs:[]},{type:"error",name:"ShouldMatchAmount",inputs:[]},{type:"error",name:"ShouldMatchApiName",inputs:[]},{type:"error",name:"ShouldMatchRequestNonce",inputs:[]},{type:"error",name:"ShouldNotZeroAddress",inputs:[]},{type:"error",name:"ShouldRightPayAmount",inputs:[]},{type:"error",name:"ShouldSyncTimeStamp",inputs:[]},{type:"receive"}],yu={name:"Endurance | The Fusionist's Mainnet with the goal of Engage to Earn",description:"Endurance | The Fusionist's Mainnet with the goal of Engage to Earn",url:"https://ace.fusionist.io",icons:["https://ace.fusionist.io/favicon.ico"]},ld=bx[as];if(!ld)throw new Error("Endurance network config not found");const yx=uc[as],xx=[T0({metadata:yu,showQrModal:!1,projectId:G1}),E0({appName:yu.name,appLogoUrl:yu.icons[0]}),cl({shimDisconnect:!0})],In=V2({chains:[ld],transports:{[xf.id]:q0("https://eth-mainnet.g.alchemy.com/v2/"+vx),[ld.id]:q0(yx)},connectors:xx});X2(In);const K1=mx({wagmiConfig:In,projectId:G1,themeVariables:{"--w3m-z-index":999999},featuredWalletIds:["c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96","8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4","971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709"],allowUnsupportedChain:!0}),Cx=1999999n,_x=f2("1.3");window.Web3Modal=K1;window.disconnect=pf;window.openWallet=function(){K1.open()};window.signMessage=async function(t){let e="";try{e=await wf(In,{message:t})}catch(n){console.error(n)}J1("Return_signMessage",e||"")};window.watchAccount=vf(In,{onChange(t,e){t.address!==(e==null?void 0:e.address)&&J1("JsToUnity_WalletLogin",t.address||"")}});window.getWalletAddress=function(){return ll(In).address};window.getNetworkStatus=async function(){var n;const t=ll(In);let e=0;try{e=await((n=t.connector)==null?void 0:n.getChainId())||0}catch(i){console.error(i)}return!t.address||!e?0:e===as?1:2};window.switchNetwork=async()=>{const t=async n=>n>=20||(await kx(3),await window.getNetworkStatus()===1)?null:t(n+1);let e;try{e=await Promise.race([t(0),new Promise(n=>{bf(In,{chainId:as}).then(()=>{n(null)}).catch(i=>{n(i)})})])}catch(n){e=n,console.error(n)}return e};window.fetchBalance=async t=>{let e;try{e=await mf(In,t)}catch(n){e={formatted:""},console.error(n)}return e};window.GacePointBridgeContractWrite=Ex;window.GacePointBridgeContractRead=Tx;async function Ex({account:t,functionName:e,args:n,chainId:i,value:o}){let r="",s="";try{const a=await n3(In,{address:q1[as]||"",abi:Y1,functionName:e,args:n,gas:Cx,gasPrice:_x,account:t,chainId:i,value:o||0n}),{transactionHash:c}=await yf(In,{hash:a});r=c}catch(a){s=a.message}return{hash:r,error:s}}async function Tx({functionName:t,args:e,chainId:n}){let i,o="";try{i=await gf(In,{address:q1[as]||"",abi:Y1,functionName:t,args:e,chainId:n})}catch(r){o=r.message}return{data:i,error:o}}function J1(t,e){try{console.log("send",t,e),window.myGameInstance.SendMessage("WebglSDK",t,e)}catch(n){console.log("send error",n)}}function kx(t){return new Promise(e=>{setTimeout(()=>{e()},t*1e3)})}export{ne as A,te as B,$e as C,me as E,bs as H,$s as I,Ie as M,gr as N,pe as O,Dd as R,ut as S,ui as _,Cf as a,zn as b,Pd as c,fw as d,xr as e,Xg as f,dd as g,Jr as h,Fi as i,tl as j,Ax as k,de as l,en as m,V as n,Me as o,Et as p,G as q,_o as r,qt as s,Oa as t,ud as u,R2 as v,_1 as w};
