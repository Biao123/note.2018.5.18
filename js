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
