lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
    diffY = document.documentElement.scrollTop;
else if (document.body)
    diffY = document.body.scrollTop
else
    {/*Netscape stuff*/}
    

percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("dl1").style.top=parseInt(document.getElementById("dl1").style.top)+percent+"px";
document.getElementById("dl2").style.top=parseInt(document.getElementById("dl1").style.top)+percent+"px";
document.getElementById("fb1").style.top=parseInt(document.getElementById("fb1").style.top)+percent+"px";
document.getElementById("fb2").style.top=parseInt(document.getElementById("fb2").style.top)+percent+"px";
lastScrollY=lastScrollY+percent; 

}
str_dl1="<DIV id=\"dl1\" style='left:5px;POSITION:absolute;TOP:32px;'><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0' width='36' height='150'  id=\"fdl\"><param name='movie' value='http://www.sooxue.com/flash/fsx2008.swf' /><param name='quality' value='high' /><param name='wmode' value='opaque'> <embed wmode='opaque' src='http://www.sooxue.com/flash/fsx2008.swf' quality='high' pluginspage='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash' width='36' height='150'></embed></object></div>"

str_dl2="<DIV id=\"dl2\" style='right:5px;POSITION:absolute;TOP:32px;' ><object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0' width='36' height='150'  id=\"fdl\"><param name='movie' value='http://www.sooxue.com/flash/fsx2008.swf' /><param name='quality' value='high' /><param name='wmode' value='opaque'><embed src='http://www.sooxue.com/flash/fsx2008.swf' quality='high' wmode='opaque' pluginspage='http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash' width='36' height='150'></embed></object></div>"

str_fb1 = "<div id=\"fb1\" style='left:10px;position:absolute;top:450px;'><a href='http://gaozhao.sooxue.com' target='_blank'><img src='AD/UploadADPic/200704/20070418135019103.gif' width=100 height=83 border=0 /></a></div>"

str_fb2 = "<div id=\"fb2\" style='right:10px;position:absolute;top:450px;'><a href='http://www.henu.edu.cn' target='_blank'><img src='images/hnfb.gif' width=100 height=83 border=0 /></a></div>"

document.write("<SCRIPT language=JavaScript event=FSCommand() for=fdl>dl1.style.visibility='hidden';dl2.style.visibility='hidden';fb1.style.visibility='hidden';fb2.style.visibility='hidden';</SCRIPT>");


document.write(str_dl1); 
document.write(str_dl2);
document.write(str_fb1); 
document.write(str_fb2); 
window.setInterval("heartBeat()",1);
