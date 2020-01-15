


document.write('<table width="950" height="60" border="0" align="center" cellpadding="0" cellspacing="0">');
document.write('<tr>');
document.write('<td width="174" height="60" align="left" valign="top" style="padding-right:6px;"><a href="http://www.js-edu.cn" target="_blank"><img src="http://www.js-edu.cn/images/logo0818.jpg" width="168" height="60" border="0" /></a></td>');
document.write('<td width="12" align="left" valign="top" background="http://www.js-edu.cn/images/lm0102.gif"><img src="http://www.js-edu.cn/images/lm0101.gif" width="12" height="60" /></td>');
document.write('<td width="609" align="center" valign="middle" background="http://www.js-edu.cn/images/lm0102.gif"><table width="609" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr>');
document.write('<td width="609" align="center"><a href="http://www.js-edu.cn/jiaoyuyaowen/" target="_blank">教育动态</a>');
document.write(' | <a href="http://www.js-edu.cn/gaokao/" target="_blank">高考</a> | <a href="http://www.js-edu.cn/minxiao/" target="_blank">民校</a>');
document.write(' | <a href="http://www.js-edu.cn/kaoyan/" target="_blank">考研</a> | <a href="http://www.js-edu.cn/dulixueyuan/" target="_blank">独立学院</a>');
document.write(' | <a href="http://www.js-edu.cn/YiShuLei/" target="_blank">艺术高考</a> | <a href="http://www.js-edu.cn/liuxue/" target="_blank">留学海外</a>');
document.write(' | <a href="http://www.js-edu.cn/zikao/" target="_blank">自考</a> | <a href="http://www.js-edu.cn/zhongxiaoxue/" target="_blank">中小学</a>');
document.write(' | <a href="http://www.js-edu.cn/xiaoyuan/" target="_blank">校园</a> | <a href="http://www.9151job.com" target="_blank">教师招聘</a><br />');
document.write('<a href="http://www.365future.com" target="_blank">前程培训</a> | <a href="http://baoming.js-edu.cn" target="_blank">招生</a> | <a href="http://www.js-edu.cn/junxiao/" target="_blank">军校</a>');
document.write(' | <a href="http://gaoxiao.js-edu.cn" target="_blank">高校</a>');
document.write(' | <a href="http://lm.chinaacc.com/ManageCheck.asp?adsid=463&UnionID=72" target="_blank">网络学院</a>');
document.write(' | <a href="http://www.js-edu.cn/gangaozhaosheng/" target="_blank">港澳高校</a> | <a href="http://www.js-edu.cn/zhongwaihezuo/" target="_blank">中外合作</a>');
document.write(' | <a href="http://www.js-edu.cn/chengkao/" target="_blank">成考</a> | <a href="http://www.js-edu.cn/zhuanzhuanben/" target="_blank">专转本</a>');
document.write(' | <a href="http://www.edusoso.com" target="_blank">搜索</a> | <a href="http://edu.jschina.com.cn" target="_blank">教育在线</a></td>');
document.write('</tr>');
document.write('</table></td>');
document.write('<td width="19" valign="top"><img src="http://www.js-edu.cn/images/lm0104.gif" width="19" height="60" /></td>');
document.write('<td width="113" valign="middle" background="http://www.js-edu.cn/images/lm0102.gif"><table width="113" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr>');
document.write('<td width="37" height="24" align="center"><img src="http://www.js-edu.cn/images/lm0105.gif" width="11" height="11" /></td>');
document.write('<td width="76"><a href="http://ask.js-edu.cn" target="_blank">招考问吧</a></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td height="24" align="center"><img src="http://www.js-edu.cn/images/lm0105.gif" width="11" height="11" /></td>');
document.write('<td class="txred02"><a href="http://www.js-edu.cn/wishes/" target="_blank" class="lired02">许愿祝福墙</a></td>');
document.write('</tr>');
document.write('</table></td>');
document.write('<td width="23" align="right" valign="top" background="http://www.js-edu.cn/images/lm0102.gif"><img src="http://www.js-edu.cn/images/lm0103.gif" width="15" height="60" /></td>');
document.write('</tr>');
document.write('</table>');


function EduSoSoSearch()
{	
	if ((document.all.q.value == '') || (document.all.q.value == '请输入关键字'))
	{
		alert("请输入查询内容!");
		document.all.q.focus();
		return false;
	}


	var SoType=document.getElementById("EduSoSo");
	var cindex = SoType.selectedIndex;
	var cValue = SoType.options[cindex].value;

				
				
	if (cValue == "0")
	{
		window.open("http://www.edusoso.com/Search.aspx?q=" + escape(document.all.q.value));
		return false
	}
	else if ((cValue == "1"))
		window.open("http://www.edusoso.com/Kc.aspx?q=" + escape(document.all.q.value));
	else if ((cValue == "2"))
		window.open("http://www.edusoso.com/Cs.aspx?q=" + escape(document.all.q.value));
	else if ((cValue == "3"))
		window.open("http://www.edusoso.com/Zy.aspx?q=" + escape(document.all.q.value));
	else
		window.open("http://www.edusoso.com/Search.aspx?q=" + escape(document.all.q.value));
	return false;
}
