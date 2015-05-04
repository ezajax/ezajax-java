Ajax=function(){function b(d,e){function i(){}var g=e.async!==false,c=e.method||"GET",h=e.data||null,j=e.success||i,f=e.failure||i;c=c.toUpperCase();if(c=="GET"&&h){d+=(d.indexOf("?")==-1?"?":"&")+h;h=null}var k=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");k.onreadystatechange=function(){a(k,j,f)};k.open(c,d,g);if(c=="POST"){k.setRequestHeader("Content-type","application/x-www-form-urlencoded;")}k.send(h);return k}function a(f,e,c){if(f.readyState==4){var d=f.status;if(d>=200&&d<300){e(f)}else{c(f)}}else{}}return{request:b}}();if(typeof JSON!=="object"){JSON={}}(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());EzayAjax={invoke:function(h){var c="eazyajax/"+h.moduleName+"/"+h.methodName;var a=document.getElementsByTagName("script");for(var e=a.length-1;e>=0;e--){var d=a[e];if(d.src.lastIndexOf("eazyajax/core.js")!=-1){c=d.src.replace("core.js","")+h.moduleName+"/"+h.methodName}}var f=null;if(h.callback==undefined){var g=Ajax.request(c,{async:false,method:"POST",data:"args="+JSON.stringify(h.args)});var b=JSON.parse(g.responseText);if(b.exception!=null){if(b.exception.message!=""){throw new Error(b.exception.message)}else{if(b.exception.cause.message!=""){throw new Error(b.exception.cause.message)}else{throw new Error("δ֪����")}}}else{f=b.returnValue}}else{if(typeof h.callback!=="function"){throw new Error("�������")}Ajax.request(c,{async:true,method:"POST",data:"args="+JSON.stringify(h.args),success:function(l){var i=JSON.parse(l.responseText);var j=null;var k=null;if(i.exception!=null){if(i.exception.message!=""){j=new Error(i.exception.message)}else{if(i.exception.cause.message!=""){j=new Error(i.exception.cause.message)}else{j=new Error("δ֪����")}}}else{k=i.returnValue}h.callback(k,j)},failure:function(){h.callback(null,new Error("AjaxError"))}})}return f},createParams:function(c,a,h,e,b){var g=new Array(e);for(var d=0;d<e;d++){g[d]=b[d]}var f={moduleName:c,methodName:a,args:g,callback:h};return f}};