import { useEffect, useState } from "react"
import Preview from "../Components/ResumeBuilder/Preview"
import { useParams } from "react-router-dom"
import axios from "axios"

function ViewResume() {

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
    <div className="max-w-[60%] py-5 mx-auto">
      <Preview data={resume} template={resume?.template} color={resume?.color}/>
    </div>
  )
}

export default ViewResume

