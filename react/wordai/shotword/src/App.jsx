import { useState } from 'react'
import PictureCard from './components/PictureCard'
import './App.css'

function App() {
  
  // JSX react优势，方便写HTML
  return (
    <div className='container'>
      {/* 自定义 子组件
      组件 html, css, js 像沙子一样，组合起来，照片上传功能
      模块化了，复用，页面由dom 树 -》 组件树 */}
      <PictureCard/>
    </div>
  )
}

export default App
