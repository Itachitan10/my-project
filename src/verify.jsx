import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const FullVerify = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    contact: '',
    address: '',
    userId: '',
  });

  useEffect(() => {
    fetch("https://itansramens.onrender.com/userId", { credentials: "include" })
      .then((res) => (res.ok ? res.json() : Promise.reject("Failed user ID")))
      .then((data) => setForm((prev) => ({ ...prev, userId: data.userId })))
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Verified data:', form);

    try {
      const res = await fetch("https://itansramens.onrender.com/fullVerify", {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log('Server response:', data);

      if (res.ok) {
        alert('Verification successful! Proceeding to checkout...');
        window.location.href = "/dashboard/cart";
      } else {
        alert(data.message || 'Verification failed.');
      }
    } catch (err) {
      console.error('Error submitting verification:', err);
      alert('Error verifying. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen w-screen bg-[url('https://tse1.mm.bing.net/th/id/OIP.kCZGyPUl02MAYSoGvfTmfwHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center">
      {/* Header/Nav */}
      <div className="bg-[#221f1f]">
        <nav className="p-4 flex justify-between items-center mx-4 md:mx-20">
          <h1 className="font-bold text-white text-2xl">
            my <span className="text-[yellow]">ramen shop</span>
          </h1>

          <ul className="hidden md:flex flex-row gap-5 text-[yellow] font-bold">
            <li className="hover:underline cursor-pointer"><Link to="/dashboard">Dashboard</Link></li>
            <li className="hover:underline cursor-pointer"><Link to="/dashboard/about">About</Link></li>
            <li className="hover:underline cursor-pointer"><Link to="/dashboard/product">Product</Link></li>
          </ul>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[yellow] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {isOpen && (
          <ul className="flex flex-col gap-4 text-[yellow] font-bold text-center py-4 md:hidden">
            <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
            <li><Link to="/dashboard/about" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/dashboard/product" onClick={() => setIsOpen(false)}>Product</Link></li>
          </ul>
        )}
      </div>

      {/* Form Card */}
      <div className="flex justify-center items-center py-10">
        <div className="bg-[#221f1f] p-10 border rounded-2xl w-[500px] shadow shadow-white text-white">
          <h2 className="text-[yellow] text-2xl font-bold mb-6 text-center">Verify Your Information</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block font-bold mb-1">Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                className="p-2 rounded w-full text-black bg-amber-50"
                required
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Contact Number:</label>
              <input 
                type="tel"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className="p-2 rounded w-full text-black bg-amber-50"
                required
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Shipping Address:</label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="p-2 rounded w-full text-black bg-amber-50"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="bg-[yellow] hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mt-4">
              Verify & Proceed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FullVerify;
