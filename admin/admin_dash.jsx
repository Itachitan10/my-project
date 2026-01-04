import React, { useState, useEffect } from "react";
import { PlusCircle, List, ShoppingCart, LogOut, Turtle, Truck } from "lucide-react";
import AddProduct from "./addproduct";
import ListItems from "./list";
import OrderPage from "./orders";
function AdminDash() {
  const [page, setPage] = useState(() => {return localStorage.getItem("adminPage") || "add";});
  const [icon , seticon] =useState(true)

  useEffect(() => {
    localStorage.setItem("adminPage", page);
  }, [page]);

  const component = {
    add: <AddProduct />,
    list: <ListItems/>,
    orders: <OrderPage />,
  };

  const navItem = (key, label, Icon) => (
    <button   onClick={() => setPage(key)} className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition  ${page === key ? "bg-indigo-600 text-white shadow": "text-gray-300 hover:bg-gray-700" }`}  > <Icon size={18} /> {label}
    </button>);

  return (
    <div>
    <div className="hidden  md:flex min-h-screen bg-gray-900 text-gray-200">
      <aside className="w-64 bg-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-indigo-400 mb-10 text-center">
            Ramen Admin
          </h1>

          <nav className="flex flex-col gap-2">
            {navItem("add", "Add Product", PlusCircle)}
            {navItem("list", "Product List", List)}
            {navItem("orders", "Orders", ShoppingCart)}
          </nav>
        </div>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-600 hover:text-white transition">
          <LogOut size={18} /> Logout</button>
       </aside>

       {/* Main Content */}
       <main className="flex-1 p-8 overflow-auto">
        <header className="mb-6">
          <h2 className="text-2xl font-bold">
            {page === "add" && "Add New Product"}
            {page === "list" && "Product List"}
            {page === "orders" && "Orders"}
          </h2>
          <p className="text-sm text-gray-400">
            Manage your ramen shop efficiently
          </p>
        </header>

        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          {component[page]}
        </div>
      </main>
    </div>


    <div className="md:hidden flex">  
      <div className="bg-gray-900 w-screen flex flex-row justify-between items-center px-10">
           <h1 className="text-xl font-bold text-indigo-400 py-5 px-5">
            Ramen Admin
          </h1>
          {!icon ?
           <button className="w-8 md:hidden text-2xl text-[#8d93b1]" onClick={() =>seticon(true)} >✖</button> :
           <button className="w-8 md:hidden text-2xl text-[#8d93b1]" onClick={()=>seticon(false)}>☰</button>
          }
      </div>
    </div>
    
      {!icon &&
          <div className="flex justify-center bg-blend-lighten">
             <nav size={10} className="mt-1 text-x flex font-semibold flex-col gap-1 ">
           <button onClick={() => seticon(true)} >{navItem("add", "Add Product", PlusCircle,)}</button>
             <button onClick={() => seticon(true)} >{navItem("list", "Product List", List)}</button> 
            <button onClick={() => seticon(true)} >{navItem("orders", "Orders", ShoppingCart)}</button>
            </nav>
          </div>
       } 
       <div className="flex md:hidden bg-gray-800 rounded-xl p-2 mt-10 shadow-lg">
          {component[page]}
        </div>
  </div>
  );
}

export default AdminDash;

// {isOpen && (
//   <div className="fixed inset-0 bg-white z-40 p-6">
//     <button
//       className="text-2xl absolute top-4 right-4"
//       onClick={() => setIsOpen(false)}
//     >
//       ✖
//     </button>

   
//   </div>
// )}