let Guest = require("../models/Guest");

let guestController = {
  // Create new guest
  createGuest: async (req, res) => {
    try {
      let { firstName, lastName, email, phoneNumber, address, preferences, notes } = req.body;

      // Check for required fields
      if (!firstName || !email || !phoneNumber) {
        return res.status(400).json({ message: "First name, email, and phone number are required." });
      }

      // Check if email already exists
      let existingGuest = await Guest.findOne({ email });
      if (existingGuest) {
        return res.status(409).json({ message: "Guest with this email already exists." });
      }

      let newGuest = new Guest({
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        preferences,
        notes
      });

      await newGuest.save();
      res.status(201).json({ message: "Guest created successfully", guest: newGuest });
    } catch (error) {
      res.status(500).json({ message: "Error creating guest", error: error.message });
    }
  },

  // Get all guests
  getAllGuests: async (req, res) => {
    try {
      let guests = await Guest.find();
      res.status(200).json({ guests });
    } catch (error) {
      res.status(500).json({ message: "Error fetching guests", error: error.message });
    }
  },

  // Get guest by ID
  getGuestById: async (req, res) => {
    try {
      let guest = await Guest.findById(req.params.id);
      if (!guest) {
        return res.status(404).json({ message: "Guest not found" });
      }
      res.status(200).json({ guest });
    } catch (error) {
      res.status(500).json({ message: "Error fetching guest", error: error.message });
    }
  },

  // Update guest
  updateGuest: async (req, res) => {
    try {
      let updatedGuest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedGuest) {
        return res.status(404).json({ message: "Guest not found" });
      }
      res.status(200).json({ message: "Guest updated successfully", guest: updatedGuest });
    } catch (error) {
      res.status(500).json({ message: "Error updating guest", error: error.message });
    }
  },

  // Delete guest
  deleteGuest: async (req, res) => {
    try {
      let deletedGuest = await Guest.findByIdAndDelete(req.params.id);
      if (!deletedGuest) {
        return res.status(404).json({ message: "Guest not found" });
      }
      res.status(200).json({ message: "Guest deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting guest", error: error.message });
    }
  },
};

module.exports = guestController;
