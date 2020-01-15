function getlocation(){ 
 var strHref = location.href; 
 var strarr;
 strHref = strHref.replace("http://","");
 strarr = strHref.split("/");
 
 return strarr[2];
} 

function b_bottom()
{
document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/b_bottom.js"></script>');
var str;
str = getlocation();
switch(str)
{
	case "gwy" :
	document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_gwy.js"></script>');
	break;
	case "zxks" :
	document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_zikao.js"></script>');
	break;
	case "crgk" :
	document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_chengkao.js"></script>');
	break;
        default :
        document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_gaokao.js"></script>');
        break;
}

}

function news_bottom()
{
document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/news_bottom.js"></script>');
var str;
str = getlocation();
switch(str)
{
	case "gwy" :
	document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_gwy.js"></script>');
	break;
	case "zxks" :
	document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_zikao.js"></script>');
	break;
	case "crgk" :
	document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_chengkao.js"></script>');
	break;
        default :
        document.write ('<script language="javascript" type="text/javascript" src="http://image.sooxue.com/button/51la_gaokao.js"></script>');
        break;
}

}

document.body.oncopy = function ()
{  
    setTimeout(function (){var text = clipboardData.getData("text");  
            if (text)  
            {  
                text = text + "\r\n该文章转载自搜学网："+location.href;  
                clipboardData.setData("text", text);  
            }  
        },  
        100  
    )  
}  
window.onload = function()  
{  
    this.focus();   //内容加载完成后,获取焦点
}