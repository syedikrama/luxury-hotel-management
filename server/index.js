let express = require("express");
let {port} = require("./src/config/env");
let db = require("./src/config/db");
let authRoutes = require("./src/routes/authRoutes")
let HMS_app = express();

HMS_app.use(express.json());
HMS_app.use("/HMS", authRoutes);



db().then(() => {
    HMS_app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }).catch((e)=>{
    console.log(e)
  })
