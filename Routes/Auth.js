const  express=require('express')
const User=require('../Modal/User')
const router=express.Router();

router.get('/name',async(req,res)=>{
  return res.json({"name":"ramsashhish"})
})
router.get('/admin',async(req,res)=>{
  let userd=await User .find()
    return res.json(userd)
})
router.post('/admin',async(req,res)=>{
  
  try{
  // console.log(req.body.email);
  if(req.body.email==="1508ramashish@gmail.com" && req.body.password==="12345678")
  {
    let user=await User .find()
    return res.json(user)
  }
  else return res.json({"success":"false"});
  }
  catch(err){
    res.json(err.message)
  }
  
})
// /contact page se aa jaega jab request aayega 
router.post('/contact', async(req,res)=>{
    var bodyData=req.body
    console.log("req body data ",bodyData)
    // let user = await User.findOne({ email: req.body.email });
    // if (user) {
    //   return res.status(400).json({ "success":"false"  })
    // }
   const user = await User.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        state:req.body.state
      });
      const data = {
        user: {
          id: user.id
        }
      }
    return res.json({"success":"true",user})
})
module.exports=router