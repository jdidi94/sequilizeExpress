module.exports = function (instanceConnection, DataTypes) {
  const Favorites = instanceConnection.define("Favorites", {});
  return Favorites;
};
