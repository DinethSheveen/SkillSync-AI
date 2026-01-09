import { FaCircleUser, FaGithub } from "react-icons/fa6";
import { FiUser, FiPhone  } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiGlobe } from "react-icons/ci";

function PersonalInfo({icon,title}) {
  return (
    <div className="flex flex-col justify-between gap-3 px-2">
        {/* HEADING */}
        <div>
            <div className="flex items-center gap-2">
                <p className="border border-black rounded-full p-2">{icon}</p>
                <p className="font-bold">{title}</p>
            </div>
            <p className="text-slate-500 text-[12px]">Let’s begin with your personal information</p>
        </div>

        {/* IMAGE SECTION */}
        <label className="flex items-center gap-2 cursor-pointer px-2">
            <input type="file" accept=".jpg , .jpeg , .png" className="hidden"/>
            <FaCircleUser size={30} className="text-slate-400"/>
            <p className="text-[12px]">Upload a profile image</p>
        </label>

        {/* NAME INPUT */}
        <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-1">
                <FiUser size={15}/>
                <p className="text-[15px]">Full Name</p>
                <p className="text-red-600">*</p>
            </div>
            <input type="text" className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2"/>
        </div>

        {/* EMAIL INPUT */}
        <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-1">
                <MdOutlineMailOutline size={15}/>
                <p className="text-[15px]">Email Address</p>
                <p className="text-red-600">*</p>
            </div>
            <input type="text" className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2"/>
        </div>

        {/* PHONE NUMBER INPUT */}
        <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-1">
                <FiPhone size={15}/>
                <p className="text-[15px]">Phone Number</p>
            </div>
            <input type="text" className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2"/>
        </div>

        {/* PROFESSION INPUT */}
        <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-1">
                <IoBriefcaseOutline size={15}/>
                <p className="text-[15px]">Profession</p>
            </div>
            <input type="text" className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2"/>
        </div>

        {/* LINKEDIN INPUT */}
        <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-1">
                <SlSocialLinkedin size={15}/>
                <p className="text-[15px]">LinkedIn Profile</p>
            </div>
            <input type="text" className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2"/>
        </div>

        {/* GITHUB INPUT */}
        <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-1">
                <FaGithub size={15}/>
                <p className="text-[15px]">GitHub Profile</p>
            </div>
            <input type="text" className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2"/>
        </div>
        
        {/* PERSONAL WEBSITE INPUT */}
        <div className="flex flex-col gap-1 px-2">
            <div className="flex items-center gap-1">
                <CiGlobe size={15}/>
                <p className="text-[15px]">Personal Website</p>
            </div>
            <input type="text" className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2"/>
        </div>

        {/* SAVE BUTTON */}
        <div className="px-2">
            <button className="border border-violet-500 text-violet-800 bg-violet-300 cursor-pointer py-2 px-4 w-fit rounded-lg hover:bg-violet-400 active:bg-violet-500">Save Changes</button>
        </div>
    </div>
  )
}

export default PersonalInfo