import { useEffect, useState } from "react"
import Preview from "../Components/ResumeBuilder/Preview"
import { Navigate, useParams } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

function ViewResume() {

  const {isAuthenticated,user} = useSelector(state => state.user)

  const {resumeId} = useParams()
  const [resume, setResume] = useState(null)  

  useEffect(()=>{
    const fetchResumeData = async()=>{
      const response = await axios.get(`http://localhost:3000/api/resumes/get-by-id/${resumeId}`,{headers : {Authorization : localStorage.getItem("token")}})
      
      setResume(response?.data?.resume?.resumeData)
      document.title = response?.data?.resume?.resumeTitle
    }
    fetchResumeData()
  },[resumeId])

  return (
      isAuthenticated && user?
        <div className="max-w-[60%] py-5 mx-auto">
          <Preview data={resume} template={resume?.template} color={resume?.color}/>
        </div>
      :
      <Navigate to="/login" />
  )
}

export default ViewResume

