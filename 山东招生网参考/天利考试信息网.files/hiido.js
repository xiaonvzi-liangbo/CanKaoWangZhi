try{
	if(_hiido_wid){
		var hiido_d = new Date();
		hiido_dls = hiido_d.getTime();
		var hiido_oHead = document.getElementsByTagName('head').item(0); 
		var hiido_oScript= document.createElement("script"); 
		hiido_oScript.type = "text/javascript"; 
		hiido_oScript.src="http://cdn.hiido.com/analy.js?nc="+hiido_d.getDate();
		hiido_oHead.appendChild(hiido_oScript);
		var hiido_html = '<a href="http://web.hiido.com/siteid.php?wid='+_hiido_wid+'" target="_blank">';
		_hiido_sty = (_hiido_sty<11)?_hiido_sty:6;
		if(_hiido_sty){hiido_html+='<img src="http://cdn.hiido.com/b'+_hiido_sty+'.gif" border=0 alt="Hiido.com - Hiido Analytics Professional" >';}else{hiido_html+="&#28023;&#24230;&#32479;&#35745;";}
		hiido_html+="</a>";
		document.write(hiido_html);
	}
}catch(e){}