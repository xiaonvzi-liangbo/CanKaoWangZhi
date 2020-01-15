// by GuoLei 2008/07/03
document.write('<script type="text/javascript" src="/ajax/lib/application.js"></script>\n');	

//验证码
function checkImage() 
{
	randNumber = Math.random();
	$("ImageID").innerHTML = "<img src='image.php?"+randNumber+"' width='60' height='20' align='absmiddle' border=0 onclick='checkImage()'/>";
	//$("num").value = randNumber;
	//alert($("num").value);
}

function register()
{
	if($("email").value == "")
	{
		alert("请输入您的通行证");
		return false;
	}
	else if($("nickname").value == "")
	{
		alert("请输入昵称");
		return false;
	}
	else if($("passwd").value.length < 6 || $("passwd").value.length > 20)
	{
		alert("密码长度非法");
		return false;
	}
	else if($("passwd").value != $("passwd2").value)
	{
		alert("两次输入的密码不一致");
		return false;
	}
	else if($("realname").value == "")
	{
		alert("请输入姓名");
		return false;
	}
	else if($("fp").value == "")
	{
		alert("请输入所在省份");
		return false;
	}
	else if($("highschool").value == "")
	{
		alert("请输入毕业中学");
		return false;
	}
	else if($("college").value == "")
	{
		alert("请输入录取高校");
		return false;
	}
	else if($("speciality").value == "")
	{
		alert("请输入录取专业");
		return false;
	}
	else if($("phone").value == "" && $("qq").value == "")
	{
		alert("联系电话和QQ必选其一");
		return false;
	}
	/*else if($("number").value != $("num").value)
	{
		alert("验证码不正确");
		return false;
	}*/
	
	//window.open('../../public/2008/register.php','newWin','width=500,height=400,toolbar=no,menubar=no,scrollbars=no');
	//$("regform").target = "newWin";
	$("regform").action="/public/2008/register.php?action=do";
	return true;
}

function pubCheck()
{
	
	if($("realname").value == "")
	{
		alert("请输入姓名");
		return false;
	}
	else if($("fp").value == "")
	{
		alert("请输入所在省份");
		return false;
	}
	else if($("highschool").value == "")
	{
		alert("请输入毕业中学");
		return false;
	}
	else if($("college").value == "")
	{
		alert("请输入录取高校");
		return false;
	}
	else if($("speciality").value == "")
	{
		alert("请输入录取专业");
		return false;
	}
	else if($("phone").value == "" && $("qq").value == "")
	{
		alert("联系电话和QQ必选其一");
		return false;
	}
	/*else if($("number").value != $("num").value)
	{
		alert("验证码不正确");
		return false;
	}*/
	
	//window.open('../../public/2008/register.php','newWin','width=500,height=400,toolbar=no,menubar=no,scrollbars=no');
	//$("regform").target = "newWin";
	$("pubform").action="/public/2008/publish.php?action=do";
	return true;
}

function login()
{
	window.open('/public/2008/loginin.php','newWin','width=300,height=135,toolbar=no,menubar=no,scrollbars=no');
}

function loginIn(loginurl)
{
	if($("email").value == "")
	{
		alert("请填写通行证");
		return false;
	}
	
	$("loginform").action = loginurl+"interface/sublogin.php";
	//alert(loginurl+"interface/sublogin.php?from="+siteurl+"public/2008/");
	//$("loginform").submit();
	//alert(fromurl);
	//window.close();
	
}

function check()
{
	if($("fp").value == "" && $("tp").value == "")
	{
		alert("请填写搜索条件");
		return false;
	}
}

//锚点
function locate()
{
	$("lookfor").scrollIntoView(true);
	//document.all.lookfor.scrollIntoView(true);
}

function view(toUrl)
{
	if(toUrl != "")
	{
		//alert(toUrl);
		window.open(toUrl,'newWin'/*,'width=300,height=135,toolbar=no,menubar=no,scrollbars=no'*/);
	}
	else {
		if(confirm("您还未登录，现在登录吗？"))
		{
			window.location.href = "/public/2008/login.php";
			//alert(window.location.href);
		}
		else
			return;
	}
}

function getCollege(strName,strCode)
{
	$("college").value = strName;
	$("collegeId").value = strCode;
	getDepartment(strCode,"branchCode_");
}

function getSchool(strName,strCode)
{	
	$("highschool").value = strName;
	$("highschoolId").value = strCode;
	getDepartment(strCode,"branchCode_");
}

function getChildNodes(parNode,strName)
{
	//alert(parNode);
	var objChilds=parNode.childNodes;
	var j=0;
	var objArr=[];
	for(var i=0;i<objChilds.length;i++)
	{
		if(objChilds[i].nodeName==strName)
		{
			objArr[j]=objChilds[i];
			j++;
		}
	}
	return objArr;
}


window.onload = function ()
{
	var arraCity=[];
	var arraTown=[];
	var arrSchool=[];
	var arrcollege=[];
}

/*	
window.onload=function	(){
	if(getChildNodes($("box"),"DIV").length == 0){
		$("box").appendChild(getChildNodes($("dis"),"DIV")[0]);
		$("collegeNum").value = $("collegeNum").value + "1,"
	}
	if(getChildNodes($("boxHschool"),"DIV").length == 0){
		$("boxHschool").appendChild(getChildNodes($("disHschool"),"DIV")[0]);
		$("hSchoolNum").value = $("hSchoolNum").value + "6,";
	}
	if(getChildNodes($("disHschool"),"DIV").length==0){
		$('hSchoolLabel').style.display = "none";
	}
	if(getChildNodes($("dis"),"DIV").length==0 || getChildNodes($("box"),"DIV").length == 5){
		$('uniLabel').style.display = "none";
	}
	
	if(getChildNodes($("box"),"DIV").length == 1)
	{
		//只有一项大学时,不允许删除
		$(getChildNodes($("box"),"DIV")[0].id.replace(/teachTable/ig,"del")).style.display = "none";
	}
}

function re(strObj)
{
	
	var iNumber = strObj.substring(strObj.length-1);
	$("cati_"+iNumber).value = "";
	$("userCollege_"+iNumber).value = "";
	$("college_"+iNumber).value = "";
	$("branchCode_"+iNumber).value = "";
	$("join_"+iNumber).value = "";
	$("ID_"+iNumber).value = "";
	if(getChildNodes($("box"),"DIV").length > 1) $("dis").appendChild($(strObj));
	if(getChildNodes($("dis"),"DIV").length!=0){
		$('uniLabel').style.display = "";
	}
	$("collegeNum").value = $("collegeNum").value.replace(iNumber+",","");
	if(getChildNodes($("box"),"DIV").length == 1)
	{
		//只有一项大学时,不允许删除
		$(getChildNodes($("box"),"DIV")[0].id.replace("teachTable","del")).style.display = "none";
	}
}

function add()
{
	if(getChildNodes($("dis"),"DIV").length==0)return;
	var sCollegeNum = getChildNodes($("dis"),"DIV")[0].id.substring(getChildNodes($("dis"),"DIV")[0].id.length-1)
	$("collegeNum").value = $("collegeNum").value + sCollegeNum + ","
	$("box").appendChild(getChildNodes($("dis"),"DIV")[0]);
	if(getChildNodes($("dis"),"DIV").length==0 || getChildNodes($("box"),"DIV").length == 5){
		$('uniLabel').style.display = "none";
	}
}
*/

function reHschool(strObj)
{
	var iNumber = strObj.substring(strObj.length-1);
	$("cati_"+iNumber).value = "";
	$("college_"+iNumber).value = "";
	$("join_"+iNumber).value = "";
	$("ID_"+iNumber).value = "";
	if(getChildNodes($("boxHschool"),"DIV").length > 1) $("disHschool").appendChild($(strObj));
	if(getChildNodes($("disHschool"),"DIV").length!=0){
		$('hSchoolLabel').style.display = "";
	}
	$("hSchoolNum").value = $("hSchoolNum").value.replace(iNumber+",","");	//移除ID系数
}

