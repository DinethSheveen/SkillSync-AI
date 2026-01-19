import { useState } from "react"
import { Link } from "react-router-dom"
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";
import logo from "/logo.png"

function Hero() {

    const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className='flex flex-col items-center bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 py-4' >
        <nav className="flex items-center justify-between gap-8 bg-white/60 border border-white rounded-full px-4 md:px-2 py-2.5 w-full max-w-200" >
            <Link to={"/"} className='flex items-center md:pl-3'>
                <img src={logo} alt="App logo" className="w-20 h-8"/>
            </Link>
            <div className='w-0.5 h-8 bg-gray-50 hidden md:flex'></div>
            <div id="menu" className={`max-md:absolute max-md:bg-white/70 max-md:h-196.25 max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col max-md:justify-center max-md:backdrop-blur flex items-center gap-8 z-50 md:gap-10 flex-1 ${mobileOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
                <a href="/" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-gray-700 text-sm">Home</a>
                <a href="#features" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-gray-700 text-sm">Features</a>
                <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-gray-700 text-sm">Testimonials</a>
                <a href="#contact" onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-gray-700 text-sm">Contact Us</a>
                <Link to={"/login"} onClick={() => setMobileOpen(false)} className="text-gray-600 hover:text-gray-700 text-sm md:hidden">Login</Link>

                <button id="close-menu" onClick={() => setMobileOpen(false)} className="md:hidden bg-violet-500 active:bg-violet-600 text-white p-2 rounded-md aspect-square font-medium transition">
                    <IoMdClose size={25}/>
                </button>
            </div>

            <div className="flex items-center gap-2 md:pr-1">
                <Link to="/register" className="hidden md:inline-block bg-violet-600 hover:bg-violet-800 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm transition cursor-pointer">
                    Get Started
                </Link>
                <Link to={"/login"} className="hidden md:inline-block bg-transparent text-violet-600 border-2 border-violet-700 hover:bg-violet-700 hover:text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm transition cursor-pointer">
                    Login
                </Link>

                <button id="open-menu" onClick={() => setMobileOpen(true)} className="md:hidden text-gray-700 p-2 rounded-md aspect-square font-medium transition">
                    <HiMenuAlt2 size={25}/>
                </button>
            </div>
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-2 pl-2 pr-4 py-1.5 mt-20 rounded-full bg-white/50 border border-white">
            <div className="relative flex size-3.5 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75 animate-ping duration-300"></span>
                <span className="relative inline-flex size-2 rounded-full bg-purple-600"></span>
            </div>
            <p className="text-center text-sm text-black/60">Join 30,000+ users advancing their careers with AI-powered resumes.</p>
        </div>

        <h1 className='text-4xl md:text-[66px]/19 text-center max-w-200 mt-8 text-gray-800 bg-clip-text leading-tight font-medium'>From skills to offer letters, <span className="text-purple-800">AI powered</span> resumes makes it happen.</h1>
        <p className="text-sm text-gray-600 text-center max-w-157.5 mt-4">
            We craft AI-powered resumes that get noticed. From smart templates to personalized suggestions, we help you land your dream job faster.
        </p>

        <div className='flex gap-3 mt-10'>
            <button className="bg-violet-600 hover:bg-violet-700 text-white text-xs md:text-sm px-6 py-3 rounded-lg transition cursor-pointer">
                Get Started Now
            </button>
            <button className="bg-white hover:bg-white/5 border border-violet-400 text-gray-600 text-xs md:text-sm px-5 py-3 rounded-lg transition cursor-pointer">
                Book a demo
            </button>
        </div>

        <div className='w-full max-w-200 h-0.75 mt-10 bg-linear-to-r from-white/10 via-violet-600 to-white/10'></div>

        {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-18 max-w-[930px] w-full'>
            <div className='text-center'>
                <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>20+</h2>
                <p className='text-xs md:text-sm text-gray-500'>Years Experience</p>
            </div>
            <div className='text-center'>
                <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>12k+</h2>
                <p className='text-xs md:text-sm text-gray-500'>Projects Completed</p>
            </div>
            <div className='text-center'>
                <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>5k+</h2>
                <p className='text-xs md:text-sm text-gray-500'>Happy Customers</p>
            </div>
            <div className='text-center'>
                <h2 className='font-medium text-2xl md:text-3xl text-gray-800'>5+</h2>
                <p className='text-xs md:text-sm text-gray-500'>Countries</p>
            </div>
        </div> */}
    </div>
  )
}

export default Hero