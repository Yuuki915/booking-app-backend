const router = require("express").Router();
const {
  createRoom,
  deleteRoom,
  getRoom,
  getAllRooms,
  updateRoom,
  updateRoomAvailability,
} = require("../controller/room.js");
const { verifyAdmin } = require("../utils/verifyToken.js");

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getAllRooms);

module.exports = router;
