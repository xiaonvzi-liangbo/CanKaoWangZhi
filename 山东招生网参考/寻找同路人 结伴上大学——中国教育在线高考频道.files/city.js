/*document.write("<script type\"text/javascript\" src=\"/js/panel/lib.js\"></script>\n");
document.write("<script type\"text/javascript\" src=\"/js/panel/panel.js\"></script>\n");*/
document.write("<script type=\"text/javascript\" src=\"/ajax/lib/proto/prototype.js\"></script>\n");

//var obj=null;
var codeaProv = "";
var codeaColl = "";
var arraCity = [];
var arrcollege = [];


function onchangeProv(obj)
{
	//alert(obj.value);
	codeProv = obj.value;
	arraCity=[];
	loadJs("/js/city/"+codeProv+".js?id="+new Date());
	//alert("city/"+codeProv+".js?id="+new Date());
	
}

function showaCity()
{
	$("fc").options.length = 0;
	$("fc").options[0] = document.createElement("OPTION"); 
	$("fc").options[0].text = "不限"; 
	$("fc").options[0].value = "";
	var i = 1;
	for(var i=1;i<arraCity.length+1;i++) 
	{
		$("fc").options[i] = document.createElement("OPTION"); 
		$("fc").options[i].text = arraCity[i-1].name; 
		$("fc").options[i].value = arraCity[i-1].code;
	}
	if($("fp").options[0].value == "")
	{
		$("fp").options[0] = null;
	}
	$("fc").style.width = "100px";
}

function onchangeColl(obj)
{
	//alert(obj.value);
	codeaColl = obj.value;
	arrcollege=[];
	loadJs("/js/college/"+codeaColl+".js?id="+new Date());
	//alert("college/"+codeaColl+".js?id="+new Date());
}

function showCollege()
{
	
	$("tc").options.length = 0;
	$("tc").options[0] = document.createElement("OPTION"); 
	$("tc").options[0].text = "不限"; 
	$("tc").options[0].value = "";
	var i = 1;
	for(var i=1;i<arrcollege.length+1;i++) 
	{
		$("tc").options[i] = document.createElement("OPTION"); 
		$("tc").options[i].text = arrcollege[i-1].name; 
		$("tc").options[i].value = arrcollege[i-1].code;
	}
	$("tc").style.width = "160px";
}

function loadJs(strfile)
{	
	var html_doc = document.getElementsByTagName('head').item(0);
	var scripts=html_doc.getElementsByTagName("script");	
	if(scripts.length>0){html_doc.removeChild(scripts[scripts.length-1])}
	var js = document.createElement('script');
	js.setAttribute('language', 'javascript');
	js.setAttribute('type', 'text/javascript');
	html_doc.appendChild(js);
	js.setAttribute('src', strfile);	
}