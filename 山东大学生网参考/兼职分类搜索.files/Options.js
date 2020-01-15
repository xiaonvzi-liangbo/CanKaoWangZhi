/*******************************************************************
 *输出全国各省辖市下拉列表项writeCitys()
 *输出企业性质下拉列表项writeProperity()
 *输出工作岗位类别下拉列表项writeJobs()
 *输出行业类别下拉列表项writeCalling()
 *输出学历下拉列表项writeDegree()
 *输出更新时间下拉列表项writeUpdateDate()
 *Date:2004-06-28
 *******************************************************************/
 /**输出全国各省辖市下拉列表项*/
function writeCitys()
{
	with(document)
	{
		write("<option value='北京'>北京市</option>");
		write("<option value='天津'>天津市</option>");
		write("<option value='上海'>上海市</option>");
		write("<option value='重庆'>重庆市</option>");
		write("<option value='广东'>广东省</option>");
		write("<option value='江苏'>江苏省</option>");
		write("<option value='浙江'>浙江省</option>");
		write("<option value='福建'>福建省</option>");
		write("<option value='湖南'>湖南省</option>");
		write("<option value='湖北'>湖北省</option>");
		write("<option value='山东'>山东省</option>");
		write("<option value='辽宁'>辽宁省</option>");
		write("<option value='吉林'>吉林省</option>");
		write("<option value='云南'>云南省</option>");
		write("<option value='四川'>四川省</option>");
		write("<option value='安徽'>安徽省</option>");
		write("<option value='江西'>江西省</option>");
		write("<option value='黑龙江'>黑龙江省</option>");
		write("<option value='河北'>河北省</option>");
		write("<option value='陕西'>陕西省</option>");
		write("<option value='海南'>海南省</option>");
		write("<option value='河南'>河南省</option>");
		write("<option value='山西'>山西省</option>");
		write("<option value='内蒙古'>内蒙古自治区</option>");
		write("<option value='广西'>广西壮族自治区</option>");
		write("<option value='贵州'>贵州省</option>");
		write("<option value='宁夏'>宁夏回族自治区</option>");
		write("<option value='青海'>青海省</option>");
		write("<option value='新疆'>新疆维吾尔自治区</option>");
		write("<option value='西藏'>西藏自治区</option>");
		write("<option value='甘肃'>甘肃省</option>");
		write("<option value='台湾'>台湾省</option>");
		write("<option value='香港'>香港特别行政区</option>");
		write("<option value='澳门'>澳门特别行政区</option>");
		write("<option value='国外'>国外</option>");
		write("<option value='其他'>其他</option>");
	}
}
/**输出企业性质下拉列表项*/
function writeProperity()
{
	with(document)
	{
		write("<option value='1'>国有企业</option>");
		write("<option value='2'>外资企业</option>");
		write("<option value='3'>合资企业</option>");
		write("<option value='4'>私营企业</option>");
		write("<option value='5'>民营企业</option>");
		write("<option value='6'>股份制企业</option>");
		write("<option value='7'>集体企业</option>");
		write("<option value='8'>集体事业</option>");
		write("<option value='9'>乡镇企业</option>");
		write("<option value='10'>行政机关</option>");
		write("<option value='11'>社会团体</option>");
		write("<option value='12'>事业单位</option>");
		write("<option value='13'>跨国公司(集团)</option>");
		write("<option value='14'>其他</option>");
	}	
}
/**输出工作岗位类别下拉列表项*/
function writeJobs()
{
	with(document)
	{

                write("<option value='1000'>计算机业(IT)类</option>");
		write("<option value='1100'>销售类</option>");
		write("<option value='4100'>市场营销/公关类</option>");
		write("<option value='4200'>客户服务类</option>");
		write("<option value='1200'>经营/管理类</option>");
		write("<option value='1300'>财务/审(统)计类</option>");
		write("<option value='1900'>公司文职类</option>");
		write("<option value='3100'>行政/人事类</option>");
		write("<option value='3500'>工业/工厂类</option>");
		write("<option value='1500'>电子通讯/电气(器)类</option>");
		write("<option value='1600'>机械(电)/仪表类</option>");
		write("<option value='1400'>金融/保险/证券类</option>");
		write("<option value='1800'>房地产/建筑施工类</option>");
		write("<option value='2100'>广告(装潢、包装)设计类</option>");
		write("<option value='2200'>文体/教育/培训类</option>");
		write("<option value='2400'>卫生医疗/美容保健类</option>");
		write("<option value='2600'>化工/制药类</option>");
		write("<option value='1700'>能源动力类</option>");
		write("<option value='2700'>宾馆饭店/餐饮旅游类</option>");
		write("<option value='2800'>商店/零售服务类</option>");
		write("<option value='3600'>技工/普工类</option>");
		write("<option value='3700'>轻工类</option>");
		write("<option value='2900'>家政/后勤保障类</option>");
		write("<option value='4400'>物流/贸易类</option>");
                write("<option value='4300'>语言翻译类</option>");
		write("<option value='4500'>咨询/顾问类限</option>");
		write("<option value='4600'>法律专业人员类</option>");
		write("<option value='4700'>影视/摄影专业类</option>");
		write("<option value='4800'>编辑/发行类</option>");
		write("<option value='3000'>其他类</option>");
	}	
}

