let express = require("express");
let {port} = require("./src/config/env");
let db = require("./src/config/db");
let authRoutes = require("./src/routes/authRoutes")
let dashboardRoutes = require("./src/routes/dashboardRoutes")
let roomRoutes = require("./src/routes/roomRoutes");
let reservationRoutes = require("./src/routes/reservationRoutes");
let reportRoutes = require("./src/routes/reportRoutes");
let invoiceRoutes = require("./src/routes/invoiceRoutes");
let feedbackRoutes = require("./src/routes/feebackRoutes");
let bookingRoutes = require("./src/routes/bookingRoutes");
let guestRoutes = require("./src/routes/guestRoutes")

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
HMS_app.use("/hms/guest", guestRoutes);



db().then(() => {
    HMS_app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }).catch((e)=>{
    console.log(e)
  })
