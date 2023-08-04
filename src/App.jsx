import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Blog from './component/Blog/Blog'
import Questionaries from './component/Question/Questionaries'

function App() {
 

  return (
    <div className="App">
      <Header></Header>
      <Blog></Blog>
      <Questionaries></Questionaries>
    </div>
  )
}

export default App
