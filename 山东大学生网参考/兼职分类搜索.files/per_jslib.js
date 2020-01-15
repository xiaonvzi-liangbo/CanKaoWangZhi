

/**按字节长度控制的函数。主要用于文本框中onKeyUp()事件 */
function js_setMaxLen(currObj,iNum)
{   //alert(currObj);
    if (js_byte_length(currObj.value) > iNum)
    {
        currObj.value = js_cutstr(currObj.value,iNum);
        currObj.focus();
        alert('输入超长!');
    }
}

/** 截取指定字节长度的字符串 */
function js_cutstr(szValue,iLen)
{
    //取出允许的长度写回
    var szObjValue = "";
    var iCount = 0;
    for(i = 0; i < szValue.length; i++){
        var szTmpUn = escape(szValue.charAt(i));
        if (szTmpUn.length >= 6){
           iCount = iCount + 2;
        }
        else {
            iCount = iCount + 1;
        }
        if (iCount > iLen){break;}
        szObjValue = szObjValue + szValue.charAt(i);
    }
    return szObjValue;
}



/**取字串的字符个数(包括汉字)*/
function js_byte_length( _sz )
{
    if( _sz.length <= 0 ) return 0 ;
    //byteLeng统计byte的长度
    byteLeng = _sz.length;
    for( i =0 ; i < _sz.length  ; i++ ){
        //对每个字符进行转义编码：规则：只对不可见字符、空格、非ASCII码进行转码。
        //转码结果为 unicode码。如：“你”，转为：%u4F60
        szTmp = escape(_sz.charAt(i),'UTF-8');
        //alert("escape is:"+szTmp);
        if(szTmp.length>=6){
            //如果为双字节的字符，则再加1。
            byteLeng ++;
        }
    }
    return byteLeng;
}


/**去掉前后空格:包括全角空格*/
function js_trim(str)
{   
    str += "";
    while( (str.charAt(0)==' ')||(str.charAt(0)=='　')||(escape(str.charAt(0))=='%u3000') )     
         str=str.substring(1,str.length);
    while( (str.charAt(str.length-1)==' ')||(str.charAt(str.length-1)=='　')||(escape(str.charAt(str.length-1))=='%u3000') )  
        str=str.substring(0,str.length-1);
    return str;
}

function js_hasBadChar(szOriginal)
{
    var szExp = "'\\/?\"<>|";
    if( szOriginal.length <=0 || szExp.length <=0 ) {
        return false;
    }
    for( var counter = 0 ; counter < szExp.length ; counter ++ ){
        curr_char = szExp.charAt(counter);
        if( szOriginal.indexOf( curr_char) >= 0 ){
            return true ;
        }
    }
    return false;
}



/** 检测输入日期是否合法*/
function js_isDate(inputyear,inputmonth,inputday){
    var nowdate = new Date();
    var result;
    var varleap_year;
    result = true;

    if ((inputyear < 1850) || (inputyear>2500) || (!isDigital(inputyear))) result=false;
    if ((((parseInt(inputyear)%4) == 0) && ((parseInt(inputyear)%100) != 0)) || ((parseInt(inputyear)%400) == 0)) {
        if ((parseInt(inputmonth) == 2) && (parseInt(inputday) > 29)) result=false;
        switch(parseInt(inputmonth)){
            case 4: 
                if (parseInt(inputday) > 30) { 
                    result = false;
                    break;
                }
            case 6: 
                if (parseInt(inputday)>30) { 
                    result=false;
                    break;
                }
            case 9: 
                if (parseInt(inputday)>30) {
                    result=false;
                    break;
                }
            case 11: 
                if (parseInt(inputday)>30) {
                    result=false;
                    break;
                }   
        }
    } else {
        switch(parseInt(inputmonth)) {
            case 2: 
                if (parseInt(inputday)>28) {
                    result=false;
                    break;
                }
            case 4: 
                if (parseInt(inputday)>30) {
                    result=false;
                    break;
                }
            case 6: 
                if (parseInt(inputday)>30) {
                    result=false;
                    break;
                }
            case 9: 
                if (parseInt(inputday)>30) {
                    result=false;
                    break;
                }
            case 11: 
            if (parseInt(inputday)>30) {
                result=false;
                break;
            }
        }
    }
    return result;
}

/** 是否为合法字串，指只包括字母，数字和_的字串 暂不用　*/
function isValidStr(s) {
    return true;
    /*
	if (s.length = 0) return false;
	var regu = "^[0-9A-Za-z_:;@]*$";
	var re   = new RegExp(regu);
	if (s.search(re) != -1)
		return true;
	else
		return false;
    */ 
}

