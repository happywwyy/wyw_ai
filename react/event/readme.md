# react 事件机制

## 事件委托优势 delegation
- 性能优化
    - 极致将事件委托给最外层元素
    react 大型项目开发
    给我们的事件节点event.target 添加一个唯一属性
- 动态节点的事件
    滚动到底部，一次新增一堆的元素
    事件委托可以有效解决
- 同一元素同一事件注册多次
    - dom 节点
    - event type
    - 监听器（回调函数） event loop
        event 对象 
    - useCapture 

    - event.preventDefault 阻止默认行为
        form submit 会自动跳转
        a 
    - event.stopPropgation
        阻止冒泡
- 用户交互的便利体验问题
    - toggle 按钮
    - 点击页面任何地方关闭 方便 stopPropagation
    - 显示区域可以交互， stopPropagation。

- SyntheticEvent 合成事件
    - 委托 #root
        性能优化框架帮我们做，
    - 事件池 Event pooling
        事件对象的回收利用
        大型密集交互的应用
    - 最近的版本中又可以安全使用了





- dom 0 dom 2 是什么？