const userservice= require('../service/userservice');

module.exports.signup = async(req,res)=>{
    let response={};
    try {
        const resfromservice= await userservice.signup(req.body);
        response.status= 200;
        response.message='signedup successfully';
        response.body=resfromservice;
    } catch (error) {
        console.log('something went wrong: controller:signup',error);
        response.status= 500;
        response.message= error.message;
        response.body={}; 
    }
    return res.status(response.status).send(response);
}

module.exports.login = async(req,res)=>{
    let response={};
    try {
        const resfromservice= await userservice.login(req.body);
        response.status= 200;
        response.message='loggedin successfully';
        response.body=resfromservice;
    } catch (error) {
        console.log('something went wrong: controller:login',error);
        response.status= 500;
        response.message= error.message;
        response.body={}; 
    }
    return res.status(response.status).send(response);
}