function addHschool()
{
	if(getChildNodes($("disHschool"),"DIV").length<=1){
		$('hSchoolLabel').style.display = "none";
	}
	if(getChildNodes($("disHschool"),"DIV").length==0)return;
	var sHSchoolNum = getChildNodes($("disHschool"),"DIV")[0].id.substring(getChildNodes($("disHschool"),"DIV")[0].id.length-1)
	$("hSchoolNum").value = $("hSchoolNum").value + sHSchoolNum + ",";
	$("boxHschool").appendChild(getChildNodes($("disHschool"),"DIV")[0]);
}

function xmlHttp(ID){
	if(window.ActiveXObject){
		var sAjax  = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if(window.XMLHttpRequest){
		var sAjax = new XMLHttpRequest;
	}
	
	sAjax.open("get", "del.shtml?gID="+ID, false);
	sAjax.send();
}

function getDepartment(intCode,departmentSel){
	//@intCode 如果长度是5为大学编号,长度是8为学院编号
	//院系下拉菜单ID
	var xmlPath;
	if(intCode.length == 5) xmlPath = "/xml/special/"+intCode.substring(0,2)+"/"+intCode+".xml";
	if(intCode.length == 8) xmlPath = "/xml/special/"+intCode.substring(0,2)+"/"+intCode.substring(0,5)+".xml";
	//创建XMLDOM,获取XML数据源
	if(window.ActiveXObject){
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async = false;
		xmlDoc.load(xmlPath);
		if(xmlDoc == null){
			alert("您的浏览器不支持XML文件读取,推荐使用IE5.0以上版本可解决此问题!");
			window.location.href = "http://i.eol.cn";
			return;
		}
	}
	//解析XML文件,判断是否出错
	if(xmlDoc.parseError.errorCode != 0){
		//If(xmlDoc.parseError.reason == "系统未找到指定的对象"){
			$(departmentSel).length = 0;
			$(departmentSel).options[$(departmentSel).length] = new Option("其它院系",intCode.substring(0,5)+"000");
			//return;
		//}
		return;
	}
	//把子节点的值写入下拉菜单
	var nodes = xmlDoc.documentElement.childNodes;
	$(departmentSel).length = 0;
	//$(departmentSel).options[$(departmentSel).length] = new Option("请选择学院","")
	for(var i = 0; i < nodes.length; i++){
		var childs = nodes[i].childNodes;
		//alert(childs[0].text);
		$(departmentSel).options[$(departmentSel).length] = new Option(childs[1].text,childs[0].text);
	}
	$(departmentSel).options[$(departmentSel).length] = new Option("其它院系",intCode.substring(0,5)+"000")
	if(intCode.length == 8) $(departmentSel).value = intCode;
}

/**
function getXmlService2() 
{
	
	//window.parent.frames["objIframe"].regform.action = "../../2008/register.php";
	//window.parent.frames["objIframe"].regform.submit();
	//return;
	//var PostData = Form.serialize("regform");
	//jsApp.updater("","Mate:createUser",PostData,success,"","","regform");
}

function success(result)
{
	alert(result);
	if(result == "ok")
	{
		showPanel2('../../js/2008/mate1.html',380,190,180,0,"ok");
	}
	else
	{	
		showPanel2('../../2008/index.php',380,190,180,0,result);
	}
}

function assignXmlArea2(data) 
{
	eval("var rs = "+data);
	var message = rs.sMessage;
	var result = rs.bResult;
	if(result == true)
	{
		alert("申请成功！");
	}
	else
	{
		alert("申请失败！");
	}
	window.top.Pclose();
}
*/
	
	
	
	

