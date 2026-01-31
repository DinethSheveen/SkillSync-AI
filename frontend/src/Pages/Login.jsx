import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLockClosedOutline } from "react-icons/io5";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import toast from  "react-hot-toast"
import { useDispatch } from "react-redux";
import { initAuth, login } from "../App/Config/userSlice";
import api from "../Api/axiosConfig";

function Login() {

    // DISPATCH FOR GLOBAL STATE HANDLING
    const dispatch = useDispatch()    

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await api.post("/api/auth/login",formData)
            toast.success(response?.data?.message)
            setFormData({password : "", email : ""})
            
            dispatch(login({
                token : response.data.token,
                user : response.data.userInfo 
            }))

            dispatch(initAuth())
            
            // SAVING TOKEN AND THE USER INFO
            localStorage.setItem("token",response?.data?.token)
            localStorage.setItem("user",JSON.stringify(response?.data?.userInfo))

            navigate("/dashboard")
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }

    const handleChange = (e) => {        
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

  return (
    <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className="sm:w-87.5 w-[90%] text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
            <h1 className="text-gray-900 text-3xl mt-10 font-medium">Login</h1>
            <p>Please sign in to continue</p>
            
            <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <HiOutlineMailOpen size={16} color="#6B7280" />
                <input type="email" name="email" placeholder="Email id" className="border-none outline-none ring-0" value={formData.email} onChange={handleChange} />
            </div>

            <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <IoLockClosedOutline size={16} color="#6B7280" />
                <input type="password" name="password" placeholder="Password" className="border-none outline-none ring-0" value={formData.password} onChange={handleChange} />
            </div>

            <div className="mt-4 text-left text-violet-500">
                <button className="text-sm" type="reset">Forgot password?</button>
            </div>

            <button type="submit" className="mt-2 w-full h-11 rounded-full text-white bg-violet-700 hover:opacity-90 transition-opacity">
                Login
            </button>
            <p className="text-gray-500 text-sm mt-3 mb-11">Don't have an account?<Link to={"/register"} className="text-violet-500 hover:underline">click here</Link></p>
        </form>
    </div>
  )
}

export default Login