import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import imgs from '../adnmin_img/imgs.png';

const Dashboard = () => {
  const [bestProductsData, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from backend
  const fetchProducts = () => {
    fetch("http://localhost:4000/product", { credentials: "include" })
      .then((res) => (res.ok ? res.json() : Promise.reject("Fetch failed")))
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      })
      .catch((err) => {
        setError(err.toString());
      });
  };

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
    fetchProducts();

    // Optional: fetch userId if needed
    fetch("http://localhost:4000/userId", { credentials: "include" })
      .then((res) => res.ok ? res.json() : Promise.reject("User fetch failed"))
      .catch(() => {});
  }, []);

  const links = [
    { label: "Home", to: "/dashboard" },
    { label: "Cart", to: "/dashboard/cart" },
    { label: "Products", to: "/dashboard/product" },
  ];

  return (
    <div className="min-h-screen bg-[#f9f4ef] w-screen bg-cover bg-center overflow-y-auto relative">

      <Navbar link={links} />

      {/* Hero Section */}
      <div className="relative z-10 mt-24 px-6 md:px-20">
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-16">

          {/* TEXT */}
          <div className="w-full lg:w-1/2 max-w-3xl text-center lg:text-left">
            <h1 data-aos='fade-right' className="text-5xl font-extrabold mb-3 tracking-wide drop-shadow-md text-[#020826]">ICHIRAKU</h1> 
            <div data-aos="fade-down" className="font-bold text-[#8c7851] text-5xl">RAMEN</div>
            <p data-aos='fade-down' className="text-lg font-light text-[#716040] leading-relaxed">
              “Authentic, heartwarming ramen made with passion and tradition.
              Every bowl is crafted to bring you the rich flavors and comforting
              warmth of Japan.”
            </p>
            <Link to="/dashboard/product">
              <button data-aos="fade-up" className="mt-6 bg-[#8c7851] px-10 py-3 rounded-full font-semibold text-[#fffffe] shadow-lg hover:scale-105 transition-transform">
                Explore Now
              </button>
            </Link>
          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-1/2 max-w-lg" data-aos="fade-left">
            <img src={imgs} alt="Ichiraku Ramen" className="rounded-3xl" />
          </div>

        </div>
      </div>

      {/* Best Products Section */}
      <section data-aos="fade-up" className="relative mt-20 px-6 md:px-20 py-10 rounded-3xl shadow-lg overflow-hidden bg-[#fffffe] max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center drop-shadow-md text-[#8c7851]">Best Products</h2>

        {error && <p className="text-center text-red-500 mb-4">{error}</p>}

        {bestProductsData.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          <div className="overflow-hidden">
            <div
              className="carousel-track flex"
              style={{ width: `${bestProductsData.length * 240}px` }}
            >
              {bestProductsData.map((product) => (
                <div key={product.id || product.name} className="min-w-[220px] max-w-[220px] rounded-xl mx-2 shadow-lg bg-[#fffffe] border border-[#eaddcf] flex-shrink-0">
                  <img  src={product.img  ? product.img.startsWith("http")  ? product.img : `http://localhost:4000/uploads/${product.img}`: "/default-image.png" } alt={product.name || "Product"} 
               
                    className="rounded-t-xl w-full h-48 object-cover border-b border-[#020826]"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg text-[#020826]">{product.name}</h3>
                    <p className="font-bold text-[#f25042]">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <style>{`
          @keyframes scroll-left { 
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          } 
          .carousel-track {
            animation: scroll-left 30s linear infinite;
            will-change: transform;
          }
        `}</style>
      </section>

      {/* Footer */}
      <div className="mt-10" data-aos="fade-down">
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
