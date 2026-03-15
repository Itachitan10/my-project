import React from 'react'



const Testing = () => {
  return (
    <div>
      {/* ================= VERIFY MODAL (DESIGN ONLY) ================= */}
<div className="fixed inset-0 z-50 flex items-center justify-center">

  {/* BLURRED BACKGROUND */}
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

  {/* MODAL CARD */}
  <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">

    {/* HEADER */}
    <h2 className="text-2xl font-bold text-gray-800 text-center">
      Verify Your Information
    </h2>
    <p className="text-sm text-gray-500 text-center mt-1">
      Please confirm your details before checkout
    </p>

    {/* FORM */}
    <div className="mt-6 space-y-4">

      <input
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <input
        type="number"
        placeholder="Age"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <input
        type="text"
        placeholder="Mobile Number"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <textarea
        rows="3"
        placeholder="Full Address"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
      />
    </div>

    {/* ACTION BUTTONS */}
    <div className="mt-6 flex gap-3">
      <button
        className="flex-1 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition"
      >
        Cancel
      </button>

      <button
        className="flex-1 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition"
      >
        Verify
      </button>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default Testing
