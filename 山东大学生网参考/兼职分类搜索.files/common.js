<!--
/**��������*/
var jobLen=3;  
/**ɾ���û�����Ŀո�*/
function delnbsp(strs)
{
          var Finds=/ /g;
          strs=strs+strs.replace(Finds,"");
          return strs;
}
/**��������������б�ѡ������һ��*/
function writeOptionAndSel(varFrom,varTo,varSel)
{
	var strSel;
	for(var i=varFrom;i<=varTo;i++)
	{
		if(i==varSel) strSel="selected";
		document.write("<option "+strSel+" VALUE="+i+">"+i+"</option>");
		strSel="";
	}
}
/**����һ�����ɼ�����(ע���������������)*/
function openHideWin(sPath)
{
    window.open(sPath,'welcome','width=10px,height=10px,top=2000px,left=2000px');
    //window.open(sPath,'welcome','width=300px,height=500px,top=20px,left=20px');
}
/**����������*/
function mOvr(src,clrOver) 
{
	if (!src.contains(event.fromElement)) 
	{
		src.style.cursor = 'hand'; src.bgColor = clrOver;
	}
}
/**����뿪���*/
function mOut(src,clrIn) 
{
	if (!src.contains(event.toElement)) 
	{
		src.style.cursor = 'default'; src.bgColor = clrIn;
	}
}
/**����һ������*/
function openwin(file,width,height)
{
	window.open(file,"_setPartCom","width="+width+",height="+height+", resizable=yes scrollbars=yes");
}
/*Ѱ�����*/
function MM_findObj(n, d) 
{
	var p,i,x;
	if(!d)
	{
		d=document;
	}
	if((p=n.indexOf("?"))>0&&parent.frames.length) 
	{
		d=parent.frames[n.substring(p+1)].document;
		n=n.substring(0,p);
	}
	if(!(x=d[n])&&d.all)
	{
		x=d.all[n];
	}
	for (i=0;!x&&i<d.forms.length;i++)
	{
		x=d.forms[i][n];
	}
	for(i=0;!x&&d.layers&&i<d.layers.length;i++)
	{
		x=MM_findObj(n,d.layers[i].document);
	}
	return x;
}
/**��ʾ���������*/
function MM_showHideLayers() 
{ 
	var i,p,v,obj,args=MM_showHideLayers.arguments;
	for (i=0; i<(args.length-2); i+=3) 
	{
		if ((obj=MM_findObj(args[i]))!=null) 
		{
			v=args[i+2];
		}
		if (obj.style) 
		{
			obj=obj.style; v=(v=='show')?'visible':(v='hide')?'hidden':v;
		}
		obj.visibility=v;
	}
}
/**��С����*/
function openWindow_little(url)
{
	window.open(url,'','width=254,height=167,left=400,top=300,Resizable=0,menuBar=0,toolBar=0,scrollbars=no');
}
/**
*��һ���С�Ĵ���
*/
function openWindow_middle(url)
{
    window.open(url,'','width=254,height=167,left=400,top=300,Resizable=0,menuBar=0,toolBar=0,scrollbars=no');
}
/**�س�ʱʹ��varObj�õ�����*/
function thisForm_onkeydown(varObj)
{
	if(window.event.keyCode==13 && typeof(varObj)=="object")
	{
		varObj.focus();
	}
}
/**
*�����б��ֵ�ĸı�
*mainitem:�����Ԫ��
*subitem:�����Ԫ��
*catalog:����(���С�ְλ������Ҫ�Ƿ��㺯��������)
*
*/
function selectOnchange(mainitem,subitem,catalog)
{
	var flag = 1; //��ʾӢ��
	if (document.location.href.indexOf("_En.jsp")=="-1") flag = 0; //��ʾ����
	setSubSelectItem(catalog,mainitem,subitem,flag);
}
/**
*��ʼ�������Ԫ�ص�ֵ
*catalog�����
*mainitem��������
*subitem���Ӷ���
*/
function initSubSelectItem(catalog,mainitem,subitem)
{
	var itemCount;
	var items = new Array();
	var mainvalue=mainitem.options[mainitem.selectedIndex].value;
	var subvalue=subitem.options[subitem.selectedIndex].value;
	if(catalog=='city0')/**���Ϊ����*/
	{
		subitem.length = 0;
		var selected = 0;
		itemCount = cityCount;
		items = citys;
		for (i=0;i < itemCount; i++)
		{
			if (items[i][1] == mainvalue)
			{
				var opt=document.createElement("OPTION");
				opt.text=items[i][2];
				opt.value=items[i][2];
				if(items[i][3] != 1)
				{
					subitem.add(opt);
				}
			}
		}
		for (i=0;i < subitem.length; i++)
		{
			if(subitem.options[i].value == subvalue)
			{
				subitem.options[i].selected=true;
			}
		}
	}
	if(catalog=='city1')/**���Ϊ����*/
	{
		subitem.length = 0;
		var selected = 0;
		itemCount = cityCount;
		items = citys;
		for (i=0;i < itemCount; i++)
		{
			if (items[i][1] == mainvalue)
			{
				var opt=document.createElement("OPTION");
				opt.text=items[i][0];
				opt.value=items[i][2];
				if(items[i][3] != 1 && items[i][0].indexOf("����")=="-1")
				{
					subitem.add(opt);
				}
			}
		}
		for (i=0;i < subitem.length; i++)
		{
			if(subitem.options[i].value == subvalue)
			{
				subitem.options[i].selected=true;
				break;
			}
		}
	}
}
/**
*���������Ԫ�ص�ֵ
*catalog�����
*mainitem��������
*subitem���Ӷ���
*flag����־λ
*/
function setSubSelectItem(catalog,mainitem,subitem,flag)
{
	var itemCount;
	var items = new Array();
	var filterStr='��������Ϻ�����';
	var subvalue=mainitem.options[mainitem.selectedIndex].value;    
	var szHref = document.location.href.toUpperCase();
	if(catalog=='jobcatelog')
	{
		subitem.length = 0;
		itemCount = catelogCount;
		items = catelogs;
		var opt=document.createElement("OPTION");
		if((subvalue == '') || (subvalue=='0'))
		{            
			opt.text="����";
			opt.value="";            
			subitem.add(opt);
		}
		var bWork = ((szHref.indexOf('PER_')>-1||szHref.indexOf('GR_')>-1) && (szHref.indexOf('RESUME_SEARCH')<0) );
		var bJob = ((szHref.indexOf('_XCAREERWILL')>-1)||(szHref.indexOf('_REGISTRYSTEPTWO')>-1)||(szHref.indexOf('_AUDIT')>-1));
		for (i=0;i<itemCount; i++)
		{
			if ((items[i][2]).substring(0,2) == subvalue.substring(0,2))
			{
				if ( (bJob&&i<itemCount-1) || (bWork&&i<itemCount-1))
				{
					var opt=document.createElement("OPTION");
					if (flag==1)  opt.text=items[i+1][1];
					else  opt.text=items[i+1][0];
					opt.value=items[i+1][2];					
					if (opt.value.substring(0,2) == subvalue.substring(0,2) && i<itemCount-2)  subitem.add(opt);
				}
				else
				{
					var opt=document.createElement("OPTION");
					if (flag==1)  opt.text=items[i][1];
					else  opt.text=items[i][0];
					opt.value=items[i][2];					
					subitem.add(opt);
				}
			}
		}
	}
	else if(catalog=='citys_en') 
	{   
		subitem.length = 0;
		itemCount = cityCount;
		items = citys;
		var key_idx = '';
		for (i=0;i < itemCount; i++)
		{
			if (flag==1 && subvalue=='Qita')
			{
				var opt=document.createElement("OPTION");
				opt.text='Qita'; opt.value='Qita';
				subitem.add(opt);
				return ;
			}
			var bOk = (flag==1 && items[i][3]!='' && subvalue!='' && subvalue == items[i][3]);
			if (bOk) { key_idx = items[i][1]; } 
			if (key_idx != items[i][1]) key_idx = '';
			var bMy = ((mainitem.name=='hometown_p' || mainitem.name=='location_p') && ((szHref.indexOf('PER_')>-1)||(szHref.indexOf('GR_')>-1)||(szHref.indexOf('AUDIT')>-1)));
			var bJb = ((mainitem.name.indexOf('jobLocation')>-1) && ((szHref.indexOf('PER_')>-1)||(szHref.indexOf('GR_')>-1)||(szHref.indexOf('AUDIT')>-1)));
			if (items[i][1] == key_idx)
			{
				var opt=document.createElement("OPTION");
				var tmp_v = '';
				if (bMy && i<itemCount-1)
				{
					if ((key_idx.indexOf('����')>-1 || key_idx.indexOf('���')>-1 || key_idx.indexOf('�Ϻ�')>-1 || key_idx.indexOf('����')>-1))
					{
						tmp_v=items[i][1];
						opt.text='';
						opt.value='';
					}
					else
					{
						tmp_v=items[i+1][1];
						if (flag==1) 
						{ 
							opt.text=items[i+1][3]; 
							opt.value=items[i+1][3]; 
						}
						else 
						{ 
							opt.text=items[i+1][2]; 
							opt.value=items[i+1][2]; 
						}
					}
				}
				if (bJb)
				{
					if (flag==1) 
					{ 
						opt.text=items[i][3]; 
						opt.value=items[i][3]; 
					}
					else 
					{ 
						opt.text=items[i][0].replace('��-',''); 
						opt.value=items[i][1]; 
					}
					tmp_v = items[i][1];
				}
				if(items[i][1] == tmp_v) subitem.add(opt);
			}
		}
	}
	else if(catalog=='citys0')
	{
		subitem.length = 0;
		itemCount = cityCount;
		items = citys;
		var opt=document.createElement("OPTION");
		for (i=0;i < itemCount; i++)
		{
			var bOk = (flag==1 && items[i][1]!='' && subvalue!='' && subvalue.indexOf(items[i][1])>-1) ;
			var bMy = ((mainitem.name=='hometown_p' || mainitem.name=='location_p') && ((szHref.indexOf('PER_')>-1)||(szHref.indexOf('GR_')>-1)||(szHref.indexOf('AUDIT')>-1)));
			var bJb = ((mainitem.name.indexOf('jobLocation')>-1) && ((szHref.indexOf('PER_')>-1)||(szHref.indexOf('GR_')>-1)||(szHref.indexOf('AUDIT')>-1)));
			if (items[i][1] == subvalue || bOk)
			{
				var opt=document.createElement("OPTION");
				var tmp_v = items[i][1]; 
				if (flag==1) opt.text=items[i][3];
				else opt.text=items[i][2];
				opt.value=items[i][2];
				if (bMy && i<itemCount-1)
				{
					if (flag==1) opt.text=items[i+1][3];
					else opt.text=items[i+1][2];
					opt.value=items[i+1][2];
					tmp_v=items[i+1][1]; 
				}
				if (bMy && (subvalue.indexOf('����')>-1 || subvalue.indexOf('���')>-1 || subvalue.indexOf('�Ϻ�')>-1 || subvalue.indexOf('����')>-1))
				{
					opt.text='';
					opt.value='';
				}
				if (bJb)
				{
					if (flag==1) opt.text=items[i][3];
					else opt.text=items[i][0].replace('��-','');
				}            
				if(items[i][1] == tmp_v) subitem.add(opt);
			}
		}
	}
	else if(catalog=='citys1')//���Ϊ����
	{
		var bSearch = ((szHref.indexOf('PER_')>-1||szHref.indexOf('GR_')>-1) && (szHref.indexOf('RESUME_SEARCH')>-1) );
		subitem.length = 0;
		itemCount = cityCount;
		items = citys;
		var opt=document.createElement("OPTION");
		if((subvalue == ''))
		{            
			opt.text="����";
			opt.value="";            
			subitem.add(opt);
		}
		for (i=0;i < itemCount; i++)
		{
			if (items[i][1] == subvalue)
			{
				var opt=document.createElement("OPTION");
				opt.text=items[i][0];                                       
				opt.value=items[i][2];                   
				if (bSearch) opt.value=items[i][2];
				if(document.location.href.indexOf('company')=='-1')
				{
					subitem.add(opt);
				}
				//�˴�Ϊ��ҵ������������ҳ�洦��
				else if(document.location.href.indexOf('searchfast.jsp')!='-1' || document.location.href.indexOf('searcheradd.jsp')!='-1')
				{                    
					subitem.add(opt);
				}
				else
				{
					if(filterStr.indexOf(opt.value)=='-1')
					{
						if(opt.text.indexOf('����')=='-1')
						{
							subitem.add(opt);
						}
					}
					else
					{
						if(mainitem.name=='province')
						{                                
							subitem.add(opt);
						}
					}
				}
			}
		}
	}
}
/**
*���ѧ����������ȴ�С
*obj1:
*obj2:
*/
function selectOnChange(obj1, obj2)
{
	var m=document.thisForm;
	if(typeof(obj1.options[obj1.selectedIndex])=="unknown" ||typeof(obj2.options[obj2.selectedIndex])=="unknown")
	{
		retrun ;
	}
	var idx1 = obj1.selectedIndex;
	var idx2 = obj2.selectedIndex;

	if (idx1 > idx2)
	{
		obj2.selectedIndex = idx1;
	}
}
function selectCheck(obj1, obj2)
{
	var m=document.thisForm;
	if(typeof(obj1.options[obj1.selectedIndex])=="unknown" || typeof(obj2.options[obj2.selectedIndex])=="unknown")
	{
		retrun ;
	}
	var idx1 = obj1.selectedIndex;
	var idx2 = obj2.selectedIndex;
	if (parseInt(obj1.value) > parseInt(obj2.value))
	{
		obj2.selectedIndex = idx1;
	}
}
/**
*���ѡ���б������Ԫ��
*mObject:��ѡ��
*sObject:Դ����
*tObject:Ŀ�����
*catalog:������־
*/
function multiSelect_additem(mObject,sObject,tObject,catalog)
{
	var itemtext,itemvalue;   
	var szHref = document.location.href.toUpperCase();
	var bPs = szHref.indexOf('PER_FULLFUNCSEARCHER.JSP')>-1  ;
	var bPm = szHref.indexOf('PER_MOREDETAILSEARCHER.JSP')>-1;
	var bPea = szHref.indexOf('PER_EDITADDSEARCHER.JSP')>-1; 
	/**������������������*/
	if(catalog=='citys')
	{
		if(sObject.options [sObject.selectedIndex].text.indexOf("����")>-1)
		{
			itemtext=sObject.options [sObject.selectedIndex].text;
		}
		else
		{
			var text1=mObject.options [mObject.selectedIndex].text;
			var text2=sObject.options [sObject.selectedIndex].text.replace("��-","").replace("�N","");
			if(text1!=text2)
			{
				itemtext=text1 + text2;
			}
			else
			{
				itemtext=text1;
			}
		}
		if(document.location.href.indexOf('company')=="-1")
		{
			itemvalue=sObject.options[sObject.selectedIndex].value; //Edit by Lzj.Liu
		}
		else
		{
			if(itemvalue=mObject.options[mObject.selectedIndex].value!=sObject.options[sObject.selectedIndex].value.replace("",""))
			{
				itemvalue=itemvalue=mObject.options[mObject.selectedIndex].value+sObject.options[sObject.selectedIndex].value;
			}
			else
			{
				itemvalue=itemvalue=mObject.options[mObject.selectedIndex].value;
			}
		}
		//alert("itemtext"+itemtext);
		//alert("itemvalue"+itemvalue);
		var option=document.createElement("OPTION");
		option.text=itemtext;
		option.value=itemvalue;
		if(option.text.indexOf("��-")!="-1")
		{
			option.text=option.text.replace("��-","");
		}
		if(option.text.indexOf("ʡ")!="-1")
		{
			option.text=option.text.replace("ʡ","");
		}
		if(option.text.indexOf("��")!="-1")
		{
			option.text=option.text.replace("��","");
		}
		if(option.text.indexOf("-����")!="-1")
		{
			option.text=option.text.replace("-����","");
		}
		if (tObject.length<3)
		{
			for(i=0;i<tObject.length;i++)
			{
				v=tObject.options[i].value;
				t=tObject.options[i].text;
				if (option.value=='') return;
				if((bPs || bPm || bPea) && (v=='-1' || option.text.indexOf(t)>-1 || t.indexOf(option.text)>-1)) return; //edited by liujy 2004-05-21 17:22:40
				if(t=="����")   return;//Ŀ����ı�Ϊ�����ޡ�
				if(itemtext=="����")    return;//Դ���ı�Ϊ�����ޡ�
				if(v==itemvalue)    return;//Ŀ���Դ��ֵ��ȡ�
				else
				{
					if (t.indexOf("-����")>-1)//Ŀ����ı����С����ޡ�
					{
						if(itemtext.substring(0,3)==t.substring(0,3)){return;}
					}
					if (itemtext.indexOf("-����")>-1)//Դ���ı����в���
					{
						if(itemtext.substring(0,3)==t.substring(0,3)){return;}
					}
				}
			}
			setJobLocaPara(mObject,sObject,tObject); // add by liujy 2004-03-10 05:11:07
			tObject.add(option);
			setJobLocation(tObject);
		}
	}
	/**������λ������������������*/
	else if(catalog=='jobcatelog')
	{
		if(sObject.options [sObject.selectedIndex].text.indexOf("����")>-1)
		{
			itemtext=sObject.options [sObject.selectedIndex].text;
		}
		else
		{
			itemtext=mObject.options [mObject.selectedIndex].text +"-"+ sObject.options [sObject.selectedIndex].text;
		}
		itemvalue=sObject.options[sObject.selectedIndex].value;
		var option=document.createElement("OPTION");
		option.text=itemtext;
		option.value=itemvalue;
		if (tObject.length<3)/**���ֻ��ѡ������*/
		{
			for(i=0;i<tObject.length;i++)
			{
				v=tObject.options[i].value;
				t=tObject.options[i].text;               
				if((bPm || bPs) && (v=="-1")) return; 
				if (option.value=='') return;
				if(t=='����')
				{
					return ;
				}
				if(v==itemvalue)    
				{             
					alert('���Ѿ�ѡ���˸���!');  	
					return;
				}
				else
				{
					if (t.indexOf("-����")>-1)		/**Ŀ����ı����С����ޡ�*/
					{
						if(itemtext.substring(0,4)==t.substring(0,4))
						{
							alert('���Ѿ�ѡ���˴˹�����λ���ڵ������!');
							return;
						}
					}
					if (itemtext.indexOf("-����")>-1)	/**Դ�ı����в���**/
					{
						if(itemtext.substring(0,4)==t.substring(0,4))
						{
							return;
						}
					}
				}
			}
			tObject.add(option);            
			//����ְλʱ���Ӹ�λ���
			var m=document.thisForm;
			var jobFunction=m.jobFunction;
			var jobSel=m.jobcatelog;
			if(typeof(m)=="object" && typeof(jobSel)=="object")
			{
				for(var j=0;j<jobSel.length;j++)
				{
					var intK=parseInt(j+1);
					var jobFunction=eval("m.jobFunction"+intK);
					if(typeof(jobFunction)=="object" && typeof(jobSel.options[j])=="object")
					{
						jobFunction.value=jobSel.options[j].value;
					}
				}
				if(jobSel.length<jobLen)
				{
					m.jobFunction3.value="";
				}
			}
		}
		else
		{
			alert("���Ѿ�ѡ��������!");
			return;	
		}
	}

}
function multiSelect_removeitem(Object){
    
    var m=document.thisForm;
    var jobFunction=m.jobFunction;
    var jobSel=m.jobcatelog;
    if(typeof(Object.options[Object.selectedIndex])=="unknown"){
        alert("ϵͳ��ʾ:��ѡ������Ҫ�Ƴ���������!");
        Object.focus();
    }

    if(Object.name=="jobcatelog" && document.location.href.indexOf("company")=="-1"){
        //delJobFunc(Object) ; 
    }
    if(Object.name=="workplace"){
        delJobLocaPara(Object) ;
    }
    if(typeof(m)=="object" && Object.name=="jobcatelog"){
        for(var j=1;j<=jobSel.length;j++){
            var jobFunction=eval("m.jobFunction"+j);
            if(typeof(jobFunction)=="object"){
                if(typeof(Object.options[Object.selectedIndex])!="unknown" && jobFunction.value==Object.options[Object.selectedIndex].value){
                   jobFunction.value="";
                   break;
                }
            }
        }
    }
    if(Object.selectedIndex>-1){
        Object.remove(Object.selectedIndex);
    }
    if(Object.name=="workplace"){
        setJobLocation(Object);
    }

    if(Object.length==0 && Object.name=="jobcatelog"){
        for(var x=1;x<=jobLen;x++){
            var jobFunctions=eval("m.jobFunction"+x);
            jobFunctions.value="";
        }
    }
}
//�趨��������jobLocation
function setJobLocation(tObject){
            var strLocation="";
            for(var x=0;x<tObject.length;x++){
                strLocation=tObject.options[x].value +";" + strLocation;
            }
            var m=document.thisForm;
            if(typeof(m)=="object"){
                var jobLocation=m.JobLocation;
                if(typeof(jobLocation)=="object"){
                    jobLocation.value=strLocation;
                }
            }
}
//��ҵ��Աע��ͨѶ��ַ�趨
function setAddr(){
        var selAddr=document.all.addressSel;
        var addrList=document.all.address_C;
        if(typeof(selAddr)=="object" && typeof(addrList)=="object"){
            if(selAddr.value!=""){
                for(var i=0;i<addrList.length;i++){
                    if(addrList.options(i).text==selAddr.value){
                        addrList.options(i).selected=true;
                        break;
                    }
                }
            }
        }
}


