function AlertAndGo(msg,url,func,id)
{
	if (msg!="") alert(msg);
	if (url!="") window.location.href=url;
	if (msg=="" && url=="")
	func(id);
	////return false;
	
}
function alertCheckNum(cmnType){
        FFWindowOpen(WINDOW_ALIGN_CENTER, "../inc/info_checkNum.jsp?cmnType"+cmnType, "check", 330, 130,"");
}

function send(url){
	FFWindowOpen(WINDOW_ALIGN_CENTER, url, "login", 440, 570,"");
}
function send2(url){
	FFWindowOpen(WINDOW_ALIGN_CENTER, url, "login", 330, 130,"");
}
function adaptPhone(url){
	FFWindowOpen(WINDOW_ALIGN_CENTER, url, "login", 560, 400,"");
}



//提醒用户必须登陆
function alertLogin(){
	openCenter("http://funclub.samsungmobile.com/cn06/func/alert_login.jsp", "login", 256, 139,""); 
}

//peng 20070626
function alertCDMA(){
	openCenter("http://funclub.samsungmobile.com/cn06/func/alert_CDMA.jsp", "login", 256, 139,""); 
}

//针对非D608机型提醒
function d608alertLogin(){
	openCenter("http://funclub.samsungmobile.com/cn06/func/alert_login_D608.jsp", "login", 286, 143,""); 
}

function previewn(id){
        window.open('http://funclub.samsungmobile.com/cn/newplay/prev_ring1.jsp?id='+id,'',"width=330,height=230");
}

function phoneSupportNot(url){
	openCenter(url, "",285,124,"");
}

function send(url){
	openCenter(url, "login", 440, 570,"");
}

function sendPlay(url){
	openCenter(url, "login", 304, 446,"");
}

function sendWap(url){
	openCenter(url, "login", 309, 446,"");
}

function sendJava(url){
	openCenter(url, "login", 309, 429,"");
}

function addFavorite(dthread, bforum,cmnType){
	//openCenter("http://dev.sfc.comhttp://funclub.samsungmobile.com/cn06/func/doFavorite.jsp?dthread="+dthread+"&bforum="+bforum+"&cmnType="+cmnType, "login", 330, 130,"");
	openCenter("http://funclub.samsungmobile.com/cn06/func/doFavorite.jsp?dthread="+dthread+"&bforum="+bforum+"&cmnType="+cmnType, "login", 294, 132,""); 
}

function addFavorite1(dthread, bforum){
	openCenter("http://funclub.samsungmobile.com/cn06/func/doFavorite.jsp?dthread="+dthread+"&bforum="+bforum, "login", 294, 132,"");
}

function openCenter(url,winname,swidth,sheight,option){
	var sx=screen.availWidth/2-swidth/2;
	var sy=screen.availHeight/2-sheight/2;
	var obj
	if(option==null) option = "";
	obj = open(url,winname, "width="+swidth+" ,height="+sheight+",top="+sy+",left="+sx+","+option);	
	return obj
}

//peng 20051026
function send_ring(id)
{
   window.open('http://funclub.samsungmobile.com/cn06/func/preview_ring.jsp?id='+id,'','width=308,height=388');
}
function send_pic(id)
{
   //window.open('http://funclub.samsungmobile.com/cn/newplay/pl_cl_send_popup.jsp?id='+id,'',"width=436,height=565");
   //zhanzhijian 2006-02-21 改动新的发送图片接口
   window.open('http://funclub.samsungmobile.com/cn06/func/preview_pic.jsp?id='+id,'',"width=308,height=368");

}
function send_greenChannel_ring(id)
{
   window.open('http://funclub.samsungmobile.com/cn06/func/preview_ring_gc.jsp?step=step0&id='+id,'',"width=317,height=434");
}
function send_greenChannel_yinxiaoring(id)
{
   window.open('http://funclub.samsungmobile.com/cn06/func/preview_yinxiaoring_gc.jsp?step=step0&id='+id,'',"width=307,height=469");
}
function send_greenChannel_pic(id)
{
   window.open('http://funclub.samsungmobile.com/cn06/func/preview_pic_gc.jsp?step=step0&id='+id,'',"width=309,height=396");
}

function prev_ring(id){
	window.open('http://funclub.samsungmobile.com/cn06/func/preview_yinxiaoring.jsp?id='+id,'','width=307,height=452'); 
}


