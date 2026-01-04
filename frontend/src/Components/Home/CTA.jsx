import { GoRocket } from "react-icons/go";

function CTA() {
   return (
        <div className="my-10 max-w-5xl mx-2 md:mx-auto p-px rounded-2xl bg-linear-to-r from-purple-600/20 to-blue-500/30">
            <div className="flex flex-col items-center justify-center text-center py-12 md:py-16 rounded-[15px] bg-linear-to-r from-[#F3EAFF] to-[#E1EFFF]">  
                <div className="flex items-center justify-center bg-white px-3 py-1.5 shadow gap-1 rounded-full text-xs">
                    <GoRocket size={14} className="fill-[#5C67FF]"/>
                    <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-medium">Trusted by Experts</span>
                </div>
                <h2 className="text-2xl md:text-4xl font-medium mt-2 leading-[1.2]">
                    Unlock Your Potential with <br />
                    <span className="bg-linear-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">AI Driven </span> 
                    & Proven Results!
                </h2>
                <p className="text-slate-500 mt-2 max-w-lg max-md:text-sm">Achieve your goals faster with personalized strategies, hands-on support, and results that speak for themselves.</p>
                <button type="button" className="bg-linear-to-r from-purple-600 to-blue-500 text-white text-sm px-5 py-2.5 rounded-xl font-medium mt-4 hover:scale-105 active:scale-95 transition-all duration-300"> 
                    Get Started Today
                </button>
            </div>
        </div>
    )
}

export default CTA