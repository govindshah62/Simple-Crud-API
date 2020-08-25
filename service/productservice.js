const Product = require('../database/models/productmodels');
const {formatdata, validateobject } = require('../helper/dbhelper');


module.exports.createproduct = async(servicedata)=>{
    try {
        let product =new Product({ ...servicedata });
        let result =  await product.save();
        return formatdata(result);
    } catch (error) {
        console.log('something went wrong:service:createproduct',error);
        throw new Error(error);        
    }
} 

module.exports.getallproducts = async({skip=0,limit=10})=>{
    try {
        let products =await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
    
        return formatdata(products); 
    } catch (error) {
        console.log('something went wrong:service:getallproducts',error);
        throw new Error(error);        
    }
} 


module.exports.getproductbyid = async({id})=>{
    try {
        validateobject(id); 
        let product =await Product.findById(id);
        if(!product){
            throw new Error('no Product with that id');
        }
        return formatdata(product); 
    } catch (error) {
        console.log('something went wrong:service:getproductbyid::',error);
        throw new Error(error);        
    }
} 

module.exports.updatecontroller = async({id,updateinfo}) => {
    try {
        
        validateobject(id); 
        let product =await Product.findOneAndUpdate(
            {_id: id},
            updateinfo,
            {new:true}
        )
        if(!product){
            throw new error('Product not found');
        }
        return formatdata(product); 
    } catch (error) {
        console.log('something went wrong:service:updatecontroller',error);
        throw new Error(error);        
    }
} 

module.exports.deleteproduct = async({id}) => {
    try {
        
        validateobject(id); 
        let product =await Product.findByIdAndDelete(id);
        if(!product){
            throw new error('Product not found');
        }
        return formatdata(product); 
    } catch (error) {
        console.log('something went wrong:service:deleteproduct',error);
        throw new Error(error);        
    }
} 