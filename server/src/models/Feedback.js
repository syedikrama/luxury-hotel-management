const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    guest: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Guest",
        required: true,
    },
    booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
        required: false, // optional: can be linked to a specific stay
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
        maxlength: 1000,
    },
    submittedAt: {
        type: Date,
        default: Date.now,
    },
    respondedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // manager or staff who responds
    },
    response: {
        type: String,
        maxlength: 1000,
    },
    respondedAt: {
        type: Date,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Feedback", feedbackSchema);
