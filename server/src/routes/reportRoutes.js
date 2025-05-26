let express = require("express");
let router = express.Router();
let reportController = require("../controllers/reportController");

router.post("/", reportController.createReport);
router.get("/", reportController.getReports);
router.get("/:id", reportController.getReportById);
router.put("/:id", reportController.updateReport);
router.delete("/:id", reportController.deleteReport);

module.exports = router;
