module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    token: {
      type: Sequelize.STRING,
    },
    email_verified_at: {
      type: Sequelize.DATE,
    },
  });
  return User;
};
