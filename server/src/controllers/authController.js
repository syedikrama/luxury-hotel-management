let User = require("../models/User");
let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
require("dotenv").config();
let user_function = {
    registerUser: async function (req, res) {
        try {
            let { name, email, password, role } = req.body;

            // required fields check karny ky liye
            if (!name || !email || !password) {
                return res.status(400).json({ message: "All fields are required." });
            }

            // agr user phly sy mojood ho
            let existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: "User already exists." });
            } else {
                // password ko hash karny ky liye 17 times
                let hashedPassword = bcrypt.hashSync(password, 17);
                // user create ho kr save ho jaye ga
                let newUser = new User({ name, email, password : hashedPassword, role })
                let saveUser = await newUser.save();
                res.status(200).json({ message: "User registered successfully" })
            }


        } catch (error) {
            res.status(501).json({ message: "Server error during registration." });
        }
    },
    loginUser: async function (req, res) {
        try {
            let { email, password } = req.body;

            // input field ki validation check
            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required." });
            }

            // Check karien gy ky user exist krta hai
            let user = await User.findOne({ email: email });
            if (!user) {
                return res.status(401).json({ message: "Invalid email or password / email not found" });
            }

            // password ko check karien gy
            let pswd_match = await bcrypt.compareSync(password, user.password);
            if (!pswd_match) {
                return res.status(401).json({ message: "Invalid email or password" });
            }

            // Generate JWT token or npm i jsonwebtoken
            let token = jwt.sign(
                {
                    userId: user._id,
                    role: user.role,
                    name: user.name,
                    email: user.email
                },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            );

            // Send response
            return res.status(201).json({
                message: "Login successful",
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });

        } catch (error) {
            console.error("Login Error:", error);
            res.status(501).json({ message: "Server error during login." });
        }
    }
};
        


module.exports = user_function;