/**输出工作岗位类别下拉列表项*/
function HomeWriteJobs()
{
	with(document)
	{
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1000'>计算机业(IT)类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1100'>销售类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4100'>市场营销/公关类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4200'>客户服务类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1200'>经营/管理类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1300'>财务/审(统)计类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1900'>公司文职类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=3100'>行政/人事类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=3500'>工业/工厂类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1500'>电子通讯/电气(器)类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1600'>机械(电)/仪表类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1400'>金融/保险/证券类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1800'>房地产/建筑施工类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=2100'>广告(装潢、包装)设计类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=2200'>文体/教育/培训类</a><br>");
	}	
}

/**输出工作岗位类别下拉列表项*/
function HomeWriteJobs2()
{
	with(document)
	{
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=2400'>卫生医疗/美容保健类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=2600'>化工/制药类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=1700'>能源动力类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=2700'>宾馆饭店/餐饮旅游类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=2800'>商店/零售服务类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=3600'>技工/普工类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=3700'>轻工类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=2900'>家政/后勤保障类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4300'>语言翻译类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4400'>物流/贸易类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4500'>咨询/顾问类限</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4600'>法律专业人员类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4700'>影视/摄影专业类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=4800'>编辑/发行类</a><br>");
		write("·<a class='list4' href='search_job_list.asp?jobFunction1=3000'>其他类</a>");
	}	
}

/**输出行业类别下拉列表项*/
function writeCalling()
{
	with(document)
	{
		write("<option value='01'>互联网、电子商务</option>");
		write("<option value='02'>计算机业（软件、数据库、系统集成）</option>");
		write("<option value='03'>计算机业（硬件、网络设备）</option>");
		write("<option value='04'>电子、微电子技术</option>");
		write("<option value='05'>通讯、电信业</option>");
		write("<option value='06'>家电业</option>");
		write("<option value='07'>批发零售(百货、超市、购物中心、专卖店…)</option>");
		write("<option value='08'>贸易、商务、进出口</option>");
		write("<option value='09'>电气</option>");
		write("<option value='10'>电力、能源、矿产业</option>");
		write("<option value='11'>石油、化工业</option>");
		write("<option value='12'>生物工程、制药、环保</option>");
		write("<option value='13'>机械制造、机电设备、重工业</option>");
		write("<option value='14'>汽车、摩托车</option>");
		write("<option value='15'>仪器仪表、电工设备</option>");
		write("<option value='16'>广告、公关、设计</option>");
		write("<option value='17'>艺术、文化传播、媒体、影视制作、新闻出版</option>");
		//write("<option value='18'>艺术、文化传播</option>");
		write("<option value='18'>快速消费品（食品、饮料、粮油、化妆品、烟酒…）</option>");
		write("<option value='19'>纺织品业（服饰、鞋类、家纺用品、皮具…）</option>");
		write("<option value='20'>咨询业（顾问、会计师、审计师、法律）</option>");
		write("<option value='21'>金融业（投资、保险、证券、银行、基金）</option>");
		write("<option value='22'>建筑、房地产、物业管理、装潢</option>");
		write("<option value='23'>运输、物流、快递</option>");
		write("<option value='24'>旅游业、餐饮、娱乐、酒店</option>");
		write("<option value='25'>办公设备、文化体育休闲用品、家居用品</option>");
		write("<option value='26'>印刷、包装、造纸</option>");
		write("<option value='27'>生产、制造、加工</option>");
		write("<option value='28'>教育、培训、科研院所</option>");
		write("<option value='29'>医疗、保健、卫生服务</option>");
		write("<option value='30'>人才交流、中介</option>");
		write("<option value='31'>协会、社团、政府公用事业、社区服务</option>");
		write("<option value='32'>农、林、牧、副、渔业</option>");
		write("<option value='33'>法律</option>");
		write("<option value='34'>其他</option>");
	}	
}
/**输出学历下拉列表项(如果该函数有传参数,则默认选中博士,此做法主要是针对企业管理中心的简历搜索的重置)*/
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
		write("<option value='20'>高中</option>");
		write("<option value='30'>中专</option>");
		write("<option value='40'>大专</option>");
		write("<option value='50'>本科</option>");
		write("<option value='60'>硕士</option>");														
		write("<option value='70' "+strSelected+">博士</option>");				
	}
}
/**输出更新时间下拉列表项*/
function writeUpdateDate()
{
	with(document)
	{
		write("<option value='99999'>不限</option>");
		write("<option value='1'>1天内</option>");
		write("<option value='3'>3天内</option>");
		write("<option value='7'>一周内</option>");
		write("<option value='15'>半月内</option>");
		write("<option value='30'>一个月内</option>");
		write("<option value='90' selected>三个月内</option>");
		write("<option value='183'>半年内</option>");
		write("<option value='366'>一年内</option>");
	}	
}