import { WiStars } from "react-icons/wi";

function Summary({icon,title,professionalSummary,setResumeData}) {
  return (
    <div className="flex flex-col justify-between gap-3 px-2">
        {/* HEADING */}
        <div className="flex flex-col justify-between gap-3 px-2">
            <div className="flex justify-between items-center gap-2 flex-wrap">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                        <p className="border border-black rounded-full p-2">{icon}</p>
                        <p className="font-bold">{title}</p>
                    </div>
                    <p className="text-slate-500 text-[12px]">Tell us about yourself</p>
                </div>
                
                <div className="flex items-center gap-1 text-amber-600 bg-yellow-400 py-1 px-2 rounded-md opacity-80 cursor-pointer hover:opacity-100 transition-colors">
                    <WiStars size={20}/>
                    <p className="text-[14px] font-bold">AI Enhance</p>
                </div>
            </div>
        </div>

        {/* TEXTAREA */}
        <div className="flex flex-col gap-1 px-2">
            <textarea placeholder="Skilled in full-stack development, with experience in React, Node.js, and MongoDB. Adept at problem-solving and eager to contribute to dynamic teams." className="w-full h-32 resize-none outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2" value={professionalSummary || ""} onChange={(e)=> setResumeData(prev => ({...prev,resumeData : {...prev.resumeData,professionalSummary : e.target.value }}))} />

            {/* TIP */}
            <div className="text-slate-400 text-center">
                <p className="text-[12px]">Tip: Write a compelling summary that highlights your key strengths and career goals.</p>
            </div>
        </div>
    </div>
  )
}
export default Summary