module.exports = function (instanceConnection, DataTypes) {
  const Post = instanceConnection.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
  });
  return Post;
};
