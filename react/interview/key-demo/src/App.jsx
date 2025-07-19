import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: '标题一' },
    { id: 2, title: '标题二' },
    { id: 3, title: '标题三' }
  ]);

  useEffect(() => {
    setTimeout(() => {
      setTodos(prev => [
        {
          id: 4,
          title: '标题四'
        },
        ...prev,
      ])
    }, 5000)
  }, [])
  return (
    <>
      {
        todos.map((todo) => (
          <li></li>
        ))
      }
    </>
  )
}

export default App;