//根据情况做相应的调整	
/****** 需要调整的内容 ******/
var webapp="http://weblog.baicai.com/webLog";
var jobCookie_websiteid="2";//站点ID
var jobCookie_parmUsercookie="baicaiCookie_userAccount";//用户注册帐号
/****** 需要调整的内容 ******/

String.prototype.replaceAll=function(s1,s2){
		return this.replace(new RegExp(s1,"gm"),s2);
	}
//1．设置COOKIE
function JobSetCookie(name,value,expires,path,strdomain,secure)
{
	var expDays = expires*24*60*60*1000;
	var expDate = new Date();
	expDate.setTime(expDate.getTime()+expDays);
	var expString = ((expires==null) ? "" : (";expires="+expDate.toGMTString()))
	var pathString = ((path==null) ? "" : (";path="+path))
	var domainString = ((strdomain==null) ? "" : (";domain="+strdomain))
	var secureString = ((secure==true) ? ";secure" : "" )
	document.cookie = name + "=" + escape(value) + expString + pathString + domainString + secureString;
} 
//1_1．设置COOKIE
/*function JobSetOneDayCookie(name,value,expires,path,strdomain,secure)
{
	var expDays = expires*24*60*60*1000;
	var expDate = new Date();
	expDate.setTime(expDate.getTime()+expDays);
	var expString = ((expires==null) ? "" : (";expires="+expDate.toGMTString()))
	var pathString = ((path==null) ? "" : (";path="+path))
	var domainString = ((strdomain==null) ? "" : (";domain="+strdomain))
	var secureString = ((secure==true) ? ";secure" : "" )
	document.cookie = name + "=" + escape(value) + expString + pathString + domainString + secureString;
}*/
function JobSetOneDayCookie(name,value,expires,path,strdomain,secure)
{
	var expDays = expires*24*60*60*1000;
	var expDate = new Date();
	
	var year=expDate.getYear();
	var month=expDate.getMonth();
	var day=expDate.getDate();
	
	expDate=new Date(year,month,day);
 	expDate.setTime(expDate.getTime()+expDays);
 
 	var expString = ((expires==null) ? "" : (";expires="+expDate.toGMTString()))
 
 	var pathString = ((path==null) ? "" : (";path="+path))
	var domainString = ((strdomain==null) ? "" : (";domain="+strdomain))
	var secureString = ((secure==true) ? ";secure" : "" )
	document.cookie = name + "=" + escape(value) + expString + pathString + domainString + secureString;
}  
//2．获取指定名称的cookie值：
function JobGetCookie(name)
{
	var result = null;
	var myCookie = document.cookie + ";";
	var searchName = name + "=";
	var startOfCookie = myCookie.indexOf(searchName);
	var endOfCookie;
	if (startOfCookie != -1)
	{
		startOfCookie += searchName.length;
		endOfCookie = myCookie.indexOf(";",startOfCookie);
		result = unescape(myCookie.substring(startOfCookie, endOfCookie));
	}
 return result;
} 

//3．删除指定名称的cookie(暂无用)
 function JobClearCookie(name)
{
	var ThreeDays=3*24*60*60*1000;
	var expDate = new Date();
	expDate.setTime(expDate.getTime()-ThreeDays);
	document.cookie=name+"=;expires="+expDate.toGMTString();
} 
//4 得到用户(当前时间+一个随机数)
function GetjobCookie_cookie(){
	var GuestUser="User";
	 try{
	 	  var eid=Math.floor(Math.random()*100000000)
	 	  expDate = new Date();
	 	 	GuestUser=expDate.getTime()+"_"+eid;
	}catch(e){
	} 
	return GuestUser;
}
//5 从原系统中取得Cookie值，然后做相应的处理（取得第一次访问的guest用户）
/*function getjobuiCookieguser(){
	
	 var tempValue=JobGetCookie("jobuiCookie_gc");
	 var startOfCookieP = tempValue.indexOf(";");
	 tempValue=tempValue.substring(0, startOfCookieP);
	 startOfCookieP=tempValue.indexOf(":");
	 tempValue=tempValue.substring(startOfCookieP+1,tempValue.length);
   return   tempValue;
   
	}*/
	
