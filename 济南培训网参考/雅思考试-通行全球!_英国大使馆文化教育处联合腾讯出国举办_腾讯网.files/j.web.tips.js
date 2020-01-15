
var WebTips = new Object();

WebTips.Browser = {
	ie: /msie/.test(window.navigator.userAgent.toLowerCase()),
	moz: /gecko/.test(window.navigator.userAgent.toLowerCase()),
	opera: /opera/.test(window.navigator.userAgent.toLowerCase())
};

WebTips.$ = function(s)
{
	return (typeof s == 'object') ? s: document.getElementById(s);
};

WebTips.Element = {
	remove: function()
	{
		for (var i=0; i<arguments.length; i++)
		{
			try
			{
				WebTips.$(arguments[i]).parentNode.removeChild(WebTips.$(arguments[i]));
			}
			catch (e)
			{
			}
		}
	}
};

WebTips.JsLoader = {
	load: function(sUrl, fCallback)
	{
		WebTips.Element.remove(sUrl);

		var _script = document.createElement('script');
		_script.setAttribute('type', 'text/javascript');
		_script.setAttribute('id', sUrl);
		_script.setAttribute('src', sUrl);
		_script.setAttribute('charset', "gb2312");
		document.getElementsByTagName('head')[0].appendChild(_script);

		if (WebTips.Browser.ie)
		{
			_script.onreadystatechange = function()
			{
				if (this.readyState=='loaded' || this.readyState=='complete')
				{
					fCallback();
					WebTips.Element.remove(_script);
				}
			};
		}
		else if (WebTips.Browser.moz)
		{
			_script.onload = function()
			{
				fCallback();
				WebTips.Element.remove(_script);
			};

		}
		else
		{
			fCallback();
			WebTips.Element.remove(_script);
		}
	}

};

WebTips.Cookie = {
	setCookie: function(name, value, expires, path, domain, secure)
	{
		document.cookie = name + "=" + escape(value) +
			((expires) ? "; expires=" + expires.toGMTString() : "") +
			((path) ? "; path=" + path : "; path=/") +
			((domain) ? "; domain=" + domain : "") +
			((secure) ? "; secure" : "");
	},

	getCookie: function(name)
	{
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));

		if (arr != null)
		{
			return unescape(arr[2]);

		}

		return "";
	},

	clearCookie: function(name, path, domain)
	{
		if (WebTips.Cookie.getCookie(name))
		{
			document.cookie = name + "=" +
				((path) ? "; path=" + path : "; path=/") +
				((domain) ? "; domain=" + domain : "") +
				";expires=Fri, 02-Jan-1970 00:00:00 GMT";
		}
	}
};

WebTips.Page = {
	getPageWidth: function()
	{
		return document.body.scrollWidth || document.documentElement.scrollWidth || 0;
	},

	getPageHeight: function()
	{
		return document.body.scrollHeight || document.documentElement.scrollHeight || 0;
	},

	getBodyWidth: function()
	{
		return document.documentElement.clientWidth || document.body.clientWidth || 0;
	},

	getBodyHeight: function()
	{
		return document.documentElement.clientHeight || document.body.clientHeight || 0;
	},

	getBodyLeft: function()
	{
		return document.body.scrollLeft || document.documentElement.scrollLeft || window.pageXOffset || 0;
	},

	getBodyTop: function()
	{
		return document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0;
	},

	getBody: function()
	{
		return {
			width  : this.getBodyWidth(),
			height : this.getBodyHeight(),
			left   : this.getBodyLeft(),
			top    : this.getBodyTop()
		};
	},

	getScreenWidth: function()
	{
		return window.screen.width;
	},

	getScreenHeight: function()
	{
		return window.screen.height;
	}
};

WebTips.Flags = {
	"中国": "40.gif",
	"美国": "196.gif",
	"德国": "74.gif",
	"意大利": "94.gif",
	"日本": "98.gif",
	"韩国": "103.gif",
	"澳大利亚": "12.gif",
	"法国": "66.gif",
	"俄罗斯": "158.gif",
	"英国": "70.gif",
	"捷克共和国": "52.gif",
	"乌克兰": "194.gif",
	"格鲁吉亚": "72.gif",
	"古巴": "50.gif",
	"荷兰": "135.gif"
};

