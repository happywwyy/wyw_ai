# WebLLM 项目

这是一个通用的原生 HTML/CSS/JS 项目。

## 项目结构
- `index.html`: 项目的主 HTML 文件。
- `styles.css`: 项目的样式文件。
- `script.js`: 项目的 JavaScript 文件。

## 运行项目
1. 打开 `index.html` 文件所在的目录。
2. 双击 `index.html` 文件，在浏览器中打开即可查看项目。

## 服务器端返回
- 输入url 或者点击一个链接（死板）
- 向服务器端发送请求
- node/java 请求，去数据库取数据，生成html 字符串
- 返回html 字符串

## fetch 请求
- 滚动到底部后，加载更多数据 web2.0 服应用体验
  看到新的内容
- fetch url
  - 不需要刷新页面，主动去服务器端取一次，DOM 更新页面
- 点赞的时候？
  js fetch api like

- LLM AI 时代
  fetch 取来大模型的能力 智能前端时代

## http 请求
   - 请求行  GET http://www.baidu.com
     POST https://api.deepseek.com/chat/completions 
   - 请求头
     设置各种头部信息
     {
       Content-Type: application/json，
       Authorization: Bearer 1234567890 凭证
     }
   - 请求体
     GET 没有请求体
     POST 可以有请求体
     