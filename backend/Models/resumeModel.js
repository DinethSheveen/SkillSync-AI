import mongoose, { Types } from "mongoose";

const resumeSchema = mongoose.Schema({
    user : {
        type : Types.ObjectId,
        ref  : "user",
        required : true
    },
    resumeTitle : {
        type : String,
        required : true
    },
    template : {
        type : String,
        default : "classic"
    },
    color : {
        type : String,
        default : "14B8A6"
    },
    public : {
        type : Boolean,
        default : false
    },
    personalInfo : {
        fullName : {type : String},
        email : {type : String},
        phone : {type : String},
        location : {type : String},
        linkedin : {type : String},
        github : {type : String},
        website : {type : String},
        profession : {type : String},
        image : {type : String}
    },
    personalSummary : {
        type : String
    },
    skills : [{type : String}],
    experience : [
        {
            company : {type : String},
            position : {type : String},
            start_date : {type : String},
            end_date : {type : String},
            description : {type : String},
            isCurrent : {type : Boolean,default : false}
        }
    ],
    education : [
        {
            institution : {type : String},
            degree : {type : String},
            field : {type : String},
            graduationDate : {type : String},
            gpa : {type : String}
        }
    ],
    projects : [
        {
            name : {type : String},
            type : {type : String},
            description : {type : String},
        }
    ],
},{timestamps:true})

export const resumeModel = mongoose.model("resume",resumeSchema)