import React, { useState } from "react";

export default function BookingForm({ onSubmit, initialData = {} }) {
  const [formData, setFormData] = useState({
    guest: initialData.guest || "",
    room: initialData.room || "",
    checkInDate: initialData.checkInDate
      ? new Date(initialData.checkInDate).toISOString().slice(0, 10)
      : "",
    checkOutDate: initialData.checkOutDate
      ? new Date(initialData.checkOutDate).toISOString().slice(0, 10)
      : "",
    totalAmount: initialData.totalAmount || "",
    paymentStatus: initialData.paymentStatus || "pending",
    status: initialData.status || "reserved",
    additionalServices: initialData.additionalServices || [],
  });

  const [newService, setNewService] = useState({ serviceName: "", price: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const { name, value } = e.target;
    setNewService((prev) => ({ ...prev, [name]: value }));
  };

  const addService = () => {
    if (!newService.serviceName.trim()) {
      alert("Service name cannot be empty");
      return;
    }
    if (isNaN(newService.price) || newService.price === "") {
      alert("Please enter valid price");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      additionalServices: [...prev.additionalServices, newService],
    }));
    setNewService({ serviceName: "", price: "" });
  };

  const removeService = (index) => {
    setFormData((prev) => ({
      ...prev,
      additionalServices: prev.additionalServices.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.guest) errs.guest = "Guest is required";
    if (!formData.room) errs.room = "Room is required";
    if (!formData.checkInDate) errs.checkInDate = "Check-in date is required";
    if (!formData.checkOutDate) errs.checkOutDate = "Check-out date is required";
    if (new Date(formData.checkOutDate) < new Date(formData.checkInDate))
      errs.checkOutDate = "Check-out cannot be before check-in";
    if (!formData.totalAmount || isNaN(formData.totalAmount))
      errs.totalAmount = "Valid total amount is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    if (onSubmit) {
      onSubmit(formData);
    } else {
      alert("Form submitted! Implement onSubmit prop to handle.");
    }
  };

  // Simple reusable input wrapper for label + input + error
  const InputField = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    min,
  }) => (
    <div style={{ marginBottom: 15 }}>
      <label
        htmlFor={name}
        style={{ display: "block", marginBottom: 5, fontWeight: "600" }}
      >
        {label}
      </label>
      <input
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: 5,
          border: errors[name] ? "1.5px solid #e74c3c" : "1.5px solid #ccc",
          fontSize: 16,
        }}
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        min={min}
      />
      {errors[name] && (
        <small style={{ color: "#e74c3c", marginTop: 3, display: "block" }}>
          {errors[name]}
        </small>
      )}
    </div>
  );

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "30px auto",
        padding: 25,
        border: "1px solid #ddd",
        borderRadius: 10,
        boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 25, color: "#2c3e50" }}>
        {initialData._id ? "Edit Booking" : "Create Booking"}
      </h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Guest ID"
          name="guest"
          value={formData.guest}
          onChange={handleChange}
          placeholder="Enter Guest ObjectId"
        />

        <InputField
          label="Room ID"
          name="room"
          value={formData.room}
          onChange={handleChange}
          placeholder="Enter Room ObjectId"
        />

        <InputField
          label="Check-in Date"
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
        />

        <InputField
          label="Check-out Date"
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
        />

        <InputField
          label="Total Amount"
          type="number"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleChange}
          min="0"
          placeholder="Enter total amount"
        />

        <div style={{ marginBottom: 15 }}>
          <label
            htmlFor="status"
            style={{ display: "block", marginBottom: 5, fontWeight: "600" }}
          >
            Booking Status
          </label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: 5,
              border: "1.5px solid #ccc",
              fontSize: 16,
            }}
          >
            <option value="reserved">Reserved</option>
            <option value="checked-in">Checked-in</option>
            <option value="checked-out">Checked-out</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        <div style={{ marginBottom: 15 }}>
          <label
            htmlFor="paymentStatus"
            style={{ display: "block", marginBottom: 5, fontWeight: "600" }}
          >
            Payment Status
          </label>
          <select
            id="paymentStatus"
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: 5,
              border: "1.5px solid #ccc",
              fontSize: 16,
            }}
          >
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ fontWeight: "600" }}>Additional Services</label>
          {formData.additionalServices.length === 0 && (
            <p style={{ fontStyle: "italic", color: "#7f8c8d" }}>
              No additional services added.
            </p>
          )}
          <ul style={{ paddingLeft: 20 }}>
            {formData.additionalServices.map((service, index) => (
              <li
                key={index}
                style={{
                  marginBottom: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #ddd",
                  paddingBottom: 4,
                }}
              >
                <span>
                  {service.serviceName} - ${service.price}
                </span>
                <button
                  type="button"
                  onClick={() => removeService(index)}
                  style={{
                    backgroundColor: "#e74c3c",
                    color: "#fff",
                    border: "none",
                    borderRadius: 3,
                    cursor: "pointer",
                    padding: "3px 8px",
                    fontSize: 14,
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div
            style={{
              marginTop: 10,
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <input
              type="text"
              name="serviceName"
              placeholder="Service Name"
              value={newService.serviceName}
              onChange={handleServiceChange}
              style={{
                flex: 2,
                padding: "8px 12px",
                borderRadius: 5,
                border: "1.5px solid #ccc",
                fontSize: 16,
              }}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newService.price}
              onChange={handleServiceChange}
              min="0"
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: 5,
                border: "1.5px solid #ccc",
                fontSize: 16,
              }}
            />
            <button
              type="button"
              onClick={addService}
              style={{
                flex: "none",
                backgroundColor: "#27ae60",
                color: "#fff",
                border: "none",
                borderRadius: 5,
                cursor: "pointer",
                padding: "8px 15px",
                fontWeight: "600",
                fontSize: 16,
              }}
            >
              Add
            </button>
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px 0",
            backgroundColor: "#2980b9",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontSize: 18,
            cursor: "pointer",
            fontWeight: "700",
            marginTop: 15,
          }}
        >
          {initialData._id ? "Update Booking" : "Create Booking"}
        </button>
      </form>
    </div>
  );
}
