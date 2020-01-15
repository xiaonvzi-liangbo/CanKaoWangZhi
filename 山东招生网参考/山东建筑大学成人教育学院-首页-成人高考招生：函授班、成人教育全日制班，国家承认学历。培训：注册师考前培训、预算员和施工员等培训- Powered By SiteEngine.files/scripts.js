function borderize(what,color)
{
	what.style.borderColor=color
}

function borderize_on(e)
{
	if (document.all)
	source3=event.srcElement
	else if (document.getElementById)
	source3=e.target
	if (source3.className=="menulines")
	{
		borderize(source3,"black")
	}
	else
	{
		while(source3.tagName!="TABLE")
		{
			source3=document.getElementById? source3.parentNode : source3.parentElement
			if (source3.className=="menulines")
				borderize(source3,"black")
		}
	}
}

function borderize_off(e)
{
	if (document.all)
	source4=event.srcElement
	else if (document.getElementById)
	source4=e.target
	if (source4.className=="menulines")
	borderize(source4,"white")
	else{
	while(source4.tagName!="TABLE")
	{
		source4=document.getElementById? source4.parentNode : source4.parentElement
		if (source4.className=="menulines")
			borderize(source4,"white")
		}
	}
}
// 显示菜单
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

function checkall(form, prefix, checkall)
{
	var checkall = checkall ? checkall : 'chkall';
	for(var i = 0; i < form.elements.length; i++) {
		var e = form.elements[i];
		if(e.name != checkall && (!prefix || (prefix && e.name.match(prefix)))) {
			e.checked = form.elements(checkall).checked;;
		}
	}
}

function Popup(url, window_name, window_width, window_height)
{
		settings="toolbar=no,location=no,directories=no,"+"status=no,menubar=no,scrollbars=yes,"+"resizable=yes,width="+window_width+",height="+window_height;NewWindow=window.open(url,window_name,settings);
}