//penghai 20051026 加入下载绿色通道，用户不登陆也可以下载图铃
function alertLogin_GreenChannel(cmnType, id){
        FFWindowOpen(WINDOW_ALIGN_CENTER, "http://funclub.samsungmobile.com/cn/inc/greenChannel_loginAlert.jsp?cmnType="+cmnType+"&id="+id, "login", 330, 130,"");
}

function greenChannel(id){
        FFWindowOpen(WINDOW_ALIGN_CENTER, "http://funclub.samsungmobile.com/cn/inc/greenChannel.jsp?step=Step1&id="+id, "login", 330, 130,"");
        self.close();
}

function checkPhone(phone) {
	if(phone.length != 11)
	{
		alert("手机号码的长度应该为11个数字，您的输入有误");
		return false;
	}
	var ss = "0123456789";
	for(var i = 0 ; i < 11 ; i++)
	{
		if( ss.indexOf(phone.charAt(i)) == -1)
		{
			alert("您输入的手机号不合法");
			return false;
		}
	}
	if(phone.substring(0,3)!="134"  &&
		phone.substring(0,3)!="135"  &&
		phone.substring(0,3)!="136" &&
		phone.substring(0,3)!="137" &&
		phone.substring(0,3)!="138" && 
		phone.substring(0,3)!="139" &&
		phone.substring(0,3)!="158" &&  //peng 20070620
		phone.substring(0,3)!="159")  
	{
		alert("对不起，本网站只适用于中国移动用户，您输入的手机号码不是中国移动号码");
		return false;
	}
	return true;
}

