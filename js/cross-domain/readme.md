# 前端面试题 跨域

- 大前端  都是js
    - React/Vue  mvvm  前端
    - node.js 后端
    - 移动端（ios/android）
    - 桌面端软件  vscode 用ts写的
    - 嵌入式，AI

- 前后端联调
    - 前后端分离 跨域
    - 前端 5173
       from origin
    - 后端 8080
       server
    - 同源 不是同一个源，就叫跨域
        protocol://domain:port都要一致才为同源
        domain 域名不一样肯定不是同一个来源
        http://localhost:5174 => http://www.baidu.com/api/user
        protocol 协议不同 也不同源 严格？为什么
        http://localhost:5174 => https://localhost:5174/api/user
        cross origin
        http://localhost:5174 => http://localhost:8080/api/user
        origin = http(s) + domain + 端口 

    - CORS policy 同源策略
        跨域了 CORS将会驳回请求 block我的请求
        同源没有问题
    - 为什么要学习跨域
        - 前后端分离是日常开发的形式，端口或域名不一样
        - CORS Policy（Cross-Origin Resource Sharing） 同源策略？

            浏览器端的机制
        - 跨域请求被block掉了
            请求到达了服务器端
            请求到达了
            响应被浏览器抛弃掉了 block掉了响应
            浏览器的CORS策略
        - 安全问题？
            - 前端（千千万用户）的安全，攻击
            - 跨源的,可能不一定被新任
        - 怎么解决跨域？
            - 即拿到cross origin 的资源，同时又不违反CORS的机制
            fetch/xhr 被 CORS 管着了
            Cookie/LocalStorage 不能跨域 被CORS管着
            - img script link 可以跨域
            - 不用被管着的fetch/xhr/axios,用script
- 使用script解决的跨域解决方案 JSONP
    - script  src 发送一个请求
        - 必须是get请求
        - javascript 返回
        - 前端想要的是JSON，还要可以继续执行
        - 前端埋一个函数
            - 后端返回一个JS函数的执行
            - 在执行时将数据传给函数
        - 需要后端的配合
    - 返回JSON
    JSON前端需要后端提供的JSON数据
    Padding

- JSONP 利用了script 可以跨域访问
    - 前端使用script src=跨域的资源请求地址
    - 需要后端配合，返回的JSON 包含着函数
    - 页面上有个函数在等待执行
    - 复杂，能不能封装一下？

- 手写JSONP  
    - 发送JSONP请求，获取动态数据，script标签原来设计用于加载静态JS
    - 后端配合解析 script url get 请求中的callback参数值
    请求A，请求B...
    - 前端的封装
