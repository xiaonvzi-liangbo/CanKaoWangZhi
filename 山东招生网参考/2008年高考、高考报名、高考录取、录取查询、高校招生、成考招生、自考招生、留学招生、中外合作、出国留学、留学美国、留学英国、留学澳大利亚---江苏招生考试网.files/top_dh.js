


document.write('<table width="950" height="60" border="0" align="center" cellpadding="0" cellspacing="0">');
document.write('<tr>');
document.write('<td width="174" height="60" align="left" valign="top" style="padding-right:6px;"><a href="http://www.js-edu.cn" target="_blank"><img src="http://www.js-edu.cn/images/logo0818.jpg" width="168" height="60" border="0" /></a></td>');
document.write('<td width="12" align="left" valign="top" background="http://www.js-edu.cn/images/lm0102.gif"><img src="http://www.js-edu.cn/images/lm0101.gif" width="12" height="60" /></td>');
document.write('<td width="609" align="center" valign="middle" background="http://www.js-edu.cn/images/lm0102.gif"><table width="609" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr>');
document.write('<td width="609" align="center"><a href="http://www.js-edu.cn/jiaoyuyaowen/" target="_blank">������̬</a>');
document.write(' | <a href="http://www.js-edu.cn/gaokao/" target="_blank">�߿�</a> | <a href="http://www.js-edu.cn/minxiao/" target="_blank">��У</a>');
document.write(' | <a href="http://www.js-edu.cn/kaoyan/" target="_blank">����</a> | <a href="http://www.js-edu.cn/dulixueyuan/" target="_blank">����ѧԺ</a>');
document.write(' | <a href="http://www.js-edu.cn/YiShuLei/" target="_blank">�����߿�</a> | <a href="http://www.js-edu.cn/liuxue/" target="_blank">��ѧ����</a>');
document.write(' | <a href="http://www.js-edu.cn/zikao/" target="_blank">�Կ�</a> | <a href="http://www.js-edu.cn/zhongxiaoxue/" target="_blank">��Сѧ</a>');
document.write(' | <a href="http://www.js-edu.cn/xiaoyuan/" target="_blank">У԰</a> | <a href="http://www.9151job.com" target="_blank">��ʦ��Ƹ</a><br />');
document.write('<a href="http://www.365future.com" target="_blank">ǰ����ѵ</a> | <a href="http://baoming.js-edu.cn" target="_blank">����</a> | <a href="http://www.js-edu.cn/junxiao/" target="_blank">��У</a>');
document.write(' | <a href="http://gaoxiao.js-edu.cn" target="_blank">��У</a>');
document.write(' | <a href="http://lm.chinaacc.com/ManageCheck.asp?adsid=463&UnionID=72" target="_blank">����ѧԺ</a>');
document.write(' | <a href="http://www.js-edu.cn/gangaozhaosheng/" target="_blank">�۰ĸ�У</a> | <a href="http://www.js-edu.cn/zhongwaihezuo/" target="_blank">�������</a>');
document.write(' | <a href="http://www.js-edu.cn/chengkao/" target="_blank">�ɿ�</a> | <a href="http://www.js-edu.cn/zhuanzhuanben/" target="_blank">רת��</a>');
document.write(' | <a href="http://www.edusoso.com" target="_blank">����</a> | <a href="http://edu.jschina.com.cn" target="_blank">��������</a></td>');
document.write('</tr>');
document.write('</table></td>');
document.write('<td width="19" valign="top"><img src="http://www.js-edu.cn/images/lm0104.gif" width="19" height="60" /></td>');
document.write('<td width="113" valign="middle" background="http://www.js-edu.cn/images/lm0102.gif"><table width="113" border="0" cellspacing="0" cellpadding="0">');
document.write('<tr>');
document.write('<td width="37" height="24" align="center"><img src="http://www.js-edu.cn/images/lm0105.gif" width="11" height="11" /></td>');
document.write('<td width="76"><a href="http://ask.js-edu.cn" target="_blank">�п��ʰ�</a></td>');
document.write('</tr>');
document.write('<tr>');
document.write('<td height="24" align="center"><img src="http://www.js-edu.cn/images/lm0105.gif" width="11" height="11" /></td>');
document.write('<td class="txred02"><a href="http://www.js-edu.cn/wishes/" target="_blank" class="lired02">��Ըף��ǽ</a></td>');
document.write('</tr>');
document.write('</table></td>');
document.write('<td width="23" align="right" valign="top" background="http://www.js-edu.cn/images/lm0102.gif"><img src="http://www.js-edu.cn/images/lm0103.gif" width="15" height="60" /></td>');
document.write('</tr>');
document.write('</table>');


function EduSoSoSearch()
{	
	if ((document.all.q.value == '') || (document.all.q.value == '������ؼ���'))
	{
		alert("�������ѯ����!");
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
