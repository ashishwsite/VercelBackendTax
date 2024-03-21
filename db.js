var  mongoose=require('mongoose')
const mongooseUrl='mongodb+srv://ashish:12345@cluster0.g45nrog.mongodb.net/texdb'
var connectMongoose=async()=>{
    await mongoose.connect(mongooseUrl);
    
}
// module.exports=connectMongoose;
connectMongoose();