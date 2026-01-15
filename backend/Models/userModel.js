import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        minLength : 5
    },
    email : {
        type : String,
        required : true,
        unique : true,
        sparse : true
    },
    password : {
        type : String,
        required : true,
        minLength : 5
    }
},{timestamps : true})

export const userModel = mongoose.model("user",userSchema)