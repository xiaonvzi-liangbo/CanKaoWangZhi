/////////////////////
//月影社区版权所有///
//  www.wf66.com  ///
//  显示星期年月  ///
/////////////////////

today=new Date();
 function initArray(){
 this.length=initArray.arguments.length
 for(var i=0;i<this.length;i++)
 this[i+1]=initArray.arguments[i] }
 var d=new initArray(
 "星期日",
 "星期一",
 "星期二",
 "星期三",
 "星期四",
 "星期五",
 "星期六");
document.write(
 " ",
 //today.getYear(),"年",
 //today.getMonth()+1,"月",
 //today.getDate(),"日 ",
 d[today.getDay()+1],
 "" );


//动态显示时间
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
var dn = "上午";
if (hours >= 12) {
dn = "下午";
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
movingtime = hours + "点" + minutes + "分" + seconds + "秒 ";
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




//显示问候
hour=new Date().getHours()
if(hour < 6){document.write(" 凌晨好! ")}
else if (hour < 9){document.write(" 早上好! ")}
else if (hour < 12){document.write(" 上午好! ")}
else if (hour < 14){document.write(" 中午好! ")}
else if (hour < 17){document.write(" 下午好! ")}
else if (hour < 19){document.write(" 傍晚好! ")}
else if (hour < 22){document.write(" 晚上好! ")}
else {document.write(" 夜里好! ")}