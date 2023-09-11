import{_ as rt,a as pe,n as nt,i as me,b as ye,t as st,f as it,r as Re,g as be,s as ot,c as at,d as L,S as ut,R as F,e as ct,p as lt}from"./index-500668ab.js";var ft=function(e){rt(t,e);function t(n,s){var i;return i=e.call(this)||this,i.client=n,i.options=s,i.trackedProps=[],i.selectError=null,i.bindMethods(),i.setOptions(s),i}var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),Ee(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return ee(this.currentQuery,this.options,this.options.refetchOnReconnect)},r.shouldFetchOnWindowFocus=function(){return ee(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(s,i){var o=this.options,a=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(s),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=o.queryKey),this.updateQuery();var d=this.hasListeners();d&&Se(this.currentQuery,a,this.options,o)&&this.executeFetch(),this.updateResult(i),d&&(this.currentQuery!==a||this.options.enabled!==o.enabled||this.options.staleTime!==o.staleTime)&&this.updateStaleTimeout();var c=this.computeRefetchInterval();d&&(this.currentQuery!==a||this.options.enabled!==o.enabled||c!==this.currentRefetchInterval)&&this.updateRefetchInterval(c)},r.getOptimisticResult=function(s){var i=this.client.defaultQueryObserverOptions(s),o=this.client.getQueryCache().build(this.client,i);return this.createResult(o,i)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(s,i){var o=this,a={},d=function(l){o.trackedProps.includes(l)||o.trackedProps.push(l)};return Object.keys(s).forEach(function(c){Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:function(){return d(c),s[c]}})}),(i.useErrorBoundary||i.suspense)&&d("error"),a},r.getNextResult=function(s){var i=this;return new Promise(function(o,a){var d=i.subscribe(function(c){c.isFetching||(d(),c.isError&&(s!=null&&s.throwOnError)?a(c.error):o(c))})})},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(s){return this.fetch(pe({},s,{meta:{refetchPage:s==null?void 0:s.refetchPage}}))},r.fetchOptimistic=function(s){var i=this,o=this.client.defaultQueryObserverOptions(s),a=this.client.getQueryCache().build(this.client,o);return a.fetch().then(function(){return i.createResult(a,o)})},r.fetch=function(s){var i=this;return this.executeFetch(s).then(function(){return i.updateResult(),i.currentResult})},r.executeFetch=function(s){this.updateQuery();var i=this.currentQuery.fetch(this.options,s);return s!=null&&s.throwOnError||(i=i.catch(nt)),i},r.updateStaleTimeout=function(){var s=this;if(this.clearStaleTimeout(),!(me||this.currentResult.isStale||!ye(this.options.staleTime))){var i=st(this.currentResult.dataUpdatedAt,this.options.staleTime),o=i+1;this.staleTimeoutId=setTimeout(function(){s.currentResult.isStale||s.updateResult()},o)}},r.computeRefetchInterval=function(){var s;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(s=this.options.refetchInterval)!=null?s:!1},r.updateRefetchInterval=function(s){var i=this;this.clearRefetchInterval(),this.currentRefetchInterval=s,!(me||this.options.enabled===!1||!ye(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(i.options.refetchIntervalInBackground||it.isFocused())&&i.executeFetch()},this.currentRefetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)},r.clearRefetchInterval=function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)},r.createResult=function(s,i){var o=this.currentQuery,a=this.options,d=this.currentResult,c=this.currentResultState,l=this.currentResultOptions,h=s!==o,R=h?s.state:this.currentQueryInitialState,m=h?this.currentResult:this.previousQueryResult,f=s.state,p=f.dataUpdatedAt,w=f.error,S=f.errorUpdatedAt,A=f.isFetching,b=f.status,j=!1,de=!1,v;if(i.optimisticResults){var he=this.hasListeners(),Ye=!he&&Ee(s,i),et=he&&Se(s,o,i,a);(Ye||et)&&(A=!0,p||(b="loading"))}if(i.keepPreviousData&&!f.dataUpdateCount&&(m!=null&&m.isSuccess)&&b!=="error")v=m.data,p=m.dataUpdatedAt,b=m.status,j=!0;else if(i.select&&typeof f.data<"u")if(d&&f.data===(c==null?void 0:c.data)&&i.select===this.selectFn)v=this.selectResult;else try{this.selectFn=i.select,v=i.select(f.data),i.structuralSharing!==!1&&(v=Re(d==null?void 0:d.data,v)),this.selectResult=v,this.selectError=null}catch(I){be().error(I),this.selectError=I}else v=f.data;if(typeof i.placeholderData<"u"&&typeof v>"u"&&(b==="loading"||b==="idle")){var C;if(d!=null&&d.isPlaceholderData&&i.placeholderData===(l==null?void 0:l.placeholderData))C=d.data;else if(C=typeof i.placeholderData=="function"?i.placeholderData():i.placeholderData,i.select&&typeof C<"u")try{C=i.select(C),i.structuralSharing!==!1&&(C=Re(d==null?void 0:d.data,C)),this.selectError=null}catch(I){be().error(I),this.selectError=I}typeof C<"u"&&(b="success",v=C,de=!0)}this.selectError&&(w=this.selectError,v=this.selectResult,S=Date.now(),b="error");var tt={status:b,isLoading:b==="loading",isSuccess:b==="success",isError:b==="error",isIdle:b==="idle",data:v,dataUpdatedAt:p,error:w,errorUpdatedAt:S,failureCount:f.fetchFailureCount,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>R.dataUpdateCount||f.errorUpdateCount>R.errorUpdateCount,isFetching:A,isRefetching:A&&b!=="loading",isLoadingError:b==="error"&&f.dataUpdatedAt===0,isPlaceholderData:de,isPreviousData:j,isRefetchError:b==="error"&&f.dataUpdatedAt!==0,isStale:ie(s,i),refetch:this.refetch,remove:this.remove};return tt},r.shouldNotifyListeners=function(s,i){if(!i)return!0;var o=this.options,a=o.notifyOnChangeProps,d=o.notifyOnChangePropsExclusions;if(!a&&!d||a==="tracked"&&!this.trackedProps.length)return!0;var c=a==="tracked"?this.trackedProps:a;return Object.keys(s).some(function(l){var h=l,R=s[h]!==i[h],m=c==null?void 0:c.some(function(p){return p===l}),f=d==null?void 0:d.some(function(p){return p===l});return R&&!f&&(!c||m)})},r.updateResult=function(s){var i=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!ot(this.currentResult,i)){var o={cache:!0};(s==null?void 0:s.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,i)&&(o.listeners=!0),this.notify(pe({},o,s))}},r.updateQuery=function(){var s=this.client.getQueryCache().build(this.client,this.options);if(s!==this.currentQuery){var i=this.currentQuery;this.currentQuery=s,this.currentQueryInitialState=s.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(i==null||i.removeObserver(this),s.addObserver(this))}},r.onQueryUpdate=function(s){var i={};s.type==="success"?i.onSuccess=!0:s.type==="error"&&!at(s.error)&&(i.onError=!0),this.updateResult(i),this.hasListeners()&&this.updateTimers()},r.notify=function(s){var i=this;L.batch(function(){s.onSuccess?(i.options.onSuccess==null||i.options.onSuccess(i.currentResult.data),i.options.onSettled==null||i.options.onSettled(i.currentResult.data,null)):s.onError&&(i.options.onError==null||i.options.onError(i.currentResult.error),i.options.onSettled==null||i.options.onSettled(void 0,i.currentResult.error)),s.listeners&&i.listeners.forEach(function(o){o(i.currentResult)}),s.cache&&i.client.getQueryCache().notify({query:i.currentQuery,type:"observerResultsUpdated"})})},t}(ut);function dt(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Ee(e,t){return dt(e,t)||e.state.dataUpdatedAt>0&&ee(e,t,t.refetchOnMount)}function ee(e,t,r){if(t.enabled!==!1){var n=typeof r=="function"?r(e):r;return n==="always"||n!==!1&&ie(e,t)}return!1}function Se(e,t,r,n){return r.enabled!==!1&&(e!==t||n.enabled===!1)&&(!r.suspense||e.state.status!=="error")&&ie(e,r)}function ie(e,t){return e.isStaleByTime(t.staleTime)}function ht(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var pt=F.createContext(ht()),mt=function(){return F.useContext(pt)};function yt(e,t,r){return typeof t=="function"?t.apply(void 0,r):typeof t=="boolean"?t:!!e}function Rt(e,t){var r=F.useRef(!1),n=F.useState(0),s=n[1],i=ct(),o=mt(),a=i.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=L.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=L.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=L.batchCalls(a.onSettled)),a.suspense&&(typeof a.staleTime!="number"&&(a.staleTime=1e3),a.cacheTime===0&&(a.cacheTime=1)),(a.suspense||a.useErrorBoundary)&&(o.isReset()||(a.retryOnMount=!1));var d=F.useState(function(){return new t(i,a)}),c=d[0],l=c.getOptimisticResult(a);if(F.useEffect(function(){r.current=!0,o.clearReset();var h=c.subscribe(L.batchCalls(function(){r.current&&s(function(R){return R+1})}));return c.updateResult(),function(){r.current=!1,h()}},[o,c]),F.useEffect(function(){c.setOptions(a,{listeners:!1})},[a,c]),a.suspense&&l.isLoading)throw c.fetchOptimistic(a).then(function(h){var R=h.data;a.onSuccess==null||a.onSuccess(R),a.onSettled==null||a.onSettled(R,null)}).catch(function(h){o.clearReset(),a.onError==null||a.onError(h),a.onSettled==null||a.onSettled(void 0,h)});if(l.isError&&!o.isReset()&&!l.isFetching&&yt(a.suspense,a.useErrorBoundary,[l.error,c.getCurrentQuery()]))throw l.error;return a.notifyOnChangeProps==="tracked"&&(l=c.trackResult(l,a)),l}function Ir(e,t,r){var n=lt(e,t,r);return Rt(n,ft)}function Ne(e,t){return function(){return e.apply(t,arguments)}}const{toString:bt}=Object.prototype,{getPrototypeOf:oe}=Object,z=(e=>t=>{const r=bt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>z(t)===e),J=e=>t=>typeof t===e,{isArray:U}=Array,B=J("undefined");function Et(e){return e!==null&&!B(e)&&e.constructor!==null&&!B(e.constructor)&&O(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ue=T("ArrayBuffer");function St(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ue(e.buffer),t}const wt=J("string"),O=J("function"),Ie=J("number"),V=e=>e!==null&&typeof e=="object",Ot=e=>e===!0||e===!1,Q=e=>{if(z(e)!=="object")return!1;const t=oe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},vt=T("Date"),gt=T("File"),At=T("Blob"),Tt=T("FileList"),Ct=e=>V(e)&&O(e.pipe),Pt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||O(e.append)&&((t=z(e))==="formdata"||t==="object"&&O(e.toString)&&e.toString()==="[object FormData]"))},xt=T("URLSearchParams"),Ft=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),U(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(n=0;n<o;n++)a=i[n],t.call(null,e[a],a,e)}}function _e(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const Le=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Be=e=>!B(e)&&e!==Le;function te(){const{caseless:e}=Be(this)&&this||{},t={},r=(n,s)=>{const i=e&&_e(t,s)||s;Q(t[i])&&Q(n)?t[i]=te(t[i],n):Q(n)?t[i]=te({},n):U(n)?t[i]=n.slice():t[i]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&D(arguments[n],r);return t}const Nt=(e,t,r,{allOwnKeys:n}={})=>(D(t,(s,i)=>{r&&O(s)?e[i]=Ne(s,r):e[i]=s},{allOwnKeys:n}),e),Ut=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),It=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},_t=(e,t,r,n)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!n||n(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=r!==!1&&oe(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},Lt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Bt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!Ie(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Dt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oe(Uint8Array)),kt=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},jt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Qt=T("HTMLFormElement"),Mt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),we=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Ht=T("RegExp"),De=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};D(r,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(n[i]=o||s)}),Object.defineProperties(e,n)},qt=e=>{De(e,(t,r)=>{if(O(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(O(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},$t=(e,t)=>{const r={},n=s=>{s.forEach(i=>{r[i]=!0})};return U(e)?n(e):n(String(e).split(t)),r},zt=()=>{},Jt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),G="abcdefghijklmnopqrstuvwxyz",Oe="0123456789",ke={DIGIT:Oe,ALPHA:G,ALPHA_DIGIT:G+G.toUpperCase()+Oe},Vt=(e=16,t=ke.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Wt(e){return!!(e&&O(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kt=e=>{const t=new Array(10),r=(n,s)=>{if(V(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const i=U(n)?[]:{};return D(n,(o,a)=>{const d=r(o,s+1);!B(d)&&(i[a]=d)}),t[s]=void 0,i}}return n};return r(e,0)},Gt=T("AsyncFunction"),Xt=e=>e&&(V(e)||O(e))&&O(e.then)&&O(e.catch),u={isArray:U,isArrayBuffer:Ue,isBuffer:Et,isFormData:Pt,isArrayBufferView:St,isString:wt,isNumber:Ie,isBoolean:Ot,isObject:V,isPlainObject:Q,isUndefined:B,isDate:vt,isFile:gt,isBlob:At,isRegExp:Ht,isFunction:O,isStream:Ct,isURLSearchParams:xt,isTypedArray:Dt,isFileList:Tt,forEach:D,merge:te,extend:Nt,trim:Ft,stripBOM:Ut,inherits:It,toFlatObject:_t,kindOf:z,kindOfTest:T,endsWith:Lt,toArray:Bt,forEachEntry:kt,matchAll:jt,isHTMLForm:Qt,hasOwnProperty:we,hasOwnProp:we,reduceDescriptors:De,freezeMethods:qt,toObjectSet:$t,toCamelCase:Mt,noop:zt,toFiniteNumber:Jt,findKey:_e,global:Le,isContextDefined:Be,ALPHABET:ke,generateString:Vt,isSpecCompliantForm:Wt,toJSONObject:Kt,isAsyncFn:Gt,isThenable:Xt};function y(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}u.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:u.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const je=y.prototype,Qe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Qe[e]={value:e}});Object.defineProperties(y,Qe);Object.defineProperty(je,"isAxiosError",{value:!0});y.from=(e,t,r,n,s,i)=>{const o=Object.create(je);return u.toFlatObject(e,o,function(d){return d!==Error.prototype},a=>a!=="isAxiosError"),y.call(o,e.message,t,r,n,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Zt=null;function re(e){return u.isPlainObject(e)||u.isArray(e)}function Me(e){return u.endsWith(e,"[]")?e.slice(0,-2):e}function ve(e,t,r){return e?e.concat(t).map(function(s,i){return s=Me(s),!r&&i?"["+s+"]":s}).join(r?".":""):t}function Yt(e){return u.isArray(e)&&!e.some(re)}const er=u.toFlatObject(u,{},null,function(t){return/^is[A-Z]/.test(t)});function W(e,t,r){if(!u.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=u.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,w){return!u.isUndefined(w[p])});const n=r.metaTokens,s=r.visitor||l,i=r.dots,o=r.indexes,d=(r.Blob||typeof Blob<"u"&&Blob)&&u.isSpecCompliantForm(t);if(!u.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(u.isDate(f))return f.toISOString();if(!d&&u.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return u.isArrayBuffer(f)||u.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,p,w){let S=f;if(f&&!w&&typeof f=="object"){if(u.endsWith(p,"{}"))p=n?p:p.slice(0,-2),f=JSON.stringify(f);else if(u.isArray(f)&&Yt(f)||(u.isFileList(f)||u.endsWith(p,"[]"))&&(S=u.toArray(f)))return p=Me(p),S.forEach(function(b,j){!(u.isUndefined(b)||b===null)&&t.append(o===!0?ve([p],j,i):o===null?p:p+"[]",c(b))}),!1}return re(f)?!0:(t.append(ve(w,p,i),c(f)),!1)}const h=[],R=Object.assign(er,{defaultVisitor:l,convertValue:c,isVisitable:re});function m(f,p){if(!u.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(f),u.forEach(f,function(S,A){(!(u.isUndefined(S)||S===null)&&s.call(t,S,u.isString(A)?A.trim():A,p,R))===!0&&m(S,p?p.concat(A):[A])}),h.pop()}}if(!u.isObject(e))throw new TypeError("data must be an object");return m(e),t}function ge(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function ae(e,t){this._pairs=[],e&&W(e,this,t)}const He=ae.prototype;He.append=function(t,r){this._pairs.push([t,r])};He.toString=function(t){const r=t?function(n){return t.call(this,n,ge)}:ge;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function tr(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qe(e,t,r){if(!t)return e;const n=r&&r.encode||tr,s=r&&r.serialize;let i;if(s?i=s(t,r):i=u.isURLSearchParams(t)?t.toString():new ae(t,r).toString(n),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class rr{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){u.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ae=rr,$e={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},nr=typeof URLSearchParams<"u"?URLSearchParams:ae,sr=typeof FormData<"u"?FormData:null,ir=typeof Blob<"u"?Blob:null,or=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),ar=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),g={isBrowser:!0,classes:{URLSearchParams:nr,FormData:sr,Blob:ir},isStandardBrowserEnv:or,isStandardBrowserWebWorkerEnv:ar,protocols:["http","https","file","blob","url","data"]};function ur(e,t){return W(e,new g.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,i){return g.isNode&&u.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function cr(e){return u.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function lr(e){const t={},r=Object.keys(e);let n;const s=r.length;let i;for(n=0;n<s;n++)i=r[n],t[i]=e[i];return t}function ze(e){function t(r,n,s,i){let o=r[i++];const a=Number.isFinite(+o),d=i>=r.length;return o=!o&&u.isArray(s)?s.length:o,d?(u.hasOwnProp(s,o)?s[o]=[s[o],n]:s[o]=n,!a):((!s[o]||!u.isObject(s[o]))&&(s[o]=[]),t(r,n,s[o],i)&&u.isArray(s[o])&&(s[o]=lr(s[o])),!a)}if(u.isFormData(e)&&u.isFunction(e.entries)){const r={};return u.forEachEntry(e,(n,s)=>{t(cr(n),s,r,0)}),r}return null}function fr(e,t,r){if(u.isString(e))try{return(t||JSON.parse)(e),u.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ue={transitional:$e,adapter:g.isNode?"http":"xhr",transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,i=u.isObject(t);if(i&&u.isHTMLForm(t)&&(t=new FormData(t)),u.isFormData(t))return s&&s?JSON.stringify(ze(t)):t;if(u.isArrayBuffer(t)||u.isBuffer(t)||u.isStream(t)||u.isFile(t)||u.isBlob(t))return t;if(u.isArrayBufferView(t))return t.buffer;if(u.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return ur(t,this.formSerializer).toString();if((a=u.isFileList(t))||n.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return W(a?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(r.setContentType("application/json",!1),fr(t)):t}],transformResponse:[function(t){const r=this.transitional||ue.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&u.isString(t)&&(n&&!this.responseType||s)){const o=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?y.from(a,y.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:g.classes.FormData,Blob:g.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};u.forEach(["delete","get","head","post","put","patch"],e=>{ue.headers[e]={}});const ce=ue,dr=u.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hr=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),r=o.substring(0,s).trim().toLowerCase(),n=o.substring(s+1).trim(),!(!r||t[r]&&dr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Te=Symbol("internals");function _(e){return e&&String(e).trim().toLowerCase()}function M(e){return e===!1||e==null?e:u.isArray(e)?e.map(M):String(e)}function pr(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const mr=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function X(e,t,r,n,s){if(u.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!u.isString(t)){if(u.isString(n))return t.indexOf(n)!==-1;if(u.isRegExp(n))return n.test(t)}}function yr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Rr(e,t){const r=u.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,i,o){return this[n].call(this,t,s,i,o)},configurable:!0})})}class K{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function i(a,d,c){const l=_(d);if(!l)throw new Error("header name must be a non-empty string");const h=u.findKey(s,l);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||d]=M(a))}const o=(a,d)=>u.forEach(a,(c,l)=>i(c,l,d));return u.isPlainObject(t)||t instanceof this.constructor?o(t,r):u.isString(t)&&(t=t.trim())&&!mr(t)?o(hr(t),r):t!=null&&i(r,t,n),this}get(t,r){if(t=_(t),t){const n=u.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return pr(s);if(u.isFunction(r))return r.call(this,s,n);if(u.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=_(t),t){const n=u.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||X(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function i(o){if(o=_(o),o){const a=u.findKey(n,o);a&&(!r||X(n,n[a],a,r))&&(delete n[a],s=!0)}}return u.isArray(t)?t.forEach(i):i(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const i=r[n];(!t||X(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const r=this,n={};return u.forEach(this,(s,i)=>{const o=u.findKey(n,i);if(o){r[o]=M(s),delete r[i];return}const a=t?yr(i):String(i).trim();a!==i&&delete r[i],r[a]=M(s),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return u.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&u.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Te]=this[Te]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=_(o);n[a]||(Rr(s,o),n[a]=!0)}return u.isArray(t)?t.forEach(i):i(t),this}}K.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);u.reduceDescriptors(K.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});u.freezeMethods(K);const P=K;function Z(e,t){const r=this||ce,n=t||r,s=P.from(n.headers);let i=n.data;return u.forEach(e,function(a){i=a.call(r,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Je(e){return!!(e&&e.__CANCEL__)}function k(e,t,r){y.call(this,e??"canceled",y.ERR_CANCELED,t,r),this.name="CanceledError"}u.inherits(k,y,{__CANCEL__:!0});function br(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new y("Request failed with status code "+r.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const Er=g.isStandardBrowserEnv?function(){return{write:function(r,n,s,i,o,a){const d=[];d.push(r+"="+encodeURIComponent(n)),u.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),u.isString(i)&&d.push("path="+i),u.isString(o)&&d.push("domain="+o),a===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Sr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wr(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ve(e,t){return e&&!Sr(t)?wr(e,t):t}const Or=g.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(i){let o=i;return t&&(r.setAttribute("href",o),o=r.href),r.setAttribute("href",o),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(o){const a=u.isString(o)?s(o):o;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function vr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function gr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=n[i];o||(o=c),r[s]=d,n[s]=c;let h=i,R=0;for(;h!==s;)R+=r[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const m=l&&c-l;return m?Math.round(R*1e3/m):void 0}}function Ce(e,t){let r=0;const n=gr(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-r,d=n(a),c=i<=o;r=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:d||void 0,estimated:d&&o&&c?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Ar=typeof XMLHttpRequest<"u",Tr=Ar&&function(e){return new Promise(function(r,n){let s=e.data;const i=P.from(e.headers).normalize(),o=e.responseType;let a;function d(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}u.isFormData(s)&&(g.isStandardBrowserEnv||g.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const m=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(m+":"+f))}const l=Ve(e.baseURL,e.url);c.open(e.method.toUpperCase(),qe(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const m=P.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};br(function(S){r(S),d()},function(S){n(S),d()},p),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(n(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||$e;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),n(new y(f,p.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},g.isStandardBrowserEnv){const m=(e.withCredentials||Or(l))&&e.xsrfCookieName&&Er.read(e.xsrfCookieName);m&&i.set(e.xsrfHeaderName,m)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&u.forEach(i.toJSON(),function(f,p){c.setRequestHeader(p,f)}),u.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Ce(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ce(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=m=>{c&&(n(!m||m.type?new k(null,e,c):m),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const R=vr(l);if(R&&g.protocols.indexOf(R)===-1){n(new y("Unsupported protocol "+R+":",y.ERR_BAD_REQUEST,e));return}c.send(s||null)})},H={http:Zt,xhr:Tr};u.forEach(H,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const We={getAdapter:e=>{e=u.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let s=0;s<t&&(r=e[s],!(n=u.isString(r)?H[r.toLowerCase()]:r));s++);if(!n)throw n===!1?new y(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(u.hasOwnProp(H,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!u.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:H};function Y(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new k(null,e)}function Pe(e){return Y(e),e.headers=P.from(e.headers),e.data=Z.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),We.getAdapter(e.adapter||ce.adapter)(e).then(function(n){return Y(e),n.data=Z.call(e,e.transformResponse,n),n.headers=P.from(n.headers),n},function(n){return Je(n)||(Y(e),n&&n.response&&(n.response.data=Z.call(e,e.transformResponse,n.response),n.response.headers=P.from(n.response.headers))),Promise.reject(n)})}const xe=e=>e instanceof P?e.toJSON():e;function N(e,t){t=t||{};const r={};function n(c,l,h){return u.isPlainObject(c)&&u.isPlainObject(l)?u.merge.call({caseless:h},c,l):u.isPlainObject(l)?u.merge({},l):u.isArray(l)?l.slice():l}function s(c,l,h){if(u.isUndefined(l)){if(!u.isUndefined(c))return n(void 0,c,h)}else return n(c,l,h)}function i(c,l){if(!u.isUndefined(l))return n(void 0,l)}function o(c,l){if(u.isUndefined(l)){if(!u.isUndefined(c))return n(void 0,c)}else return n(void 0,l)}function a(c,l,h){if(h in t)return n(c,l);if(h in e)return n(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,l)=>s(xe(c),xe(l),!0)};return u.forEach(Object.keys(Object.assign({},e,t)),function(l){const h=d[l]||s,R=h(e[l],t[l],l);u.isUndefined(R)&&h!==a||(r[l]=R)}),r}const Ke="1.5.0",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Fe={};le.transitional=function(t,r,n){function s(i,o){return"[Axios v"+Ke+"] Transitional option '"+i+"'"+o+(n?". "+n:"")}return(i,o,a)=>{if(t===!1)throw new y(s(o," has been removed"+(r?" in "+r:"")),y.ERR_DEPRECATED);return r&&!Fe[o]&&(Fe[o]=!0,console.warn(s(o," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,o,a):!0}};function Cr(e,t,r){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const i=n[s],o=t[i];if(o){const a=e[i],d=a===void 0||o(a,i,e);if(d!==!0)throw new y("option "+i+" must be "+d,y.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new y("Unknown option "+i,y.ERR_BAD_OPTION)}}const ne={assertOptions:Cr,validators:le},x=ne.validators;class ${constructor(t){this.defaults=t,this.interceptors={request:new Ae,response:new Ae}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=N(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:i}=r;n!==void 0&&ne.assertOptions(n,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1),s!=null&&(u.isFunction(s)?r.paramsSerializer={serialize:s}:ne.assertOptions(s,{encode:x.function,serialize:x.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let o=i&&u.merge(i.common,i[r.method]);i&&u.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),r.headers=P.concat(o,i);const a=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(r)===!1||(d=d&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let l,h=0,R;if(!d){const f=[Pe.bind(this),void 0];for(f.unshift.apply(f,a),f.push.apply(f,c),R=f.length,l=Promise.resolve(r);h<R;)l=l.then(f[h++],f[h++]);return l}R=a.length;let m=r;for(h=0;h<R;){const f=a[h++],p=a[h++];try{m=f(m)}catch(w){p.call(this,w);break}}try{l=Pe.call(this,m)}catch(f){return Promise.reject(f)}for(h=0,R=c.length;h<R;)l=l.then(c[h++],c[h++]);return l}getUri(t){t=N(this.defaults,t);const r=Ve(t.baseURL,t.url);return qe(r,t.params,t.paramsSerializer)}}u.forEach(["delete","get","head","options"],function(t){$.prototype[t]=function(r,n){return this.request(N(n||{},{method:t,url:r,data:(n||{}).data}))}});u.forEach(["post","put","patch"],function(t){function r(n){return function(i,o,a){return this.request(N(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}$.prototype[t]=r(),$.prototype[t+"Form"]=r(!0)});const q=$;class fe{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(s=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](s);n._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{n.subscribe(a),i=a}).then(s);return o.cancel=function(){n.unsubscribe(i)},o},t(function(i,o,a){n.reason||(n.reason=new k(i,o,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new fe(function(s){t=s}),cancel:t}}}const Pr=fe;function xr(e){return function(r){return e.apply(null,r)}}function Fr(e){return u.isObject(e)&&e.isAxiosError===!0}const se={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(se).forEach(([e,t])=>{se[t]=e});const Nr=se;function Ge(e){const t=new q(e),r=Ne(q.prototype.request,t);return u.extend(r,q.prototype,t,{allOwnKeys:!0}),u.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return Ge(N(e,s))},r}const E=Ge(ce);E.Axios=q;E.CanceledError=k;E.CancelToken=Pr;E.isCancel=Je;E.VERSION=Ke;E.toFormData=W;E.AxiosError=y;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=xr;E.isAxiosError=Fr;E.mergeConfig=N;E.AxiosHeaders=P;E.formToJSON=e=>ze(u.isHTMLForm(e)?new FormData(e):e);E.getAdapter=We.getAdapter;E.HttpStatusCode=Nr;E.default=E;const Xe=E,Ze="https://swapi.py4e.com/api",_r=async(e,t)=>{t==null&&(t=1);try{const r=await Xe.get(`${Ze}/${e}/?page=${t}`);if(!r.data)throw new Error("Пустой ответ от сервера");return r.data}catch(r){throw r}},Lr=async(e,t)=>{try{const r=await Xe.get(`${Ze}/${t}/${e}`);if(!r.data)throw new Error("Пустой ответ от сервера");const n=r.data;return console.log(n),n}catch(r){throw r}};export{Lr as F,_r as a,Ir as u};
