let express = require("express");
let router = express.Router();
let authenticate = require("../middleware/authMiddleware");
let authorizeRole = require("../middleware/roleMiddleware");

router.get("/admin-dashboard", authenticate, authorizeRole("admin"), (req, res) => {
    res.status(200).json({ message: "Welcome to Admin Dashboard" });
});

router.get("/user-dashboard", authenticate, authorizeRole("user"), (req, res) => {
    res.status(200).json({ message: "Welcome to User Dashboard" });
});
router.get("/manager-dashboard", authenticate, authorizeRole("manager"), (req, res) => {
    res.status(200).json({ message: "Welcome to Manager Dashboard" });
});

module.exports = router;





// router.get("/admin-data", verifyToken, authorizeRoles("admin"), adminController.getData);
// router.get("/user-data", verifyToken, authorizeRoles("user", "admin"), userController.getData);