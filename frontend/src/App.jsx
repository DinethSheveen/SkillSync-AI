import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Builder from './Pages/Builder'
import ViewResume from './Pages/ViewResume'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Toaster } from "react-hot-toast"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { login } from './App/Config/userSlice'

function App() {

  const dispatch = useDispatch()
  
  useEffect(()=>{
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))

    console.log(user);
    

    if(token && user){
      dispatch(login({
        token,
        user
      }))
    }

  },[])

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="app" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="builder/:resumeId" element={<Builder/>}/>
        </Route>

        <Route path="preview/:resumeId" element={<ViewResume />} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Routes>
    </>
  )
}

export default App