import { BsGraphUp } from "react-icons/bs";
import { LuFingerprint } from "react-icons/lu";
import { TbReportSearch } from "react-icons/tb";
import Title from "./Title";

function Features() {
  return (
    <div id="features" className="my-10 flex flex-col items-center justify-center scroll-mt-5">
        <Title  small_title="Simple Procedure" title="Craft your Resume" description="Create a professional resume in minutes with our easy-to-use builder."/>
        
        <div className="flex items-center justify-center flex-wrap gap-6 mt-10 px-4 md:px-0">
            <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-violet-200 gap-6 max-w-sm transition-all duration-300 hover:-translate-y-2.5 hover:bg-purple-200 hover:border-purple-300">
                <div className="p-6 aspect-square bg-violet-100 rounded-full">
                    <BsGraphUp size={30}/>
                </div>
                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-700">AI Resume Insights</h3>
                    <p className="text-sm text-slate-600">Get instant, intelligent feedback to optimize your resume as you build.</p>
                </div>
            </div>
            <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-green-200 gap-6 max-w-sm transition-all duration-300 hover:-translate-y-2.5 hover:bg-green-200 hover:border-green-300">
                <div className="p-6 aspect-square bg-green-100 rounded-full">
                    <LuFingerprint size={30}/>
                </div>
                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-700">Privacy-First Protection</h3>
                    <p className="text-sm text-slate-600">Your resume data is encrypted, securely stored, and never shared without consent.</p>
                </div>
            </div>
            <div className="flex flex-col text-center items-center justify-center rounded-xl p-6 border border-orange-200 gap-6 max-w-sm transition-all duration-300 hover:-translate-y-2.5 hover:bg-orange-200 hover:border-orange-300">
                <div className="p-6 aspect-square bg-orange-100 rounded-full">
                    <TbReportSearch size={30}/>
                </div>
                <div className="space-y-2">
                    <h3 className="text-base font-semibold text-slate-700">Tailored Resume Versions</h3>
                    <p className="text-sm text-slate-600">Produce consistent, professional resume variants for different roles and industries.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features