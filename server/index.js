let express = require("express");
let {port} = require("./src/config/env");
let db = require("./src/config/db");
let authRoutes = require("./src/routes/authRoutes")
let dashboardRoutes = require("./src/routes/dashboardRoutes")
const roomRoutes = require("./routes/roomRoutes");
const reservationRoutes = require("./routes/reservationRoutes");
const reportRoutes = require("./routes/reportRoutes");
const invoiceRoutes = require("./routes/invoiceRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

let HMS_app = express();
let cors = require("cors");
HMS_app.use(express.json());
HMS_app.use(cors());

HMS_app.use("/hms", authRoutes);
HMS_app.use("/hms/dashboard", dashboardRoutes);
HMS_app.use("/hms/rooms", roomRoutes);
HMS_app.use("/hms/reservations", reservationRoutes);
HMS_app.use("/hms/reports", reportRoutes);
HMS_app.use("/hms/invoices", invoiceRoutes);
HMS_app.use("/hms/feedbacks", feedbackRoutes);
HMS_app.use("/hms/bookings", bookingRoutes);


db().then(() => {
    HMS_app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }).catch((e)=>{
    console.log(e)
  })
