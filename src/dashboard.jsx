import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import imgs from "../adnmin_img/imgs.png";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

import { useRef } from "react";

const Dashboard = () => {
  const [bestProductsData, setProducts] = useState([]);
  const [error, setError] = useState(null);
   const scrollRef = useRef(null);


    const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const fetchProducts = () => {
    fetch(`${API_URL}/product`, { credentials: "include" })
      .then((res) => (res.ok ? res.json() : Promise.reject("Fetch failed")))
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch((err) => setError(err.toString()));
  };

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    fetchProducts();
  }, []);

  const links = [
    { label: "Home", to: "/dashboard" },
    { label: "Cart", to: "/dashboard/cart" },
    { label: "Products", to: "/dashboard/product" },
  ];

  // Sample 5 customer reviews
  const customerReviews = [
    {
      name: "Naruto Uzumaki",
      img: "https://i.pravatar.cc/100?img=1",
      product: "Tonkotsu Ramen",
      rating: 5,
      review: "Hands down the best ramen I’ve ever had. The broth is legendary!"
    },
    {
      name: "Sakura Haruno",
      img: "https://i.pravatar.cc/100?img=2",
      product: "Miso Ramen",
      rating: 4,
      review: "Delicious flavors, noodles cooked perfectly. Highly recommend!"
    },
    {
      name: "Sasuke Uchiha",
      img: "https://i.pravatar.cc/100?img=3",
      product: "Shoyu Ramen",
      rating: 5,
      review: "A perfect balance of broth and toppings. Truly authentic."
    },
    {
      name: "Kakashi Hatake",
      img: "https://i.pravatar.cc/100?img=4",
      product: "Spicy Ramen",
      rating: 4,
      review: "Loved the kick of spice. Will definitely come back for more."
    },
    {
      name: "Hinata Hyuga",
      img: "https://i.pravatar.cc/100?img=5",
      product: "Seafood Ramen",
      rating: 5,
      review: "Fresh ingredients and flavorful broth. A must-try!"
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f4ef] w-screen overflow-y-auto">

      <Navbar link={links} />

      {/* HERO SECTION */}
      <div className="mt-24 px-6 md:px-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          {/* TEXT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 data-aos="fade-right" className="text-5xl font-extrabold text-[#020826]">
              ICHIRAKU
            </h1>
            <div data-aos="fade-down" className="text-5xl font-bold text-[#8c7851]">
              RAMEN
            </div>

            <p data-aos="fade-down" className="mt-4 text-lg text-[#716040]">
              Authentic, heartwarming ramen made with passion and tradition.
            </p>

            <Link to="/dashboard/product">
              <button
                data-aos="fade-up"
                className="mt-6 bg-[#8c7851] px-10 py-3 rounded-full font-semibold text-white shadow-lg hover:scale-105"
              >
                Explore Now
              </button>
            </Link>

            {/* RATINGS + YEARS + REVIEW */}
            <div data-aos="fade-up" className="mt-8  p-6 rounded-xl  space-y-4">
              <div className="flex justify-center lg:justify-start gap-10">
                <div>
                  <p className="text-xl font-bold text-[#020826]">⭐ 4.9 / 5</p>
                  <p className="text-sm text-gray-500">Ratings</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-[#020826]">🍜 12+ Years</p>
                  <p className="text-sm text-gray-500">Serving</p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 max-w-lg" data-aos="fade-left">
            <img src={imgs} alt="Ichiraku Ramen" className="rounded-3xl" />
          </div>

        </div>
      </div>

{/* display product  */}
<section
  data-aos="fade-up"
  className="relative bg-[#000000c7] mt-20 py-10"
>
  {/* LEFT BUTTON */}
  <button
    onClick={scrollLeft}
    className="absolute left-5 top-1/2 -translate-y-1/2 bg-white text-black 
             px-4 py-2 rounded-full shadow-lg hover:scale-110 transition z-10 scroll-hidden"
  >
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  </button>

  {/* RIGHT BUTTON */}
  <button
    onClick={scrollRight}
    className="absolute right-5 top-1/2 -translate-y-1/2 bg-white text-black 
             px-4 py-2 rounded-full shadow-lg hover:scale-110 transition z-10"
  >
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  </button>

  <h2 className="text-4xl font-extrabold mb-10 text-center text-[#eef3f8f6]">
    Best Products
  </h2>

  <div
    ref={scrollRef}
    className="flex flex-nowrap overflow-x-auto scroll-smooth gap-6 px-10"
  >
    {bestProductsData.map((product) => (
      <div
        key={product.id || product.name}
        className="min-w-[220px] rounded-xl shadow-lg bg-[#f1f1ea] flex-shrink-0"
      >
        <img
          src={
            product.img
              ? product.img.startsWith("http")
                ? product.img
                : `http://localhost:4000/uploads/${product.img}`
              : "/default-image.png"
          }
          alt={product.name}
          className="p-5 rounded-[100px] h-48"
        />

        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="font-bold text-black text-xl">
            ${product.price.toFixed(2)}
          </p>

          {/* Dine In & Take Out Buttons sa loob ng bawat product */}
          <div className="flex justify-center gap-2 mt-3">
            <button className="px-3 py-1 bg-black text-white font-bold rounded hover:opacity-80 transition">
              Dine In
            </button>
            <button className="px-3 py-1 bg-white text-black font-semibold rounded border border-black hover:opacity-80 transition">
              Take Out
            </button>
          </div>

          <button className="mt-4 w-full py-2 rounded-lg bg-white border border-black text-black font-semibold hover:opacity-80 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* CONTACT US SECTION */}
      <div className="mt-24 px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT TEXT */}
          <div data-aos="fade-right" className="lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-[#020826] mb-4">
              Get in Touch With Us
            </h2>
            <p className="text-lg text-[#716040]">
              Have questions, feedback, or concerns?  
              We’d love to hear from you. Send us a message and our team
              will respond as soon as possible.
            </p>
          </div>

          {/* RIGHT FORM */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          >
            <h3 className="text-2xl font-bold mb-4 text-[#020826]">
              Contact Us
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full border p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded-md"
              />
              <textarea
                rows="4"
                placeholder="Your Concern Message"
                className="w-full border p-2 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#020826] text-white py-2 rounded-md hover:bg-[#8c7851]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* CUSTOMER REVIEWS CAROUSEL */}
      <section className="mt-20 px-6 md:px-20">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-[#8c7851]">Customer Reviews</h2>
        <div className="overflow-hidden">
          <div className="reviews-track flex gap-6">
            {customerReviews.map((review, idx) => (
              <div
                key={idx}
                className="min-w-[250px] bg-white border rounded-xl shadow-lg p-4 flex-shrink-0 text-center"
              >
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mx-auto mb-2"
                />
                <h4 className="font-bold text-lg">{review.name}</h4>
                <p className="text-sm text-gray-500 mb-1">Reviewed: {review.product}</p>
                <p className="text-yellow-500 mb-2">{'★'.repeat(review.rating)}</p>
                <p className="text-gray-600 italic text-sm">{review.review}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .reviews-track {
            animation: scroll-reviews 25s linear infinite;
          }
          @keyframes scroll-reviews {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

   
      <div className="mt-16">
        <Footer
          contact="09077559644"
          ig="https://www.instagram.com/itznch1_kun/"
          fb="https://www.facebook.com/itachiotan"
        />
      </div>

    </div>
  );
};

export default Dashboard;
