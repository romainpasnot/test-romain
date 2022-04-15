const faker = require('faker');
const jwt = require('jsonwebtoken');

const db = require('../models');

const Profiles = db.profiles;

/**
 * controller for signature
 */
exports.signature = (req, res) => {
  const nonce = faker.random.alpha(10);
  const message = 'Sign this message to confirm you own this wallet address. This action will not cost any gas fees.';

  req.session.none = message;

  res.status(200).json({
    message,
    nonce,
  });
};

/**
 * controller for authenticate
 */
exports.authenticate = async (req, res) => {
  // TODO
  // verifySignature()
  try {
    const [user, created] = await Profiles
      .findOrCreate({
        where: {
          address: req.body.address,
        },
        defaults: {
          token: jwt.sign({
            user_address: req.body.address,
          }, 'secret'),
        }
      });

      const sess = req.session;
      sess.token = user.token;
      res.status(200).json({
        token: user.token,
      });
  } catch (err) {
    return res.status(500).json({
      errors: 'error'
    });
  }
};

exports.logout = (req, res) => {

};
