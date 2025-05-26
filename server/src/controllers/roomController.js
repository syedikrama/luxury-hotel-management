// let Room = require("../models/Rooms");  // assuming Room model is defined properly

// let roomController = {
//   // Create new room
//   createRoom: async (req, res) => {
//     try {
//       let { name, type, price, status } = req.body;

//       if (!name || !type || !price) {
//         return res.status(400).json({ message: "Name, type and price are required" });
//       }

//       // Check if room with same name exists (optional)
//       let existingRoom = await Room.findOne({ name });
//       if (existingRoom) {
//         return res.status(409).json({ message: "Room already exists with this name" });
//       }

//       let newRoom = new Room({
//         name,
//         type,     // e.g., "Deluxe", "Suite"
//         price,
//         status: status || "available"  // default status
//       });

//       await newRoom.save();
//       res.status(201).json({ message: "Room created successfully", room: newRoom });

//     } catch (error) {
//       res.status(500).json({ message: "Server error while creating room", error: error.message });
//     }
//   },

//   // Get all rooms
//   getAllRooms: async (req, res) => {
//     try {
//       let rooms = await Room.find();
//       res.status(200).json({ rooms });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while fetching rooms", error: error.message });
//     }
//   },

//   // Get single room by id
//   getRoomById: async (req, res) => {
//     try {
//       let roomId = req.params.id;
//       let room = await Room.findById(roomId);
//       if (!room) return res.status(404).json({ message: "Room not found" });

//       res.status(200).json({ room });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while fetching room", error: error.message });
//     }
//   },

//   // Update room by id
//   updateRoom: async (req, res) => {
//     try {
//       let roomId = req.params.id;
//       let updates = req.body;

//       let updatedRoom = await Room.findByIdAndUpdate(roomId, updates, { new: true });
//       if (!updatedRoom) return res.status(404).json({ message: "Room not found" });

//       res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while updating room", error: error.message });
//     }
//   },

//   // Delete room by id
//   deleteRoom: async (req, res) => {
//     try {
//       let roomId = req.params.id;
//       let deletedRoom = await Room.findByIdAndDelete(roomId);
//       if (!deletedRoom) return res.status(404).json({ message: "Room not found" });

//       res.status(200).json({ message: "Room deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while deleting room", error: error.message });
//     }
//   },
// };

// module.exports = roomController;





// let Room = require("../models/Rooms"); // Make sure this path is correct

// let roomController = {
//   // Create new room
//   createRoom: async (req, res) => {
//     try {
//       let { name, type, price, status } = req.body;

//       if (!name || !type || !price) {
//         return res.status(400).json({ message: "Name, type, and price are required" });
//       }

//       let existingRoom = await Room.findOne({ name });
//       if (existingRoom) {
//         return res.status(409).json({ message: "Room already exists with this name" });
//       }

//       let newRoom = new Room({
//         name,
//         type,
//         price,
//         status: status || "available"
//       });

//       await newRoom.save();
//       res.status(201).json({ message: "Room created successfully", room: newRoom });

//     } catch (error) {
//       res.status(500).json({ message: "Server error while creating room", error: error.message });
//     }
//   },

//   // Get all rooms
//   getAllRooms: async (req, res) => {
//     try {
//       let rooms = await Room.find();
//       res.status(200).json({ rooms });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while fetching rooms", error: error.message });
//     }
//   },

//   // Get single room by id
//   getRoomById: async (req, res) => {
//     try {
//       let room = await Room.findById(req.params.id);
//       if (!room) return res.status(404).json({ message: "Room not found" });

//       res.status(200).json({ room });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while fetching room", error: error.message });
//     }
//   },

//   // Update room by id
//   updateRoom: async (req, res) => {
//     try {
//       let updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       if (!updatedRoom) return res.status(404).json({ message: "Room not found" });

//       res.status(200).json({ message: "Room updated successfully", room: updatedRoom });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while updating room", error: error.message });
//     }
//   },

//   // Delete room by id
//   deleteRoom: async (req, res) => {
//     try {
//       let deletedRoom = await Room.findByIdAndDelete(req.params.id);
//       if (!deletedRoom) return res.status(404).json({ message: "Room not found" });

//       res.status(200).json({ message: "Room deleted successfully" });
//     } catch (error) {
//       res.status(500).json({ message: "Server error while deleting room", error: error.message });
//     }
//   },
// };

// module.exports = roomController;








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
