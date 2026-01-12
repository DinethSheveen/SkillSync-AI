import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { dummyResumeData } from "../assets/assets"
import { IoIosArrowRoundBack, IoIosColorPalette } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { MdCastForEducation, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineContentPasteSearch } from "react-icons/md";
import { LuUniversity, LuLayoutTemplate  } from "react-icons/lu";
import PersonalInfo from "../Components/ResumeBuilder/PersonalInfo";
import Summary from "../Components/ResumeBuilder/Summary";
import Preview from "../Components/ResumeBuilder/Preview";
import TemplateSelector from "../Components/ResumeBuilder/TemplateSelector";
import ColorSelector from "../Components/ResumeBuilder/ColorSelector";
import Education from "../Components/ResumeBuilder/Education";
import Experience from "../Components/ResumeBuilder/Experience";
import Projects from "../Components/ResumeBuilder/Projects";

function Builder() {

  const { resumeId } = useParams()
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [resumeData, setResumeData] = useState({
    personal_info : {},
    professional_summary : "",
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
  const [templateMenu, setTemplateMenu] = useState(false)
  const [colorMenu, setColorMenu] = useState(false)

  const sections = [
    {
      name: "personalInfo",
      title: "Personal Information",
      icon : <FaRegUser />
    },
    {
      name : "summary",
      title : "Professional Summary",
      icon : <MdOutlineContentPasteSearch />
    },
    {
      name: "education",
      title: "Education",
      icon : <MdCastForEducation />
    },
    {
      name: "experience",
      title: "Experience",
      icon : <GoProjectSymlink />
    },
    {
      name: "projects",
      title: "Projects",
      icon : <MdCastForEducation />
    },
    {
      name: "skills",
      title: "Skills",
      icon : <LuUniversity />
    }
  ]

  const activeSection = sections[activeSectionIndex]
  
  useEffect(()=>{
    const loadResumeData = () => {
      const resume = dummyResumeData.find((resume)=>{return resume._id == resumeId})
      if(resume){
        setResumeData(resume)
        document.title = resume.title
      }
    }
    loadResumeData()
  },[resumeId])

  return (
    <div className="builder">
      {/* LINK TO DASHBOARD */}
      <Link to="/app" className="inline-flex py-3 px-1 items-center gap-1 text-slate-600">
        <IoIosArrowRoundBack size={25}/>
        <p>Dashboard</p>  
      </Link>

      {/* BUILDER SECTION */}
      <div className="flex flex-col justify-between items-start gap-5 p-2 md:flex-row">
        
        {/* SECTIONS LIST */}
        <div className="min-w-full flex flex-col gap-3 justify-between bg-gray-100 rounded-lg px-1 py-4 relative md:min-w-[40%] md:max-w-[40%]">
          {/*FLEX ITEM 01 - PROGRESS BAR */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-500 transition-all duration-800" style={{width: `${(activeSectionIndex / sections.length) *100}%`}}>
          </div>

          {/* FLEX ITEM 02 - SECTION CONTROLS */}
          <div className="flex justify-between items-center text-[15px]">
            {/* TEMPLATES AND ACCENT COLOR */}
            <div className="flex items-center gap-1 relative">
              <div className="flex items-center gap-1 p-1 bg-violet-300 text-violet-800 rounded-md cursor-pointer" onClick={()=>{setTemplateMenu(prev => !prev); setColorMenu(false)}}>
                <LuLayoutTemplate className="hidden sm:flex" size={15}/>
                <p>Template</p>
              </div>
              <div className="flex items-center gap-1 p-1 bg-blue-300 text-blue-800 rounded-md cursor-pointer" onClick={()=>{setColorMenu(prev => !prev); setTemplateMenu(false)}}>
                <IoIosColorPalette className="hidden sm:flex" size={15}/>
                <p>Accent Color</p>
              </div>

              <TemplateSelector templateMenu={templateMenu} setTemplateMenu={setTemplateMenu} setResumeData={setResumeData} resumeTemplate={resumeData.template} />
              <ColorSelector setResumeData={setResumeData} setColorMenu={setColorMenu} colorMenu={colorMenu} resumeColor={resumeData.accent_color} />
            
            </div>
            {/* PREVIOUS AND NEXT BUTTONS */}
            <div className="flex items-center gap-1">
              <p className={`flex items-center ${activeSectionIndex === 0?"text-slate-400 cursor-not-allowed":"cursor-pointer"}`} onClick={()=>{if(activeSectionIndex>0){
                setActiveSectionIndex(prevIndex => prevIndex-1)
              }}}>
                <MdKeyboardArrowLeft />
                Previous
              </p>
              <p className={`flex items-center ${activeSectionIndex === sections.length?"text-slate-400 cursor-not-allowed":"cursor-pointer"}`} onClick={()=>{if(activeSectionIndex < sections.length){
                setActiveSectionIndex(prevIndex => prevIndex+1)
              }}}>
                Next
                <MdKeyboardArrowRight />
              </p>
            </div>
          </div>

          <hr className="border border-gray-300 "/>

          {/* FLEX ITEM 03 - INFORMATION FILL IN */}
          {activeSection?.name === "personalInfo" ? 
            <PersonalInfo setResumeData={setResumeData} data={resumeData?.personal_info} icon={activeSection?.icon} title={activeSection?.title} />
            :
            activeSection?.name === "summary" ?
            <Summary setResumeData={setResumeData} professional_summary={resumeData?.professional_summary} icon={activeSection?.icon} title={activeSection?.title} />
            :
            activeSection?.name === "education" ?
            <Education setResumeData={setResumeData} data={resumeData?.education} icon={activeSection?.icon} title={activeSection?.title} />
            :
            activeSection?.name === "experience" ?
            <Experience setResumeData={setResumeData} data={resumeData?.experience} icon={activeSection?.icon} title={activeSection?.title} />
            :
            activeSection?.name === "projects"?
            <Projects setResumeData={setResumeData} data={resumeData?.project} title={activeSection?.title} icon={activeSection?.icon} />
            : 
            ""
          }
        </div>
        {/* RESUME  */}
        <div className="flex-1">
          <Preview data={resumeData} template={resumeData.template} accent_color={resumeData.accent_color}/>
        </div>
      </div>

    </div>
  )
}

export default Builder