import React, { useEffect, useState } from 'react';

const ProceedToCheckout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("GCash");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const theme = isDarkMode ? {
    bg: "bg-[#2b1e0f]",
    text: "text-white",
    card: "bg-[#3e2e16]",
    button: "bg-yellow-500 hover:bg-yellow-600 text-black"
  } : {
    bg: "bg-[#f3e8dc]",
    text: "text-black",
    card: "bg-white",
    button: "bg-yellow-500 hover:bg-yellow-600 text-black"
  };

  useEffect(() => {
    // Kukunin ang cart items
    fetch("http://localhost:4000/cartAllItem", { credentials: "include" })
      .then(res => res.json())
      .then(data => setCartItems(data))
      .catch(err => console.error(err));

    // Kukunin ang user info
    fetch("http://localhost:4000/getfull", { credentials: "include" })
      .then(res => res.json())
      .then(data => setUserInfo(data))
      .catch(err => console.error(err));
  }, []);

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  const confirmCheckout = () => {
    if (!userInfo?.fullname || !userInfo?.contact || !userInfo?.address) {
      alert("Pakiverify muna ang iyong profile bago mag-checkout.");
      window.location.href = "/dashboard/fullVerify";
      return;
    }

    fetch("http://localhost:4000/orders", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems,
        paymentMethod
      })
    })
      .then(res => res.json())
      .then(data => {
        alert(`Order placed using ${paymentMethod}`);
        console.log("Order data:", data);
      })
      .catch(err => console.error("Checkout error:", err));
  };

  return (
    <div className={`min-h-screen w-screen ${theme.bg} ${theme.text}`}>
      <div className="p-6 md:p-10 flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold">Pag-finalize ng Order</h1>

        <div className={`w-full max-w-3xl p-6 rounded-xl shadow ${theme.card}`}>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.name} x{item.quantity || 1}</span>
                <span>₱{(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </li>
            ))}
            <li className="flex justify-between font-semibold pt-2">
              <span>Shipping Fee</span>
              <span>₱50.00</span>
            </li>
            <li className="flex justify-between font-bold pt-2 border-t mt-2">
              <span>Total</span>
              <span>₱{(totalCost + 50).toFixed(2)}</span>
            </li>
          </ul>
        </div>

        <div className={`w-full max-w-3xl p-6 rounded-xl shadow ${theme.card}`}>
          <h2 className="text-xl font-bold mb-4">Impormasyon ng User</h2>
          {userInfo ? (
            <div className="space-y-2">
              <p><strong>Pangalan:</strong> {userInfo.fullname}</p>
              <p><strong>Contact:</strong> {userInfo.contact}</p>
              <p><strong>Address:</strong> {userInfo.address}</p>
            </div>
          ) : (
            <p>Kinukuha ang impormasyon...</p>
          )}
        </div>

        <div className={`w-full max-w-3xl p-6 rounded-xl shadow ${theme.card}`}>
          <label className="block font-semibold mb-2">Piliin ang Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="p-2 w-full rounded border text-black"
          >
            <option value="GCash">GCash</option>
            <option value="Card">Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>

        <button
          onClick={confirmCheckout}
          className={`${theme.button} font-bold py-3 px-8 rounded-full transition`}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default ProceedToCheckout;
