module.exports = (sequelize, Sequelize) => {
  const Wallet = sequelize.define('wallet', {
    address: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    public: {
      type: Sequelize.BOOLEAN,
    },
    slug: {
      type: Sequelize.STRING,
    },
  });
  return Wallet;
};
