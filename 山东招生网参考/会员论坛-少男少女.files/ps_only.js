// ?? ??? ?? ?? ??
var upload_status = 0;
var MAX_LENGTH_MHTITLE = 30;
var MAX_LENGTH_MEMO_CONT = 1000;
var MAX_LENGTH_FRIEND_NOTE = 40;
// ?? ??? ?? ?? ?
 
function ImageResize(objName) {
	myImage = new Image();
	myImage.src = document.getElementById(objName).src;
	if(myImage.width > 100) {
		document.getElementById(objName).style.width = 100;
		//alert(objName + ' : ' + document.getElementById(objName).style.width);
	}
	if(myImage.height > 100) {
		document.getElementById(objName).style.height = 100;
		//alert(objName + ' : ' + document.getElementById(objName).style.width);
	}
}