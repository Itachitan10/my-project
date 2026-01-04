import React, { useEffect, useState } from "react";
import Deletemodal from "../modal/deletemodal";
import Editmodal from "../modal/editmodal";

const List = () => {  
  const [product , setProducts] = useState([]);
  const [deletemodal , setdeletemodal] = useState(null); 
  const [editmodal, setEditmodal] = useState(null);
  const [currentProduct , setCurrentProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/product", {
      method: "GET",
      credentials: "include",
    })
      .then(res => res.json())
      .then(data => setProducts(Array.isArray(data) ? data : []))
      .catch(() => setProducts([]));
  }, []);

  const handelete = async () => {
    try {
      const id_delete = currentProduct.id; 
      await fetch(`http://localhost:4000/deleteItem/${id_delete}`, { method: "DELETE" })
        .then(res => res.json())
        .then(data => data ? setTimeout(() => { window.location.reload() }, 1000) : console.error("error deleting item"))
        .catch(err => console.error('error', err));
      setCurrentProduct(null);
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col bg-gray-900 p-6 rounded-2xl text-gray-200 shadow-lg">
        {editmodal && <Editmodal {...currentProduct} />}
        {deletemodal && <Deletemodal name={currentProduct?.name} onConfirm={handelete} onCancel={() => setdeletemodal(false)} />}
        <h2 className="text-3xl font-semibold mb-6">📦 Product List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-gray-700 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-gray-400 uppercase text-xs">
              <tr>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {product.map(p => (
                <tr key={p.id} className="border-b border-gray-700 hover:bg-gray-800 transition">
                  <td className="p-2">
                    <img src={p.img} alt={p.name} className="w-14 h-14 object-cover rounded-lg" />
                  </td>
                  <td className="p-2 font-medium">{p.name}</td>
                  <td className="p-2 text-green-400 font-semibold">₱{p.price}</td>
                  <td className="p-2">{p.category}</td>
                  <td className="p-2 flex gap-2">
                    <button onClick={() => { setEditmodal(true); setCurrentProduct(p); }} className="bg-indigo-600 hover:bg-indigo-700 px-4 py-1.5 rounded-lg text-xs font-medium transition">Edit</button>
                    <button onClick={() => { setdeletemodal(true); setCurrentProduct(p); }} className="bg-red-600 hover:bg-red-700 px-4 py-1.5 rounded-lg text-xs font-medium transition">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {product.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <span className="text-4xl mb-3">🫙</span>
            <p>No products found</p>
          </div>
        )}
      </div>

    {/* mobile view */}
<div className="md:hidden flex justify-center">
  <div className="flex flex-col bg-gray-900 rounded-2xl text-gray-200 shadow-lg w-full p-4 mx-auto">
    {editmodal && <Editmodal editId={currentProduct?.id} name={currentProduct?.name} img={currentProduct?.img} category={currentProduct?.category} description={currentProduct?.description} price={currentProduct?.price} />}
    {deletemodal && (<Deletemodal name={currentProduct?.name} onConfirm={handelete} onCancel={() => setdeletemodal(false)} />)}
    
    <h2 className="text-xm font-semibold mb-6 text-center">📦 Product List</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full text-[10px] border border-gray-700 rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-gray-400 uppercase text-[8px]">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-5 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.map(p => (
            <tr key={p.id} className="border-b border-gray-700 hover:bg-gray-800 transition">
              <td className="p-4">
                <img src={p.img} alt={p.name} className="w-11 h-11 object-cover rounded-lg"/>
              </td>
              <td className="p-4 font-medium">{p.name}</td>
              <td className="p-4 text-green-400 font-semibold">₱{p.price}</td>
              <td className="p-4">{p.category}</td>
              <td className="flex pt-6 justify-center gap-1">
                <button onClick={() => { setEditmodal(true); setCurrentProduct(p); }} className="bg-indigo-600 hover:bg-indigo-700 w-8 h-5 px-1 rounded text-[8px] transition">Edit</button>
                <button onClick={() => { setdeletemodal(true); setCurrentProduct(p); }} className="bg-red-600 hover:bg-red-700 w-8 h-5 px-1 rounded text-[8px] transition">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {product.length === 0 && (
      <div className="flex flex-col items-center justify-center py-[200px] text-gray-400">
        <span className="text-4xl mb-3">🫙</span>
        <p>No products found</p>
      </div>
    )}
  </div>
</div>

    </div>
  );
};

export default List;
