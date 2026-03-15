import React, { useState } from "react";
  const VITE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000"
export default function AddProduct() {
  const [img, setImg] = useState(null);
  const [imgURL, setImgURL] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const formatData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImg(file);
    setImgURL(URL.createObjectURL(file));
  };

  const handleSubmit = (file) => {
    if (!file || !name || !price || !desc || !category) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("myimg", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("desc", desc);

    fetch(`${VITE_API_URL}/uploadIMg`, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((data) => data ? window.location.reload() : console.error('error'))
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="h-[80vh]0 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-2xl p-6 border border-gray-700">
        <h1 className="text-2xl font-bold text-indigo-400 text-center mb-6">
          Add New Item
        </h1>

        <div className="flex justify-center mb-4">
          {imgURL && (
            <img
              src={imgURL}
              alt="preview"
              className="w-24 h-24 rounded-2xl border border-gray-600 object-cover"
            />
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="font-medium text-gray-300">Product Image</label>
            <input
              type="file"
              onChange={formatData}
              className="w-full mt-1 border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
            />
          </div>

          <div>
            <label className="font-medium text-gray-300">Product Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter product name"
              className="w-full mt-1 border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <div>
            <label className="font-medium text-gray-300">Description</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Short description..."
              className="w-full mt-1 border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 placeholder-gray-400 h-24 resize-none focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>
          </div>

          <div>
            <label className="font-medium text-gray-300">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none"
            >
              <option value="">Select category</option>
              <option value="Ramen">Ramen</option>
              <option value="Coffee">Coffee</option>
              <option value="Drinks">Drinks</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          <div>
            <label className="font-medium text-gray-300">Price</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="0.00"
              className="w-full mt-1 border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          <button
            onClick={() => handleSubmit(img)}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Add Product
          </button>
        </div>
      </div>

    
    </div>
  );
}
