const express = require('express');
const router= express.Router();
const usercontroller= require('../controller/usercontroller');
const joischemavalidation = require('../middleware/joischemavalidation');
const userschema= require('../apischema/userschema')


router.post('/signup',
joischemavalidation.validatebody(userschema.signupschema),
usercontroller.signup);


router.post('/login',
joischemavalidation.validatebody(userschema.loginschema),
usercontroller.login);

module.exports = router;