/** 检测Email是否合法 */
function js_check_mail(s) {
	if (s.length > 100)	return false;
	var regu = "^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[_.0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+([a-zA-Z]{2}|net|NET|com|COM|gov|GOV|mil|MIL|org|ORG|edu|EDU|int|INT|cn|CN|cc|CC)$";
	var re = new RegExp(regu);
	if (s.search(re) != -1)
		return true;
	else 
		return false;
}


/** 检查电话号码输入是否合法 */
function js_checkphone(s){
	if (s.length < 1) return false;

	var tmpChar = "0123456789-/,()";

	for (i = 0; i < s.length; i++) {
		ch = s.charAt(i);
		for(j = 0; j < tmpChar.length; j++) {
			if (ch == tmpChar.charAt(j))
				break;
			if (j == tmpChar.length - 1)
				return false;
		}
	}
	return true;
}


//-------------------------------------------------------------------
/**
 * 数字相关
 */
/** 是否为数字 Base 20030821 */
function js_check_num(s) {
	var regu = "^([0-9]*)$";
//	var regu = "^([0-9]*[.0-9])$"; // 小数测试
	var re   = new RegExp(regu);
	if (s.search(re) != -1)
		return true;
	else 
		return false;
}
/** 是否为数字 Base 20030821 */
function js_check_int(s) {
	var tmpChar = "0123456789";

	if (s.length < 1) return false;
	for (var i=0; i<s.length; i++){
		ch = s.charAt(i);
		for (var j=0; j<tmpChar.length; j++){
			if (ch == tmpChar.charAt(i))
				break;
			if (j == tmpChar.length)
				return false;
		}
	}
	return true;
}
//
//检验一表单是否为对象
function isObj(varObject){
			if(typeof(varObject)=="object"){
			   return true;	
			}	
			else{
		       return false;	
		}
}


