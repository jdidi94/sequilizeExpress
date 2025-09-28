const { Sequelize, DataTypes } = require("sequelize");
// create a connection instance
const instanceConnection = new Sequelize("myblogs", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
// Test the connection
async function testConnection() {
  try {
    await instanceConnection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
const User = require("./models/user")(instanceConnection, DataTypes);
const Post = require("./models/post")(instanceConnection, DataTypes);
// const Favorites = require("./models/favorites")(instanceConnection, DataTypes);
// Associations one to many
User.hasMany(Post);
Post.belongsTo(User);

// Many to Many
// User.belongsToMany(Post, { through: Favorites, as: "favoritedPosts" });
// Post.belongsToMany(User, { through: Favorites, as: "postFavoritedBy" });

// Sync all defined models to the DB
instanceConnection
  .sync({ alter: true })
  .then((result) => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = { User, Post };
