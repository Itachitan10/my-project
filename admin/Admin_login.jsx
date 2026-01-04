import React from "react";

const Admin_login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gray-900 font-[Poppins]">

      <div className="bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl 
        p-8 sm:p-10 w-[90%] max-w-md border border-gray-700">

        <h1 className="text-3xl text-center text-emerald-400 font-extrabold mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-300 mb-8 text-sm">
          Sign in to continue to the admin panel
        </p>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 rounded-lg border border-gray-700 
                bg-gray-700 text-gray-200 shadow-sm 
                focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full p-3 rounded-lg border border-gray-700 
                bg-gray-700 text-gray-200 shadow-sm 
                focus:ring-2 focus:ring-emerald-400 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold text-white 
              bg-gradient-to-r from-emerald-500 to-lime-500 
              shadow-md hover:shadow-lg hover:scale-[1.02] 
              transition-transform duration-300">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="h-px w-16 bg-gray-600"></span>
          <span className="mx-3 text-gray-400 text-sm">or continue with</span>
          <span className="h-px w-16 bg-gray-600"></span>
        </div>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4">
          {[
            "https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/",
            "https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/",
            "https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/",
          ].map((src, i) => (
            <button
              key={i}
              className="w-10 h-10 rounded-lg flex items-center justify-center 
                bg-gray-700 shadow hover:scale-110 hover:shadow-lg transition"
            >
              <img src={src} alt="social" className="w-5 h-5 invert" />
            </button>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don’t have an account?{" "}
          <a
            href="/admin-register"
            className="text-emerald-400 hover:text-lime-400 transition font-medium"
          >
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default Admin_login;
