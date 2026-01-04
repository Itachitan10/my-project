import React from "react";

const Register_add = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-4">
      {/* Main Container */}
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md border border-indigo-100">
        
        {/* Title */}
           <h1 className="text-3xl text-center text-cyan-900 font-extrabold mb-8">
          Ragister
        </h1>

        {/* Form Starts Here */}
        <form className="space-y-5">

          {/* Username Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {/* Contact Number Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              placeholder="Enter your complete address"
              rows="3"
              className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all resize-none"
            ></textarea>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Create your password"
              className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2.5 rounded-lg bg-white text-gray-800 border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold 
                       rounded-lg shadow-md hover:shadow-lg transition-all duration-300"   >
            Register
          </button>
        </form>

        {/* Already have an account */}
        <p className="text-gray-600 text-sm text-center mt-6">
          Already have an account?{" "}
          <a href="/adminlogin" className="text-indigo-600 hover:underline font-medium">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register_add;
