import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ShoppingCart } from "lucide-react";
import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  const [cartItems, setCartItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Logout error");
        window.location.href = "http://localhost:3000/login";
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetch("http://localhost:4000/userId", { credentials: "include" })
      .then((res) => (res.ok ? res.json()
       : setTimeout(() => {
        window.location.href ='/login'
       }, 2000)))
      .then((data) => setUserId(data.userId))
      .catch(console.error);
  }, []);

  const fetchProducts = () => {
    setLoading(true);
    fetch("http://localhost:4000/product")
      .then((res) => (res.ok ? res.json() : Promise.reject("Fetch failed")))
      .then((data) => {
        setProducts(data.product);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setLoading(false);
      });
  };

  useEffect(fetchProducts, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      cartItems.forEach((item) => {
        fetch("http://localhost:4000/cartValue", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item),
        }).catch(console.error);
      });
    }
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const item = {
      id: product.id,
      user_id: userId,
      img: product.img,
      name: product.name.trim(),
      price: product.price,
      quantity: 1,
    };
    setCartItems((prev) => [...prev, item]);
    toast.success(
      <div className="flex items-center gap-2">
        <ShoppingCart size={18} /> Added to cart!
      </div>,
      {
        position: "top-right",
        autoClose: 2000,
        theme: "colored",
        icon: false,
      }
    );
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#343634] text-white items-center text-center" >
      <header className="bg-[#221f1f]">
        <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto relative">
          <h1 className="text-xl font-bold">
            my <span className="text-yellow-400">ramen shop</span>
          </h1>
          <button
            className="md:hidden text-yellow-400"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
          <ul
            className={`t absolute md:static top-full left-0 w-full md:w-auto bg-[#221f1f] md:flex gap-5 text-yellow-400 font-semibold px-4 md:px-0 py-2 md:py-0 transition-all duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden md:flex"
            }`}
          >
            {["About", "Contact", "Product"].map((page, idx) => (
              <li key={idx} className="py-2 md:py-0">
                <Link to={`/${page.toLowerCase()}`} className="hover:underline block">
                  {page}
                </Link>
              </li>
            ))}
            <li className="py-2 md:py-0 flex justify-center">
              <Link to="/dashboard/cart" className="hover:underline flex items-center gap-1">
                <FaShoppingCart size={17}  /> Cart
              </Link>
            </li>
            <li className="py-2 md:py-0">
              <button
                onClick={logout}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-full text-sm"
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <div
        className="w-full h-48 bg-cover bg-center flex items-center justify-center text-3xl font-bold"
        style={{
          backgroundImage:
            "url('https://i.ytimg.com/vi/NpawwQf0tiQ/maxresdefault.jpg')",
        }}
      >
        All Products
      </div>

      {/* Search */}
      <div className="px-4 max-w-6xl mx-auto mt-6">
        <input
          className="w-full px-4 py-2 border border-yellow-600 bg-transparent rounded text-white placeholder-yellow-300"
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Main Content */}
      <main className="p-4 max-w-6xl mx-auto">
        {error && (
          <div className="bg-red-200 text-red-800 p-3 rounded my-4 text-center">
            Error: {error}
            <button
              onClick={fetchProducts}
              className="ml-4 px-3 py-1 bg-red-600 rounded"
            >
              Retry
            </button>
          </div>
        )}

        {loading ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="w-[48%] h-48 bg-gray-300 rounded animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between gap-3">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-[48%] sm:w-[47%] md:w-[30%] bg-white text-black rounded shadow overflow-hidden"
                >
                  <div
                    className="h-28 bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.img})` }}
                  />
                  <div className="p-2 text-center">
                    <h2 className="text-sm font-semibold truncate">
                      {product.name}
                    </h2>
                    <p className="text-yellow-600 font-bold text-sm mt-1">
                      ${product.price}
                    </p>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-2 w-full bg-blue-500 text-white py-1 rounded hover:bg-blue-600 text-sm"
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center w-full mt-4">No products found.</p>
            )}
          </div>
        )}
      </main>

      <ToastContainer position="top-right" autoClose={2000} theme="dark" />
    </div>
  );
};

export default Product;
