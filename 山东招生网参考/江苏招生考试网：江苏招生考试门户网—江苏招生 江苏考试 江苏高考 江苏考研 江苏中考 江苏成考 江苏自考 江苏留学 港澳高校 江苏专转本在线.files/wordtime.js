function startmarquee(lh,speed,delay,index){ 
var t; 
var p=false; 
var o=document.getElementById("marqueebox"+index); 
o.innerHTML+=o.innerHTML; 
o.onmouseover=function(){p=true} 
o.onmouseout=function(){p=false} 
o.scrollTop = 0; 
function start(){ 
t=setInterval(scrolling,speed); 
if(!p) o.scrollTop += 2; 
} 
function scrolling(){ 
if(o.scrollTop%lh!=0){ 
o.scrollTop += 2; 
if(o.scrollTop>=o.scrollHeight/2) o.scrollTop = 0; 
}else{ 
clearInterval(t); 
setTimeout(start,delay); 
} 
} 
setTimeout(start,delay); 
} 
startmarquee(22,50,3000,0); 
startmarquee(22,50,3000,1); 
startmarquee(22,50,3000,2); 
startmarquee(22,50,3000,3); 
startmarquee(22,50,3000,4); 
startmarquee(22,50,3000,5); 
startmarquee(22,50,3000,6); 
startmarquee(22,50,3000,7); 
startmarquee(22,50,3000,8); 