!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}u((o=o.apply(t,e||[])).next())}))},r=this&&this.__generator||function(t,e){var n,o,r,i,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,o=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){s.label=i[1];break}if(6===i[0]&&s.label<r[1]){s.label=r[1],r=i;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(i);break}r[2]&&s.ops.pop(),s.trys.pop();continue}i=e.call(t,s)}catch(t){i=[6,t],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var s=i(n(1)),a=i(n(6)),u=i(n(9)),c=function(){function t(t){this.activeFrameIndex=0,this.reqId=0,this.loop=0,this.loopCount=1,this.aniStop=!0,this.stopHack=function(){},this.onEnd=function(){},this.onLoad=function(){},this.onLoop=function(){},this.init(t)}return t.prototype.init=function(t){var e=this,n=t.canvas,i=t.frames,u=t.imageUrl,c=t.fps,l=void 0===c?24:c,f=t.loop,p=void 0!==f&&f,h=t.autoPlay,d=void 0!==h&&h;if(n.hasAttribute("data-cs-id"))throw new Error("the canvas has sprite with it, call .destroy() first");n.setAttribute("data-cs-id","cs-"+Date.now()),this.canvas=n,this.context=n.getContext("2d"),this.frames=i,this.fps=l,this.loop=!0===p?-1:p||0;var v,y=(v=u,new Promise((function(t,e){return o(void 0,void 0,void 0,(function(){var n,o;return r(this,(function(r){switch(r.label){case 0:return[4,a.default(v)];case 1:return n=r.sent(),o=new Image,s.default(n)&&(o.crossOrigin="anonymous"),o.onload=function(){t(o)},o.onerror=function(){console.error(v),e(Error("load "+v+" error"))},o.src=n,[2]}}))}))})));this.spriteImgPromise=y,d&&this.play(),y.then((function(t){var o=t.width/i,r=t.height;n.width=o,n.height=r,e.draw(),e.onLoad()}))},t.prototype.addActiveFrameIndex=function(){var t=this,e=t.loop,n=t.loopCount,o=t.frames,r=t.activeFrameIndex;t.reqId;r<o?this.activeFrameIndex+=1:-1!==e&&e<=n?(this.stop(),this.onEnd()):(this.onLoop(this.loopCount),this.loopCount+=1,this.activeFrameIndex=0)},t.prototype.spriteAnimate=function(t){return void 0===t&&(t=Date.now()),o(this,void 0,void 0,(function(){var e,n,o;return r(this,(function(r){switch(r.label){case 0:return this.aniStop?[2,this.stopHack()]:(e=Date.now(),n=e-t,o=1e3/this.fps,n>=o?(t=e-n%o,this.addActiveFrameIndex(),[4,this.draw()]):[3,2]);case 1:r.sent(),r.label=2;case 2:return this.reqId=requestAnimationFrame(this.spriteAnimate.bind(this,t)),[2]}}))}))},t.prototype.draw=function(){return o(this,void 0,void 0,(function(){var t,e,n,o,i,s,a,u;return r(this,(function(r){switch(r.label){case 0:return e=(t=this).context,n=t.frames,o=t.spriteImgPromise,(i=t.activeFrameIndex)>=n?[2]:[4,o];case 1:return s=r.sent(),a=s.width,u=s.height,e.clearRect(0,0,a,u),e.drawImage(s,i*a/n,0,a/n,u,0,0,a/n,u),[2]}}))}))},t.prototype.play=function(){this.aniStop&&(this.aniStop=!1,this.spriteAnimate(),this.stopHack=u.default())},t.prototype.pause=function(){this.aniStop=!0},t.prototype.stop=function(){var t=this;this.aniStop=!0,setTimeout((function(){t.activeFrameIndex=0,t.draw()}),32)},t.prototype.destroy=function(){var t=this.canvas,e=t.width,n=t.height;this.aniStop=!0,this.context.clearRect(0,0,e,n),this.canvas.removeAttribute("data-cs-id"),this.reqId=0,this.loopCount=1},t.prototype.reset=function(t){var e=this;this.destroy(),setTimeout((function(){e.init(t)}),32)},t}();e.default=c},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2));e.default=function(t){return!/^data:/.test(t)&&new r.default(t).origin!==window.location.origin}},function(t,e,n){"use strict";(function(e){var o=n(4),r=n(5),i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,s=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,a=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function u(t){return(t||"").toString().replace(a,"")}var c=[["#","hash"],["?","query"],function(t){return t.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1};function f(t){var n,o=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},r={},s=typeof(t=t||o);if("blob:"===t.protocol)r=new h(unescape(t.pathname),{});else if("string"===s)for(n in r=new h(t,{}),l)delete r[n];else if("object"===s){for(n in t)n in l||(r[n]=t[n]);void 0===r.slashes&&(r.slashes=i.test(t.href))}return r}function p(t){t=u(t);var e=s.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function h(t,e,n){if(t=u(t),!(this instanceof h))return new h(t,e,n);var i,s,a,l,d,v,y=c.slice(),m=typeof e,w=this,b=0;for("object"!==m&&"string"!==m&&(n=e,e=null),n&&"function"!=typeof n&&(n=r.parse),e=f(e),i=!(s=p(t||"")).protocol&&!s.slashes,w.slashes=s.slashes||i&&e.slashes,w.protocol=s.protocol||e.protocol||"",t=s.rest,s.slashes||(y[3]=[/(.*)/,"pathname"]);b<y.length;b++)"function"!=typeof(l=y[b])?(a=l[0],v=l[1],a!=a?w[v]=t:"string"==typeof a?~(d=t.indexOf(a))&&("number"==typeof l[2]?(w[v]=t.slice(0,d),t=t.slice(d+l[2])):(w[v]=t.slice(d),t=t.slice(0,d))):(d=a.exec(t))&&(w[v]=d[1],t=t.slice(0,d.index)),w[v]=w[v]||i&&l[3]&&e[v]||"",l[4]&&(w[v]=w[v].toLowerCase())):t=l(t);n&&(w.query=n(w.query)),i&&e.slashes&&"/"!==w.pathname.charAt(0)&&(""!==w.pathname||""!==e.pathname)&&(w.pathname=function(t,e){if(""===t)return e;for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),o=n.length,r=n[o-1],i=!1,s=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),s++):s&&(0===o&&(i=!0),n.splice(o,1),s--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}(w.pathname,e.pathname)),o(w.port,w.protocol)||(w.host=w.hostname,w.port=""),w.username=w.password="",w.auth&&(l=w.auth.split(":"),w.username=l[0]||"",w.password=l[1]||""),w.origin=w.protocol&&w.host&&"file:"!==w.protocol?w.protocol+"//"+w.host:"null",w.href=w.toString()}h.prototype={set:function(t,e,n){var i=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||r.parse)(e)),i[t]=e;break;case"port":i[t]=e,o(e,i.protocol)?e&&(i.host=i.hostname+":"+e):(i.host=i.hostname,i[t]="");break;case"hostname":i[t]=e,i.port&&(e+=":"+i.port),i.host=e;break;case"host":i[t]=e,/:\d+$/.test(e)?(e=e.split(":"),i.port=e.pop(),i.hostname=e.join(":")):(i.hostname=e,i.port="");break;case"protocol":i.protocol=e.toLowerCase(),i.slashes=!n;break;case"pathname":case"hash":if(e){var s="pathname"===t?"/":"#";i[t]=e.charAt(0)!==s?s+e:e}else i[t]=e;break;default:i[t]=e}for(var a=0;a<c.length;a++){var u=c[a];u[4]&&(i[u[1]]=i[u[1]].toLowerCase())}return i.origin=i.protocol&&i.host&&"file:"!==i.protocol?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(t){t&&"function"==typeof t||(t=r.stringify);var e,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var i=o+(n.slashes?"//":"");return n.username&&(i+=n.username,n.password&&(i+=":"+n.password),i+="@"),i+=n.host+n.pathname,(e="object"==typeof n.query?t(n.query):n.query)&&(i+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(i+=n.hash),i}},h.extractProtocol=p,h.location=f,h.trimLeft=u,h.qs=r,t.exports=h}).call(this,n(3))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";t.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},function(t,e,n){"use strict";var o,r=Object.prototype.hasOwnProperty;function i(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(t){return null}}e.stringify=function(t,e){e=e||"";var n,i,s=[];for(i in"string"!=typeof e&&(e="?"),t)if(r.call(t,i)){if((n=t[i])||null!==n&&n!==o&&!isNaN(n)||(n=""),i=encodeURIComponent(i),n=encodeURIComponent(n),null===i||null===n)continue;s.push(i+"="+n)}return s.length?e+s.join("&"):""},e.parse=function(t){for(var e,n=/([^=?&]+)=?([^&]*)/g,o={};e=n.exec(t);){var r=i(e[1]),s=i(e[2]);null===r||null===s||r in o||(o[r]=s)}return o}},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(7)),i=o(n(8));e.default=function(t){var e=r.default.get(t);if(e)return e;var n=i.default(t).then((function(t){return t.result}));return r.default.set(t,n),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={},r={get:function(t){return o[t]},set:function(t,e){return o[t]=e,{key:t,value:e}},delete:function(t){delete o[t]},clear:function(){o={}}};e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return new Promise((function(e,n){var o=new XMLHttpRequest;o.onload=function(){var r=new FileReader;r.onload=function(n){var o;e({url:t,result:null===(o=n.target)||void 0===o?void 0:o.result})},r.onerror=function(){n(Error("read "+t+" error"))},r.readAsDataURL(o.response)},o.onerror=function(){n(Error("fetch "+t+" error"))},o.responseType="blob",o.open("GET",t),o.send()}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=[],r=["12","13"],i=0;e.default=function(){var t,e;if(!r.includes((null===(e=navigator.userAgent.match(/iPhone OS ([\d_]+)/),t=e?e[1].replace(/_/g,"."):null)||void 0===t?void 0:t.split(".")[0])||""))return function(){};var n=document.getElementById("___HACK_SWAP_PROCESSES_DIV"),s=o.length;n||((n=document.createElement("div")).id="___HACK_SWAP_PROCESSES_DIV",n.setAttribute("style","position:absolute;left:0;top:0;opacity:0;pointer-events:none;"),document.body.append(n));var a=function(){o.every((function(t){return t}))||(i^=1,n&&(n.innerHTML=""+i),window.requestAnimationFrame(a))};return o.some((function(t){return!t}))?o[s]=!1:(o[s]=!1,a()),function(){o[s]=!0}}}]).default}));