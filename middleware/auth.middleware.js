const jwt = require('jsonwebtoken');

/**
 * middleware to check jwt token
 */
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secret');
    if (typeof (decodedToken.user_address) === 'undefined' && decodedToken.user_address === null) {
      throw new Error('Unauthorized');
    } else {
      next();
    }
  } catch {
    res.status(401).json('Unauthorized');
  }
};
