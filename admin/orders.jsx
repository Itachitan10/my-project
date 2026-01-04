import React, { useState } from "react";
import { ShoppingCart, CheckCircle, XCircle } from "lucide-react";

export default function OrderPage() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Juan Dela Cruz",
      item: "Special Ramen",
      qty: 2,
      price: 220,
      status: "pending",
    },
    {
      id: 2,
      customer: "Maria Santos",
      item: "Tonkotsu Ramen",
      qty: 1,
      price: 180,
      status: "completed",
    },
  ]);

  const completeOrder = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "completed" } : order
      )
    );
  };

  const deleteOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-100">
        <ShoppingCart className="text-indigo-400" />
        Orders
      </h1>

      <div className="overflow-x-auto rounded-lg border border-gray-700">
        <table className="w-full text-sm text-gray-200">
          <thead className="bg-gray-800 sticky top-0 z-10">
            <tr>
              {["Customer", "Item", "Qty", "Price", "Status", "Actions"].map(
                (head) => (
                  <th
                    key={head}
                    className="px-4 py-3 text-left font-semibold text-gray-300"
                  >
                    {head}
                  </th>
                )
              )}
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-700 hover:bg-gray-800 transition"
              >
                <td className="px-4 py-3 font-medium">{order.customer}</td>
                <td className="px-4 py-3">{order.item}</td>
                <td className="px-4 py-3 text-sky-400 font-bold">
                  {order.qty}
                </td>
                <td className="px-4 py-3 text-green-400 font-bold">
                  ₱{order.price}
                </td>

                <td className="px-4 py-3">
                  {order.status === "pending" ? (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-semibold">
                      Pending
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                      Completed
                    </span>
                  )}
                </td>

                <td className="px-4 py-3 flex gap-2">
                  {order.status === "pending" && (
                    <button
                      onClick={() => completeOrder(order.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md text-xs font-semibold transition"
                    >
                      <CheckCircle size={14} /> Done
                    </button>
                  )}

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md text-xs font-semibold transition"
                  >
                    <XCircle size={14} /> Delete
                  </button>
                </td>
              </tr>
            ))}

            {orders.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-10 text-center text-gray-400"
                >
                  No orders yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
