var w3c=(document.getElementById)? true:false;
var agt=navigator.userAgent.toLowerCase();
var ie = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1) && (agt.indexOf("omniweb") == -1));
var ie5=(w3c && ie)? true : false;
var ns6=(w3c && (navigator.appName=="Netscape"))? true: false;
var op8=(navigator.userAgent.toLowerCase().indexOf("opera")==-1)? false:true;

var sRootDir="../";

function Ob(o){
 var o=document.getElementById(o)?document.getElementById(o):o;
 return o;
}
function Hd(o){
 Ob(o).className="hidden";
}
function Sw(o){
 Ob(o).className="show";
}
function ExCls(o,a,b){
 Ob(o).className=Ob(o).className==a?b:a;
}


function SetCookie(name,value){
     var argv=SetCookie.arguments;
     var argc=SetCookie.arguments.length;
     var expires=(2<argc)?argv[2]:null;
     var path=(3<argc)?argv[3]:null;
     var domain=(4<argc)?argv[4]:null;
     var secure=(5<argc)?argv[5]:false;
     document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
} 

function GetCookie(Name) {
 var search = Name + "=";
 var returnvalue = "";
 if (document.cookie.length > 0) {
  offset = document.cookie.indexOf(search);
  if (offset != -1) {      
   offset += search.length;
   end = document.cookie.indexOf(";", offset);                        
   if (end == -1)
   end = document.cookie.length;
   returnvalue=unescape(document.cookie.substring(offset,end));
  }
 }
 return returnvalue;
}

function GetSubCookie(Name, CookieValue) {
 var search = Name + "=";
 var returnvalue = "";
 if (CookieValue.length > 0) {
  offset = CookieValue.indexOf(search);
  if (offset != -1) {      
   offset += search.length;
   end = CookieValue.indexOf("&", offset);                        
   if (end == -1)
   end = CookieValue.length;
   returnvalue=unescape(CookieValue.substring(offset,end));
  }
 }
 return returnvalue;
}

function SavSkin(s){
 var sCssUrl=sRootDir+"css/skin_"+s+".css";
 Ob("ActSkin").href=sCssUrl;
 var expdate=new Date();
 expdate.setTime(expdate.getTime()+(24*60*60*1000*30));
 SetCookie("Skin265_1",s,expdate,"/",null,false);
 var arrObj=Ob("SkinTyp1").getElementsByTagName("li");
 for (i=0;i<arrObj.length;i++ ) {
  arrObj[i].className=arrObj[i].id.split('_')[1]==GetCookie("Skin265_1")?"chosed":"";
 }
}

function ResetSkin(n){
 var expdate=new Date();
 expdate.setTime(expdate.getTime()+(24*60*60*1000*30));
 SetCookie("Skin265_"+n,"",expdate,"/",null,false);
 window.location.reload();
}

function GetCSS(){
 var sSkin=GetCookie("Skin265_1")?GetCookie("Skin265_1"):"2";
  document.write ("<link id=\"ActSkin\" type=\"text/css\" rel=\"stylesheet\" href=\""+sRootDir+"css/skin_"+sSkin+".css\" />");
}
function ExChgDir(){
 ExCls('Cn','Cn3','Cn1');
 Ob("BtnCloseDir").innerHTML=Ob("Cn").className=="Cn3"?"打开目录":"关闭目录";
}

function MySkin(n){
 var sHtml="";
 if (n!=1) {
  sHtml="<a id=\"BtnCloseDir\" href=\"javascript:void(0)\" onclick=\"ExChgDir();\">关闭目录</a>&nbsp;|&nbsp;"
 sHtml+="<a href=\"javascript:ShowSkin();\" title=\"选择你喜欢的页面风格\">页面风格</a>&nbsp;|&nbsp;";
 sHtml+="<a href=\"http://my.265.com/hd/topic_121_11925_1.htm\" target=\"_blank\">新手上路</a>";
 } else {
 sHtml="<a href=\"http://my.265.com/hd/topic_121_11925_1.htm\" target=\"_blank\">新手上路</a>&nbsp;|&nbsp;";
 sHtml+="<a href=\"javascript:ShowSkin();\" title=\"选择你喜欢的页面风格\">页面风格</a>";
 }
 sHtml="<p id=\"OrdSkin\">"+sHtml+"</p>";
 document.write (sHtml);
}

