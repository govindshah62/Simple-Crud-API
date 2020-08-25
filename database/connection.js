const mongoose = require('mongoose');

module.exports=async()=>{
    try {
        await mongoose.connect('mongodb://localhost/apidb',{useNewUrlParser:true,useUnifiedTopology: true});
        console.log('Database connected');
    } catch (error) {
       console.log('Database connectivity error',error); 
       throw new Error(error);
    }   
}