//本函数用于cn06/bar/list_pic.jsp左侧栏打开关闭按钮实现 2006-02-16 zhan
function listcap(id){
	if (id==1){
		if(document.getElementById("ringlist").style.display=="")	
		//如果是开放的话，再次点击的时候应该关闭
		{
			document.getElementById("ringlist").style.display="none";
		}
		else
		{
			document.getElementById("ringlist").style.display="";
		}
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		document.getElementById("modelist").style.display="none";
	}
	if(id==2){
		if(document.getElementById("piclist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("piclist").style.display="none";
		else
			document.getElementById("piclist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		document.getElementById("modelist").style.display="none";
	}
	if(id==3){
		if(document.getElementById("paperlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("paperlist").style.display="none";
		else
			document.getElementById("paperlist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		document.getElementById("modelist").style.display="none";
	}
	if(id==4){
		if(document.getElementById("personlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("personlist").style.display="none";
		else
			document.getElementById("personlist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		document.getElementById("modelist").style.display="none";
	}
	if(id==5){
		if(document.getElementById("feastlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("feastlist").style.display="none";
		else
			document.getElementById("feastlist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("modelist").style.display="none";
	}
	if(id==6){
		if(document.getElementById("modelist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("modelist").style.display="none";
		else
			document.getElementById("modelist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
	}

	//首页
	if (id==7){
		document.getElementById("img1").style.display="";
		document.getElementById("plist").style.display="";
		document.getElementById("ring2").style.display="none";
		document.getElementById("img2").style.display="none";
		document.getElementById("img3").style.display="";
		document.getElementById("img4").style.display="none";
		
	}
	if(id==8){
		document.getElementById("img1").style.display="none";
		document.getElementById("img2").style.display="";
		document.getElementById("img3").style.display="none";
		document.getElementById("ring2").style.display="";
		document.getElementById("plist").style.display="none";
		document.getElementById("img4").style.display="";
		
	}
  if(id==9){
		document.getElementById("dm1").style.display="";
		document.getElementById("dm2").style.display="none";
		document.getElementById("dm3").style.display="none";
		document.getElementById("dm4").style.display="none";
		document.getElementById("img5").style.display="";
		document.getElementById("img6").style.display="none";
		document.getElementById("img7").style.display="";
		document.getElementById("img8").style.display="none";
		document.getElementById("img9").style.display="";
		document.getElementById("img10").style.display="none";
		document.getElementById("img11").style.display="";
		document.getElementById("img12").style.display="none";
		
		
 }
if(id==10){
		document.getElementById("dm1").style.display="none";
		document.getElementById("dm2").style.display="";
		document.getElementById("dm3").style.display="none";
		document.getElementById("dm4").style.display="none";
		document.getElementById("img5").style.display="none";
		document.getElementById("img6").style.display="";
		document.getElementById("img7").style.display="none";
		document.getElementById("img8").style.display="";
		document.getElementById("img9").style.display="";
		document.getElementById("img10").style.display="none";
		document.getElementById("img11").style.display="";
		document.getElementById("img12").style.display="none";
		
 }
 if(id==11){
		document.getElementById("dm1").style.display="none";
		document.getElementById("dm2").style.display="none";
		document.getElementById("dm3").style.display="";
		document.getElementById("dm4").style.display="none";
		document.getElementById("img5").style.display="none";
		document.getElementById("img6").style.display="";
		document.getElementById("img7").style.display="";
		document.getElementById("img8").style.display="none";
		document.getElementById("img9").style.display="none";
		document.getElementById("img10").style.display="";
		document.getElementById("img11").style.display="";
		document.getElementById("img12").style.display="none";
		
 }
 if(id==12){
		document.getElementById("dm1").style.display="none";
		document.getElementById("dm2").style.display="none";
		document.getElementById("dm3").style.display="none";
		document.getElementById("dm4").style.display="";
		document.getElementById("img5").style.display="none";
		document.getElementById("img6").style.display="";
		document.getElementById("img7").style.display="";
		document.getElementById("img8").style.display="none";
		document.getElementById("img9").style.display="";
		document.getElementById("img10").style.display="none";
		document.getElementById("img11").style.display="none";
		document.getElementById("img12").style.display="";
		
 }

 //图铃bar首页
 if (id==13){
		document.getElementById("img1").style.display="";
		document.getElementById("plist").style.display="";
		document.getElementById("ring2").style.display="none";
		document.getElementById("img2").style.display="none";
		document.getElementById("img3").style.display="";
		document.getElementById("img4").style.display="none";
		
	}
	if(id==14){
		document.getElementById("img1").style.display="none";
		document.getElementById("img2").style.display="";
		document.getElementById("img3").style.display="none";
		document.getElementById("ring2").style.display="";
		document.getElementById("plist").style.display="none";
		document.getElementById("img4").style.display="";
		
	}
	if (id==15){
		document.getElementById("img5").style.display="";
		document.getElementById("img6").style.display="none";
		document.getElementById("img7").style.display="";
		document.getElementById("img8").style.display="none";
		document.getElementById("plist1").style.display="";
		document.getElementById("plist2").style.display="none";
		
	}
	if(id==16){
		document.getElementById("img5").style.display="none";
		document.getElementById("img6").style.display="";
		document.getElementById("img7").style.display="none";
		document.getElementById("img8").style.display="";
		document.getElementById("plist1").style.display="none";
		document.getElementById("plist2").style.display="";
		
	}
	if (id==17){
		document.getElementById("img9").style.display="";
		document.getElementById("img10").style.display="none";
		document.getElementById("img11").style.display="";
		document.getElementById("img12").style.display="none";
		document.getElementById("plist3").style.display="";
		document.getElementById("plist4").style.display="none";
		
	}
	if(id==18){
		document.getElementById("img9").style.display="none";
		document.getElementById("img10").style.display="";
		document.getElementById("img11").style.display="none";
		document.getElementById("img12").style.display="";
		document.getElementById("plist3").style.display="none";
		document.getElementById("plist4").style.display="";
		
	}
	//music新音乐
	if (id==19){
		document.getElementById("img1").style.display="";
		document.getElementById("img2").style.display="none";
		document.getElementById("img3").style.display="";
		document.getElementById("img4").style.display="none";
		document.getElementById("rlist1").style.display="";
		document.getElementById("rlist2").style.display="none";
		
	}
	if (id==20){
		document.getElementById("img1").style.display="none";
		document.getElementById("img2").style.display="";
		document.getElementById("img3").style.display="none";
		document.getElementById("img4").style.display="";
		document.getElementById("rlist1").style.display="none";
		document.getElementById("rlist2").style.display="";
		
	}
	if (id==21){
		document.getElementById("img5").style.display="";
		document.getElementById("img6").style.display="none";
		document.getElementById("img7").style.display="";
		document.getElementById("img8").style.display="none";
		document.getElementById("rlist3").style.display="";
		document.getElementById("rlist4").style.display="none";
		
	}
	if (id==22){
		document.getElementById("img5").style.display="none";
		document.getElementById("img6").style.display="";
		document.getElementById("img7").style.display="none";
		document.getElementById("img8").style.display="";
		document.getElementById("rlist3").style.display="none";
		document.getElementById("rlist4").style.display="";
		
	}
	if (id==23){
		document.getElementById("img9").style.display="";
		document.getElementById("img10").style.display="none";
		document.getElementById("img11").style.display="";
		document.getElementById("img12").style.display="none";
		document.getElementById("rlist5").style.display="";
		document.getElementById("rlist6").style.display="none";
		
	}
	if (id==24){
		document.getElementById("img9").style.display="none";
		document.getElementById("img10").style.display="";
		document.getElementById("img11").style.display="none";
		document.getElementById("img12").style.display="";
		document.getElementById("rlist5").style.display="none";
		document.getElementById("rlist6").style.display="";
		
	}
	if (id==25){
		document.getElementById("img13").style.display="";
		document.getElementById("img14").style.display="none";
		document.getElementById("img15").style.display="";
		document.getElementById("img16").style.display="none";
		document.getElementById("rlist7").style.display="";
		document.getElementById("rlist8").style.display="none";
		
	}
	if (id==26){
		document.getElementById("img13").style.display="none";
		document.getElementById("img14").style.display="";
		document.getElementById("img15").style.display="none";
		document.getElementById("img16").style.display="";
		document.getElementById("rlist7").style.display="none";
		document.getElementById("rlist8").style.display="";
		
	}
	if (id==27){
		document.getElementById("img17").style.display="";
		document.getElementById("img18").style.display="none";
		document.getElementById("img19").style.display="";
		document.getElementById("img20").style.display="none";
		document.getElementById("cd1").style.display="";
		document.getElementById("cd2").style.display="none";
		
	} 
	if(id==28){
		document.getElementById("img17").style.display="none";
		document.getElementById("img18").style.display="";
		document.getElementById("img19").style.display="none";
		document.getElementById("img20").style.display="";
		document.getElementById("cd1").style.display="none";
		document.getElementById("cd2").style.display="";
		
	}
}


//本函数用于cn06/bar 图铃吧 列表页面 左边菜单
function listcap_bar(id){
	if (id==1){
		if(document.getElementById("ringlist").style.display=="")	
		//如果是开放的话，再次点击的时候应该关闭
		{
			document.getElementById("ringlist").style.display="none";
		}
		else
		{
			document.getElementById("ringlist").style.display="";
		}
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		//document.getElementById("modelist").style.display="none";
	}
	if(id==2){
		if(document.getElementById("piclist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("piclist").style.display="none";
		else
			document.getElementById("piclist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		//document.getElementById("modelist").style.display="none";
	}
	if(id==3){
		if(document.getElementById("paperlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("paperlist").style.display="none";
		else
			document.getElementById("paperlist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		//document.getElementById("modelist").style.display="none";
	}
	if(id==4){
		if(document.getElementById("personlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("personlist").style.display="none";
		else
			document.getElementById("personlist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
		//document.getElementById("modelist").style.display="none";
	}
	if(id==5){
		if(document.getElementById("feastlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("feastlist").style.display="none";
		else
			document.getElementById("feastlist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		//document.getElementById("modelist").style.display="none";
	}
	/*if(id==6){
		if(document.getElementById("modelist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("modelist").style.display="none";
		else
			document.getElementById("modelist").style.display="";
		document.getElementById("ringlist").style.display="none";
		document.getElementById("piclist").style.display="none";
		document.getElementById("paperlist").style.display="none";
		document.getElementById("personlist").style.display="none";
		document.getElementById("feastlist").style.display="none";
	}*/
}

//本函数用于cn06/music 新音乐 列表页面 左边菜单
function listcap_music(id){
	if (id==1){
		if(document.getElementById("mp3list").style.display=="")	
		//如果是开放的话，再次点击的时候应该关闭
		{
			document.getElementById("mp3list").style.display="none";
		}
		else
		{
			document.getElementById("mp3list").style.display="";
		}
		document.getElementById("cdlist").style.display="none";
		//document.getElementById("concertlist").style.display="none";
		document.getElementById("lyriclist").style.display="none";
		document.getElementById("cailinglist").style.display="none";
		document.getElementById("karaOKlist").style.display="none";
		document.getElementById("topringlist").style.display="none";
	}
	if(id==2){
		if(document.getElementById("cdlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("cdlist").style.display="none";
		else
			document.getElementById("cdlist").style.display="";
		document.getElementById("mp3list").style.display="none";
		//document.getElementById("concertlist").style.display="none";
		document.getElementById("lyriclist").style.display="none";
		document.getElementById("cailinglist").style.display="none";
		document.getElementById("karaOKlist").style.display="none";
		document.getElementById("topringlist").style.display="none";
	}
	/*if(id==3){
		if(document.getElementById("concertlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("concertlist").style.display="none";
		else
			document.getElementById("concertlist").style.display="";
		document.getElementById("mp3list").style.display="none";
		document.getElementById("cdlist").style.display="none";
		document.getElementById("lyriclist").style.display="none";
		document.getElementById("cailinglist").style.display="none";
		document.getElementById("karaOKlist").style.display="none";
		document.getElementById("topringlist").style.display="none";
	}*/
	if(id==4){
		if(document.getElementById("lyriclist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("lyriclist").style.display="none";
		else
			document.getElementById("lyriclist").style.display="";
		document.getElementById("mp3list").style.display="none";
		document.getElementById("cdlist").style.display="none";
		//document.getElementById("concertlist").style.display="none";
		document.getElementById("cailinglist").style.display="none";
		document.getElementById("karaOKlist").style.display="none";
		document.getElementById("topringlist").style.display="none";
	}
	if(id==5){
		if(document.getElementById("cailinglist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("cailinglist").style.display="none";
		else
			document.getElementById("cailinglist").style.display="";
		document.getElementById("mp3list").style.display="none";
		document.getElementById("cdlist").style.display="none";
		//document.getElementById("concertlist").style.display="none";
		document.getElementById("lyriclist").style.display="none";
		document.getElementById("karaOKlist").style.display="none";
		document.getElementById("topringlist").style.display="none";
	}
	if(id==6){
		if(document.getElementById("karaOKlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("karaOKlist").style.display="none";
		else
			document.getElementById("karaOKlist").style.display="";
		document.getElementById("mp3list").style.display="none";
		document.getElementById("cdlist").style.display="none";
		//document.getElementById("concertlist").style.display="none";
		document.getElementById("lyriclist").style.display="none";
		document.getElementById("cailinglist").style.display="none";
		document.getElementById("topringlist").style.display="none";
	}
	if(id==7){
		if(document.getElementById("topringlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("topringlist").style.display="none";
		else
			document.getElementById("topringlist").style.display="";
		document.getElementById("mp3list").style.display="none";
		document.getElementById("cdlist").style.display="none";
		//document.getElementById("concertlist").style.display="none";
		document.getElementById("lyriclist").style.display="none";
		document.getElementById("cailinglist").style.display="none";
		document.getElementById("karaOKlist").style.display="none";
	}
}

//本函数用于cn06/life 游戏城 列表页面 左边菜单
function listcap_game(id){
	if (id==1){
		if(document.getElementById("javalist").style.display=="")	
		//如果是开放的话，再次点击的时候应该关闭
		{
			document.getElementById("javalist").style.display="none";
		}
		else
		{
			document.getElementById("javalist").style.display="";
		}
		document.getElementById("waplist").style.display="none";
	}
	if(id==2){
		if(document.getElementById("waplist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("waplist").style.display="none";
		else
			document.getElementById("waplist").style.display="";
		document.getElementById("javalist").style.display="none";
	}
}

//本函数用于cn06/life 生活馆 列表页面 左边菜单
function listcap_life(id){
	if (id==1){
		if(document.getElementById("playlist").style.display=="")	
		//如果是开放的话，再次点击的时候应该关闭
		{
			document.getElementById("playlist").style.display="none";
		}
		else
		{
			document.getElementById("playlist").style.display="";
		}
		document.getElementById("filmlist").style.display="none";
		document.getElementById("cartoonlist").style.display="none";
	}
	if(id==2){
		if(document.getElementById("filmlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("filmlist").style.display="none";
		else
			document.getElementById("filmlist").style.display="";
		document.getElementById("playlist").style.display="none";
		document.getElementById("cartoonlist").style.display="none";
	}
	if(id==3){
		if(document.getElementById("cartoonlist").style.display=="")	//如果是开放的话，再次点击的时候应该关闭
			document.getElementById("cartoonlist").style.display="none";
		else
			document.getElementById("cartoonlist").style.display="";
		document.getElementById("playlist").style.display="none";
		document.getElementById("filmlist").style.display="none";
	}
	
}
//用于搜索与收藏,maliangwen
function changetitle_5(id){
	if (id==1){
		
		document.getElementById("ring").style.display="";
		document.getElementById("pic").style.display="none";
		document.getElementById("play").style.display="none";
		document.getElementById("game").style.display="none";
		document.getElementById("cartoon").style.display="none";
		document.getElementById("nouse").style.display="none";
		
		document.getElementById("img01").style.display="";
		document.getElementById("img02").style.display="none";
		
		document.getElementById("img03").style.display="none";
		document.getElementById("img04").style.display="";
		
		document.getElementById("img05").style.display="none";
		document.getElementById("img06").style.display="";
		
		document.getElementById("img07").style.display="none";
		document.getElementById("img08").style.display="";
		
		document.getElementById("img09").style.display="none";
		document.getElementById("img10").style.display="";
		
		document.getElementById("imgnull").style.display="none";
	}
	if(id==2){
	
		document.getElementById("ring").style.display="none";
		document.getElementById("pic").style.display="";
		document.getElementById("play").style.display="none";
		document.getElementById("game").style.display="none";
		document.getElementById("cartoon").style.display="none";
		document.getElementById("nouse").style.display="none";
		
		document.getElementById("img01").style.display="none";
		document.getElementById("img02").style.display="";
		
		document.getElementById("img03").style.display="";
		document.getElementById("img04").style.display="none";
		
		document.getElementById("img05").style.display="none";
		document.getElementById("img06").style.display="";
		
		document.getElementById("img07").style.display="none";
		document.getElementById("img08").style.display="";
		
		document.getElementById("img09").style.display="none";
		document.getElementById("img10").style.display="";
		
		document.getElementById("imgnull").style.display="none";
	}
	if(id==3){

		document.getElementById("ring").style.display="none";
		document.getElementById("pic").style.display="none";
		document.getElementById("play").style.display="";
		document.getElementById("game").style.display="none";
		document.getElementById("cartoon").style.display="none";
		document.getElementById("nouse").style.display="none";
		
		
		document.getElementById("img01").style.display="none";
		document.getElementById("img02").style.display="";
		
		document.getElementById("img03").style.display="none";
		document.getElementById("img04").style.display="";
		
		document.getElementById("img05").style.display="";
		document.getElementById("img06").style.display="none";
		
		document.getElementById("img07").style.display="none";
		document.getElementById("img08").style.display="";
		
		document.getElementById("img09").style.display="none";
		document.getElementById("img10").style.display="";
		
		document.getElementById("imgnull").style.display="none";
	}
	if(id==4){

		document.getElementById("ring").style.display="none";
		document.getElementById("pic").style.display="none";
		document.getElementById("play").style.display="none";
		document.getElementById("game").style.display="";
		document.getElementById("cartoon").style.display="none";
		document.getElementById("nouse").style.display="none";
		
		document.getElementById("img01").style.display="none";
		document.getElementById("img02").style.display="";
		
		document.getElementById("img03").style.display="none";
		document.getElementById("img04").style.display="";
		
		document.getElementById("img05").style.display="none";
		document.getElementById("img06").style.display="";
		
		document.getElementById("img07").style.display="";
		document.getElementById("img08").style.display="none";
		
		document.getElementById("img09").style.display="none";
		document.getElementById("img10").style.display="";
		
		document.getElementById("imgnull").style.display="none";
	}
	if(id==5){
	
		document.getElementById("ring").style.display="none";
		document.getElementById("pic").style.display="none";
		document.getElementById("play").style.display="none";
		document.getElementById("game").style.display="none";
		document.getElementById("cartoon").style.display="";
		document.getElementById("nouse").style.display="none";
		
	
		document.getElementById("img01").style.display="none";
		document.getElementById("img02").style.display="";
		
		document.getElementById("img03").style.display="none";
		document.getElementById("img04").style.display="";
		
		document.getElementById("img05").style.display="none";
		document.getElementById("img06").style.display="";
		
		document.getElementById("img07").style.display="none";
		document.getElementById("img08").style.display="";
		
		document.getElementById("img09").style.display="";
		document.getElementById("img10").style.display="none";
		
		document.getElementById("imgnull").style.display="none";
	}
}


//本函数用于列表页面 左边菜单 鼠标放上，移开的效果
function menu_mouse(title_on,title_off, arrow_on, arrow_off){
	document.getElementById(title_on).style.display="";
	document.getElementById(title_off).style.display="none";
	document.getElementById(arrow_on).style.display="";
	document.getElementById(arrow_off).style.display="none";
}


function showWid()
{
	//window.open("https://cn.samsungmobile.com/cn/member/register_01.jsp","","location=no,directories=no,resizable=no,status=no,toolbar=no,menubar=no,width=717,height=600,scrollbars=yes,top=50,left=150");

	//peng 20060625
	window.open("http://cn.samsungmobile.com/sfcas/3341/101/index.jsp","","location=no,directories=no,resizable=no,status=no,toolbar=no,menubar=no,width=717,height=600,scrollbars=yes,top=50,left=150");
}
