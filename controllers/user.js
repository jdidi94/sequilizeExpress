const { id } = require("date-fns/locale");
const { User } = require("../database/main");
module.exports.getAllUsers = async (req, res) => {
  //   res.send("User route is working");
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    // throw error;
    res.status(500).send("Error retrieving users");
  }
};

module.exports.addUser = async (req, res) => {
  console.log("req body", req.body);
  //   res.send("Add user route is working");
  //   {
  //     firstName: 'jdidi',
  //     lastName: "daoud",
  //   },
  try {
    const user = await User.create(req.body);
    res.status(201).send(user);
  } catch (error) {
    throw error;
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(203).send(user);
  } catch (error) {
    throw error;
  }
};
module.exports.deleteUser = async (req, res) => {
  console.log("req params", req.params);
  //   res.send("Delete user route is working");
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(203).send("User deleted");
  } catch (error) {
    throw error;
  }
};
