


let Room = require("../models/Rooms");

let roomController = {
  // ✅ Create new room
  createRoom: async (req, res) => {
    try {
      let {
        roomNumber,
        name,
        type,
        pricePerNight,
        floor,
        isSmokingAllowed,
        description,
        features,
        images,
        status
      } = req.body;

      if (!roomNumber || !name || !type || !pricePerNight || floor === undefined) {
        return res.status(400).json({ message: "roomNumber, name, type, pricePerNight, and floor are required" });
      }

      let existingRoom = await Room.findOne({ roomNumber });
      if (existingRoom) {
        return res.status(409).json({ message: "Room already exists with this number" });
      }

      let newRoom = new Room({
        roomNumber,
        name,
        type,
        pricePerNight,
        floor,
        isSmokingAllowed,
        description,
        features,
        images,
        status: status || "available"
      });

      await newRoom.save();
      res.status(201).json({ message: "Room created successfully", room: newRoom });

    } catch (error) {
      res.status(500).json({ message: "Error creating room", error: error.message });
    }
  },

  // ✅ Get all rooms
  getAllRooms: async (req, res) => {
    try {
      let rooms = await Room.find().populate("currentGuestId", "fullName email");
      res.status(200).json({ rooms });
    } catch (error) {
      res.status(500).json({ message: "Error fetching rooms", error: error.message });
    }
  },

  // ✅ Get room by ID
  getRoomById: async (req, res) => {
    try {
      let room = await Room.findById(req.params.id).populate("currentGuestId");
      if (!room) return res.status(404).json({ message: "Room not found" });
      res.status(200).json({ room });
    } catch (error) {
      res.status(500).json({ message: "Error fetching room", error: error.message });
    }
  },

  // ✅ Update room by ID
  updateRoom: async (req, res) => {
    try {
      let updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedRoom) return res.status(404).json({ message: "Room not found" });

      res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
    } catch (error) {
      res.status(500).json({ message: "Error updating room", error: error.message });
    }
  },

  // ✅ Delete room
  deleteRoom: async (req, res) => {
    try {
      let deleted = await Room.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ message: "Room not found" });

      res.status(200).json({ message: "Room deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting room", error: error.message });
    }
  },

  // ✅ Assign guest to room (Check-in)
  assignGuestToRoom: async (req, res) => {
    try {
      let { guestId } = req.body;
      let room = await Room.findById(req.params.id);
      if (!room) return res.status(404).json({ message: "Room not found" });

      if (room.status === "occupied") {
        return res.status(400).json({ message: "Room is already occupied" });
      }

      room.currentGuestId = guestId;
      room.status = "occupied";
      await room.save();

      res.status(200).json({ message: "Guest assigned successfully", room });
    } catch (error) {
      res.status(500).json({ message: "Error assigning guest", error: error.message });
    }
  },

  // ✅ Checkout (Vacate room)
  checkoutRoom: async (req, res) => {
    try {
      let room = await Room.findById(req.params.id);
      if (!room) return res.status(404).json({ message: "Room not found" });

      room.currentGuestId = null;
      room.status = "cleaning";
      await room.save();

      res.status(200).json({ message: "Room checked out, sent for cleaning", room });
    } catch (error) {
      res.status(500).json({ message: "Error during checkout", error: error.message });
    }
  }
};

module.exports = roomController;
