fn._proto_ = Fn.prototype
默认一个constractor属性，通过Fn.prototype.name = 'b';添加
arr = ['1','1']

typeof instanceof 
undefine
string
number
boolean

focusin()事件
与 focus() 方法不同的是，focusin() 方法在任意子元素获得焦点时也会触发。
focusin()focusout()支持冒泡，blur(),focus()不支持冒泡
$("div").focusin(function(){
$(this).css("background-color","#FFFFCC");
});

<%%> 内写的是 Servlet 方法体的内容，你如果把静态的内容也直接写到 <%%> 里
	，是不合法的，JSP 中的静态内容默认使用 System.out.println() 进行标准输出
<% System.out.println("欢迎: " + session.getAttribute("userName")) %>

//查看更多，限制条数
 window.onload = function(){
	var liLength = $('.product_ul li').length -1;
	var j = liLength - 5;
	console.log(liLength);
	if(liLength <= 5){
		return;
	}else{
		for(i = 0;i < j;i++){
			$('.product_ul li').eq(i+5).css('display','none')
		}
	}
}

$('.more').click(function(){
	var liLength = $('.product_ul li').length -1;
	if(liLength <= 5){
		alert('没有更多了');
	}else{
		for(i = 0;i<liLength -1;i++){
			$('.product_ul li').eq(i+5).css('display','block')
		}
	}
}) 

//hover显示
$(function () {
    $(".n_middle ul li").hover(function () {
        $(this).children("dl").slideDown();
    }, function () {
        $(this).children("dl").hide();
    });
});

//获取链接字段
function getRootPath(){
	var curPath = window.document.location.href; //网址  http://localhost:80/ybzx/index.jsp  

	var pathName = window.document.location.pathname; //主机地址之后的目录 ybzx/index.jsp  
 
	var pos = curPath.indexOf(pathName); //获取主机地址 http://localhost:80

	var localhostPaht = curPath.substring(0,pos);  //获取带"/"的项目名，如：/ybzx
	console.log(curPath);
	console.log(pathName);
	console.log(pos);

	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
    console.log(localhostPaht+projectName);
}
getRootPath()

$('.digg').click(function(){
	var curPath = window.document.location.href; //网址  http://localhost:80/ybzx/index.jsp  

	var pathName = window.document.location.pathname; //主机地址之后的目录 ybzx/index.jsp  
 
	var pos = curPath.indexOf(pathName); //获取主机地址 http://localhost:80

	var localhostPaht = curPath.substring(0,pos);  //获取带"/"的项目名，如：/ybzx
	console.log(curPath);
	console.log(pathName);
	console.log(pos);
	console.log(localhostPaht);

	var projectName=pathName.substring(0,pathName.substr(1).indexOf('/')+1);  
    console.log(localhostPaht+projectName);	
})

$('.digg').click(function(){
	$('.pcgb_right_menu_ul li').each(function(){
	    if($(this).hasClass('li_active')){
	    	alert($(this).index())
	    	return;
	    }          
	});   
})

//获取当前index
	var Index = $('.li_active').index();
	var Index2 = $('.btn_active').index();

//选择某一段url
$('.digg').click(function(){
	var curPath = window.document.location.href;
	var pageId=curPath.substring(curPath.indexOf("pc/")+3,curPath.indexOf("pc/")+6);
	console.log(curPath)
	console.log(pageId);
})

//a页面点击使用sessionStorage存取一个键值对，在b页面的onload中获取这个键名
$('').click(function(){
	sessionStorage.setItem('from','pageA')
})
window.onload = function(){
	var from = sessionStorage.getItem('from');
	if(from == 'pageA'){
		//dosomething
		sessionStorage.setItem('form','');
	}
}


//锚点
<a href="#miao">去找喵星人</a>;
<a name="miao"></a>;
=>
<h3 id="miao">喵星人基地</h3>;
跨页面跳转
在href路径加上：#+锚点名。
	<a href="萌宠集结号.html#miao">跳转到萌宠集结号页面</a>
	<a name="miao"></a>;
	或者<h3 id="miao">喵星人基地</h3>;

//
<link rel="Shortcut Icon" href="favicon.ico"> IE地址栏前换成自己的图标
confirm("确实要删除吗?");

offsetWidth = border-left + border-right + padding-left+padding-right+元素本身的宽度;
offsetHeight = border-top + border-bottom + padding-top+padding-bottom+元素本身的高度；
offsetTop = pardent.margin-top +pardent.border-width+ pardent.padding-width =20+20+40;
页可见区域宽： document.body.clientWidth;
网页可见区域高： document.body.clientHeight;
网页可见区域宽： document.body.offsetWidth (包括边线的宽);
网页可见区域高： document.body.offsetHeight (包括边线的宽);
网页正文全文宽： document.body.scrollWidth;
网页正文全文高： document.body.scrollHeight;
网页被卷去的高： document.body.scrollTop;
网页被卷去的左： document.body.scrollLeft;
网页正文部分上： window.screenTop;
网页正文部分左： window.screenLeft;
屏幕分辨率的高： window.screen.height;
屏幕分辨率的宽： window.screen.width;
屏幕可用工作区高度： window.screen.availHeight;

getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
	//相对于网页的上边

//屏蔽功能键
function look(){
	if(event.shiftKey){
		alert()
	}
}
document.onKeydown = look;

overflow:scroll;overflow-x:hidden
<body scroll="no">

//ratio  checkbox
<input type='radio' checked name='sex'>
 $("[name='sex']:eq(1)").attr("checked",true);或$("[name='sex']:eq(1)").attr("checked","");
 $("[name='sex']:eq(1)").prop("checked",true);或$("[name='sex']:eq(1)").prop("checked","");

//prop() 设置和返回被选元素的属性和值
如果使用attr方法获取时： 
1、如果当前input中初始化未定义checked属性，则不管当前是否中，$(“#check”).attr(“checked”)都会返回undefined；
2、如果当前input中初始化已定义checked属性，则不管是否选中，$(“#selectAll”).attr(“checked”)都会返回checked.
$("button").click(function(){
    var $x = $("div");
    $x.prop("color","FF0000");
    $x.append("The color 属性： " + $x.prop("color"));
    $x.removeProp("color");
});
 

//判断ios安卓
		function downloadApp(){
			var u = navigator.userAgent;
			var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
			var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
			urls = {
				'android':'http://ftp-apk.pcauto.com.cn/pub/autoclub-5000-autowapDL1.apk',
				'ios':'https://itunes.apple.com/cn/app/zhong-guo-che-you-hui/id640447959',
				'other':'http://www1.pcauto.com.cn/app/20141120/pcautoapp/index.html'
			};
			if(isAndroid){
				window.location.href = urls.android;
			}else if(isiOS){
				window。location.href = urls.ios;
			}else{
				window。location.href = urls.other;
			}
		}
		downApp();

//检测是否移动设备来访
function browserRedirect() { 
	var sUserAgent= navigator.userAgent.toLowerCase(); 
	var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
	var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
	var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
	var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
	var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
	var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
	var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
	var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 
		return true;
	} else { 
		return false;
	} 
}
