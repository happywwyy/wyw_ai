import { 
  useState,
  Suspense,
  lazy // 懒加载
} from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'
// 函数 路由 => Route
// 懒加载
// const Home = lazy(() => import('./pages/Home'))
import Home from './pages/Home'
import About from './pages/About'
import NotFround from './pages/NotFround'
// 30几个页面


function App() {

  return (
    <>
      <Router>
        <Navigation />
        <Suspense fallback={<div>加载中...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about" element={<About />} />
            {/* 鉴权 */}
            <Route path='/pay' element={
              <ProtectRoute>
                <Pay />
              </ProtectRoute>
            }/>
            <Route path="/*" element={<NotFround />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App