

function encode_utf8(_1){
var _2="";
for(var n=0;n<_1.length;n++){
var c=_1.charCodeAt(n);
if(c<128){
_2+=String.fromCharCode(c);
}else{
if((c>127)&&(c<2048)){
_2+=String.fromCharCode((c>>6)|192);
_2+=String.fromCharCode((c&63)|128);
}else{
_2+=String.fromCharCode((c>>12)|224);
_2+=String.fromCharCode(((c>>6)&63)|128);
_2+=String.fromCharCode((c&63)|128);
}
}
}
return _2;
}
function mooter_encode_url(_5){
if(_5){
_5=encode_utf8(_5);
_5=encodeURIComponent(_5);
_5=_5.substring(0,1023);
}
return _5;
}
function mooter_detect_page_url(){
var w=window;
var _7=w.location;
if(w.location==top.location){
_7=w.location.toString();
}else{
try{
_7=w.top.location.toString();
}
catch(e){
_7=document.referrer;
}
}
_7=mooter_encode_url(_7);
return _7;
}
function get_page_url(){
var _8=mooter_encode_url(window.mooter_page_url);
if(!_8){
_8=mooter_detect_page_url();
}
if(_8){
_8=_8.replace(/%[0-9]?$/,"");
}
return _8;
}
function get_ad_unit_num(){
var _9=window;
return (_9.mooter_ad_unit_num?++_9.mooter_ad_unit_num:_9.mooter_ad_unit_num=1);
}
function get_page_view_id(){
var _a=window;
if(!_a.mooter_page_view_id){
_a.mooter_page_view_id=Math.floor(Math.random()*Math.pow(10,17));
}
return _a.mooter_page_view_id;
}
function srcUrl(_b,_c){
var _d="http://advantage10.mootermedia.com:80/ads/"+_c+"?";
for(var _e in _b){
if(_b[_e]){
_d+=_e+"="+_b[_e]+"&";
}
}
return _d.substring(0,_d.length-1);
}
function esc(_f){
return _f?escape(_f):_f;
}
function writeIFrame(_10,_11){
document.write("<iframe name=\"mooter_ads\" scrolling=\"no\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\"  width=\""+_10.width+"\" height=\""+_10.height+"\" src=\""+srcUrl(_10,_11)+"\"></iframe>");
}
(function(){
var _12={partner:window.mooter_partner,page_view_id:get_page_view_id(),ad_unit:get_ad_unit_num(),maxcount:window.mooter_ad_maxcount,section:window.mooter_page_section,cat:window.mooter_page_section,overtureParams:window.mooter_overture_params,extra_params:window.extra_params,channel:window.mooter_channel,keywords:window.mooter_keywords,width:window.mooter_ad_width,height:window.mooter_ad_height,css:esc(window.mooter_ad_css),title_clr:esc(window.mooter_title_clr),desc_clr:esc(window.mooter_desc_clr),bg_clr:esc(window.mooter_bg_clr),border_clr:esc(window.mooter_border_clr),title_trim:window.mooter_title_trim,desc_trim:window.mooter_desc_trim,dp:mooter_detect_page_url(),url:get_page_url(),wrapper_url:esc(window.mooter_wrapper_url)};
if(window.mooter_ad_format=="js_flat"){
document.getElementById("mooter_js").src=srcUrl(_12,"js_flat");
}else{
if(window.mooter_ad_format=="html"){
writeIFrame(_12,"advert");
}else{
if(window.mooter_ad_format=="xhtml"){
writeIFrame(_12,"xhtml");
}else{
_12.width="";
_12.height="";
_12.pid="";
_12.tid="";
writeIFrame(_12,"moot");
}
}
}
})();

