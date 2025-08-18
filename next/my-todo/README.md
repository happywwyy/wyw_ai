- npx create-next-app@latest my-todo
    基于create-next-app@latest创建了一个my-todo next.js项目
- npx 无痕使用
    不用先安装，先安装，可以直接运行，适合项目的测试
    不会留下痕迹，不影响全局
    npm i -g create-next-app@latest
    尝试一下某种技术的时候，特别有用
- 与react不同，react在浏览器端运行，next.js在服务器端运行
- CSR and SSR
    - CSR 客户端渲染 组件在客户端运行 模板的编译，挂载，浏览器（client） SPA
    - SSR 服务器端渲染SPA
    - Next.js 服务器端渲染SSR 组件的编译发生在服务器端，SEO(搜索引擎优化) 非常好
        - 爬虫爬取的是服务器端返回的html，而CSR只有一个#root，爬虫爬取不到
        - 服务器端返回的html，包含了所有的组件，所以爬虫爬取到的内容更多
        企业站，SEO，掘金