//�趨��������jobLocaPara����
function setJobLocaPara(mObject,sObject,tObject)
{
    var iLen = tObject.length;
    var m=document.thisForm;
    if (iLen == 0)
    {
        if(typeof(m)=="object"){
            var p1 = m.jobLocation1_p;
            if(typeof(p1)=="object"){
                p1.value = mObject.options[mObject.selectedIndex].value;
            }
            var c1 = m.jobLocation1_c;
            if(typeof(c1)=="object"){
                c1.value = sObject.options[sObject.selectedIndex].value;
            }
        }
    }
    else if (iLen == 1)
    {
        if(typeof(m)=="object"){
            var p2 = m.jobLocation2_p;
            if(typeof(p2)=="object"){
                p2.value = mObject.options[mObject.selectedIndex].value;
            }
            var c2 = m.jobLocation2_c;
            if(typeof(c2)=="object"){
                c2.value = sObject.options[sObject.selectedIndex].value;
            }
        }
    }
    else if (iLen == 2)
    {
        if(typeof(m)=="object"){
            var p3 = m.jobLocation3_p;
            if(typeof(p3)=="object"){
                p3.value = mObject.options[mObject.selectedIndex].value;
            }
            var c3 = m.jobLocation3_c;
            if(typeof(c3)=="object"){
                c3.value = sObject.options[sObject.selectedIndex].value;
            }
        }
    }
}


