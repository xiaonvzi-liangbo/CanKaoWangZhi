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
	
var sLink="<img width=1 height=1 src=http://www9.feloo.com/count/special.jsp?"
+"&source="+getParam("source")
+"&pagename="+escape(window.location.href)+">";
document.write(sLink);
