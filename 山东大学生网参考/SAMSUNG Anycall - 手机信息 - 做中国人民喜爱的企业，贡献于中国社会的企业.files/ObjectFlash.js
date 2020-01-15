function fn_showfls (strName, strSrc, strWidth, strHeight, strParam){
	document.write("<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'\n");
	document.write("		id='"+strName+"_ex' width='"+strWidth+"' height='"+strHeight+"'\n");
	document.write("		codebase='http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab'>\n");
	document.write("		<param name='movie' value='"+strSrc+"' />\n");
	document.write("		<param name='quality' value='high' />\n");
	document.write("		<param name='bgcolor' value='#FFFFFF' />\n");
	document.write("		<param name='allowScriptAccess' value='sameDomain' />\n");
	document.write("		<param name='wmode' value='transparent' />\n");
	if(strParam != "")
		document.write("		<param name='flashvars' value='"+strParam+"'/>\n");
	document.write("		<embed src='"+strSrc+"?"+strParam+"' quality='high' bgcolor='#FFFFFF'\n");
	document.write("			width="+strWidth+"' height='"+strHeight+"' id='"+strName+"' align='middle'\n");
	document.write("			play='true'\n");
	document.write("			loop='false'\n");
	document.write("			quality='high'\n");
	document.write("			allowScriptAccess='sameDomain'\n");
	document.write("			type='application/x-shockwave-flash'\n");
	document.write("			wmode='transparent'\n");
	document.write("			pluginspage='http://www.adobe.com/go/getflashplayer'>\n");
	document.write("		</embed>\n");
	document.write("</object>\n");
}