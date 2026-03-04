import mongoose, { mongo } from "mongoose";        
const UserSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    email :{
        type : String,
        required: true,
        unique: true
    },
    password :{
        type : String,
        // here I changed the required truested to true 
        required : true
    },
},
    {
        timestamps : true
    }
)

export default mongoose.model('User', UserSchema);  