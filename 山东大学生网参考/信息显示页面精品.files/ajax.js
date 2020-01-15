

var swf_html = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" ';
			swf_html+= 'WIDTH="32" HEIGHT="15" id="photo" ALIGN="">';
			swf_html+= '<PARAM NAME=movie VALUE="http://go.ent.163.com/pepsi/images/waitfor.swf"><PARAM NAME=quality VALUE=high>';
			swf_html+= '<param name="wmode" value="transparent">'; 			
			swf_html+= '<PARAM NAME=bgcolor VALUE=#ffffff>';
			swf_html+= '<EMBED src="http://go.ent.163.com/pepsi/images/waitfor.swf" quality=high bgcolor=#ffffff wmode="transparent"  WIDTH="32" HEIGHT="15" NAME="photo"';
			swf_html+= ' ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"><\/EMBED><\/OBJECT>';
			
var tiptext= swf_html+"数据装载中，请稍候......";
var tiptext_vote= swf_html;
function ajax_get(url,div,tipobj)
{
	var spanObj =  document.getElementById(tipobj);

	spanObj.style.display="";
	
	spanObj.innerHTML= tiptext;
		
	var ajax = new pubPopAjax(); 
	var ajax_o = new Ajax_callback_object();

	ajax_o.div = div;
	ajax.get(url,ajax_o,spanObj);
}

function ajax_get_if(url,div,tipobj)
{
	var spanObj =  document.getElementById(tipobj);

	spanObj.style.display="";
	
	spanObj.innerHTML= tiptext;
		
	var ajax = new pubPopAjax(); 
	var ajax_o = new Ajax_callback_object();

	ajax.getifame(url,div,spanObj);
}

function ajax_get_values(url,func,obj)
{

	var spanObj =  document.getElementById(obj);
	
	spanObj.style.display="";
	
	spanObj.innerHTML= tiptext_vote;
	var ajax = new pubPopAjax(); 
	
	ajax.getvalue(url,func,spanObj);
}

function ajax_post_env(url,q,func,obj)
{

	var spanObj =  document.getElementById(obj);
	
	spanObj.style.display="";
	
	spanObj.innerHTML= tiptext_vote;
	var ajax = new pubPopAjax(); 
	
	ajax.postenv(url,q,func,spanObj);
}


function ajax_showvalue_values(url,obj)
{

	var spanObj =  document.getElementById(obj);
	
	spanObj.style.display="";
	
	spanObj.innerHTML= tiptext_vote;
	var ajax = new pubPopAjax(); 
	
	ajax.showvalue(url,spanObj);
}
function ajax_get_env(url,obj)
{
	var spanObj =  document.getElementById(obj);
	spanObj.style.display="";
	
	spanObj.innerHTML= tiptext_vote;
	var ajax = new pubPopAjax(); 
	
	ajax.envjs(url,spanObj);
}
function ajax_getNo(url,div,tipobj)
{
	var spanObj =  document.getElementById(tipobj);
	spanObj.style.display="";
	spanObj.innerHTML= "";
					
	var ajax = new pubPopAjax(); 
	var ajax_o = new Ajax_callback_object();

	ajax_o.div = div;
	ajax.get(url,ajax_o,spanObj);
}

function ajax_post_showit(url,q,tipobj)
{
	
	var spanObj =  document.getElementById(tipobj);


	var ajax = new pubPopAjax(); 

	ajax.postshowit(url,q,spanObj);
}

function ajax_post_showit_begin(url,q,tipobj)
{
	
	var spanObj =  document.getElementById(tipobj);

	spanObj.innerHTML=tiptext_vote;
	var ajax = new pubPopAjax(); 

	ajax.postbegin(url,q,spanObj);
}


function ajax_post(url,q,div,tipobj)
{
	
	var spanObj =  document.getElementById(tipobj);

	spanObj.style.display="";
	spanObj.innerHTML= tiptext;
	var ajax = new pubPopAjax(); 
	var ajax_o = new Ajax_callback_object();
	ajax_o.div = div;
	ajax.post(url,q,ajax_o,spanObj);
}

function Ajax_callback_object() {
	
	this.div = '';
	this.callback = show_div;
	
	function show_div(response,tipobj){
		tipobj.innerHTML="";
		document.getElementById(this.div).innerHTML=response;
	}
}

function generate_post_query(f){
	var q='';
	for(var i=0;i<f.elements.length;i++){
		if(i!=0);q+='&';
		q+=f.elements[i].name+'='+f.elements[i].value;
	}
	return q;
}

function create_xmlhttp() { 
	if(window.XMLHttpRequest) { 
	
		req = new XMLHttpRequest(); 
	} else if(window.ActiveXObject) { 
	
		req = new ActiveXObject("Microsoft.XMLHTTP"); 
	} 
	return req; 
} 
	
