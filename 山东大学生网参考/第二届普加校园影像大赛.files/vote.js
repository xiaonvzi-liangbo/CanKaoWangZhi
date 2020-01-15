function vote(workid,memberid) {
  var wid = workid;
  var uid = memberid;
  //alert('投票即将开始...');return false;
  if(uid == 0){
   alert('请先登录普加，参与投票.');
   window.open('http://linju.pojaa.com/login');
   return false;
  }
  
  $.get('vote.php',{
   workid : wid,
   memberid : uid,
   t :  new Date().getTime() 
  },function(data,textStatus){
    if(textStatus =='success'){
      if(data =='error'){
       alert('为保证投票公平性，只有实名身份认证用户才可投票，马上身份认证。');
       window.open('http://linju.pojaa.com/certification?view=card');
       return false;
      }
      if(data =='many'){
       alert('您今天只能为该作品投5票，欢迎关注其他作品，谢谢支持！');
      }else{
       $('#votenum' + workid).html(data);
       alert('投票已成功，请继续关注其它作品，谢谢您的支持!');
      }
    }else{
      alert("投票不成功，请重试！");
    }   
  });
}
