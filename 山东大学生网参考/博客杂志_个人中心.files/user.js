function addCookie(name,value,expireHours,setdomain){
            var cookieString=name+"="+escape(value);
            //判断是否设置过期时间
            if(expireHours>0){
                   var date=new Date();
                   date.setTime(date.getTime+expireHours*3600*1000);
                   cookieString=cookieString+"; expire="+date.toGMTString();
            }
			if(setdomain!=''){
				cookieString=cookieString+"; domain="+setdomain;
			}
            document.cookie=cookieString;
}
/*
2．获取指定名称的cookie值：getCookie(name)
该函数返回名称为name的cookie值，如果不存在则返回空，
*/
function getCookie(name){
            var strCookie=document.cookie;
            var arrCookie=strCookie.split("; ");
            for(var i=0;i<arrCookie.length;i++){
                  var arr=arrCookie[i].split("=");
                  if(arr[0]==name)return arr[1];
            }
            return "";
}
/*
3．删除指定名称的cookie：deleteCookie(name)
该函数可以删除指定名称的cookie，其实现如下：
*/
function deleteCookie(name){
             var date=new Date();
             date.setTime(date.getTime()-10000);
             document.cookie=name+"=v; expire="+date.toGMTString();
}
/*
window.onload=function()
{
	if(typeof(card_data)=="undefined" || card_data==''){
		return "";
	}
	var user_id=getCookie('user_id');
	var nick_name=getCookie('nick_name');	
	if(card_data[0].nick!=''){
		if(nick_name!=card_data[0].nick){
			if(user_id!=''){
				addCookie('nick_name',unescape(card_data[0].nick),'0','.sina.com.cn');
				//window.location=document.URL
			}
		}
	}	
	
	if(card_data[0].uid!=''){
		if(user_id!=card_data[0].uid){
			if(card_data[0].nick!=''){
			   addCookie('nick_name',unescape(card_data[0].nick),'0','.sina.com.cn');
			   //window.location=document.URL
			}
		}
	}
}
*/
