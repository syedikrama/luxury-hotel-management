const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

// Routes for room management
router.post("/add", roomController.addRoom);
router.get("/", roomController.getRooms);
router.get("/:id", roomController.getRoomById);
router.put("/:id", roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);

module.exports = router;
