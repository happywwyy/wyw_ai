# react 旅游 APP
ReadMe.md 很重要 方便面试官
- 移动 App
- 模仿 App
    - 喜欢的、国外的
    - 有点改变
- 绝大多数的考点
    - 都适用于任何App

##  技术栈
- React 全家桶
    - React组件开发
        组件的封装
        第三方组件库
        受控和非受控
        hooks编程 自定义的hooks
    - React-router-dom
        SPA
        路由守卫
        懒加载
    - Zustand
- mock 接口模拟
- axios 请求拦截和代理
- jwt进行登入
- module css
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo
- css预处理器 stylus
    flex transition transform
- LLM 大模型
    - chat
    - 生图
    - 语音
    - coze 工作流 调用
    - 流式输出
- 移动端适配
    rem
- 单例模式 设计模式的理解
- git 提交等编程风格

## 项目的架构
- components
- pages
- store
- api
- hook
- mock

## 开发前的准备
- 安装的包
    react-router-dom
    zustand
    axios
    vite-plugin-mock
    lib-flexible(解决移动端适配)
    开发期间的依赖
        jwt
        react-vant 第三方的UI组件库
- vite 配置
    - alias
    - mock
    - .env.local
    llm apiKey
    - user-scalable=no 不允许用户缩放
    - css 预处理
        box-sizing font-family:-apply-system
        怎么区分 index.css,App.css,module.css
        index.css  reset
        App.css 全局样式
        module.css 模块化样式
    - 移动端的适配 rem
        不能用px,用相对单位rem html
        不同设备上体验要一致
        不同尺寸手机 等比例缩放
        设计师的设计稿 750px iphone 4 375pt
        小米
        css 一行代码 手机的不同尺寸 html font-size 等比例
        layout
        flexible.js 阿里 在任何设备上
        1 rem = 屏幕宽度/10

- lib-flexible 
    阿里开源
    设置html font-size = window.innerWidth/10
    css的px 像素宽度 = 手机设备宽度 = 375
    1px = 2发光源
    750px 设计稿

- 设计稿上查看一个盒子的大小？
    - 一像素不差的还原设计稿
    - 设计稿中像素单位
    - /75

## 项目亮点
- 移动端适配
    - lib-flexible 库，将1rem=屏幕宽度/10
    - 设计稿 尺寸是iphone标准尺寸750px
    - 设计稿中像素单位/75
    - 前端的职责是还原设计稿
    - 频繁地单位换算 260/75 = 3.46667rem
    - 自动化？ 
    pnpm i -D postcss postcss-pxtorem
    postcss.config.js
    postcss 是css预编译器，很强大
    vite会自动读取postcss.config.js 将css文件编译
    px -> rem

## git 提交规范
- 项目初始化
## 功能模块
- UI组件库
    - react-vant 第三方组件库 70%组件已经有了，不用写
    - 选择一个适合业务的UI组件库 或者公司内部的组件库
- 配置路由及懒加载
    - 懒加载
    - 路由守卫
    - Layout组件
        - 嵌套路由Outlet分组路由配置
        - 网页有几个模板 Layout
            - Route 不加path 对应的路由自动选择
            - tabbar 模板
            - blank 模板
    - tabbar
        - react-vant + @react-vant/icons
        - value + onChange 响应式
        - 直接点击链接分享 active 的设置
- chatbot 模块
    - llm模块 chat 封装
    - 迭代chat,支持任意的模型
- Search
    - 防抖
    - api
        GooleSuggest
    - localStorage
- 瀑布流
    - 现代小红书等主流App的内容浏览用户体验产品
        两列 、 图片高度不一致、落差感
        滚动加载更多，图片懒加载
    - 接口
        /api/images?page=${n} 支持翻页面
        唯一ID page+index
        随机图片，随机高度 Mock
    - images 怎么放到两列中？ MVVM
    数据驱动界面（两列） 奇偶
    - 加载更多 位于盒子底部的元素 通过使用 IntersectionObserver 
    观察它是否出现在视窗，性能更好，使用了观察者模式
    组件卸载时，直接使用disconnect()  释放资源，防止泄露
    - key id下拉刷新
    - 使用IntersectionObserver 再次图片懒加载 data-src
- toast 组件封装
    - 需要自定义，UI组件库不满足需求
    - UI props
    - JS 显示出来 实现跨层级通信
        订阅发布者 观察者
    - mitt eventBus 事件总线
        - 实例化 mitt()
        - on(自定义事件的名字，callback)
        - emit(自定义事件的名字，参数)
        组件通过监听一个自定义事件实现基于事件的组件通信
## 项目的亮点难点
- 前端智能
    - chat 函数
    - 对各家模型比较感兴趣，升级为kimiChat,doubaoChat...
        性能、能力、性价比
        随意切换大模型，通过参数抽象
    - 文生图
        - 优化prompt 设计
- 原子css
    - App.css 里添加了通用样式
    - 各自模块里 module.css,不影响别的组件
    - lib-flexible 移动端适配
    - postcss pxtorem插件 快速还原设计稿
    - 原子类的css
        一个元素按功能逻辑拆分成多个类，和原子一样
        元素的样式就可以由这些原子类组合而成
        样式可以复用的更好，以后几乎可以不用写样式
    - 智能生成图片
        - 产品
        冰球社群的宠物运动员 智能出图
        社交属性
        - 商业价值
        技术服务
        coze 工作流 智能编排AI 工作流程 编程一种
        - api 调用

    - 设计工作流
        - 创建工作流 ani_pic
            上传宠物照片，生成宠物曲棍球运动员照片
        - 代码节点
            参数校验和逻辑功能，返回运行的结果
        - 图片生成流程
            - 图片理解插件  计算机视觉
            - 大模型 特征提取
            prompt
            - workflow_id  7508417030077628450
            - token  pat_MBafPP7dR0ztYABw9d1ecoaUb3lx2855hXUb6hBvI9KPYvT7D4GPAc6dZ88lWfMj
            - coze 图片要先上传到coze中
                uploadUrl + token + new FormData
                append(file)
                拿到file_id
            - workflowUrl + workflow_id + token
                工作流需要的参数 

    
- 用户体验优化
    - 搜索建议，防抖+useMemo 性能优化
    - 组件粒度划分
        React.memo+useCallback
    - 懒加载
    - 热门推荐 + 相关商品（产品）
    - SPA
    - 骨架屏 不用让用户等待了
    - 文件上传的preview html5 FileReader
## 项目遇到过什么问题，怎么解决的
- chat message 遇到message 覆盖问题
- 闭包陷阱
    - 一次时间里面两次setMessages()
- 升级瀑布流组件
    - 骨架屏
    - 奇偶images 两列分配可能像天蚕脚一样，不好看
        两个响应式数组，判断那一列高度更少，将新得到的img加入那个数组
    - intersectionObserver 用了两次，重复了，dry 原则 封装？hooks

- 自定义Hooks
    - useTitle 用于修改网页标题
    一定要设计

- es6 特性使用
    tabbar的高亮
    - arr.findIndex
    - str.startsWith
    - promise
    瀑布流随机数据生成
    - Array.from({length:pageSize},(_,index)=>{

    })

- 项目迭代
    - 功能由浅入深
    - chatbot deepseek 简单chat
    - deepseek-R1 推理模型 显示推理过程
    - 流式输出
    - 上下文 LRU缓存
    - coze 工作流 接口调用

## 通用组件开发
- Loading
    - 居中方案
        position:fixed + tlrb0 + margin:auto
    - react.memo无状态的组件，不重新渲染
    - animation