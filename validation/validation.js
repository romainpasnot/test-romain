const {
  check,
  validationResult,
} = require('express-validator');

/**
 * validate new address + signature
 */
exports.authenticate = [
  check('address').isLength({
    min: 1,
  }),
  check('signature').isLength({
    min: 1,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    next();
  },
];

/**
 * validate update profile
 */
exports.updateProfile = [
  check('name').isLength({
    min: 1,
  }),
  check('email').isLength({
    min: 1,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    next();
  },
];
