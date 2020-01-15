function _uVoid() { return; }

function pps_dl(page)
{
  var ref  ;
  ref = escape(document.referrer) ;
  var r  ;
  r = escape(location.href) ;

  var i2=new Image(1,1);
  i2.src="http://stat.ppstream.com/download/click.php?clt="+page+"&ref="+ref+"&url="+r;
  i2.onload=function() { _uVoid(); }

}

function pps_view(page)
{
  var ref  ;
  ref = escape(document.referrer) ;
  var r  ;
  r = escape(location.href) ;
  
  var i2=new Image(1,1);
  i2.src="http://stat.ppstream.com/download/view.php?clt="+page+"&ref="+ref+"&url="+r;
  i2.onload=function() { _uVoid(); }

}

function pps_onclick(page)
{
  var ref  ;
  ref = escape(document.referrer) ;
  
  var r  ;
  r = escape(location.href) ;

  var i2=new Image(1,1);
  i2.src="http://stat.ppstream.com/onclick.php?clt="+page+"&ref="+ref+"&url="+r;
  i2.onload=function() { _uVoid(); }

}
