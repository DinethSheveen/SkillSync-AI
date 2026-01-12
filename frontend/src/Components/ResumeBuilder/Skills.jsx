import { useEffect, useState } from "react";
import { FaProjectDiagram, FaPlus } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";

function Skills({setResumeData,data,title,icon}) {

    const [skills, setSkills] = useState([])
    const [newSkill,setNewSkill] = useState("")

    const addSkill = (newSkill)=>{
        if(newSkill !== ""){
            setResumeData(prev => ({...prev,skills : [...prev.skills,newSkill]}))
        }
        setNewSkill("")
    }

    const deleteSkill = (indexedSkill)=>{
        setResumeData(prev => ({...prev,skills : skills.filter((_,index)=>{return index !== indexedSkill})}))
    }

    useEffect(()=>{
        const loadSkills = ()=>{
            setSkills(data)
        }
        loadSkills()
    },[skills,data])

  return (
    <div className="projects">
        <div className="flex flex-col gap-3 justify-between">
            {/* HEADING */}
            <div className="flex items-center gap-2">
                <p className="border border-black rounded-full p-2">{icon}</p>
                <p className="font-bold">{title}</p>
            </div>

            <p className="text-slate-500 text-[12px]">Let’s continue with your skills...</p>
            
            <div className="flex justify-between items-center gap-2">
                <input type="text" placeholder="Type your Skill here..." className="border border-gray-400 flex-1 rounded-md px-2 py-1 outline-none focus:ring focus:ring-cyan-500" value={newSkill} onKeyDown={(e)=>{if(e.key=="Enter"){addSkill(newSkill)}}} onChange={(e)=>{setNewSkill(e.target.value)}} />
                
                <div className="flex items-center gap-0.5 px-2 py-1 bg-violet-300 cursor-pointer rounded-md text-violet-600 hover:bg-violet-400 active:bg-violet-300" onClick={()=>{addSkill(newSkill)}}>
                    <FaPlus />
                    <p className="font-semibold">Add skill</p>
                </div>
            </div>


            {/* PROJECTS SECTIONS */}
            {
                skills.length === 0?
                <div className="flex flex-col justify-center items-center gap-1 my-2 px-2">
                    <BsStars size={60} className="text-gray-300" />
                    <p className="text-gray-500 text-sm">Skills section is currently empty</p>
                    <p className="text-gray-500 text-sm">Use “Add Skills" to populate it</p>
                </div>
                :
                <div className="flex justify-start items-center gap-1 flex-wrap my-2 px-2">
                    {skills && skills.map((skill,index)=>{
                        return (
                            <div key={index} className="flex justify-center items-center gap-1 bg-gray-500 px-2 py-1 rounded-full text-white">
                                <p>{skill}</p>
                                <IoIosClose size={20} className="cursor-pointer" onClick={()=>{deleteSkill(index)}}/>
                            </div>
                        )
                    })}

                </div>
            }

            {/* SAVE BUTTON */}        
            <div className="my-2">
                <button className="border border-violet-500 text-violet-800 bg-violet-300 cursor-pointer py-2 px-4 w-fit rounded-lg hover:bg-violet-400 active:bg-violet-500">Save Changes</button>
            </div>
        </div>
    </div>
  )
}

export default Skills