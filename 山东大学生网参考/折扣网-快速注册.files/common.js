var loadImg = new Image();
loadImg.src="../image/loading.gif";

function setDomain()
{
     document.domain="zhekou.com";
}

function ChannelAction(obj,cssName){if($(obj).className!="Channel_On"){$(obj).className=cssName;}}
function ThisChannelClass(btnID){$(btnID).className="Channel_On";}
function MenuAction(obj,cssName){$(obj).className=cssName;}

function mouseAction(obj,arrayid,_flag){
    var overbg = new Array("#ffeeee");
    var outbg = new Array("#fafafa");
    if(_flag=="1"){
       obj.style.backgroundColor = overbg[arrayid];
    }
    else{
       obj.style.backgroundColor = outbg[arrayid];
    }
}

function getPageScroll(){
  var yScroll;
  if (self.pageYOffset) {
    yScroll = self.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop){   // Explorer 6 Strict
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {// all other Explorers
    yScroll = document.body.scrollTop;
  }

  arrayPageScroll = new Array('',yScroll) 
  return arrayPageScroll;
}

function getPageSize(){
  var xScroll, yScroll;  
  if (window.innerHeight && window.scrollMaxY) {
    xScroll = document.body.scrollWidth;
    yScroll = window.innerHeight + window.scrollMaxY;
  } else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
    xScroll = document.body.scrollWidth;
    yScroll = document.body.scrollHeight;
  } else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
    xScroll = document.body.offsetWidth;
    yScroll = document.body.offsetHeight;
  }

  var windowWidth, windowHeight;
  if (self.innerHeight) {  // all except Explorer
    windowWidth = self.innerWidth;
    windowHeight = self.innerHeight;
  } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
    windowWidth = document.documentElement.clientWidth;
    windowHeight = document.documentElement.clientHeight;
  } else if (document.body) { // other Explorers
    windowWidth = document.body.clientWidth;
    windowHeight = document.body.clientHeight;
  }  
  
  // for small pages with total height less then height of the viewport
  if(yScroll < windowHeight){
    pageHeight = windowHeight;
  } else { 
    pageHeight = yScroll;
  }

  if(xScroll < windowWidth){  
    pageWidth = windowWidth;
  } else {
    pageWidth = xScroll;
  }

  arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight) 
  return arrayPageSize;
} 

function doScrollPage(scrolltop){
  if (self.pageYOffset) {
    self.pageYOffset=scrolltop;
  } else if (document.documentElement && document.documentElement.scrollTop){   // Explorer 6 Strict
    document.documentElement.scrollTop=scrolltop;
  } else if (document.body) {// all other Explorers
    document.body.scrollTop=scrolltop;
  }
}

function showLoading(_id,_content){
     if($(_id)==null){var loadDivObj = document.createElement("div");loadDivObj.className = "loadingdiv";loadDivObj.id = _id;loadDivObj.EventInit = false;document.body.appendChild(loadDivObj);}else{var loadDivObj = $(_id);}if (_content){loadDivObj.innerHTML = "<div  class=\"loadingtext\" style=\"padding-top:5px;\"><img src=\"../image/loading.gif\"></div><div class=\"loadingtext\">"+_content+"</div>";}else{loadDivObj.innerHTML = "<div  class=\"loadingtext\" style=\"padding-top:5px;\"><img src=\"../image/loading.gif\"></div><div class=\"loadingtext\">正在载入数据，请稍后...</div>";}
}
function showInputErr(inputid,_id,_content,pointx,pointy){
     if($(_id)==null){var errorDivObj = document.createElement("div");errorDivObj.className = "errordiv";errorDivObj.id = _id;errorDivObj.EventInit = false;document.body.appendChild(errorDivObj);}else{var errorDivObj = $(_id);}if (_content){errorDivObj.innerHTML = _content;}else{errorDivObj.innerHTML = "输入错误";}
     showPositionDiv($(inputid),_id,pointx,pointy);
}
function hideInputErr(_id){
  if($(_id))Element.hide(_id)
}
function showCover(){
    if($("divPageCover")==null){
      var coverDivObj = document.createElement("div");coverDivObj.className = "pagecover";coverDivObj.id = "divPageCover";coverDivObj.EventInit = false;document.body.appendChild(coverDivObj);
    }
    var objst = $("divPageCover").style;
    objst.display="none";
    objst.width = "100%";
    objst.height = getPageSize()[1].toString()+"px";
    objst.filter = "alpha(opacity=70)";objst.opacity = 70/100;objst.MozOpacity = 70/100;
    Element.show("divPageCover");
}

function pageClear(){
  var allselect = document.getElementsByTagName("select");
  for (var i=0; i<allselect.length; i++) allselect[i].style.visibility = "hidden";
}

function pageUnClear(){
    if($("divPageCover") && $("divPageCover").style.display!="none"){
       Effect.toggle("divPageCover",'appear',{duration:0.3});
    }
    var objselect = document.getElementsByTagName("select");
    for (var i=0; i<objselect.length; i++) objselect[i].style.visibility = "visible";
}

