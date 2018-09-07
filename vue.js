vue-bus
	父子组件可以使用props和$emit()实现组件之间的通信
	setTimeout(() => {
	this.$emit
})


	通过实例一个vue实例Bus作为媒介，要相互通信的兄弟组件之中，都引入Bus，之后通过分别调用Bus事件触发和监听来实现组件之间的通信和参数传递
1 import Vue from 'vue'
2 export default new Vue;

import Bus from './bus.js'

<button @click = 'bus'></button>
methods:{
		bus(){
		Bus.$emit('msg','hello world')
	}
}
<p>{{message}}</p>
mounted(){
	Bus.$on('msg',(e) =>{
		this.message = msg
	})
}
	$emit
	$on
	$once
	$off



v-bind:class = ' index%2 ? 'middle1' : 'middle2' '

{{reverseMessage}}
{{reverseMessage()}}
前者使用computed()
后者使用methods()
	计算属性是基于依赖实现的，只要message不改变就不会重复执行函数，缓存的特点
// 在组件中
computed: {
	// 计算属性的 getter
	reversedMessage: function () {
	  // `this` 指向 vm 实例
	  return this.message.split('').reverse().join('')
	}
}
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}

return item.message.match(/foo/)

Vue.config.errorHandler = function(err,vm,info){}


//忽略所有“ion-”开头的元素
Vue.config.ignoredElements = [
			``,
			``,
			/^icon-/
]

Vue.config.keyCodes = {
	v:86,
	f1,112,

}


全局api
		<div id="app"></div>
		Vue.extend(options)
		var profile = Vue.extend({
			template:'<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
			data(){
				return{
					firstName:'',
					lastName:'',
					alias:''
				}
			}
		})
		new profile().$mount('#app')

数据更新后执行
		Vue.nextTick().then(function(){})

注册获取全局指令
		Vue.directive('hello',function(){
			//钩子函数
			bind:function(){},只调用一次
			inserted:function(){},插入节点时
			update:function(){},组件更新时
			componentUpdated:function(){},指令所在组件的 VNode 及其子 VNode 全部更新后调用。
			unbind:function(){}只调用一次，指令与元素解绑时调用
		})
		Vue.directive('hello',function(){

		})
		var self = Vue.directive('hello')
		<input v-hello>

div v-demo = "{color : 'white' ,text : 'hello!'}"
Vue.directive('demo',function(el,binding){
	console.log(binding.value.color)
})


filter
		Vue.filter('id',function(value){

		}) 
		var filter = Vue.filter('id')


version版本
Vue.version = Number(Vue.version.split('.')[0])

选项和数据

remember:
	注意，不应该使用箭头函数来定义 method 函数 (例如 plus: () => this.a++)。
	理由是箭头函数绑定了父级作用域的上下文，
	所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。

watch

删除一个数组元素
this.people.splice(idnex,1)

<img :src='item.pro_img' width="98" height="98">
<span class="num">{{item.num.toFixed(2)}}</span>
:class="{'check-true':item.select}"

vue-hover-事件
	<li v-for='(item,index) in TabList'  class="knowleadagePoint_Tab" @mouseover="overShow" @mouseout="outHide">
		<div >
		  <span style="display: block;text-align: center;">{{item.kpName | tabFilter}}</span>
		  <div class="edit" :class="{show:showText,hide:hideText}">
		    <span @click='tabEdit(index)'>编辑</span>
		    <span @click='tabDelete(index)'>删除</span>
		  </div>
		</div>
	</li>

	showText: false,
	hideText: true,

	overShow(){
	    this.showText = !this.showText
		this.hideText = !this.hideText
	},
	outHide(){
	    this.showText = !this.showText
		this.hideText = !this.hideText
	},

	.show{
		display: block;
	}
	.hide{
	    display: none;
	}





















