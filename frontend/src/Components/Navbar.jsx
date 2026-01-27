import { Link, useNavigate } from "react-router-dom"
import logo from "/logo.png"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios";
import { useEffect } from "react";
import { setUser } from "../App/Config/userSlice";

function Navbar() {

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    console.log(user);
    
    const getUser = async()=>{
        try {
            const response = await axios.get("http://localhost:3000/api/auth/authenticate",{headers : {Authorization : localStorage.getItem("token")}})
            console.log(response);
            dispatch(setUser(response?.data?.userInfo))
        } catch (error) {
            console.log(error);   
        }
    }
    

    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem("token")
        navigate("/")
    }

    useEffect(()=>{
        getUser()
    },[])

  return (
    <div className="navbar print:hidden">
        <div className="fixed top-0 w-full py-2 px-4 bg-violet-300 z-20">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="h-5 w-20"/>
                </Link>
                <div className="flex gap-2 items-center">
                    <p>Hello {user?.name}!</p>
                    <button onClick={logout} className="border border-violet-600 px-2 py-1 rounded-[5px] text-violet-700 hover:text-white hover:bg-violet-700 transition-colors">Log Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar