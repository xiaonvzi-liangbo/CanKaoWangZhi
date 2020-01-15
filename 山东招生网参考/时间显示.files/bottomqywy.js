document.write("<DIV align=center><IFRAME src='/js/bottom.htm' frameBorder=0 width=778 scrolling=no height=61></IFRAME></DIV><SCRIPT language=\"javascript\" src=\"http://b.s22.51.la//j/619.js\"></SCRIPT><NOSCRIPT><A href=\"http://www.51.la/?s=2022&id=619\" title=\"51.la Free Site Stats\" target=\"_blank\"><IMG src=\"http://b.s22.51.la//s.asp?siteid=619&t=img\" border=\"0\"></A></NOSCRIPT>");

// Cookies ²Ù×÷
function GetCookie(name) {
	var arg = name + "="
	var alen = arg.length
	var clen = document.cookie.length
	var i = 0
	while (i < clen)
		{
		var j = i + alen
		if (document.cookie.substring(i, j) == arg) return getCookieVal (j)
		i = document.cookie.indexOf(" ", i) + 1
		if (i == 0) break
		}
	return (null)
}

function SetCookie(name, value) {
	var argv = SetCookie.arguments
	var argc = SetCookie.arguments.length
	var expires = (argc > 2) ? argv[2] : null
	var path    = (argc > 3) ? argv[3] : null
	var domain  = (argc > 4) ? argv[4] : null
	var secure  = (argc > 5) ? argv[5] : false
	document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null)  ? "" : ("; domain=" + domain)) + ((secure == true)  ? "; secure" : "")
}

function getCookieVal(offset)
{
var endstr = document.cookie.indexOf (";", offset)
if (endstr == -1) endstr = document.cookie.length
return unescape(document.cookie.substring(offset, endstr))
}

  if(GetCookie("POP03")==null){
   window.showModalDialog('/js/pop1.htm','view_pop','scroll:0;status:0;help:0;resizable:0;dialogWidth:0px;dialogHeight:0px');
   SetCookie("POP03","Yes");
   window.focus();
 }