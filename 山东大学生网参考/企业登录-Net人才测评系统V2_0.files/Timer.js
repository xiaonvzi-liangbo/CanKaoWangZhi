function counttimer(){ ����
    

����	var showstr;
����	
		if(parseInt(lefttime)<0)
		{
			var sparetime = 0-parseInt(lefttime);
����	
			var min = Math.floor(parseInt(sparetime)/1000/60);
		
			var sec = sparetime/1000 - min*60;	
			
			showstr = "���Ѿ���ʱ"+ parseInt(min) +"��"+ parseInt(sec) +"��";
		}
����	else
����	{
����	
����	
			var min = Math.floor(parseInt(lefttime)/1000/60);//  /1000
		
			var sec = parseInt(lefttime)/1000 - min*60; // 1000
		
			showstr =  "�㻹ʣ"+ parseInt(min) +"��"+ parseInt(sec) +"��";
	
����	} 
����	css.innerHTML= showstr;
		lefttime = parseInt(lefttime) - 1000;  
����	checktimer();
����
����
} 
����
function countAbilitytime(){ ����

����
����var isredirect = false;
	

����	var showstr;
����	
		if(parseInt(lefttime)<0)
		{
			//var sparetime = 0-parseInt(lefttime);
����	
			//var min = Math.floor(parseInt(sparetime)/1000/60);
		
			//var sec = sparetime/1000 - min*60;	
			
			//showstr = "���Ѿ���ʱ"+ parseInt(min) +"��"+ parseInt(sec) +"��";
			//parent.parent.location.href = 'test.htm';
			//parent.mainFrame1.__doPostBack('_ctl0_complete','');
			//Form1._ctl0_complete.onclick();
			showstr = "�㻹ʣ0��0��";
			parent.mainFrame1.test();
			isredirect = true;
		}
����	else
����	{
����	
����	
			var min = Math.floor(parseInt(lefttime)/1000/60);//  /1000
		
			var sec = parseInt(lefttime)/1000 - min*60; // 1000
		
			showstr =  "�㻹ʣ"+ parseInt(min) +"��"+ parseInt(sec) +"��";
	
����	} 
����	css.innerHTML= showstr;
		lefttime = parseInt(lefttime) - 1000;
		if(!isredirect)
		{
����	checkabilitytime()
����	}
��
} 
����
����
����
����
����function checktimer()
����{
����	setTimeout("counttimer()",1000);
����}
����
����function checkabilitytime()
����{
����	setTimeout("countAbilitytime()",1000);
����}



����
