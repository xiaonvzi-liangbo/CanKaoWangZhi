function checkSettingSubmit(form)
{
	if(form.nick_name.value==""){
         alert('请输入昵称!');
		 form.nick_name.focus();
		 return false;
	}
	if(form.email.value==""){
         alert('请输入邮箱!');
		 form.email.focus();
		 return false;
	}else{
		if(!checkmail(form.email.value)){
			alert('请输入合法的邮箱!');
			form.email.focus();
			return false;
		}
	}
    form.Submit1.disabled=true;
	return true;
}
function checkSpaceSettingSubmit(form)
{
	if(form.space_name.value==""){
         alert('请输入空间标题!');
		 form.space_name.focus();
		 return false;
	}
    form.Submit1.disabled=true;
	return true;
}
//校验修改邮箱
function checkmail(Email){	
	var re = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/; 
	if (!(re.test(Email))) {	
		return false;
	}else {
		return true;
	}
}
function openBuilder()
 {
    window.open("/into_diy.php?"+Math.random(), "one","fullscreen=yes,location=no, menubar=no, resizable=yes,scrollbars=yes, status=no, titlebar=no, toolbar=no");
}
function openStudy()
{
    window.open("/study.php?"+Math.random(), "study","height=516, width=722,left=150, top=100, location=no, menubar=no, resizable=yes,scrollbars=no, status=no, titlebar=no, toolbar=no");
}
function checkCommentSubmit(item)
{

	if(item.reply_content.value == "") {
		alert("请填写评论内容!");
		item.reply_content.focus();
		return false;
	}else {
		var str = item.reply_content.value;
		if(str.length > 1000) {
			alert("评论内容不能超1000个字符!");
			return false;
		}
	}
	if(item.auth_code.value == "") {
		alert("请输入验证码!");	
		item.auth_code.focus();
		return false;
	}
    item.send.disabled=true;
	return true;	
}

function checkComplainSubmit(item)
{
	if(item.url.value == "") {
		alert("请输入要投诉的链接!");
		item.url.focus();
		return false;
	}
	if(item.title.value == "") {
		alert("请输入要投诉的主题!");
		item.title.focus();
		return false;
	}
	if(item.content.value == "") {
		alert("请输入要投诉的内容!");
		item.content.focus();
		return false;
	}
	if(item.content.value.length > 1000) {
		alert("投诉的内容不能超1000个字符!");
		return false;
	}
	return true;	
}


function checkAddzine(item)
{
	if(item.nick_name.value == "") {
		alert("请输入作者昵称!");
		item.nick_name.focus();
		return false;
	}
	if(item.space_url.value == "") {
		alert("请输入作者空间连接!");
		item.space_url.focus();
		return false;
	}
	if(item.sort.value == "") {
		alert("请输入杂志大类!");
		item.sort.focus();
		return false;
	}
	if(item.title.value == "") {
		alert("请输入作者空间!");
		item.title.focus();
		return false;
	}	
	if(item.diy_url.value == "") {
		alert("请输入杂志连接!");
		item.diy_url.focus();
		return false;
	}
	$param = "nick_name="+item.nick_name.value+"&space_url="+item.space_url.value+"&sort="+item.sort.value;
	$param+= "&title="+item.title.value+"&diy_url="+item.diy_url.value;
	$.ajax({ url: '/diy_recommend.php?action=add',
		timeout:10000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
		     item.nick_name.value='';
			 item.space_url.value='';
			 item.title.value='';
			 item.diy_url.value='';
			 alert('提交成功');
		},
		complete:function(){},		
		error:function(){
			alert("提交失败");
		}
    });	
	return false;
}

