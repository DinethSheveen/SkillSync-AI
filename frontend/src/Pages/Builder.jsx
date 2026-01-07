import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { dummyResumeData } from "../assets/assets"
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdCastForEducation } from "react-icons/md";
import { LuUniversity } from "react-icons/lu";

function Builder() {

  const { resumeId } = useParams()
  const [activeSectionIndex, setActiveSectionIndex] = useState(1)
  const [resumeData, setResumeData] = useState({
    personalInfo: {},
    _id : "",
    title : "",
    skills : [],
    experience : [],
    education : [],
    projects : [],
    public : false,
    template : "classic",
    accent_color : "#14B8A6"
  })

  const sections = [
    {
      name: "personalInfo",
      title: "Personal Information",
      icon : <FaRegUser />
    },
    {
      name: "skills",
      title: "Skills",
      icon : <LuUniversity />
    },
    {
      name: "experience",
      title: "Experience",
      icon : <GoProjectSymlink />
    },
    {
      name: "education",
      title: "Education",
      icon : <MdCastForEducation />
    },
  ]

  const activeSection = sections[activeSectionIndex]
  
  useEffect(()=>{
    const loadResumeData = () => {
      const resume = dummyResumeData.find((resume)=>{return resume._id == resumeId})
      if(resume){
        setResumeData(resume)
        document.title = resume.title
        console.log(resumeData);
      }
    }
    loadResumeData()
  },[resumeId,resumeData])

  return (
    <div className="builder">
      {/* LINK TO DASHBOARD */}
      <Link to="/app" className="flex py-3 px-1 items-center gap-1 text-slate-600">
        <IoIosArrowRoundBack size={25}/>
        <p>Dashboard</p>  
      </Link>

      {/* BUILDER SECTION */}
      <div className="flex justify-between items-center gap-5 p-5">
        
        {/* SECTIONS LIST */}
        <div className="min-w-md bg-gray-100 rounded-sm p-2 relative">
          {/*PROGRESS BAR */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500" style={{width: `${(activeSectionIndex / sections.length) *100}%`}}></div>
        </div>
        {/* RESUME  */}
        <div className="flex-1">
          hi
        </div>
      </div>

    </div>
  )
}

export default Builder