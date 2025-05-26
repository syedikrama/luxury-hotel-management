let Feedback = require("../models/Feedback");

let feedbackController = {
  createFeedback: async (req, res) => {
    try {
      let { guest, booking, rating, comment } = req.body;

      if (!guest || !rating) {
        return res.status(400).json({ message: "Guest and rating are required." });
      }

      let newFeedback = new Feedback({
        guest,
        booking,
        rating,
        comment,
      });

      let savedFeedback = await newFeedback.save();
      res.status(201).json(savedFeedback);
    } catch (error) {
      res.status(500).json({ message: "Error submitting feedback.", error: error.message });
    }
  },

  getAllFeedbacks: async (req, res) => {
    try {
      let feedbacks = await Feedback.find()
        .populate("guest", "name email")
        .populate("booking")
        .populate("respondedBy", "name email");
      res.status(200).json(feedbacks);
    } catch (error) {
      res.status(500).json({ message: "Error fetching feedbacks.", error: error.message });
    }
  },

  getFeedbackById: async (req, res) => {
    try {
      let feedback = await Feedback.findById(req.params.id)
        .populate("guest", "name email")
        .populate("booking")
        .populate("respondedBy", "name email");
      if (!feedback) return res.status(404).json({ message: "Feedback not found." });
      res.status(200).json(feedback);
    } catch (error) {
      res.status(500).json({ message: "Error fetching feedback.", error: error.message });
    }
  },

  respondToFeedback: async (req, res) => {
    try {
      let { respondedBy, response } = req.body;

      if (!respondedBy || !response) {
        return res.status(400).json({ message: "Responder and response are required." });
      }

      let updatedFeedback = await Feedback.findByIdAndUpdate(
        req.params.id,
        {
          respondedBy,
          response,
          respondedAt: new Date(),
        },
        { new: true }
      );

      if (!updatedFeedback) return res.status(404).json({ message: "Feedback not found." });

      res.status(200).json(updatedFeedback);
    } catch (error) {
      res.status(500).json({ message: "Error responding to feedback.", error: error.message });
    }
  },

  deleteFeedback: async (req, res) => {
    try {
      let deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
      if (!deletedFeedback) return res.status(404).json({ message: "Feedback not found." });
      res.status(200).json({ message: "Feedback deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Error deleting feedback.", error: error.message });
    }
  },
};

module.exports = feedbackController;
