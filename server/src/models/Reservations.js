const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // guest account (optional, can be null for walk-ins)
        required: false
    },
    guestName: {
        type: String,
        required: true
    },
    guestEmail: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room",
        required: true
    },
    checkInDate: {
        type: Date,
        required: true
    },
    checkOutDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ["reserved", "checked-in", "checked-out", "cancelled"],
        default: "reserved"
    },
    numberOfGuests: {
        type: Number,
        default: 1
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "partial"],
        default: "pending"
    },
    totalAmount: {
        type: Number,
        required: true
    },
    specialRequests: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Reservation", reservationSchema);
