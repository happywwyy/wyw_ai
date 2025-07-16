import {
  createContext,
  useContext
} from 'react'
// 上下文
export const TodoContext = createContext(null)

export function useTodoContext() {
  // 自定义hooks 
  return useContext(TodoContext)
}