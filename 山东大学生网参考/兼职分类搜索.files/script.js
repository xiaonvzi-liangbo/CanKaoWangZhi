//-------------------------------------------------------------------
// 一般页面的常规变量定义
var All  = document.all;
var echo = document.write;
//-------------------------------------------------------------------
//删除用户输入的空格
function delnbsp(strs){
          var Finds=/ /g;
          strs=strs+strs.replace(Finds,"");
          return strs;
}
/**
 * 字串相关 String
 */
/** 修剪字串前后的空格 Base 20030820 */
function trim(s) {
  var count = s.length;
  var st    = 0;       // start
  var end   = count-1; // end

  if (s == "") return s;
  while (st < count) {
    if (s.charAt(st) == " ")
      st ++;
    else
      break;
  }
  while (end > st) {
    if (s.charAt(end) == " ")
      end --;
    else
      break;
  }
  return s.substring(st,end + 1);
}
//检查是否为正确的电话号码
function isTel(checkStr){
var checkOK = "0123456789-/,()";
var allValid = true;
if (checkStr.length<1)
 allValid=false;
  for (i=0;i<checkStr.length;i++)
  {
    ch=checkStr.charAt(i);
    for(j=0;j<checkOK.length;j++)
      if(ch==checkOK.charAt(j))
        break;
    if(j==checkOK.length)
    {
      allValid = false;
      break;
    }
  }
  return allValid;
}
/**检查是否为有效字符串*/
function IsValidString(checkStr)
{
var checkOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
var allValid = true;
if (checkStr.length<1)
 allValid=false;
  for (i=0;i<checkStr.length;i++)
  {
    ch=checkStr.charAt(i);
    for(j=0;j<checkOK.length;j++)
      if(ch==checkOK.charAt(j))
        break;
    if(j==checkOK.length)
    {
      allValid = false;
      break;
    }
  }
  return allValid;
}
/** 测量有汉字时的字串实际长度，其中一个汉字占两个字符 Base 20030820 */
function len(s){
	var length = 0;
	var tmpArr = s.split("");

	for (i = 0; i < tmpArr.length; i++){
		if (tmpArr[i].charCodeAt(0) < 299)
			length ++;
		else
			length += 2;
	}
	return length;
}
/** 是否为合法字串，指只包括字母，数字和_的字串　*/
//edit by liujy2004-06-09 14:57:11 
function isStr(s) {
	if (s.length == 0) return false;
	var regu = "^[0-9A-Za-z_]*$";
	var re   = new RegExp(regu);
    //alert("ssss---s.search(re):"+s.search(re));
    s = s.replace('@', '');
    s = s.replace('.', '');
	if (s.search(re) != -1)
		return true;
	else
    {
        if (isEmail(s)) return true;
		else return false;
    }
}
/** 测试是否为空，或是空格 */
function isNvl(s) {
	return trim(s)==""?true:false;
}
//-------------------------------------------------------------------
/**
 * EMail相关
 */
/** 检测Email是否合法 */
function checkMail(s){
	if (s == "") return false;

	invalidChars = " /:"; // 不合法字符
    //edit by liujy 2004-08-04 09:30:01 
    s = s.replace('(', '');
    s = s.replace(')', '');
    s = s.replace('（', '');
    s = s.replace('）', '');

	for (i=0; i < invalidChars.length; i++) {
		invalidChar = invalidChars.charAt(i);
		if (s.indexOf(invalidChar,0) != -1)
			return false;
	}
	atPos = s.indexOf("@", 1);
	if (atPos == -1)
		return false;
	periodPos = s.indexOf(".", atPos);
	if (periodPos == -1)
		return false;
	if (periodPos + 3 > s.length)
		return false;

	return true;
}

