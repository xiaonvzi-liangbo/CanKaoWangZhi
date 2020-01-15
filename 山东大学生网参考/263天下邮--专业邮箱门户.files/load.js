function Cookie( document, name, domain )
{
	this.$document = document;
	this.$name = name;
	this.$expiration = new Date(2099,12,31);
	this.$domain = domain;
	this.data = null;
}
Cookie.prototype.store = function()
{
	var cookieval = "";
	if( this.data != null)
	{
		for( var i=0; i<this.data.length;i++)
		{
			cookieval += this.data[i].join(":") + "&";
		}
	}
	if( cookieval != "" && cookieval.charAt( cookieval.length-1) == "&" )
		cookieval = cookieval.substring( 0,cookieval.length-1);
	var cookie = this.$name + "=" + cookieval + ";expires=" + this.$expiration.toGMTString() + ";domain=" + this.$domain;
	window.document.cookie = cookie;
}
Cookie.prototype.load = function()
{
	var allcookies = this.$document.cookie;
	if( allcookies == "") return false;
	var start = allcookies.indexOf( this.$name + "=" );
	if( start == -1) return false;
	start += this.$name.length +1;
	var end = allcookies.indexOf( ";", start );
	if( end == -1) end = allcookies.length;
	var cookieval= allcookies.substring( start, end );
	var a = cookieval.split("&");
	for( var i=0;i<a.length; i++)
    {
		a[i] = a[i].split(':');
    }
	//用户名:域名
	this.data = a;
	return true;
}
Cookie.prototype.setVals = function( a, flag )
{
	if( this.data == null)
	{
		if( flag )
		{	
			this.data = [];
			this.data[0] = a;
		}
	}
	else
	{
		this.data[0][0] = a[0];
        this.data[0][1] = a[1];
		if( flag)
			return;
		else
			this.data = null;
	}
}
function fInitUserName()
{//rebuild

	var wm = window.document.form_wm;
	var usr = "";
	var domain = "";

	if( userdata.data != null)
	{	
		usr = userdata.data[0][0];
		wm.remUser.checked = true;
        domain = userdata.data[0][1];
	}
	wm.usr.focus();
	if( usr != ""){
		wm.usr.value = usr;
	}
    if ( domain != "" ){
        wm.domain.value = domain;
    }
    
}

function InitUserHost()
{   
    var wm = window.document.form_wm;
    host = location.hostname;
    if ( host.substring(0,5) == "mail." )
    {
        wm.domain.value = host.substring(5,host.length);
    }
}

var userdata = new Cookie( document, "cmduser", document.domain);
userdata.load();
