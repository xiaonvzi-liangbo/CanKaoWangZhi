function doZoom(size){
	document.getElementById('zoom').style.fontSize=size+'px'
}
//双击鼠标滚动屏幕的代码
var currentpos,timer;
function initialize()
{
timer=setInterval ("scrollwindow ()",60);
}
function sc()
{
clearInterval(timer);
}
function scrollwindow()
{
currentpos=document.body.scrollTop;
window.scroll(0,++currentpos);
if (currentpos !=document.body.scrollTop)
sc();
}
document.onmousedown=sc
document.ondblclick=initialize
<!--
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->
	function doPrint()
{
	var Title = document.all.Title.innerHTML;
	var Time = document.all.Time.innerHTML;
	var Position = document.all.Position.innerHTML;
	var mContent = document.all.Content.innerHTML;
	var Images = document.all.Image.innerHTML;
var PartI = ' \
<style type="text/css"><!-- \
--></style><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bordercolor="#FFCC66" > \
 <tr>  <td bgcolor="#FFCC00" width="465"><b><font class="font-family: 宋体 ;font-size: 9pt">欢迎访问新世纪健康网</font>  <font face="Verdana, Arial, Helvetica, sans-serif" size="1"> - WWW.WELLW.COM</font></b> </td> \
    <td bgcolor="#FFDC71" width="23">&nbsp;</td>    <td bgcolor="#FFE8A2" width="13">&nbsp;</td>    <td bgcolor="#FFF1BB" width="12">&nbsp;</td>    <td bgcolor="#FFF8D9" width="15">&nbsp;</td> \
    <td bgcolor="#FFF9DD" width="34">&nbsp;</td>  </tr>  <tr bgcolor="#EAEAEA">     <td class="p9" colspan="6">       <div align="right"><font color="#000000"> ';

var PartII = Position+'</font></div>    </td>  </tr>  <tr><td colspan="6">      <hr size="1" noshade>    </td></tr>  <tr valign="top" align="left"> \
    <td colspan="6">       <table width="100%" border="0" cellspacing="0" cellpadding="5" align="center" class="main">        <tr>           <td>  ';
	
var PartIII= '<div align="center"><b>'+Title+'</b></div>';
var Part4='</td></tr><tr><td> <div align="center" class="p9">'+Time+'</div>';
var Part5='</td></tr><tr><td align="center">'+Images+'</td></tr><tr> <td>'+mContent+'</td></tr></table> </td></tr> <tr> <td colspan="6">      <hr noshade size="1"></td>  </tr>  <tr>     <td bgcolor="#FFCC66" colspan="6">       <div align="right" class="p9"><b><font face="宋体" font-size="9pt">新世纪健康网版权所有</b></font></div> </td>  </tr></table>';
document.body.innerHTML = PartI+PartII+PartIII+Part4+Part5;
window.print();

}