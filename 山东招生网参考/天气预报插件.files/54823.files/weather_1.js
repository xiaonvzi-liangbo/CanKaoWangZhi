function get_wea_photo(the_weather) {
for(i=0;i<the_wea.length;i++) {
    a_wea = the_wea[i].split("|");
    for(j=0;j<a_wea.length;j++) {
        if (a_wea[j] == the_weather) return a_photo[i];
    }       
}
return a_photo[0];    
}
var the_wea = new Array("��","����|��ת����|����ת��|��ת����","��","����ת��,С��|����,С��|����,����|��,����|��,С��|��ת����,С��|��ת����,����","����,���������|����ת��,������|����ת��,����|����,����|����,������|����ת��,С����|��,������|����,С����|��,����|����ת��,����|��,С����|��ת����,С����|��ת����,����|��ת����,������","����ת��,����|����,����|��,����|��ת����,����","����ת��,����|��,����|����,������|����,����|��,������|��ת����,����");
var a_photo = new Array("qing.gif","duoyun.gif","yin.gif","xiaoyu.gif","zhenyu.gif","dayu.gif","leizhenyu.gif");
function show_weather(city_265, weather_265, area_file) {
var the_href = location.href;
var i=0;
the_href = the_href.split("=");
var the_time = the_href[1];
if(the_time==1){
    var the_weather = new Array("����",weather_265[1],"����",weather_265[2],weather_265[0]);
} else if(the_time==2){
    var the_weather = new Array("����",weather_265[2],"����",weather_265[3],weather_265[0]);
}else{
    var the_weather = new Array("����",weather_265[3],"����",weather_265[5],weather_265[0]);
}

document.write('<span title="����鿴��3���������"><table border="0" width="100%" cellspacing="0" cellpadding="2" bgcolor="#FFF9EE"  onclick="javascript:window.open(\'http://weather.265.com/'+area_file+'\');return false;" style="cursor:hand"><tr><td width="40" rowspan="3"><img border="0" src="../img/'+get_wea_photo(the_weather[1])+'" alt="'+the_weather[1]+'" width="40" height="40"></td><td width="128" height="15">'+city_265+':'+the_weather[4]+'</td></tr><tr><td width="128" height="15">'+the_weather[0]+':'+the_weather[1]+'</td></tr><tr><td width="128" height="15">'+the_weather[2]+':'+the_weather[3]+'</td></tr></table></span>');
}