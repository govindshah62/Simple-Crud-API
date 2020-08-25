const productservice= require('../service/productservice');

module.exports.createproduct = async(req,res)=>{
    let response={};
    try {
        const resfromservice= await productservice.createproduct(req.body);
        response.status= 200;
        response.message='Prodcut created successfully';
        response.body=resfromservice;
    } catch (error) {
        console.log('something went wrong: controller:createproduct',error);
        response.status= 500;
        response.message= error.message;
        response.body={}; 
    }
    return res.status(response.status).send(response);
}

module.exports.getallproducts = async(req,res)=>{
    let response={};
    try {
        const resfromservice= await productservice.getallproducts(req.query);
        response.status= 200;
        response.message='Product fetched';
        response.body=resfromservice;
    } catch (error) {
        console.log('something went wrong: controller:getallproducts',error);
        response.status= 500;
        response.message= error.message;
        response.body={}; 
    }
    return res.status(response.status).send(response);
}
module.exports.getproductbyid = async(req,res)=>{
    let response={};
    try {
        const resfromservice= await productservice.getproductbyid(req.params);
        response.status= 200;
        response.message='Product fetched';
        response.body=resfromservice;
    } catch (error) {
        console.log('something went wrong: controller:getproductbyid',error);
        response.status= 500;
        response.message= error.message;
        response.body={}; 
    }
    return res.status(response.status).send(response);
}

module.exports.updatecontroller = async(req,res)=>{
    let response={};
    try {
        const resfromservice= await productservice.updatecontroller({
            id:req.params.id,
            updateinfo:req.body
        });
        response.status= 200;
        response.message='Product udpated';
        response.body=resfromservice;
    } catch (error) {
        console.log('something went wrong: controller:updatecontroller',error);
        response.status= 500;
        response.message= error.message;
        response.body={}; 
    }
    return res.status(response.status).send(response);
}

module.exports.deletecontroller = async(req,res)=>{
    let response={};
    try {
        const resfromservice= await productservice.deleteproduct(req.params);
        response.status= 200;
        response.message='Product delete';
        response.body=resfromservice;
    } catch (error) {
        console.log('something went wrong: controller:deletecontroller',error);
        response.status= 500;
        response.message= error.message;
        response.body={}; 
    }
    return res.status(response.status).send(response);
}