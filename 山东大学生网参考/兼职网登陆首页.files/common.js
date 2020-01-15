DomainMap = {
	cookieDomain:'.163.com',
	serverHostName:'blog.163.com',
	serverDomain:'.blog.163.com',
	getParentDomain:function(s){
		if(s.indexOf('@') != -1||s.indexOf('_') != -1||s.indexOf('..') != -1||s.charAt(s.length -1) == '.'||s.toLowerCase().substr(s.length - 4) == '.www')
			return this.serverHostName + '/' +s;
		return s + this.serverDomain;
	}	
};

var Cookie = {
	set : function(name, value, expirationInDays, path) {
		var cookie = escape(name) + "=" + escape(value)
		if (expirationInDays) {
			var date = new Date()
			date.setDate(date.getDate() + expirationInDays)
			cookie += "; expires=" + date.toGMTString()
		} 
		if (path) {
			cookie += ";path=" + path
		}
		document.cookie = cookie

		if (value && (expirationInDays == undefined || expirationInDays > 0) && !this.get(name)) {
			Logger.error("Cookie (" + name + ") was not set correctly... The value was " + value.toString().length + " charachters long (This may be over the cookie limit)");
		}
	},

	get : function(name) {
		var pattern = "(^|;)\\s*" + escape(name) + "=([^;]+)"
		var m = document.cookie.match(pattern)
		if (m && m[2]) {			
			return unescape(m[2])
		}
		else return null
	},

	getAll : function() {
		var cookies = document.cookie.split(';')
		var cookieArray = []				

		for (var i = 0; i < cookies.length; i++) {			
			try {
				var name = unescape(cookies[i].match(/^\s*([^=]+)/m)[1])
				var value = unescape(cookies[i].match(/=(.*$)/m)[1])
			}
			catch (e) {
				continue
			}

			cookieArray.push({name : name, value : value})

			if (cookieArray[name] != undefined) {
				Logger.waring("Trying to retrieve cookie named(" + name + "). There appears to be another property with this name though.");
			}			

			cookieArray[name] = value
		}

		return cookieArray
	},

	clear : function(name) {
		this.set(name, "", -1)
	},

	clearAll : function() {
		var cookies = this.getAll()

		for(var i = 0; i < cookies.length; i++) {
			this.clear(cookies[i].name)
		}

	}
}   
function setHomePageUtil(url){
//	UserBean.incrPageView("sethomepage", null);
	if(document.all){
		document.body.style.behavior="url(#default#homepage)";
		document.body.setHomePage(url);
	}else{
		alert("浏览器不支持，请手动设置为首页");
	}
	return false;
}
function checkLogin(){
	var netAName = getLoginName();
	if(netAName!=null){
		return true;		
	}
	window.open('/loginBlog.do?type=common','_blank','resizable=no,scrollbars=no,status=no,height=220px,width=448px');
	return false;
}

function getLoginName(){
	var name = Cookie.get("NETEASE_AUTH_USERNAME");
	if(name == "") name = null;
	return name;
}

function afterLogin(loginName){
	if(loginName && loginName!=''){
		window.location.reload();
	}
}

function logout(){
	window.location.href="http://blog.163.com/exit.do?target="+encodeURIComponent(window.location.href);
	return false;
}
function blogLoginedAndShowMsgCount(o){			
	var $_blogusername=Cookie.get("NETEASE_AUTH_USERNAME");						
	var str='<a class="a07" href="http://blog.163.com/username/?fromservicesmyblog">我的博客</a>－<a class="a07" href="http://m.163.com/username/?fromservicesmessage">新消息<span class="red">remindCount</span></a><span class="comma">,</span><a class="a07" href="http://blog.163.com/username/profile/?target=note&fromservicesnote">新留言<span class="red">noteCount</span></a><span class="comma">,</span><a class="a07" href="http://blog.163.com/username/profile/?target=blogcomment&fromservicesblogcomment">新评论<span class="red">commentCount</span></a>';
	str = str.replace(/username/g,$_blogusername).replace("remindCount",o.remindCount).replace("commentCount",o.commentCount).replace("noteCount",o.noteCount);
	document.getElementById("blog_loginedDiv").innerHTML = str;
	document.getElementById("blog_notLoginedDiv").style.display="none";
	document.getElementById("blog_loginedDiv").style.display="inline";
	document.getElementById("blog_logined_ExistDiv").style.display="inline";
	
}

