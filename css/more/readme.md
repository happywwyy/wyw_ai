# Question:
1. 为什么要放在前面？ <link rel="stylesheet" href="">
2. 修改DOM 树
3. &:hover::before
      transform scale(1)
      transform-origin bottom left



# stylus

- stylus 让写css更像编程
  - 模块化 

- 伪元素
  不需要在html中声明
  在css中使用类似伪类的::before
  ::after
  表示选中元素内容开始之前
  内容结束之后
  可以像元素**标签**一样出现在**DOM 树**文档流中，但是又不是标签
  称为 伪元素 （因为它依赖css，只能在css中声明）
  下划线， 向右点进去的箭头
  好处：不用写标签，就可以完成界面效果
  content 必须有 表示伪元素里面的内容，一般为空