function refreshCc() {
	var ccImg = document.getElementById("auth_code_photo");
	if (ccImg) {
		ccImg.src="/action.php?action=validatecode&ran="+Math.random();
	}
}
function str_len(str,num)
{
	if(str.length>num){
		return str.substr(0, num)+"..";
	}else{
		return str;
	}
}
function show_title(show_title,title)
{
	var titles = document.getElementById("show_title");
		titles.title=title;
}
function clear_login()
{
	document.getElementById("login_name").value="";	
	document.getElementById("login_password").value="";
	document.getElementById("login_verify_code").value='';
	document.getElementById("login_verify_code").value='';
	var show_validate1=document.getElementById("user_validate1");
	var show_validate2=document.getElementById("user_validate2");
    user_validate1.style.display='none';
	user_validate2.style.display='none';
}
//用户登陆
function user_login(make)
{
	var isuser_validate=document.getElementById("isuser_validate");
	var username=document.getElementById("login_name");   
	if(username.value=="") {
		alert("请输入用户名!");
		return false;
	}
	var password=document.getElementById("login_password");
	if(password.value=="") {
		alert("请输入密码!");
		return false;
	}
	if(isuser_validate.value>2){
		var show_validate1=document.getElementById("user_validate1");
		var show_validate2=document.getElementById("user_validate2");
		user_validate1.style.display='';
		user_validate2.style.display='';
		document.getElementById("TB_ajaxContent").style.height=240;
		
	}
	var verify_code=document.getElementById("login_verify_code");
	if(isuser_validate.value>4){		
        if(verify_code.value==''){
			alert("请重新输入!");			
			return false;
		}
	}
	make.value="正在登录中...";
	make.disabled="disabled";
    $param = "user_name="+username.value+"&password="+password.value+"&validate="+verify_code.value;
	$.ajax({ url: '/action.php?action=dologin',
		timeout:100000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
			 var state = data.split("#");			
			 if(state[0]==1){
				 isuser_validate.value=isuser_validate.value+1;
				 make.value="登陆";
				 make.disabled=false;
				 refreshCc();
				 alert(state[1]);
				 return false;
			 }else if(state[0]==2){
				 alert(state[1]);
                 window.location = 'http://my.blog.sina.com.cn/member/signup/register.htm';
				 return false;

			 }else{
				 window.location = document.URL;
				 return true;
			 }
	    },
		complete:function(){
			//window.location = document.URL;
		},		
		error:function(){
			alert("登陆失败,请再试");
			make.value="登陆";
			make.disabled=false;
			return false;
			//tb_remove();
		}
    });
	
}

function setShareCode(look_url,pic,title){
   var str="<a href='"+look_url+" target='_blank'><img src='"+pic+"' height='46' width='61'></a><br><a href='"+look_url+"' target='_blank'>"+title+"</a>";
   var share_content=document.getElementById("share_content");
   share_content.value=str;
 }
 function copyToClipBoard(str){ 
	if (window.clipboardData) {
			window.clipboardData.setData("Text",str);
	} else {
		var flashcopier = 'flashcopier';
		if(!document.getElementById(flashcopier)) {
			var divholder = document.createElement('div');
			divholder.id = flashcopier;
			document.body.appendChild(divholder);
	}
	document.getElementById(flashcopier).innerHTML = '';
	var divinfo = '<embed src="views/normal/flash/_clipboard.swf" FlashVars="clipboard='+str+'" width="0" height="0" type="application/x-shockwave-flash"></embed>';
	document.getElementById(flashcopier).innerHTML = divinfo;
	}
	alert('复制成功!');
	tb_remove();
}

//用户收藏
function saveCollection(id,c_user_id)
{
	if(id=='' || typeof(id)=="undefined"){
       alert('收藏失败');
	   return false;
	}
	if(c_user_id=='' || typeof(c_user_id)=="undefined"){
	   return false;
	}
	$param = "id="+id+"&user_id="+c_user_id;
	$.ajax({ url: '/action.php?action=saveCollection',
		timeout:10000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
			 var state = data.split("#");
			 if(state[0]==1){				
				 alert(state[1]);
			 }else{
				alert(state[1]);
				tb_remove();
			 }	 
			
		},
		complete:function(){},		
		error:function(){
			alert("登陆失败");
			tb_remove();
		}
    });	
	return false;
}

