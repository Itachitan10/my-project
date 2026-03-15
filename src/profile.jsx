import { Link } from "react-router-dom";

export default function ProfilePage() {
  const menuItems = [
    "Favourites",
    "Downloads",
    "Languages",
    "Location",
    "Subscription",
    "Display",
    "Clear Cache",
    "Clear History",
    "Log Out",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4 py-8">
      <div className="bg-white w-full max-w-md md:max-w-2xl rounded-3xl shadow-xl p-6 md:p-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl md:text-2xl font-semibold">My Profile</h1>
          <button className="text-gray-600 text-xl">⚙️</button>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.pravatar.cc/150"
            alt="profile"
            className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-lg md:text-xl">
              Sabrina Aryan
            </h2>
            <p className="text-gray-500 text-sm">
              SabrinaAry208@gmail.com
            </p>
            <Link
              to="/edit-profile"
              className="bg-blue-500 hover:bg-blue-600 transition text-white text-sm px-3 py-1.5 rounded-md mt-2 inline-block"
            >
              Edit Profile
            </Link>
          </div>
        </div>

        <hr className="mb-4" />

        {/* Menu Items */}
        <div className="space-y-3 text-gray-700">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center cursor-pointer hover:bg-gray-100 p-3 rounded-xl transition"
            >
              <span>{item}</span>
              <span className="text-gray-400">›</span>
            </div>
          ))}
        </div>

        <div className="text-center text-gray-400 text-xs mt-8">
          App Version 2.3
        </div>
      </div>
    </div>
  );
}