function findobj(n, d)
{
	var p,i,x; if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);} if(!(x=d[n])&&d.all) x=d.all[n]; for(i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n]; for(i=0;!x&&d.layers&&i>d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

PositionX = 0;
PositionY = 0;
defaultWidth  = 100;
defaultHeight = 100;
var AutoClose = true;
if (parseInt(navigator.appVersion.charAt(0))>=4){
var isNN=(navigator.appName=="Netscape")?1:0;
var isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}
var optNN='scrollbars=yes,width=150,height=100,left=0,top=0';
var optIE='resizable=yes,scrollbars=yes,titlebar=yes,width=150,height=100,,left=0,top=0';
function popImage(imageURL,imageTitle){
if (isNN){imgWin=window.open('about:blank','www',optNN);}
if (isIE){imgWin=window.open('about:blank','www','scrollbars=yes');}
with (imgWin.document){
writeln('<html><head><title>Loading...</title><style>body{margin:0px;}</style>');writeln('<sc'+'ript>');
writeln('var isNN,isIE;');writeln('if (parseInt(navigator.appVersion.charAt(0))>=4){');
writeln('isNN=(navigator.appName=="Netscape")?1:0;');writeln('isIE=(navigator.appName.indexOf("Microsoft")!=-1)?1:0;}');
writeln('function reSizeToImage(){');writeln('if (isIE){');writeln('window.resizeTo(100,100);');
writeln('width=100-(document.body.clientWidth-document.images[0].width);');
writeln('height=100-(document.body.clientHeight-document.images[0].height);');
writeln('window.resizeTo(width,height);}');writeln('if (isNN){');
writeln('window.innerWidth=document.images["SiteEngine"].width;');writeln('window.innerHeight=document.images["SiteEngine"].height;}}');
writeln('function doTitle(){document.title="'+imageTitle+'";}');writeln('</sc'+'ript>');
if (!AutoClose) writeln('</head><body bgcolor=#FFFFFF scroll="auto" onBlur="this.close()" onload="reSizeToImage();doTitle();self.focus()">')
else writeln('</head><body bgcolor=#FFFFFF scroll="auto" onload="reSizeToImage();doTitle();self.focus()" onblur="self.close()">');
writeln('<a href=window.close();><img name="SiteEngine" src='+imageURL+' style="display:block" border=0 galleryimg=no></a></body></html>');
close();
}}


// 字体
function doZoom(size){
	document.getElementById('zoom').style.fontSize=size+'px'
}

var postSubmited = false;

// CTRL+ENTER发送
function ctlent(obj)
{
	if(postSubmited == false && (event.ctrlKey && window.event.keyCode == 13) || (event.altKey && window.event.keyCode == 83))
	{
		if(this.document.boka.psubmit)
		{
			postSubmited = true;
			this.document.boka.psubmit.disabled = true;
			this.document.boka.submit();
		}
		else if(validate(this.document.boka))
		{
			postSubmited = true;
			if(this.document.boka.topicsubmit) this.document.boka.topicsubmit.disabled = true;
			if(this.document.boka.replysubmit) this.document.boka.replysubmit.disabled = true;
			if(this.document.boka.editsubmit) this.document.boka.editsubmit.disabled = true;
			this.document.boka.submit();
		}
	}
}
// 在线帮助
function onlinehelp(swin)
{
	window.open(swin,"","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500,height=400");
}
//检查电子邮件
function FcheckEmail(n,v){
	var a=0
	var p=0
	for(var i=1;i<v.length;i++){
		if(!v.charAt(i))return false
		else if(v.charAt(i)=='@'){a++;if(v.charAt(i+1)==''){ alert(n+" is not valid!");return false; }}
		else if(v.charAt(i)=='.'){p++;if(v.charAt(i+1)==''||v.charAt(i+1)=='@'||v.charAt(i-1)=='@'){ alert(n+" is not valid!");return false; }}
	}
	if(a==1&&p){ return true; }
	else { alert(n+" is not valid!");return false; }
}

var postminchars = 0;
var postmaxchars = 10000;
var disablepostctrl =1;
function validate(theform)
{

        if ((theform.title.value == "" || theform.message.value == "") && theform.flag.value!="reply")
        {
                alert(titleandcontent);
                return false;
        }
        else if (theform.flag.value =="reply" && theform.message.value == "")
        {
                alert(contentnoblank);
                return false;
        }
        theform.topicsubmit.disabled = true;
        return true;
}

function showadv(obj)
{
	for (i=1; i< myArray.length+100; i++)
	{
		if (obj==i)
		{
			document.getElementById("show"+obj).style.display = "";
		}
		else
		{
			if (document.getElementById("show"+i))
			{
		 		document.getElementById("show"+i).style.display = "none";
		 	}
		}
	}
}
// 重定textarea大小
function ResizeArea(objName, resize)
{
	var obj = document.getElementById(objName);
	if (obj.rows <= 6 && resize<0 || resize==0)
        {
		return;
	}
	else if (resize>0){
		obj.style.width = "100%";
	}
	obj.rows = obj.rows + resize;
}

function submitForm()
{
	document.forms.boka.elements.content.value = oEdit1.getHTMLBody();
	alert(oEdit1.getHTMLBody());
	// document.forms.boka.submit()
}
//ID of Daily Iframe tag:
// alert(document.getElementById("adserver"));
// var iframeids=["adserver","adserver1","adserver2"]
// var iframeids=document.getElementsByTagName("iframe");
// alert(iframeids.name);
var getFFVersion=navigator.userAgent.substring(navigator.userAgent.indexOf("Firefox")).split("/")[1]
var FFextraHeight=getFFVersion>=0.1? 16 : 0 //extra height in px to add to iframe in FireFox 1.0+ browsers

function startdyncode(){
dyniframesize()
}

function dyniframesize() {
var dyniframe=new Array()
for (i=0; i<iframeids.length; i++){
if (document.getElementById){ //begin resizing iframe procedure
dyniframe[dyniframe.length] = document.getElementById(iframeids[i]);
if (dyniframe[i] && !window.opera){
dyniframe[i].style.display="block"
if (dyniframe[i].contentDocument && dyniframe[i].contentDocument.body.offsetHeight) //ns6 syntax
dyniframe[i].height = dyniframe[i].contentDocument.body.offsetHeight+FFextraHeight;
else if (dyniframe[i].Document && dyniframe[i].Document.body.scrollHeight) //ie5+ syntax
dyniframe[i].height = dyniframe[i].Document.body.scrollHeight;
}
}
}
}

if (window.addEventListener)
window.addEventListener("load", startdyncode, false)
else if (window.attachEvent)
window.attachEvent("onload", startdyncode)
window.onerror = function(){return true;}


//** Tab Content script- ?Dynamic Drive DHTML code library (http://www.dynamicdrive.com)
//** Last updated: June 29th, 06

var enabletabpersistence=1 //enable tab persistence via session only cookies, so selected tab is remembered?

////NO NEED TO EDIT BELOW////////////////////////
var tabcontentIDs=new Object()

function expandcontent(linkobj){
var ulid=linkobj.parentNode.parentNode.id //id of UL element
var ullist=document.getElementById(ulid).getElementsByTagName("li") //get list of LIs corresponding to the tab contents
for (var i=0; i<ullist.length; i++){
ullist[i].className=""  //deselect all tabs
if (typeof tabcontentIDs[ulid][i]!="undefined") //if tab content within this array index exists (exception: More tabs than there are tab contents)
document.getElementById(tabcontentIDs[ulid][i]).style.display="none" //hide all tab contents
}
linkobj.parentNode.className="selected"  //highlight currently clicked on tab
document.getElementById(linkobj.getAttribute("rel")).style.display="block" //expand corresponding tab content
saveselectedtabcontentid(ulid, linkobj.getAttribute("rel"))
}

function savetabcontentids(ulid, relattribute){// save ids of tab content divs
if (typeof tabcontentIDs[ulid]=="undefined") //if this array doesn't exist yet
tabcontentIDs[ulid]=new Array()
tabcontentIDs[ulid][tabcontentIDs[ulid].length]=relattribute
}

function saveselectedtabcontentid(ulid, selectedtabid){ //set id of clicked on tab as selected tab id & enter into cookie
if (enabletabpersistence==1) //if persistence feature turned on
setCookie(ulid, selectedtabid)
}

function getullistlinkbyId(ulid, tabcontentid){ //returns a tab link based on the ID of the associated tab content
var ullist=document.getElementById(ulid).getElementsByTagName("li")
for (var i=0; i<ullist.length; i++){
if (ullist[i].getElementsByTagName("a")[0].getAttribute("rel")==tabcontentid){
return ullist[i].getElementsByTagName("a")[0]
break
}
}
}

function initializetabcontent(){
for (var i=0; i<arguments.length; i++){ //loop through passed UL ids
if (enabletabpersistence==0 && getCookie(arguments[i])!="") //clean up cookie if persist=off
setCookie(arguments[i], "")
var clickedontab=getCookie(arguments[i]) //retrieve ID of last clicked on tab from cookie, if any
var ulobj=document.getElementById(arguments[i])
var ulist=ulobj.getElementsByTagName("li") //array containing the LI elements within UL
for (var x=0; x<ulist.length; x++){ //loop through each LI element
var ulistlink=ulist[x].getElementsByTagName("a")[0]
if (ulistlink.getAttribute("rel")){
savetabcontentids(arguments[i], ulistlink.getAttribute("rel")) //save id of each tab content as loop runs
ulistlink.onclick=function(){
expandcontent(this)
return false
}
if (ulist[x].className=="selected" && clickedontab=="") //if a tab is set to be selected by default
expandcontent(ulistlink) //auto load currenly selected tab content
}
} //end inner for loop
if (clickedontab!=""){ //if a tab has been previously clicked on per the cookie value
var culistlink=getullistlinkbyId(arguments[i], clickedontab)
if (typeof culistlink!="undefined") //if match found between tabcontent id and rel attribute value
expandcontent(culistlink) //auto load currenly selected tab content
else //else if no match found between tabcontent id and rel attribute value (cookie mis-association)
expandcontent(ulist[0].getElementsByTagName("a")[0]) //just auto load first tab instead
}
} //end outer for loop
}


function getCookie(Name){
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return ""
}

function setCookie(name, value)
{
	document.cookie = name+"="+value //cookie value is domain wide (path=/)
}