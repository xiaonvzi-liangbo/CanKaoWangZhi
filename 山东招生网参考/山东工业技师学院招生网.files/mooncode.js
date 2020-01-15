/////////////////////////////
////  月影社区 WF66.COM  ////
////  JS  调用 VER 4.0   ////
/////////////////////////////

//背景图片
//if (screen.width==1024){;document.write("<body background=../../images/bg.gif>");}else{;document.write("<body background=images/bg2.gif>");}

//确认框
function checkclick(msg){if(confirm(msg)){event.returnValue=true;}else{event.returnValue=false;}}

//边框
function bian_a(content){ 
document.write("<table cellSpacing=0 cellPadding=0 border=0 align="+content+"><tr><td height=8 width=8><img src=images/bian/bg_0ltop.gif></td><td background=images/bian/bg_01.gif></td><td><img src=images/bian/bg_0rtop.gif></td></tr><tr><td background=images/bian/bg_03.gif></td><td vAlign=center align=middle bgColor=#ffffff>")
}

function bian_b(){
document.write("</td><td background=images/bian/bg_04.gif></td></tr><tr><td><img src=images/bian/bg_0lbottom.gif></td><td background=images/bian/bg_02.gif></td><td height=8 width=8><img src=images/bian/bg_0rbottom.gif></td></tr></table>")
}

//横点线
function xian(){
document.write("<center><table border=0 width=760  cellpadding=0 cellspacing=0 bgcolor=#FFFFFF background=images/t-bg-5.gif height=1><tr><td></td></tr></table></center>")
}

function xian2(){
document.write("<center><table border=0 width=100%  cellpadding=0 cellspacing=0 bgcolor=#FFFFFF background=images/t-bg-5.gif height=1><tr><td></td></tr></table></center>")
}

//显示问候
function wenhou(){
hour=new Date().getHours()
if(hour < 6){document.write(" 凌晨好! ")}
else if (hour < 9){document.write(" 早上好! ")}
else if (hour < 12){document.write(" 上午好! ")}
else if (hour < 14){document.write(" 中午好! ")}
else if (hour < 17){document.write(" 下午好! ")}
else if (hour < 19){document.write(" 傍晚好! ")}
else if (hour < 22){document.write(" 晚上好! ")}
else {document.write(" 夜里好! ")}
}

//MAIL登陆
function gook() {
if (usernameshow.value == "")
{
alert("用户名不可为空");
usernameshow.focus();
return ;
}

if (pwshow.value == "")
{
alert("密码不可为空");
pwshow.focus();
return ;
}
f1.username.value = usernameshow.value;
f1.pwhidden.value = encode(pwshow.value, parseInt(f1.picnum.value));
f1.submit();
}

function encode(datastr, bassnum) {
var tempstr;
var tchar;
var newdata = "";
for (var i = 0; i < datastr.length; i++)
{
tchar = 65535 + bassnum - datastr.charCodeAt(i);
tchar = tchar.toString();
while(tchar.length < 5)
{
tchar = "0" + tchar;
}
newdata = newdata + tchar;
}
return newdata;
}




//显示DIV
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