function ShowSkin(){
 if (Ob("SkinCtrl").className=="hidden") {
 var sImg="<img class=\"s\" src=\""+sRootDir+"css/s.gif\" />";
 var sHtml="<div class=\"OpH\"><a class=\"BtnClose\" href=\"javascript:void(0)\" onclick=\"Hd('SkinCtrl');\">×</a><strong>请选择页面风格：</strong></div><div class=\"OpB\"><ul id=\"SkinTyp1\">";
 sHtml+="<li id=\"MySkin1_2\"><a href=\"javascript:SavSkin('2');\">"+sImg+"金色阳光</a></li>";
 sHtml+="<li id=\"MySkin1_3\"><a href=\"javascript:SavSkin('3');\">"+sImg+"蓝色心情</a></li>";
 sHtml+="<li id=\"MySkin1_green\"><a href=\"javascript:SavSkin('green');\">"+sImg+"绿色自然</a></li>";
 sHtml+="<li id=\"MySkin1_purple\"><a href=\"javascript:SavSkin('purple');\">"+sImg+"紫色情怀</a></li>";
 sHtml+="<li id=\"MySkin1_pink\"><a href=\"javascript:SavSkin('pink');\">"+sImg+"粉色浪漫</a></li>";
 sHtml+="<li id=\"MySkin1_silver\"><a href=\"javascript:SavSkin('silver');\">"+sImg+"银色简约</a></li>";
 sHtml+="</ul></div>";
 sHtml+="<div class=\"OpF\">【<a href=\"javascript:void(0);\" onclick=\"ResetSkin(1);\" title=\"清除Cookie并恢复默认风格\">恢复默认</a>】&nbsp;【<a href=\"javascript:void(0);\" onclick=\"Hd('SkinCtrl');\">关闭窗口</a>】</div>";
 Ob("SkinCtrl").innerHTML=sHtml;
 Sw("SkinCtrl");
var CurrSkinNo=GetCookie("Skin265_1")?GetCookie("Skin265_1"):"2";
Ob("MySkin1_"+CurrSkinNo).className="chosed";
var nLt=(document.body.offsetWidth-Ob("SkinCtrl").offsetWidth)/2;
var nTop=(document.documentElement.clientHeight-Ob("SkinCtrl").scrollHeight)/2;
GoXY("SkinCtrl",nLt,nTop);
 } else {
  Hd("SkinCtrl");
 }
}

function GoXY(o,x,y){
Ob(o).style.left=x+"px";
Ob(o).style.top=y+"px";
}

function ExRtCol(){
 ExCls("Wp","Big","");
 ExCls("RtCol","hidden","");
}

var CurrOpObj=null;
function ExChgFam(o, curo){
 Ob("Famous_area").style.display="none";
 Ob("FrmUrl1").style.display="none";
 Ob(curo).style.display="";
 o.className="cur"; 
 if (CurrOpObj && CurrOpObj != o)
  CurrOpObj.className="";
  CurrOpObj =o;
}

function HitTree(e){
 var tag = ie ? e.srcElement : e.target; ExCls(tag.parentNode,"open","close");
}

function SetEvt(o,a,b){
 ie?o.attachEvent("on"+a,b):o.addEventListener(a,b, false);
}

