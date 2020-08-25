const joi= require('@hapi/joi');

module.exports.createproductschema= joi.object().keys({
    name:joi.string().required(),
    price:joi.number().required(),
    brand: joi.string().required()
})

module.exports.getallproductschema = joi.object().keys({
    skip: joi.string(),
    limit: joi.string()
})

module.exports.updateproductschema = joi.object().keys({
    name:joi.string(),
    price:joi.number(),
    brand: joi.string()
})