function isEmail(s) {
	if (s.length > 100)	return false;
	if (s.indexOf("'")!=-1) return false;
    //edit by liujy 2004-08-04 09:30:01 
    s = s.replace('(', '');
    s = s.replace(')', '');
    s = s.replace('（', '');
    s = s.replace('）', '');

	var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[_.0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+(.+)$";
	//{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|cn|CN|cc|CC
	var re = new RegExp(regu);
	if (s.search(re) != -1)
		return true;
	else
		return false;
}

//-------------------------------------------------------------------
/**
 * 日期相关 Date
 */
/** 检测输入日期是否合法 kerne */
function checkDate(inputyear,inputmonth,inputday){
	var nowdate = new Date();
	var result;
	var varleap_year;
	result = true;
    //alert('### yy='+inputyear+'--mm='+inputmonth+'--dd='+inputday);
	if ((inputyear<1850) || (inputyear>2500) || (!isNum(inputyear))) result=false;
	if ((inputmonth<1) || (inputmonth>12) || (!isNum(inputmonth))) result=false;
	if ((inputday<1) || (inputmonth>31) || (!isNum(inputmonth))) result=false;
	if ((((parseInt(inputyear)%4) == 0) && ((parseInt(inputyear)%100) != 0)) || ((parseInt(inputyear)%400) == 0)) {
		if ((parseInt(inputmonth) == 2) && (parseInt(inputday) > 29)) result=false;
		switch(parseInt(inputmonth)){
			case 4:
				if (parseInt(inputday) > 30) {
					result = false;
					break;
				}
			case 6:
				if (parseInt(inputday)>30) {
					result=false;
					break;
				}
			case 9:
				if (parseInt(inputday)>30) {
					result=false;
					break;
				}
			case 11:
				if (parseInt(inputday)>30) {
					result=false;
					break;
				}
		}
	} else {
		switch(parseInt(inputmonth)) {
			case 2:
				if (parseInt(inputday)>28) {
					result=false;
					break;
				}
			case 4:
				if (parseInt(inputday)>30) {
					result=false;
					break;
				}
			case 6:
				if (parseInt(inputday)>30) {
					result=false;
					break;
				}
			case 9:
				if (parseInt(inputday)>30) {
					result=false;
					break;
				}
			case 11:
			if (parseInt(inputday)>30) {
				result=false;
				break;
			}
		}
	}
    //alert('result--'+result);
	return result;
}
//-------------------------------------------------------------------
/**
 * 电话号码相关
 */
/** 检查电话号码输入是否合法 */
function checkPhone(s){
	if (s.length < 1) return false;

	var tmpChar = "0123456789-/,()";

	for (i = 0; i < s.length; i++) {
		ch = s.charAt(i);
		for(j = 0; j < tmpChar.length; j++) {
			if (ch == tmpChar.charAt(j))
				break;
			if (j == tmpChar.length - 1)
				return false;
		}
	}
	return true;
}

/** 检查电话号码输入是否合法 Base 20030820 */
function isPhone(s) {
	var regu = "^(([(0-9)]+)|([0-9-]+))(([0-9-]+)|([0-9]+))([0-9])$";
	var re   = new RegExp(regu);
	if (s.search(re) != -1)
		return true;
	else
		return false;
}
//-------------------------------------------------------------------
/**
 * 选择相关 Form
 */
/**
 * 对Form的多选框进行处理
 * formName    表单名称
 * elementName 元素名称
 * mode        A-全选，R-反选
 * Base 20030821
 */
function selectAll(formName,elementName,mode){
	var elements = document.getElementById(formName).elements;

	for (var i=0; i<elements.length; i++){
		alert("Element["+ i +"]Name.indexOf:" + elements[i].name.indexOf(elementName));
		if ((elements[i].name).indexOf(elementName) != -1) {
			switch (mode){
				case "A": // 全选
					elements[i].checked = true;
					break
				case "R": // 反选
					if (elements[i].checked == true)
						elements[i].checked = false;
					else
						elements[i].checked = true;
					break;
			}
		}
	}
}
/** 检测文本框或多选、单选框是否为空 */
function isEmpty(o) {
	var tmpValue = o.value;
	if (o.type=="text") {
		if (tmpValue.length == 0)
			return true;
		else
			return false;
	} else if (o.type == "checkbox" || o.type == "radio")
		return !o.checked;
}
/** 为下拉框增加选项，约定使用";"分隔，每组名与值用":"隔开 Base 20030821*/
function addOptions(selectNm,szOptValue,selectedOptVal) {
	var oSelect = document.getElementById(selectNm);
	var aOpt    = szOptValue.split(";");

	for (var i=oSelect.options.length; i > 0; i--)
		oSelect.options[i] = null;
	for (var j=0; j<aOptVal.length; j++){
		var aOptTmp = aOpt[j].split(":");
		oSelect.options[j] = new Option(aOptTmp[0],aOptTmp[1]);
		if (oSelect.options[j].name == selectedOptVal)
			oSelect.options[j].selected = true;
	}
}

//-------------------------------------------------------------------
/**
 * 数字相关
 */
/** 是否为数字 Base 20030821 */
function isNum(s) {
	var regu = "^([0-9]*)$";
//	var regu = "^([0-9]*[.0-9])$"; // 小数测试
	var re   = new RegExp(regu);
	if (s.search(re) != -1)
		return true;
	else
		return false;
}
/** 是否为数字 Base 20030821 */
function isDigital(s) {
	var tmpChar = "0123456789";

	if (s.length < 1) return false;
	for (var i=0; i<s.length; i++){
		ch = s.charAt(i);
		for (var j=0; j<tmpChar.length; j++){
			if (ch == tmpChar.charAt(i))
				break;
			if (j == tmpChar.length)
				return false;
		}
	}
	return true;
}
//-------------------------------------------------------------------
/**
 * 选择单选框
 * Author:tempnc
 * Date:20031222
 */
function isChecked(inparam,val) {
	if(inparam == val)
	return "checked";
	else
	return "";
}
//根据varValue的值选中option 
function selectedOption(varObj,varValue)
{
	if(typeof(varObj)=="object")
	{
		for(var i=0;i<varObj.length;i++)
		{
			if(varObj.options[i].value==varValue)
			{
				varObj.selectedIndex=i;
				break;	
			}	
		}
	}
}
//输出数字式下拉菜单项 
function writeOption(varFrom,varTo)
{
	for(var i=varFrom;i<=varTo;i++)
	{
		document.write("<option VALUE="+i+">"+i+"</option>");
	}
}