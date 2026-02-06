import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { WiStars } from "react-icons/wi";
import { BsLaptop } from "react-icons/bs";
import api from "../../Config/axiosConfig";
import toast from "react-hot-toast";

function Experience({title,icon,setResumeData,data}) {

    const [loading,setLoading] = useState(false)
    const [experience, setExperience] = useState([
            {
                company: "",
                position: "",
                start_date: "",
                end_date: "",
                description: "",
                isCurrent: false,
            }
        ]
    )

    // LOAD EXPERIENCE DATA WHENEVER data PROP CHANGES
    useEffect(()=>{
        const loadExperience = () => {
            setExperience(data)
        }
        loadExperience()
    },[data])

    // ADD EXPERIENCE ENTRY
    const addExperience = ()=>{        
        setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,experience : [...prev.resumeData.experience,{company : "", position: "", start_date: "", end_date: "", description: "", isCurrent: false,}]}}))
    }

    // DELETE EXPERIENCE ENTRY
    const deleteExperience = (indexedExperience) => {
        setResumeData(prev=> ({...prev,resumeData : {...prev.resumeData,experience : experience.filter((_,index)=>{return index !== indexedExperience})}}))
    }

    // ENHANCE THE JOB DESCRIPTION WITH AI
    const enhanceJobDescription = async(index)=>{        
        let aiContent;
        try {
            setLoading(true)
            const response = await api.post("/api/ai-enhance/summary",{userContent : data[index].description},{headers:{Authorization : localStorage.getItem("token")}})

            aiContent = response.data.message
            toast.success("Summary generated successfully")
            
        } catch (error) {
            toast.error(error?.response?.data?.message || error.response.data || "Error in generating job description")       
        }
        finally{
            setLoading(false)
        }    

        setResumeData((prev)=>({...prev,resumeData : {...prev.resumeData,experience : prev.resumeData.experience.map((exp,i)=>{
            return (
                i === index?
                {...exp,description : aiContent?.content}
                :
                exp
            )
        })}}))
    }

  return (
    <div className="experience">
        <div className="flex flex-col gap-2 justify-between">
            {/* HEADING */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <p className="border border-black rounded-full p-2">{icon}</p>
                    <p className="font-bold">{title}</p>
                </div>

                <div className="flex items-center gap-1 text-violet-700 bg-violet-300 cursor-pointer p-1 rounded-lg transition-all duration-200 hover:bg-violet-400 active:bg-violet-300" onClick={addExperience}>
                    <CiCirclePlus size={20}/>
                    <p>Add Experience</p>
                </div>
            </div>
            <p className="text-slate-500 text-[12px]">Let’s continue with your experience information</p>
            
            {/* EXPERIENCE SECTIONS */}
            {
                experience && experience.length===0?
                <div className="flex flex-col justify-center items-center gap-1">
                    <BsLaptop size={60} className="text-gray-300" />
                    <p className="text-gray-500 text-sm">Experience section is currently empty</p>
                    <p className="text-gray-500 text-sm">Use “Add Experience” to populate it</p>
                </div>
                :
                experience && experience.map((exp,index)=>{
                    return (
                        <div key={index} className="border border-black rounded-lg p-2 flex flex-col gap-3">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">Experience #{index+1}</p>
                                <RiDeleteBin6Line size={20} className="text-red-500 cursor-pointer" onClick={()=>{deleteExperience(index)}} />
                            </div>

                            <form>
                                <div className="grid grid-cols-2 gap-2 items-center">
                                    <input type="text" placeholder="Company Name" className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-cyan-500" value={exp?.company} onChange={(e)=>{setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,experience : prev.resumeData.experience.map((element,i)=>{
                                        return(
                                            i === index ?
                                            {...element,company : e.target.value}
                                            :
                                            element
                                        )
                                    })}}))}} />
                                    <input type="text" placeholder="Job Title" className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-cyan-500" value={exp?.position} onChange={(e)=>{setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,experience : prev.resumeData.experience.map((element,i)=>{
                                        return(
                                            i === index ?
                                            {...element,position : e.target.value}
                                            :
                                            element
                                        )
                                    })}}))}} />
                                    <input type="month" className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-cyan-500" value={exp?.start_date} onChange={(e)=>{setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,experience : prev.resumeData.experience.map((element,i)=>{
                                        return(
                                            i === index ?
                                            {...element,start_date : e.target.value}
                                            :
                                            element
                                        )
                                    })}}))}} />
                                    <input type="month" className="p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-cyan-500" value={exp.isCurrent?"":exp?.end_date} onChange={(e)=>{setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,experience : prev.resumeData.experience.map((element,i)=>{
                                        return(
                                            i === index ?
                                            {...element,end_date : e.target.value}
                                            :
                                            element
                                        )
                                    })}}))}} />
                                </div>
                                
                                <input type="checkbox" checked={exp?.isCurrent ?? false} onChange={()=>{setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,experience : prev.resumeData.experience.map((element,i)=>{
                                        return(
                                            i === index ?
                                            {...element,isCurrent : !element.isCurrent}
                                            :
                                            element
                                        )
                                    })}}))}} /> Current workplace

                                <div className="flex justify-between items-center my-4">
                                    <p className="font-semibold">Job Description</p>
                                
                                    <div onClick={()=>loading? undefined : enhanceJobDescription(index)} className={`flex items-center gap-1 text-amber-600 bg-yellow-400 p-1 rounded-md opacity-80 hover:opacity-100 transition-colors ${loading?"animate-pulse cursor-not-allowed":"cursor-pointer"}`}>
                                        <WiStars size={20}/>
                                        <p className="text-[14px] font-bold">{loading?"Enhancing...":"AI Enhance"}</p>
                                    </div>
                                </div>

                                <textarea rows={5} className="w-full p-2 border border-gray-400 resize-none rounded-md outline-none focus:ring focus:ring-cyan-500" placeholder="Tell us about your job..." value={exp?.description} onChange={(e)=>{setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,experience : prev.resumeData.experience.map((element,i)=>{
                                    return (
                                        i === index?
                                        {...element, description : e.target.value}
                                        :
                                        element
                                    )
                                })}}))}} />
                            </form>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Experience