WebTips.hwd = null;
WebTips.nCheckInterval = 60000;

WebTips.IsNeedPush = function(sTimeStamp)
{
	var year = parseInt(sTimeStamp.substr(0,4), 10);
	var month = parseInt(sTimeStamp.substr(5,2), 10) - 1;
	var day = parseInt(sTimeStamp.substr(8,2), 10);
	var hours = parseInt(sTimeStamp.substr(11,2), 10);
	var minutes = parseInt(sTimeStamp.substr(14,2), 10);
	var seconds = parseInt(sTimeStamp.substr(17,2), 10);

	var time1 = new Date(year, month, day, hours, minutes, seconds);
	var time2 = new Date();
	if((time2.getTime() - time1.getTime())/1000 < 600)
	{
		return true;
	}
	else
	{
		return false;
	}
}

WebTips.check = function()
{
	sWebTipsTimestamp = null;

	WebTips.JsLoader.load("http://refresh.qq.com/immediately/1/tips_timestamp.json?cache="+parseInt(Math.random()*1500), function()
	{
		if (typeof sWebTipsTimestamp != "undefined")
		{
			if (sWebTipsTimestamp > WebTips.Cookie.getCookie("www_tips_timestamp_qqcom")
				&&　WebTips.IsNeedPush(sWebTipsTimestamp))
			{
				WebTips.push(sWebTipsTimestamp);
			}
			else
			{
				if (WebTips.hwd != 0)
				{
					WebTips.hwd = window.setTimeout(WebTips.check, WebTips.nCheckInterval);
				}
			}
		}
		else
		{
			if (WebTips.hwd != 0)
			{
				WebTips.hwd = window.setTimeout(WebTips.check, WebTips.nCheckInterval);
			}
		}
	});
};

