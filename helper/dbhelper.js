const mongoose = require('mongoose');

module.exports.formatdata=(data)=>{
    if(Array.isArray(data)){
        let newdatalist = [];
        for(value of data){
            newdatalist.push(value.toObject());
        }
        return newdatalist; 
    }
    return data.toObject();
}

module.exports.validateobject = (id)=>{
    if(!mongoose.Types.ObjectId.isValid(id)){
        throw new Error('invalid id');
    }
}