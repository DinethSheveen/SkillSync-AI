import { Navigate, Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'

function Layout() {

  const {isAuthInit,user} = useSelector(state=>state.user)

  return (
    <div>
      {
        isAuthInit && user?
        <>
          <Navbar />
          <div className='pt-10'>
            <Outlet />
          </div>
        </>
        :
        <Navigate to="/login"/>
      }
    </div>
  )
}

export default Layout