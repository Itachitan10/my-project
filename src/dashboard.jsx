import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="h-screen w-screen bg-[url('https://tse1.mm.bing.net/th/id/OIP.kCZGyPUl02MAYSoGvfTmfwHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center"
    >
      <div className="bg-[#221f1f]">
        <nav className="p-4 flex justify-between items-center mx-4 md:mx-20">
          {/* Logo */}
          <h1 className="font-bold text-white text-2xl">
            my <span className="text-[yellow]">ramen shop</span>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex flex-row gap-5 text-[yellow] font-bold">
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact">Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/product">Product</Link>
            </li>
          </ul>

          {/* Hamburger button for mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[yellow] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col gap-4 text-[yellow] font-bold text-center py-4 md:hidden">
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/product" onClick={() => setIsOpen(false)}>
                Product
              </Link>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-10">
        <div className="mx-6 md:mx-[50px]">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
            <div className="lg:w-[600px] text-center lg:text-left">
              <h1 className="text-4xl font-bold text-[yellow]">
                ICHIRAKU <span className="text-[white]">RAMEN</span>
              </h1>

              <p className="text-[15px] font-light text-[white] py-5">
                “Authentic, heartwarming ramen made with passion and tradition.
                Every bowl is crafted to bring you the rich flavors and comforting
                warmth of Japan. Come and find your perfect bowl today — a taste
                that feels like home in every sip.”
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 mt-4">
                Order Now
              </button>
            </div>

            {/* Image — hidden sa mobile, visible sa lg screen pataas */}
            <div className="flex-1 hidden lg:block">
              <img
                src="https://static.vecteezy.com/system/resources/previews/036/083/981/non_2x/ai-generated-plate-of-ramen-isolated-on-transparent-background-free-png.png"
                alt="Ramen Plate"
                className="w-full max-w-[500px] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
