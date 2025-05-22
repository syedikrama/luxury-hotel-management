const Booking = require("../models/Booking");

const bookingController = {
  createBooking: async (req, res) => {
    try {
      const {
        guest,
        room,
        checkInDate,
        checkOutDate,
        totalAmount,
        additionalServices,
        createdBy,
      } = req.body;

      if (!guest || !room || !checkInDate || !checkOutDate || !totalAmount) {
        return res.status(400).json({ message: "Required fields missing." });
      }

      const newBooking = new Booking({
        guest,
        room,
        checkInDate,
        checkOutDate,
        totalAmount,
        additionalServices,
        createdBy,
      });

      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } catch (error) {
      res.status(500).json({ message: "Booking creation failed.", error: error.message });
    }
  },

  getAllBookings: async (req, res) => {
    try {
      const bookings = await Booking.find()
        .populate("guest", "name email")
        .populate("room")
        .populate("createdBy", "name email");
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings.", error: error.message });
    }
  },

  getBookingById: async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id)
        .populate("guest", "name email")
        .populate("room")
        .populate("createdBy", "name email");
      if (!booking) return res.status(404).json({ message: "Booking not found." });
      res.status(200).json(booking);
    } catch (error) {
      res.status(500).json({ message: "Error fetching booking.", error: error.message });
    }
  },

  updateBookingStatus: async (req, res) => {
    try {
      const { status, paymentStatus, invoiceGenerated } = req.body;

      const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        { status, paymentStatus, invoiceGenerated },
        { new: true }
      );

      if (!updatedBooking) return res.status(404).json({ message: "Booking not found." });

      res.status(200).json(updatedBooking);
    } catch (error) {
      res.status(500).json({ message: "Failed to update booking.", error: error.message });
    }
  },

  deleteBooking: async (req, res) => {
    try {
      const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
      if (!deletedBooking) return res.status(404).json({ message: "Booking not found." });
      res.status(200).json({ message: "Booking deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete booking.", error: error.message });
    }
  },
};

module.exports = bookingController;
