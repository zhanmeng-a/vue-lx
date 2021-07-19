﻿// 这是 main.js 是我们项目的JS入口文件

// 1. 导入 Jquery
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
// import $ from 'jquery'
// import  $ from 'jquery'
// const $ = require('jquery')
// import './css/index.less'
// 使用 import 语法，导入 CSS样式表

// 注意： webpack, 默认只能打包处理 JS 类型的文件，无法处理 其它的非 JS 类型的文件；
// 如果要处理 非JS类型的文件，我们需要手动安装一些 合适 第三方 loader 加载器；
// 1. 如果想要打包处理 css 文件，需要安装 cnpm i style-loader css-loader -D
// 2. 打开 webpack.config.js 这个配置文件，在 里面，新增一个 配置节点，叫做 module, 它是一个对象；在 这个 module 对象身上，有个 rules 属性，这个 rules 属性是个 数组；这个数组中，存放了，所有第三方文件的 匹配和 处理规则；


// 注意： webpack 处理第三方文件类型的过程：
// 1. 发现这个 要处理的文件不是JS文件，然后就去 配置文件中，查找有没有对应的第三方 loader 规则
// 2. 如果能找到对应的规则， 就会调用 对应的 loader 处理 这种文件类型；
// 3. 在调用loader 的时候，是从后往前调用的；
// 4. 当最后的一个 loader 调用完毕，会把 处理的结果，直接交给 webpack 进行 打包合并，最终输出到  bundle.js 中去

// $(function(){
    // $('li:odd').css("backgroundColor",'red')
    // $('li:even').css("backgroundColor",'blue')
    
// })

// 经过刚才的演示，Webpack 可以做什么事情？？？
// 1. webpack 能够处理 JS 文件的互相依赖关系；
// 2. webpack 能够处理JS的兼容问题，把 高级的、浏览器不是别的语法，转为 低级的，浏览器能正常识别的语法

// 刚才运行的命令格式：    webpack  要打包的文件的路径  打包好的输出文件的路径

import Vant from 'vant';
import 'vant/lib/index.css';
// import { ShareSheet } from 'vant';
// Vue.use(ShareSheet);
Vue.use(Vant);
// import { Card } from 'vant';
// import { SubmitBar } from 'vant';
// import { SwipeCell } from 'vant';

// Vue.use(SwipeCell);
// Vue.use(SubmitBar);
// Vue.use(Card);
import Vue  from 'vue'
// import VueRouter from 'vue-router'
import VueRouter from 'vue-router'
// import one from './one.vue'
// import two from './two.vue'
// import there from './there.vue'

Vue.use(VueRouter);




// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './mui/css/mui.min.css'
import './iconfont/iconfont.css'
    
// 导入所有的 MIntUI 组件
// 导入 Mint-UI
// import MintUI from 'mint-ui' //把所有的组件都导入进来
// // 这里 可以省略 node_modules 这一层目录
// import 'mint-ui/lib/style.css'
// // 将 MintUI 安装到 Vue 中
// Vue.use(MintUI) // 把所有的组件，注册为全局的组件
import app from './one.vue'
import router from './router.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import { Calendar } from 'vant';

Vue.use(Calendar);
// 按需导入 Mint-UI组件
Vue.use(Mint)
import { Button } from 'mint-ui'
// 使用 Vue.component 注册 按钮组件
Vue.component(Button.name, Button)
// console.log(Button.name)

var vm =new Vue({       
    el:'#app',
    render:c=>c(app),
    // render:c=>c(two)
    router:router
})

// console.log(VueRouter);
// 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
// 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2. 安装完毕后，这个 工具的用法， 和 webpack 命令的用法，完全一样
// 3. 由于，我们是在项目中，本地安装的 webpack-dev-server ， 所以，无法把它当作 脚本命令，在powershell 终端中直接运行；（只有那些 安装到 全局 -g 的工具，才能在 终端中正常执行）
// 4. 注意： webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack
// 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到 实际的 物理磁盘上；而是，直接托管到了 电脑的内存中，所以，我们在 项目根目录中，根本找不到 这个打包好的 bundle.js;
// 6. 我们可以认为， webpack-dev-server 把打包好的 文件，以一种虚拟的形式，托管到了 咱们项目的 根目录中，虽然我们看不到它，但是，可以认为， 和 dist  src   node_modules  平级，有一个看不见的文件，叫做 bundle.
// import myss from './te'
// console.log(myss);

// import {a,b} from './te'
// console.log("a："+a);
// console.log("b："+b);
