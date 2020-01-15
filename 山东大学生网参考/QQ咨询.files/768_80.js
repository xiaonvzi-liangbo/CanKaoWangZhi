var lunbo_width=670
var lunbo_height=80
var text_height=0
var swf_height = lunbo_height+text_height

document.write('<object ID="lunbo_flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="'+ lunbo_width +'" height="'+ swf_height +'">');
document.write('<param name="allowScriptAccess" value="sameDomain"><param name="movie" value="/uploads/allimg/lunbo.swf"><param name="quality" value="high"><param name="bgcolor" value="#ffffff">');
document.write('<param name="menu" value="false"><param name=wmode value="opaque">');
document.write('<param name="FlashVars" value="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+lunbo_width+'&borderheight='+lunbo_height+'&textheight='+text_height+'">');
document.write('<embed ID="lunbo_flash" src="/uploads/allimg/lunbo.swf" wmode="opaque" FlashVars="pics='+pics+'&links='+links+'&texts='+texts+'&borderwidth='+lunbo_width+'&borderheight='+lunbo_height+'&textheight='+text_height+'" menu="false" bgcolor="#ffffff" quality="high" width="'+ lunbo_width +'" height="'+ swf_height +'" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />');
document.write('</object>');