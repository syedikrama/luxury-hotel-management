// let express = require("express");
// let router = express.Router();
// let roomController = require("../controllers/roomController");

// // Routes for room management
// router.post("/create", roomController.createRoom);
// router.get("/", roomController.getRooms);
// router.get("/:id", roomController.getRoomById);
// router.put("/:id", roomController.updateRoom);
// router.delete("/:id", roomController.deleteRoom);

// module.exports = router;




// let express = require("express");
// let router = express.Router();
// let roomController = require("../controllers/roomController");

// // Room Management Routes
// router.post("/add", roomController.createRoom);       // Create room
// router.get("/", roomController.getAllRooms);          // Get all rooms
// router.get("/:id", roomController.getRoomById);       // Get room by ID
// router.put("/:id", roomController.updateRoom);        // Update room
// router.delete("/:id", roomController.deleteRoom);     // Delete room

// module.exports = router;





let express = require("express");
let router = express.Router();
let roomController = require("../controllers/roomController");

router.post("/", roomController.createRoom);
router.get("/", roomController.getAllRooms);
router.get("/:id", roomController.getRoomById);
router.put("/:id", roomController.updateRoom);
router.delete("/:id", roomController.deleteRoom);
router.post("/:id/assign-guest", roomController.assignGuestToRoom);
router.post("/:id/checkout", roomController.checkoutRoom);

module.exports = router;
