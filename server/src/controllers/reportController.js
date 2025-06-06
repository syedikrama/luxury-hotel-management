let Report = require("../models/Reports");

let reportController = {
  createReport: async (req, res) => {
    try {
      let { title, type, generatedBy, data, fromDate, toDate } = req.body;

      if (!title || !type || !data || !fromDate || !toDate) {
        return res.status(400).json({ message: "Required fields missing." });
      }

      let newReport = new Report({
        title,
        type,
        generatedBy,
        data,
        fromDate,
        toDate,
      });

      let savedReport = await newReport.save();
      res.status(201).json(savedReport);
    } catch (error) {
      res.status(500).json({ message: "Error creating report.", error: error.message });
    }
  },

  getReports: async (req, res) => {
    try {
      let reports = await Report.find()
        .populate("generatedBy", "name email");
      res.status(200).json(reports);
    } catch (error) {
      res.status(500).json({ message: "Error fetching reports.", error: error.message });
    }
  },

  getReportById: async (req, res) => {
    try {
      let report = await Report.findById(req.params.id)
        .populate("generatedBy", "name email");
      if (!report) return res.status(404).json({ message: "Report not found." });
      res.status(200).json(report);
    } catch (error) {
      res.status(500).json({ message: "Error fetching report.", error: error.message });
    }
  },

  updateReport: async (req, res) => {
    try {
      let updatedReport = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedReport) return res.status(404).json({ message: "Report not found." });
      res.status(200).json(updatedReport);
    } catch (error) {
      res.status(500).json({ message: "Error updating report.", error: error.message });
    }
  },

  deleteReport: async (req, res) => {
    try {
      let deletedReport = await Report.findByIdAndDelete(req.params.id);
      if (!deletedReport) return res.status(404).json({ message: "Report not found." });
      res.status(200).json({ message: "Report deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Error deleting report.", error: error.message });
    }
  },
};

module.exports = reportController;
