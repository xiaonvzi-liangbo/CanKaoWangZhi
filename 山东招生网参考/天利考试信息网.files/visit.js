function SetCookie(sName, sValue, timeKeep)
{
	var now=new Date();
	var expireTime= new Date(now.valueOf()+timeKeep*60000*60);
	document.cookie = sName + "=" + escape(sValue) + "; path=/; expires=" + expireTime.toGMTString() + ";";
}

function GetCookie(sName)
{
	var aCookie = document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++)
	{
		var aCrumb = aCookie[i].split("=");
		if (sName == aCrumb[0]) 
			return unescape(aCrumb[1]);
	}
	return null;
}

function GetCurrentDateTime()
{
    var date = new Date();
    var current=new String("");
    current += date.getFullYear()+"-";
    current += date.getMonth() + 1+"-";
    current += date.getDate()+" ";
    current += date.getHours()+":";
    current += date.getMinutes()+":";
    current += date.getSeconds();
    return current;
}

m_tc_parent_website=m_tc_parent_website=="0"?m_tc_website:m_tc_parent_website;
//	Cookie����
var m_tc_cookie_unique="tc_total_cookie_"+m_tc_website;
var m_tc_cookie_all_uniquee="tc_total_cookie_parent_"+m_tc_parent_website;
var m_tc_cookie_datetime="tc_total_cookie_datetime_"+m_tc_website;
// �Ƿ�Ψһ�û���24Сʱ��һ��
var m_tc_unique_user;
var m_tc_all_unique_user;
if (GetCookie(m_tc_cookie_unique)==null)
{
	m_tc_unique_user="1";
	SetCookie(m_tc_cookie_unique,"1",24);
}
else
	m_tc_unique_user="0";
if (GetCookie(m_tc_cookie_all_uniquee)==null)
{
	m_tc_all_unique_user="1";
	SetCookie(m_tc_cookie_all_uniquee,"1",24);
}
else
	m_tc_all_unique_user="0";
// ����ʱ��
var m_tc_datetime=GetCookie(m_tc_cookie_datetime);
SetCookie(m_tc_cookie_datetime,GetCurrentDateTime(),365*24);
if (m_tc_datetime==null)
	m_tc_datetime="";

// ͳ�ƴ���
document.write("<iframe src=\"http://"+m_tc_server+"/log.htm?website_id="+m_tc_website+"&unique="+m_tc_unique_user+"&all_unique="+m_tc_all_unique_user+"&dpi="+escape(screen.width)+"*"+escape(screen.height)+"&jsversion=&color="+escape(screen.colordepth)+"&language="+escape(navigator.browserLanguage)+"&location="+escape(location.href)+"&refer="+escape(document.referrer)+"&datetime="+escape(m_tc_datetime)+"\" style=\"display:none;width:0;height:0;\"></iframe>");

// ͼ��
switch (m_tc_style)
{
	case "1":		// ͼ��
		document.write("<a href=\"http://report.textclick.com/?website_id="+m_tc_website+"\" target=_blank title=\"̫��ͳ����Ȩ������վ����ͳ��\"><img src=\"http://"+m_tc_server+"/logo.bmp\" align=absmiddle border=0></a>");
		break;
	case "2":		// ���֣�������[̫��ͳ��]
		document.write("<a href=\"http://report.textclick.com/?website_id="+m_tc_website+"\" target=_blank>[̫��ͳ��]</a>");
		break;
	case "3":		// ���֣�������[��վͳ��]
		document.write("<a href=\"http://report.textclick.com/?website_id="+m_tc_website+"\" target=_blank>[��վͳ��]</a>");
		break;
	default:
		break;
}

//mod by allis080725
 //document.write('<scri'+'pt language=javascript src=http://test2.t2t2.com/advisit.js></sc'+'ript>');