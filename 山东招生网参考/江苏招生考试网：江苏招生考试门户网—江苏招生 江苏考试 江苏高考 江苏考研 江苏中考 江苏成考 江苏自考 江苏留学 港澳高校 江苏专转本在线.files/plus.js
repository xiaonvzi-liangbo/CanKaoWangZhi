document.write ('<style type="text/css">');
document.write ('.tablebody1 {BACKGROUND: #eaf4cb; LINE-HEIGHT: normal}');
document.write ('.tableborder {BACKGROUND: #83aa0a; WIDTH: 898px; TEXT-ALIGN: left}');
document.write ('.tableborder1 th { font-weight: bold; font-size: 12px; ');
document.write ('background-color: #83aa0a; background-repeat: repeat; ');
document.write ('background-attachment: scroll; color: #ffffff; height: 20px;background-position: 0% }');
document.write ('.tableborder1 P{ PADDING-LEFT: 10px; FLOAT: left}');
document.write ('</style>');
//超级链接特效
var pltsPop=null;
var pltsoffsetX = 5;   // 弹出窗口位于鼠标左侧或者右侧的距离；3-12 合适
var pltsoffsetY = 5;  // 弹出窗口位于鼠标下方的距离；3-12 合适
var pltsPopbg="#FFFFEE"; //背景色
var pltsPopfg="#111111"; //前景色
var pltsTitle="";
document.write('<div id=pltsTipLayer style="display: none;position: absolute; z-index:10001"></div>');
function pltsinits()
{
    document.onmouseover   = plts;
    document.onmousemove = moveToMouseLoc;
}
function plts()
{  var o=event.srcElement;
    if(o.alt!=null && o.alt!=""){o.dypop=o.alt;o.alt=""};
    if(o.title!=null && o.title!=""){o.dypop=o.title;o.title=""};
    pltsPop=o.dypop;
    if(pltsPop!=null&&pltsPop!=""&&typeof(pltsPop)!="undefined")
    {
 pltsTipLayer.style.left=-1000;
 pltsTipLayer.style.display='';
 var Msg=pltsPop.replace(/\n/g,"<br>");
 Msg=Msg.replace(/\0x13/g,"<br>");
 var re=/\{(.[^\{]*)\}/ig;
 if(!re.test(Msg))pltsTitle="江苏招生考试网";
 else{
   re=/\{(.[^\{]*)\}(.*)/ig;
   pltsTitle=Msg.replace(re,"$1")+" ";
   re=/\{(.[^\{]*)\}/ig;
   Msg=Msg.replace(re,"");
   Msg=Msg.replace("<br>","");}
   var attr=(document.location.toString().toLowerCase().indexOf("list.asp")>0?"nowrap":"");
        var content =
       '<table id=toolTipTalbe border=0><tr><td width="100%"><table class=tableborder1 cellspacing="1" cellpadding="0" style="width:100%">'+
       '<tr id=pltsPoptop><th height=22 valign=middle><b><p id=topleft align=center>↖'+pltsTitle+'</p><p id=topright align=center style="display:none">'+pltsTitle+'↗</font></b></th></tr>'+
       '<tr><td "+attr+" class=tablebody1 style="padding-left:14px;padding-right:14px;padding-top: 6px;padding-bottom:6px;line-height:135%">'+Msg+'</td></tr>'+
       '<tr id=pltsPopbot style="display:none"><th height=22 valign=bottom><b><p id=botleft align=center>↙'+pltsTitle+'</p><p id=botright align=center style="display:none">'+pltsTitle+'↘</font></b></th></tr>'+
       '</table></td></tr></table>';
        pltsTipLayer.innerHTML=content;
  var std_msgdocW = WebForm_GetClentX();
        toolTipTalbe.style.width=Math.min(pltsTipLayer.clientWidth,std_msgdocW/2.2);
        moveToMouseLoc();
        return true;
       }
    else
    {
     pltsTipLayer.innerHTML='';
       pltsTipLayer.style.display='none';
        return true;
    }
}

function moveToMouseLoc()
{
 if(pltsTipLayer.innerHTML=='')return true;
 var MouseX=event.x;
 var MouseY=event.y;
 //window.status=event.y;
 var popHeight=pltsTipLayer.clientHeight;
 var popWidth=pltsTipLayer.clientWidth;
 var std_msgdocH = WebForm_GetClentY();
var std_msgdocW = WebForm_GetClentX();
 if(MouseY+pltsoffsetY+popHeight>std_msgdocH)
 {
    popTopAdjust=-popHeight-pltsoffsetY*1.5;
    pltsPoptop.style.display="none";
    pltsPopbot.style.display="";
 }
  else
 {
     popTopAdjust=0;
    pltsPoptop.style.display="";
    pltsPopbot.style.display="none";
 }
 if(MouseX+pltsoffsetX+popWidth>std_msgdocW)
 {
  popLeftAdjust=-popWidth-pltsoffsetX*2;
  topleft.style.display="none";
  botleft.style.display="none";
  topright.style.display="";
  botright.style.display="";
 }
 else
 {
  popLeftAdjust=0;
  topleft.style.display="";
  botleft.style.display="";
  topright.style.display="none";
  botright.style.display="none";
 }
 var dhtscrolltop=WebForm_GetScrollY();
 var dhtscrollLeft=WebForm_GetScrollX();
 pltsTipLayer.style.left=MouseX+pltsoffsetX+dhtscrollLeft+popLeftAdjust;
 pltsTipLayer.style.top=MouseY+pltsoffsetY+dhtscrolltop+popTopAdjust;
   return true;
}
pltsinits();
//鼠标提示代码


function WebForm_GetClentX() 
{
    if (typeof window.pageYOffset != 'undefined') 
    {
        return window.pageXOffset;
    }
    else 
    {
        if (document.documentElement && document.documentElement.clientWidth) 
        {
            return document.documentElement.clientWidth;
        }
        else if (document.body) 
        {
            return document.body.clientWidth;
        }
    }
    return 0;
}
function WebForm_GetClentY() 
{
    if (typeof window.pageYOffset != 'undefined') 
    {
        return window.pageYOffset;
    }
    else 
    {
        if (document.documentElement && document.documentElement.clientHeight) 
        {
            return document.documentElement.clientHeight;
        }
        else if (document.body) 
        {
            return document.body.clientHeight;
        }
    }
    return 0;
}

function WebForm_GetScrollX() 
{
    if (typeof window.pageYOffset != 'undefined') 
    {
        return window.pageXOffset;
    }
    else 
    {
        if (document.documentElement && document.documentElement.scrollLeft) 
        {
            return document.documentElement.scrollLeft;
        }
        else if (document.body) 
        {
            return document.body.scrollLeft;
        }
    }
    return 0;
}
function WebForm_GetScrollY() 
{
    if (typeof window.pageYOffset != 'undefined') 
    {
        return window.pageYOffset;
    }
    else 
    {
        if (document.documentElement && document.documentElement.scrollTop) 
        {
            return document.documentElement.scrollTop;
        }
        else if (document.body) 
        {
            return document.body.scrollTop;
        }
    }
    return 0;
}

