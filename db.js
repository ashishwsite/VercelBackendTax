var  mongoose=require('mongoose')
require('dotenv').config()
const mongourl=process.env.URL
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