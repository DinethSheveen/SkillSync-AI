import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

function Education({data, setResumeData, icon, title}) {

    const [education, setEducation] = useState([
        {
            institution: "",
            degree: "",
            field: "",
            graduation_date: "",
            gpa: ""
        }
    ])

    // ADD EDUCATION ENTRY
    const addEducation = ()=>{
        setResumeData(prev => ({...prev,education : [...prev.education , {institution: "",degree: "",field: "",graduation_date: "",gpa: ""}]}))
    }

    // DELETE EDUCATION ENTRY
    const deleteEducation = (indexedEducation)=>{
        setResumeData(prev => ({...prev,education : [...prev.education.filter((_,index)=>{return index !== indexedEducation})]}))
    }
    
    // LOAD EDUCATION DATA WHENEVER data PROP CHANGES
    useEffect(()=>{
        const loadEducationData = ()=>{
            setEducation(data)
        }
        loadEducationData()
    },[data])

  return (
    <div className="education">
        <div className="flex flex-col gap-2 justify-between">
            {/* HEADING */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <p className="border border-black rounded-full p-2">{icon}</p>
                    <p className="font-bold">{title}</p>
                </div>

                <div className="flex items-center gap-1 text-violet-700 bg-violet-300 cursor-pointer p-1 rounded-lg transition-all duration-200 hover:bg-violet-400 active:bg-violet-300" onClick={addEducation}>
                    <CiCirclePlus size={20}/>
                    <p>Add Education</p>
                </div>
            </div>
            <p className="text-slate-500 text-[12px]">Let’s continue with your educational information</p>
            
            {/* EDUCATION SECTIONS */}
            {
                education && education.map((edu,index)=>{
                    return (
                        <div key={index} className="border border-black rounded-lg p-2 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold">Education #{index+1}</p>
                                <RiDeleteBin6Line className="text-red-500" onClick={()=>{deleteEducation(index)}} />
                            </div>
                            <form>
                                <div className="grid grid-cols-2 items-center gap-2">
                                    <input type="text" placeholder="Institution Name" className="p-2 border border-gray-300 rounded-lg" value={edu.institution} onChange={(e)=>{setResumeData(prev => ({...prev,education : prev.education.map((element,i)=>{
                                        return (
                                            i === index ? 
                                            {...element, institution: e.target.value}
                                            :
                                            element
                                        )
                                    })}))}} />
                                    <input type="text" placeholder="Degree (e.g., Bachelors, Masters)" className="p-2 border border-gray-300 rounded-lg" value={edu.degree} onChange={(e)=>{setResumeData(prev => ({...prev,education : prev.education.map((element,i)=>{
                                        return (
                                            i === index ? 
                                            {...element, degree: e.target.value}
                                            :
                                            element
                                        )
                                    })}))}} />
                                    <input type="text" placeholder="Field of Study" className="p-2 border border-gray-300 rounded-lg" value={edu.field} onChange={(e)=>{setResumeData(prev => ({...prev,education : prev.education.map((element,i)=>{
                                        return (
                                            i === index ? 
                                            {...element, field: e.target.value}
                                            :
                                            element
                                        )
                                    })}))}}/>
                                    <input type="month" placeholder="End Date" className="p-2 border border-gray-300 rounded-lg" value={edu.graduation_date} onChange={(e)=>{setResumeData(prev => ({...prev,education : prev.education.map((element,i)=>{
                                        return (
                                            i === index ? 
                                            {...element, graduation_date: e.target.value}
                                            :
                                            element
                                        )
                                    })}))}}/>
                                    <input type="text" placeholder="Grade (optional)" className="p-2 border border-gray-300 rounded-lg" value={edu.gpa} onChange={(e)=>{setResumeData(prev => ({...prev,education : prev.education.map((element,i)=>{
                                        return (
                                            i === index ? 
                                            {...element, gpa: e.target.value}
                                            :
                                            element
                                        )
                                    })}))}} />
                                </div>
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

export default Education