var  mongoose=require('mongoose')
require('dotenv').config()
// const mongourl=process.env.URL
const mongourl='mongodb+srv://ashish:12345@cluster0.g45nrog.mongodb.net/texdb'

// console.log(mongourl)
var connectMongoose=async()=>{
    try {
        await mongoose.connect(mongourl);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}
// module.exports=connectMongoose;
connectMongoose();