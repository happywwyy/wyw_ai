// commonjs
const http = require('http')

// js 本质是异步无阻塞
// node 天生性能好 相同的用户访问数，使用的服务器数量少，便宜
const server = http.createServer((req, res) => {
    if(req.url === '/api/hello' && req.method === 'GET') {
        console.log('/////')
        // res.end('hello world')
        res.writeHead(200,{
            //响应头时JavaScript
            // 'Content-Type':'application/json'
            'Content-Type':'text/javascript'
        })
        // JSON数据
        const data = {
            code:0,
            msg:'字节，我来了'
        }
        //JSON with padding
        res.end("callback("+JSON.stringify(data)+")")

        //  res.end(JSON.stringify({message:'Hello from Node.js backend'}))
        //res.end('console.log("hello world")')

    }else{
        res.writeHead(404,{
            'Content-Type':'text/plain'
        })
        res.end('Not Found')
    }

})
// 服务器程序在8080端口运行 监听端口 8080
server.listen(8080,()=>{
    console.log('server is running on port 8080')

})