// ajax class 
function pubPopAjax() { 
	this.xmlhttp = create_xmlhttp(); 
	
	this.get = ajax_get; 
	this.getifame = ajax_get_ifame; 
	this.post = ajax_post; 
	this.getvalue=ajax_get_value;
	this.showvalue=ajax_showit_value;
	this.envjs=ajax_get_env;
	this.postbegin=ajax_post_showit_post;
	this.postshowit=ajax_post_showit;
	this.postenv=ajax_post_env;
	this.response = ''; 
	this.callback_object = ''; 

	
	function ajax_get(url,callback_object,tipobj) { 
	
		this.callback_object = callback_object; 
		
		var this_obj = this; 

		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200||this_obj.xmlhttp.status == 0) { 
					var value_return=this_obj.xmlhttp.responseText;
					this_obj.callback_object.callback(this_obj.xmlhttp.responseText,tipobj);
					if(url.indexOf("ajaxgetpic")!=-1)
					{
				
						initLightbox();
					}
					
					
				} else { 
					alert('There was a problem with the request. ('+this_obj.xmlhttp.status+')'); 
				} 
			} 
		} 
		this.xmlhttp.open("GET", url, true); 
		this.xmlhttp.send(null);
		
		return true; 
	}
	
	
	function ajax_get_ifame(url,ifobj,tipobj) { 
	
		this.callback_object = callback_object; 
		
		var this_obj = this; 

		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200||this_obj.xmlhttp.status == 0) { 
					
					ifobj.write(this_obj.xmlhttp.responseText);
					ifobj.close();
					
				} else { 
					alert('There was a problem with the request. ('+this_obj.xmlhttp.status+')'); 
				} 
			} 
		} 
		this.xmlhttp.open("GET", url, true); 
		this.xmlhttp.send(null);
		
		return true; 
	}
	
	
	function ajax_get_value(url,func,spanObj) { 
	
	
		
		var this_obj = this; 
		
		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200||this_obj.xmlhttp.status == 0) { 
					var mess=this_obj.xmlhttp.responseText;
					var regS = new RegExp("\r\n","gi");
					mess=mess.replace(regS,"");
					var value=func+"('"+mess+"')";	
			
					spanObj.innerHTML= "";
					eval(value);
					
					
				} else { 
					alert('There was a problem with the request. ('+this_obj.xmlhttp.status+')'); 
				} 
			} 
		} 
		this.xmlhttp.open("GET", url, true); 
		this.xmlhttp.send(null);
		
		return true; 
	}
	
		function ajax_showit_value(url,spanObj) { 
	
	
		
		var this_obj = this; 
		
		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200||this_obj.xmlhttp.status == 0) { 
					
				
					showit(this_obj.xmlhttp.responseText);
					spanObj.innerHTML= "";
				
					
					
				} else { 
					alert('There was a problem with the request. ('+this_obj.xmlhttp.status+')'); 
				} 
			} 
		} 
		this.xmlhttp.open("GET", url, true); 
		this.xmlhttp.send(null);
		
		return true; 
	}
	
	function ajax_post_showit(url, query, tipobj) { 
	
	
		
		var this_obj = this; 
	
		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200) { 
					document.getElementById("doing").innerHTML= this_obj.xmlhttp.responseText;
				
					
				} else { 
					alert('There was a problem with the request. (' + this_obj.xmlhttp.status + ')'); 
				} 
			} 
		} 
	
		this.xmlhttp.open('POST', url); 
		
		this.xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
		this.xmlhttp.send(query); 
		return true; 
	} 
	
	
	function ajax_post_showit_post(url, query, spanObj) { 
	
	
		
		var this_obj = this; 
	
		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200) { 
					
					showit(this_obj.xmlhttp.responseText);
					spanObj.innerHTML= "";
					
				} else { 
					alert('There was a problem with the request. (' + this_obj.xmlhttp.status + ')'); 
				} 
			} 
		} 
	
		this.xmlhttp.open('POST', url); 
		
		this.xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
		this.xmlhttp.send(query); 
		return true; 
	} 
	
	function ajax_get_env(url,spanObj) { 
	
		var this_obj = this; 
		
		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200||this_obj.xmlhttp.status == 0) { 
					
					spanObj.innerHTML= "";
				//	alert(this_obj.xmlhttp.responseText);
					eval(this_obj.xmlhttp.responseText);
					
					
				} else { 
					//alert('There was a problem with the request. ('+this_obj.xmlhttp.status+')'); 
				} 
			} 
		} 
		this.xmlhttp.open("GET", url, true); 
		this.xmlhttp.send(null);
		
		return true; 
	}
	
	function ajax_post(url, query, callback_object,tipobj) 
	{ 
	
		this.callback_object = callback_object; 
		
		var this_obj = this; 
	
		this.xmlhttp.onreadystatechange = function() 
		{ 

			if(this_obj.xmlhttp.readyState == 4) 
			{ 
				if(this_obj.xmlhttp.status == 200)
				{ 
				
					
					this_obj.callback_object.callback(this_obj.xmlhttp.responseText,tipobj);
					
				} 
				else 
				{ 
					alert('There was a problem with the request. (' + this_obj.xmlhttp.status + ')'); 
				} 
			} 
		} 
	
		this.xmlhttp.open('POST', url); 
		
		this.xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
		this.xmlhttp.send(query); 
		return true; 
	} 



function ajax_post_env(url, query,func,tipobj) { 
	
		
		var this_obj = this; 
	
		this.xmlhttp.onreadystatechange = function() { 
			if(this_obj.xmlhttp.readyState == 4) { 
				if(this_obj.xmlhttp.status == 200) { 
				
					var value=func+"('"+this_obj.xmlhttp.responseText+"')";	
					
					tipobj.innerHTML= "";
					eval(value);
					
				} else { 
					alert('There was a problem with the request. (' + this_obj.xmlhttp.status + ')'); 
				} 
			} 
		} 
	
		this.xmlhttp.open('POST', url); 
		
		this.xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); 
		this.xmlhttp.send(query); 
		return true; 
	} 

}
