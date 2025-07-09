import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [findItem, setFind] = useState([]);
  const [full , setfull] = useState()

  console.log(full);
  
    useEffect(() => {
    fetch("https://itansramens.onrender.com/getfull", { credentials: "include" })
      .then((res) => (res.ok ? res.json()
       : Promise.reject("Failed user ID")))
      .then((data) =>  setfull(data))
      .catch(console.error);
     }, []);
  function checkout(){
 const  testing = findItem.find(i=> i.adress  && i.contact && i.fullname)
 testing ?   fetch("https://itansramens.onrender.com/orders", {
      method: "POST",
      credentials : "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(findItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Order placed successfully:", data);
    })  : setTimeout(() => {
      alert('pls full verify')
      window.location.href = '/dashboard/fullVerify'
    }, 1000);
  }


  useEffect(() => {
    fetch("https://itansramens.onrender.com/cartAllItem", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => {
        const userItem = [];
        data.forEach(i => {
          const existing = userItem.find(item => item.id === i.id);
          if (existing) {
            existing.quantity += 1;
          } else {
            userItem.push({
              id: i.id,
              name: i.name,
              image: i.image,
              price: i.price,
              quantity: i.quantity || 1,
            });
          }
        });
        setFind(userItem);
      })
      .catch(err => console.error('Fetching error:', err));
  }, []);

  const increaseQuantity = (id) => {
    const updated = findItem.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setFind(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = findItem.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setFind(updated);
  };

  const deleteItem = (id) => {
    fetch("https://itansramens.onrender.com/deleteCartItem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ id })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const updated = findItem.filter(item => item.id !== id);
          setFind(updated);
        } else {
          console.error('Failed to delete item:', data.message);
        }
      })
      .catch(err => console.error('Error deleting item:', err));
  };

  const totalCost = findItem.reduce((acc, item) => acc + item.price * item.quantity, 0);
  

  return (
    <div className="min-h-screen w-screen bg-[url('https://tse1.mm.bing.net/th/id/OIP.kCZGyPUl02MAYSoGvfTmfwHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center">
      {/* Navbar */}

<div className="bg-[#221f1f]">
  <nav className="p-4 flex justify-between items-center mx-4 md:mx-20">
    <h1 className="font-bold text-white text-2xl">
      my <span className="text-[yellow]">ramen shop</span>
    </h1>

    {/* Desktop menu */}
    <ul className="hidden md:flex flex-row gap-5 text-[yellow] font-bold">
      <li><Link to="/dashboard/about" className="hover:underline focus:outline-yellow-300">About</Link></li>
      <li><Link to="/dashboard/contact" className="hover:underline focus:outline-yellow-300">Contact</Link></li>
      <li><Link to="/dashboard/product" className="hover:underline focus:outline-yellow-300">Product</Link></li>
    </ul>
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden text-[yellow] p-2 rounded focus:outline-yellow-300 focus:ring-2 focus:ring-yellow-400"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      type="button"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        {isOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  </nav>

  <ul
    id="mobile-menu"
    className={`md:hidden flex flex-col gap-4 text-[yellow] font-bold text-center py-4 transition-all duration-300 ease-in-out
      ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
  >
    <li><Link to="/dashboard/about" className="hover:underline focus:outline-yellow-300" onClick={() => setIsOpen(false)}>About</Link></li>
    <li><Link to="/dashboard/contact" className="hover:underline focus:outline-yellow-300" onClick={() => setIsOpen(false)}>Contact</Link></li>
    <li><Link to="/dashboard/product" className="hover:underline focus:outline-yellow-300" onClick={() => setIsOpen(false)}>Product</Link></li>
  </ul>
</div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-10 px-4 md:px-20">
        {/* Cart Table */}
        <div className="flex-1 max-w-full md:max-w-[700px] h-[500px] p-6 md:p-7 shadow shadow-white rounded-2xl bg-[#221f1f] overflow-y-auto">
          <table className="text-white w-full border-collapse">
            <thead>
              <tr className="bg-amber-400">
                <th className="py-3 px-3">Image</th>
                <th className="px-2 py-3 text-center">Name</th>
                <th className="px-2 py-3 text-center">Quantity</th>
                <th className="px-2 py-3 text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {findItem.map((item) => (
                <tr key={item.id}>
                  <td className="px-5 py-3 text-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full mx-auto object-cover"
                      loading="lazy"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">{item.name}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-yellow-500 px-2 rounded text-black"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                      <span aria-live="polite" aria-atomic="true">{item.quantity}</span>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-yellow-500 px-2 rounded text-black"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-center">
                    ₱{(item.price * item.quantity).toFixed(2)}
                    <div className="mt-2">
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 text-sm"
                        aria-label={`Delete ${item.name} from cart`}
                      >Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-[#221f1f] p-8 md:p-10 border rounded-2xl w-full max-w-md h-[500px] shadow shadow-white text-white flex flex-col justify-between">
        {full && (
          <div className="flex flex-col gap-6 text-lg font-bold text-start">
            <h4 >Fullname: <span className="font-bold text-yellow-200">{full.fullname}</span></h4>
            <h4>Contact No: <span className="font-bold text-yellow-200">{full.contact}</span></h4>
            <h4>Address: <span className="font-bold text-yellow-200">{full.address}</span></h4>
            <h4>Shipping fee: ₱50</h4>
            <hr className="border-yellow-500"/>
            <h4>Total Cost: <span className="font-bold text-yellow-200">₱{(totalCost + 50).toFixed(2)}</span></h4>
          </div>
        )}
          <button  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-full transition"
           aria-label="Proceed to checkout" >Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
