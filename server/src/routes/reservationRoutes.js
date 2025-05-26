let express = require("express");
let router = express.Router();
let reservationController = require("../controllers/reservationsController");

router.post("/", reservationController.createReservation);
router.get("/", reservationController.getReservations);
router.get("/:id", reservationController.getReservationById);
router.put("/:id", reservationController.updateReservation);
router.delete("/:id", reservationController.deleteReservation);

module.exports = router;
