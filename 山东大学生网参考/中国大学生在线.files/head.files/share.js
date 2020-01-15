function if_event_pic(typeId,uId,itemId,serId,picUrl,num){
	if(isnull(picUrl)){
		alert('参加活动的相册不能为空！');
		return;
	}
	if(!isnull(eventPicNum)){
		if(num>parseInt(eventPicNum)){
			alert('参加活动的相册最多包含'+eventPicNum+'张图片！');
			return;
		}
	}
	if_event(typeId,uId,itemId,serId,picUrl);
}

function if_event(typeId,uId,itemId,serId,picUrl,eventId){
	var a=new Array();
	a['typeId']=typeId;
	a['uId']=uId;
	a['sId']=itemId;
	a['title']=$('am1'+itemId).innerHTML;
	if(!isnull(serId)){
		a['serverId']=serId;
		a['picUrl']=picUrl;
	}
	if(!isnull(eventId))
		a['eventId']=eventId;
	var pars=$H(a).toQueryString();
	if(isnull(eventId))
		window.open(eventDomain+'event/eventWorks/getEventList.shtml?'+pars,'_blank','');
	else{
		document.location=eventDomain+'event/eventWorks/submitSecond.shtml?'+pars;
	}
}
function if_share(typeId,uId,title,sUrl,serId,picUrl){
	var a=new Array();
	a['shareType']=typeId;
	a['orgUserId']=uId;
	a['subject']=title;
	a['url']=sUrl;
	if(!isnull(serId)){
		a['serverId']=serId;
		a['picUrl']=picUrl;
	}
	var pars=$H(a).toQueryString();
	var toUrl=uliveDomain+'share/shares/showExtWindow.shtml?'+pars;
	g_frameMessage('分享',toUrl,545,420,0,'true');
}

function if_expose(typeId,sUrl){
	var a=new Array();
	a['exposureFlag']=typeId;
	a['url']=uzonePath+sUrl;
	a['subId']='';
	var pars=$H(a).toQueryString();
	var toUrl=uliveDomain+'exposure/showWindow.shtml?'+pars;
	//toUrl='../test.jsp?'+pars;
	g_frameMessage('举报',toUrl,545,420,0,'true');
}
function dispearShare(){
	hideFrame();
} 
function if_share_blog(){
	if_share(1,sId,document.title,'blog.action?uId='+sId);
}
function if_share_blogItem(){
	if_share(1,sId,document.title,'blog_'+sId+'_'+uuid+'.html');
}
function if_share_album(){
	if_share(2,uId,document.title,'dirUserAm.action?uId='+uId);
}
function if_share_photo(){
	if_share(2,uId,document.title,'dispAl.action?uId='+uId+'&id='+cur_alId,cur_serId,cur_picUrl);
}
function if_share_schPhoto(){
	if_share(2,uId,document.title,'dispSAl.action?univId='+univId+'&id='+cur_alId,cur_serId,cur_picUrl);
}
function if_share_clsPhoto(){
	if_share(2,uId,document.title,'dispCAl.action?clsId='+clsId+'&id='+cur_alId,cur_serId,cur_picUrl);
}
function if_share_group(){
	if_share(3,'',document.title,'group.action?id='+gId);
}
function if_share_net(){
	if_share(4,'',document.title,'network.action?tId='+tId+'&nId='+nId);
}
function if_share_userPm(){
	if_share(10,uId,document.title,'dirUserPm.action?uId='+uId);
}
function if_share_project(){
	if_share(10,uId,document.title,'dispPm.action?uId='+uId+'&id='+id);
}
function if_share_user(){
	if_share(11,uId,document.title,'personal.action?uId='+uId);
}

function blurUserName(obj){
	if(isnull(obj.value)){
		obj.value='请输入姓名';
	}
}
function if_search_reset(){
	$('userName').value='请输入姓名';
	$('univName').value='请输入学校名称';
	$('univId').value='';
	clearRadio('sexId');
}
function if_searchFriend(){
	if($F('userName')=='请输入姓名'&&$F('univName')=='请输入学校名称'){
		alert('请输入姓名或学校名称！');
		return;
	}
	var a=new Array();
	a['action']='searchNameListByThree';
	a['module']='friend';
	a['univId']=$F('univId');
	if(isnull($F('userName'))||$F('userName')=='请输入姓名'){
		a['userNameReal']='noName';
	}
	else
		a['userNameReal']=$F('userName');
	a['sexId']=radioValue('sexId');
	var pars=$H(a).toQueryString();
	window.open(uliveDomain+'friend.shtml?'+pars,'_blank','');
}

function if_appFriend(fId){
	window.open(uliveDomain+'friend/addFriend/'+fId+'.shtml?tSessionId='+new Date().valueOf(),'_blank','');
}
/*----------------------举报-----------------------*/
function if_expose_blogItem(rId){
	var tId=1;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='?rId='+rId;
	}
	if_expose(tId,'blog_'+sId+'_'+uuid+'.html'+str);
}
function if_expose_photo(rId){
	var tId=3;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='&rId='+rId;
	}
	if_expose(tId,'dispAl.action?uId='+uId+'&id='+cur_alId+str);
}
function if_expose_schPhoto(rId){
	var tId=3;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='&rId='+rId;
	}
	if_expose(tId,'dispSAl.action?univId='+univId+'&id='+cur_alId+str);
}
function if_expose_clsPhoto(rId){
	var tId=3;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='&rId='+rId;
	}
	if_expose(tId,'dispCAl.action?clsId='+clsId+'&id='+cur_alId+str);
}
function if_expose_project(rId){
	var tId=5;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='&rId='+rId;
	}
	if_expose(tId,'dispPm.action?uId='+uId+'&id='+id+str);
}
function if_expose_news(rId){
	var tId=19;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='?rId='+rId;
	}
	if_expose(tId,'news_'+year+'_'+id+'.html'+str);
}
function if_expose_schnews(rId){
	var tId=19;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='?rId='+rId;
	}
	if_expose(tId,'schnews_'+univId+'_'+id+'.html'+str);
}
function if_expose_clsnews(rId){
	var tId=19;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='?rId='+rId;
	}
	if_expose(tId,'clsnews_'+clsId+'_'+id+'.html'+str);
}
function if_expose_gl(rId){	
	var tId=8;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='&rId='+rId;
	}
	if_expose(tId,'dispGl.action?gId='+gId+'&id='+id+str);
}
function if_expose_file(rId){	
	var tId=21;
	var str=''
	if(!isnull(rId)){
		tId++;
		str='&rId='+rId;
	}
	if_expose(tId,'dispFm.action?univId='+univId+'&id='+id+str);
}

function if_expose_msgboade(rId){	
	var tId=14;
	var str=''
	if(!isnull(rId))
		str='&rId='+rId;
	if_expose(tId,'personal.action?uId='+uId+str);
}

function if_search(){
	var pars=Form.serialize('searchForm');
	window.open('http://search.univs.cn/search/search?'+pars,'_blank','');
}
