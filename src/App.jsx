// import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