WebTips.push = function(_sWebTipsTimestamp)
{
	insWebTipsInfo = null;

	WebTips.JsLoader.load("http://refresh.qq.com/immediately/1/tips_info_v2.json?cache=" + parseInt(Math.random()*1500), function()
	{
		if (typeof insWebTipsInfo != "undefined")
		{
			if (insWebTipsInfo.title != WebTips.Cookie.getCookie("www_tips_title_qqcom"))
			{
				//flag==1 普通tips || flag==2 金牌tips
				if (insWebTipsInfo.flag != "2")
				{
					var sUrl = insWebTipsInfo.url;
					if(sUrl.indexOf("http://") == -1 && sUrl.indexOf("Http://") == -1)
					{
						sUrl = "http://" + sUrl;
					}

					try
					{
						WebTips.$("www_tips_title").innerHTML = '<a href="' + sUrl + '" class="title" target="_blank" onclick="WebTips.PGV(1, 2);">' + insWebTipsInfo.title + '</a>';
						WebTips.$("www_tips_brief").innerHTML = insWebTipsInfo.brief.substr(0,35) + "...";
						WebTips.$("www_tips_url").innerHTML = '<a href="' + sUrl + '" class="red" target="_blank" onclick="WebTips.PGV(1, 2);">详细&gt;&gt;</a>';
					}
					catch (e)
					{
					}

					WebTips.PopBox.enetgetMsg();

					//曝光量统计
					WebTips.Url = insWebTipsInfo.url.replace("http://2008.qq.com", "");
					WebTips.PGV(1, 1);
				}
				else
				{
					//未登录QQ
					if (WebTips.Browser.ie && IsInstallQQ() && !IsAnyQQActive())
					{
						try
						{
							insWebTipsInfo.title = insWebTipsInfo.newstitle;

							WebTips.$('wintitle').innerHTML = insWebTipsInfo.wintitle;
							WebTips.$('newstitle').innerHTML = insWebTipsInfo.newstitle;
							WebTips.$('newstitleurl').href = insWebTipsInfo.newsurl;
							WebTips.$('imglink').href = insWebTipsInfo.imglink;
							WebTips.$('imgurl').src = insWebTipsInfo.imgurl;
							WebTips.$('imgnote').innerHTML = insWebTipsInfo.imgnote;
							WebTips.$('newsintro').innerHTML = insWebTipsInfo.newsinstor;
							WebTips.$('newsurl').href = insWebTipsInfo.newsurl;
							WebTips.$('newstitle').style.color = "#" + insWebTipsInfo.newstitlecolor;

							WebTips.$('chinasum0').innerHTML = insWebTipsInfo.medal.split(",")[0];
							WebTips.$('chinasum1').innerHTML = insWebTipsInfo.medal.split(",")[1];
							WebTips.$('chinasum2').innerHTML = insWebTipsInfo.medal.split(",")[2];

							if (insWebTipsInfo.ad_img_url!="" && insWebTipsInfo.ad_click_url!="")
							{
								WebTips.$('ad_img_url').src = insWebTipsInfo.ad_img_url;
								WebTips.$('ad_click_url').href = insWebTipsInfo.ad_click_url;
							}

							var arr = insWebTipsInfo.gold.split(";");
							var str = "<img border=0 src='http://mat1.qq.com/2008/webtips/" +
								WebTips.Flags[arr[0].split(",")[0]] + "'> " +
								arr[0].split(",")[1] +  "&nbsp;";
							str += "<img border=0 src='http://mat1.qq.com/2008/webtips/" +
								WebTips.Flags[arr[1].split(",")[0]] + "'> " +
								arr[1].split(",")[1]  + "&nbsp;";
							str += "<img border=0 src='http://mat1.qq.com/2008/webtips/" +
								WebTips.Flags[arr[2].split(",")[0]] + "'> " +
								arr[2].split(",")[1];
							WebTips.$('mingci').innerHTML = str;

							WebTips.$("gold_bottom").innerHTML = "<a href='http://2008.qq.com/' onclick='WebTips.PGV(2, 2);' target='_blank' style='color:#091F84;text-decoration:none'>2008&middot;你的网络主场</a>";

							WebTips.$("goldpoppage").style.top = WebTips.Page.getBodyTop() + WebTips.Page.getBodyHeight() - 239 + "px";
							WebTips.$("goldpoppage").style.left = WebTips.Page.getBodyLeft() + WebTips.Page.getBodyWidth() - 317 + "px";
							WebTips.$("goldpoppage").style.display = "block";

							WebTips.PopBox2.enetgetMsg();

							//曝光量统计
							WebTips.Url = insWebTipsInfo.newsurl.replace("http://2008.qq.com", "");
							WebTips.PGV(2, 1);
						}
						catch (e)
						{
						}
					}
				}

				var expires = new Date();
				expires.setTime(expires.getTime() + 24*60*60*1000);
				WebTips.Cookie.setCookie("www_tips_timestamp_qqcom", _sWebTipsTimestamp, expires, "/", "qq.com");
				WebTips.Cookie.setCookie("www_tips_title_qqcom", insWebTipsInfo.title, expires, "/", "qq.com");
			}
			else //时间更新了，标题没有更新
			{
				WebTips.hwd = window.setTimeout(WebTips.check, 2000);
			}
		}
		else
		{
			window.clearTimeout(WebTips.hwd);
			WebTips.hwd = window.setTimeout(WebTips.check, WebTips.nCheckInterval);
		}
	});
};