function lpSubmitSearch() {
	var q = document.getElementById("indexWords").value;
	g_curSearchType = document.getElementById("curSearchType").value;
	if (!g_curSearchType || g_curSearchType=="") g_curSearchType="blog";
	var o="all";
	if(g_curSearchType=="Music"){
		o="name";
	}else if(g_curSearchType=="Tag"){
		o="photo";
	}else if(g_curSearchType=="Author"){
		o="nickname";
	}
	if (q=="")
		document.getElementById("indexSearchForm").action= "http://blog.163.com/search.html";
	else
		document.getElementById("indexSearchForm").action= "http://blog.163.com/search?t=" + g_curSearchType.toLowerCase() +"&q=" + encodeURIComponent(q) + "&o="+o+"";
	document.getElementById("submitIndexSearchFormBtn").click();
}

function doSearchNow(searchType){
	document.getElementById("curSearchType").value=searchType;
	lpSubmitSearch();
	document.getElementById("searchTypeDiv").style.display="none";
}

function getBlogMsgCount(){
	try{
		var $_blogusername=Cookie.get("NETEASE_AUTH_USERNAME");
		if ($_blogusername) document.write('<scri'+'pt src="http://blog.163.com/pub/services-js/count.do"></scri'+'pt>');	
	}catch(e){}
}

function popupMusic(){
    try{
		var netAName = Cookie.get("NETEASE_AUTH_USERNAME");
		var isLogined = (netAName != null && netAName != "");	
		var domain="";
		if (isLogined) domain =  DomainMap.getParentDomain(netAName);		
		var url ="";
		if (Browser.isFirefox ){			
			if (isLogined) url = "http://"+domain+"/musicBox.do";
			else {alert('该操作只支持IE浏览器');return false;}
			window.open(url+"?myInfoMusic","_blank","resizable=no,scrollbars=no,status=yes,width=365px,height=300px");	
		}
		else {
		  	if (isLogined) url = "http://"+domain+"/m";
			else url = "http://blog.163.com/m_i";
			window.open(url+"/?myInfoMusic","_blank","resizable=no,scrollbars=no,status=yes,width=768px,height=558px");
		}
	}catch(e){}
}

function bodyClick(e) {
	var ele = document.getElementById("searchTypeDiv");
	if(ele != null && ele.style.display != "none")
			ele.style.display = "none";
}

function stdClick(e) {
	if(document.getElementById("searchTypeDiv") == null)
		return;
	var event = window.event || e;
	if(document.all){
			event.cancelBubble = true;
	}else{
		event.stopPropagation();
	}
}

function stdbtnClick(e) {
	var ele = document.getElementById("searchTypeDiv");
	if(ele != null)
			ele.style.display = "";
	var event = window.event || e;
	if(document.all){
			event.cancelBubble = true;
	}else{
		event.stopPropagation();
	}
}

function niPageInit() {
	try{
		if(document.all) {
			document.body.attachEvent("onclick", bodyClick);
			if(document.getElementById("searchTypeDiv") != null)
				document.getElementById("searchTypeDiv").attachEvent("onclick", stdClick);
		}else{
			document.body.addEventListener("click", bodyClick, false);
			if(document.getElementById("searchTypeDiv") != null)
				document.getElementById("searchTypeDiv").addEventListener("click", stdClick, false);
		}
	}catch(e){}
}


try{
	if (!document.all){
		window.addEventListener("DOMContentLoaded",niPageInit,false);
	}else{
		document.write("<script defer>niPageInit();<"+"/script>");
	}
}catch(e){}