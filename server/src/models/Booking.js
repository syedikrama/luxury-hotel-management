// let mongoose = require("mongoose");

// let bookingSchema = new mongoose.Schema({
//     guest: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Guest",
//         required: true,
//     },
//     room: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Room",
//         required: true,
//     },
//     checkInDate: {
//         type: Date,
//         required: true,
//     },
//     checkOutDate: {
//         type: Date,
//         required: true,
//     },
//     status: {
//         type: String,
//         enum: ["reserved", "checked-in", "checked-out", "cancelled"],
//         default: "reserved",
//     },
//     totalAmount: {
//         type: Number,
//         required: true,
//     },
//     paymentStatus: {
//         type: String,
//         enum: ["pending", "paid", "refunded"],
//         default: "pending",
//     },
//     additionalServices: [
//         {
//             serviceName: String,
//             price: Number,
//         }
//     ],
//     invoiceGenerated: {
//         type: Boolean,
//         default: false,
//     },
//     createdBy: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User", // Staff member who created the booking
//     }
// }, {
//     timestamps: true,
// });

// module.exports = mongoose.model("Booking", bookingSchema);







const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  guest: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Guest",
    required: true,
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["reserved", "checked-in", "checked-out", "cancelled"],
    default: "reserved",
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
  additionalServices: [
    {
      serviceName: { type: String },
      price: { type: Number, default: 0 },
    }
  ],
  invoiceGenerated: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("Booking", bookingSchema);
