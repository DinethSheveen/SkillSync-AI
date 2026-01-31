import openai from "../Config/ai.js";
import "dotenv/config"

// SUMMARY ENHANCE
export const enhanceSummary = async(req,res)=>{

    const {userContent} = req.body

    if(!userContent){
        res.status(400).json({message : "Fill in all required fields"})
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
        res.status(400).json({message : "Fill in all required fields"})
    }

    try {
        const response = await openai.chat.completions.create({
        model: process.env.OPENAI_AI_MODEL,
        messages: [
            {   role: "system",
                content: `You are an expert in developing job descriptions. You should be generating a powerful job description depending on what is given to you, similar to what is in${userContent}. The job description should only be 2 to 3 lines maximum. Do not give options, just generate one job description so that it could be used in the resume.` 
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

