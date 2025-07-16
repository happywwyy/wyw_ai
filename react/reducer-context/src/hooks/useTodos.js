import {
  useReducer
} from 'react'

// es6 参数的默认值
// {todos, } key:value 省略
// `` 模板字符串 
// ...解构 []=[] {}={}
// 展开运算符，...reat 运算符
export function useTodos (initial = []) {
  const [todos, dispatch] = useReducer(todoReducer, initial)

  const addTodo = () =>dispatch({type: 'ADD_TODO', text})
  const toggleTodo = id => dispatch({type: 'TOGGLE_TODO', id})
  const removeTodo = id => dispatch({type: 'REMOVE_TODO', id})
  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo
  }
}