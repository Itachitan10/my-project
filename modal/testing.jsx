import React from 'react'

const testing = () => {
  return (
   <div className="min-h-screen bg-gray-100 flex justify-center p-4"> <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-4 flex flex-col"> <h1 className="text-xl font-bold mb-4">CART</h1>

{/* NIKE */}
    <div className="border rounded-xl p-3 mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">N</div>
          <div>
            <p className="font-semibold">Nike</p>
            <p className="text-xs text-gray-500">2 items</p>
          </div>
        </div>
        <p className="font-semibold">$596.00</p>
      </div>

      {/* Item 1 */}
      <div className="flex gap-3 mb-3">
        <div className="w-16 h-20 bg-gray-200 rounded-lg" />
        <div className="flex-1">
          <p className="font-semibold">Sportswear windrunner</p>
          <p className="text-sm text-gray-500">Color: Sand</p>
          <p className="text-sm text-gray-500">Size: L</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-full bg-gray-200">-</button>
          <span>1</span>
          <button className="w-7 h-7 rounded-full bg-gray-200">+</button>
        </div>
      </div>

      {/* Item 2 */}
      <div className="flex gap-3">
        <div className="w-16 h-20 bg-gray-200 rounded-lg" />
        <div className="flex-1">
          <p className="font-semibold">Kake Mock Pullover</p>
          <p className="text-sm text-gray-500">Color: Dark Blue</p>
          <p className="text-sm text-gray-500">Size: M</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 rounded-full bg-gray-200">-</button>
          <span>2</span>
          <button className="w-7 h-7 rounded-full bg-gray-200">+</button>
        </div>
      </div>
    </div>

    {/* FENDI */}
    <div className="border rounded-xl p-3 mb-20">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center text-sm font-bold">F</div>
          <div>
            <p className="font-semibold">Fendi</p>
            <p className="text-xs text-gray-500">2 items</p>
          </div>
        </div>
        <p className="font-semibold">$250.00</p>
      </div>
    </div>

    {/* CHECKOUT */}
    <div className="fixed bottom-16 left-0 right-0 px-4">
      <button className="w-full max-w-sm mx-auto bg-black text-white py-3 rounded-xl font-semibold block">
        CHECKOUT
      </button>
    </div>

    {/* BOTTOM NAV */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 text-xs">
      <span className="text-gray-400">Browse</span>
      <span className="text-gray-400">Search</span>
      <span className="font-semibold">Cart</span>
      <span className="text-gray-400">News</span>
      <span className="text-gray-400">Profile</span>
    </div>
  </div>
</div>

); }
  
export default testing


// import React from "react";

// const users = [
//   {
//     name: "Christine Gonzales",
//     handle: "@hladuken",
//     experience: "TENURED",
//     totalSales: 106,
//     hoursWorked: 4.0,
//     hoursUnit: "1 DAYS",
//     hourlyRate: 166,
//     totalSalary: 664,
//     badgeColor: "bg-yellow-500",
//   },
//   {
//     name: "Carlos Bueta",
//     handle: "@l0s",
//     experience: "NEWBIE",
//     totalSales: 75,
//     hoursWorked: 6.0,
//     hoursUnit: "2 DAYS",
//     hourlyRate: 125,
//     totalSalary: 750,
//     badgeColor: "bg-sky-400",
//   },
//   {
//     name: "Demo Seller",
//     handle: "@demo_seller",
//     experience: "NEWBIE",
//     totalSales: 60,
//     hoursWorked: 7.0,
//     hoursUnit: "2 DAYS",
//     hourlyRate: 125,
//     totalSalary: 875,
//     badgeColor: "bg-sky-400",
//   },
//   // Add more users similarly
// ];

// export default function Dashboard() {
//   return (
//     <div className="flex min-h-screen bg-gray-900 text-gray-200 font-sans">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6 flex flex-col justify-between">
//         <div>
//           <div className="text-xl font-bold text-indigo-400 mb-10">Admin Panel</div>
//           <nav className="space-y-2 text-sm">
//             <a href="#" className="block px-4 py-2 rounded bg-indigo-700 font-semibold">Dashboard</a>
//             <a href="#" className="block px-4 py-2 rounded hover:bg-indigo-700">Create User</a>
//             <a href="#" className="block px-4 py-2 rounded hover:bg-indigo-700">Sellers Management</a>
//           </nav>
//         </div>
//         <div className="text-xs text-indigo-300">
//           <p className="font-semibold">System Administrator</p>
//           <p>Administrator</p>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8 overflow-auto">
//         <header className="flex justify-between items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold mb-1">Live Host Performance Dashboard</h1>
//             <p className="text-gray-400 text-sm">Track and analyze live seller performance metrics</p>
//           </div>
//           <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-md font-semibold shadow hover:brightness-110 transition">
//             Create User
//           </button>
//         </header>

//         {/* Performance Rankings Header */}
//         <section className="mb-4">
//           <h2 className="text-xl font-semibold flex items-center gap-2">
//             <span>🏆</span> Performance Rankings
//           </h2>
//           <p className="text-gray-400 text-sm">Sorted by highest total sales</p>
//           <div className="mt-3 flex space-x-4">
//             <div className="bg-gray-700 p-3 rounded flex items-center gap-2 text-xs">
//               <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5H3v5a2 2 0 002 2z" />
//               </svg>
//               <div>
//                 <div className="text-gray-100 font-bold">CURRENT PERIOD:</div>
//                 <div>October 1 - 15, 2025</div>
//               </div>
//             </div>
//             <div className="bg-yellow-600 text-black font-bold p-3 rounded text-center text-sm self-center">
//               9 DAYS LEFT
//             </div>
//           </div>
//         </section>

//         {/* Table */}
//         <div className="overflow-x-auto max-h-[450px] rounded-lg border border-gray-700">
//           <table className="w-full table-auto border-collapse text-sm text-gray-200">
//             <thead className="bg-gray-700 sticky top-0 z-10">
//               <tr>
//                 <th className="p-3 text-left">RANK & USER</th>
//                 <th className="p-3 text-left">EXPERIENCE</th>
//                 <th className="p-3 text-left">TOTAL SALES</th>
//                 <th className="p-3 text-left">HOURS WORKED</th>
//                 <th className="p-3 text-left">HOURLY RATE</th>
//                 <th className="p-3 text-left">TOTAL SALARY</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user, idx) => (
//                 <tr
//                   key={idx}
//                   className={`border-l-4 ${idx === 0 ? "border-yellow-400" : "border-transparent"
//                     } hover:bg-gray-800`}
//                 >
//                   <td className="flex items-center gap-3 p-3 min-w-[220px]">
//                     <div className={`w-10 h-10 flex items-center justify-center rounded-md bg-yellow-300 text-gray-900 font-bold text-lg`}>
//                       {user.name[0]}
//                     </div>
//                     <div>
//                       <div className="font-semibold">{user.name}</div>
//                       <div className="text-xs text-gray-400">{user.handle}</div>
//                     </div>
//                   </td>
//                   <td className="p-3">
//                     <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${user.badgeColor}`}>
//                       {user.experience}
//                     </span>
//                   </td>
//                   <td className="p-3 text-green-400 font-bold">
//                     {user.totalSales}
//                     <div className="text-xs text-gray-500 uppercase">items sold</div>
//                   </td>
//                   <td className="p-3 text-sky-500 font-bold">
//                     {user.hoursWorked}h
//                     <div className="text-xs text-gray-500 uppercase">{user.hoursUnit}</div>
//                   </td>
//                   <td className="p-3 text-yellow-400 font-bold">
//                     ₱{user.hourlyRate}
//                     <div className="text-xs text-gray-500 uppercase">per hour</div>
//                   </td>
//                   <td className="p-3 text-green-400 font-bold">
//                     ₱{user.totalSalary.toFixed(2)}
//                     <div className="text-xs text-gray-500 uppercase">total salary</div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }






//   // useEffect(() => {
//   //   fetch("http://localhost:4000/product", {
//   //     method: "GET",
//   //     credentials: "include",
//   //   })
//   //     .then(res => res.json())
//   //     .then(data => setProducts(Array.isArray(data) ? data : []))
//   //     .catch(() => setProducts([]));
//   // }, []);

//   // const handleDelete = async () => {
//   //   if (!currentProduct) return;
//   //   try {
//   //     await fetch(`http://localhost:4000/deleteItem/${currentProduct.id}`, { method: "DELETE" });
//   //     setProducts(prev => prev.filter(p => p.id !== currentProduct.id));
//   //      setDeleteOpen(false);
//   //     setCurrentProduct(null);
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // };





//   // import React, { useEffect, useState } from "react";
//   // import Editmodal from "../modal/editmodal";
//   // import Deletemodal from "../modal/deletemodal";
  
//   // const List = () => {
//   //   const [product, setProducts] = useState([]);
//   //   const [editOpen, setEditOpen] = useState(false);
//   //   const [deleteOpen, setDeleteOpen] = useState(false);
//   //   const [currentProduct, setCurrentProduct] = useState(null);
  
  
//   //   useEffect(() => {
//   //     fetch("http://localhost:4000/product", {
//   //       method: "GET",
//   //       credentials: "include",
//   //     })
//   //       .then(res => res.json())
//   //       .then(data => setProducts(Array.isArray(data) ? data : []))
//   //       .catch(() => setProducts([]));
//   //   }, []);
  
//   //   const handleDelete = async () => {
//   //     if (!currentProduct) return;
//   //     try {
//   //       await fetch(`http://localhost:4000/deleteItem/${currentProduct.id}`, { method: "DELETE" });
//   //       setProducts(prev => prev.filter(p => p.id !== currentProduct.id));
//   //        setDeleteOpen(false);
//   //       setCurrentProduct(null);
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };
  
