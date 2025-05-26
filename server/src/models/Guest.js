let mongoose = require("mongoose");

let guestSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    default: "",
  },
  preferences: {
    type: [String], // e.g., ["Non-smoking", "Sea View", "Late Check-in"]
    default: [],
  },
  notes: {
    type: String, // for staff to add special instructions
    default: "",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Guest", guestSchema);
