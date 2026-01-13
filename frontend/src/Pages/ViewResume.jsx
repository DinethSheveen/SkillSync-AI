import { useEffect, useState } from "react"
import Preview from "../Components/ResumeBuilder/Preview"
import { useParams } from "react-router-dom"
import { dummyResumeData } from "../assets/assets"

function ViewResume() {

  const {resumeId} = useParams()
  const [resume, setResume] = useState(null)

  console.log(resume);
  

  useEffect(()=>{
    const fetchResumeData = ()=>{
      setResume(dummyResumeData.find((resume)=>{return resume._id === resumeId}) || null)
    }
    fetchResumeData()
  },[])

  return (
    <div className="max-w-[50%] py-5 mx-auto">
      <Preview data={resume} template={resume?.template} accent_color={resume?.accent_color}/>
    </div>
  )
}

export default ViewResume

