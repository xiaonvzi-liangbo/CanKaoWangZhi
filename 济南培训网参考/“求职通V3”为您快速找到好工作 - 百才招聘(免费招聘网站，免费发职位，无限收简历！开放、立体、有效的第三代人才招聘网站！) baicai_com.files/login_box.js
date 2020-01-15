//生成分站用户登录框
var loginBox = new Object();
loginBox = {
	cookiePerfix:"JoInd_",
	loginBoxId:"login_box",
	registerBtnID:"not_login",
	path:location.pathname,
	isTele:(((window.location.host).indexOf('job-114.com')>-1)?true:false),
	init:function(loginBoxId) {
		var self = this;
		
		if (loginBoxId != null) {
			self.setLoginBoxId(loginBoxId);
		}
		
		self.makeLoginBox();
	},
	setLoginBoxId:function(loginBoxId) {
		var self = this;
		self.loginBoxId = loginBoxId;
	},
	makeLoginBox:function() {
		var self = this;
		var loginType = parseInt(self._getLoginType());
		var html = "";
		switch(loginType) {
			case 1:
				html = self._makePersonalLoginBox();
				break;
			case 2:
				//if((isTeleLogin && !self.isTele) || (!isTeleLogin && self.isTele)) {
				//	html = self._makeUnloginBox();
				//} else {
				//	html = self._makeCompanyLoginBox();
				//}
				html = self._makeCompanyLoginBox();
				break;
			default:
				html = self._makeUnloginBox();
		}
		jQuery("#" + self.loginBoxId).html(html);
		if(self.isTele) {
			jQuery("#" + self.registerBtnID).css('display','none');
		}
	},
	isBigSearchBox:function() {
		
		var self = this;
		if (self.path == "/" || self.path == "") {
			//首页
			return true;
		}
		var pathAllow = /(\/index|\/area\/|\/sub\/)/;
		if (self.path.match(pathAllow)) {
			return true;
		}
		return false;
	},
	_makeUnloginBox:function() {
		
		var self = this;
		var html = "";
		if (self.isBigSearchBox()) {
			html += '<div class="logins">';
			html += '	<div class="each each_p">';
			html += '		<h2>个人求职</h2>';
			html += '		<p><a href="/personal/login.html">登录求职中心</a> <a class="col-red" href="/personal/register.html">注册求职简历</a></p>';
			html += '		<p>一站注册,通行多个人才网站</p>';
			html += '	</div>';
			html += '	<div class="each each_c">';
			html += '		<h2>企业招聘</h2>';
			if(self.isTele){
				html +=self._makeTeleLoginBoxHtml();
			}else{
				html += '		<p><a href="/company/login.html">登录招聘管理</a> <a href="/company/register.html">免费注册</a> <a class="col-red" href="http://www.baicai.com/company/vip.html">VIP服务</a></p>';
				html += '		<p class="col-red">注册会员，送无限职位发布</p>';
			}
			html += '	</div>';				
			html += '</div>';
		} else {
			if(self.isTele){
				html+=self._makeTeleLoginBoxHtml();
			}else{
				html += '<div>';
				html += '	<div class="min_login min_p">';
				html += '		<a href="/personal/login.html" target="_blank" style="margin-right:10px">登录</a> <a href="/personal/register.html" target="_blank">注册</a>';
				html += '	</div>';
				html += '	<div class="min_login min_c">';
				html += '		<a href="/company/login.html" target="_blank" style="margin-right:10px; color:red;">登录</a> <a href="/company/register.html" target="_blank">注册</a> ';
				html += '	</div>';
				html += '	<div class="clear"></div>';
				html += '</div>';
			}
		}
		
		return html;
	},
	_makePersonalLoginBox:function() {
		
		var self = this;
		var personalInfo = self._getPersonalInfo();
		var html = "";
		
		if (self.isBigSearchBox()) {
			html += '<div class="login p_login">';
			html += '	<div class="messages">';
			html += '		<h2 class="person">个人求职</h2>';
			html += '		<p style=" width:190px; overflow:hidden; white-space:nowrap;" class="hidden">';  
			html += '			<b style="color:#FF6000">' + personalInfo.name + '</b>';
			if ( "" != personalInfo.account && personalInfo.name != personalInfo.account){
				html += '		(<span style=" color:#085CB4">' + personalInfo.account + '</span>)';
			}
			html += '		</p>';
			if (0 == personalInfo.expire) {
				html += '	<p>欢迎登录'+siteName+'</p>';
			} else {
				html += '	<p>欢迎登录'+siteName+'，登录保存' + self._getDateExpress(personalInfo.expire) + '</p>';
			}
			html += '		<p><a href="http://www.baicai.com/personal/index/">我的求职中心</a> &nbsp;<a href="/process/logout.php">退出</a></p>';
			html += '	</div>';
			html += '	<div class="welcome">';
			html += '		<p><br/><br/>';
			html += '		</p>';
			html += '	</div>';
			/*html += '	<div class="welcome">';
			html += '		<p>';
			html += '			<b style="color:#A17809">邀请朋友注册简历</b><br />';
			html += '			<a href="http://www.baicai.com/personal/tool/friend_recommend.php">推荐朋友注册</a>  <a href="http://customer.baicai.com/huodong/register/intro.html" target="_blank">积分中大奖</a>';
			html += '		</p>';
			html += '	</div>';*/
			html += '</div>';
		} else {
			html += '<div class="includ_login includ_l_p">';
			
			html += '	<div class="head">'; 
			html += '		<strong style="color:#FF8A00; font-size:12px">' + personalInfo.name + '</strong>';
			if ( "" != personalInfo.account && personalInfo.name != personalInfo.account){
				html += '	(' + personalInfo.account + ')';
			}
			html += '	</div>';
			
			html += '	<p><a href="http://www.baicai.com/personal/index/">我的求职中心</a> <a href="/process/logout.php">退出</a></p>';		 /*<a href="http://www.baicai.com/personal/tool/friend_recommend.php">推荐朋友</a>*/
			html += '</div>';
		}
		
		return html;
	},
	_makeCompanyLoginBox:function() {
		
		var self = this;
		var companyInfo = self._getCompanyInfo();
		var html = "";
		
		if (self.isBigSearchBox()) {
			html += '<div class="login c_login">';
			html += '	<div class="messages">';
			html += '		<h2 class="company">企业招聘</h2>';
			html += '		<p style=" width:190px; overflow:hidden; white-space:nowrap; " class="hidden"><b style="color:#FF6000">' + companyInfo.name + '</b></p>';
			if (companyInfo.expire == 0) {
				html += '	<p>欢迎登录'+siteName+'</p>';
			} else {
				html += '	<p>欢迎登录'+siteName+'，登录保存' + self._getDateExpress(companyInfo.expire) + '</p>';
			}
			html += '		<p><a href="http://www.baicai.com/company/index/">我的招聘管理</a> &nbsp;<a href="http://www.baicai.com/company/search/quick_search.php">搜索简历</a> &nbsp;<a href="http://www.baicai.com/company/job/published.php">发布职位</a><br /> '+((self.isTele)?'':'<a href="http://www.baicai.com/company/vip.html" target="_blank">加入VIP</a>')+'  <a href="/process/logout.php">完全退出</a></p>';
			html += '	</div>';
			html += '	<div class="welcome">';
			html += '		<p>';
			html += '			<b style="color:#B78B7C">行业人才联播, 专属人才管家</b><br />';
			html += '		</p>';
			html += '	</div>';
			html += '</div>';
		} else {
			html += '<div class="includ_login">';
			html += '	<div class="head"><strong style="color:#FF8A00; font-size:12px">' + companyInfo.name + '</strong>（' + companyInfo.account + '）</div>';
			html += '	<p><a href="http://www.baicai.com/company/index/">招聘管理</a> <a href="http://www.baicai.com/company/search/quick_search.php">搜简历</a> <a href="http://www.baicai.com/company/job/add.php">发职位</a>  '+((self.isTele)?'':'<a href="http://www.baicai.com/company/vip.html" target="_blank">加入VIP</a>')+'  <a href="/process/logout.php">退出</a></p>';	
			html += '</div>';
		}
		return html;
	},
	//给电信站点生成不同的html
	_makeTeleLoginBoxHtml:function(){
		if(this.isBigSearchBox()){
			var str='';
			str ='<p><form filter="true" onsubmit="return Validator.Validate(this,4);" action="/process/about/" method="post" name="loginFrom" id="loginFrom" class="loginForm">';
			str+='<input type="hidden" value="31536000" id="aliveTime" name="aliveTime"/>';
			str+='<input type="hidden" value="newcompany_login" id="formAction" name="formAction"/>';
			str+='  <table cellspacing="0" cellpadding="0" border="0" width="100%">';
			str+='    <tbody>';
			str+='      <tr>';
			str+='        <td width="">帐号：</td>';
			str+='        <td width=""><label><input type="text" msg="3~20位 字母,数字,下划线！" datatype="Require" id="LoginName" onblur="if(this.value==\'\'){this.value=\'3~20位 字母,数字,下划线！\'; jQuery(this).attr(\'class\',\'tips\');}" onfocus="if(this.value ==\'3~20位 字母,数字,下划线！\') {this.value = \'\'; jQuery(this).attr(\'class\',\'\');}" value="3~20位 字母,数字,下划线！" name="LoginName" style="border: 1px solid rgb(190, 190, 190); width: 110px;" tabindex="1"/></label></td>';
			str+='        <td rowspan="2"><input type="submit" value="登录" name="input" class="" tabindex="3"/></td>';
			str+='      </tr>'
			str+='      <tr>'
			str+='        <td>密码：</td>';
			str+='        <td><label><input type="password" msg="请输入正确的密码！" datatype="Password" id="PassWord" name="PassWord" style="border: 1px solid rgb(190, 190, 190); width: 110px;" tabindex="2"/></label></td>';
			str+='      </tr>'
			str+='    </tbody>';
			str+='  </table>';
			str+='</form></p>';
			return str;
		}else{
			var html='';
			html += '<div>';
			html += '	<div class="min_login min_p">';
			html += '		<a href="/personal/login.html" target="_blank" style="margin-right:10px">登录</a> <a href="/personal/register.html" target="_blank">注册</a>';
			html += '	</div>';
			html += '	<div class="min_login min_c">';
			html += '		<a href="/company/login.html" target="_blank" style="margin-right:10px; color:red;">登录</a>';
			html += '	</div>';
			html += '	<div class="clear"></div>';
			html += '</div>';
			return html;
		}
	},
	//给电信站点生成不同的html
	_makeTeleRegisterBoxHtml:function(){
		var reiHtml='';
		if(self.isTele){
			reiHtml='<p style="font-weight:700;">还不是企业会员？</p>'
			reiHtml='<p style="font-weight:700; font-size:14px; color:red; text-align:center; margin:10px auto 6px auto">全国第一家终身免费招聘服务</p>'
			reiHtml='<p style="text-align:center"><a href="/company/register.html"><img src="{imagesPath}regist_now.gif" alt="立刻登录" /></a></p>'
		}
		return reiHtml;
	},
	//0未登录 1 个人登录 2 企业登录
	_getLoginType:function() {
		
		var self = this;
		var cType = self._getCookie("cType");
		var cCode = self._getCookie("cCode");
		var cAccount = self._getCookie("cAccount");
		if ((cType!=null && cType == 2) && cCode!="" && cAccount!='') {
			//企业登录
			return 2;
		}
		var uType = self._getCookie("uType");
		if (uType!=null && uType) {
			//1个人登录 5 总后台登录
			return uType;
		}
		return 0;
	},
	_getCompanyInfo:function() {
		var self = this;
		var name = self._getCookie("cName");
		var account = self._getCookie("cAccount");
		var expire = self._getCookie("cExpire");
		
		if (expire == "") {
			expire = 0;	
		}
		
		return {
			"name":name,
			"account":account,
			"expire":expire
		};
	},
	_getPersonalInfo:function() {
		var self = this;
		var name = self._getCookie("uName");
		var account = self._getCookie("uAccount");
		var expire = self._getCookie("uExpire");
		if (expire == "") {
			expire = 0;	
		}
		
		//如果名称是邮箱 那么就不显示帐号了
		if(name.match(/^[a-zA-Z0-9]+[_a-zA-Z0-9-]*(\.[_a-z0-9-]+)*@[a-z0-9]+(-[a-z0-9]+)*(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/) || account == name){
			account = "";
		}
		
		return {
			"name":name,
			"account":account,
			"expire":expire
		};
	},
	_getDateExpress:function(sec){
		if(sec == null){
			return "";
		}
		var day = Math.ceil(sec/ (3600*24));
		
		var express = "";
		switch(day){
			case 15:
				express = "半个月";
				break;
			case 30:
				express = "一个月";
				break;
			case 60:
				express = "两个月";
				break;
			default:
				express = day + "天";
				break;
		}
		return express;
	},
	_getCookie:function(key) {
		var self = this;
		var val = jQuery.cookie(self.cookiePerfix + key);
		if (typeof(val) != "undefined" && val != null) {
			return val;	
		}
		return "";
	},
	destruct:function() {
		
	}
}