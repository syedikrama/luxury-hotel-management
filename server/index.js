let express = require("express");
let {port} = require("./src/config/env");
let db = require("./src/config/db");
let authRoutes = require("./src/routes/authRoutes")
let dashboardRoutes = require("./src/routes/dashboardRoutes")
let HMS_app = express();
let cors = require("cors");

HMS_app.use(express.json());
HMS_app.use(cors());

HMS_app.use("/HMS", authRoutes);
HMS_app.use("/dashboard", dashboardRoutes);




db().then(() => {
    HMS_app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }).catch((e)=>{
    console.log(e)
  })
