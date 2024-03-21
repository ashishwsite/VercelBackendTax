var  mongoose=require('mongoose')
const URL=process.env.URL
const mongooseUrl=URL
var connectMongoose=async()=>{
    await mongoose.connect(mongooseUrl);
}
// module.exports=connectMongoose;
connectMongoose();