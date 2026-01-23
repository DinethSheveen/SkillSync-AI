import { Types } from "mongoose"
import { resumeModel } from "../Models/resumeModel.js"
import { userModel } from "../Models/userModel.js"

// CREATE A RESUME
export const createResume = async(req,res)=>{
    try {
        const userId = req.userId

        // RESUME TITLE
        const {resumeTitle} = req.body

        if(!resumeTitle){
            return res.status(400).json({message : "Resume Title is Required"})
        }

        // CREATING THE NEW RESUME
        const newResume = await resumeModel.create({resumeTitle,user : userId})

        // ADDING THE NEW RESUME TO THE USER'S RESUME LIST
        const updatedUser = await userModel.findByIdAndUpdate(userId,{$push : {resumes : newResume._id}})

        if(!updatedUser){
            return res.status(404).json({message : "Invalid user id"})
        }

        res.status(201).json({message : "Resume created successfully.",newResume})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// RETRIEVE RESUMES OF THE USER
export const getResume = async(req,res)=>{
    try {
        const userId = req.userId

        const resumes = await resumeModel.find({user : userId})

        if(!resumes){
            return res.status(400).json({message : "No resumes created yet..."})
        }

        res.status(200).json({resumes})

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// RERIEVE RESUME BY ID
export const getResumeById = async(req,res)=>{
    const userId = req.userId
    const {resumeId} = req.params

    // IF THE RESUME IF IS INVALID
    if(!resumeId || !Types.ObjectId.isValid(resumeId)){
        return res.status(404).json({message : "Invalid resume id"})
    }

    try {
        // IF THE RESUME ID IS VALID
        const resume = await resumeModel.findById({_id : resumeId, user : userId })

        res.status(200).json({resume})
    } catch (error) {
        res.status(500).json({message : "Server Error"})
    }

}

// EDIT RESUME TITLE ENDPOINT
export const updateTitle = async(req,res)=>{
    try {
        const userId = req.userId
        const {resumeId} = req.params
        const {resumeTitle} = req.body

        // IF THE RESUME IF IS INVALID
        if(!resumeId || !Types.ObjectId.isValid(resumeId)){
            return res.status(404).json({message : "Invalid resume id"})
        }        
        
        const resume = await resumeModel.findByIdAndUpdate({_id:resumeId,user:userId},{resumeTitle})

        res.status(200).json({message : "Resume title changed successfully",resume})

    } catch (error) {
        res.status(500).json({message : error.message})
    }
} 

// UPDATE RESUME
export const updateResume = async(req,res)=>{
    try {
        const userId = req.userId
        const {resumeId} = req.params
        const resumeData = req.body

        if(!resumeId || !Types.ObjectId.isValid(resumeId)){
            return res.status(404).json({message : "Invalid resume id"})
        }        
        
        // IF THE REQUIRED FIELDS ARE NOT FILLED
        
        if(!resumeData?.resumeData?.personalInfo?.fullName || !resumeData?.resumeData?.personalInfo?.email){
            return res.status(400).json({message : "Fill in the required fields to save the resume"})
        }

        const resume = await resumeModel.findByIdAndUpdate({_id : resumeId,user : userId},resumeData,{new:true})

        if(!resume){
            return res.status(404).json({message : "Resume not found"})
        }

        res.status(200).json({message : "Resume updated successfully",resume})

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// DELETE RESUME
export const deleteResume = async(req,res)=>{
    try {
        const userId = req.userId

        const {resumeId} = req.params

        // DELETING THE RESUME ID FROM THE RESUME MODEL
        const resume = await resumeModel.deleteOne({_id : resumeId})

        // REMOVING THE RESUME FROM THE USER'S RESUMES 
        const updatedUser = await userModel.findByIdAndUpdate(userId,{$pull : {resumes : resumeId} })
        
        if(!updatedUser){
            return res.status(404).json({message : "Invalid user id"})
        }

        res.status(200).json({message : "Resume deleted successfully"})

    } catch (error) {
        res.status(500).json({message : error.message})
    }
}
