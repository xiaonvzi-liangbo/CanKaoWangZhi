DomainMap={cookieDomain:'.163.com',serverHostName:'blog.163.com',serverDomain:'.blog.163.com',getParentDomain:function(s){if(s.indexOf('@')!=-1||s.indexOf('_')!=-1||s.indexOf('..')!=-1||s.charAt(s.length-1)=='.')
return this.serverHostName+'/'+s;return s+this.serverDomain;}};var hexcase=0;var b64pad="";var chrsz=8;function hex_md5(s){return binl2hex(core_md5(str2binl(s),s.length*chrsz));}
function b64_md5(s){return binl2b64(core_md5(str2binl(s),s.length*chrsz));}
function str_md5(s){return binl2str(core_md5(str2binl(s),s.length*chrsz));}
function hex_hmac_md5(key,data){return binl2hex(core_hmac_md5(key,data));}
function b64_hmac_md5(key,data){return binl2b64(core_hmac_md5(key,data));}
function str_hmac_md5(key,data){return binl2str(core_hmac_md5(key,data));}
function md5_vm_test()
{return hex_md5("abc")=="900150983cd24fb0d6963f7d28e17f72";}
function core_md5(x,len)
{x[len>>5]|=0x80<<((len)%32);x[(((len+64)>>>9)<<4)+14]=len;var a=1732584193;var b=-271733879;var c=-1732584194;var d=271733878;for(var i=0;i<x.length;i+=16)
{var olda=a;var oldb=b;var oldc=c;var oldd=d;a=md5_ff(a,b,c,d,x[i+0],7,-680876936);d=md5_ff(d,a,b,c,x[i+1],12,-389564586);c=md5_ff(c,d,a,b,x[i+2],17,606105819);b=md5_ff(b,c,d,a,x[i+3],22,-1044525330);a=md5_ff(a,b,c,d,x[i+4],7,-176418897);d=md5_ff(d,a,b,c,x[i+5],12,1200080426);c=md5_ff(c,d,a,b,x[i+6],17,-1473231341);b=md5_ff(b,c,d,a,x[i+7],22,-45705983);a=md5_ff(a,b,c,d,x[i+8],7,1770035416);d=md5_ff(d,a,b,c,x[i+9],12,-1958414417);c=md5_ff(c,d,a,b,x[i+10],17,-42063);b=md5_ff(b,c,d,a,x[i+11],22,-1990404162);a=md5_ff(a,b,c,d,x[i+12],7,1804603682);d=md5_ff(d,a,b,c,x[i+13],12,-40341101);c=md5_ff(c,d,a,b,x[i+14],17,-1502002290);b=md5_ff(b,c,d,a,x[i+15],22,1236535329);a=md5_gg(a,b,c,d,x[i+1],5,-165796510);d=md5_gg(d,a,b,c,x[i+6],9,-1069501632);c=md5_gg(c,d,a,b,x[i+11],14,643717713);b=md5_gg(b,c,d,a,x[i+0],20,-373897302);a=md5_gg(a,b,c,d,x[i+5],5,-701558691);d=md5_gg(d,a,b,c,x[i+10],9,38016083);c=md5_gg(c,d,a,b,x[i+15],14,-660478335);b=md5_gg(b,c,d,a,x[i+4],20,-405537848);a=md5_gg(a,b,c,d,x[i+9],5,568446438);d=md5_gg(d,a,b,c,x[i+14],9,-1019803690);c=md5_gg(c,d,a,b,x[i+3],14,-187363961);b=md5_gg(b,c,d,a,x[i+8],20,1163531501);a=md5_gg(a,b,c,d,x[i+13],5,-1444681467);d=md5_gg(d,a,b,c,x[i+2],9,-51403784);c=md5_gg(c,d,a,b,x[i+7],14,1735328473);b=md5_gg(b,c,d,a,x[i+12],20,-1926607734);a=md5_hh(a,b,c,d,x[i+5],4,-378558);d=md5_hh(d,a,b,c,x[i+8],11,-2022574463);c=md5_hh(c,d,a,b,x[i+11],16,1839030562);b=md5_hh(b,c,d,a,x[i+14],23,-35309556);a=md5_hh(a,b,c,d,x[i+1],4,-1530992060);d=md5_hh(d,a,b,c,x[i+4],11,1272893353);c=md5_hh(c,d,a,b,x[i+7],16,-155497632);b=md5_hh(b,c,d,a,x[i+10],23,-1094730640);a=md5_hh(a,b,c,d,x[i+13],4,681279174);d=md5_hh(d,a,b,c,x[i+0],11,-358537222);c=md5_hh(c,d,a,b,x[i+3],16,-722521979);b=md5_hh(b,c,d,a,x[i+6],23,76029189);a=md5_hh(a,b,c,d,x[i+9],4,-640364487);d=md5_hh(d,a,b,c,x[i+12],11,-421815835);c=md5_hh(c,d,a,b,x[i+15],16,530742520);b=md5_hh(b,c,d,a,x[i+2],23,-995338651);a=md5_ii(a,b,c,d,x[i+0],6,-198630844);d=md5_ii(d,a,b,c,x[i+7],10,1126891415);c=md5_ii(c,d,a,b,x[i+14],15,-1416354905);b=md5_ii(b,c,d,a,x[i+5],21,-57434055);a=md5_ii(a,b,c,d,x[i+12],6,1700485571);d=md5_ii(d,a,b,c,x[i+3],10,-1894986606);c=md5_ii(c,d,a,b,x[i+10],15,-1051523);b=md5_ii(b,c,d,a,x[i+1],21,-2054922799);a=md5_ii(a,b,c,d,x[i+8],6,1873313359);d=md5_ii(d,a,b,c,x[i+15],10,-30611744);c=md5_ii(c,d,a,b,x[i+6],15,-1560198380);b=md5_ii(b,c,d,a,x[i+13],21,1309151649);a=md5_ii(a,b,c,d,x[i+4],6,-145523070);d=md5_ii(d,a,b,c,x[i+11],10,-1120210379);c=md5_ii(c,d,a,b,x[i+2],15,718787259);b=md5_ii(b,c,d,a,x[i+9],21,-343485551);a=safe_add(a,olda);b=safe_add(b,oldb);c=safe_add(c,oldc);d=safe_add(d,oldd);}
return Array(a,b,c,d);}
function md5_cmn(q,a,b,x,s,t)
{return safe_add(bit_rol(safe_add(safe_add(a,q),safe_add(x,t)),s),b);}
function md5_ff(a,b,c,d,x,s,t)
{return md5_cmn((b&c)|((~b)&d),a,b,x,s,t);}
function md5_gg(a,b,c,d,x,s,t)
{return md5_cmn((b&d)|(c&(~d)),a,b,x,s,t);}
function md5_hh(a,b,c,d,x,s,t)
{return md5_cmn(b^c^d,a,b,x,s,t);}
function md5_ii(a,b,c,d,x,s,t)
{return md5_cmn(c^(b|(~d)),a,b,x,s,t);}
function core_hmac_md5(key,data)
{var bkey=str2binl(key);if(bkey.length>16)bkey=core_md5(bkey,key.length*chrsz);var ipad=Array(16),opad=Array(16);for(var i=0;i<16;i++)
{ipad[i]=bkey[i]^0x36363636;opad[i]=bkey[i]^0x5C5C5C5C;}
var hash=core_md5(ipad.concat(str2binl(data)),512+data.length*chrsz);return core_md5(opad.concat(hash),512+128);}
function safe_add(x,y)
{var lsw=(x&0xFFFF)+(y&0xFFFF);var msw=(x>>16)+(y>>16)+(lsw>>16);return(msw<<16)|(lsw&0xFFFF);}
function bit_rol(num,cnt)
{return(num<<cnt)|(num>>>(32-cnt));}
function str2binl(str)
{var bin=Array();var mask=(1<<chrsz)-1;for(var i=0;i<str.length*chrsz;i+=chrsz)
bin[i>>5]|=(str.charCodeAt(i/chrsz)&mask)<<(i%32);return bin;}
function binl2str(bin)
{var str="";var mask=(1<<chrsz)-1;for(var i=0;i<bin.length*32;i+=chrsz)
str+=String.fromCharCode((bin[i>>5]>>>(i%32))&mask);return str;}
function binl2hex(binarray)
{var hex_tab=hexcase?"0123456789ABCDEF":"0123456789abcdef";var str="";for(var i=0;i<binarray.length*4;i++)
{str+=hex_tab.charAt((binarray[i>>2]>>((i%4)*8+4))&0xF)+
hex_tab.charAt((binarray[i>>2]>>((i%4)*8))&0xF);}
return str;}
function binl2b64(binarray)
{var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var str="";for(var i=0;i<binarray.length*4;i+=3)
{var triplet=(((binarray[i>>2]>>8*(i%4))&0xFF)<<16)|(((binarray[i+1>>2]>>8*((i+1)%4))&0xFF)<<8)|((binarray[i+2>>2]>>8*((i+2)%4))&0xFF);for(var j=0;j<4;j++)
{if(i*8+j*6>binarray.length*32)str+=b64pad;else str+=tab.charAt((triplet>>6*(3-j))&0x3F);}}
return str;}
var Prototype={Version:'1.4.0',ScriptFragment:'(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)',emptyFunction:function(){},K:function(x){return x}}
var Class={create:function(){return function(){this.initialize.apply(this,arguments);}}}
var Abstract=new Object();Object.extend=function(destination,source){for(property in source){destination[property]=source[property];}
return destination;}
Object.inspect=function(object){try{if(object==undefined)return'undefined';if(object==null)return'null';return object.inspect?object.inspect():object.toString();}catch(e){if(e instanceof RangeError)return'...';throw e;}}
Function.prototype.bind=function(){var __method=this,args=$A(arguments),object=args.shift();return function(){return __method.apply(object,args.concat($A(arguments)));}}
Function.prototype.bindAsEventListener=function(object){var __method=this;return function(event){return __method.call(object,event||window.event);}}
Object.extend(Number.prototype,{toColorPart:function(){var digits=this.toString(16);if(this<16)return'0'+digits;return digits;},succ:function(){return this+1;},times:function(iterator){$R(0,this,true).each(iterator);return this;}});var Try={these:function(){var returnValue;for(var i=0;i<arguments.length;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;}}
var PeriodicalExecuter=Class.create();PeriodicalExecuter.prototype={initialize:function(callback,frequency){this.callback=callback;this.frequency=frequency;this.currentlyExecuting=false;this.registerCallback();},registerCallback:function(){setInterval(this.onTimerEvent.bind(this),this.frequency*1000);},onTimerEvent:function(){if(!this.currentlyExecuting){try{this.currentlyExecuting=true;this.callback();}finally{this.currentlyExecuting=false;}}}}
function $(){var elements=new Array();for(var i=0;i<arguments.length;i++){var element=arguments[i];if(typeof element=='string')
element=document.getElementById(element);if(arguments.length==1)
return element;elements.push(element);}
return elements;}
Object.extend(String.prototype,{stripTags:function(){return this.replace(/<\/?[^>]+>/gi,'');},stripScripts:function(){return this.replace(new RegExp(Prototype.ScriptFragment,'img'),'');},extractScripts:function(){var matchAll=new RegExp(Prototype.ScriptFragment,'img');var matchOne=new RegExp(Prototype.ScriptFragment,'im');return(this.match(matchAll)||[]).map(function(scriptTag){return(scriptTag.match(matchOne)||['',''])[1];});},evalScripts:function(){return this.extractScripts().map(eval);},escapeHTML:function(){var div=document.createElement('div');var text=document.createTextNode(this);div.appendChild(text);return div.innerHTML;},unescapeHTML:function(){var div=document.createElement('div');div.innerHTML=this.stripTags();return div.childNodes[0]?div.childNodes[0].nodeValue:'';},toQueryParams:function(){var pairs=this.match(/^\??(.*)$/)[1].split('&');return pairs.inject({},function(params,pairString){var pair=pairString.split('=');params[pair[0]]=pair[1];return params;});},toArray:function(){return this.split('');},camelize:function(){var oStringList=this.split('-');if(oStringList.length==1)return oStringList[0];var camelizedString=this.indexOf('-')==0?oStringList[0].charAt(0).toUpperCase()+oStringList[0].substring(1):oStringList[0];for(var i=1,len=oStringList.length;i<len;i++){var s=oStringList[i];camelizedString+=s.charAt(0).toUpperCase()+s.substring(1);}
return camelizedString;},inspect:function(){return"'"+this.replace('\\','\\\\').replace("'",'\\\'')+"'";}});String.prototype.parseQuery=String.prototype.toQueryParams;var $break=new Object();var $continue=new Object();var Enumerable={each:function(iterator){var index=0;try{this._each(function(value){try{iterator(value,index++);}catch(e){if(e!=$continue)throw e;}});}catch(e){if(e!=$break)throw e;}},all:function(iterator){var result=true;this.each(function(value,index){result=result&&!!(iterator||Prototype.K)(value,index);if(!result)throw $break;});return result;},any:function(iterator){var result=true;this.each(function(value,index){if(result=!!(iterator||Prototype.K)(value,index))
throw $break;});return result;},collect:function(iterator){var results=[];this.each(function(value,index){results.push(iterator(value,index));});return results;},detect:function(iterator){var result;this.each(function(value,index){if(iterator(value,index)){result=value;throw $break;}});return result;},findAll:function(iterator){var results=[];this.each(function(value,index){if(iterator(value,index))
results.push(value);});return results;},grep:function(pattern,iterator){var results=[];this.each(function(value,index){var stringValue=value.toString();if(stringValue.match(pattern))
results.push((iterator||Prototype.K)(value,index));})
return results;},include:function(object){var found=false;this.each(function(value){if(value==object){found=true;throw $break;}});return found;},inject:function(memo,iterator){this.each(function(value,index){memo=iterator(memo,value,index);});return memo;},invoke:function(method){var args=$A(arguments).slice(1);return this.collect(function(value){return value[method].apply(value,args);});},max:function(iterator){var result;this.each(function(value,index){value=(iterator||Prototype.K)(value,index);if(value>=(result||value))
result=value;});return result;},min:function(iterator){var result;this.each(function(value,index){value=(iterator||Prototype.K)(value,index);if(value<=(result||value))
result=value;});return result;},partition:function(iterator){var trues=[],falses=[];this.each(function(value,index){((iterator||Prototype.K)(value,index)?trues:falses).push(value);});return[trues,falses];},pluck:function(property){var results=[];this.each(function(value,index){results.push(value[property]);});return results;},reject:function(iterator){var results=[];this.each(function(value,index){if(!iterator(value,index))
results.push(value);});return results;},sortBy:function(iterator){return this.collect(function(value,index){return{value:value,criteria:iterator(value,index)};}).sort(function(left,right){var a=left.criteria,b=right.criteria;return a<b?-1:a>b?1:0;}).pluck('value');},toArray:function(){return this.collect(Prototype.K);},zip:function(){var iterator=Prototype.K,args=$A(arguments);if(typeof args.last()=='function')
iterator=args.pop();var collections=[this].concat(args).map($A);return this.map(function(value,index){iterator(value=collections.pluck(index));return value;});},inspect:function(){return'#<Enumerable:'+this.toArray().inspect()+'>';}}
Object.extend(Enumerable,{map:Enumerable.collect,find:Enumerable.detect,select:Enumerable.findAll,member:Enumerable.include,entries:Enumerable.toArray});var $A=Array.from=function(iterable){if(!iterable)return[];if(iterable.toArray){return iterable.toArray();}else{var results=[];for(var i=0;i<iterable.length;i++)
results.push(iterable[i]);return results;}}
Object.extend(Array.prototype,Enumerable);Array.prototype._reverse=Array.prototype.reverse;Object.extend(Array.prototype,{_each:function(iterator){for(var i=0;i<this.length;i++)
iterator(this[i]);},clear:function(){this.length=0;return this;},first:function(){return this[0];},last:function(){return this[this.length-1];},compact:function(){return this.select(function(value){return value!=undefined||value!=null;});},flatten:function(){return this.inject([],function(array,value){return array.concat(value.constructor==Array?value.flatten():[value]);});},without:function(){var values=$A(arguments);return this.select(function(value){return!values.include(value);});},indexOf:function(object){for(var i=0;i<this.length;i++)
if(this[i]==object)return i;return-1;},reverse:function(inline){return(inline!==false?this:this.toArray())._reverse();},shift:function(){var result=this[0];for(var i=0;i<this.length-1;i++)
this[i]=this[i+1];this.length--;return result;},inspect:function(){return'['+this.map(Object.inspect).join(', ')+']';}});var Hash={_each:function(iterator){for(key in this){var value=this[key];if(typeof value=='function')continue;var pair=[key,value];pair.key=key;pair.value=value;iterator(pair);}},keys:function(){return this.pluck('key');},values:function(){return this.pluck('value');},merge:function(hash){return $H(hash).inject($H(this),function(mergedHash,pair){mergedHash[pair.key]=pair.value;return mergedHash;});},toQueryString:function(){return this.map(function(pair){return pair.map(encodeURIComponent).join('=');}).join('&');},inspect:function(){return'#<Hash:{'+this.map(function(pair){return pair.map(Object.inspect).join(': ');}).join(', ')+'}>';}}
function $H(object){var hash=Object.extend({},object||{});Object.extend(hash,Enumerable);Object.extend(hash,Hash);return hash;}
ObjectRange=Class.create();Object.extend(ObjectRange.prototype,Enumerable);Object.extend(ObjectRange.prototype,{initialize:function(start,end,exclusive){this.start=start;this.end=end;this.exclusive=exclusive;},_each:function(iterator){var value=this.start;do{iterator(value);value=value.succ();}while(this.include(value));},include:function(value){if(value<this.start)
return false;if(this.exclusive)
return value<this.end;return value<=this.end;}});var $R=function(start,end,exclusive){return new ObjectRange(start,end,exclusive);}
var Ajax={getTransport:function(){return Try.these(function(){return new ActiveXObject('Msxml2.XMLHTTP')},function(){return new ActiveXObject('Microsoft.XMLHTTP')},function(){return new XMLHttpRequest()})||false;},activeRequestCount:0}
Ajax.Responders={responders:[],_each:function(iterator){this.responders._each(iterator);},register:function(responderToAdd){if(!this.include(responderToAdd))
this.responders.push(responderToAdd);},unregister:function(responderToRemove){this.responders=this.responders.without(responderToRemove);},dispatch:function(callback,request,transport,json){this.each(function(responder){if(responder[callback]&&typeof responder[callback]=='function'){try{responder[callback].apply(responder,[request,transport,json]);}catch(e){}}});}};Object.extend(Ajax.Responders,Enumerable);Ajax.Responders.register({onCreate:function(){Ajax.activeRequestCount++;},onComplete:function(){Ajax.activeRequestCount--;}});Ajax.Base=function(){};Ajax.Base.prototype={setOptions:function(options){this.options={method:'post',asynchronous:true,parameters:''}
Object.extend(this.options,options||{});},responseIsSuccess:function(){return this.transport.status==undefined||this.transport.status==0||(this.transport.status>=200&&this.transport.status<300);},responseIsFailure:function(){return!this.responseIsSuccess();}}
Ajax.Request=Class.create();Ajax.Request.Events=['Uninitialized','Loading','Loaded','Interactive','Complete'];Ajax.Request.prototype=Object.extend(new Ajax.Base(),{initialize:function(url,options){this.transport=Ajax.getTransport();this.setOptions(options);this.request(url);},request:function(url){var parameters=this.options.parameters||'';if(parameters.length>0)parameters+='&_=';try{this.url=url;if(this.options.method=='get'&&parameters.length>0)
this.url+=(this.url.match(/\?/)?'&':'?')+parameters;Ajax.Responders.dispatch('onCreate',this,this.transport);this.transport.open(this.options.method,this.url,this.options.asynchronous);if(this.options.asynchronous){this.transport.onreadystatechange=this.onStateChange.bind(this);setTimeout((function(){this.respondToReadyState(1)}).bind(this),10);}
this.setRequestHeaders();var body=this.options.postBody?this.options.postBody:parameters;this.transport.send(this.options.method=='post'?body:null);}catch(e){this.dispatchException(e);}},setRequestHeaders:function(){var requestHeaders=['X-Requested-With','XMLHttpRequest','X-Prototype-Version',Prototype.Version];if(this.options.method=='post'){requestHeaders.push('Content-type','application/x-www-form-urlencoded');if(this.transport.overrideMimeType)
requestHeaders.push('Connection','close');}
if(this.options.requestHeaders)
requestHeaders.push.apply(requestHeaders,this.options.requestHeaders);for(var i=0;i<requestHeaders.length;i+=2)
this.transport.setRequestHeader(requestHeaders[i],requestHeaders[i+1]);},onStateChange:function(){var readyState=this.transport.readyState;if(readyState!=1)
this.respondToReadyState(this.transport.readyState);},header:function(name){try{return this.transport.getResponseHeader(name);}catch(e){}},evalJSON:function(){try{return eval(this.header('X-JSON'));}catch(e){}},evalResponse:function(){try{return eval(this.transport.responseText);}catch(e){this.dispatchException(e);}},respondToReadyState:function(readyState){var event=Ajax.Request.Events[readyState];var transport=this.transport,json=this.evalJSON();if(event=='Complete'){try{(this.options['on'+this.transport.status]||this.options['on'+(this.responseIsSuccess()?'Success':'Failure')]||Prototype.emptyFunction)(transport,json);}catch(e){this.dispatchException(e);}
if((this.header('Content-type')||'').match(/^text\/javascript/i))
this.evalResponse();}
try{(this.options['on'+event]||Prototype.emptyFunction)(transport,json);Ajax.Responders.dispatch('on'+event,this,transport,json);}catch(e){this.dispatchException(e);}
if(event=='Complete')
this.transport.onreadystatechange=Prototype.emptyFunction;},dispatchException:function(exception){(this.options.onException||Prototype.emptyFunction)(this,exception);Ajax.Responders.dispatch('onException',this,exception);}});Ajax.Updater=Class.create();Object.extend(Object.extend(Ajax.Updater.prototype,Ajax.Request.prototype),{initialize:function(container,url,options){this.containers={success:container.success?$(container.success):$(container),failure:container.failure?$(container.failure):(container.success?null:$(container))}
this.transport=Ajax.getTransport();this.setOptions(options);var onComplete=this.options.onComplete||Prototype.emptyFunction;this.options.onComplete=(function(transport,object){this.updateContent();onComplete(transport,object);}).bind(this);this.request(url);},updateContent:function(){var receiver=this.responseIsSuccess()?this.containers.success:this.containers.failure;var response=this.transport.responseText;if(!this.options.evalScripts)
response=response.stripScripts();if(receiver){if(this.options.insertion){new this.options.insertion(receiver,response);}else{Element.update(receiver,response);}}
if(this.responseIsSuccess()){if(this.onComplete)
setTimeout(this.onComplete.bind(this),10);}}});Ajax.PeriodicalUpdater=Class.create();Ajax.PeriodicalUpdater.prototype=Object.extend(new Ajax.Base(),{initialize:function(container,url,options){this.setOptions(options);this.onComplete=this.options.onComplete;this.frequency=(this.options.frequency||2);this.decay=(this.options.decay||1);this.updater={};this.container=container;this.url=url;this.start();},start:function(){this.options.onComplete=this.updateComplete.bind(this);this.onTimerEvent();},stop:function(){this.updater.onComplete=undefined;clearTimeout(this.timer);(this.onComplete||Prototype.emptyFunction).apply(this,arguments);},updateComplete:function(request){if(this.options.decay){this.decay=(request.responseText==this.lastText?this.decay*this.options.decay:1);this.lastText=request.responseText;}
this.timer=setTimeout(this.onTimerEvent.bind(this),this.decay*this.frequency*1000);},onTimerEvent:function(){this.updater=new Ajax.Updater(this.container,this.url,this.options);}});document.getElementsByClassName=function(className,parentElement){var children=($(parentElement)||document.body).getElementsByTagName('*');return $A(children).inject([],function(elements,child){if(child.className.match(new RegExp("(^|\\s)"+className+"(\\s|$)")))
elements.push(child);return elements;});}
if(!window.Element){var Element=new Object();}
Object.extend(Element,{visible:function(element){return $(element).style.display!='none';},toggle:function(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);Element[Element.visible(element)?'hide':'show'](element);}},hide:function(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);element.style.display='none';}},show:function(){for(var i=0;i<arguments.length;i++){var element=$(arguments[i]);element.style.display='';}},remove:function(element){element=$(element);element.parentNode.removeChild(element);},update:function(element,html){$(element).innerHTML=html.stripScripts();setTimeout(function(){html.evalScripts()},10);},getHeight:function(element){element=$(element);return element.offsetHeight;},classNames:function(element){return new Element.ClassNames(element);},hasClassName:function(element,className){if(!(element=$(element)))return;return Element.classNames(element).include(className);},addClassName:function(element,className){if(!(element=$(element)))return;return Element.classNames(element).add(className);},removeClassName:function(element,className){if(!(element=$(element)))return;return Element.classNames(element).remove(className);},cleanWhitespace:function(element){element=$(element);for(var i=0;i<element.childNodes.length;i++){var node=element.childNodes[i];if(node.nodeType==3&&!/\S/.test(node.nodeValue))
Element.remove(node);}},empty:function(element){return $(element).innerHTML.match(/^\s*$/);},scrollTo:function(element){element=$(element);var x=element.x?element.x:element.offsetLeft,y=element.y?element.y:element.offsetTop;window.scrollTo(x,y);},getStyle:function(element,style){element=$(element);var value=element.style[style.camelize()];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var css=document.defaultView.getComputedStyle(element,null);value=css?css.getPropertyValue(style):null;}else if(element.currentStyle){value=element.currentStyle[style.camelize()];}}
if(window.opera&&['left','top','right','bottom'].include(style))
if(Element.getStyle(element,'position')=='static')value='auto';return value=='auto'?null:value;},setStyle:function(element,style){element=$(element);for(name in style)
element.style[name.camelize()]=style[name];},getDimensions:function(element){element=$(element);if(Element.getStyle(element,'display')!='none')
return{width:element.offsetWidth,height:element.offsetHeight};var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;els.visibility='hidden';els.position='absolute';els.display='';var originalWidth=element.clientWidth;var originalHeight=element.clientHeight;els.display='none';els.position=originalPosition;els.visibility=originalVisibility;return{width:originalWidth,height:originalHeight};},makePositioned:function(element){element=$(element);var pos=Element.getStyle(element,'position');if(pos=='static'||!pos){element._madePositioned=true;element.style.position='relative';if(window.opera){element.style.top=0;element.style.left=0;}}},undoPositioned:function(element){element=$(element);if(element._madePositioned){element._madePositioned=undefined;element.style.position=element.style.top=element.style.left=element.style.bottom=element.style.right='';}},makeClipping:function(element){element=$(element);if(element._overflow)return;element._overflow=element.style.overflow;if((Element.getStyle(element,'overflow')||'visible')!='hidden')
element.style.overflow='hidden';},undoClipping:function(element){element=$(element);if(element._overflow)return;element.style.overflow=element._overflow;element._overflow=undefined;}});var Toggle=new Object();Toggle.display=Element.toggle;Abstract.Insertion=function(adjacency){this.adjacency=adjacency;}
Abstract.Insertion.prototype={initialize:function(element,content){this.element=$(element);this.content=content.stripScripts();if(this.adjacency&&this.element.insertAdjacentHTML){try{this.element.insertAdjacentHTML(this.adjacency,this.content);}catch(e){if(this.element.tagName.toLowerCase()=='tbody'){this.insertContent(this.contentFromAnonymousTable());}else{throw e;}}}else{this.range=this.element.ownerDocument.createRange();if(this.initializeRange)this.initializeRange();this.insertContent([this.range.createContextualFragment(this.content)]);}
setTimeout(function(){content.evalScripts()},10);},contentFromAnonymousTable:function(){var div=document.createElement('div');div.innerHTML='<table><tbody>'+this.content+'</tbody></table>';return $A(div.childNodes[0].childNodes[0].childNodes);}}
var Insertion=new Object();Insertion.Before=Class.create();Insertion.Before.prototype=Object.extend(new Abstract.Insertion('beforeBegin'),{initializeRange:function(){this.range.setStartBefore(this.element);},insertContent:function(fragments){fragments.each((function(fragment){this.element.parentNode.insertBefore(fragment,this.element);}).bind(this));}});Insertion.Top=Class.create();Insertion.Top.prototype=Object.extend(new Abstract.Insertion('afterBegin'),{initializeRange:function(){this.range.selectNodeContents(this.element);this.range.collapse(true);},insertContent:function(fragments){fragments.reverse(false).each((function(fragment){this.element.insertBefore(fragment,this.element.firstChild);}).bind(this));}});Insertion.Bottom=Class.create();Insertion.Bottom.prototype=Object.extend(new Abstract.Insertion('beforeEnd'),{initializeRange:function(){this.range.selectNodeContents(this.element);this.range.collapse(this.element);},insertContent:function(fragments){fragments.each((function(fragment){this.element.appendChild(fragment);}).bind(this));}});Insertion.After=Class.create();Insertion.After.prototype=Object.extend(new Abstract.Insertion('afterEnd'),{initializeRange:function(){this.range.setStartAfter(this.element);},insertContent:function(fragments){fragments.each((function(fragment){this.element.parentNode.insertBefore(fragment,this.element.nextSibling);}).bind(this));}});Element.ClassNames=Class.create();Element.ClassNames.prototype={initialize:function(element){this.element=$(element);},_each:function(iterator){this.element.className.split(/\s+/).select(function(name){return name.length>0;})._each(iterator);},set:function(className){this.element.className=className;},add:function(classNameToAdd){if(this.include(classNameToAdd))return;this.set(this.toArray().concat(classNameToAdd).join(' '));},remove:function(classNameToRemove){if(!this.include(classNameToRemove))return;this.set(this.select(function(className){return className!=classNameToRemove;}).join(' '));},toString:function(){return this.toArray().join(' ');}}
Object.extend(Element.ClassNames.prototype,Enumerable);var Field={clear:function(){for(var i=0;i<arguments.length;i++)
$(arguments[i]).value='';},focus:function(element){$(element).focus();},present:function(){for(var i=0;i<arguments.length;i++)
if($(arguments[i]).value=='')return false;return true;},select:function(element){$(element).select();},activate:function(element){element=$(element);element.focus();if(element.select)
element.select();}}
var Form={serialize:function(form){var elements=Form.getElements($(form));var queryComponents=new Array();for(var i=0;i<elements.length;i++){var queryComponent=Form.Element.serialize(elements[i]);if(queryComponent)
queryComponents.push(queryComponent);}
return queryComponents.join('&');},getElements:function(form){form=$(form);var elements=new Array();for(tagName in Form.Element.Serializers){var tagElements=form.getElementsByTagName(tagName);for(var j=0;j<tagElements.length;j++)
elements.push(tagElements[j]);}
return elements;},getInputs:function(form,typeName,name){form=$(form);var inputs=form.getElementsByTagName('input');if(!typeName&&!name)
return inputs;var matchingInputs=new Array();for(var i=0;i<inputs.length;i++){var input=inputs[i];if((typeName&&input.type!=typeName)||(name&&input.name!=name))
continue;matchingInputs.push(input);}
return matchingInputs;},disable:function(form){var elements=Form.getElements(form);for(var i=0;i<elements.length;i++){var element=elements[i];element.blur();element.disabled='true';}},enable:function(form){var elements=Form.getElements(form);for(var i=0;i<elements.length;i++){var element=elements[i];element.disabled='';}},findFirstElement:function(form){return Form.getElements(form).find(function(element){return element.type!='hidden'&&!element.disabled&&['input','select','textarea'].include(element.tagName.toLowerCase());});},focusFirstElement:function(form){Field.activate(Form.findFirstElement(form));},reset:function(form){$(form).reset();}}
Form.Element={serialize:function(element){element=$(element);var method=element.tagName.toLowerCase();var parameter=Form.Element.Serializers[method](element);if(parameter){var key=encodeURIComponent(parameter[0]);if(key.length==0)return;if(parameter[1].constructor!=Array)
parameter[1]=[parameter[1]];return parameter[1].map(function(value){return key+'='+encodeURIComponent(value);}).join('&');}},getValue:function(element){element=$(element);var method=element.tagName.toLowerCase();var parameter=Form.Element.Serializers[method](element);if(parameter)
return parameter[1];}}
Form.Element.Serializers={input:function(element){switch(element.type.toLowerCase()){case'submit':case'hidden':case'password':case'text':return Form.Element.Serializers.textarea(element);case'checkbox':case'radio':return Form.Element.Serializers.inputSelector(element);}
return false;},inputSelector:function(element){if(element.checked)
return[element.name,element.value];},textarea:function(element){return[element.name,element.value];},select:function(element){return Form.Element.Serializers[element.type=='select-one'?'selectOne':'selectMany'](element);},selectOne:function(element){var value='',opt,index=element.selectedIndex;if(index>=0){opt=element.options[index];value=opt.value;if(!value&&!('value'in opt))
value=opt.text;}
return[element.name,value];},selectMany:function(element){var value=new Array();for(var i=0;i<element.length;i++){var opt=element.options[i];if(opt.selected){var optValue=opt.value;if(!optValue&&!('value'in opt))
optValue=opt.text;value.push(optValue);}}
return[element.name,value];}}
var $F=Form.Element.getValue;Abstract.TimedObserver=function(){}
Abstract.TimedObserver.prototype={initialize:function(element,frequency,callback){this.frequency=frequency;this.element=$(element);this.callback=callback;this.lastValue=this.getValue();this.registerCallback();},registerCallback:function(){setInterval(this.onTimerEvent.bind(this),this.frequency*1000);},onTimerEvent:function(){var value=this.getValue();if(this.lastValue!=value){this.callback(this.element,value);this.lastValue=value;}}}
Form.Element.Observer=Class.create();Form.Element.Observer.prototype=Object.extend(new Abstract.TimedObserver(),{getValue:function(){return Form.Element.getValue(this.element);}});Form.Observer=Class.create();Form.Observer.prototype=Object.extend(new Abstract.TimedObserver(),{getValue:function(){return Form.serialize(this.element);}});Abstract.EventObserver=function(){}
Abstract.EventObserver.prototype={initialize:function(element,callback){this.element=$(element);this.callback=callback;this.lastValue=this.getValue();if(this.element.tagName.toLowerCase()=='form')
this.registerFormCallbacks();else
this.registerCallback(this.element);},onElementEvent:function(){var value=this.getValue();if(this.lastValue!=value){this.callback(this.element,value);this.lastValue=value;}},registerFormCallbacks:function(){var elements=Form.getElements(this.element);for(var i=0;i<elements.length;i++)
this.registerCallback(elements[i]);},registerCallback:function(element){if(element.type){switch(element.type.toLowerCase()){case'checkbox':case'radio':Event.observe(element,'click',this.onElementEvent.bind(this));break;case'password':case'text':case'textarea':case'select-one':case'select-multiple':Event.observe(element,'change',this.onElementEvent.bind(this));break;}}}}
Form.Element.EventObserver=Class.create();Form.Element.EventObserver.prototype=Object.extend(new Abstract.EventObserver(),{getValue:function(){return Form.Element.getValue(this.element);}});Form.EventObserver=Class.create();Form.EventObserver.prototype=Object.extend(new Abstract.EventObserver(),{getValue:function(){return Form.serialize(this.element);}});if(!window.Event){var Event=new Object();}
Object.extend(Event,{KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(event){return event.target||event.srcElement;},isLeftClick:function(event){return(((event.which)&&(event.which==1))||((event.button)&&(event.button==1)));},pointerX:function(event){return event.pageX||(event.clientX+
(document.documentElement.scrollLeft||document.body.scrollLeft));},pointerY:function(event){return event.pageY||(event.clientY+
(document.documentElement.scrollTop||document.body.scrollTop));},stop:function(event){if(event.preventDefault){event.preventDefault();event.stopPropagation();}else{event.returnValue=false;event.cancelBubble=true;}},findElement:function(event,tagName){var element=Event.element(event);while(element.parentNode&&(!element.tagName||(element.tagName.toUpperCase()!=tagName.toUpperCase())))
element=element.parentNode;return element;},observers:false,_observeAndCache:function(element,name,observer,useCapture){if(!this.observers)this.observers=[];if(element.addEventListener){this.observers.push([element,name,observer,useCapture]);element.addEventListener(name,observer,useCapture);}else if(element.attachEvent){this.observers.push([element,name,observer,useCapture]);element.attachEvent('on'+name,observer);}},unloadCache:function(){if(!Event.observers)return;for(var i=0;i<Event.observers.length;i++){Event.stopObserving.apply(this,Event.observers[i]);Event.observers[i][0]=null;}
Event.observers=false;},observe:function(element,name,observer,useCapture){var element=$(element);useCapture=useCapture||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.attachEvent))
name='keydown';this._observeAndCache(element,name,observer,useCapture);},stopObserving:function(element,name,observer,useCapture){var element=$(element);useCapture=useCapture||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.detachEvent))
name='keydown';if(element.removeEventListener){element.removeEventListener(name,observer,useCapture);}else if(element.detachEvent){element.detachEvent('on'+name,observer);}}});Event.observe(window,'unload',Event.unloadCache,false);var Position={includeScrollOffsets:false,prepare:function(){this.deltaX=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;this.deltaY=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;},realOffset:function(element){var valueT=0,valueL=0;do{valueT+=element.scrollTop||0;valueL+=element.scrollLeft||0;element=element.parentNode;}while(element);return[valueL,valueT];},cumulativeOffset:function(element){var valueT=0,valueL=0;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;element=element.offsetParent;}while(element);return[valueL,valueT];},positionedOffset:function(element){var valueT=0,valueL=0;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;element=element.offsetParent;if(element){p=Element.getStyle(element,'position');if(p=='relative'||p=='absolute')break;}}while(element);return[valueL,valueT];},offsetParent:function(element){if(element.offsetParent)return element.offsetParent;if(element==document.body)return element;while((element=element.parentNode)&&element!=document.body)
if(Element.getStyle(element,'position')!='static')
return element;return document.body;},within:function(element,x,y){if(this.includeScrollOffsets)
return this.withinIncludingScrolloffsets(element,x,y);this.xcomp=x;this.ycomp=y;this.offset=this.cumulativeOffset(element);return(y>=this.offset[1]&&y<this.offset[1]+element.offsetHeight&&x>=this.offset[0]&&x<this.offset[0]+element.offsetWidth);},withinIncludingScrolloffsets:function(element,x,y){var offsetcache=this.realOffset(element);this.xcomp=x+offsetcache[0]-this.deltaX;this.ycomp=y+offsetcache[1]-this.deltaY;this.offset=this.cumulativeOffset(element);return(this.ycomp>=this.offset[1]&&this.ycomp<this.offset[1]+element.offsetHeight&&this.xcomp>=this.offset[0]&&this.xcomp<this.offset[0]+element.offsetWidth);},overlap:function(mode,element){if(!mode)return 0;if(mode=='vertical')
return((this.offset[1]+element.offsetHeight)-this.ycomp)/element.offsetHeight;if(mode=='horizontal')
return((this.offset[0]+element.offsetWidth)-this.xcomp)/element.offsetWidth;},clone:function(source,target){source=$(source);target=$(target);target.style.position='absolute';var offsets=this.cumulativeOffset(source);target.style.top=offsets[1]+'px';target.style.left=offsets[0]+'px';target.style.width=source.offsetWidth+'px';target.style.height=source.offsetHeight+'px';},page:function(forElement){var valueT=0,valueL=0;var element=forElement;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;if(element.offsetParent==document.body)
if(Element.getStyle(element,'position')=='absolute')break;}while(element=element.offsetParent);element=forElement;do{valueT-=element.scrollTop||0;valueL-=element.scrollLeft||0;}while(element=element.parentNode);return[valueL,valueT];},clone:function(source,target){var options=Object.extend({setLeft:true,setTop:true,setWidth:true,setHeight:true,offsetTop:0,offsetLeft:0},arguments[2]||{})
source=$(source);var p=Position.page(source);target=$(target);var delta=[0,0];var parent=null;if(Element.getStyle(target,'position')=='absolute'){parent=Position.offsetParent(target);delta=Position.page(parent);}
if(parent==document.body){delta[0]-=document.body.offsetLeft;delta[1]-=document.body.offsetTop;}
if(options.setLeft)target.style.left=(p[0]-delta[0]+options.offsetLeft)+'px';if(options.setTop)target.style.top=(p[1]-delta[1]+options.offsetTop)+'px';if(options.setWidth)target.style.width=source.offsetWidth+'px';if(options.setHeight)target.style.height=source.offsetHeight+'px';},absolutize:function(element){element=$(element);if(element.style.position=='absolute')return;Position.prepare();var offsets=Position.positionedOffset(element);var top=offsets[1];var left=offsets[0];var width=element.clientWidth;var height=element.clientHeight;element._originalLeft=left-parseFloat(element.style.left||0);element._originalTop=top-parseFloat(element.style.top||0);element._originalWidth=element.style.width;element._originalHeight=element.style.height;element.style.position='absolute';element.style.top=top+'px';;element.style.left=left+'px';;element.style.width=width+'px';;element.style.height=height+'px';;},relativize:function(element){element=$(element);if(element.style.position=='relative')return;Position.prepare();element.style.position='relative';var top=parseFloat(element.style.top||0)-(element._originalTop||0);var left=parseFloat(element.style.left||0)-(element._originalLeft||0);element.style.top=top+'px';element.style.left=left+'px';element.style.height=element._originalHeight;element.style.width=element._originalWidth;}}
if(/Konqueror|Safari|KHTML/.test(navigator.userAgent)){Position.cumulativeOffset=function(element){var valueT=0,valueL=0;do{valueT+=element.offsetTop||0;valueL+=element.offsetLeft||0;if(element.offsetParent==document.body)
if(Element.getStyle(element,'position')=='absolute')break;element=element.offsetParent;}while(element);return[valueL,valueT];}}
var gSearType="blog";function searchNavigatorLoad(searchType){gSearType=searchType;}
function toBlogTab(){if(gSearType=="blog")
return false;var searopt=document.getElementById("searopt");var searoptbottom=document.getElementById("searopt_b");var seartype=document.getElementById("seartype");if(searopt!=null)
searopt.innerHTML='&nbsp;';if(searoptbottom!=null)
searoptbottom.innerHTML='&nbsp;';if(seartype!=null)
seartype.innerHTML='<a style="font-weight: bold">��־</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toPhotoTab();return false;">��Ƭ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toMusicTab();return false;">����</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toTagTab();return false;">��ǩ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toAuthorTab();return false;">��������</a>&nbsp;&nbsp;&nbsp;&nbsp;';gSearType="blog";}
function toBlogSearch(){if(gSearType=="blog")
return false;gSearType="blog";autoSubmitSearch();}
function toPhotoTab(){if(gSearType=="photo")
return false;var searopt=document.getElementById("searopt");var searoptbottom=document.getElementById("searopt_b");var seartype=document.getElementById("seartype");if(searopt!=null)
searopt.innerHTML='<input id="p_all" name="p_opt" type="radio" value="all" checked="checked"><label for="p_all">ȫ��</label></input>'+'<input id="p_name" name="p_opt" type="radio" class="searoptitem" value="name"><label for="p_name">ͼƬ����</label></input>'+'<input id="p_desc" name="p_opt" type="radio" class="searoptitem" value="desc"><label for="p_desc">ͼƬ����</label></input>';if(searoptbottom!=null)
searoptbottom.innerHTML='<input id="p_all_b" name="p_opt_b" type="radio" value="all" checked="checked"><label for="p_all_b">ȫ��</label></input>'+'<input id="p_name_b" name="p_opt_b" type="radio" class="searoptitem" value="name"><label for="p_name_b">ͼƬ����</label></input>'+'<input id="p_desc_b" name="p_opt_b" type="radio" class="searoptitem" value="desc"><label for="p_desc_b">ͼƬ����</label></input>';if(seartype!=null)
seartype.innerHTML='<a href="#" onclick="toBlogTab();return false;">��־</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a style="font-weight: bold">ͼƬ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toMusicTab();return false;">����</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toTagTab();return false;">��ǩ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toAuthorTab();return false;">��������</a>&nbsp;&nbsp;&nbsp;&nbsp;';gSearType="photo";}
function toPhotoSearch(){if(gSearType=="photo")
return false;gSearType="photo";autoSubmitSearch()}
function toMusicTab(){if(gSearType=="music")
return false;var searopt=document.getElementById("searopt");var searoptbottom=document.getElementById("searopt_b");var seartype=document.getElementById("seartype");if(searopt!=null)
searopt.innerHTML='<input id="m_name" name="m_opt" type="radio" value="name" checked="checked"><label for="m_name">����</label></input>'+'<input id="m_author" name="m_opt" type="radio" class="searoptitem" value="author"><label for="m_author">����</label></input>';if(searoptbottom!=null)
searoptbottom.innerHTML='<input id="m_name_b" name="m_opt_b" type="radio" value="name" checked="checked"><label for="m_name_b">����</label></input>'+'<input id="m_author_b" name="m_opt_b" type="radio" class="searoptitem" value="author"><label for="m_author_b">����</label></input>';if(seartype!=null)
seartype.innerHTML='<a href="#" onclick="toBlogTab();return false;">��־</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toPhotoTab();return false;">ͼƬ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a style="font-weight: bold">����</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toTagTab();return false;">��ǩ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toAuthorTab();return false;">��������</a>&nbsp;&nbsp;&nbsp;&nbsp;';gSearType="music";}
function toMusicSearch(){if(gSearType=="music")
return false;gSearType="music";autoSubmitSearch();}
function toTagTab(){if(gSearType=="Tag")
return false;var searopt=document.getElementById("searopt");var searoptbottom=document.getElementById("searopt_b");var seartype=document.getElementById("seartype");if(searopt!=null)
searopt.innerHTML='<input id="t_photo" name="t_opt" type="radio" value="photo" checked="checked"><label for="t_photo">��Ƭ</label></input>'+'<input id="t_blog" name="t_opt" type="radio" class="searoptitem" value="blog"><label for="t_blog">��־</label></input>'+'<input id="t_resource" name="t_opt" type="radio" class="searoptitem" value="resource"><label for="t_resource">�ղ�</label></input>';if(searoptbottom!=null)
searoptbottom.innerHTML='<input id="t_photo_b" name="t_opt_b" type="radio" value="photo" checked="checked"><label for="t_photo_b">��Ƭ</label></input>'+'<input id="t_blog_b" name="t_opt_b" type="radio" class="searoptitem" value="blog"><label for="t_blog_b">��־</label></input>'+'<input id="t_resource_b" name="t_opt_b" type="radio" class="searoptitem" value="resource"><label for="t_resource_b">�ղ�</label></input>';if(seartype!=null)
seartype.innerHTML='<a href="#" onclick="toBlogTab();return false;">��־</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toPhotoTab();return false;">ͼƬ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toMusicTab();return false;">����</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a style="font-weight: bold">��ǩ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toAuthorTab();return false;">��������</a>&nbsp;&nbsp;&nbsp;&nbsp;';gSearType="tag";}
function toTagSearch(){if(gSearType=="Tag")
return false;gSearType="tag";autoSubmitSearch();}
function toAuthorTab(){if(gSearType=="author")
return false;var searopt=document.getElementById("searopt");var searoptbottom=document.getElementById("searopt_b");var seartype=document.getElementById("seartype");if(searopt!=null)
searopt.innerHTML='<input id="a_nickname" name="a_opt" type="radio" value="nickname" checked="checked"><label for="a_nickname">�ǳ�</label></input>'+'<input id="a_spacename" name="a_opt" type="radio" class="searoptitem" value="spacename"><label for="a_spacename">��������</label></input>';if(searoptbottom!=null)
searoptbottom.innerHTML='<input id="a_nickname_b" name="a_opt_b" type="radio" value="nickname" checked="checked"><label for="a_nickname_b">�ǳ�</label></input>'+'<input id="a_spacename_b" name="a_opt_b" type="radio" class="searoptitem" value="spacename"><label for="a_spacename_b">��������</label></input>';if(seartype!=null)
seartype.innerHTML='<a href="#" onclick="toBlogTab();return false;">��־</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toPhotoTab();return false;">��Ƭ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toMusicTab();return false;">����</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toTagTab();return false;">��ǩ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a style="font-weight: bold">��������</a>&nbsp;&nbsp;&nbsp;&nbsp;';gSearType="author";}
function toAuthorSearch(){if(gSearType=="author")
return false;gSearType="author";autoSubmitSearch();}
function toCircleTab(){if(gSearType=="circle")
return false;var searopt=document.getElementById("searopt");var searoptbottom=document.getElementById("searopt_b");var seartype=document.getElementById("seartype");if(searopt!=null)
searopt.innerHTML='<input id="c_name" name="c_opt" type="radio" value="name" checked="checked"><label for="c_name">Ȧ������</label></input>'+'<input id="c_ownernickname" name="c_opt" type="radio" class="searoptitem" value="ownernickname"><label for="c_ownernickname">Ȧ���ǳ�</label></input>'+'<input id="c_desc" name="c_opt" type="radio" class="searoptitem" value="desc"><label for="c_desc">Ȧ�Ӽ��</label></input>';if(searoptbottom!=null)
searoptbottom.innerHTML='<input id="c_name_b" name="c_opt_b" type="radio" value="name" checked="checked"><label for="c_name_b">Ȧ������</label></input>'+'<input id="c_ownernickname_b" name="c_opt_b" type="radio" class="searoptitem" value="ownernickname"><label for="c_ownernickname_b">Ȧ���ǳ�</label></input>'+'<input id="c_desc_b" name="c_opt_b" type="radio" class="searoptitem" value="desc"><label for="c_desc_b">Ȧ�Ӽ��</label></input>';if(seartype!=null)
seartype.innerHTML='<a href="#" onclick="toBlogTab();return false;">��־</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toPhotoTab();return false;">ͼƬ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toMusicTab();return false;">����</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toTagTab();return false;">��ǩ</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a href="#" onclick="toAuthorTab();return false;">��������</a>&nbsp;&nbsp;&nbsp;&nbsp;'+'<a style="font-weight: bold">Ȧ��</a>';gSearType="circle";}
function toCircleSearch(){if(gSearType=="circle")
return false;gSearType="circle";autoSubmitSearch();}
function autoSubmitSearch(){var q=document.getElementById("words").value;var o="all"
if(gSearType=="blog")
o="all";else if(gSearType=="Photo")
o="all";else if(gSearType=="music")
o="name";else if(gSearType=="tag")
o="photo";else if(gSearType=="author")
o="nickname";else if(gSearType=="circle")
o="name";window.location.href="http://blog.163.com/search?t="+gSearType+"&q="+encodeURIComponent(q)+"&o="+o;}
function submitSearch(){var q=document.getElementById("words").value;var o;var radios=document.getElementById("searopt").childNodes;for(var i=0;i<radios.length;i++){if(radios[i].checked==true){o=radios[i].value;break;}}
window.location.href="http://blog.163.com/search?t="+gSearType+"&q="+encodeURIComponent(q)+"&o="+o;}
function isIE(){var isIE=(window.navigator.appVersion.indexOf("MSIE")!=-1)?true:false;return isIE;}
function keyDownInSearch(e){var keycode;if(isIE())
keycode=event.keyCode;else
keycode=e.which;if(keycode==13){submitSearch();}}
function submitSearchBottom(){var q=document.getElementById("words_b").value;var o;var radios=document.getElementById("searopt_b").childNodes;for(var i=0;i<radios.length;i++){if(radios[i].checked==true){o=radios[i].value;break;}}
window.location.href="http://blog.163.com/search?t="+gSearType+"&q="+encodeURIComponent(q)+"&o="+o;}
function keyDownInSearchBottom(e){var keycode;if(isIE())
keycode=event.keyCode;else
keycode=e.which;if(keycode==13){submitSearchBottom();}}
function sort(type,option,query,sort){window.location.href="http://blog.163.com/search?t="+type+"&o="+option+"&q="+encodeURIComponent(query)+"&s="+sort;}
function page(type,option,query,sort,page){window.location.href="http://blog.163.com/search?t="+type+"&o="+option+"&q="+encodeURIComponent(query)+"&s="+sort+"&p="+page;}
function relSearch(t,o,q,s){window.location.href="http://blog.163.com/search?t="+t+"&o="+o+"&q="+encodeURIComponent(q)+"&s="+s;}