//配置已选择的工作岗位类别
function fillJobList(){

    tmp = new Array();
    var m=document.thisForm;
    var job1=m.jobFunction1;
    var job2=m.jobFunction2;
    var job3=m.jobFunction3;
    var jobList=m.subCatelog;
    var jobSel=m.jobcatelog;
    var val  = '';
    var val1 = '';
    var val2 = '';
    var txt1 = '';
    var txt2 = '';

    var flag = 1; //显示英文
    if (document.location.href.indexOf("_En.jsp")=="-1") flag = 0; //显示中文

    //alert('hello');
    //修改或克隆职位时配置已选择的工作岗位类别
    if(isObj(job1) && job1.value!=""){
        val = ''+job1.value;
        if (val.length>3)
        {
           val1 = val.substring(0, 2) ;
           val2 = val.substring(2) ;
           if (val2 == '00')
           {
              val1 = val ;
              val2 = '' ;
           }
           else 
           {
              val1 = val1 + '00' ;
              val2 = val ;
           }

           for (var i=0; i<catelogs.length; i++)
           {
               tmp = catelogs[i] ;
               if (val1!='' && tmp[2]==val1)
               {
                   if (flag==0) txt1 = tmp[0] ;
                   else  txt1 = tmp[1] ;
                   txt2 = val1 ;
                   //alert("txt1="+txt1+"---txt2="+txt2);
               }
               if (val2!='' && tmp[2]==val2)
               {
                   if (flag==0) txt1 = txt1 + '-' + tmp[0] ;
                   else  txt1 = txt1 + '-' + tmp[1] ;
                   txt1 = txt1.replace('-不限', '');
                   txt2 = val1 ;
               }
           }

           //alert("txt1="+txt1+"---txt2="+txt2);
           if (txt1!='' && txt2!='')
           {
                var opt1=document.createElement("OPTION");
                opt1.value=val;
                //opt1.value=txt2;
                opt1.text=txt1;
                jobSel.add(opt1);
           }
        }
    }

    if(isObj(job2) && job2.value!=""){
        val = ''+job2.value;
        //alert('val = '+val);
        if (val.length>3)
        {
           val1 = val.substring(0, 2) ;
           val2 = val.substring(2) ;

           if (val2 == '00')
           {
              val1 = val ;
              val2 = '' ;
           }
           else 
           {
              val1 = val1 + '00' ;
              val2 = val ;
           }

           for (var i=0; i<catelogs.length; i++)
           {
               tmp = catelogs[i] ;
               if (val1!='' && tmp[2]==val1)
               {
                   //txt1 = tmp[0] ;
                   if (flag==0) txt1 = tmp[0] ;
                   else  txt1 = tmp[1] ;

                   txt2 = val1 ;
                   //alert("txt1="+txt1+"---txt2="+txt2);
               }
               if (val2!='' && tmp[2]==val2)
               {
                   //txt1 = txt1 + '-' + tmp[0] ;
                   if (flag==0) txt1 = txt1 + '-' + tmp[0] ;
                   else  txt1 = txt1 + '-' + tmp[1] ;

                   txt1 = txt1.replace('-不限', '');
                   txt2 = val1 ;
               }
           }

           //alert("txt1="+txt1+"---txt2="+txt2);
           if (txt1!='' && txt2!='')
           {
                var opt1=document.createElement("OPTION");
                opt1.value=val;
                //opt1.value=txt2;
                opt1.text=txt1;
                jobSel.add(opt1);
           }
        }
    }

    if(isObj(job3) && job3.value!=""){
        val = ''+job3.value;
        //alert('val = '+val);
        if (val.length>3)
        {
           val1 = val.substring(0, 2) ;
           val2 = val.substring(2) ;
           if (val2 == '00')
           {
              val1 = val ;
              val2 = '' ;
           }
           else 
           {
              val1 = val1 + '00' ;
              val2 = val ;
           }


           for (var i=0; i<catelogs.length; i++)
           {
               tmp = catelogs[i] ;
               if (val1!='' && tmp[2]==val1)
               {
                   //txt1 = tmp[0] ;
                   if (flag==0) txt1 = tmp[0] ;
                   else  txt1 = tmp[1] ;

                   txt2 = val1 ;
                   //alert("txt1="+txt1+"---txt2="+txt2);
               }
               if (val2!='' && tmp[2]==val2)
               {
                   //txt1 = txt1 + '-' + tmp[0] ;
                   if (flag==0) txt1 = txt1 + '-' + tmp[0] ;
                   else  txt1 = txt1 + '-' + tmp[1] ;

                   txt1 = txt1.replace('-不限', '');
                   txt2 = val1 ;
               }
           }

           //alert("txt1="+txt1+"---txt2="+txt2);
           if (txt1!='' && txt2!='')
           {
                var opt1=document.createElement("OPTION");
                opt1.value=val;
                //opt1.value=txt2;
                opt1.text=txt1;
                jobSel.add(opt1);
           }

        }

    }
}


//清除工作岗位jobFunction1
function delJobFunc(obj)
{
	var m=document.thisForm;
	if(typeof(obj.options[obj.selectedIndex])=="unknown"){
		return;
	}
    //alert("hello 234 obj.name "+obj.name);
    var idx = obj.selectedIndex;
    if (idx == 2)
    {
        if(typeof(m)=="object"){
            var p3 = m.jobFunction3;
            if(typeof(p3)=="object"){
                p3.value = '';
            }
        }
    }
    else if (idx == 1)
    {
        if(typeof(m)=="object"){
            var p3 = m.jobFunction3;
            var p2 = m.jobFunction2;
            if(typeof(p3)=="object"){
                if (typeof(p2)=="object") {
                   p2.value = p3.value;
                   p3.value = '';
                }
            }
        }
    } 
    else if (idx == 0)
    {
        if(typeof(m)=="object"){
            var p3 = m.jobFunction3;
            var p2 = m.jobFunction2;
            var p1 = m.jobFunction1; 
            if(typeof(p3)=="object"){
                if (typeof(p1)=="object") {
                   p1.value = p2.value;
                }
                if (typeof(p2)=="object") {
                   p2.value = p3.value;
                   p3.value = '';
                }
            }
        }
    }  //idx = 0
}


