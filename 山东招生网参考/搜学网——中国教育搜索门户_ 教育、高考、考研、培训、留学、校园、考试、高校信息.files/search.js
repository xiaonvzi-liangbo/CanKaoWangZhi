function _select1()
{
	ClearSelect('yxmc');
	FillSelect('yxmc','��ѡ��ѧУ','');
	$('yxssdm').value='';
	var jsfile="http://gk.sooxue.com/js/school/ssdm_" + $("zsdq").value + "_kldm_" + $("kldm1").value + ".js"
	if (($("zsdq").value!="")&&($("kldm1").value!=""))
	{
		reloadJs(jsfile);
	}
}
function getyxdm()
{
	ClearSelect('yxmc');
	FillSelect('yxmc','��ѡ��ѧУ','');
	for(var i=0;i<all_yx.length;i++)
	{
		if($('yxssdm').value==all_yx[i][0])
		{
			FillSelect('yxmc',all_yx[i][2],all_yx[i][1]);
		}	
	}
}
function checkform1()
{
	if(form1.yxmc.value=='')
	{
		alert('��ѡ��ѧУ!');
		return false;
	}
	return true;
}
function gotoschool()
{
	if(checkform1())
	{
		form1.yxdm.value=form1.yxmc.value;
		form1.action="http://www.sooedu.cn/jump1.asp?action=school";
		form1.submit();
	}
}
function gotozy()
{
	if(checkform1())
	{
		form1.yxdm.value=form1.yxmc.value;
		form1.action="http://www.sooedu.cn/subjectlistbyschool.asp";
		form1.submit();
	}
}
function gotoSchoolListBySubject()
{
	if(checkform2())
	{
		form2.action="http://gaoxiao.sooxue.com/schoolList.asp";
		form2.submit();
	}
}
function gotofsx()
{
	if(checkform1())
	{
		form1.yxdm.value=form1.yxmc.value;
		form1.action="http://www.sooedu.cn/schoolmark.asp";
		form1.submit();
	}
}
function checkform2()
{
	if(form2.zydm.value=='')
	{
		alert('��ѡ��רҵ����!');
		return false;
	}
	return true;
}
function checkform4()
{
	if(form4.ssdm.value=='')
	{
		alert("��ѡ����������!");
		return false;
	}
	if(form4.kldm.value=='')
	{
		alert("��ѡ��Ʊ�!");
		return false;
	}
	if(form4.mark.value=='')
	{
		alert("������������!");
		return false;
	}
	return true;
}
function checkform5()
{
	if(form5.ssdm.value=='')
	{
		alert("��ѡ����������!");
		return false;
	}
	if(form5.kldm.value=='')
	{
		alert("��ѡ��Ʊ�!");
		return false;
	}
	if(form5.mark.value=='')
	{
		alert("���������λ��!");
		return false;
	}
	return true;
}
function gotozydetail()
{
	if(checkform2())
	{
		form2.action="http://gaoxiao.sooxue.com/subjectDetail.asp";
		form2.submit();
	}
}
function checkform6()
{
	var ddd=form6.ddd.value;
	if(form6.ssdm.value=='')
	{
		alert("��ѡ����������!");
		return false;
	}
	if(form6.kldm.value=='')
	{
		alert("��ѡ��Ʊ�!");
		return false;
	}
	if(form6.kind_v.value=='')
	{
		if(ddd=="mark")
		{
			alert("������������!");
		}	
		if(ddd=="wc")
		{
			alert("���������λ��!");
		}	
		form6.kind_v.focus();
		return false;
	}
	if(ddd=="mark")
	{
		form6.action="http://gaoxiao.sooxue.com/schoolList.asp?mark=" + form6.kind_v.value;
	}	
	if(ddd=="wc")
	{
		form6.action="http://gaoxiao.sooxue.com/schoolList.asp?wc=" + form6.kind_v.value;
	}	
	return true;
}
function checkform7()
{
	if(form7.zsdq.value=="")
	{
		alert("��ѡ����������!");
		return false;
	}
	return true;
}
function get_bkzy1()
{
	ClearSelect('bkzy');
	FillSelect('bkzy','��ѡ��רҵ����','0');
	for(var i=0;i<bk_zy1.length;i++)
	{
		FillSelect('bkzy',bk_zy1[i][1],bk_zy1[i][0]);
	}
	get_bkzy2();
}	
function get_bkzy2()
{
	ClearSelect('zy1');
	FillSelect('zy1','��ѡ��רҵС��','0');
	for(var i=0;i<bk_zy2.length;i++)
	{
		if($('bkzy').value==bk_zy2[i][0])
		{
			FillSelect('zy1',bk_zy2[i][2],bk_zy2[i][1]);
		}
	}
	getzydm();
}
function getzy1()
{
	ClearSelect('zy1');
	for(var i=0;i<list_zy1.length;i++)
	{
		FillSelect('zy1',list_zy1[i][1],list_zy1[i][0]);
	}
}	
function getzydm()
{
	ClearSelect('zydm');
	FillSelect('zydm','��ѡ��רҵ����','');
	for(var i=0;i<list_zy2.length;i++)
	{
		if($('zy1').value==list_zy2[i][0])
		{
			FillSelect('zydm',list_zy2[i][2],list_zy2[i][1]);
		}
	}
}
