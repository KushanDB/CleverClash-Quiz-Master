import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Kushan_db_user:Quiz32@cluster0.lubavlg.mongodb.net/?appName=Cluster0')   
    .then(() => {
        console.log("Connected to MongoDB");
    })
}  