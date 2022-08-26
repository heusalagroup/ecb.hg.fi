#!/usr/bin/env node
"use strict";function L(t,e){var n,i=Object.keys(t);return Object.getOwnPropertySymbols&&(
n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),
i.push.apply(i,n)),i}function f(t){for(var n,e=1;e<arguments.length;e++)n=null!=arguments[e]?arguments[e]:{},e%2?L(
Object(n),!0).forEach(function(e){s(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,
Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(e){Object.defineProperty(t,e,
Object.getOwnPropertyDescriptor(n,e))});return t}function s(e,t,n){t in e?Object.defineProperty(e,t,{value:n,
enumerable:!0,configurable:!0,writable:!0}):e[t]=n}function q(e){return e&&"object"==typeof e&&"default"in e?e:{
default:e}}function F(n){var i;return n&&n.__esModule?n:(i=Object.create(null),n&&Object.keys(n).forEach(function(e){
var t;"default"!==e&&(t=Object.getOwnPropertyDescriptor(n,e),Object.defineProperty(i,e,t.get?t:{enumerable:!0,
get:function(){return n[e]}}))}),i.default=n,Object.freeze(i))}function M(e){var t,n=-1,i=null==e?0:e.length;for(
this.clear();++n<i;)t=e[n],this.set(t[0],t[1])}function U(e){var t,n=-1,i=null==e?0:e.length;for(this.clear();++n<i;
)t=e[n],this.set(t[0],t[1])}function B(e){var t,n=-1,i=null==e?0:e.length;for(this.clear();++n<i;)t=e[n],this.set(t[0],
t[1])}function z(e){e=this.__data__=new bn(e),this.size=e.size}function V(e){var t=-1,n=null==e?0:e.length;for(
this.__data__=new yn;++t<n;)this.add(e[t])}function H(i,o){function a(){var e=arguments,t=o?o.apply(this,e):e[0],
n=a.cache;return n.has(t)?n.get(t):(e=i.apply(this,e),a.cache=n.set(t,e)||n,e)}if(
"function"!=typeof i||null!=o&&"function"!=typeof o)throw new TypeError("Expected a function");return a.cache=new(
H.Cache||Ji),a}function G(e){return void 0===e}function $(e){return jn(e)}function J(e){return G(e)||Ws(e)}function p(e
){return Zs(e)}function W(e){return nr(e)}function K(e,t){return na(e,t)}function Y(e,t){return pa(e,t)}function Q(e,t=p
,n=void 0){var i;return!!(void 0===n||Bt(i=e)&&Y(vr(i),n))&&(i=void 0!==t?t:p,Bt(n=e)&&Y(te(n),i))}function X(...e){
return t=>K(e,e=>e(t))}function Z(e){return Bt(e)}function ee(e){if(void 0!==e&&""!==e)return""+e}function te(e,t=p){
var n;return $(e)?(n=Go(e,(e,t)=>t),ys(n,e=>t(e))):Z(e)?(n=Reflect.ownKeys(e),ys(n,e=>t(e))):[]}function ne(e){if(
!e.startsWith("%{")||!e.endsWith("}"))return ee(e)}function ie(e){if(W(e))switch(e){case o.OPTIONS:return"options";
case o.GET:return"get";case o.POST:return"post";case o.PUT:return"put";case o.DELETE:return"delete";case o.PATCH:
return"patch"}throw new TypeError("Unsupported value for stringifyRequestMethod(): "+e)}function oe(e){return W(e
)&&0<=e&&e<=5}function ae(e){if(oe(e))return e;if(p(e))switch(e=e.toLowerCase()){case"options":return o.OPTIONS;
case"get":return o.GET;case"post":return o.POST;case"put":return o.PUT;case"delete":return o.DELETE;case"patch":
return o.PATCH}throw new TypeError(`Cannot parse value "${e}" as a valid RequestMethod`)}function se(e){if(W(e))switch(e
){case i.Continue:case i.SwitchingProtocols:case i.Processing:case i.CheckPoint:case i.OK:case i.Created:
case i.Accepted:case i.NonAuthoritativeInformation:case i.NoContent:case i.ResetContent:case i.PartialContent:
case i.MultiStatus:case i.AlreadyReported:case i.IMUsed:case i.MultipleChoices:case i.MovedPermanently:case i.Found:
case i.SeeOther:case i.NotModified:case i.TemporaryRedirect:case i.PermanentRedirect:case i.BadRequest:
case i.Unauthorized:case i.PaymentRequired:case i.Forbidden:case i.NotFound:case i.MethodNotAllowed:
case i.NotAcceptable:case i.ProxyAuthenticationRequired:case i.RequestTimeout:case i.Conflict:case i.Gone:
case i.LengthRequired:case i.PreconditionFailed:case i.PayloadTooLarge:case i.URITooLong:case i.UnsupportedMediaType:
case i.RequestedRangeNotSatisfiable:case i.ExpectationFailed:case i.IAmATeapot:case i.UnprocessableEntity:case i.Locked:
case i.FailedDependency:case i.TooEarly:case i.UpgradeRequired:case i.PreconditionRequired:case i.TooManyRequests:
case i.RequestHeaderFieldsTooLarge:case i.UnavailableForLegalReasons:case i.InternalServerError:case i.NotImplemented:
case i.BadGateway:case i.ServiceUnavailable:case i.GatewayTimeout:case i.HttpVersionNotSupported:
case i.VariantAlsoNegotiates:case i.InsufficientStorage:case i.LoopDetected:case i.BandwidthLimitExceeded:
case i.NotExtended:case i.NetworkAuthenticationRequired:return 1}}function re(e){switch(e){case i.Continue:
return"Continue";case i.SwitchingProtocols:return"Switching Protocols";case i.Processing:return"Processing";
case i.CheckPoint:return"Check Point";case i.OK:return"OK";case i.Created:return"Created";case i.Accepted:
return"Accepted";case i.NonAuthoritativeInformation:return"Non-Authoritative Information";case i.NoContent:
return"No Content";case i.ResetContent:return"Reset Content";case i.PartialContent:return"Partial Content";
case i.MultiStatus:return"Multi Status";case i.AlreadyReported:return"Already Reported";case i.IMUsed:return"IM Used";
case i.MultipleChoices:return"Multiple Choices";case i.MovedPermanently:return"Moved Permanently";case i.Found:
return"Found";case i.SeeOther:return"See Other";case i.NotModified:return"Not Modified";case i.TemporaryRedirect:
return"Temporary Redirect";case i.PermanentRedirect:return"Permanent Redirect";case i.BadRequest:return"Bad Request";
case i.Unauthorized:return"Unauthorized";case i.PaymentRequired:return"Payment Required";case i.Forbidden:
return"Forbidden";case i.NotFound:return"Not Found";case i.MethodNotAllowed:return"Method Not Allowed";
case i.NotAcceptable:return"Not Acceptable";case i.ProxyAuthenticationRequired:return"Proxy Authentication Required";
case i.RequestTimeout:return"Request Timeout";case i.Conflict:return"Conflict";case i.Gone:return"Gone";
case i.LengthRequired:return"Length Required";case i.PreconditionFailed:return"Precondition Failed";
case i.PayloadTooLarge:return"Payload Too Large";case i.URITooLong:return"URI Too Long";case i.UnsupportedMediaType:
return"Unsupported Media Type";case i.RequestedRangeNotSatisfiable:return"Requested Range Not Satisfiable";
case i.ExpectationFailed:return"Expectation Failed";case i.IAmATeapot:return"I Am a Teapot";case i.UnprocessableEntity:
return"Unprocessable Entity";case i.Locked:return"Locked";case i.FailedDependency:return"Failed Dependency";
case i.TooEarly:return"Too Early";case i.UpgradeRequired:return"Upgrade Required";case i.PreconditionRequired:
return"Precondition Required";case i.TooManyRequests:return"Too Many Requests";case i.RequestHeaderFieldsTooLarge:
return"Request Header Fields Too Large";case i.UnavailableForLegalReasons:return"Unavailable For Legal Reasons";
case i.InternalServerError:return"Internal Server Error";case i.NotImplemented:return"Not Implemented";
case i.BadGateway:return"Bad Gateway";case i.ServiceUnavailable:return"Service Unavailable";case i.GatewayTimeout:
return"Gateway Timeout";case i.HttpVersionNotSupported:return"Http Version Not Supported";case i.VariantAlsoNegotiates:
return"Variant Also Negotiates";case i.InsufficientStorage:return"Insufficient Storage";case i.LoopDetected:
return"Loop Detected";case i.BandwidthLimitExceeded:return"Bandwidth Limit Exceeded";case i.NotExtended:
return"Not Extended";case i.NetworkAuthenticationRequired:return"Network Authentication Required";default:
return e<400?"HTTP Status":"HTTP Error"}}function ce(e,t=void 0){return new Jd(e,t)}function pe(e){
return e&&e instanceof Jd}function le(){if("undefined"!=typeof window)return window}function ue(e){return A.isObject(e
)&&A.hasPropertyMethods(e)&&$(e.methods)&&Y(e.methods,oe)&&A.hasPropertyPaths(e)&&$(e.paths)&&Y(e.paths,p)}function de(e
){if(W(e))switch(e){case br.JSON:case br.STRING:case br.INTEGER:case br.NUMBER:return!0}return!1}function me(e){
return!!e&&Z(e)&&A.everyPropertyIs(e,e=>p(e)||$(e)&&Y(e,p))}function he(e){return!!e&&(null==e?void 0:e.objectType
)===u.MODEL_ATTRIBUTE&&p(null==e?void 0:e.attributeName)&&de(null==e?void 0:e.valueType)}function fe(e){return!!(t=e)&&(
null==t?void 0:t.objectType)===u.QUERY_PARAM&&p(null==t?void 0:t.queryParam)&&de(null==t?void 0:t.valueType)||!!e&&(
null==e?void 0:e.objectType)===u.REQUEST_BODY&&de(null==e?void 0:e.valueType)||!!(t=e)&&(null==t?void 0:t.objectType
)===u.REQUEST_HEADER&&p(null==t?void 0:t.headerName)&&Ws(null==t?void 0:t.isRequired)&&de(null==t?void 0:t.valueType)&&(
void 0===(null==t?void 0:t.defaultValue)||p(null==t?void 0:t.defaultValue))||!!e&&(null==e?void 0:e.objectType
)===u.REQUEST_HEADER_MAP&&(void 0===(null==e?void 0:e.defaultValues)||me(null==e?void 0:e.defaultValues))||!!(t=e)&&(
null==t?void 0:t.objectType)===u.PATH_VARIABLE&&p(null==t?void 0:t.variableName)&&Ws(null==t?void 0:t.isRequired)&&de(
null==t?void 0:t.valueType)&&(void 0===(null==t?void 0:t.defaultValue)||p(null==t?void 0:t.defaultValue))||!!e&&(
null==e?void 0:e.objectType)===u.PATH_VARIABLE_MAP&&(void 0===(null==e?void 0:e.defaultValues)||!!(
t=null==e?void 0:e.defaultValues)&&Z(t)&&A.everyPropertyIs(t,p))||he(e);var t}function ve(e){return A.isObject(e
)&&A.hasPropertyMappings(e)&&$(e.mappings)&&Y(e.mappings,ue)&&A.hasPropertyParams(e)&&$(e.params)&&Y(e.params,
A.createOrFunction(fe,Ks))}function xe(e){if(!A.isObject(e))return"Value is not object";if(!A.hasPropertyMappings(e)
)return'Property "mappings" did not exist';if(!$(e.mappings))return'Property "mappings" was not an array';if(!Y(
e.mappings,ue))return'Property "mappings" had some elements which were not RequestMappingObject';if(
!A.hasPropertyParams(e))return'Property "params" did not exist';if(!$(e.params)
)return'Property "params" was not an array';const n=A.createOrFunction(fe,Ks);return Y(e.params,n
)?"ok":'Property "params" had some elements which were not RequestParamObject or null: '+ys(Go(e.params,(e,t)=>n(e
)?"":`Item #${t} was not null or RequestParamObject`),e=>!!e).join(", ")}function ge(e){var t;return e&&(
!A.hasProperty__requestMappings(e)||(t=e=e[am],A.isObject(t)&&A.hasPropertyMappings(t)&&$(t.mappings)&&Y(t.mappings,ue
)&&A.hasPropertyControllerProperties(t)&&Z(t.controllerProperties)&&A.everyPropertyIs(t.controllerProperties,ve
)||void om.warn("The internal mapping object was not correct: "+JSON.stringify(e,null,2)+": "+(t=e,A.isObject(t
)?A.hasPropertyMappings(t)?$(t.mappings)?Y(t.mappings,ue)?A.hasPropertyControllerProperties(t)?Z(t.controllerProperties
)?A.everyPropertyIs(t.controllerProperties,ve
)?"ok":'Property "controllerProperties" was not valid: Some properties were not valid: '+A.explainEveryPropertyIs(
t.controllerProperties,ve,xe
):'Property "controllerProperties" was not valid: Property was not object':'Property "controllerProperties" was not valid: Property did not exist':'Property "mappings" was not valid: Some items were not valid':'Property "mappings" was not valid: Was not array':'Property "mappings" was not valid: Did not exist':"not object"
))))}function be(e,t){if(A.hasProperty__requestMappings(e))return f(f({},e[am]),{},{controller:t})}function ye(e,t){
const n=f({},t);v(n,"controller")&&delete n.controller,e[am]=n}function we(e){return p(t=e)||W(t)||Ws(t)||Ks(t)||Ee(e
)||_e(e);var t}function _e(e){return!!Bt(t=e)&&!(t instanceof Date)&&!Ht(t)&&!$(t)&&Q(t,p,void 0)&&Q(e,p,X(we,G));var t}
function Ee(e){return[e,t=void 0,n=void 0,i=void 0]=[e,X(we,G)],!!jn(e)&&(o=null!=(o=null==e?void 0:e.length)?o:0,!(
void 0!==n&&o<n)&&!(void 0!==i&&i<o)&&(void 0===t||Y(e,t)));var t,n,i,o}function Te(e){return e&&e instanceof rm}
function Oe(e){return W(e)}function Re(e,t,n,i){var o,a,s=arguments.length,
r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if(
"object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(a=e.length-1;0<=a;a--
)(o=e[a])&&(r=(s<3?o(r):3<s?o(t,n,r):o(t,n))||r);return 3<s&&r&&Object.defineProperty(t,n,r),r}function Ce(e,t){if(
"object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function Ne(e,t){return{
error:e,code:t}}function Pe(t){return t=t.toLowerCase(),function(e){return Or(e)===t}}function je(e){
return Array.isArray(e)}function Ae(e){return void 0===e}function De(e){return null!==e&&"object"==typeof e}function Ie(
e){return"object"===Or(e)&&(null===(e=Object.getPrototypeOf(e))||e===Object.prototype)}function Se(e){
return"[object Function]"===Tr.call(e)}function ke(e,t){var n,i,o;if(null!=e)if(je(e="object"!=typeof e?[e]:e))for(n=0,
i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e
)}function Le(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(
/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function qe(){this.handlers=[]}function Fe(e,t,n,i,o){Error.call(
this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o)
}function Me(){var o;return Mr||(Mr=1,o=kr,Fr=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(
new o("Request failed with status code "+n.status,[o.ERR_BAD_REQUEST,o.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],
n.config,n.request,n)):e(n)}),Fr}function Ue(){function e(e){t.call(this,null==e?"canceled":e,t.ERR_CANCELED),
this.name="CanceledError"}var t;return Jr||(Jr=1,t=kr,Cr.inherits(e,t,{__CANCEL__:!0}),$r=e),$r}function Be(){
return oc||(oc=1,ic=function(t){function c(e){function s(...o){if(s.enabled){const a=s;var e=Number(new Date),t=e-(r||e)
a.diff=t,a.prev=r,a.curr=e,r=e,o[0]=c.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");let i=0;o[0]=o[0].replace(
/%([a-zA-Z%])/g,(e,t)=>{if("%%"===e)return"%";i++;const n=c.formatters[t];return"function"==typeof n&&(t=o[i],e=n.call(a
,t),o.splice(i,1),i--),e}),c.formatArgs.call(a,o);const n=a.log||c.log;n.apply(a,o)}}let r,t=null,n,i;
return s.namespace=e,s.useColors=c.useColors(),s.color=c.selectColor(e),s.extend=o,s.destroy=c.destroy,
Object.defineProperty(s,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==t?t:(n!==c.namespaces&&(n=c.namespaces,
i=c.enabled(e)),i),set:e=>{t=e}}),"function"==typeof c.init&&c.init(s),s}function o(e,t){const n=c(this.namespace+(
void 0===t?":":t)+e);return n.log=this.log,n}function n(e){return e.toString().substring(2,e.toString().length-2
).replace(/\.\*\?$/,"*")}function a(e,t,n,i){return t=1.5*n<=t,Math.round(e/n)+" "+i+(t?"s":"")}return((c.debug=c
).default=c).coerce=function(e){return e instanceof Error?e.stack||e.message:e},c.disable=function(){var e=[
...c.names.map(n),...c.skips.map(n).map(e=>"-"+e)].join(",");return c.enable(""),e},c.enable=function(e){c.save(e),
c.namespaces=e,c.names=[],c.skips=[];let t;const n=("string"==typeof e?e:"").split(/[\s,]+/);var i=n.length;for(
t=0;t<i;t++)n[t]&&("-"===(e=n[t].replace(/\*/g,".*?"))[0]?c.skips.push(new RegExp("^"+e.slice(1)+"$")):c.names.push(
new RegExp("^"+e+"$")))},c.enabled=function(e){if("*"===e[e.length-1])return!0;let t,n;for(t=0,n=c.skips.length;t<n;t++
)if(c.skips[t].test(e))return!1;for(t=0,n=c.names.length;t<n;t++)if(c.names[t].test(e))return!0;return!1},c.humanize=(
nc||(nc=1,u=7*(l=24*(p=60*(r=60*(s=1e3)))),d=365.25*l,tc=function(e,t){var n,i;if(t=t||{},!("string"==(i=typeof e
)&&0<e.length)){if("number"==i&&isFinite(e))return t.long?(i=e,t=Math.abs(i),l<=t?a(i,t,l,"day"):p<=t?a(i,t,p,"hour"
):r<=t?a(i,t,r,"minute"):s<=t?a(i,t,s,"second"):i+" ms"):(t=e,i=Math.abs(t),l<=i?Math.round(t/l)+"d":p<=i?Math.round(t/p
)+"h":r<=i?Math.round(t/r)+"m":s<=i?Math.round(t/s)+"s":t+"ms");throw new Error(
"val is not a non-empty string or a valid number. val="+JSON.stringify(e))}if(!(100<(i=String(e)).length)&&(
t=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
i)))switch(n=parseFloat(t[1]),(t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*d;
case"weeks":case"week":case"w":return n*u;case"days":case"day":case"d":return n*l;case"hours":case"hour":case"hrs":
case"hr":case"h":return n*p;case"minutes":case"minute":case"mins":case"min":case"m":return n*r;case"seconds":
case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":
case"ms":return n;default:return}}),tc),c.destroy=function(){console.warn(
"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
)},Object.keys(t).forEach(e=>{c[e]=t[e]}),c.names=[],c.skips=[],c.formatters={},c.selectColor=function(t){let n=0;for(
let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e),n|=0;return c.colors[Math.abs(n)%c.colors.length]},c.enable(c.load()),
c;var s,r,p,l,u,d}),ic}function ze(){function r(e,t){a.call(this),this._sanitizeOptions(e),this._options=e,
this._ended=!1,this._ending=!1,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,
this._requestBodyBuffers=[],t&&this.on("response",t);var n=this;this._onNativeResponse=function(e){n._processResponse(e)
},this._performRequest()}function e(n){var a={maxRedirects:21,maxBodyLength:10485760},s={};return Object.keys(n
).forEach(function(e){var o=e+":",t=s[o]=n[e],i=a[e]=Object.create(t);Object.defineProperties(i,{request:{
value:function(t,e,n){if("string"==typeof t){var i=t;try{t=c(new p(i))}catch(e){t=d.parse(i)}
}else t=p&&t instanceof p?c(t):(n=e,e=t,{protocol:o});return"function"==typeof e&&(n=e,e=null),(e=Object.assign({
maxRedirects:a.maxRedirects,maxBodyLength:a.maxBodyLength},t,e)).nativeProtocols=s,m.equal(e.protocol,o,
"protocol mismatch"),h("options",e),new r(e,n)},configurable:!0,enumerable:!0,writable:!0},get:{value:function(e,t,n){
return(e=i.request(e,t,n)).end(),e},configurable:!0,enumerable:!0,writable:!0}})}),a}function n(){}function c(e){var t={
protocol:e.protocol,hostname:e.hostname.startsWith("[")?e.hostname.slice(1,-1):e.hostname,hash:e.hash,search:e.search,
pathname:e.pathname,path:e.pathname+e.search,href:e.href};return""!==e.port&&(t.port=Number(e.port)),t}function l(e,t){
var n,i;for(i in t)e.test(i)&&(n=t[i],delete t[i]);return null==n?void 0:String(n).trim()}function t(e,t){function n(e){
Error.captureStackTrace(this,this.constructor),e?(this.message=t+": "+e.message,this.cause=e):this.message=t}return((
n.prototype=new Error).constructor=n).prototype.name="Error ["+e+"]",n.prototype.code=e,n}function u(e){for(var t of f
)e.removeListener(t,v[t]);e.on("error",n),e.abort()}var d,p,i,o,a,m,h,f,v,x,g,s,b,y;return fc||(fc=1,d=wd.default,
p=d.URL,i=Ed.default,o=Td.default,a=Od.default.Writable,m=Rd.default,hc||(hc=1,mc=function(){if(!y){try{y=(dc||(dc=1,
e=Zr,"undefined"==typeof process||"renderer"===process.type||!0===process.browser||process.__nwjs?e.exports=function(){
var t,n;if(!ac){ac=1;{(n=(t=ec).exports).formatArgs=function(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(
this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+t.exports.humanize(this.diff),this.useColors){
var i="color: "+this.color;e.splice(1,0,i,"color: inherit");let t=0,n=0;e[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(t++,
"%c"===e&&(n=t))}),e.splice(n,0,i)}},n.save=function(e){try{e?n.storage.setItem("debug",e):n.storage.removeItem("debug")
}catch(e){}},n.load=function(){let e;try{e=n.storage.getItem("debug")}catch(e){}
return e=!e&&"undefined"!=typeof process&&"env"in process?process.env.DEBUG:e},n.useColors=function(){return!(
"undefined"==typeof window||!window.process||"renderer"!==window.process.type&&!window.process.__nwjs)||(
"undefined"==typeof navigator||!navigator.userAgent||!navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
)&&(
"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(
window.console.firebug||window.console.exception&&window.console.table
)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/
)&&31<=parseInt(RegExp.$1,10)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase(
).match(/applewebkit\/(\d+)/))},n.storage=function(){try{return localStorage}catch(e){}}(),n.destroy=(()=>{let e=!1;
return()=>{e||(e=!0,console.warn(
"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
))}})(),n.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33",
"#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF",
"#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33",
"#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF",
"#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33",
"#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF",
"#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],n.log=console.debug||console.log||(()=>{}),t.exports=Be()(n
);const e=t.exports.formatters;e.j=function(e){try{return JSON.stringify(e)}catch(e){
return"[UnexpectedJSONParseError]: "+e.message}}}}return ec.exports}():e.exports=function(){var o,a,e;if(!uc){uc=1;{a=(
o=sc).exports;const t=Cd.default,n=Nd.default;a.init=function(t){t.inspectOpts={};var n=Object.keys(a.inspectOpts);for(
let e=0;e<n.length;e++)t.inspectOpts[n[e]]=a.inspectOpts[n[e]]},a.log=function(...e){return process.stderr.write(
n.format(...e)+"\n")},a.formatArgs=function(e){var t,{namespace:n,useColors:i}=this;i?(i=this.color,e[0]=(
t=`  ${i="[3"+(i<8?i:"8;5;"+i)};1m${n} [0m`)+e[0].split("\n").join("\n"+t),e.push(i+"m+"+o.exports.humanize(this.diff
)+"[0m")):e[0]=(a.inspectOpts.hideDate?"":(new Date).toISOString()+" ")+n+" "+e[0]},a.save=function(e){
e?process.env.DEBUG=e:delete process.env.DEBUG},a.load=function(){return process.env.DEBUG},a.useColors=function(){
return"colors"in a.inspectOpts?Boolean(a.inspectOpts.colors):t.isatty(process.stderr.fd)},a.destroy=n.deprecate(()=>{},
"Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
),a.colors=[6,2,3,4,5,1];try{(e=function(){function t(e){return 0!==(e=function(e){var t,n;if(!1===EZ)return 0;if(CZ(
"color=16m")||CZ("color=full")||CZ("color=truecolor"))return 3;if(CZ("color=256"))return 2;if(e&&!e.isTTY&&!0!==EZ
)return 0;if(e=EZ?1:0,"win32"===process.platform)return t=BZ.release().split("."),8<=Number(process.versions.node.split(
".")[0])&&10<=Number(t[0])&&10586<=Number(t[2])?14931<=Number(t[2])?3:2:1;if("CI"in DZ)return["TRAVIS","CIRCLECI",
"APPVEYOR","GITLAB_CI"].some(e=>e in DZ)||"codeship"===DZ.CI_NAME?1:e;if("TEAMCITY_VERSION"in DZ
)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(DZ.TEAMCITY_VERSION)?1:0;if("truecolor"===DZ.COLORTERM)return 3;if(
"TERM_PROGRAM"in DZ)switch(n=parseInt((DZ.TERM_PROGRAM_VERSION||"").split(".")[0],10),DZ.TERM_PROGRAM){case"iTerm.app":
return 3<=n?3:2;case"Apple_Terminal":return 2}return/-256(color)?$/i.test(DZ.TERM
)?2:/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(DZ.TERM)||"COLORTERM"in DZ?1:(DZ.TERM,e)}(e))&&{
level:e,hasBasic:!0,has256:2<=e,has16m:3<=e}}if(!lc){lc=1;const BZ=Pd.default,CZ=(cc||(cc=1,rc=(e,t)=>{t=t||process.argv
var n=e.startsWith("-")?"":1===e.length?"-":"--",n=t.indexOf(n+e),e=t.indexOf("--");return-1!==n&&(-1===e||n<e)}),rc),
DZ=process.env;let e;CZ("no-color")||CZ("no-colors")||CZ("color=false")?e=!1:(CZ("color")||CZ("colors")||CZ("color=true"
)||CZ("color=always"))&&(e=!0),"FORCE_COLOR"in DZ&&(e=0===DZ.FORCE_COLOR.length||0!==parseInt(DZ.FORCE_COLOR,10)),pc={
supportsColor:t,stdout:t(process.stdout),stderr:t(process.stderr)}}return pc}())&&2<=(e.stderr||e).level&&(a.colors=[20,
21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,128,129,134,135,148
,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206
,207,208,209,214,215,220,221])}catch(e){}a.inspectOpts=Object.keys(process.env).filter(e=>/^debug_/i.test(e)).reduce((e,
t)=>{var n=t.substring(6).toLowerCase().replace(/_([a-z])/g,(e,t)=>t.toUpperCase());let i=process.env[t];
return i=!!/^(yes|on|true|enabled)$/i.test(i)||!/^(no|off|false|disabled)$/i.test(i)&&("null"===i?null:Number(i)),e[n]=i
,e},{}),o.exports=Be()(a);const i=o.exports.formatters;i.o=function(e){return this.inspectOpts.colors=this.useColors,
n.inspect(e,this.inspectOpts).split("\n").map(e=>e.trim()).join(" ")},i.O=function(e){
return this.inspectOpts.colors=this.useColors,n.inspect(e,this.inspectOpts)}}}return sc.exports}()),Zr.exports)(
"follow-redirects")}catch(e){}"function"!=typeof y&&(y=function(){})}var e;y.apply(null,arguments)}),h=mc,f=["abort",
"aborted","connect","error","socket","timeout"],v=Object.create(null),f.forEach(function(i){v[i]=function(e,t,n){
this._redirectable.emit(i,e,t,n)}}),x=t("ERR_FR_REDIRECTION_FAILURE","Redirected request failed"),g=t(
"ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded"),s=t("ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
"Request body larger than maxBodyLength limit"),b=t("ERR_STREAM_WRITE_AFTER_END","write after end"),(
r.prototype=Object.create(a.prototype)).abort=function(){u(this._currentRequest),this.emit("abort")},
r.prototype.write=function(e,t,n){if(this._ending)throw new b;if(!("string"==typeof e||"object"==typeof e&&"length"in e)
)throw new TypeError("data should be a string, Buffer or Uint8Array");"function"==typeof t&&(n=t,t=null),
0===e.length?n&&n():this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,
this._requestBodyBuffers.push({data:e,encoding:t}),this._currentRequest.write(e,t,n)):(this.emit("error",new s),
this.abort())},r.prototype.end=function(e,t,n){var i,o;"function"==typeof e?(n=e,e=t=null):"function"==typeof t&&(n=t,
t=null),e?(o=(i=this)._currentRequest,this.write(e,t,function(){i._ended=!0,o.end(null,null,n)}),this._ending=!0):(
this._ended=this._ending=!0,this._currentRequest.end(null,null,n))},r.prototype.setHeader=function(e,t){
this._options.headers[e]=t,this._currentRequest.setHeader(e,t)},r.prototype.removeHeader=function(e){
delete this._options.headers[e],this._currentRequest.removeHeader(e)},r.prototype.setTimeout=function(t,e){function n(e
){e.setTimeout(t),e.removeListener("timeout",e.destroy),e.addListener("timeout",e.destroy)}function i(e){
a._timeout&&clearTimeout(a._timeout),a._timeout=setTimeout(function(){a.emit("timeout"),o()},t),n(e)}function o(){
a._timeout&&(clearTimeout(a._timeout),a._timeout=null),a.removeListener("abort",o),a.removeListener("error",o),
a.removeListener("response",o),e&&a.removeListener("timeout",e),a.socket||a._currentRequest.removeListener("socket",i)}
var a=this;return e&&this.on("timeout",e),this.socket?i(this.socket):this._currentRequest.once("socket",i),this.on(
"socket",n),this.on("abort",o),this.on("error",o),this.on("response",o),this},["flushHeaders","getHeader","setNoDelay",
"setSocketKeepAlive"].forEach(function(n){r.prototype[n]=function(e,t){return this._currentRequest[n](e,t)}}),["aborted"
,"connection","socket"].forEach(function(e){Object.defineProperty(r.prototype,e,{get:function(){
return this._currentRequest[e]}})}),r.prototype._sanitizeOptions=function(e){var t;e.headers||(e.headers={}),e.host&&(
e.hostname||(e.hostname=e.host),delete e.host),!e.pathname&&e.path&&((t=e.path.indexOf("?"))<0?e.pathname=e.path:(
e.pathname=e.path.substring(0,t),e.search=e.path.substring(t)))},r.prototype._performRequest=function(){var e,n,t,i,o,a,
s=this._options.protocol,r=this._options.nativeProtocols[s];if(r){this._options.agents&&(e=s.slice(0,-1),
this._options.agent=this._options.agents[e]),(n=this._currentRequest=r.request(this._options,this._onNativeResponse)
)._redirectable=this;for(t of f)n.on(t,v[t]);this._currentUrl=/^\//.test(this._options.path)?d.format(this._options
):this._currentUrl=this._options.path,this._isRedirect&&(i=0,a=(o=this)._requestBodyBuffers,function e(t){
n===o._currentRequest&&(t?o.emit("error",t):i<a.length?(t=a[i++],n.finished||n.write(t.data,t.encoding,e)
):o._ended&&n.end())}())}else this.emit("error",new TypeError("Unsupported protocol "+s))},
r.prototype._processResponse=function(e){var t,n,i,o,a,s,r,c,p=e.statusCode;if(
this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:p}),!(
s=e.headers.location)||!1===this._options.followRedirects||p<300||400<=p)e.responseUrl=this._currentUrl,
e.redirects=this._redirects,this.emit("response",e),this._requestBodyBuffers=[];else if(u(this._currentRequest),
e.destroy(),++this._redirectCount>this._options.maxRedirects)this.emit("error",new g);else{(
n=this._options.beforeRedirect)&&(t=Object.assign({Host:e.req.getHeader("host")},this._options.headers)),
i=this._options.method,(301!==p&&302!==p||"POST"!==this._options.method)&&(303!==p||/^(?:GET|HEAD)$/.test(
this._options.method))||(this._options.method="GET",this._requestBodyBuffers=[],l(/^content-/i,this._options.headers)),
o=l(/^host$/i,this._options.headers),c=d.parse(this._currentUrl),o=o||c.host,a=/^\w+:/.test(s
)?this._currentUrl:d.format(Object.assign(c,{host:o}));try{r=d.resolve(a,s)}catch(e){return void this.emit("error",
new x(e))}if(h("redirecting to",r),this._isRedirect=!0,s=d.parse(r),Object.assign(this._options,s),(
s.protocol===c.protocol||"https:"===s.protocol)&&(s.host===o||0<(c=(r=s.host).length-o.length-1)&&"."===r[c
]&&r.endsWith(o))||l(/^(?:authorization|cookie)$/i,this._options.headers),"function"==typeof n){s={headers:e.headers,
statusCode:p},c={url:a,method:i,headers:t};try{n(this._options,s,c)}catch(e){return void this.emit("error",e)}
this._sanitizeOptions(this._options)}try{this._performRequest()}catch(e){this.emit("error",new x(e))}}},Xr.exports=e({
http:i,https:o}),Xr.exports.wrap=e),Xr.exports}function Ve(){return xc||(xc=1,vc={version:"0.27.2"}),vc}function He(){
var o;return Tc||(Tc=1,_c||(_c=1,wc=function(e){
var t="function"==typeof setImmediate?setImmediate:"object"==typeof process&&"function"==typeof process.nextTick?process.nextTick:null
t?t(e):setTimeout(e,0)}),o=wc,Ec=function(n){var i=!1;return o(function(){i=!0}),function(e,t){i?n(e,t):o(function(){n(e
,t)})}}),Ec}function Ge(){return Rc||(Rc=1,Oc=function(e){Object.keys(e.jobs).forEach(function(e){
"function"==typeof this.jobs[e]&&this.jobs[e]()}.bind(e)),e.jobs={}}),Oc}function $e(){var r,c;return Nc||(Nc=1,r=He(),
c=Ge(),Cc=function(e,t,n,i){var o,a,s=n.keyedList?n.keyedList[n.index]:n.index;n.jobs[s]=(o=e[e=s],a=function(e,t){
s in n.jobs&&(delete n.jobs[s],e?c(n):n.results[s]=t,i(e,n.results))},2==t.length?t(o,r(a)):t(o,e,r(a)))}),Cc}
function Je(){return jc||(jc=1,Pc=function(n,i){var e=!Array.isArray(n),t={index:0,keyedList:e||i?Object.keys(n):null,
jobs:{},results:e?{}:[],size:(e?Object.keys(n):n).length};return i&&t.keyedList.sort(e?i:function(e,t){return i(n[e],n[t
])}),t}),Pc}function We(){var t,n;return Dc||(Dc=1,t=Ge(),n=He(),Ac=function(e){Object.keys(this.jobs).length&&(
this.index=this.size,t(this),n(e)(null,this.results))}),Ac}function Ke(){function n(e,t){return e<t?-1:t<e?1:0}var r,t,c
return Sc||(Sc=1,r=$e(),t=Je(),c=We(),Ic.exports=function(i,o,e,a){var s=t(i,e);return r(i,o,s,function e(t,n){t?a(t,n
):(s.index++,s.index<(s.keyedList||i).length?r(i,o,s,e):a(null,s.results))}),c.bind(s,a)},Ic.exports.ascending=n,
Ic.exports.descending=function(e,t){return-1*n(e,t)}),Ic.exports}function Ye(e,t){!kc.isUndefined(e)&&kc.isUndefined(e[
"Content-Type"])&&(e["Content-Type"]=t)}function Qe(){return Hc||(Hc=1,Vc=function(e){return!(!e||!e.__CANCEL__)}),Vc}
function Xe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Kc}function Ze(e
){this.defaults=e,this.interceptors={request:new np,response:new np}}function et(){return hp||(hp=1,function(){
mp.defaults={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,
ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",
charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,
tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,
attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,
explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,
attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{
version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,
chunkSize:1e4,emptyTag:"",cdata:!1}}}.call(P)),mp}function tt(){return gp||(gp=1,function(){function t(e){return!!e&&(
"function"==(e=typeof e)||"object"==e)}function n(e){return c(Array.isArray)?Array.isArray(e
):"[object Array]"===Object.prototype.toString.call(e)}var s=[].slice,r={}.hasOwnProperty,c=function(e){
return!!e&&"[object Function]"===Object.prototype.toString.call(e)};xp.assign=function(){var e,t,n,i,o=arguments[0],
a=2<=arguments.length?s.call(arguments,1):[];if(c(Object.assign))Object.assign.apply(null,arguments);else for(e=0,
n=a.length;e<n;e++)if(null!=(i=a[e]))for(t in i)r.call(i,t)&&(o[t]=i[t]);return o},xp.isFunction=c,xp.isObject=t,
xp.isArray=n,xp.isEmpty=function(e){if(n(e))return!e.length;for(var t in e)if(r.call(e,t))return!1;return!0},
xp.isPlainObject=function(e){return t(e)&&(e=Object.getPrototypeOf(e))&&(e=e.constructor
)&&"function"==typeof e&&e instanceof e&&Function.prototype.toString.call(e)===Function.prototype.toString.call(Object)}
,xp.getValue=function(e){return c(e.valueOf)?e.valueOf():e}}.call(P)),xp}function nt(){return yp||(yp=1,function(){
function e(){}bp.exports=(e.prototype.hasFeature=function(e,t){return!0},e.prototype.createDocumentType=function(e,t,n){
throw new Error("This DOM method is not implemented.")},e.prototype.createDocument=function(e,t,n){throw new Error(
"This DOM method is not implemented.")},e.prototype.createHTMLDocument=function(e){throw new Error(
"This DOM method is not implemented.")},e.prototype.getFeature=function(e,t){throw new Error(
"This DOM method is not implemented.")},e)}.call(P)),bp.exports}function O(){return Ap||(Ap=1,function(){jp.exports={
Element:1,Attribute:2,Text:3,CData:4,EntityReference:5,EntityDeclaration:6,ProcessingInstruction:7,Comment:8,Document:9,
DocType:10,DocumentFragment:11,NotationDeclaration:12,Declaration:201,Raw:202,AttributeDeclaration:203,
ElementDeclaration:204,Dummy:205}}.call(P)),jp.exports}function it(){return Ip||(Ip=1,function(){function e(e,t,n){if(
this.parent=e,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),null==t
)throw new Error("Missing attribute name. "+this.debugInfo(t));this.name=this.stringify.name(t),
this.value=this.stringify.attValue(n),this.type=i.Attribute,this.isId=!1,this.schemaTypeInfo=null}var i=O();bt(),
Dp.exports=(Object.defineProperty(e.prototype,"nodeType",{get:function(){return this.type}}),Object.defineProperty(
e.prototype,"ownerElement",{get:function(){return this.parent}}),Object.defineProperty(e.prototype,"textContent",{
get:function(){return this.value},set:function(e){return this.value=e||""}}),Object.defineProperty(e.prototype,
"namespaceURI",{get:function(){return""}}),Object.defineProperty(e.prototype,"prefix",{get:function(){return""}}),
Object.defineProperty(e.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(e.prototype,
"specified",{get:function(){return!0}}),e.prototype.clone=function(){return Object.create(this)},
e.prototype.toString=function(e){return this.options.writer.attribute(this,this.options.writer.filterOptions(e))},
e.prototype.debugInfo=function(e){return null==(e=e||this.name
)?"parent: <"+this.parent.name+">":"attribute: {"+e+"}, parent: <"+this.parent.name+">"},
e.prototype.isEqualNode=function(e){
return e.namespaceURI===this.namespaceURI&&e.prefix===this.prefix&&e.localName===this.localName&&e.value===this.value},e
)}.call(P)),Dp.exports}function ot(){return kp||(kp=1,function(){function e(e){this.nodes=e}Sp.exports=(
Object.defineProperty(e.prototype,"length",{get:function(){return Object.keys(this.nodes).length||0}}),
e.prototype.clone=function(){return this.nodes=null},e.prototype.getNamedItem=function(e){return this.nodes[e]},
e.prototype.setNamedItem=function(e){var t=this.nodes[e.nodeName];return this.nodes[e.nodeName]=e,t||null},
e.prototype.removeNamedItem=function(e){var t=this.nodes[e];return delete this.nodes[e],t||null},
e.prototype.item=function(e){return this.nodes[Object.keys(this.nodes)[e]]||null},e.prototype.getNamedItemNS=function(e,
t){throw new Error("This DOM method is not implemented.")},e.prototype.setNamedItemNS=function(e){throw new Error(
"This DOM method is not implemented.")},e.prototype.removeNamedItemNS=function(e,t){throw new Error(
"This DOM method is not implemented.")},e)}.call(P)),Sp.exports}function at(){return Lp||(Lp=1,function(){
var o={}.hasOwnProperty,e=tt(),a=e.isObject,s=e.isFunction,c=e.getValue,p=bt(),l=O(),u=it(),d=ot();Pp.exports=function(
){function r(e,t,n){var i,o,a,s;if(r.__super__.constructor.call(this,e),null==t)throw new Error(
"Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(t),this.type=l.Element,this.attribs={},(
this.schemaTypeInfo=null)!=n&&this.attribute(n),e.type===l.Document&&(this.isRoot=!0,(this.documentObject=e
).rootObject=this,e.children))for(o=0,a=(s=e.children).length;o<a;o++)if((i=s[o]).type===l.DocType){i.name=this.name;
break}}function e(){this.constructor=n}var t,n=r,i=p;for(t in i)o.call(i,t)&&(n[t]=i[t]);return e.prototype=i.prototype,
n.prototype=new e,n.__super__=i.prototype,Object.defineProperty(r.prototype,"tagName",{get:function(){return this.name}}
),Object.defineProperty(r.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(r.prototype,
"prefix",{get:function(){return""}}),Object.defineProperty(r.prototype,"localName",{get:function(){return this.name}}),
Object.defineProperty(r.prototype,"id",{get:function(){throw new Error(
"This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(r.prototype,"className",{get:function(
){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(r.prototype,
"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),
Object.defineProperty(r.prototype,"attributes",{get:function(){return this.attributeMap&&this.attributeMap.nodes||(
this.attributeMap=new d(this.attribs)),this.attributeMap}}),r.prototype.clone=function(){var e,t,n,i=Object.create(this)
for(t in i.isRoot&&(i.documentObject=null),i.attribs={},n=this.attribs)o.call(n,t)&&(e=n[t],i.attribs[t]=e.clone());
return i.children=[],this.children.forEach(function(e){return((e=e.clone()).parent=i).children.push(e)}),i},
r.prototype.attribute=function(e,t){var n,i;if(null!=e&&(e=c(e)),a(e))for(n in e)o.call(e,n)&&(i=e[n],this.attribute(n,i
));else s(t)&&(t=t.apply()),this.options.keepNullAttributes&&null==t?this.attribs[e]=new u(this,e,""):null!=t&&(
this.attribs[e]=new u(this,e,t));return this},r.prototype.removeAttribute=function(e){var t,n,i;if(null==e
)throw new Error("Missing attribute name. "+this.debugInfo());if(e=c(e),Array.isArray(e))for(n=0,i=e.length;n<i;n++)t=e[
n],delete this.attribs[t];else delete this.attribs[e];return this},r.prototype.toString=function(e){
return this.options.writer.element(this,this.options.writer.filterOptions(e))},r.prototype.att=function(e,t){
return this.attribute(e,t)},r.prototype.a=function(e,t){return this.attribute(e,t)},r.prototype.getAttribute=function(e
){return this.attribs.hasOwnProperty(e)?this.attribs[e].value:null},r.prototype.setAttribute=function(e,t){
throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.getAttributeNode=function(e){
return this.attribs.hasOwnProperty(e)?this.attribs[e]:null},r.prototype.setAttributeNode=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.removeAttributeNode=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.getElementsByTagName=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.getAttributeNS=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.setAttributeNS=function(e,t,n){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.removeAttributeNS=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.getAttributeNodeNS=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.setAttributeNodeNS=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.getElementsByTagNameNS=function(e,t){
throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.hasAttribute=function(e){
return this.attribs.hasOwnProperty(e)},r.prototype.hasAttributeNS=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},r.prototype.setIdAttribute=function(e,t){
return this.attribs.hasOwnProperty(e)?this.attribs[e].isId:t},r.prototype.setIdAttributeNS=function(e,t,n){
throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.setIdAttributeNode=function(e,t){
throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.getElementsByTagName=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.getElementsByTagNameNS=function(e,t
){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.getElementsByClassName=function(e
){throw new Error("This DOM method is not implemented."+this.debugInfo())},r.prototype.isEqualNode=function(e){var t,n,i
if(!r.__super__.isEqualNode.apply(this,arguments).isEqualNode(e))return!1;if(e.namespaceURI!==this.namespaceURI)return!1
if(e.prefix!==this.prefix)return!1;if(e.localName!==this.localName)return!1;if(e.attribs.length!==this.attribs.length
)return!1;for(t=n=0,i=this.attribs.length-1;0<=i?n<=i:i<=n;t=0<=i?++n:--n)if(!this.attribs[t].isEqualNode(e.attribs[t])
)return!1;return!0},r}()}.call(P)),Pp.exports}function st(){return Mp||(Mp=1,function(){var a={}.hasOwnProperty,s=bt();
Fp.exports=function(){function t(e){t.__super__.constructor.call(this,e),this.value=""}function e(){this.constructor=i}
var n,i=t,o=s;for(n in o)a.call(o,n)&&(i[n]=o[n]);return e.prototype=o.prototype,i.prototype=new e,
i.__super__=o.prototype,Object.defineProperty(t.prototype,"data",{get:function(){return this.value},set:function(e){
return this.value=e||""}}),Object.defineProperty(t.prototype,"length",{get:function(){return this.value.length}}),
Object.defineProperty(t.prototype,"textContent",{get:function(){return this.value},set:function(e){
return this.value=e||""}}),t.prototype.clone=function(){return Object.create(this)},t.prototype.substringData=function(e
,t){throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.appendData=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.insertData=function(e,t){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.deleteData=function(e,t){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.replaceData=function(e,t,n){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.isEqualNode=function(e){
return!!t.__super__.isEqualNode.apply(this,arguments).isEqualNode(e)&&e.data===this.data},t}()}.call(P)),Fp.exports}
function rt(){return Up||(Up=1,function(){var a={}.hasOwnProperty,s=O(),r=st();qp.exports=function(){function n(e,t){if(
n.__super__.constructor.call(this,e),null==t)throw new Error("Missing CDATA text. "+this.debugInfo());
this.name="#cdata-section",this.type=s.CData,this.value=this.stringify.cdata(t)}function e(){this.constructor=i}var t,
i=n,o=r;for(t in o)a.call(o,t)&&(i[t]=o[t]);return e.prototype=o.prototype,i.prototype=new e,i.__super__=o.prototype,
n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(e){
return this.options.writer.cdata(this,this.options.writer.filterOptions(e))},n}()}.call(P)),qp.exports}function ct(){
return zp||(zp=1,function(){var a={}.hasOwnProperty,s=O(),r=st();Bp.exports=function(){function n(e,t){if(
n.__super__.constructor.call(this,e),null==t)throw new Error("Missing comment text. "+this.debugInfo());
this.name="#comment",this.type=s.Comment,this.value=this.stringify.comment(t)}function e(){this.constructor=i}var t,i=n,
o=r;for(t in o)a.call(o,t)&&(i[t]=o[t]);return e.prototype=o.prototype,i.prototype=new e,i.__super__=o.prototype,
n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(e){
return this.options.writer.comment(this,this.options.writer.filterOptions(e))},n}()}.call(P)),Bp.exports}function pt(){
return Hp||(Hp=1,function(){var a={}.hasOwnProperty,s=tt().isObject,r=bt(),c=O();Vp.exports=function(){function o(e,t,n,
i){o.__super__.constructor.call(this,e),s(t)&&(t=(e=t).version,n=e.encoding,i=e.standalone),t=t||"1.0",
this.type=c.Declaration,this.version=this.stringify.xmlVersion(t),null!=n&&(this.encoding=this.stringify.xmlEncoding(n))
,null!=i&&(this.standalone=this.stringify.xmlStandalone(i))}function e(){this.constructor=n}var t,n=o,i=r;for(t in i
)a.call(i,t)&&(n[t]=i[t]);return e.prototype=i.prototype,n.prototype=new e,n.__super__=i.prototype,
o.prototype.toString=function(e){return this.options.writer.declaration(this,this.options.writer.filterOptions(e))},o}()
}.call(P)),Vp.exports}function lt(){return Jp||(Jp=1,function(){var o={}.hasOwnProperty,a=bt(),r=O();
$p.exports=function(){function s(e,t,n,i,o,a){if(s.__super__.constructor.call(this,e),null==t)throw new Error(
"Missing DTD element name. "+this.debugInfo());if(null==n)throw new Error("Missing DTD attribute name. "+this.debugInfo(
t));if(!i)throw new Error("Missing DTD attribute type. "+this.debugInfo(t));if(!o)throw new Error(
"Missing DTD attribute default. "+this.debugInfo(t));if(!(o=0!==o.indexOf("#")?"#"+o:o).match(
/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error(
"Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. "+this.debugInfo(t));if(a&&!o.match(
/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT. "+this.debugInfo(t));
this.elementName=this.stringify.name(t),this.type=r.AttributeDeclaration,this.attributeName=this.stringify.name(n),
this.attributeType=this.stringify.dtdAttType(i),a&&(this.defaultValue=this.stringify.dtdAttDefault(a)),
this.defaultValueType=o}function e(){this.constructor=n}var t,n=s,i=a;for(t in i)o.call(i,t)&&(n[t]=i[t]);
return e.prototype=i.prototype,n.prototype=new e,n.__super__=i.prototype,s.prototype.toString=function(e){
return this.options.writer.dtdAttList(this,this.options.writer.filterOptions(e))},s}()}.call(P)),$p.exports}function ut(
){return Kp||(Kp=1,function(){var a={}.hasOwnProperty,s=tt().isObject,r=bt(),c=O();Wp.exports=function(){function o(e,t,
n,i){if(o.__super__.constructor.call(this,e),null==n)throw new Error("Missing DTD entity name. "+this.debugInfo(n));if(
null==i)throw new Error("Missing DTD entity value. "+this.debugInfo(n));if(this.pe=!!t,this.name=this.stringify.name(n),
this.type=c.EntityDeclaration,s(i)){if(!i.pubID&&!i.sysID)throw new Error(
"Public and/or system identifiers are required for an external entity. "+this.debugInfo(n));if(i.pubID&&!i.sysID
)throw new Error("System identifier is required for a public external entity. "+this.debugInfo(n));if(this.internal=!1,
null!=i.pubID&&(this.pubID=this.stringify.dtdPubID(i.pubID)),null!=i.sysID&&(this.sysID=this.stringify.dtdSysID(i.sysID)
),null!=i.nData&&(this.nData=this.stringify.dtdNData(i.nData)),this.pe&&this.nData)throw new Error(
"Notation declaration is not allowed in a parameter entity. "+this.debugInfo(n))
}else this.value=this.stringify.dtdEntityValue(i),this.internal=!0}function e(){this.constructor=n}var t,n=o,i=r;for(
t in i)a.call(i,t)&&(n[t]=i[t]);return e.prototype=i.prototype,n.prototype=new e,n.__super__=i.prototype,
Object.defineProperty(o.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(o.prototype,
"systemId",{get:function(){return this.sysID}}),Object.defineProperty(o.prototype,"notationName",{get:function(){
return this.nData||null}}),Object.defineProperty(o.prototype,"inputEncoding",{get:function(){return null}}),
Object.defineProperty(o.prototype,"xmlEncoding",{get:function(){return null}}),Object.defineProperty(o.prototype,
"xmlVersion",{get:function(){return null}}),o.prototype.toString=function(e){return this.options.writer.dtdEntity(this,
this.options.writer.filterOptions(e))},o}()}.call(P)),Wp.exports}function dt(){return Qp||(Qp=1,function(){
var a={}.hasOwnProperty,s=bt(),r=O();Yp.exports=function(){function i(e,t,n){if(i.__super__.constructor.call(this,e),
null==t)throw new Error("Missing DTD element name. "+this.debugInfo());n=n||"(#PCDATA)",Array.isArray(n)&&(n="("+n.join(
",")+")"),this.name=this.stringify.name(t),this.type=r.ElementDeclaration,this.value=this.stringify.dtdElementValue(n)}
function e(){this.constructor=n}var t,n=i,o=s;for(t in o)a.call(o,t)&&(n[t]=o[t]);return e.prototype=o.prototype,
n.prototype=new e,n.__super__=o.prototype,i.prototype.toString=function(e){return this.options.writer.dtdElement(this,
this.options.writer.filterOptions(e))},i}()}.call(P)),Yp.exports}function mt(){return Zp||(Zp=1,function(){
var a={}.hasOwnProperty,s=bt(),r=O();Xp.exports=function(){function i(e,t,n){if(i.__super__.constructor.call(this,e),
null==t)throw new Error("Missing DTD notation name. "+this.debugInfo(t));if(!n.pubID&&!n.sysID)throw new Error(
"Public or system identifiers are required for an external entity. "+this.debugInfo(t));this.name=this.stringify.name(t)
,this.type=r.NotationDeclaration,null!=n.pubID&&(this.pubID=this.stringify.dtdPubID(n.pubID)),null!=n.sysID&&(
this.sysID=this.stringify.dtdSysID(n.sysID))}function e(){this.constructor=n}var t,n=i,o=s;for(t in o)a.call(o,t)&&(n[t
]=o[t]);return e.prototype=o.prototype,n.prototype=new e,n.__super__=o.prototype,Object.defineProperty(i.prototype,
"publicId",{get:function(){return this.pubID}}),Object.defineProperty(i.prototype,"systemId",{get:function(){
return this.sysID}}),i.prototype.toString=function(e){return this.options.writer.dtdNotation(this,
this.options.writer.filterOptions(e))},i}()}.call(P)),Xp.exports}function ht(){return el||(el=1,function(){
var o={}.hasOwnProperty,c=tt().isObject,a=bt(),p=O(),s=lt(),l=ut(),u=dt(),d=mt(),m=ot();Gp.exports=function(){
function r(e,t,n){var i,o,a,s;if(r.__super__.constructor.call(this,e),this.type=p.DocType,e.children)for(o=0,a=(
s=e.children).length;o<a;o++)if((i=s[o]).type===p.Element){this.name=i.name;break}this.documentObject=e,c(t)&&(t=(e=t
).pubID,n=e.sysID),null==n&&(n=(e=[t,n])[0],t=e[1]),null!=t&&(this.pubID=this.stringify.dtdPubID(t)),null!=n&&(
this.sysID=this.stringify.dtdSysID(n))}function e(){this.constructor=n}var t,n=r,i=a;for(t in i)o.call(i,t)&&(n[t]=i[t])
return e.prototype=i.prototype,n.prototype=new e,n.__super__=i.prototype,Object.defineProperty(r.prototype,"entities",{
get:function(){for(var e,t={},n=this.children,i=0,o=n.length;i<o;i++)(e=n[i]).type!==p.EntityDeclaration||e.pe||(t[
e.name]=e);return new m(t)}}),Object.defineProperty(r.prototype,"notations",{get:function(){for(var e,t={},
n=this.children,i=0,o=n.length;i<o;i++)(e=n[i]).type===p.NotationDeclaration&&(t[e.name]=e);return new m(t)}}),
Object.defineProperty(r.prototype,"publicId",{get:function(){return this.pubID}}),Object.defineProperty(r.prototype,
"systemId",{get:function(){return this.sysID}}),Object.defineProperty(r.prototype,"internalSubset",{get:function(){
throw new Error("This DOM method is not implemented."+this.debugInfo())}}),r.prototype.element=function(e,t){
return e=new u(this,e,t),this.children.push(e),this},r.prototype.attList=function(e,t,n,i,o){return e=new s(this,e,t,n,i
,o),this.children.push(e),this},r.prototype.entity=function(e,t){return e=new l(this,!1,e,t),this.children.push(e),this}
,r.prototype.pEntity=function(e,t){return e=new l(this,!0,e,t),this.children.push(e),this},
r.prototype.notation=function(e,t){return e=new d(this,e,t),this.children.push(e),this},r.prototype.toString=function(e
){return this.options.writer.docType(this,this.options.writer.filterOptions(e))},r.prototype.ele=function(e,t){
return this.element(e,t)},r.prototype.att=function(e,t,n,i,o){return this.attList(e,t,n,i,o)},r.prototype.ent=function(e
,t){return this.entity(e,t)},r.prototype.pent=function(e,t){return this.pEntity(e,t)},r.prototype.not=function(e,t){
return this.notation(e,t)},r.prototype.up=function(){return this.root()||this.documentObject},
r.prototype.isEqualNode=function(e){return!!r.__super__.isEqualNode.apply(this,arguments).isEqualNode(e
)&&e.name===this.name&&e.publicId===this.publicId&&e.systemId===this.systemId},r}()}.call(P)),Gp.exports}function ft(){
return nl||(nl=1,function(){var a={}.hasOwnProperty,s=O(),r=bt();tl.exports=function(){function n(e,t){if(
n.__super__.constructor.call(this,e),null==t)throw new Error("Missing raw text. "+this.debugInfo());this.type=s.Raw,
this.value=this.stringify.raw(t)}function e(){this.constructor=i}var t,i=n,o=r;for(t in o)a.call(o,t)&&(i[t]=o[t]);
return e.prototype=o.prototype,i.prototype=new e,i.__super__=o.prototype,n.prototype.clone=function(){
return Object.create(this)},n.prototype.toString=function(e){return this.options.writer.raw(this,
this.options.writer.filterOptions(e))},n}()}.call(P)),tl.exports}function vt(){return ol||(ol=1,function(){
var a={}.hasOwnProperty,s=O(),r=st();il.exports=function(){function n(e,t){if(n.__super__.constructor.call(this,e),
null==t)throw new Error("Missing element text. "+this.debugInfo());this.name="#text",this.type=s.Text,
this.value=this.stringify.text(t)}function e(){this.constructor=i}var t,i=n,o=r;for(t in o)a.call(o,t)&&(i[t]=o[t]);
return e.prototype=o.prototype,i.prototype=new e,i.__super__=o.prototype,Object.defineProperty(n.prototype,
"isElementContentWhitespace",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),
Object.defineProperty(n.prototype,"wholeText",{get:function(){for(var e,t="",n=this.previousSibling;n;)t=n.data+t,
n=n.previousSibling;for(t+=this.data,e=this.nextSibling;e;)t+=e.data,e=e.nextSibling;return t}}),
n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(e){
return this.options.writer.text(this,this.options.writer.filterOptions(e))},n.prototype.splitText=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.replaceWholeText=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},n}()}.call(P)),il.exports}function xt(){
return sl||(sl=1,function(){var a={}.hasOwnProperty,s=O(),r=st();al.exports=function(){function i(e,t,n){if(
i.__super__.constructor.call(this,e),null==t)throw new Error("Missing instruction target. "+this.debugInfo());
this.type=s.ProcessingInstruction,this.target=this.stringify.insTarget(t),this.name=this.target,n&&(
this.value=this.stringify.insValue(n))}function e(){this.constructor=n}var t,n=i,o=r;for(t in o)a.call(o,t)&&(n[t]=o[t])
return e.prototype=o.prototype,n.prototype=new e,n.__super__=o.prototype,i.prototype.clone=function(){
return Object.create(this)},i.prototype.toString=function(e){return this.options.writer.processingInstruction(this,
this.options.writer.filterOptions(e))},i.prototype.isEqualNode=function(e){return!!i.__super__.isEqualNode.apply(this,
arguments).isEqualNode(e)&&e.target===this.target},i}()}.call(P)),al.exports}function gt(){return cl||(cl=1,function(){
var a={}.hasOwnProperty,s=bt(),r=O();rl.exports=function(){function t(e){t.__super__.constructor.call(this,e),
this.type=r.Dummy}function e(){this.constructor=i}var n,i=t,o=s;for(n in o)a.call(o,n)&&(i[n]=o[n]);
return e.prototype=o.prototype,i.prototype=new e,i.__super__=o.prototype,t.prototype.clone=function(){
return Object.create(this)},t.prototype.toString=function(e){return""},t}()}.call(P)),rl.exports}function bt(){
return ml||(ml=1,function(){function e(e){this.parent=e,this.parent&&(this.options=this.parent.options,
this.stringify=this.parent.stringify),this.value=null,this.children=[],this.baseURI=null,a||(a=at(),t=rt(),n=ct(),o=pt()
,d=ht(),c=ft(),p=vt(),r=xt(),i=gt(),u=O(),ll||(ll=1,function(){function e(e){this.nodes=e}pl.exports=(
Object.defineProperty(e.prototype,"length",{get:function(){return this.nodes.length||0}}),e.prototype.clone=function(){
return this.nodes=null},e.prototype.item=function(e){return this.nodes[e]||null},e)}.call(P)),s=pl.exports,ot(),dl||(
dl=1,function(){ul.exports={Disconnected:1,Preceding:2,Following:4,Contains:8,ContainedBy:16,ImplementationSpecific:32}
}.call(P)),g=ul.exports)}var u,t,n,o,d,i,a,s,r,c,p,m={}.hasOwnProperty,l=tt(),h=l.isObject,f=l.isFunction,v=l.isEmpty,
x=l.getValue,g=s=u=i=r=p=c=d=o=n=t=a=null;Np.exports=(Object.defineProperty(e.prototype,"nodeName",{get:function(){
return this.name}}),Object.defineProperty(e.prototype,"nodeType",{get:function(){return this.type}}),
Object.defineProperty(e.prototype,"nodeValue",{get:function(){return this.value}}),Object.defineProperty(e.prototype,
"parentNode",{get:function(){return this.parent}}),Object.defineProperty(e.prototype,"childNodes",{get:function(){
return this.childNodeList&&this.childNodeList.nodes||(this.childNodeList=new s(this.children)),this.childNodeList}}),
Object.defineProperty(e.prototype,"firstChild",{get:function(){return this.children[0]||null}}),Object.defineProperty(
e.prototype,"lastChild",{get:function(){return this.children[this.children.length-1]||null}}),Object.defineProperty(
e.prototype,"previousSibling",{get:function(){var e=this.parent.children.indexOf(this);return this.parent.children[e-1
]||null}}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){var e=this.parent.children.indexOf(this);
return this.parent.children[e+1]||null}}),Object.defineProperty(e.prototype,"ownerDocument",{get:function(){
return this.document()||null}}),Object.defineProperty(e.prototype,"textContent",{get:function(){var e,t,n,i,o;if(
this.nodeType!==u.Element&&this.nodeType!==u.DocumentFragment)return null;for(o="",t=0,n=(i=this.children
).length;t<n;t++)(e=i[t]).textContent&&(o+=e.textContent);return o},set:function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())}}),e.prototype.setParent=function(e){var t,n,i,o,a;for((
this.parent=e)&&(this.options=e.options,this.stringify=e.stringify),a=[],n=0,i=(o=this.children).length;n<i;n++)t=o[n],
a.push(t.setParent(this));return a},e.prototype.element=function(e,t,n){var i,o,a,s,r,c,p,l,u,d=null;if(
null===t&&null==n&&(t=(l=[{},null])[0],n=l[1]),t=x(t=null==t?{}:t),h(t)||(n=(l=[t,n])[0],t=l[1]),null!=e&&(e=x(e)),
Array.isArray(e))for(a=0,c=e.length;a<c;a++)o=e[a],d=this.element(o);else if(f(e))d=this.element(e.apply());else if(h(e)
){for(r in e)if(m.call(e,r))if(u=e[r],f(u)&&(u=u.apply()),
!this.options.ignoreDecorators&&this.stringify.convertAttKey&&0===r.indexOf(this.stringify.convertAttKey)
)d=this.attribute(r.substr(this.stringify.convertAttKey.length),u);else if(
!this.options.separateArrayItems&&Array.isArray(u)&&v(u))d=this.dummy();else if(h(u)&&v(u))d=this.element(r);else if(
this.options.keepNullNodes||null!=u)if(!this.options.separateArrayItems&&Array.isArray(u))for(s=0,p=u.length;s<p;s++
)o=u[s],(i={})[r]=o,d=this.element(i);else h(u
)?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===r.indexOf(this.stringify.convertTextKey
)?d=this.element(u):(d=this.element(r)).element(u):d=this.element(r,u);else d=this.dummy()
}else d=this.options.keepNullNodes||null!==n?!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===e.indexOf(
this.stringify.convertTextKey)?this.text(n
):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&0===e.indexOf(this.stringify.convertCDataKey
)?this.cdata(n):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&0===e.indexOf(
this.stringify.convertCommentKey)?this.comment(n
):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&0===e.indexOf(this.stringify.convertRawKey)?this.raw(n
):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&0===e.indexOf(this.stringify.convertPIKey
)?this.instruction(e.substr(this.stringify.convertPIKey.length),n):this.node(e,t,n):this.dummy();if(null==d
)throw new Error("Could not create any elements with: "+e+". "+this.debugInfo());return d},
e.prototype.insertBefore=function(e,t,n){var i,o,a,s;if(null!=e&&e.type)return a=t,(o=e).setParent(this),a?(
i=children.indexOf(a),s=children.splice(i),children.push(o),Array.prototype.push.apply(children,s)):children.push(o),o;
if(this.isRoot)throw new Error("Cannot insert elements at root level. "+this.debugInfo(e));
return i=this.parent.children.indexOf(this),s=this.parent.children.splice(i),a=this.parent.element(e,t,n),
Array.prototype.push.apply(this.parent.children,s),a},e.prototype.insertAfter=function(e,t,n){var i;if(this.isRoot
)throw new Error("Cannot insert elements at root level. "+this.debugInfo(e));return i=this.parent.children.indexOf(this)
,i=this.parent.children.splice(i+1),e=this.parent.element(e,t,n),Array.prototype.push.apply(this.parent.children,i),e},
e.prototype.remove=function(){var e;if(this.isRoot)throw new Error("Cannot remove the root element. "+this.debugInfo());
return e=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[e,e-e+1].concat([])),this.parent},
e.prototype.node=function(e,t,n){var i;return null!=e&&(e=x(e)),t=x(t=t||{}),h(t)||(n=(i=[t,n])[0],t=i[1]),i=new a(this,
e,t),null!=n&&i.text(n),this.children.push(i),i},e.prototype.text=function(e){return h(e)&&this.element(e),e=new p(this,
e),this.children.push(e),this},e.prototype.cdata=function(e){return e=new t(this,e),this.children.push(e),this},
e.prototype.comment=function(e){return e=new n(this,e),this.children.push(e),this},e.prototype.commentBefore=function(e
){var t=this.parent.children.indexOf(this),t=this.parent.children.splice(t);return this.parent.comment(e),
Array.prototype.push.apply(this.parent.children,t),this},e.prototype.commentAfter=function(e){
var t=this.parent.children.indexOf(this),t=this.parent.children.splice(t+1);return this.parent.comment(e),
Array.prototype.push.apply(this.parent.children,t),this},e.prototype.raw=function(e){return e=new c(this,e),
this.children.push(e),this},e.prototype.dummy=function(){return new i(this)},e.prototype.instruction=function(e,t){var n
,i,o,a;if(null!=e&&(e=x(e)),null!=t&&(t=x(t)),Array.isArray(e))for(o=0,a=e.length;o<a;o++)n=e[o],this.instruction(n
);else if(h(e))for(n in e)m.call(e,n)&&(i=e[n],this.instruction(n,i));else f(t)&&(t=t.apply()),t=new r(this,e,t),
this.children.push(t);return this},e.prototype.instructionBefore=function(e,t){var n=this.parent.children.indexOf(this),
n=this.parent.children.splice(n);return this.parent.instruction(e,t),Array.prototype.push.apply(this.parent.children,n),
this},e.prototype.instructionAfter=function(e,t){var n=this.parent.children.indexOf(this),n=this.parent.children.splice(
n+1);return this.parent.instruction(e,t),Array.prototype.push.apply(this.parent.children,n),this},
e.prototype.declaration=function(e,t,n){var i=this.document(),e=new o(i,e,t,n);return 0!==i.children.length&&i.children[
0].type===u.Declaration?i.children[0]=e:i.children.unshift(e),i.root()||i},e.prototype.dtd=function(e,t){for(var n,i,o,a
,s=this.document(),r=new d(s,e,t),c=s.children,p=n=0,l=c.length;n<l;p=++n)if(c[p].type===u.DocType)return s.children[p
]=r;for(p=i=0,o=(a=s.children).length;i<o;p=++i)if(a[p].isRoot)return s.children.splice(p,0,r),r;return s.children.push(
r),r},e.prototype.up=function(){if(this.isRoot)throw new Error(
"The root node has no parent. Use doc() if you need to get the document object.");return this.parent},
e.prototype.root=function(){for(var e=this;e;){if(e.type===u.Document)return e.rootObject;if(e.isRoot)return e;
e=e.parent}},e.prototype.document=function(){for(var e=this;e;){if(e.type===u.Document)return e;e=e.parent}},
e.prototype.end=function(e){return this.document().end(e)},e.prototype.prev=function(){
var e=this.parent.children.indexOf(this);if(e<1)throw new Error("Already at the first node. "+this.debugInfo());
return this.parent.children[e-1]},e.prototype.next=function(){var e=this.parent.children.indexOf(this);if(
-1===e||e===this.parent.children.length-1)throw new Error("Already at the last node. "+this.debugInfo());
return this.parent.children[e+1]},e.prototype.importDocument=function(e){return(e=e.root().clone()).parent=this,
e.isRoot=!1,this.children.push(e),this},e.prototype.debugInfo=function(e){var t;return null!=(e=e||this.name)||null!=(
t=this.parent)&&t.name?null==e?"parent: <"+this.parent.name+">":null!=(t=this.parent
)&&t.name?"node: <"+e+">, parent: <"+this.parent.name+">":"node: <"+e+">":""},e.prototype.ele=function(e,t,n){
return this.element(e,t,n)},e.prototype.nod=function(e,t,n){return this.node(e,t,n)},e.prototype.txt=function(e){
return this.text(e)},e.prototype.dat=function(e){return this.cdata(e)},e.prototype.com=function(e){return this.comment(e
)},e.prototype.ins=function(e,t){return this.instruction(e,t)},e.prototype.doc=function(){return this.document()},
e.prototype.dec=function(e,t,n){return this.declaration(e,t,n)},e.prototype.e=function(e,t,n){return this.element(e,t,n)
},e.prototype.n=function(e,t,n){return this.node(e,t,n)},e.prototype.t=function(e){return this.text(e)},
e.prototype.d=function(e){return this.cdata(e)},e.prototype.c=function(e){return this.comment(e)},
e.prototype.r=function(e){return this.raw(e)},e.prototype.i=function(e,t){return this.instruction(e,t)},
e.prototype.u=function(){return this.up()},e.prototype.importXMLBuilder=function(e){return this.importDocument(e)},
e.prototype.replaceChild=function(e,t){throw new Error("This DOM method is not implemented."+this.debugInfo())},
e.prototype.removeChild=function(e){throw new Error("This DOM method is not implemented."+this.debugInfo())},
e.prototype.appendChild=function(e){throw new Error("This DOM method is not implemented."+this.debugInfo())},
e.prototype.hasChildNodes=function(){return 0!==this.children.length},e.prototype.cloneNode=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},e.prototype.normalize=function(){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},e.prototype.isSupported=function(e,t){return!0},
e.prototype.hasAttributes=function(){return 0!==this.attribs.length},e.prototype.compareDocumentPosition=function(e){
var t;return this===e?0:this.document()!==e.document()?(t=g.Disconnected|g.ImplementationSpecific,Math.random(
)<.5?t|=g.Preceding:t|=g.Following,t):this.isAncestor(e)?g.Contains|g.Preceding:this.isDescendant(e
)?g.Contains|g.Following:this.isPreceding(e)?g.Preceding:g.Following},e.prototype.isSameNode=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.lookupPrefix=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.isDefaultNamespace=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.lookupNamespaceURI=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},e.prototype.isEqualNode=function(e){var t,n,i;
if(e.nodeType!==this.nodeType)return!1;if(e.children.length!==this.children.length)return!1;for(t=n=0,
i=this.children.length-1;0<=i?n<=i:i<=n;t=0<=i?++n:--n)if(!this.children[t].isEqualNode(e.children[t]))return!1;return!0
},e.prototype.getFeature=function(e,t){throw new Error("This DOM method is not implemented."+this.debugInfo())},
e.prototype.setUserData=function(e,t,n){throw new Error("This DOM method is not implemented."+this.debugInfo())},
e.prototype.getUserData=function(e){throw new Error("This DOM method is not implemented."+this.debugInfo())},
e.prototype.contains=function(e){return!!e&&(e===this||this.isDescendant(e))},e.prototype.isDescendant=function(e){for(
var t,n=this.children,i=0,o=n.length;i<o;i++){if(e===(t=n[i]))return!0;if(t.isDescendant(e))return!0}return!1},
e.prototype.isAncestor=function(e){return e.isDescendant(this)},e.prototype.isPreceding=function(e){
var e=this.treePosition(e),t=this.treePosition(this);return-1!==e&&-1!==t&&e<t},e.prototype.isFollowing=function(e){
var e=this.treePosition(e),t=this.treePosition(this);return-1!==e&&-1!==t&&t<e},e.prototype.treePosition=function(t){
var n=0,i=!1;return this.foreachTreeNode(this.document(),function(e){if(n++,!i&&e===t)return i=!0}),i?n:-1},
e.prototype.foreachTreeNode=function(e,t){for(var n,i,o,a=0,s=(i=(e=e||this.document()).children).length;a<s;a++){if(
o=t(n=i[a]))return o;if(o=this.foreachTreeNode(n,t))return o}},e)}.call(P)),Np.exports}function yt(){return fl||(fl=1,
function(){function e(e){var t,n,i;for(t in this.assertLegalName=o(this.assertLegalName,this),this.assertLegalChar=o(
this.assertLegalChar,this),this.options=e=e||{},this.options.version||(this.options.version="1.0"),n=e.stringify||{}
)a.call(n,t)&&(i=n[t],this[t]=i)}var o=function(e,t){return function(){return e.apply(t,arguments)}},a={}.hasOwnProperty
hl.exports=(e.prototype.name=function(e){return this.options.noValidation?e:this.assertLegalName(""+e||"")},
e.prototype.text=function(e){return this.options.noValidation?e:this.assertLegalChar(this.textEscape(""+e||""))},
e.prototype.cdata=function(e){return this.options.noValidation?e:(e=(e=""+e||"").replace("]]>","]]]]><![CDATA[>"),
this.assertLegalChar(e))},e.prototype.comment=function(e){if(this.options.noValidation)return e;if((e=""+e||"").match(
/--/))throw new Error("Comment text cannot contain double-hypen: "+e);return this.assertLegalChar(e)},
e.prototype.raw=function(e){return this.options.noValidation?e:""+e||""},e.prototype.attValue=function(e){
return this.options.noValidation?e:this.assertLegalChar(this.attEscape(e=""+e||""))},e.prototype.insTarget=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.insValue=function(e){if(
this.options.noValidation)return e;if((e=""+e||"").match(/\?>/))throw new Error(
"Invalid processing instruction value: "+e);return this.assertLegalChar(e)},e.prototype.xmlVersion=function(e){if(
this.options.noValidation)return e;if((e=""+e||"").match(/1\.[0-9]+/))return e;throw new Error(
"Invalid version number: "+e)},e.prototype.xmlEncoding=function(e){if(this.options.noValidation)return e;if((e=""+e||""
).match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))return this.assertLegalChar(e);throw new Error("Invalid encoding: "+e)},
e.prototype.xmlStandalone=function(e){return this.options.noValidation?e:e?"yes":"no"},e.prototype.dtdPubID=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.dtdSysID=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.dtdElementValue=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.dtdAttType=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.dtdAttDefault=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.dtdEntityValue=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.dtdNData=function(e){
return this.options.noValidation?e:this.assertLegalChar(""+e||"")},e.prototype.convertAttKey="@",
e.prototype.convertPIKey="?",e.prototype.convertTextKey="#text",e.prototype.convertCDataKey="#cdata",
e.prototype.convertCommentKey="#comment",e.prototype.convertRawKey="#raw",e.prototype.assertLegalChar=function(e){var t;
if(!this.options.noValidation)if("1.0"===this.options.version){if(t=e.match(
/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)
)throw new Error("Invalid character in string: "+e+" at index "+t.index)}else if("1.1"===this.options.version&&(
t=e.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)))throw new Error(
"Invalid character in string: "+e+" at index "+t.index);return e},e.prototype.assertLegalName=function(e){if(
this.options.noValidation)return e;if(this.assertLegalChar(e),e.match(
/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/
))return e;throw new Error("Invalid character in name")},e.prototype.textEscape=function(e){var t;
return this.options.noValidation?e:(t=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,e.replace(t,"&amp;").replace(/</g
,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;"))},e.prototype.attEscape=function(e){var t;
return this.options.noValidation?e:(t=this.options.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,e.replace(t,"&amp;").replace(/</g
,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;"))},e)}.call(P)),
hl.exports}function wt(){return bl||(bl=1,function(){gl.exports={None:0,OpenTag:1,InsideTag:2,CloseTag:3}}.call(P)),
gl.exports}function _t(){return yl||(yl=1,function(){function e(e){var t,n,i;for(t in n=(this.options=e=e||{}
).writer||{})g.call(n,t)&&(i=n[t],this["_"+t]=this[t],this[t]=i)}var x,g={}.hasOwnProperty,i=tt().assign,b=O();pt(),ht()
,rt(),ct(),at(),ft(),vt(),xt(),gt(),lt(),dt(),ut(),mt(),x=wt(),xl.exports=(e.prototype.filterOptions=function(e){var t,n
return e=i({},this.options,e=e||{}),(t={writer:this}).pretty=e.pretty||!1,t.allowEmpty=e.allowEmpty||!1,t.indent=null!=(
n=e.indent)?n:"  ",t.newline=null!=(n=e.newline)?n:"\n",t.offset=null!=(n=e.offset)?n:0,t.dontPrettyTextNodes=null!=(
n=null!=(n=e.dontPrettyTextNodes)?n:e.dontprettytextnodes)?n:0,t.spaceBeforeSlash=null!=(n=null!=(n=e.spaceBeforeSlash
)?n:e.spacebeforeslash)?n:"",!0===t.spaceBeforeSlash&&(t.spaceBeforeSlash=" "),t.suppressPrettyCount=0,t.user={},
t.state=x.None,t},e.prototype.indent=function(e,t,n){return t.pretty&&!t.suppressPrettyCount&&t.pretty&&0<(n=(n||0
)+t.offset+1)?new Array(n).join(t.indent):""},e.prototype.endline=function(e,t,n){
return!t.pretty||t.suppressPrettyCount?"":t.newline},e.prototype.attribute=function(e,t,n){var i;
return this.openAttribute(e,t,n),i=" "+e.name+'="'+e.value+'"',this.closeAttribute(e,t,n),i},e.prototype.cdata=function(
e,t,n){var i;return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n)+"<![CDATA[",t.state=x.InsideTag,
i+=e.value,t.state=x.CloseTag,i+="]]>"+this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,n),i},
e.prototype.comment=function(e,t,n){var i;return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n)+"\x3c!-- ",
t.state=x.InsideTag,i+=e.value,t.state=x.CloseTag,i+=" --\x3e"+this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,n),
i},e.prototype.declaration=function(e,t,n){var i;return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n
)+"<?xml",t.state=x.InsideTag,i+=' version="'+e.version+'"',null!=e.encoding&&(i+=' encoding="'+e.encoding+'"'),
null!=e.standalone&&(i+=' standalone="'+e.standalone+'"'),t.state=x.CloseTag,i=(i+=t.spaceBeforeSlash+"?>"
)+this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,n),i},e.prototype.docType=function(e,t,n){var i,o,a,s,r;if(
this.openNode(e,t,n=n||0),t.state=x.OpenTag,s=this.indent(e,t,n),s+="<!DOCTYPE "+e.root().name,
e.pubID&&e.sysID?s+=' PUBLIC "'+e.pubID+'" "'+e.sysID+'"':e.sysID&&(s+=' SYSTEM "'+e.sysID+'"'),0<e.children.length){
for(s=(s+=" [")+this.endline(e,t,n),t.state=x.InsideTag,o=0,a=(r=e.children).length;o<a;o++)i=r[o],
s+=this.writeChildNode(i,t,n+1);t.state=x.CloseTag,s+="]"}return t.state=x.CloseTag,s=(s+=t.spaceBeforeSlash+">"
)+this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,n),s},e.prototype.element=function(e,t,n){var i,o,a,s,r,c,p,l,u,
d,m,h,f=!1,v="";for(u in this.openNode(e,t,n=n||0),t.state=x.OpenTag,v+=this.indent(e,t,n)+"<"+e.name,d=e.attribs
)g.call(d,u)&&(i=d[u],v+=this.attribute(i,t,n));if(s=0===(a=e.children.length)?null:e.children[0],
0===a||e.children.every(function(e){return(e.type===b.Text||e.type===b.Raw)&&""===e.value}))t.allowEmpty?(v+=">",
t.state=x.CloseTag,v+="</"+e.name+">"+this.endline(e,t,n)):(t.state=x.CloseTag,v+=t.spaceBeforeSlash+"/>"+this.endline(e
,t,n));else if(!t.pretty||1!==a||s.type!==b.Text&&s.type!==b.Raw||null==s.value){if(t.dontPrettyTextNodes)for(r=0,p=(
m=e.children).length;r<p;r++)if(((o=m[r]).type===b.Text||o.type===b.Raw)&&null!=o.value){t.suppressPrettyCount++,f=!0;
break}for(v+=">"+this.endline(e,t,n),t.state=x.InsideTag,c=0,l=(h=e.children).length;c<l;c++)o=h[c],
v+=this.writeChildNode(o,t,n+1);t.state=x.CloseTag,v+=this.indent(e,t,n)+"</"+e.name+">",f&&t.suppressPrettyCount--,
v+=this.endline(e,t,n),t.state=x.None}else v+=">",t.state=x.InsideTag,t.suppressPrettyCount++,f=!0,
v+=this.writeChildNode(s,t,n+1),t.suppressPrettyCount--,f=!1,t.state=x.CloseTag,v+="</"+e.name+">"+this.endline(e,t,n);
return this.closeNode(e,t,n),v},e.prototype.writeChildNode=function(e,t,n){switch(e.type){case b.CData:
return this.cdata(e,t,n);case b.Comment:return this.comment(e,t,n);case b.Element:return this.element(e,t,n);case b.Raw:
return this.raw(e,t,n);case b.Text:return this.text(e,t,n);case b.ProcessingInstruction:
return this.processingInstruction(e,t,n);case b.Dummy:return"";case b.Declaration:return this.declaration(e,t,n);
case b.DocType:return this.docType(e,t,n);case b.AttributeDeclaration:return this.dtdAttList(e,t,n);
case b.ElementDeclaration:return this.dtdElement(e,t,n);case b.EntityDeclaration:return this.dtdEntity(e,t,n);
case b.NotationDeclaration:return this.dtdNotation(e,t,n);default:throw new Error(
"Unknown XML node type: "+e.constructor.name)}},e.prototype.processingInstruction=function(e,t,n){var i;
return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n)+"<?",t.state=x.InsideTag,i+=e.target,e.value&&(
i+=" "+e.value),t.state=x.CloseTag,i=(i+=t.spaceBeforeSlash+"?>")+this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,
n),i},e.prototype.raw=function(e,t,n){var i;return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n),
t.state=x.InsideTag,i+=e.value,t.state=x.CloseTag,i+=this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,n),i},
e.prototype.text=function(e,t,n){var i;return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n),
t.state=x.InsideTag,i+=e.value,t.state=x.CloseTag,i+=this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,n),i},
e.prototype.dtdAttList=function(e,t,n){var i;return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n
)+"<!ATTLIST",t.state=x.InsideTag,i+=" "+e.elementName+" "+e.attributeName+" "+e.attributeType,
"#DEFAULT"!==e.defaultValueType&&(i+=" "+e.defaultValueType),e.defaultValue&&(i+=' "'+e.defaultValue+'"'),
t.state=x.CloseTag,i+=t.spaceBeforeSlash+">"+this.endline(e,t,n),t.state=x.None,this.closeNode(e,t,n),i},
e.prototype.dtdElement=function(e,t,n){var i;return this.openNode(e,t,n),t.state=x.OpenTag,i=this.indent(e,t,n
)+"<!ELEMENT",t.state=x.InsideTag,i+=" "+e.name+" "+e.value,t.state=x.CloseTag,i+=t.spaceBeforeSlash+">"+this.endline(e,
t,n),t.state=x.None,this.closeNode(e,t,n),i},e.prototype.dtdEntity=function(e,t,n){var i;return this.openNode(e,t,n),
t.state=x.OpenTag,i=this.indent(e,t,n)+"<!ENTITY",t.state=x.InsideTag,e.pe&&(i+=" %"),i+=" "+e.name,
e.value?i+=' "'+e.value+'"':(e.pubID&&e.sysID?i+=' PUBLIC "'+e.pubID+'" "'+e.sysID+'"':e.sysID&&(
i+=' SYSTEM "'+e.sysID+'"'),e.nData&&(i+=" NDATA "+e.nData)),t.state=x.CloseTag,i+=t.spaceBeforeSlash+">"+this.endline(e
,t,n),t.state=x.None,this.closeNode(e,t,n),i},e.prototype.dtdNotation=function(e,t,n){var i;return this.openNode(e,t,n),
t.state=x.OpenTag,i=this.indent(e,t,n)+"<!NOTATION",t.state=x.InsideTag,i+=" "+e.name,
e.pubID&&e.sysID?i+=' PUBLIC "'+e.pubID+'" "'+e.sysID+'"':e.pubID?i+=' PUBLIC "'+e.pubID+'"':e.sysID&&(
i+=' SYSTEM "'+e.sysID+'"'),t.state=x.CloseTag,i+=t.spaceBeforeSlash+">"+this.endline(e,t,n),t.state=x.None,
this.closeNode(e,t,n),i},e.prototype.openNode=function(e,t,n){},e.prototype.closeNode=function(e,t,n){},
e.prototype.openAttribute=function(e,t,n){},e.prototype.closeAttribute=function(e,t,n){},e)}.call(P)),xl.exports}
function Et(){return wl||(wl=1,function(){var a={}.hasOwnProperty,s=_t();vl.exports=function(){function t(e){
t.__super__.constructor.call(this,e)}function e(){this.constructor=i}var n,i=t,o=s;for(n in o)a.call(o,n)&&(i[n]=o[n]);
return e.prototype=o.prototype,i.prototype=new e,i.__super__=o.prototype,t.prototype.document=function(e,t){var n,i,o,a,
s;for(t=this.filterOptions(t),a="",i=0,o=(s=e.children).length;i<o;i++)n=s[i],a+=this.writeChildNode(n,t,0);
return t.pretty&&a.slice(-t.newline.length)===t.newline?a.slice(0,-t.newline.length):a},t}()}.call(P)),vl.exports}
function Tt(){return _l||(_l=1,function(){var a={}.hasOwnProperty,s=tt().isPlainObject,r=nt(),c=(Cp||(Cp=1,function(){
function e(){this.defaultParams={"canonical-form":!1,"cdata-sections":!1,comments:!1,"datatype-normalization":!1,
"element-content-whitespace":!0,entities:!0,"error-handler":new t,infoset:!0,"validate-if-schema":!1,namespaces:!0,
"namespace-declarations":!0,"normalize-characters":!1,"schema-location":"","schema-type":"","split-cdata-sections":!0,
validate:!1,"well-formed":!0},this.params=Object.create(this.defaultParams)}var t,n;Tp||(Tp=1,function(){function e(){}
Ep.exports=(e.prototype.handleError=function(e){throw new Error(e)},e)}.call(P)),t=Ep.exports,Rp||(Rp=1,function(){
function e(e){this.arr=e||[]}Op.exports=(Object.defineProperty(e.prototype,"length",{get:function(){
return this.arr.length}}),e.prototype.item=function(e){return this.arr[e]||null},e.prototype.contains=function(e){
return-1!==this.arr.indexOf(e)},e)}.call(P)),n=Op.exports,_p.exports=(Object.defineProperty(e.prototype,"parameterNames"
,{get:function(){return new n(Object.keys(this.defaultParams))}}),e.prototype.getParameter=function(e){
return this.params.hasOwnProperty(e)?this.params[e]:null},e.prototype.canSetParameter=function(e,t){return!0},
e.prototype.setParameter=function(e,t){return null!=t?this.params[e]=t:delete this.params[e]},e)}.call(P)),_p.exports),
p=bt(),l=O(),u=yt(),d=Et();wp.exports=function(){function t(e){t.__super__.constructor.call(this,null),
this.name="#document",this.type=l.Document,this.documentURI=null,this.domConfig=new c,(e=e||{}).writer||(e.writer=new d)
,this.options=e,this.stringify=new u(e)}function e(){this.constructor=i}var n,i=t,o=p;for(n in o)a.call(o,n)&&(i[n]=o[n]
);return e.prototype=o.prototype,i.prototype=new e,i.__super__=o.prototype,Object.defineProperty(t.prototype,
"implementation",{value:new r}),Object.defineProperty(t.prototype,"doctype",{get:function(){for(var e,t=this.children,
n=0,i=t.length;n<i;n++)if((e=t[n]).type===l.DocType)return e;return null}}),Object.defineProperty(t.prototype,
"documentElement",{get:function(){return this.rootObject||null}}),Object.defineProperty(t.prototype,"inputEncoding",{
get:function(){return null}}),Object.defineProperty(t.prototype,"strictErrorChecking",{get:function(){return!1}}),
Object.defineProperty(t.prototype,"xmlEncoding",{get:function(){return 0!==this.children.length&&this.children[0
].type===l.Declaration?this.children[0].encoding:null}}),Object.defineProperty(t.prototype,"xmlStandalone",{
get:function(){return 0!==this.children.length&&this.children[0].type===l.Declaration&&"yes"===this.children[0
].standalone}}),Object.defineProperty(t.prototype,"xmlVersion",{get:function(){
return 0!==this.children.length&&this.children[0].type===l.Declaration?this.children[0].version:"1.0"}}),
Object.defineProperty(t.prototype,"URL",{get:function(){return this.documentURI}}),Object.defineProperty(t.prototype,
"origin",{get:function(){return null}}),Object.defineProperty(t.prototype,"compatMode",{get:function(){return null}}),
Object.defineProperty(t.prototype,"characterSet",{get:function(){return null}}),Object.defineProperty(t.prototype,
"contentType",{get:function(){return null}}),t.prototype.end=function(e){var t={};return e?s(e)&&(t=e,
e=this.options.writer):e=this.options.writer,e.document(this,e.filterOptions(t))},t.prototype.toString=function(e){
return this.options.writer.document(this,this.options.writer.filterOptions(e))},t.prototype.createElement=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createDocumentFragment=function(){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createTextNode=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createComment=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createCDATASection=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},
t.prototype.createProcessingInstruction=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},t.prototype.createAttribute=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},t.prototype.createEntityReference=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},t.prototype.getElementsByTagName=function(e){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},t.prototype.importNode=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},t.prototype.createElementNS=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},t.prototype.createAttributeNS=function(e,t){throw new Error(
"This DOM method is not implemented."+this.debugInfo())},t.prototype.getElementsByTagNameNS=function(e,t){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.getElementById=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.adoptNode=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.normalizeDocument=function(){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.renameNode=function(e,t,n){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.getElementsByClassName=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createEvent=function(e){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createRange=function(){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createNodeIterator=function(e,t,n){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t.prototype.createTreeWalker=function(e,t,n){
throw new Error("This DOM method is not implemented."+this.debugInfo())},t}()}.call(P)),wp.exports}function Ot(){
return kl||(kl=1,function(){var t=new RegExp(/(?!xmlns)^.*:/);Sl.normalize=function(e){return e.toLowerCase()},
Sl.firstCharLowerCase=function(e){return e.charAt(0).toLowerCase()+e.slice(1)},Sl.stripPrefix=function(e){
return e.replace(t,"")},Sl.parseNumbers=function(e){return isNaN(e)?e:e%1==0?parseInt(e,10):parseFloat(e)},
Sl.parseBooleans=function(e){return/^(?:true|false)$/i.test(e)?"true"===e.toLowerCase():e}}.call(P)),Sl}function Rt(e){
var t,i;if("function"!=typeof e)throw new TypeError("executor must be a function.");this.promise=new Promise(function(e
){t=e}),(i=this).promise.then(function(e){var t,n;if(i._listeners){for(n=i._listeners.length,t=0;t<n;t++)i._listeners[t
](e);i._listeners=null}}),this.promise.then=function(e){var t;return(e=new Promise(function(e){i.subscribe(e),t=e}
).then(e)).cancel=function(){i.unsubscribe(t)},e},e(function(e){i.reason||(i.reason=new Jl(e),t(i.reason))})}function c(
e){if(!(this instanceof c))return new c(e);for(var t in this._overheadLength=0,this._valueLength=0,
this._valuesToMeasure=[],iu.call(this),e=e||{})this[t]=e[t]}function Ct(e){var t;return!(!e||"string"!=typeof e)&&((t=(
e=Tu.exec(e))&&_u[e[1].toLowerCase()])&&t.charset?t.charset:!(!e||!Ou.test(e[1]))&&"UTF-8")}function n(){
this.writable=!1,this.readable=!0,this.dataSize=0,this.maxDataSize=2097152,this.pauseStreams=!0,this._released=!1,
this._streams=[],this._currentStream=null,this._insideLoop=!1,this._pendingNext=!1}function Nt(){this.source=null,
this.dataSize=0,this.maxDataSize=1048576,this.pauseStream=!0,this._maxDataSizeExceeded=!1,this._released=!1,
this._bufferedEvents=[]}function Pt(e){return ad&&(sd.setAttribute("href",e),e=sd.href),sd.setAttribute("href",e),{
href:sd.href,protocol:sd.protocol?sd.protocol.replace(/:$/,""):"",host:sd.host,search:sd.search?sd.search.replace(/^\?/,
""):"",hash:sd.hash?sd.hash.replace(/^#/,""):"",hostname:sd.hostname,port:sd.port,pathname:"/"===sd.pathname.charAt(0
)?sd.pathname:"/"+sd.pathname}}function jt(e,t){for(var n=-1,i=null==e?0:e.length,o=Array(i);++n<i;)o[n]=t(e[n],n,e);
return o}function At(e,t){return e===t||e!=e&&t!=t}function Dt(e,t){for(var n=e.length;n--;)if(Id(e[n][0],t))return n;
return-1}var It,St,kt,Lt,qt,Ft,Mt,Ut,Bt,zt,Vt,Ht,Gt,$t,Jt,Wt,Kt,Yt,Qt,Xt,Zt,en,tn,nn,on,an,sn,rn,cn,pn,ln,un,dn,mn,hn,fn
,vn,xn,gn,bn,yn,wn,_n,En,Tn,On,Rn,Cn,Nn,Pn,jn,An,Dn,In,Sn,kn,Ln,qn,Fn,Mn,Un,Bn,zn,Vn,Hn,t,Gn,$n,Jn,Wn,Kn,Yn,Qn,Xn,Zn,ei,
ti,ni,ii,oi,ai,si,ri,ci,pi,li,ui,di,mi,hi,fi,vi,xi,gi,bi,yi,wi,_i,Ei,Ti,Oi,Ri,Ci,Ni,Pi,ji,Ai,Di,Ii,Si,ki,Li,qi,Fi,Mi,Ui,
Bi,zi,Vi,Hi,Gi,$i,Ji,Wi,Ki,Yi,Qi,Xi,Zi,eo,to,no,io,oo,ao,so,ro,co,po,lo,uo,mo,ho,fo,vo,xo,go,bo,yo,wo,_o,Eo,To,Oo,Ro,Co,
No,Po,jo,Ao,Do,Io,So,ko,Lo,qo,Fo,Mo,Uo,Bo,zo,Vo,Ho,Go,$o,Jo,Wo,Ko,Yo,Qo,Xo,Zo,ea,ta,na,ia,oa,aa,sa,ra,ca,pa,la,ua,da,ma,
ha,fa,va,xa,ga,ba,ya,wa,_a,Ea,Ta,Oa,Ra,Ca,Na,Pa,ja,Aa,Da,Ia,Sa,ka,La,qa,Fa,Ma,Ua,Ba,za,Va,Ha,Ga,$a,Ja,Wa,Ka,Ya,Qa,Xa,Za,
es,ts,ns,is,os,as,ss,rs,cs,ps,ls,us,ds,ms,hs,fs,vs,xs,gs,bs,ys,ws,_s,Es,Ts,Os,Rs,Cs,Ns,Ps,js,As,Ds,Is,Ss,ks,Ls,qs,Fs,Ms,
Us,Bs,zs,Vs,Hs,Gs,v,$s,Js,Ws,Ks,Ys,Qs,Xs,Zs,er,tr,nr,ir,or,ar,sr,rr,cr,pr,lr,ur,dr,mr,hr,fr,vr,l,o,i,xr,a,gr,br,u,yr,wr,
_r,e,Er,Tr,Or,Rr,Cr,Nr,r,Pr,jr,Ar,Dr,Ir,Sr,kr,Lr,qr,Fr,Mr,Ur,Br,zr,d,Vr,Hr,Gr,$r,Jr,Wr,Kr,Yr,Qr,Xr,Zr,ec,tc,nc,ic,oc,ac,
sc,rc,cc,pc,lc,uc,dc,mc,hc,fc,vc,xc,gc,bc,yc,wc,_c,Ec,Tc,Oc,Rc,Cc,Nc,Pc,jc,Ac,Dc,Ic,Sc,kc,Lc,qc,Fc,Mc,Uc,Bc,zc,Vc,Hc,Gc,
$c,Jc,Wc,Kc,Yc,Qc,Xc,Zc,ep,tp,np,ip,op,ap,sp,rp,cp,pp,lp,up,dp,mp,hp,fp,vp,xp,gp,bp,yp,wp,_p,Ep,Tp,Op,Rp,Cp,Np,Pp,jp,Ap,
Dp,Ip,Sp,kp,Lp,qp,Fp,Mp,Up,Bp,zp,Vp,Hp,Gp,$p,Jp,Wp,Kp,Yp,Qp,Xp,Zp,el,tl,nl,il,ol,al,sl,rl,cl,pl,ll,ul,dl,ml,hl,fl,vl,xl,
gl,bl,yl,wl,_l,El,Tl,Ol,Rl,Cl,Nl,Pl,jl,Al,Dl,Il,Sl,kl,Ll,ql,m,h,Fl,Ml,x,Ul,Bl,zl,g,b,Vl,Hl,Gl,$l,Jl,Wl,Kl,Yl,Ql,Xl,Zl,eu
,tu,nu,iu,ou,au,su,ru,cu,pu,lu,uu,du,mu,hu,fu,vu,xu,gu,bu,yu,wu,_u,Eu,Tu,Ou,Ru,Cu,Nu,Pu,ju,Au,Du,Iu,Su,ku,Lu,qu,Fu,Mu,Uu
,y,Bu,zu,Vu,Hu,Gu,$u,Ju,Wu,Ku,Yu,Qu,Xu,Zu,ed,td,nd,id,od,ad,sd,rd,cd,pd,ld,ud=require("fs"),w=require("path"),
dd=require("url"),md=require("querystring"),hd=require("http"),fd=require("https"),vd=require("stream"),xd=require(
"assert"),_=require("tty"),E=require("util"),T=require("os"),R=require("zlib"),C=require("string_decoder"),N=require(
"events"),gd=require("timers"),bd=q(ud),yd=q(w),wd=q(dd),_d=F(md),Ed=q(hd),Td=q(fd),Od=q(vd),Rd=q(xd),Cd=q(_),Nd=q(E),
Pd=q(T),ud=q(R),jd=q(C),Ad=q(N),Dd=q(gd),
P="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
,Id=At,Sd=Dt,kd=Array.prototype.splice,Ld=Dt,qd=Dt,Fd=Dt;M.prototype.clear=function(){this.__data__=[],this.size=0},
M.prototype.delete=function(e){var t=this.__data__;return!((e=Sd(t,e))<0||(e==t.length-1?t.pop():kd.call(t,e,1),
--this.size,0))},M.prototype.get=function(e){var t=this.__data__;return(e=Ld(t,e))<0?void 0:t[e][1]},
M.prototype.has=function(e){return-1<qd(this.__data__,e)},M.prototype.set=function(e,t){var n=this.__data__,i=Fd(n,e);
return i<0?(++this.size,n.push([e,t])):n[i][1]=t,this},It=w=M,md=function(){this.__data__=new It,this.size=0},
fd=function(e){var t=this.__data__,e=t.delete(e);return this.size=t.size,e},vd=function(e){return this.__data__.get(e)},
xd=function(e){return this.__data__.has(e)},_="object"==typeof P&&P&&P.Object===Object&&P,
E="object"==typeof self&&self&&self.Object===Object&&self,R=(T=_||E||Function("return this")()).Symbol,
C=Object.prototype,St=C.hasOwnProperty,kt=C.toString,Lt=R?R.toStringTag:void 0,N=Object.prototype,qt=N.toString,
Ft=function(e){var t,n,i=St.call(e,Lt),o=e[Lt];try{t=!(e[Lt]=void 0)}catch(e){}return n=kt.call(e),t&&(i?e[Lt
]=o:delete e[Lt]),n},Mt=function(e){return qt.call(e)},Ut=R?R.toStringTag:void 0,zt=gd=function(e){
return null==e?void 0===e?"[object Undefined]":"[object Null]":(Ut&&Ut in Object(e)?Ft:Mt)(e)},Vt=Bt=function(e){
var t=typeof e;return null!=e&&("object"==t||"function"==t)},Ht=function(e){return!!Vt(e)&&("[object Function]"==(e=zt(e
))||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e)},E=T["__core-js_shared__"],
C=/[^.]+$/.exec(E&&E.keys&&E.keys.IE_PROTO||""),Gt=C?"Symbol(src)_1."+C:"",N=Function.prototype,$t=N.toString,Jt=Ht,
Wt=function(e){return!!Gt&&Gt in e},Kt=Bt,Yt=E=function(e){if(null!=e){try{return $t.call(e)}catch(e){}try{return e+""
}catch(e){}}return""},C=/[\\^$.*+?()[\]{}|]/g,Qt=/^\[object .+?Constructor\]$/,N=Function.prototype,d=Object.prototype,
N=N.toString,d=d.hasOwnProperty,Xt=RegExp("^"+N.call(d).replace(C,"\\$&").replace(
/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Zt=function(e){return!(!Kt(e)||Wt(e))&&(Jt(e
)?Xt:Qt).test(Yt(e))},en=function(e,t){return null==e?void 0:e[t]},d=(N=function(e,t){return e=en(e,t),Zt(e)?e:void 0})(
T,"Map"),C=N(Object,"create"),nn=tn=C,r=Object.prototype,on=r.hasOwnProperty,an=C,r=Object.prototype,sn=r.hasOwnProperty
,rn=C,r=function(e){return e=this.has(e)&&delete this.__data__[e],this.size-=e?1:0,e},C=function(e){var t,
n=this.__data__;return nn?"__lodash_hash_undefined__"===(t=n[e])?void 0:t:on.call(n,e)?n[e]:void 0},qr=function(e){
var t=this.__data__;return an?void 0!==t[e]:sn.call(t,e)},e=function(e,t){var n=this.__data__;
return this.size+=this.has(e)?0:1,n[e]=rn&&void 0===t?"__lodash_hash_undefined__":t,this},U.prototype.clear=function(){
this.__data__=tn?tn(null):{},this.size=0},U.prototype.delete=r,U.prototype.get=C,U.prototype.has=qr,U.prototype.set=e,
cn=U,pn=w,ln=d,un=function(e){var t=typeof e;
return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e},fn=hn=mn=dn=function(e,t){
return e=e.__data__,un(t)?e["string"==typeof t?"string":"hash"]:e.map},r=function(e){return e=dn(this,e).delete(e),
this.size-=e?1:0,e},C=function(e){return mn(this,e).get(e)},qr=function(e){return hn(this,e).has(e)},e=function(e,t){
var n=fn(this,e),i=n.size;return n.set(e,t),this.size+=n.size==i?0:1,this},B.prototype.clear=function(){this.size=0,
this.__data__={hash:new cn,map:new(ln||pn),string:new cn}},B.prototype.delete=r,B.prototype.get=C,B.prototype.has=qr,
B.prototype.set=e,xn=d,gn=r=B,bn=vn=w,C=fd,qr=vd,e=xd,w=function(e,t){var n,i=this.__data__;if(i instanceof vn){if(
n=i.__data__,!xn||n.length<199)return n.push([e,t]),this.size=++i.size,this;i=this.__data__=new gn(n)}return i.set(e,t),
this.size=i.size,this},z.prototype.clear=md,z.prototype.delete=C,z.prototype.get=qr,z.prototype.has=e,z.prototype.set=w,
fd=z,yn=r,vd=function(e){return this.__data__.has(e)},V.prototype.add=V.prototype.push=function(e){
return this.__data__.set(e,"__lodash_hash_undefined__"),this},V.prototype.has=vd,wn=V,_n=xd=function(e,t){for(var n=-1,
i=null==e?0:e.length;++n<i;)if(t(e[n],n,e))return!0;return!1},En=function(e,t){return e.has(t)},md=T.Uint8Array,Tn=md,
On=At,Rn=C=function(e,t,n,i,o,a){var s,r,c,p,l,u,d,m=1&n,h=e.length,f=t.length;if(h!=f&&!(m&&h<f))return!1;if(f=a.get(e)
,s=a.get(t),f&&s)return f==t&&s==e;for(r=-1,c=!0,p=2&n?new wn:void 0,a.set(e,t),a.set(t,e);++r<h;){if(l=e[r],u=t[r],
void 0!==(d=i?m?i(u,l,r,t,e,a):i(l,u,r,e,t,a):d)){if(d)continue;c=!1;break}if(p){if(!_n(t,function(e,t){if(!En(p,t)&&(
l===e||o(l,e,n,i,a)))return p.push(t)})){c=!1;break}}else if(l!==u&&!o(l,u,n,i,a)){c=!1;break}}return a.delete(e),
a.delete(t),c},Cn=function(e){var n=-1,i=Array(e.size);return e.forEach(function(e,t){i[++n]=[t,e]}),i},Nn=qr=function(e
){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n},e=R?R.prototype:void 0,Pn=e?e.valueOf:void 0,
w=function(e,t,n,i,o,a,s){var r,c;switch(n){case"[object DataView]":if(
e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":
return!(e.byteLength!=t.byteLength||!a(new Tn(e),new Tn(t)));case"[object Boolean]":case"[object Date]":
case"[object Number]":return On(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;
case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":r=Cn;case"[object Set]":return r=r||Nn,!!(
e.size==t.size||1&i)&&((c=s.get(e))?c==t:(i|=2,s.set(e,t),c=Rn(r(e),r(t),i,o,a,s),s.delete(e),c));case"[object Symbol]":
if(Pn)return Pn.call(e)==Pn.call(t)}return!1},vd=function(e,t){for(var n=-1,i=t.length,o=e.length;++n<i;)e[o+n]=t[n];
return e},md=Array.isArray,An=vd,Dn=jn=md,e=function(e,t,n){return t=t(e),Dn(e)?t:An(t,n(e))},In=md=function(e,t){for(
var n,i=-1,o=null==e?0:e.length,a=0,s=[];++i<o;)t(n=e[i],i,e)&&(s[a++]=n);return s},zl=Object.prototype,
Sn=zl.propertyIsEnumerable,zl=(kn=Object.getOwnPropertySymbols)?function(t){return null==t?[]:(t=Object(t),In(kn(t),
function(e){return Sn.call(t,e)}))}:function(){return[]},yc=function(e,t){for(var n=-1,i=Array(e);++n<e;)i[n]=t(n);
return i},Ln=gd,b=function(e){return qn(e)&&"[object Arguments]"==Ln(e)},Fn=qn=g=function(e){
return null!=e&&"object"==typeof e},Bl=Object.prototype,Mn=Bl.hasOwnProperty,Un=Bl.propertyIsEnumerable,Bl=b(function(){
return arguments}())?b:function(e){return Fn(e)&&Mn.call(e,"callee")&&!Un.call(e,"callee")},m=(ql=(ql=(m=(m=(b={
exports:{}}).exports)&&!m.nodeType&&m)&&b&&!b.nodeType&&b)&&ql.exports===m?T.Buffer:void 0)?ql.isBuffer:void 0,
b.exports=m||function(){return!1},Bn=/^(?:0|[1-9]\d*)$/,ql=function(e,t){var n=typeof e;return!!(
t=null==t?9007199254740991:t)&&("number"==n||"symbol"!=n&&Bn.test(e))&&-1<e&&e%1==0&&e<t},zn=gd,Vn=m=function(e){
return"number"==typeof e&&-1<e&&e%1==0&&e<=9007199254740991},Hn=g,(t={})["[object Float32Array]"]=t[
"[object Float64Array]"]=t["[object Int8Array]"]=t["[object Int16Array]"]=t["[object Int32Array]"]=t[
"[object Uint8Array]"]=t["[object Uint8ClampedArray]"]=t["[object Uint16Array]"]=t["[object Uint32Array]"]=!0,t[
"[object Arguments]"]=t["[object Array]"]=t["[object ArrayBuffer]"]=t["[object Boolean]"]=t["[object DataView]"]=t[
"[object Date]"]=t["[object Error]"]=t["[object Function]"]=t["[object Map]"]=t["[object Number]"]=t["[object Object]"
]=t["[object RegExp]"]=t["[object Set]"]=t["[object String]"]=t["[object WeakMap]"]=!1,Zl=function(e){return Hn(e)&&Vn(
e.length)&&!!t[zn(e)]},Ul=function(t){return function(e){return t(e)}},x=(x=(h=Ar={exports:{}}).exports)&&!x.nodeType&&x
,x=(Fl=x&&h&&!h.nodeType&&h)&&Fl.exports===x,Ml=x&&_.process,x=function(){try{return Fl&&Fl.require&&Fl.require("util"
).types||Ml&&Ml.binding&&Ml.binding("util")}catch(e){}}(),h.exports=x,x=(h=(_=Ar.exports)&&_.isTypedArray)?Ul(h):Zl,
Gn=yc,$n=Bl,Jn=jn,Wn=b.exports,Kn=ql,Yn=_=x,h=Object.prototype,Qn=h.hasOwnProperty,Xn=Object.prototype,tu=Object.keys,
nu=Object,Zn=function(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||Xn)},ei=function(e){
return tu(nu(e))},Zl=Object.prototype,ti=Zl.hasOwnProperty,ni=Ht,ii=m,oi=function(e,t){var n,i=Jn(e),o=!i&&$n(e),
a=!i&&!o&&Wn(e),s=!i&&!o&&!a&&Yn(e),r=i||o||a||s,c=r?Gn(e.length,String):[],p=c.length;for(n in e)!t&&!Qn.call(e,n
)||r&&("length"==n||a&&("offset"==n||"parent"==n)||s&&("buffer"==n||"byteLength"==n||"byteOffset"==n)||Kn(n,p))||c.push(
n);return c},ai=function(e){var t,n;if(!Zn(e))return ei(e);for(n in t=[],Object(e))ti.call(e,n
)&&"constructor"!=n&&t.push(n);return t},si=yc=function(e){return null!=e&&ii(e.length)&&!ni(e)},ri=e,ci=zl,
pi=x=function(e){return(si(e)?oi:ai)(e)},li=function(e){return ri(e,pi,ci)},h=Object.prototype,ui=h.hasOwnProperty,
Zl=function(e,t,n,i,o,a){var s,r,c,p,l,u,d,m,h,f=1&n,v=li(e),x=v.length;if(x!=li(t).length&&!f)return!1;for(s=x;s--;)if(
r=v[s],!(f?r in t:ui.call(t,r)))return!1;if(m=a.get(e),h=a.get(t),m&&h)return m==t&&h==e;for(c=!0,a.set(e,t),a.set(t,e),
p=f;++s<x;){if(l=e[r=v[s]],u=t[r],!(void 0===(d=i?f?i(u,l,r,t,e,a):i(l,u,r,e,t,a):d)?l===u||o(l,u,n,i,a):d)){c=!1;break}
p=p||"constructor"==r}return c&&!p&&(m=e.constructor)!=(h=t.constructor)&&"constructor"in e&&"constructor"in t&&!(
"function"==typeof m&&m instanceof m&&"function"==typeof h&&h instanceof h)&&(c=!1),a.delete(e),a.delete(t),c},e=N(T,
"DataView"),zl=d,h=N(T,"Promise"),Kl=d=N(T,"Set"),T=N(T,"WeakMap"),di=gd,hi=(mi=E)(E=e),fi=mi(zl),vi=mi(h),xi=mi(Kl),
gi=mi(T),e=di,(E&&"[object DataView]"!=e(new E(new ArrayBuffer(1)))||zl&&"[object Map]"!=e(new zl
)||h&&"[object Promise]"!=e(h.resolve())||Kl&&"[object Set]"!=e(new Kl)||T&&"[object WeakMap]"!=e(new T))&&(e=function(e
){var t=di(e);if(e=(e="[object Object]"==t?e.constructor:void 0)?mi(e):"")switch(e){case hi:return"[object DataView]";
case fi:return"[object Map]";case vi:return"[object Promise]";case xi:return"[object Set]";case gi:
return"[object WeakMap]"}return t}),bi=fd,yi=C,wi=w,_i=Zl,Ei=e,Ti=jn,Oi=b.exports,Ri=_,Ci="[object Arguments]",
Ni="[object Array]",Pi="[object Object]",E=Object.prototype,ji=E.hasOwnProperty,Ai=function(e,t,n,i,o,a){var s=Ti(e),
r=Ti(t),c=s?Ni:Ei(e),r=r?Ni:Ei(t),p=(c=c==Ci?Pi:c)==Pi,l=(r=r==Ci?Pi:r)==Pi;if((r=c==r)&&Oi(e)){if(!Oi(t))return!1;p=!(
s=!0)}return r&&!p?(a=a||new bi,s||Ri(e)?yi(e,t,n,i,o,a):wi(e,t,c,n,i,o,a)):1&n||(s=p&&ji.call(e,"__wrapped__"),
c=l&&ji.call(t,"__wrapped__"),!s&&!c)?r&&(a=a||new bi,_i(e,t,n,i,o,a)):o(s?e.value():e,c?t.value():t,n,i,a=a||new bi)},
Ii=fd,Si=zl=function e(t,n,i,o,a){return t===n||(null==t||null==n||!Di(t)&&!Di(n)?t!=t&&n!=n:Ai(t,n,i,o,e,a))},ki=Bt,
Li=h=function(e){return e==e&&!ki(e)},qi=x,Fi=function(e,t,n,i){var o,a,s,r,c,p,l=n.length,u=l,d=!i;if(null==e)return!u;
for(e=Object(e);l--;)if(o=n[l],d&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1;for(;++l<u;)if(s=e[a=(o=n[l])[0]],r=o[1],
d&&o[2]){if(void 0===s&&!(a in e))return!1}else if(c=new Ii,!(void 0===(p=i?i(s,r,a,e,t,c):p)?Si(r,s,3,i,c):p))return!1;
return!0},Mi=function(e){for(var t,n,i=qi(e),o=i.length;o--;)n=e[t=i[o]],i[o]=[t,n,Li(n)];return i},Ui=Kl=function(t,n){
return function(e){return null!=e&&e[t]===n&&(void 0!==n||t in Object(e))}},T=function(t){var n=Mi(t);
return 1==n.length&&n[0][2]?Ui(n[0][0],n[0][1]):function(e){return e===t||Fi(e,t,n)}},Bi=gd,zi=Di=g,Vi=jn,Hi=C=function(
e){return"symbol"==typeof e||zi(e)&&"[object Symbol]"==Bi(e)},Gi=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
$i=/^\w*$/,w=function(e,t){var n;return!Vi(e)&&(!("number"!=(n=typeof e)&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Hi(e)
)||$i.test(e)||!Gi.test(e)||null!=t&&e in Object(t))},Ji=r,H.Cache=Ji,
Wi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ki=/\\(\\)?/g,eu=(
Zl=H(function(e){var o=[];return 46===e.charCodeAt(0)&&o.push(""),e.replace(Wi,function(e,t,n,i){o.push(n?i.replace(Ki,
"$1"):t||e)}),o},function(e){return 500===eu.size&&eu.clear(),e})).cache,Yi=jt,Qi=jn,Xi=C,e=R?R.prototype:void 0,
Zi=e?e.toString:void 0,eo=b=function e(t){var n;return"string"==typeof t?t:Qi(t)?Yi(t,e)+"":Xi(t)?Zi?Zi.call(t
):"":"0"==(n=t+"")&&1/t==-1/0?"-0":n},io=Zl,oo=_=function(e){return null==e?"":eo(e)},ao=C,lo=so=function(e,t){
return to(e)?e:no(e,t)?[e]:io(oo(e))},uo=Bl,fo=m,xo=function(e,t){return null!=e&&t in Object(e)},go=E=function(e,t,n){
for(var i,o,a=(t=lo(t,e)).length,s=!(i=-1);++i<a&&(o=vo(t[i]),s=null!=e&&n(e,o));)e=e[o];return s||++i!=a?s:!!(
a=null==e?0:e.length)&&fo(a)&&ho(o,a)&&(mo(e)||uo(e))},bo=zl,yo=po=function(e,t,n){return void 0===(e=null==e?void 0:co(
e,t))?n:e},wo=function(e,t){return null!=e&&go(e,t,xo)},Eo=h,To=Kl,Ro=co=fd=function(e,t){for(var n=0,i=(t=so(t,e)
).length;null!=e&&n<i;)e=e[ro(t[n++])];return n&&n==i?e:void 0},Co=function(t){return function(e){
return null==e?void 0:e[t]}},No=function(t){return function(e){return Ro(e,t)}},Po=_o=no=w,jo=Oo=vo=ro=function(e){var t
return"string"==typeof e||ao(e)?e:"0"==(t=e+"")&&1/e==-1/0?"-0":t},Ao=T,Do=function(n,i){return _o(n)&&Eo(i)?To(Oo(n),i
):function(e){var t=yo(e,n);return void 0===t&&t===i?wo(e,n):bo(i,t,3)}},Io=r=function(e){return e},So=mo=to=jn,
ko=function(e){return Po(e)?Co(jo(e)):No(e)},Lo=function(e,t,n){for(var i,o=-1,a=Object(e),s=n(e),
r=s.length;r--&&!1!==t(a[i=s[++o]],i,a););return e},qo=x,Bo=jt,Vo=e=function(e,i){var o=-1,a=Uo(e)?Array(e.length):[];
return Mo(e,function(e,t,n){a[++o]=i(e,t,n)}),a},Go=function(e,t){return(Ho(e)?Bo:Vo)(e,zo(t))},Jo=At,Wo=Uo=Fo=yc,
Ko=ho=ql,Yo=Bt,Qo=xd,Zo=function(e,i){var o;return $o(e,function(e,t,n){return!(o=i(e,t,n))}),!!o},na=function(e,t,n){
var i=ea(e)?Qo:Zo;return n&&ta(e,t,n)&&(t=void 0),i(e,Xo(t))},ia=$o=Mo=Zl=function(e,t){var n,i,o;if(null!=e){if(!Fo(e)
)return e&&Lo(e,t,qo);for(n=e.length,i=-1,o=Object(e);++i<n&&!1!==t(o[i],i,o););}return e},oa=function(e,t){for(var n=-1
,i=null==e?0:e.length;++n<i;)if(!t(e[n],n,e))return!1;return!0},aa=function(e,i){var o=!0;return ia(e,function(e,t,n){
return o=!!i(e,t,n)}),o},sa=Xo=zo=m=function(e){return"function"==typeof e?e:null==e?Io:"object"==typeof e?So(e)?Do(e[0]
,e[1]):Ao(e):ko(e)},ra=ea=Ho=jn,ca=ta=zl=function(e,t,n){var i;return!!Yo(n)&&!!("number"==(i=typeof t)?Wo(n)&&Ko(t,
n.length):"string"==i&&t in n)&&Jo(n[t],e)},pa=function(e,t,n){var i=ra(e)?oa:aa;return n&&ca(e,t,n)&&(t=void 0),i(e,sa(
t))},la=N,h=function(){try{var e=la(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),ua=Bl,da=jn,
ma=R?R.isConcatSpreadable:void 0,fa=function(e){return da(e)||ua(e)||!!(ma&&e&&e[ma])},va=ha=vd,xa=Kl=function e(t,n,i,o
,a){var s,r=-1,c=t.length;for(i=i||fa,a=a||[];++r<c;)s=t[r],0<n&&i(s)?1<n?e(s,n-1,i,o,a):ha(a,s):o||(a[a.length]=s);
return a},ga=function(e,t){var n=-1,i=e.length;for(t=t||Array(i);++n<i;)t[n]=e[n];return t},ba=jn,ya=function(){var e,t,
n,i=arguments.length;if(!i)return[];for(e=Array(i-1),t=arguments[0],n=i;n--;)e[n-1]=arguments[n];return va(ba(t)?ga(t):[
t],xa(e,1))},wa=m,_a=yc,Ea=x,w=function(e,t,n,i){for(var o=e.length,a=n+(i?1:-1);i?a--:++a<o;)if(t(e[a],a,e))return a;
return-1},Ta=/\s/,Oa=function(e){for(var t=e.length;t--&&Ta.test(e.charAt(t)););return t},Ra=/^\s+/,Ca=T=function(e){
return e&&e.slice(0,Oa(e)+1).replace(Ra,"")},Na=Bt,Pa=C,ja=/^[-+]0x[0-9a-f]+$/i,Aa=/^0b[01]+$/i,Da=/^0o[0-7]+$/i,
Ia=parseInt,Sa=function(e){var t;return"number"==typeof e?e:Pa(e)?NaN:(Na(e)&&(t="function"==typeof e.valueOf?e.valueOf(
):e,e=Na(t)?t+"":t),"string"!=typeof e?0===e?e:+e:(e=Ca(e),(t=Aa.test(e))||Da.test(e)?Ia(e.slice(2),t?2:8):ja.test(e
)?NaN:+e))},ka=function(e){return e?(e=Sa(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0},La=w,
qa=m,Fa=ql=function(e){var t=(e=ka(e))%1;return e==e?t?e-t:e:0},Ma=Math.max,Ua=function(e,t,n){var i,o,a,s=Object(e);
return _a(e)||(i=wa(t),e=Ea(e),t=function(e){return i(s[e],e,s)}),-1<(a=(a=null==(o=e)?0:o.length)?((n=null==n?0:Fa(n)
)<0&&(n=Ma(a+n,0)),La(o,qa(t),n)):-1)?s[i?e[a]:a]:void 0},Ba=function(e,t,n,i){var o=-1,a=null==e?0:e.length;for(i&&a&&(
n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n},za=Zl,Va=m,Ha=function(e,i,o,a,t){return t(e,function(e,t,n){o=a?(a=!1,e):i(o
,e,t,n)}),o},Ga=jn,$a=function(e,t,n){var i=Ga(e)?Ba:Ha,o=arguments.length<3;return i(e,Va(t),n,o,za)},xd=function(e,t,n
){var i,o=-1,a=e.length;for((n=a<n?a:n)<0&&(n+=a),a=n<(t=t<0?a<-t?0:a+t:t)?0:n-t>>>0,t>>>=0,i=Array(a);++o<a;)i[o]=e[o+t
];return i},Ja=w,Wa=function(e){return e!=e},Ka=function(e,t,n){for(var i=n-1,o=e.length;++i<o;)if(e[i]===t)return i;
return-1},N=function(e,t,n){return t==t?Ka(e,t,n):Ja(e,Wa,n)},d&&qr(new d([,-0]))[1],Ya=C,Qa=function(e,t){var n,i,o,a,s
,r,c,p;if(e!==t){if(n=void 0!==e,i=null===e,o=e==e,a=Ya(e),s=void 0!==t,r=null===t,c=t==t,p=Ya(t),
!r&&!p&&!a&&t<e||a&&s&&c&&!r&&!p||i&&s&&c||!n&&c||!o)return 1;if(!i&&!a&&!p&&e<t||p&&n&&o&&!i&&!a||r&&n&&o||!s&&o||!c
)return-1}return 0},Xa=jt,Za=fd,es=m,ts=e,ns=function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e},
is=Ul,os=function(e,t,n){for(var i,o=-1,a=e.criteria,s=t.criteria,r=a.length,c=n.length;++o<r;)if(i=Qa(a[o],s[o])
)return c<=o?i:i*("desc"==n[o]?-1:1);return e.index-t.index},as=r,ss=jn,rs=function(e,t,n){switch(n.length){case 0:
return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}
return e.apply(t,n)},cs=Math.max,ps=function(e){return function(){return e}},Bl=(ls=h)?function(e,t){return ls(e,
"toString",{configurable:!0,enumerable:!1,value:ps(t),writable:!0})}:r,us=Date.now,Yl=Bl,ds=Kl,ms=function(e,i,n){var o;
return i=i.length?Xa(i,function(t){return ss(t)?function(e){return Za(e,1===t.length?t[0]:t)}:t}):[as],o=-1,i=Xa(i,is(es
)),e=ts(e,function(t,e,n){return{criteria:Xa(i,function(e){return e(t)}),index:++o,value:t}}),ns(e,function(e,t){
return os(e,t,n)})},hs=zl,function(){var e=us(),t=16-e+ +Xl;if(Xl=e,0<t){if(800<=++Ql)return}else Ql=0;Yl.apply(void 0,
arguments)}((cd=R=function(e,t){var n;return null==e?[]:(1<(n=t.length)&&hs(e,t[0],t[1])?t=[]:2<n&&hs(t[0],t[1],t[2])&&(
t=[t[0]]),ms(e,ds(t,1),[]))},pd=void(Xl=Ql=0),ld=r,pd=cs(void 0===pd?cd.length-1:pd,0),function(){for(var e,t=arguments,
n=-1,i=cs(t.length-pd,0),o=Array(i);++n<i;)o[n]=t[pd+n];for(n=-1,e=Array(pd+1);++n<pd;)e[n]=t[n];return e[pd]=ld(o),rs(
cd,this,e)}),R+""),vs=md,xs=function(e,i){var o=[];return fs(e,function(e,t,n){i(e,t,n)&&o.push(e)}),o},gs=m,
ys=function(e,t){return(bs(e)?vs:xs)(e,gs(t))},ws=r,_s=function(e,t){for(var n=-1,i=null==e?0:e.length;++n<i&&!1!==t(e[n
],n,e););return e},Es=fs=Zl,Ts=function(e){return"function"==typeof e?e:ws},Os=bs=jn,Rs=function(e,t){return(Os(e)?_s:Es
)(e,Ts(t))},Cs=xd,vd=function(e,t,n){var i=e.length;return n=void 0===n?i:n,!t&&i<=n?e:Cs(e,t,n)},Ns=RegExp(
"[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),yc=function(e){return Ns.test(e)}
,(w=Ar.exports)&&w.isRegExp,qr=function(e){return e.split("")},
d="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:"+[
"[^\\ud800-\\udfff]","(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]"].join("|"
)+")[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",C="(?:"+[
"[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?","[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
"(?:\\ud83c[\\udde6-\\uddff]){2}","[\\ud800-\\udbff][\\udc00-\\udfff]","[\\ud800-\\udfff]"].join("|")+")",Ps=RegExp(
"\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+C+d,"g"),js=qr,As=yc,Ds=function(e){return e.match(Ps)||[]},
Ss=Is=N,ks=b,Ls=T,qs=vd,Fs=function(e,t){for(var n=e.length;n--&&-1<Is(t,e[n],0););return n},Ms=function(e,t){for(
var n=-1,i=e.length;++n<i&&-1<Ss(t,e[n],0););return n},Us=function(e){return(As(e)?Ds:js)(e)},Bs=_,zs=function(e,t,n){
var i;return(e=Bs(e))&&(n||void 0===t)?Ls(e):e&&(t=ks(t))?(n=Us(e),t=Us(t),i=Ms(n,t),t=Fs(n,t)+1,qs(n,i,t).join("")):e},
fd=Object.prototype,Vs=fd.hasOwnProperty,Hs=function(e,t){return null!=e&&Vs.call(e,t)},Gs=E,v=function(e,t){
return null!=e&&Gs(e,t,Hs)},Ws=function(e){return!0===e||!1===e||Js(e)&&"[object Boolean]"==$s(e)},Ks=function(e){
return null===e},Qs=jn,Zs=function(e){return"string"==typeof e||!Qs(e)&&Xs(e)&&"[object String]"==Ys(e)},er=Ys=$s=gd,
tr=Xs=Js=g,nr=function(e){return"number"==typeof e||tr(e)&&"[object Number]"==er(e)},rr=function(e,t,n){return e=sr(e),
n=null==n?0:ir(ar(n),0,e.length),t=or(t),e.slice(n,n+t.length)==t},cr=ir=function(e,t,n){return e==e&&(void 0!==n&&(
e=e<=n?e:n),void 0!==t&&(e=t<=e?e:t)),e},pr=or=b,lr=ar=ql,ur=sr=_,dr=function(e,t,n){var i;return e=ur(e),t=pr(t),
i=e.length,i=n=void 0===n?i:cr(lr(n),0,i),0<=(n-=t.length)&&e.slice(n,i)==t},mr=jt,hr=function(t,e){return mr(e,
function(e){return t[e]})},fr=x,vr=function(e){return null==e?[]:hr(e,fr(e))};class Md{constructor(e,t){s(this,"_logger"
,void 0),s(this,"name",void 0),s(this,"_level",void 0),this.name=e,this._logger=t,this._level=void 0}getLogLevel(){var e
return null!=(e=this._level)?e:this._logger.getLogLevel()}setLogLevel(e){return this._level=e,this}debug(...e){(
void 0===this._level||this._level<=l.DEBUG)&&this._logger.debug(`[${this.name}]`,...e)}info(...e){(
void 0===this._level||this._level<=l.INFO)&&this._logger.info(`[${this.name}]`,...e)}warn(...e){(
void 0===this._level||this._level<=l.WARN)&&this._logger.warn(`[${this.name}]`,...e)}error(...e){(
void 0===this._level||this._level<=l.ERROR)&&this._logger.error(`[${this.name}]`,...e)}}class j{static setLogLevel(e){
return e&&(this._level=e),this}static getLogLevel(){return this._level}static getLogLevelString(){var e=this._level;
switch(e){case l.DEBUG:return"DEBUG";case l.INFO:return"INFO";case l.WARN:return"WARN";case l.ERROR:return"ERROR";
case l.NONE:return"NONE";default:return"Unknown:"+e}}static setLogger(e){if(!e)throw new TypeError(
"The logger was not defined");this._logger=e}static debug(...e){this._level<=l.DEBUG&&this._logger.debug(...e)}
static info(...e){this._level<=l.INFO&&this._logger.info(...e)}static warn(...e){this._level<=l.WARN&&this._logger.warn(
...e)}static error(...e){this._level<=l.ERROR&&this._logger.error(...e)}static createLogger(e){return new Md(e,j)}}s(j,
"Level",l={DEBUG:0,0:"DEBUG",INFO:1,1:"INFO",WARN:2,2:"WARN",ERROR:3,3:"ERROR",NONE:4,4:"NONE"}),s(j,"_level",l.DEBUG),
s(j,"_logger",console);const Ud=j.createLogger("ProcessUtils");class Bd{static getArguments(){return process.argv.slice(
2)}static parseEnvFileLine(e,t){if(t.indexOf("=")<0)t.length&&(e[t]="");else{const n=t.split("=");t=n.shift(),(t=zs(t)
).length&&(e[t]=n.join("=").trim())}return e}static parseEnvFile(e){const t=bd.default.readFileSync(e,{encoding:"utf-8"}
),n=t.split("\n");return n.reduce(Bd.parseEnvFileLine,{})}static initEnvFromFile(e){e=Bd.parseEnvFile(e),process.env=f(
f({},e),process.env)}static initEnvFromDefaultFiles(){var e=yd.default.join(process.cwd(),".env");bd.default.existsSync(
e)&&Bd.initEnvFromFile(e)}static setupDestroyHandler(n,i){let o=!1;var e=t=>e=>{Bd._printErrors(t,e);try{o||(o=!0,n())
}catch(e){i(e)}};process.on("exit",e("exit")),process.on("SIGTERM",e("SIGTERM")),process.on("SIGINT",e("SIGINT")),
process.on("SIGUSR1",e("SIGUSR1")),process.on("SIGUSR2",e("SIGUSR2")),process.on("uncaughtException",e(
"uncaughtException"))}static _printErrors(e,t){try{t?Ud.error(`Closing process because "${e}" event: `,t
):"exit"===e?Ud.debug(`Closing process because "${e}" event`):Ud.info(`Closing process because "${e}" event`)}catch(e){
console.error("Error while printing errors: ",e)}}}Ul=null!=(e=ne("%{BUILD_BACKEND_URL}"))?e:"http://0.0.0.0:3000",
Bl=null!=(h=ne(""))?h:"nor-backend",zl=null!=(Kl=ne(""))?Kl:"","".startsWith("%{")&&"".endsWith("}"),Zl=null!=(
r=function(e){if(e){if(function(){switch(e){case l.DEBUG:case l.INFO:case l.WARN:case l.ERROR:case l.NONE:return 1;
default:return}}())return e;switch(e=(""+e).toUpperCase()){case"ALL":case"DEBUG":return l.DEBUG;case"INFO":return l.INFO
case"WARN":case"WARNING":return l.WARN;case"ERR":case"ERROR":return l.ERROR;case"FALSE":case"OFF":case"QUIET":
case"SILENT":case"NONE":return l.NONE;default:return}}}(null!=(m=ee(null==(R=process)||null==(md=R.env
)?void 0:md.BACKEND_LOG_LEVEL))?m:ee(zl)))?r:l.INFO;const zd=null!=(w=ee(null==(xd=process)||null==(Ar=xd.env
)?void 0:Ar.BACKEND_SCRIPT_NAME))?w:Bl,Vd=null!=(qr=ee(null==(C=process)||null==(d=C.env)?void 0:d.BACKEND_URL))?qr:Ul,
Hd=(o={OPTIONS:0,0:"OPTIONS",GET:1,1:"GET",POST:2,2:"POST",PUT:3,3:"PUT",DELETE:4,4:"DELETE",PATCH:5,5:"PATCH"},
"WINDOW"===(gd=null!=(E=null!=(T=null==(yc=process)||null==(N=yc.env)?void 0:N.NOR_REQUEST_CLIENT_MODE)?T:null==(
vd=process)||null==(fd=vd.env)?void 0:fd.REACT_APP_REQUEST_CLIENT_MODE)?E:"")||!(
"undefined"==typeof window||!window.fetch)),Gd="NODE"===gd||!Hd;class $d{static async getRequestDataAsBuffer(i){
return new Promise((e,t)=>{const n=[];i.on("data",e=>{try{n.push(e)}catch(e){t(e)}}),i.on("end",()=>{try{e(
Buffer.concat(n))}catch(e){t(e)}})})}static async getRequestDataAsString(e,t="utf8"){
const n=await $d.getRequestDataAsBuffer(e);return n.toString(t)}static async getRequestDataAsFormUrlEncoded(e){if(""!==(
e=await $d.getRequestDataAsString(e)))return _d.parse(e)}static async getRequestDataAsJson(e){if(""!==(
e=await $d.getRequestDataAsString(e)))return JSON.parse(e)}}(g=i={Continue:100,100:"Continue",SwitchingProtocols:101,
101:"SwitchingProtocols",Processing:102,102:"Processing",CheckPoint:103,103:"CheckPoint",OK:200,200:"OK",Created:201,
201:"Created",Accepted:202,202:"Accepted",NonAuthoritativeInformation:203,203:"NonAuthoritativeInformation",
NoContent:204,204:"NoContent",ResetContent:205,205:"ResetContent",PartialContent:206,206:"PartialContent",
MultiStatus:207,207:"MultiStatus",AlreadyReported:208,208:"AlreadyReported",IMUsed:226,226:"IMUsed",MultipleChoices:300,
300:"MultipleChoices",MovedPermanently:301,301:"MovedPermanently",Found:302,302:"Found",SeeOther:303,303:"SeeOther",
NotModified:304,304:"NotModified",TemporaryRedirect:307,307:"TemporaryRedirect",PermanentRedirect:308,
308:"PermanentRedirect",BadRequest:400,400:"BadRequest",Unauthorized:401,401:"Unauthorized",PaymentRequired:402,
402:"PaymentRequired",Forbidden:403,403:"Forbidden",NotFound:404,404:"NotFound",MethodNotAllowed:405,
405:"MethodNotAllowed",NotAcceptable:406,406:"NotAcceptable",ProxyAuthenticationRequired:407,
407:"ProxyAuthenticationRequired",RequestTimeout:408,408:"RequestTimeout",Conflict:409,409:"Conflict",Gone:410,
410:"Gone",LengthRequired:411,411:"LengthRequired",PreconditionFailed:412,412:"PreconditionFailed",PayloadTooLarge:413,
413:"PayloadTooLarge",URITooLong:414,414:"URITooLong",UnsupportedMediaType:415,415:"UnsupportedMediaType",
RequestedRangeNotSatisfiable:416,416:"RequestedRangeNotSatisfiable",ExpectationFailed:417,417:"ExpectationFailed",
IAmATeapot:418,418:"IAmATeapot",UnprocessableEntity:422,422:"UnprocessableEntity",Locked:423,423:"Locked",
FailedDependency:424,424:"FailedDependency",TooEarly:425,425:"TooEarly",UpgradeRequired:426,426:"UpgradeRequired",
PreconditionRequired:428,428:"PreconditionRequired",TooManyRequests:429,429:"TooManyRequests",
RequestHeaderFieldsTooLarge:431,431:"RequestHeaderFieldsTooLarge",UnavailableForLegalReasons:451,
451:"UnavailableForLegalReasons",InternalError:500,500:"InternalError",InternalServerError:500})[500
]="InternalServerError",g[g.NotImplemented=501]="NotImplemented",g[g.BadGateway=502]="BadGateway",g[
g.ServiceUnavailable=503]="ServiceUnavailable",g[g.GatewayTimeout=504]="GatewayTimeout",g[g.HttpVersionNotSupported=505
]="HttpVersionNotSupported",g[g.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",g[g.InsufficientStorage=507
]="InsufficientStorage",g[g.LoopDetected=508]="LoopDetected",g[g.BandwidthLimitExceeded=509]="BandwidthLimitExceeded",g[
g.NotExtended=510]="NotExtended",g[g.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",xr={
ERROR:"error"};class Jd extends Error{constructor(e,t=void 0,n=void 0,i=void 0,o=void 0){super(t||re(e)),s(this,"status"
,void 0),s(this,"method",void 0),s(this,"url",void 0),s(this,"body",void 0),s(this,"__proto__",void 0),
t=new.target.prototype,Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.status=e,this.method=n,
this.url=i,this.body=o}valueOf(){return this.status}toString(){return this.status+" "+this.message}toJSON(){return{
type:xr.ERROR,status:this.status,message:this.message}}getStatusCode(){return this.status}getMethod(){return this.method
}getUrl(){return this.url}getBody(){return this.body}}a={TEXT:"text/plain",CALENDAR:"text/calendar",
JSON:"application/json"};const Wd=Gd?require("fs").promises:void 0,Kd=j.createLogger("NodeRequestClient");class Yd{
static setLogLevel(e){Kd.setLogLevel(e)}constructor(e,t){s(this,"_http",void 0),s(this,"_https",void 0),this._http=e,
this._https=t}async textRequest(e,t,n,i){switch(e){case o.GET:return this._getText(t,n,i);case o.POST:
return this._postText(t,n,i);case o.PATCH:return this._patchText(t,n,i);case o.PUT:return this._putText(t,n,i);
case o.DELETE:return this._deleteText(t,n,i);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _getText(e,t,n){const i={method:"GET",headers:{"Content-Type":a.TEXT}};return t&&(i.headers=f(f({},i.headers),t))
,this._textRequest(o.GET,e,i,n).then(Yd._successTextResponse)}async _putText(e,t,n){const i={method:"PUT",headers:{
"Content-Type":a.TEXT}};return t&&(i.headers=f(f({},i.headers),t)),this._textRequest(o.PUT,e,i,n).then(
Yd._successTextResponse)}async _postText(e,t,n){const i={method:"POST",headers:{"Content-Type":a.TEXT}};return t&&(
i.headers=f(f({},i.headers),t)),this._textRequest(o.POST,e,i,n).then(Yd._successTextResponse)}async _patchText(e,t,n){
const i={method:"PATCH",headers:{"Content-Type":a.TEXT}};return t&&(i.headers=f(f({},i.headers),t)),this._textRequest(
o.PATCH,e,i,n).then(Yd._successTextResponse)}async _deleteText(e,t,n){const i={method:"DELETE",headers:{
"Content-Type":a.TEXT}};return t&&(i.headers=f(f({},i.headers),t)),this._textRequest(o.DELETE,e,i,n).then(
Yd._successTextResponse)}static async _successTextResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw Kd.error(`Unsuccessful response with status ${t}: `,e),new Jd(t,`Error ${t} for ${ie(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}async _textRequest(e,t,n,i){return n=await this._httpRequest(t,n,i),
i=await $d.getRequestDataAsString(n),{method:e,url:t,statusCode:null!=(e=null==n?void 0:n.statusCode)?e:0,
headers:n.headers,body:i}}async jsonRequest(e,t,n,i){switch(e){case o.GET:return this._getJson(t,n,i);case o.POST:
return this._postJson(t,n,i);case o.PATCH:return this._patchJson(t,n,i);case o.PUT:return this._putJson(t,n,i);
case o.DELETE:return this._deleteJson(t,n,i);default:throw new TypeError("[Node]RequestClient: Unsupported method: "+e)}
}async _checkSocketFile(t){try{const e=await Wd.stat(t);return!!e.isSocket()}catch(e){if("ENOTDIR"===(
t=null==e?void 0:e.code))Kd.debug("_checkSocketFile: ENOTDIR: ",e);else{if("ENOENT"!==t)throw Kd.error(
`_checkSocketFile: Error "${t}" passed on: `,e),e;Kd.debug("_checkSocketFile: ENOENT: ",e)}}}async _findSocketFile(e){
var t=await this._checkSocketFile(e);return!0===t?e:!1!==t&&"/"!==(t=yd.default.dirname(e))&&t!==e?this._findSocketFile(
t):void 0}async _httpRequest(a,s,e){var t;const r=e?JSON.stringify(e)+"\n":void 0,c=new wd.default.URL(a);let p;
const l=null!=(e=null===c||void 0===c?void 0:c.protocol)?e:"";if("unix:"===l||"socket:"===l){
const n=null!==c&&void 0!==c&&c.pathname?null===c||void 0===c?void 0:c.pathname:"/";if("/"===n)throw new TypeError(
"No socket path found for unix protocol URL: "+a);if(!(e=await this._findSocketFile(n)))throw new TypeError(
"No socket path found for unix protocol URL: "+a);t=""+(e.length<n.length?n.substr(e.length):"")+(
"?"!==c.search?c.search:""),s=f(f({},s),{},{socketPath:e,path:t}),a="",p=this._http
}else p="https:"===l?this._https:this._http;return new Promise((t,n)=>{let i=!1;try{if(!p)throw new Error(
"HTTP module not defined. This error should not happen.");var o;let e;a&&(s=f(f({},s),{},{hostname:c.hostname,
port:null!=(o=null!==c&&void 0!==c&&c.port?parseInt(c.port,10):void 0)?o:"https:"===l?443:80,path:c.pathname+c.search}))
,(e=p.request(s,e=>{i?Kd.warn("Warning! Request had already ended when the response was received."):(i=!0,t(e))})).on(
"error",e=>{i?(Kd.warn("Warning! Request had already ended when the response was received."),Kd.debug(
"Error from event: ",e)):(Kd.debug("Passing on error from event: ",e),i=!0,n(e))}),r&&e.write(r),e.end()}catch(e){i?(
Kd.warn("Warning! Request had already ended when the response was received."),Kd.debug("Exception: ",e)):(Kd.debug(
"Passing on error: ",e),i=!0,n(e))}})}async _jsonRequest(e,t,n,i){return n=await this._httpRequest(t,n,i),
i=await $d.getRequestDataAsJson(n),{method:e,url:t,statusCode:null!=(e=null==n?void 0:n.statusCode)?e:0,
headers:n.headers,body:i}}async _getJson(e,t,n){const i={method:"GET",headers:{"Content-Type":a.JSON}};return t&&(
i.headers=f(f({},i.headers),t)),this._jsonRequest(o.GET,e,i,n).then(Yd._successJsonResponse)}async _putJson(e,t,n){
const i={method:"PUT",headers:{"Content-Type":a.JSON}};return t&&(i.headers=f(f({},i.headers),t)),this._jsonRequest(
o.PUT,e,i,n).then(Yd._successJsonResponse)}async _postJson(e,t,n){const i={method:"POST",headers:{"Content-Type":a.JSON}
};return t&&(i.headers=f(f({},i.headers),t)),this._jsonRequest(o.POST,e,i,n).then(Yd._successJsonResponse)}
async _patchJson(e,t,n){const i={method:"PATCH",headers:{"Content-Type":a.JSON}};return t&&(i.headers=f(f({},i.headers),
t)),this._jsonRequest(o.PATCH,e,i,n).then(Yd._successJsonResponse)}async _deleteJson(e,t,n){const i={method:"DELETE",
headers:{"Content-Type":a.JSON}};return t&&(i.headers=f(f({},i.headers),t)),this._jsonRequest(o.DELETE,e,i,n).then(
Yd._successJsonResponse)}static async _successJsonResponse(e){var t=null==e?void 0:e.statusCode;if(t<200||400<=t
)throw Kd.error(`Unsuccessful response with status ${t}: `,e),new Jd(t,`Error ${t} for ${ie(e.method)} `+e.url,e.method,
e.url,e.body);return e.body}}class Qd{constructor(e){s(this,"_fetch",void 0),this._fetch=e}jsonRequest(e,t,n,i){switch(e
){case o.GET:return this._getJson(t,n,i);case o.POST:return this._postJson(t,n,i);case o.PUT:return this._putJson(t,n,i)
case o.DELETE:return this._deleteJson(t,n,i);default:throw new TypeError("[Fetch]RequestClient: Unsupported method: "+e)
}}textRequest(e,t,n,i){switch(e){case o.GET:return this._getText(t,n,i);case o.POST:return this._postText(t,n,i);
case o.PUT:return this._putText(t,n,i);case o.DELETE:return this._deleteText(t,n,i);default:throw new TypeError(
"[Fetch]RequestClient: Unsupported method: "+e)}}_getJson(e,t,n){const i={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":a.JSON},credentials:"same-origin"};return t&&(i.headers=f(f({},i.headers),t)),n&&(
i.body=JSON.stringify(n)),this._fetch(e,i).then(e=>Qd._successJsonResponse(e,o.GET))}_putJson(e,t,n){const i={
method:"PUT",mode:"cors",cache:"no-cache",headers:{"Content-Type":a.JSON},credentials:"same-origin"};return t&&(
i.headers=f(f({},i.headers),t)),n&&(i.body=JSON.stringify(n)),this._fetch(e,i).then(e=>Qd._successJsonResponse(e,o.PUT))
}_postJson(e,t,n){const i={method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":a.JSON},
credentials:"same-origin"};return t&&(i.headers=f(f({},i.headers),t)),n&&(i.body=JSON.stringify(n)),this._fetch(e,i
).then(e=>Qd._successJsonResponse(e,o.POST))}_deleteJson(e,t,n){const i={method:"DELETE",mode:"cors",cache:"no-cache",
headers:{"Content-Type":a.JSON},credentials:"same-origin"};return t&&(i.headers=f(f({},i.headers),t)),n&&(
i.body=JSON.stringify(n)),this._fetch(e,i).then(e=>Qd._successJsonResponse(e,o.DELETE))}static _successJsonResponse(e,t
){const n=e.status;if(!e.ok||n<200||400<=n){const i=e.url,o=`${n} ${e.statusText} for ${ie(t)} `+i;return e.json().then(
e=>{throw new Jd(n,o,t,i,e)})}return e.json()}_getText(e,t,n){const i={method:"GET",mode:"cors",cache:"no-cache",
headers:{"Content-Type":a.TEXT},credentials:"same-origin"};return t&&(i.headers=f(f({},i.headers),t)),n&&(i.body=n),
this._fetch(e,i).then(e=>Qd._successTextResponse(e,o.GET))}_putText(e,t,n){const i={method:"PUT",mode:"cors",
cache:"no-cache",headers:{"Content-Type":a.TEXT},credentials:"same-origin"};return t&&(i.headers=f(f({},i.headers),t)),
n&&(i.body=n),this._fetch(e,i).then(e=>Qd._successTextResponse(e,o.PUT))}_postText(e,t,n){const i={method:"POST",
mode:"cors",cache:"no-cache",headers:{"Content-Type":a.TEXT},credentials:"same-origin"};return t&&(i.headers=f(f({},
i.headers),t)),n&&(i.body=n),this._fetch(e,i).then(e=>Qd._successTextResponse(e,o.POST))}_deleteText(e,t,n){const i={
method:"DELETE",mode:"cors",cache:"no-cache",headers:{"Content-Type":a.TEXT},credentials:"same-origin"};return t&&(
i.headers=f(f({},i.headers),t)),n&&(i.body=n),this._fetch(e,i).then(e=>Qd._successTextResponse(e,o.DELETE))}
static _successTextResponse(e,t){const n=e.status;if(!e.ok||n<200||400<=n){const i=e.url,
o=`${n} ${e.statusText} for ${ie(t)} `+i;return e.text().then(e=>{throw new Jd(n,o,t,i,e)})}return e.text()}}
const Xd=Gd?require("http"):void 0,Zd=Gd?require("https"):void 0,em=j.createLogger("RequestClient");class tm{
static setLogLevel(e){em.setLogLevel(e),Yd.setLogLevel(e)}static async textRequest(e,t,n,i){
return this._client.textRequest(e,t,n,i)}static async getText(e,t){return this._client.textRequest(o.GET,e,t)}
static async postText(e,t,n){return em.debug(".postJson: ",e,t,n),this._client.textRequest(o.POST,e,n,t)}
static async patchText(e,t,n){return em.debug(".patchJson: ",e,t,n),this._client.textRequest(o.PATCH,e,n,t)}
static async putText(e,t,n){return em.debug(".putJson: ",e,t,n),this._client.textRequest(o.PUT,e,n,t)}
static async deleteText(e,t,n){return em.debug(".deleteJson: ",e,n,t),this._client.textRequest(o.DELETE,e,t,n)}
static async jsonRequest(e,t,n,i){return this._client.jsonRequest(e,t,n,i)}static async getJson(e,t){
return this._client.jsonRequest(o.GET,e,t)}static async postJson(e,t,n){return em.debug(".postJson: ",e,t,n),
this._client.jsonRequest(o.POST,e,n,t)}static async patchJson(e,t,n){return em.debug(".patchJson: ",e,t,n),
this._client.jsonRequest(o.PATCH,e,n,t)}static async putJson(e,t,n){return em.debug(".putJson: ",e,t,n),
this._client.jsonRequest(o.PUT,e,n,t)}static async deleteJson(e,t,n){return em.debug(".deleteJson: ",e,n,t),
this._client.jsonRequest(o.DELETE,e,t,n)}static _initClient(){if(Hd){const e=class{static hasWindow(){return!!le()}
static getWindow(){return le()}static getParent(){var e;return null==(e=le())?void 0:e.parent}}.getWindow();if(e
)return em.debug("Detected browser environment"),new Qd(e.fetch.bind(e));throw new TypeError(
"RequestClient: Could not detect request client implementation: No window object")}if(Gd)return new Yd(Xd,Zd);
throw new TypeError("RequestClient: Could not detect request client implementation")}}s(tm,"_client",tm._initClient()),
gr={OK:0,0:"OK",ERROR:1,1:"ERROR",HELP:2,2:"HELP",VERSION:3,3:"VERSION"};const nm=j.createLogger("HttpServerService");
class im{constructor(e=3e3,t=void 0,n=void 0){s(this,"_requestHandler",void 0),s(this,"_hostname",void 0),s(this,"_port"
,void 0),s(this,"_closeCallback",void 0),s(this,"_listenCallback",void 0),s(this,"_server",void 0),s(this,"_handler",
void 0),nm.debug("new: ",t,e,n),this._requestHandler=this._onRequest.bind(this),
this._listenCallback=this._onListen.bind(this),this._closeCallback=this._onClose.bind(this),this._hostname=t,
this._port=e,this._handler=n,this._server=hd.createServer(this._requestHandler)}start(){nm.debug(
"Going to start server at "+this._getConnectionString()),void 0===this._hostname?this._server.listen(this._port,
this._listenCallback):this._server.listen(this._port,this._hostname,this._listenCallback)}stop(){nm.debug(
"Going to stop server at "+this._getConnectionString()),this._server.close(this._closeCallback)}setHandler(e){nm.debug(
`Setting handler at ${this._getConnectionString()} as "${e}", was "${this._handler}"`),this._handler=e}
_getConnectionString(){return void 0===this._hostname?"http://"+this._port:`http://${this._hostname}:`+this._port}
async _callRequestHandler(t,e){if(void 0!==this._handler){try{await this._handler(t,e)}catch(e){nm.error(
`"${t.method} ${t.url}": Response handler had an error: `,e)}e.writableEnded||(nm.warn(
`"${t.method} ${t.url}": Warning! Request handler did not close the response.`),e.end())}else nm.error(
`"${t.method} ${t.url}": No handler configured"`),e.end("Error")}_onRequest(t,e){this._callRequestHandler(t,e).catch(
e=>{nm.error(`${t.method} ${t.url}: Error: `,e)})}_onListen(){nm.info("Started at "+this._getConnectionString())}
_onClose(){nm.debug("Closed at "+this._getConnectionString())}}class A{static isObject(e){return Z(e)}
static hasPropertyMethods(e){return v(e,"methods")}static hasPropertyControllerProperties(e){return v(e,
"controllerProperties")}static hasPropertyPaths(e){return v(e,"paths")}static hasPropertyParams(e){return v(e,"params")}
static hasPropertyMappings(e){return v(e,"mappings")}static hasPropertyController(e){return v(e,"controller")}
static hasPropertyQueryParam(e){return v(e,"queryParam")}static hasPropertyType(e){return v(e,"type")}
static hasProperty__requestMappings(e){return v(e,"__requestMappings")}static hasPropertyStatus(e){return v(e,"status")}
static hasPropertyMessage(e){return v(e,"message")}static createOrFunction(...e){return t=>K(e,e=>Ht(e)?e(t):t===e)}
static everyPropertyIs(t,e){return Y(Go(te(t),e=>t[e]),e)}static explainEveryPropertyIs(t,n,i){return ys(Go(Go(te(t),
e=>t[e]),(e,t)=>n(e)?"":`#${t}: `+i(e)),e=>!!e)}}br={JSON:0,0:"JSON",STRING:1,1:"STRING",INTEGER:2,2:"INTEGER",NUMBER:3,
3:"NUMBER"},(b=u=u||{})[b.REQUEST_BODY=0]="REQUEST_BODY",b[b.QUERY_PARAM=1]="QUERY_PARAM",b[b.REQUEST_HEADER=2
]="REQUEST_HEADER",b[b.REQUEST_HEADER_MAP=3]="REQUEST_HEADER_MAP",b[b.PATH_VARIABLE=4]="PATH_VARIABLE",b[
b.PATH_VARIABLE_MAP=5]="PATH_VARIABLE_MAP",b[b.MODEL_ATTRIBUTE=6]="MODEL_ATTRIBUTE";const om=j.createLogger(
"RequestController"),am="__requestMappings",sm=j.createLogger("Headers");class rm{static setLogLevel(e){sm.setLogLevel(e
)}constructor(e){s(this,"_value",void 0),s(this,"_uninitializedValue",void 0),this._value=void 0,
this._uninitializedValue=e}_initializeValue(){var t=this._value,n=this._uninitializedValue;try{n&&(
this._uninitializedValue=void 0,this.addAll(n))}catch(e){throw this._value=t,this._uninitializedValue=n,e}}clear(){
this._value={},this._uninitializedValue=void 0}add(e,t){this._uninitializedValue&&this._initializeValue(),sm.debug(
"add header: ",e,t),e=e.toLowerCase();var n=this._value&&v(this._value,e)?this._value[e]:void 0;
void 0===this._value?this._value={[e]:t}:void 0!==n?Ee(n)?this._value=f(f({},this._value),{},{[e]:ya([],n,[t])}
):this._value=f(f({},this._value),{},{[e]:[n,t]}):this._value=f(f({},this._value),{},{[e]:t})}containsKey(e){
return this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase(),v(this._value,e)}isEmpty(){
this._uninitializedValue&&this._initializeValue();var e=this._value;return!e||0===te(e).length}keySet(){
this._uninitializedValue&&this._initializeValue();const t=new Set;var e;return void 0!==this._value&&(e=te(this._value),
Rs(e,e=>{t.add(e)})),t}getValue(e){if(this._uninitializedValue&&this._initializeValue(),this._value
)return e=e.toLowerCase(),v(this._value,e)?this._value[e]:void 0}getFirst(e){
return this._uninitializedValue&&this._initializeValue(),Ee(e=this.getValue(e))?e.length?e[0]:void 0:e}getHost(){
return this._uninitializedValue&&this._initializeValue(),this.getFirst("host")}addAll(e,t){if(
this._uninitializedValue&&this._initializeValue(),p(e)){const n=e;if(!$(t))throw new TypeError(
"Headers.addAll signature must be (string, string[]) or (HeadersObject)");Rs(t,e=>{this.add(n,e)})}else{const i=e;Rs(te(
i),t=>{var e=i[t];Ee(e)?Rs(e,e=>{this.add(t,e)}):void 0!==e&&this.add(t,e)})}}remove(e){
this._uninitializedValue&&this._initializeValue(),e=e.toLowerCase();var t=this.getValue(e);const n=f({},this._value);
return n&&v(n,e)&&delete n[e],this._value=n,t}set(e,t){this._uninitializedValue&&this._initializeValue(),
e=e.toLowerCase(),void 0===this._value?this._value={[e]:t}:this._value=f(f({},this._value),{},{[e]:t})}setAll(t){
this._uninitializedValue&&this._initializeValue(),Rs(te(t),e=>{this.set(e,t[e])})}valueOf(){var e;
return this._uninitializedValue&&this._initializeValue(),null!=(e=this._value)?e:void 0}toString(){
this._uninitializedValue&&this._initializeValue();const n=this._value;if(!n||this.isEmpty())return"Headers()";var e=te(n
);const t=Go(e,e=>{const t=n[e];return t?$(t)?e+": "+t.map(e=>0<=t.indexOf(";")||0<=t.indexOf(",")?`"${t}"`:t).join(", "
):0<=t.indexOf(";")?`${e}: "${t}"`:e+": "+t:""+e});return`Headers(${t.join("; ")})`}clone(){
return this._uninitializedValue&&this._initializeValue(),new rm(this._value?f({},this._value):void 0)}}class cm{
static toString(...e){return Go(e,e=>Ks(e)?"null":""+e).join("")}static processVariables(i,o,a,s,r=void 0){return Ee(i
)?Go(i,e=>cm.processVariables(e,o,a,s,r)):_e(i)?$a(te(i),(e,t)=>{var n=i[t];return e[""+cm.processVariables(t,o,a,s,r)
]=cm.processVariables(n,o,a,s,r),e},{}):p(i)?cm.processVariablesInString(i,o,a,s,r):i}static isValidKeyword(e){return!(
e.length<=0)&&(!!"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._".includes(e[0])||Y(e,
e=>"QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm._1234567890".includes(e)))}static processVariablesInString(t,n,
i,o,a=void 0){var e,s,r,c,p;if(0===t.length)return"";let l;if(l=Ht(n)?n:e=>po(n,e,a),rr(t,i)&&dr(t,o)){let e=t.substr(
i.length,t.length-i.length-o.length);if(e.indexOf(i)<0&&(e=zs(e),cm.isValidKeyword(e)))return l(e)}let u="",d=0;for(
;0<=d&&d<t.length;)if(e=d,(d=t.indexOf(i,e))<0)u+=t.substr(e),d=t.length;else{if(r=(s=d)+i.length,(p=t.indexOf(o,r))<0
)throw new TypeError(`Parse error near "${t.substr(s).substr(0,20)}". End of variable not detected.`);c=p+o.length,p=zs(
t.substr(r,p-r)),d=(cm.isValidKeyword(p)?(r=l(p),u+=""+t.substr(e,s-e)+r):u+=""+t.substr(e,c-e),c)}return u}
static formatNumber(e,t=" ",n="."){return e.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,t).replace(/\./,n)}
static endsWithCharacters(e,t){var n=e.length;return!(1<=n)||t.includes(e[n-1])}static startsWithCharacters(e,t){
return!(1<=e.length)||t.includes(e[0])}static hasOnlyCharacters(e,t){return 0===e.length||Y(e,e=>t.includes(e))}
static validateStringCharacters(e,t=void 0,n=t,i=n,o=0,a=void 0){var s=null!=(s=null==e?void 0:e.length)?s:0;return(
void 0===t||cm.startsWithCharacters(e,t))&&(void 0===n||cm.hasOnlyCharacters(e.substring(1,s-1),n))&&(
void 0===i||cm.endsWithCharacters(e,i))&&o<=s&&(void 0===a||s<=a)}}class D{constructor(e,t,n){s(this,"_status",void 0),
s(this,"_headers",void 0),s(this,"_body",void 0);let i,o,a;if(!Oe(e)||Oe(t)||Oe(n))if(Oe(t)&&!Oe(n)){if(void 0!==n
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");Te(e)?o=e:a=e,i=t}else{if(!Oe(n)
)throw new TypeError("ResponseEntity signature is [body, ][headers, ]status");if(!Te(t))throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");a=e,o=t,i=n}else{if(i=e,void 0!==t)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status");if(void 0!==n)throw new TypeError(
"ResponseEntity signature is [body, ][headers, ]status")}this._status=i,this._headers=null!=(e=o)?e:new rm,this._body=a}
getStatusCode(){return this._status}getStatusCodeValue(){return this._status}status(e){return this._status=e,this}
headers(e){return Te(e)?this._headers=e:this._headers=new rm(e),this}body(e){return this._body=e,this}getHeaders(){
return this._headers}allow(...e){e=Go(e,ae);const t=Go(e,e=>ie(e).toUpperCase());return this._headers.set("Allow",
t.join(", ")),this}hasBody(){return void 0!==this._body}getBody(){if(void 0===this._body)throw new TypeError("No body");
return this._body}toString(){var e,t,n=re(this._status);const i=this._headers;return e=i.isEmpty()?"":cm.toString(i),
void 0===(t=this._body)?e?`ResponseEntity(${n}, ${e})`:`ResponseEntity(${n})`:(t=we(t)?JSON.stringify(t,null,2
):cm.toString(t),e?`ResponseEntity(${n}, ${e}, Body(${t}))`:`ResponseEntity(${n}, Body(${t}))`)}static accepted(){
return new D(i.Accepted)}static badRequest(){return new D(i.BadRequest)}static created(e){return new D(new rm({
Location:e}),i.Created)}static noContent(){return new D(i.NoContent)}static notFound(){return new D(i.NotFound)}
static notImplemented(){return new D(i.NotImplemented)}static internalServerError(){return new D(i.InternalServerError)}
static methodNotAllowed(){return new D(i.MethodNotAllowed)}static unprocessableEntity(){return new D(
i.UnprocessableEntity)}static ok(e){return e?new D(e,i.OK):new D(i.OK)}}const pm=j.createLogger("ParamRoutes");class lm{
constructor(n){s(this,"_routes",void 0);var e=te(n),e=Go(e,e=>{var t=n[e];return lm.createCallbackFunction(e,t)});
this._routes=e}hasRoute(t){var e=K(this._routes,e=>{var[e]=e(t);return void 0!==e&&1<=(null==e?void 0:e.length)});
return e?pm.debug(`hasRoute: Looking up "${t}": Found`):pm.debug(`hasRoute: Looking up "${t}": Not Found`),e}getRoute(n
){let i=void 0,o=void 0;return Ua(this._routes,e=>{var[e,t]=e(n);return void 0!==e&&(i=e,o=t,!0)}),void 0!==i?[i,o]:[
void 0,void 0]}static createCallbackFunction(e,t){const o=(e=""===e?"/":e).split("/"),a=o.length;if(0===a
)throw new Error("Path format had no items. This should not happen.");const s=Go(o,(e,t)=>3<=e.length&&"{"===e[0
]&&"}"===e[e.length-1]?zs(e.substr(1,e.length-2)):(o[t]=e.toLowerCase(),null));if(K(s,p))return e=>{const n=e.split("/")
if(0===(e=n.length))return[void 0,void 0];if(a!==e)return[void 0,void 0];let i={};return Y(s,(e,t)=>p(e)?(i[e]=n[t],!0
):o[t]===n[t].toLowerCase())?[t,i]:[void 0,void 0]};{const n=e.toLowerCase();return e=>e.toLowerCase()!==n?[void 0,
void 0]:[t,void 0]}}}const um=j.createLogger("StaticRoutes");class dm{static setLogLevel(e){um.setLogLevel(e)}
constructor(n){s(this,"_routes",void 0);var e=te(n),e=Go(e,e=>{var t=n[e];return[e.toLowerCase(),t]});
this._routes=new Map(e)}hasRoute(e){return um.debug(`Looking up "${e}" from `,this._routes),this._routes.has(
e.toLowerCase())}getRoute(e){return void 0!==(e=this._routes.get(e.toLowerCase()))?[e,void 0]:[void 0,void 0]}}class mm{
static createRoutes(e){return new(mm.routesHasParameter(e)?lm:dm)(e)}static pathHasParameter(e){return e.split("/"
).some(e=>3<=e.length&&"{"===e[0]&&"}"===e[e.length-1])}static routesHasParameter(e){return K(te(e),mm.pathHasParameter)
}}const I=j.createLogger("RequestRouter");class hm{static setLogLevel(e){I.setLogLevel(e)}constructor(){s(this,
"_controllers",void 0),s(this,"_routes",void 0),s(this,"_modelAttributeNames",void 0),s(this,"_requestMappings",void 0),
s(this,"_initialized",void 0),this._controllers=[],this._routes=void 0,this._requestMappings=void 0,
this._modelAttributeNames=void 0,this._initialized=!1}attachController(e){this._controllers.push(e),this._routes=void 0}
_initializeRequestMappings(){I.debug("Initializing request mappings."),this._requestMappings||(
this._requestMappings=this._getRequestMappings())}_initializeRouter(){this._initialized||(this._initialized=!0,I.debug(
"Initializing..."),this._initializeRequestMappings(),this._initializeRoutes(),
this._initializeRequiredModelAttributeNames())}_initializeRoutes(){var e;I.debug("Initializing routes."),null!=(
e=this._requestMappings)&&e.length?this._routes=mm.createRoutes(hm._parseMappingObject(this._requestMappings)
):this._routes=mm.createRoutes({})}_initializeRequiredModelAttributeNames(){var e;I.debug(
"Initializing model attributes.");let i=[];null!=(e=this._requestMappings)&&e.length&&(i=$a(this._requestMappings,(e,a
)=>{var t=a.controller,n=$a(te(a.controllerProperties),(e,n)=>{I.debug(
"_initializeRequiredModelAttributeNames: propertyKey: ",n);var t=a.controllerProperties[n],i=t.modelAttributes;I.debug(
"_initializeRequiredModelAttributeNames: propertyAttributeNames: ",i);const o=t.params;return Rs(i,t=>{I.debug(
"_initializeRequiredModelAttributeNames: attributeName: ",t),void 0===Ua(e,e=>e[0]===t)&&e.push([t,n,o])}),e},[]);
return I.debug("controllerUniqueAttributeNames: ",n),i.push([t,n]),e},i)),this._modelAttributeNames=new Map(i)}
async handleRequest(t,n=void 0,e=void 0,c){try{var i=ae(t),{pathName:o,queryParams:a}=hm._parseRequestPath(n),s=(
I.debug(`handleRequest: method="${i}", pathName="${o}", queryParams=`,a),o);const p=a;if(void 0===p)return I.error(
"handleRequest: requestQueryParams was not initialized"),D.internalServerError().body({error:"Internal Server Error"});
if(void 0===s)return I.error("handleRequest: requestPathName was not initialized"),D.internalServerError().body({
error:"Internal Server Error"});this._initialized||this._initializeRouter();const{routes:l,bodyRequired:u,
pathVariables:d}=this._getRequestRoutesContext(i,s);if(!e&&u)return I.error(
"handleRequest: parseRequestBody was not provided and body is required"),D.internalServerError().body({
error:"Internal Server Error"});if(void 0===l)return I.debug("handleRequest: No routes defined"),D.methodNotAllowed(
).body({error:"Method Not Allowed"});if(0===l.length)return I.debug("handleRequest: No routes found"),D.notFound().body(
{error:"Not Found"});I.debug("routes: ",l);let r=void 0;const m=e&&u?await e(c):void 0,h=(I.debug(
"handleRequest: requestBody: ",m),new Map);return await $a(l,async(e,t)=>{var n;const o=t.controller;if(n=t.propertyName
,t=t.propertyParams,await e,this._modelAttributeNames&&this._modelAttributeNames.has(o)){I.debug(
`Populating attributes for property "${n}"`);const a=hm._getOrCreateRequestModelAttributesForController(h,o),i=Go(ys(t,
e=>he(e)),e=>e.attributeName);I.debug("route attributeNames: ",i),e=this._modelAttributeNames.get(o),I.debug(
"all attributeNamePairs: ",e),e=ys(null!=e?e:[],e=>i.includes(e[0])),I.debug("attributeNamePairs: ",e),await $a(e,async(
e,t)=>{var[t,n,i]=t,e=(await e,I.debug("attributeName: ",t),I.debug("propertyName: ",n),I.debug("propertyParams: ",i),
hm._bindRequestActionParams(p,m,i,c,d,a)),i=await o[n](...e);a.set(t,i)},Promise.resolve())}if(
t=hm._bindRequestActionParams(p,m,t,c,d,null!=(e=h.get(o))?e:new Map),I.debug("handleRequest: stepParams 1: ",t),v(o,n)
){I.debug(`Calling route property by name "${n}"`);const s=await o[n](...t);r=se(s)?new D(s):pe(s)?new D(s.toJSON(),
s.getStatusCode()):(e=s)&&e instanceof D?(void 0!==r&&I.warn("Warning! ResponseEntity from previous call ignored."),s
):Ee(s)?void 0===r?D.ok(s):new D(ya(r.getBody(),s),r.getHeaders(),r.getStatusCode()):_e(s)?void 0===r?D.ok(s):new D(f(f(
{},r.getBody()),s),r.getHeaders(),r.getStatusCode()):(we(s),void 0===r?D.ok(s):(I.warn(
"Warning! ResponseEntity from previous call ignored."),new D(s,r.getHeaders(),r.getStatusCode())))}else I.warn(
`Warning! No property by name "${n}" found in the controller`),r=D.notFound().body({error:"404 - Not Found",code:404})},
Promise.resolve()),I.debug("handleRequest: result finished: "+r),void 0===r?D.noContent():r}catch(e){return pe(e)?(
404===(n=null!=(t=null==e?void 0:e.status)?t:0)?D.notFound():(400<=n&&n<500?D.badRequest():D.internalServerError()
).status(n)).body(e.toJSON()):(I.error("Exception: ",e),D.internalServerError().body({error:"Internal Server Error",
code:500}))}}static _parseRequestPath(e){return{pathName:(e=new dd.URL("http://localhost"+(null!=e?e:""))).pathname,
queryParams:e.searchParams}}_getRequestRoutesContext(t,e){var n,i,o;return this._routes&&this._routes.hasRoute(e)?([i,n
]=this._routes.getRoute(e),(i=ys(i,e=>0<=e.methods.indexOf(t))).length?(o=K(i,e=>!0===(
null==e?void 0:e.requestBodyRequired)),I.debug("_getRequestRoutesContext: requestBodyRequired=",o),{routes:i,
pathVariables:n,bodyRequired:o}):(I.debug(
"_getRequestRoutesContext: There were matching routes, but not for this method; Method not allowed."),{routes:void 0,
bodyRequired:!1})):(this._routes?I.debug("_getRequestRoutesContext: Routes did not match: ",e):I.debug(
"_getRequestRoutesContext: No routes defined"),{routes:[],bodyRequired:!1})}_getRequestMappings(){
return 0===this._controllers.length?[]:ys(Go(this._controllers,e=>{var t=e.constructor;
return A.hasProperty__requestMappings(t)?be(e.constructor,e):be(e,e)}),e=>!!e)}static _parseMappingObject(e){function p(
e,t){v(n,e)?n[e].push(t):n[e]=[t]}const n={};return Rs(e,e=>{const c=e.controller,t=e.controllerProperties,n=te(t);
0<e.mappings.length?Rs(e.mappings,e=>{const r=e.methods;Rs(e.paths,s=>{Rs(n,i=>{const o=t[i],a=o.params;Rs(o.mappings,
e=>{var t=e.methods;if(hm._matchMethods(r,t)){const n=hm._parseCommonMethods(r,t);t=e.paths,Rs(t,e=>{p(
hm._joinRoutePaths(s,e),{requestBodyRequired:null!=(e=null===o||void 0===o?void 0:o.requestBodyRequired)&&e,methods:n,
controller:c,propertyName:i,propertyParams:a})})}})})})}):Rs(n,n=>{const i=t[n],o=i.params;Rs(i.mappings,e=>{
const t=e.methods;e=e.paths,Rs(e,e=>{p(e,{requestBodyRequired:null!=(e=null===i||void 0===i?void 0:i.requestBodyRequired
)&&e,methods:t,controller:c,propertyName:n,propertyParams:o})})})})}),n}static _matchMethods(e,n){
return 0===e.length||0==n.length||K(e,t=>K(n,e=>t===e))}static _parseCommonMethods(e,t){return 0!==e.length?ys(t,t=>K(e,
e=>e===t)):t}static _joinRoutePaths(e,t){return e=zs(e),0===(t=zs(zs(t),"/")).length?e:0===e.length?t:"/"===e[e.length-1
]||"/"===t[0]?e+t:e+"/"+t}static _bindRequestActionParams(o,a,e,s,r,c){return Go(e,e=>{var t,n,i;if(null!==e){switch(
null==e?void 0:e.objectType){case u.REQUEST_BODY:return a;case u.QUERY_PARAM:return t=(i=e).queryParam,!o.has(t)||(
t=o.get(t),Ks(t))?void 0:hm._castParam(t,i.valueType);case u.REQUEST_HEADER:if(i=(t=e).headerName,s.containsKey(i)
)return void 0===(n=s.getFirst(i))?void 0:hm._castParam(n,t.valueType);if(t.isRequired)throw new Jd(400,
"Bad Request: Header missing: "+i);return null!=(n=null==t?void 0:t.defaultValue)?n:void 0;case u.REQUEST_HEADER_MAP:
return i=null==e?void 0:e.defaultValues,s.isEmpty()?i?new rm(i):new rm:i?new rm(f(f({},i),s.valueOf())):s.clone();
case u.PATH_VARIABLE:if(n=(t=e).variableName,void 0!==(i=r&&v(r,n)?r[n]:void 0)&&""!==i
)return t.decodeValue?decodeURIComponent(i):i;if(t.isRequired)throw new Jd(404,"Not Found");return null!=(
n=t.defaultValue)?n:void 0;case u.MODEL_ATTRIBUTE:return i=e.attributeName,c.has(i)?c.get(i):void 0}throw new TypeError(
"Unsupported item type: "+e)}})}static _castParam(e,t){switch(t){case br.JSON:return JSON.parse(e);case br.STRING:
return e;case br.INTEGER:return parseInt(e,10);case br.NUMBER:return parseFloat(e)}throw new TypeError(
"Unsupported type: "+t)}static _getOrCreateRequestModelAttributesForController(e,t){let n=e.get(t);return null==n&&(
n=new Map,e.set(t,n)),n}}class fm{getName(){return this._name}constructor(e){s(this,"_name",void 0),s(this,"_callbacks",
void 0),this._name=e,this._callbacks={}}destroy(){this._name=void 0,this._callbacks=void 0}hasCallbacks(e){return v(
this._callbacks,e)}triggerEvent(t,...n){var e;this.hasCallbacks(t)?(e=this._callbacks[t],Rs(e,e=>{try{e(t,...n)}catch(e
){console.error(`Observer "${this._name}" and the event handler for "${t.toString()}" returned an exception: `,e)}})
):console.warn(`Warning! The observer for "${this._name}" did not have anything listening "${t.toString()}"`)}
listenEvent(e,t){return this.hasCallbacks(e)?this._callbacks[e].push(t):this._callbacks[e]=[t],()=>this.removeListener(e
,t)}removeListener(e,n){if(this.hasCallbacks(e)){let t=!1;this._callbacks[e]=ys(this._callbacks[e],e=>!(!t&&e===n&&(t=!0
))),0===this._callbacks[e].length&&delete this._callbacks[e],t||console.warn(
`Warning! Could not remove the callback since the observer for "${this._name}" did not have that callback`)
}else console.warn(
`Warning! Could not remove callback since the observer for "${this._name}" did not have anything listening "${e.toString(
)}"`)}}const vm=j.createLogger("RequestServer");yr={CONTROLLER_ATTACHED:"RequestServer:controllerAttached",
STARTED:"RequestServer:started",STOPPED:"RequestServer:stopped"};class xm{static setLogLevel(e){vm.setLogLevel(e)}on(e,t
){return this._observer.listenEvent(e,t)}constructor(e="http://localhost:3000"){s(this,"_server",void 0),s(this,
"_router",void 0),s(this,"_handleRequestCallback",void 0),s(this,"_observer",void 0),this._observer=new fm(
"RequestServer"),this._server=xm.createServerService(e),this._router=new hm,
this._handleRequestCallback=this._handleRequest.bind(this),this._server.setHandler(this._handleRequestCallback)}destroy(
){this._observer.destroy()}attachController(e){if(!ge(e))throw new TypeError(
"RequestServer: The provided controller was not RequestController");this._router.attachController(e),
this._observer.hasCallbacks(yr.CONTROLLER_ATTACHED)&&this._observer.triggerEvent(yr.CONTROLLER_ATTACHED)}start(){
vm.debug("Starting server"),this._server.start(),this._observer.hasCallbacks(yr.STARTED)&&this._observer.triggerEvent(
yr.STARTED)}stop(){vm.debug("Stopping server"),this._server.stop(),this._observer.hasCallbacks(yr.STOPPED
)&&this._observer.triggerEvent(yr.STOPPED)}async _handleRequest(t,n){var e,i,o=t.method,a=t.url;try{e=ae(o),
i=await this._router.handleRequest(e,a,e=>xm._requestBodyParser(t,e),this._parseRequestHeaders(t.headers)),vm.debug(
`"${o} ${a}": Processing responseEntity`),this._handleResponse(i,n)}catch(e){vm.debug(
`"${o} ${a}": Error, passing it on: `,e),this._handleErrorResponse(e,n)}}static async _requestBodyParser(e,t){
return"application/x-www-form-urlencoded"!==(null!=(t=null==(t=t.getFirst("content-type"))?void 0:t.toLowerCase()
)?t:"application/json")?$d.getRequestDataAsJson(e):$d.getRequestDataAsFormUrlEncoded(e)}_handleResponse(e,n){
var t=e.getStatusCode();n.statusCode=t,n.statusMessage=re(t);const i=e.getHeaders();i.isEmpty()||i.keySet().forEach(e=>{
var t=null!=(t=i.getValue(e))?t:"";vm.debug(`_handleResponse: Setting response header as "${e}": "${t}"`),$(t
)?n.setHeader(e,[...t]):n.setHeader(e,t)}),e.hasBody()?p(e=e.getBody())?(vm.debug("_handleResponse: Ending as text ",t,e
),n.end(e)):(vm.debug("_handleResponse: Ending as json ",t,e),n.end(JSON.stringify(e,null,2))):(vm.debug(
"_handleResponse: Ending without body ",t),n.end())}_handleErrorResponse(e,t){var n=se(e)?new D(e):pe(e)?new D(e,
e.getStatusCode()):(vm.error("_handleErrorResponse_ Exception: ",e),"production"===(null==(n=process)||null==(n=n.env
)?void 0:n.NODE_ENV)?D.internalServerError():new D(ce(i.InternalServerError,"Internal Server Error: "+e),
i.InternalServerError));this._handleResponse(n,t)}_parseRequestHeaders(e){return new rm(e)}static createServerService(e
){var t;if("http:"===(e=new wd.default.URL(e)).protocol)return t=e.port?parseInt(e.port,10):80,new im(t,e.hostname);
throw new TypeError(`RequestServer: Protocol "${e.protocol}" not yet supported`)}}s(xm,"Event",yr);
const gm=j.createLogger("RequestControllerUtils");class S{static setLogLevel(e){gm.setLogLevel(e)}
static parseRequestMappings(e){return{methods:ys(e,oe),paths:ys(e,p)}}static attachControllerMapping(e,t){
var t=S.parseRequestMappings(t),n=be(e,e);ye(e,void 0===n?{mappings:[t],controllerProperties:{}}:f(f({},n),{},{
mappings:ya([],n.mappings,[t])}))}static attachControllerMethodMapping(e,t,n){var i=be(e,e),t=S.parseRequestMappings(t);
void 0===i?ye(e,{mappings:[],controllerProperties:{[n]:{mappings:[t],params:[],modelAttributes:[]}}}):v(
i.controllerProperties,n)?ye(e,f(f({},i),{},{controllerProperties:f(f({},i.controllerProperties),{},{[n]:f(f({},
i.controllerProperties[n]),{},{mappings:ya([t],i.controllerProperties[n].mappings)})})})):ye(e,f(f({},i),{},{
controllerProperties:f(f({},i.controllerProperties),{},{[n]:{mappings:[t],params:[],modelAttributes:[]}})}))}
static _setControllerMethodParam(e,t,n,i,o=!1){var a,s=be(e,e);void 0===s?(a=S._initializeParams(n,i),ye(e,o?{mappings:[
],controllerProperties:{[t]:{requestBodyRequired:!0,mappings:[],modelAttributes:[],params:a}}}:{mappings:[],
controllerProperties:{[t]:{mappings:[],modelAttributes:[],params:a}}})):v(s.controllerProperties,t)?(
a=S._reinitializeParams(s,t,n,i),ye(e,f(f({},s),{},o?{controllerProperties:f(f({},s.controllerProperties),{},{[t]:f(f({}
,s.controllerProperties[t]),{},{requestBodyRequired:!0,params:a})})}:{controllerProperties:f(f({},s.controllerProperties
),{},{[t]:f(f({},s.controllerProperties[t]),{},{params:a})})}))):(a=S._initializeParams(n,i),ye(e,f(f({},s),{},o?{
controllerProperties:f(f({},s.controllerProperties),{},{[t]:{requestBodyRequired:!0,modelAttributes:[],mappings:[],
params:a}})}:{controllerProperties:f(f({},s.controllerProperties),{},{[t]:{mappings:[],modelAttributes:[],params:a}})}))
)}static findController(e){return Ht(e)&&ge(e)?e:Z(e)&&Ht(null==e?void 0:e.constructor)&&ge(e.constructor
)?e.constructor:void 0}static setControllerMethodModelAttributeParam(e,t,n,i,o){gm.debug(
"setControllerMethodModelAttributeParam: attributeName =",i,o),i={objectType:u.MODEL_ATTRIBUTE,attributeName:i,
valueType:o},S._setControllerMethodParam(e,t,n,i)}static attachControllerMethodModelAttributeBuilder(e,t,n,i){gm.debug(
"attachControllerMethodModelAttributeBuilder: attributeName =",i,t);var o=be(e,e);void 0===o?ye(e,{mappings:[],
controllerProperties:{[t]:{mappings:[],params:[],modelAttributes:[i]}}}):v(o.controllerProperties,t)?ye(e,f(f({},o),{},{
controllerProperties:f(f({},o.controllerProperties),{},{[t]:f(f({},o.controllerProperties[t]),{},{modelAttributes:ya([i]
,o.controllerProperties[t].modelAttributes)})})})):ye(e,f(f({},o),{},{controllerProperties:f(f({},o.controllerProperties
),{},{[t]:{mappings:[],params:[],modelAttributes:[i]}})}))}static setControllerMethodQueryParam(e,t,n,i,o){i={
objectType:u.QUERY_PARAM,queryParam:i,valueType:o},S._setControllerMethodParam(e,t,n,i)}
static setControllerMethodHeader(e,t,n,i,o,a,s){i={objectType:u.REQUEST_HEADER,headerName:i,valueType:o,
isRequired:null!=a&&a,defaultValue:s},S._setControllerMethodParam(e,t,n,i)}static setControllerMethodPathVariable(e,t,n,
i,o,a,s,r){i={objectType:u.PATH_VARIABLE,variableName:i,valueType:o,isRequired:null==a||a,decodeValue:null==s||s,
defaultValue:r},S._setControllerMethodParam(e,t,n,i)}static setControllerMethodPathVariableMap(e,t,n,i){i={
objectType:u.PATH_VARIABLE_MAP,defaultValues:i},S._setControllerMethodParam(e,t,n,i)}
static setControllerMethodHeaderMap(e,t,n,i){i={objectType:u.REQUEST_HEADER_MAP,defaultValues:i},
S._setControllerMethodParam(e,t,n,i)}static setControllerMethodBodyParam(e,t,n,i){i={objectType:u.REQUEST_BODY,
valueType:i},S._setControllerMethodParam(e,t,n,i,!0)}static _initializeParams(e,t){let n=[];for(;e>=n.length;)n.push(
null);return n[e]=t,n}static _reinitializeParams(e,t,n,i){let o=ya([],e.controllerProperties[t].params);for(
;n>=o.length;)o.push(null);return o[n]=i,o}}const bm=j.createLogger("Request");class k{static setLogLevel(e){
bm.setLogLevel(e),rm.setLogLevel(e),S.setLogLevel(e)}static mapping(...o){return(e,t,n)=>{var i=S.findController(e);
void 0!==i?void 0===t?S.attachControllerMapping(i,o):S.attachControllerMethodMapping(i,o,t):bm.debug(
"mapping: for other: config=",o,"target=",e,"propertyKey=",t,"descriptor=",n)}}static Mapping(...e){return k.mapping(
...e)}static param(e,t,n){if(p(e)&&void 0===n&&(void 0===t||de(t))){const a=e,s=null!=t?t:br.STRING;return(e,t,n)=>{
k._param(e,t,n,a,s)}}var i=br.STRING,o=""+n;k._param(e,t,n,o,i)}static _param(e,t,n,i,o){var a=k._getRequestController(e
,t,n);void 0!==a?S.setControllerMethodQueryParam(a,t,n,i,o):bm.warn("_param: Unrecognized configuration: ","; target=",e
,"; propertyKey=",t,"; paramIndex=",n)}static _getRequestController(e,t,n){if(p(t)&&W(n))return S.findController(e)}
static Param(e,t,n){return k.param(e,t,n)}static header(e,t,n){var i,s;if(bm.debug("header: ",e,t,n),!p(t)||!W(n)){if(p(
e)){const r=e;if(void 0!==t&&(!(s=t)||void 0!==(null==s?void 0:s.required)&&!Ws(null==s?void 0:s.required)||void 0!==(
null==s?void 0:s.defaultValue)&&!p(null==s?void 0:s.defaultValue)))throw new TypeError(
"Request.header: Argument 2 is not type of RequestHeaderOptions: "+t);let o=void 0,a=void 0;if(void 0!==(s=t))if(Ws(s)
)o=s;else{if(!Z(s))throw new TypeError("Request.header: Invalid type of options");o=null!=(i=null==s?void 0:s.required
)?i:void 0,a=null!=(i=null==s?void 0:s.defaultValue)?i:void 0}return bm.debug("header: init: ",r),(e,t,n)=>{if(p(t)&&W(n
)){var i=S.findController(e);if(void 0!==i)return void S.setControllerMethodHeader(i,t,n,r,br.STRING,o,a)}bm.warn(
"header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",n)}}if(void 0!==(s=e)&&(
!s||void 0!==(null==s?void 0:s.defaultValues)&&!me(null==s?void 0:s.defaultValues)))throw new TypeError(
"Request.header: Invalid type of options");const o=null==s?void 0:s.defaultValues;return(e,t,n)=>{p(t)&&W(n
)?k._setMethodHeaderMap(e,t,n,o):bm.warn("header: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,
"; paramIndex=",n)}}k._setMethodHeaderMap(e,t,n,void 0)}static _setMethodHeaderMap(e,t,n,i){var o=S.findController(e);
void 0!==o?S.setControllerMethodHeaderMap(o,t,n,i):bm.warn("_setMethodHeaderMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",n)}static Header(e,t,n){return k.header(e,t,n)}static pathVariable(e,t,
n){var i,r;if(bm.debug("pathVariable: ",e,t,n),!p(t)||!W(n)){const c=e;if(p(c)){if(void 0!==t&&!((i=t)&&J(
null==i?void 0:i.required)&&(G(r=null==i?void 0:i.defaultValue)||p(r))&&J(null==i?void 0:i.decodeValue))
)throw new TypeError("Request.pathVariable: Argument 2 is not type of RequestPathVariableOptions: "+t);let o=void 0,
a=void 0,s=!0;if(void 0!==(r=t))if(Ws(r))o=r;else{if(!Z(r))throw new TypeError(
"Request.pathVariable: Invalid type of options");o=null!=(i=null==r?void 0:r.required)?i:void 0,a=null!=(
i=null==r?void 0:r.defaultValue)?i:void 0,s=null==(i=null==r?void 0:r.decodeValue)||i}return bm.debug(
"pathVariable: init: ",c),(e,t,n)=>{if(p(t)&&W(n)){var i=S.findController(e);if(void 0!==i
)return void S.setControllerMethodPathVariable(i,t,n,c,br.STRING,o,s,a)}bm.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",n)}}if(void 0!==(r=c)&&!Z(
null==r?void 0:r.defaultValues))throw new TypeError("Request.pathVariable: Invalid type of options");const o=r&&null!=(
i=null==r?void 0:r.defaultValues)?i:void 0;return(e,t,n)=>{p(t)&&W(n)?k._setPathVariableMap(e,t,n,o):bm.warn(
"pathVariable: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",n)}}r=e,i=t,e=n,
k._setPathVariableMap(r,i,e,void 0)}static _setPathVariableMap(e,t,n,i){var o=S.findController(e);
void 0!==o?S.setControllerMethodPathVariableMap(o,t,n,i):bm.warn("_setPathVariableMap: Unrecognized configuration: ",
"; target=",e,"; propertyKey=",t,"; paramIndex=",n)}static PathVariable(e,t,n){return k.pathVariable(e,t,n)}
static modelAttribute(o){if(bm.debug("modelAttribute: ",o),p(o))return(e,t,n)=>{if(p(t)){var i=S.findController(e);if(
void 0!==i){if(W(n))return void S.setControllerMethodModelAttributeParam(i,t,n,o,br.JSON);if(void 0!==n
)return void S.attachControllerMethodModelAttributeBuilder(i,t,n,o)}}bm.warn(
"modelAttribute: Unrecognized configuration: ","; target=",e,"; propertyKey=",t,"; paramIndex=",n)};throw new TypeError(
"Request.modelAttribute: Argument 1 is not string: "+o)}static body(e,t,n){var i=S.findController(e);void 0!==i&&p(t
)&&W(n)?S.setControllerMethodBodyParam(i,t,n,br.JSON):bm.warn("body: Unrecognized configuration: ","; target=",e,
"; propertyKey=",t,"; paramIndex=",n)}static Body(e,t,n){return k.body(e,t,n)}static optionsMapping(...e){
return k.mapping(k.Method.OPTIONS,...e)}static getMapping(...e){return k.mapping(k.Method.GET,...e)}static Get(...e){
return k.getMapping(...e)}static postMapping(...e){return k.mapping(k.Method.POST,...e)}static Post(...e){
return k.postMapping(...e)}static deleteMapping(...e){return k.mapping(k.Method.DELETE,...e)}static Delete(...e){
return k.deleteMapping(...e)}static putMapping(...e){return k.mapping(k.Method.PUT,...e)}static Put(...e){
return k.putMapping(...e)}static createBadRequestError(e){return ce(i.BadRequest,e)}static createNotFoundRequestError(e
){return ce(i.NotFound,e)}static createMethodNotAllowedRequestError(e){return ce(i.MethodNotAllowed,e)}
static createConflictRequestError(e){return ce(i.Conflict,e)}static createInternalErrorRequestError(e){return ce(
i.InternalServerError,e)}static throwBadRequestError(e){throw k.createBadRequestError(e)}
static throwNotFoundRequestError(e){throw k.createNotFoundRequestError(e)}static throwMethodNotAllowedRequestError(e){
throw k.createMethodNotAllowedRequestError(e)}static throwConflictRequestError(e){throw k.createConflictRequestError(e)}
static throwInternalErrorRequestError(e){throw k.createInternalErrorRequestError(e)}}s(k,"Method",o),s(k,"Status",i),s(k
,"ParamType",br),s(k,"Type",xr),s(k,"Error",Jd),wr={EUR:"EUR",USD:"USD",GBP:"GBP"};const ym=j.createLogger(
"BackendController");s(ql=class{static setCurrencyService(e){this._currencyService=e}static async getIndex(e){try{
var t=await this._currencyService.getRates();return void 0===t?D.internalServerError().body(Ne(
"Service was not initialized",500)):D.ok({[wr.EUR]:t})}catch(e){return ym.error("ERROR: ",e),D.internalServerError(
).body(Ne("Internal Server Error",500))}}},"_currencyService",void 0);let wm=ql;Re([k.getMapping("/"),(_={required:!1,
defaultValue:""},bm.debug("RequestHeader: ","Authorization",_,void 0),Vl=k.header("Authorization",_,void 0),function(e,t
){Vl(e,t,0)}),Ce("design:type",Function),Ce("design:paramtypes",[String]),Ce("design:returntype",Promise)],wm,"getIndex"
,null),wm=Re([k.mapping("/")],wm);class _m{static stringifySum(e){return(Math.round(100*e)/100).toFixed(2)}
static getSum(e,t){return t*e}static getSumWithVat(e,t,n){return t*e*(1+n)}static getVatlessSum(e,t){return e/(1+t)}
static roundByAccuracy(e,t){return t=Math.pow(10,t),Math.round(e*t)/t}static convertCurrencyAmount(e,t,n,i,o=10){
var a=po(e,i);if(void 0===a)throw new TypeError("CurrencyService: To: No exchange rate found: "+i);if(void 0===(i=po(e,n
)))throw new TypeError("CurrencyService: From: No exchange rate found: "+n);return _m.roundByAccuracy(t/i*a,o)}}
const Em=j.createLogger("CurrencyService");class Tm{constructor(e,t=86400){s(this,"_fetchRatesCallback",void 0),s(this,
"_fetchIntervalMinutes",void 0),s(this,"_rates",void 0),s(this,"_fetchIntervalId",void 0),this._fetchRatesCallback=e,
this._rates=void 0,this._fetchIntervalMinutes=t}async initialize(){await this._updateRates(),this._startInterval()}
getRates(){return this._rates}setRates(e){this._rates=e}updateRates(){this._updateRates().catch(e=>{Em.error(
"Could not update rates: ",e)})}async convertCurrencyAmount(e,t,n,i){return _m.convertCurrencyAmount(this._rates,e,t,n,i
)}async _updateRates(){this._rates=await this._fetchRatesCallback()}_stopInterval(){void 0!==this._fetchIntervalId&&(
clearInterval(this._fetchIntervalId),this._fetchIntervalId=void 0)}_startInterval(){this._stopInterval(),
this._fetchIntervalId=setInterval(()=>{this.updateRates()},1e3*this._fetchIntervalMinutes)}}_r={exports:{}},x={
exports:{}},e={exports:{}},Er=h=function(n,i){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++
)e[t]=arguments[t];return n.apply(i,e)}},Tr=Object.prototype.toString,Hl=Object.create(null),Or=function(e){
return e=Tr.call(e),Hl[e]||(Hl[e]=e.slice(8,-1).toLowerCase())},Rr=Pe("ArrayBuffer"),Kl=Pe("Date"),R=Pe("File"),md=Pe(
"Blob"),m=Pe("FileList"),zl=Pe("URLSearchParams"),Gl="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),
r=function(e,t,n){var i;return t&&(n=n?n(t):Nr.isURLSearchParams(t)?t.toString():(i=[],Nr.forEach(t,function(e,t){
null!=e&&(Nr.isArray(e)?t+="[]":e=[e],Nr.forEach(e,function(e){Nr.isDate(e)?e=e.toISOString():Nr.isObject(e)&&(
e=JSON.stringify(e)),i.push(Le(t)+"="+Le(e))}))}),i.join("&")))&&(-1!==(t=e.indexOf("#"))&&(e=e.slice(0,t)),e+=(
-1===e.indexOf("?")?"?":"&")+n),e},Pr=Nr=Cr={isArray:je,isArrayBuffer:Rr,isBuffer:function(e){return null!==e&&!Ae(e
)&&null!==e.constructor&&!Ae(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},
isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||Tr.call(
e)===t||Se(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){
return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&Rr(e.buffer)},
isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:De,
isPlainObject:Ie,isUndefined:Ae,isDate:Kl,isFile:R,isBlob:md,isFunction:Se,isStream:function(e){return De(e)&&Se(e.pipe)
},isURLSearchParams:zl,isStandardBrowserEnv:function(){return(
"undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product
)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:ke,merge:function n(){function e(e,t){Ie(i[t])&&Ie(
e)?i[t]=n(i[t],e):Ie(e)?i[t]=n({},e):je(e)?i[t]=e.slice():i[t]=e}for(var i={},t=0,o=arguments.length;t<o;t++)ke(
arguments[t],e);return i},extend:function(n,e,i){return ke(e,function(e,t){n[t]=i&&"function"==typeof e?Er(e,i):e}),n},
trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0
)?e.slice(1):e},inherits:function(e,t,n,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,
n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var i,o,a,s={};t=t||{};do{for(o=(
i=Object.getOwnPropertyNames(e)).length;0<o--;)s[a=i[o]]||(t[a]=e[a],s[a]=!0)}while((e=Object.getPrototypeOf(e))&&(
!n||n(e,t))&&e!==Object.prototype);return t},kindOf:Or,kindOfTest:Pe,endsWith:function(e,t,n){return e=String(e),(
void 0===n||n>e.length)&&(n=e.length),n-=t.length,-1!==(e=e.indexOf(t,n))&&e===n},toArray:function(e){var t,n;if(!e
)return null;if(Ae(t=e.length))return null;for(n=new Array(t);0<t--;)n[t]=e[t];return n},isTypedArray:function(e){
return Gl&&e instanceof Gl},isFileList:m},qe.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,
rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},
qe.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},qe.prototype.forEach=function(t){Pr.forEach(
this.handlers,function(e){null!==e&&t(e)})},xd=qe,Ar=function(n,i){jr.forEach(n,function(e,t){t!==i&&t.toUpperCase(
)===i.toUpperCase()&&(n[i]=e,delete n[t])})},(Dr=jr=Cr).inherits(Fe,Error,{toJSON:function(){return{
message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,
lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,
status:this.response&&this.response.status?this.response.status:null}}}),Ir=Fe.prototype,Sr={},["ERR_BAD_OPTION_VALUE",
"ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED",
"ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Sr[e]={value:e}}),Object.defineProperties(Fe,Sr
),Object.defineProperty(Ir,"isAxiosError",{value:!0}),Br=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},
zr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},yc={"application/1d-interleaved-parityfec":{
source:"iana"},"application/3gpdash-qoe-report+xml":{source:"iana",charset:"UTF-8",compressible:!0},
"application/3gpp-ims+xml":{source:"iana",compressible:!0},"application/3gpphal+json":{source:"iana",compressible:!0},
"application/3gpphalforms+json":{source:"iana",compressible:!0},"application/a2l":{source:"iana"},
"application/ace+cbor":{source:"iana"},"application/activemessage":{source:"iana"},"application/activity+json":{
source:"iana",compressible:!0},"application/alto-costmap+json":{source:"iana",compressible:!0},
"application/alto-costmapfilter+json":{source:"iana",compressible:!0},"application/alto-directory+json":{source:"iana",
compressible:!0},"application/alto-endpointcost+json":{source:"iana",compressible:!0},
"application/alto-endpointcostparams+json":{source:"iana",compressible:!0},"application/alto-endpointprop+json":{
source:"iana",compressible:!0},"application/alto-endpointpropparams+json":{source:"iana",compressible:!0},
"application/alto-error+json":{source:"iana",compressible:!0},"application/alto-networkmap+json":{source:"iana",
compressible:!0},"application/alto-networkmapfilter+json":{source:"iana",compressible:!0},
"application/alto-updatestreamcontrol+json":{source:"iana",compressible:!0},"application/alto-updatestreamparams+json":{
source:"iana",compressible:!0},"application/aml":{source:"iana"},"application/andrew-inset":{source:"iana",extensions:[
"ez"]},"application/applefile":{source:"iana"},"application/applixware":{source:"apache",extensions:["aw"]},
"application/at+jwt":{source:"iana"},"application/atf":{source:"iana"},"application/atfx":{source:"iana"},
"application/atom+xml":{source:"iana",compressible:!0,extensions:["atom"]},"application/atomcat+xml":{source:"iana",
compressible:!0,extensions:["atomcat"]},"application/atomdeleted+xml":{source:"iana",compressible:!0,extensions:[
"atomdeleted"]},"application/atomicmail":{source:"iana"},"application/atomsvc+xml":{source:"iana",compressible:!0,
extensions:["atomsvc"]},"application/atsc-dwd+xml":{source:"iana",compressible:!0,extensions:["dwd"]},
"application/atsc-dynamic-event-message":{source:"iana"},"application/atsc-held+xml":{source:"iana",compressible:!0,
extensions:["held"]},"application/atsc-rdt+json":{source:"iana",compressible:!0},"application/atsc-rsat+xml":{
source:"iana",compressible:!0,extensions:["rsat"]},"application/atxml":{source:"iana"},"application/auth-policy+xml":{
source:"iana",compressible:!0},"application/bacnet-xdd+zip":{source:"iana",compressible:!(w={exports:{}})},
"application/batch-smtp":{source:"iana"},"application/bdoc":{compressible:!(Bl={}),extensions:["bdoc"]},
"application/beep+xml":{source:"iana",charset:"UTF-8",compressible:!0},"application/calendar+json":{source:"iana",
compressible:!0},"application/calendar+xml":{source:"iana",compressible:!0,extensions:["xcs"]},
"application/call-completion":{source:"iana"},"application/cals-1840":{source:"iana"},"application/captive+json":{
source:"iana",compressible:!0},"application/cbor":{source:"iana"},"application/cbor-seq":{source:"iana"},
"application/cccex":{source:"iana"},"application/ccmp+xml":{source:"iana",compressible:!0},"application/ccxml+xml":{
source:"iana",compressible:!0,extensions:["ccxml"]},"application/cdfx+xml":{source:"iana",compressible:!0,extensions:[
"cdfx"]},"application/cdmi-capability":{source:"iana",extensions:["cdmia"]},"application/cdmi-container":{source:"iana",
extensions:["cdmic"]},"application/cdmi-domain":{source:"iana",extensions:["cdmid"]},"application/cdmi-object":{
source:"iana",extensions:["cdmio"]},"application/cdmi-queue":{source:"iana",extensions:["cdmiq"]},"application/cdni":{
source:"iana"},"application/cea":{source:"iana"},"application/cea-2018+xml":{source:"iana",compressible:!0},
"application/cellml+xml":{source:"iana",compressible:!0},"application/cfw":{source:"iana"},"application/city+json":{
source:"iana",compressible:!0},"application/clr":{source:"iana"},"application/clue+xml":{source:"iana",compressible:!0},
"application/clue_info+xml":{source:"iana",compressible:!0},"application/cms":{source:"iana"},"application/cnrp+xml":{
source:"iana",compressible:!0},"application/coap-group+json":{source:"iana",compressible:!0},
"application/coap-payload":{source:"iana"},"application/commonground":{source:"iana"},
"application/conference-info+xml":{source:"iana",compressible:!0},"application/cose":{source:"iana"},
"application/cose-key":{source:"iana"},"application/cose-key-set":{source:"iana"},"application/cpl+xml":{source:"iana",
compressible:!0,extensions:["cpl"]},"application/csrattrs":{source:"iana"},"application/csta+xml":{source:"iana",
compressible:!0},"application/cstadata+xml":{source:"iana",compressible:!0},"application/csvm+json":{source:"iana",
compressible:!0},"application/cu-seeme":{source:"apache",extensions:["cu"]},"application/cwt":{source:"iana"},
"application/cybercash":{source:"iana"},"application/dart":{compressible:!0},"application/dash+xml":{source:"iana",
compressible:!0,extensions:["mpd"]},"application/dash-patch+xml":{source:"iana",compressible:!0,extensions:["mpp"]},
"application/dashdelta":{source:"iana"},"application/davmount+xml":{source:"iana",compressible:!0,extensions:["davmount"
]},"application/dca-rft":{source:"iana"},"application/dcd":{source:"iana"},"application/dec-dx":{source:"iana"},
"application/dialog-info+xml":{source:"iana",compressible:!0},"application/dicom":{source:"iana"},
"application/dicom+json":{source:"iana",compressible:!0},"application/dicom+xml":{source:"iana",compressible:!0},
"application/dii":{source:"iana"},"application/dit":{source:"iana"},"application/dns":{source:"iana"},
"application/dns+json":{source:"iana",compressible:!0},"application/dns-message":{source:"iana"},
"application/docbook+xml":{source:"apache",compressible:!0,extensions:["dbk"]},"application/dots+cbor":{source:"iana"},
"application/dskpp+xml":{source:"iana",compressible:!0},"application/dssc+der":{source:"iana",extensions:["dssc"]},
"application/dssc+xml":{source:"iana",compressible:!0,extensions:["xdssc"]},"application/dvcs":{source:"iana"},
"application/ecmascript":{source:"iana",compressible:!0,extensions:["es","ecma"]},"application/edi-consent":{
source:"iana"},"application/edi-x12":{source:"iana",compressible:!(C={exports:{}})},"application/edifact":{
source:"iana",compressible:!(sc={exports:{}})},"application/efi":{source:"iana"},"application/elm+json":{source:"iana",
charset:"UTF-8",compressible:!0},"application/elm+xml":{source:"iana",compressible:!0},
"application/emergencycalldata.cap+xml":{source:"iana",charset:"UTF-8",compressible:!0},
"application/emergencycalldata.comment+xml":{source:"iana",compressible:!0},
"application/emergencycalldata.control+xml":{source:"iana",compressible:!0},
"application/emergencycalldata.deviceinfo+xml":{source:"iana",compressible:!0},
"application/emergencycalldata.ecall.msd":{source:"iana"},"application/emergencycalldata.providerinfo+xml":{
source:"iana",compressible:!0},"application/emergencycalldata.serviceinfo+xml":{source:"iana",compressible:!0},
"application/emergencycalldata.subscriberinfo+xml":{source:"iana",compressible:!0},
"application/emergencycalldata.veds+xml":{source:"iana",compressible:!0},"application/emma+xml":{source:"iana",
compressible:!0,extensions:["emma"]},"application/emotionml+xml":{source:"iana",compressible:!0,extensions:["emotionml"]
},"application/encaprtp":{source:"iana"},"application/epp+xml":{source:"iana",compressible:!0},"application/epub+zip":{
source:"iana",compressible:!(ec={exports:{}}),extensions:["epub"]},"application/eshop":{source:"iana"},
"application/exi":{source:"iana",extensions:["exi"]},"application/expect-ct-report+json":{source:"iana",compressible:!0
},"application/express":{source:"iana",extensions:["exp"]},"application/fastinfoset":{source:"iana"},
"application/fastsoap":{source:"iana"},"application/fdt+xml":{source:"iana",compressible:!0,extensions:["fdt"]},
"application/fhir+json":{source:"iana",charset:"UTF-8",compressible:!0},"application/fhir+xml":{source:"iana",
charset:"UTF-8",compressible:!0},"application/fido.trusted-apps+json":{compressible:!0},"application/fits":{
source:"iana"},"application/flexfec":{source:"iana"},"application/font-sfnt":{source:"iana"},"application/font-tdpfr":{
source:"iana",extensions:["pfr"]},"application/font-woff":{source:"iana",compressible:!(Zr={exports:{}})},
"application/framework-attributes+xml":{source:"iana",compressible:!0},"application/geo+json":{source:"iana",
compressible:!0,extensions:["geojson"]},"application/geo+json-seq":{source:"iana"},"application/geopackage+sqlite3":{
source:"iana"},"application/geoxacml+xml":{source:"iana",compressible:!0},"application/gltf-buffer":{source:"iana"},
"application/gml+xml":{source:"iana",compressible:!0,extensions:["gml"]},"application/gpx+xml":{source:"apache",
compressible:!0,extensions:["gpx"]},"application/gxf":{source:"apache",extensions:["gxf"]},"application/gzip":{
source:"iana",compressible:!(Xr={exports:{}}),extensions:["gz"]},"application/h224":{source:"iana"},
"application/held+xml":{source:"iana",compressible:!0},"application/hjson":{extensions:["hjson"]},"application/http":{
source:"iana"},"application/hyperstudio":{source:"iana",extensions:["stk"]},"application/ibe-key-request+xml":{
source:"iana",compressible:!0},"application/ibe-pkg-reply+xml":{source:"iana",compressible:!0},
"application/ibe-pp-data":{source:"iana"},"application/iges":{source:"iana"},"application/im-iscomposing+xml":{
source:"iana",charset:"UTF-8",compressible:!0},"application/index":{source:"iana"},"application/index.cmd":{
source:"iana"},"application/index.obj":{source:"iana"},"application/index.response":{source:"iana"},
"application/index.vnd":{source:"iana"},"application/inkml+xml":{source:"iana",compressible:!0,extensions:["ink","inkml"
]},"application/iotp":{source:"iana"},"application/ipfix":{source:"iana",extensions:["ipfix"]},"application/ipp":{
source:"iana"},"application/isup":{source:"iana"},"application/its+xml":{source:"iana",compressible:!0,extensions:["its"
]},"application/java-archive":{source:"apache",compressible:!(d=function(e,t){return e&&!Br(t)?zr(e,t):t}),extensions:[
"jar","war","ear"]},"application/java-serialized-object":{source:"apache",compressible:!(qr=function(e,a){function s(e){
return null===e?"":Lr.isDate(e)?e.toISOString():Lr.isArrayBuffer(e)||Lr.isTypedArray(e
)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}a=a||new FormData;var t=[];return function i(e,o){if(
Lr.isPlainObject(e)||Lr.isArray(e)){if(-1!==t.indexOf(e))throw Error("Circular reference detected in "+o);t.push(e),
Lr.forEach(e,function(e,t){var n;if(!Lr.isUndefined(e)){if(n=o?o+"."+t:t,e&&!o&&"object"==typeof e)if(Lr.endsWith(t,"{}"
))e=JSON.stringify(e);else if(Lr.endsWith(t,"[]")&&(t=Lr.toArray(e)))return void t.forEach(function(e){Lr.isUndefined(e
)||a.append(n,s(e))});i(e,n)}}),t.pop()}else a.append(o,s(e))}(e),a}),extensions:["ser"]},"application/java-vm":{
source:"apache",compressible:!(Ul={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!(Fe.from=function(e,t,
n,i,o,a){var s=Object.create(Ir);return Dr.toFlatObject(e,s,function(e){return e!==Error.prototype}),Fe.call(s,e.message
,t,n,i,o),s.name=e.name,a&&Object.assign(s,a),s})}),extensions:["class"]},"application/javascript":{source:"iana",
charset:"UTF-8",compressible:!0,extensions:["js","mjs"]},"application/jf2feed+json":{source:"iana",compressible:!0},
"application/jose":{source:"iana"},"application/jose+json":{source:"iana",compressible:!0},"application/jrd+json":{
source:"iana",compressible:!0},"application/jscalendar+json":{source:"iana",compressible:!0},"application/json":{
source:"iana",charset:"UTF-8",compressible:!0,extensions:["json","map"]},"application/json-patch+json":{source:"iana",
compressible:!0},"application/json-seq":{source:"iana"},"application/json5":{extensions:["json5"]},
"application/jsonml+json":{source:"apache",compressible:!0,extensions:["jsonml"]},"application/jwk+json":{source:"iana",
compressible:!0},"application/jwk-set+json":{source:"iana",compressible:!0},"application/jwt":{source:"iana"},
"application/kpml-request+xml":{source:"iana",compressible:!0},"application/kpml-response+xml":{source:"iana",
compressible:!0},"application/ld+json":{source:"iana",compressible:!0,extensions:["jsonld"]},"application/lgr+xml":{
source:"iana",compressible:!0,extensions:["lgr"]},"application/link-format":{source:"iana"},
"application/load-control+xml":{source:"iana",compressible:!0},"application/lost+xml":{source:"iana",compressible:!0,
extensions:["lostxml"]},"application/lostsync+xml":{source:"iana",compressible:!0},"application/lpf+zip":{source:"iana",
compressible:!1},"application/lxf":{source:"iana"},"application/mac-binhex40":{source:"iana",extensions:["hqx"]},
"application/mac-compactpro":{source:"apache",extensions:["cpt"]},"application/macwriteii":{source:"iana"},
"application/mads+xml":{source:"iana",compressible:!0,extensions:["mads"]},"application/manifest+json":{source:"iana",
charset:"UTF-8",compressible:!0,extensions:["webmanifest"]},"application/marc":{source:"iana",extensions:["mrc"]},
"application/marcxml+xml":{source:"iana",compressible:!0,extensions:["mrcx"]},"application/mathematica":{source:"iana",
extensions:["ma","nb","mb"]},"application/mathml+xml":{source:"iana",compressible:!0,extensions:["mathml"]},
"application/mathml-content+xml":{source:"iana",compressible:!0},"application/mathml-presentation+xml":{source:"iana",
compressible:!0},"application/mbms-associated-procedure-description+xml":{source:"iana",compressible:!0},
"application/mbms-deregister+xml":{source:"iana",compressible:!0},"application/mbms-envelope+xml":{source:"iana",
compressible:!0},"application/mbms-msk+xml":{source:"iana",compressible:!0},"application/mbms-msk-response+xml":{
source:"iana",compressible:!0},"application/mbms-protection-description+xml":{source:"iana",compressible:!0},
"application/mbms-reception-report+xml":{source:"iana",compressible:!0},"application/mbms-register+xml":{source:"iana",
compressible:!0},"application/mbms-register-response+xml":{source:"iana",compressible:!0},
"application/mbms-schedule+xml":{source:"iana",compressible:!0},"application/mbms-user-service-description+xml":{
source:"iana",compressible:!0},"application/mbox":{source:"iana",extensions:["mbox"]},
"application/media-policy-dataset+xml":{source:"iana",compressible:!0,extensions:["mpf"]},
"application/media_control+xml":{source:"iana",compressible:!0},"application/mediaservercontrol+xml":{source:"iana",
compressible:!0,extensions:["mscml"]},"application/merge-patch+json":{source:"iana",compressible:!0},
"application/metalink+xml":{source:"apache",compressible:!0,extensions:["metalink"]},"application/metalink4+xml":{
source:"iana",compressible:!0,extensions:["meta4"]},"application/mets+xml":{source:"iana",compressible:!0,extensions:[
"mets"]},"application/mf4":{source:"iana"},"application/mikey":{source:"iana"},"application/mipc":{source:"iana"},
"application/missing-blocks+cbor-seq":{source:"iana"},"application/mmt-aei+xml":{source:"iana",compressible:!0,
extensions:["maei"]},"application/mmt-usd+xml":{source:"iana",compressible:!0,extensions:["musd"]},
"application/mods+xml":{source:"iana",compressible:!0,extensions:["mods"]},"application/moss-keys":{source:"iana"},
"application/moss-signature":{source:"iana"},"application/mosskey-data":{source:"iana"},"application/mosskey-request":{
source:"iana"},"application/mp21":{source:"iana",extensions:["m21","mp21"]},"application/mp4":{source:"iana",
extensions:["mp4s","m4p"]},"application/mpeg4-generic":{source:"iana"},"application/mpeg4-iod":{source:"iana"},
"application/mpeg4-iod-xmt":{source:"iana"},"application/mrb-consumer+xml":{source:"iana",compressible:!0},
"application/mrb-publish+xml":{source:"iana",compressible:!0},"application/msc-ivr+xml":{source:"iana",charset:"UTF-8",
compressible:!0},"application/msc-mixer+xml":{source:"iana",charset:"UTF-8",compressible:!0},"application/msword":{
source:"iana",compressible:!1,extensions:["doc","dot"]},"application/mud+json":{source:"iana",compressible:!0},
"application/multipart-core":{source:"iana"},"application/mxf":{source:"iana",extensions:["mxf"]},
"application/n-quads":{source:"iana",extensions:["nq"]},"application/n-triples":{source:"iana",extensions:["nt"]},
"application/nasdata":{source:"iana"},"application/news-checkgroups":{source:"iana",charset:"US-ASCII"},
"application/news-groupinfo":{source:"iana",charset:"US-ASCII"},"application/news-transmission":{source:"iana"},
"application/nlsml+xml":{source:"iana",compressible:!0},"application/node":{source:"iana",extensions:["cjs"]},
"application/nss":{source:"iana"},"application/oauth-authz-req+jwt":{source:"iana"},
"application/oblivious-dns-message":{source:"iana"},"application/ocsp-request":{source:"iana"},
"application/ocsp-response":{source:"iana"},"application/octet-stream":{source:"iana",compressible:!1,extensions:["bin",
"dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp",
"msm","buffer"]},"application/oda":{source:"iana",extensions:["oda"]},"application/odm+xml":{source:"iana",
compressible:!0},"application/odx":{source:"iana"},"application/oebps-package+xml":{source:"iana",compressible:!0,
extensions:["opf"]},"application/ogg":{source:"iana",compressible:!1,extensions:["ogx"]},"application/omdoc+xml":{
source:"apache",compressible:!0,extensions:["omdoc"]},"application/onenote":{source:"apache",extensions:["onetoc",
"onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{source:"iana",compressible:!0},"application/oscore":{
source:"iana"},"application/oxps":{source:"iana",extensions:["oxps"]},"application/p21":{source:"iana"},
"application/p21+zip":{source:"iana",compressible:!1},"application/p2p-overlay+xml":{source:"iana",compressible:!0,
extensions:["relo"]},"application/parityfec":{source:"iana"},"application/passport":{source:"iana"},
"application/patch-ops-error+xml":{source:"iana",compressible:!0,extensions:["xer"]},"application/pdf":{source:"iana",
compressible:!1,extensions:["pdf"]},"application/pdx":{source:"iana"},"application/pem-certificate-chain":{source:"iana"
},"application/pgp-encrypted":{source:"iana",compressible:!1,extensions:["pgp"]},"application/pgp-keys":{source:"iana",
extensions:["asc"]},"application/pgp-signature":{source:"iana",extensions:["asc","sig"]},"application/pics-rules":{
source:"apache",extensions:["prf"]},"application/pidf+xml":{source:"iana",charset:"UTF-8",compressible:!0},
"application/pidf-diff+xml":{source:"iana",charset:"UTF-8",compressible:!0},"application/pkcs10":{source:"iana",
extensions:["p10"]},"application/pkcs12":{source:"iana"},"application/pkcs7-mime":{source:"iana",extensions:["p7m","p7c"
]},"application/pkcs7-signature":{source:"iana",extensions:["p7s"]},"application/pkcs8":{source:"iana",extensions:["p8"]
},"application/pkcs8-encrypted":{source:"iana"},"application/pkix-attr-cert":{source:"iana",extensions:["ac"]},
"application/pkix-cert":{source:"iana",extensions:["cer"]},"application/pkix-crl":{source:"iana",extensions:["crl"]},
"application/pkix-pkipath":{source:"iana",extensions:["pkipath"]},"application/pkixcmp":{source:"iana",extensions:["pki"
]},"application/pls+xml":{source:"iana",compressible:!0,extensions:["pls"]},"application/poc-settings+xml":{
source:"iana",charset:"UTF-8",compressible:!0},"application/postscript":{source:"iana",compressible:!0,extensions:["ai",
"eps","ps"]},"application/ppsp-tracker+json":{source:"iana",compressible:!0},"application/problem+json":{source:"iana",
compressible:!0},"application/problem+xml":{source:"iana",compressible:!0},"application/provenance+xml":{source:"iana",
compressible:!0,extensions:["provx"]},"application/prs.alvestrand.titrax-sheet":{source:"iana"},"application/prs.cww":{
source:"iana",extensions:["cww"]},"application/prs.cyn":{source:"iana",charset:"7-BIT"},"application/prs.hpub+zip":{
source:"iana",compressible:!1},"application/prs.nprend":{source:"iana"},"application/prs.plucker":{source:"iana"},
"application/prs.rdf-xml-crypt":{source:"iana"},"application/prs.xsf+xml":{source:"iana",compressible:!0},
"application/pskc+xml":{source:"iana",compressible:!0,extensions:["pskcxml"]},"application/pvd+json":{source:"iana",
compressible:!0},"application/qsig":{source:"iana"},"application/raml+yaml":{compressible:!0,extensions:["raml"]},
"application/raptorfec":{source:"iana"},"application/rdap+json":{source:"iana",compressible:!0},"application/rdf+xml":{
source:"iana",compressible:!0,extensions:["rdf","owl"]},"application/reginfo+xml":{source:"iana",compressible:!0,
extensions:["rif"]},"application/relax-ng-compact-syntax":{source:"iana",extensions:["rnc"]},
"application/remote-printing":{source:"iana"},"application/reputon+json":{source:"iana",compressible:!0},
"application/resource-lists+xml":{source:"iana",compressible:!0,extensions:["rl"]},
"application/resource-lists-diff+xml":{source:"iana",compressible:!0,extensions:["rld"]},"application/rfc+xml":{
source:"iana",compressible:!0},"application/riscos":{source:"iana"},"application/rlmi+xml":{source:"iana",
compressible:!0},"application/rls-services+xml":{source:"iana",compressible:!0,extensions:["rs"]},
"application/route-apd+xml":{source:"iana",compressible:!0,extensions:["rapd"]},"application/route-s-tsid+xml":{
source:"iana",compressible:!0,extensions:["sls"]},"application/route-usd+xml":{source:"iana",compressible:!0,
extensions:["rusd"]},"application/rpki-ghostbusters":{source:"iana",extensions:["gbr"]},"application/rpki-manifest":{
source:"iana",extensions:["mft"]},"application/rpki-publication":{source:"iana"},"application/rpki-roa":{source:"iana",
extensions:["roa"]},"application/rpki-updown":{source:"iana"},"application/rsd+xml":{source:"apache",compressible:!0,
extensions:["rsd"]},"application/rss+xml":{source:"apache",compressible:!0,extensions:["rss"]},"application/rtf":{
source:"iana",compressible:!0,extensions:["rtf"]},"application/rtploopback":{source:"iana"},"application/rtx":{
source:"iana"},"application/samlassertion+xml":{source:"iana",compressible:!0},"application/samlmetadata+xml":{
source:"iana",compressible:!0},"application/sarif+json":{source:"iana",compressible:!0},
"application/sarif-external-properties+json":{source:"iana",compressible:!0},"application/sbe":{source:"iana"},
"application/sbml+xml":{source:"iana",compressible:!0,extensions:["sbml"]},"application/scaip+xml":{source:"iana",
compressible:!0},"application/scim+json":{source:"iana",compressible:!0},"application/scvp-cv-request":{source:"iana",
extensions:["scq"]},"application/scvp-cv-response":{source:"iana",extensions:["scs"]},"application/scvp-vp-request":{
source:"iana",extensions:["spq"]},"application/scvp-vp-response":{source:"iana",extensions:["spp"]},"application/sdp":{
source:"iana",extensions:["sdp"]},"application/secevent+jwt":{source:"iana"},"application/senml+cbor":{source:"iana"},
"application/senml+json":{source:"iana",compressible:!0},"application/senml+xml":{source:"iana",compressible:!0,
extensions:["senmlx"]},"application/senml-etch+cbor":{source:"iana"},"application/senml-etch+json":{source:"iana",
compressible:!0},"application/senml-exi":{source:"iana"},"application/sensml+cbor":{source:"iana"},
"application/sensml+json":{source:"iana",compressible:!0},"application/sensml+xml":{source:"iana",compressible:!0,
extensions:["sensmlx"]},"application/sensml-exi":{source:"iana"},"application/sep+xml":{source:"iana",compressible:!0},
"application/sep-exi":{source:"iana"},"application/session-info":{source:"iana"},"application/set-payment":{
source:"iana"},"application/set-payment-initiation":{source:"iana",extensions:["setpay"]},
"application/set-registration":{source:"iana"},"application/set-registration-initiation":{source:"iana",extensions:[
"setreg"]},"application/sgml":{source:"iana"},"application/sgml-open-catalog":{source:"iana"},"application/shf+xml":{
source:"iana",compressible:!0,extensions:["shf"]},"application/sieve":{source:"iana",extensions:["siv","sieve"]},
"application/simple-filter+xml":{source:"iana",compressible:!0},"application/simple-message-summary":{source:"iana"},
"application/simplesymbolcontainer":{source:"iana"},"application/sipc":{source:"iana"},"application/slate":{
source:"iana"},"application/smil":{source:"iana"},"application/smil+xml":{source:"iana",compressible:!0,extensions:[
"smi","smil"]},"application/smpte336m":{source:"iana"},"application/soap+fastinfoset":{source:"iana"},
"application/soap+xml":{source:"iana",compressible:!0},"application/sparql-query":{source:"iana",extensions:["rq"]},
"application/sparql-results+xml":{source:"iana",compressible:!0,extensions:["srx"]},"application/spdx+json":{
source:"iana",compressible:!0},"application/spirits-event+xml":{source:"iana",compressible:!0},"application/sql":{
source:"iana"},"application/srgs":{source:"iana",extensions:["gram"]},"application/srgs+xml":{source:"iana",
compressible:!0,extensions:["grxml"]},"application/sru+xml":{source:"iana",compressible:!0,extensions:["sru"]},
"application/ssdl+xml":{source:"apache",compressible:!0,extensions:["ssdl"]},"application/ssml+xml":{source:"iana",
compressible:!0,extensions:["ssml"]},"application/stix+json":{source:"iana",compressible:!0},"application/swid+xml":{
source:"iana",compressible:!0,extensions:["swidtag"]},"application/tamp-apex-update":{source:"iana"},
"application/tamp-apex-update-confirm":{source:"iana"},"application/tamp-community-update":{source:"iana"},
"application/tamp-community-update-confirm":{source:"iana"},"application/tamp-error":{source:"iana"},
"application/tamp-sequence-adjust":{source:"iana"},"application/tamp-sequence-adjust-confirm":{source:"iana"},
"application/tamp-status-query":{source:"iana"},"application/tamp-status-response":{source:"iana"},
"application/tamp-update":{source:"iana"},"application/tamp-update-confirm":{source:"iana"},"application/tar":{
compressible:!0},"application/taxii+json":{source:"iana",compressible:!0},"application/td+json":{source:"iana",
compressible:!0},"application/tei+xml":{source:"iana",compressible:!0,extensions:["tei","teicorpus"]},
"application/tetra_isi":{source:"iana"},"application/thraud+xml":{source:"iana",compressible:!0,extensions:["tfi"]},
"application/timestamp-query":{source:"iana"},"application/timestamp-reply":{source:"iana"},
"application/timestamped-data":{source:"iana",extensions:["tsd"]},"application/tlsrpt+gzip":{source:"iana"},
"application/tlsrpt+json":{source:"iana",compressible:!0},"application/tnauthlist":{source:"iana"},
"application/token-introspection+jwt":{source:"iana"},"application/toml":{compressible:!0,extensions:["toml"]},
"application/trickle-ice-sdpfrag":{source:"iana"},"application/trig":{source:"iana",extensions:["trig"]},
"application/ttml+xml":{source:"iana",compressible:!0,extensions:["ttml"]},"application/tve-trigger":{source:"iana"},
"application/tzif":{source:"iana"},"application/tzif-leap":{source:"iana"},"application/ubjson":{compressible:!1,
extensions:["ubj"]},"application/ulpfec":{source:"iana"},"application/urc-grpsheet+xml":{source:"iana",compressible:!0},
"application/urc-ressheet+xml":{source:"iana",compressible:!0,extensions:["rsheet"]},"application/urc-targetdesc+xml":{
source:"iana",compressible:!0,extensions:["td"]},"application/urc-uisocketdesc+xml":{source:"iana",compressible:!0},
"application/vcard+json":{source:"iana",compressible:!0},"application/vcard+xml":{source:"iana",compressible:!0},
"application/vemmi":{source:"iana"},"application/vividence.scriptfile":{source:"apache"},
"application/vnd.1000minds.decision-model+xml":{source:"iana",compressible:!0,extensions:["1km"]},
"application/vnd.3gpp-prose+xml":{source:"iana",compressible:!0},"application/vnd.3gpp-prose-pc3ch+xml":{source:"iana",
compressible:!0},"application/vnd.3gpp-v2x-local-service-information":{source:"iana"},"application/vnd.3gpp.5gnas":{
source:"iana"},"application/vnd.3gpp.access-transfer-events+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.bsf+xml":{source:"iana",compressible:!0},"application/vnd.3gpp.gmop+xml":{source:"iana",
compressible:!0},"application/vnd.3gpp.gtpc":{source:"iana"},"application/vnd.3gpp.interworking-data":{source:"iana"},
"application/vnd.3gpp.lpp":{source:"iana"},"application/vnd.3gpp.mc-signalling-ear":{source:"iana"},
"application/vnd.3gpp.mcdata-affiliation-command+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcdata-info+xml":{source:"iana",compressible:!0},"application/vnd.3gpp.mcdata-payload":{
source:"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcdata-signalling":{source:"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{source:"iana",
compressible:!0},"application/vnd.3gpp.mcdata-user-profile+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcptt-affiliation-command+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcptt-floor-request+xml":{source:"iana",compressible:!0},"application/vnd.3gpp.mcptt-info+xml":{
source:"iana",compressible:!0},"application/vnd.3gpp.mcptt-location-info+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcptt-service-config+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcptt-signed+xml":{source:"iana",compressible:!0},"application/vnd.3gpp.mcptt-ue-config+xml":{
source:"iana",compressible:!0},"application/vnd.3gpp.mcptt-ue-init-config+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcptt-user-profile+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-affiliation-command+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-affiliation-info+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-info+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-location-info+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-service-config+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-transmission-request+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-ue-config+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.mcvideo-user-profile+xml":{source:"iana",compressible:!0},"application/vnd.3gpp.mid-call+xml":{
source:"iana",compressible:!0},"application/vnd.3gpp.ngap":{source:"iana"},"application/vnd.3gpp.pfcp":{source:"iana"},
"application/vnd.3gpp.pic-bw-large":{source:"iana",extensions:["plb"]},"application/vnd.3gpp.pic-bw-small":{
source:"iana",extensions:["psb"]},"application/vnd.3gpp.pic-bw-var":{source:"iana",extensions:["pvb"]},
"application/vnd.3gpp.s1ap":{source:"iana"},"application/vnd.3gpp.sms":{source:"iana"},"application/vnd.3gpp.sms+xml":{
source:"iana",compressible:!0},"application/vnd.3gpp.srvcc-ext+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp.srvcc-info+xml":{source:"iana",compressible:!0},"application/vnd.3gpp.state-and-event-info+xml":{
source:"iana",compressible:!0},"application/vnd.3gpp.ussd+xml":{source:"iana",compressible:!0},
"application/vnd.3gpp2.bcmcsinfo+xml":{source:"iana",compressible:!0},"application/vnd.3gpp2.sms":{source:"iana"},
"application/vnd.3gpp2.tcap":{source:"iana",extensions:["tcap"]},"application/vnd.3lightssoftware.imagescal":{
source:"iana"},"application/vnd.3m.post-it-notes":{source:"iana",extensions:["pwn"]},
"application/vnd.accpac.simply.aso":{source:"iana",extensions:["aso"]},"application/vnd.accpac.simply.imp":{
source:"iana",extensions:["imp"]},"application/vnd.acucobol":{source:"iana",extensions:["acu"]},
"application/vnd.acucorp":{source:"iana",extensions:["atc","acutc"]},
"application/vnd.adobe.air-application-installer-package+zip":{source:"apache",compressible:!1,extensions:["air"]},
"application/vnd.adobe.flash.movie":{source:"iana"},"application/vnd.adobe.formscentral.fcdt":{source:"iana",
extensions:["fcdt"]},"application/vnd.adobe.fxp":{source:"iana",extensions:["fxp","fxpl"]},
"application/vnd.adobe.partial-upload":{source:"iana"},"application/vnd.adobe.xdp+xml":{source:"iana",compressible:!0,
extensions:["xdp"]},"application/vnd.adobe.xfdf":{source:"iana",extensions:["xfdf"]},"application/vnd.aether.imp":{
source:"iana"},"application/vnd.afpc.afplinedata":{source:"iana"},"application/vnd.afpc.afplinedata-pagedef":{
source:"iana"},"application/vnd.afpc.cmoca-cmresource":{source:"iana"},"application/vnd.afpc.foca-charset":{
source:"iana"},"application/vnd.afpc.foca-codedfont":{source:"iana"},"application/vnd.afpc.foca-codepage":{source:"iana"
},"application/vnd.afpc.modca":{source:"iana"},"application/vnd.afpc.modca-cmtable":{source:"iana"},
"application/vnd.afpc.modca-formdef":{source:"iana"},"application/vnd.afpc.modca-mediummap":{source:"iana"},
"application/vnd.afpc.modca-objectcontainer":{source:"iana"},"application/vnd.afpc.modca-overlay":{source:"iana"},
"application/vnd.afpc.modca-pagesegment":{source:"iana"},"application/vnd.age":{source:"iana",extensions:["age"]},
"application/vnd.ah-barcode":{source:"iana"},"application/vnd.ahead.space":{source:"iana",extensions:["ahead"]},
"application/vnd.airzip.filesecure.azf":{source:"iana",extensions:["azf"]},"application/vnd.airzip.filesecure.azs":{
source:"iana",extensions:["azs"]},"application/vnd.amadeus+json":{source:"iana",compressible:!0},
"application/vnd.amazon.ebook":{source:"apache",extensions:["azw"]},"application/vnd.amazon.mobi8-ebook":{source:"iana"
},"application/vnd.americandynamics.acc":{source:"iana",extensions:["acc"]},"application/vnd.amiga.ami":{source:"iana",
extensions:["ami"]},"application/vnd.amundsen.maze+xml":{source:"iana",compressible:!0},"application/vnd.android.ota":{
source:"iana"},"application/vnd.android.package-archive":{source:"apache",compressible:!1,extensions:["apk"]},
"application/vnd.anki":{source:"iana"},"application/vnd.anser-web-certificate-issue-initiation":{source:"iana",
extensions:["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{source:"apache",extensions:["fti"]},
"application/vnd.antix.game-component":{source:"iana",extensions:["atx"]},"application/vnd.apache.arrow.file":{
source:"iana"},"application/vnd.apache.arrow.stream":{source:"iana"},"application/vnd.apache.thrift.binary":{
source:"iana"},"application/vnd.apache.thrift.compact":{source:"iana"},"application/vnd.apache.thrift.json":{
source:"iana"},"application/vnd.api+json":{source:"iana",compressible:!0},"application/vnd.aplextor.warrp+json":{
source:"iana",compressible:!0},"application/vnd.apothekende.reservation+json":{source:"iana",compressible:!0},
"application/vnd.apple.installer+xml":{source:"iana",compressible:!0,extensions:["mpkg"]},
"application/vnd.apple.keynote":{source:"iana",extensions:["key"]},"application/vnd.apple.mpegurl":{source:"iana",
extensions:["m3u8"]},"application/vnd.apple.numbers":{source:"iana",extensions:["numbers"]},
"application/vnd.apple.pages":{source:"iana",extensions:["pages"]},"application/vnd.apple.pkpass":{compressible:!1,
extensions:["pkpass"]},"application/vnd.arastra.swi":{source:"iana"},"application/vnd.aristanetworks.swi":{
source:"iana",extensions:["swi"]},"application/vnd.artisan+json":{source:"iana",compressible:!0},
"application/vnd.artsquare":{source:"iana"},"application/vnd.astraea-software.iota":{source:"iana",extensions:["iota"]},
"application/vnd.audiograph":{source:"iana",extensions:["aep"]},"application/vnd.autopackage":{source:"iana"},
"application/vnd.avalon+json":{source:"iana",compressible:!0},"application/vnd.avistar+xml":{source:"iana",
compressible:!0},"application/vnd.balsamiq.bmml+xml":{source:"iana",compressible:!0,extensions:["bmml"]},
"application/vnd.balsamiq.bmpr":{source:"iana"},"application/vnd.banana-accounting":{source:"iana"},
"application/vnd.bbf.usp.error":{source:"iana"},"application/vnd.bbf.usp.msg":{source:"iana"},
"application/vnd.bbf.usp.msg+json":{source:"iana",compressible:!0},"application/vnd.bekitzur-stech+json":{source:"iana",
compressible:!0},"application/vnd.bint.med-content":{source:"iana"},"application/vnd.biopax.rdf+xml":{source:"iana",
compressible:!0},"application/vnd.blink-idb-value-wrapper":{source:"iana"},"application/vnd.blueice.multipass":{
source:"iana",extensions:["mpm"]},"application/vnd.bluetooth.ep.oob":{source:"iana"},
"application/vnd.bluetooth.le.oob":{source:"iana"},"application/vnd.bmi":{source:"iana",extensions:["bmi"]},
"application/vnd.bpf":{source:"iana"},"application/vnd.bpf3":{source:"iana"},"application/vnd.businessobjects":{
source:"iana",extensions:["rep"]},"application/vnd.byu.uapi+json":{source:"iana",compressible:!0},
"application/vnd.cab-jscript":{source:"iana"},"application/vnd.canon-cpdl":{source:"iana"},
"application/vnd.canon-lips":{source:"iana"},"application/vnd.capasystems-pg+json":{source:"iana",compressible:!0},
"application/vnd.cendio.thinlinc.clientconf":{source:"iana"},"application/vnd.century-systems.tcp_stream":{source:"iana"
},"application/vnd.chemdraw+xml":{source:"iana",compressible:!0,extensions:["cdxml"]},"application/vnd.chess-pgn":{
source:"iana"},"application/vnd.chipnuts.karaoke-mmd":{source:"iana",extensions:["mmd"]},"application/vnd.ciedi":{
source:"iana"},"application/vnd.cinderella":{source:"iana",extensions:["cdy"]},"application/vnd.cirpack.isdn-ext":{
source:"iana"},"application/vnd.citationstyles.style+xml":{source:"iana",compressible:!0,extensions:["csl"]},
"application/vnd.claymore":{source:"iana",extensions:["cla"]},"application/vnd.cloanto.rp9":{source:"iana",extensions:[
"rp9"]},"application/vnd.clonk.c4group":{source:"iana",extensions:["c4g","c4d","c4f","c4p","c4u"]},
"application/vnd.cluetrust.cartomobile-config":{source:"iana",extensions:["c11amc"]},
"application/vnd.cluetrust.cartomobile-config-pkg":{source:"iana",extensions:["c11amz"]},
"application/vnd.coffeescript":{source:"iana"},"application/vnd.collabio.xodocuments.document":{source:"iana"},
"application/vnd.collabio.xodocuments.document-template":{source:"iana"},
"application/vnd.collabio.xodocuments.presentation":{source:"iana"},
"application/vnd.collabio.xodocuments.presentation-template":{source:"iana"},
"application/vnd.collabio.xodocuments.spreadsheet":{source:"iana"},
"application/vnd.collabio.xodocuments.spreadsheet-template":{source:"iana"},"application/vnd.collection+json":{
source:"iana",compressible:!0},"application/vnd.collection.doc+json":{source:"iana",compressible:!0},
"application/vnd.collection.next+json":{source:"iana",compressible:!0},"application/vnd.comicbook+zip":{source:"iana",
compressible:!1},"application/vnd.comicbook-rar":{source:"iana"},"application/vnd.commerce-battelle":{source:"iana"},
"application/vnd.commonspace":{source:"iana",extensions:["csp"]},"application/vnd.contact.cmsg":{source:"iana",
extensions:["cdbcmsg"]},"application/vnd.coreos.ignition+json":{source:"iana",compressible:!0},
"application/vnd.cosmocaller":{source:"iana",extensions:["cmc"]},"application/vnd.crick.clicker":{source:"iana",
extensions:["clkx"]},"application/vnd.crick.clicker.keyboard":{source:"iana",extensions:["clkk"]},
"application/vnd.crick.clicker.palette":{source:"iana",extensions:["clkp"]},"application/vnd.crick.clicker.template":{
source:"iana",extensions:["clkt"]},"application/vnd.crick.clicker.wordbank":{source:"iana",extensions:["clkw"]},
"application/vnd.criticaltools.wbs+xml":{source:"iana",compressible:!0,extensions:["wbs"]},
"application/vnd.cryptii.pipe+json":{source:"iana",compressible:!0},"application/vnd.crypto-shade-file":{source:"iana"},
"application/vnd.cryptomator.encrypted":{source:"iana"},"application/vnd.cryptomator.vault":{source:"iana"},
"application/vnd.ctc-posml":{source:"iana",extensions:["pml"]},"application/vnd.ctct.ws+xml":{source:"iana",
compressible:!0},"application/vnd.cups-pdf":{source:"iana"},"application/vnd.cups-postscript":{source:"iana"},
"application/vnd.cups-ppd":{source:"iana",extensions:["ppd"]},"application/vnd.cups-raster":{source:"iana"},
"application/vnd.cups-raw":{source:"iana"},"application/vnd.curl":{source:"iana"},"application/vnd.curl.car":{
source:"apache",extensions:["car"]},"application/vnd.curl.pcurl":{source:"apache",extensions:["pcurl"]},
"application/vnd.cyan.dean.root+xml":{source:"iana",compressible:!0},"application/vnd.cybank":{source:"iana"},
"application/vnd.cyclonedx+json":{source:"iana",compressible:!0},"application/vnd.cyclonedx+xml":{source:"iana",
compressible:!0},"application/vnd.d2l.coursepackage1p0+zip":{source:"iana",compressible:!1},
"application/vnd.d3m-dataset":{source:"iana"},"application/vnd.d3m-problem":{source:"iana"},"application/vnd.dart":{
source:"iana",compressible:!0,extensions:["dart"]},"application/vnd.data-vision.rdz":{source:"iana",extensions:["rdz"]},
"application/vnd.datapackage+json":{source:"iana",compressible:!0},"application/vnd.dataresource+json":{source:"iana",
compressible:!0},"application/vnd.dbf":{source:"iana",extensions:["dbf"]},"application/vnd.debian.binary-package":{
source:"iana"},"application/vnd.dece.data":{source:"iana",extensions:["uvf","uvvf","uvd","uvvd"]},
"application/vnd.dece.ttml+xml":{source:"iana",compressible:!0,extensions:["uvt","uvvt"]},
"application/vnd.dece.unspecified":{source:"iana",extensions:["uvx","uvvx"]},"application/vnd.dece.zip":{source:"iana",
extensions:["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{source:"iana",extensions:["fe_launch"]},
"application/vnd.desmume.movie":{source:"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{source:"iana"},
"application/vnd.dm.delegation+xml":{source:"iana",compressible:!0},"application/vnd.dna":{source:"iana",extensions:[
"dna"]},"application/vnd.document+json":{source:"iana",compressible:!0},"application/vnd.dolby.mlp":{source:"apache",
extensions:["mlp"]},"application/vnd.dolby.mobile.1":{source:"iana"},"application/vnd.dolby.mobile.2":{source:"iana"},
"application/vnd.doremir.scorecloud-binary-document":{source:"iana"},"application/vnd.dpgraph":{source:"iana",
extensions:["dpg"]},"application/vnd.dreamfactory":{source:"iana",extensions:["dfac"]},"application/vnd.drive+json":{
source:"iana",compressible:!0},"application/vnd.ds-keypoint":{source:"apache",extensions:["kpxx"]},
"application/vnd.dtg.local":{source:"iana"},"application/vnd.dtg.local.flash":{source:"iana"},
"application/vnd.dtg.local.html":{source:"iana"},"application/vnd.dvb.ait":{source:"iana",extensions:["ait"]},
"application/vnd.dvb.dvbisl+xml":{source:"iana",compressible:!0},"application/vnd.dvb.dvbj":{source:"iana"},
"application/vnd.dvb.esgcontainer":{source:"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{source:"iana"},
"application/vnd.dvb.ipdcesgaccess":{source:"iana"},"application/vnd.dvb.ipdcesgaccess2":{source:"iana"},
"application/vnd.dvb.ipdcesgpdd":{source:"iana"},"application/vnd.dvb.ipdcroaming":{source:"iana"},
"application/vnd.dvb.iptv.alfec-base":{source:"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{source:"iana"},
"application/vnd.dvb.notif-aggregate-root+xml":{source:"iana",compressible:!0},
"application/vnd.dvb.notif-container+xml":{source:"iana",compressible:!0},"application/vnd.dvb.notif-generic+xml":{
source:"iana",compressible:!0},"application/vnd.dvb.notif-ia-msglist+xml":{source:"iana",compressible:!0},
"application/vnd.dvb.notif-ia-registration-request+xml":{source:"iana",compressible:!0},
"application/vnd.dvb.notif-ia-registration-response+xml":{source:"iana",compressible:!0},
"application/vnd.dvb.notif-init+xml":{source:"iana",compressible:!0},"application/vnd.dvb.pfr":{source:"iana"},
"application/vnd.dvb.service":{source:"iana",extensions:["svc"]},"application/vnd.dxr":{source:"iana"},
"application/vnd.dynageo":{source:"iana",extensions:["geo"]},"application/vnd.dzr":{source:"iana"},
"application/vnd.easykaraoke.cdgdownload":{source:"iana"},"application/vnd.ecdis-update":{source:"iana"},
"application/vnd.ecip.rlp":{source:"iana"},"application/vnd.eclipse.ditto+json":{source:"iana",compressible:!0},
"application/vnd.ecowin.chart":{source:"iana",extensions:["mag"]},"application/vnd.ecowin.filerequest":{source:"iana"},
"application/vnd.ecowin.fileupdate":{source:"iana"},"application/vnd.ecowin.series":{source:"iana"},
"application/vnd.ecowin.seriesrequest":{source:"iana"},"application/vnd.ecowin.seriesupdate":{source:"iana"},
"application/vnd.efi.img":{source:"iana"},"application/vnd.efi.iso":{source:"iana"},
"application/vnd.emclient.accessrequest+xml":{source:"iana",compressible:!0},"application/vnd.enliven":{source:"iana",
extensions:["nml"]},"application/vnd.enphase.envoy":{source:"iana"},"application/vnd.eprints.data+xml":{source:"iana",
compressible:!0},"application/vnd.epson.esf":{source:"iana",extensions:["esf"]},"application/vnd.epson.msf":{
source:"iana",extensions:["msf"]},"application/vnd.epson.quickanime":{source:"iana",extensions:["qam"]},
"application/vnd.epson.salt":{source:"iana",extensions:["slt"]},"application/vnd.epson.ssf":{source:"iana",extensions:[
"ssf"]},"application/vnd.ericsson.quickcall":{source:"iana"},"application/vnd.espass-espass+zip":{source:"iana",
compressible:!1},"application/vnd.eszigno3+xml":{source:"iana",compressible:!0,extensions:["es3","et3"]},
"application/vnd.etsi.aoc+xml":{source:"iana",compressible:!0},"application/vnd.etsi.asic-e+zip":{source:"iana",
compressible:!1},"application/vnd.etsi.asic-s+zip":{source:"iana",compressible:!1},"application/vnd.etsi.cug+xml":{
source:"iana",compressible:!0},"application/vnd.etsi.iptvcommand+xml":{source:"iana",compressible:!0},
"application/vnd.etsi.iptvdiscovery+xml":{source:"iana",compressible:!0},"application/vnd.etsi.iptvprofile+xml":{
source:"iana",compressible:!0},"application/vnd.etsi.iptvsad-bc+xml":{source:"iana",compressible:!0},
"application/vnd.etsi.iptvsad-cod+xml":{source:"iana",compressible:!0},"application/vnd.etsi.iptvsad-npvr+xml":{
source:"iana",compressible:!0},"application/vnd.etsi.iptvservice+xml":{source:"iana",compressible:!0},
"application/vnd.etsi.iptvsync+xml":{source:"iana",compressible:!0},"application/vnd.etsi.iptvueprofile+xml":{
source:"iana",compressible:!0},"application/vnd.etsi.mcid+xml":{source:"iana",compressible:!0},
"application/vnd.etsi.mheg5":{source:"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{source:"iana",
compressible:!0},"application/vnd.etsi.pstn+xml":{source:"iana",compressible:!0},"application/vnd.etsi.sci+xml":{
source:"iana",compressible:!0},"application/vnd.etsi.simservs+xml":{source:"iana",compressible:!0},
"application/vnd.etsi.timestamp-token":{source:"iana"},"application/vnd.etsi.tsl+xml":{source:"iana",compressible:!0},
"application/vnd.etsi.tsl.der":{source:"iana"},"application/vnd.eu.kasparian.car+json":{source:"iana",compressible:!0},
"application/vnd.eudora.data":{source:"iana"},"application/vnd.evolv.ecig.profile":{source:"iana"},
"application/vnd.evolv.ecig.settings":{source:"iana"},"application/vnd.evolv.ecig.theme":{source:"iana"},
"application/vnd.exstream-empower+zip":{source:"iana",compressible:!1},"application/vnd.exstream-package":{source:"iana"
},"application/vnd.ezpix-album":{source:"iana",extensions:["ez2"]},"application/vnd.ezpix-package":{source:"iana",
extensions:["ez3"]},"application/vnd.f-secure.mobile":{source:"iana"},"application/vnd.familysearch.gedcom+zip":{
source:"iana",compressible:!1},"application/vnd.fastcopy-disk-image":{source:"iana"},"application/vnd.fdf":{
source:"iana",extensions:["fdf"]},"application/vnd.fdsn.mseed":{source:"iana",extensions:["mseed"]},
"application/vnd.fdsn.seed":{source:"iana",extensions:["seed","dataless"]},"application/vnd.ffsns":{source:"iana"},
"application/vnd.ficlab.flb+zip":{source:"iana",compressible:!1},"application/vnd.filmit.zfc":{source:"iana"},
"application/vnd.fints":{source:"iana"},"application/vnd.firemonkeys.cloudcell":{source:"iana"},
"application/vnd.flographit":{source:"iana",extensions:["gph"]},"application/vnd.fluxtime.clip":{source:"iana",
extensions:["ftc"]},"application/vnd.font-fontforge-sfd":{source:"iana"},"application/vnd.framemaker":{source:"iana",
extensions:["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{source:"iana",extensions:["fnc"]},
"application/vnd.frogans.ltf":{source:"iana",extensions:["ltf"]},"application/vnd.fsc.weblaunch":{source:"iana",
extensions:["fsc"]},"application/vnd.fujifilm.fb.docuworks":{source:"iana"},
"application/vnd.fujifilm.fb.docuworks.binder":{source:"iana"},"application/vnd.fujifilm.fb.docuworks.container":{
source:"iana"},"application/vnd.fujifilm.fb.jfi+xml":{source:"iana",compressible:!0},"application/vnd.fujitsu.oasys":{
source:"iana",extensions:["oas"]},"application/vnd.fujitsu.oasys2":{source:"iana",extensions:["oa2"]},
"application/vnd.fujitsu.oasys3":{source:"iana",extensions:["oa3"]},"application/vnd.fujitsu.oasysgp":{source:"iana",
extensions:["fg5"]},"application/vnd.fujitsu.oasysprs":{source:"iana",extensions:["bh2"]},
"application/vnd.fujixerox.art-ex":{source:"iana"},"application/vnd.fujixerox.art4":{source:"iana"},
"application/vnd.fujixerox.ddd":{source:"iana",extensions:["ddd"]},"application/vnd.fujixerox.docuworks":{source:"iana",
extensions:["xdw"]},"application/vnd.fujixerox.docuworks.binder":{source:"iana",extensions:["xbd"]},
"application/vnd.fujixerox.docuworks.container":{source:"iana"},"application/vnd.fujixerox.hbpl":{source:"iana"},
"application/vnd.fut-misnet":{source:"iana"},"application/vnd.futoin+cbor":{source:"iana"},
"application/vnd.futoin+json":{source:"iana",compressible:!0},"application/vnd.fuzzysheet":{source:"iana",extensions:[
"fzs"]},"application/vnd.genomatix.tuxedo":{source:"iana",extensions:["txd"]},"application/vnd.gentics.grd+json":{
source:"iana",compressible:!0},"application/vnd.geo+json":{source:"iana",compressible:!0},
"application/vnd.geocube+xml":{source:"iana",compressible:!0},"application/vnd.geogebra.file":{source:"iana",
extensions:["ggb"]},"application/vnd.geogebra.slides":{source:"iana"},"application/vnd.geogebra.tool":{source:"iana",
extensions:["ggt"]},"application/vnd.geometry-explorer":{source:"iana",extensions:["gex","gre"]},
"application/vnd.geonext":{source:"iana",extensions:["gxt"]},"application/vnd.geoplan":{source:"iana",extensions:["g2w"]
},"application/vnd.geospace":{source:"iana",extensions:["g3w"]},"application/vnd.gerber":{source:"iana"},
"application/vnd.globalplatform.card-content-mgt":{source:"iana"},
"application/vnd.globalplatform.card-content-mgt-response":{source:"iana"},"application/vnd.gmx":{source:"iana",
extensions:["gmx"]},"application/vnd.google-apps.document":{compressible:!1,extensions:["gdoc"]},
"application/vnd.google-apps.presentation":{compressible:!1,extensions:["gslides"]},
"application/vnd.google-apps.spreadsheet":{compressible:!1,extensions:["gsheet"]},
"application/vnd.google-earth.kml+xml":{source:"iana",compressible:!0,extensions:["kml"]},
"application/vnd.google-earth.kmz":{source:"iana",compressible:!1,extensions:["kmz"]},
"application/vnd.gov.sk.e-form+xml":{source:"iana",compressible:!0},"application/vnd.gov.sk.e-form+zip":{source:"iana",
compressible:!1},"application/vnd.gov.sk.xmldatacontainer+xml":{source:"iana",compressible:!0},
"application/vnd.grafeq":{source:"iana",extensions:["gqf","gqs"]},"application/vnd.gridmp":{source:"iana"},
"application/vnd.groove-account":{source:"iana",extensions:["gac"]},"application/vnd.groove-help":{source:"iana",
extensions:["ghf"]},"application/vnd.groove-identity-message":{source:"iana",extensions:["gim"]},
"application/vnd.groove-injector":{source:"iana",extensions:["grv"]},"application/vnd.groove-tool-message":{
source:"iana",extensions:["gtm"]},"application/vnd.groove-tool-template":{source:"iana",extensions:["tpl"]},
"application/vnd.groove-vcard":{source:"iana",extensions:["vcg"]},"application/vnd.hal+json":{source:"iana",
compressible:!0},"application/vnd.hal+xml":{source:"iana",compressible:!0,extensions:["hal"]},
"application/vnd.handheld-entertainment+xml":{source:"iana",compressible:!0,extensions:["zmm"]},"application/vnd.hbci":{
source:"iana",extensions:["hbci"]},"application/vnd.hc+json":{source:"iana",compressible:!0},
"application/vnd.hcl-bireports":{source:"iana"},"application/vnd.hdt":{source:"iana"},"application/vnd.heroku+json":{
source:"iana",compressible:!0},"application/vnd.hhe.lesson-player":{source:"iana",extensions:["les"]},
"application/vnd.hl7cda+xml":{source:"iana",charset:"UTF-8",compressible:!0},"application/vnd.hl7v2+xml":{source:"iana",
charset:"UTF-8",compressible:!0},"application/vnd.hp-hpgl":{source:"iana",extensions:["hpgl"]},
"application/vnd.hp-hpid":{source:"iana",extensions:["hpid"]},"application/vnd.hp-hps":{source:"iana",extensions:["hps"]
},"application/vnd.hp-jlyt":{source:"iana",extensions:["jlt"]},"application/vnd.hp-pcl":{source:"iana",extensions:["pcl"
]},"application/vnd.hp-pclxl":{source:"iana",extensions:["pclxl"]},"application/vnd.httphone":{source:"iana"},
"application/vnd.hydrostatix.sof-data":{source:"iana",extensions:["sfd-hdstx"]},"application/vnd.hyper+json":{
source:"iana",compressible:!0},"application/vnd.hyper-item+json":{source:"iana",compressible:!0},
"application/vnd.hyperdrive+json":{source:"iana",compressible:!0},"application/vnd.hzn-3d-crossword":{source:"iana"},
"application/vnd.ibm.afplinedata":{source:"iana"},"application/vnd.ibm.electronic-media":{source:"iana"},
"application/vnd.ibm.minipay":{source:"iana",extensions:["mpy"]},"application/vnd.ibm.modcap":{source:"iana",
extensions:["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{source:"iana",extensions:["irm"]},
"application/vnd.ibm.secure-container":{source:"iana",extensions:["sc"]},"application/vnd.iccprofile":{source:"iana",
extensions:["icc","icm"]},"application/vnd.ieee.1905":{source:"iana"},"application/vnd.igloader":{source:"iana",
extensions:["igl"]},"application/vnd.imagemeter.folder+zip":{source:"iana",compressible:!1},
"application/vnd.imagemeter.image+zip":{source:"iana",compressible:!1},"application/vnd.immervision-ivp":{source:"iana",
extensions:["ivp"]},"application/vnd.immervision-ivu":{source:"iana",extensions:["ivu"]},
"application/vnd.ims.imsccv1p1":{source:"iana"},"application/vnd.ims.imsccv1p2":{source:"iana"},
"application/vnd.ims.imsccv1p3":{source:"iana"},"application/vnd.ims.lis.v2.result+json":{source:"iana",compressible:!0
},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{source:"iana",compressible:!0},
"application/vnd.ims.lti.v2.toolproxy+json":{source:"iana",compressible:!0},
"application/vnd.ims.lti.v2.toolproxy.id+json":{source:"iana",compressible:!0},
"application/vnd.ims.lti.v2.toolsettings+json":{source:"iana",compressible:!0},
"application/vnd.ims.lti.v2.toolsettings.simple+json":{source:"iana",compressible:!0},
"application/vnd.informedcontrol.rms+xml":{source:"iana",compressible:!0},"application/vnd.informix-visionary":{
source:"iana"},"application/vnd.infotech.project":{source:"iana"},"application/vnd.infotech.project+xml":{source:"iana",
compressible:!0},"application/vnd.innopath.wamp.notification":{source:"iana"},"application/vnd.insors.igm":{
source:"iana",extensions:["igm"]},"application/vnd.intercon.formnet":{source:"iana",extensions:["xpw","xpx"]},
"application/vnd.intergeo":{source:"iana",extensions:["i2g"]},"application/vnd.intertrust.digibox":{source:"iana"},
"application/vnd.intertrust.nncp":{source:"iana"},"application/vnd.intu.qbo":{source:"iana",extensions:["qbo"]},
"application/vnd.intu.qfx":{source:"iana",extensions:["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{source:"iana",
compressible:!0},"application/vnd.iptc.g2.conceptitem+xml":{source:"iana",compressible:!0},
"application/vnd.iptc.g2.knowledgeitem+xml":{source:"iana",compressible:!0},"application/vnd.iptc.g2.newsitem+xml":{
source:"iana",compressible:!0},"application/vnd.iptc.g2.newsmessage+xml":{source:"iana",compressible:!0},
"application/vnd.iptc.g2.packageitem+xml":{source:"iana",compressible:!0},"application/vnd.iptc.g2.planningitem+xml":{
source:"iana",compressible:!0},"application/vnd.ipunplugged.rcprofile":{source:"iana",extensions:["rcprofile"]},
"application/vnd.irepository.package+xml":{source:"iana",compressible:!0,extensions:["irp"]},"application/vnd.is-xpr":{
source:"iana",extensions:["xpr"]},"application/vnd.isac.fcs":{source:"iana",extensions:["fcs"]},
"application/vnd.iso11783-10+zip":{source:"iana",compressible:!1},"application/vnd.jam":{source:"iana",extensions:["jam"
]},"application/vnd.japannet-directory-service":{source:"iana"},"application/vnd.japannet-jpnstore-wakeup":{
source:"iana"},"application/vnd.japannet-payment-wakeup":{source:"iana"},"application/vnd.japannet-registration":{
source:"iana"},"application/vnd.japannet-registration-wakeup":{source:"iana"},
"application/vnd.japannet-setstore-wakeup":{source:"iana"},"application/vnd.japannet-verification":{source:"iana"},
"application/vnd.japannet-verification-wakeup":{source:"iana"},"application/vnd.jcp.javame.midlet-rms":{source:"iana",
extensions:["rms"]},"application/vnd.jisp":{source:"iana",extensions:["jisp"]},"application/vnd.joost.joda-archive":{
source:"iana",extensions:["joda"]},"application/vnd.jsk.isdn-ngn":{source:"iana"},"application/vnd.kahootz":{
source:"iana",extensions:["ktz","ktr"]},"application/vnd.kde.karbon":{source:"iana",extensions:["karbon"]},
"application/vnd.kde.kchart":{source:"iana",extensions:["chrt"]},"application/vnd.kde.kformula":{source:"iana",
extensions:["kfo"]},"application/vnd.kde.kivio":{source:"iana",extensions:["flw"]},"application/vnd.kde.kontour":{
source:"iana",extensions:["kon"]},"application/vnd.kde.kpresenter":{source:"iana",extensions:["kpr","kpt"]},
"application/vnd.kde.kspread":{source:"iana",extensions:["ksp"]},"application/vnd.kde.kword":{source:"iana",extensions:[
"kwd","kwt"]},"application/vnd.kenameaapp":{source:"iana",extensions:["htke"]},"application/vnd.kidspiration":{
source:"iana",extensions:["kia"]},"application/vnd.kinar":{source:"iana",extensions:["kne","knp"]},
"application/vnd.koan":{source:"iana",extensions:["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{
source:"iana",extensions:["sse"]},"application/vnd.las":{source:"iana"},"application/vnd.las.las+json":{source:"iana",
compressible:!0},"application/vnd.las.las+xml":{source:"iana",compressible:!0,extensions:["lasxml"]},
"application/vnd.laszip":{source:"iana"},"application/vnd.leap+json":{source:"iana",compressible:!0},
"application/vnd.liberty-request+xml":{source:"iana",compressible:!0},
"application/vnd.llamagraphics.life-balance.desktop":{source:"iana",extensions:["lbd"]},
"application/vnd.llamagraphics.life-balance.exchange+xml":{source:"iana",compressible:!0,extensions:["lbe"]},
"application/vnd.logipipe.circuit+zip":{source:"iana",compressible:!1},"application/vnd.loom":{source:"iana"},
"application/vnd.lotus-1-2-3":{source:"iana",extensions:["123"]},"application/vnd.lotus-approach":{source:"iana",
extensions:["apr"]},"application/vnd.lotus-freelance":{source:"iana",extensions:["pre"]},"application/vnd.lotus-notes":{
source:"iana",extensions:["nsf"]},"application/vnd.lotus-organizer":{source:"iana",extensions:["org"]},
"application/vnd.lotus-screencam":{source:"iana",extensions:["scm"]},"application/vnd.lotus-wordpro":{source:"iana",
extensions:["lwp"]},"application/vnd.macports.portpkg":{source:"iana",extensions:["portpkg"]},
"application/vnd.mapbox-vector-tile":{source:"iana",extensions:["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{
source:"iana",compressible:!0},"application/vnd.marlin.drm.conftoken+xml":{source:"iana",compressible:!0},
"application/vnd.marlin.drm.license+xml":{source:"iana",compressible:!0},"application/vnd.marlin.drm.mdcf":{
source:"iana"},"application/vnd.mason+json":{source:"iana",compressible:!0},"application/vnd.maxar.archive.3tz+zip":{
source:"iana",compressible:!1},"application/vnd.maxmind.maxmind-db":{source:"iana"},"application/vnd.mcd":{
source:"iana",extensions:["mcd"]},"application/vnd.medcalcdata":{source:"iana",extensions:["mc1"]},
"application/vnd.mediastation.cdkey":{source:"iana",extensions:["cdkey"]},"application/vnd.meridian-slingshot":{
source:"iana"},"application/vnd.mfer":{source:"iana",extensions:["mwf"]},"application/vnd.mfmp":{source:"iana",
extensions:["mfm"]},"application/vnd.micro+json":{source:"iana",compressible:!0},"application/vnd.micrografx.flo":{
source:"iana",extensions:["flo"]},"application/vnd.micrografx.igx":{source:"iana",extensions:["igx"]},
"application/vnd.microsoft.portable-executable":{source:"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{
source:"iana"},"application/vnd.miele+json":{source:"iana",compressible:!0},"application/vnd.mif":{source:"iana",
extensions:["mif"]},"application/vnd.minisoft-hp3000-save":{source:"iana"},
"application/vnd.mitsubishi.misty-guard.trustweb":{source:"iana"},"application/vnd.mobius.daf":{source:"iana",
extensions:["daf"]},"application/vnd.mobius.dis":{source:"iana",extensions:["dis"]},"application/vnd.mobius.mbk":{
source:"iana",extensions:["mbk"]},"application/vnd.mobius.mqy":{source:"iana",extensions:["mqy"]},
"application/vnd.mobius.msl":{source:"iana",extensions:["msl"]},"application/vnd.mobius.plc":{source:"iana",extensions:[
"plc"]},"application/vnd.mobius.txf":{source:"iana",extensions:["txf"]},"application/vnd.mophun.application":{
source:"iana",extensions:["mpn"]},"application/vnd.mophun.certificate":{source:"iana",extensions:["mpc"]},
"application/vnd.motorola.flexsuite":{source:"iana"},"application/vnd.motorola.flexsuite.adsi":{source:"iana"},
"application/vnd.motorola.flexsuite.fis":{source:"iana"},"application/vnd.motorola.flexsuite.gotap":{source:"iana"},
"application/vnd.motorola.flexsuite.kmr":{source:"iana"},"application/vnd.motorola.flexsuite.ttc":{source:"iana"},
"application/vnd.motorola.flexsuite.wem":{source:"iana"},"application/vnd.motorola.iprm":{source:"iana"},
"application/vnd.mozilla.xul+xml":{source:"iana",compressible:!0,extensions:["xul"]},"application/vnd.ms-3mfdocument":{
source:"iana"},"application/vnd.ms-artgalry":{source:"iana",extensions:["cil"]},"application/vnd.ms-asf":{source:"iana"
},"application/vnd.ms-cab-compressed":{source:"iana",extensions:["cab"]},"application/vnd.ms-color.iccprofile":{
source:"apache"},"application/vnd.ms-excel":{source:"iana",compressible:!1,extensions:["xls","xlm","xla","xlc","xlt",
"xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{source:"iana",extensions:["xlam"]},
"application/vnd.ms-excel.sheet.binary.macroenabled.12":{source:"iana",extensions:["xlsb"]},
"application/vnd.ms-excel.sheet.macroenabled.12":{source:"iana",extensions:["xlsm"]},
"application/vnd.ms-excel.template.macroenabled.12":{source:"iana",extensions:["xltm"]},
"application/vnd.ms-fontobject":{source:"iana",compressible:!0,extensions:["eot"]},"application/vnd.ms-htmlhelp":{
source:"iana",extensions:["chm"]},"application/vnd.ms-ims":{source:"iana",extensions:["ims"]},"application/vnd.ms-lrm":{
source:"iana",extensions:["lrm"]},"application/vnd.ms-office.activex+xml":{source:"iana",compressible:!0},
"application/vnd.ms-officetheme":{source:"iana",extensions:["thmx"]},"application/vnd.ms-opentype":{source:"apache",
compressible:!0},"application/vnd.ms-outlook":{compressible:!1,extensions:["msg"]},
"application/vnd.ms-package.obfuscated-opentype":{source:"apache"},"application/vnd.ms-pki.seccat":{source:"apache",
extensions:["cat"]},"application/vnd.ms-pki.stl":{source:"apache",extensions:["stl"]},
"application/vnd.ms-playready.initiator+xml":{source:"iana",compressible:!0},"application/vnd.ms-powerpoint":{
source:"iana",compressible:!1,extensions:["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{
source:"iana",extensions:["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{source:"iana",
extensions:["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{source:"iana",extensions:["sldm"]},
"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{source:"iana",extensions:["ppsm"]},
"application/vnd.ms-powerpoint.template.macroenabled.12":{source:"iana",extensions:["potm"]},
"application/vnd.ms-printdevicecapabilities+xml":{source:"iana",compressible:!0},
"application/vnd.ms-printing.printticket+xml":{source:"apache",compressible:!0},
"application/vnd.ms-printschematicket+xml":{source:"iana",compressible:!0},"application/vnd.ms-project":{source:"iana",
extensions:["mpp","mpt"]},"application/vnd.ms-tnef":{source:"iana"},"application/vnd.ms-windows.devicepairing":{
source:"iana"},"application/vnd.ms-windows.nwprinting.oob":{source:"iana"},"application/vnd.ms-windows.printerpairing":{
source:"iana"},"application/vnd.ms-windows.wsd.oob":{source:"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{
source:"iana"},"application/vnd.ms-wmdrm.lic-resp":{source:"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{
source:"iana"},"application/vnd.ms-wmdrm.meter-resp":{source:"iana"},
"application/vnd.ms-word.document.macroenabled.12":{source:"iana",extensions:["docm"]},
"application/vnd.ms-word.template.macroenabled.12":{source:"iana",extensions:["dotm"]},"application/vnd.ms-works":{
source:"iana",extensions:["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{source:"iana",extensions:["wpl"]},
"application/vnd.ms-xpsdocument":{source:"iana",compressible:!1,extensions:["xps"]},"application/vnd.msa-disk-image":{
source:"iana"},"application/vnd.mseq":{source:"iana",extensions:["mseq"]},"application/vnd.msign":{source:"iana"},
"application/vnd.multiad.creator":{source:"iana"},"application/vnd.multiad.creator.cif":{source:"iana"},
"application/vnd.music-niff":{source:"iana"},"application/vnd.musician":{source:"iana",extensions:["mus"]},
"application/vnd.muvee.style":{source:"iana",extensions:["msty"]},"application/vnd.mynfc":{source:"iana",extensions:[
"taglet"]},"application/vnd.nacamar.ybrid+json":{source:"iana",compressible:!0},"application/vnd.ncd.control":{
source:"iana"},"application/vnd.ncd.reference":{source:"iana"},"application/vnd.nearst.inv+json":{source:"iana",
compressible:!0},"application/vnd.nebumind.line":{source:"iana"},"application/vnd.nervana":{source:"iana"},
"application/vnd.netfpx":{source:"iana"},"application/vnd.neurolanguage.nlu":{source:"iana",extensions:["nlu"]},
"application/vnd.nimn":{source:"iana"},"application/vnd.nintendo.nitro.rom":{source:"iana"},
"application/vnd.nintendo.snes.rom":{source:"iana"},"application/vnd.nitf":{source:"iana",extensions:["ntf","nitf"]},
"application/vnd.noblenet-directory":{source:"iana",extensions:["nnd"]},"application/vnd.noblenet-sealer":{
source:"iana",extensions:["nns"]},"application/vnd.noblenet-web":{source:"iana",extensions:["nnw"]},
"application/vnd.nokia.catalogs":{source:"iana"},"application/vnd.nokia.conml+wbxml":{source:"iana"},
"application/vnd.nokia.conml+xml":{source:"iana",compressible:!0},"application/vnd.nokia.iptv.config+xml":{
source:"iana",compressible:!0},"application/vnd.nokia.isds-radio-presets":{source:"iana"},
"application/vnd.nokia.landmark+wbxml":{source:"iana"},"application/vnd.nokia.landmark+xml":{source:"iana",
compressible:!0},"application/vnd.nokia.landmarkcollection+xml":{source:"iana",compressible:!0},
"application/vnd.nokia.n-gage.ac+xml":{source:"iana",compressible:!0,extensions:["ac"]},
"application/vnd.nokia.n-gage.data":{source:"iana",extensions:["ngdat"]},
"application/vnd.nokia.n-gage.symbian.install":{source:"iana",extensions:["n-gage"]},"application/vnd.nokia.ncd":{
source:"iana"},"application/vnd.nokia.pcd+wbxml":{source:"iana"},"application/vnd.nokia.pcd+xml":{source:"iana",
compressible:!0},"application/vnd.nokia.radio-preset":{source:"iana",extensions:["rpst"]},
"application/vnd.nokia.radio-presets":{source:"iana",extensions:["rpss"]},"application/vnd.novadigm.edm":{source:"iana",
extensions:["edm"]},"application/vnd.novadigm.edx":{source:"iana",extensions:["edx"]},"application/vnd.novadigm.ext":{
source:"iana",extensions:["ext"]},"application/vnd.ntt-local.content-share":{source:"iana"},
"application/vnd.ntt-local.file-transfer":{source:"iana"},"application/vnd.ntt-local.ogw_remote-access":{source:"iana"},
"application/vnd.ntt-local.sip-ta_remote":{source:"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{source:"iana"},
"application/vnd.oasis.opendocument.chart":{source:"iana",extensions:["odc"]},
"application/vnd.oasis.opendocument.chart-template":{source:"iana",extensions:["otc"]},
"application/vnd.oasis.opendocument.database":{source:"iana",extensions:["odb"]},
"application/vnd.oasis.opendocument.formula":{source:"iana",extensions:["odf"]},
"application/vnd.oasis.opendocument.formula-template":{source:"iana",extensions:["odft"]},
"application/vnd.oasis.opendocument.graphics":{source:"iana",compressible:!1,extensions:["odg"]},
"application/vnd.oasis.opendocument.graphics-template":{source:"iana",extensions:["otg"]},
"application/vnd.oasis.opendocument.image":{source:"iana",extensions:["odi"]},
"application/vnd.oasis.opendocument.image-template":{source:"iana",extensions:["oti"]},
"application/vnd.oasis.opendocument.presentation":{source:"iana",compressible:!1,extensions:["odp"]},
"application/vnd.oasis.opendocument.presentation-template":{source:"iana",extensions:["otp"]},
"application/vnd.oasis.opendocument.spreadsheet":{source:"iana",compressible:!1,extensions:["ods"]},
"application/vnd.oasis.opendocument.spreadsheet-template":{source:"iana",extensions:["ots"]},
"application/vnd.oasis.opendocument.text":{source:"iana",compressible:!1,extensions:["odt"]},
"application/vnd.oasis.opendocument.text-master":{source:"iana",extensions:["odm"]},
"application/vnd.oasis.opendocument.text-template":{source:"iana",extensions:["ott"]},
"application/vnd.oasis.opendocument.text-web":{source:"iana",extensions:["oth"]},"application/vnd.obn":{source:"iana"},
"application/vnd.ocf+cbor":{source:"iana"},"application/vnd.oci.image.manifest.v1+json":{source:"iana",compressible:!0},
"application/vnd.oftn.l10n+json":{source:"iana",compressible:!0},"application/vnd.oipf.contentaccessdownload+xml":{
source:"iana",compressible:!0},"application/vnd.oipf.contentaccessstreaming+xml":{source:"iana",compressible:!0},
"application/vnd.oipf.cspg-hexbinary":{source:"iana"},"application/vnd.oipf.dae.svg+xml":{source:"iana",compressible:!0
},"application/vnd.oipf.dae.xhtml+xml":{source:"iana",compressible:!0},"application/vnd.oipf.mippvcontrolmessage+xml":{
source:"iana",compressible:!0},"application/vnd.oipf.pae.gem":{source:"iana"},"application/vnd.oipf.spdiscovery+xml":{
source:"iana",compressible:!0},"application/vnd.oipf.spdlist+xml":{source:"iana",compressible:!0},
"application/vnd.oipf.ueprofile+xml":{source:"iana",compressible:!0},"application/vnd.oipf.userprofile+xml":{
source:"iana",compressible:!0},"application/vnd.olpc-sugar":{source:"iana",extensions:["xo"]},
"application/vnd.oma-scws-config":{source:"iana"},"application/vnd.oma-scws-http-request":{source:"iana"},
"application/vnd.oma-scws-http-response":{source:"iana"},
"application/vnd.oma.bcast.associated-procedure-parameter+xml":{source:"iana",compressible:!0},
"application/vnd.oma.bcast.drm-trigger+xml":{source:"iana",compressible:!0},"application/vnd.oma.bcast.imd+xml":{
source:"iana",compressible:!0},"application/vnd.oma.bcast.ltkm":{source:"iana"},
"application/vnd.oma.bcast.notification+xml":{source:"iana",compressible:!0},
"application/vnd.oma.bcast.provisioningtrigger":{source:"iana"},"application/vnd.oma.bcast.sgboot":{source:"iana"},
"application/vnd.oma.bcast.sgdd+xml":{source:"iana",compressible:!0},"application/vnd.oma.bcast.sgdu":{source:"iana"},
"application/vnd.oma.bcast.simple-symbol-container":{source:"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{
source:"iana",compressible:!0},"application/vnd.oma.bcast.sprov+xml":{source:"iana",compressible:!0},
"application/vnd.oma.bcast.stkm":{source:"iana"},"application/vnd.oma.cab-address-book+xml":{source:"iana",
compressible:!0},"application/vnd.oma.cab-feature-handler+xml":{source:"iana",compressible:!0},
"application/vnd.oma.cab-pcc+xml":{source:"iana",compressible:!0},"application/vnd.oma.cab-subs-invite+xml":{
source:"iana",compressible:!0},"application/vnd.oma.cab-user-prefs+xml":{source:"iana",compressible:!0},
"application/vnd.oma.dcd":{source:"iana"},"application/vnd.oma.dcdc":{source:"iana"},"application/vnd.oma.dd2+xml":{
source:"iana",compressible:!0,extensions:["dd2"]},"application/vnd.oma.drm.risd+xml":{source:"iana",compressible:!0},
"application/vnd.oma.group-usage-list+xml":{source:"iana",compressible:!0},"application/vnd.oma.lwm2m+cbor":{
source:"iana"},"application/vnd.oma.lwm2m+json":{source:"iana",compressible:!0},"application/vnd.oma.lwm2m+tlv":{
source:"iana"},"application/vnd.oma.pal+xml":{source:"iana",compressible:!0},
"application/vnd.oma.poc.detailed-progress-report+xml":{source:"iana",compressible:!0},
"application/vnd.oma.poc.final-report+xml":{source:"iana",compressible:!0},"application/vnd.oma.poc.groups+xml":{
source:"iana",compressible:!0},"application/vnd.oma.poc.invocation-descriptor+xml":{source:"iana",compressible:!0},
"application/vnd.oma.poc.optimized-progress-report+xml":{source:"iana",compressible:!0},"application/vnd.oma.push":{
source:"iana"},"application/vnd.oma.scidm.messages+xml":{source:"iana",compressible:!0},
"application/vnd.oma.xcap-directory+xml":{source:"iana",compressible:!0},"application/vnd.omads-email+xml":{
source:"iana",charset:"UTF-8",compressible:!0},"application/vnd.omads-file+xml":{source:"iana",charset:"UTF-8",
compressible:!0},"application/vnd.omads-folder+xml":{source:"iana",charset:"UTF-8",compressible:!0},
"application/vnd.omaloc-supl-init":{source:"iana"},"application/vnd.onepager":{source:"iana"},
"application/vnd.onepagertamp":{source:"iana"},"application/vnd.onepagertamx":{source:"iana"},
"application/vnd.onepagertat":{source:"iana"},"application/vnd.onepagertatp":{source:"iana"},
"application/vnd.onepagertatx":{source:"iana"},"application/vnd.openblox.game+xml":{source:"iana",compressible:!0,
extensions:["obgx"]},"application/vnd.openblox.game-binary":{source:"iana"},"application/vnd.openeye.oeb":{source:"iana"
},"application/vnd.openofficeorg.extension":{source:"apache",extensions:["oxt"]},
"application/vnd.openstreetmap.data+xml":{source:"iana",compressible:!0,extensions:["osm"]},
"application/vnd.opentimestamps.ots":{source:"iana"},
"application/vnd.openxmlformats-officedocument.custom-properties+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.drawing+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.extended-properties+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.presentation":{source:"iana",compressible:!1,extensions:[
"pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.presentationml.slide":{source:"iana",extensions:["sldx"]
},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{source:"iana",extensions:["ppsx"]},
"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.template":{source:"iana",extensions:["potx"]},
"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{source:"iana",compressible:!1,extensions:["xlsx"]},
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{source:"iana",extensions:["xltx"]},
"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.theme+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.themeoverride+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.vmldrawing":{source:"iana"},
"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{source:"iana",compressible:!1,extensions:[
"docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{source:"iana",extensions:[
"dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{source:"iana",
compressible:!0},"application/vnd.openxmlformats-package.core-properties+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{source:"iana",compressible:!0},
"application/vnd.openxmlformats-package.relationships+xml":{source:"iana",compressible:!0},
"application/vnd.oracle.resource+json":{source:"iana",compressible:!0},"application/vnd.orange.indata":{source:"iana"},
"application/vnd.osa.netdeploy":{source:"iana"},"application/vnd.osgeo.mapguide.package":{source:"iana",extensions:[
"mgp"]},"application/vnd.osgi.bundle":{source:"iana"},"application/vnd.osgi.dp":{source:"iana",extensions:["dp"]},
"application/vnd.osgi.subsystem":{source:"iana",extensions:["esa"]},"application/vnd.otps.ct-kip+xml":{source:"iana",
compressible:!0},"application/vnd.oxli.countgraph":{source:"iana"},"application/vnd.pagerduty+json":{source:"iana",
compressible:!0},"application/vnd.palm":{source:"iana",extensions:["pdb","pqa","oprc"]},"application/vnd.panoply":{
source:"iana"},"application/vnd.paos.xml":{source:"iana"},"application/vnd.patentdive":{source:"iana"},
"application/vnd.patientecommsdoc":{source:"iana"},"application/vnd.pawaafile":{source:"iana",extensions:["paw"]},
"application/vnd.pcos":{source:"iana"},"application/vnd.pg.format":{source:"iana",extensions:["str"]},
"application/vnd.pg.osasli":{source:"iana",extensions:["ei6"]},"application/vnd.piaccess.application-licence":{
source:"iana"},"application/vnd.picsel":{source:"iana",extensions:["efif"]},"application/vnd.pmi.widget":{source:"iana",
extensions:["wg"]},"application/vnd.poc.group-advertisement+xml":{source:"iana",compressible:!0},
"application/vnd.pocketlearn":{source:"iana",extensions:["plf"]},"application/vnd.powerbuilder6":{source:"iana",
extensions:["pbd"]},"application/vnd.powerbuilder6-s":{source:"iana"},"application/vnd.powerbuilder7":{source:"iana"},
"application/vnd.powerbuilder7-s":{source:"iana"},"application/vnd.powerbuilder75":{source:"iana"},
"application/vnd.powerbuilder75-s":{source:"iana"},"application/vnd.preminet":{source:"iana"},
"application/vnd.previewsystems.box":{source:"iana",extensions:["box"]},"application/vnd.proteus.magazine":{
source:"iana",extensions:["mgz"]},"application/vnd.psfs":{source:"iana"},"application/vnd.publishare-delta-tree":{
source:"iana",extensions:["qps"]},"application/vnd.pvi.ptid1":{source:"iana",extensions:["ptid"]},
"application/vnd.pwg-multiplexed":{source:"iana"},"application/vnd.pwg-xhtml-print+xml":{source:"iana",compressible:!0},
"application/vnd.qualcomm.brew-app-res":{source:"iana"},"application/vnd.quarantainenet":{source:"iana"},
"application/vnd.quark.quarkxpress":{source:"iana",extensions:["qxd","qxt","qwd","qwt","qxl","qxb"]},
"application/vnd.quobject-quoxdocument":{source:"iana"},"application/vnd.radisys.moml+xml":{source:"iana",
compressible:!0},"application/vnd.radisys.msml+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-audit+xml":{source:"iana",compressible:!0},"application/vnd.radisys.msml-audit-conf+xml":{
source:"iana",compressible:!0},"application/vnd.radisys.msml-audit-conn+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-audit-dialog+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-audit-stream+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-conf+xml":{source:"iana",compressible:!0},"application/vnd.radisys.msml-dialog+xml":{
source:"iana",compressible:!0},"application/vnd.radisys.msml-dialog-base+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-dialog-fax-detect+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-dialog-group+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-dialog-speech+xml":{source:"iana",compressible:!0},
"application/vnd.radisys.msml-dialog-transform+xml":{source:"iana",compressible:!0},"application/vnd.rainstor.data":{
source:"iana"},"application/vnd.rapid":{source:"iana"},"application/vnd.rar":{source:"iana",extensions:["rar"]},
"application/vnd.realvnc.bed":{source:"iana",extensions:["bed"]},"application/vnd.recordare.musicxml":{source:"iana",
extensions:["mxl"]},"application/vnd.recordare.musicxml+xml":{source:"iana",compressible:!0,extensions:["musicxml"]},
"application/vnd.renlearn.rlprint":{source:"iana"},"application/vnd.resilient.logic":{source:"iana"},
"application/vnd.restful+json":{source:"iana",compressible:!0},"application/vnd.rig.cryptonote":{source:"iana",
extensions:["cryptonote"]},"application/vnd.rim.cod":{source:"apache",extensions:["cod"]},
"application/vnd.rn-realmedia":{source:"apache",extensions:["rm"]},"application/vnd.rn-realmedia-vbr":{source:"apache",
extensions:["rmvb"]},"application/vnd.route66.link66+xml":{source:"iana",compressible:!0,extensions:["link66"]},
"application/vnd.rs-274x":{source:"iana"},"application/vnd.ruckus.download":{source:"iana"},"application/vnd.s3sms":{
source:"iana"},"application/vnd.sailingtracker.track":{source:"iana",extensions:["st"]},"application/vnd.sar":{
source:"iana"},"application/vnd.sbm.cid":{source:"iana"},"application/vnd.sbm.mid2":{source:"iana"},
"application/vnd.scribus":{source:"iana"},"application/vnd.sealed.3df":{source:"iana"},"application/vnd.sealed.csf":{
source:"iana"},"application/vnd.sealed.doc":{source:"iana"},"application/vnd.sealed.eml":{source:"iana"},
"application/vnd.sealed.mht":{source:"iana"},"application/vnd.sealed.net":{source:"iana"},"application/vnd.sealed.ppt":{
source:"iana"},"application/vnd.sealed.tiff":{source:"iana"},"application/vnd.sealed.xls":{source:"iana"},
"application/vnd.sealedmedia.softseal.html":{source:"iana"},"application/vnd.sealedmedia.softseal.pdf":{source:"iana"},
"application/vnd.seemail":{source:"iana",extensions:["see"]},"application/vnd.seis+json":{source:"iana",compressible:!0
},"application/vnd.sema":{source:"iana",extensions:["sema"]},"application/vnd.semd":{source:"iana",extensions:["semd"]},
"application/vnd.semf":{source:"iana",extensions:["semf"]},"application/vnd.shade-save-file":{source:"iana"},
"application/vnd.shana.informed.formdata":{source:"iana",extensions:["ifm"]},
"application/vnd.shana.informed.formtemplate":{source:"iana",extensions:["itp"]},
"application/vnd.shana.informed.interchange":{source:"iana",extensions:["iif"]},
"application/vnd.shana.informed.package":{source:"iana",extensions:["ipk"]},"application/vnd.shootproof+json":{
source:"iana",compressible:!0},"application/vnd.shopkick+json":{source:"iana",compressible:!0},"application/vnd.shp":{
source:"iana"},"application/vnd.shx":{source:"iana"},"application/vnd.sigrok.session":{source:"iana"},
"application/vnd.simtech-mindmapper":{source:"iana",extensions:["twd","twds"]},"application/vnd.siren+json":{
source:"iana",compressible:!0},"application/vnd.smaf":{source:"iana",extensions:["mmf"]},
"application/vnd.smart.notebook":{source:"iana"},"application/vnd.smart.teacher":{source:"iana",extensions:["teacher"]},
"application/vnd.snesdev-page-table":{source:"iana"},"application/vnd.software602.filler.form+xml":{source:"iana",
compressible:!0,extensions:["fo"]},"application/vnd.software602.filler.form-xml-zip":{source:"iana"},
"application/vnd.solent.sdkm+xml":{source:"iana",compressible:!0,extensions:["sdkm","sdkd"]},
"application/vnd.spotfire.dxp":{source:"iana",extensions:["dxp"]},"application/vnd.spotfire.sfs":{source:"iana",
extensions:["sfs"]},"application/vnd.sqlite3":{source:"iana"},"application/vnd.sss-cod":{source:"iana"},
"application/vnd.sss-dtf":{source:"iana"},"application/vnd.sss-ntf":{source:"iana"},
"application/vnd.stardivision.calc":{source:"apache",extensions:["sdc"]},"application/vnd.stardivision.draw":{
source:"apache",extensions:["sda"]},"application/vnd.stardivision.impress":{source:"apache",extensions:["sdd"]},
"application/vnd.stardivision.math":{source:"apache",extensions:["smf"]},"application/vnd.stardivision.writer":{
source:"apache",extensions:["sdw","vor"]},"application/vnd.stardivision.writer-global":{source:"apache",extensions:[
"sgl"]},"application/vnd.stepmania.package":{source:"iana",extensions:["smzip"]},"application/vnd.stepmania.stepchart":{
source:"iana",extensions:["sm"]},"application/vnd.street-stream":{source:"iana"},"application/vnd.sun.wadl+xml":{
source:"iana",compressible:!0,extensions:["wadl"]},"application/vnd.sun.xml.calc":{source:"apache",extensions:["sxc"]},
"application/vnd.sun.xml.calc.template":{source:"apache",extensions:["stc"]},"application/vnd.sun.xml.draw":{
source:"apache",extensions:["sxd"]},"application/vnd.sun.xml.draw.template":{source:"apache",extensions:["std"]},
"application/vnd.sun.xml.impress":{source:"apache",extensions:["sxi"]},"application/vnd.sun.xml.impress.template":{
source:"apache",extensions:["sti"]},"application/vnd.sun.xml.math":{source:"apache",extensions:["sxm"]},
"application/vnd.sun.xml.writer":{source:"apache",extensions:["sxw"]},"application/vnd.sun.xml.writer.global":{
source:"apache",extensions:["sxg"]},"application/vnd.sun.xml.writer.template":{source:"apache",extensions:["stw"]},
"application/vnd.sus-calendar":{source:"iana",extensions:["sus","susp"]},"application/vnd.svd":{source:"iana",
extensions:["svd"]},"application/vnd.swiftview-ics":{source:"iana"},"application/vnd.sycle+xml":{source:"iana",
compressible:!0},"application/vnd.syft+json":{source:"iana",compressible:!0},"application/vnd.symbian.install":{
source:"apache",extensions:["sis","sisx"]},"application/vnd.syncml+xml":{source:"iana",charset:"UTF-8",compressible:!0,
extensions:["xsm"]},"application/vnd.syncml.dm+wbxml":{source:"iana",charset:"UTF-8",extensions:["bdm"]},
"application/vnd.syncml.dm+xml":{source:"iana",charset:"UTF-8",compressible:!0,extensions:["xdm"]},
"application/vnd.syncml.dm.notification":{source:"iana"},"application/vnd.syncml.dmddf+wbxml":{source:"iana"},
"application/vnd.syncml.dmddf+xml":{source:"iana",charset:"UTF-8",compressible:!0,extensions:["ddf"]},
"application/vnd.syncml.dmtnds+wbxml":{source:"iana"},"application/vnd.syncml.dmtnds+xml":{source:"iana",
charset:"UTF-8",compressible:!0},"application/vnd.syncml.ds.notification":{source:"iana"},
"application/vnd.tableschema+json":{source:"iana",compressible:!0},"application/vnd.tao.intent-module-archive":{
source:"iana",extensions:["tao"]},"application/vnd.tcpdump.pcap":{source:"iana",extensions:["pcap","cap","dmp"]},
"application/vnd.think-cell.ppttc+json":{source:"iana",compressible:!0},"application/vnd.tmd.mediaflex.api+xml":{
source:"iana",compressible:!0},"application/vnd.tml":{source:"iana"},"application/vnd.tmobile-livetv":{source:"iana",
extensions:["tmo"]},"application/vnd.tri.onesource":{source:"iana"},"application/vnd.trid.tpt":{source:"iana",
extensions:["tpt"]},"application/vnd.triscape.mxs":{source:"iana",extensions:["mxs"]},"application/vnd.trueapp":{
source:"iana",extensions:["tra"]},"application/vnd.truedoc":{source:"iana"},"application/vnd.ubisoft.webplayer":{
source:"iana"},"application/vnd.ufdl":{source:"iana",extensions:["ufd","ufdl"]},"application/vnd.uiq.theme":{
source:"iana",extensions:["utz"]},"application/vnd.umajin":{source:"iana",extensions:["umj"]},"application/vnd.unity":{
source:"iana",extensions:["unityweb"]},"application/vnd.uoml+xml":{source:"iana",compressible:!0,extensions:["uoml"]},
"application/vnd.uplanet.alert":{source:"iana"},"application/vnd.uplanet.alert-wbxml":{source:"iana"},
"application/vnd.uplanet.bearer-choice":{source:"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{source:"iana"},
"application/vnd.uplanet.cacheop":{source:"iana"},"application/vnd.uplanet.cacheop-wbxml":{source:"iana"},
"application/vnd.uplanet.channel":{source:"iana"},"application/vnd.uplanet.channel-wbxml":{source:"iana"},
"application/vnd.uplanet.list":{source:"iana"},"application/vnd.uplanet.list-wbxml":{source:"iana"},
"application/vnd.uplanet.listcmd":{source:"iana"},"application/vnd.uplanet.listcmd-wbxml":{source:"iana"},
"application/vnd.uplanet.signal":{source:"iana"},"application/vnd.uri-map":{source:"iana"},
"application/vnd.valve.source.material":{source:"iana"},"application/vnd.vcx":{source:"iana",extensions:["vcx"]},
"application/vnd.vd-study":{source:"iana"},"application/vnd.vectorworks":{source:"iana"},"application/vnd.vel+json":{
source:"iana",compressible:!0},"application/vnd.verimatrix.vcas":{source:"iana"},"application/vnd.veritone.aion+json":{
source:"iana",compressible:!0},"application/vnd.veryant.thin":{source:"iana"},"application/vnd.ves.encrypted":{
source:"iana"},"application/vnd.vidsoft.vidconference":{source:"iana"},"application/vnd.visio":{source:"iana",
extensions:["vsd","vst","vss","vsw"]},"application/vnd.visionary":{source:"iana",extensions:["vis"]},
"application/vnd.vividence.scriptfile":{source:"iana"},"application/vnd.vsf":{source:"iana",extensions:["vsf"]},
"application/vnd.wap.sic":{source:"iana"},"application/vnd.wap.slc":{source:"iana"},"application/vnd.wap.wbxml":{
source:"iana",charset:"UTF-8",extensions:["wbxml"]},"application/vnd.wap.wmlc":{source:"iana",extensions:["wmlc"]},
"application/vnd.wap.wmlscriptc":{source:"iana",extensions:["wmlsc"]},"application/vnd.webturbo":{source:"iana",
extensions:["wtb"]},"application/vnd.wfa.dpp":{source:"iana"},"application/vnd.wfa.p2p":{source:"iana"},
"application/vnd.wfa.wsc":{source:"iana"},"application/vnd.windows.devicepairing":{source:"iana"},
"application/vnd.wmc":{source:"iana"},"application/vnd.wmf.bootstrap":{source:"iana"},
"application/vnd.wolfram.mathematica":{source:"iana"},"application/vnd.wolfram.mathematica.package":{source:"iana"},
"application/vnd.wolfram.player":{source:"iana",extensions:["nbp"]},"application/vnd.wordperfect":{source:"iana",
extensions:["wpd"]},"application/vnd.wqd":{source:"iana",extensions:["wqd"]},"application/vnd.wrq-hp3000-labelled":{
source:"iana"},"application/vnd.wt.stf":{source:"iana",extensions:["stf"]},"application/vnd.wv.csp+wbxml":{source:"iana"
},"application/vnd.wv.csp+xml":{source:"iana",compressible:!0},"application/vnd.wv.ssp+xml":{source:"iana",
compressible:!0},"application/vnd.xacml+json":{source:"iana",compressible:!0},"application/vnd.xara":{source:"iana",
extensions:["xar"]},"application/vnd.xfdl":{source:"iana",extensions:["xfdl"]},"application/vnd.xfdl.webform":{
source:"iana"},"application/vnd.xmi+xml":{source:"iana",compressible:!0},"application/vnd.xmpie.cpkg":{source:"iana"},
"application/vnd.xmpie.dpkg":{source:"iana"},"application/vnd.xmpie.plan":{source:"iana"},"application/vnd.xmpie.ppkg":{
source:"iana"},"application/vnd.xmpie.xlim":{source:"iana"},"application/vnd.yamaha.hv-dic":{source:"iana",extensions:[
"hvd"]},"application/vnd.yamaha.hv-script":{source:"iana",extensions:["hvs"]},"application/vnd.yamaha.hv-voice":{
source:"iana",extensions:["hvp"]},"application/vnd.yamaha.openscoreformat":{source:"iana",extensions:["osf"]},
"application/vnd.yamaha.openscoreformat.osfpvg+xml":{source:"iana",compressible:!0,extensions:["osfpvg"]},
"application/vnd.yamaha.remote-setup":{source:"iana"},"application/vnd.yamaha.smaf-audio":{source:"iana",extensions:[
"saf"]},"application/vnd.yamaha.smaf-phrase":{source:"iana",extensions:["spf"]},"application/vnd.yamaha.through-ngn":{
source:"iana"},"application/vnd.yamaha.tunnel-udpencap":{source:"iana"},"application/vnd.yaoweme":{source:"iana"},
"application/vnd.yellowriver-custom-menu":{source:"iana",extensions:["cmp"]},"application/vnd.youtube.yt":{source:"iana"
},"application/vnd.zul":{source:"iana",extensions:["zir","zirz"]},"application/vnd.zzazz.deck+xml":{source:"iana",
compressible:!0,extensions:["zaz"]},"application/voicexml+xml":{source:"iana",compressible:!0,extensions:["vxml"]},
"application/voucher-cms+json":{source:"iana",compressible:!0},"application/vq-rtcpxr":{source:"iana"},
"application/wasm":{source:"iana",compressible:!0,extensions:["wasm"]},"application/watcherinfo+xml":{source:"iana",
compressible:!0,extensions:["wif"]},"application/webpush-options+json":{source:"iana",compressible:!0},
"application/whoispp-query":{source:"iana"},"application/whoispp-response":{source:"iana"},"application/widget":{
source:"iana",extensions:["wgt"]},"application/winhlp":{source:"apache",extensions:["hlp"]},"application/wita":{
source:"iana"},"application/wordperfect5.1":{source:"iana"},"application/wsdl+xml":{source:"iana",compressible:!0,
extensions:["wsdl"]},"application/wspolicy+xml":{source:"iana",compressible:!0,extensions:["wspolicy"]},
"application/x-7z-compressed":{source:"apache",compressible:!1,extensions:["7z"]},"application/x-abiword":{
source:"apache",extensions:["abw"]},"application/x-ace-compressed":{source:"apache",extensions:["ace"]},
"application/x-amf":{source:"apache"},"application/x-apple-diskimage":{source:"apache",extensions:["dmg"]},
"application/x-arj":{compressible:!1,extensions:["arj"]},"application/x-authorware-bin":{source:"apache",extensions:[
"aab","x32","u32","vox"]},"application/x-authorware-map":{source:"apache",extensions:["aam"]},
"application/x-authorware-seg":{source:"apache",extensions:["aas"]},"application/x-bcpio":{source:"apache",extensions:[
"bcpio"]},"application/x-bdoc":{compressible:!1,extensions:["bdoc"]},"application/x-bittorrent":{source:"apache",
extensions:["torrent"]},"application/x-blorb":{source:"apache",extensions:["blb","blorb"]},"application/x-bzip":{
source:"apache",compressible:!1,extensions:["bz"]},"application/x-bzip2":{source:"apache",compressible:!1,extensions:[
"bz2","boz"]},"application/x-cbr":{source:"apache",extensions:["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{
source:"apache",extensions:["vcd"]},"application/x-cfs-compressed":{source:"apache",extensions:["cfs"]},
"application/x-chat":{source:"apache",extensions:["chat"]},"application/x-chess-pgn":{source:"apache",extensions:["pgn"]
},"application/x-chrome-extension":{extensions:["crx"]},"application/x-cocoa":{source:"nginx",extensions:["cco"]},
"application/x-compress":{source:"apache"},"application/x-conference":{source:"apache",extensions:["nsc"]},
"application/x-cpio":{source:"apache",extensions:["cpio"]},"application/x-csh":{source:"apache",extensions:["csh"]},
"application/x-deb":{compressible:!1},"application/x-debian-package":{source:"apache",extensions:["deb","udeb"]},
"application/x-dgc-compressed":{source:"apache",extensions:["dgc"]},"application/x-director":{source:"apache",
extensions:["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{source:"apache",extensions:[
"wad"]},"application/x-dtbncx+xml":{source:"apache",compressible:!0,extensions:["ncx"]},"application/x-dtbook+xml":{
source:"apache",compressible:!0,extensions:["dtb"]},"application/x-dtbresource+xml":{source:"apache",compressible:!0,
extensions:["res"]},"application/x-dvi":{source:"apache",compressible:!1,extensions:["dvi"]},"application/x-envoy":{
source:"apache",extensions:["evy"]},"application/x-eva":{source:"apache",extensions:["eva"]},"application/x-font-bdf":{
source:"apache",extensions:["bdf"]},"application/x-font-dos":{source:"apache"},"application/x-font-framemaker":{
source:"apache"},"application/x-font-ghostscript":{source:"apache",extensions:["gsf"]},"application/x-font-libgrx":{
source:"apache"},"application/x-font-linux-psf":{source:"apache",extensions:["psf"]},"application/x-font-pcf":{
source:"apache",extensions:["pcf"]},"application/x-font-snf":{source:"apache",extensions:["snf"]},
"application/x-font-speedo":{source:"apache"},"application/x-font-sunos-news":{source:"apache"},
"application/x-font-type1":{source:"apache",extensions:["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{
source:"apache"},"application/x-freearc":{source:"apache",extensions:["arc"]},"application/x-futuresplash":{
source:"apache",extensions:["spl"]},"application/x-gca-compressed":{source:"apache",extensions:["gca"]},
"application/x-glulx":{source:"apache",extensions:["ulx"]},"application/x-gnumeric":{source:"apache",extensions:[
"gnumeric"]},"application/x-gramps-xml":{source:"apache",extensions:["gramps"]},"application/x-gtar":{source:"apache",
extensions:["gtar"]},"application/x-gzip":{source:"apache"},"application/x-hdf":{source:"apache",extensions:["hdf"]},
"application/x-httpd-php":{compressible:!0,extensions:["php"]},"application/x-install-instructions":{source:"apache",
extensions:["install"]},"application/x-iso9660-image":{source:"apache",extensions:["iso"]},
"application/x-iwork-keynote-sffkey":{extensions:["key"]},"application/x-iwork-numbers-sffnumbers":{extensions:[
"numbers"]},"application/x-iwork-pages-sffpages":{extensions:["pages"]},"application/x-java-archive-diff":{
source:"nginx",extensions:["jardiff"]},"application/x-java-jnlp-file":{source:"apache",compressible:!1,extensions:[
"jnlp"]},"application/x-javascript":{compressible:!0},"application/x-keepass2":{extensions:["kdbx"]},
"application/x-latex":{source:"apache",compressible:!1,extensions:["latex"]},"application/x-lua-bytecode":{extensions:[
"luac"]},"application/x-lzh-compressed":{source:"apache",extensions:["lzh","lha"]},"application/x-makeself":{
source:"nginx",extensions:["run"]},"application/x-mie":{source:"apache",extensions:["mie"]},
"application/x-mobipocket-ebook":{source:"apache",extensions:["prc","mobi"]},"application/x-mpegurl":{compressible:!1},
"application/x-ms-application":{source:"apache",extensions:["application"]},"application/x-ms-shortcut":{
source:"apache",extensions:["lnk"]},"application/x-ms-wmd":{source:"apache",extensions:["wmd"]},"application/x-ms-wmz":{
source:"apache",extensions:["wmz"]},"application/x-ms-xbap":{source:"apache",extensions:["xbap"]},
"application/x-msaccess":{source:"apache",extensions:["mdb"]},"application/x-msbinder":{source:"apache",extensions:[
"obd"]},"application/x-mscardfile":{source:"apache",extensions:["crd"]},"application/x-msclip":{source:"apache",
extensions:["clp"]},"application/x-msdos-program":{extensions:["exe"]},"application/x-msdownload":{source:"apache",
extensions:["exe","dll","com","bat","msi"]},"application/x-msmediaview":{source:"apache",extensions:["mvb","m13","m14"]
},"application/x-msmetafile":{source:"apache",extensions:["wmf","wmz","emf","emz"]},"application/x-msmoney":{
source:"apache",extensions:["mny"]},"application/x-mspublisher":{source:"apache",extensions:["pub"]},
"application/x-msschedule":{source:"apache",extensions:["scd"]},"application/x-msterminal":{source:"apache",extensions:[
"trm"]},"application/x-mswrite":{source:"apache",extensions:["wri"]},"application/x-netcdf":{source:"apache",
extensions:["nc","cdf"]},"application/x-ns-proxy-autoconfig":{compressible:!0,extensions:["pac"]},"application/x-nzb":{
source:"apache",extensions:["nzb"]},"application/x-perl":{source:"nginx",extensions:["pl","pm"]},"application/x-pilot":{
source:"nginx",extensions:["prc","pdb"]},"application/x-pkcs12":{source:"apache",compressible:!1,extensions:["p12","pfx"
]},"application/x-pkcs7-certificates":{source:"apache",extensions:["p7b","spc"]},"application/x-pkcs7-certreqresp":{
source:"apache",extensions:["p7r"]},"application/x-pki-message":{source:"iana"},"application/x-rar-compressed":{
source:"apache",compressible:!1,extensions:["rar"]},"application/x-redhat-package-manager":{source:"nginx",extensions:[
"rpm"]},"application/x-research-info-systems":{source:"apache",extensions:["ris"]},"application/x-sea":{source:"nginx",
extensions:["sea"]},"application/x-sh":{source:"apache",compressible:!0,extensions:["sh"]},"application/x-shar":{
source:"apache",extensions:["shar"]},"application/x-shockwave-flash":{source:"apache",compressible:!1,extensions:["swf"]
},"application/x-silverlight-app":{source:"apache",extensions:["xap"]},"application/x-sql":{source:"apache",extensions:[
"sql"]},"application/x-stuffit":{source:"apache",compressible:!1,extensions:["sit"]},"application/x-stuffitx":{
source:"apache",extensions:["sitx"]},"application/x-subrip":{source:"apache",extensions:["srt"]},
"application/x-sv4cpio":{source:"apache",extensions:["sv4cpio"]},"application/x-sv4crc":{source:"apache",extensions:[
"sv4crc"]},"application/x-t3vm-image":{source:"apache",extensions:["t3"]},"application/x-tads":{source:"apache",
extensions:["gam"]},"application/x-tar":{source:"apache",compressible:!0,extensions:["tar"]},"application/x-tcl":{
source:"apache",extensions:["tcl","tk"]},"application/x-tex":{source:"apache",extensions:["tex"]},
"application/x-tex-tfm":{source:"apache",extensions:["tfm"]},"application/x-texinfo":{source:"apache",extensions:[
"texinfo","texi"]},"application/x-tgif":{source:"apache",extensions:["obj"]},"application/x-ustar":{source:"apache",
extensions:["ustar"]},"application/x-virtualbox-hdd":{compressible:!0,extensions:["hdd"]},
"application/x-virtualbox-ova":{compressible:!0,extensions:["ova"]},"application/x-virtualbox-ovf":{compressible:!0,
extensions:["ovf"]},"application/x-virtualbox-vbox":{compressible:!0,extensions:["vbox"]},
"application/x-virtualbox-vbox-extpack":{compressible:!1,extensions:["vbox-extpack"]},"application/x-virtualbox-vdi":{
compressible:!0,extensions:["vdi"]},"application/x-virtualbox-vhd":{compressible:!0,extensions:["vhd"]},
"application/x-virtualbox-vmdk":{compressible:!0,extensions:["vmdk"]},"application/x-wais-source":{source:"apache",
extensions:["src"]},"application/x-web-app-manifest+json":{compressible:!0,extensions:["webapp"]},
"application/x-www-form-urlencoded":{source:"iana",compressible:!0},"application/x-x509-ca-cert":{source:"iana",
extensions:["der","crt","pem"]},"application/x-x509-ca-ra-cert":{source:"iana"},"application/x-x509-next-ca-cert":{
source:"iana"},"application/x-xfig":{source:"apache",extensions:["fig"]},"application/x-xliff+xml":{source:"apache",
compressible:!0,extensions:["xlf"]},"application/x-xpinstall":{source:"apache",compressible:!1,extensions:["xpi"]},
"application/x-xz":{source:"apache",extensions:["xz"]},"application/x-zmachine":{source:"apache",extensions:["z1","z2",
"z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{source:"iana"},"application/xacml+xml":{source:"iana",
compressible:!0},"application/xaml+xml":{source:"apache",compressible:!0,extensions:["xaml"]},
"application/xcap-att+xml":{source:"iana",compressible:!0,extensions:["xav"]},"application/xcap-caps+xml":{
source:"iana",compressible:!0,extensions:["xca"]},"application/xcap-diff+xml":{source:"iana",compressible:!0,
extensions:["xdf"]},"application/xcap-el+xml":{source:"iana",compressible:!0,extensions:["xel"]},
"application/xcap-error+xml":{source:"iana",compressible:!0},"application/xcap-ns+xml":{source:"iana",compressible:!0,
extensions:["xns"]},"application/xcon-conference-info+xml":{source:"iana",compressible:!0},
"application/xcon-conference-info-diff+xml":{source:"iana",compressible:!0},"application/xenc+xml":{source:"iana",
compressible:!0,extensions:["xenc"]},"application/xhtml+xml":{source:"iana",compressible:!0,extensions:["xhtml","xht"]},
"application/xhtml-voice+xml":{source:"apache",compressible:!0},"application/xliff+xml":{source:"iana",compressible:!0,
extensions:["xlf"]},"application/xml":{source:"iana",compressible:!0,extensions:["xml","xsl","xsd","rng"]},
"application/xml-dtd":{source:"iana",compressible:!0,extensions:["dtd"]},"application/xml-external-parsed-entity":{
source:"iana"},"application/xml-patch+xml":{source:"iana",compressible:!0},"application/xmpp+xml":{source:"iana",
compressible:!0},"application/xop+xml":{source:"iana",compressible:!0,extensions:["xop"]},"application/xproc+xml":{
source:"apache",compressible:!0,extensions:["xpl"]},"application/xslt+xml":{source:"iana",compressible:!0,extensions:[
"xsl","xslt"]},"application/xspf+xml":{source:"apache",compressible:!0,extensions:["xspf"]},"application/xv+xml":{
source:"iana",compressible:!0,extensions:["mxml","xhvml","xvml","xvm"]},"application/yang":{source:"iana",extensions:[
"yang"]},"application/yang-data+json":{source:"iana",compressible:!0},"application/yang-data+xml":{source:"iana",
compressible:!0},"application/yang-patch+json":{source:"iana",compressible:!0},"application/yang-patch+xml":{
source:"iana",compressible:!0},"application/yin+xml":{source:"iana",compressible:!0,extensions:["yin"]},
"application/zip":{source:"iana",compressible:!1,extensions:["zip"]},"application/zlib":{source:"iana"},
"application/zstd":{source:"iana"},"audio/1d-interleaved-parityfec":{source:"iana"},"audio/32kadpcm":{source:"iana"},
"audio/3gpp":{source:"iana",compressible:!1,extensions:["3gpp"]},"audio/3gpp2":{source:"iana"},"audio/aac":{
source:"iana"},"audio/ac3":{source:"iana"},"audio/adpcm":{source:"apache",extensions:["adp"]},"audio/amr":{
source:"iana",extensions:["amr"]},"audio/amr-wb":{source:"iana"},"audio/amr-wb+":{source:"iana"},"audio/aptx":{
source:"iana"},"audio/asc":{source:"iana"},"audio/atrac-advanced-lossless":{source:"iana"},"audio/atrac-x":{
source:"iana"},"audio/atrac3":{source:"iana"},"audio/basic":{source:"iana",compressible:!1,extensions:["au","snd"]},
"audio/bv16":{source:"iana"},"audio/bv32":{source:"iana"},"audio/clearmode":{source:"iana"},"audio/cn":{source:"iana"},
"audio/dat12":{source:"iana"},"audio/dls":{source:"iana"},"audio/dsr-es201108":{source:"iana"},"audio/dsr-es202050":{
source:"iana"},"audio/dsr-es202211":{source:"iana"},"audio/dsr-es202212":{source:"iana"},"audio/dv":{source:"iana"},
"audio/dvi4":{source:"iana"},"audio/eac3":{source:"iana"},"audio/encaprtp":{source:"iana"},"audio/evrc":{source:"iana"},
"audio/evrc-qcp":{source:"iana"},"audio/evrc0":{source:"iana"},"audio/evrc1":{source:"iana"},"audio/evrcb":{
source:"iana"},"audio/evrcb0":{source:"iana"},"audio/evrcb1":{source:"iana"},"audio/evrcnw":{source:"iana"},
"audio/evrcnw0":{source:"iana"},"audio/evrcnw1":{source:"iana"},"audio/evrcwb":{source:"iana"},"audio/evrcwb0":{
source:"iana"},"audio/evrcwb1":{source:"iana"},"audio/evs":{source:"iana"},"audio/flexfec":{source:"iana"},
"audio/fwdred":{source:"iana"},"audio/g711-0":{source:"iana"},"audio/g719":{source:"iana"},"audio/g722":{source:"iana"},
"audio/g7221":{source:"iana"},"audio/g723":{source:"iana"},"audio/g726-16":{source:"iana"},"audio/g726-24":{
source:"iana"},"audio/g726-32":{source:"iana"},"audio/g726-40":{source:"iana"},"audio/g728":{source:"iana"},
"audio/g729":{source:"iana"},"audio/g7291":{source:"iana"},"audio/g729d":{source:"iana"},"audio/g729e":{source:"iana"},
"audio/gsm":{source:"iana"},"audio/gsm-efr":{source:"iana"},"audio/gsm-hr-08":{source:"iana"},"audio/ilbc":{
source:"iana"},"audio/ip-mr_v2.5":{source:"iana"},"audio/isac":{source:"apache"},"audio/l16":{source:"iana"},
"audio/l20":{source:"iana"},"audio/l24":{source:"iana",compressible:!1},"audio/l8":{source:"iana"},"audio/lpc":{
source:"iana"},"audio/melp":{source:"iana"},"audio/melp1200":{source:"iana"},"audio/melp2400":{source:"iana"},
"audio/melp600":{source:"iana"},"audio/mhas":{source:"iana"},"audio/midi":{source:"apache",extensions:["mid","midi",
"kar","rmi"]},"audio/mobile-xmf":{source:"iana",extensions:["mxmf"]},"audio/mp3":{compressible:!1,extensions:["mp3"]},
"audio/mp4":{source:"iana",compressible:!1,extensions:["m4a","mp4a"]},"audio/mp4a-latm":{source:"iana"},"audio/mpa":{
source:"iana"},"audio/mpa-robust":{source:"iana"},"audio/mpeg":{source:"iana",compressible:!1,extensions:["mpga","mp2",
"mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{source:"iana"},"audio/musepack":{source:"apache"},"audio/ogg":{
source:"iana",compressible:!1,extensions:["oga","ogg","spx","opus"]},"audio/opus":{source:"iana"},"audio/parityfec":{
source:"iana"},"audio/pcma":{source:"iana"},"audio/pcma-wb":{source:"iana"},"audio/pcmu":{source:"iana"},
"audio/pcmu-wb":{source:"iana"},"audio/prs.sid":{source:"iana"},"audio/qcelp":{source:"iana"},"audio/raptorfec":{
source:"iana"},"audio/red":{source:"iana"},"audio/rtp-enc-aescm128":{source:"iana"},"audio/rtp-midi":{source:"iana"},
"audio/rtploopback":{source:"iana"},"audio/rtx":{source:"iana"},"audio/s3m":{source:"apache",extensions:["s3m"]},
"audio/scip":{source:"iana"},"audio/silk":{source:"apache",extensions:["sil"]},"audio/smv":{source:"iana"},
"audio/smv-qcp":{source:"iana"},"audio/smv0":{source:"iana"},"audio/sofa":{source:"iana"},"audio/sp-midi":{source:"iana"
},"audio/speex":{source:"iana"},"audio/t140c":{source:"iana"},"audio/t38":{source:"iana"},"audio/telephone-event":{
source:"iana"},"audio/tetra_acelp":{source:"iana"},"audio/tetra_acelp_bb":{source:"iana"},"audio/tone":{source:"iana"},
"audio/tsvcis":{source:"iana"},"audio/uemclip":{source:"iana"},"audio/ulpfec":{source:"iana"},"audio/usac":{
source:"iana"},"audio/vdvi":{source:"iana"},"audio/vmr-wb":{source:"iana"},"audio/vnd.3gpp.iufp":{source:"iana"},
"audio/vnd.4sb":{source:"iana"},"audio/vnd.audiokoz":{source:"iana"},"audio/vnd.celp":{source:"iana"},
"audio/vnd.cisco.nse":{source:"iana"},"audio/vnd.cmles.radio-events":{source:"iana"},"audio/vnd.cns.anp1":{source:"iana"
},"audio/vnd.cns.inf1":{source:"iana"},"audio/vnd.dece.audio":{source:"iana",extensions:["uva","uvva"]},
"audio/vnd.digital-winds":{source:"iana",extensions:["eol"]},"audio/vnd.dlna.adts":{source:"iana"},
"audio/vnd.dolby.heaac.1":{source:"iana"},"audio/vnd.dolby.heaac.2":{source:"iana"},"audio/vnd.dolby.mlp":{source:"iana"
},"audio/vnd.dolby.mps":{source:"iana"},"audio/vnd.dolby.pl2":{source:"iana"},"audio/vnd.dolby.pl2x":{source:"iana"},
"audio/vnd.dolby.pl2z":{source:"iana"},"audio/vnd.dolby.pulse.1":{source:"iana"},"audio/vnd.dra":{source:"iana",
extensions:["dra"]},"audio/vnd.dts":{source:"iana",extensions:["dts"]},"audio/vnd.dts.hd":{source:"iana",extensions:[
"dtshd"]},"audio/vnd.dts.uhd":{source:"iana"},"audio/vnd.dvb.file":{source:"iana"},"audio/vnd.everad.plj":{source:"iana"
},"audio/vnd.hns.audio":{source:"iana"},"audio/vnd.lucent.voice":{source:"iana",extensions:["lvp"]},
"audio/vnd.ms-playready.media.pya":{source:"iana",extensions:["pya"]},"audio/vnd.nokia.mobile-xmf":{source:"iana"},
"audio/vnd.nortel.vbk":{source:"iana"},"audio/vnd.nuera.ecelp4800":{source:"iana",extensions:["ecelp4800"]},
"audio/vnd.nuera.ecelp7470":{source:"iana",extensions:["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{source:"iana",
extensions:["ecelp9600"]},"audio/vnd.octel.sbc":{source:"iana"},"audio/vnd.presonus.multitrack":{source:"iana"},
"audio/vnd.qcelp":{source:"iana"},"audio/vnd.rhetorex.32kadpcm":{source:"iana"},"audio/vnd.rip":{source:"iana",
extensions:["rip"]},"audio/vnd.rn-realaudio":{compressible:!1},"audio/vnd.sealedmedia.softseal.mpeg":{source:"iana"},
"audio/vnd.vmx.cvsd":{source:"iana"},"audio/vnd.wave":{compressible:!1},"audio/vorbis":{source:"iana",compressible:!1},
"audio/vorbis-config":{source:"iana"},"audio/wav":{compressible:!1,extensions:["wav"]},"audio/wave":{compressible:!1,
extensions:["wav"]},"audio/webm":{source:"apache",compressible:!1,extensions:["weba"]},"audio/x-aac":{source:"apache",
compressible:!1,extensions:["aac"]},"audio/x-aiff":{source:"apache",extensions:["aif","aiff","aifc"]},"audio/x-caf":{
source:"apache",compressible:!1,extensions:["caf"]},"audio/x-flac":{source:"apache",extensions:["flac"]},"audio/x-m4a":{
source:"nginx",extensions:["m4a"]},"audio/x-matroska":{source:"apache",extensions:["mka"]},"audio/x-mpegurl":{
source:"apache",extensions:["m3u"]},"audio/x-ms-wax":{source:"apache",extensions:["wax"]},"audio/x-ms-wma":{
source:"apache",extensions:["wma"]},"audio/x-pn-realaudio":{source:"apache",extensions:["ram","ra"]},
"audio/x-pn-realaudio-plugin":{source:"apache",extensions:["rmp"]},"audio/x-realaudio":{source:"nginx",extensions:["ra"]
},"audio/x-tta":{source:"apache"},"audio/x-wav":{source:"apache",extensions:["wav"]},"audio/xm":{source:"apache",
extensions:["xm"]},"chemical/x-cdx":{source:"apache",extensions:["cdx"]},"chemical/x-cif":{source:"apache",extensions:[
"cif"]},"chemical/x-cmdf":{source:"apache",extensions:["cmdf"]},"chemical/x-cml":{source:"apache",extensions:["cml"]},
"chemical/x-csml":{source:"apache",extensions:["csml"]},"chemical/x-pdb":{source:"apache"},"chemical/x-xyz":{
source:"apache",extensions:["xyz"]},"font/collection":{source:"iana",extensions:["ttc"]},"font/otf":{source:"iana",
compressible:!0,extensions:["otf"]},"font/sfnt":{source:"iana"},"font/ttf":{source:"iana",compressible:!0,extensions:[
"ttf"]},"font/woff":{source:"iana",extensions:["woff"]},"font/woff2":{source:"iana",extensions:["woff2"]},"image/aces":{
source:"iana",extensions:["exr"]},"image/apng":{compressible:!1,extensions:["apng"]},"image/avci":{source:"iana",
extensions:["avci"]},"image/avcs":{source:"iana",extensions:["avcs"]},"image/avif":{source:"iana",compressible:!1,
extensions:["avif"]},"image/bmp":{source:"iana",compressible:!0,extensions:["bmp"]},"image/cgm":{source:"iana",
extensions:["cgm"]},"image/dicom-rle":{source:"iana",extensions:["drle"]},"image/emf":{source:"iana",extensions:["emf"]
},"image/fits":{source:"iana",extensions:["fits"]},"image/g3fax":{source:"iana",extensions:["g3"]},"image/gif":{
source:"iana",compressible:!1,extensions:["gif"]},"image/heic":{source:"iana",extensions:["heic"]},
"image/heic-sequence":{source:"iana",extensions:["heics"]},"image/heif":{source:"iana",extensions:["heif"]},
"image/heif-sequence":{source:"iana",extensions:["heifs"]},"image/hej2k":{source:"iana",extensions:["hej2"]},
"image/hsj2":{source:"iana",extensions:["hsj2"]},"image/ief":{source:"iana",extensions:["ief"]},"image/jls":{
source:"iana",extensions:["jls"]},"image/jp2":{source:"iana",compressible:!1,extensions:["jp2","jpg2"]},"image/jpeg":{
source:"iana",compressible:!1,extensions:["jpeg","jpg","jpe"]},"image/jph":{source:"iana",extensions:["jph"]},
"image/jphc":{source:"iana",extensions:["jhc"]},"image/jpm":{source:"iana",compressible:!1,extensions:["jpm"]},
"image/jpx":{source:"iana",compressible:!1,extensions:["jpx","jpf"]},"image/jxr":{source:"iana",extensions:["jxr"]},
"image/jxra":{source:"iana",extensions:["jxra"]},"image/jxrs":{source:"iana",extensions:["jxrs"]},"image/jxs":{
source:"iana",extensions:["jxs"]},"image/jxsc":{source:"iana",extensions:["jxsc"]},"image/jxsi":{source:"iana",
extensions:["jxsi"]},"image/jxss":{source:"iana",extensions:["jxss"]},"image/ktx":{source:"iana",extensions:["ktx"]},
"image/ktx2":{source:"iana",extensions:["ktx2"]},"image/naplps":{source:"iana"},"image/pjpeg":{compressible:!1},
"image/png":{source:"iana",compressible:!1,extensions:["png"]},"image/prs.btif":{source:"iana",extensions:["btif"]},
"image/prs.pti":{source:"iana",extensions:["pti"]},"image/pwg-raster":{source:"iana"},"image/sgi":{source:"apache",
extensions:["sgi"]},"image/svg+xml":{source:"iana",compressible:!0,extensions:["svg","svgz"]},"image/t38":{
source:"iana",extensions:["t38"]},"image/tiff":{source:"iana",compressible:!1,extensions:["tif","tiff"]},
"image/tiff-fx":{source:"iana",extensions:["tfx"]},"image/vnd.adobe.photoshop":{source:"iana",compressible:!0,
extensions:["psd"]},"image/vnd.airzip.accelerator.azv":{source:"iana",extensions:["azv"]},"image/vnd.cns.inf2":{
source:"iana"},"image/vnd.dece.graphic":{source:"iana",extensions:["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{
source:"iana",extensions:["djvu","djv"]},"image/vnd.dvb.subtitle":{source:"iana",extensions:["sub"]},"image/vnd.dwg":{
source:"iana",extensions:["dwg"]},"image/vnd.dxf":{source:"iana",extensions:["dxf"]},"image/vnd.fastbidsheet":{
source:"iana",extensions:["fbs"]},"image/vnd.fpx":{source:"iana",extensions:["fpx"]},"image/vnd.fst":{source:"iana",
extensions:["fst"]},"image/vnd.fujixerox.edmics-mmr":{source:"iana",extensions:["mmr"]},
"image/vnd.fujixerox.edmics-rlc":{source:"iana",extensions:["rlc"]},"image/vnd.globalgraphics.pgb":{source:"iana"},
"image/vnd.microsoft.icon":{source:"iana",compressible:!0,extensions:["ico"]},"image/vnd.mix":{source:"iana"},
"image/vnd.mozilla.apng":{source:"iana"},"image/vnd.ms-dds":{compressible:!0,extensions:["dds"]},"image/vnd.ms-modi":{
source:"iana",extensions:["mdi"]},"image/vnd.ms-photo":{source:"apache",extensions:["wdp"]},"image/vnd.net-fpx":{
source:"iana",extensions:["npx"]},"image/vnd.pco.b16":{source:"iana",extensions:["b16"]},"image/vnd.radiance":{
source:"iana"},"image/vnd.sealed.png":{source:"iana"},"image/vnd.sealedmedia.softseal.gif":{source:"iana"},
"image/vnd.sealedmedia.softseal.jpg":{source:"iana"},"image/vnd.svf":{source:"iana"},"image/vnd.tencent.tap":{
source:"iana",extensions:["tap"]},"image/vnd.valve.source.texture":{source:"iana",extensions:["vtf"]},
"image/vnd.wap.wbmp":{source:"iana",extensions:["wbmp"]},"image/vnd.xiff":{source:"iana",extensions:["xif"]},
"image/vnd.zbrush.pcx":{source:"iana",extensions:["pcx"]},"image/webp":{source:"apache",extensions:["webp"]},
"image/wmf":{source:"iana",extensions:["wmf"]},"image/x-3ds":{source:"apache",extensions:["3ds"]},"image/x-cmu-raster":{
source:"apache",extensions:["ras"]},"image/x-cmx":{source:"apache",extensions:["cmx"]},"image/x-freehand":{
source:"apache",extensions:["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{source:"apache",compressible:!0,extensions:[
"ico"]},"image/x-jng":{source:"nginx",extensions:["jng"]},"image/x-mrsid-image":{source:"apache",extensions:["sid"]},
"image/x-ms-bmp":{source:"nginx",compressible:!0,extensions:["bmp"]},"image/x-pcx":{source:"apache",extensions:["pcx"]},
"image/x-pict":{source:"apache",extensions:["pic","pct"]},"image/x-portable-anymap":{source:"apache",extensions:["pnm"]
},"image/x-portable-bitmap":{source:"apache",extensions:["pbm"]},"image/x-portable-graymap":{source:"apache",
extensions:["pgm"]},"image/x-portable-pixmap":{source:"apache",extensions:["ppm"]},"image/x-rgb":{source:"apache",
extensions:["rgb"]},"image/x-tga":{source:"apache",extensions:["tga"]},"image/x-xbitmap":{source:"apache",extensions:[
"xbm"]},"image/x-xcf":{compressible:!1},"image/x-xpixmap":{source:"apache",extensions:["xpm"]},"image/x-xwindowdump":{
source:"apache",extensions:["xwd"]},"message/cpim":{source:"iana"},"message/delivery-status":{source:"iana"},
"message/disposition-notification":{source:"iana",extensions:["disposition-notification"]},"message/external-body":{
source:"iana"},"message/feedback-report":{source:"iana"},"message/global":{source:"iana",extensions:["u8msg"]},
"message/global-delivery-status":{source:"iana",extensions:["u8dsn"]},"message/global-disposition-notification":{
source:"iana",extensions:["u8mdn"]},"message/global-headers":{source:"iana",extensions:["u8hdr"]},"message/http":{
source:"iana",compressible:!1},"message/imdn+xml":{source:"iana",compressible:!0},"message/news":{source:"iana"},
"message/partial":{source:"iana",compressible:!1},"message/rfc822":{source:"iana",compressible:!0,extensions:["eml",
"mime"]},"message/s-http":{source:"iana"},"message/sip":{source:"iana"},"message/sipfrag":{source:"iana"},
"message/tracking-status":{source:"iana"},"message/vnd.si.simp":{source:"iana"},"message/vnd.wfa.wsc":{source:"iana",
extensions:["wsc"]},"model/3mf":{source:"iana",extensions:["3mf"]},"model/e57":{source:"iana"},"model/gltf+json":{
source:"iana",compressible:!0,extensions:["gltf"]},"model/gltf-binary":{source:"iana",compressible:!0,extensions:["glb"]
},"model/iges":{source:"iana",compressible:!1,extensions:["igs","iges"]},"model/mesh":{source:"iana",compressible:!1,
extensions:["msh","mesh","silo"]},"model/mtl":{source:"iana",extensions:["mtl"]},"model/obj":{source:"iana",extensions:[
"obj"]},"model/step":{source:"iana"},"model/step+xml":{source:"iana",compressible:!0,extensions:["stpx"]},
"model/step+zip":{source:"iana",compressible:!1,extensions:["stpz"]},"model/step-xml+zip":{source:"iana",
compressible:!1,extensions:["stpxz"]},"model/stl":{source:"iana",extensions:["stl"]},"model/vnd.collada+xml":{
source:"iana",compressible:!0,extensions:["dae"]},"model/vnd.dwf":{source:"iana",extensions:["dwf"]},
"model/vnd.flatland.3dml":{source:"iana"},"model/vnd.gdl":{source:"iana",extensions:["gdl"]},"model/vnd.gs-gdl":{
source:"apache"},"model/vnd.gs.gdl":{source:"iana"},"model/vnd.gtw":{source:"iana",extensions:["gtw"]},
"model/vnd.moml+xml":{source:"iana",compressible:!0},"model/vnd.mts":{source:"iana",extensions:["mts"]},
"model/vnd.opengex":{source:"iana",extensions:["ogex"]},"model/vnd.parasolid.transmit.binary":{source:"iana",
extensions:["x_b"]},"model/vnd.parasolid.transmit.text":{source:"iana",extensions:["x_t"]},"model/vnd.pytha.pyox":{
source:"iana"},"model/vnd.rosette.annotated-data-model":{source:"iana"},"model/vnd.sap.vds":{source:"iana",extensions:[
"vds"]},"model/vnd.usdz+zip":{source:"iana",compressible:!1,extensions:["usdz"]},"model/vnd.valve.source.compiled-map":{
source:"iana",extensions:["bsp"]},"model/vnd.vtu":{source:"iana",extensions:["vtu"]},"model/vrml":{source:"iana",
compressible:!1,extensions:["wrl","vrml"]},"model/x3d+binary":{source:"apache",compressible:!1,extensions:["x3db",
"x3dbz"]},"model/x3d+fastinfoset":{source:"iana",extensions:["x3db"]},"model/x3d+vrml":{source:"apache",compressible:!1,
extensions:["x3dv","x3dvz"]},"model/x3d+xml":{source:"iana",compressible:!0,extensions:["x3d","x3dz"]},
"model/x3d-vrml":{source:"iana",extensions:["x3dv"]},"multipart/alternative":{source:"iana",compressible:!1},
"multipart/appledouble":{source:"iana"},"multipart/byteranges":{source:"iana"},"multipart/digest":{source:"iana"},
"multipart/encrypted":{source:"iana",compressible:!1},"multipart/form-data":{source:"iana",compressible:!1},
"multipart/header-set":{source:"iana"},"multipart/mixed":{source:"iana"},"multipart/multilingual":{source:"iana"},
"multipart/parallel":{source:"iana"},"multipart/related":{source:"iana",compressible:!1},"multipart/report":{
source:"iana"},"multipart/signed":{source:"iana",compressible:!1},"multipart/vnd.bint.med-plus":{source:"iana"},
"multipart/voice-message":{source:"iana"},"multipart/x-mixed-replace":{source:"iana"},"text/1d-interleaved-parityfec":{
source:"iana"},"text/cache-manifest":{source:"iana",compressible:!0,extensions:["appcache","manifest"]},
"text/calendar":{source:"iana",extensions:["ics","ifb"]},"text/calender":{compressible:!0},"text/cmd":{compressible:!0},
"text/coffeescript":{extensions:["coffee","litcoffee"]},"text/cql":{source:"iana"},"text/cql-expression":{source:"iana"
},"text/cql-identifier":{source:"iana"},"text/css":{source:"iana",charset:"UTF-8",compressible:!0,extensions:["css"]},
"text/csv":{source:"iana",compressible:!0,extensions:["csv"]},"text/csv-schema":{source:"iana"},"text/directory":{
source:"iana"},"text/dns":{source:"iana"},"text/ecmascript":{source:"iana"},"text/encaprtp":{source:"iana"},
"text/enriched":{source:"iana"},"text/fhirpath":{source:"iana"},"text/flexfec":{source:"iana"},"text/fwdred":{
source:"iana"},"text/gff3":{source:"iana"},"text/grammar-ref-list":{source:"iana"},"text/html":{source:"iana",
compressible:!0,extensions:["html","htm","shtml"]},"text/jade":{extensions:["jade"]},"text/javascript":{source:"iana",
compressible:!0},"text/jcr-cnd":{source:"iana"},"text/jsx":{compressible:!0,extensions:["jsx"]},"text/less":{
compressible:!0,extensions:["less"]},"text/markdown":{source:"iana",compressible:!0,extensions:["markdown","md"]},
"text/mathml":{source:"nginx",extensions:["mml"]},"text/mdx":{compressible:!0,extensions:["mdx"]},"text/mizar":{
source:"iana"},"text/n3":{source:"iana",charset:"UTF-8",compressible:!0,extensions:["n3"]},"text/parameters":{
source:"iana",charset:"UTF-8"},"text/parityfec":{source:"iana"},"text/plain":{source:"iana",compressible:!0,extensions:[
"txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{source:"iana",charset:"UTF-8"},
"text/prs.fallenstein.rst":{source:"iana"},"text/prs.lines.tag":{source:"iana",extensions:["dsc"]},
"text/prs.prop.logic":{source:"iana"},"text/raptorfec":{source:"iana"},"text/red":{source:"iana"},
"text/rfc822-headers":{source:"iana"},"text/richtext":{source:"iana",compressible:!0,extensions:["rtx"]},"text/rtf":{
source:"iana",compressible:!0,extensions:["rtf"]},"text/rtp-enc-aescm128":{source:"iana"},"text/rtploopback":{
source:"iana"},"text/rtx":{source:"iana"},"text/sgml":{source:"iana",extensions:["sgml","sgm"]},"text/shaclc":{
source:"iana"},"text/shex":{source:"iana",extensions:["shex"]},"text/slim":{extensions:["slim","slm"]},"text/spdx":{
source:"iana",extensions:["spdx"]},"text/strings":{source:"iana"},"text/stylus":{extensions:["stylus","styl"]},
"text/t140":{source:"iana"},"text/tab-separated-values":{source:"iana",compressible:!0,extensions:["tsv"]},
"text/troff":{source:"iana",extensions:["t","tr","roff","man","me","ms"]},"text/turtle":{source:"iana",charset:"UTF-8",
extensions:["ttl"]},"text/ulpfec":{source:"iana"},"text/uri-list":{source:"iana",compressible:!0,extensions:["uri",
"uris","urls"]},"text/vcard":{source:"iana",compressible:!0,extensions:["vcard"]},"text/vnd.a":{source:"iana"},
"text/vnd.abc":{source:"iana"},"text/vnd.ascii-art":{source:"iana"},"text/vnd.curl":{source:"iana",extensions:["curl"]},
"text/vnd.curl.dcurl":{source:"apache",extensions:["dcurl"]},"text/vnd.curl.mcurl":{source:"apache",extensions:["mcurl"]
},"text/vnd.curl.scurl":{source:"apache",extensions:["scurl"]},"text/vnd.debian.copyright":{source:"iana",
charset:"UTF-8"},"text/vnd.dmclientscript":{source:"iana"},"text/vnd.dvb.subtitle":{source:"iana",extensions:["sub"]},
"text/vnd.esmertec.theme-descriptor":{source:"iana",charset:"UTF-8"},"text/vnd.familysearch.gedcom":{source:"iana",
extensions:["ged"]},"text/vnd.ficlab.flt":{source:"iana"},"text/vnd.fly":{source:"iana",extensions:["fly"]},
"text/vnd.fmi.flexstor":{source:"iana",extensions:["flx"]},"text/vnd.gml":{source:"iana"},"text/vnd.graphviz":{
source:"iana",extensions:["gv"]},"text/vnd.hans":{source:"iana"},"text/vnd.hgl":{source:"iana"},"text/vnd.in3d.3dml":{
source:"iana",extensions:["3dml"]},"text/vnd.in3d.spot":{source:"iana",extensions:["spot"]},"text/vnd.iptc.newsml":{
source:"iana"},"text/vnd.iptc.nitf":{source:"iana"},"text/vnd.latex-z":{source:"iana"},"text/vnd.motorola.reflex":{
source:"iana"},"text/vnd.ms-mediapackage":{source:"iana"},"text/vnd.net2phone.commcenter.command":{source:"iana"},
"text/vnd.radisys.msml-basic-layout":{source:"iana"},"text/vnd.senx.warpscript":{source:"iana"},
"text/vnd.si.uricatalogue":{source:"iana"},"text/vnd.sosi":{source:"iana"},"text/vnd.sun.j2me.app-descriptor":{
source:"iana",charset:"UTF-8",extensions:["jad"]},"text/vnd.trolltech.linguist":{source:"iana",charset:"UTF-8"},
"text/vnd.wap.si":{source:"iana"},"text/vnd.wap.sl":{source:"iana"},"text/vnd.wap.wml":{source:"iana",extensions:["wml"]
},"text/vnd.wap.wmlscript":{source:"iana",extensions:["wmls"]},"text/vtt":{source:"iana",charset:"UTF-8",
compressible:!0,extensions:["vtt"]},"text/x-asm":{source:"apache",extensions:["s","asm"]},"text/x-c":{source:"apache",
extensions:["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{source:"nginx",extensions:["htc"]},
"text/x-fortran":{source:"apache",extensions:["f","for","f77","f90"]},"text/x-gwt-rpc":{compressible:!0},
"text/x-handlebars-template":{extensions:["hbs"]},"text/x-java-source":{source:"apache",extensions:["java"]},
"text/x-jquery-tmpl":{compressible:!0},"text/x-lua":{extensions:["lua"]},"text/x-markdown":{compressible:!0,extensions:[
"mkd"]},"text/x-nfo":{source:"apache",extensions:["nfo"]},"text/x-opml":{source:"apache",extensions:["opml"]},
"text/x-org":{compressible:!0,extensions:["org"]},"text/x-pascal":{source:"apache",extensions:["p","pas"]},
"text/x-processing":{compressible:!0,extensions:["pde"]},"text/x-sass":{extensions:["sass"]},"text/x-scss":{extensions:[
"scss"]},"text/x-setext":{source:"apache",extensions:["etx"]},"text/x-sfv":{source:"apache",extensions:["sfv"]},
"text/x-suse-ymp":{compressible:!0,extensions:["ymp"]},"text/x-uuencode":{source:"apache",extensions:["uu"]},
"text/x-vcalendar":{source:"apache",extensions:["vcs"]},"text/x-vcard":{source:"apache",extensions:["vcf"]},"text/xml":{
source:"iana",compressible:!0,extensions:["xml"]},"text/xml-external-parsed-entity":{source:"iana"},"text/yaml":{
compressible:!0,extensions:["yaml","yml"]},"video/1d-interleaved-parityfec":{source:"iana"},"video/3gpp":{source:"iana",
extensions:["3gp","3gpp"]},"video/3gpp-tt":{source:"iana"},"video/3gpp2":{source:"iana",extensions:["3g2"]},
"video/av1":{source:"iana"},"video/bmpeg":{source:"iana"},"video/bt656":{source:"iana"},"video/celb":{source:"iana"},
"video/dv":{source:"iana"},"video/encaprtp":{source:"iana"},"video/ffv1":{source:"iana"},"video/flexfec":{source:"iana"
},"video/h261":{source:"iana",extensions:["h261"]},"video/h263":{source:"iana",extensions:["h263"]},"video/h263-1998":{
source:"iana"},"video/h263-2000":{source:"iana"},"video/h264":{source:"iana",extensions:["h264"]},"video/h264-rcdo":{
source:"iana"},"video/h264-svc":{source:"iana"},"video/h265":{source:"iana"},"video/iso.segment":{source:"iana",
extensions:["m4s"]},"video/jpeg":{source:"iana",extensions:["jpgv"]},"video/jpeg2000":{source:"iana"},"video/jpm":{
source:"apache",extensions:["jpm","jpgm"]},"video/jxsv":{source:"iana"},"video/mj2":{source:"iana",extensions:["mj2",
"mjp2"]},"video/mp1s":{source:"iana"},"video/mp2p":{source:"iana"},"video/mp2t":{source:"iana",extensions:["ts"]},
"video/mp4":{source:"iana",compressible:!1,extensions:["mp4","mp4v","mpg4"]},"video/mp4v-es":{source:"iana"},
"video/mpeg":{source:"iana",compressible:!1,extensions:["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{
source:"iana"},"video/mpv":{source:"iana"},"video/nv":{source:"iana"},"video/ogg":{source:"iana",compressible:!1,
extensions:["ogv"]},"video/parityfec":{source:"iana"},"video/pointer":{source:"iana"},"video/quicktime":{source:"iana",
compressible:!1,extensions:["qt","mov"]},"video/raptorfec":{source:"iana"},"video/raw":{source:"iana"},
"video/rtp-enc-aescm128":{source:"iana"},"video/rtploopback":{source:"iana"},"video/rtx":{source:"iana"},"video/scip":{
source:"iana"},"video/smpte291":{source:"iana"},"video/smpte292m":{source:"iana"},"video/ulpfec":{source:"iana"},
"video/vc1":{source:"iana"},"video/vc2":{source:"iana"},"video/vnd.cctv":{source:"iana"},"video/vnd.dece.hd":{
source:"iana",extensions:["uvh","uvvh"]},"video/vnd.dece.mobile":{source:"iana",extensions:["uvm","uvvm"]},
"video/vnd.dece.mp4":{source:"iana"},"video/vnd.dece.pd":{source:"iana",extensions:["uvp","uvvp"]},"video/vnd.dece.sd":{
source:"iana",extensions:["uvs","uvvs"]},"video/vnd.dece.video":{source:"iana",extensions:["uvv","uvvv"]},
"video/vnd.directv.mpeg":{source:"iana"},"video/vnd.directv.mpeg-tts":{source:"iana"},"video/vnd.dlna.mpeg-tts":{
source:"iana"},"video/vnd.dvb.file":{source:"iana",extensions:["dvb"]},"video/vnd.fvt":{source:"iana",extensions:["fvt"]
},"video/vnd.hns.video":{source:"iana"},"video/vnd.iptvforum.1dparityfec-1010":{source:"iana"},
"video/vnd.iptvforum.1dparityfec-2005":{source:"iana"},"video/vnd.iptvforum.2dparityfec-1010":{source:"iana"},
"video/vnd.iptvforum.2dparityfec-2005":{source:"iana"},"video/vnd.iptvforum.ttsavc":{source:"iana"},
"video/vnd.iptvforum.ttsmpeg2":{source:"iana"},"video/vnd.motorola.video":{source:"iana"},"video/vnd.motorola.videop":{
source:"iana"},"video/vnd.mpegurl":{source:"iana",extensions:["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{
source:"iana",extensions:["pyv"]},"video/vnd.nokia.interleaved-multimedia":{source:"iana"},"video/vnd.nokia.mp4vr":{
source:"iana"},"video/vnd.nokia.videovoip":{source:"iana"},"video/vnd.objectvideo":{source:"iana"},
"video/vnd.radgamettools.bink":{source:"iana"},"video/vnd.radgamettools.smacker":{source:"iana"},
"video/vnd.sealed.mpeg1":{source:"iana"},"video/vnd.sealed.mpeg4":{source:"iana"},"video/vnd.sealed.swf":{source:"iana"
},"video/vnd.sealedmedia.softseal.mov":{source:"iana"},"video/vnd.uvvu.mp4":{source:"iana",extensions:["uvu","uvvu"]},
"video/vnd.vivo":{source:"iana",extensions:["viv"]},"video/vnd.youtube.yt":{source:"iana"},"video/vp8":{source:"iana"},
"video/vp9":{source:"iana"},"video/webm":{source:"apache",compressible:!1,extensions:["webm"]},"video/x-f4v":{
source:"apache",extensions:["f4v"]},"video/x-fli":{source:"apache",extensions:["fli"]},"video/x-flv":{source:"apache",
compressible:!1,extensions:["flv"]},"video/x-m4v":{source:"apache",extensions:["m4v"]},"video/x-matroska":{
source:"apache",compressible:!1,extensions:["mkv","mk3d","mks"]},"video/x-mng":{source:"apache",extensions:["mng"]},
"video/x-ms-asf":{source:"apache",extensions:["asf","asx"]},"video/x-ms-vob":{source:"apache",extensions:["vob"]},
"video/x-ms-wm":{source:"apache",extensions:["wm"]},"video/x-ms-wmv":{source:"apache",compressible:!1,extensions:["wmv"]
},"video/x-ms-wmx":{source:"apache",extensions:["wmx"]},"video/x-ms-wvx":{source:"apache",extensions:["wvx"]},
"video/x-msvideo":{source:"apache",extensions:["avi"]},"video/x-sgi-movie":{source:"apache",extensions:["movie"]},
"video/x-smv":{source:"apache",extensions:["smv"]},"x-conference/x-cooltalk":{source:"apache",extensions:["ice"]},
"x-shader/x-fragment":{compressible:!0},"x-shader/x-vertex":{compressible:!0}},Ic={exports:{}},kc=Lr=Cr,Lc=Ar,qc=kr=Fe,
Fc=qr,Mc={"Content-Type":"application/x-www-form-urlencoded"},Uc={transitional:Ul,adapter:(
"undefined"!=typeof XMLHttpRequest?(Qr||(Qr=1,Hu=Cr,Gu=Me(),Ur||(Ur=1,Yr=(td=Cr).isStandardBrowserEnv()?{write:function(
e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),td.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),
td.isString(i)&&s.push("path="+i),td.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join(
"; ")},read:function(e){return(e=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)")))?decodeURIComponent(e[3]
):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},
remove:function(){}}),$u=Yr,Ju=r,Wu=d,Vr||(Vr=1,nd=Cr,id=["age","authorization","content-length","content-type","etag",
"expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards",
"proxy-authorization","referer","retry-after","user-agent"],$l=function(e){var t,n,i={};return e&&nd.forEach(e.split(
"\n"),function(e){n=e.indexOf(":"),t=nd.trim(e.substr(0,n)).toLowerCase(),n=nd.trim(e.substr(n+1)),!t||i[t
]&&0<=id.indexOf(t)||(i[t]="set-cookie"===t?(i[t]||[]).concat([n]):i[t]?i[t]+", "+n:n)}),i}),Ku=$l,Gr||(Gr=1,Hr=(od=Cr
).isStandardBrowserEnv()?(ad=/(msie|trident)/i.test(navigator.userAgent),sd=document.createElement("a"),rd=Pt(
window.location.href),function(e){return(e=od.isString(e)?Pt(e):e).protocol===rd.protocol&&e.host===rd.host}):function(
){return!0}),Yu=Hr,Qu=Ul,Xu=kr,Zu=Ue(),Kr||(Kr=1,Wr=function(e){return(e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e))&&e[1]||""}
),ed=Wr,Yr=function(u){return new Promise(function(t,n){function i(){u.cancelToken&&u.cancelToken.unsubscribe(o),
u.signal&&u.signal.removeEventListener("abort",o)}function e(){var e;a&&(e="getAllResponseHeaders"in a?Ku(
a.getAllResponseHeaders()):null,e={data:l&&"text"!==l&&"json"!==l?a.response:a.responseText,status:a.status,
statusText:a.statusText,headers:e,config:u,request:a},Gu(function(e){t(e),i()},function(e){n(e),i()},e),a=null)}var o,a,
s,r,c=u.data,p=u.headers,l=u.responseType;Hu.isFormData(c)&&Hu.isStandardBrowserEnv()&&delete p["Content-Type"],
a=new XMLHttpRequest,u.auth&&(s=u.auth.username||"",r=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"",
p.Authorization="Basic "+btoa(s+":"+r)),s=Wu(u.baseURL,u.url),a.open(u.method.toUpperCase(),Ju(s,u.params,
u.paramsSerializer),!0),a.timeout=u.timeout,"onloadend"in a?a.onloadend=e:a.onreadystatechange=function(){
a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(e)},
a.onabort=function(){a&&(n(new Xu("Request aborted",Xu.ECONNABORTED,u,a)),a=null)},a.onerror=function(){n(new Xu(
"Network Error",Xu.ERR_NETWORK,u,a,a)),a=null},a.ontimeout=function(){
var e=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",t=u.transitional||Qu;u.timeoutErrorMessage&&(
e=u.timeoutErrorMessage),n(new Xu(e,t.clarifyTimeoutError?Xu.ETIMEDOUT:Xu.ECONNABORTED,u,a)),a=null},
Hu.isStandardBrowserEnv()&&(r=(u.withCredentials||Yu(s))&&u.xsrfCookieName?$u.read(u.xsrfCookieName):void 0)&&(p[
u.xsrfHeaderName]=r),"setRequestHeader"in a&&Hu.forEach(p,function(e,t){void 0===c&&"content-type"===t.toLowerCase(
)?delete p[t]:a.setRequestHeader(t,e)}),Hu.isUndefined(u.withCredentials)||(a.withCredentials=!!u.withCredentials),
l&&"json"!==l&&(a.responseType=u.responseType),"function"==typeof u.onDownloadProgress&&a.addEventListener("progress",
u.onDownloadProgress),"function"==typeof u.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",
u.onUploadProgress),(u.cancelToken||u.signal)&&(o=function(e){a&&(n(!e||e.type?new Zu:e),a.abort(),a=null)},
u.cancelToken&&u.cancelToken.subscribe(o),u.signal&&(u.signal.aborted?o():u.signal.addEventListener("abort",o))),
c=c||null,(r=ed(s))&&-1===["http","https","file"].indexOf(r)?n(new Xu("Unsupported protocol "+r+":",Xu.ERR_BAD_REQUEST,u
)):a.send(c)})}),$l=Yr):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(
bc||(bc=1,Pu=Cr,ju=Me(),Au=d,Du=r,Iu=Ed.default,Su=Td.default,ku=ze().http,Lu=ze().https,qu=wd.default,Fu=ud.default,
Mu=Ve().version,Uu=Ul,y=kr,Bu=Ue(),zu=/https:?/,Vu=["http:","https:","file:"],gc=function(b){return new Promise(
function(t,n){function i(){b.cancelToken&&b.cancelToken.unsubscribe(e),b.signal&&b.signal.removeEventListener("abort",e)
}function s(e){i(),t(e)}var e,o,a,r,c,p,l,u,d,m,h=!1,f=function(e){i(),h=!0,n(e)},v=b.data,x=b.headers,g={};if(
Object.keys(x).forEach(function(e){g[e.toLowerCase()]=e}),"user-agent"in g?x[g["user-agent"]]||delete x[g["user-agent"]
]:x["User-Agent"]="axios/"+Mu,Pu.isFormData(v)&&Pu.isFunction(v.getHeaders))Object.assign(x,v.getHeaders());else if(
v&&!Pu.isStream(v)){if(!Buffer.isBuffer(v))if(Pu.isArrayBuffer(v))v=Buffer.from(new Uint8Array(v));else{if(!Pu.isString(
v))return f(new y("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",y.ERR_BAD_REQUEST,
b));v=Buffer.from(v,"utf-8")}if(-1<b.maxBodyLength&&v.length>b.maxBodyLength)return f(new y(
"Request body larger than maxBodyLength limit",y.ERR_BAD_REQUEST,b));g["content-length"]||(x["Content-Length"]=v.length)
}if(u=void 0,b.auth&&(u=(b.auth.username||"")+":"+(b.auth.password||"")),a=Au(b.baseURL,b.url),a=(o=qu.parse(a)
).protocol||Vu[0],-1===Vu.indexOf(a))return f(new y("Unsupported protocol "+a,y.ERR_BAD_REQUEST,b));(u=!u&&o.auth?((
r=o.auth.split(":"))[0]||"")+":"+(r[1]||""):u)&&g.authorization&&delete x[g.authorization],l=(r=zu.test(a)
)?b.httpsAgent:b.httpAgent;try{Du(o.path,b.params,b.paramsSerializer).replace(/^\?/,"")}catch(e){(c=new Error(e.message)
).config=b,c.url=b.url,c.exists=!0,f(c)}if(c={path:Du(o.path,b.params,b.paramsSerializer).replace(/^\?/,""),
method:b.method.toUpperCase(),headers:x,agent:l,agents:{http:b.httpAgent,https:b.httpsAgent},auth:u},
b.socketPath?c.socketPath=b.socketPath:(c.hostname=o.hostname,c.port=o.port),(x=b.proxy)||!1===x||(l=a.slice(0,-1
)+"_proxy",(u=process.env[l]||process.env[l.toUpperCase()])&&(l=qu.parse(u),u=!0,(u=(
p=process.env.no_proxy||process.env.NO_PROXY)?!p.split(",").map(function(e){return e.trim()}).some(function(e){
return!!e&&("*"===e||"."===e[0]&&o.hostname.substr(o.hostname.length-e.length)===e||o.hostname===e)}):u)&&(x={
host:l.hostname,port:l.port,protocol:l.protocol},l.auth&&(p=l.auth.split(":"),x.auth={username:p[0],password:p[1]})))),
x&&(c.headers.host=o.hostname+(o.port?":"+o.port:""),function t(e,n,i){e.hostname=n.host,e.host=n.host,e.port=n.port,
e.path=i,n.auth&&(i=Buffer.from(n.auth.username+":"+n.auth.password,"utf8").toString("base64"),e.headers[
"Proxy-Authorization"]="Basic "+i),e.beforeRedirect=function(e){e.headers.host=e.host,t(e,n,e.href)}}(c,x,
a+"//"+o.hostname+(o.port?":"+o.port:"")+c.path)),u=r&&(!x||zu.test(x.protocol)),l=b.transport||(
0===b.maxRedirects?u?Su:Iu:(b.maxRedirects&&(c.maxRedirects=b.maxRedirects),b.beforeRedirect&&(
c.beforeRedirect=b.beforeRedirect),u?Lu:ku)),-1<b.maxBodyLength&&(c.maxBodyLength=b.maxBodyLength),
b.insecureHTTPParser&&(c.insecureHTTPParser=b.insecureHTTPParser),(d=l.request(c,function(e){var t,n,i,o,a;if(!d.aborted
){if(n=(t=e).req||d,204!==e.statusCode&&"HEAD"!==n.method&&!1!==b.decompress)switch(e.headers["content-encoding"]){
case"gzip":case"compress":case"deflate":t=t.pipe(Fu.createUnzip()),delete e.headers["content-encoding"]}i={
status:e.statusCode,statusText:e.statusMessage,headers:e.headers,config:b,request:n},"stream"===b.responseType?(i.data=t
,ju(s,f,i)):(o=[],a=0,t.on("data",function(e){o.push(e),a+=e.length,-1<b.maxContentLength&&a>b.maxContentLength&&(h=!0,
t.destroy(),f(new y("maxContentLength size of "+b.maxContentLength+" exceeded",y.ERR_BAD_RESPONSE,b,n)))}),t.on(
"aborted",function(){h||(t.destroy(),f(new y("maxContentLength size of "+b.maxContentLength+" exceeded",
y.ERR_BAD_RESPONSE,b,n)))}),t.on("error",function(e){d.aborted||f(y.from(e,null,b,n))}),t.on("end",function(){try{
var e=1===o.length?o[0]:Buffer.concat(o);"arraybuffer"!==b.responseType&&(e=e.toString(b.responseEncoding),
b.responseEncoding&&"utf8"!==b.responseEncoding||(e=Pu.stripBOM(e))),i.data=e}catch(e){f(y.from(e,null,b,i.request,i))}
ju(s,f,i)}))}})).on("error",function(e){f(y.from(e,null,b,d))}),d.on("socket",function(e){e.setKeepAlive(!0,6e4)}),
b.timeout){if(m=parseInt(b.timeout,10),isNaN(m))return void f(new y("error trying to parse `config.timeout` to int",
y.ERR_BAD_OPTION_VALUE,b,d));d.setTimeout(m,function(){d.abort();var e=b.transitional||Uu;f(new y(
"timeout of "+m+"ms exceeded",e.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,b,d))})}(b.cancelToken||b.signal)&&(
e=function(e){d.aborted||(d.abort(),f(!e||e.type?new Bu:e))},b.cancelToken&&b.cancelToken.subscribe(e),b.signal&&(
b.signal.aborted?e():b.signal.addEventListener("abort",e))),Pu.isStream(v)?v.on("error",function(e){f(y.from(e,b,null,d)
)}).pipe(d):d.end(v)})}),$l=gc),$l),transformRequest:[function(e,t){var n,i,o,a;if(Lc(t,"Accept"),Lc(t,"Content-Type"),
!(kc.isFormData(e)||kc.isArrayBuffer(e)||kc.isBuffer(e)||kc.isStream(e)||kc.isFile(e)||kc.isBlob(e))){if(
kc.isArrayBufferView(e))return e.buffer;if(kc.isURLSearchParams(e))return Ye(t,
"application/x-www-form-urlencoded;charset=utf-8"),e.toString();if(n=kc.isObject(e),i=t&&t["Content-Type"],(
a=kc.isFileList(e))||n&&"multipart/form-data"===i)return o=this.env&&this.env.FormData,Fc(a?{"files[]":e}:e,o&&new o);
if(n||"application/json"===i){if(Ye(t,"application/json"),kc.isString(a=e))try{return(0,JSON.parse)(a),kc.trim(a)}catch(
e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(a)}}return e}],transformResponse:[function(e){var t=(
n=this.transitional||Uc.transitional)&&n.silentJSONParsing,n=n&&n.forcedJSONParsing;if((t=!t&&"json"===this.responseType
)||n&&kc.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(t){if("SyntaxError"===e.name)throw qc.from(e,
qc.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:(C.exports=(N=Nd.default,
Ru=Od.default.Stream,Nu=Od.default.Stream,Nd.default.inherits(T=Nt,Nu),Nt.create=function(e,t){var n,i,o=new this;for(
n in t=t||{})o[n]=t[n];return o.source=e,i=e.emit,e.emit=function(){return o._handleEmit(arguments),i.apply(e,arguments)
},e.on("error",function(){}),o.pauseStream&&e.pause(),o},Object.defineProperty(Nt.prototype,"readable",{configurable:!0,
enumerable:!0,get:function(){return this.source.readable}}),Nt.prototype.setEncoding=function(){
return this.source.setEncoding.apply(this.source,arguments)},Nt.prototype.resume=function(){
this._released||this.release(),this.source.resume()},Nt.prototype.pause=function(){this.source.pause()},
Nt.prototype.release=function(){this._released=!0,this._bufferedEvents.forEach(function(e){this.emit.apply(this,e)
}.bind(this)),this._bufferedEvents=[]},Nt.prototype.pipe=function(){var e=Nu.prototype.pipe.apply(this,arguments);
return this.resume(),e},Nt.prototype._handleEmit=function(e){this._released?this.emit.apply(this,e):("data"===e[0]&&(
this.dataSize+=e[1].length,this._checkIfMaxDataSizeExceeded()),this._bufferedEvents.push(e))},
Nt.prototype._checkIfMaxDataSizeExceeded=function(){var e;this._maxDataSizeExceeded||this.dataSize<=this.maxDataSize||(
this._maxDataSizeExceeded=!0,e="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.",this.emit("error",
new Error(e)))},Cu=T,N.inherits(vd=n,Ru),n.create=function(e){var t,n=new this;for(t in e=e||{})n[t]=e[t];return n},
n.isStreamLike=function(e){
return"function"!=typeof e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e&&!Buffer.isBuffer(e)},
n.prototype.append=function(e){var t;return n.isStreamLike(e)&&(e instanceof Cu||(t=Cu.create(e,{maxDataSize:1/0,
pauseStream:this.pauseStreams}),e.on("data",this._checkDataSize.bind(this)),e=t),this._handleErrors(e),
this.pauseStreams&&e.pause()),this._streams.push(e),this},n.prototype.pipe=function(e,t){return Ru.prototype.pipe.call(
this,e,t),this.resume(),e},n.prototype._getNext=function(){if(this._currentStream=null,this._insideLoop
)this._pendingNext=!0;else{this._insideLoop=!0;try{for(;this._pendingNext=!1,this._realGetNext(),this._pendingNext;);
}finally{this._insideLoop=!1}}},n.prototype._realGetNext=function(){var e=this._streams.shift();void 0===e?this.end(
):"function"!=typeof e?this._pipeNext(e):e(function(e){n.isStreamLike(e)&&(e.on("data",this._checkDataSize.bind(this)),
this._handleErrors(e)),this._pipeNext(e)}.bind(this))},n.prototype._pipeNext=function(e){this._currentStream=e,
n.isStreamLike(e)?(e.on("end",this._getNext.bind(this)),e.pipe(this,{end:!1})):(this.write(e),this._getNext())},
n.prototype._handleErrors=function(e){var t=this;e.on("error",function(e){t._emitError(e)})},n.prototype.write=function(
e){this.emit("data",e)},n.prototype.pause=function(){this.pauseStreams&&(
this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.pause&&this._currentStream.pause(),
this.emit("pause"))},n.prototype.resume=function(){this._released||(this._released=!0,this.writable=!0,this._getNext()),
this.pauseStreams&&this._currentStream&&"function"==typeof this._currentStream.resume&&this._currentStream.resume(),
this.emit("resume")},n.prototype.end=function(){this._reset(),this.emit("end")},n.prototype.destroy=function(){
this._reset(),this.emit("close")},n.prototype._reset=function(){this.writable=!1,this._streams=[],
this._currentStream=null},n.prototype._checkDataSize=function(){var e;this._updateDataSize(),
this.dataSize<=this.maxDataSize||(e="DelayedStream#maxDataSize of "+this.maxDataSize+" bytes exceeded.",this._emitError(
new Error(e)))},n.prototype._updateDataSize=function(){this.dataSize=0;var t=this;this._streams.forEach(function(e){
e.dataSize&&(t.dataSize+=e.dataSize)}),this._currentStream&&this._currentStream.dataSize&&(
this.dataSize+=this._currentStream.dataSize)},n.prototype._emitError=function(e){this._reset(),this.emit("error",e)},
iu=vd,ou=Nd.default,au=yd.default,su=Ed.default,ru=Td.default,cu=wd.default.parse,pu=bd.default,lu=Od.default.Stream,
gu=Bl,w.exports=yc,_u=w.exports,Eu=yd.default.extname,Tu=/^\s*([^;\s]*)(?:;|\s|$)/,Ou=/^text\//i,gu.charset=Ct,
gu.charsets={lookup:Ct},gu.contentType=function(e){var t;return!(!e||"string"!=typeof e)&&!!(e=-1===e.indexOf("/"
)?gu.lookup(e):e)&&(-1===e.indexOf("charset")&&(t=gu.charset(e))&&(e+="; charset="+t.toLowerCase()),e)},
gu.extension=function(e){return!(!e||"string"!=typeof e)&&!(!(e=(e=Tu.exec(e))&&gu.extensions[e[1].toLowerCase()]
)||!e.length)&&e[0]},gu.extensions=Object.create(null),gu.lookup=function(e){return e&&"string"==typeof e&&(e=Eu("x."+e
).toLowerCase().substr(1))&&gu.types[e]||!1},gu.types=Object.create(null),bu=gu.extensions,yu=gu.types,wu=["nginx",
"apache",void 0,"iana"],Object.keys(_u).forEach(function(e){var t,n,i,o,a=_u[e],s=a.extensions;if(s&&s.length)for(bu[e
]=s,t=0;t<s.length;t++)n=s[t],yu[n]&&(i=wu.indexOf(_u[yu[n]].source),o=wu.indexOf(a.source),
"application/octet-stream"!==yu[n]&&(o<i||i===o&&"application/"===yu[n].substr(0,12)))||(yu[n]=e)}),uu=Bl,fd={parallel:(
fu=$e(),vu=Je(),xu=We(),function(e,t,n){for(var i=vu(e);i.index<(i.keyedList||e).length;)fu(e,t,i,function(e,t){e?n(e,t
):0===Object.keys(i.jobs).length&&n(null,i.results)}),i.index++;return xu.bind(i,n)}),serial:(hu=Ke(),function(e,t,n){
return hu(e,t,null,n)}),serialOrdered:Ke()},du=fd,mu=function(t,n){return Object.keys(n).forEach(function(e){t[e]=t[e
]||n[e]}),t},ou.inherits(E=c,iu),c.LINE_BREAK="\r\n",c.DEFAULT_CONTENT_TYPE="application/octet-stream",
c.prototype.append=function(e,t,n){var i,o;"string"==typeof(n=n||{})&&(n={filename:n}),i=iu.prototype.append.bind(this),
ou.isArray(t="number"==typeof t?""+t:t)?this._error(new Error("Arrays are not supported.")):(e=this._multiPartHeader(e,t
,n),o=this._multiPartFooter(),i(e),i(t),i(o),this._trackLength(e,t,n))},c.prototype._trackLength=function(e,t,n){var i=0
null!=n.knownLength?i+=+n.knownLength:Buffer.isBuffer(t)?i=t.length:"string"==typeof t&&(i=Buffer.byteLength(t)),
this._valueLength+=i,this._overheadLength+=Buffer.byteLength(e)+c.LINE_BREAK.length,t&&(
t.path||t.readable&&t.hasOwnProperty("httpVersion")||t instanceof lu)&&(n.knownLength||this._valuesToMeasure.push(t))},
c.prototype._lengthRetriever=function(n,i){n.hasOwnProperty("fd")?null!=n.end&&n.end!=1/0&&null!=n.start?i(null,
n.end+1-(n.start||0)):pu.stat(n.path,function(e,t){e?i(e):(e=t.size-(n.start||0),i(null,e))}):n.hasOwnProperty(
"httpVersion")?i(null,+n.headers["content-length"]):n.hasOwnProperty("httpModule")?(n.on("response",function(e){n.pause(
),i(null,+e.headers["content-length"])}),n.resume()):i("Unknown stream")},c.prototype._multiPartHeader=function(e,t,n){
var i,o,a,s,r;if("string"==typeof n.header)return n.header;for(r in i=this._getContentDisposition(t,n),
t=this._getContentType(t,n),o="",a={"Content-Disposition":["form-data",'name="'+e+'"'].concat(i||[]),"Content-Type":[
].concat(t||[])},"object"==typeof n.header&&mu(a,n.header),a)a.hasOwnProperty(r)&&null!=(s=a[r])&&(s=Array.isArray(s
)?s:[s]).length&&(o+=r+": "+s.join("; ")+c.LINE_BREAK);return"--"+this.getBoundary()+c.LINE_BREAK+o+c.LINE_BREAK},
c.prototype._getContentDisposition=function(e,t){var n;return"string"==typeof t.filepath?n=au.normalize(t.filepath
).replace(/\\/g,"/"):t.filename||e.name||e.path?n=au.basename(t.filename||e.name||e.path):e.readable&&e.hasOwnProperty(
"httpVersion")&&(n=au.basename(e.client._httpMessage.path||"")),n?'filename="'+n+'"':void 0},
c.prototype._getContentType=function(e,t){var n=t.contentType;return(n=(n=!(n=!(n=!n&&e.name?uu.lookup(e.name):n
)&&e.path?uu.lookup(e.path):n)&&e.readable&&e.hasOwnProperty("httpVersion")?e.headers["content-type"]:n
)||!t.filepath&&!t.filename?n:uu.lookup(t.filepath||t.filename))||"object"!=typeof e?n:c.DEFAULT_CONTENT_TYPE},
c.prototype._multiPartFooter=function(){return function(e){var t=c.LINE_BREAK;0===this._streams.length&&(
t+=this._lastBoundary()),e(t)}.bind(this)},c.prototype._lastBoundary=function(){return"--"+this.getBoundary(
)+"--"+c.LINE_BREAK},c.prototype.getHeaders=function(e){var t,n={
"content-type":"multipart/form-data; boundary="+this.getBoundary()};for(t in e)e.hasOwnProperty(t)&&(n[t.toLowerCase()
]=e[t]);return n},c.prototype.setBoundary=function(e){this._boundary=e},c.prototype.getBoundary=function(){
return this._boundary||this._generateBoundary(),this._boundary},c.prototype.getBuffer=function(){for(
var e=new Buffer.alloc(0),t=this.getBoundary(),n=0,i=this._streams.length;n<i;n++)"function"!=typeof this._streams[n]&&(
e=Buffer.isBuffer(this._streams[n])?Buffer.concat([e,this._streams[n]]):Buffer.concat([e,Buffer.from(this._streams[n])])
,"string"==typeof this._streams[n]&&this._streams[n].substring(2,t.length+2)===t||(e=Buffer.concat([e,Buffer.from(
c.LINE_BREAK)])));return Buffer.concat([e,Buffer.from(this._lastBoundary())])},c.prototype._generateBoundary=function(){
for(var e="--------------------------",t=0;t<24;t++)e+=Math.floor(10*Math.random()).toString(16);this._boundary=e},
c.prototype.getLengthSync=function(){var e=this._overheadLength+this._valueLength;return this._streams.length&&(
e+=this._lastBoundary().length),this.hasKnownLength()||this._error(new Error(
"Cannot calculate proper length in synchronous way.")),e},c.prototype.hasKnownLength=function(){
return!this._valuesToMeasure.length&&!0},c.prototype.getLength=function(n){var i=this._overheadLength+this._valueLength;
this._streams.length&&(i+=this._lastBoundary().length),this._valuesToMeasure.length?du.parallel(this._valuesToMeasure,
this._lengthRetriever,function(e,t){e?n(e):(t.forEach(function(e){i+=e}),n(null,i))}):process.nextTick(n.bind(this,null,
i))},c.prototype.submit=function(e,o){var a,t,n={method:"post"};return"string"==typeof e?(e=cu(e),t=mu({port:e.port,
path:e.pathname,host:e.hostname,protocol:e.protocol},n)):(t=mu(e,n)).port||(t.port="https:"==t.protocol?443:80),
t.headers=this.getHeaders(e.headers),a=("https:"==t.protocol?ru:su).request(t),this.getLength(function(e,t){var n,i;
e&&"Unknown stream"!==e?this._error(e):(t&&a.setHeader("Content-Length",t),this.pipe(a),o&&(n=(i=function(e,t){
return a.removeListener("error",i),a.removeListener("response",n),o.call(this,e,t)}).bind(this,null),a.on("error",i),
a.on("response",n)))}.bind(this)),a},c.prototype._error=function(e){this.error||(this.error=e,this.pause(),this.emit(
"error",e))},c.prototype.toString=function(){return"[object FormData]"},E),C.exports)},validateStatus:function(e){
return 200<=e&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}},kc.forEach(["delete","get","head"],
function(e){Uc.headers[e]={}}),kc.forEach(["post","put","patch"],function(e){Uc.headers[e]=kc.merge(Mc)}),Gc=Bc=Cr,
$c=function(t,n,e){var i=this||zc;return Bc.forEach(e,function(e){t=e.call(i,t,n)}),t},Jc=Qe(),Wc=zc=gd=Uc,Kc=Ue(),
g=function(t){return Xe(t),t.headers=t.headers||{},t.data=$c.call(t,t.data,t.headers,t.transformRequest),
t.headers=Gc.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),Gc.forEach(["delete","get","head","post",
"put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||Wc.adapter)(t).then(function(e){return Xe(t),
e.data=$c.call(t,e.data,e.headers,t.transformResponse),e},function(e){return Jc(e)||(Xe(t),e&&e.response&&(
e.response.data=$c.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})},Yc=Cr,
b=function(t,n){function i(e,t){return Yc.isPlainObject(e)&&Yc.isPlainObject(t)?Yc.merge(e,t):Yc.isPlainObject(t
)?Yc.merge({},t):Yc.isArray(t)?t.slice():t}function o(e){return Yc.isUndefined(n[e])?Yc.isUndefined(t[e])?void 0:i(
void 0,t[e]):i(t[e],n[e])}function e(e){if(!Yc.isUndefined(n[e]))return i(void 0,n[e])}function a(e){
return Yc.isUndefined(n[e])?Yc.isUndefined(t[e])?void 0:i(void 0,t[e]):i(void 0,n[e])}function s(e){return e in n?i(t[e]
,n[e]):e in t?i(void 0,t[e]):void 0}var r,c;return n=n||{},r={},c={url:e,method:e,data:e,baseURL:a,transformRequest:a,
transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,
xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,
maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,
validateStatus:s},Yc.forEach(Object.keys(t).concat(Object.keys(n)),function(e){var t=c[e]||o,n=t(e);Yc.isUndefined(n
)&&t!==s||(r[e]=n)}),r},Qc=Ve().version,Xc=kr,Zc={},["object","boolean","number","function","string","symbol"].forEach(
function(t,n){Zc[t]=function(e){return typeof e===t||"a"+(n<1?"n ":" ")+t}}),ep={},Zc.transitional=function(i,o,n){
function a(e,t){return"[Axios v"+Qc+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(e,t,n){if(!1===i
)throw new Xc(a(t," has been removed"+(o?" in "+o:"")),Xc.ERR_DEPRECATED);return o&&!ep[t]&&(ep[t]=!0,console.warn(a(t,
" has been deprecated since v"+o+" and will be removed in the near future"))),!i||i(e,t,n)}},ql=Cr,tp=r,np=xd,ip=g,op=b,
ap=d,rp=(sp={assertOptions:function(e,t,n){var i,o,a,s,r;if("object"!=typeof e)throw new Xc("options must be an object",
Xc.ERR_BAD_OPTION_VALUE);for(o=(i=Object.keys(e)).length;0<o--;)if(r=t[a=i[o]]){if(!0!==(r=void 0===(s=e[a])||r(s,a,e))
)throw new Xc("option "+a+" must be "+r,Xc.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new Xc("Unknown option "+a,
Xc.ERR_BAD_OPTION)},validators:Zc}).validators,Ze.prototype.request=function(e,t){var n,i,o,a,s,r,c,p;if(
"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=op(this.defaults,t)).method?t.method=t.method.toLowerCase(
):this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get",void 0!==(e=t.transitional
)&&sp.assertOptions(e,{silentJSONParsing:rp.transitional(rp.boolean),forcedJSONParsing:rp.transitional(rp.boolean),
clarifyTimeoutError:rp.transitional(rp.boolean)},!1),n=[],i=!0,this.interceptors.request.forEach(function(e){
"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}),o=[],
this.interceptors.response.forEach(function(e){o.push(e.fulfilled,e.rejected)}),i){for(r=t;n.length;){c=n.shift(),
p=n.shift();try{r=c(r)}catch(e){p(e);break}}try{a=ip(r)}catch(e){return Promise.reject(e)}for(;o.length;)a=a.then(
o.shift(),o.shift())}else for(s=[ip,void 0],Array.prototype.unshift.apply(s,n),s=s.concat(o),a=Promise.resolve(t
);s.length;)a=a.then(s.shift(),s.shift());return a},Ze.prototype.getUri=function(e){e=op(this.defaults,e);var t=ap(
e.baseURL,e.url);return tp(t,e.params,e.paramsSerializer)},ql.forEach(["delete","get","head","options"],function(n){
Ze.prototype[n]=function(e,t){return this.request(op(t||{},{method:n,url:e,data:(t||{}).data}))}}),ql.forEach(["post",
"put","patch"],function(o){function e(i){return function(e,t,n){return this.request(op(n||{},{method:o,headers:i?{
"Content-Type":"multipart/form-data"}:{},url:e,data:t}))}}Ze.prototype[o]=e(),Ze.prototype[o+"Form"]=e(!0)}),cp=Cr,pp=h,
lp=Ze,up=b,(_=function t(n){var e=new lp(n),i=pp(lp.prototype.request,e);return cp.extend(i,lp.prototype,e),cp.extend(i,
e),i.create=function(e){return t(up(n,e))},i}(gd)).Axios=lp,_.CanceledError=Ue(),_.CancelToken=(Jl=Ue(),
Rt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Rt.prototype.subscribe=function(e){
this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},
Rt.prototype.unsubscribe=function(e){this._listeners&&-1!==(e=this._listeners.indexOf(e))&&this._listeners.splice(e,1)},
Rt.source=function(){var t;return{token:new Rt(function(e){t=e}),cancel:t}},Rt),_.isCancel=Qe(),_.VERSION=Ve().version,
_.toFormData=qr,_.AxiosError=kr,_.Cancel=_.CanceledError,_.all=function(e){return Promise.all(e)},_.spread=function(t){
return function(e){return t.apply(null,e)}},_.isAxiosError=(Wl=Cr,function(e){return Wl.isObject(e)&&!0===e.isAxiosError
}),e.exports=_,e.exports.default=_,x.exports=e.exports,dp={},mp={},fp={},vp={},xp={},bp={exports:{}},wp={exports:{}},
_p={exports:{}},Ep={exports:{}},Op={exports:{}},Np={exports:{}},Pp={exports:{}},jp={exports:{}},Dp={exports:{}},Sp={
exports:{}},qp={exports:{}},Fp={exports:{}},Bp={exports:{}},Vp={exports:{}},Gp={exports:{}},$p={exports:{}},Wp={
exports:{}},Yp={exports:{}},Xp={exports:{}},tl={exports:{}},il={exports:{}},al={exports:{}},rl={exports:{}},pl={
exports:{}},ul={exports:{}},hl={exports:{}},vl={exports:{}},xl={exports:{}},gl={exports:{}},El={exports:{}},Ol={
exports:{}},Pl={},jl={},Dl={},Sl={},function(){var u,s={}.hasOwnProperty,e=et(),t=(Nl||(Nl=1,function(){function e(e){
var t,n,i;for(t in this.options={},n=o[.2])h.call(n,t)&&(i=n[t],this.options[t]=i);for(t in e)h.call(e,t)&&(i=e[t],
this.options[t]=i)}var n,o,t,d,m,h={}.hasOwnProperty;Cl||(Cl=1,function(){var o=(e=tt()).assign,a=e.isFunction,e=nt(),
s=Tt(),r=(Tl||(Tl=1,function(){function e(e,t,n){var i;this.name="?xml",this.type=d.Document,i={},(e=e||{}).writer?o(
e.writer)&&(i=e.writer,e.writer=new E):e.writer=new E,this.options=e,this.writer=e.writer,
this.writerOptions=this.writer.filterOptions(i),this.stringify=new _(e),this.onDataCallback=t||function(){},
this.onEndCallback=n||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,
this.documentCompleted=!1,this.root=null}var p={}.hasOwnProperty,t=tt(),l=t.isObject,u=t.isFunction,o=t.isPlainObject,
s=t.getValue,d=O(),m=Tt(),a=at(),n=rt(),i=ct(),r=ft(),c=vt(),h=xt(),f=pt(),v=ht(),x=lt(),g=ut(),b=dt(),y=mt(),w=it(),
_=yt(),E=Et(),T=wt();El.exports=(e.prototype.createChildNode=function(e){var t,n,i,o,a,s,r,c;switch(e.type){
case d.CData:this.cdata(e.value);break;case d.Comment:this.comment(e.value);break;case d.Element:for(n in i={},
r=e.attribs)p.call(r,n)&&(t=r[n],i[n]=t.value);this.node(e.name,i);break;case d.Dummy:this.dummy();break;case d.Raw:
this.raw(e.value);break;case d.Text:this.text(e.value);break;case d.ProcessingInstruction:this.instruction(e.target,
e.value);break;default:throw new Error("This XML node type is not supported in a JS object: "+e.constructor.name)}for(
a=0,s=(c=e.children).length;a<s;a++)o=c[a],this.createChildNode(o),o.type===d.Element&&this.up();return this},
e.prototype.dummy=function(){return this},e.prototype.node=function(e,t,n){var i;if(null==e)throw new Error(
"Missing node name.");if(this.root&&-1===this.currentLevel)throw new Error(
"Document can only have one root node. "+this.debugInfo(e));return this.openCurrent(),e=s(e),t=s(t=null==t?{}:t),l(t)||(
n=(i=[t,n])[0],t=i[1]),this.currentNode=new a(this,e,t),this.currentNode.children=!1,this.currentLevel++,this.openTags[
this.currentLevel]=this.currentNode,null!=n&&this.text(n),this},e.prototype.element=function(e,t,n){var i,o,a,s,r,c;if(
this.currentNode&&this.currentNode.type===d.DocType)this.dtdElement.apply(this,arguments);else if(Array.isArray(e)||l(e
)||u(e))for(s=this.options.noValidation,this.options.noValidation=!0,(c=new m(this.options).element("TEMP_ROOT")
).element(e),this.options.noValidation=s,o=0,a=(r=c.children).length;o<a;o++)i=r[o],this.createChildNode(i),
i.type===d.Element&&this.up();else this.node(e,t,n);return this},e.prototype.attribute=function(e,t){var n,i;if(
!this.currentNode||this.currentNode.children)throw new Error(
"att() can only be used immediately after an ele() call in callback mode. "+this.debugInfo(e));if(null!=e&&(e=s(e)),l(e)
)for(n in e)p.call(e,n)&&(i=e[n],this.attribute(n,i));else u(t)&&(t=t.apply()),
this.options.keepNullAttributes&&null==t?this.currentNode.attribs[e]=new w(this,e,""):null!=t&&(
this.currentNode.attribs[e]=new w(this,e,t));return this},e.prototype.text=function(e){return this.openCurrent(),
e=new c(this,e),this.onData(this.writer.text(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},
e.prototype.cdata=function(e){return this.openCurrent(),e=new n(this,e),this.onData(this.writer.cdata(e,
this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},e.prototype.comment=function(e){
return this.openCurrent(),e=new i(this,e),this.onData(this.writer.comment(e,this.writerOptions,this.currentLevel+1),
this.currentLevel+1),this},e.prototype.raw=function(e){return this.openCurrent(),e=new r(this,e),this.onData(
this.writer.raw(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},e.prototype.instruction=function(e,
t){var n,i,o,a;if(this.openCurrent(),null!=e&&(e=s(e)),null!=t&&(t=s(t)),Array.isArray(e))for(n=0,a=e.length;n<a;n++
)i=e[n],this.instruction(i);else if(l(e))for(i in e)p.call(e,i)&&(o=e[i],this.instruction(i,o));else u(t)&&(t=t.apply())
,t=new h(this,e,t),this.onData(this.writer.processingInstruction(t,this.writerOptions,this.currentLevel+1),
this.currentLevel+1);return this},e.prototype.declaration=function(e,t,n){if(this.openCurrent(),this.documentStarted
)throw new Error("declaration() must be the first node.");return e=new f(this,e,t,n),this.onData(
this.writer.declaration(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},
e.prototype.doctype=function(e,t,n){if(this.openCurrent(),null==e)throw new Error("Missing root node name.");if(
this.root)throw new Error("dtd() must come before the root node.");return this.currentNode=new v(this,t,n),
this.currentNode.rootNodeName=e,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel
]=this.currentNode,this},e.prototype.dtdElement=function(e,t){return this.openCurrent(),e=new b(this,e,t),this.onData(
this.writer.dtdElement(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},
e.prototype.attList=function(e,t,n,i,o){return this.openCurrent(),e=new x(this,e,t,n,i,o),this.onData(
this.writer.dtdAttList(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},e.prototype.entity=function(
e,t){return this.openCurrent(),e=new g(this,!1,e,t),this.onData(this.writer.dtdEntity(e,this.writerOptions,
this.currentLevel+1),this.currentLevel+1),this},e.prototype.pEntity=function(e,t){return this.openCurrent(),e=new g(this
,!0,e,t),this.onData(this.writer.dtdEntity(e,this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},
e.prototype.notation=function(e,t){return this.openCurrent(),e=new y(this,e,t),this.onData(this.writer.dtdNotation(e,
this.writerOptions,this.currentLevel+1),this.currentLevel+1),this},e.prototype.up=function(){if(this.currentLevel<0
)throw new Error("The document node has no parent.");return this.currentNode?(this.currentNode.children?this.closeNode(
this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]
),delete this.openTags[this.currentLevel],this.currentLevel--,this},e.prototype.end=function(){for(
;0<=this.currentLevel;)this.up();return this.onEnd()},e.prototype.openCurrent=function(){if(this.currentNode
)return this.currentNode.children=!0,this.openNode(this.currentNode)},e.prototype.openNode=function(e){var t,n,i,o;if(
!e.isOpen){if(this.root||0!==this.currentLevel||e.type!==d.Element||(this.root=e),n="",e.type===d.Element){for(
i in this.writerOptions.state=T.OpenTag,n=this.writer.indent(e,this.writerOptions,this.currentLevel)+"<"+e.name,
o=e.attribs)p.call(o,i)&&(t=o[i],n+=this.writer.attribute(t,this.writerOptions,this.currentLevel));n+=(
e.children?">":"/>")+this.writer.endline(e,this.writerOptions,this.currentLevel),this.writerOptions.state=T.InsideTag
}else this.writerOptions.state=T.OpenTag,n=this.writer.indent(e,this.writerOptions,this.currentLevel
)+"<!DOCTYPE "+e.rootNodeName,e.pubID&&e.sysID?n+=' PUBLIC "'+e.pubID+'" "'+e.sysID+'"':e.sysID&&(
n+=' SYSTEM "'+e.sysID+'"'),e.children?(n+=" [",this.writerOptions.state=T.InsideTag):(
this.writerOptions.state=T.CloseTag,n+=">"),n+=this.writer.endline(e,this.writerOptions,this.currentLevel);
return this.onData(n,this.currentLevel),e.isOpen=!0}},e.prototype.closeNode=function(e){var t;if(!e.isClosed
)return this.writerOptions.state=T.CloseTag,t=e.type===d.Element?this.writer.indent(e,this.writerOptions,
this.currentLevel)+"</"+e.name+">"+this.writer.endline(e,this.writerOptions,this.currentLevel):this.writer.indent(e,
this.writerOptions,this.currentLevel)+"]>"+this.writer.endline(e,this.writerOptions,this.currentLevel),
this.writerOptions.state=T.None,this.onData(t,this.currentLevel),e.isClosed=!0},e.prototype.onData=function(e,t){
return this.documentStarted=!0,this.onDataCallback(e,t+1)},e.prototype.onEnd=function(){return this.documentCompleted=!0
,this.onEndCallback()},e.prototype.debugInfo=function(e){return null==e?"":"node: <"+e+">"},e.prototype.ele=function(){
return this.element.apply(this,arguments)},e.prototype.nod=function(e,t,n){return this.node(e,t,n)},
e.prototype.txt=function(e){return this.text(e)},e.prototype.dat=function(e){return this.cdata(e)},
e.prototype.com=function(e){return this.comment(e)},e.prototype.ins=function(e,t){return this.instruction(e,t)},
e.prototype.dec=function(e,t,n){return this.declaration(e,t,n)},e.prototype.dtd=function(e,t,n){return this.doctype(e,t,
n)},e.prototype.e=function(e,t,n){return this.element(e,t,n)},e.prototype.n=function(e,t,n){return this.node(e,t,n)},
e.prototype.t=function(e){return this.text(e)},e.prototype.d=function(e){return this.cdata(e)},e.prototype.c=function(e
){return this.comment(e)},e.prototype.r=function(e){return this.raw(e)},e.prototype.i=function(e,t){
return this.instruction(e,t)},e.prototype.att=function(){return(
this.currentNode&&this.currentNode.type===d.DocType?this.attList:this.attribute).apply(this,arguments)},
e.prototype.a=function(){return(this.currentNode&&this.currentNode.type===d.DocType?this.attList:this.attribute).apply(
this,arguments)},e.prototype.ent=function(e,t){return this.entity(e,t)},e.prototype.pent=function(e,t){
return this.pEntity(e,t)},e.prototype.not=function(e,t){return this.notation(e,t)},e)}.call(P)),El.exports),t=Et(),n=(
Rl||(Rl=1,function(){var d={}.hasOwnProperty,m=O(),a=_t(),h=wt();Ol.exports=function(){function i(e,t){this.stream=e,
i.__super__.constructor.call(this,t)}function e(){this.constructor=n}var t,n=i,o=a;for(t in o)d.call(o,t)&&(n[t]=o[t]);
return e.prototype=o.prototype,n.prototype=new e,n.__super__=o.prototype,i.prototype.endline=function(e,t,n){
return e.isLastRootNode&&t.state===h.CloseTag?"":i.__super__.endline.call(this,e,t,n)},i.prototype.document=function(e,t
){for(var n,i,o,a,s,r,c=e.children,p=i=0,l=c.length;i<l;p=++i)(n=c[p]).isLastRootNode=p===e.children.length-1;for(
t=this.filterOptions(t),r=[],o=0,a=(s=e.children).length;o<a;o++)n=s[o],r.push(this.writeChildNode(n,t,0));return r},
i.prototype.attribute=function(e,t,n){return this.stream.write(i.__super__.attribute.call(this,e,t,n))},
i.prototype.cdata=function(e,t,n){return this.stream.write(i.__super__.cdata.call(this,e,t,n))},
i.prototype.comment=function(e,t,n){return this.stream.write(i.__super__.comment.call(this,e,t,n))},
i.prototype.declaration=function(e,t,n){return this.stream.write(i.__super__.declaration.call(this,e,t,n))},
i.prototype.docType=function(e,t,n){var i,o,a,s;if(this.openNode(e,t,n=n||0),t.state=h.OpenTag,this.stream.write(
this.indent(e,t,n)),this.stream.write("<!DOCTYPE "+e.root().name),e.pubID&&e.sysID?this.stream.write(
' PUBLIC "'+e.pubID+'" "'+e.sysID+'"'):e.sysID&&this.stream.write(' SYSTEM "'+e.sysID+'"'),0<e.children.length){for(
this.stream.write(" ["),this.stream.write(this.endline(e,t,n)),t.state=h.InsideTag,o=0,a=(s=e.children).length;o<a;o++
)i=s[o],this.writeChildNode(i,t,n+1);t.state=h.CloseTag,this.stream.write("]")}return t.state=h.CloseTag,
this.stream.write(t.spaceBeforeSlash+">"),this.stream.write(this.endline(e,t,n)),t.state=h.None,this.closeNode(e,t,n)},
i.prototype.element=function(e,t,n){var i,o,a,s,r,c,p,l,u;for(p in this.openNode(e,t,n=n||0),t.state=h.OpenTag,
this.stream.write(this.indent(e,t,n)+"<"+e.name),l=e.attribs)d.call(l,p)&&(i=l[p],this.attribute(i,t,n));if(s=0===(
a=e.children.length)?null:e.children[0],0===a||e.children.every(function(e){return(e.type===m.Text||e.type===m.Raw
)&&""===e.value}))t.allowEmpty?(this.stream.write(">"),t.state=h.CloseTag,this.stream.write("</"+e.name+">")):(
t.state=h.CloseTag,this.stream.write(t.spaceBeforeSlash+"/>"));else if(
!t.pretty||1!==a||s.type!==m.Text&&s.type!==m.Raw||null==s.value){for(this.stream.write(">"+this.endline(e,t,n)),
t.state=h.InsideTag,r=0,c=(u=e.children).length;r<c;r++)o=u[r],this.writeChildNode(o,t,n+1);t.state=h.CloseTag,
this.stream.write(this.indent(e,t,n)+"</"+e.name+">")}else this.stream.write(">"),t.state=h.InsideTag,
t.suppressPrettyCount++,this.writeChildNode(s,t,n+1),t.suppressPrettyCount--,t.state=h.CloseTag,this.stream.write(
"</"+e.name+">");return this.stream.write(this.endline(e,t,n)),t.state=h.None,this.closeNode(e,t,n)},
i.prototype.processingInstruction=function(e,t,n){return this.stream.write(i.__super__.processingInstruction.call(this,e
,t,n))},i.prototype.raw=function(e,t,n){return this.stream.write(i.__super__.raw.call(this,e,t,n))},
i.prototype.text=function(e,t,n){return this.stream.write(i.__super__.text.call(this,e,t,n))},
i.prototype.dtdAttList=function(e,t,n){return this.stream.write(i.__super__.dtdAttList.call(this,e,t,n))},
i.prototype.dtdElement=function(e,t,n){return this.stream.write(i.__super__.dtdElement.call(this,e,t,n))},
i.prototype.dtdEntity=function(e,t,n){return this.stream.write(i.__super__.dtdEntity.call(this,e,t,n))},
i.prototype.dtdNotation=function(e,t,n){return this.stream.write(i.__super__.dtdNotation.call(this,e,t,n))},i}()}.call(P
)),Ol.exports),i=O(),c=wt();vp.create=function(e,t,n,i){if(null==e)throw new Error("Root element needs a name.");
return i=o({},t,n,i),n=(t=new s(i)).element(e),i.headless||(t.declaration(i),null==i.pubID&&null==i.sysID||t.dtd(i)),n},
vp.begin=function(e,t,n){var i;return a(e)&&(t=(i=[e,t])[0],n=i[1],e={}),t?new r(e,t,n):new s(e)},
vp.stringWriter=function(e){return new t(e)},vp.streamWriter=function(e,t){return new n(e,t)},vp.implementation=new e,
vp.nodeType=i,vp.writerState=c}.call(P)),n=vp,o=et().defaults,d=function(e){return"string"==typeof e&&(0<=e.indexOf("&"
)||0<=e.indexOf(">")||0<=e.indexOf("<"))},m=function(e){return"<![CDATA["+t(e)+"]]>"},t=function(e){return e.replace(
"]]>","]]]]><![CDATA[>")},fp.Builder=(e.prototype.buildObject=function(e){var c,t,p,l=this.options.attrkey,
u=this.options.charkey;return 1===Object.keys(e).length&&this.options.rootName===o[.2].rootName?e=e[t=Object.keys(e)[0]
]:t=this.options.rootName,p=this,c=function(e,t){var n,i,o,a,s,r;if("object"!=typeof t)p.options.cdata&&d(t)?e.raw(m(t)
):e.txt(t);else if(Array.isArray(t)){for(a in t)if(h.call(t,a))for(s in i=t[a])o=i[s],e=c(e.ele(s),o).up()}else for(
s in t)if(h.call(t,s))if(i=t[s],s===l){if("object"==typeof i)for(n in i)r=i[n],e=e.att(n,r)}else if(s===u
)e=p.options.cdata&&d(i)?e.raw(m(i)):e.txt(i);else if(Array.isArray(i))for(a in i)h.call(i,a)&&(e=("string"==typeof(o=i[
a])?p.options.cdata&&d(o)?e.ele(s).raw(m(o)):e.ele(s,o):c(e.ele(s),o)).up());else e=("object"==typeof i?c(e.ele(s),i
):"string"==typeof i&&p.options.cdata&&d(i)?e.ele(s).raw(m(i)):(null==i&&(i=""),e.ele(s,i.toString()))).up();return e},
t=n.create(t,this.options.xmldec,this.options.doctype,{headless:this.options.headless,
allowSurrogateChars:this.options.allowSurrogateChars}),c(t,e).end(this.options.renderOpts)},e)}.call(P)),fp),n=(Ll||(
Ll=1,u=Pl,function(){function a(e,t){return function(){return e.apply(t,arguments)}}var s,r,d,m,c,p,h={}.hasOwnProperty,
f=function(){if(!Al){Al=1;var b,i,o,y,w,a,s,r,_,E,T,O,R,e,c,p,t,C=jl;function l(e,t){if(!(this instanceof l)
)return new l(e,t);for(var n=this,i=n,o=0,a=b.length;o<a;o++)i[b[o]]="";n.q=n.c="",
n.bufferCheckPosition=C.MAX_BUFFER_LENGTH,n.opt=t||{},n.opt.lowercase=n.opt.lowercase||n.opt.lowercasetags,
n.looseCase=n.opt.lowercase?"toLowerCase":"toUpperCase",n.tags=[],n.closed=n.closedRoot=n.sawRoot=!1,n.tag=n.error=null,
n.strict=!!e,n.noscript=!(!e&&!n.opt.noscript),n.state=R.BEGIN,n.strictEntities=n.opt.strictEntities,
n.ENTITIES=n.strictEntities?Object.create(C.XML_ENTITIES):Object.create(C.ENTITIES),n.attribList=[],n.opt.xmlns&&(
n.ns=Object.create(r)),n.trackPosition=!1!==n.opt.position,n.trackPosition&&(n.position=n.line=n.column=0),d(n,"onready"
)}function u(e,t){if(!(this instanceof u))return new u(e,t);i.apply(this),this._parser=new l(e,t),this.writable=!0,
this.readable=!0;var n=this;this._parser.onend=function(){n.emit("end")},this._parser.onerror=function(e){n.emit("error"
,e),n._parser.error=null},this._decoder=null,o.forEach(function(t){Object.defineProperty(n,"on"+t,{get:function(){
return n._parser["on"+t]},set:function(e){if(!e)return n.removeAllListeners(t),n._parser["on"+t]=e;n.on(t,e)},
enumerable:!0,configurable:!1})})}function N(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}function P(e){
return'"'===e||"'"===e}function j(e,t){return e.test(t)}function d(e,t,n){e[t]&&e[t](n)}function A(e,t,n){e.textNode&&D(
e),d(e,t,n)}function D(e){e.textNode=I(e.opt,e.textNode),e.textNode&&d(e,"ontext",e.textNode),e.textNode=""}function I(e
,t){return e.trim&&(t=t.trim()),e.normalize?t.replace(/\s+/g," "):t}function S(e,t){return D(e),e.trackPosition&&(
t+="\nLine: "+e.line+"\nColumn: "+e.column+"\nChar: "+e.c),t=new Error(t),e.error=t,d(e,"onerror",t),e}function k(e){
return e.sawRoot&&!e.closedRoot&&L(e,"Unclosed root tag"),
e.state!==R.BEGIN&&e.state!==R.BEGIN_WHITESPACE&&e.state!==R.TEXT&&S(e,"Unexpected end"),D(e),e.c="",e.closed=!0,d(e,
"onend"),l.call(e,e.strict,e.opt),e}function L(e,t){if("object"!=typeof e||!(e instanceof l))throw new Error(
"bad call to strictFail");e.strict&&S(e,t)}function m(e,t){var n=(i=e.indexOf(":")<0?["",e]:e.split(":"))[0],i=i[1];
return t&&"xmlns"===e&&(n="xmlns",i=""),{prefix:n,local:i}}function q(e){var t,n,i;e.strict||(e.attribName=e.attribName[
e.looseCase]()),-1!==e.attribList.indexOf(e.attribName)||e.tag.attributes.hasOwnProperty(e.attribName)||(e.opt.xmlns?(
n=(t=m(e.attribName,!0)).prefix,t=t.local,"xmlns"===n&&("xml"===t&&e.attribValue!==a?L(e,
"xml: prefix must be bound to "+a+"\nActual: "+e.attribValue):"xmlns"===t&&e.attribValue!==s?L(e,
"xmlns: prefix must be bound to "+s+"\nActual: "+e.attribValue):(n=e.tag,i=e.tags[e.tags.length-1]||e,n.ns===i.ns&&(
n.ns=Object.create(i.ns)),n.ns[t]=e.attribValue)),e.attribList.push([e.attribName,e.attribValue])):(e.tag.attributes[
e.attribName]=e.attribValue,A(e,"onattribute",{name:e.attribName,value:e.attribValue}))),e.attribName=e.attribValue=""}
function F(t,e){var n,i,o,a,s,r,c,p;if(t.opt.xmlns){for(n=t.tag,i=m(t.tagName),n.prefix=i.prefix,n.local=i.local,
n.uri=n.ns[i.prefix]||"",n.prefix&&!n.uri&&(L(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),n.uri=i.prefix),
i=t.tags[t.tags.length-1]||t,n.ns&&i.ns!==n.ns&&Object.keys(n.ns).forEach(function(e){A(t,"onopennamespace",{prefix:e,
uri:n.ns[e]})}),o=0,a=t.attribList.length;o<a;o++)p={name:s=(c=t.attribList[o])[0],value:c[1],prefix:r=(c=m(s,!0)
).prefix,local:c.local,uri:c=""!==r&&n.ns[r]||""},r&&"xmlns"!==r&&!c&&(L(t,"Unbound namespace prefix: "+JSON.stringify(r
)),p.uri=r),t.tag.attributes[s]=p,A(t,"onattribute",p);t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,
t.tags.push(t.tag),A(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase(
)?t.state=R.TEXT:t.state=R.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}
function M(n){var e,t,i,o,a,s,r,c;if(n.tagName){if(n.script){if("script"!==n.tagName)return n.script+="</"+n.tagName+">"
,n.tagName="",n.state=R.SCRIPT;A(n,"onscript",n.script),n.script=""}for(e=n.tags.length,t=n.tagName,i=t=n.strict?t:t[
n.looseCase]();e--&&n.tags[e].name!==i;)L(n,"Unexpected close tag");if(e<0)L(n,"Unmatched closing tag: "+n.tagName),
n.textNode+="</"+n.tagName+">";else{for(n.tagName=t,o=n.tags.length;o-- >e;){for(r in a=n.tag=n.tags.pop(),
n.tagName=n.tag.name,A(n,"onclosetag",n.tagName),s={},a.ns)s[r]=a.ns[r];c=n.tags[n.tags.length-1]||n,
n.opt.xmlns&&a.ns!==c.ns&&Object.keys(a.ns).forEach(function(e){var t=a.ns[e];A(n,"onclosenamespace",{prefix:e,uri:t})})
}0===e&&(n.closedRoot=!0),n.tagName=n.attribValue=n.attribName="",n.attribList.length=0}}else L(n,
"Weird empty close tag."),n.textNode+="</>";n.state=R.TEXT}function U(e,t){"<"===t?(e.state=R.OPEN_WAKA,
e.startTagPosition=e.position):N(t)||(L(e,"Non-whitespace before first tag."),e.textNode=t,e.state=R.TEXT)}function B(e,
t){return t<e.length?e.charAt(t):""}C.parser=function(e,t){return new l(e,t)},C.SAXParser=l,C.SAXStream=u,
C.createStream=function(e,t){return new u(e,t)},C.MAX_BUFFER_LENGTH=65536,b=["comment","sgmlDecl","textNode","tagName",
"doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"],C.EVENTS=["text",
"processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag",
"opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(
Object.create=function(e){function t(){}return t.prototype=e,new t}),Object.keys||(Object.keys=function(e){var t,n=[];
for(t in e)e.hasOwnProperty(t)&&n.push(t);return n}),l.prototype={end:function(){k(this)},write:function(e){var t,n,i,o,
a,s,r,c,p,l,u,d,m,h,f,v,x,g=this;if(this.error)throw this.error;if(g.closed)return S(g,
"Cannot write after close. Assign an onready handler.");if(null===e)return k(g);for("object"==typeof e&&(e=e.toString())
,t=0,n="";n=B(e,t++),g.c=n;)switch(g.trackPosition&&(g.position++,"\n"===n?(g.line++,g.column=0):g.column++),g.state){
case R.BEGIN:if(g.state=R.BEGIN_WHITESPACE,"\ufeff"===n)continue;U(g,n);continue;case R.BEGIN_WHITESPACE:U(g,n);continue
case R.TEXT:if(g.sawRoot&&!g.closedRoot){for(i=t-1;n&&"<"!==n&&"&"!==n;)(n=B(e,t++))&&g.trackPosition&&(g.position++,
"\n"===n?(g.line++,g.column=0):g.column++);g.textNode+=e.substring(i,t-1)}"<"!==n||g.sawRoot&&g.closedRoot&&!g.strict?(
N(n)||g.sawRoot&&!g.closedRoot||L(g,"Text data outside of root node."),"&"===n?g.state=R.TEXT_ENTITY:g.textNode+=n):(
g.state=R.OPEN_WAKA,g.startTagPosition=g.position);continue;case R.SCRIPT:"<"===n?g.state=R.SCRIPT_ENDING:g.script+=n;
continue;case R.SCRIPT_ENDING:"/"===n?g.state=R.CLOSE_TAG:(g.script+="<"+n,g.state=R.SCRIPT);continue;case R.OPEN_WAKA:
"!"===n?(g.state=R.SGML_DECL,g.sgmlDecl=""):N(n)||(j(_,n)?(g.state=R.OPEN_TAG,g.tagName=n):"/"===n?(g.state=R.CLOSE_TAG,
g.tagName=""):"?"===n?(g.state=R.PROC_INST,g.procInstName=g.procInstBody=""):(L(g,"Unencoded <"),
g.startTagPosition+1<g.position&&(i=g.position-g.startTagPosition,n=new Array(i).join(" ")+n),g.textNode+="<"+n,
g.state=R.TEXT));continue;case R.SGML_DECL:(g.sgmlDecl+n).toUpperCase()===y?(A(g,"onopencdata"),g.state=R.CDATA,
g.sgmlDecl="",g.cdata=""):g.sgmlDecl+n==="--"?(g.state=R.COMMENT,g.comment="",g.sgmlDecl=""):(g.sgmlDecl+n).toUpperCase(
)===w?(g.state=R.DOCTYPE,(g.doctype||g.sawRoot)&&L(g,"Inappropriately located doctype declaration"),g.doctype="",
g.sgmlDecl=""):">"===n?(A(g,"onsgmldeclaration",g.sgmlDecl),g.sgmlDecl="",g.state=R.TEXT):(P(n)&&(
g.state=R.SGML_DECL_QUOTED),g.sgmlDecl+=n);continue;case R.SGML_DECL_QUOTED:n===g.q&&(g.state=R.SGML_DECL,g.q=""),
g.sgmlDecl+=n;continue;case R.DOCTYPE:">"===n?(g.state=R.TEXT,A(g,"ondoctype",g.doctype),g.doctype=!0):(g.doctype+=n,
"["===n?g.state=R.DOCTYPE_DTD:P(n)&&(g.state=R.DOCTYPE_QUOTED,g.q=n));continue;case R.DOCTYPE_QUOTED:g.doctype+=n,
n===g.q&&(g.q="",g.state=R.DOCTYPE);continue;case R.DOCTYPE_DTD:g.doctype+=n,"]"===n?g.state=R.DOCTYPE:P(n)&&(
g.state=R.DOCTYPE_DTD_QUOTED,g.q=n);continue;case R.DOCTYPE_DTD_QUOTED:g.doctype+=n,n===g.q&&(g.state=R.DOCTYPE_DTD,
g.q="");continue;case R.COMMENT:"-"===n?g.state=R.COMMENT_ENDING:g.comment+=n;continue;case R.COMMENT_ENDING:"-"===n?(
g.state=R.COMMENT_ENDED,g.comment=I(g.opt,g.comment),g.comment&&A(g,"oncomment",g.comment),g.comment=""):(
g.comment+="-"+n,g.state=R.COMMENT);continue;case R.COMMENT_ENDED:">"!==n?(L(g,"Malformed comment"),g.comment+="--"+n,
g.state=R.COMMENT):g.state=R.TEXT;continue;case R.CDATA:"]"===n?g.state=R.CDATA_ENDING:g.cdata+=n;continue;
case R.CDATA_ENDING:"]"===n?g.state=R.CDATA_ENDING_2:(g.cdata+="]"+n,g.state=R.CDATA);continue;case R.CDATA_ENDING_2:
">"===n?(g.cdata&&A(g,"oncdata",g.cdata),A(g,"onclosecdata"),g.cdata="",g.state=R.TEXT):"]"===n?g.cdata+="]":(
g.cdata+="]]"+n,g.state=R.CDATA);continue;case R.PROC_INST:"?"===n?g.state=R.PROC_INST_ENDING:N(n
)?g.state=R.PROC_INST_BODY:g.procInstName+=n;continue;case R.PROC_INST_BODY:if(!g.procInstBody&&N(n))continue;
"?"===n?g.state=R.PROC_INST_ENDING:g.procInstBody+=n;continue;case R.PROC_INST_ENDING:">"===n?(A(g,
"onprocessinginstruction",{name:g.procInstName,body:g.procInstBody}),g.procInstName=g.procInstBody="",g.state=R.TEXT):(
g.procInstBody+="?"+n,g.state=R.PROC_INST_BODY);continue;case R.OPEN_TAG:j(E,n)?g.tagName+=n:(l=void 0,(c=g).strict||(
c.tagName=c.tagName[c.looseCase]()),p=c.tags[c.tags.length-1]||c,l=c.tag={name:c.tagName,attributes:{}},c.opt.xmlns&&(
l.ns=p.ns),c.attribList.length=0,A(c,"onopentagstart",l),">"===n?F(g):"/"===n?g.state=R.OPEN_TAG_SLASH:(N(n)||L(g,
"Invalid character in tag name"),g.state=R.ATTRIB));continue;case R.OPEN_TAG_SLASH:">"===n?(F(g,!0),M(g)):(L(g,
"Forward-slash in opening tag not followed by >"),g.state=R.ATTRIB);continue;case R.ATTRIB:if(N(n))continue;">"===n?F(g
):"/"===n?g.state=R.OPEN_TAG_SLASH:j(_,n)?(g.attribName=n,g.attribValue="",g.state=R.ATTRIB_NAME):L(g,
"Invalid attribute name");continue;case R.ATTRIB_NAME:"="===n?g.state=R.ATTRIB_VALUE:">"===n?(L(g,
"Attribute without value"),g.attribValue=g.attribName,q(g),F(g)):N(n)?g.state=R.ATTRIB_NAME_SAW_WHITE:j(E,n
)?g.attribName+=n:L(g,"Invalid attribute name");continue;case R.ATTRIB_NAME_SAW_WHITE:if("="===n
)g.state=R.ATTRIB_VALUE;else{if(N(n))continue;L(g,"Attribute without value"),g.tag.attributes[g.attribName]="",
g.attribValue="",A(g,"onattribute",{name:g.attribName,value:""}),g.attribName="",">"===n?F(g):j(_,n)?(g.attribName=n,
g.state=R.ATTRIB_NAME):(L(g,"Invalid attribute name"),g.state=R.ATTRIB)}continue;case R.ATTRIB_VALUE:if(N(n))continue;P(
n)?(g.q=n,g.state=R.ATTRIB_VALUE_QUOTED):(L(g,"Unquoted attribute value"),g.state=R.ATTRIB_VALUE_UNQUOTED,
g.attribValue=n);continue;case R.ATTRIB_VALUE_QUOTED:if(n!==g.q){
"&"===n?g.state=R.ATTRIB_VALUE_ENTITY_Q:g.attribValue+=n;continue}q(g),g.q="",g.state=R.ATTRIB_VALUE_CLOSED;continue;
case R.ATTRIB_VALUE_CLOSED:N(n)?g.state=R.ATTRIB:">"===n?F(g):"/"===n?g.state=R.OPEN_TAG_SLASH:j(_,n)?(L(g,
"No whitespace between attributes"),g.attribName=n,g.attribValue="",g.state=R.ATTRIB_NAME):L(g,"Invalid attribute name")
continue;case R.ATTRIB_VALUE_UNQUOTED:if(">"!==n&&!N(n)){"&"===n?g.state=R.ATTRIB_VALUE_ENTITY_U:g.attribValue+=n;
continue}q(g),">"===n?F(g):g.state=R.ATTRIB;continue;case R.CLOSE_TAG:if(g.tagName)">"===n?M(g):j(E,n
)?g.tagName+=n:g.script?(g.script+="</"+g.tagName,g.tagName="",g.state=R.SCRIPT):(N(n)||L(g,
"Invalid tagname in closing tag"),g.state=R.CLOSE_TAG_SAW_WHITE);else{if(N(n))continue;j(_,n)?g.tagName=n:g.script?(
g.script+="</"+n,g.state=R.SCRIPT):L(g,"Invalid tagname in closing tag.")}continue;case R.CLOSE_TAG_SAW_WHITE:if(N(n)
)continue;">"===n?M(g):L(g,"Invalid characters in closing tag");continue;case R.TEXT_ENTITY:
case R.ATTRIB_VALUE_ENTITY_Q:case R.ATTRIB_VALUE_ENTITY_U:switch(g.state){case R.TEXT_ENTITY:o=R.TEXT,a="textNode";break
case R.ATTRIB_VALUE_ENTITY_Q:o=R.ATTRIB_VALUE_QUOTED,a="attribValue";break;case R.ATTRIB_VALUE_ENTITY_U:
o=R.ATTRIB_VALUE_UNQUOTED,a="attribValue"}";"===n?(g[a]+=(r=l=c=p=void 0,l=(c=(s=g).entity).toLowerCase(),r="",
s.ENTITIES[c]||s.ENTITIES[l]||("#"===(c=l).charAt(0)&&(r="x"===c.charAt(1)?(c=c.slice(2),(p=parseInt(c,16)).toString(16)
):(c=c.slice(1),(p=parseInt(c,10)).toString(10))),c=c.replace(/^0+/,""),isNaN(p)||r.toLowerCase()!==c?(L(s,
"Invalid character entity"),"&"+s.entity+";"):String.fromCodePoint(p))),g.entity="",g.state=o):j(g.entity.length?O:T,n
)?g.entity+=n:(L(g,"Invalid character in entity name"),g[a]+="&"+g.entity+n,g.entity="",g.state=o);continue;default:
throw new Error(g,"Unknown state: "+g.state)}if(g.position>=g.bufferCheckPosition){for(m=g,h=Math.max(
C.MAX_BUFFER_LENGTH,10),v=f=0,x=b.length;v<x;v++){if(h<(u=m[b[v]].length))switch(b[v]){case"textNode":D(m);break;
case"cdata":A(m,"oncdata",m.cdata),m.cdata="";break;case"script":A(m,"onscript",m.script),m.script="";break;default:S(m,
"Max buffer length exceeded: "+b[v])}f=Math.max(f,u)}d=C.MAX_BUFFER_LENGTH-f,m.bufferCheckPosition=d+m.position}return g
},resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){D(this),
""!==this.cdata&&(A(this,"oncdata",this.cdata),this.cdata=""),""!==this.script&&(A(this,"onscript",this.script),
this.script="")}};try{i=require("stream").Stream}catch(e){i=function(){}}for(e in o=C.EVENTS.filter(function(e){
return"error"!==e&&"end"!==e}),(u.prototype=Object.create(i.prototype,{constructor:{value:u}})).write=function(e){var t;
return"function"==typeof Buffer&&"function"==typeof Buffer.isBuffer&&Buffer.isBuffer(e)&&(this._decoder||(
t=jd.default.StringDecoder,this._decoder=new t("utf8")),e=this._decoder.write(e)),this._parser.write(e.toString()),
this.emit("data",e),!0},u.prototype.end=function(e){return e&&e.length&&this.write(e),this._parser.end(),!0},
u.prototype.on=function(t,e){var n=this;return n._parser["on"+t]||-1===o.indexOf(t)||(n._parser["on"+t]=function(){
var e=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),n.emit.apply(n,e)}),
i.prototype.on.call(n,t,e)},y="[CDATA[",w="DOCTYPE",r={xml:a="http://www.w3.org/XML/1998/namespace",
xmlns:s="http://www.w3.org/2000/xmlns/"},
_=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
,
E=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/
,
T=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/
,
O=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/
,R=0,C.STATE={BEGIN:R++,BEGIN_WHITESPACE:R++,TEXT:R++,TEXT_ENTITY:R++,OPEN_WAKA:R++,SGML_DECL:R++,SGML_DECL_QUOTED:R++,
DOCTYPE:R++,DOCTYPE_QUOTED:R++,DOCTYPE_DTD:R++,DOCTYPE_DTD_QUOTED:R++,COMMENT_STARTING:R++,COMMENT:R++,
COMMENT_ENDING:R++,COMMENT_ENDED:R++,CDATA:R++,CDATA_ENDING:R++,CDATA_ENDING_2:R++,PROC_INST:R++,PROC_INST_BODY:R++,
PROC_INST_ENDING:R++,OPEN_TAG:R++,OPEN_TAG_SLASH:R++,ATTRIB:R++,ATTRIB_NAME:R++,ATTRIB_NAME_SAW_WHITE:R++,
ATTRIB_VALUE:R++,ATTRIB_VALUE_QUOTED:R++,ATTRIB_VALUE_CLOSED:R++,ATTRIB_VALUE_UNQUOTED:R++,ATTRIB_VALUE_ENTITY_Q:R++,
ATTRIB_VALUE_ENTITY_U:R++,CLOSE_TAG:R++,CLOSE_TAG_SAW_WHITE:R++,SCRIPT:R++,SCRIPT_ENDING:R++},C.XML_ENTITIES={amp:"&",
gt:">",lt:"<",quot:'"',apos:"'"},C.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,
Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,
Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,
Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,
auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,
ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,
ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,
brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,
acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,
times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,
Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,
Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,
delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,
rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,
ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,
sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,
Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,
alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,
hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,
minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,
sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,
oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,
spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(C.ENTITIES).forEach(function(e){var t="number"==typeof(
t=C.ENTITIES[e])?String.fromCharCode(t):t;C.ENTITIES[e]=t}),C.STATE)C.STATE[C.STATE[e]]=e;R=C.STATE,
String.fromCodePoint||(c=String.fromCharCode,p=Math.floor,t=function(){var e,t,n=[],i=-1,o=arguments.length;if(!o
)return"";for(e="";++i<o;){if(t=Number(arguments[i]),!isFinite(t)||t<0||1114111<t||p(t)!==t)throw RangeError(
"Invalid code point: "+t);t<=65535?n.push(t):(t-=65536,n.push(55296+(t>>10),t%1024+56320)),(i+1===o||16384<n.length)&&(
e+=c.apply(null,n),n.length=0)}return e},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:t,
configurable:!0,writable:!0}):String.fromCodePoint=t)}return jl}(),l=Ad.default;Il||(Il=1,function(){
Dl.stripBOM=function(e){return"\ufeff"===e[0]?e.substring(1):e}}.call(P)),s=Dl,c=Ot(),p=Dd.default.setImmediate,r=et(
).defaults,d=function(e){return"object"==typeof e&&null!=e&&0===Object.keys(e).length},m=function(e,t,n){for(var i=0,
o=e.length;i<o;i++)t=(0,e[i])(t,n);return t},u.Parser=function(){function e(e){var t,n,i;if(this.parseStringPromise=a(
this.parseStringPromise,this),this.parseString=a(this.parseString,this),this.reset=a(this.reset,this),
this.assignOrPush=a(this.assignOrPush,this),this.processAsync=a(this.processAsync,this),!(this instanceof u.Parser)
)return new u.Parser(e);for(t in this.options={},n=r[.2])h.call(n,t)&&(i=n[t],this.options[t]=i);for(t in e)h.call(e,t
)&&(i=e[t],this.options[t]=i);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),
this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),
this.options.tagNameProcessors.unshift(c.normalize)),this.reset()}function t(){this.constructor=i}var n,i=e,o=l;for(
n in o)h.call(o,n)&&(i[n]=o[n]);return t.prototype=o.prototype,i.prototype=new t,i.__super__=o.prototype,
e.prototype.processAsync=function(){var t;try{return this.remaining.length<=this.options.chunkSize?(t=this.remaining,
this.remaining="",this.saxParser=this.saxParser.write(t),this.saxParser.close()):(t=this.remaining.substr(0,
this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),
this.saxParser=this.saxParser.write(t),p(this.processAsync))}catch(e){if(t=e,!this.saxParser.errThrown
)return this.saxParser.errThrown=!0,this.emit(t)}},e.prototype.assignOrPush=function(e,t,n){return t in e?(e[t
]instanceof Array||(e[t]=[e[t]]),e[t].push(n)):this.options.explicitArray?e[t]=[n]:e[t]=n},e.prototype.reset=function(){
var s,p,t,l,n,e,r,u,i;return this.removeAllListeners(),this.saxParser=f.parser(this.options.strict,{trim:!1,
normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(n=this,function(e){if(
n.saxParser.resume(),!n.saxParser.errThrown)return n.saxParser.errThrown=!0,n.emit("error",e)}),this.saxParser.onend=(
e=this,function(){if(!e.saxParser.ended)return e.saxParser.ended=!0,e.emit("end",e.resultObject)}),
this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,l=[],
s=this.options.attrkey,p=this.options.charkey,this.saxParser.onopentag=(r=this,function(e){var t,n,i,o,a={};if(a[p]="",
!r.options.ignoreAttrs)for(t in o=e.attributes)h.call(o,t)&&(s in a||r.options.mergeAttrs||(a[s]={}),
n=r.options.attrValueProcessors?m(r.options.attrValueProcessors,e.attributes[t],t):e.attributes[t],
i=r.options.attrNameProcessors?m(r.options.attrNameProcessors,t):t,r.options.mergeAttrs?r.assignOrPush(a,i,n):a[s][i]=n)
return a["#name"]=r.options.tagNameProcessors?m(r.options.tagNameProcessors,e.name):e.name,r.options.xmlns&&(a[
r.options.xmlnskey]={uri:e.uri,local:e.local}),l.push(a)}),this.saxParser.onclosetag=(u=this,function(){var e,t,i,n,o,a,
s,r=l.pop(),c=r["#name"];if(u.options.explicitChildren&&u.options.preserveChildrenOrder||delete r["#name"],
!0===r.cdata&&(o=r.cdata,delete r.cdata),a=l[l.length-1],r[p].match(/^\s*$/)&&!o?(e=r[p],delete r[p]):(u.options.trim&&(
r[p]=r[p].trim()),u.options.normalize&&(r[p]=r[p].replace(/\s{2,}/g," ").trim()),r[p]=u.options.valueProcessors?m(
u.options.valueProcessors,r[p],c):r[p],1===Object.keys(r).length&&p in r&&!u.EXPLICIT_CHARKEY&&(r=r[p])),d(r)&&(
r=""!==u.options.emptyTag?u.options.emptyTag:e),null!=u.options.validator&&(s="/"+function(){for(var e=[],t=0,
n=l.length;t<n;t++)i=l[t],e.push(i["#name"]);return e}().concat(c).join("/"),function(){try{r=u.options.validator(s,
a&&a[c],r)}catch(e){return u.emit("error",e)}}()),u.options.explicitChildren&&!u.options.mergeAttrs&&"object"==typeof r
)if(u.options.preserveChildrenOrder){if(a){for(t in a[u.options.childkey]=a[u.options.childkey]||[],n={},r)h.call(r,t
)&&(n[t]=r[t]);a[u.options.childkey].push(n),delete r["#name"],1===Object.keys(r).length&&p in r&&!u.EXPLICIT_CHARKEY&&(
r=r[p])}}else i={},u.options.attrkey in r&&(i[u.options.attrkey]=r[u.options.attrkey],delete r[u.options.attrkey]),
!u.options.charsAsChildren&&u.options.charkey in r&&(i[u.options.charkey]=r[u.options.charkey],delete r[
u.options.charkey]),0<Object.getOwnPropertyNames(r).length&&(i[u.options.childkey]=r),r=i;
return 0<l.length?u.assignOrPush(a,c,r):(u.options.explicitRoot&&(o=r,(r={})[c]=o),u.resultObject=r,u.saxParser.ended=!0
,u.emit("end",u.resultObject))}),(i=this).saxParser.ontext=t=function(e){var t,n=l[l.length-1];if(n)return n[p]+=e,
i.options.explicitChildren&&i.options.preserveChildrenOrder&&i.options.charsAsChildren&&(
i.options.includeWhiteChars||""!==e.replace(/\\n/g,"").trim())&&(n[i.options.childkey]=n[i.options.childkey]||[],(t={
"#name":"__text__"})[p]=e,i.options.normalize&&(t[p]=t[p].replace(/\s{2,}/g," ").trim()),n[i.options.childkey].push(t)),
n},this.saxParser.oncdata=function(e){if(e=t(e))return e.cdata=!0}},e.prototype.parseString=function(t,n){
null!=n&&"function"==typeof n&&(this.on("end",function(e){return this.reset(),n(null,e)}),this.on("error",function(e){
return this.reset(),n(e)}));try{return""===(t=t.toString()).trim()?(this.emit("end",null),!0):(t=s.stripBOM(t),
this.options.async?(this.remaining=t,p(this.processAsync),this.saxParser):this.saxParser.write(t).close())}catch(e){if(
t=e,!this.saxParser.errThrown&&!this.saxParser.ended)return this.emit("error",t),this.saxParser.errThrown=!0;if(
this.saxParser.ended)throw t}},e.prototype.parseStringPromise=function(e){return new Promise((t=this,function(n,i){
return t.parseString(e,function(e,t){return e?i(e):n(t)})}));var t},e}(),u.parseString=function(e,t,n){var i,o;
return null!=n?("function"==typeof n&&(i=n),"object"==typeof t&&(o=t)):("function"==typeof t&&(i=t),o={}),new u.Parser(o
).parseString(e,i)},u.parseStringPromise=function(e,t){var n;return new u.Parser(n="object"==typeof t?t:n
).parseStringPromise(e)}}.call(P)),Pl),i=Ot();dp.defaults=e.defaults,dp.processors=i,dp.ValidationError=function(e){
function t(e){this.message=e}function n(){this.constructor=o}var i,o=t,a=e;for(i in a)s.call(a,i)&&(o[i]=a[i]);
return n.prototype=a.prototype,o.prototype=new n,o.__super__=a.prototype,t}(Error),dp.Builder=t.Builder,
dp.Parser=n.Parser,dp.parseString=n.parseString,dp.parseStringPromise=n.parseStringPromise}.call(P);{async function Om(
){var e=await Cm(await Rm("http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml"));if(1!==e.length
)throw new Error("Expected result to contain one single entry, but got "+e.length);return e[0]}async function Rm(e){
return(await jm.default.get(e)).data}async function Cm(e){var t,n,i;const o=[];if("object"!=typeof(e=(
await Am.default.parseStringPromise(e))["gesmes:Envelope"].Cube[0].Cube))throw new Error(
"Result data does not have the expected structure");for(const a of e){Nm(t=null==(t=null===a||void 0===a?void 0:a.$
)?void 0:t.time,"time");const s={};for(const r of a.Cube)Nm(n=r.$.currency,"curency"),Nm(i=r.$.rate,"rate"),
i=parseFloat(i),s[n]=i;o.push({time:t,rates:s})}return o}function Nm(e,t){if("string"!=typeof e)throw new Error(
`Expected ${t} to be a string`)}R=(Kl=_r).exports,md=P&&P.__importDefault||function(e){return e&&e.__esModule?e:{
default:e}},Object.defineProperty(R,"__esModule",{value:!0}),R.fetchHistoric90d=R.fetchHistoric=R.fetch=void 0;
const jm=md(x.exports),Am=md(dp);R.fetch=Om,R.fetchHistoric=async function(){return Cm(await Rm(
"https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist.xml"))},R.fetchHistoric90d=async function(){return Cm(
await Rm("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml"))},require.main===Kl&&(async()=>{
var e=await Om();console.log(JSON.stringify(e,null,2))})().catch(()=>process.exit(1))}Bd.initEnvFromDefaultFiles(),
j.setLogLevel(Zl);const Pm=j.createLogger("main");!async function(e=[]){var t;try{rm.setLogLevel(l.INFO),hm.setLogLevel(
l.INFO),tm.setLogLevel(l.INFO),xm.setLogLevel(l.INFO),Pm.debug("Loglevel as "+j.getLogLevelString());var{scriptName:i,
parseStatus:o,exitStatus:a,errorString:s}=class{static parseArguments(e,t=[]){var n,i,o,a=null!=(n=t.shift())?n:"",
s=null!=(n=t.shift())?n:"";if(!s)return{parseStatus:gr.ERROR,exitStatus:3,nodePath:a,scriptName:e,freeArgs:[],
extraArgs:[]};if(0===t.length)return{parseStatus:gr.ERROR,exitStatus:3,nodePath:a,scriptName:s,freeArgs:[],extraArgs:[]}
let r=!0,c=[],p=[];do{if(o=null!=(i=t.shift())?i:"",r)switch(function(){switch(o){case"-h":case"--help":case 0:return 0;
case"-v":case"--version":case 1:return 1;case"--":case 2:return 2}}()){case 0:return{parseStatus:gr.HELP,exitStatus:0,
nodePath:a,scriptName:s,freeArgs:c,extraArgs:p};case 1:return{parseStatus:gr.VERSION,exitStatus:0,nodePath:a,
scriptName:s,freeArgs:c,extraArgs:p};case 2:r=!1;break;default:if(r){if(rr(o,"-"))return{
errorString:"Unknown argument: "+o,parseStatus:gr.ERROR,exitStatus:4,nodePath:a,scriptName:s,freeArgs:c,extraArgs:p};
c.push(o)}else p.push(o)}}while(1<=t.length);return{parseStatus:gr.OK,exitStatus:0,nodePath:a,scriptName:s,freeArgs:c,
extraArgs:p}}}.parseArguments(zd,e);if(o===gr.HELP||o===gr.VERSION)return console.log(
`USAGE: ${i} [OPT(s)] ARG(1) [...ARG(N)]

  HG Oy backend.
  
...and OPT is one of:

    -h --help          Print help
    -v --version       Print version
    --                 Disables option parsing

  Environment variables:

    BACKEND_LOG_LEVEL as one of:
    
      ALL
      DEBUG
      INFO
      WARN
      ERROR
      NONE
`),a;if(s)return console.error("ERROR: "+s),a;const r=new Tm(()=>class{static async fetchEuroRates(){var e=(
t=await _r.exports.fetch()).rates.USD,t=t.rates.GBP;return{[wr.EUR]:1,[wr.USD]:e,[wr.GBP]:t}}}.fetchEuroRates()),c=(
await r.initialize(),wm.setCurrencyService(r),new xm(Vd));c.attachController(wm),c.start();let n=void 0;
return t=new Promise((e,t)=>{try{Pm.debug("Stopping server from RequestServer stop event"),n=c.on(xm.Event.STOPPED,()=>{
n=void 0,e()})}catch(e){t(e)}}),Bd.setupDestroyHandler(()=>{Pm.debug("Stopping server from process utils event"),c.stop(
),n&&(n(),n=void 0)},e=>{Pm.error("Error while shutting down the service: ",e)}),await t,0}catch(e){return Pm.error(
"Fatal error: ",e),6}}(process.argv).then(e=>{process.exit(e)}).catch(e=>{console.error("Error: ",e),process.exit(1)});
