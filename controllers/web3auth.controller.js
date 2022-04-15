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
exports.authenticate = (req, res) => {
  // TODO
  // verifySignature()

  Profiles
    .findOne({
      where: {
        address: req.body.address,
      },
    })
    .then((obj) => {
      if (obj) {
        return obj;
      }
      return Profiles.create({
        address: req.body.address,
        token: jwt.sign({
          user_address: req.body.address,
        }, 'secret'),
      });
    })
    .catch(() => {
      res.status(400).json({
        errors: 'user not found.',
      });
    })
    .then((obj) => {
      const sess = req.session;
      sess.token = obj.token;
      res.status(200).json({
        token: obj.token,
      });
    });
};

exports.logout = (req, res) => {

};
