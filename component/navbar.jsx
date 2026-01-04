import React from "react";
import { useState, useEffect } from "react";

const handleLogout = () => {
  fetch("http://localhost:4000/logout", {
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
  const [open, setopen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between gap-10 p-10 bg-[#f9f4ef] font-bold  shadow-sm">
       
        <h2 className="font-extrabold md:text-3xl text-[#020826] ">
          my <span className="text-[#f25042] ">ramen shop</span>
        </h2>

        <ul className="hidden md:flex gap-6 mx-15 text-[#020826]">
          {link.map((links, index) => (
            <li className="hover:underline" key={index}>
              <a className={links.style} href={links.to}>{links.label}</a>
            </li>
          ))}

          {/* Logout Button */}
          <li>
            <button
              onClick={handleLogout}
              className="w-20 rounded-2xl bg-[#8c7851] text-[#fffffe] font-sans hover:bg-[#eaddcf] hover:text-[#020826] duration-300"
            >
              logout
            </button>
          </li>
        </ul>

        {/* Hamburger (Phone) */}
        <button
          onClick={() => setopen(!open)}
          className="w-8 md:hidden text-2xl text-[#020826]"
        >
          {open ? "✖" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <ul className="font-bold flex flex-col w-screen  gap-3 md:hidden text-lg items-center justify-center py-3 bg-[#f9f4ef] text-[#020826] shadow-md">
          {link.map((links2, index2) => (
            <li className="hover:underline" key={index2}>
              <a href={links2.to}>{links2.label}</a>
            </li>
          ))}

          {/* Logout Button (Mobile) */}
          <li>
            <button
              onClick={handleLogout}
              className="w-20 rounded-2xl bg-[#8c7851] text-[#fffffe] font-sans hover:bg-[#eaddcf] hover:text-[#020826] duration-300"
            >
              logout
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
