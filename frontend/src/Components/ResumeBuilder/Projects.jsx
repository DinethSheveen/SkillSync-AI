import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaProjectDiagram } from "react-icons/fa";

function Projects({setResumeData,data,title,icon}) {


    const [projects, setProjects] = useState([
        {
            name: "",
            type: "",
            description: ""            
        }
    ])

    const addProject = ()=>{
        setResumeData(prev => ({...prev,project : [...prev.project,{name:"",type:"",description:""}]}))
    }

    const deleteProject = (indexedProject)=>{
        setResumeData(prev => ({...prev,project : projects.filter((_,index)=>{return index !== indexedProject})}))
    }

    useEffect(()=>{
        const loadProjects = ()=>{
            setProjects(data)
        }
        
        loadProjects()
    },[projects,data])

  return (
    <div className="projects">
        <div className="flex flex-col gap-2 justify-between">
            {/* HEADING */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <p className="border border-black rounded-full p-2">{icon}</p>
                    <p className="font-bold">{title}</p>
                </div>

                <div className="flex items-center gap-1 text-violet-700 bg-violet-300 cursor-pointer p-1 rounded-lg transition-all duration-200 hover:bg-violet-400 active:bg-violet-300" onClick={addProject}>
                    <CiCirclePlus size={20}/>
                    <p>Add Project</p>
                </div>
            </div>
            <p className="text-slate-500 text-[12px]">Let’s continue with your projects</p>
            
            {/* PROJECTS SECTIONS */}
            {
                projects.length === 0 ?
                <div className="flex flex-col justify-center items-center gap-1">
                    <FaProjectDiagram size={60} className="text-gray-300" />
                    <p className="text-gray-500 text-sm">Project section is currently empty</p>
                    <p className="text-gray-500 text-sm">Use “Add Project" to populate it</p>
                </div>
                :

                projects && projects.map((project,index)=>{
                    return (
                        <div key={index} className="border border-black rounded-lg p-2 flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">Project #{index+1}</p>
                                <RiDeleteBin6Line size={20} className="text-red-500 cursor-pointer" onClick={()=>{deleteProject(index)}} />
                            </div>

                            <form className="flex flex-col gap-2 px-2">
                                <input type="text" placeholder="Project Name" className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-cyan-500" value={project.name} onChange={(e)=>{setResumeData(prev => ({...prev,project : prev.project.map((element,i)=>{
                                    return (
                                        i === index?
                                        {...element,name : e.target.value}
                                        :
                                        element
                                    )
                                })}))}} />
                                <input type="text" placeholder="Project Type" className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-cyan-500" value={project.type} onChange={(e)=>{setResumeData(prev => ({...prev,project : prev.project.map((element,i)=>{
                                    return (
                                        i === index?
                                        {...element,type : e.target.value}
                                        :
                                        element
                                    )
                                })}))}} />
                                <textarea rows={5}  placeholder="Describe your project..." className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-cyan-500 resize-none" value={project.description} onChange={(e)=>{setResumeData(prev => ({...prev,project : prev.project.map((element,i)=>{
                                    return (
                                        i === index?
                                        {...element,description : e.target.value}
                                        :
                                        element
                                    )
                                })}))}} />
                            </form>
                        </div>
                    )
                })
            }

            {/* SAVE BUTTON */}        
            <div className="my-2">
                <button className="border border-violet-500 text-violet-800 bg-violet-300 cursor-pointer py-2 px-4 w-fit rounded-lg hover:bg-violet-400 active:bg-violet-500">Save Changes</button>
            </div>
        </div>
    </div>
  )
}

export default Projects