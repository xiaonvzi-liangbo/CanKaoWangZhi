function charset(str)
{
        str=str.replace(/&/g,"&amp;");

        str=str.replace(/</g,"&lt;");

        str=str.replace(/>/g,"&gt;");

        str=str.replace(/\n/g,"<br>");

        str=str.replace(/\ /g,"&nbsp;");

        str=str.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");

        return str;
}

function saveCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000))
        var expires = "; expires="+date.toGMTString()
    }
    else expires = ""
    document.cookie = name+"="+value+expires+"; path=/"
}



function ApplicationButton(UserID,Pageid,Threadid,Topicid,perpage)
{
   if(UserID == 0 || UserID < 1)
   {
     alert('请先登陆后再报名!') ;
     
     saveCookie('PreviousPage',window.location.href);
     window.location.href = '../../sign_in.php' ;
     return ;
   }

   
   var content = $('baoMingTxt').innerHTML;
   if(content == '' || content == null)
   {
     alert('请填写您的内容!') ;
     $('baoMingTxt').focus();
     return ;
   }

   var url = "common/ajaxRecruit.php";
   var pars = "type=add_list&uid="+UserID+"&pageid="+Pageid+"&Threadid="+Threadid+"&Topicid="+Topicid+"&content="+ encodeURIComponent(content)+"&perpage="+perpage ; 
   var myAjax = new Ajax.Request(url,{method: 'post', parameters: pars, onComplete: ApplicationButton_return});
}

function ApplicationButton_return(originalRequest)
{
    var ret = originalRequest.responseText ;  
    alert('报名成功,谢谢您的参与!');
    $('baoMingTxt').innerHTML = '' ;
    $('ListDiv').innerHTML = ret;      
    
}

function setEmail(UserID)
{
    if(UserID == 0 || UserID < 1)
   {
     alert('请先登陆后再操作!') ;
     
     saveCookie('PreviousPage',window.location.href);
     window.location.href = '../../sign_in.php' ;
     return ;
   }


   if($('yourName').value == '')
   {
      alert('请填写您的名字!') ;
      $('yourName').focus();
      return ; 
   }
   
   
   if($('emailTxt').value == '')
   {
      alert('请填写您朋友的邮箱!') ;
      $('emailTxt').focus();
      return ; 
   }
   else if($('emailTxt').value.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1 )    
   {
      alert('请填写正确的邮箱格式!') ;   
      $('emailTxt').focus();       
      //$(id).focus();  
      return ;
   }
   
   var url = "common/ajaxRecruit.php";
   var pars = "type=set_mail&name="+$('yourName').value+"&email="+$('emailTxt').value ; 
   var myAjax = new Ajax.Request(url,{method: 'post', parameters: pars, onComplete: setEmail_return});

}

function setEmail_return(originalRequest)
{
    var ret = originalRequest.responseText ;    
        
    if(ret == 1)
    {
      alert('邮件发送成功!');
      //$('yourName').value = '' ;
      $('emailTxt').value = '' ;
      return ;
    }
    else if(ret == -2)
    {
      alert('该邮件已推荐!');
      //$('yourName').value = '' ;
      $('emailTxt').value = '' ;
      return ;
    }
    else 
    {
      alert('邮件发送失败!');
      //$('yourName').value = '' ;
      $('emailTxt').value = '' ;
      return ;
    }

}