const Room = require("../models/Room");  // assuming Room model is defined properly

const roomController = {
  // Create new room
  createRoom: async (req, res) => {
    try {
      const { name, type, price, status } = req.body;

      if (!name || !type || !price) {
        return res.status(400).json({ message: "Name, type and price are required" });
      }

      // Check if room with same name exists (optional)
      const existingRoom = await Room.findOne({ name });
      if (existingRoom) {
        return res.status(409).json({ message: "Room already exists with this name" });
      }

      const newRoom = new Room({
        name,
        type,     // e.g., "Deluxe", "Suite"
        price,
        status: status || "available"  // default status
      });

      await newRoom.save();
      res.status(201).json({ message: "Room created successfully", room: newRoom });

    } catch (error) {
      res.status(500).json({ message: "Server error while creating room", error: error.message });
    }
  },

  // Get all rooms
  getAllRooms: async (req, res) => {
    try {
      const rooms = await Room.find();
      res.status(200).json({ rooms });
    } catch (error) {
      res.status(500).json({ message: "Server error while fetching rooms", error: error.message });
    }
  },

  // Get single room by id
  getRoomById: async (req, res) => {
    try {
      const roomId = req.params.id;
      const room = await Room.findById(roomId);
      if (!room) return res.status(404).json({ message: "Room not found" });

      res.status(200).json({ room });
    } catch (error) {
      res.status(500).json({ message: "Server error while fetching room", error: error.message });
    }
  },

  // Update room by id
  updateRoom: async (req, res) => {
    try {
      const roomId = req.params.id;
      const updates = req.body;

      const updatedRoom = await Room.findByIdAndUpdate(roomId, updates, { new: true });
      if (!updatedRoom) return res.status(404).json({ message: "Room not found" });

      res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
    } catch (error) {
      res.status(500).json({ message: "Server error while updating room", error: error.message });
    }
  },

  // Delete room by id
  deleteRoom: async (req, res) => {
    try {
      const roomId = req.params.id;
      const deletedRoom = await Room.findByIdAndDelete(roomId);
      if (!deletedRoom) return res.status(404).json({ message: "Room not found" });

      res.status(200).json({ message: "Room deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error while deleting room", error: error.message });
    }
  },
};

module.exports = roomController;
