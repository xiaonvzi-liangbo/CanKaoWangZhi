// JavaScript Document
function expansionRightBroker(h){
		h += 1;
	$('#right_float').css('height', h + 'px')
	if(h < 190){
		var _me = arguments.callee;
		setTimeout(function(){
			_me(h);
		}, 1);
	}
					
}
			
//获取IE的真实Body
function IeTrueBody(){
	return (document.compatMode && document.compatMode != "BackCompat") ? document.documentElement : document.body;
}

//获取可视区的终点（边界）
function get_body_wh(){
	var _x = tbody.scrollLeft + tbody.clientWidth;	// 网页横向终点
	var _y = tbody.scrollTop + tbody.clientHeight;	// 网页纵向终点
	return {_width:_x, _height:_y};
}
var tbody = IeTrueBody();

height = get_body_wh();

//滚动条的事件处理

window.onscroll = function(){
	height = get_body_wh();
	$('#right_float').css('top',document.body.scrollTop+(height._height-192));
//	$('#diva').css('bottom',document.body.scrollTop+(height._height));
}

function createRigthAd(imagePath){
	var html = '<div class="rightfloat" style="position : absolute ; right:0px; bottom : 0cm; display:none; overflow:hidden;" id="right_float">'
			+'<div class="tit">'
			+'<img src="'+imagePath+'close_pic.gif" alt="关闭" class="right" style="vertical-align:middle; margin-top:5px; cursor:pointer" onclick="$(\'#right_float\').hide();$.cookie(\'right_close\',\'close\',86400)" />'
			+'<h3 style="color:#fff;">百才小贴士</h3>'
			+'</div>'
			+'<div class="content">'
			+'<a href="http://www.baicai.com/job_agent/index.php?refer=rightbottom" target="_blank"><img id="broker_float_right" src="'+imagePath+'broker_float_right_'+area+'.gif" style="vertical-align:top" alt="7天快速找工作，增加面试机会，缩短求职时间！" /></a>'
			+'</div>'
			+'</div>';
	document.write(html);
}

function showAgent(){	// 显示求职经纪人相关
	/*if(area != 'shenzhen'){
		$('#ad_broker_one').show();		// 导航栏上面广告
	}*/
	//$('#li_ad_broker_one').show();	// 导航栏
	//$('#ad_broker_fj').show();		// 公司页职位页

	//求职经纪人首页头部广告 cookie
	var user_close = $.cookie('user_close');
	if(!user_close){
		$('#index_top_broker_img').attr('src', imagesPath + 'index_top_broker_' + area + '.jpg');
		$('#index_top_broker').css('height', '0px').show(); // 求职经纪人，首页广告
		expansionTopBroker(0);
	}
	
	//首页广告关闭
	jQuery("#close_btn").click(function() {
		jQuery.cookie("user_close", 'top_close', {path:"/",expires:86400});
		jQuery("#index_top_broker").hide();
	});
	
	if($('#agentAdInput').val() && $('#agentAdInput').val() == 'show'){
		$('#agentAdText').show();	// 职位申请结果页
	}
		
	//右下角广告
	/*var right_close = $.cookie('right_close');
	if(!right_close) {
		$('#broker_float_right').attr('src', imagesPath + 'broker_float_right_' + area + '.gif');
		$('#right_float').css('height', '0px').show(); 
		expansionRightBroker(0,200);
	}*/
}

function expansionTopBroker(h){
	h += 5;
	$('#index_top_broker').css('height', h + 'px')
	if(h < 75){
		var _me = arguments.callee;
		setTimeout(function(){
			_me(h);
		}, 1);
	}
					
}			