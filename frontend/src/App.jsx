import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Builder from './Pages/Builder'
import ViewResume from './Pages/ViewResume'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { initAuth, login } from './App/Config/userSlice'
import NoRoute from './Pages/NoRoute'

function App() {

  const dispatch = useDispatch()
  const {isAuthInit} = useSelector(state => state.user)

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
    else{
      dispatch(initAuth())
    }
  },[])
  
  if(!isAuthInit){
    return null
  }

  return (
    <>
      <Toaster />
      <Routes>
        {/* PROTECTED ROUTES */}
        <Route path="dashboard" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="builder/:resumeId" element={<Builder/>}/>
        </Route>

        <Route path="preview/:resumeId" element={<ViewResume />} />
        
        {/* GLOBAL ROUTES */}
        <Route path="/" element={<Home/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        
        {/* CATCH ALL ROUTES */}
        <Route path='*' element={<NoRoute/>} />
      </Routes>
    </>
  )
}

export default App