function CNLTree(id,ClsOpen,ClsClose,ClsChild){
 this.id=id;
 this.ClassOpen=ClsOpen || "open";
 this.ClassClose=ClsClose || "close";
 this.ClassChild=ClsChild || "child";
 this.AddEvt = function () {
  var arrObj=Ob(this.id).getElementsByTagName("img");
  for (var i=0;i<arrObj.length; i++) {
   arrObj[i].className=="s"?SetEvt(arrObj[i],"click",HitTree):"";
  }
 }
}
var KNo=Math.floor(10*Math.random())+4;
function s4(){
 var v=Ob("Kaa").value
 if(Ob("a0").checked)
 window.open("http://www.yok.com/go.php?NO=9&Key="+v,"0");
 if(Ob("a1").checked)
 window.open("http://www.yok.com/go.php?NO=8&Key="+v,"1");
 if(Ob("a2").checked)
 window.open("http://www.baidu.com/baidu?tn=265com&word="+v,"2");
 if(Ob("a3").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=13","4");
 if(Ob("a4").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=10","4");
 if(Ob("a5").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=11","5");
 if(Ob("a6").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=14","6");
 if(Ob("a7").checked)
 window.open("http://cb.kingsoft.com/search?t=word&lang=gb2312&s="+v,"7");
 if(Ob("a8").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=35","8");
 if(Ob("a9").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=26","9");
 if(Ob("a10").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=158","10");
 if(Ob("a11").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=174","11");
 if(Ob("a12").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=39","12");
 if(Ob("a13").checked) 
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=49","13");
 if(Ob("a14").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=24","14");
 if(Ob("a15").checked)
 window.open("http://www.yok.com/go.php?Key="+v+"&NO=152","15");
 var cusSea="";
 for(i=0;i<16;i++){
    if(Ob("a"+i).checked)   cusSea=cusSea+i+"|";
 }
 if (cusSea=="") cusSea = "0|1";
 else cusSea=cusSea.substr(0,cusSea.length-1);
 setCusSea(cusSea);
 return false;
}
function setCusSea(cusSea){
 var expdate=new Date();
 expdate.setTime(expdate.getTime()+(24*60*60*1000*365));
 SetCookie("cusSea_265",cusSea,expdate,"/",null,false);
}
function getCusSea() {
 var cusSea = GetCookie("cusSea_265")?GetCookie("cusSea_265"):"0|1";
 cusSea=cusSea.split("|");
 for(var i=0;i<16;i++){
  Ob("a"+i).checked=false;
 }
 for(var j=0;j<cusSea.length;j++){
  Ob("a"+cusSea[j]).checked=true;
 }
}
function gt(f){
 var t;
 var u;
 if(f.a0 != undefined){
  u = 'Y:';
  t = f.k.value;
  if(f.a0.checked==true){u+='0;';}
  if(f.a1.checked==true){u+='1;';}
  if(f.a2.checked==true){u+='2;';}
  if(f.a3.checked==true){u+='3;';}
  if(f.a4.checked==true){u+='4;';}
  if(f.a5.checked==true){u+='5;';}
  if(f.a6.checked==true){u+='6;';}
  if(f.a7.checked==true){u+='7;';}
  if(f.a8.checked==true){u+='8;';}
  if(f.a9.checked==true){u+='9;';}
  if(f.a10.checked==true){u+='10;';}
  if(f.a11.checked==true){u+='11;';}
  if(f.a12.checked==true){u+='12;';}
  if(f.a13.checked==true){u+='13;';}
  if(f.a14.checked==true){u+='14;';}
  if(f.a15.checked==true){u+='15;';}
 }
 else{
  t = f.Ka.value;
  u = 'G';
 }
 try{
  new Image().src = "http://statis.265.com/url?a=S&u="+u+"&t="+t;
 }catch(ex){}
 if(Ob("Ka").value == ""){
  Ob("ch").value = "noprefill";
 } else {
  Ob("ch").value = "prefill";
 }
}

function tracking(e){
 e = e ? e : window.event;
 var s = e.srcElement ? e.srcElement : e.target;
 var a = s.tagName;
 var u = s.href;
 var t = s.innerText ? s.innerText : s.textContent;
 if(a == "A" || a == "IMG"){
  if(a == "IMG"){
   t = s.href || s.src;
   u = s.parentElement || s.parentNode;
  }
  try{
   new Image().src = "http://statis.265.com/url?a="+a+"&u="+escape(u)+"&t="+t;
  }catch(ex){}
 }
 return true;
} 

function LTrim(str){
var whitespace = new String(" \t\n\r");
var s = new String(str);
if (whitespace.indexOf(s.charAt(0)) != -1){
var j=0, i = s.length;
while (j < i && whitespace.indexOf(s.charAt(j)) != -1){
	j++;
}
s = s.substring(j, i);
}
return s;
}

function RTrim(str){
var whitespace = new String(" \t\n\r");
var s = new String(str);
if (whitespace.indexOf(s.charAt(s.length-1)) != -1){
var i = s.length - 1;
while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1){
i--;
}
s = s.substring(0, i+1);
}
return s;
}
var bTitle = "点此设置，在您点击“网址分类”中的分类项时，&#10;将在新窗口/当前页打开新链接";
function showBase(n) {
    if (n=="" || n==0) {
        Ob("setBase").innerHTML = "<a href='javascript:setBase(1);' title='"+bTitle+"'>在新窗口打开链接</a>";
    } else {
        Ob("setBase").innerHTML = "<a href='javascript:setBase(0);' title='"+bTitle+"'>在当前页打开链接</a>";
    }
}
function setBase(n){
 if (n==0) var tar="";
 else var tar="blank";
 var urls = document.getElementsByTagName("A");
 for(var i=0;i<urls.length;i++){
    var url = urls[i];
    if (!(url.href.indexOf(location.href+"#")==0||url.href.indexOf("javascript:")!=-1||url.target=="_blank"||url.target=="FrmUrl1"))  url.target=tar;
 }
 var expdate=new Date();
 expdate.setTime(expdate.getTime()+(24*60*60*1000*365));
 SetCookie("base_265",n,expdate,"/",null,false);
 showBase(n);
}
function getBase() {
    var base_265 = GetCookie("base_265")?GetCookie("base_265"):"";
    if (base_265==1)  setBase(1);
    showBase(base_265);
}

var c = '500x30_265';
var querystr = location.href;
var f = 'nounion';
function ADsend(id,type,placeid){
	var pid = RTrim(LTrim(id));
	var newpid = parseInt(pid)-parseInt(10000);
	var path = parseInt(newpid/1000);	
	open_url = "http://count.e78.com/page/WD_9588/"+path+"/sendring"+pid+".htm?p="+id+"&t="+type+"&c="+c+"&f="+f+"&u="+querystr;
	window.open(open_url,'open','width=460 height=490');
}
