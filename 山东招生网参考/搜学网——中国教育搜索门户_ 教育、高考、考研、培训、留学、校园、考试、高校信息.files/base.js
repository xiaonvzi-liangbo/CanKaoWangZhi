var Browser = new Object();
Browser.isMozilla = (typeof document.implementation != 'undefined') && (typeof document.implementation.createDocument != 'undefined') && (typeof HTMLDocument!='undefined');
Browser.isIE = window.ActiveXObject ? true : false;
Browser.isFirefox = (navigator.userAgent.toLowerCase().indexOf("firefox")!=-1);
Browser.isOpera = (navigator.userAgent.toLowerCase().indexOf("opera")!=-1);
function $(id){return document.getElementById?document.getElementById(id):null;}
function FillSelect(obj,text,value){
   if(Browser.isIE)
   {
		$(obj).add(new Option(text,value)); 
	}
   if(Browser.isFirefox)
   {
		$(obj).appendChild(new Option(text,value)); 
   } 
}
function ClearSelect(obj){
 for(var i= $(obj).length;i>=0;i--){
   $(obj).remove(i);
 }
}
function reloadJs(file){
var _js = document.createElement('script'); 
_js.type = "text/javascript";
_js.src = file
document.body.appendChild(_js); 
}

function c_yx(){
	var yxsl=0;
	ClearSelect('s3');
	FillSelect('s3',ary_yx[0][2],ary_yx[0][1]);
	if($('s2').value!="all"){
		for(var i=0;i<ary_yx.length;i++)
		{
			if(($('s1').value==ary_yx[i][0])&&($('s2').value==ary_yx[i][3]))
			{
				FillSelect('s3',ary_yx[i][2],ary_yx[i][1]);
				yxsl++;
			}	
		}
	}
	else 
	{
		for(var i=0;i<all_yx.length;i++)
		{
			if($('s1').value==all_yx[i][0])
			{
				FillSelect('s3',all_yx[i][2],all_yx[i][1]);
				yxsl++;
			}
		}	
	}	
	//document.getElementById('yxsl').innerText=yxsl;
	if(yxsl==0)
	{
		//FillSelect('s3','暂无数据','暂无数据');
	}
	c_pc();
	c_zylb();
}
function c_pc(){
	var yxsl=0;
	ClearSelect('s3');
	FillSelect('s3',ary_yx[0][2],ary_yx[0][3]);
	if($('s2').value!="all"){
		for(var i=0;i<ary_yx.length;i++)
		{
			if(($('s1').value==ary_yx[i][0])&&($('s2').value==ary_yx[i][3]))
			{
				FillSelect('s3',ary_yx[i][2],ary_yx[i][1]);
				yxsl++;
			}	
		}
	}
	else 
	{
		for(var i=0;i<all_yx.length;i++)
		{
			if($('s1').value==all_yx[i][0])
			{
				FillSelect('s3',all_yx[i][2],all_yx[i][1]);
				yxsl++;
			}
		}	
	}	
	//document.getElementById('yxsl').innerText=yxsl;
	c_zylb();
}
function c_zylb(){
	//var jsfile="http://gk.sooxue.com/js/js1/"+document.getElementById('s3').value+"/ssdm_"+document.getElementById('ssdm').value+"_kldm_"+document.getElementById('kldm').value+".js";
	var jsfile="js.asp?yxdm="+$.s3.value+"&ssdm="+$.ssdm.value+"&kldm="+$.kldm.value;
	alert(jsfile);
	ClearSelect('s4');
	if($('s3').value!='all')
	{
		$('s3').disabled=true;
		reloadJs(jsfile);
		//setTimeout('c_zylb1()',3000);
		//c_zylb1();
	}
	else
	{
		FillSelect('s4','---请选择---','all');
		FillSelect('s5','---请选择---','all');
		$('s3').disabled=false;
	}
}
function c_zylb1(){
	var _allzy=",";
	FillSelect('s4',ary_zylb[0][2],ary_zylb[0][1]);
	for(var i=0;i<ary_zylb.length;i++)
	{
		if($('s2').value!='all')
		{
			if(($('s3').value==ary_zylb[i][0])&&($('s2').value==ary_zylb[i][3]))
			{
				FillSelect('s4',ary_zylb[i][2],ary_zylb[i][1]);
			}
		}
		else
		{
			if(($('s3').value==ary_zylb[i][0]))
			{
				if(_allzy.indexOf(ary_zylb[i][1])<0)
				{
					FillSelect('s4',ary_zylb[i][2],ary_zylb[i][1]);
					_allzy=_allzy+ary_zylb[i][1]+",";
				}	
			}

		}
	}
	$('s3').disabled=false;
	c_zymc();
}
function c_zymc(){
	var _allzy1=',';
	ClearSelect('s5');
	FillSelect('s5',ary_zy[0][2],ary_zy[0][1]);
		if($('s2').value!='all')
		{
			for(var i=0;i<ary_zy.length;i++)
			{
				if(($('s3').value==ary_zy[i][0])&&($('s4').value==ary_zy[i][3])&&($('s2').value==ary_zy[i][4]))
				{
					FillSelect('s5',ary_zy[i][2],ary_zy[i][1]);
				}
			}
		}
		else
		{
			for(var i=0;i<ary_zy.length;i++)
			{
				if(_allzy1.indexOf(ary_zy[i][1])<0)
				{
					if(($('s3').value==ary_zy[i][0])&&($('s4').value==ary_zy[i][3]))
					{
						FillSelect('s5',ary_zy[i][2],ary_zy[i][1]);
					}
					_allzy1=_allzy1+ary_zy[i][1]+",";
				}	
			}		
		}
}