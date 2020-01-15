function DrawImage(ImgD,kw,kh)
      {
           var image=new Image();
           image.src=ImgD.src;
        if(image.height<image.width)//说明宽》高＝＝》以宽为标准
        {
           if(image.width>kw)
           {
            ImgD.width=kw;
            ImgD.height=(image.height*kw)/image.width;
           }
        }
        else//以高为标准
        {
           if(image.height>kh)
           {
            ImgD.height=kh;
            ImgD.width=(image.width*kh)/image.height;
           }
         }
 
}
function JHshTrim(sString)
{
var strTmp ;
 
strTmp = JHshRTrim(JHshLTrim(sString)) ;
 
return strTmp ;
}
 
//本函数用于对sString字符串进行前空格截除
// -----------------------------------------------------------------------------------
function JHshLTrim(sString)
{ 
var sStr,i,iStart,sResult = "";
 
sStr = sString.split("");
iStart = -1 ;
for (i = 0 ; i < sStr.length ; i++)
{
if (sStr[i] != " ") 
{
iStart = i;
break;
}
}
if (iStart == -1) { return "" ;}    //表示sString中的所有字符均是空格,则返回空串
else { return sString.substring(iStart) ;}
}
 
//4.2 本函数用于对sString字符串进行后空格截除
// -----------------------------------------------------------------------------------
function JHshRTrim(sString)
{ 
var sStr,i,sResult = "",sTemp = "" ;
 
// if (sString.length == 0) { return "" ;} // 参数sString是空串
 
sStr = sString.split("");
for (i = sStr.length - 1 ; i >= 0 ; i --)  // 将字符串进行倒序
{ 
sResult = sResult + sStr[i]; 
}
sTemp = JHshLTrim(sResult) ; // 进行字符串前空格截除
 
if (sTemp == "") { return "" ; }
 
sStr = sTemp.split("");
sResult = "" ;
for (i = sStr.length - 1 ; i >= 0 ; i--) // 将经处理后的字符串再进行倒序
{
sResult = sResult + sStr[i];
}
return sResult ;
}

function IsAlpha(cCheck)  //检查是否是英文26个字母
{
  return ((('a'<=cCheck) && (cCheck<='z')) || (('A'<=cCheck) && (cCheck<='Z')))
}

function isnumber(str)
{
  var digits="1234567890";
  var i=0;
  var strlen=str.length;
  while((i<strlen))
  {
    var char=str.charAt(i);
    if(digits.indexOf(char)==-1)return false;i++;
  }
  return true;
}

function isdecimal(str)
{
  var digits="1234567.890";
  var i=0;
  var strlen=str.length;
  while((i<strlen))
  {
    var char=str.charAt(i);
    if(digits.indexOf(char)==-1)return false;i++;
  }
  return true;
}  

function Verifyname(str)
{
  for (nIndex=0; nIndex<str.length; nIndex++)
  {
    cCheck = str.charAt(nIndex);
    if (!(isnumber(cCheck) || IsAlpha(cCheck)  ))
    {
      return false;
    }
  }
  return true;					
}  

function isEmpty(s)
{  
  return ((s == null) || (s.length == 0))
}

function isWhitespace (s)
{  
  var whitespace = " \t\n\r";
  var i;
  for (i = 0; i < s.length; i++)
  {   
    var c = s.charAt(i);
    if (whitespace.indexOf(c) >= 0) 
    {
      return true;
    }
  }
  return false;
}

function isCharsInBag (s, bag)
{  
  var i;
  for (i = 0; i < s.length; i++)
  {   
    var c = s.charAt(i);
    if (bag.indexOf(c) == -1) return false;
    }
  return true;
}

function Verifyhanzi(str)
{
  for (nIndex=0; nIndex<str.length; nIndex++)
  {
    cCheck = str.charAt(nIndex);
    if (isnumber(cCheck)|| IsAlpha(cCheck) || cCheck=='-' || cCheck=='_'|| cCheck==' '|| cCheck=='#'|| cCheck=='*'|| cCheck=='('|| cCheck==')'|| cCheck=='.'|| cCheck==';')
    {
      return false;
    }
  }
  return true;					
}

function VerifyTel(str)
{
  for (nIndex=0; nIndex<str.length; nIndex++)
  {
    cCheck = str.charAt(nIndex);
    if (!(isnumber(cCheck) || cCheck=='-'|| cCheck=='('|| cCheck==')'|| cCheck==','))
    {
      return false;
    }
  }
  return true;					
}

function nospacelong(s)
{
  var whitespace = " \t\n\r";
  var i,l;
  l=0;
  for (i = 0; i < s.length; i++)
  {   
    var c = s.charAt(i);
    if (whitespace.indexOf(c) < 0) 
    {
      l=l+1;
    }
  }
  return(l);
}

function isEmail(s)
{
 
  var i = 1;
  var len = s.length;
  	
  pos1 = s.indexOf("@");
  pos2 = s.indexOf(".");
  pos3 = s.lastIndexOf("@");
  pos4 = s.lastIndexOf(".");
  
  if ((pos1 <= 0)||(pos1 == len)||(pos2 <= 0)||(pos2 == len))  
  {
    return false;
  }
  else
  {
    if( (pos1 == pos2 - 1) || (pos1 == pos2 + 1) || ( pos1 != pos3 )|| ( pos4 < pos3 ) ) 		
      {
        return false;
      }
  }
  return true;
}

function isIllegal(str)
{
for (nIndex=0; nIndex<str.length; nIndex++)
  {
    cCheck = str.charAt(nIndex);
    if (cCheck=="'" ||cCheck==';' || cCheck=='<' || cCheck=='>' || cCheck=='&' || cCheck=='*' || cCheck=='%' )
    {
      return false;
    }
  }
  return true;	
}

function isSqlIllegal(str)
{
for (nIndex=0; nIndex<str.length; nIndex++)
  {
    cCheck = str.charAt(nIndex);
    if (cCheck=="'" ||cCheck==';' || cCheck=='<' || cCheck=='>' || cCheck=='&' )
    {
      return false;
    }
     str=str.toLowerCase();
   if(str=='update' || str=='insert' || str=='select' || str=='delete' || str=='and' || str=='exec' || str=='count' || str=='chr' || str=='mid' || str=='master' || str=='truncate' || str=='char' || str=='declare')
   {
      return false;
   }
  }
  return true;	
}