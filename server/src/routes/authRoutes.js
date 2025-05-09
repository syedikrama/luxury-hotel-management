let express = require("express");
let route = express.Router();
let user_function = require("../controllers/authController");

route.post("/register" , user_function.registerUser);
route.post("/login" , user_function.loginUser);



module.exports = route;