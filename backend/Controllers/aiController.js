import openai from "../Config/ai.js";
import "dotenv/config"
import { Types } from "mongoose";
import { resumeModel } from "../Models/resumeModel.js";
import { userModel } from "../Models/userModel.js";

// SUMMARY ENHANCE
export const enhanceSummary = async(req,res)=>{

    const {userContent} = req.body

    if(!userContent){
        return res.status(400).json({message : "Fill in all required fields"})
    }

    try {
        const response = await openai.chat.completions.create({
        model: process.env.OPENAI_AI_MODEL,
        messages: [
            {   role: "system",
                content: `You are an expert in developing professional resume summaries. You should be generating a powerful summary depending on what is given to you, similar to what is in ${userContent}. The summary should only be 2 to 3 lines maximum. Do not give options, just generate one resume summary so that it could be used in the resume.` 
            },
            {
                role: "user",
                content: userContent,
            },
        ],
    });
    console.log(response.choices[0].message);
    res.status(200).json({message : response.choices[0].message})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}


// JD ENHANCE
export const enhanceJobDescription = async(req,res)=>{

    const {userContent} = req.body

    if(!userContent){
        return res.status(400).json({message : "Fill in all required fields"})
    }

    try {
        const response = await openai.chat.completions.create({
        model: process.env.OPENAI_AI_MODEL,
        messages: [
            {   role: "system",
                content: `You are an expert in developing job descriptions. You should be generating a powerful job description depending on what is given to you, similar to what is in ${userContent}. The job description should only be 2 to 3 lines maximum. Do not give options, just generate one job description so that it could be used in the resume.` 
            },
            {
                role: "user",
                content: userContent,
            },
        ],
    });
    console.log(response.choices[0].message);
    res.status(200).json({message : response.choices[0].message})
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

// UPLOAD RESUME CONTROLLER
export const uploadResume = async(req,res)=>{
    const userId = req.userId

    const {resumeTitle,resume} = req.body

    if(!resumeTitle){
        return res.status(400).json({message : "Missing resume title"})
    }
    
    if(!resume){
        return res.status(400).json({message : "Missing resume"})
    }

    if(!Types.ObjectId.isValid(userId)){
        return res.status(401).json({message : "Unauthorized user"})
    }

    try {

        const response = await openai.chat.completions.create({
        model: process.env.OPENAI_AI_MODEL,
        response_format: { type: "json_object" },
        messages: [
            {   role: "system",
                content : `You are an expert system for converting unstructured resume text into structured JSON data.

                    TASK:
                    Extract information from the resume text and map it STRICTLY into the schema below.
                    Make ${resumeTitle}, the resumeTitle.

                    RULES:
                    - Return VALID JSON only (no markdown, no explanations).
                    - Do NOT include schema metadata such as "type", "required", or "default".
                    - Match field names EXACTLY as provided.
                    - If information is missing, use empty strings "" or empty arrays [].
                    - Dates must be strings in the format: "YYYY-MM" or "YYYY-MM-DD" if available.
                    - Set isCurrent to true ONLY if the role is explicitly ongoing (e.g. "Present", "Current").

                    SCHEMA:
                    {
                    "resumeTitle": "",
                    "resumeData": {
                        "template": "classic",
                        "color": "14B8A6",
                        "public": false,
                        "personalInfo": {
                        "fullName": "",
                        "email": "",
                        "phone": "",
                        "location": "",
                        "linkedin": "",
                        "github": "",
                        "website": "",
                        "profession": "",
                        "image": ""
                        },
                        "professionalSummary": "",
                        "skills": [],
                        "experience": [
                        {
                            "company": "",
                            "position": "",
                            "start_date": "",
                            "end_date": "",
                            "description": "",
                            "isCurrent": false
                        }
                        ],
                        "education": [
                        {
                            "institution": "",
                            "degree": "",
                            "field": "",
                            "graduationDate": "",
                            "gpa": ""
                        }
                        ],
                        "projects": [
                        {
                            "name": "",
                            "type": "",
                            "description": ""
                        }
                        ]
                    }
                }`
            },
            {
                role: "user",
                content: resume,
            },
        ],
        });

        // CREATE THE RESUME WITH USER
        const newResume = await resumeModel.create({resumeTitle,user : userId}) 

        // UPDATING RESUME INFO
        const parsedResume = JSON.parse(response.choices[0].message.content)

        const updatedResume = await resumeModel.findOneAndUpdate({_id : newResume._id,user : userId},parsedResume,{new:true})

        // UPDATING USER INFORMATION
        const user = await userModel.findByIdAndUpdate(userId,{$push:{resumes : newResume._id}}) 

        // const parsedResume = JSON.parse(response.choices[0].message)
        console.log(response.choices[0].message);
        res.status(200).json({message : "Resume created successfully",resume : response.choices[0].message,newResume})
    } catch (error) {
        res.status(400).json({message : error.message})
    }
}