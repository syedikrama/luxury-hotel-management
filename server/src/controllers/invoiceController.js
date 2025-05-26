let Invoice = require("../models/Invoice");

let invoiceController = {
  createInvoice: async (req, res) => {
    try {
      let {
        booking,
        guest,
        roomCharges,
        serviceCharges,
        tax,
        totalAmount,
        paymentStatus,
        paymentMethod,
        issuedBy,
      } = req.body;

      if (!booking || !guest || !roomCharges || !totalAmount) {
        return res.status(400).json({ message: "Required fields missing." });
      }

      let newInvoice = new Invoice({
        booking,
        guest,
        roomCharges,
        serviceCharges,
        tax,
        totalAmount,
        paymentStatus,
        paymentMethod,
        issuedBy,
      });

      let savedInvoice = await newInvoice.save();
      res.status(201).json(savedInvoice);
    } catch (error) {
      res.status(500).json({ message: "Error creating invoice.", error: error.message });
    }
  },

  getInvoices: async (req, res) => {
    try {
      let invoices = await Invoice.find()
        .populate("booking")
        .populate("guest")
        .populate("issuedBy", "name email");
      res.status(200).json(invoices);
    } catch (error) {
      res.status(500).json({ message: "Error fetching invoices.", error: error.message });
    }
  },

  getInvoiceById: async (req, res) => {
    try {
      let invoice = await Invoice.findById(req.params.id)
        .populate("booking")
        .populate("guest")
        .populate("issuedBy", "name email");
      if (!invoice) return res.status(404).json({ message: "Invoice not found." });
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json({ message: "Error fetching invoice.", error: error.message });
    }
  },

  updateInvoice: async (req, res) => {
    try {
      let updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedInvoice) return res.status(404).json({ message: "Invoice not found." });
      res.status(200).json(updatedInvoice);
    } catch (error) {
      res.status(500).json({ message: "Error updating invoice.", error: error.message });
    }
  },

  deleteInvoice: async (req, res) => {
    try {
      let deletedInvoice = await Invoice.findByIdAndDelete(req.params.id);
      if (!deletedInvoice) return res.status(404).json({ message: "Invoice not found." });
      res.status(200).json({ message: "Invoice deleted successfully." });
    } catch (error) {
      res.status(500).json({ message: "Error deleting invoice.", error: error.message });
    }
  },
};

module.exports = invoiceController;