//配置已选择的工作地区 
//edit by liujy 2004-05-22 10:27:43 
function fillJobLocaList()
{
    tmp = new Array();
    var m=document.thisForm;
    var jobLoca=m.workplace;
    //var loca_p1 = m.jobLocation1_p;
    //var loca_p2 = m.jobLocation2_p;
    //var loca_p3 = m.jobLocation3_p;

    var loca_c1 = m.jobLocation1_c;
    var loca_c2 = m.jobLocation2_c;
    var loca_c3 = m.jobLocation3_c;

    var loca_1 = loca_c1.value;
    var loca_2 = loca_c2.value;
    var loca_3 = loca_c3.value;
    
    var exit_flag = 0;
    if (loca_1 == '') exit_flag++;
    if (loca_2 == '') exit_flag++;
    if (loca_3 == '') exit_flag++;

    for (var i=0; i<citys.length; i++)
    {
        if (exit_flag>=3) break;

        if (loca_1 == citys[i][2])
        {
            if (loca_1 != citys[i][1]) loca_1 = citys[i][1] + loca_1;
            exit_flag++;
        }

        if (loca_2 == citys[i][2])
        {
            if (loca_2 != citys[i][1]) loca_2 = citys[i][1] + loca_2;
            exit_flag++;
        }

        if (loca_3 == citys[i][2])
        {
            if (loca_3 != citys[i][1]) loca_3 = citys[i][1] + loca_3;
             exit_flag++;
        }
    }
    //alert(loca_1+'--'+loca_2+'--'+loca_3);

    if (!isObj(jobLoca)) return;
    if(isObj(loca_c1))
    {
        if (loca_c1.value!='')
        {
            var opt1=document.createElement("OPTION");
            opt1.value=loca_c1.value;
            opt1.text=loca_1;
            jobLoca.add(opt1);
        }
    }

    if(isObj(loca_c2))
    {
        if (loca_c2.value!='')
        {
            var opt1=document.createElement("OPTION");
            opt1.value=loca_c2.value;
            opt1.text=loca_2;
            jobLoca.add(opt1);
        }
    }

    if(isObj(loca_c3))
    {
        if (loca_c3.value!='')
        {
            var opt1=document.createElement("OPTION");
            opt1.value=loca_c3.value;
            opt1.text=loca_3;
            jobLoca.add(opt1);
        }
    }
}


function add_subitem1(mainitem, subitem, flag)
{
    itemCount = catelogCount;
    items = catelogs;
    var subvalue=mainitem.options[mainitem.selectedIndex].value;
    for (i=0;i<itemCount-1; i++)
    {
        if ((items[i][2]).substring(0,2) == subvalue.substring(0,2))
        { 
            var opt=document.createElement("OPTION");
            if (flag==1)  opt.text=items[i+1][1]; 
            else  opt.text=items[i+1][0];
            opt.value=items[i+1][2];
            if (opt.value.substring(0,2) == subvalue.substring(0,2))   subitem.add(opt);
        }
    }
}

//add by liujy 2004-06-16 14:22:07 
function add_city(subitem, pval, val, flag)
{
    var bJb = (subitem.name.indexOf('jobLocation')>-1) ;
    itemCount = cityCount;
    items = citys;
    var mc = pval;
    if (mc == '') return;
    //alert('mc = '+mc);
    if (flag==1)
    {
        for (i=0; i<itemCount; i++)
        {
            if (items[i][3] == val)
            {
               mc = items[i][1];
               break;
            }
        } 

        //alert(i+'----'+(i<itemCount-1 && mc != items[i+1][1]));
        if (pval == 'Qita')
        {
            var opt=document.createElement("OPTION");
            opt.text='Qita'; opt.value='Qita';
            subitem.add(opt); 
            if (opt.value == val) opt.selected = true;
            return ;
        }
    }

    for (i=0; i<itemCount; i++)
    { 
        if (items[i][1] == mc) 
        {
            var opt=document.createElement("OPTION");
            if (flag==1) 
            {   
                if (bJb) 
                {
                    //alert(items[i][3]+'---'+items[i][1] );
                    opt.text=items[i][3];
                    opt.value=items[i][3]; 
                    subitem.add(opt); 
                    if (opt.value == val) opt.selected = true;
                }
                else 
                {   
                    //alert('sssssss');
                    if (i<itemCount-1 && mc != items[i+1][1]) continue;
                    if (i<itemCount-1) { opt.text=items[i+1][3]; opt.value=items[i+1][3]; }
                    else  { opt.text=items[i][3]; opt.value=items[i][3];}
                    //if (i==476) alert(items[i][3]+'---'+items[i][1] );
                    subitem.add(opt); 
                    if (opt.value == val) opt.selected = true;
                }
            }
            else
            {
                if (bJb)
                { 
                    opt.text=items[i][0].replace('├-',''); opt.value=items[i][2]; 
                    subitem.add(opt); 
                    if (opt.value == val) opt.selected = true;
                }
                else 
                { 
                    if (i<itemCount-1 && mc != items[i+1][1]) continue;
                    if (i<itemCount-1) { opt.text=items[i+1][2]; opt.value=items[i+1][2]; }
                    else { opt.text=items[i][2]; opt.value=items[i][2]; }
                    subitem.add(opt); 
                    if (opt.value == val) opt.selected = true;
                }
            }

        }
    }
}




function add_city1(subitem, val, flag)
{
    var bJb = (subitem.name.indexOf('jobLocation')>-1) ;
    itemCount = cityCount;
    items = citys;
    var mc = '';
    for (i=0;i < itemCount; i++)
    {
        if (items[i][2] == val)
        { 
           mc = items[i][1];
           break;
        }
    } 
    //alert('mc = '+mc);
    for (i=0;i < itemCount; i++)
    { 
        if (items[i][1] == mc) 
        {
            var opt=document.createElement("OPTION");
            if (flag==1) opt.text=items[i][3];
            else if (bJb) opt.text=items[i][0].replace('├-','');
            else opt.text=items[i][2];
            opt.value=items[i][2];
            subitem.add(opt);
            if (items[i][2] == val)  opt.selected = true;
        }
    }
}

/**
    if (navigator.appName == "Microsoft Internet Explorer")
    {   
        document.onmousedown=click
        function click() 
        {
            if (event.button==2) 
            {
                alert('取消鼠标右键，避免后退操作.');
                return false;
            }
            return true;
        }
    }
    else if (navigator.appName == "Netscape")
    {
        window.captureEvents(Event.MOUSEDOWN);
        window.onMouseDown=handle;
        function handle(even) 
        {
            if(even.which==3)
            {
                alert('取消鼠标右键，避免后退操作.');
                return false;
            }
            return true;
        }
    }
*/


//add by liujy 2004-04-14 16:32:36 
function js_chk_flag(idx)
{
    var chk = document.thisForm.degreeCheck[idx];
    var flg = document.thisForm.selFlag[idx];
    if (chk.checked)
    {
        flg.value = 'checked';
        document.thisForm.degreeId[idx].disabled = true;
        document.thisForm.beginDateYear[idx].disabled = true;
        document.thisForm.beginDateMonth[idx].disabled = true;
        document.thisForm.endDateYear[idx].disabled = true;
        document.thisForm.endDateMonth[idx].disabled = true;
        document.thisForm.schoolName[idx].disabled = true;
        document.thisForm.speciality[idx].disabled = true;
        document.thisForm.certificate[idx].disabled = true;
        document.thisForm.degreeId[idx].style.backgroundColor="#FFFFFF";
        document.thisForm.beginDateYear[idx].style.backgroundColor="#FFFFFF";
        document.thisForm.beginDateMonth[idx].style.backgroundColor="#FFFFFF";
        document.thisForm.endDateYear[idx].style.backgroundColor="#FFFFFF";
        document.thisForm.endDateMonth[idx].style.backgroundColor="#FFFFFF";
        document.thisForm.schoolName[idx].style.backgroundColor="#FFFFFF";
        document.thisForm.speciality[idx].style.backgroundColor="#FFFFFF";
        document.thisForm.certificate[idx].style.backgroundColor="#FFFFFF";
    }
    else
    {
        flg.value = '' ;
        document.thisForm.degreeId[idx].disabled = false;
        document.thisForm.beginDateYear[idx].disabled = false;
        document.thisForm.beginDateMonth[idx].disabled = false;
        document.thisForm.endDateYear[idx].disabled = false;
        document.thisForm.endDateMonth[idx].disabled = false;
        document.thisForm.schoolName[idx].disabled = false;
        document.thisForm.speciality[idx].disabled = false;
        document.thisForm.certificate[idx].disabled = false;
        document.thisForm.degreeId[idx].style.backgroundColor="#E3E3E3";
        document.thisForm.beginDateYear[idx].style.backgroundColor="#E3E3E3";
        document.thisForm.beginDateMonth[idx].style.backgroundColor="#E3E3E3";
        document.thisForm.endDateYear[idx].style.backgroundColor="#E3E3E3";
        document.thisForm.endDateMonth[idx].style.backgroundColor="#E3E3E3";
        document.thisForm.schoolName[idx].style.backgroundColor="#E3E3E3";
        document.thisForm.speciality[idx].style.backgroundColor="#E3E3E3";
        document.thisForm.certificate[idx].style.backgroundColor="#E3E3E3";
    }
}


function js_set_sel(obj, val)
{
    for (i=0; i<obj.length; i++)
    {
        if (obj.options[i].value == val)
        {
            obj.options[i].selected = true;
            break;
        }
    }
}