function isnull(str)
{if(str==null||str==""||str=="undefine")return true;
 return false;
}
function setCookie(name, value) {
	var expires = new Date();
	expires.setTime(expires.getTime() + 1000*60*60*24*365);
	document.cookie = name + "=" + escape(value)	+ "; expires=" + expires.toGMTString();
}
function getCookie(cName,v) {
   var search = cName + "="
   if(document.cookie.length > 0) {
      offset = document.cookie.indexOf(search)
      if(offset != -1) {
         offset += search.length
         end = document.cookie.indexOf(";", offset)
         if(end == -1) end = document.cookie.length
         return unescape(document.cookie.substring(offset, end))
      }
      else
       	return isnull(v)?'':v;      
   }
   return isnull(v)?'':v; 
}