//   //   return (
//   //     <div className="bg-gray-900 p-8 rounded-xl text-gray-200">
//   //       <h2 className="text-2xl font-bold mb-6">Product List</h2>
//   //       {editOpen && currentProduct && ( <Editmodal  {...currentProduct} onClose={() => setEditOpen(false)}/> )}
//   //       {deleteOpen && currentProduct && (<Deletemodal name={currentProduct.name} img={currentProduct.img} onCancel={() => setDeleteOpen(false)} onConfirm={handleDelete} /> )}
  
//   //       <table className="min-w-full text-sm border border-gray-700">
//   //         <tbody>
//   //           {product.map(p => (
//   //             <tr key={p.id} className="border-b border-gray-700">
//   //               <td className="p-3">
//   //                 <img src={p.img} className="w-16 h-16 rounded" />
//   //               </td>
//   //               <td className="p-3">{p.name}</td>
//   //               <td className="p-3 text-green-400">₱{p.price}</td>
//   //               <td className="p-3">{p.category}</td>
//   //               <td className="p-3 flex gap-2">
//   //                 <button  onClick={() => {setCurrentProduct(p);setEditOpen(true); }}className="bg-indigo-600 px-3 py-1 rounded">Edit</button>
//   //                 <button onClick={() => {setCurrentProduct(p);setDeleteOpen(true);}} className="bg-red-600 px-3 py-1 rounded">Delete </button>
//   //               </td>
//   //             </tr>
//   //           ))}
//   //         </tbody></table>
  
//   //       {product.length === 0 && (
//   //         <div className="text-center py-10 text-gray-400">
//   //           No products found
//   //         </div>
//   //       )}
//   //     </div>
//   //   );
//   // };
  
//   // export default List;
  