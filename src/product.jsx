import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ShoppingCart, CreditCard } from 'lucide-react';

const Product = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [product1, setProduct] = useState([]);
  const [Search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/product')
      .then(res => res.ok ? res.json() : Promise.reject('Network response not ok'))
      .then(data => setProduct(data.product))
      .catch(err => console.error('Fetching error:', err));
  }, []);

  const ali = product1.filter((itemsName) =>
    itemsName.name.toLowerCase().includes(Search.toLowerCase())
  );

 
  const notifyAddCart = () => {
    toast.success(
      <div className="flex items-center gap-2">
        <ShoppingCart size={20} /> Item added to cart!
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        style: {
          background: '#333',
          color: '#fff',
          borderRadius: '8px',
          padding: '12px 16px',
        },
        icon: false
      }
    );
  };

  
  const notifyBuyNow = () => {
    toast.info(
      <div className="flex items-center gap-2">
        <CreditCard size={20} /> Proceeding to checkout!
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        style: {
          background: '#444',
          color: '#fff',
          borderRadius: '8px',
          padding: '12px 16px',
        },
        icon: false
      }
    );
  };

  return (
    <div className="min-h-screen w-screen bg-[#343634]">
      {/* Navbar */}
      <div className="bg-[#221f1f]">
        <nav className="p-3 flex justify-between items-center mx-4 md:mx-20 relative">
          {/* Logo */}
          <h1 className="font-bold text-white text-xl md:text-2xl">
            my <span className="text-[yellow]">ramen shop</span>
          </h1>

          {/* Toggle Button */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {navOpen ? (
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

        
          <ul
            className={`md:flex md:flex-row md:gap-2 absolute md:static top-full left-0 w-full md:w-auto bg-[#221f1f] md:bg-transparent text-center overflow-hidden transition-[max-height] duration-300 ease-in-out ${navOpen ? 'max-h-60 md:max-h-full' : 'max-h-0 md:max-h-full'
              }`}
          >
            {['About', 'Contact', 'Product'].map((item, idx) => (
              <li
                key={idx}
                className="text-[yellow] font-bold hover:underline cursor-pointer px-2 py-5 md:py-0"
                onClick={() => setNavOpen(false)}
              >
                <Link to={`/dashboard/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="w-full h-64 bg-[url('https://i.ytimg.com/vi/NpawwQf0tiQ/maxresdefault.jpg')] bg-cover bg-center rounded-xl flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold drop-shadow-lg">All Product</h1>
      </div>

     
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Product Category</h2>

        <div className="flex gap-4 mb-6">
          <button className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">Coffee</button>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Food</button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Ramen</button>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search product..."
            className="flex-1 px-4 py-2 border border-yellow-600 rounded-lg bg-transparent placeholder-yellow-300 text-white font-bold focus:outline-none focus:ring-2 focus:ring-yellow-600"
            value={Search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">Search</button>
        </div>

    
        <div className="flex flex-row flex-wrap gap-10 justify-center">
          {ali.map((item) => (
            <div
              key={item.id}
              className="flex flex-col text-black transform transition duration-300 hover:scale-105 hover:shadow-xl rounded-2xl overflow-hidden bg-white"
            >
              <img src={item.img} alt="" className="h-30 w-50 object-cover" />
              <div className="gap-3 p-2 flex flex-col justify-between h-full">
                <p className="text-center font-bold text-sm py-2">{item.name}</p>
                <p className="text-sm text-gray-700 text-center">₱: {item.price}</p>
                <div className="flex justify-center gap-2 text-sm py-2">
                  <button onClick={notifyAddCart} className="bg-[green] rounded-2xl w-20 text-white font-sans hover:bg-green-700">Add Cart</button>
                  <button onClick={notifyBuyNow} className="bg-[yellow] rounded-2xl w-20 font-sans hover:bg-yellow-400">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Product;
