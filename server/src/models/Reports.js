const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ["occupancy", "revenue", "feedback", "maintenance", "booking-trends", "custom"],
        required: true,
    },
    generatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // usually admin/manager
    },
    data: {
        type: mongoose.Schema.Types.Mixed, // can store JSON summaries
        required: true,
    },
    fromDate: {
        type: Date,
        required: true,
    },
    toDate: {
        type: Date,
        required: true,
    },
    generatedAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Report", reportSchema);
