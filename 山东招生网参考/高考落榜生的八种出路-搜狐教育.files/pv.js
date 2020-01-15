function m_s(){var n=new Date().getTime();var c=escape(n*1000+Math.round(Math.random()*1000));
with(document){if(cookie.indexOf("SUV=")<0)if(domain.indexOf(".sohu.com")>0)cookie="SUV="+c+";path=/;expires=Sun, 29 July 2046 00:00:00 UTC;domain=sohu.com";
else write("<scr"+"ipt type='text/javascript' src='http://suvset.sohu.com/suv/"+c+"'></scr"+"ipt>");
if(top.location==self.location||domain.indexOf(".go2map.com")>=0)write("<scr"+"ipt src='http://pv.sohu.com/pv.gif"+"?t?="+c+"?r?="+referrer+"'></scr"+"ipt>");}}
var spv;if(!spv)m_s();spv=1;