//发送杂志给好友分享
function send_mail(make)
{
	var i=0;
	var mail1=document.getElementById("mail1").value;
	if(mail1!=""){
		if(!checkmail(mail1)){
			alert('请输入合法的邮箱!');
			return false;
		}
		i++;
	}
	var mail2=document.getElementById("mail2").value;
	if(mail2!=""){
		if(!checkmail(mail2)){
			alert('请输入合法的邮箱!');
			return false;
		}
		i++;
	}
	var mail3=document.getElementById("mail3").value;
	if(mail3!=""){
		if(!checkmail(mail3)){
			alert('请输入合法的邮箱!');
			return false;
		}
		i++;
	}
	var mail4=document.getElementById("mail4").value;
	if(mail4!=""){
		if(!checkmail(mail4)){
			alert('请输入合法的邮箱!');
			return false;
		}
		i++;
	}
	var mail5=document.getElementById("mail5").value;
	if(mail5!=""){
		if(!checkmail(mail5)){
			alert('请输入合法的邮箱!');
			return false;
		}
		i++;
	}
	var mail6=document.getElementById("mail6").value;
	if(mail6!=""){
		if(!checkmail(mail6)){
			alert('请输入合法的邮箱!');
			return false;
		}
		i++;
	}
	if(i==0){
		alert('请输入要发送到的邮件!');
		return false;
	}
	var send_name=document.getElementById("send_name").value;
	if(send_name==""){
		alert('请输入你的名字');
		return false;
	}
	make.value="正在执行中...";
	make.disabled="disabled";
	var content=document.getElementById("content").value;
	var zine_id=document.getElementById("zine_id").value;
	$param = "&mail1="+mail1+"&mail2="+mail2+"&mail3="+mail3+"&mail4="+mail4+"&mail5="+mail5+"&mail6="+mail6+"&send_name="+send_name;
	$param+="&content="+content+"&diy_id="+zine_id;
	$.ajax({ url: '/action.php?action=send_mail',
		timeout:10000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
			make.value="发送";
	        make.disabled=false;
		     alert(data);
			 tb_remove();
			
		},
		complete:function(){},		
		error:function(){
			make.value="发送";
	        make.disabled=false;
			alert("发送失败");
			//tb_remove();
		}
    });	
	return false;
}
function set_diy_id(diy_id){
   var zine_id=document.getElementById("zine_id");
     zine_id.value=diy_id;
 }
 function set_rul(){
   var url=document.getElementById("url");
     url.value=document.URL;
 }
 //举报
function send_complain(id,c_user_id)
{
    var url=document.getElementById("url").value;
	if(url==''){
		alert('请输入链接');
		return false;
	}
	var page=document.getElementById("page").value;
	if(page==''){
		alert('请输入第几页');
		return false;
	}
	var title=document.getElementById("title").value;
	if(title==''){
		alert('请输入标题');
		return false;
	}
	var content=document.getElementById("complain_content").value;
	if(content==''){
		alert('请输入内容');
		return false;
	}
	$param = "url="+url+"&page="+page+"&title="+title+"&content="+content;
	$.ajax({ url: '/action.php?action=complain',
		timeout:10000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
		     alert(data);
			 tb_remove();
			
		},
		complete:function(){},		
		error:function(){
			alert("举报提交失败");
			tb_remove();
		}
    });	
	return false;
}
function InputCount(obj,limit_length)
{
	var len=0;
	var pass = true;
	for(var i=0;i<obj.value.length;i++){
		if(obj.value.charCodeAt(i)>255){
			len = len+2;
		}else{
			len++;
		}

		if (len>limit_length){
			obj.value = obj.value.substring(0, i);
			obj.blur();
			alert('最多可输入'+limit_length+'个字符('+(limit_length/2)+'个汉字)');
			pass = false;
			break;
		}
	}

	if (pass == true){
		//VchangeClass(info_id, 'reg_info','');
	}
}
function clearText(obj)
{
	t = obj.value;
	if(t == "请输入您的评论信息..." || t == "关键字...")
	{
		obj.value = "";
	}
}

