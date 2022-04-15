const db = require('../../models');

const Profiles = db.profiles;

/**
 * controller for find or create profile
 */
exports.find = (req, res) => {
  Profiles
    .findOne({
      where: {
        token: req.session.token,
      },
    })
    .then((obj) => {
      res.status(200).json({
        name: obj.name,
        email: obj.email,
      });
    })
    .catch(() => {
      res.status(400).json({
        errors: 'user not found.',
      });
    });
};

/**
 * controller update profile
 */
exports.update = (req, res) => {
  Profiles
    .update({
      name: req.body.name,
      email: req.body.email,
    }, {
      where: {
        token: req.session.token,
      },
    })
    .then(() => {
      res.status(200).json('Updated');
    })
    .catch(() => {
      res.status(400).json({
        errors: 'user not found.',
      });
    });
};
