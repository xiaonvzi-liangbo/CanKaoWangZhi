function checkInput(obj,sName)
{if(!checkIsNotEmpty(obj.value))
{s=new String(sName)
s=s.replace(/&nbsp;/g,"");window.alert("������"+s+"!");obj.focus();obj.select();return false;}
return true;}
function checkNumberInput(obj,sName)
{if(!checkInput(obj,sName))
return false;if(!checkIntegerMinValue(obj.value,3))
{window.alert("����"+sName+"������Ϸ�����ֵ!");obj.focus();obj.select();return false;}
return true;}
function checkRadio(obj,sName)
{for(i=0;i<obj.length;i++)
{if(obj[i].checked)
return true;}
window.alert("��ѡ��"+sName+"!");return false;}
function checkOtherInput(sbjObj,optObj,sbjName,optId,optName)
{if(sbjObj.length==undefined)
{if(sbjObj.checked&&optObj.value=="")
{window.alert("����д�������� ["+sbjName+"] ��ѡ�� ["+optName+"] ������!");optObj.focus();optObj.select();return false;}}
else
{for(i=0;i<sbjObj.length;i++)
{if(sbjObj[i].checked&&sbjObj[i].value==optId&&optObj.value=="")
{window.alert("����д�������� ["+sbjName+"] ��ѡ�� ["+optName+"] ������!");optObj.focus();optObj.select();return false;}}}
return true;}
function checkSubject(obj,sTitle)
{if(obj.length==undefined)
{if(obj.checked)
{return true;}}
else
{for(i=0;i<obj.length;i++)
{if(obj[i].checked)
return true;}}
window.alert("�������� ["+sTitle+"] ������д!");return false;}
function checkQQ()
{if(!checkIsNotEmpty(document.vote.u.value))
{window.alert("������QQ����!");document.vote.u.focus();document.vote.u.select();return false;}
if(!checkIntegerMinValue(document.vote.u.value,10001))
{window.alert("������Ϸ���QQ����!");document.vote.u.focus();document.vote.u.select();return false;}
if(!checkIsNotEmpty(document.vote.p.value))
{window.alert("������QQ����!");document.vote.p.focus();document.vote.p.select();return false;}
if(!checkIsNotEmpty(document.vote.verifycode.value))
{window.alert("��������֤��!");document.vote.verifycode.focus();document.vote.verifycode.select();return false;}
if(document.vote.verifycode.value.length!=4)
{window.alert("������4λ��֤��!");document.vote.verifycode.focus();document.vote.verifycode.select();return false;}
return true;}