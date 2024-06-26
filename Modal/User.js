const mongoose = require('mongoose');
const { Schema } = mongoose;
// create user object/modal
// UserSchema is object name , new Schema is intiall a object taking argument as constructor 
const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
        unique: true,
    },
    email:{
        type: String,
    },
    state:{
  type:String,
  
  
    },
    date:{
        type: Date,
        default: Date.now
    },
  });
  // mongose.modal(modalName,Shema)  it make a model from give schema 
  const User = mongoose.model('users', UserSchema);
  // here User is model which is expoerted
  // UserSchema ko user name se export karo 
  module.exports = User;