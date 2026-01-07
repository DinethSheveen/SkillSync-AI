import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Builder from './Pages/Builder'
import Preview from './Pages/Preview'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="app" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="builder/:resumeId" element={<Builder/>}/>
        </Route>

        <Route path="preview/:resumeId" element={<Preview/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App