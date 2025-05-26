// let express = require("express");
// let router = express.Router();
// let bookingController = require("../controllers/bookingController");

// router.post("/", bookingController.createBooking);
// router.get("/", bookingController.getAllBookings);
// router.get("/:id", bookingController.getBookingById);
// router.put("/:id/status", bookingController.updateBookingStatus);
// router.delete("/:id", bookingController.deleteBooking);

// module.exports = router;


const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// CRUD routes
router.post("/", bookingController.createBooking);
router.get("/", bookingController.getAllBookings);
router.get("/:id", bookingController.getBookingById);
router.put("/:id", bookingController.updateBookingStatus);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;
