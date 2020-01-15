var paramInfo = new Array;

function initParam()
{
var oldSize = paramInfo.length;

for (var i=0; i<oldSize; i++) {
	paramInfo.length--;
}
}

function setParam(paramName, paramValue)
{
var idx = paramInfo.length;

paramInfo[idx] = [];
paramInfo[idx][0] = paramName;
paramInfo[idx][1]= paramValue;
}

function playFlash(objID, objSource, objWidth, objHeight, objStyle, cabVersion, embedAttr)
{
	document.write('<OBJECT id="' + objID + '" name="' + objID + '" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ');

	if (cabVersion != '') {
		document.write('codebase="' + self.window.document.protocol + '"://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" ');
	}
	document.write('WIDTH="' + objWidth + '" HEIGHT="' + objHeight + '" ' + objStyle + '>');

	for (var i=0; i<paramInfo.length; i++) {
		document.write('<PARAM NAME="' + paramInfo[i][0] + '" VALUE="'+ paramInfo[i][1] +'">');
	}
	document.write('<embed src="' + objSource + '" width="' + objWidth + '" height="' + objHeight + '" ' + embedAttr + '>');
	document.write('</OBJECT>');
}