var Browser = new Object();
Browser.isMozilla = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined') && (typeof HTMLDocument!='undefined');
Browser.isIE = window.ActiveXObject ? true : false;
Browser.isFirefox = (navigator.userAgent.toLowerCase().indexOf("firefox")!=-1);
Browser.isOpera = (navigator.userAgent.toLowerCase().indexOf("opera")!=-1);


function Request(strName){ 
 var strHref = window.location.href; 
 var intPos = strHref.indexOf("?"); 
 var strRight = strHref.substr(intPos + 1); 
 var arrTmp = strRight.split("&"); 
 for(var i = 0; i < arrTmp.length; i++) { 
 var arrTemp = arrTmp[i].split("="); 
 if(arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1]; 
 } 
 return ""; 
} 

function getlocation(){ 
 var strHref = location.href; 
 return strHref;
} 

function FillSelect(obj,text,value){
   if(Browser.isIE)
   {
		document.getElementById(obj).add(new Option(text,value)); 
	}
   if(Browser.isFirefox)
   {
		document.getElementById(obj).appendChild(new Option(text,value)); 
   } 
}

function reloadJs(file){
var _js = document.createElement('script'); 
_js.type = "text/javascript";
_js.src = file;
_js.charset = 'gb2312';
document.body.appendChild(_js); 
}

function ClearSelect(obj){
 for(var i= document.getElementById(obj).length;i>=0;i--){
   document.getElementById(obj).remove(i);
 }
}

