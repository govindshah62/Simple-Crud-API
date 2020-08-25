const express = require('express');
const router = express.Router();
const productcontroller = require('../controller/productcontroller');
const joischemavalidation = require('../middleware/joischemavalidation');
const productschema = require('../apischema/productschema');
const validateToken = require('../middleware/tokenvalidation');

router.post('/',
validateToken.validateToken,
joischemavalidation.validatebody(productschema.createproductschema),
productcontroller.createproduct
);

router.get('/:id',
validateToken.validateToken,
productcontroller.getproductbyid
);

router.put('/:id',
validateToken.validateToken,
joischemavalidation.validatebody(productschema.updateproductschema),
productcontroller.updatecontroller
);

router.delete('/:id',
validateToken.validateToken,
productcontroller.deletecontroller);

router.get('/',
validateToken.validateToken,
joischemavalidation.validateparams(productschema.getallproductschema),
productcontroller.getallproducts);

module.exports = router; 