function showDialog(ihtml,wt,ht,ptx,pty){
    if($("divPageDialog")==null){
       var dialogDivObj = document.createElement("div");dialogDivObj.className = "pagedialog";dialogDivObj.id = "divPageDialog";dialogDivObj.EventInit = false;document.body.appendChild(dialogDivObj);
    }
    var objst = $("divPageDialog").style;
    var psize = getPageSize();
    var ssize = getPageScroll();
    objst.display="none";
    objst.height="auto";
    objst.width = wt.toString()+"px";
    objst.top = ((parseInt(psize[3].toString())-ht)/2+parseInt(ssize[1].toString())+pty).toString() + "px";
    objst.left = ((parseInt(psize[2].toString())-wt)/2+ptx).toString() + "px";
    $("divPageDialog").innerHTML = ihtml;
    Effect.toggle("divPageDialog",'appear',{duration:0.3});
    pageClear();
}

function hideDialog(){
   if($("divPageDialog"))Effect.toggle("divPageDialog",'appear',{duration:0.3})
   pageUnClear();
}

function zoommenu(_menudiv,_btnid){
  Effect.toggle(_menudiv,'blind',{duration:0.5});
  if($(_menudiv).opened){
    $(_btnid).src='../image/closed2.gif';
    $(_menudiv).opened=false;
  }
  else{
    $(_btnid).src='../image/opened2.gif';
    $(_menudiv).opened=true;
  }
  return false;
}


//显示特定层，X、Y随鼠标变动
function showPositionDiv(clickobj,divid,pointx,pointy)
{
    Element.hide(divid);
    Position.clone(clickobj, divid,{offsetTop:pointy,offsetLeft:pointx,setWidth:false,setHeight:false});
    Element.show(divid);
}

//放大图片
function PhotoZoom(clickobj,divid,pointx,pointy,src)
{
   Position.clone(clickobj, divid,{offsetTop:pointy,offsetLeft:pointx,setWidth:false,setHeight:false});
   $(divid).innerHTML = "<img src='"+src+"' width=120  GALLERYIMG='false'>";
   Effect.toggle(divid,'appear',{duration:0.5})
   return false;
}

//显示上传，不用iframe
function showUpload_()
{  
   var divupload= $("divupload");
   var clickobj=$("lm2");
   showPositionDiv(clickobj,divupload,-10,0,205,120)
  
}

//关闭上传
function close_upload()
{
   $("divupload").style.display="none";
}

//图片按比例缩放 
var imgzoomflag=false; 
function DrawImage(ImgD,allowWidth,allowHeight){ 
 if(ImgD.src==null){
   ImgD.src="../images/nophoto.gifx.jpg";
 }
 var image=new Image(); 
 var iwidth = allowWidth;  //定义允许图片宽度 
 var iheight = allowHeight;  //定义允许图片高度 
 image.src=ImgD.src; 
 if(image.width>0 && image.height>0){ 
 imgzoomflag=true; 
 if(image.width/image.height>= iwidth/iheight){ 
  if(image.width>iwidth){   
  ImgD.width=iwidth; 
  ImgD.height=(image.height*iwidth)/image.width; 
  }else{ 
  ImgD.width=image.width;   
  ImgD.height=image.height; 
  } 
  ImgD.alt=image.width+"×"+image.height; 
  } 
 else{ 
  if(image.height>iheight){   
  ImgD.height=iheight; 
  ImgD.width=(image.width*iheight)/image.height;   
  }else{ 
  ImgD.width=image.width;   
  ImgD.height=image.height; 
  } 
  ImgD.alt=image.width+"×"+image.height; 
  } 
 } 
}  

//标签加链接
function GetTagString(tags,tagtype)
{
    var temp = "";
    var arrTag = tags.split("&nbsp;");
    for (var i = 0; i < arrTag.length; i++)
    {
        if (i > 0) temp += "&nbsp;";
        temp += "<a href=\"../search/?tag=" + arrTag[i] + "&type=" + tagtype + "\" target=_blank>" + arrTag[i] + "</a>";
    }
    return temp;
}

//通用函数selecttext
function seltext(idstr){
  if($(idstr)!=null){
    return $(idstr).options[$(idstr).selectedIndex].text;
  }
  else{
    return "";
  }
}

//输入检测
function PhoneChk(obj){
     if(obj.value!=''){
      	if(!isTelphone(obj)){
      	   alert('联系电话只能输入下列字符\n 1234567890 - , 空格');
      	   return false;
      	}
      }
}

function MobileChk(obj){
  if(obj.value!=''){
   if(!checkMobile(obj.value)){
    alert('请输入正确的手机号码！');
    return false;
   }
  }
}

function isTelphone(pObj){
 var obj = eval(pObj);
 strRef = "1234567890 -,";
 for (i=0;i<obj.value.length;i++) {
  tempChar= obj.value.substring(i,i+1);
  if (strRef.indexOf(tempChar,0)==-1) {
   if(obj.type=="text") 
    obj.focus(); 
   return false; 
  }
 }
 return true;
}

