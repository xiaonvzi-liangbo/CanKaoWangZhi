function getObject(id) 
{
	if(document.getElementById) 
	{
		return document.getElementById(id);
	}
	else if(document.all)
	{
		return document.all[id];
	}
	else if(document.layers)
	{
		return document.layers[id];
	}
}

function xmlhttp()
{
	var A=null;
	try
	{
		A=new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch(e)
	{
		try
		{
			A=new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(oc)
		{
			if (typeof XMLHttpRequest != "undefined" );
			{
				A=new XMLHttpRequest();
			}
		}
	}			
	return A;
}

function set_select(select_obj_id,code)
{
	end = getObject(select_obj_id).outerHTML.search('>')+1;
	getObject(select_obj_id).outerHTML = getObject(select_obj_id).outerHTML.substr(0,end)+code+"</select>";
}

/**
 * 设置下拉选框数据
 * target_id 为目标下拉选框的ID号
 * code_url 为请求数据的服务端的URL
 */
 

function get_listbox(target_id,code_url)
{
	var request_url;
	var request_str;
	var tmp = code_url.split('?');
	
	request_url = tmp[0];
	if(tmp.length == 2)
	{
		request_str = tmp[1];
	}
	
	try 
	{
		oXmlHttp.open("POST", request_url, true);
		oXmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		oXmlHttp.onreadystatechange = function() 
		{
			if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) 
			{
				//alert(oXmlHttp.responseText);
				set_select(target_id,oXmlHttp.responseText);
			}
		}
		oXmlHttp.send(request_str);	
	
	} catch (e) {
		// do nothing
	}
}

var oXmlHttp = xmlhttp();
 function getReplayResult(target_id,code_url,value,table,uid)
 {
 var filterValue=value.replace(/^\s*/i,'');
 filterValue=escape(filterValue);
   len = filterValue.length;
	if (len < 2 ){
		alert("输入的字符不能少于2个");
		return ;
	}
	if (len > 500){
		alert("输入的字符不能多于500个");
		return ;
	}
	var strreg=/\[swf\]\d+.gif\[\/swf\]/img;
	var ms=value.match(strreg);

    if(ms!=null)
    {
	  if(ms.length>1)
	   {
	     alert("回复的魔法表情不能大于2个");
	     return;
	   }
	 }

 
 try 
	{
	    
	 
	    
		oXmlHttp.open("POST","WebForm1.aspx?hiddenCid="+code_url+"&uid="+uid+"&table="+table,true);
		oXmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		oXmlHttp.send('memo='+filterValue);
		
		oXmlHttp.onreadystatechange = function() 
		  
		
		{
			if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) 
			{
				//alert(oXmlHttp.responseText);
				
				var tmp=target_id.innerHTML;
				var num=tmp.indexOf("<SPAN");
				if(num>0)
				{
				tmp=tmp.substring(0,num)
				}
				var result=oXmlHttp.responseText;
				if(result=="$%^&*@!+)sgsg#$&*@#")
				{
				alert("对不起!出现意外，请稍后再试！");
				}
				
				else
				{
				target_id.innerHTML=tmp+"<SPAN><DIV class='plh'><HR width='100%' SIZE='1'>回复:"+result+"</DIV></SPAN>";
				}
				
				
				
			}
		}
		oXmlHttp.send(request_str);	
	
	} catch (e) {
		// do nothing
	}
 
 }
 
 
 function IndexReadDiss(userid,table)
 {

     
        ReadDiss1(userid,table)
        var url;
        switch(table)
        {
        case "havemusic":
        url="myInbox/manager_myMusicDiss.aspx?pageIndex=0";
        break;
        case "havediary":
        url="myInbox/Manager_myDiaryDiss.aspx?pageIndex=0";
        break;
		case "havevideo":
		url='myInbox/manager_myVidoDiss.aspx?pageIndex=0' ;
        break;
		case "havephoto":
		url='myInbox/manager_myAlbum.aspx?pageIndex=0' ;
        break;
        case "havegift":
		url='Gift/Gife_list.aspx?pageIndex=0' ;
        break;
        case "haveword":
		url='myInbox/manager_myLeaveWord.aspx?pageIndex=0' ;
        break;
        case "havesyslog":
        url='myInbox/MySysLog.aspx?pageIndex=0' ;
        break;
        default:
		url='myInbox/manager_myAlbum.aspx?pageIndex=0' ;
        break;
        }
     window.location.href=url;
				
 }
 
 function IndexReadDiss2(userid,table)
 {

     
        ReadDiss1(userid,table)
        var url;
        switch(table)
        {
        case "haveword_re":
        url='myInbox/manager_myLeaveWord1.aspx?pageIndex=0';
        break;
        case "havediary_re":
        url='myInbox/Manager_myDiaryDiss1.aspx?pageIndex=0';
        break;
        case "havephoto_re":
        url='myInbox/manager_myAlbum1.aspx?pageIndex=0';
        break;
        case "havemusic_re":
        url='myInbox/manager_myMusicDiss1.aspx?pageIndex=0';
        break;
        case "havevideo_re":
        url='myInbox/manager_myVidoDiss1.aspx?pageIndex=0';
        break;
        default:
		url='myInbox/manager_myLeaveWord1.aspx?pageIndex=0' ;
        break;
        }
     window.location.href=url;
				
 }
  
  function ReadDiss1(userid,table)
 {
 try 
	{
	
		oXmlHttp.open("POST","myInbox/WebForm2.aspx?userid="+userid+"&table="+table,true);
		oXmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		oXmlHttp.send();
		oXmlHttp.onreadystatechange = function() 
		
		{
			if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) 
			{
	
				
				
			//	alert(oXmlHttp.responseText);
				
				
			}
		}
	} catch (e) {
		// do nothing
	}
 
 }
 
 
 
  function ReadDiss(userid,table)
 {
 try 
	{
	
		oXmlHttp.open("POST","WebForm2.aspx?userid="+userid+"&table="+table,true);
		oXmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
		oXmlHttp.send();
		oXmlHttp.onreadystatechange = function() 
		
		{
			if (oXmlHttp.readyState == 4 && oXmlHttp.status == 200) 
			{
	
				
				
			//	alert(oXmlHttp.responseText);
				
				
			}
		}
	} catch (e) {
		// do nothing
	}
 
 }
 function NoRead(obj,userid,table)
{
var tmpStr=obj.innerHTML;

var num=tmpStr.indexOf("color=red>");
var ss=tmpStr.substring(num+10,num+11);

if(ss!=0)

ReadDiss(userid,table);

}
function addh(){
    				if(parseFloat(navigator.appVersion.match(/MSIE (\d\.*\d*)/i)[1])<7){
						var newHeight	=window.parent.frames["padbcont_min_right"].document.body.scrollHeight;
					} 
					else {
						var newHeight	=window.parent.frames["padbcont_min_right"].document.documentElement.scrollHeight;	
					}
					parent.document.getElementById("padbcont_min_right").height = newHeight+145;
}
function addhmyCss(){
    				if(parseFloat(navigator.appVersion.match(/MSIE (\d\.*\d*)/i)[1])<7){
						var newHeight	=window.parent.frames["padbcont_min_right"].document.body.scrollHeight;
					} 
					else {
						var newHeight	=window.parent.frames["padbcont_min_right"].document.documentElement.scrollHeight;	
					}
					parent.document.getElementById("padbcont_min_right").height = newHeight+30;
}
function decrease(){
    				if(parseFloat(navigator.appVersion.match(/MSIE (\d\.*\d*)/i)[1])<7){
						var newHeight	=window.parent.frames["padbcont_min_right"].document.body.scrollHeight;
					} 
					else {
						var newHeight	=window.parent.frames["padbcont_min_right"].document.documentElement.scrollHeight;	
					}
					parent.document.getElementById("padbcont_min_right").height = newHeight-145;
}