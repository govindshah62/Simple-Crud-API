const jwt = require('jsonwebtoken');

module.exports.validateToken = (req, res, next) => {
  let response = {};
  try {
    if (!req.headers.authorization) {
      throw new Error('Authorization missing from header');
    }
    const token = req.headers.authorization.split('Bearer')[1].trim();
    const decoded = jwt.verify(token, process.env.SECRET_KEY || 'my-secret-key');
    //console.log('decoded', decoded);
    return next();
  } catch (error) {
    console.log('Error===', error,error.expiredAt);
    response.message = error.message;
    response.status = 401;
  }
  return res.status(response.status).send(response);
}