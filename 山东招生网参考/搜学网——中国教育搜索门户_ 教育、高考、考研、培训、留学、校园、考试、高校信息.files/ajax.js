//模块加载
function f(obj,url){ 
eval('document.all.'+obj).innerHTML='数据加载中...';
var http_request = false;
if (window.XMLHttpRequest) { // Mozilla, Safari,...
	http_request = new XMLHttpRequest();
	if (http_request.overrideMimeType) {
		http_request.overrideMimeType('text/xml');
	}
} else if (window.ActiveXObject) { // IE
	try {
		http_request = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			http_request = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (e) {}
	}
}

if (!http_request) {
	alert('Giving up :( Cannot create an XMLHTTP instance');
	return false;
}

http_request.open("GET",url,true);  
http_request.onreadystatechange = function(){ 
　 if (http_request.readyState == 4) {  
	　 if (http_request.status == 200) { 
	　　  eval('document.all.'+obj).innerHTML = http_request.responseText;  
	   } 
   } 
} 
http_request.send(null);  
}  
