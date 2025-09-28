const { Sequelize, DataTypes } = require("sequelize");
const instanceConnection = new Sequelize("myblogs", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
async function testConnection() {
  try {
    await instanceConnection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
const User = instanceConnection.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);
instanceConnection
  .sync()
  .then((result) => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = { User };
