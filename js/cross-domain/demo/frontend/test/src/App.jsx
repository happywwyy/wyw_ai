import { useState,useEffect } from 'react'
import './App.css'

function App() {
  useEffect (()=>{
    // (async()=>{
    //   //前后端联调
    //   const res = await fetch('http://localhost:8080/api/hello')
    //   const data = await res.json()
    //   console.log(data)
    // })()
  },[])
  return (
    <>
      <img src="https://cdn.pixabay.com/photo/2019/04/09/02/37/natural-4113459_960_720.jpg" alt="" />
    </>
  )
}

export default App