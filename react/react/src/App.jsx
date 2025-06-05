import { useState } from 'react'
import './App.css'
// todos 列表需要渲染
// 函数组件 App 组件 结合其他的组件完成应用
// html css js 用函数组合在一起， 组件
// 返回html 的函数
// function App() {
//   //react 比 vue 更纯粹
//   const todos = ['吃饭', '睡觉', '打豆豆']; //数组-》数据

//   return (
//     <>
//       <table>
//         <thead>
//           <tr>
//             <th>序号</th>
//             <th>任务</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             // 动态 
//             // react 一个括号  
//             // js DOM 编程API
//             // 在html 里写js 代码
//             todos.map((todo, index) => (
//               <tr>
//                 <td>{index + 1}</td>
//                 <td>{todo}</td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </>
//   )
// }
function App() {
  // 数据 -》 数据状态 数据业务 改变的 数据状态
  const [todos, setTodos] = useState(['吃饭', '睡觉', '打豆豆']);
  const [title, setTitle] = useState('ECUT 一鸣')
  setTimeout(() => {
    setTodos(['吃饭', '睡觉', '打豆豆', '养鱼'])
    setTitle('北大一位')
  }, 5000)
  setTimeout(() => {
    // setTodos = (['吃饭', '睡觉', '打豆豆', '养鱼'])
    setTitle('互换一位')
  }, 5000)

  return (
    <div>
      <h1 className="title">{title}</h1>
      <table>
        <thead>
          <tr>
            <th>序号</th>
            <th>任务</th>
          </tr>
        </thead>
        <tbody>
          {
            // html 模板
            todos.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item}</td>
              </tr>
            )
            )
          }
        </tbody>
      </table>
    </div>
  )
}
export default App
