//当前页系统常量
     var UserNameMsg='5个以上字符(包括小写字母、数字、下划线、中文)，一个汉字为两个字符，一旦注册成功用户名不能修改';
     var PasswordMsg='密码由6个以上字符组成，请使用英文字母加数字或符号的组合密码，不要用纯数字或字母做密码';
     var RePasswordMsg='重复一遍上面输入的密码，以免误输入';
     var EmailMsg='常用的E-mail地址';
     var ValidateMsg='输入后面显示的验证码';
   
   function OpenMessage(msgID){
     if(document.getElementById(msgID).className!="MsgCssError"){
        document.getElementById(msgID).className="MsgCssOn";
     }
   }
   function CloseMessage(msgID){
     if(document.getElementById(msgID).className!="MsgCssError"){
       document.getElementById(msgID).className="MsgCss";
     }
   }
   
   //检测用户名
   function UserNameChk(uName){
      if(uName!=''){
        Member_Regist.UserNameCheck(uName,Show_callback);
      }
   }
   function Show_callback(usersel){
      if(usersel.value!=''){
         document.getElementById("valUserName").innerHTML='<b style="color:red">用户名 \"'+usersel.value+'\" 已被注册，请填写其他的用户名，如\"'+usersel.value+'_2008\"</b><br>'+UserNameMsg
         //document.getElementById("txtUserName").value='';
         document.getElementById("txtUserName").focus();
         document.getElementById('valUserName').className='MsgCssError';
      }
      else{
        document.getElementById("valUserName").innerHTML='<b style="color:green">没有被注册的用户名，可以使用！</b><br>'+UserNameMsg
        document.getElementById('valUserName').className='MsgCss';
      }
   }
   
   

  //注册信息检测
   function UserRegistChk(obj){
     var ErrFlag=0;
     if(jsUserNameChk(obj)==1) ErrFlag=1;
     if(jsPasswordChk(obj)==1) ErrFlag=1;
     if(jsRePasswordChk(obj)==1) ErrFlag=1;
     if(jsEmailChk(obj)==1) ErrFlag=1;
     if(jsValidateChk(obj)==1) ErrFlag=1;
     
     if(ErrFlag==1){
       return false;
     }
     document.getElementById("javascriptOpen").value="1"
     return true;
   }
   
  //检测用户名
   function jsUserNameChk(obj){
     var ErrFlag=0;
     //初始化
     document.getElementById('valUserName').innerHTML = UserNameMsg;
     document.getElementById('valUserName').className='MsgCss';
          
     if(obj.txtUserName.value==''){
       document.getElementById('valUserName').innerHTML='<b style="color:red">请输入用户名！</b><br>'+UserNameMsg;
       document.getElementById('valUserName').className='MsgCssError';
       ErrFlag=1;
     }
     return ErrFlag;
   }
  //检测密码
  function jsPasswordChk(obj){
     var ErrFlag=0;
     //初始化
     document.getElementById('valPassword').innerHTML = PasswordMsg  ;
     document.getElementById('valPassword').className='MsgCss';
     
     if(obj.txtPassword.value==''){
       document.getElementById('valPassword').innerHTML='<b style="color:red">请输入密码！</b><br>'+PasswordMsg;
       document.getElementById('valPassword').className='MsgCssError';
       ErrFlag=1;
     }
     else{
       if(obj.txtPassword.value.length<6){
         document.getElementById('valPassword').innerHTML='<b style="color:red">密码不能少于6个字符！</b><br>'+PasswordMsg;
         document.getElementById('valPassword').className='MsgCssError';
         ErrFlag=1;
       }
     }
     return ErrFlag;
   }
   
   //检测确认密码
    function jsRePasswordChk(obj){
     
     var ErrFlag=0;
     
     //初始化
     document.getElementById('valRePassword').innerHTML = RePasswordMsg;
     document.getElementById('valRePassword').className='MsgCss';
    
      if(obj.txtRePassword.value==''){
       document.getElementById('valRePassword').innerHTML='<b style="color:red">请输入确认密码！</b><br>'+RePasswordMsg;
       document.getElementById('valRePassword').className='MsgCssError';
       ErrFlag=1;
     }
     else{
      if(obj.txtPassword.value!=obj.txtRePassword.value){
       document.getElementById('valRePassword').innerHTML='<b style="color:red">两次输入密码不一致！</b><br>'+RePasswordMsg;
       document.getElementById('valRePassword').className='MsgCssError';
       ErrFlag=1;
      }
     }
     return ErrFlag;
   }
  
  //检测邮箱
     function jsEmailChk(obj){
     
     var ErrFlag=0;
     
     //初始化
     document.getElementById('valEmail').innerHTML = EmailMsg ; 
     document.getElementById('valEmail').className='MsgCss';
              
     if(obj.txtEmail.value==''){
       document.getElementById('valEmail').innerHTML='<b style="color:red">请输入您的电子邮件！</b><br>'+EmailMsg;
       document.getElementById('valEmail').className='MsgCssError';
       ErrFlag=1;
     }
     else{
       if(!EmailChk(obj.txtEmail)){
       document.getElementById('valEmail').innerHTML='<b style="color:red">您输入的电子邮件不正确！</b><br>'+EmailMsg;
       document.getElementById('valEmail').className='MsgCssError';
       ErrFlag=1;
       }
     }
     return ErrFlag;
   }
   
   //检测验证码
   function jsValidateChk(obj){
     var ErrFlag=0;
    
     //初始化
     document.getElementById('lblValidate').innerHTML = ValidateMsg;
     document.getElementById('lblValidate').className='MsgCss';
     
    if(obj.txtValidateKey.value==''){
       document.getElementById('lblValidate').innerHTML='<b style="color:red">请输入验证码！</b><br>'+ValidateMsg;
       document.getElementById('lblValidate').className='MsgCssError';
       ErrFlag=1;
     } 
    else{
      if(obj.txtValidateKey.value.length<4){
       document.getElementById('lblValidate').innerHTML='<b style="color:red">验证码不正确！</b><br>'+ValidateMsg;
       document.getElementById('lblValidate').className='MsgCssError';
       ErrFlag=1;
      }
    }
    return ErrFlag;
   }