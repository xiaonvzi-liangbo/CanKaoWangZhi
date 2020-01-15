function showmenuie5(dhs1,dhs2,dhs3) {
if (dhs2!=undefined){ 	
if(dhs1==1)
{
pq1.innerHTML="<a class='s1' href=\"javascript:;\" onClick=\"window.open('/web/"+dhs1+"/index.asp?web_id="+dhs2+"','cheng','scrollbars=no,resizable=no,width=920,height=565,menubar=no,top=10,left=10')\">查看主页</a>"
pq2.innerHTML="<a class='s1' href=\"/my/getprice/sendnewmessage.asp?selected_friend_id="+dhs3+"\" target=\"_blank\">发送信息</a>"
pq3.innerHTML="<a class='s1' href=\"/my/love/addfriend.asp?user="+dhs3+"\" target=\"_blank\">加入好友</a>"
//pq4.innerHTML="<a class='s1' href=\"/yqliaotian.asp?user="+dhs3+"\" target=\"_blank\">邀请聊天</a>"
}

else{
pq1.innerHTML="<a class='s1' href=\"javascript:;\" onClick=\"window.open('/web/"+dhs1+"/index.asp?web_id="+dhs2+"','cheng','scrollbars=no,resizable=no,width=950,height=600,menubar=no,top=10,left=10')\">查看主页</a>"	
pq2.innerHTML="<a class='s1' href=\"/my/getprice/sendnewmessage.asp?selected_friend_id="+dhs3+"\" target=\"_blank\">发送信息</a>"
pq3.innerHTML="<a class='s1' href=\"/my/love/addfriend.asp?user="+dhs3+"\" target=\"_blank\">加入好友</a>"
//pq4.innerHTML="<a class='s1' href=\"/yqliaotian.asp?user="+dhs3+"\" target=\"_blank\">邀请聊天</a>"
}
}else{	
pq1.innerHTML="<a class='s1' href=\"javascript:;\" onClick=\"window.open('/web/1/index.asp?web_username="+dhs1+"','cheng','scrollbars=no,resizable=no,width=920,height=565,menubar=no,top=10,left=10')\">查看主页</a>"	
pq2.innerHTML="<a class='s1' href=\"/my/getprice/sendnewmessage.asp?selected_friend_id="+dhs1+"\" target=\"_blank\">发送信息</a>"
pq3.innerHTML="<a class='s1' href=\"/my/love/addfriend.asp?user="+dhs1+"\" target=\"_blank\">加入好友</a>"
//pq4.innerHTML="<a class='s1' href=\"/yqliaotian.asp?user="+dhs1+"\" target=\"_blank\">邀请聊天</a>"
}
var rightedge = document.body.clientWidth-event.clientX;
var bottomedge = document.body.clientHeight-event.clientY;
if (rightedge < ie5menu.offsetWidth)
ie5menu.style.left = document.body.scrollLeft + event.clientX - ie5menu.offsetWidth;
else
ie5menu.style.left = document.body.scrollLeft + event.clientX;
if (bottomedge < ie5menu.offsetHeight)
ie5menu.style.top = document.body.scrollTop + event.clientY - ie5menu.offsetHeight;
else
ie5menu.style.top = document.body.scrollTop + event.clientY;
ie5menu.style.visibility = "visible";
window.event.cancelBubble=true
return false
}
function hidemenuie5() {
ie5menu.style.visibility = "hidden";
} 
document.body.onclick = hidemenuie5;
/*
function initToolTips()
{
	toolTipSTYLE = document.all.toolTipLayer.style;
    toolTipSTYLE.visibility = "visible";
    toolTipSTYLE.display = "none";
    document.onmousemove = moveToMouseLoc;
}
function toolTip(msg,pic1,pic2,pic3)
{
	var fg,bg;
	pics[0] = pic1;
	pics[1] = pic2;
	pics[2] = pic3;
  if(toolTip.arguments.length < 1) // hide
  {
    flag = false;
      //--图象过渡，淡出处理--
      if (!endaction) {toolTipSTYLE.display = "none";}
      if (rT) document.all("msg1").filters[1].Apply();
      if (bT) document.all("msg1").filters[2].Apply();
      document.all("msg1").filters[0].opacity=0;
      if (rT) document.all("msg1").filters[1].Play();
      if (bT) document.all("msg1").filters[2].Play();
      if (rT){ 
      if (document.all("msg1").filters[1].status==1 || document.all("msg1").filters[1].status==0){  
      toolTipSTYLE.display = "none";}
      }
      if (bT){
      if (document.all("msg1").filters[2].status==1 || document.all("msg1").filters[2].status==0){  
      toolTipSTYLE.display = "none";}
      }
      if (!rT && !bT) toolTipSTYLE.display = "none";
      //----------------------
  }
  else // show
  {
    if(!fg) fg = "#777777";



var rT=true;//允许图像过渡
var bT=true;//允许图像淡入淡出
var tw=50;//提示框宽度
var endaction=false;//结束动画
offsetX = 0;
offsetY = 20;
var toolTipSTYLE="";
var pics = new Array(3);
var n = 0;
var flag = false;
var nn = 0;
    if(!bg) bg = "#eeeeee";   
	var content =
    '<table id="msg1" name="msg1" border="0" cellspacing="0" cellpadding="1" bgcolor="' + fg + '" class="trans_msg"><td>' +
    '<table border="0" cellspacing="0" cellpadding="3" bgcolor="' + bg + 
    '"><td ><font face="宋体" color="' + fg +
    '" size="-1">' + msg +
    '</font></td></table></td></table>';
      document.all("toolTipLayer").innerHTML=content;
      toolTipSTYLE.display='block'
      var cssopaction=document.all("msg1").filters[0].opacity
      document.all("msg1").filters[0].opacity=0;
      if (rT) document.all("msg1").filters[1].Apply();
      if (bT) document.all("msg1").filters[2].Apply();
      document.all("msg1").filters[0].opacity=cssopaction;
      if (rT) document.all("msg1").filters[1].Play();
      if (bT) document.all("msg1").filters[2].Play();
	  flag = true;
	  nn ++;
	  setTimeout("show()",2000);
      //----------------------
  }
}

function show()
{
	  n ++;
	  if(flag && nn==1)
		setTimeout("show()",2000);
	  else
	  {
		  nn --;
		  return;
	  }	
	  document.all.prePic.src=pics[n%3];
	  //alert(pics[n%3]);
	  var cssopaction=document.all("prePic").filters[0].opacity;
      document.all("prePic").filters[0].opacity=0;
      if (rT) document.all("prePic").filters[1].Apply();
      if (bT) document.all("prePic").filters[2].Apply();
      document.all("prePic").filters[0].opacity=cssopaction;
      if (rT) document.all("prePic").filters[1].Play();
      if (bT) document.all("prePic").filters[2].Play();
}
function moveToMouseLoc(e)
{
    x = event.x + document.body.scrollLeft;
    y = event.y + document.body.scrollTop;
  	toolTipSTYLE.left = x + offsetX;
  	toolTipSTYLE.top = y + offsetY;
  	return true;
}
function showTheme(url,name,image1name,image2name,image3name)
{   
    var squal = ' WIDTH="128" HEIGHT="160"';        
    //document.write('<font STYLE="border-collapse: collapse; background-image: url(222/null.gif);'+'background-repeat:no-repeat; background-position: center center" BORDER="0" CELLSPACING="0" CELLPADDING="0">');
    
    document.write('<font STYLE="cursor:hand"  onmouseover="toolTip(\'<center><img class=trans_msg1 id=prePic name=prePic src='+image1name+'></center>\', \''+image1name+'\', \''+image2name+'\', \''+image3name+'\')" onmouseout=toolTip()>');    
    document.write(name);
    document.write('</font>');
}
*/






