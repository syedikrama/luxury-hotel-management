let Reservation = require("../models/Reservations");

let reservationController = {
  createReservation: async (req, res) => {
    try {
      let {
        guest,
        guestName,
        guestEmail,
        phone,
        room,
        checkInDate,
        checkOutDate,
        status,
        numberOfGuests,
        paymentStatus,
        totalAmount,
        specialRequests,
      } = req.body;

      // Validation
      if (!guestName || !guestEmail || !phone || !room || !checkInDate || !checkOutDate || !totalAmount) {
        return res.status(400).json({ message: "Required fields missing." });
      }

      let newReservation = new Reservation({
        guest,
        guestName,
        guestEmail,
        phone,
        room,
        checkInDate,
        checkOutDate,
        status,
        numberOfGuests,
        paymentStatus,
        totalAmount,
        specialRequests,
      });

      let savedReservation = await newReservation.save();
      res.status(201).json(savedReservation);
    } catch (error) {
      res.status(500).json({ message: "Error creating reservation.", error: error.message });
    }
  },

  getReservations: async (req, res) => {
    try {
      let reservations = await Reservation.find()
        .populate("guest", "name email")
        .populate("room", "roomNumber roomType");
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ message: "Error fetching reservations.", error: error.message });
    }
  },

  getReservationById: async (req, res) => {
    try {
      let reservation = await Reservation.findById(req.params.id)
        .populate("guest", "name email")
        .populate("room", "roomNumber roomType");
      if (!reservation) return res.status(404).json({ message: "Reservation not found." });
      res.status(200).json(reservation);
    } catch (error) {
      res.status(500).json({ message: "Error fetching reservation.", error: error.message });
    }
  },

  updateReservation: async (req, res) => {
    try {
      let updatedReservation = await Reservation.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedReservation) return res.status(404).json({ message: "Reservation not found." });
      res.status(200).json(updatedReservation);
    } catch (error) {
      res.status(500).json({ message: "Error updating reservation.", error: error.message });
    }
  },

  deleteReservation: async (req, res) => {
    try {
      let deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
      if (!deletedReservation) return res.status(404).json({ message: "Reservation not found." });
      res.status(200).json({ message: "Reservation deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Error deleting reservation.", error: error.message });
    }
  },
};

module.exports = reservationController;
