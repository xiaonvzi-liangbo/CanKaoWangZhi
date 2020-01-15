if(typeof Member_Regist == "undefined") Member_Regist={};
Member_Regist_class = function() {};
Object.extend(Member_Regist_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	UserNameCheck: function(cUserName) {
		return this.invoke("UserNameCheck", {"cUserName":cUserName}, this.UserNameCheck.getArguments().slice(1));
	},
	url: '/ajaxpro/Member_Regist,App_Web_fcgwrkbf.ashx'
}));
Member_Regist = new Member_Regist_class();

