let express = require("express");
let router = express.Router();
let guestController = require("../controllers/guestController");

// Create guest
router.post("/", guestController.createGuest);

// Get all guests
router.get("/", guestController.getAllGuests);

// Get guest by ID
router.get("/:id", guestController.getGuestById);

// Update guest
router.put("/:id", guestController.updateGuest);

// Delete guest
router.delete("/:id", guestController.deleteGuest);

module.exports = router;