function isNumber( s ){
    var regu = "^[0-9]+$";
    var re = new RegExp(regu);
    if (s.search(re) != -1) {
    return true;
    } else {
    return false;
    }
}

function checkMobile( s ){   
var regu =/^[1][3][0-9]{9}$/;
var re = new RegExp(regu);
if (re.test(s)) {
return true;
}else{
return false;
}
}

//格式转换
 function TextToHtml(chr) 
 { 
    if (chr == null) return ""; 
    chr = strReplace("<", "&lt;",chr); 
    chr = strReplace(">", "&gt;",chr); 
    chr = strReplace("\n", "<BR>",chr); 
    chr = strReplace(" ", "&nbsp;",chr); 
    chr = strReplace("'", "’",chr);
    chr = strReplace("\"", "”",chr); 
    return chr; 
 }
 
  function HtmlToText(chr) 
 { 
    if (chr == null) return ""; 
    chr = strReplace("<BR>","\n", chr); 
    chr = strReplace("<br>","\n", chr); 
    chr = strReplace("&lt;","<",chr); 
    chr = strReplace("&gt;",">", chr); 
    chr = strReplace("&nbsp;"," ",chr); 
    chr = strReplace("’", "'",chr); 
    chr = strReplace("”", "\"",chr); 
    return chr; 
 }
 
 function JsFormat(chr){
   if (chr == null) return "";
   chr = strReplace("'","''",chr); 
   return chr
 }
 
 function JsReFormat(chr){
   if (chr == null) return "";
   chr = strReplace("''","'",chr); 
   return chr
 }
        
//字符替换
function strReplace(search, replace, str){
 var regex = new RegExp(search, "g");
 return str.replace(regex, replace);
} 

function radvalue(_name){
  var _value = "";
  var obj = document.getElementsByName(_name);
  for(var i = 0 ; i< obj.length ; i++){
     if(obj[i].checked){
       _value = obj[i].value;
       break;
     }
  }
  return _value;
}

//通用函数selecttext
function seltext(idstr){
  if($(idstr)!=null && $(idstr)!=""){
    return $(idstr).options[$(idstr).selectedIndex].text;
  }
  else{
    return "";
  }
}

function PageLoad(){
  if($("PageMain")!=null){
    if(document.body.scrollHeight<550){
      $("PageMain").style.height = "300px";
    }
  }
}

function ANP_checkInput(bid,mv){var el=document.getElementById(bid);var r=new RegExp("^\\s*(\\d+)\\s*$");
if(r.test(el.value)){if(RegExp.$1<1||RegExp.$1>mv){alert("页索引超出范围！");el.focus();el.select();return false;}
return true;}alert("页索引不是有效的数值！");el.focus();el.select();return false;}
function ANP_keydown(e,btnId){
var kcode;
if(window.event){kcode=e.keyCode;}
else if(e.which){kcode=e.which;}
var validKey=(kcode==8||kcode==46||kcode==37||kcode==39||(kcode>=48&&kcode<=57)||(kcode>=96&&kcode<=105));
if(!validKey){
if(kcode==13) document.getElementById(btnId).click();
if(e.preventDefault) e.preventDefault();event.returnValue=false;
}
}

function getElementTextNS(prefix, local, parentElem, index) {
    var result = "";
    if (prefix && isIE) {
        // IE/Windows way of handling namespaces
        result = parentElem.getElementsByTagName(prefix + ":" + local)[index];
    } else {
        // the namespace versions of this method 
        // (getElementsByTagNameNS()) operate
        // differently in Safari and Mozilla, but both
        // return value with just local name, provided 
        // there aren't conflicts with non-namespace element
        // names
        result = parentElem.getElementsByTagName(local)[index];
    }
    if (result) {
        // get text, accounting for possible
        // whitespace (carriage return) text nodes 
        if (result.childNodes.length > 1) {
            return result.childNodes[1].nodeValue;
        } else {
			if(result.childNodes.length < 1)
//				return "n/a";
                return "";
            return result.firstChild.nodeValue;    		
        }
		
    } else {
//        return "n/a";
          return "";
    }
}

function SetCookie(name,value)
{
    var Days = 1; 
    var exp  = new Date();   
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}



function getCookies(name)        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return "";

}


function getCookie(name,valuename)
 {
	var arg = valuename + "=";
	var alen = arg.length;
	var arrayvalue = getCookies(name);
    var array_value = arrayvalue.split('&');
	var clen = array_value.length;
	var i=0;
	while(i<clen) 
	{
		var j=alen;
		var slen = array_value[i].length;
		if(array_value[i].substring(0,j)==arg)
		    return array_value[i].substring(j,slen);
		    
		i=i+1;
		
	
    }
    return "";
}


function delCookie(name)
{
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function showFailure(){
     $("divloading").innerHTML = "<div style='margin-left:20px;color:#f30'>系统错误，登录失败</div>";
     setTimeout("if($(\"divloading\"))Element.hide(\"divloading\");",1000);
}