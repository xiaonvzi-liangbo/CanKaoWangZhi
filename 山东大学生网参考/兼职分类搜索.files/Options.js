/*******************************************************************
 *���ȫ����ʡϽ�������б���writeCitys()
 *�����ҵ���������б���writeProperity()
 *���������λ��������б���writeJobs()
 *�����ҵ��������б���writeCalling()
 *���ѧ�������б���writeDegree()
 *�������ʱ�������б���writeUpdateDate()
 *Date:2004-06-28
 *******************************************************************/
 /**���ȫ����ʡϽ�������б���*/
function writeCitys()
{
	with(document)
	{
		write("<option value='����'>������</option>");
		write("<option value='���'>�����</option>");
		write("<option value='�Ϻ�'>�Ϻ���</option>");
		write("<option value='����'>������</option>");
		write("<option value='�㶫'>�㶫ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='�㽭'>�㽭ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='ɽ��'>ɽ��ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='�Ĵ�'>�Ĵ�ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='������'>������ʡ</option>");
		write("<option value='�ӱ�'>�ӱ�ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='ɽ��'>ɽ��ʡ</option>");
		write("<option value='���ɹ�'>���ɹ�������</option>");
		write("<option value='����'>����׳��������</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='����'>���Ļ���������</option>");
		write("<option value='�ຣ'>�ຣʡ</option>");
		write("<option value='�½�'>�½�ά���������</option>");
		write("<option value='����'>����������</option>");
		write("<option value='����'>����ʡ</option>");
		write("<option value='̨��'>̨��ʡ</option>");
		write("<option value='���'>����ر�������</option>");
		write("<option value='����'>�����ر�������</option>");
		write("<option value='����'>����</option>");
		write("<option value='����'>����</option>");
	}
}
/**�����ҵ���������б���*/
function writeProperity()
{
	with(document)
	{
		write("<option value='1'>������ҵ</option>");
		write("<option value='2'>������ҵ</option>");
		write("<option value='3'>������ҵ</option>");
		write("<option value='4'>˽Ӫ��ҵ</option>");
		write("<option value='5'>��Ӫ��ҵ</option>");
		write("<option value='6'>�ɷ�����ҵ</option>");
		write("<option value='7'>������ҵ</option>");
		write("<option value='8'>������ҵ</option>");
		write("<option value='9'>������ҵ</option>");
		write("<option value='10'>��������</option>");
		write("<option value='11'>�������</option>");
		write("<option value='12'>��ҵ��λ</option>");
		write("<option value='13'>�����˾(����)</option>");
		write("<option value='14'>����</option>");
	}	
}
/**���������λ��������б���*/
function writeJobs()
{
	with(document)
	{

                write("<option value='1000'>�����ҵ(IT)��</option>");
		write("<option value='1100'>������</option>");
		write("<option value='4100'>�г�Ӫ��/������</option>");
		write("<option value='4200'>�ͻ�������</option>");
		write("<option value='1200'>��Ӫ/������</option>");
		write("<option value='1300'>����/��(ͳ)����</option>");
		write("<option value='1900'>��˾��ְ��</option>");
		write("<option value='3100'>����/������</option>");
		write("<option value='3500'>��ҵ/������</option>");
		write("<option value='1500'>����ͨѶ/����(��)��</option>");
		write("<option value='1600'>��е(��)/�Ǳ���</option>");
		write("<option value='1400'>����/����/֤ȯ��</option>");
		write("<option value='1800'>���ز�/����ʩ����</option>");
		write("<option value='2100'>���(װ�ꡢ��װ)�����</option>");
		write("<option value='2200'>����/����/��ѵ��</option>");
		write("<option value='2400'>����ҽ��/���ݱ�����</option>");
		write("<option value='2600'>����/��ҩ��</option>");
		write("<option value='1700'>��Դ������</option>");
		write("<option value='2700'>���ݷ���/����������</option>");
		write("<option value='2800'>�̵�/���۷�����</option>");
		write("<option value='3600'>����/�չ���</option>");
		write("<option value='3700'>�Ṥ��</option>");
		write("<option value='2900'>����/���ڱ�����</option>");
		write("<option value='4400'>����/ó����</option>");
                write("<option value='4300'>���Է�����</option>");
		write("<option value='4500'>��ѯ/��������</option>");
		write("<option value='4600'>����רҵ��Ա��</option>");
		write("<option value='4700'>Ӱ��/��Ӱרҵ��</option>");
		write("<option value='4800'>�༭/������</option>");
		write("<option value='3000'>������</option>");
	}	
}

/**���������λ��������б���*/
function HomeWriteJobs()
{
	with(document)
	{
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1000'>�����ҵ(IT)��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1100'>������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4100'>�г�Ӫ��/������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4200'>�ͻ�������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1200'>��Ӫ/������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1300'>����/��(ͳ)����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1900'>��˾��ְ��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=3100'>����/������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=3500'>��ҵ/������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1500'>����ͨѶ/����(��)��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1600'>��е(��)/�Ǳ���</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1400'>����/����/֤ȯ��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1800'>���ز�/����ʩ����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=2100'>���(װ�ꡢ��װ)�����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=2200'>����/����/��ѵ��</a><br>");
	}	
}

