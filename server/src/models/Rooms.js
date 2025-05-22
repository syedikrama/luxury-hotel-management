const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    roomNumber: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        enum: ["single", "double", "suite", "deluxe", "executive"],
        required: true,
    },
    status: {
        type: String,
        enum: ["available", "occupied", "maintenance", "cleaning"],
        default: "available",
    },
    pricePerNight: {
        type: Number,
        required: true,
    },
    isSmokingAllowed: {
        type: Boolean,
        default: false,
    },
    floor: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    features: {
        type: [String], // Example: ["WiFi", "TV", "Mini Bar", "Sea View"]
        default: [],
    },
    images: {
        type: [String], // URLs to room images
        default: [],
    },
    currentGuestId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest", // You should have a Guest model too
        default: null,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Room", roomSchema);
