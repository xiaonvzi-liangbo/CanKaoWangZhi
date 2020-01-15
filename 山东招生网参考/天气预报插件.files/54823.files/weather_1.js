function get_wea_photo(the_weather) {
for(i=0;i<the_wea.length;i++) {
    a_wea = the_wea[i].split("|");
    for(j=0;j<a_wea.length;j++) {
        if (a_wea[j] == the_weather) return a_photo[i];
    }       
}
return a_photo[0];    
}
var the_wea = new Array("晴","多云|晴转多云|多云转晴|阴转多云","阴","多云转晴,小雨|多云,小雨|多云,有雨|阴,有雨|阴,小雨|阴转多云,小雨|阴转多云,有雨","多云,阵雨或雷雨|多云转晴,大阵雨|多云转晴,阵雨|多云,阵雨|多云,大阵雨|多云转晴,小阵雨|阴,大阵雨|多云,小阵雨|阴,阵雨|多云转晴,有雨|阴,小阵雨|阴转多云,小阵雨|阴转多云,阵雨|阴转多云,大阵雨","多云转晴,大雨|多云,大雨|阴,大雨|阴转多云,大雨","多云转晴,雷雨|阴,雷雨|多云,雷雨大风|多云,雷雨|阴,雷雨大风|阴转多云,雷雨");
var a_photo = new Array("qing.gif","duoyun.gif","yin.gif","xiaoyu.gif","zhenyu.gif","dayu.gif","leizhenyu.gif");
function show_weather(city_265, weather_265, area_file) {
var the_href = location.href;
var i=0;
the_href = the_href.split("=");
var the_time = the_href[1];
if(the_time==1){
    var the_weather = new Array("上午",weather_265[1],"下午",weather_265[2],weather_265[0]);
} else if(the_time==2){
    var the_weather = new Array("下午",weather_265[2],"晚上",weather_265[3],weather_265[0]);
}else{
    var the_weather = new Array("晚上",weather_265[3],"明天",weather_265[5],weather_265[0]);
}

document.write('<span title="点击查看近3天天气情况"><table border="0" width="100%" cellspacing="0" cellpadding="2" bgcolor="#FFF9EE"  onclick="javascript:window.open(\'http://weather.265.com/'+area_file+'\');return false;" style="cursor:hand"><tr><td width="40" rowspan="3"><img border="0" src="../img/'+get_wea_photo(the_weather[1])+'" alt="'+the_weather[1]+'" width="40" height="40"></td><td width="128" height="15">'+city_265+':'+the_weather[4]+'</td></tr><tr><td width="128" height="15">'+the_weather[0]+':'+the_weather[1]+'</td></tr><tr><td width="128" height="15">'+the_weather[2]+':'+the_weather[3]+'</td></tr></table></span>');
}