



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
