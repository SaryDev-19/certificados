import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Experience from './Pages/Experience/Experience'

function App() {

  return (
    <div className='App'>
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/experiences" element={<Experience/>} />
       </Routes>
    </div>
  )
}

export default App
