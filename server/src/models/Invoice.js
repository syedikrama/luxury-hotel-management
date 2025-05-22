const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: true,
    },
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
        required: true,
    },
    roomCharges: {
        type: Number,
        required: true,
    },
    serviceCharges: [
        {
            serviceName: String,
            amount: Number,
        }
    ],
    tax: {
        type: Number,
        required: true,
        default: 0,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "refunded"],
        default: "pending",
    },
    paymentMethod: {
        type: String,
        enum: ["cash", "card", "online", "UPI"],
        default: "cash",
    },
    issuedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // staff who generated the invoice
    },
    issuedAt: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Invoice", invoiceSchema);
