import mongoose from "mongoose";
export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://kumbharshweta636_db_user:shweta1212@cluster0.2vhtj7f.mongodb.net/RESUMEBUILDER')
.then(() => console.log("DB CONNECTED"))
} 



