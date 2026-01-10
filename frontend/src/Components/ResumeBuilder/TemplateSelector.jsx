import { useState } from "react"

function TemplateSelector({setTemplateMenu,templateMenu,setResumeData,resumeTemplate}) {

    const [selectedTemplate, setSelectedTemplate] = useState(resumeTemplate)
    
    const templates = [
        {
            id : "classic",
            name : "Classic",
            description :"A traditional layout with a clean and professional appearance."
        },
        {
            id : "modern",
            name : "Modern",
            description :"A sleek and contemporary design with bold headings and ample white space."
        },
        {
            id : "minimal",
            name : "Minimal",
            description :"A simple and elegant layout focusing on content with minimal distractions."
        },
        {
            id : "minimal-image",
            name : "Minimal Image",
            description :"A minimalist design that incorporates a profile image for a personal touch."
        }
    ]

  return (
    templateMenu &&
        <div className="absolute top-10 left-0 bg-gray-200 rounded-md shadow-lg z-20">
            <hr className="my-3 border border-gray-400" />
            {
                templates.map((template)=>{
                    return (
                        <div key={template.id} onClick={()=>{setTemplateMenu(prev=>!prev); setSelectedTemplate(template.id); setResumeData(prev=> ({...prev, template : template.id}))}} className={`bg-gray-500 m-1 p-1 rounded-md ${selectedTemplate === template.id ? "border-2 border-gray-900":"opacity-50 cursor-pointer"}`}>
                            <div className="flex justify-between items-center font-bold">
                                <p className="my-1 text-white">{template.name}</p>
                                {selectedTemplate === template.id && <p className="text-white">Selected</p>}    
                            </div>
                            <p className="text-sm mb-2 bg-gray-100 p-1 rounded-sm">{template.description}</p>
                        </div>
                    )
                })
            }
            <hr className="my-3 border border-gray-400" />
        </div>
    )
}

export default TemplateSelector