//Í¼Æ¬°´±ÈÀýËõ·Å
var flag = false;
var iwidth=160;
var iheight = 160;
function chsize(ImgD)
{
  var image = new Image();

  image.src=ImgD.src;
  if(image.width>0 && image.height>0)
  {
    flag=true;
    if(image.width/image.height>= iwidth/iheight)
    {
      if(image.width>iwidth)
      { 
        ImgD.width=iwidth;
        ImgD.height=(image.height*iwidth)/image.width;
      }
      else
      {
        ImgD.width=image.width; 
        ImgD.height=image.height;
      }
      //ImgD.alt=image.width+"¡Á"+image.height;
    }
    else
    {
      if(image.height>iheight)
      { 
        ImgD.height=iheight;
        ImgD.width=(image.width*iheight)/image.height; 
      }
      else
      {
        ImgD.width=image.width; 
        ImgD.height=image.height;
      }
      //ImgD.alt=image.width+"¡Á"+image.height;
    }
  }
} 

function chsize(ImgD,w,h)
{
  var image = new Image();
	 iwidth=w;
	 iheight = h;
  image.src=ImgD.src;
  if(image.width>0 && image.height>0)
  {
    flag=true;
    if(image.width/image.height>= iwidth/iheight)
    {
      if(image.width>iwidth)
      { 
        ImgD.width=iwidth;
        ImgD.height=(image.height*iwidth)/image.width;
      }
      else
      {
        ImgD.width=image.width; 
        ImgD.height=image.height;
      }
      //ImgD.alt=image.width+"¡Á"+image.height;
    }
    else
    {
      if(image.height>iheight)
      { 
        ImgD.height=iheight;
        ImgD.width=(image.width*iheight)/image.height; 
      }
      else
      {
        ImgD.width=image.width; 
        ImgD.height=image.height;
      }
      //ImgD.alt=image.width+"¡Á"+image.height;
    }
  }
} 