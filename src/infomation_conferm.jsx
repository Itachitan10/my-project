
import Navbar from '../component/navbar'
import Footer from '../component/footer'
function Infomation_conferm() {
    const orderItems = [
    { name: "Tonkotsu Ramen", price: 250, qty: 2 },
    { name: "Shoyu Ramen", price: 220, qty: 1 },
  ];

  const shipping = 50;

  const subtotal = orderItems.reduce(
    (total, item) => total + item.price * item.qty, 0
  );
    const links = [
    { label: 'Home', to: '/dashboard' },
    { label: 'Cart', to: '/dashboard/cart' },
    { label: 'Product', to: '/dashboard/product' },
  ];  
  const total = subtotal + shipping;
    const user = {
    name: "Juan Dela Cruz",
    address: "123 Sakura Street, Angeles City",
    payment: "Cash on Delivery"
  };
   return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

      <div className="max-w-3xl w-full bg-white shadow-sm rounded-xl p-6">

        {/* Header */}
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Order Confirmation
        </h1>

        {/* User Info */}
        <div className="border-b pb-4 mb-4">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Customer Information
          </h2>

          <p className="text-gray-600 text-sm">
            <span className="font-medium">Name:</span> {user.name}
          </p>

          <p className="text-gray-600 text-sm">
            <span className="font-medium">Address:</span> {user.address}
          </p>

          <p className="text-gray-600 text-sm">
            <span className="font-medium">Payment Method:</span> {user.payment}
          </p>
        </div>

        {/* Order Table */}
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-700 mb-3">
            Order Summary
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-600">
              <thead>
                <tr className="border-b text-left text-gray-500">
                  <th className="py-2">Item</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Qty</th>
                  <th className="py-2 text-right">Total</th>
                </tr>
              </thead>

              <tbody>
                {orderItems.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">{item.name}</td>
                    <td>₱{item.price}</td>
                    <td>{item.qty}</td>
                    <td className="text-right">
                      ₱{item.price * item.qty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing */}
        <div className="border-t pt-4 space-y-2 text-sm text-gray-600">

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₱{subtotal}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>₱{shipping}</span>
          </div>

          <div className="flex justify-between font-semibold text-gray-800 text-base pt-2 border-t">
            <span>Total</span>
            <span>₱{total}</span>
          </div>

        </div>

        {/* Button */}
        <div className="mt-6 flex justify-end">
          <button className="px-5 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition">
            Confirm Order
          </button>
        </div>

      </div>
    </div>
  );
}

export default Infomation_conferm
