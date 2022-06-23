const router = require("express").Router();

const {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} = require("../controller/user");
const {
  verifyAdmin,
  verifyToken,
  verifyUser,
} = require("../utils/verifyToken");

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin, getAllUsers);

module.exports = router;
