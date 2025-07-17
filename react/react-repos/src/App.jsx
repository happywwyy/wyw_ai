import {
  useState,
  useEffect,
  Suspense,
  lazy
} from 'react'
// 正确导入方式应保持与导出一致
import {
  Routes,
  Route,
  Navigate
} from'react-router-dom'
import Loading from './components/Loading'
const RepoList = lazy(() => import('./pages/RepoList'))

function App() {
  
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/users/:id/repos' element={<RepoList />} />
        <Route path='*' element={<Navigate to='/users/yiweiwu/repos' />} />
      </Routes>
    </Suspense>
  )
}

export default App