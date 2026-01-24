import axios from "axios"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

function SaveButton({resumeData}) {

  const {resumeId} = useParams()     

  const saveResumeData = async(e) =>{
    e.preventDefault()
    try {

      const response = await axios.put(`http://localhost:3000/api/resumes/update/${resumeId}`,resumeData,{headers : {Authorization : localStorage.getItem("token")}})
      toast.success(response?.data?.message);      
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  }

  return (
    // SAVE BUTTON 
    <div onClick={saveResumeData} className="my-2 w-fit">
        <button className="border border-violet-500 text-violet-800 bg-violet-300 cursor-pointer py-2 px-4 w-fit rounded-lg hover:bg-violet-400 active:bg-violet-500">Save Changes</button>
    </div>
  )
}

export default SaveButton


