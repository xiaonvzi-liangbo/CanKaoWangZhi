var patha=window.location.search;
var len=patha.indexOf("adsn");
if(len!=-1)
{	
	patha=patha.substr(len);
	var pathb=window.location.pathname;
	var num=pathb.split("/");
	var pos="";
	if(num.length>=2)
	{
		for(var i=0;i<num.length-2;i++)
		{
			pos=pos+"../";
		}
	}
	var x = new XHR("re_message");
	var url = pos+"commonphp/advertise_cookie_js.php?"+patha;
	x.get(url);
}