/*function getjobuiCookieguser(){
	 var tempValue=JobGetCookie("jobuiCookie_gc");
		try{	 
		 if(tempValue) {
			 var startOfCookieP = tempValue.indexOf(";");
			 tempValue=tempValue.substring(0, startOfCookieP);
			 startOfCookieP=tempValue.indexOf(":");
			 tempValue=tempValue.substring(startOfCookieP+1,tempValue.length);
				return   tempValue;
			} else {
				return "";
			}
		}catch(e){
				return "";
			}
}*/

var jobCookie_parmCookie="jobCookie_Cookie";//自已写的Cookie,baicai与职友集可以单独取一个名字，以防重复
var jobCookie_parmVisitCookie="jobCookie_VisitCookie";//自已写的Cookie,baicai与职友集可以单独取一个名字，以防重复
var jobCookie_parmTodayVisitNum="jobCookie_TodayVisitNum";//自已写的Cookie,baicai与职友集可以单独取一个名字，以防重复

var jobCookie_domain=document.domain; 


var jobCookie_cookie="";
var jobCookie_usercookie="";
 



var jobCookie_fromUrl =document.referrer;
var jobCookie_currentUrl=document.location.href;
var jobCookie_screenSize=screen.width+"*"+screen.height;
var jobCookie_VisitCount=0;
var jobCookie_todayVisitNum=0;

jobCookie_cookie=JobGetCookie(jobCookie_parmCookie);
jobCookie_VisitCount=JobGetCookie(jobCookie_parmVisitCookie);
jobCookie_todayVisitNum=JobGetCookie(jobCookie_parmTodayVisitNum);
//取得注册用户
jobCookie_usercookie=JobGetCookie(jobCookie_parmUsercookie);
 


 if(jobCookie_cookie==null){
 	jobCookie_VisitCount=1;
	jobCookie_cookie=GetjobCookie_cookie();
	JobSetCookie(jobCookie_parmCookie,jobCookie_cookie,365,"/",jobCookie_domain,false)
	JobSetCookie(jobCookie_parmVisitCookie,jobCookie_VisitCount,365,"/",jobCookie_domain,false)
}else{
	if(jobCookie_usercookie=="") jobCookie_usercookie=0;
	jobCookie_VisitCount=parseInt(jobCookie_VisitCount)+1;
	JobSetCookie(jobCookie_parmVisitCookie,jobCookie_VisitCount,365,"/",jobCookie_domain,false)
	
	//一个Cookie一天的访问量
 	try{
 	if(isNaN(parseInt(jobCookie_todayVisitNum))){
 		jobCookie_todayVisitNum=0;
 		}
 	}catch(e){
 	}
	if(jobCookie_todayVisitNum==null || jobCookie_todayVisitNum=="") {
		jobCookie_todayVisitNum=0;
	}
 	jobCookie_todayVisitNum=parseInt(jobCookie_todayVisitNum)+1;
	 JobSetOneDayCookie(jobCookie_parmTodayVisitNum,jobCookie_todayVisitNum,1,"/",jobCookie_domain,false);
	} 


   var  jobCookieDate=new Date();
  
 
var jobCookie_PostUrl=webapp+"/stat.tj?fromUrl="+jobCookie_fromUrl.replaceAll("&","<1_1>")
					+"&currentUrl="+jobCookie_currentUrl 
					+"&screenSize="+jobCookie_screenSize
					+"&websiteid="+jobCookie_websiteid
					+"&user="+jobCookie_cookie
					+"&ruser="+jobCookie_usercookie
					+"&appName="+navigator.appName
					+"&systemLanguage="+navigator.systemLanguage
					+"&platform="+navigator.platform
					+"&appVersion="+navigator.appVersion
					+"&visitCount="+jobCookie_VisitCount
					+"&todayisitCount="+jobCookie_todayVisitNum
					+"&visittime="+jobCookieDate.getTime()

					;




   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= jobCookie_PostUrl;
   head.appendChild(script);

 // alert(jobCookie_PostUrl);