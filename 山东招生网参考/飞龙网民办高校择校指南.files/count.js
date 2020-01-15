<!--
function getParam(paramname)
{
	paramname=paramname.toLowerCase();
	paramname+="=";
	var s=window.location.href.toLowerCase();
	if(s.indexOf(paramname)>0)
	{
		s=s.substring(s.indexOf(paramname)+paramname.length);
		if(s.indexOf("&")>0)
			s=s.substring(0,s.indexOf("&"));
	}
	else
		s="";
	return  s;
}
	
var sLink="<img width=1 height=1 src=http://www.feloo.com/count/link.jsp?"
+"comefrom="+escape(top.document.referrer)
+"&source="+getParam("source")
+"&navigator="+escape(navigator.appName+navigator.appVersion)
+"&monitor="+screen.width+"x"+screen.height
+"&pagename="+escape(window.location.href)+">";
//document.write(sLink);

//
document.body.oncopy = function () { setTimeout( function () { var text = clipboardData.getData("text"); if (text) { text = text + unescape("%0D%0A%u672C%u7BC7%u6587%u7AE0%u6765%u6E90%u4E8E%20%u98DE%u9F99%u7F51%20%u8F6C%u8F7D%u8BF7%u4EE5%u94FE%u63A5%u5F62%u5F0F%u6CE8%u660E%u51FA%u5904%20%u7F51%u5740%uFF1A") +location.href; clipboardData.setData("text", text); } }, 100 ) }

//link for google-analytics
document.write('<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>');
document.write('<script src="http://www.feloo.com/js/google.js" type="text/javascript"></script>');
//link for google-analytics end

document.write('<script language="javascript" type="text/javascript" src="http://js.users.51.la/1456546.js"></script>');
//-->
