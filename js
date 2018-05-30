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





















