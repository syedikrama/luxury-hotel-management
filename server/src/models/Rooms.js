// let mongoose = require("mongoose");

// let roomSchema = new mongoose.Schema({
//     roomNumber: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     type: {
//         type: String,
//         enum: ["single", "double", "suite", "deluxe", "executive"],
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ["available", "occupied", "maintenance", "cleaning"],
//         default: "available",
//     },
//     pricePerNight: {
//         type: Number,
//         required: true,
//     },
//     isSmokingAllowed: {
//         type: Boolean,
//         default: false,
//     },
//     floor: {
//         type: Number,
//         required: true,
//     },
//     description: {
//         type: String,
//         default: "",
//     },
//     features: {
//         type: [String], // Example: ["WiFi", "TV", "Mini Bar", "Sea View"]
//         default: [],
//     },
//     images: {
//         type: [String], // URLs to room images
//         default: [],
//     },
//     currentGuestId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Guest", // You should have a Guest model too
//         default: null,
//     },
// }, {
//     timestamps: true,
// });

// module.exports = mongoose.model("Room", roomSchema);





let mongoose = require("mongoose");

let roomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    enum: ["single", "double", "suite", "deluxe", "executive"],
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  isSmokingAllowed: {
    type: Boolean,
    default: false,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["available", "occupied", "maintenance", "cleaning"],
    default: "available",
  },
  description: {
    type: String,
    default: "",
  },
  features: {
    type: [String], // e.g., ["WiFi", "TV", "Mini Bar"]
    default: [],
  },
  images: {
    type: [String], // image URLs
    default: [],
  },
  currentGuestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    default: null,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Room", roomSchema);
