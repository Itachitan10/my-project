import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    price: ''
  });

  useEffect(() => {
    const savedProducts = localStorage.getItem('adminProducts');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.image || !newProduct.price) return alert('Please fill in all fields');

    const productToAdd = {
      ...newProduct,
      price: parseFloat(newProduct.price),
    };

    const updatedProducts = [...products, productToAdd];
    setProducts(updatedProducts);
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts));
    setNewProduct({ name: '', image: '', price: '' });
  };

  const handleRemoveProduct = (index) => {
    const updated = [...products];
    updated.splice(index, 1);
    setProducts(updated);
    localStorage.setItem('adminProducts', JSON.stringify(updated));
  };

  return (
    <div className="h-screen w-screen bg-[url('https://tse1.mm.bing.net/th/id/OIP.kCZGyPUl02MAYSoGvfTmfwHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center overflow-auto">
      <div className="bg-[#221f1f]">
        <nav className="p-4 flex justify-between items-center mx-4 md:mx-20">
          <h1 className="font-bold text-white text-2xl">
            admin <span className="text-[yellow]">ramen panel</span>
          </h1>

          <ul className="hidden md:flex flex-row gap-5 text-[yellow] font-bold">
            <li className="hover:underline cursor-pointer"><Link to="/dashboard">User Dashboard</Link></li>
            <li className="hover:underline cursor-pointer"><Link to="/dashboard/product">Products</Link></li>
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
            <li className="hover:underline cursor-pointer"><Link to="/dashboard" onClick={() => setIsOpen(false)}>User Dashboard</Link></li>
            <li className="hover:underline cursor-pointer"><Link to="/dashboard/product" onClick={() => setIsOpen(false)}>Products</Link></li>
          </ul>
        )}
      </div>

      <div className="flex justify-center flex-col items-center mt-10 gap-10 px-6 md:px-20">
        {/* Product Form */}
        <form
          onSubmit={handleAddProduct}
          className="bg-[#221f1f] p-6 rounded-xl shadow shadow-white w-full md:w-[600px] text-white"
        >
          <h2 className="text-yellow-400 font-bold text-2xl mb-4">Add New Product</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="text"
              name="image"
              value={newProduct.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
              placeholder="Price (₱)"
              className="p-2 rounded bg-gray-800 text-white"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full"
            >
              Add Product
            </button>
          </div>
        </form>

        {/* Product List */}
        <div className="w-full md:w-[800px] bg-[#221f1f] p-6 rounded-xl shadow shadow-white overflow-y-auto">
          <h2 className="text-yellow-400 font-bold text-2xl mb-4">Product List</h2>
          {products.length === 0 ? (
            <p className="text-white">No products added yet.</p>
          ) : (
            <table className="w-full text-white border-collapse">
              <thead>
                <tr className="bg-yellow-400 text-black">
                  <th className="p-2">Image</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2">
                      <img src={item.image} alt={item.name} className="w-16 h-16 mx-auto rounded-full" />
                    </td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">₱{item.price}</td>
                    <td className="p-2">
                      <button
                        onClick={() => handleRemoveProduct(index)}
                        className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded-full"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
