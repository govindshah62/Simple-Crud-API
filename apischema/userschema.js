const joi=require('@hapi/joi');

module.exports.signupschema=joi.object().keys({
    email:joi.string().required(),
    password:joi.string().required()
});

module.exports.loginschema=joi.object().keys({
    email:joi.string().required(),
    password:joi.string().required()
});