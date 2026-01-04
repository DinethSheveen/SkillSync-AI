import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <p>Layout</p>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout