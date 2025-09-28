const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
router.get("/getAll", getAllUsers);
router.post("/add", addUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
