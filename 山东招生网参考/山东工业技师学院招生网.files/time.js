/////////////////////
//��Ӱ������Ȩ����///
//  www.wf66.com  ///
//  ��ʾ��������  ///
/////////////////////

today=new Date();
 function initArray(){
 this.length=initArray.arguments.length
 for(var i=0;i<this.length;i++)
 this[i+1]=initArray.arguments[i] }
 var d=new initArray(
 "������",
 "����һ",
 "���ڶ�",
 "������",
 "������",
 "������",
 "������");
document.write(
 " ",
 //today.getYear(),"��",
 //today.getMonth()+1,"��",
 //today.getDate(),"�� ",
 d[today.getDay()+1],
 "" );


//��̬��ʾʱ��
<!-- Begin
function MakeArrayday(size) {
this.length = size;
for(var i = 1; i <= size; i++) {
this[i] = "";
}
return this;
}
function MakeArraymonth(size) {
this.length = size;
for(var i = 1; i <= size; i++) {
this[i] = "";
}
return this;
}
function funClock() {
if (!document.layers && !document.all)
return;
var runTime = new Date();
var hours = runTime.getHours();
var minutes = runTime.getMinutes();
var seconds = runTime.getSeconds();
var dn = "����";
if (hours >= 12) {
dn = "����";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
if (minutes <= 9) {
minutes = "0" + minutes;
}
if (seconds <= 9) {
seconds = "0" + seconds;
}
movingtime = hours + "��" + minutes + "��" + seconds + "�� ";
if (document.layers) {
document.layers.clock.document.write(movingtime);
document.layers.clock.document.close();
}
else if (document.all) {
clock.innerHTML = movingtime;
}
setTimeout("funClock()", 1000)
}
window.onload = funClock;
document.write(" <span id='clock' style='position:relative; FILTER: dropshadow(color=#333333,offx=1,offy=1)'></span> ")
//  End -->




//��ʾ�ʺ�
hour=new Date().getHours()
if(hour < 6){document.write(" �賿��! ")}
else if (hour < 9){document.write(" ���Ϻ�! ")}
else if (hour < 12){document.write(" �����! ")}
else if (hour < 14){document.write(" �����! ")}
else if (hour < 17){document.write(" �����! ")}
else if (hour < 19){document.write(" �����! ")}
else if (hour < 22){document.write(" ���Ϻ�! ")}
else {document.write(" ҹ���! ")}