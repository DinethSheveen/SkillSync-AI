import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Layout() {
  return (
    <div>
      <Navbar />
      <div className='pt-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout