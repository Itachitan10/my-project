import React, { useState } from "react";
const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"
const handleLogout = () => {
  fetch(`${VITE_API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  })
    .then((res) => res.json())
    .then(() => {
      window.location.href = "/login";
    })
    .catch(() => {
      window.location.href = "/login";
    });
};

const Navbar = ({ link }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <nav className="flex items-center justify-between p-6 md:px-10 bg-[#f9f4ef] shadow-md font-bold">
        {/* Logo */}
        <h2 className="font-extrabold text-2xl md:text-3xl text-[#020826]">
          my <span className="text-[#f25042]">ramen shop</span>
        </h2>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-[#020826]">
          {link.map((links, index) => (
            <li
              key={index}
              className="relative group text-lg hover:text-[#f25042] transition-colors duration-300"
            >
              <a href={links.to}>{links.label}</a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f25042] transition-all group-hover:w-full"></span>
            </li>
          ))}

          
          <li>
            <button
              onClick={handleLogout}
              className="ml-4 px-4 py-2 rounded-full bg-[#8c7851] text-white font-semibold hover:bg-[#f25042] hover:scale-105 transition-all duration-300"
            >
              Logout
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-[#020826] focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-6 bg-[#f9f4ef] shadow-lg absolute w-full left-0 top-full text-[#020826] font-bold text-lg">
          {link.map((links2, index2) => (
            <li key={index2} className="hover:text-[#f25042] transition-colors duration-300">
              <a href={links2.to}>{links2.label}</a>
            </li>
          ))}

          {/* Mobile Logout */}
          <li>
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-full bg-[#8c7851] text-white font-semibold hover:bg-[#f25042] hover:scale-105 transition-all duration-300"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
