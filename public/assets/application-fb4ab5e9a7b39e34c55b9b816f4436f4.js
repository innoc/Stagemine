!function(e,t){function n(e,n,r){if(r===t&&1===e.nodeType)if(r=e.getAttribute("data-"+n),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:y.isNaN(r)?b.test(r)?y.parseJSON(r):r:parseFloat(r)}catch(i){}y.data(e,n,r)}else r=t;return r}function r(){return!1}function i(){return!0}function o(e,t,n){return n[0].type=e,y.event.handle.apply(t,n)}function a(e){var t,n,r,i,o,a,s,l,u,c,f,d=[];if(i=[],o=y.data(this,this.nodeType?"events":"__events__"),"function"==typeof o&&(o=o.events),e.liveFired!==this&&o&&o.live&&(!e.button||"click"!==e.type)){e.namespace&&(f=RegExp("(^|\\.)"+e.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),e.liveFired=this;var p=o.live.slice(0);for(s=0;s<p.length;s++)o=p[s],o.origType.replace(F,"")===e.type?i.push(o.selector):p.splice(s--,1);for(i=y(e.target).closest(i,e.currentTarget),l=0,u=i.length;u>l;l++)for(c=i[l],s=0;s<p.length;s++)o=p[s],c.selector!==o.selector||f&&!f.test(o.namespace)||(a=c.elem,r=null,("mouseenter"===o.preType||"mouseleave"===o.preType)&&(e.type=o.preType,r=y(e.relatedTarget).closest(o.selector)[0]),r&&r===a||d.push({elem:a,handleObj:o,level:c.level}));for(l=0,u=d.length;u>l&&(i=d[l],!(n&&i.level>n))&&(e.currentTarget=i.elem,e.data=i.handleObj.data,e.handleObj=i.handleObj,f=i.handleObj.origHandler.apply(i.elem,arguments),f!==!1&&!e.isPropagationStopped()||(n=i.level,f===!1&&(t=!1),!e.isImmediatePropagationStopped()));l++);return t}}function s(e,t){return(e&&"*"!==e?e+".":"")+t.replace(j,"`").replace(k,"&")}function l(e,t,n){if(y.isFunction(t))return y.grep(e,function(e,r){return!!t.call(e,r,e)===n});if(t.nodeType)return y.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=y.grep(e,function(e){return 1===e.nodeType});if(R.test(t))return y.filter(t,r,!n);t=y.filter(t,r)}return y.grep(e,function(e){return y.inArray(e,t)>=0===n})}function u(e,t){var n=0;t.each(function(){if(this.nodeName===(e[n]&&e[n].nodeName)){var t=y.data(e[n++]),r=y.data(this,t);if(t=t&&t.events){delete r.handle,r.events={};for(var i in t)for(var o in t[i])y.event.add(this,i,t[i][o],t[i][o].data)}}})}function c(e,t){t.src?y.ajax({url:t.src,async:!1,dataType:"script"}):y.globalEval(t.text||t.textContent||t.innerHTML||""),t.parentNode&&t.parentNode.removeChild(t)}function f(e,t,n){var r="width"===t?e.offsetWidth:e.offsetHeight;return"border"===n?r:(y.each("width"===t?pt:ht,function(){n||(r-=parseFloat(y.css(e,"padding"+this))||0),"margin"===n?r+=parseFloat(y.css(e,"margin"+this))||0:r-=parseFloat(y.css(e,"border"+this+"Width"))||0}),r)}function d(e,t,n,r){y.isArray(t)&&t.length?y.each(t,function(t,i){n||Tt.test(e)?r(e,i):d(e+"["+("object"==typeof i||y.isArray(i)?t:"")+"]",i,n,r)}):n||null==t||"object"!=typeof t?r(e,t):y.isEmptyObject(t)?r(e,""):y.each(t,function(t,i){d(e+"["+t+"]",i,n,r)})}function p(e,t){var n={};return y.each(Ot.concat.apply([],Ot.slice(0,t)),function(){n[this]=e}),n}function h(e){if(!jt[e]){var t=y("<"+e+">").appendTo("body"),n=t.css("display");t.remove(),("none"===n||""===n)&&(n="block"),jt[e]=n}return jt[e]}function m(e){return y.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var g=e.document,y=function(){function n(){if(!o.isReady){try{g.documentElement.doScroll("left")}catch(e){return void setTimeout(n,1)}o.ready()}}var r,i,o=function(e,t){return new o.fn.init(e,t)},a=e.jQuery,s=e.$,l=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,u=/\S/,c=/^\s+/,f=/\s+$/,d=/\W/,p=/\d/,h=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,m=/^[\],:{}\s]*$/,y=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,v=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,b=/(?:^|:|,)(?:\s*\[)+/g,x=/(webkit)[ \/]([\w.]+)/,T=/(opera)(?:.*version)?[ \/]([\w.]+)/,N=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,E=navigator.userAgent,C=!1,S=[],A=Object.prototype.toString,F=Object.prototype.hasOwnProperty,L=Array.prototype.push,j=Array.prototype.slice,k=String.prototype.trim,D=Array.prototype.indexOf,O={};return o.fn=o.prototype={init:function(e,n){var i,a,s;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if("body"===e&&!n&&g.body)return this.context=g,this[0]=g.body,this.selector="body",this.length=1,this;if("string"==typeof e){if(!(i=l.exec(e))||!i[1]&&n)return n||d.test(e)?!n||n.jquery?(n||r).find(e):o(n).find(e):(this.selector=e,this.context=g,e=g.getElementsByTagName(e),o.merge(this,e));if(i[1])return s=n?n.ownerDocument||n:g,(a=h.exec(e))?o.isPlainObject(n)?(e=[g.createElement(a[1])],o.fn.attr.call(e,n,!0)):e=[s.createElement(a[1])]:(a=o.buildFragment([i[1]],[s]),e=(a.cacheable?a.fragment.cloneNode(!0):a.fragment).childNodes),o.merge(this,e);if((a=g.getElementById(i[2]))&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=g,this.selector=e,this}return o.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),o.makeArray(e,this))},selector:"",jquery:"1.4.4",length:0,size:function(){return this.length},toArray:function(){return j.call(this,0)},get:function(e){return null==e?this.toArray():0>e?this.slice(e)[0]:this[e]},pushStack:function(e,t,n){var r=o();return o.isArray(e)?L.apply(r,e):o.merge(r,e),r.prevObject=this,r.context=this.context,"find"===t?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return o.each(this,e,t)},ready:function(e){return o.bindReady(),o.isReady?e.call(g,o):S&&S.push(e),this},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(j.apply(this,arguments),"slice",j.call(arguments).join(","))},map:function(e){return this.pushStack(o.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||o(null)},push:L,sort:[].sort,splice:[].splice},o.fn.init.prototype=o.fn,o.extend=o.fn.extend=function(){var e,n,r,i,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||o.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(e=arguments[l]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(o.isPlainObject(i)||(a=o.isArray(i)))?(a?(a=!1,r=r&&o.isArray(r)?r:[]):r=r&&o.isPlainObject(r)?r:{},s[n]=o.extend(c,r,i)):i!==t&&(s[n]=i));return s},o.extend({noConflict:function(t){return e.$=s,t&&(e.jQuery=a),o},isReady:!1,readyWait:1,ready:function(e){if(e===!0&&o.readyWait--,!o.readyWait||e!==!0&&!o.isReady){if(!g.body)return setTimeout(o.ready,1);if(o.isReady=!0,!(e!==!0&&--o.readyWait>0)&&S){var t=0,n=S;for(S=null;e=n[t++];)e.call(g,o);o.fn.trigger&&o(g).trigger("ready").unbind("ready")}}},bindReady:function(){if(!C){if(C=!0,"complete"===g.readyState)return setTimeout(o.ready,1);if(g.addEventListener)g.addEventListener("DOMContentLoaded",i,!1),e.addEventListener("load",o.ready,!1);else if(g.attachEvent){g.attachEvent("onreadystatechange",i),e.attachEvent("onload",o.ready);var t=!1;try{t=null==e.frameElement}catch(r){}g.documentElement.doScroll&&t&&n()}}},isFunction:function(e){return"function"===o.type(e)},isArray:Array.isArray||function(e){return"array"===o.type(e)},isWindow:function(e){return e&&"object"==typeof e&&"setInterval"in e},isNaN:function(e){return null==e||!p.test(e)||isNaN(e)},type:function(e){return null==e?String(e):O[A.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==o.type(e)||e.nodeType||o.isWindow(e))return!1;if(e.constructor&&!F.call(e,"constructor")&&!F.call(e.constructor.prototype,"isPrototypeOf"))return!1;for(var n in e);return n===t||F.call(e,n)},isEmptyObject:function(e){for(var t in e)return!1;return!0},error:function(e){throw e},parseJSON:function(t){return"string"==typeof t&&t?(t=o.trim(t),m.test(t.replace(y,"@").replace(v,"]").replace(b,""))?e.JSON&&e.JSON.parse?e.JSON.parse(t):new Function("return "+t)():void o.error("Invalid JSON: "+t)):null},noop:function(){},globalEval:function(e){if(e&&u.test(e)){var t=g.getElementsByTagName("head")[0]||g.documentElement,n=g.createElement("script");n.type="text/javascript",o.support.scriptEval?n.appendChild(g.createTextNode(e)):n.text=e,t.insertBefore(n,t.firstChild),t.removeChild(n)}},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,r){var i,a=0,s=e.length,l=s===t||o.isFunction(e);if(r)if(l){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s>a&&n.apply(e[a++],r)!==!1;);else if(l){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(r=e[0];s>a&&n.call(r,a,r)!==!1;r=e[++a]);return e},trim:k?function(e){return null==e?"":k.call(e)}:function(e){return null==e?"":e.toString().replace(c,"").replace(f,"")},makeArray:function(e,t){var n=t||[];if(null!=e){var r=o.type(e);null==e.length||"string"===r||"function"===r||"regexp"===r||o.isWindow(e)?L.call(n,e):o.merge(n,e)}return n},inArray:function(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1},merge:function(e,n){var r=e.length,i=0;if("number"==typeof n.length)for(var o=n.length;o>i;i++)e[r++]=n[i];else for(;n[i]!==t;)e[r++]=n[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[];n=!!n;for(var o=0,a=e.length;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){for(var r,i=[],o=0,a=e.length;a>o;o++)r=t(e[o],o,n),null!=r&&(i[i.length]=r);return i.concat.apply([],i)},guid:1,proxy:function(e,n,r){return 2===arguments.length&&("string"==typeof n?(r=e,e=r[n],n=t):n&&!o.isFunction(n)&&(r=n,n=t)),!n&&e&&(n=function(){return e.apply(r||this,arguments)}),e&&(n.guid=e.guid=e.guid||n.guid||o.guid++),n},access:function(e,n,r,i,a,s){var l=e.length;if("object"==typeof n){for(var u in n)o.access(e,u,n[u],i,a,r);return e}if(r!==t){for(i=!s&&i&&o.isFunction(r),u=0;l>u;u++)a(e[u],n,i?r.call(e[u],u,a(e[u],n)):r,s);return e}return l?a(e[0],n):t},now:function(){return(new Date).getTime()},uaMatch:function(e){return e=e.toLowerCase(),e=x.exec(e)||T.exec(e)||N.exec(e)||e.indexOf("compatible")<0&&w.exec(e)||[],{browser:e[1]||"",version:e[2]||"0"}},browser:{}}),o.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),E=o.uaMatch(E),E.browser&&(o.browser[E.browser]=!0,o.browser.version=E.version),o.browser.webkit&&(o.browser.safari=!0),D&&(o.inArray=function(e,t){return D.call(t,e)}),/\s/.test(" ")||(c=/^[\s\xA0]+/,f=/[\s\xA0]+$/),r=o(g),g.addEventListener?i=function(){g.removeEventListener("DOMContentLoaded",i,!1),o.ready()}:g.attachEvent&&(i=function(){"complete"===g.readyState&&(g.detachEvent("onreadystatechange",i),o.ready())}),e.jQuery=e.$=o}();!function(){y.support={};var t=g.documentElement,n=g.createElement("script"),r=g.createElement("div"),i="script"+y.now();r.style.display="none",r.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var o=r.getElementsByTagName("*"),a=r.getElementsByTagName("a")[0],s=g.createElement("select"),l=s.appendChild(g.createElement("option"));if(o&&o.length&&a){y.support={leadingWhitespace:3===r.firstChild.nodeType,tbody:!r.getElementsByTagName("tbody").length,htmlSerialize:!!r.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:"/a"===a.getAttribute("href"),opacity:/^0.55$/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:"on"===r.getElementsByTagName("input")[0].value,optSelected:l.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,scriptEval:!1,noCloneEvent:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},s.disabled=!0,y.support.optDisabled=!l.disabled,n.type="text/javascript";try{n.appendChild(g.createTextNode("window."+i+"=1;"))}catch(u){}t.insertBefore(n,t.firstChild),e[i]&&(y.support.scriptEval=!0,delete e[i]);try{delete n.test}catch(c){y.support.deleteExpando=!1}t.removeChild(n),r.attachEvent&&r.fireEvent&&(r.attachEvent("onclick",function f(){y.support.noCloneEvent=!1,r.detachEvent("onclick",f)}),r.cloneNode(!0).fireEvent("onclick")),r=g.createElement("div"),r.innerHTML="<input type='radio' name='radiotest' checked='checked'/>",t=g.createDocumentFragment(),t.appendChild(r.firstChild),y.support.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,y(function(){var e=g.createElement("div");e.style.width=e.style.paddingLeft="1px",g.body.appendChild(e),y.boxModel=y.support.boxModel=2===e.offsetWidth,"zoom"in e.style&&(e.style.display="inline",e.style.zoom=1,y.support.inlineBlockNeedsLayout=2===e.offsetWidth,e.style.display="",e.innerHTML="<div style='width:4px;'></div>",y.support.shrinkWrapBlocks=2!==e.offsetWidth),e.innerHTML="<table><tr><td style='padding:0;display:none'></td><td>t</td></tr></table>";var t=e.getElementsByTagName("td");y.support.reliableHiddenOffsets=0===t[0].offsetHeight,t[0].style.display="",t[1].style.display="none",y.support.reliableHiddenOffsets=y.support.reliableHiddenOffsets&&0===t[0].offsetHeight,e.innerHTML="",g.body.removeChild(e).style.display="none"}),t=function(e){var t=g.createElement("div");e="on"+e;var n=e in t;return n||(t.setAttribute(e,"return;"),n="function"==typeof t[e]),n},y.support.submitBubbles=t("submit"),y.support.changeBubbles=t("change"),t=n=r=o=a=null}}();var v={},b=/^(?:\{.*\}|\[.*\])$/;y.extend({cache:{},uuid:0,expando:"jQuery"+y.now(),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},data:function(n,r,i){if(y.acceptData(n)){n=n==e?v:n;var o=n.nodeType,a=o?n[y.expando]:null,s=y.cache;if(!o||a||"string"!=typeof r||i!==t)return o?a||(n[y.expando]=a=++y.uuid):s=n,"object"==typeof r?o?s[a]=y.extend(s[a],r):y.extend(s,r):o&&!s[a]&&(s[a]={}),n=o?s[a]:s,i!==t&&(n[r]=i),"string"==typeof r?n[r]:n}},removeData:function(t,n){if(y.acceptData(t)){t=t==e?v:t;var r=t.nodeType,i=r?t[y.expando]:t,o=y.cache,a=r?o[i]:i;if(n)a&&(delete a[n],r&&y.isEmptyObject(a)&&y.removeData(t));else if(r&&y.support.deleteExpando)delete t[y.expando];else if(t.removeAttribute)t.removeAttribute(y.expando);else if(r)delete o[i];else for(var s in t)delete t[s]}},acceptData:function(e){if(e.nodeName){var t=y.noData[e.nodeName.toLowerCase()];if(t)return!(t===!0||e.getAttribute("classid")!==t)}return!0}}),y.fn.extend({data:function(e,r){var i=null;if("undefined"==typeof e){if(this.length){var o,a=this[0].attributes;i=y.data(this[0]);for(var s=0,l=a.length;l>s;s++)o=a[s].name,0===o.indexOf("data-")&&(o=o.substr(5),n(this[0],o,i[o]))}return i}if("object"==typeof e)return this.each(function(){y.data(this,e)});var u=e.split(".");return u[1]=u[1]?"."+u[1]:"",r===t?(i=this.triggerHandler("getData"+u[1]+"!",[u[0]]),i===t&&this.length&&(i=y.data(this[0],e),i=n(this[0],e,i)),i===t&&u[1]?this.data(u[0]):i):this.each(function(){var t=y(this),n=[u[0],r];t.triggerHandler("setData"+u[1]+"!",n),y.data(this,e,r),t.triggerHandler("changeData"+u[1]+"!",n)})},removeData:function(e){return this.each(function(){y.removeData(this,e)})}}),y.extend({queue:function(e,t,n){if(e){t=(t||"fx")+"queue";var r=y.data(e,t);return n?(!r||y.isArray(n)?r=y.data(e,t,y.makeArray(n)):r.push(n),r):r||[]}},dequeue:function(e,t){t=t||"fx";var n=y.queue(e,t),r=n.shift();"inprogress"===r&&(r=n.shift()),r&&("fx"===t&&n.unshift("inprogress"),r.call(e,function(){y.dequeue(e,t)}))}}),y.fn.extend({queue:function(e,n){return"string"!=typeof e&&(n=e,e="fx"),n===t?y.queue(this[0],e):this.each(function(){var t=y.queue(this,e,n);"fx"===e&&"inprogress"!==t[0]&&y.dequeue(this,e)})},dequeue:function(e){return this.each(function(){y.dequeue(this,e)})},delay:function(e,t){return e=y.fx?y.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(){var n=this;setTimeout(function(){y.dequeue(n,t)},e)})},clearQueue:function(e){return this.queue(e||"fx",[])}});var x=/[\n\t]/g,T=/\s+/,N=/\r/g,w=/^(?:href|src|style)$/,E=/^(?:button|input)$/i,C=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea)?$/i,A=/^(?:radio|checkbox)$/i;y.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},y.fn.extend({attr:function(e,t){return y.access(this,e,t,!0,y.attr)},removeAttr:function(e){return this.each(function(){y.attr(this,e,""),1===this.nodeType&&this.removeAttribute(e)})},addClass:function(e){if(y.isFunction(e))return this.each(function(t){var n=y(this);n.addClass(e.call(this,t,n.attr("class")))});if(e&&"string"==typeof e)for(var t=(e||"").split(T),n=0,r=this.length;r>n;n++){var i=this[n];if(1===i.nodeType)if(i.className){for(var o=" "+i.className+" ",a=i.className,s=0,l=t.length;l>s;s++)o.indexOf(" "+t[s]+" ")<0&&(a+=" "+t[s]);i.className=y.trim(a)}else i.className=e}return this},removeClass:function(e){if(y.isFunction(e))return this.each(function(t){var n=y(this);n.removeClass(e.call(this,t,n.attr("class")))});if(e&&"string"==typeof e||e===t)for(var n=(e||"").split(T),r=0,i=this.length;i>r;r++){var o=this[r];if(1===o.nodeType&&o.className)if(e){for(var a=(" "+o.className+" ").replace(x," "),s=0,l=n.length;l>s;s++)a=a.replace(" "+n[s]+" "," ");o.className=y.trim(a)}else o.className=""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return this.each(y.isFunction(e)?function(n){var r=y(this);r.toggleClass(e.call(this,n,r.attr("class"),t),t)}:function(){if("string"===n)for(var i,o=0,a=y(this),s=t,l=e.split(T);i=l[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&y.data(this,"__className__",this.className),this.className=this.className||e===!1?"":y.data(this,"__className__")||"")})},hasClass:function(e){e=" "+e+" ";for(var t=0,n=this.length;n>t;t++)if((" "+this[t].className+" ").replace(x," ").indexOf(e)>-1)return!0;return!1},val:function(e){if(!arguments.length){var n=this[0];if(n){if(y.nodeName(n,"option")){var r=n.attributes.value;return!r||r.specified?n.value:n.text}if(y.nodeName(n,"select")){var i=n.selectedIndex;r=[];var o=n.options;if(n="select-one"===n.type,0>i)return null;var a=n?i:0;for(i=n?i+1:o.length;i>a;a++){var s=o[a];if(!(!s.selected||(y.support.optDisabled?s.disabled:null!==s.getAttribute("disabled"))||s.parentNode.disabled&&y.nodeName(s.parentNode,"optgroup"))){if(e=y(s).val(),n)return e;r.push(e)}}return r}return A.test(n.type)&&!y.support.checkOn?null===n.getAttribute("value")?"on":n.value:(n.value||"").replace(N,"")}return t}var l=y.isFunction(e);return this.each(function(t){var n=y(this),r=e;if(1===this.nodeType)if(l&&(r=e.call(this,t,n.val())),null==r?r="":"number"==typeof r?r+="":y.isArray(r)&&(r=y.map(r,function(e){return null==e?"":e+""})),y.isArray(r)&&A.test(this.type))this.checked=y.inArray(n.val(),r)>=0;else if(y.nodeName(this,"select")){var i=y.makeArray(r);y("option",this).each(function(){this.selected=y.inArray(y(this).val(),i)>=0}),i.length||(this.selectedIndex=-1)}else this.value=r})}}),y.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(e,n,r,i){if(!e||3===e.nodeType||8===e.nodeType)return t;if(i&&n in y.attrFn)return y(e)[n](r);i=1!==e.nodeType||!y.isXMLDoc(e);var o=r!==t;n=i&&y.props[n]||n;var a=w.test(n);return(n in e||e[n]!==t)&&i&&!a?(o&&("type"===n&&E.test(e.nodeName)&&e.parentNode&&y.error("type property can't be changed"),null===r?1===e.nodeType&&e.removeAttribute(n):e[n]=r),y.nodeName(e,"form")&&e.getAttributeNode(n)?e.getAttributeNode(n).nodeValue:"tabIndex"===n?(n=e.getAttributeNode("tabIndex"))&&n.specified?n.value:C.test(e.nodeName)||S.test(e.nodeName)&&e.href?0:t:e[n]):!y.support.style&&i&&"style"===n?(o&&(e.style.cssText=""+r),e.style.cssText):(o&&e.setAttribute(n,""+r),e.attributes[n]||!e.hasAttribute||e.hasAttribute(n)?(e=!y.support.hrefNormalized&&i&&a?e.getAttribute(n,2):e.getAttribute(n),null===e?t:e):t)}});var F=/\.(.*)$/,L=/^(?:textarea|input|select)$/i,j=/\./g,k=/ /g,D=/[^\w\s.|`]/g,O=function(e){return e.replace(D,"\\$&")},M={focusin:0,focusout:0};y.event={add:function(n,i,o,a){if(3!==n.nodeType&&8!==n.nodeType){if(y.isWindow(n)&&n!==e&&!n.frameElement&&(n=e),o===!1)o=r;else if(!o)return;var s,l;if(o.handler&&(s=o,o=s.handler),o.guid||(o.guid=y.guid++),l=y.data(n)){var u=n.nodeType?"events":"__events__",c=l[u],f=l.handle;"function"==typeof c?(f=c.handle,c=c.events):c||(n.nodeType||(l[u]=l=function(){}),l.events=c={}),f||(l.handle=f=function(){return"undefined"==typeof y||y.event.triggered?t:y.event.handle.apply(f.elem,arguments)}),f.elem=n,i=i.split(" ");for(var d,p=0;u=i[p++];){l=s?y.extend({},s):{handler:o,data:a},u.indexOf(".")>-1?(d=u.split("."),u=d.shift(),l.namespace=d.slice(0).sort().join(".")):(d=[],l.namespace=""),l.type=u,l.guid||(l.guid=o.guid);var h=c[u],m=y.event.special[u]||{};h||(h=c[u]=[],m.setup&&m.setup.call(n,a,d,f)!==!1||(n.addEventListener?n.addEventListener(u,f,!1):n.attachEvent&&n.attachEvent("on"+u,f))),m.add&&(m.add.call(n,l),l.handler.guid||(l.handler.guid=o.guid)),h.push(l),y.event.global[u]=!0}n=null}}},global:{},remove:function(e,t,n,i){if(3!==e.nodeType&&8!==e.nodeType){n===!1&&(n=r);var o,a,s,l,u,c,f,d,p=0,h=e.nodeType?"events":"__events__",m=y.data(e),g=m&&m[h];if(m&&g)if("function"==typeof g&&(m=g,g=g.events),t&&t.type&&(n=t.handler,t=t.type),!t||"string"==typeof t&&"."===t.charAt(0)){t=t||"";for(o in g)y.event.remove(e,o+t)}else{for(t=t.split(" ");o=t[p++];)if(c=o,s=o.indexOf(".")<0,l=[],s||(l=o.split("."),o=l.shift(),u=RegExp("(^|\\.)"+y.map(l.slice(0).sort(),O).join("\\.(?:.*\\.)?")+"(\\.|$)")),f=g[o])if(n){for(c=y.event.special[o]||{},a=i||0;a<f.length&&(d=f[a],n.guid!==d.guid||((s||u.test(d.namespace))&&(null==i&&f.splice(a--,1),c.remove&&c.remove.call(e,d)),null==i));a++);(0===f.length||null!=i&&1===f.length)&&(c.teardown&&c.teardown.call(e,l)!==!1||y.removeEvent(e,o,m.handle),delete g[o])}else for(a=0;a<f.length;a++)d=f[a],(s||u.test(d.namespace))&&(y.event.remove(e,c,d.handler,a),f.splice(a--,1));y.isEmptyObject(g)&&((t=m.handle)&&(t.elem=null),delete m.events,delete m.handle,"function"==typeof m?y.removeData(e,h):y.isEmptyObject(m)&&y.removeData(e))}}},trigger:function(e,n,r,i){var o=e.type||e;if(!i){if(e="object"==typeof e?e[y.expando]?e:y.extend(y.Event(o),e):y.Event(o),o.indexOf("!")>=0&&(e.type=o=o.slice(0,-1),e.exclusive=!0),r||(e.stopPropagation(),y.event.global[o]&&y.each(y.cache,function(){this.events&&this.events[o]&&y.event.trigger(e,n,this.handle.elem)})),!r||3===r.nodeType||8===r.nodeType)return t;e.result=t,e.target=r,n=y.makeArray(n),n.unshift(e)}e.currentTarget=r,(i=r.nodeType?y.data(r,"handle"):(y.data(r,"__events__")||{}).handle)&&i.apply(r,n),i=r.parentNode||r.ownerDocument;try{r&&r.nodeName&&y.noData[r.nodeName.toLowerCase()]||r["on"+o]&&r["on"+o].apply(r,n)===!1&&(e.result=!1,e.preventDefault())}catch(a){}if(!e.isPropagationStopped()&&i)y.event.trigger(e,n,i,!0);else if(!e.isDefaultPrevented()){var s;i=e.target;var l=o.replace(F,""),u=y.nodeName(i,"a")&&"click"===l,c=y.event.special[l]||{};if(!(c._default&&c._default.call(r,e)!==!1||u||i&&i.nodeName&&y.noData[i.nodeName.toLowerCase()])){try{i[l]&&((s=i["on"+l])&&(i["on"+l]=null),y.event.triggered=!0,i[l]())}catch(f){}s&&(i["on"+l]=s),y.event.triggered=!1}}},handle:function(n){var r,i,o,a;i=[];var s=y.makeArray(arguments);if(n=s[0]=y.event.fix(n||e.event),n.currentTarget=this,r=n.type.indexOf(".")<0&&!n.exclusive,r||(o=n.type.split("."),n.type=o.shift(),i=o.slice(0).sort(),o=RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)")),n.namespace=n.namespace||i.join("."),a=y.data(this,this.nodeType?"events":"__events__"),"function"==typeof a&&(a=a.events),i=(a||{})[n.type],a&&i){i=i.slice(0),a=0;for(var l=i.length;l>a;a++){var u=i[a];if((r||o.test(u.namespace))&&(n.handler=u.handler,n.data=u.data,n.handleObj=u,u=u.handler.apply(this,s),u!==t&&(n.result=u,u===!1&&(n.preventDefault(),n.stopPropagation())),n.isImmediatePropagationStopped()))break}}return n.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(e){if(e[y.expando])return e;var n=e;e=y.Event(n);for(var r,i=this.props.length;i;)r=this.props[--i],e[r]=n[r];return e.target||(e.target=e.srcElement||g),3===e.target.nodeType&&(e.target=e.target.parentNode),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement),null==e.pageX&&null!=e.clientX&&(n=g.documentElement,i=g.body,e.pageX=e.clientX+(n&&n.scrollLeft||i&&i.scrollLeft||0)-(n&&n.clientLeft||i&&i.clientLeft||0),e.pageY=e.clientY+(n&&n.scrollTop||i&&i.scrollTop||0)-(n&&n.clientTop||i&&i.clientTop||0)),null!=e.which||null==e.charCode&&null==e.keyCode||(e.which=null!=e.charCode?e.charCode:e.keyCode),!e.metaKey&&e.ctrlKey&&(e.metaKey=e.ctrlKey),e.which||e.button===t||(e.which=1&e.button?1:2&e.button?3:4&e.button?2:0),e},guid:1e8,proxy:y.proxy,special:{ready:{setup:y.bindReady,teardown:y.noop},live:{add:function(e){y.event.add(this,s(e.origType,e.selector),y.extend({},e,{handler:a,guid:e.handler.guid}))},remove:function(e){y.event.remove(this,s(e.origType,e.selector),e)}},beforeunload:{setup:function(e,t,n){y.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}}},y.removeEvent=g.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){e.detachEvent&&e.detachEvent("on"+t,n)},y.Event=function(e){return this.preventDefault?(e&&e.type?(this.originalEvent=e,this.type=e.type):this.type=e,this.timeStamp=y.now(),void(this[y.expando]=!0)):new y.Event(e)},y.Event.prototype={preventDefault:function(){this.isDefaultPrevented=i;var e=this.originalEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=i;var e=this.originalEvent;e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i,this.stopPropagation()},isDefaultPrevented:r,isPropagationStopped:r,isImmediatePropagationStopped:r};var B=function(e){var t=e.relatedTarget;try{for(;t&&t!==this;)t=t.parentNode;t!==this&&(e.type=e.data,y.event.handle.apply(this,arguments))}catch(n){}},P=function(e){e.type=e.data,y.event.handle.apply(this,arguments)};if(y.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){y.event.special[e]={setup:function(n){y.event.add(this,t,n&&n.selector?P:B,e)},teardown:function(e){y.event.remove(this,t,e&&e.selector?P:B)}}}),y.support.submitBubbles||(y.event.special.submit={setup:function(){return"form"===this.nodeName.toLowerCase()?!1:(y.event.add(this,"click.specialSubmit",function(e){var n=e.target,r=n.type;return"submit"!==r&&"image"!==r||!y(n).closest("form").length?void 0:(e.liveFired=t,o("submit",this,arguments))}),void y.event.add(this,"keypress.specialSubmit",function(e){var n=e.target,r=n.type;return"text"!==r&&"password"!==r||!y(n).closest("form").length||13!==e.keyCode?void 0:(e.liveFired=t,o("submit",this,arguments))}))},teardown:function(){y.event.remove(this,".specialSubmit")}}),!y.support.changeBubbles){var H,_=function(e){var t=e.type,n=e.value;return"radio"===t||"checkbox"===t?n=e.checked:"select-multiple"===t?n=e.selectedIndex>-1?y.map(e.options,function(e){return e.selected}).join("-"):"":"select"===e.nodeName.toLowerCase()&&(n=e.selectedIndex),n},q=function(e,n){var r,i,o=e.target;return!L.test(o.nodeName)||o.readOnly||(r=y.data(o,"_change_data"),i=_(o),("focusout"!==e.type||"radio"!==o.type)&&y.data(o,"_change_data",i),r===t||i===r||null==r&&!i)?void 0:(e.type="change",e.liveFired=t,y.event.trigger(e,n,o))};y.event.special.change={filters:{focusout:q,beforedeactivate:q,click:function(e){var t=e.target,n=t.type;return"radio"===n||"checkbox"===n||"select"===t.nodeName.toLowerCase()?q.call(this,e):void 0},keydown:function(e){var t=e.target,n=t.type;return 13===e.keyCode&&"textarea"!==t.nodeName.toLowerCase()||32===e.keyCode&&("checkbox"===n||"radio"===n)||"select-multiple"===n?q.call(this,e):void 0},beforeactivate:function(e){e=e.target,y.data(e,"_change_data",_(e))}},setup:function(){if("file"===this.type)return!1;for(var e in H)y.event.add(this,e+".specialChange",H[e]);return L.test(this.nodeName)},teardown:function(){return y.event.remove(this,".specialChange"),L.test(this.nodeName)}},H=y.event.special.change.filters,H.focus=H.beforeactivate}g.addEventListener&&y.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){return e=y.event.fix(e),e.type=t,y.event.trigger(e,null,e.target)}y.event.special[t]={setup:function(){0===M[t]++&&g.addEventListener(e,n,!0)},teardown:function(){0===--M[t]&&g.removeEventListener(e,n,!0)}}}),y.each(["bind","one"],function(e,n){y.fn[n]=function(e,r,i){if("object"==typeof e){for(var o in e)this[n](o,r,e[o],i);return this}(y.isFunction(r)||r===!1)&&(i=r,r=t);var a="one"===n?y.proxy(i,function(e){return y(this).unbind(e,a),i.apply(this,arguments)}):i;if("unload"===e&&"one"!==n)this.one(e,r,i);else{o=0;for(var s=this.length;s>o;o++)y.event.add(this[o],e,a,r)}return this}}),y.fn.extend({unbind:function(e,t){if("object"!=typeof e||e.preventDefault){r=0;for(var n=this.length;n>r;r++)y.event.remove(this[r],e,t)}else for(var r in e)this.unbind(r,e[r]);return this},delegate:function(e,t,n,r){return this.live(t,n,r,e)},undelegate:function(e,t,n){return 0===arguments.length?this.unbind("live"):this.die(t,null,n,e)},trigger:function(e,t){return this.each(function(){y.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0]){var n=y.Event(e);return n.preventDefault(),n.stopPropagation(),y.event.trigger(n,t,this[0]),n.result}},toggle:function(e){for(var t=arguments,n=1;n<t.length;)y.proxy(e,t[n++]);return this.click(y.proxy(e,function(r){var i=(y.data(this,"lastToggle"+e.guid)||0)%n;return y.data(this,"lastToggle"+e.guid,i+1),r.preventDefault(),t[i].apply(this,arguments)||!1}))},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});var I={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};y.each(["live","die"],function(e,n){y.fn[n]=function(e,r,i,o){var a,l,u,c=0,f=o||this.selector;if(o=o?this:y(this.context),"object"==typeof e&&!e.preventDefault){for(a in e)o[n](a,r,e[a],f);return this}for(y.isFunction(r)&&(i=r,r=t),e=(e||"").split(" ");null!=(a=e[c++]);)if(l=F.exec(a),u="",l&&(u=l[0],a=a.replace(F,"")),"hover"===a)e.push("mouseenter"+u,"mouseleave"+u);else if(l=a,"focus"===a||"blur"===a?(e.push(I[a]+u),a+=u):a=(I[a]||a)+u,"live"===n){u=0;for(var d=o.length;d>u;u++)y.event.add(o[u],"live."+s(a,f),{data:r,selector:f,handler:i,origType:a,origHandler:i,preType:l})}else o.unbind("live."+s(a,f),i);return this}}),y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(e,t){y.fn[t]=function(e,n){return null==n&&(n=e,e=null),arguments.length>0?this.bind(t,e,n):this.trigger(t)},y.attrFn&&(y.attrFn[t]=!0)}),e.attachEvent&&!e.addEventListener&&y(e).bind("unload",function(){for(var e in y.cache)if(y.cache[e].handle)try{y.event.remove(y.cache[e].handle.elem)}catch(t){}}),function(){function e(e,t,n,r,i,o){i=0;for(var a=r.length;a>i;i++){var s=r[i];if(s){var l=!1;for(s=s[e];s;){if(s.sizcache===n){l=r[s.sizset];break}if(1!==s.nodeType||o||(s.sizcache=n,s.sizset=i),s.nodeName.toLowerCase()===t){l=s;break}s=s[e]}r[i]=l}}}function n(e,t,n,r,i,o){i=0;for(var a=r.length;a>i;i++){var s=r[i];if(s){var u=!1;for(s=s[e];s;){if(s.sizcache===n){u=r[s.sizset];break}if(1===s.nodeType)if(o||(s.sizcache=n,s.sizset=i),"string"!=typeof t){if(s===t){u=!0;break}}else if(l.filter(t,[s]).length>0){u=s;break}s=s[e]}r[i]=u}}}var r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i=0,o=Object.prototype.toString,a=!1,s=!0;[0,0].sort(function(){return s=!1,0});var l=function(e,t,n,i){n=n||[];
var a=t=t||g;if(1!==t.nodeType&&9!==t.nodeType)return[];if(!e||"string"!=typeof e)return n;var s,u,d,h,m,y=!0,v=l.isXML(t),x=[],T=e;do if(r.exec(""),(s=r.exec(T))&&(T=s[3],x.push(s[1]),s[2])){h=s[3];break}while(s);if(x.length>1&&f.exec(e))if(2===x.length&&c.relative[x[0]])u=b(x[0]+x[1],t);else for(u=c.relative[x[0]]?[t]:l(x.shift(),t);x.length;)e=x.shift(),c.relative[e]&&(e+=x.shift()),u=b(e,u);else if(!i&&x.length>1&&9===t.nodeType&&!v&&c.match.ID.test(x[0])&&!c.match.ID.test(x[x.length-1])&&(s=l.find(x.shift(),t,v),t=s.expr?l.filter(s.expr,s.set)[0]:s.set[0]),t)for(s=i?{expr:x.pop(),set:p(i)}:l.find(x.pop(),1!==x.length||"~"!==x[0]&&"+"!==x[0]||!t.parentNode?t:t.parentNode,v),u=s.expr?l.filter(s.expr,s.set):s.set,x.length>0?d=p(u):y=!1;x.length;)s=m=x.pop(),c.relative[m]?s=x.pop():m="",null==s&&(s=t),c.relative[m](d,s,v);else d=[];if(d||(d=u),d||l.error(m||e),"[object Array]"===o.call(d))if(y)if(t&&1===t.nodeType)for(e=0;null!=d[e];e++)d[e]&&(d[e]===!0||1===d[e].nodeType&&l.contains(t,d[e]))&&n.push(u[e]);else for(e=0;null!=d[e];e++)d[e]&&1===d[e].nodeType&&n.push(u[e]);else n.push.apply(n,d);else p(d,n);return h&&(l(h,a,n,i),l.uniqueSort(n)),n};l.uniqueSort=function(e){if(m&&(a=s,e.sort(m),a))for(var t=1;t<e.length;t++)e[t]===e[t-1]&&e.splice(t--,1);return e},l.matches=function(e,t){return l(e,null,null,t)},l.matchesSelector=function(e,t){return l(t,null,null,[e]).length>0},l.find=function(e,t,n){var r;if(!e)return[];for(var i=0,o=c.order.length;o>i;i++){var a,s=c.order[i];if(a=c.leftMatch[s].exec(e)){var l=a[1];if(a.splice(1,1),"\\"!==l.substr(l.length-1)&&(a[1]=(a[1]||"").replace(/\\/g,""),r=c.find[s](a,t,n),null!=r)){e=e.replace(c.match[s],"");break}}}return r||(r=t.getElementsByTagName("*")),{set:r,expr:e}},l.filter=function(e,n,r,i){for(var o,a,s=e,u=[],f=n,d=n&&n[0]&&l.isXML(n[0]);e&&n.length;){for(var p in c.filter)if(null!=(o=c.leftMatch[p].exec(e))&&o[2]){var h,m,g=c.filter[p];if(m=o[1],a=!1,o.splice(1,1),"\\"!==m.substr(m.length-1)){if(f===u&&(u=[]),c.preFilter[p])if(o=c.preFilter[p](o,f,r,u,i,d)){if(o===!0)continue}else a=h=!0;if(o)for(var y=0;null!=(m=f[y]);y++)if(m){h=g(m,o,y,f);var v=i^!!h;r&&null!=h?v?a=!0:f[y]=!1:v&&(u.push(m),a=!0)}if(h!==t){if(r||(f=u),e=e.replace(c.match[p],""),!a)return[];break}}}if(e===s){if(null!=a)break;l.error(e)}s=e}return f},l.error=function(e){throw"Syntax error, unrecognized expression: "+e};var u,c=l.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")}},relative:{"+":function(e,t){var n="string"==typeof t,r=n&&!/\W/.test(t);n=n&&!r,r&&(t=t.toLowerCase()),r=0;for(var i,o=e.length;o>r;r++)if(i=e[r]){for(;(i=i.previousSibling)&&1!==i.nodeType;);e[r]=n||i&&i.nodeName.toLowerCase()===t?i||!1:i===t}n&&l.filter(t,e,!0)},">":function(e,t){var n,r="string"==typeof t,i=0,o=e.length;if(r&&!/\W/.test(t))for(t=t.toLowerCase();o>i;i++)(n=e[i])&&(n=n.parentNode,e[i]=n.nodeName.toLowerCase()===t?n:!1);else{for(;o>i;i++)(n=e[i])&&(e[i]=r?n.parentNode:n.parentNode===t);r&&l.filter(t,e,!0)}},"":function(t,r,o){var a,s=i++,l=n;"string"!=typeof r||/\W/.test(r)||(a=r=r.toLowerCase(),l=e),l("parentNode",r,s,t,a,o)},"~":function(t,r,o){var a,s=i++,l=n;"string"!=typeof r||/\W/.test(r)||(a=r=r.toLowerCase(),l=e),l("previousSibling",r,s,t,a,o)}},find:{ID:function(e,t,n){return"undefined"==typeof t.getElementById||n?void 0:(e=t.getElementById(e[1]))&&e.parentNode?[e]:[]},NAME:function(e,t){if("undefined"!=typeof t.getElementsByName){for(var n=[],r=t.getElementsByName(e[1]),i=0,o=r.length;o>i;i++)r[i].getAttribute("name")===e[1]&&n.push(r[i]);return 0===n.length?null:n}},TAG:function(e,t){return t.getElementsByTagName(e[1])}},preFilter:{CLASS:function(e,t,n,r,i,o){if(e=" "+e[1].replace(/\\/g,"")+" ",o)return e;o=0;for(var a;null!=(a=t[o]);o++)a&&(i^(a.className&&(" "+a.className+" ").replace(/[\t\n]/g," ").indexOf(e)>=0)?n||r.push(a):n&&(t[o]=!1));return!1},ID:function(e){return e[1].replace(/\\/g,"")},TAG:function(e){return e[1].toLowerCase()},CHILD:function(e){if("nth"===e[1]){var t=/(-?)(\d*)n((?:\+|-)?\d*)/.exec("even"===e[2]&&"2n"||"odd"===e[2]&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=t[1]+(t[2]||1)-0,e[3]=t[3]-0}return e[0]=i++,e},ATTR:function(e,t,n,r,i,o){return t=e[1].replace(/\\/g,""),!o&&c.attrMap[t]&&(e[1]=c.attrMap[t]),"~="===e[2]&&(e[4]=" "+e[4]+" "),e},PSEUDO:function(e,t,n,i,o){if("not"===e[1]){if(!((r.exec(e[3])||"").length>1||/^\w/.test(e[3])))return e=l.filter(e[3],t,n,!0^o),n||i.push.apply(i,e),!1;e[3]=l(e[3],null,null,t)}else if(c.match.POS.test(e[0])||c.match.CHILD.test(e[0]))return!0;return e},POS:function(e){return e.unshift(!0),e}},filters:{enabled:function(e){return e.disabled===!1&&"hidden"!==e.type},disabled:function(e){return e.disabled===!0},checked:function(e){return e.checked===!0},selected:function(e){return e.selected===!0},parent:function(e){return!!e.firstChild},empty:function(e){return!e.firstChild},has:function(e,t,n){return!!l(n[3],e).length},header:function(e){return/h\d/i.test(e.nodeName)},text:function(e){return"text"===e.type},radio:function(e){return"radio"===e.type},checkbox:function(e){return"checkbox"===e.type},file:function(e){return"file"===e.type},password:function(e){return"password"===e.type},submit:function(e){return"submit"===e.type},image:function(e){return"image"===e.type},reset:function(e){return"reset"===e.type},button:function(e){return"button"===e.type||"button"===e.nodeName.toLowerCase()},input:function(e){return/input|select|textarea|button/i.test(e.nodeName)}},setFilters:{first:function(e,t){return 0===t},last:function(e,t,n,r){return t===r.length-1},even:function(e,t){return t%2===0},odd:function(e,t){return t%2===1},lt:function(e,t,n){return t<n[3]-0},gt:function(e,t,n){return t>n[3]-0},nth:function(e,t,n){return n[3]-0===t},eq:function(e,t,n){return n[3]-0===t}},filter:{PSEUDO:function(e,t,n,r){var i=t[1],o=c.filters[i];if(o)return o(e,n,t,r);if("contains"===i)return(e.textContent||e.innerText||l.getText([e])||"").indexOf(t[3])>=0;if("not"===i){for(t=t[3],n=0,r=t.length;r>n;n++)if(t[n]===e)return!1;return!0}l.error("Syntax error, unrecognized expression: "+i)},CHILD:function(e,t){var n=t[1],r=e;switch(n){case"only":case"first":for(;r=r.previousSibling;)if(1===r.nodeType)return!1;if("first"===n)return!0;r=e;case"last":for(;r=r.nextSibling;)if(1===r.nodeType)return!1;return!0;case"nth":n=t[2];var i=t[3];if(1===n&&0===i)return!0;var o=t[0],a=e.parentNode;if(a&&(a.sizcache!==o||!e.nodeIndex)){var s=0;for(r=a.firstChild;r;r=r.nextSibling)1===r.nodeType&&(r.nodeIndex=++s);a.sizcache=o}return r=e.nodeIndex-i,0===n?0===r:r%n===0&&r/n>=0}},ID:function(e,t){return 1===e.nodeType&&e.getAttribute("id")===t},TAG:function(e,t){return"*"===t&&1===e.nodeType||e.nodeName.toLowerCase()===t},CLASS:function(e,t){return(" "+(e.className||e.getAttribute("class"))+" ").indexOf(t)>-1},ATTR:function(e,t){var n=t[1];n=c.attrHandle[n]?c.attrHandle[n](e):null!=e[n]?e[n]:e.getAttribute(n);var r=n+"",i=t[2],o=t[4];return null==n?"!="===i:"="===i?r===o:"*="===i?r.indexOf(o)>=0:"~="===i?(" "+r+" ").indexOf(o)>=0:o?"!="===i?r!==o:"^="===i?0===r.indexOf(o):"$="===i?r.substr(r.length-o.length)===o:"|="===i?r===o||r.substr(0,o.length+1)===o+"-":!1:r&&n!==!1},POS:function(e,t,n,r){var i=c.setFilters[t[2]];return i?i(e,n,t,r):void 0}}},f=c.match.POS,d=function(e,t){return"\\"+(t-0+1)};for(u in c.match)c.match[u]=RegExp(c.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source),c.leftMatch[u]=RegExp(/(^(?:.|\r|\n)*?)/.source+c.match[u].source.replace(/\\(\d+)/g,d));var p=function(e,t){return e=Array.prototype.slice.call(e,0),t?(t.push.apply(t,e),t):e};try{Array.prototype.slice.call(g.documentElement.childNodes,0)}catch(h){p=function(e,t){var n=0,r=t||[];if("[object Array]"===o.call(e))Array.prototype.push.apply(r,e);else if("number"==typeof e.length)for(var i=e.length;i>n;n++)r.push(e[n]);else for(;e[n];n++)r.push(e[n]);return r}}var m,v;g.documentElement.compareDocumentPosition?m=function(e,t){return e===t?(a=!0,0):e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t)?-1:1:e.compareDocumentPosition?-1:1}:(m=function(e,t){var n,r,i=[],o=[];n=e.parentNode,r=t.parentNode;var s=n;if(e===t)return a=!0,0;if(n===r)return v(e,t);if(!n)return-1;if(!r)return 1;for(;s;)i.unshift(s),s=s.parentNode;for(s=r;s;)o.unshift(s),s=s.parentNode;for(n=i.length,r=o.length,s=0;n>s&&r>s;s++)if(i[s]!==o[s])return v(i[s],o[s]);return s===n?v(e,o[s],-1):v(i[s],t,1)},v=function(e,t,n){if(e===t)return n;for(e=e.nextSibling;e;){if(e===t)return-1;e=e.nextSibling}return 1}),l.getText=function(e){for(var t,n="",r=0;e[r];r++)t=e[r],3===t.nodeType||4===t.nodeType?n+=t.nodeValue:8!==t.nodeType&&(n+=l.getText(t.childNodes));return n},function(){var e=g.createElement("div"),n="script"+(new Date).getTime(),r=g.documentElement;e.innerHTML="<a name='"+n+"'/>",r.insertBefore(e,r.firstChild),g.getElementById(n)&&(c.find.ID=function(e,n,r){return"undefined"==typeof n.getElementById||r?void 0:(n=n.getElementById(e[1]))?n.id===e[1]||"undefined"!=typeof n.getAttributeNode&&n.getAttributeNode("id").nodeValue===e[1]?[n]:t:[]},c.filter.ID=function(e,t){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return 1===e.nodeType&&n&&n.nodeValue===t}),r.removeChild(e),r=e=null}(),function(){var e=g.createElement("div");e.appendChild(g.createComment("")),e.getElementsByTagName("*").length>0&&(c.find.TAG=function(e,t){var n=t.getElementsByTagName(e[1]);if("*"===e[1]){for(var r=[],i=0;n[i];i++)1===n[i].nodeType&&r.push(n[i]);n=r}return n}),e.innerHTML="<a href='#'></a>",e.firstChild&&"undefined"!=typeof e.firstChild.getAttribute&&"#"!==e.firstChild.getAttribute("href")&&(c.attrHandle.href=function(e){return e.getAttribute("href",2)}),e=null}(),g.querySelectorAll&&function(){var e=l,t=g.createElement("div");if(t.innerHTML="<p class='TEST'></p>",!t.querySelectorAll||0!==t.querySelectorAll(".TEST").length){l=function(t,n,r,i){if(n=n||g,t=t.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!i&&!l.isXML(n))if(9===n.nodeType)try{return p(n.querySelectorAll(t),r)}catch(o){}else if(1===n.nodeType&&"object"!==n.nodeName.toLowerCase()){var a=n.getAttribute("id"),s=a||"__sizzle__";a||n.setAttribute("id",s);try{return p(n.querySelectorAll("#"+s+" "+t),r)}catch(u){}finally{a||n.removeAttribute("id")}}return e(t,n,r,i)};for(var n in e)l[n]=e[n];t=null}}(),function(){var e=g.documentElement,t=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector,n=!1;try{t.call(g.documentElement,"[test!='']:sizzle")}catch(r){n=!0}t&&(l.matchesSelector=function(e,r){if(r=r.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!l.isXML(e))try{if(n||!c.match.PSEUDO.test(r)&&!/!=/.test(r))return t.call(e,r)}catch(i){}return l(r,null,null,[e]).length>0})}(),function(){var e=g.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>",e.getElementsByClassName&&0!==e.getElementsByClassName("e").length&&(e.lastChild.className="e",1!==e.getElementsByClassName("e").length&&(c.order.splice(1,0,"CLASS"),c.find.CLASS=function(e,t,n){return"undefined"==typeof t.getElementsByClassName||n?void 0:t.getElementsByClassName(e[1])},e=null))}(),l.contains=g.documentElement.contains?function(e,t){return e!==t&&(e.contains?e.contains(t):!0)}:g.documentElement.compareDocumentPosition?function(e,t){return!!(16&e.compareDocumentPosition(t))}:function(){return!1},l.isXML=function(e){return(e=(e?e.ownerDocument||e:0).documentElement)?"HTML"!==e.nodeName:!1};var b=function(e,t){for(var n,r=[],i="",o=t.nodeType?[t]:t;n=c.match.PSEUDO.exec(e);)i+=n[0],e=e.replace(c.match.PSEUDO,"");e=c.relative[e]?e+"*":e,n=0;for(var a=o.length;a>n;n++)l(e,o[n],r);return l.filter(i,r)};y.find=l,y.expr=l.selectors,y.expr[":"]=y.expr.filters,y.unique=l.uniqueSort,y.text=l.getText,y.isXMLDoc=l.isXML,y.contains=l.contains}();var $=/Until$/,W=/^(?:parents|prevUntil|prevAll)/,z=/,/,R=/^.[^:#\[\.,]*$/,X=Array.prototype.slice,U=y.expr.match.POS;y.fn.extend({find:function(e){for(var t=this.pushStack("","find",e),n=0,r=0,i=this.length;i>r;r++)if(n=t.length,y.find(e,this[r],t),r>0)for(var o=n;o<t.length;o++)for(var a=0;n>a;a++)if(t[a]===t[o]){t.splice(o--,1);break}return t},has:function(e){var t=y(e);return this.filter(function(){for(var e=0,n=t.length;n>e;e++)if(y.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(l(this,e,!1),"not",e)},filter:function(e){return this.pushStack(l(this,e,!0),"filter",e)},is:function(e){return!!e&&y.filter(e,this).length>0},closest:function(e,t){var n,r,i=[],o=this[0];if(y.isArray(e)){var a,s={},l=1;if(o&&e.length){for(n=0,r=e.length;r>n;n++)a=e[n],s[a]||(s[a]=y.expr.match.POS.test(a)?y(a,t||this.context):a);for(;o&&o.ownerDocument&&o!==t;){for(a in s)n=s[a],(n.jquery?n.index(o)>-1:y(o).is(n))&&i.push({selector:a,elem:o,level:l});o=o.parentNode,l++}}return i}for(a=U.test(e)?y(e,t||this.context):null,n=0,r=this.length;r>n;n++)for(o=this[n];o;){if(a?a.index(o)>-1:y.find.matchesSelector(o,e)){i.push(o);break}if(o=o.parentNode,!o||!o.ownerDocument||o===t)break}return i=i.length>1?y.unique(i):i,this.pushStack(i,"closest",e)},index:function(e){return e&&"string"!=typeof e?y.inArray(e.jquery?e[0]:e,this):y.inArray(this[0],e?y(e):this.parent().children())},add:function(e,t){var n="string"==typeof e?y(e,t||this.context):y.makeArray(e),r=y.merge(this.get(),n);return this.pushStack(n[0]&&n[0].parentNode&&11!==n[0].parentNode.nodeType&&r[0]&&r[0].parentNode&&11!==r[0].parentNode.nodeType?y.unique(r):r)},andSelf:function(){return this.add(this.prevObject)}}),y.each({parent:function(e){return(e=e.parentNode)&&11!==e.nodeType?e:null},parents:function(e){return y.dir(e,"parentNode")},parentsUntil:function(e,t,n){return y.dir(e,"parentNode",n)},next:function(e){return y.nth(e,2,"nextSibling")},prev:function(e){return y.nth(e,2,"previousSibling")},nextAll:function(e){return y.dir(e,"nextSibling")},prevAll:function(e){return y.dir(e,"previousSibling")},nextUntil:function(e,t,n){return y.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return y.dir(e,"previousSibling",n)},siblings:function(e){return y.sibling(e.parentNode.firstChild,e)},children:function(e){return y.sibling(e.firstChild)},contents:function(e){return y.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:y.makeArray(e.childNodes)}},function(e,t){y.fn[e]=function(n,r){var i=y.map(this,t,n);return $.test(e)||(r=n),r&&"string"==typeof r&&(i=y.filter(r,i)),i=this.length>1?y.unique(i):i,(this.length>1||z.test(r))&&W.test(e)&&(i=i.reverse()),this.pushStack(i,e,X.call(arguments).join(","))}}),y.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?y.find.matchesSelector(t[0],e)?[t[0]]:[]:y.find.matches(e,t)},dir:function(e,n,r){var i=[];for(e=e[n];e&&9!==e.nodeType&&(r===t||1!==e.nodeType||!y(e).is(r));)1===e.nodeType&&i.push(e),e=e[n];return i},nth:function(e,t,n){t=t||1;for(var r=0;e&&(1!==e.nodeType||++r!==t);e=e[n]);return e},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var G=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,J=/<([\w:]+)/,K=/<tbody/i,Q=/<|&#?\w+;/,Z=/<(?:script|object|embed|option|style)/i,et=/checked\s*(?:[^=]|=\s*.checked.)/i,tt=/\=([^="'>\s]+\/)>/g,nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};nt.optgroup=nt.option,nt.tbody=nt.tfoot=nt.colgroup=nt.caption=nt.thead,nt.th=nt.td,y.support.htmlSerialize||(nt._default=[1,"div<div>","</div>"]),y.fn.extend({text:function(e){return y.isFunction(e)?this.each(function(t){var n=y(this);n.text(e.call(this,t,n.text()))}):"object"!=typeof e&&e!==t?this.empty().append((this[0]&&this[0].ownerDocument||g).createTextNode(e)):y.text(this)},wrapAll:function(e){if(y.isFunction(e))return this.each(function(t){y(this).wrapAll(e.call(this,t))});if(this[0]){var t=y(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return this.each(y.isFunction(e)?function(t){y(this).wrapInner(e.call(this,t))}:function(){var t=y(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){return this.each(function(){y(this).wrapAll(e)})},unwrap:function(){return this.parent().each(function(){y.nodeName(this,"body")||y(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){1===this.nodeType&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){1===this.nodeType&&this.insertBefore(e,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=y(arguments[0]);return e.push.apply(e,this.toArray()),this.pushStack(e,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=this.pushStack(this,"after",arguments);return e.push.apply(e,y(arguments[0]).toArray()),e}},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||y.filter(e,[n]).length)&&(t||1!==n.nodeType||(y.cleanData(n.getElementsByTagName("*")),y.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)for(1===e.nodeType&&y.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild);return this},clone:function(e){var t=this.map(function(){if(y.support.noCloneEvent||y.isXMLDoc(this))return this.cloneNode(!0);var e=this.outerHTML,t=this.ownerDocument;return e||(e=t.createElement("div"),e.appendChild(this.cloneNode(!0)),e=e.innerHTML),y.clean([e.replace(G,"").replace(tt,'="$1">').replace(V,"")],t)[0]});return e===!0&&(u(this,t),u(this.find("*"),t.find("*"))),t},html:function(e){if(e===t)return this[0]&&1===this[0].nodeType?this[0].innerHTML.replace(G,""):null;if("string"!=typeof e||Z.test(e)||!y.support.leadingWhitespace&&V.test(e)||nt[(J.exec(e)||["",""])[1].toLowerCase()])y.isFunction(e)?this.each(function(t){var n=y(this);n.html(e.call(this,t,n.html()))}):this.empty().append(e);else{e=e.replace(Y,"<$1></$2>");try{for(var n=0,r=this.length;r>n;n++)1===this[n].nodeType&&(y.cleanData(this[n].getElementsByTagName("*")),this[n].innerHTML=e)}catch(i){this.empty().append(e)}}return this},replaceWith:function(e){return this[0]&&this[0].parentNode?y.isFunction(e)?this.each(function(t){var n=y(this),r=n.html();n.replaceWith(e.call(this,t,r))}):("string"!=typeof e&&(e=y(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;y(this).remove(),t?y(t).before(e):y(n).append(e)})):this.pushStack(y(y.isFunction(e)?e():e),"replaceWith",e)},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){var i,o,a,s=e[0],l=[];if(!y.support.checkClone&&3===arguments.length&&"string"==typeof s&&et.test(s))return this.each(function(){y(this).domManip(e,n,r,!0)});if(y.isFunction(s))return this.each(function(i){var o=y(this);e[0]=s.call(this,i,n?o.html():t),o.domManip(e,n,r)});if(this[0]){if(i=s&&s.parentNode,i=y.support.parentNode&&i&&11===i.nodeType&&i.childNodes.length===this.length?{fragment:i}:y.buildFragment(e,this,l),a=i.fragment,o=1===a.childNodes.length?a=a.firstChild:a.firstChild){n=n&&y.nodeName(o,"tr"),o=0;for(var u=this.length;u>o;o++)r.call(n&&y.nodeName(this[o],"table")?this[o].getElementsByTagName("tbody")[0]||this[o].appendChild(this[o].ownerDocument.createElement("tbody")):this[o],o>0||i.cacheable||this.length>1?a.cloneNode(!0):a)}l.length&&y.each(l,c)}return this}}),y.buildFragment=function(e,t,n){var r,i,o;return t=t&&t[0]?t[0].ownerDocument||t[0]:g,1===e.length&&"string"==typeof e[0]&&e[0].length<512&&t===g&&!Z.test(e[0])&&(y.support.checkClone||!et.test(e[0]))&&(i=!0,(o=y.fragments[e[0]])&&1!==o&&(r=o)),r||(r=t.createDocumentFragment(),y.clean(e,t,r,n)),i&&(y.fragments[e[0]]=o?r:1),{fragment:r,cacheable:i}},y.fragments={},y.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){y.fn[e]=function(n){var r=[];n=y(n);var i=1===this.length&&this[0].parentNode;if(i&&11===i.nodeType&&1===i.childNodes.length&&1===n.length)return n[t](this[0]),this;i=0;for(var o=n.length;o>i;i++){var a=(i>0?this.clone(!0):this).get();y(n[i])[t](a),r=r.concat(a)}return this.pushStack(r,e,n.selector)}}),y.extend({clean:function(e,t,n,r){t=t||g,"undefined"==typeof t.createElement&&(t=t.ownerDocument||t[0]&&t[0].ownerDocument||g);for(var i,o=[],a=0;null!=(i=e[a]);a++)if("number"==typeof i&&(i+=""),i){if("string"!=typeof i||Q.test(i)){if("string"==typeof i){i=i.replace(Y,"<$1></$2>");var s=(J.exec(i)||["",""])[1].toLowerCase(),l=nt[s]||nt._default,u=l[0],c=t.createElement("div");for(c.innerHTML=l[1]+i+l[2];u--;)c=c.lastChild;if(!y.support.tbody)for(u=K.test(i),s="table"!==s||u?"<table>"!==l[1]||u?[]:c.childNodes:c.firstChild&&c.firstChild.childNodes,l=s.length-1;l>=0;--l)y.nodeName(s[l],"tbody")&&!s[l].childNodes.length&&s[l].parentNode.removeChild(s[l]);!y.support.leadingWhitespace&&V.test(i)&&c.insertBefore(t.createTextNode(V.exec(i)[0]),c.firstChild),i=c.childNodes}}else i=t.createTextNode(i);i.nodeType?o.push(i):o=y.merge(o,i)}if(n)for(a=0;o[a];a++)!r||!y.nodeName(o[a],"script")||o[a].type&&"text/javascript"!==o[a].type.toLowerCase()?(1===o[a].nodeType&&o.splice.apply(o,[a+1,0].concat(y.makeArray(o[a].getElementsByTagName("script")))),n.appendChild(o[a])):r.push(o[a].parentNode?o[a].parentNode.removeChild(o[a]):o[a]);return o},cleanData:function(e){for(var t,n,r,i=y.cache,o=y.event.special,a=y.support.deleteExpando,s=0;null!=(r=e[s]);s++)if((!r.nodeName||!y.noData[r.nodeName.toLowerCase()])&&(n=r[y.expando])){if((t=i[n])&&t.events)for(var l in t.events)o[l]?y.event.remove(r,l):y.removeEvent(r,l,t.handle);a?delete r[y.expando]:r.removeAttribute&&r.removeAttribute(y.expando),delete i[n]}}});var rt,it,ot,at=/alpha\([^)]*\)/i,st=/opacity=([^)]*)/,lt=/-([a-z])/gi,ut=/([A-Z])/g,ct=/^-?\d+(?:px)?$/i,ft=/^-?\d/,dt={position:"absolute",visibility:"hidden",display:"block"},pt=["Left","Right"],ht=["Top","Bottom"],mt=function(e,t){return t.toUpperCase()};y.fn.css=function(e,n){return 2===arguments.length&&n===t?this:y.access(this,e,n,!0,function(e,n,r){return r!==t?y.style(e,n,r):y.css(e,n)})},y.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=rt(e,"opacity","opacity");return""===n?"1":n}return e.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":y.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a=y.camelCase(n),s=e.style,l=y.cssHooks[a];if(n=y.cssProps[a]||a,r===t)return l&&"get"in l&&(o=l.get(e,!1,i))!==t?o:s[n];if(!("number"==typeof r&&isNaN(r)||null==r||("number"!=typeof r||y.cssNumber[a]||(r+="px"),l&&"set"in l&&(r=l.set(e,r))===t)))try{s[n]=r}catch(u){}}},css:function(e,n,r){var i,o=y.camelCase(n),a=y.cssHooks[o];return n=y.cssProps[o]||o,a&&"get"in a&&(i=a.get(e,!0,r))!==t?i:rt?rt(e,n,o):void 0},swap:function(e,t,n){var r,i={};for(r in t)i[r]=e.style[r],e.style[r]=t[r];n.call(e);for(r in t)e.style[r]=i[r]},camelCase:function(e){return e.replace(lt,mt)}}),y.curCSS=y.css,y.each(["height","width"],function(e,t){y.cssHooks[t]={get:function(e,n,r){var i;return n?(0!==e.offsetWidth?i=f(e,t,r):y.swap(e,dt,function(){i=f(e,t,r)}),0>=i&&(i=rt(e,t,t),"0px"===i&&ot&&(i=ot(e,t,t)),null!=i)?""===i||"auto"===i?"0px":i:0>i||null==i?(i=e.style[t],""===i||"auto"===i?"0px":i):"string"==typeof i?i:i+"px"):void 0},set:function(e,t){return ct.test(t)?(t=parseFloat(t),t>=0?t+"px":void 0):t}}}),y.support.opacity||(y.cssHooks.opacity={get:function(e,t){return st.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?parseFloat(RegExp.$1)/100+"":t?"1":""},set:function(e,t){var n=e.style;n.zoom=1;var r=y.isNaN(t)?"":"alpha(opacity="+100*t+")",i=n.filter||"";n.filter=at.test(i)?i.replace(at,r):n.filter+" "+r}}),g.defaultView&&g.defaultView.getComputedStyle&&(it=function(e,n,r){var i;return r=r.replace(ut,"-$1").toLowerCase(),(n=e.ownerDocument.defaultView)?((n=n.getComputedStyle(e,null))&&(i=n.getPropertyValue(r),""!==i||y.contains(e.ownerDocument.documentElement,e)||(i=y.style(e,r))),i):t}),g.documentElement.currentStyle&&(ot=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],o=e.style;return!ct.test(i)&&ft.test(i)&&(n=o.left,r=e.runtimeStyle.left,e.runtimeStyle.left=e.currentStyle.left,o.left="fontSize"===t?"1em":i||0,i=o.pixelLeft+"px",o.left=n,e.runtimeStyle.left=r),""===i?"auto":i}),rt=it||ot,y.expr&&y.expr.filters&&(y.expr.filters.hidden=function(e){var t=e.offsetHeight;return 0===e.offsetWidth&&0===t||!y.support.reliableHiddenOffsets&&"none"===(e.style.display||y.css(e,"display"))},y.expr.filters.visible=function(e){return!y.expr.filters.hidden(e)});var gt=y.now(),yt=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,vt=/^(?:select|textarea)/i,bt=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,xt=/^(?:GET|HEAD)$/,Tt=/\[\]$/,Nt=/\=\?(&|$)/,wt=/\?/,Et=/([?&])_=[^&]*/,Ct=/^(\w+:)?\/\/([^\/?#]+)/,St=/%20/g,At=/#.*$/,Ft=y.fn.load;y.fn.extend({load:function(e,t,n){if("string"!=typeof e&&Ft)return Ft.apply(this,arguments);if(!this.length)return this;var r=e.indexOf(" ");if(r>=0){var i=e.slice(r,e.length);e=e.slice(0,r)}r="GET",t&&(y.isFunction(t)?(n=t,t=null):"object"==typeof t&&(t=y.param(t,y.ajaxSettings.traditional),r="POST"));var o=this;return y.ajax({url:e,type:r,dataType:"html",data:t,complete:function(e,t){("success"===t||"notmodified"===t)&&o.html(i?y("<div>").append(e.responseText.replace(yt,"")).find(i):e.responseText),n&&o.each(n,[e.responseText,t,e])}}),this},serialize:function(){return y.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?y.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||vt.test(this.nodeName)||bt.test(this.type))}).map(function(e,t){var n=y(this).val();return null==n?null:y.isArray(n)?y.map(n,function(e){return{name:t.name,value:e}}):{name:t.name,value:n}}).get()}}),y.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){y.fn[t]=function(e){return this.bind(t,e)}}),y.extend({get:function(e,t,n,r){return y.isFunction(t)&&(r=r||n,n=t,t=null),y.ajax({type:"GET",url:e,data:t,success:n,dataType:r})},getScript:function(e,t){return y.get(e,null,t,"script")},getJSON:function(e,t,n){return y.get(e,t,n,"json")},post:function(e,t,n,r){return y.isFunction(t)&&(r=r||n,n=t,t={}),y.ajax({type:"POST",url:e,data:t,success:n,dataType:r})},ajaxSetup:function(e){y.extend(y.ajaxSettings,e)},ajaxSettings:{url:location.href,global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,xhr:function(){return new e.XMLHttpRequest},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},ajax:function(n){var r,i,o,a=y.extend(!0,{},y.ajaxSettings,n),s=a.type.toUpperCase(),l=xt.test(s);if(a.url=a.url.replace(At,""),a.context=n&&null!=n.context?n.context:a,a.data&&a.processData&&"string"!=typeof a.data&&(a.data=y.param(a.data,a.traditional)),"jsonp"===a.dataType&&("GET"===s?Nt.test(a.url)||(a.url+=(wt.test(a.url)?"&":"?")+(a.jsonp||"callback")+"=?"):a.data&&Nt.test(a.data)||(a.data=(a.data?a.data+"&":"")+(a.jsonp||"callback")+"=?"),a.dataType="json"),"json"===a.dataType&&(a.data&&Nt.test(a.data)||Nt.test(a.url))){r=a.jsonpCallback||"jsonp"+gt++,a.data&&(a.data=(a.data+"").replace(Nt,"="+r+"$1")),a.url=a.url.replace(Nt,"="+r+"$1"),a.dataType="script";var u=e[r];e[r]=function(n){if(y.isFunction(u))u(n);else{e[r]=t;try{delete e[r]}catch(s){}}o=n,y.handleSuccess(a,v,i,o),y.handleComplete(a,v,i,o),d&&d.removeChild(p)}}if("script"===a.dataType&&null===a.cache&&(a.cache=!1),a.cache===!1&&l){var c=y.now(),f=a.url.replace(Et,"$1_="+c);a.url=f+(f===a.url?(wt.test(a.url)?"&":"?")+"_="+c:"")}if(a.data&&l&&(a.url+=(wt.test(a.url)?"&":"?")+a.data),a.global&&0===y.active++&&y.event.trigger("ajaxStart"),c=(c=Ct.exec(a.url))&&(c[1]&&c[1].toLowerCase()!==location.protocol||c[2].toLowerCase()!==location.host),"script"===a.dataType&&"GET"===s&&c){var d=g.getElementsByTagName("head")[0]||g.documentElement,p=g.createElement("script");if(a.scriptCharset&&(p.charset=a.scriptCharset),p.src=a.url,!r){var h=!1;p.onload=p.onreadystatechange=function(){h||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(h=!0,y.handleSuccess(a,v,i,o),y.handleComplete(a,v,i,o),p.onload=p.onreadystatechange=null,d&&p.parentNode&&d.removeChild(p))}}return d.insertBefore(p,d.firstChild),t}var m=!1,v=a.xhr();if(v){a.username?v.open(s,a.url,a.async,a.username,a.password):v.open(s,a.url,a.async);try{(null!=a.data&&!l||n&&n.contentType)&&v.setRequestHeader("Content-Type",a.contentType),a.ifModified&&(y.lastModified[a.url]&&v.setRequestHeader("If-Modified-Since",y.lastModified[a.url]),y.etag[a.url]&&v.setRequestHeader("If-None-Match",y.etag[a.url])),c||v.setRequestHeader("X-Requested-With","XMLHttpRequest"),v.setRequestHeader("Accept",a.dataType&&a.accepts[a.dataType]?a.accepts[a.dataType]+", */*; q=0.01":a.accepts._default)}catch(b){}if(a.beforeSend&&a.beforeSend.call(a.context,v,a)===!1)return a.global&&1===y.active--&&y.event.trigger("ajaxStop"),v.abort(),!1;a.global&&y.triggerGlobal(a,"ajaxSend",[v,a]);var x=v.onreadystatechange=function(e){if(v&&0!==v.readyState&&"abort"!==e){if(!m&&v&&(4===v.readyState||"timeout"===e)){m=!0,v.onreadystatechange=y.noop,i="timeout"===e?"timeout":y.httpSuccess(v)?a.ifModified&&y.httpNotModified(v,a.url)?"notmodified":"success":"error";var t;if("success"===i)try{o=y.httpData(v,a.dataType,a)}catch(n){i="parsererror",t=n}"success"===i||"notmodified"===i?r||y.handleSuccess(a,v,i,o):y.handleError(a,v,i,t),r||y.handleComplete(a,v,i,o),"timeout"===e&&v.abort(),a.async&&(v=null)}}else m||y.handleComplete(a,v,i,o),m=!0,v&&(v.onreadystatechange=y.noop)};try{var T=v.abort;v.abort=function(){v&&Function.prototype.call.call(T,v),x("abort")}}catch(N){}a.async&&a.timeout>0&&setTimeout(function(){v&&!m&&x("timeout")},a.timeout);try{v.send(l||null==a.data?null:a.data)}catch(w){y.handleError(a,v,null,w),y.handleComplete(a,v,i,o)}return a.async||x(),v}},param:function(e,n){var r=[],i=function(e,t){t=y.isFunction(t)?t():t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=y.ajaxSettings.traditional),y.isArray(e)||e.jquery)y.each(e,function(){i(this.name,this.value)});else for(var o in e)d(o,e[o],n,i);return r.join("&").replace(St,"+")}}),y.extend({active:0,lastModified:{},etag:{},handleError:function(e,t,n,r){e.error&&e.error.call(e.context,t,n,r),e.global&&y.triggerGlobal(e,"ajaxError",[t,e,r])},handleSuccess:function(e,t,n,r){e.success&&e.success.call(e.context,r,n,t),e.global&&y.triggerGlobal(e,"ajaxSuccess",[t,e])},handleComplete:function(e,t,n){e.complete&&e.complete.call(e.context,t,n),e.global&&y.triggerGlobal(e,"ajaxComplete",[t,e]),e.global&&1===y.active--&&y.event.trigger("ajaxStop")
},triggerGlobal:function(e,t,n){(e.context&&null==e.context.url?y(e.context):y.event).trigger(t,n)},httpSuccess:function(e){try{return!e.status&&"file:"===location.protocol||e.status>=200&&e.status<300||304===e.status||1223===e.status}catch(t){}return!1},httpNotModified:function(e,t){var n=e.getResponseHeader("Last-Modified"),r=e.getResponseHeader("Etag");return n&&(y.lastModified[t]=n),r&&(y.etag[t]=r),304===e.status},httpData:function(e,t,n){var r=e.getResponseHeader("content-type")||"",i="xml"===t||!t&&r.indexOf("xml")>=0;return e=i?e.responseXML:e.responseText,i&&"parsererror"===e.documentElement.nodeName&&y.error("parsererror"),n&&n.dataFilter&&(e=n.dataFilter(e,t)),"string"==typeof e&&("json"===t||!t&&r.indexOf("json")>=0?e=y.parseJSON(e):("script"===t||!t&&r.indexOf("javascript")>=0)&&y.globalEval(e)),e}}),e.ActiveXObject&&(y.ajaxSettings.xhr=function(){if("file:"!==e.location.protocol)try{return new e.XMLHttpRequest}catch(t){}try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(n){}}),y.support.ajax=!!y.ajaxSettings.xhr();var Lt,jt={},kt=/^(?:toggle|show|hide)$/,Dt=/^([+\-]=)?([\d+.\-]+)(.*)$/,Ot=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];y.fn.extend({show:function(e,t,n){if(e||0===e)return this.animate(p("show",3),e,t,n);n=0;for(var r=this.length;r>n;n++)e=this[n],t=e.style.display,y.data(e,"olddisplay")||"none"!==t||(t=e.style.display=""),""===t&&"none"===y.css(e,"display")&&y.data(e,"olddisplay",h(e.nodeName));for(n=0;r>n;n++)e=this[n],t=e.style.display,(""===t||"none"===t)&&(e.style.display=y.data(e,"olddisplay")||"");return this},hide:function(e,t,n){if(e||0===e)return this.animate(p("hide",3),e,t,n);for(e=0,t=this.length;t>e;e++)n=y.css(this[e],"display"),"none"!==n&&y.data(this[e],"olddisplay",n);for(e=0;t>e;e++)this[e].style.display="none";return this},_toggle:y.fn.toggle,toggle:function(e,t,n){var r="boolean"==typeof e;return y.isFunction(e)&&y.isFunction(t)?this._toggle.apply(this,arguments):null==e||r?this.each(function(){var t=r?e:y(this).is(":hidden");y(this)[t?"show":"hide"]()}):this.animate(p("toggle",3),e,t,n),this},fadeTo:function(e,t,n,r){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=y.speed(t,n,r);return y.isEmptyObject(e)?this.each(i.complete):this[i.queue===!1?"each":"queue"](function(){var t,n=y.extend({},i),r=1===this.nodeType,o=r&&y(this).is(":hidden"),a=this;for(t in e){var s=y.camelCase(t);if(t!==s&&(e[s]=e[t],delete e[t],t=s),"hide"===e[t]&&o||"show"===e[t]&&!o)return n.complete.call(this);!r||"height"!==t&&"width"!==t||(n.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===y.css(this,"display")&&"none"===y.css(this,"float")&&(y.support.inlineBlockNeedsLayout?"inline"===h(this.nodeName)?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1):this.style.display="inline-block")),y.isArray(e[t])&&((n.specialEasing=n.specialEasing||{})[t]=e[t][1],e[t]=e[t][0])}return null!=n.overflow&&(this.style.overflow="hidden"),n.curAnim=y.extend({},e),y.each(e,function(t,r){var i=new y.fx(a,n,t);if(kt.test(r))i["toggle"===r?o?"show":"hide":r](e);else{var s=Dt.exec(r),l=i.cur()||0;if(s){var u=parseFloat(s[2]),c=s[3]||"px";"px"!==c&&(y.style(a,t,(u||1)+c),l=(u||1)/i.cur()*l,y.style(a,t,l+c)),s[1]&&(u=("-="===s[1]?-1:1)*u+l),i.custom(l,u,c)}else i.custom(l,r,"")}}),!0})},stop:function(e,t){var n=y.timers;return e&&this.queue([]),this.each(function(){for(var e=n.length-1;e>=0;e--)n[e].elem===this&&(t&&n[e](!0),n.splice(e,1))}),t||this.dequeue(),this}}),y.each({slideDown:p("show",1),slideUp:p("hide",1),slideToggle:p("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){y.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),y.extend({speed:function(e,t,n){var r=e&&"object"==typeof e?y.extend({},e):{complete:n||!n&&t||y.isFunction(e)&&e,duration:e,easing:n&&t||t&&!y.isFunction(t)&&t};return r.duration=y.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in y.fx.speeds?y.fx.speeds[r.duration]:y.fx.speeds._default,r.old=r.complete,r.complete=function(){r.queue!==!1&&y(this).dequeue(),y.isFunction(r.old)&&r.old.call(this)},r},easing:{linear:function(e,t,n,r){return n+r*e},swing:function(e,t,n,r){return(-Math.cos(e*Math.PI)/2+.5)*r+n}},timers:[],fx:function(e,t,n){this.options=t,this.elem=e,this.prop=n,t.orig||(t.orig={})}}),y.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(y.fx.step[this.prop]||y.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var e=parseFloat(y.css(this.elem,this.prop));return e&&e>-1e4?e:0},custom:function(e,t,n){function r(e){return i.step(e)}var i=this,o=y.fx;this.startTime=y.now(),this.start=e,this.end=t,this.unit=n||this.unit||"px",this.now=this.start,this.pos=this.state=0,r.elem=this.elem,r()&&y.timers.push(r)&&!Lt&&(Lt=setInterval(o.tick,o.interval))},show:function(){this.options.orig[this.prop]=y.style(this.elem,this.prop),this.options.show=!0,this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),y(this.elem).show()},hide:function(){this.options.orig[this.prop]=y.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(e){var t=y.now(),n=!0;if(e||t>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var r in this.options.curAnim)this.options.curAnim[r]!==!0&&(n=!1);if(n){if(null!=this.options.overflow&&!y.support.shrinkWrapBlocks){var i=this.elem,o=this.options;y.each(["","X","Y"],function(e,t){i.style["overflow"+t]=o.overflow[e]})}if(this.options.hide&&y(this.elem).hide(),this.options.hide||this.options.show)for(var a in this.options.curAnim)y.style(this.elem,a,this.options.orig[a]);this.options.complete.call(this.elem)}return!1}return e=t-this.startTime,this.state=e/this.options.duration,t=this.options.easing||(y.easing.swing?"swing":"linear"),this.pos=y.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||t](this.state,e,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update(),!0}},y.extend(y.fx,{tick:function(){for(var e=y.timers,t=0;t<e.length;t++)e[t]()||e.splice(t--,1);e.length||y.fx.stop()},interval:13,stop:function(){clearInterval(Lt),Lt=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){y.style(e.elem,"opacity",e.now)},_default:function(e){e.elem.style&&null!=e.elem.style[e.prop]?e.elem.style[e.prop]=("width"===e.prop||"height"===e.prop?Math.max(0,e.now):e.now)+e.unit:e.elem[e.prop]=e.now}}}),y.expr&&y.expr.filters&&(y.expr.filters.animated=function(e){return y.grep(y.timers,function(t){return e===t.elem}).length});var Mt=/^t(?:able|d|h)$/i,Bt=/^(?:body|html)$/i;y.fn.offset="getBoundingClientRect"in g.documentElement?function(e){var t,n=this[0];if(e)return this.each(function(t){y.offset.setOffset(this,e,t)});if(!n||!n.ownerDocument)return null;if(n===n.ownerDocument.body)return y.offset.bodyOffset(n);try{t=n.getBoundingClientRect()}catch(r){}var i=n.ownerDocument,o=i.documentElement;return t&&y.contains(o,n)?(n=i.body,i=m(i),{top:t.top+(i.pageYOffset||y.support.boxModel&&o.scrollTop||n.scrollTop)-(o.clientTop||n.clientTop||0),left:t.left+(i.pageXOffset||y.support.boxModel&&o.scrollLeft||n.scrollLeft)-(o.clientLeft||n.clientLeft||0)}):t||{top:0,left:0}}:function(e){var t=this[0];if(e)return this.each(function(t){y.offset.setOffset(this,e,t)});if(!t||!t.ownerDocument)return null;if(t===t.ownerDocument.body)return y.offset.bodyOffset(t);y.offset.initialize();var n,r=t.offsetParent,i=t.ownerDocument,o=i.documentElement,a=i.body;n=(i=i.defaultView)?i.getComputedStyle(t,null):t.currentStyle;for(var s=t.offsetTop,l=t.offsetLeft;(t=t.parentNode)&&t!==a&&t!==o&&(!y.offset.supportsFixedPosition||"fixed"!==n.position);)n=i?i.getComputedStyle(t,null):t.currentStyle,s-=t.scrollTop,l-=t.scrollLeft,t===r&&(s+=t.offsetTop,l+=t.offsetLeft,!y.offset.doesNotAddBorder||y.offset.doesAddBorderForTableAndCells&&Mt.test(t.nodeName)||(s+=parseFloat(n.borderTopWidth)||0,l+=parseFloat(n.borderLeftWidth)||0),r=t.offsetParent),y.offset.subtractsBorderForOverflowNotVisible&&"visible"!==n.overflow&&(s+=parseFloat(n.borderTopWidth)||0,l+=parseFloat(n.borderLeftWidth)||0),n=n;return("relative"===n.position||"static"===n.position)&&(s+=a.offsetTop,l+=a.offsetLeft),y.offset.supportsFixedPosition&&"fixed"===n.position&&(s+=Math.max(o.scrollTop,a.scrollTop),l+=Math.max(o.scrollLeft,a.scrollLeft)),{top:s,left:l}},y.offset={initialize:function(){var e,t,n,r=g.body,i=g.createElement("div"),o=parseFloat(y.css(r,"marginTop"))||0;y.extend(i.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),i.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",r.insertBefore(i,r.firstChild),e=i.firstChild,t=e.firstChild,n=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=5!==t.offsetTop,this.doesAddBorderForTableAndCells=5===n.offsetTop,t.style.position="fixed",t.style.top="20px",this.supportsFixedPosition=20===t.offsetTop||15===t.offsetTop,t.style.position=t.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=-5===t.offsetTop,this.doesNotIncludeMarginInBodyOffset=r.offsetTop!==o,r.removeChild(i),y.offset.initialize=y.noop},bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return y.offset.initialize(),y.offset.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(y.css(e,"marginTop"))||0,n+=parseFloat(y.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=y.css(e,"position");"static"===r&&(e.style.position="relative");var i=y(e),o=i.offset(),a=y.css(e,"top"),s=y.css(e,"left"),l="absolute"===r&&y.inArray("auto",[a,s])>-1;r={};var u={};l&&(u=i.position()),a=l?u.top:parseInt(a,10)||0,s=l?u.left:parseInt(s,10)||0,y.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(r.top=t.top-o.top+a),null!=t.left&&(r.left=t.left-o.left+s),"using"in t?t.using.call(e,r):i.css(r)}},y.fn.extend({position:function(){if(!this[0])return null;var e=this[0],t=this.offsetParent(),n=this.offset(),r=Bt.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(y.css(e,"marginTop"))||0,n.left-=parseFloat(y.css(e,"marginLeft"))||0,r.top+=parseFloat(y.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(y.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||g.body;e&&!Bt.test(e.nodeName)&&"static"===y.css(e,"position");)e=e.offsetParent;return e})}}),y.each(["Left","Top"],function(e,n){var r="scroll"+n;y.fn[r]=function(n){var i,o=this[0];return o?n!==t?this.each(function(){(i=m(this))?i.scrollTo(e?y(i).scrollLeft():n,e?n:y(i).scrollTop()):this[r]=n}):(i=m(o))?"pageXOffset"in i?i[e?"pageYOffset":"pageXOffset"]:y.support.boxModel&&i.document.documentElement[r]||i.document.body[r]:o[r]:null}}),y.each(["Height","Width"],function(e,n){var r=n.toLowerCase();y.fn["inner"+n]=function(){return this[0]?parseFloat(y.css(this[0],r,"padding")):null},y.fn["outer"+n]=function(e){return this[0]?parseFloat(y.css(this[0],r,e?"margin":"border")):null},y.fn[r]=function(e){var i=this[0];if(!i)return null==e?null:this;if(y.isFunction(e))return this.each(function(t){var n=y(this);n[r](e.call(this,t,n[r]()))});if(y.isWindow(i))return"CSS1Compat"===i.document.compatMode&&i.document.documentElement["client"+n]||i.document.body["client"+n];if(9===i.nodeType)return Math.max(i.documentElement["client"+n],i.body["scroll"+n],i.documentElement["scroll"+n],i.body["offset"+n],i.documentElement["offset"+n]);if(e===t){i=y.css(i,r);var o=parseFloat(i);return y.isNaN(o)?i:o}return this.css(r,"string"==typeof e?e:e+"px")}})}(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.error( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function() {
  var CSRFToken, Click, ComponentUrl, Link, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, constrainPageCacheTo, createDocument, currentState, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice;

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  currentState = null;

  loadedAssets = null;

  referer = null;

  createDocument = null;

  xhr = null;

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  fetchReplacement = function(url, onLoadFunction) {
    if (onLoadFunction == null) {
      onLoadFunction = (function(_this) {
        return function() {};
      })(this);
    }
    triggerEvent('page:fetch', {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent('page:receive', {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        reflectRedirectedUrl();
        onLoadFunction();
        return triggerEvent('page:load');
      } else {
        return document.location.href = url.absolute;
      }
    };
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent('page:restore');
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, key, pageCacheKeys, _i, _len, _results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    _results = [];
    for (_i = 0, _len = pageCacheKeys.length; _i < _len; _i++) {
      key = pageCacheKeys[_i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent('page:expire', pageCache[key]);
      _results.push(delete pageCache[key]);
    }
    return _results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    triggerEvent('page:change');
    return triggerEvent('page:update');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref, _ref1;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref = script.type) === '' || _ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref1 = script.attributes;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        attr = _ref1[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location.href + preservedHash);
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  popCookie = function(name) {
    var value, _ref;
    value = ((_ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? _ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function() {
    return !triggerEvent('page:before-change');
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref;
      return (400 <= (_ref = xhr.status) && _ref < 600);
    };
    validContent = function() {
      return xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref, _results;
      _ref = doc.head.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref, _results;
      if (a.length > b.length) {
        _ref = [b, a], a = _ref[0], b = _ref[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.body), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref = testDoc.body) != null ? _ref.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  ComponentUrl = (function() {
    function ComponentUrl(original) {
      this.original = original != null ? original : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype._parse = function() {
      var _ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      _ref = this.link, this.href = _ref.href, this.protocol = _ref.protocol, this.host = _ref.host, this.hostname = _ref.hostname, this.port = _ref.port, this.pathname = _ref.pathname, this.search = _ref.search, this.hash = _ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(_super) {
    __extends(Link, _super);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, _i, _len;
      extensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = extensions.length; _i < _len; _i++) {
        extension = extensions[_i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link) {
      this.link = link;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this._crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    Link.prototype._anchored = function() {
      var current;
      return ((this.hash && this.withoutHash()) === (current = new ComponentUrl).withoutHash()) || (this.href === current.href + '#');
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.link;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event) {
      this.event = event;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented()) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent('page:change');
      return triggerEvent('page:update');
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent('page:update');
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, _ref;
    if ((_ref = event.state) != null ? _ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (_ref = popCookie('request_method')) === 'GET' || _ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks
  };

}).call(this);

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//




;
