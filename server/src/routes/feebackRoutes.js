let express = require("express");
let router = express.Router();
let feedbackController = require("../controllers/feedbackController");

router.post("/", feedbackController.createFeedback);
router.get("/", feedbackController.getAllFeedbacks);
router.get("/:id", feedbackController.getFeedbackById);
router.put("/:id/respond", feedbackController.respondToFeedback);
router.delete("/:id", feedbackController.deleteFeedback);

module.exports = router;
