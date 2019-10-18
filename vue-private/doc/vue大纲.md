
<!------------------------------ webpack 部分 -->
#webpack 环境搭载
    node v10.16.0
# 1.全局安装webpack
    cli(脚手架)
    npm(cnpm) install webpack webpack-cli -g

    异常解决办法
    在node.js安装的目录下搜索vue.cmd
    添加到全局path的环境变量即可
# 2.局部安装webpack
    npm init
    npm(cnpm) install webpack webpack-cli --save
# 3.默认参数
    入口(entry)：./src/index.js
    出口(output)：./dist/main.js

    //webpack.config.js 出口
    //配置打包文件的hash值
    filename:"./dist/main-[hash].js"

#4. （压缩）（未压缩）
    webpack --mode development   未压缩
    webpack --mode production    压缩
#5. 自定义命令
    在package.json —> scripts —> 新增一个键值对即可
    运行：npm run 指令的名称即可
#6. 本地服务
    webpack-dev-server 
    安装本地服务：npm(cnpm) install webpack-dev-server --save

    默认打包路径
    webpack.config.js —> devServer —> contentBase:'webpack打包的路径',

    配置自动更新 
    webpack.config.js —> devServer —> inline:true 
    在package.json 自定义命令中新增--inline --content-base --open

    自定义端口号
    port:7700

#7. 打包html文件
    安装html-webpakc-plugins npm(cnpm) install html-webpack-plugin --save

    在webpack.config.js —> 引用html-webpack-plugin —> 新增plugins —> 

    实例化一个 htmlwebpackplugins(
        { template:'需要打包的html文件路径 ./src/index.html' },
        minify:{
            //去除引号
            removeAttributeQuotes:true,
            //去除注释
            removeComments:true,
            //去除空属性
            removeEmptyAttributes:true,
            //去除空格
            collapseWhitespace:true
        }
    ),
    
#8. 打包css文件以及其他文件
    loader 加载程序
    加载CSS文件—>  下载 npm(cnpm) install css-loader style-loader --save
    在webpack.config.js —> module —> 

    //打包css文件
    { test:/\.css$/,use:["style-loader","css-loader"] },

    //使用url-loader打包图片文件，image文件被序列化位base:64位字符
    //使用file-loader打包图片文件，image文件将会被单独加载到默认根路径下并且命名为hash值
    //打包svg,ttf字体等文件可以使用file-loader的方法
    { test:/\.(jpg|jpeg|gif|png)$/,use:[
        { 
            loader:"url-loader",
            options:{
                //配置图片的自定义路径
                name:"./src/[name].[ext]"
            }
        }
    ] },
    //打包vue文件vue-loader

    //打包scss文件 
    下载包npm(cnpm)sass-loader node-sass --save
    { test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]}

    //使html文件内支持html-withimg-loader
    { test:/\.html$/,use:["html-withimg-loader"] },
#9. 使html内支持图片显示
    npm(cnpm) install html-loader --save
#10. 提取css样式文件
    npm(install) mini-css-extract-plugin -S
    引入 mini-css-extract-plugin 
    plugins 下实例化一个  mini-css-extract-plugin对象
    new MiniCssExtractPlugin({
        filename: "./style/[name].css",
    }),
#11. babel-loader 将es6语法转换成es5语法
    把es6的语法转换成es5的语法
    npm(cnpm) install babel-loader babel-core babel-preset-env --save
    注意：在下载好的包里要检查一下 babel-core 6.x babel-preset-env 1.x版本
    {
        //正则匹配
        test:/\.js$/,
        //排除不转换的目录
        exclude: /node_modules/,
        use:{
            //引用loader
            loader: 'babel-loader',
            options:{
                presets:["env"]
            }
        }
    },
#12. 热更新
    webpack.config.js 引用 
    const webpack = require("webpack")
    在plugins 创建一个实例  new webpack.HotModuleReplacementPlugin(),
    在devServer里新增一个 hot:true 打开热更新
#13. js.map  debug
    //生成map文件
    devtool: '#source-map',




<!------------------------------ vue 部分 -->
#1.vue的引用方式？
    1.静态引用
    2.npm引用(vue-cli)vue脚手架
#2.vue的指令
    v-bind //动态绑定属性**
    v-on //绑定事件

    v-if // 判断条件 // 当条件满足的是显示， 但条件不满足的时候 隐藏（也就是在节点添加一个display:none）
    v-else // 判断条件
    v-else-if //判断条件

    v-show // 隐藏与显示  当条件满足的时候该节点下的元素渲染出来， 当条件不满足的时候则不渲染元素
    v-for // 循环

    v-model //双向绑定 
    for循环的索引
    点击事件获取dom元素

#3.vue计算属性
    函数当做变量名来使用
    在computed 下创建一个函数  直接在页面中{{函数名}} 直接渲染即可
    
#4.watch监听属性
    在vue对象下声明一个 watch 属性 ，并且在watch下添加  需要监听的变量名
    data:{
        message:1
    },
    watch:{
        message(){
            return this.message;
        }
    }
