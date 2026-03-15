import React, { useState } from "react";

function  ProceedToCheckout() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
    paymentMethod: "cod", // default COD
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! Your order is ready for ${
        formData.paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"
      }.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          🛒 Checkout
        </h2>
        <p className="text-gray-600 text-center">
          Please fill in your details and choose your payment method.
        </p>

        {/* ================= FORM ================= */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Juan Dela Cruz"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Contact */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="0912-345-6789"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="188 Barang Malibong, Urbiztondo, Pangasinan"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
              rows={3}
              required
            ></textarea>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Payment Method
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                  className="accent-red-500"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="online"
                  checked={formData.paymentMethod === "online"}
                  onChange={handleChange}
                  className="accent-red-500"
                />
                Online Payment
              </label>
            </div>
          </div>

          {/* Total & Submit */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-700 font-medium text-lg">
              Total: <span className="text-red-500">₱650</span>
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-red-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Place Order
            </button>
          </div>
        </form>

        {/* ================= HUMANIZED MESSAGE ================= */}
        <p className="text-gray-500 text-sm text-center mt-4">
          Thank you for ordering from our Ramen Shop! 🍜 We can't wait to serve you.
        </p>
      </div>
    </div>
  );
}



export default ProceedToCheckout;
