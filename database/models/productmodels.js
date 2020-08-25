const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    brand: String, 
    price : Number
      
},{
    timestamps: true,
    toObject: {
        transform : function(doc,ret,options){
            ret.id=ret._id;
            delete ret._id;
            delete ret.__v;
            return ret; 
            
        }
    }
});
module.exports=mongoose.model('Product',productschema);