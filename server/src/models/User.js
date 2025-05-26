let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "manager", "receptionist", "housekeeping"],
        default: "receptionist"
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