#mockjs模拟数据
    npm(cnpm) install mockjs --save
    创建mockjs文件
    const Mock = require("mockjs")
    Mock.mock({
        
    })
#5.class和style样式动态绑定
    //动态绑定class
    v-bind:class="{active:isActive}"  
    //动态绑定style
    v-bind:style="{ color: fontcolor, fontSize: fsize + 'px'}" 当样式出现多个单词的时候，
    注意驼峰命名法
#6. vue的npm 引用方式  vue-cli 
    特别注意的是一定要统一node和npm的版本信息(否则在给学生配置环境的时候你非常痛苦)
    node 为 10.16.2
    npm 为 6.9.0


    //全局安装vue-cli 脚手架
    1.npm(cnpm) install @vue/cli -g
    //创建vue-cli项目 project-name 项目名称

    2.vue create project-name
#8. vue生命周期
    //在页面还没初始化，data没有初始化，methods没初始化
    beforeCreate

    // data 已经初始化  mehthods 已经初始化
    created(){
        this.message
    }

    //在组件渲染成html之前调用
    beforeMount(){

    }
    .vue  —>   html 

    //在组件渲染成html之后调用
    mounted(){

    }

    //在组件更新之前调用
    beforeUpdate(){

    }

    //组件更新之后
    updated(){

    }

    //组件销毁之前
    beforeDestory(){

    }

    //组件销毁之后
    destoryed(){
        
    }
#9. 禁用eslint
    新建 vue.config.js
    module.exports = {
        lintOnSave:false //禁用eslint语法验证功能
    }
    父传子
    子传父


    同级组件传递
    借助第三方js event.js
    新建event.js 
        import Vue from 'vue'
        export default new Vue();

    兄弟组件传值  发送数据的一方event.$emit("键","值")
    兄弟组件传值  接受数据的一方event.$on("键",function(data){ //data 就是传递过来的值
    })
#10. 引用scss
    引用scss
    npm(cnpm) install sass-loader --save
    npm(cnpm) install node-sass --save
    
#11. vue插槽
     在父组件引用子组件的标签内，填写内容，标签，图片，
     在子组件内， 新增slot标签即可

#12. vue-router 路由
安装  vue-router
npm(cnpm) install vue-router --save

1.动态路由匹配
    路由表
    在main.js中使用import VueRouter from 'vue-router'  Vue.use(VueRouter)

    //1. 定义路由表
    const routes = [
        //路由的根路径
        { path:'/',component:Demo },
        { path:'/demo',name:"demo",component:Demo },
        { path:'/demo1',name:"demo1",component:Demo1 },
        { path:'/userlist',name:"userlist",component:userList },
    ]

    //2. 创建一个VueRouter实例，并且把路由表传进去
    const router = new VueRouter({
        routes
    });

    //3.在Vue实例中将VueRouter实例传进去即可
    new Vue({
        router,
        render: h => h(App),
    }).$mount('#app')


2.编程式导航
    1.根据path使用 路由跳转
        this.$router.push({
            //根据path跳转
            path:"/"+event.target.innerHTML
            //根据name跳转
            name:event.target.innerHTML
        })

3.路由传参
    1).query传参
    path:"/"+event.target.innerHTML,
    query:{
        id:123124
    }
    接收参数 this.$route.query.id


    2).params传参
    在路由表的path里添加祥对应的:id即可   path:'/demo/:id'
    name:event.target.innerHTML,
    params:{
        id:123123
    }
    接收参数  this.$route.params.id

4.嵌套路由
    path:'/demo/:id',name:"demo",component:Demo,
    children:[
      { path:'/demo/demo1/',name:"demo",component:Demo1 },
      { path:'/demo/userlist/',name:"userlist",component:userList }
    ]
传递对象， 传递函数
5.重定向和别名
    redirect:"/login ,alias:"log" //路由的别名
    
    重新指向404页面
        定义路由{path:"*",redirect:"指向其他路由"}

6.路由元信息 在路由定义meta自定义参数
    {path:"",meta:{isLogin:true}}
    isLogin  为自定义参数
    路由表自定义参数功能， 可以结合导航守卫做权限验证功能

7.keep-alive

8.导航守卫
    全局前置守卫

    全局后置守卫
        to，from 
        当全局前置守卫已经执行完成路由跳转完成，并且页面已经显示，最后一步才会进入后置守卫
    路由守卫
        to，from，next
        作用域只局限于当前的这条路由信息
    组件守卫（可以忽视，用处不是很大）

9.swiper
10.上拉加载
11.js-cookies
    npm install js-cookie --save
    刷新页面依旧可以保存页面中，可以存储对象和数组
    cookie.set("键","值")   cookie.get("键")
    
    简单化查询
    排序,九宫格隐藏和显示
12. vuex  
    state
    getter
    mutation
    action

    mapstate
    mapgetter
    mapmutation
    mapaction