WebTips.PopBox = {
	dispSecond : 30000,
	enetdivTop : "",
	enetdivLeft : "",
	enetdivHeight : "",
	enetdivWidth : "",
	enetdocHeight: "",
	enetdocWidth: "",
	enetobjTimer: "",

	enetgetMsg : function()
	{
		try
		{
			WebTips.PopBox.enetdivTop = parseInt(document.getElementById("poppage").style.top,10)
			WebTips.PopBox.enetdivLeft = parseInt(document.getElementById("poppage").style.right,10)
			WebTips.PopBox.enetdivHeight = parseInt(document.getElementById("poppage").offsetHeight,10)
			WebTips.PopBox.enetdivWidth = parseInt(document.getElementById("poppage").offsetWidth,10)
			WebTips.PopBox.enetdocWidth = WebTips.Page.getBodyWidth();
			WebTips.PopBox.enetdocHeight = WebTips.Page.getBodyHeight();
			document.getElementById("poppage").style.top = parseInt(WebTips.Page.getBodyTop(),10) +
				WebTips.PopBox.enetdocHeight + 10;
			document.getElementById("poppage").style.right = parseInt(WebTips.Page.getBodyLeft(),10) +
				WebTips.PopBox.enetdocWidth - WebTips.PopBox.enetdivWidth
			document.getElementById("poppage").style.visibility="visible"
			WebTips.PopBox.enetobjTimer = window.setInterval(WebTips.PopBox.enetmoveDiv, 10)
		}
		catch (e)
		{
		}
	},

	enetresizeDiv : function ()
	{
		try
		{
			WebTips.PopBox.enetdivHeight = parseInt(document.getElementById("poppage").offsetHeight,10);
			WebTips.PopBox.enetdivWidth = parseInt(document.getElementById("poppage").offsetWidth,10);
			WebTips.PopBox.enetdocWidth = WebTips.Page.getBodyWidth();
			WebTips.PopBox.enetdocHeight = WebTips.Page.getBodyHeight();
			document.getElementById("poppage").style.top = WebTips.PopBox.enetdocHeight - WebTips.PopBox.enetdivHeight + parseInt(WebTips.Page.getBodyTop(),10);
			document.getElementById("poppage").style.right = WebTips.PopBox.enetdocWidth - WebTips.PopBox.enetdivWidth + parseInt(WebTips.Page.getBodyLeft(),10);
		}
		catch(e)
		{
		}
	},

	enetmoveDiv : function()
	{
		try
		{
			if (parseInt(document.getElementById("poppage").style.top,10) <= (WebTips.PopBox.enetdocHeight - WebTips.PopBox.enetdivHeight + parseInt(WebTips.Page.getBodyTop(),10)))
			{
				window.clearInterval(WebTips.PopBox.enetobjTimer);
				WebTips.PopBox.enetobjTimer = window.setInterval(WebTips.PopBox.enetresizeDiv, 1);
				window.setTimeout(WebTips.PopBox.enetcloseDiv,WebTips.PopBox.dispSecond);
			}

			WebTips.PopBox.enetdivTop = parseInt(document.getElementById("poppage").style.top, 10);
			document.getElementById("poppage").style.top = WebTips.PopBox.enetdivTop - 2;
		}
		catch(e)
		{
		}
	},

	enetcloseDiv:function()
	{
		document.getElementById('poppage').style.visibility='hidden';
		if (WebTips.PopBox.enetobjTimer)
		{
			window.clearInterval(WebTips.PopBox.enetobjTimer);
		}

		window.clearTimeout(WebTips.hwd);
		WebTips.hwd = window.setTimeout(WebTips.check, WebTips.nCheckInterval);
	}
};

