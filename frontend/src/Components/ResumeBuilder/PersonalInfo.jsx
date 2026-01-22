import { FaCircleUser, FaGithub } from "react-icons/fa6";
import { FiUser, FiPhone  } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiGlobe, CiLocationOn } from "react-icons/ci";

function PersonalInfo({icon,title,data,setResumeData}) {

    const fields = [
        {
            key : "fullName",
            label : "Full Name",
            icon : <FiUser size={15}/>,
            required : true,
            type : "text"
        },
        {
            key : "email",
            label : "Email Address",
            icon : <MdOutlineMailOutline size={15}/>,
            required : true,
            type : "email"
        },
        {
            key : "phone",
            label : "Phone Number",
            icon : <FiPhone size={15}/>,
            required : false,
            type : "tel"
        },
        {
            key : "location",
            label : "Location",
            icon : <CiLocationOn size={15}/>,
            required : false,
            type : "text"
        },
        {
            key : "profession",
            label : "Profession",
            icon : <IoBriefcaseOutline size={15}/>,
            required : false,
            type : "text"
        },
        {
            key : "linkedin",
            label : "LinkedIn Profile",
            icon : <SlSocialLinkedin size={15}/>,
            required : false,
            type : "url"
        },
        {
            key : "github",
            label : "GitHub Profile",
            icon : <FaGithub size={15}/>,
            required : false,
            type : "url"
        },
        {
            key : "website",
            label : "Personal Website",
            icon : <CiGlobe size={15}/>,
            required : false,
            type : "url"
        }
    ]

    const handleImageUpload = (file)=>{
        const imageFile = file;
        const image = URL.createObjectURL(imageFile);
        setResumeData(prev=> ({...prev,personalInfo:{...prev.personalInfo,image:image}}))
    }

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
         <label className="flex items-center gap-2 cursor-pointer px-2 w-fit">
            <input type="file" accept=".jpg , .jpeg , .png" className="hidden" onChange={(e)=>{handleImageUpload(e.target.files[0])}}/>
            {
                data?.image?
                <img src={data?.image} alt="profile" className="w-12 h-12 rounded-full object-cover border border-slate-500"/>
                :
                <div className="flex items-center gap-1">
                    <FaCircleUser size={30} className="text-slate-500"/>
                    <p className="text-slate-600">upload a profile image</p>
                </div>
            }
        </label>

        {/* FORM FIELDS */}
        {fields.map((field)=>{
            return (
                <div key={field.key} className="flex flex-col gap-1 px-2">
                    <div className="flex items-center gap-1">
                        <p>{field.icon}</p>
                        <p>{field.label}</p>
                        <p>{field.required && <span className="text-red-600">*</span>}</p>
                    </div>

                    <input type={field.type} className="outline-none border border-slate-500 rounded-md px-2 py-1 text-sm focus:border-cyan-600 focus:border-2" value={data?.[field.key] || ""} onChange={(e)=>{setResumeData(prev=> ({...prev,resumeData : {...prev.resumeData,personalInfo : {...prev.resumeData.personalInfo,[field.key] : e.target.value}}}))}} required={field.required} placeholder={`Enter your ${field.label}`}/>
                </div>
            )
        })}
    </div>
  )
}

export default PersonalInfo


