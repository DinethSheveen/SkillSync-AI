import toast from "react-hot-toast"
import { Link } from "react-router-dom"

function NoRoute() {

    toast.error("Oops! That page doesn't exist")

  return (
    <div className="404 min-h-screen flex justify-center items-center">
        {/* HEADING */}
        <div className="flex flex-col items-center gap-3">
            <p className="text-7xl font-bold bg-transparent bg-linear-to-r from-indigo-400 via-black to-red-500 bg-clip-text text-transparent md:text-9xl">Oops!</p>
            
            <p className="font-bold text-3xl">404 - PAGE NOT FOUND</p>
            
            <p className="max-w-xl text-center text-gray-500 text-2xl">The page you are looking for might have been removed or had its name chanfed or is temporarily unavailable.</p>
            
            <Link to={"/"} className="font-bold bg-blue-700 text-white px-4 py-2 rounded-full cursor-pointer">GO TO HOMEPAGE</Link>
        </div>
    </div>
  )
}

export default NoRoute