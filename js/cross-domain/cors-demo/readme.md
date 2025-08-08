# 进阶跨域方案 cors

- 日常用的最多的跨域解决方案
    JSONP 不跨域的
    cors 跨域的
    浏览器会**CORS** 通信请求,如果服务器端的响应头设置了Access-Control-Allow-Origin
    后端实现了CROS，跨域跨域
    *所有的都可以请求，门户大开
    白名单：
        只有白名单中的域名，才可以访问后端的接口
    
    - 简单跨域请求
        GET/POST/HEAD 简单设置下Access-Control-Allow-Origin 就可以了
        Content-Type text/plain multipart/form-data 
        application/x-www-form-urlencoded
    - 复杂跨域请求：
        其他的方法 PATCH/DELETE 等 安全升级
        - 预检请求
            200
            Access-Control-Allow-Methods:GET,POST,PATCH,OPTIONS,DELETE
            Access-Control-Allow-Headers:Content-Type
            ...
            Method:OPTIONS
        - 真正的请求
