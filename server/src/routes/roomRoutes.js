// const express = require("express");
// const router = express.Router();
// const roomController = require("../controllers/roomController");

// // Routes for room management
// router.post("/create", roomController.createRoom);
// router.get("/", roomController.getRooms);
// router.get("/:id", roomController.getRoomById);
// router.put("/:id", roomController.updateRoom);
// router.delete("/:id", roomController.deleteRoom);

// module.exports = router;




const express = require("express");
const router = express.Router();
const roomController = require("../controllers/roomController");

// Room Management Routes
router.post("/add", roomController.createRoom);       // Create room
router.get("/", roomController.getAllRooms);          // Get all rooms
router.get("/:id", roomController.getRoomById);       // Get room by ID
router.put("/:id", roomController.updateRoom);        // Update room
router.delete("/:id", roomController.deleteRoom);     // Delete room

module.exports = router;
