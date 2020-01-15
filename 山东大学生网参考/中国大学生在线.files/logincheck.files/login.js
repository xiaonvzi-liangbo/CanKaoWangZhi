function ss_quit(){
	toSelf('quit.action?toUrl=logincheck.jsp?id='+$F('id'));
}
function radioValue(objName){
	var value='';
	var obj=document.getElementsByName(objName); 
  for(i=0;i<obj.length;i++){ 
    if(obj[i].checked){
      value = obj[i].value;
      break;
     }
  }
  return value;
}

var backHtml='';
function backupInfo(target){
	if(isnull(target))
		target='submitId';
	backHtml=$(target).innerHTML;

}
function restoreInfo(target){
	if(isnull(target))
		target='submitId';
	$(target).innerHTML=backHtml;
}
function processing(m,target){
try{
	if(isnull(m)) m='登录中，请稍候...';
	if(isnull(target)) target='submitId';
	$(target).innerHTML=m;
	}catch(ex){}
}
function isnull(str)
{if(str==null||str=="")return true;
 return false;
}

function killErrors() { 
return true; 
} 
window.onerror = killErrors; 

function checkdata(){
	if(isnull($F('gUser.loginName'))||isnull($F('gUser.password'))){
		alert("用户名、密码不能为空！");
    return false;
  }
  return true;
}
function reportError(request){
	alert('系统繁忙，请稍候再试');
}
function autoLogin(){
	var autoFlag=getCookie('spaceAutoLogonFlag','');
	if(isnull(autoFlag)||autoFlag=='""') return;
	backupInfo();
	processing();
	var t=getCookie('toWhere','1');
	var obj=document.getElementsByName('toWhere'); 
	obj[t].checked=true;
	var a=new Array();
	a['tSessionId']=new Date().valueOf();
	var pars=$H(a).toQueryString();	
	var toUrl='autoLogin.action';
	var myAjax = new Ajax.Request(toUrl,{
		method: 'post',
		parameters: pars,
		onFailure: reportError,
		evalScripts: true,
		onComplete:r_login
	});
}
function login(){
	if(!checkdata()) return;
	backupInfo();
	processing();
	$('tSessionId').value=new Date().valueOf();
	var pars=Form.serialize('form1');
	var toUrl='loginAjax.action';
	var myAjax = new Ajax.Request(toUrl,{
		method: 'post',
		parameters: pars,
		onFailure: reportError,
		evalScripts: true,
		onComplete:r_login
	});
}

function r_login(request){
	restoreInfo();
	var xmldoc = request.responseXML;
	var code = xmldoc.getElementsByTagName('code')[0].firstChild.data;
	var desc = xmldoc.getElementsByTagName('desc')[0].firstChild.data;
	switch(parseInt(code)){
		case 0:
			loginToward();
			//setTimeout("loginToward();",100);
			break;
		case 1:
			alert(desc);
			break;
		case 3:
			to('schInfoMan.action');
			break;
		case 4:
			var a=new Array();
			a['tSessionId']=new Date().valueOf();
			a['toUrl']=desc;
			a['id']=2;
			a['postAjax']=true;
			var pars=$H(a).toQueryString();
			to('initSignUp.action?'+pars);
			break;
			
	}
}
function loginToward(){
	var toUrl='';
	var t=radioValue('toWhere');
	setCookie('toWhere',t);
	if(t==1){
		$('submitId').innerHTML='进入我的空间...';
		toUrl='myspace.action';
		to(toUrl);
	}
	else{
		try{
	 		toUrl='logincheck.jsp?id='+$F('id');
			toSelf(toUrl);
			//var pUrl=document.referrer+'';
			//to(pUrl);
	 	}catch(ex){
		}
	}
}

function to(toUrl){
	top.location=toUrl;
}
function toSelf(toUrl){
	document.location=toUrl;
}
function toBlank(toUrl){
	$('form2').action=toUrl;
	$('form2').target='_blank';
	$('form2').submit();
}
function towardUrl(id,loginFlag){
	if(isnull(loginFlag))
		loginFlag=true;
	if(loginFlag&&isnull(checkUserId)){
		alert('请先登录！');
		return;
	}
	switch(id){
		case 1:
			to('blog.action');
			break;
		case 2:
			to(uliveDomain+'iaskpost/list/1.shtml');
			break;
		case 3:
			to('dirUserGm.action?id=1');
			break;
		case 4:
			to('dirUserAm.action');
			break;
		case 5:
			to(uliveDomain+'market/markets/list.shtml');
			break;
		case 6:
			toBlank('tutorIndex.action');
			break;
	}
}