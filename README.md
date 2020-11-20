###什么是chengzi-ui

chengzi-ui 是一款基于vue(2.6+)框架的web桌面端UI组件库。
这款ui组件库是 橙子同学 个人的一个 sideProject ，是业余时间编写的一个练习项目，目前的版本为1.1.0，是较初级的一个版本，提供了19个常用的组件。

###快速上手

####安装

使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
 ```js   
npm i chengzi-ui -S  
```
####引入 Chengzi

在 main.js 中写入以下内容：
                
 ```js 
    import Vue from 'vue';
    import App from './App.vue';
    
    import ChengziUI from 'chengzi-ui';
    import 'chengzi-ui/dist/chengzi-ui.css';

    Vue.use(ChengziUI);

    new Vue({
      el: '#app',
      render: h => h(App)
    });
 ```                
   
以上代码便完成了 Chengzi 的引入。需要注意的是，样式文件需要单独引入。
