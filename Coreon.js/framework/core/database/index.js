const { Sequelize } = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize(config.database.url, {
  dialect: config.database.dialect,
  logging: config.database.logging,
  define: {
    timestamps: true,
    underscored: true,
  },
});

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const closeDatabase = async () => {
  try {
    await sequelize.close();
    console.log('Database connection has been closed successfully.');
  } catch (error) {
    console.error('Error closing the database connection:', error);
  }
};

module.exports = {
  sequelize,
  connectDatabase,
  closeDatabase,
};