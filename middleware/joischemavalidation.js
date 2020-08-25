const joi= require('@hapi/joi');


const validateobjectschema =(data,schema)=>{
    const result= schema.validate(data,{convert:false});
    if(result.error){
        const errordetails= result.error.details.map(value=>{
            return{
                error:value.message,
                path: value.path
            };           
        });
        return errordetails;
    }
    return null;  
}

module.exports.validatebody=(schema)=>{
    return(req,res,next)=>{
        let response={};
        const error=validateobjectschema(req.body,schema);
        if(error){
            response.status=500;
            response.body=error;
            response.message='invalid fields';
            return res.status(response.status).send(response);


        }
        return next();

    }
}


module.exports.validateparams=(schema)=>{
    return(req,res,next)=>{
        let response={};
        const error=validateobjectschema(req.query,schema);
        if(error){
            response.status=500;
            response.body=error;
            response.message='invalid fields';
            return res.status(response.status).send(response);


        }
        return next();

    }
}