import { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
  return (
    <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="sm:w-87.5 w-[90%] text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
            <h1 className="text-gray-900 text-3xl mt-10 font-medium">Register</h1>
            <p>Please sign up to continue</p>

            <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <FaRegUser size={16} color="#6B7280" />
                <input type="text" name="name" placeholder="Name" className="border-none outline-none ring-0" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <HiOutlineMailOpen size={16} color="#6B7280" />
                <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <IoLockClosedOutline size={16} color="#6B7280" />
                <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0" value={formData.password} onChange={handleChange} required />
            </div>

            <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-violet-700 hover:opacity-90 transition-opacity">
                Register
            </button>
            <p className="text-gray-500 text-sm mt-3 mb-11">Already have an account?<Link to={"/login"} className="text-violet-500 hover:underline">click here</Link></p>
        </form>
    </div>
  )
}

export default Register