var focus_width=216;
var focus_height=162;
var text_height=18;
var swf_height = focus_height+text_height;
var imgUrl1="http://www.websys.cn/upfiles/200712514262616903.jpg";
var imgLink1="http://www.websys.cn/chinese/product.asp?id=56";
var imgtext1="韩风服装饰品网模板";
var imgUrl2="http://www.websys.cn/upfiles/20071251551957617.jpg";
var imgLink2="http://www.websys.cn/chinese/product.asp?id=57";
var imgtext2="蓝色企业商务模板";
var imgUrl3="http://www.websys.cn/upfiles/2007125172034727.jpg";
var imgLink3="http://www.websys.cn/chinese/product.asp?id=48";
var imgtext3="红色风格全屏版网站";
var imgUrl4="http://www.websys.cn/upfiles/2007125153942223.jpg";
var imgLink4="http://www.websys.cn/chinese/product.asp?id=59";
var imgtext4="绿色风格商务模板网站";
var imgUrl5="http://www.websys.cn/upfiles/2007125153919487.jpg";
var imgLink5="http://www.websys.cn/chinese/product.asp?id=59";
var imgtext5="多风格商务模板网站";
var imgUrl6="http://cimg2.163.com/cnews/2007/9/11/20070911081817e0004.jpg";
var imgLink6="http://dddd";
var imgtext6="dddd";
var imgUrl7="http://cimg2.163.com/cnews/2007/9/11/20070911205321d0a45.jpg";
var imgLink7="http://sdsd";
var imgtext7="sds";
var pics=imgUrl1+"|"+imgUrl2+"|"+imgUrl3+"|"+imgUrl4+"|"+imgUrl5
var links=imgLink1+"|"+imgLink2+"|"+imgLink3+"|"+imgLink4+"|"+imgLink5
var texts=imgtext1+"|"+imgtext2+"|"+imgtext3+"|"+imgtext4+"|"+imgtext5
document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+ focus_width +'" height="'+ swf_height +'">');
document.write('<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="/common/playswf.swf"><param name=wmode value=transparent><param name="quality" value="high">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'">');
document.write('<embed src="/common/playswf.swf" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+focus_width+'&borderheight='+focus_height+'&textheight='+text_height+'" menu="false" bgcolor="#DADADA" quality="high" width="'+ focus_width +'" height="'+ swf_height +'" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');  document.write('</object>');