WebTips.PopBox2 = {
	dispSecond : 30000,
	enetdivTop : "",
	enetdivLeft : "",
	enetdivHeight : "",
	enetdivWidth : "",
	enetdocHeight: "",
	enetdocWidth: "",
	enetobjTimer: "",

	enetgetMsg : function()
	{
		try
		{
			WebTips.PopBox2.enetdivTop = parseInt(document.getElementById("goldpoppage").style.top,10)
			//WebTips.PopBox2.enetdivLeft = parseInt(document.getElementById("goldpoppage").style.right,10)
			WebTips.PopBox2.enetdivHeight = parseInt(document.getElementById("goldpoppage").offsetHeight,10)
			WebTips.PopBox2.enetdivWidth = parseInt(document.getElementById("goldpoppage").offsetWidth,10)
			WebTips.PopBox2.enetdocWidth = WebTips.Page.getBodyWidth();
			WebTips.PopBox2.enetdocHeight = WebTips.Page.getBodyHeight();
			document.getElementById("goldpoppage").style.top = parseInt(WebTips.Page.getBodyTop(),10) +
				WebTips.PopBox2.enetdocHeight + 10;
			//document.getElementById("goldpoppage").style.right = parseInt(WebTips.Page.getBodyLeft(),10) +
			//	WebTips.PopBox2.enetdocWidth - WebTips.PopBox2.enetdivWidth
			document.getElementById("goldpoppage").style.visibility="visible"
			WebTips.PopBox2.enetobjTimer = window.setInterval(WebTips.PopBox2.enetmoveDiv, 10)
		}
		catch (e)
		{
		}
	},

	enetresizeDiv : function ()
	{
		try
		{
			WebTips.PopBox2.enetdivHeight = parseInt(document.getElementById("goldpoppage").offsetHeight,10);
			WebTips.PopBox2.enetdivWidth = parseInt(document.getElementById("goldpoppage").offsetWidth,10);
			WebTips.PopBox2.enetdocWidth = WebTips.Page.getBodyWidth();
			WebTips.PopBox2.enetdocHeight = WebTips.Page.getBodyHeight();
			document.getElementById("goldpoppage").style.top = WebTips.PopBox2.enetdocHeight - WebTips.PopBox2.enetdivHeight + parseInt(WebTips.Page.getBodyTop(),10);
			//document.getElementById("goldpoppage").style.right = WebTips.PopBox2.enetdocWidth - WebTips.PopBox2.enetdivWidth + parseInt(WebTips.Page.getBodyLeft(),10);
		}
		catch(e)
		{
		}
	},

	enetmoveDiv : function()
	{
		try
		{
			if (parseInt(document.getElementById("goldpoppage").style.top,10) <= (WebTips.PopBox2.enetdocHeight - WebTips.PopBox2.enetdivHeight + parseInt(WebTips.Page.getBodyTop(),10)))
			{
				window.clearInterval(WebTips.PopBox2.enetobjTimer);
				WebTips.PopBox2.enetobjTimer = window.setInterval(WebTips.PopBox2.enetresizeDiv, 1);
				//window.setTimeout(WebTips.PopBox2.enetcloseDiv, WebTips.PopBox2.dispSecond);
			}

			WebTips.PopBox2.enetdivTop = parseInt(document.getElementById("goldpoppage").style.top, 10);
			document.getElementById("goldpoppage").style.top = WebTips.PopBox2.enetdivTop - 2;
		}
		catch(e)
		{
		}
	},

	enetcloseDiv:function()
	{
		document.getElementById('goldpoppage').style.visibility='hidden';
		if (WebTips.PopBox2.enetobjTimer)
		{
			window.clearInterval(WebTips.PopBox2.enetobjTimer);
		}

		WebTips.hwd = window.setTimeout(WebTips.check, WebTips.nCheckInterval);
	}
};

WebTips.Url = null;
WebTips.PGV = function(flag, type)
{
	//flag:1 普通tips || flag:2 金牌tips
	//type:1 曝光 || type:2 点击
	if (typeof(pgvMain) == 'function')
	{
		pvRepeatCount = 1;
		pvCurDomain = "2008.qq.com";

		pgvMain(0, {
			"virtualDomain" : "2008.qq.com",

			"virtualURL" : "/web_tips_www_qq_com/" + flag +
				"/" + WebTips.Cookie.getCookie("www_tips_timestamp_qqcom").replace(/(\s|:)+/g, "_") +
				"_" + type + ".htm",

			"virtualTitle" : WebTips.Cookie.getCookie("www_tips_timestamp_qqcom").replace(/(\s|:)+/g, "_") + "__" +
				(flag==1 ? "common" : "gold") + "_tips_" +
				(type==1 ? "exposure" : "click") + "_count__" + WebTips.Url
		});
	}
}

WebTips.check();

window.onblur = function()
{
	if (WebTips.hwd != null)
	{
		try
		{
			window.clearTimeout(WebTips.hwd);
		}
		catch (e)
		{
		}
	}

	WebTips.hwd = 0;
};

window.onfocus = function ()
{
	if (WebTips.hwd == 0)
	{
		window.setTimeout(WebTips.check, 1000);
	}
};

window.onerror = function()
{
	return true;
};

function IsInstallQQ()
{
	try
	{
		var xmlhttp=new ActiveXObject("TimwpDll.TimwpCheck");
		var  n = xmlhttp.GetVersion();

		return n >= 2.1;
	}
	catch (e)
	{
		return false;
	}
}

function IsAnyQQActive()
{
	try
	{
		var xmlhttp = new ActiveXObject("TimwpDll.TimwpCheck");
		return xmlhttp.CheckValid();
	}
	catch (e)
	{
		return false;
	}
}/*  |xGv00|877b2d2b7532835842f074813cab410b */