if(dwr==null)var dwr={};if(dwr.engine==null)dwr.engine={};if(DWREngine==null)var DWREngine=dwr.engine;dwr.engine.setErrorHandler=function(handler){dwr.engine._errorHandler=handler;};dwr.engine.setWarningHandler=function(handler){dwr.engine._warningHandler=handler;};dwr.engine.setTextHtmlHandler=function(handler){dwr.engine._textHtmlHandler=handler;}
dwr.engine.setTimeout=function(timeout){dwr.engine._timeout=timeout;};dwr.engine.setPreHook=function(handler){dwr.engine._preHook=handler;};dwr.engine.setPostHook=function(handler){dwr.engine._postHook=handler;};dwr.engine.setHeaders=function(headers){dwr.engine._headers=headers;};dwr.engine.setParameters=function(parameters){dwr.engine._parameters=parameters;};dwr.engine.XMLHttpRequest=1;dwr.engine.IFrame=2;dwr.engine.ScriptTag=3;dwr.engine.setRpcType=function(newType){if(newType!=dwr.engine.XMLHttpRequest&&newType!=dwr.engine.IFrame&&newType!=dwr.engine.ScriptTag){dwr.engine._handleError(null,{name:"dwr.engine.invalidRpcType",message:"RpcType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame or dwr.engine.ScriptTag"});return;}
dwr.engine._rpcType=newType;};dwr.engine.setHttpMethod=function(httpMethod){if(httpMethod!="GET"&&httpMethod!="POST"){dwr.engine._handleError(null,{name:"dwr.engine.invalidHttpMethod",message:"Remoting method must be one of GET or POST"});return;}
dwr.engine._httpMethod=httpMethod;};dwr.engine.setOrdered=function(ordered){dwr.engine._ordered=ordered;};dwr.engine.setAsync=function(async){dwr.engine._async=async;};dwr.engine.setActiveReverseAjax=function(activeReverseAjax){if(activeReverseAjax){if(dwr.engine._activeReverseAjax)return;dwr.engine._activeReverseAjax=true;dwr.engine._poll();}
else{if(dwr.engine._activeReverseAjax&&dwr.engine._pollReq)dwr.engine._pollReq.abort();dwr.engine._activeReverseAjax=false;}};dwr.engine.setPollType=function(newPollType){if(newPollType!=dwr.engine.XMLHttpRequest&&newPollType!=dwr.engine.IFrame){dwr.engine._handleError(null,{name:"dwr.engine.invalidPollType",message:"PollType must be one of dwr.engine.XMLHttpRequest or dwr.engine.IFrame"});return;}
dwr.engine._pollType=newPollType;};dwr.engine.defaultErrorHandler=function(message,ex){dwr.engine._debug("Error: "+ex.name+", "+ex.message,true);if(message==null||message=="")alert("A server error has occured. More information may be available in the console.");else if(message.indexOf("0x80040111")!=-1)dwr.engine._debug(message);else {};};dwr.engine.defaultWarningHandler=function(message,ex){dwr.engine._debug(message);};dwr.engine.beginBatch=function(){if(dwr.engine._batch){dwr.engine._handleError(null,{name:"dwr.engine.batchBegun",message:"Batch already begun"});return;}
dwr.engine._batch=dwr.engine._createBatch();};dwr.engine.endBatch=function(options){var batch=dwr.engine._batch;if(batch==null){dwr.engine._handleError(null,{name:"dwr.engine.batchNotBegun",message:"No batch in progress"});return;}
dwr.engine._batch=null;if(batch.map.callCount==0)return;if(options)dwr.engine._mergeBatch(batch,options);if(dwr.engine._ordered&&dwr.engine._batchesLength!=0){dwr.engine._batchQueue[dwr.engine._batchQueue.length]=batch;}
else{dwr.engine._sendData(batch);}};dwr.engine.setPollMethod=function(type){dwr.engine.setPollType(type);};dwr.engine.setMethod=function(type){dwr.engine.setRpcType(type);};dwr.engine.setVerb=function(verb){dwr.engine.setHttpMethod(verb);};dwr.engine._origScriptSessionId="4FC528EBDD341FE22046F074D587F373";dwr.engine._sessionCookieName="JSESSIONID";dwr.engine._allowGetForSafariButMakeForgeryEasier="false";dwr.engine._scriptTagProtection="throw 'allowScriptTagRemoting is false.';";dwr.engine._defaultPath="/dwr";dwr.engine._scriptSessionId=null;dwr.engine._getScriptSessionId=function(){if(dwr.engine._scriptSessionId==null){dwr.engine._scriptSessionId=dwr.engine._origScriptSessionId+Math.floor(Math.random()*1000);}
return dwr.engine._scriptSessionId;};dwr.engine._errorHandler=dwr.engine.defaultErrorHandler;dwr.engine._warningHandler=dwr.engine.defaultWarningHandler;dwr.engine._preHook=null;dwr.engine._postHook=null;dwr.engine._batches={};dwr.engine._batchesLength=0;dwr.engine._batchQueue=[];dwr.engine._rpcType=dwr.engine.XMLHttpRequest;dwr.engine._httpMethod="POST";dwr.engine._ordered=false;dwr.engine._async=true;dwr.engine._batch=null;dwr.engine._timeout=0;dwr.engine._DOMDocument=["Msxml2.DOMDocument.6.0","Msxml2.DOMDocument.5.0","Msxml2.DOMDocument.4.0","Msxml2.DOMDocument.3.0","MSXML2.DOMDocument","MSXML.DOMDocument","Microsoft.XMLDOM"];dwr.engine._XMLHTTP=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.5.0","Msxml2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"];dwr.engine._activeReverseAjax=false;dwr.engine._pollType=dwr.engine.XMLHttpRequest;dwr.engine._outstandingIFrames=[];dwr.engine._pollReq=null;dwr.engine._pollCometInterval=200;dwr.engine._pollRetries=0;dwr.engine._maxPollRetries=0;dwr.engine._textHtmlHandler=null;dwr.engine._headers=null;dwr.engine._parameters=null;dwr.engine._postSeperator="\n";dwr.engine._defaultInterceptor=function(data){return data;}
dwr.engine._urlRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._contentRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._replyRewriteHandler=dwr.engine._defaultInterceptor;dwr.engine._nextBatchId=0;dwr.engine._propnames=["rpcType","httpMethod","async","timeout","errorHandler","warningHandler","textHtmlHandler"];dwr.engine._partialResponseNo=0;dwr.engine._partialResponseYes=1;dwr.engine._partialResponseFlush=2;dwr.engine._execute=function(path,scriptName,methodName,vararg_params){var singleShot=false;if(dwr.engine._batch==null){dwr.engine.beginBatch();singleShot=true;}
var batch=dwr.engine._batch;var args=[];for(var i=0;i<arguments.length-3;i++){args[i]=arguments[i+3];}
if(batch.path==null){batch.path=path;}
else{if(batch.path!=path){dwr.engine._handleError(batch,{name:"dwr.engine.multipleServlets",message:"Can't batch requests to multiple DWR Servlets."});return;}}
var callData;var lastArg=args[args.length-1];if(typeof lastArg=="function"||lastArg==null)callData={callback:args.pop()};else callData=args.pop();dwr.engine._mergeBatch(batch,callData);batch.handlers[batch.map.callCount]={exceptionHandler:callData.exceptionHandler,callback:callData.callback};var prefix="c"+batch.map.callCount+"-";batch.map[prefix+"scriptName"]=scriptName;batch.map[prefix+"methodName"]=methodName;batch.map[prefix+"id"]=batch.map.callCount;for(i=0;i<args.length;i++){dwr.engine._serializeAll(batch,[],args[i],prefix+"param"+i);}
batch.map.callCount++;if(singleShot)dwr.engine.endBatch();};dwr.engine._poll=function(overridePath){if(!dwr.engine._activeReverseAjax)return;var batch=dwr.engine._createBatch();batch.map.id=0;batch.map.callCount=1;batch.isPoll=true;if(navigator.userAgent.indexOf("Gecko/")!=-1){batch.rpcType=dwr.engine._pollType;batch.map.partialResponse=dwr.engine._partialResponseYes;}
else if(document.all){batch.rpcType=dwr.engine.IFrame;batch.map.partialResponse=dwr.engine._partialResponseFlush;}
else{batch.rpcType=dwr.engine._pollType;batch.map.partialResponse=dwr.engine._partialResponseNo;}
batch.httpMethod="POST";batch.async=true;batch.timeout=0;batch.path=(overridePath)?overridePath:dwr.engine._defaultPath;batch.preHooks=[];batch.postHooks=[];batch.errorHandler=dwr.engine._pollErrorHandler;batch.warningHandler=dwr.engine._pollErrorHandler;batch.handlers[0]={callback:function(pause){dwr.engine._pollRetries=0;setTimeout("dwr.engine._poll()",pause);}};dwr.engine._sendData(batch);if(batch.rpcType==dwr.engine.XMLHttpRequest){dwr.engine._checkCometPoll();}};dwr.engine._pollErrorHandler=function(msg,ex){dwr.engine._pollRetries++;dwr.engine._debug("Reverse Ajax poll failed (pollRetries="+dwr.engine._pollRetries+"): "+ex.name+" : "+ex.message);if(dwr.engine._pollRetries<dwr.engine._maxPollRetries){setTimeout("dwr.engine._poll()",10000);}
else{dwr.engine._debug("Giving up.");}};dwr.engine._createBatch=function(){var batch={map:{callCount:0,page:window.location.pathname+window.location.search,httpSessionId:dwr.engine._getJSessionId(),scriptSessionId:dwr.engine._getScriptSessionId()},charsProcessed:0,paramCount:0,headers:[],parameters:[],isPoll:false,headers:{},handlers:{},preHooks:[],postHooks:[],rpcType:dwr.engine._rpcType,httpMethod:dwr.engine._httpMethod,async:dwr.engine._async,timeout:dwr.engine._timeout,errorHandler:dwr.engine._errorHandler,warningHandler:dwr.engine._warningHandler,textHtmlHandler:dwr.engine._textHtmlHandler};if(dwr.engine._preHook)batch.preHooks.push(dwr.engine._preHook);if(dwr.engine._postHook)batch.postHooks.push(dwr.engine._postHook);var propname,data;if(dwr.engine._headers){for(propname in dwr.engine._headers){data=dwr.engine._headers[propname];if(typeof data!="function")batch.headers[propname]=data;}}
if(dwr.engine._parameters){for(propname in dwr.engine._parameters){data=dwr.engine._parameters[propname];if(typeof data!="function")batch.parameters[propname]=data;}}
return batch;}
dwr.engine._mergeBatch=function(batch,overrides){var propname,data;for(var i=0;i<dwr.engine._propnames.length;i++){propname=dwr.engine._propnames[i];if(overrides[propname]!=null)batch[propname]=overrides[propname];}
if(overrides.preHook!=null)batch.preHooks.unshift(overrides.preHook);if(overrides.postHook!=null)batch.postHooks.push(overrides.postHook);if(overrides.headers){for(propname in overrides.headers){data=overrides.headers[propname];if(typeof data!="function")batch.headers[propname]=data;}}
if(overrides.parameters){for(propname in overrides.parameters){data=overrides.parameters[propname];if(typeof data!="function")batch.map["p-"+propname]=""+data;}}};dwr.engine._getJSessionId=function(){var cookies=document.cookie.split(';');for(var i=0;i<cookies.length;i++){var cookie=cookies[i];while(cookie.charAt(0)==' ')cookie=cookie.substring(1,cookie.length);if(cookie.indexOf(dwr.engine._sessionCookieName+"=")==0){return cookie.substring(11,cookie.length);}}
return"";}
dwr.engine._checkCometPoll=function(){for(var i=0;i<dwr.engine._outstandingIFrames.length;i++){var text="";var iframe=dwr.engine._outstandingIFrames[i];try{text=dwr.engine._getTextFromCometIFrame(iframe);}
catch(ex){dwr.engine._handleWarning(iframe.batch,ex);}
if(text!="")dwr.engine._processCometResponse(text,iframe.batch);}
if(dwr.engine._pollReq){var req=dwr.engine._pollReq;var text=req.responseText;dwr.engine._processCometResponse(text,req.batch);}
if(dwr.engine._outstandingIFrames.length>0||dwr.engine._pollReq){setTimeout("dwr.engine._checkCometPoll()",dwr.engine._pollCometInterval);}};dwr.engine._getTextFromCometIFrame=function(frameEle){var body=frameEle.contentWindow.document.body;if(body==null)return"";var text=body.innerHTML;if(text.indexOf("<PRE>")==0||text.indexOf("<pre>")==0){text=text.substring(5,text.length-7);}
return text;};dwr.engine._processCometResponse=function(response,batch){if(batch.charsProcessed==response.length)return;if(response.length==0){batch.charsProcessed=0;return;}
var firstStartTag=response.indexOf("//#DWR-START#",batch.charsProcessed);if(firstStartTag==-1){batch.charsProcessed=response.length;return;}
var lastEndTag=response.lastIndexOf("//#DWR-END#");if(lastEndTag==-1){return;}
if(response.charCodeAt(lastEndTag+11)==13&&response.charCodeAt(lastEndTag+12)==10){batch.charsProcessed=lastEndTag+13;}
else{batch.charsProcessed=lastEndTag+11;}
var exec=response.substring(firstStartTag+13,lastEndTag);dwr.engine._receivedBatch=batch;dwr.engine._eval(exec);dwr.engine._receivedBatch=null;};dwr.engine._sendData=function(batch){batch.map.batchId=dwr.engine._nextBatchId++;dwr.engine._batches[batch.map.batchId]=batch;dwr.engine._batchesLength++;batch.completed=false;for(var i=0;i<batch.preHooks.length;i++){batch.preHooks[i]();}
batch.preHooks=null;if(batch.timeout&&batch.timeout!=0){batch.interval=setInterval(function(){dwr.engine._abortRequest(batch);},batch.timeout);}
if(batch.rpcType==dwr.engine.XMLHttpRequest){if(window.XMLHttpRequest){batch.req=new XMLHttpRequest();}
else if(window.ActiveXObject&&!(navigator.userAgent.indexOf("Mac")>=0&&navigator.userAgent.indexOf("MSIE")>=0)){batch.req=dwr.engine._newActiveXObject(dwr.engine._XMLHTTP);}}
var prop,request;if(batch.req){if(batch.async){batch.req.onreadystatechange=function(){dwr.engine._stateChange(batch);};}
if(batch.isPoll){dwr.engine._pollReq=batch.req;batch.req.batch=batch;}
var indexSafari=navigator.userAgent.indexOf("Safari/");if(indexSafari>=0){var version=navigator.userAgent.substring(indexSafari+7);if(parseInt(version,10)<400){if(dwr.engine._allowGetForSafariButMakeForgeryEasier=="true")batch.httpMethod="GET";else dwr.engine._handleWarning(batch,{name:"dwr.engine.oldSafari",message:"Safari GET support disabled. See getahead.org/dwr/server/servlet and allowGetForSafariButMakeForgeryEasier."});}}
batch.mode=batch.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;request=dwr.engine._constructRequest(batch);try{batch.req.open(batch.httpMethod,request.url,batch.async);try{for(prop in batch.headers){var value=batch.headers[prop];if(typeof value=="string")batch.req.setRequestHeader(prop,value);}
if(!batch.headers["Content-Type"])batch.req.setRequestHeader("Content-Type","text/plain");}
catch(ex){dwr.engine._handleWarning(batch,ex);}
batch.req.send(request.body);if(!batch.async)dwr.engine._stateChange(batch);}
catch(ex){dwr.engine._handleError(batch,ex);}}
else if(batch.rpcType!=dwr.engine.ScriptTag){var idname=batch.isPoll?"dwr-if-poll-"+batch.map.batchId:"dwr-if-"+batch.map["c0-id"];batch.div=document.createElement("div");batch.div.innerHTML="<iframe src='javascript:void(0)' frameborder='0' style='width:0px;height:0px;border:0;' id='"+idname+"' name='"+idname+"'></iframe>";document.body.appendChild(batch.div);batch.iframe=document.getElementById(idname);batch.iframe.batch=batch;batch.mode=batch.isPoll?dwr.engine._ModeHtmlPoll:dwr.engine._ModeHtmlCall;if(batch.isPoll)dwr.engine._outstandingIFrames.push(batch.iframe);request=dwr.engine._constructRequest(batch);if(batch.httpMethod=="GET"){batch.iframe.setAttribute("src",request.url);}
else{batch.form=document.createElement("form");batch.form.setAttribute("id","dwr-form");batch.form.setAttribute("action",request.url);batch.form.setAttribute("target",idname);batch.form.target=idname;batch.form.setAttribute("method",batch.httpMethod);for(prop in batch.map){var value=batch.map[prop];if(typeof value!="function"){var formInput=document.createElement("input");formInput.setAttribute("type","hidden");formInput.setAttribute("name",prop);formInput.setAttribute("value",value);batch.form.appendChild(formInput);}}
document.body.appendChild(batch.form);batch.form.submit();}}
else{batch.httpMethod="GET";batch.mode=batch.isPoll?dwr.engine._ModePlainPoll:dwr.engine._ModePlainCall;request=dwr.engine._constructRequest(batch);batch.script=document.createElement("script");batch.script.id="dwr-st-"+batch.map["c0-id"];batch.script.src=request.url;document.body.appendChild(batch.script);}};dwr.engine._ModePlainCall="/call/plaincall/";dwr.engine._ModeHtmlCall="/call/htmlcall/";dwr.engine._ModePlainPoll="/call/plainpoll/";dwr.engine._ModeHtmlPoll="/call/htmlpoll/";dwr.engine._constructRequest=function(batch){var request={url:batch.path+batch.mode,body:null};if(batch.isPoll==true){request.url+="ReverseAjax.dwr";}
else if(batch.map.callCount==1){request.url+=batch.map["c0-scriptName"]+"."+batch.map["c0-methodName"]+".dwr";}
else{request.url+="Multiple."+batch.map.callCount+".dwr";}
var sessionMatch=location.href.match(/jsessionid=([^?]+)/);if(sessionMatch!=null){request.url+=";jsessionid="+sessionMatch[1];}
var prop;if(batch.httpMethod=="GET"){batch.map.callCount=""+batch.map.callCount;request.url+="?";for(prop in batch.map){if(typeof batch.map[prop]!="function"){request.url+=encodeURIComponent(prop)+"="+encodeURIComponent(batch.map[prop])+"&";}}
request.url=request.url.substring(0,request.url.length-1);}
else{request.body="";for(prop in batch.map){if(typeof batch.map[prop]!="function"){request.body+=prop+"="+batch.map[prop]+dwr.engine._postSeperator;}}
request.body=dwr.engine._contentRewriteHandler(request.body);}
request.url=dwr.engine._urlRewriteHandler(request.url);return request;};dwr.engine._stateChange=function(batch){var toEval;if(batch.completed){dwr.engine._debug("Error: _stateChange() with batch.completed");return;}
var req=batch.req;try{if(req.readyState!=4)return;}
catch(ex){dwr.engine._handleWarning(batch,ex);dwr.engine._clearUp(batch);return;}
try{var reply=req.responseText;reply=dwr.engine._replyRewriteHandler(reply);var status=req.status;if(reply==null||reply==""){dwr.engine._handleWarning(batch,{name:"dwr.engine.missingData",message:"No data received from server"});}
else if(status!=200){dwr.engine._handleError(batch,{name:"dwr.engine.http."+status,message:req.statusText});}
else{var contentType=req.getResponseHeader("Content-Type");if(!contentType.match(/^text\/plain/)&&!contentType.match(/^text\/javascript/)){if(contentType.match(/^text\/html/)&&typeof batch.textHtmlHandler=="function"){batch.textHtmlHandler();}
else{dwr.engine._handleWarning(batch,{name:"dwr.engine.invalidMimeType",message:"Invalid content type: '"+contentType+"'"});}}
else{if(batch.isPoll&&batch.map.partialResponse==dwr.engine._partialResponseYes){dwr.engine._processCometResponse(reply,batch);}
else{if(reply.search("//#DWR")==-1){dwr.engine._handleWarning(batch,{name:"dwr.engine.invalidReply",message:"Invalid reply from server"});}
else{toEval=reply;}}}}}
catch(ex){dwr.engine._handleWarning(batch,ex);}
dwr.engine._callPostHooks(batch);dwr.engine._receivedBatch=batch;if(toEval!=null)toEval=toEval.replace(dwr.engine._scriptTagProtection,"");dwr.engine._eval(toEval);dwr.engine._receivedBatch=null;dwr.engine._clearUp(batch);};dwr.engine._remoteHandleCallback=function(batchId,callId,reply){var batch=dwr.engine._batches[batchId];if(batch==null){dwr.engine._debug("Warning: batch == null in remoteHandleCallback for batchId="+batchId,true);return;}
try{var handlers=batch.handlers[callId];if(!handlers){dwr.engine._debug("Warning: Missing handlers. callId="+callId,true);}
else if(typeof handlers.callback=="function")handlers.callback(reply);}
catch(ex){dwr.engine._handleError(batch,ex);}};dwr.engine._remoteHandleException=function(batchId,callId,ex){var batch=dwr.engine._batches[batchId];if(batch==null){dwr.engine._debug("Warning: null batch in remoteHandleException",true);return;}
var handlers=batch.handlers[callId];if(handlers==null){dwr.engine._debug("Warning: null handlers in remoteHandleException",true);return;}
if(ex.message==undefined)ex.message="";if(typeof handlers.exceptionHandler=="function")handlers.exceptionHandler(ex.message,ex);else if(typeof batch.errorHandler=="function")batch.errorHandler(ex.message,ex);};dwr.engine._remoteHandleBatchException=function(ex,batchId){var searchBatch=(dwr.engine._receivedBatch==null&&batchId!=null);if(searchBatch){dwr.engine._receivedBatch=dwr.engine._batches[batchId];}
if(ex.message==undefined)ex.message="";dwr.engine._handleError(dwr.engine._receivedBatch,ex);if(searchBatch){dwr.engine._receivedBatch=null;dwr.engine._clearUp(dwr.engine._batches[batchId]);}};dwr.engine._remotePollCometDisabled=function(ex,batchId){dwr.engine.setActiveReverseAjax(false);var searchBatch=(dwr.engine._receivedBatch==null&&batchId!=null);if(searchBatch){dwr.engine._receivedBatch=dwr.engine._batches[batchId];}
if(ex.message==undefined)ex.message="";dwr.engine._handleError(dwr.engine._receivedBatch,ex);if(searchBatch){dwr.engine._receivedBatch=null;dwr.engine._clearUp(dwr.engine._batches[batchId]);}};dwr.engine._remoteBeginIFrameResponse=function(iframe,batchId){if(iframe!=null)dwr.engine._receivedBatch=iframe.batch;dwr.engine._callPostHooks(dwr.engine._receivedBatch);};dwr.engine._remoteEndIFrameResponse=function(batchId){dwr.engine._clearUp(dwr.engine._receivedBatch);dwr.engine._receivedBatch=null;};dwr.engine._eval=function(script){if(script==null)return null;if(script==""){dwr.engine._debug("Warning: blank script",true);return null;}
return eval(script);};dwr.engine._abortRequest=function(batch){if(batch&&!batch.completed){clearInterval(batch.interval);dwr.engine._clearUp(batch);if(batch.req)batch.req.abort();dwr.engine._handleError(batch,{name:"dwr.engine.timeout",message:"Timeout"});}};dwr.engine._callPostHooks=function(batch){if(batch.postHooks){for(var i=0;i<batch.postHooks.length;i++){batch.postHooks[i]();}
batch.postHooks=null;}}
dwr.engine._clearUp=function(batch){if(!batch){dwr.engine._debug("Warning: null batch in dwr.engine._clearUp()",true);return;}
if(batch.completed=="true"){dwr.engine._debug("Warning: Double complete",true);return;}
if(batch.div)batch.div.parentNode.removeChild(batch.div);if(batch.iframe){for(var i=0;i<dwr.engine._outstandingIFrames.length;i++){if(dwr.engine._outstandingIFrames[i]==batch.iframe){dwr.engine._outstandingIFrames.splice(i,1);}}
batch.iframe.parentNode.removeChild(batch.iframe);}
if(batch.form)batch.form.parentNode.removeChild(batch.form);if(batch.req){if(batch.req==dwr.engine._pollReq)dwr.engine._pollReq=null;delete batch.req;}
if(batch.map&&batch.map.batchId){delete dwr.engine._batches[batch.map.batchId];dwr.engine._batchesLength--;}
batch.completed=true;if(dwr.engine._batchQueue.length!=0){var sendbatch=dwr.engine._batchQueue.shift();dwr.engine._sendData(sendbatch);}};dwr.engine._handleError=function(batch,ex){if(typeof ex=="string")ex={name:"unknown",message:ex};if(ex.message==null)ex.message="";if(ex.name==null)ex.name="unknown";if(batch&&typeof batch.errorHandler=="function")batch.errorHandler(ex.message,ex);else if(dwr.engine._errorHandler)dwr.engine._errorHandler(ex.message,ex);dwr.engine._clearUp(batch);};dwr.engine._handleWarning=function(batch,ex){if(typeof ex=="string")ex={name:"unknown",message:ex};if(ex.message==null)ex.message="";if(ex.name==null)ex.name="unknown";if(batch&&typeof batch.warningHandler=="function")batch.warningHandler(ex.message,ex);else if(dwr.engine._warningHandler)dwr.engine._warningHandler(ex.message,ex);dwr.engine._clearUp(batch);};dwr.engine._serializeAll=function(batch,referto,data,name){if(data==null){batch.map[name]="null:null";return;}
switch(typeof data){case"boolean":batch.map[name]="boolean:"+data;break;case"number":batch.map[name]="number:"+data;break;case"string":batch.map[name]="string:"+encodeURIComponent(data);break;case"object":if(data instanceof String)batch.map[name]="String:"+encodeURIComponent(data);else if(data instanceof Boolean)batch.map[name]="Boolean:"+data;else if(data instanceof Number)batch.map[name]="Number:"+data;else if(data instanceof Date)batch.map[name]="Date:"+data.getTime();else if(data&&data.join)batch.map[name]=dwr.engine._serializeArray(batch,referto,data,name);else batch.map[name]=dwr.engine._serializeObject(batch,referto,data,name);break;case"function":break;default:dwr.engine._handleWarning(null,{name:"dwr.engine.unexpectedType",message:"Unexpected type: "+typeof data+", attempting default converter."});batch.map[name]="default:"+data;break;}};dwr.engine._lookup=function(referto,data,name){var lookup;for(var i=0;i<referto.length;i++){if(referto[i].data==data){lookup=referto[i];break;}}
if(lookup)return"reference:"+lookup.name;referto.push({data:data,name:name});return null;};dwr.engine._serializeObject=function(batch,referto,data,name){var ref=dwr.engine._lookup(referto,data,name);if(ref)return ref;if(data.nodeName&&data.nodeType){return dwr.engine._serializeXml(batch,referto,data,name);}
var reply="Object_"+dwr.engine._getObjectClassName(data)+":{";var element;for(element in data){if(typeof data[element]!="function"){batch.paramCount++;var childName="c"+dwr.engine._batch.map.callCount+"-e"+batch.paramCount;dwr.engine._serializeAll(batch,referto,data[element],childName);reply+=encodeURIComponent(element)+":reference:"+childName+", ";}}
if(reply.substring(reply.length-2)==", "){reply=reply.substring(0,reply.length-2);}
reply+="}";return reply;};dwr.engine._errorClasses={"Error":Error,"EvalError":EvalError,"RangeError":RangeError,"ReferenceError":ReferenceError,"SyntaxError":SyntaxError,"TypeError":TypeError,"URIError":URIError};dwr.engine._getObjectClassName=function(obj){if(obj&&obj.constructor&&obj.constructor.toString)
{var str=obj.constructor.toString();var regexpmatch=str.match(/function\s+(\w+)/);if(regexpmatch&&regexpmatch.length==2){return regexpmatch[1];}}
if(obj&&obj.constructor){for(var errorname in dwr.engine._errorClasses){if(obj.constructor==dwr.engine._errorClasses[errorname])return errorname;}}
if(obj){var str=Object.prototype.toString.call(obj);var regexpmatch=str.match(/\[object\s+(\w+)/);if(regexpmatch&&regexpmatch.length==2){return regexpmatch[1];}}
return"Object";};dwr.engine._serializeXml=function(batch,referto,data,name){var ref=dwr.engine._lookup(referto,data,name);if(ref)return ref;var output;if(window.XMLSerializer)output=new XMLSerializer().serializeToString(data);else if(data.toXml)output=data.toXml;else output=data.innerHTML;return"XML:"+encodeURIComponent(output);};dwr.engine._serializeArray=function(batch,referto,data,name){var ref=dwr.engine._lookup(referto,data,name);if(ref)return ref;var reply="Array:[";for(var i=0;i<data.length;i++){if(i!=0)reply+=",";batch.paramCount++;var childName="c"+dwr.engine._batch.map.callCount+"-e"+batch.paramCount;dwr.engine._serializeAll(batch,referto,data[i],childName);reply+="reference:";reply+=childName;}
reply+="]";return reply;};dwr.engine._unserializeDocument=function(xml){var dom;if(window.DOMParser){var parser=new DOMParser();dom=parser.parseFromString(xml,"text/xml");if(!dom.documentElement||dom.documentElement.tagName=="parsererror"){var message=dom.documentElement.firstChild.data;message+="\n"+dom.documentElement.firstChild.nextSibling.firstChild.data;throw message;}
return dom;}
else if(window.ActiveXObject){dom=dwr.engine._newActiveXObject(dwr.engine._DOMDocument);dom.loadXML(xml);return dom;}
else{var div=document.createElement("div");div.innerHTML=xml;return div;}};dwr.engine._newActiveXObject=function(axarray){var returnValue;for(var i=0;i<axarray.length;i++){try{returnValue=new ActiveXObject(axarray[i]);break;}
catch(ex){}}
return returnValue;};dwr.engine._debug=function(message,stacktrace){var written=false;try{if(window.console){if(stacktrace&&window.console.trace)window.console.trace();window.console.log(message);written=true;}
else if(window.opera&&window.opera.postError){window.opera.postError(message);written=true;}}
catch(ex){}
if(!written){var debug=document.getElementById("dwr-debug");if(debug){var contents=message+"<br/>"+debug.innerHTML;if(contents.length>2048)contents=contents.substring(0,2048);debug.innerHTML=contents;}}};
DWREngine._execute=dwr.engine._execute

var TrimPath;(function(){if(TrimPath==null)
TrimPath=new Object();if(TrimPath.evalEx==null)
TrimPath.evalEx=function(src){return eval(src);};var UNDEFINED;if(Array.prototype.pop==null)
Array.prototype.pop=function(){if(this.length===0){return UNDEFINED;}
return this[--this.length];};if(Array.prototype.push==null)
Array.prototype.push=function(){for(var i=0;i<arguments.length;++i){this[this.length]=arguments[i];}
return this.length;};TrimPath.parseTemplate=function(tmplContent,optTmplName,optEtc){if(optEtc==null)
optEtc=TrimPath.parseTemplate_etc;var funcSrc=parse(tmplContent,optTmplName,optEtc);var func=TrimPath.evalEx(funcSrc,optTmplName,1);if(func!=null)
return new optEtc.Template(optTmplName,tmplContent,funcSrc,func,optEtc);return null;}
try{String.prototype.process=function(context,optFlags){var template=TrimPath.parseTemplate(this,null);if(template!=null)
return template.process(context,optFlags);return this;}}catch(e){}
TrimPath.parseTemplate_etc={};TrimPath.parseTemplate_etc.statementTag="forelse|for|if|elseif|else|var|macro";TrimPath.parseTemplate_etc.statementDef={"if":{delta:1,prefix:"if (",suffix:") {",paramMin:1},"else":{delta:0,prefix:"} else {"},"elseif":{delta:0,prefix:"} else if (",suffix:") {",paramDefault:"true"},"/if":{delta:-1,prefix:"}"},"for":{delta:1,paramMin:3,prefixFunc:function(stmtParts,state,tmplName,etc){if(stmtParts[2]!="in")
throw new etc.ParseError(tmplName,state.line,"bad for loop statement: "+stmtParts.join(' '));var iterVar=stmtParts[1];var listVar="__LIST__"+iterVar;return["var ",listVar," = ",stmtParts[3],";","var __LENGTH_STACK__;","if (typeof(__LENGTH_STACK__) == 'undefined' || !__LENGTH_STACK__.length) __LENGTH_STACK__ = new Array();","__LENGTH_STACK__[__LENGTH_STACK__.length] = 0;","if ((",listVar,") != null) { ","var ",iterVar,"_ct = 0;","for (var ",iterVar,"_index in ",listVar,") { ",iterVar,"_ct++;","if (typeof(",listVar,"[",iterVar,"_index]) == 'function') {continue;}","__LENGTH_STACK__[__LENGTH_STACK__.length - 1]++;","var ",iterVar," = ",listVar,"[",iterVar,"_index];"].join("");}},"forelse":{delta:0,prefix:"} } if (__LENGTH_STACK__[__LENGTH_STACK__.length - 1] == 0) { if (",suffix:") {",paramDefault:"true"},"/for":{delta:-1,prefix:"} }; delete __LENGTH_STACK__[__LENGTH_STACK__.length - 1];"},"var":{delta:0,prefix:"var ",suffix:";"},"macro":{delta:1,prefixFunc:function(stmtParts,state,tmplName,etc){var macroName=stmtParts[1].split('(')[0];return["var ",macroName," = function",stmtParts.slice(1).join(' ').substring(macroName.length),"{ var _OUT_arr = []; var _OUT = { write: function(m) { if (m) _OUT_arr.push(m); } }; "].join('');}},"/macro":{delta:-1,prefix:" return _OUT_arr.join(''); };"}}
TrimPath.parseTemplate_etc.modifierDef={"eat":function(v){return"";},"escape":function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");},"capitalize":function(s){return String(s).toUpperCase();},"default":function(s,d){return s!=null?s:d;}}
TrimPath.parseTemplate_etc.modifierDef.h=TrimPath.parseTemplate_etc.modifierDef.escape;TrimPath.parseTemplate_etc.Template=function(tmplName,tmplContent,funcSrc,func,etc){this.process=function(context,flags){if(context==null)
context={};if(context._MODIFIERS==null)
context._MODIFIERS={};if(context.defined==null)
context.defined=function(str){return(context[str]!=undefined);};for(var k in etc.modifierDef){if(context._MODIFIERS[k]==null)
context._MODIFIERS[k]=etc.modifierDef[k];}
if(flags==null)
flags={};var resultArr=[];var resultOut={write:function(m){resultArr.push(m);}};try{func(resultOut,context,flags);}catch(e){if(flags.throwExceptions==true)
throw e;var result=new String(resultArr.join("")+"[ERROR: "+e.toString()+(e.message?'; '+e.message:'')+"]");result["exception"]=e;return result;}
return resultArr.join("");}
this.name=tmplName;this.source=tmplContent;this.sourceFunc=funcSrc;this.toString=function(){return"TrimPath.Template ["+tmplName+"]";}}
TrimPath.parseTemplate_etc.ParseError=function(name,line,message){this.name=name;this.line=line;this.message=message;}
TrimPath.parseTemplate_etc.ParseError.prototype.toString=function(){return("TrimPath template ParseError in "+this.name+": line "+this.line+", "+this.message);}
var parse=function(body,tmplName,etc){body=cleanWhiteSpace(body);var funcText=["var TrimPath_Template_TEMP = function(_OUT, _CONTEXT, _FLAGS) { with (_CONTEXT) {"];var state={stack:[],line:1};var endStmtPrev=-1;while(endStmtPrev+1<body.length){var begStmt=endStmtPrev;begStmt=body.indexOf("{",begStmt+1);while(begStmt>=0){var endStmt=body.indexOf('}',begStmt+1);var stmt=body.substring(begStmt,endStmt);var blockrx=stmt.match(/^\{(cdata|minify|eval)/);if(blockrx){var blockType=blockrx[1];var blockMarkerBeg=begStmt+blockType.length+1;var blockMarkerEnd=body.indexOf('}',blockMarkerBeg);if(blockMarkerEnd>=0){var blockMarker;if(blockMarkerEnd-blockMarkerBeg<=0){blockMarker="{/"+blockType+"}";}else{blockMarker=body.substring(blockMarkerBeg+1,blockMarkerEnd);}
var blockEnd=body.indexOf(blockMarker,blockMarkerEnd+1);if(blockEnd>=0){emitSectionText(body.substring(endStmtPrev+1,begStmt),funcText);var blockText=body.substring(blockMarkerEnd+1,blockEnd);if(blockType=='cdata'){emitText(blockText,funcText);}else if(blockType=='minify'){emitText(scrubWhiteSpace(blockText),funcText);}else if(blockType=='eval'){if(blockText!=null&&blockText.length>0)
funcText.push('_OUT.write( (function() { '+blockText+' })() );');}
begStmt=endStmtPrev=blockEnd+blockMarker.length-1;}}}else if(body.charAt(begStmt-1)!='$'&&body.charAt(begStmt-1)!='\\'){var offset=(body.charAt(begStmt+1)=='/'?2:1);if(body.substring(begStmt+offset,begStmt+10+offset).search(TrimPath.parseTemplate_etc.statementTag)==0)
break;}
begStmt=body.indexOf("{",begStmt+1);}
if(begStmt<0)
break;var endStmt=body.indexOf("}",begStmt+1);if(endStmt<0)
break;emitSectionText(body.substring(endStmtPrev+1,begStmt),funcText);emitStatement(body.substring(begStmt,endStmt+1),state,funcText,tmplName,etc);endStmtPrev=endStmt;}
emitSectionText(body.substring(endStmtPrev+1),funcText);if(state.stack.length!=0)
throw new etc.ParseError(tmplName,state.line,"unclosed, unmatched statement(s): "+state.stack.join(","));funcText.push("}}; TrimPath_Template_TEMP");return funcText.join("");}
var emitStatement=function(stmtStr,state,funcText,tmplName,etc){var parts=stmtStr.slice(1,-1).split(' ');var stmt=etc.statementDef[parts[0]];if(stmt==null){emitSectionText(stmtStr,funcText);return;}
if(stmt.delta<0){if(state.stack.length<=0)
throw new etc.ParseError(tmplName,state.line,"close tag does not match any previous statement: "+stmtStr);state.stack.pop();}
if(stmt.delta>0)
state.stack.push(stmtStr);if(stmt.paramMin!=null&&stmt.paramMin>=parts.length)
throw new etc.ParseError(tmplName,state.line,"statement needs more parameters: "+stmtStr);if(stmt.prefixFunc!=null)
funcText.push(stmt.prefixFunc(parts,state,tmplName,etc));else
funcText.push(stmt.prefix);if(stmt.suffix!=null){if(parts.length<=1){if(stmt.paramDefault!=null)
funcText.push(stmt.paramDefault);}else{for(var i=1;i<parts.length;i++){if(i>1)
funcText.push(' ');funcText.push(parts[i]);}}
funcText.push(stmt.suffix);}}
var emitSectionText=function(text,funcText){if(text.length<=0)
return;var nlPrefix=0;var nlSuffix=text.length-1;while(nlPrefix<text.length&&(text.charAt(nlPrefix)=='\n'))
nlPrefix++;while(nlSuffix>=0&&(text.charAt(nlSuffix)==' '||text.charAt(nlSuffix)=='\t'))
nlSuffix--;if(nlSuffix<nlPrefix)
nlSuffix=nlPrefix;if(nlPrefix>0){funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');var s=text.substring(0,nlPrefix).replace('\n','\\n');if(s.charAt(s.length-1)=='\n')
s=s.substring(0,s.length-1);funcText.push(s);funcText.push('");');}
var lines=text.substring(nlPrefix,nlSuffix+1).split('\n');for(var i=0;i<lines.length;i++){emitSectionTextLine(lines[i],funcText);if(i<lines.length-1)
funcText.push('_OUT.write("\\n");\n');}
if(nlSuffix+1<text.length){funcText.push('if (_FLAGS.keepWhitespace == true) _OUT.write("');var s=text.substring(nlSuffix+1).replace('\n','\\n');if(s.charAt(s.length-1)=='\n')
s=s.substring(0,s.length-1);funcText.push(s);funcText.push('");');}}
var emitSectionTextLine=function(line,funcText){var endMarkPrev='}';var endExprPrev=-1;while(endExprPrev+endMarkPrev.length<line.length){var begMark="${",endMark="}";var begExpr=line.indexOf(begMark,endExprPrev+endMarkPrev.length);if(begExpr<0)
break;if(line.charAt(begExpr+2)=='%'){begMark="${%";endMark="%}";}
var endExpr=line.indexOf(endMark,begExpr+begMark.length);if(endExpr<0)
break;emitText(line.substring(endExprPrev+endMarkPrev.length,begExpr),funcText);var exprArr=line.substring(begExpr+begMark.length,endExpr).replace(/\|\|/g,"#@@#").split('|');for(var k in exprArr){if(exprArr[k].replace)
exprArr[k]=exprArr[k].replace(/#@@#/g,'||');}
funcText.push('_OUT.write(');emitExpression(exprArr,exprArr.length-1,funcText);funcText.push(');');endExprPrev=endExpr;endMarkPrev=endMark;}
emitText(line.substring(endExprPrev+endMarkPrev.length),funcText);}
var emitText=function(text,funcText){if(text==null||text.length<=0)
return;text=text.replace(/\\/g,'\\\\');text=text.replace(/\n/g,'\\n');text=text.replace(/"/g,'\\"');funcText.push('_OUT.write("');funcText.push(text);funcText.push('");');}
var emitExpression=function(exprArr,index,funcText){var expr=exprArr[index];if(index<=0){funcText.push(expr);return;}
var parts=expr.split(':');funcText.push('_MODIFIERS["');funcText.push(parts[0]);funcText.push('"](');emitExpression(exprArr,index-1,funcText);if(parts.length>1){funcText.push(',');funcText.push(parts[1]);}
funcText.push(')');}
var cleanWhiteSpace=function(result){result=result.replace(/\t/g,"    ");result=result.replace(/\r\n/g,"\n");result=result.replace(/\r/g,"\n");result=result.replace(/^(\s*\S*(\s+\S+)*)\s*$/,'$1');return result;}
var scrubWhiteSpace=function(result){result=result.replace(/^\s+/g,"");result=result.replace(/\s+$/g,"");result=result.replace(/\s+/g," ");result=result.replace(/^(\s*\S*(\s+\S+)*)\s*$/,'$1');return result;}
TrimPath.parseDOMTemplate=function(elementId,optDocument,optEtc){if(optDocument==null)
optDocument=document;var element=optDocument.getElementById(elementId);var content=element.value;if(content==null)
content=element.innerHTML;content=content.replace(/&lt;/g,"<").replace(/&gt;/g,">");return TrimPath.parseTemplate(content,elementId,optEtc);}
TrimPath.processDOMTemplate=function(elementId,context,optFlags,optDocument,optEtc){return TrimPath.parseDOMTemplate(elementId,optDocument,optEtc).process(context,optFlags);}})();TrimPath.parseTemplate_etc.modifierDef.escape=function(s){return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}
TrimPath.parseTemplate_etc.modifierDef.js_string=function(s){return String(s).replace(/\\/g,"\\\\").replace(/'/g,"\\&#39;").replace(/"/g,"\\&#34;");}
TrimPath.parseTemplate_etc.modifierDef.substring=function(s,s1,s2){return String(s).substr(s1,s2);}
TrimPath.parseTemplate_etc.modifierDef.replace=function(s,s1,s2){return String(s).replace(s1,s2)}
TrimPath.parseTemplate_etc.modifierDef.parentDomain=function(s){return DomainMap.getParentDomain(s);}
TrimPath.parseTemplate_etc.modifierDef.to_url=function(s){if(s==null)
return"#";var url=/^(.+):\/\/(.*)$/;if(!url.test(s))
s="http://"+s;return s;}
TrimPath.parseTemplate_etc.modifierDef.showBr=function(s){return String(s).replace(/\n/g,"<br>");}
TrimPath.parseTemplate_etc.modifierDef.erase=function(s,i){s=s+'';if(s.length<=i)
return s;return s.substr(0,i)+'...';}

var g_curModuleTabs={};function swithModuleTab(thelist){var tab=thelist.id.replace("Tab","");var str=thelist.id.replace("Tab","Page");var ulParent=thelist.parentNode.parentNode;var g_curModuleTab=g_curModuleTabs[ulParent.id];if($(g_curModuleTab)){$(g_curModuleTab).style.display="none";$(str).style.display="";if($(tab+"Page").innerHTML==""){var func=ulParent.getAttribute("func");var execStr=func+"('"+tab+"');";eval(execStr);}
g_curModuleTabs[ulParent.id]=str;}else{var func=ulParent.getAttribute("func");var execStr=func+"('"+tab+"');";eval(execStr);}}
var Browser=new Object();Browser.isFirefox=(navigator.userAgent.toLowerCase().indexOf("firefox")!=-1);if(Browser.isFirefox){extendEventObject();}
function extendEventObject(){Event.prototype.__defineGetter__("srcElement",function(){var node=this.target;while(node.nodeType!=1)node=node.parentNode;return node;});Event.prototype.__defineGetter__("fromElement",function(){var node;if(this.type=="mouseover")
node=this.relatedTarget;else if(this.type=="mouseout")
node=this.target;if(!node)return;while(node.nodeType!=1)node=node.parentNode;return node;});Event.prototype.__defineGetter__("toElement",function(){var node;if(this.type=="mouseout")
node=this.relatedTarget;else if(this.type=="mouseover")
node=this.target;if(!node)return;while(node.nodeType!=1)node=node.parentNode;return node;});}
function IsChild(cNode,pNode){while(cNode!=null){cNode=cNode.parentNode;if(cNode==pNode)return true;}
return false;}
var waitInterval;var tempref;var MouseDelayTime=0;function getTBprefixName(str,sta){if(str.indexOf("cur")!=-1||str.indexOf("normal")!=-1)str=str.substr(6);else if(str.indexOf("over")!=-1)str=str.substr(4);else str="";return sta+str;}
function startajaxtabs(){for(var i=0;i<arguments.length;i++)
{var ulobj=document.getElementById(arguments[i]);ulist=ulobj.getElementsByTagName("li");g_curModuleTabs[arguments[i]]=ulist[0].id.replace("Tab","Page");for(var j=0;j<ulist.length;j++)
{var thelist=ulist[j];if(thelist.parentNode.parentNode!=ulobj)continue;thelist.setActive=function(bactive){var ulParent=this.parentNode.parentNode;var label=ulParent.getAttribute("label");if(bactive){this.status="cur";this.className=getTBprefixName(this.className,"cur");if(typeof label!="undefined"&&��label&&this.innerHTML.indexOf(label)<0)
this.innerHTML=(this.innerHTML+label).replace(" ","");}else{this.status="normal";this.className=getTBprefixName(this.className,"normal");if(typeof label!="undefined"&&��label)
this.innerHTML=this.innerHTML.replace(label,"");}}
thelist.LoadTab=function(){this.setActive(true);if (this != this.parentNode.parentNode.activetab) this.parentNode.parentNode.activetab.setActive(false);this.parentNode.parentNode.activetab=this;loadAJAXTab(this);}
thelist.onclick=function(aEvent){var myEvent=window.event?window.event:aEvent;var fm=myEvent.fromElement;if(IsChild(fm,this)||fm==this)return;if(this.status=="cur")return;tempref=this;tempref.LoadTab();}
thelist.onmouseout=function(aEvent){var myEvent=window.event?window.event:aEvent;var em=myEvent.toElement;if(IsChild(em,this)||em==this)return;if(this.status=="cur")return;clearTimeout(waitInterval);}
thelist=ulist[0];thelist.setActive(true);swithModuleTab(thelist);ulobj.activetab=thelist;}
if(ulobj.activetab==null)ulobj.activetab=ulist[0];}}
function loadAJAXTab(thelist){var tab=thelist.id.replace("Tab","");var urn=thelist.parentNode.parentNode.getAttribute("urn");var data=thelist.parentNode.parentNode.getAttribute("data");var version=thelist.parentNode.parentNode.getAttribute("version");if(data){var execStr="var b = "+data+"['"+tab+"'];";eval(execStr);}
if((typeof b=="undefined")&&urn&&($(tab+"Page").innerHTML=="")){var url=urn+tab+".htm";if(version){var execStr="var version = "+version+";";eval(execStr);url=url+"?"+version;}
var myajax=new Ajax.Request(url,{method:'get',parameters:'',requestHeaders:["If-Modified-Since","0"],onComplete:function(response){var jsData=response.responseText;eval(jsData);swithModuleTab(thelist);}});}
else
swithModuleTab(thelist);}

/**
* NetEase QuickLogin���ٵ�½��Ҳ��������ҳ��½ģ��
* @param {Boolean}bFromIndex
*		  �Ƿ�����ҳ����
*/

if (NetEase==undefined){
	var NetEase={};
}
NetEase.quickLoginTemplate = null;
NetEase.indexLoginTemplate = null;
var type163 = 0;
var typePopo = 1;
var type126 = 2;
var type188 = 3;
var typeVip =4;
var typeYeah =5;
//blog�Զ���¼cookie����ʽtype;
var ckLoginInfoKey = "NEBLOG_LOGIN";
//�Զ���¼cookie��Ϣ
var ckLoginInfo = {type:null, name:null, pass:null};
//var ckKeyFromType = "NEBLOG_LOGTP";
var ckPath = "/";
var ckDomain=DomainMap.cookieDomain;
var errInfo = ["�û��������벻��ȷ������������", "�����ײ����û���������", "��ʱ�˳�����Ȩ�޷��ʣ������µ�¼"];

NetEase.QuickLogin = Class.create();
NetEase.QuickLogin.prototype = {
	initialize: function(presentShowId, serverName, bFromIndex){
		this.options = Object.extend({
			err:false,
			jsWindowManager:null
		}, arguments[3] || {});
		//ȫ�ֱ���
		this.presentShowId = presentShowId;
		this.serverName = serverName;
		this.bFromIndex = bFromIndex;		
		this.err = false;
		this.jsWindowManager = this.options.jsWindowManager;
		this.objUsername;
		this.objPassword;
		this.objSetCkCheck;
		this.frmLogin;
		this.divNotice;
		this.btn_login;
		this.btn_reg;
		this.curUserType = 0;
		this.noticeInit = "�������û����������¼";
		this.noticeAccount = "����������ͨ��֤�û���";
		this.noticePassword = "��������д��¼��Ϣ�����벻��Ϊ��";
		this.isPwdFromCk = false;
		this.pwdFromCk;
		this.pwdFromCkTrim;	
		this.strUsername;
		this.strPassword;
		this.qLoginZone = null;
		this._load();			
	},
	
	_load: function(){	
		//��cookie�õ��û���������ȡ�get Login info  from last login .
		getLoginCookie();
		
		this.curUserType = ckLoginInfo.type;
		//this.curUserType = Cookie.get(ckKeyFromType);
		if(this.curUserType==null){
			this.curUserType = type163;
		}else{
			this.curUserType = parseInt(this.curUserType);
		}
		if(!this.bFromIndex || this.presentShowId=="qIndexLoginDiv"){
			//���ٵ�¼
			if (NetEase.quickLoginTemplate == null) 
				NetEase.quickLoginTemplate = quicklogin_jst;
			
			var data={err:false};
			var result = NetEase.quickLoginTemplate;
			if(this.presentShowId){
				this.qLoginZone = this.jsWindowManager.createWindow(this.presentShowId, {
					className:'g_win_4',width: 500, height:250,hideFlash:true,
					title:'��¼���ײ���', onTop:true,notKeepPos:true
				});			
				this.qLoginZone.panel.innerHTML = result;	
				this.qLoginZone.showWindow();
			}
		}else{
			//��ҳ��¼
			if (NetEase.indexLoginTemplate == null) 
				NetEase.indexLoginTemplate = indexlogin_jst;//createJSTAndParse("indexlogin_jst", indexlogin_jst);
			
			var data={err:false};
			var result = NetEase.indexLoginTemplate;//.process(data);
			$("outLoginDiv").innerHTML = result;	
		}
		
		this.frmLogin = $("frmLogin");
		this.divNotice = $("notice_bar");
		this.objUsername = $("in_username");
		this.objPassword = $("in_password");
		this.objSetCkCheck = $("setCookieCheck");
		
		if(document.all) {
			//this.objUsername.attachEvent("onfocus", this.checkUsername.bind(this));
			this.objUsername.attachEvent("onblur", this.checkUsername.bind(this));
			//this.objUsername.attachEvent("onkeyup", this.checkUsername.bind(this));
			this.objPassword.attachEvent("onfocus", this.fnPassOnFocus.bind(this));
			this.objPassword.attachEvent("onblur", this.checkPassword.bind(this));
			//this.objPassword.attachEvent("onkeyup", this.checkPassword.bind(this));
			if(!this.bFromIndex){
				for(var i=0; i<6; i++){
					if ($("tab_a_"+i))
						$("tab_a_"+i).attachEvent("onclick", this.selectUserType.bind(this, i));
					else
					    $("tab_"+i).attachEvent("onclick", this.selectUserType.bind(this, i));
				}
			}
			$("qLoginButt").attachEvent("onclick", this.dologin.bind(this));
			this.frmLogin.attachEvent("onkeypress", this.frmDologinIE.bind(this));
			this.objSetCkCheck.attachEvent("onclick", this.changeCookieCheck.bind(this));
		}
		else {
			//this.objUsername.addEventListener("focus", this.checkUsername.bind(this), true);
			this.objUsername.addEventListener("blur", this.checkUsername.bind(this), true);
			//this.objUsername.addEventListener("keyup", this.checkUsername.bind(this), true);
			this.objPassword.addEventListener("focus", this.fnPassOnFocus.bind(this), true);
			this.objPassword.addEventListener("blur", this.checkPassword.bind(this), true);
			//this.objPassword.addEventListener("keyup", this.checkPassword.bind(this), true);
//			this.btn_reg.addEventListener("onmouseout", this.regBtnOut.bind(this), true);	
				
			if(!this.bFromIndex){
				for(var i=0; i<6; i++){
					if ($("tab_a_"+i))
						$("tab_a_"+i).onclick = this.selectUserType.bind(this, i);
					else
						$("tab_"+i).onclick = this.selectUserType.bind(this, i);
				}
			}
			$("qLoginButt").onclick = this.dologin.bind(this);
			this.frmLogin.onkeypress = this.frmDologin.bind(this);	
			this.objSetCkCheck.onclick = this.changeCookieCheck.bind(this);			
		}
		if (this.bFromIndex)
		   showLoginType(this.curUserType);	
		this.selectUserType(this.curUserType);
		
	},
	
	showWindow: function(target){
		if(target){
			this.loginTarget = target;
		}
		this.qLoginZone.showWindow();
	},
	
	frmDologinIE: function(){
		if(event.keyCode==13) 
			this.dologin();
	},
	frmDologin: function(event){
		if(event.keyCode==13) 
			this.dologin();
	},
	
	changeCookieCheck:function(){
		if(!this.objSetCkCheck.checked){	
			//get Login type from last login 
			//var userNameInit = getUserNameInit(this.curUserType);			
			clearLoginCookie();			
		}
	},
	
	checkUsername: function(){	
		//divNotice.innerHTML = noticeAccount;
		//return true;	

		var strUsername = this.objUsername.value;
		//var reUsername = /^[A-Za-z0-9-][A-Za-z0-9\._-]{1,17}$/g;
		if (strUsername.length>0){		
			this.divNotice.innerHTML = this.noticeAccount;
		} else {
			this.divNotice.innerHTML = this.noticeInit;
		}	
		return true;
	},
	
	//����Ӧonfocus�¼���ֻ����cookie�������
	checkPasswordFocus: function(){
		var strPassword = this.objPassword.value;
		if(strPassword==""){
			var strUsername = this.objUsername.value + getNameSuffix(this.curUserType);
			strPassword = ckLoginInfo.pass;
			if(null != strPassword){
				this.pwdFromCk = strPassword;
				this.pwdFromCkTrim = strPassword;//.substring(0,11);			
				this.isPwdFromCk = true;
				this.objPassword.value = strPassword;//.substring(0,11);
			}
		}
		this.checkPassword();
	},
	
	//��Ӧ����������onfocus�¼�
	fnPassOnFocus: function(){
		this.objPassword.select();
		this.checkPassword();
	},
	
	checkPassword: function(){
		var strPassword = this.objPassword.value;
		if(null==strPassword || strPassword==""){
			this.isPwdFromCk = false;
		}
		
		var rePassword = /^[\s]*$/g;
			if (strPassword.match(rePassword) != null){
				this.divNotice.innerHTML = this.noticePassword;
				//this.objPassword.style.backgroundColor = "#fff";
				return false;
			} else {
				this.divNotice.innerHTML = this.noticeInit;
				//this.objPassword.style.backgroundColor = "#fff";
				return true;
			}
	},
	
	dologin: function(){
		if(this.checkUsername() && this.checkPassword()) { //˳����¼
			this.divNotice.innerHTML = "���ڵ�¼�����Ժ�...";
			this.objUsername.disabled=true;
			this.objPassword.disabled=true;
			
			if(document.all){
				this.objUsername.detachEvent("onblur", this.checkUsername);
				this.objPassword.detachEvent("onfocus", this.checkPassword);
				this.objPassword.detachEvent("onblur", this.checkPassword);
		
				$("frmLogin").detachEvent("onkeypress", this.frmDologinIE);	
				$("qLoginButt").detachEvent("onclick", this.dologin);
				this.objSetCkCheck.detachEvent("onclick", this.changeCookieCheck);				
			}else {
				this.objUsername.removeEventListener("blur", this.checkUsername, true);
				this.objPassword.removeEventListener("focus", this.checkPassword, true);
				this.objPassword.removeEventListener("blur", this.checkPassword, true);
			}
			
			var strPassword = this.objPassword.value;
			var strPwdOld;
			if(!this.isPwdFromCk || strPassword != this.pwdFromCkTrim){
				if(this.curUserType==typeVip)
					strPassword = this.pwd_js_string(strPassword);
				if(this.curUserType==type163  || this.curUserType==typeVip){
					strPassword = strPassword.substring(0,16);
				}else if(this.curUserType==typePopo){
					strPassword = strPassword.substring(0,21);
				}			
				strPwdOld = strPassword;
				strPassword = hex_md5(strPassword);		
			}else{
				//get from cookie
				strPassword = this.pwdFromCk;
				strPwdOld = strPassword;
			}
			
			var strUsername = Trim(this.objUsername.value.toLowerCase());	
			var strUsernameOld = strUsername;
			strUsername += getNameSuffix(this.curUserType);
			
			if(this.curUserType == type126 || this.curUserType == type188 || this.curUserType == typeYeah){				
				strPassword = strPwdOld;//.replace(/#/g,"%23");			
			}
			
			if(this.objSetCkCheck.checked){
				//username
				clearLoginCookie();
				
				setLoginCookie(1, strUsernameOld);
				setLoginCookie(2, strPassword);
			}else{
				clearLoginCookie();
			}			
			var bSavePass = this.objSetCkCheck.checked;
			//save cookie for login type
			setLoginCookie(0, this.curUserType);
			
			this.strUsername = strUsername;
			this.strPassword = strPassword;

			if(this.bFromIndex || this.presentShowId=="qIndexLoginDiv"){
				loginFromIndex(strUsername, strPassword,bSavePass);
			}else{
				UserBean.checkPassport (strUsername, strPassword,bSavePass, this.dologinCb.bind(this));	
			}		
		}
		return false;
	},
	
	dologinCb: function(b){
		if(b!=null){
			if (b=="not reg!!") {
					location.href="http://blog.163.com/passportIn.do?in_username="+this.strUsername+"&in_password="+this.strPassword;
			} else {
				//modified by xcc, �û�����ָ��loginTarget
				if (this.loginTarget==null){
					if ( $("$_oppoPageUrlForLogin")&&(UD.hostName == this.strUsername) ){
					  if (UD.hostPath =="") //����Ǹ��Ի�����
					     this.loginTarget = "http://"+DomainMap.getParentDomain(this.strUsername)+$("$_oppoPageUrlForLogin").value;
					     //this.loginTarget = $("$_oppoPageUrlForLogin").value;
					  else 
					     this.loginTarget = $("$_oppoPageUrlForLogin").value;
					}
					else
						this.loginTarget=window.location;
				} 			
				//location.href = UD.hostPath + "/loginGate.do?username="+this.strUsername+"&target=http://"+DomainMap.getParentDomain(this.strUsername)+this.loginTarget;
				location.href =  "http://blog.163.com/loginGate.do?username="+this.strUsername+"&target="+encodeURIComponent(this.loginTarget);
				setYodaoCookie(this.strUsername,this.objSetCkCheck.checked);
			}
		}else{
			//this.objUsername.value = "";
			this.objPassword.value = "";
			this.objUsername.disabled=false;
			this.objPassword.disabled=false;
			this.divNotice.innerHTML = "<span class='clr03'>�û��������벻��ȷ�����������롣</span>";
			$("in_username").focus();
		}
		
		return false;
	},
	
	pwd_js_string: function(s){
		return String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\\'").replace(/"/g, "\\\"");
	},
	
	updateSuffix: function(suffix){
		var e = $("account_suffix");
		e.innerHTML = suffix;
	},
		
	selectUserType: function(type){
		if(!this.bFromIndex){
			for(var i=0; i<6; i++){
				if($("tab_"+i)){
					if(type == i){
						if (!this.bFromIndex)
							$("tab_"+i).className="g_f_hov selected";
					}else{
						if (!this.bFromIndex)
							$("tab_"+i).className="g_f_hov";
					}
				}
			}
		}    
		     
		var regAdd = $("reg_add");
		var getPassAdd = $("getPass_add");
		
		var innerLoginDiv = $("innerLoginDiv");
		var sbStr = "bg_taglog";
		if(!this.bFromIndex){
			sbStr = "bg_menu";
		}
		if (!this.bFromIndex&&innerLoginDiv)
		   innerLoginDiv.style.backgroundImage = "url(http://st.blog.163.com/style/common/index/"+ sbStr + type +".gif)";
		
		if (this.bFromIndex){	
			this.noticeInit = "�ѿ�ͨ���ײ��͵ģ�"+getShowLogName(type)+"���û�ֱ�ӵ�¼";
			this.noticeAccount = "������"+getShowLogName(type)+"�û���";	
		}
		else{
			this.noticeInit = "������"+getShowLogName(type)+"�û����������¼";
			this.noticeAccount = "������"+getShowLogName(type)+"�û���";	
		}	
		if(type == type163){
			this.updateSuffix("@163.com");
			regAdd.href="http://reg.163.com/reg/reg0.jsp?url=http://blog.163.com/ntesRegBlank.html";
			getPassAdd.setAttribute("href","http://reg.163.com/RecoverPasswd1.shtml");
		}else if(type ==  type126){
			this.updateSuffix("@126.com");	
			getPassAdd.setAttribute("href","http://reg.126.com/recoverpass/");
		}else if(type ==  typePopo){
			this.updateSuffix(".popo&nbsp;&nbsp;&nbsp;");	
			regAdd.href="http://reg.popo.163.com/";
			getPassAdd.setAttribute("href","http://popo.163.com/prtpass/getpass.sp");
			getPassAdd.href="http://popo.163.com/prtpass/getpass.sp";
		}else if(type ==  type188){
			this.updateSuffix("@188.com");
			regAdd.href="http://reg.mail.188.com/index.jsp?from=";
			getPassAdd.setAttribute("href","http://reg.mail.188.com/rstpsw/rpsel.htm");
		}else if(type == typeVip){
			this.updateSuffix("@vip.163.com");
			regAdd.href="http://vip.163.com/register.m";
			getPassAdd.setAttribute("href","http://vip.163.com/PwdRepair/index.htm");
		}
		else if(type == typeYeah){
			this.updateSuffix("@yeah.net");
			regAdd.href="http://reg.mail.yeah.net/reg/reg1.jsp";
			getPassAdd.setAttribute("href","http://reg.mail.yeah.net/reg/recoverpass/");
		}
		$("reg_add").innerHTML="ע��"+getShowRegName(type)+" -->";
		
		this.curUserType = type;
		//����û���������
		this.objUsername.value ="";
		this.objPassword.value ="";
		var userNameInit = ckLoginInfo.name;
		
		if(userNameInit && ckLoginInfo.type==type){
			this.objUsername.value = userNameInit;
			this.checkPasswordFocus();
			this.objSetCkCheck.checked = true;
			this.noticeAccount = "������¼��ť";
			this.noticeInit = "������¼��ť";
		}else{
			this.objSetCkCheck.checked = false;
			//$("in_username").focus();
		}		
		
		//���������Ϣ
		var urlStr = window.location.href;
		var i = urlStr.indexOf("err=");
		if(i != -1){
			var errStr = urlStr.charAt(i+4);
			if(errStr=="1" || errStr=="2" || errStr=="3"|| errStr=="4"){
				var n = parseInt(errStr);
				if (n>3)n=1;
				this.noticeInit = this.noticeAccount = "<span class='cr'>"+errInfo[n-1]+"</span>";
			}
		}
		this.checkUsername();	
		if ($("in_username")) try{Field.activate("in_username");}catch(e){};
		
		if (this.bFromIndex) showLoginType(type);	
		return false;
	}
	
}

function closeLogin(){
	$("loginNewDiv").style.display="none";
}
	

function getLogStr(type){
	if(type==type163)
		return  "163";
	else if(type==typePopo)
		return  "POPO";
	else if(type==type126)
		return  "126";
	else if(type==type188)
		return  "188";		
	else if(type==typeVip)
		return  "VIP";	
	else if(type==typeYeah)
		return  "YEAH";		
}

function getNameSuffix(type){
	if(type==type163)
		return  "";
	else if(type==typePopo)
		return  ".popo";
	else if(type==type126)
		return  "@126";
	else if(type==type188)
		return  "@188";		
	else if(type==typeVip)
		return  ".vip";	
	else if(type==typeYeah)
		return  "@yeah";		
}

function getShowLogName(type){
	if(type==type163)
		return  "����ͨ��֤";
	else if(type==typePopo)
		return  "POPO";
	else if(type==type126)
		return  "126����";
	else if(type==type188)
		return  "188����";		
	else if(type==typeVip)
		return  "VIP����";	
    else if(type==typeYeah)
		return  "YEAH����";				
}

function getShowRegName(type){
	if(type==type163)
		return  "ͨ��֤";
	else if(type==typePopo)
		return  "POPO";
	else if(type==type126)
		return  "126����";
	else if(type==type188)
		return  "188����";		
	else if(type==typeVip)
		return  "VIP����";	
    else if(type==typeYeah)
		return  "YEAH����";				
}

//��cookie�õ���¼���͡��û���������
function getLoginCookie(){
	var a;
	var v = Cookie.get(ckLoginInfoKey);
	if(v){
		a = v.split("|");
		var type = null;
		if(a[0])
			ckLoginInfo.type = parseInt(a[0]);
		if(ckLoginInfo.type == null || ckLoginInfo.type == undefined || ckLoginInfo.type<0 || ckLoginInfo.type>4){
			ckLoginInfo.type = null;
			//����ȡ�������û���������Ϊ��
			return;
		}
		
		if(a[1] != null && a[1] != undefined && a[1] != "null" && a[2] != null && a[2] != undefined){
			ckLoginInfo.name = a[1]; 
			//ȡ���룬�ӵڶ���|��ʼ
			var pos = v.indexOf('|',2);
			ckLoginInfo.pass = v.substring(pos+1);
		}
	}
}

//����cookie��¼����(which=0)���û���(which=1)������(which=2)
function setLoginCookie(which, value){
	getLoginCookie();
	if(which==0)
		ckLoginInfo.type = value;
	else if(which==1)
		ckLoginInfo.name = value;
	else if(which==2)
		ckLoginInfo.pass = value;
		
	Cookie.clear(ckLoginInfoKey, ckPath);
	//cookie value����ascii���봫�䣬����url encoding,����������Ҫdecode
	Cookie.set(ckLoginInfoKey, ckLoginInfo.type + "|" + ckLoginInfo.name + "|" + ckLoginInfo.pass, 30, ckPath, ckDomain);			
}

//���ckLoginInfoKey��cookie��ͬʱҲ���ckLoginInfo��name��pass��������type
function clearLoginCookie(){
	ckLoginInfo.name = null;
	ckLoginInfo.pass = null;
	Cookie.clear(ckLoginInfoKey, ckPath);
	clearYodaoPersistCookie();
	if(ckLoginInfo.type != null && ckLoginInfo.type != undefined && ckLoginInfo.type != "null")
		Cookie.set(ckLoginInfoKey, ckLoginInfo.type, 30, ckPath, ckDomain);			
}

var Cookie = {
	set : function(name, value, expirationInDays, path, domain) {
		var cookie = escape(name) + "=" + escape(value);
		if (expirationInDays) {
			var date = new Date();
			date.setDate(date.getDate() + expirationInDays);
			cookie += "; expires=" + date.toGMTString();
		} 

		if (path) {
			cookie += ";path=" + path;
		}
		if (domain) {
			cookie += ";domain=" + domain;
		}
		
		document.cookie = cookie;

		if (value && (expirationInDays == undefined || expirationInDays > 0) && !this.get(name)) {
			return false;
		}
	},

	clear : function(name, path) {
		this.set(name, "", -1, path, ckDomain);
	},
	
	get : function(name) {
		var pattern = "(^|;)\\s*" + escape(name) + "=([^;]+)";
		var m = document.cookie.match(pattern);
		if (m && m[2]) {			
			return unescape(m[2]);
		}else{ 
			return null;
		}
	}
}   
function isUrsUser(strUsername){
	if (strUsername.indexOf("@")<=0 && strUsername.indexOf(".popo")<=0 && strUsername.indexOf(".vip")<=0)return true;
	return false;
}
function clearYodaoPersistCookie(){
	var yodaoJsUrl = "http://reg.yodao.com/setcookie.jsp?callback=test&domain=yodao.com&clearPersistCookie=1";
	dynamic_javascript_load(yodaoJsUrl)
}
function setYodaoCookie(strUsername,bSavePass){
	try{
		if (isUrsUser(strUsername)){
			var yodaoJsUrl = "http://reg.yodao.com/setcookie.jsp?callback=test&domain=yodao.com&username="+strUsername+"&loginCookie="+Cookie.get("NTES_SESS");
			if(bSavePass) yodaoJsUrl+="&persistCookie="+Cookie.get("NTES_PASSPORT");
			dynamic_javascript_load(yodaoJsUrl);
		}
	}catch(e){}
}     
function dynamic_javascript_load(jsurl)
{
    var head = document.getElementsByTagName('head').item(0);
    var script = document.createElement('script');
    script.src = jsurl;
    script.type = 'text/javascript';
    head.appendChild(script);
}
        
//���ٵ�¼
var quicklogin_jst = 
'<div>'+
'   <form name="frmLogin"  id="frmLogin"  method="post">'+
'						<div class="g_tab_btn03">'+
'						  <div class="g_f_hov"  id="tab_0">����ͨ��֤</div>'+
'							<div class="g_f_hov" id="tab_2">126����</div>'+
'							<div class="g_f_hov" id="tab_1">POPO</div>'+
'							<div class="g_f_hov" id="tab_3">188����</div>'+
'							<div class="g_f_hov" id="tab_4">VIP����</div>'+
'							<div class="g_f_hov" id="tab_5">YEAH����</div>'+
'						</div>'+
'						<!-- ͨ��֤ -->'+
'						<div class="case">'+
'							<div class="mgntxt clr02" id="notice_bar" style="display-left:0px;"></div>'+
'						    <div class="input"><label for="text0">�û�����</label><input class="g_h_ipt" type="text" name="in_username" id="in_username"/>&nbsp;<span id="account_suffix">@163.com</span></div>'+
'							<div class="input"><label for="text1">�ܡ��룺</label><input class="g_h_ipt" type="password" name="in_password" id="in_password"/>&nbsp;<span class="a_a d_d" href="http://reg.163.com/RecoverPasswd1.shtml" target="_blank" id="getPass_add">����������?</span></div>'+
'							<div class="btnbar"><input type="checkbox"  name="setCookieCheck" id="setCookieCheck" ><label for="setCookieCheck">�Զ���¼</label>&nbsp;<input type="button" class="btncm btnok" value="��¼���ײ���"  id="qLoginButt"/></div>'+
'					    </div>'+
'						<div class="bottom">'+
'						  <span>��û�����ײ���?</span>&nbsp;<input type="button" class="btncm btncc" value="����ע��" onclick="window.open(\'http://reg.163.com/reg/reg0.jsp?url=http://blog.163.com/ntesRegBlank.html\');" />'+
'						</div>'+
'   </form><span id="reg_add" style="display:none;" href="#">ww</span>'+
'</div>';

function UserBean() { }
UserBean.clearSession = function(callback) {dwr.engine._execute('/dwr', 'UserBean', 'clearSession', false, false, callback);}
UserBean.check = function(p0, p1, callback) {dwr.engine._execute('/dwr', 'UserBean', 'check', p0, p1, false, false, false, callback);}
UserBean.checkPassport = function(p0, p1, p2, callback) {dwr.engine._execute('/dwr', 'UserBean', 'checkPassport', p0, p1, p2, false, false, false, callback);}
UserBean.getProvinceAndCity = function(callback) {	dwr.engine._execute('/dwr', 'UserBean', 'getProvinceAndCity', false, false, callback);}  	          

/**************ȫ�ֱ���**********************/
var g_curPage = "login";
var g_curSearchType = "Blog";
var g_UpdaterNum = 8;
var g_autoLoginInfo = {};
var g_login=null;

/**************ҳ���ʼ������**********************/
function fnLoadInit(){	
	hideLinks();
	focususer();
}
function focususer(){
	if ($("in_username")) try{Field.activate("in_username");}catch(e){};
}
function hideLinks(){
	for(var ii=0; ii<document.links.length; ii++)
		document.links[ii].onfocus=function(){this.blur()}		
}
function loadLogin(){
	if (typeof g_fnLoginAuto !="undefined")return;
	try{fnLoginAuto();}catch (e){log(e);}	
	g_fnLoginAuto = true;
}
function loadFriend(){
	if (typeof g_initFriend !="undefined")return;
	try{initFriend();if (window.location.href.indexOf("&advance")>0)showHideCon();} catch (e){log(e);}
	g_initFriend = true;
}
function loadUpdate(){
	if (typeof g_initUpdate !="undefined")return;
	try{initUpdate();$("divUpdaterBody").style.display="";}catch(e){log(e);}
	g_initUpdate = true;
}
function loadIntro(){
					  var index  = Math.floor(Math.random()*4+ 1);
					  $("introImg").src="http://blog.163.com/style/common/index/image/pic0"+index+".jpg?1105";
}
/***************************����ҳ�沿��**************************************/
var famousInfoShowTimer =null;
var famousInfoShowDelay = 500;
var famousInfoStrTemplate =null;
var $_famousInfoName;
var $_famousInfoTarget;
function switchFamous(){
	var name = $_famousInfoName;
	var target=$_famousInfoTarget;
	var famousObj = getFamousObjByName(name);
	if (famousObj ==null) return;
	if (famousInfoStrTemplate ==null)
	   famousInfoStrTemplate =createJSTAndParse("famousInfo_jst",famousInfo_jst);
	var data={"famousObj":famousObj};
	$("famousInfo").innerHTML = famousInfoStrTemplate.process(data);
    var x = Position.positionedOffset(target)[0]+30;
    var y = Position.positionedOffset(target)[1]-138;
	$("famousInfo").style.left = x+ "px";
	$("famousInfo").style.top =  y+ "px";
	$("famousInfo").style.display="";	
}
function showFamousInfo(name,target){
	$_famousInfoName = name;
	$_famousInfoTarget = target;
	if (famousInfoShowTimer) clearTimeout(famousInfoShowTimer);
	famousInfoShowTimer = window.setTimeout(switchFamous,famousInfoShowDelay);	
}
function hideFamousInfo(){
	$("famousInfo").style.display="none";
	if (famousInfoShowTimer) clearTimeout(famousInfoShowTimer);
}

function getFamousObjByName(name){
	for(var tab in g_famousShowList){
		var g_famousShowTabList = g_famousShowList[tab];
		for(var i=0;i<g_famousShowTabList.length;i++){
			var famousObj = g_famousShowTabList[i];
			if (famousObj[0]==name){
			 	return famousObj;		
			 }		
		}	
	}
	return null;
}
function isFamousUpdate(name){
	if (typeof g_updateFamous == "undefined")
		return false;	
	for(var index=0; index<g_updateFamous.length; index++) {
		if (name == g_updateFamous[index])
			return true;
	}
	return false;
}
var famousStrTemplate=null;
function getFamousShowHTMLTabStr(tab){
	if (famousStrTemplate==null)
	   famousStrTemplate =createJSTAndParse("famous_jst",famous_jst);
	var pubtab="index";
	if (tab!="hot" )pubtab = tab;
	var data={"famousObjs":g_famousShowList[tab],"pubtab":pubtab};
	var str = famousStrTemplate.process(data);
	return str;
}

var famousInfo_jst=
'       <div class="wrap"><img src="${getAvaImgUrl(famousObj[3])}"/></div>'+
'       <div>'+
'          <span class="ch">${famousObj[1]}</span><br>'+
'          <span class="cg">${famousObj[2]}</span>'+
'       </div>';


var famous_jst =
'{var famousObjs = getSubArray(famousObjs,32)}'+
'{var countperline=4}'+
'  <table>'+
'    {for o in famousObjs}{if o_index%countperline==0}<tr>{/if}'+
'    <td><a href="http://${DomainMap.getParentDomain(o[0])}"  target="_blank" onmouseout="hideFamousInfo();" onmouseover="showFamousInfo(\'${o[0]}\',this)" {if isFamousUpdate(o[0])}class="cr"{/if}>${o[1]}</a></td>'+
'   {if o_index%countperline==7}</tr>{/if}{/for}{if famousObjs.length%countperline!=0}</tr>{/if}</table>' +
'<div class="moduleBottom"><a  class="cr" href="http://blog.163.com/pub/famous/${pubtab}.html" target="_blank">����13ǿ���忪��</a>' +
'<a href="http://blog.163.com/pub/famous/${pubtab}.html" target="_blank">�������Ӽ��忪��</a>' +
'<a href="http://blog.163.com/pub/famous/${pubtab}.html" target="_blank">������</a>' +
'</div>';


/*******************������Ϣ��¼ҳ��*******************************/
function fnLoginAuto(){
	getLoginCookie();	
	var netAName = Cookie.get("NETEASE_AUTH_USERNAME");
	var isLogined = (netAName != null && netAName != "");
	if (getPageType() =="exit" && isLogined ==false){showLogin();return;} 
	//��cookie�õ��û���������ȡ�get Login info  from last login .
	var curUserType = ckLoginInfo.type;
	//����û���������
	var userNameInit = ckLoginInfo.name;
	var strPassword = null;
	
	if(userNameInit){
		//��checkPasswordFocus()��dologin����ȡ
		var strUsernameOld = userNameInit;
		var strUsername = userNameInit + getNameSuffix(curUserType);
		g_autoLoginInfo.hostName = strUsername;		
		strPassword = ckLoginInfo.pass;
	}
	var isAuto = g_autoLoginInfo.hostName != null && g_autoLoginInfo.hostName != "";	
	//����ս��е�¼

	//netAName = "163sfdsdspace";
	//�Զ���¼���û�����������Զ���¼

	if((isAuto&&userNameInit&&(null != strPassword))){//�����Զ���¼�����
		var strUsernameOld = userNameInit;
		var strUsername = userNameInit + getNameSuffix(curUserType);
		g_autoLoginInfo.hostName = strUsername;
	 //������Զ���¼,������password cookie
		var pwdFromCk = strPassword;
		var strPwdOld = strPassword;			
		if(curUserType == type126 || curUserType == type188){
				strPassword = strPwdOld;//.replace(/#/g,"%25252523")
		}	
		//��ʡcookie���������˸ĳɴ�ͳһcookie��ȡ
		//Cookie.set("in_password",strPassword,-1,"/",null);
	}
	else if (isLogined&&(strUsername==null)) //�����ѵ�¼�����
		strUsername = netAName;
	else{  //���򷵻�
		showLogin();
		return false;			
	}	
	if (netAName ==null){
		 DWREngine.setWarningHandler(function(){ DWREngine.setWarningHandler(null);showLogin();});
		 UserBean.check(strUsername,strPassword, {
		  callback:function(dataFromServer) {
		    DWREngine.setWarningHandler(null);
		    if (dataFromServer!=null){loadProfileInfo(strUsername);}
		    else{showLogin();}
		  }.bind(this)
		});
	}		
	else loadProfileInfo(strUsername);
	return true;
}
var g_pageType={"l":"login","c":"circle","e":"exit","f":"friend","s":"search"};
function getPageType(){
	var urlStr = window.location.href;
	var i = urlStr.indexOf("t=");
	if(i != -1){
		var errStr = urlStr.charAt(i+2);
		if (g_pageType[errStr])
		   return g_pageType[errStr];
	}
	return "login";
}
function getSubArray(array,size){
	if (array.length<=size) return array;
	var tempArray = [];
	for(var index=0; index<array.length; index++) {
		if (index == size) break;
		tempArray.push(array[index]);
	}
	return tempArray;
}

var loginTimer =null;
var g_loginTypes={"����ͨ��֤":0,"126�����ʺ�":2,"POPO�ʺ�":1,"188�����ʺ�":3,"VIP�����ʺ�":4,"YEAH�����ʺ�":5};
function showAllLoginTypesDiv(){
	if ($("allLoginTypesDiv").style.display=="none"){
		$("allLoginTypesDiv").style.display="";
		var selAs = $("allLoginTypesDiv").getElementsByTagName('a');
		for(var index=0; index<selAs.length; index++) {
			selA =selAs[index];
			if (selA.innerHTML== $("curLoginType").innerHTML) 
			   selA.className="cur";
			else 	
			   selA.className="";	
			   
		}
	}
	else
	    $("allLoginTypesDiv").style.display="none";
}
function selectLogin(aa){
	switchLoginType(aa.innerHTML);
	$("allLoginTypesDiv").style.display="none";
}
function switchLoginType(tab){
	if (g_login)
		g_login.selectUserType(g_loginTypes[tab]);
}
function showLogin(){
	g_login = new NetEase.QuickLogin(null, null, true,  {err:false});		
	if($("notLoginedStateDiv"))$("notLoginedStateDiv").style.display="block";	
	$("loginNav").style.display="block";	
}
function loadProfileInfo(strUsername){
	Cookie.set("NETEASE_AUTH_USERNAME",strUsername,0,"/",".163.com");
	ajax_load("/loginNewMyInfoGate.do?username="+strUsername+"&target=/loginNewMyInfo.do");
}
function ajax_load(jsurl){
	var myajax=new Ajax.Request(jsurl,{method:'get',parameters:'',requestHeaders:["If-Modified-Since","0"],
	   onComplete:function(response){			
					var jsData = response.responseText;
					if ((response.status==200) && (jsData.indexOf("logined(o)")>0)){						
						try {
							eval(jsData);	
								if($("notLoginedStateDiv"))$("notLoginedStateDiv").style.display="none";	
							$("loginNav").style.display="none";	
						} catch (e) {showLogin();}
					}else{
						showLogin();
					}
			}
			});
}
function loadUrl(jsurl){
   new Ajax.Request(jsurl,{method:'post',parameters:''});
}


function getNowStr(){
   var date =  new Date();
	var h = parseInt(date.getHours());
	if(h>6 && h<=12){
		hour = "����";
	}else if(h>12 && h<18){
		hour = "����";
	}else if((h>=0 && h<=6) || (h>=18 && h<=24)){
		hour = "����";
	}else{
		hour = "";
	}
	return  hour + "��";
}
function showLoginType(type){
	if (typeof type == "undefined") return ;
	var curTab = "";
	for(var tab in g_loginTypes) {
		if (g_loginTypes[tab] == type){			
			$("curLoginType").innerHTML = tab;
			curTab=tab;
			break;		
		}
	}
}
function logined(o){
	var loginedStrTemplate =createJSTAndParse("logined_jst",logined_jst);
	var domainName = DomainMap.getParentDomain(o.visitorName);
	o.domainName = domainName;
	var data={"o":o};
	var str = loginedStrTemplate.process(data);
	if ($("loginedStateDiv"))
		$("loginedStateDiv").innerHTML = str;	
	else
		$("outLoginDiv").innerHTML = str;	
	if ($("logoutBtn"))$("logoutBtn").style.display="";
}

function loginFromIndex(strUsername,strPassword,bSavePass){
	 DWREngine.setWarningHandler(function(){
	    DWREngine.setWarningHandler(null);
	    showLogin();
	    g_login.divNotice.innerHTML = "<span class='cr'>����æ�����Ժ��¼</span>";
	    }
	 );
	 UserBean.checkPassport(strUsername,strPassword,bSavePass, {
		  callback:function(b) {
		   postLoginFromIndex(strUsername,strPassword,bSavePass,b);		   
		  }
		});
}

function postLoginFromIndex(strUsername, strPassword,bSavePass,b){
	DWREngine.setWarningHandler(null);
	if(b!=null){
			if (b=="not reg!!") {
					window.location.href="/passportIn.do?in_username="+strUsername+"&in_password="+strPassword+"&enterMyBlog";
			} else {
				$("frmLogin").target="loginIFrame";
				$("frmLogin").action="/blank.html";
				$("submitIndexLoginBtn").click();
				window.location.href="/loginGate.do?username="+strUsername+"&target="+encodeURIComponent("http://"+DomainMap.getParentDomain(strUsername)+"/edit")+"?enterMyBlog";
				setYodaoCookie(strUsername,bSavePass);
				//loadProfileInfo(strUsername);
			}
		}else{
			//g_login.objUsername.value = "";
			g_login.objPassword.value = "";
			g_login.objUsername.disabled=false;
			g_login.objPassword.disabled=false;
			g_login.divNotice.innerHTML = "<span class='cr'>�û��������벻��ȷ�����������롣</span>";
			//focususer();
		}
		
		return false;
}
function logout(){
	Cookie.set("NETEASE_AUTH_USERNAME",null,-1,"/",null);Cookie.set("NETEASE_AUTH_SOURCE",null,-1,"/",".163.com");Cookie.set("NTES_SESS",null,-1,"/",".163.com");Cookie.set("USERNAME_FROM_URS",null,-1,"/",".163.com");Cookie.set("NETEASE_SSN",null,-1,"/",".163.com");showLogin();UserBean.clearSession();	
	if ($("logoutBtn")) $("logoutBtn").style.display="none";
	if($("blog_notLoginedDiv")) $("blog_notLoginedDiv").style.display="inline";
	if($("blog_loginedDiv")) $("blog_loginedDiv").style.display="none";
	if($("blog_logined_ExistDiv")) $("blog_logined_ExistDiv").style.display="none";
	if ($("loginedStateDiv"))$("loginedStateDiv").style.display="none";
	if ($("in_password")) $("in_password").value="";
}
function popupMusic(){
    try{
		var netAName = Cookie.get("NETEASE_AUTH_USERNAME");
		var isLogined = (netAName != null && netAName != "");	
		var domain="";
		if (isLogined) domain =  DomainMap.getParentDomain(netAName);		
		var url ="";
		if (Browser.isFirefox ){			
			if (isLogined) url = "http://"+domain+"/musicBox.do";
			else {alert('�ò���ֻ֧��IE�����');return false;}
			window.open(url+"?myInfoMusic","_blank","resizable=no,scrollbars=no,status=yes,width=365px,height=300px");	
		}
		else {
		  	if (isLogined) url = "http://"+domain+"/m";
			else url = "http://blog.163.com/m_i";
			window.open(url+"/?myInfoMusic","_blank","resizable=no,scrollbars=no,status=yes,width=770px,height=591px");
		}
	}catch(e){}
}
//��������ҳ��
var logined_jst =
'<div id="divLoginMyInfo">'+
'	<div id="divMyInfoInn" >      '+
'	 	<div>'+
'			<div class="picBigWrap" style="width:148px;height:148px;"><a href="http://${o.domainName}/edit/?myInfoPicIn" title="�����ҵĲ���"><img src="${o.imageUrl}" style="width:148px;height:148px;"></a></div>'+
'			<div id="divMyNewInfo">'+
'				<div><div id="divMyNickName"><span class="d">${o.visitorNickname}��</span><span class="b" id="myInfoTime">${getNowStr()}</span></div><div style="float:left;"><span class="b"></span></div><div class="sepDiv"></div></div>'+
'			</div>'+
'			<div style="float:left;">'+
'				<a href="http://${o.domainName}/getBlog.do?myInfoWrite"><div id="loginMyInfo_blog"></div></a>'+
'				<a href="http://${o.domainName}/editPhotoUpload.do?myInfoUpload" ><div id="loginMyInfo_photo"></div></a>'+
'				<a href="#" onclick="popupMusic(\'${o.domainName}\');return false;"><div id="loginMyInfo_music"></div></a>					'+
'			</div>'+
'			<div style="float:left;">'+
'				<div id="loginMyInfo_enter"><input type="button" onclick="window.location=\'http://${o.domainName}/edit/?myInfoButtIn\'" value="����"/></div>				'+
'			</div>'+
'			<div class="sepDiv"></div>'+
'		</div>'+
'		<div id ="divMyNewInfoT">'+
'			<div style="float:left;">'+
'					{if (o.noteCount>0)}<span class="a">������</span><span class="c1">${o.noteCount}</span>{/if}'+
'					{if (o.commentCount>0)}<span class="a">������</span><span class="c1">${o.commentCount}</span>{/if}'+
'					{if (o.remindCount>0)}<span class="a">δ����Ϣ</span><span class="c1">${o.remindCount}</span>{/if}'+
'			</div>'+
'			<div id="exitMyInfo"><a href="#" onclick="logout();return false;">�˳�</a></div>				'+
'		</div>'+
'	</div>'+
'</div>	  ';


//��������ҳ���¼  
var indexlogin_jst = 
	          '<div id="innerLoginDiv">'+
	            '<iframe id="loginIFrame" name="loginIFrame" style="display:none"></iframe>'+
	            '<form name="frmLogin" id="frmLogin"  method="get" onSubmit="return false;" style="margin:0px;padding:0px;">'+
	            '<table style="width:100%;" id="Table1">'+
	              '<tr>'+
	                '<td colspan=2 style="padding:2px 5px 2px 5px;">'+
	                	'<div id="notice_bar" class="lNotice_bar"></div></td>'+
	              '</tr>'+
	              '<tr>'+
	                '<td class="lNamePwdTd">�û���:</td>'+
	                '<td style="padding:0px;"><ul>'+
	                    '<li>'+
	                      '<input name="in_username" id="in_username" class="lpInputLogin" />'+
	                    '</li>'+
	                    '<li style="padding:5px 0px 0px 5px;"><span id="account_suffix">@163.com</span></li>'+
	                  '</ul></td>'+
	              '</tr>'+
	              '<tr>'+
	                '<td class="lNamePwdTd">��&nbsp;&nbsp;&nbsp;��:</td>'+
	                '<td style="padding:0px;"><input name="in_password" id="in_password" type="password" class="lpInputLogin" /><a id="getPass_add" href="http://reg.163.com/RecoverPasswd1.shtml" target="_blank">����������?</a></td>'+
	              '</tr>'+
	              '<tr>'+
	                '<td colspan=2 id="logAndReg" style="padding-left:64px;">'+
	                '<div id="savePwdTd" class="lSavePwdTd"><input type="checkbox" id="setCookieCheck" NAME="setCookieCheck" class="lSetCookieCheck" /><label for="setCookieCheck">�´��Զ���¼</label></div>'+
	              '</tr>'+
	              '<tr>'+
	                '<td colspan=2 style="padding-left:64px;">'+
	                '<div><input value="��¼���ײ���" type="button" id="qLoginButt"><input value="��ͨ" type="button" id="regBtn" onclick="window.open(\'http://reg.163.com/reg/reg0.jsp?url=http://blog.163.com/ntesRegBlank.html\')"></div>'+
	                '<a id="reg_add" href="#"></a></td>'+
	              '</tr>'+
	             
	            '</table>'+
	            '<input type=submit id="submitIndexLoginBtn" value="�ύ" style="display:none;">'+
	            '</form>'+
	          '</div>'+
	          '<div  id="regNow">'+
	          '<a href="http://blog.163.com/blog_admin/">���Ͷ�̬</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="http://help.163.com/special/007525FT/blog.html?b13abd1">��������</a>'+ 
	          '</div>';      

	          
//��ҳ��¼  
var home_indexlogin_jst = 
					         '<iframe id="loginIFrame" name="loginIFrame" style="display:none"></iframe>'+
				'						<form name="frmLogin" id="frmLogin"  method="get" onSubmit="return false;" style="margin:0px;padding:0px;">'+
				'						<div>'+
				'							<div class="f04 tip" id="notice_bar" style="padding:10px 0px">�ѿ�ͨ���ײ��͵��û�ֱ�ӵ�½</div>'+
				'							<div class="col0 f01"><div>�û���</div><div>�ܡ���</div><div>&nbsp;</div></div>'+
				'							<div class="col1">'+
				'								<div><input name="in_username" id="in_username" class="txt" style="width:118px;"/><span id="account_suffix" class="f03">@163.com</span></div>'+
				'								<div><input name="in_password" id="in_password" type="password" class="txt" style="width:118px;"/><a id="getPass_add" class="a03" href="http://reg.163.com/RecoverPasswd1.shtml" target="_blank">����������?</a></div>'+
				'								<div class="f03 mar"><input type="checkbox" id="setCookieCheck" name="setCookieCheck" class="cb" /><label for="setCookieCheck">�´��Զ���¼</label></div>'+
				'							</div>'+
				'							<br class="clear"/>					'+
				'							<input class="btn f06" type="button" value="��¼���˲���"  id="qLoginButt"/>'+
				'						</div>'+
				'						<div class="reg">'+
				'							<div class="adv">&nbsp;</div><a id="reg_add" href="#" style="display:none"></a>'+
				'							<input class="btn f06" type="button" value="����ע��" id="regBtn"  onclick="window.open(\'http://reg.163.com/reg/reg0.jsp?url=http://blog.163.com/ntesRegBlank.html\')"/>'+
				'							<div class="tip"><span class="f05 red">6148��</span><span class="f04">���ѽ�����Ϊ��</span></div>'+
				'						</div>'+
				'						<input type=submit id="submitIndexLoginBtn" value="�ύ" style="display:none;">'+
				'						</form>';	
				
var home_logined_jst = '<div class="state1" >'+
'					<div class="log-head bg02 f07">��ӭ�������ײ���</div>'+
'					<div class="log-body">'+
'						<div class="intro">'+
'							<a class="a-img" href="http://${o.domainName}/edit/?myInfoPicIn" title="�����ҵĲ���" target="_self"><img src="${o.imageUrl}"/></a>'+
'							<div class="inf">'+
'								<div class="f03 title"><a target="_self" class="a-nick a05" href="http://${o.domainName}/edit/?myInfoPicIn">${o.visitorNickname}��</a><span class="b" id="myInfoTime">${getNowStr()}</span></div>'+
'								<div class="f02">'+
'									{if (o.noteCount>0)}<div>�����ԣ�<a class="a00" target="_self" href="http://${o.domainName}/profile/?target=note">${o.noteCount}</a></div>{/if}'+
'									{if (o.commentCount>0)}<div>�����ۣ�<a class="a00" target="_self" href="http://${o.domainName}/profile/?target=blogcomment">${o.commentCount}</a></div>{/if}'+
'									{if (o.remindCount>0)}<div>����Ϣ��<a class="a00" target="_self" href="http://m.163.com/${o.visitorName}/">${o.remindCount}</a></div>{/if}'+
'									<div>���շ��ʣ�<a target="_self" class="a00" href="http://${o.domainName}/">${o.todayCount|default:0}</a></div>'+
'								</div>'+
'							</div>'+
'							<br class="clear"/>'+
'							<div class="tools"><span class="nav"><a class="a07" target="_self" href="http://${o.domainName}/getBlog.do?myInfoWrite">д��־</a><span class="sep">|</span><a  target="_self" class="a07" href="http://${o.domainName}/editPhotoUpload.do?myInfoUpload">����Ƭ</a><span class="sep">|</span><a class="a07" href="#" onclick="popupMusic(\'${o.domainName}\');return false;">���ֺ�</a></span><input class="btn f06" type="button" onclick="window.location=\'http://${o.domainName}/edit/?myInfoButtIn\'"  value="������˲���"/></div>'+
'						</div>'+
'						<!--end of intro-->'+
'						<div class="extra">'+
'							<div class="strict msgs">'+
'								{if o.hasChummy}{if o.eventList}{for event in o.eventList}<div class="f03 item"><span class="dot">&#183;</span><a class="a04" href="http://blog.163.com/${event.name}/">${event.nickName}</a>${event.title}</div>{/for}'+
'								{else}����������޸��¶�̬{/if}{/if}'+
'								{if o.hasChummy==false}�㻹û�����ѣ�<a target="_self" href="http://${o.domainName}/manageChummy.do" class="a07">�����Ҫ��ע������>></a>{/if}'+
'							</div>'+
'							<div class="a-my"><a target="_self" href="http://${o.domainName}/friends" class="a07">�����ҵ�����</a></div>'+
'						</div>'+
'					</div>'+
'					<!-- end of log-body-->'+
'				</div>';
	          
/**************����������¸��²���**********************/

function initUpdate(){
	if ((typeof g_defaultUpdates != "undefined")&&g_defaultUpdates){
		getUpdaterCb(g_defaultUpdates);
	}else{
		getUpdaterShows();
	}				
}
function IndexBean(){}
IndexBean.getUpdaterByRegion = function(p0, callback) {
    DWREngine._execute('/dwr', 'IndexBean', 'getUpdaterByRegion', p0, false, callback);
}
function getUpdaterShows(){
	IndexBean.getUpdaterByRegion(g_UpdaterNum,{
		       callback: function(oDataFromServer){
					getUpdaterCb(oDataFromServer);
				}.bind(this),
				errorHandler:function(ex) {
					  IndexBean.getUpdater(g_UpdaterNum, getUpdaterCb);
				}.bind(this)				
			});						
	
	return false;
}

/**
 * ��["����","5Kr4Yv2o62xfG3-a-SZ6kw\u003d\u003d/1731071106770629098","c-card.popo"]
 * ת��Ϊ{"nickName":"����","imageUrl":"http://img.blog.163.com/photo/5Kr4Yv2o62xfG3-a-SZ6kw\u003d\u003d/1731071106770629098.jpg","name":"c-card.popo"}
 */
function toProfile(oList){
	var o={};
	if (oList["nickName"]||oList["nickname"])
	  o= oList;
	else{
		o["nickName"]=oList[0];
		o["imageUrl"]=getImgUrl(oList[1]);
		o["name"]=oList[2];
	}
	if (o["nickName"]==null) o["nickName"]="";
	if (o["nickName"])
		o["nickName"]=o["nickName"].escape();
	else
		o["nickName"]=o["nickname"].escape();
	o["imageUrl"]=getImgUrl(o["imageUrl"]);
	return o;
}

function getUpdaterCb(profiles){
	var updateTemplate =createJSTAndParse("update_jst",update_jst);			
	var data={"profiles":profiles};
	var str = updateTemplate.process(data);
	$("divUpdaterBody").innerHTML = str;
}

var update_jst= 
'{for profile in profiles}'+
' {var profile = toProfile(profile)}{if profile_index<g_UpdaterNum}'+
'<div><a href="http://${DomainMap.getParentDomain(profile.name)}?fromUpdater" target="_blank" class="wrap"><img src="${getImgUrl(profile.imageUrl)}"></a>'+
'<a href="http://${DomainMap.getParentDomain(profile.name)}?fromUpdater" target="_blank" class="nick">${profile.nickName}</a>'+
'</div>'+
'{/if}{/for}';
	 

/**************������ش���**********************/
function switchSearchTp(str){
	$("lpSearch" + str).className = "selected";
	$("lpSearch" + g_curSearchType).className = "";
	g_curSearchType = str;
	Field.activate("indexWords");
}

function lpSubmitSearch() {
	var q = $("indexWords").value;
	g_curSearchType = $("curSearchType").value;
	if (!g_curSearchType || g_curSearchType=="") g_curSearchType="blog";
	var o="all";
	if(g_curSearchType=="Music"){
		o="name";
	}else if(g_curSearchType=="Tag"){
		o="photo";
	}else if(g_curSearchType=="Author"){
		o="nickname";
	}
	$("indexSearchForm").action= "http://blog.163.com/search?t=" + g_curSearchType.toLowerCase() +"&q=" + encodeURIComponent(q) + "&o="+o+"";
	$("submitIndexSearchFormBtn").click();
}

function lpKeyDownInSearch(e) {	
	var keycode;
	if (isIE())
		keycode = event.keyCode;
	else
		keycode = e.which;
	if (keycode == 13) {//�س�
		lpSubmitSearch();
	}
}

/**************���ú���**********************/
function setHomePageUtil(url){
//	UserBean.incrPageView("sethomepage", null);
	if(document.all){
		document.body.style.behavior="url(#default#homepage)";
		document.body.setHomePage(url);
	}else{
		alert("�������֧�֣����ֶ�����Ϊ��ҳ");
	}
	return false;
}
var bDebug = false;
function log(e){
	if (bDebug) throw e;
}

function createJST(jstId, jstContent){
	var textarea = document.createElement('textarea');
	textarea.value = jstContent;
	textarea.id = jstId;
	textarea.style.display = 'none';
	if ($("topCanvus"))
	   $("topCanvus").appendChild(textarea);
	else 
	   document.body.appendChild(textarea); 

}

function createJSTAndParse(jstId, jstContent){
	createJST(jstId, jstContent);
	return TrimPath.parseDOMTemplate(jstId);
}

//ƴ��ȫ��ͼƬ��ַ
function getImgUrl(img){
	if (img.indexOf("http://")>=0)return img;
	var imgurl ="/style/common/user_default_small.gif";
	if ( img!=null &&img != "0" && img!="-1000" && img!="-5000"&&img.indexOf(".jpg")<0)
		imgurl = "http://img.blog.163.com/photo/"+img+".jpg";	
	return imgurl;
}

//ƴ��ȫ��ͼƬ��ַ
function getAvaImgUrl(img){
	if (img.indexOf("http://")>=0)return img;
	var imgurl ="/style/common/user_default_small.gif";
	if ( img!=null &&img != "0" && img!="-1000" && img!="-5000"&&img.indexOf(".jpg")<0)
		imgurl = "http://ava.blog.163.com/photo/"+img+".jpg";	
	return imgurl;
}
/*
 * ƴ��ȫ����־�̶����ӵ�ַ
 * ����: john_104/blog/static/18121579200701605553777 
 * ���: http://john_104.blog.163.com/blog/static/18121579200701605553777 
 */
function getBlogUrl(permanklink){
	if ((permanklink.indexOf("http://")<0)&& (permanklink.indexOf("blog.163.com/")<0) ){
			var username = getUserNameFromLink(permanklink);
			var userurl = getUserUrlFromLink(permanklink);
			var len = userurl.length;
			if (userurl.substring(len-1,len) =="/"){
				userurl=userurl.substring(0,len-1);
			}
			permanklink= userurl+permanklink.substring(username.length)+"/";
	}
	return permanklink;
}

function getCircleBlogUrl(permanklink){
	if ((permanklink.indexOf("http://q.163.com/")<0)){
		permanklink= "http://q.163.com/"+permanklink+"/";
	}
	return permanklink;
}

//�����û���ƴ��ȫ���û����͵�ַ
function getUserUrl(username){
	if (username.indexOf("http://")<0)
		return "http://"+DomainMap.getParentDomain(username)+"/";
	else
		return username;
}
//���� john_104/blog/static/18121579200701605553777  ��� http://john_104.blog.163.com
function getUserUrlFromLink(permanklink){
	if (permanklink.indexOf("/blog/static/")<0)	return "/";
	permanklink = permanklink.replace("http://","");
	permanklink = permanklink.replace(".blog.163.com","");
	permanklink = permanklink.replace("blog.163.com","");
	if (permanklink.indexOf("/")==0)permanklink = permanklink.substring(1);
	var username = getUserNameFromLink(permanklink);
	return 	getUserUrl(username);
}
function getUserNameFromLink(permanklink){
	if (permanklink.indexOf("/blog/static/")<0)	return "";
	var username = permanklink.split("/")[0];
	return username;
}
function getCircleUrl(circleUrl){
	if (circleUrl.indexOf("http://q.163.com/")<0)
		circleUrl = "http://q.163.com/"+circleUrl+"/";
	return circleUrl;
}
String.prototype.escape=function(){return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,"&#34;").replace(/'/g,"&#39;");};
String.prototype.escape_freemark=function(){return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g,"&quot;");};
function $() {
  var elements = new Array();
  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = getElementById(element);
    if (arguments.length == 1)
      return element;
    elements.push(element);
  }
  return elements;
}
function getElementById(id){
	var obj = document.getElementById(id);
	if (obj){
		if (obj.id==id)return obj;
		var arr =  document.getElementsByName(id);
		for(var index=0;index< arr.length;index++) {
			var obj = arr[index];
			if (obj.id == id)return obj;
		}
	}
	return obj;
}

function Trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}




/****************���������ҳ�����**************/


function initFriend(){
	initAgeSelectOps('lageFrom','lageTo');
	initCitySelectOps('lprovince', true);
	getProvinceAndCity();	
}

function getProvinceAndCity(){
	var pac = Cookie.get("PAC");
	if(pac == null){
		UserBean.getProvinceAndCity({callback:function(pac){
			firstSelectPAC(pac);
			Cookie.set("PAC", pac, 10, null,null);
		} });	
	}else{
		firstSelectPAC(pac);		
	}
}

function initAgeSelectOps(ageFromId,ageToId,from, to){
	if(!ageFromId)
	  var ageFromId ='ageFrom';
	if(!ageToId)
	  var ageToId ='ageTo'; 
	var ageFrom = $(ageFromId);
	var ageTo = $(ageToId);
	ageFrom.options[0] = new Option('����', '0');
	ageTo.options[0] = new Option('����', '101');
	for(var i = 1; i < 101; i++){
		ageFrom.options[i] = new Option(i,i);
		ageTo.options[i] = new Option(i,i);
	}	
	if(from == undefined)
		var from = 18;
	ageFrom.options[from].selected = true;
	if(to == undefined)
		var to = 25;
	if(to == 101)	
		to = 0;
	ageTo.options[to].selected = true;
}

function initCitySelectOps(provinceId){
	if(!provinceId)
	  var provinceId ='province';
	fillSelect(provinceId,provinceArray);
}

function firstSelectPAC(pac){
	var offset = pac.indexOf(' ');
	var province = pac.substring(0, offset);
	var city = pac.substring(offset + 1, pac.length);
	firstSelect('lprovince', province);
	change_area('lprovince','lcity')
	firstSelect('lcity', city);	
	if ($("curProvCity"))
		$("curProvCity").innerHTML=province+"-"+city;
	/*firstSelect('province', province);
	change_area('province','city')
	firstSelect('city', city);*/
}

function fillSelect(nodeString,array) {
	var node = $(nodeString);
	var nodelen = node.length;
	for(var i=nodelen,j=0;i<array.length+nodelen;i++,j++){	
		node.options[i] = new Option(array[j][1],array[j][0]);
	}
}

function firstSelect(id,value) {
	if(value == null || value == '' || value == 'any') return;
	var sTmp = $(id);
	for (var i=0; i < sTmp.length; i++){
		if(sTmp.options[i].value == value || sTmp.options[i].value.indexOf(value) == 0) {
			sTmp.options[i].selected = true;
			return;
		}
	}
}

var cc = 0;
function change_area(province,city){
	var country = $(province);
	var cg=country.options[country.selectedIndex].value;
	var select2=$(city);
	var j=0;
	select2.options[j++] = new Option("-������/����-",'any');
	if(cg == "����")
		select2.options[0] = new Option("-���޹���-",'any');
	if(cg != "-����ʡ��-"){
		for(var i=0;i<coutryAndCity.length;i++){
			if(coutryAndCity[i].country==cg){
				select2.options[j]=new Option(coutryAndCity[i].cityValue,coutryAndCity[i].cityText);
				j++;
			}
		}		
	}
	if(cc>j) {
		for(var ii=cc;ii>=j;ii--){
			select2.options[ii] = null;
		}		
	}
	cc=j;
}


function fillCheckBoxs(displayId,prefix,array,checkedStr){
	var tempCheckedStr;
	tempCheckedStr = checkedStr;
	var checkedArray = tempCheckedStr.split(",");
	var content="";
	var str;
	var other="";
	var lineSize = 6;
	if(prefix == 'characteristicsDisplay')
		lineSize = 5;
	content +='<table>';
	var length = array.length;	
	for(var i= 0;i<length;i++){
		str = array[i][1];
		str = str.replace(/\s/g,"&nbsp;");

		if(isChecked(array[i][0],checkedArray) || tempCheckedStr=="all")
			content+='<td> <input type="checkbox" id="'+prefix+'_'+i+'" checked="true"'+other+' /> <label for="'+prefix+'_'+i+'">'+str+'</label></td>';
		else
			content+='<td> <input type="checkbox" id="'+prefix+'_'+i+'"'+other+' /> <label for="'+prefix+'_'+i+'">'+str+'</label></td>';
		if((i+1)%lineSize==0){
			content+='</tr>';
			if(i != length - 1)
				content += '<tr>';			
		}
	}
	content += '</table>';
	$(displayId).innerHTML=content;
}

function isChecked(s,array){
	for(var i=0;i<array.length;i++){
		if(s==array[i])
			return true;
	}
	return false;	
}


var provinceArray = [
	["any","-����ʡ��-"],
	["������","����"],
    ["�Ϻ���","�Ϻ�"],
    ["�����","���"],
    ["�㶫ʡ","�㶫"],
    ["�㽭ʡ","�㽭"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["������","����"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["������ʡ","������"],
    ["�ӱ�ʡ","�ӱ�"],
    ["����ʡ","����"],
    ["ɽ��ʡ","ɽ��"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["�ຣʡ","�ຣ"],
    ["�½�ά���������","�½�"],
    ["ɽ��ʡ","ɽ��"],
    ["�Ĵ�ʡ","�Ĵ�"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["����ʡ","����"],
    ["���ɹ�������","���ɹ�"],
    ["����׳��������","����"],
    ["����������","����"],
    ["���Ļ���������","����"],
    ["����ʡ","����"],
    ["����ر�������","���"],
    ["�����ر�������","����"],
    ["̨��ʡ","̨��"],
    ["����","����"]
];

function CityObject(aData, aValue, aText) {
    this.country  = aData;
    this.cityValue = aValue;
    this.cityText  = aText;
}

var coutryAndCity = new Array(
new CityObject('-������/����-','any','-������/����-'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('������','��̨��','��̨��'),
new CityObject('������','ʯ��ɽ��','ʯ��ɽ��'),
new CityObject('������','������','������'),
new CityObject('������','��ͷ����','��ͷ����'),
new CityObject('������','��ɽ��','��ɽ��'),
new CityObject('������','ͨ����','ͨ����'),
new CityObject('������','˳����','˳����'),
new CityObject('������','��ƽ��','��ƽ��'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('������','ƽ����','ƽ����'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('�����','��ƽ��','��ƽ��'),
new CityObject('�����','�Ӷ���','�Ӷ���'),
new CityObject('�����','������','������'),
new CityObject('�����','�Ͽ���','�Ͽ���'),
new CityObject('�����','�ӱ���','�ӱ���'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','�����','�����'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','������','������'),
new CityObject('�����','����','����'),
new CityObject('�ӱ�ʡ','ʯ��ׯ��','ʯ��ׯ��'),
new CityObject('�ӱ�ʡ','��ɽ��','��ɽ��'),
new CityObject('�ӱ�ʡ','�ػʵ���','�ػʵ���'),
new CityObject('�ӱ�ʡ','������','������'),
new CityObject('�ӱ�ʡ','��̨��','��̨��'),
new CityObject('�ӱ�ʡ','������','������'),
new CityObject('�ӱ�ʡ','�żҿ���','�żҿ���'),
new CityObject('�ӱ�ʡ','�е���','�е���'),
new CityObject('�ӱ�ʡ','������','������'),
new CityObject('�ӱ�ʡ','�ȷ���','�ȷ���'),
new CityObject('�ӱ�ʡ','��ˮ��','��ˮ��'),
new CityObject('ɽ��ʡ','̫ԭ��','̫ԭ��'),
new CityObject('ɽ��ʡ','��ͬ��','��ͬ��'),
new CityObject('ɽ��ʡ','��Ȫ��','��Ȫ��'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','˷����','˷����'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','�˳���','�˳���'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','�ٷ���','�ٷ���'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('���ɹ�������','���ͺ�����','���ͺ�����'),
new CityObject('���ɹ�������','��ͷ��','��ͷ��'),
new CityObject('���ɹ�������','�ں���','�ں���'),
new CityObject('���ɹ�������','�����','�����'),
new CityObject('���ɹ�������','ͨ����','ͨ����'),
new CityObject('���ɹ�������','������˹��','������˹��'),
new CityObject('���ɹ�������','���ױ�����','���ױ�����'),
new CityObject('���ɹ�������','�����׶���','�����׶���'),
new CityObject('���ɹ�������','�����첼��','�����첼��'),
new CityObject('���ɹ�������','�˰���','�˰���'),
new CityObject('���ɹ�������','���ֹ�����','���ֹ�����'),
new CityObject('���ɹ�������','��������','��������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ɽ��','��ɽ��'),
new CityObject('����ʡ','��˳��','��˳��'),
new CityObject('����ʡ','��Ϫ��','��Ϫ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','Ӫ����','Ӫ����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�̽���','�̽���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��«����','��«����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ƽ��','��ƽ��'),
new CityObject('����ʡ','��Դ��','��Դ��'),
new CityObject('����ʡ','ͨ����','ͨ����'),
new CityObject('����ʡ','��ɽ��','��ɽ��'),
new CityObject('����ʡ','��ԭ��','��ԭ��'),
new CityObject('����ʡ','�׳���','�׳���'),
new CityObject('����ʡ','�ӱ߳�����������','�ӱ߳�����������'),
new CityObject('������ʡ','��������','��������'),
new CityObject('������ʡ','���������','���������'),
new CityObject('������ʡ','������','������'),
new CityObject('������ʡ','�׸���','�׸���'),
new CityObject('������ʡ','˫Ѽɽ��','˫Ѽɽ��'),
new CityObject('������ʡ','������','������'),
new CityObject('������ʡ','������','������'),
new CityObject('������ʡ','��ľ˹��','��ľ˹��'),
new CityObject('������ʡ','��̨����','��̨����'),
new CityObject('������ʡ','ĵ������','ĵ������'),
new CityObject('������ʡ','�ں���','�ں���'),
new CityObject('������ʡ','�绯��','�绯��'),
new CityObject('������ʡ','���˰������','���˰������'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','¬����','¬����'),
new CityObject('�Ϻ���','�����','�����'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','բ����','բ����'),
new CityObject('�Ϻ���','�����','�����'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','��ɽ��','��ɽ��'),
new CityObject('�Ϻ���','�ζ���','�ζ���'),
new CityObject('�Ϻ���','�ֶ�����','�ֶ�����'),
new CityObject('�Ϻ���','��ɽ��','��ɽ��'),
new CityObject('�Ϻ���','�ɽ���','�ɽ���'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','�ϻ���','�ϻ���'),
new CityObject('�Ϻ���','������','������'),
new CityObject('�Ϻ���','������','������'),
new CityObject('����ʡ','�Ͼ���','�Ͼ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ͨ��','��ͨ��'),
new CityObject('����ʡ','���Ƹ���','���Ƹ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�γ���','�γ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','����','����'),
new CityObject('����ʡ','̩����','̩����'),
new CityObject('����ʡ','��Ǩ��','��Ǩ��'),
new CityObject('�㽭ʡ','������','������'),
new CityObject('�㽭ʡ','������','������'),
new CityObject('�㽭ʡ','������','������'),
new CityObject('�㽭ʡ','������','������'),
new CityObject('�㽭ʡ','������','������'),
new CityObject('�㽭ʡ','������','������'),
new CityObject('�㽭ʡ','����','����'),
new CityObject('�㽭ʡ','������','������'),
new CityObject('�㽭ʡ','��ɽ��','��ɽ��'),
new CityObject('�㽭ʡ','̨����','̨����'),
new CityObject('�㽭ʡ','��ˮ��','��ˮ��'),
new CityObject('����ʡ','�Ϸ���','�Ϸ���'),
new CityObject('����ʡ','�ߺ���','�ߺ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ɽ��','��ɽ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','ͭ����','ͭ����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ɽ��','��ɽ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','Ȫ����','Ȫ����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ƽ��','��ƽ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�ϲ���','�ϲ���'),
new CityObject('����ʡ','��������','��������'),
new CityObject('����ʡ','Ƽ����','Ƽ����'),
new CityObject('����ʡ','�Ž���','�Ž���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','ӥ̶��','ӥ̶��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�˴���','�˴���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','�ൺ��','�ൺ��'),
new CityObject('ɽ��ʡ','�Ͳ���','�Ͳ���'),
new CityObject('ɽ��ʡ','��ׯ��','��ׯ��'),
new CityObject('ɽ��ʡ','��Ӫ��','��Ӫ��'),
new CityObject('ɽ��ʡ','��̨��','��̨��'),
new CityObject('ɽ��ʡ','Ϋ����','Ϋ����'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','̩����','̩����'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','�ĳ���','�ĳ���'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('ɽ��ʡ','������','������'),
new CityObject('����ʡ','֣����','֣����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','ƽ��ɽ��','ƽ��ɽ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�ױ���','�ױ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�����','�����'),
new CityObject('����ʡ','�����','�����'),
new CityObject('����ʡ','�����','�����'),
new CityObject('����ʡ','����Ͽ��','����Ͽ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�ܿ���','�ܿ���'),
new CityObject('����ʡ','פ�����','פ�����'),
new CityObject('����ʡ','��Դ��','��Դ��'),
new CityObject('����ʡ','�人��','�人��'),
new CityObject('����ʡ','��ʯ��','��ʯ��'),
new CityObject('����ʡ','ʮ����','ʮ����'),
new CityObject('����ʡ','�˲���','�˲���'),
new CityObject('����ʡ','�差��','�差��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','Т����','Т����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�Ƹ���','�Ƹ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ʩ����������������','��ʩ����������������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','Ǳ����','Ǳ����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ũ������','��ũ������'),
new CityObject('����ʡ','��ɳ��','��ɳ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��̶��','��̶��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�żҽ���','�żҽ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','¦����','¦����'),
new CityObject('����ʡ','��������������������','��������������������'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','�ع���','�ع���'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','�麣��','�麣��'),
new CityObject('�㶫ʡ','��ͷ��','��ͷ��'),
new CityObject('�㶫ʡ','��ɽ��','��ɽ��'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','տ����','տ����'),
new CityObject('�㶫ʡ','ï����','ï����'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','÷����','÷����'),
new CityObject('�㶫ʡ','��β��','��β��'),
new CityObject('�㶫ʡ','��Դ��','��Դ��'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','��Զ��','��Զ��'),
new CityObject('�㶫ʡ','��ݸ��','��ݸ��'),
new CityObject('�㶫ʡ','��ɽ��','��ɽ��'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','������','������'),
new CityObject('�㶫ʡ','�Ƹ���','�Ƹ���'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','���Ǹ���','���Ǹ���'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','�����','�����'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','��ɫ��','��ɫ��'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','�ӳ���','�ӳ���'),
new CityObject('����׳��������','������','������'),
new CityObject('����׳��������','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ָɽ��','��ָɽ��'),
new CityObject('����ʡ','����','����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�Ĳ���','�Ĳ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�Ͳ���','�Ͳ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','�ٸ���','�ٸ���'),
new CityObject('����ʡ','��ɳ����������','��ɳ����������'),
new CityObject('����ʡ','��������������','��������������'),
new CityObject('����ʡ','�ֶ�����������','�ֶ�����������'),
new CityObject('����ʡ','��ˮ����������','��ˮ����������'),
new CityObject('����ʡ','��ͤ��������������','��ͤ��������������'),
new CityObject('����ʡ','������������������','������������������'),
new CityObject('����ʡ','��ɳȺ��','��ɳȺ��'),
new CityObject('����ʡ','��ɳȺ��','��ɳȺ��'),
new CityObject('����ʡ','��ɳȺ���ĵ������亣��','��ɳȺ���ĵ������亣��'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('������','������','������'),
new CityObject('������','��ɿ���','��ɿ���'),
new CityObject('������','������','������'),
new CityObject('������','ɳƺ����','ɳƺ����'),
new CityObject('������','��������','��������'),
new CityObject('������','�ϰ���','�ϰ���'),
new CityObject('������','������','������'),
new CityObject('������','��ʢ��','��ʢ��'),
new CityObject('������','˫����','˫����'),
new CityObject('������','�山��','�山��'),
new CityObject('������','������','������'),
new CityObject('������','ǭ����','ǭ����'),
new CityObject('������','������','������'),
new CityObject('������','�뽭��','�뽭��'),
new CityObject('������','������','������'),
new CityObject('������','ͭ����','ͭ����'),
new CityObject('������','������','������'),
new CityObject('������','�ٲ���','�ٲ���'),
new CityObject('������','�ɽ��','�ɽ��'),
new CityObject('������','��ƽ��','��ƽ��'),
new CityObject('������','�ǿ���','�ǿ���'),
new CityObject('������','�ᶼ��','�ᶼ��'),
new CityObject('������','�潭��','�潭��'),
new CityObject('������','��¡��','��¡��'),
new CityObject('������','����','����'),
new CityObject('������','����','����'),
new CityObject('������','������','������'),
new CityObject('������','�����','�����'),
new CityObject('������','��ɽ��','��ɽ��'),
new CityObject('������','��Ϫ��','��Ϫ��'),
new CityObject('������','ʯ��������������','ʯ��������������'),
new CityObject('������','��ɽ����������������','��ɽ����������������'),
new CityObject('������','��������������������','��������������������'),
new CityObject('������','��ˮ����������������','��ˮ����������������'),
new CityObject('������','������','������'),
new CityObject('������','�ϴ���','�ϴ���'),
new CityObject('������','������','������'),
new CityObject('������','�ϴ���','�ϴ���'),
new CityObject('�Ĵ�ʡ','�ɶ���','�ɶ���'),
new CityObject('�Ĵ�ʡ','�Թ���','�Թ���'),
new CityObject('�Ĵ�ʡ','��֦����','��֦����'),
new CityObject('�Ĵ�ʡ','������','������'),
new CityObject('�Ĵ�ʡ','������','������'),
new CityObject('�Ĵ�ʡ','������','������'),
new CityObject('�Ĵ�ʡ','��Ԫ��','��Ԫ��'),
new CityObject('�Ĵ�ʡ','������','������'),
new CityObject('�Ĵ�ʡ','�ڽ���','�ڽ���'),
new CityObject('�Ĵ�ʡ','��ɽ��','��ɽ��'),
new CityObject('�Ĵ�ʡ','�ϳ���','�ϳ���'),
new CityObject('�Ĵ�ʡ','üɽ��','üɽ��'),
new CityObject('�Ĵ�ʡ','�˱���','�˱���'),
new CityObject('�Ĵ�ʡ','�㰲��','�㰲��'),
new CityObject('�Ĵ�ʡ','������','������'),
new CityObject('�Ĵ�ʡ','�Ű���','�Ű���'),
new CityObject('�Ĵ�ʡ','������','������'),
new CityObject('�Ĵ�ʡ','������','������'),
new CityObject('�Ĵ�ʡ','���Ӳ���Ǽ��������','���Ӳ���Ǽ��������'),
new CityObject('�Ĵ�ʡ','���β���������','���β���������'),
new CityObject('�Ĵ�ʡ','��ɽ����������','��ɽ����������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','����ˮ��','����ˮ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��˳��','��˳��'),
new CityObject('����ʡ','ͭ�ʵ���','ͭ�ʵ���'),
new CityObject('����ʡ','ǭ���ϲ���������������','ǭ���ϲ���������������'),
new CityObject('����ʡ','�Ͻڵ���','�Ͻڵ���'),
new CityObject('����ʡ','ǭ�������嶱��������','ǭ�������嶱��������'),
new CityObject('����ʡ','ǭ�ϲ���������������','ǭ�ϲ���������������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��Ϫ��','��Ϫ��'),
new CityObject('����ʡ','��ɽ��','��ɽ��'),
new CityObject('����ʡ','��ͨ��','��ͨ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','˼é��','˼é��'),
new CityObject('����ʡ','�ٲ���','�ٲ���'),
new CityObject('����ʡ','��������������','��������������'),
new CityObject('����ʡ','��ӹ���������������','��ӹ���������������'),
new CityObject('����ʡ','��ɽ׳������������','��ɽ׳������������'),
new CityObject('����ʡ','��˫���ɴ���������','��˫���ɴ���������'),
new CityObject('����ʡ','�������������','�������������'),
new CityObject('����ʡ','�º���徰����������','�º���徰����������'),
new CityObject('����ʡ','ŭ��������������','ŭ��������������'),
new CityObject('����ʡ','�������������','�������������'),
new CityObject('����������','������','������'),
new CityObject('����������','��������','��������'),
new CityObject('����������','ɽ�ϵ���','ɽ�ϵ���'),
new CityObject('����������','�տ������','�տ������'),
new CityObject('����������','��������','��������'),
new CityObject('����������','�������','�������'),
new CityObject('����������','��֥����','��֥����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','ͭ����','ͭ����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','μ����','μ����'),
new CityObject('����ʡ','�Ӱ���','�Ӱ���'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��������','��������'),
new CityObject('����ʡ','�����','�����'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��ˮ��','��ˮ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','��Ҵ��','��Ҵ��'),
new CityObject('����ʡ','ƽ����','ƽ����'),
new CityObject('����ʡ','��Ȫ��','��Ȫ��'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','������','������'),
new CityObject('����ʡ','¤����','¤����'),
new CityObject('����ʡ','���Ļ���������','���Ļ���������'),
new CityObject('����ʡ','���ϲ���������','���ϲ���������'),
new CityObject('�ຣʡ','������','������'),
new CityObject('�ຣʡ','��������','��������'),
new CityObject('�ຣʡ','��������������','��������������'),
new CityObject('�ຣʡ','���ϲ���������','���ϲ���������'),
new CityObject('�ຣʡ','���ϲ���������','���ϲ���������'),
new CityObject('�ຣʡ','�������������','�������������'),
new CityObject('�ຣʡ','��������������','��������������'),
new CityObject('�ຣʡ','�����ɹ������������','�����ɹ������������'),
new CityObject('���Ļ���������','������','������'),
new CityObject('���Ļ���������','ʯ��ɽ��','ʯ��ɽ��'),
new CityObject('���Ļ���������','������','������'),
new CityObject('���Ļ���������','��ԭ��','��ԭ��'),
new CityObject('���Ļ���������','������','������'),
new CityObject('�½�ά���������','��³ľ����','��³ľ����'),
new CityObject('�½�ά���������','����������','����������'),
new CityObject('�½�ά���������','��³������','��³������'),
new CityObject('�½�ά���������','���ܵ���','���ܵ���'),
new CityObject('�½�ά���������','��������������','��������������'),
new CityObject('�½�ά���������','���������ɹ�������','���������ɹ�������'),
new CityObject('�½�ά���������','���������ɹ�������','���������ɹ�������'),
new CityObject('�½�ά���������','�����յ���','�����յ���'),
new CityObject('�½�ά���������','�������տ¶�����������','�������տ¶�����������'),
new CityObject('�½�ά���������','��ʲ����','��ʲ����'),
new CityObject('�½�ά���������','�������','�������'),
new CityObject('�½�ά���������','���������������','���������������'),
new CityObject('�½�ά���������','���ǵ���','���ǵ���'),
new CityObject('�½�ά���������','����̩����','����̩����'),
new CityObject('�½�ά���������','ʯ������','ʯ������'),
new CityObject('�½�ά���������','��������','��������'),
new CityObject('�½�ά���������','ͼľ�����','ͼľ�����'),
new CityObject('�½�ά���������','�������','�������'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','��¡��','��¡��'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','��԰��','��԰��'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','�û���','�û���'),
new CityObject('̨��ʡ','��Ͷ��','��Ͷ��'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','������','������'),
new CityObject('̨��ʡ','�����','�����'),
new CityObject('̨��ʡ','̨����','̨����'),
new CityObject('̨��ʡ','������','������'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','����','����'),
new CityObject('����ر�������','��������','��������'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','����','����'),
new CityObject('����ر�������','��ˮ����','��ˮ����'),
new CityObject('����ر�������','�ƴ�����','�ƴ�����'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','�ͼ�����','�ͼ�����'),
new CityObject('����ر�������','�뵺��','�뵺��'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','����','����'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','ɳ����','ɳ����'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','������','������'),
new CityObject('����ر�������','Ԫ����','Ԫ����'),
new CityObject('�����ر�������','�����ر�������','�����ر�������'),
new CityObject('����','����','����'),
new CityObject('����','���ô�','���ô�'),
new CityObject('����','�Ĵ�����','�Ĵ�����'),
new CityObject('����','������','������'),
new CityObject('����','Ӣ��','Ӣ��'),
new CityObject('����','����','����'),
new CityObject('����','�¹�','�¹�'),
new CityObject('����','�ݿ�','�ݿ�'),
new CityObject('����','����','����'),
new CityObject('����','��ʿ','��ʿ'),
new CityObject('����','ϣ��','ϣ��'),
new CityObject('����','Ų��','Ų��'),
new CityObject('����','���','���'),
new CityObject('����','����','����'),
new CityObject('����','����','����'),
new CityObject('����','������','������'),
new CityObject('����','�µ���','�µ���'),
new CityObject('����','�����','�����'),
new CityObject('����','�ڿ���','�ڿ���'),
new CityObject('����','����˹','����˹'),
new CityObject('����','������','������'),
new CityObject('����','����','����'),
new CityObject('����','�¼���','�¼���'),
new CityObject('����','��������','��������'),
new CityObject('����','ӡ��','ӡ��'),
new CityObject('����','̩��','̩��'),
new CityObject('����','�ձ�','�ձ�'),
new CityObject('����','����','����'),
new CityObject('����','����͢','����͢'),
new CityObject('����','�Ϸ�','�Ϸ�'),
new CityObject('����','����','����'),
new CityObject('����','����','����'),
new CityObject('End', 'End', 'End') );



var genderArray = [
["M", "��"],
["F", "Ů"]
];

function submitFindl(){
	var gender ="";
	if ($("rd_sex_male") &&$("rd_sex_male").checked )gender="M";
	else if ($("rd_sex_female") &&$("rd_sex_female").checked )gender="F";
	var page = "http://blog.163.com/findFriend.do?index=1&ageFrom="+$('lageFrom').value+"&ageTo="+$('lageTo').value+
						"&gender="+gender+"&province="+encodeURIComponent($('lprovince').value)+"&city="+encodeURIComponent($('lcity').value)+"&selfPage=t";
						
	window.location.href = page;			
}