//用户登陆
function send_comment(make)
{
	var is_validate=document.getElementById("is_validate");
	var text=document.getElementById("text");
	var user_id=document.getElementById("user_id");	
	if(user_id.value==0 || user_id.value==''){
		var username=document.getElementById("user_name");
		if(username.value=="") {
			alert("请先登陆了再发表评论");
			return false;
		}
		var password=document.getElementById("password");
		if(password.value=="") {
			alert("请先登陆了再发表评论!");
			return false;
		}  

	}	

	if(is_validate.value>2){
		var show_validate=document.getElementById("show_validate");
		show_validate.style.display='';

	}
	var verify_code=document.getElementById("verify_code");
	if(is_validate.value>4){		
        if(verify_code.value==''){
			alert("请输入检证码!");
			refreshCc();
			return false;
		}
	}
	if(trim(text.value)=='' || text.value=="请输入您的评论信息..."){
		alert("请输入评论内容");
		return false;
	}
	make.value="正在执行中...";
	make.disabled="disabled";
	if(user_id.value>0){
        document.form1.submit();
		return false;
	}
	$param = "user_name="+username.value+"&password="+password.value+"&validate="+verify_code.value;
	$.ajax({ url: '/action.php?action=dologin',
		timeout:10000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
			 var state = data.split("#");			
			 if(state[0]==1){
				   is_validate.value=is_validate.value+1;
				   make.value="发表评论";
				   make.disabled=false;
				  alert(state[1]);
				  return false;
			 }else{
				 document.form1.submit();
				 return true;
			 }
	    },
		complete:function(){},		
		error:function(){
			alert("登陆失败");
			make.disabled=false;
			return false;
			//tb_remove();
		}
    });
}
//用户登陆
function login(user_name,password,validate)
{
	if(user_name=='') {
		alert("用户名不能为空");
		return false;
	}
	if(password=='') {
		alert("密码不能为空");
		return false;
	}
	var state=0;
	$param = "user_name="+user_name+"&password="+password+"&validate="+validate;
	$.ajax({ url: '/action.php?action=dologin',
		timeout:10000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
			 alert(data);
			 var state = data.split("#");			
			 if(state[0]==1){				
				 alert(state[1]);
				 return false;
			 }else{
				 return true;
				 //return state[2];
			 }
	    },
		complete:function(){},		
		error:function(){
			alert("登陆失败");
			return false;
			//tb_remove();
		}
    });
}

//删除评论
function dele_comment(diy_id,mid)
{
	if(diy_id=='' || mid==""){
       alert('删除失败');
	   return false;
	}
	$param = "diy_id="+diy_id+"&mid="+mid;
	$.ajax({ url: '/action.php?action=del_comment',
		timeout:10000,
		type:"post",
		dataType:"html",
		data: $param,
		charset: "gb2312",
        success:function(data){
			 if(data==1){
				 var num=document.getElementById("comment_num").innerHTML;
                   num=num-1;
				   if(num<0){
						num=0;
				   }
				 document.getElementById("comment_num").innerHTML=num;
                 document.getElementById("comment_"+mid).style.display="none";
			 }else{
				alert("删除评论失败");
			 }
			
		},
		complete:function(){},		
		error:function(){
			alert("删除评论失败");
		}
    });	
	return false;
}
//评论用
function refresh_comments() {
	var ccImg = document.getElementById("auth_code_photo_comment");
	if (ccImg) {
		ccImg.src="/action.php?action=validatecode&ran="+Math.random();
	}
}
//去除空间
function trim(str)
{
	str=str.replace(/(^ +)|( +$)/g, '');
	str=str.replace(/(^　+)|(　+$)/g, '');
	return(str);
}