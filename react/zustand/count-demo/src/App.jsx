import { useState } from 'react'
import './App.css'
import Counter from './components/Counter' // 自动匹配默认导出
import { useCounterStore } from './store/count'
import TodoList from './components/TodoList'
import RepoList from './components/RepoList'

function App() {
  const { count } = useCounterStore()
  return (
    <>
      App中的{count}
      <Counter />
      <TodoList />
      <RepoList />
    </>
  )
}

export default App
