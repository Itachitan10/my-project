import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for your message, ${form.name}! We'll get back to you soon.`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full min-h-full bg-[#343634] flex flex-col p-6 overflow-auto">
      <div className="flex-grow flex justify-center items-center px-6 md:px-0">
        <form
          onSubmit={handleSubmit}
          className="bg-[#221f1f] p-8 rounded-lg shadow-lg max-w-md w-full text-white overflow-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-[yellow]">Contact Us</h2>

          <label className="block mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full p-2 rounded bg-[#343634] border border-gray-600 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400 mb-4 text-white"
          />

          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full p-2 rounded bg-[#343634] border border-gray-600 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400 mb-4 text-white"
          />

          <label className="block mb-2 font-semibold" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            className="w-full p-2 rounded bg-[#343634] border border-gray-600 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400 mb-6 text-white resize-none"
          />

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
