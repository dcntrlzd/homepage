!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(t,r,i){for(var c,u,a=0,f=[];a<t.length;a++)u=t[a],o[u]&&f.push(o[u][0]),o[u]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);for(n&&n(t,r,i);f.length;)f.shift()()};var r={},o={2:0};t.e=function(e){function n(){u.onerror=u.onload=null,clearTimeout(a);var t=o[e];0!==t&&(t&&t[1](new Error("Loading chunk "+e+" failed.")),o[e]=void 0)}var r=o[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var i=new Promise(function(t,n){r=o[e]=[t,n]});r[2]=i;var c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.type="text/javascript",u.charset="utf-8",u.async=!0,u.timeout=12e4,t.nc&&u.setAttribute("nonce",t.nc),u.src=t.p+""+({0:"ngraph",1:"ethers"}[e]||e)+"."+{0:"b4826c01ae931e377cf5",1:"6489ccc5c4b15417e23f"}[e]+".js";var a=setTimeout(n,12e4);return u.onerror=u.onload=n,c.appendChild(u),i},t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t.oe=function(e){throw console.error(e),e},t(t.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(l===clearTimeout)return clearTimeout(e);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(e);try{return l(e)}catch(t){try{return l.call(null,e)}catch(t){return l.call(this,e)}}}function c(){p&&h&&(p=!1,h.length?m=h.concat(m):v=-1,m.length&&u())}function u(){if(!p){var e=o(c);p=!0;for(var t=m.length;t;){for(h=m,m=[];++v<t;)h&&h[v].run();v=-1,t=m.length}h=null,p=!1,i(e)}}function a(e,t){this.fun=e,this.array=t}function f(){}var s,l,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(e){l=r}}();var h,m=[],p=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new a(e,t)),1!==m.length||p||o(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.prependListener=f,d.prependOnceListener=f,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var o=Function.prototype.apply;t.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(5),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){"use strict";var r=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();n(4),n(6);var o=void 0,i=void 0,c=void 0,u=15e3,a=.2*u;(function(){return Promise.all([n.e(1).then(n.bind(null,7)),n.e(0).then(n.bind(null,8)),n.e(0).then(n.bind(null,9))])})().then(function(e){function t(){m.getBlock(c>=i?"latest":c).then(function(e){var t=e.number,n=e.transactions;return c=t,Promise.all(n.map(function(e){return m.getTransaction(e)}))}).then(function(e){var n='<a href="https://etherscan.io/txs?block='+c+'" target="_blank">#'+c+"</a>",r=c!==o?"#"+o+" -> "+n:""+n;if(document.querySelector(".counter").innerHTML="ETHEREUM BLOCK "+r+"</a>",c+=1,p.beginUpdate(),e.forEach(function(e){if(e){var t=e.from,n=e.to,r=e.contractAddress,o=t||r,i=n||r;if(o&&i){var c=[o,i,{}];p.addLink.apply(p,c)}}}),p.endUpdate(),!v&&p.getLinksCount()>0){l(p,{clearColor:3355443,autoFit:!0,container:document.getElementById("graph"),is3d:!0,link:function(){return{fromColor:6710886,toColor:6710886}},node:function(){return{color:6710886,size:10}}});v=!0}var f=c>=i?u:a;setTimeout(t,f)})}var n=r(e,3),f=n[0],s=n[1],l=n[2],d=f.providers,h=d.networks.mainnet,m=new d.InfuraProvider(h),p=s(),v=!1;m.getBlockNumber().then(function(e){i=e,o=i-Math.floor(3e5/u),c=o,t()})})},function(e,t,n){(function(t){!function(n){function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function c(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?u:a)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void a(t.promise,e)}u(t.promise,r)})}function u(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void f(e);if("function"==typeof n)return void l(o(n,t),e)}e._state=1,e._value=t,f(e)}catch(t){a(e,t)}}function a(e,t){e._state=2,e._value=t,f(e)}function f(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e(function(e){n||(n=!0,u(t,e))},function(e){n||(n=!0,a(t,e))})}catch(e){if(n)return;n=!0,a(t,e)}}var d=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return c(this,new s(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(i,c){try{if(c&&("object"==typeof c||"function"==typeof c)){var u=c.then;if("function"==typeof u)return void u.call(c,function(e){r(i,e)},n)}t[i]=c,0==--o&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){d(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},void 0!==e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return f[a]=r,u(a),a++}function o(e){delete f[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function c(e){if(s)setTimeout(c,0,e);else{var t=f[e];if(t){s=!0;try{i(t)}finally{o(e),s=!1}}}}if(!e.setImmediate){var u,a=1,f={},s=!1,l=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?function(){u=function(e){t.nextTick(function(){c(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&c(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),u=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){c(e.data)},u=function(t){e.port2.postMessage(t)}}():l&&"onreadystatechange"in l.createElement("script")?function(){var e=l.documentElement;u=function(t){var n=l.createElement("script");n.onreadystatechange=function(){c(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){u=function(e){setTimeout(c,0,e)}}(),d.setImmediate=r,d.clearImmediate=o}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(0),n(1))},function(e,t){}]);
