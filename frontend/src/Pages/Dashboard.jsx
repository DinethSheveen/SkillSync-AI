import { IoIosAddCircleOutline } from "react-icons/io";
import { FiUploadCloud } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Resumes from "../Components/Dashboard/Resumes";
import toast from "react-hot-toast"
import api from "../Api/axiosConfig";

function Dashboard() {

  const [createResumePopup, setCreateResumePopup] = useState(false)
  const [uploadResumePopup, setUploadResumePopup] = useState(false)
  const [editTitlePopup, setEditTitlePopup] = useState(false)
  const [resumeTitle, setResumeTitle] = useState("")
  const [resume, setResume] = useState(null)
  const navigate = useNavigate()

  const handleResumeCreate = async(e)=>{
    try {
      e.preventDefault()
      const response = await api.post("/api/resumes/create",{resumeTitle},{headers : {Authorization : localStorage.getItem("token")}})
      toast.success(response?.data?.message);
      setResumeTitle("")
      setCreateResumePopup(false)
      navigate(`builder/${response?.data?.newResume?._id}`)
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  const handleResumeUpload = (e)=>{
    e.preventDefault()
    setResumeTitle("")
    setUploadResumePopup(false)
    navigate("builder/ansjan")
  }

  const handleTitleChange = (e)=>{
    e.preventDefault()
    setEditTitlePopup(false)
  }

  return (
    <div className={`dashboard flex flex-col gap-5 min-h-[95vh] px-4 py-6 relative ${createResumePopup || uploadResumePopup || editTitlePopup?'bg-black/55 backdrop-blur-lg z-10':''}`}>
      <div className="flex justify-center items-center flex-wrap gap-4 w-fit sm:justify-start">
        {/* ADD RESUME */}
        <div className="flex flex-col justify-center items-center h-50 w-40 border border-violet-600 hover:scale-101 transition-all cursor-pointer hover:border-dashed" onClick={() => uploadResumePopup?"":setCreateResumePopup(true)}>
          <div className="p-2 bg-violet-600 rounded-full">
            <IoIosAddCircleOutline size={30} className="text-white" />
          </div>
          <p className="text-violet-600 font-bold">Create Resume</p>
        </div>
        
        {/* UPLOLAD EXISTING RESUME */}
        <div className="flex flex-col justify-center items-center h-50 w-40 border border-yellow-600 hover:scale-101 transition-all cursor-pointer hover:border-dashed" onClick={()=>{createResumePopup ? "":setUploadResumePopup(true)}}>
          <div className="p-2 bg-yellow-600 rounded-full">
            <FiUploadCloud size={30} className="text-white" />
          </div>
          <p className="text-yellow-600 font-bold">Upload Resume</p>
        </div>
      </div>

      <hr className="w-full text-purple-400"/>

      {createResumePopup && 
        // ALERT BOX ON CREATE RESUME
        <form onSubmit={handleResumeCreate} className="absolute top-[30%] left-0 w-full flex flex-col justify-between items-center transition-all duration-300 z-10">
            {/* ALERT TITLE */}
            <div className="flex flex-col justify-between items-center w-[75%] max-w-125 gap-5 backdrop-blur-lg shadow-lg px-4 py-5 bg-white rounded-lg">
              <div className="flex gap-5 justify-between items-center w-full">
                <h2 className="font-bold text-purple-600">Create New Resume</h2>
                <IoCloseOutline size={30} className="text-purple-600 cursor-pointer" onClick={()=>{setCreateResumePopup(false); setResumeTitle("")}} />
              </div>
              
              {/* RESUME TITLE */}
              <input type="text" placeholder="Enter Resume Title" className="w-full p-1 outline-none rounded-sm ring-violet-600 ring-2 focus:ring-1 focus:shadow-lg" 
              onChange={(e)=>{setResumeTitle(e.target.value)}} value={resumeTitle} />

              {/* BUTTON */}
              <button className="bg-purple-600 text-white text-center px-4 py-2 rounded-lg w-full hover:bg-purple-700 transition-colors">Create Resume</button>
            </div>
        </form> 
      }

      {uploadResumePopup &&
        // ALERT BOX ON UPLOAD RESUME
        <form onSubmit={handleResumeUpload} className="absolute top-[10%] left-0 w-full flex flex-col justify-between items-center transition-all duration-300 z-10">
            {/* ALERT TITLE */}
            <div className="flex flex-col justify-between items-center w-[75%] max-w-125 gap-5 backdrop-blur-lg shadow-lg px-4 py-5 bg-white rounded-lg">
              <div className="flex gap-5 justify-between items-center w-full">
                <h2 className="font-bold text-yellow-600">Upload Resume</h2>
                <IoCloseOutline size={30} className="text-yellow-600 cursor-pointer" onClick={()=>{setUploadResumePopup(false); setResumeTitle("");setResume(null)}} />
              </div>
              
              {/* RESUME TITLE */}
              <input type="text" placeholder="Enter Resume Title" className="w-full p-1 outline-none rounded-sm ring-yellow-600 ring-2 focus:ring-1 focus:shadow-lg" onChange={(e)=>{setResumeTitle(e.target.value)}} value={resumeTitle} />

              {/* MESSAGE TO SELECT THE FILE */}
              {
              resume?
                ""
                :
                <p className="text-left w-full">Select your resume file</p>
              }

              {/* FILE INPUT */}
              <div className="min-h-60 border-2 border-yellow-600 w-full flex flex-col justify-center items-center rounded-lg">
                <input type="file" id="resume" accept=".pdf" className="w-full outline-none rounded-sm hidden" onChange={(e)=>{setResume(e.target.files[0]); setResumeTitle(resume ? resume.name : "")}}/>
                {
                  resume ?
                  <p className="text-yellow-600 font-bold">{resume.name}</p>
                  :
                  <label htmlFor="resume" className="bottom-20 flex flex-col items-center border border-dashed rounded-sm p-3">
                    <FiUploadCloud size={40} className="text-gray-700 cursor-pointer" />
                    Upload your Resume
                  </label>
                }
              </div>

              {/* BUTTON */}
              <button  className="bg-yellow-600 text-white text-center px-4 py-2 rounded-lg w-full hover:bg-yellow-700 transition-colors">Upload Resume</button>
            </div>
        </form> 
      }

      {editTitlePopup && 
        // ALERT BOX ON EDIT TITLE
        <form onSubmit={handleTitleChange} className="absolute top-[30%] left-0 w-full flex flex-col justify-between items-center transition-all duration-300 z-10">
            {/* ALERT TITLE */}
            <div className="flex flex-col justify-between items-center w-[75%] max-w-125 gap-5 backdrop-blur-lg shadow-lg px-4 py-5 bg-white rounded-lg">
              <div className="flex gap-5 justify-between items-center w-full">
                <h2 className="font-bold text-purple-600">Change Resume Title</h2>
                <IoCloseOutline size={30} className="text-purple-600 cursor-pointer" onClick={()=>{setEditTitlePopup(false); setResumeTitle("")}} />
              </div>
              
              {/* RESUME TITLE */}
              <input type="text" placeholder="Enter Resume Title" className="w-full p-1 outline-none rounded-sm ring-violet-600 ring-2 focus:ring-1 focus:shadow-lg" 
              onChange={(e)=>{setResumeTitle(e.target.value)}} value={resumeTitle} />

              {/* BUTTON */}
              <button className="bg-purple-600 text-white text-center px-4 py-2 rounded-lg w-full hover:bg-purple-700 transition-colors">Confirm Title</button>
            </div>
        </form> 
      }

      <Resumes setResumeTitle={setResumeTitle} setEditTitlePopup={setEditTitlePopup} />

    </div>
  )
}

export default Dashboard