/**���������λ��������б���*/
function HomeWriteJobs2()
{
	with(document)
	{
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=2400'>����ҽ��/���ݱ�����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=2600'>����/��ҩ��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=1700'>��Դ������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=2700'>���ݷ���/����������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=2800'>�̵�/���۷�����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=3600'>����/�չ���</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=3700'>�Ṥ��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=2900'>����/���ڱ�����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4300'>���Է�����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4400'>����/ó����</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4500'>��ѯ/��������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4600'>����רҵ��Ա��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4700'>Ӱ��/��Ӱרҵ��</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=4800'>�༭/������</a><br>");
		write("��<a class='list4' href='search_job_list.asp?jobFunction1=3000'>������</a>");
	}	
}

/**�����ҵ��������б���*/
function writeCalling()
{
	with(document)
	{
		write("<option value='01'>����������������</option>");
		write("<option value='02'>�����ҵ����������ݿ⡢ϵͳ���ɣ�</option>");
		write("<option value='03'>�����ҵ��Ӳ���������豸��</option>");
		write("<option value='04'>���ӡ�΢���Ӽ���</option>");
		write("<option value='05'>ͨѶ������ҵ</option>");
		write("<option value='06'>�ҵ�ҵ</option>");
		write("<option value='07'>��������(�ٻ������С��������ġ�ר���ꡭ)</option>");
		write("<option value='08'>ó�ס����񡢽�����</option>");
		write("<option value='09'>����</option>");
		write("<option value='10'>��������Դ�����ҵ</option>");
		write("<option value='11'>ʯ�͡�����ҵ</option>");
		write("<option value='12'>���﹤�̡���ҩ������</option>");
		write("<option value='13'>��е���졢�����豸���ع�ҵ</option>");
		write("<option value='14'>������Ħ�г�</option>");
		write("<option value='15'>�����Ǳ��繤�豸</option>");
		write("<option value='16'>��桢���ء����</option>");
		write("<option value='17'>�������Ļ�������ý�塢Ӱ�����������ų���</option>");
		//write("<option value='18'>�������Ļ�����</option>");
		write("<option value='18'>��������Ʒ��ʳƷ�����ϡ����͡���ױƷ���̾ơ���</option>");
		write("<option value='19'>��֯Ʒҵ�����Ρ�Ь�ࡢ�ҷ���Ʒ��Ƥ�ߡ���</option>");
		write("<option value='20'>��ѯҵ�����ʡ����ʦ�����ʦ�����ɣ�</option>");
		write("<option value='21'>����ҵ��Ͷ�ʡ����ա�֤ȯ�����С�����</option>");
		write("<option value='22'>���������ز�����ҵ����װ��</option>");
		write("<option value='23'>���䡢���������</option>");
		write("<option value='24'>����ҵ�����������֡��Ƶ�</option>");
		write("<option value='25'>�칫�豸���Ļ�����������Ʒ���Ҿ���Ʒ</option>");
		write("<option value='26'>ӡˢ����װ����ֽ</option>");
		write("<option value='27'>���������졢�ӹ�</option>");
		write("<option value='28'>��������ѵ������Ժ��</option>");
		write("<option value='29'>ҽ�ơ���������������</option>");
		write("<option value='30'>�˲Ž������н�</option>");
		write("<option value='31'>Э�ᡢ���š�����������ҵ����������</option>");
		write("<option value='32'>ũ���֡�����������ҵ</option>");
		write("<option value='33'>����</option>");
		write("<option value='34'>����</option>");
	}	
}
/**���ѧ�������б���(����ú����д�����,��Ĭ��ѡ�в�ʿ,��������Ҫ�������ҵ�������ĵļ�������������)*/
function writeDegree()
{
	var strSelected;
	if(writeDegree.arguments.length==0)
	{
		strSelected="";
	}
	else
	{
		//alert(writeDegree.arguments.callee);
		strSelected="selected";	
	}
	with(document)
	{				
		write("<option value='20'>����</option>");
		write("<option value='30'>��ר</option>");
		write("<option value='40'>��ר</option>");
		write("<option value='50'>����</option>");
		write("<option value='60'>˶ʿ</option>");														
		write("<option value='70' "+strSelected+">��ʿ</option>");				
	}
}
/**�������ʱ�������б���*/
function writeUpdateDate()
{
	with(document)
	{
		write("<option value='99999'>����</option>");
		write("<option value='1'>1����</option>");
		write("<option value='3'>3����</option>");
		write("<option value='7'>һ����</option>");
		write("<option value='15'>������</option>");
		write("<option value='30'>һ������</option>");
		write("<option value='90' selected>��������</option>");
		write("<option value='183'>������</option>");
		write("<option value='366'>һ����</option>");
	}	
}