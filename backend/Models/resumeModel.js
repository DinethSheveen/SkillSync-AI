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
        fullName : {type : String,default:""},
        email : {type : String,default:""},
        phone : {type : String,default:""},
        location : {type : String,default:""},
        linkedin : {type : String,default:""},
        github : {type : String,default:""},
        website : {type : String,default:""},
        profession : {type : String,default:""},
        image : {type : String,default:""}
    },
    professionalSummary : {
        type : String,default:""
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
    project : [
        {
            name : {type : String},
            type : {type : String},
            description : {type : String},
        }
    ],
},{timestamps:true})

export const resumeModel = mongoose.model("resume",resumeSchema)