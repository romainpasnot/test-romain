const db = require('../../models');

const Profiles = db.profiles;

/**
 * controller for find or create profile
 */
exports.find = async (req, res) => {
  try {
    const user = await Profiles
      .findOne({
        where: {
          token: req.session.token,
        },
      });

      res.status(200).json({
        name: user.name,
        email: user.email,
      });
    } catch (err) {
      return res.status(500).json({
        errors: 'error'
      });
    }
};

/**
 * controller update profile
 */
exports.update = async (req, res) => {
  try {
    const user = await Profiles
      .update({
        name: req.body.name,
        email: req.body.email,
      }, {
        where: {
          token: req.session.token,
        },
      })
      res.status(200).json('Updated');
    } catch (err) {
      console.log(err)
      return res.status(500).json({
        errors: 'error'
      });
    }
};
