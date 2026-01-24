function ColorSelector({setResumeData,resumeColor,setColorMenu,colorMenu}) {

    const colors = [
        { name: "Cyan", value: "#14B8A6" },
        { name: "Blue", value: "#3B82F6" },
        { name: "Green", value: "#22C55E" },
        { name: "Purple", value: "#8B5CF6" },
        { name: "Pink", value: "#EC4899" },
        { name: "Red", value: "#EF4444" },
        { name: "Orange", value: "#F97316" },
        { name: "Yellow", value: "#EAB308" }
    ]
  
    return (
        colorMenu &&
            <div className="absolute top-10 left-0 right-0 bg-gray-200 rounded-md shadow-lg z-20">
                <hr className="my-3 border border-gray-400" />
                {
                    colors.map((color)=>{
                        return (
                            <div key={color.value} onClick={()=>{setColorMenu(prev=>!prev); setResumeData(prev => ({...prev,resumeData:{...prev.resumeData,color : color.value}}))}} className={` m-1 p-1 rounded-md ${resumeColor === color.value ? "border-2 border-gray-900":"opacity-50 cursor-pointer"}`} style={{backgroundColor : color.value}}>
                                <div className="flex justify-between items-center font-bold">
                                    <p className="my-1 text-white">{color.name}</p>
                                    {resumeColor === color.value && <p className="text-white">Selected</p>}    
                                </div>
                            </div>
                        )
                    })
                }
                <hr className="my-3 border border-gray-400" />
            </div>
  )
}

export default ColorSelector