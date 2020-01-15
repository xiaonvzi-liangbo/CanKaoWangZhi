function hideTooltip(object) {
    if (document.all || document.getElementById) {
        var o = MM_findObj(object); o.style.visibility="hidden"; o.style.left = -300;  o.style.top = -50;
        return false;
    } else if (document.layers) {
        var o = MM_findObj(object); o.visibility="hide"; o.left = 1; o.top = 1;
        return false;
    } else return true
}

function showTooltip(object,e, tipContent, backcolour , bordercolour , textcolour ,displaytime,font) {
    window.clearTimeout("hideTooltip");
    if (!font || font=='') font = 'Tahoma, Arial, Helvetica, sans-serif';
    if (document.all || document.getElementById) {
        var o = MM_findObj(object),mouseX,mouseY,oc=o.style,db=document.body;
        o.innerHTML='<table style="font-family: '+font+'; font-size: 11px; border: '+bordercolour +'; border-style: solid; border-top-width: 2px; border-right-width: 2px; border-bottom-width: 2px; border-left-width: 2px; background-color : '+backcolour +'" width="10" border="0" cellspacing="2" cellpadding="2"><tr><td nowrap><font style="font-family: '+font+'; font-size: 11px; color: '+textcolour +'">'+unescape(tipContent)+'<\/font><\/td><\/tr><\/table> ';
        if (document.getElementById && !document.all) {
            mouseX = e.pageX; mouseY = e.pageY;
            oc.left = ((mouseX + o.offsetWidth) > (window.innerWidth-20 + window.pageXOffset)) ? mouseX - o.offsetWidth -10 : window.pageXOffset+mouseX;
        } else {
            mouseX = window.event.clientX + db.scrollLeft;
            mouseY = window.event.clientY + db.scrollTop;
            oc.left = ((e.x + o.clientWidth) > (db.clientWidth + db.scrollLeft)) ? (db.clientWidth + db.scrollLeft) - o.clientWidth-10 : mouseX;
        }
        oc.top="30"; oc.visibility="visible";
        window.setTimeout("hideTooltip('"+object+"')", displaytime);
        return true;
    } else if (document.layers) {
        var o = MM_findObj(object);
        o.document.write('<table width="10" border="0" cellspacing="1" cellpadding="1"><tr bgcolor="'+bordercolour +'"><td><table width="10" border="0" cellspacing="0" cellpadding="2"><tr bgcolor="'+backcolour +'"><td nowrap><font style="font-family: '+font+'; font-size: 11px; color: '+textcolour +'">'+unescape(tipContent)+'<\/font><\/td><\/tr><\/table><td><\/tr><\/table>');
        o.document.close(); o.top="30";
        o.left = ((e.x + o.clip.width) > (window.pageXOffset + window.innerWidth)) ? window.innerWidth - o.clip.width-10 : e.x;
        o.visibility="show"
        window.setTimeout("hideTooltip('"+object+"')", displaytime);
        return true;
    }
    else return true;
}
