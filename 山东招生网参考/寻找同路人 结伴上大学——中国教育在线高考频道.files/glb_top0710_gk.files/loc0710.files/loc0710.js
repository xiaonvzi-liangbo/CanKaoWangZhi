<!--
function setCookie(name,value,expires,path,domain,secure) {
	document.cookie=name+"="+escape(value)+
		((expires)?";expires="+expires.toGMTString():"")+
        ((path)?";path="+path:"")+
        ((domain)?";domain="+domain:"")+
        ((secure)?";secure":"");
}

function getCookie(name) {
    var dc=document.cookie;
    var prefix=name+"=";
    var begin=dc.indexOf("; "+prefix);
    if(begin==-1) {
        begin=dc.indexOf(prefix);
        if(begin!=0) return null;
    }
	else{
        begin+=2;
    }
    var end=document.cookie.indexOf(";",begin);
    if(end==-1){
        end=dc.length;
    }
    return unescape(dc.substring(begin+prefix.length,end));
}

function deleteCookie(name,path,domain) {
    if (getCookie(name)) {
        document.cookie=name+"="+
            ((path)?";path="+path:"")+
            ((domain)?";domain="+domain:"")+
            "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
}

function fixDate(date) { 
    var base = new Date(0) 
    var skew = base.getTime() 
    if (skew > 0) 
    date.setTime(date.getTime() - skew) 
} 
var now = new Date() 
fixDate(now) 
now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000) 

if(getCookie('area')!=null){}
else {
document.write('<script src=http://feedback.eol.cn/ip/z.php></scr'+'ipt>');
}

pro=getCookie('area');

switch(pro){
		case "00":
		x='<a href="http://beijing.eol.cn" target="_top">����վ</a>';
			break;
		case "11":
		x='<a href="http://beijing.eol.cn" target="_top">����վ</a>';
			break;
		case "12":
		x='<a href="http://tianjin.eol.cn" target="_top">���վ</a>';
			break;
		case "13":
		x='<a href="http://hebei.eol.cn" target="_top">�ӱ�վ</a>';
			break;
		case "14":
		x='<a href="http://shanxi.eol.cn" target="_top">ɽ��վ</a>';
			break;
		case "15":
		x='<a href="http://neimenggu.eol.cn" target="_top">���ɹ�վ</a>';
			break;
		case "21":
		x='<a href="http://liaoning.eol.cn" target="_top">����վ</a>';
			break;
		case "22":
		x='<a href="http://jilin.eol.cn" target="_top">����վ</a>';
			break;
		case "23":
		x='<a href="http://heilongjiang.eol.cn" target="_top">������վ</a>';
			break;
		case "31":
		x='<a href="http://shanghai.eol.cn" target="_top">�Ϻ�վ</a>';
			break;
		case "32":
		x='<a href="http://jiangsu.eol.cn" target="_top">����վ</a>';
			break;
		case "33":
		x='<a href="http://zhejiang.eol.cn" target="_top">�㽭վ</a>';
			break;
		case "34":
		x='<a href="http://anhui.eol.cn" target="_top">����վ</a>';
			break;
		case "35":
		x='<a href="http://fujian.eol.cn" target="_top">����վ</a>';
			break;
		case "36":
		x='<a href="http://jiangxi.eol.cn" target="_top">����վ</a>';
			break;
		case "37":
		x='<a href="http://shandong.eol.cn" target="_top">ɽ��վ</a>';
			break;
		case "41":
		x='<a href="http://henan.eol.cn" target="_top">����վ</a>';
			break;
		case "42":
		x='<a href="http://hubei.eol.cn" target="_top">����վ</a>';
			break;
		case "43":
		x='<a href="http://hunan.eol.cn" target="_top">����վ</a>';
			break;
		case "44":
		x='<a href="http://guangdong.eol.cn" target="_top">�㶫վ</a>';
			break;
		case "45":
		x='<a href="http://guangxi.eol.cn" target="_top">����վ</a>';
			break;
		case "46":
		x='<a href="http://hainan.eol.cn" target="_top">����վ</a>';
			break;
		case "51":
		x='<a href="http://chongqing.eol.cn" target="_top">����վ</a>';
			break;
		case "52":
		x='<a href="http://sichuan.eol.cn" target="_top">�Ĵ�վ</a>';
			break;
		case "53":
		x='<a href="http://guizhou.eol.cn" target="_top">����վ</a>';
			break;
		case "54":
		x='<a href="http://yunnan.eol.cn" target="_top">����վ</a>';
			break;
		case "55":
		x='<a href="http://xizang.eol.cn" target="_top">����վ</a>';
			break;
		case "61":
		x='<a href="http://shaanxi.eol.cn" target="_top">����վ</a>';
			break;
		case "62":
		x='<a href="http://gansu.eol.cn" target="_top">����վ</a>';
			break;
		case "63":
		x='<a href="http://qinghai.eol.cn" target="_top">�ຣվ</a>';
			break;
		case "64":
		x='<a href="http://ningxia.eol.cn" target="_top">����վ</a>';
			break;
		case "65":
		x='<a href="http://xinjiang.eol.cn" target="_top">�½�վ</a>';
			break;
		default:
		x='<a href="http://beijing.eol.cn" target="_top">����վ</a>';
			break;
}
document.getElementById('df').innerHTML=x;
//-->