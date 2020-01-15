// JScript 文件


 function tbClass(obj)
 {
   obj.className="coolTextBox";
 }
 function tbClass_(obj)
 {
   obj.className="coolTextBox_";
 }
 function ChangeTStyle()
 {
    var a=document.getElementsByTagName("input");
    for(i=0;i<a.length;i++)
    {
       if(a[i].type=="text"||a[i].type=="textarea"||a[i].type=="password")
       {
           a[i].onmouseover=function(){ return tbClass(this)}
           a[i].onmouseleave=function(){ return tbClass_(this)}
       }
    }
 }
