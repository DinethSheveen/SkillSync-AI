import { useEffect, useState } from "react"
import { dummyResumeData } from "../../assets/assets"
import dayjs from "dayjs"
import { TbFileCv } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

function Resumes({setResumeTitle,setEditTitlePopup}) {

    const [resumes, setResumes] = useState(null)
    const resumeColors = ["#e07870","#cc78e3","#ffdf20","#7bf1a8"]
    
    const deleteResume = (id)=>{
        const confirmation = confirm("Do you want to delete this resume")

        if(confirmation){
            setResumes(resumes.filter((resume)=>{return resume._id !== id}))
        }
    }

    useEffect(()=>{
        const fetchResumes = () =>{
            setResumes(dummyResumeData)
        }
        fetchResumes()
    },[])

  return (
    <div className="resumes flex-1 grid grid-cols-6 gap-2 justify-start">
        { resumes && resumes.map((resume,index)=>{
            return (
                <div style={{backgroundColor : resumeColors[index % resumeColors.length]}} className="max-h-60 p-2 rounded-lg" key={resume._id}>
                    <div className="resume-card flex flex-col justify-between items-center h-full cursor-pointer">
                        <div className="resume-edit-options flex justify-end gap-2 items-center w-full transition-all duration-300 opacity-0">
                            <RiDeleteBin6Line size={18} onClick={()=>{deleteResume(resume._id)}}/>
                            <BiEdit size={18} onClick={()=>{setEditTitlePopup(true); setResumeTitle(resume.title)}} />
                        </div>
                        <Link to={`builder/${resume._id}`} className="flex flex-col gap-2 items-center">
                            <TbFileCv size={30}/>
                            <p>{resume.title}</p>
                        </Link>
                        <p className="text-[13px]">Updated at {dayjs(resume.updatedAt).format("DD/MM/YYYY")}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Resumes