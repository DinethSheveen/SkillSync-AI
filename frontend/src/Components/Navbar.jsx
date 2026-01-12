import { Link } from "react-router-dom"
import logo from "/logo.png"

function Navbar() {
  return (
    <div className="navbar print:hidden">
        <div className="fixed top-0 w-full py-2 px-4 bg-violet-300 z-20">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-5 w-20"/>
                </Link>
                <div className="flex gap-2 items-center">
                    <p>Hi Dineth!</p>
                    <Link to="/" className="border border-violet-600 px-2 py-1 rounded-[5px] text-violet-700 hover:text-white hover:bg-violet-700 transition-colors">Log Out</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar