const User = require('../database/models/usermodel');
const bcrypt = require('bcryptjs');
const {formatdata}= require('../helper/dbhelper');
const jwt = require('jsonwebtoken');



module.exports.signup= async({email, password})=>{
    try{
        const user= await User.findOne({email});
        if(user){
            throw new Error('User already exist with same email');
        }
        //  bcrypt.hash(password, 12).then(async(error,hashpassword)=>{
        //     const newuser = new User({email,password:hashpassword});
        //      let result = await newuser.save();
        //      return formatdata(result);
            password= await bcrypt.hash(password, 12);
            const newuser = new User({email,password});
            let result= await newuser.save();
            return formatdata(result);

    }catch(error){
        console.log('Something went wrong:service:signup::',error);
        throw new Error(error);
    }
}

module.exports.login= async({email, password})=>{
    try{
        const user= await User.findOne({email});
        if(!user){
            throw new Error('user not found with email-id');
        }
        const isvalid= await bcrypt.compare(password,user.password);
    
        if(!isvalid){
            throw new Error('invalid password');
        }
        const token=jwt.sign({id:user._id},'my-secret-key',{expiresIn:'1d'});
    
        return {token:token};  
        //es shortcut token:token==== {token}

    }catch(error){
        console.log('Something went wrong:service:login::',error);
        throw new Error(error);
    }

}