//�����������jobLocaPara����
function delJobLocaPara(obj)
{
    //alert("hello 234");
    var m=document.thisForm;
    if(typeof(obj.options[obj.selectedIndex])=="unknown"){
        //alert("ϵͳ��ʾ:��ѡ������Ҫ�Ƴ���������!");
        //Object.focus();
        return;
    }
    var idx = obj.selectedIndex;
    //alert("idx="+idx);
    if (idx == 2)
    {
        if(typeof(m)=="object"){
            var p3 = m.jobLocation3_p;
            if(typeof(p3)=="object"){
                p3.value = '';
            }
            var c3 = m.jobLocation3_c;
            if(typeof(c3)=="object"){
                c3.value = ''
            }
        }
    }
    else if (idx == 1)
    {
        if(typeof(m)=="object"){
            var p3 = m.jobLocation3_p;
            var p2 = m.jobLocation2_p;
            if(typeof(p3)=="object"){
                if (typeof(p2)=="object") {
                   p2.value = p3.value;
                   p3.value = '';
                }
            }
            var c3 = m.jobLocation3_c;
            var c2 = m.jobLocation2_c;
            if(typeof(c3)=="object"){
                if (typeof(c2)=="object") {
                   c2.value = c3.value;
                   c3.value = '';
                }
            }
        }
    }
    else if (idx == 0)
    {
        if(typeof(m)=="object"){
            var p3 = m.jobLocation3_p;
            var p2 = m.jobLocation2_p;
            var p1 = m.jobLocation1_p;
            if(typeof(p3)=="object"){
                if (typeof(p1)=="object") {
                   p1.value = p2.value;
                }
                if (typeof(p2)=="object") {
                   p2.value = p3.value;
                   p3.value = '';
                }
            }
            var c3 = m.jobLocation3_c;
            var c2 = m.jobLocation2_c;
            var c1 = m.jobLocation1_c;
            if(typeof(c3)=="object"){
                if (typeof(c1)=="object") {
                   c1.value = c2.value;
                }
                if (typeof(c2)=="object") {
                   c2.value = c3.value;
                   c3.value = '';
                }
            }
        }
    }  //idx = 0

}
//more:obj1.value>obj2.value;less:obj1.value<obj2.value
function setSelected(obj1,obj2,oprate)
{
	//alert(obj1.name+obj1.value+"========"+obj2.name+obj2.value+"+++++++"+oprate);
	if(typeof(obj1)=="object" && typeof(obj2)=="object")
	{
		switch(oprate)
		{
			case "more":				
				if(parseInt(obj1.value)<parseInt(obj2.value))
				{
					//obj1.selectedIndex=obj2.selectedIndex+1;
					obj2.selectedIndex=obj2.defaultSelected;
					return false;	
				}		
				break;
			case "less":				
				if(parseInt(obj1.value)>parseInt(obj2.value))
				{
					//obj1.selectedIndex=obj2.selectedIndex-1;
					obj1.selectedIndex=obj1.defaultSelected;
					return false;
				}
				break;	
		}	
	}
}
//-->