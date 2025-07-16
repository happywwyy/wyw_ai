import {
  useTodoContext
} from '../hooks/useTodoContext'

const TodoList = () => {
  const { 
    todos, 
    togggleTdo,
    removeTodo
  } = useTodoContext()
  return (
    <ul>
      {
        todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}
            >
              {todo.text}
            </span>
            <button onClick=''></button>
          </li>
        )
      )}
    </ul>
  )
}

export default TodoList