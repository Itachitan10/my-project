import React from "react";

const Deletemodal = ({ name, onConfirm, onCancel }) => {
  return (
    <div>
    <div className=" fixed inset-0 backdrop-blur-md bg-black/40 md:hidden flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl w-96 p-6 text-gray-200 relative">
        
        <button  className="absolute top-2 right-2 text-gray-400 hover:text-gray-200" > &times;</button>
        <h2 className="text-xl font-bold mb-4 text-red-400"> Delete Item </h2>

        <p className="mb-6 text-sm"> Are you sure you want to delete{" "} <span className="text-white font-semibold">{name}</span>? <br />
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
            Cancel
          </button>

          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div>



    <div className="md:flex fixed inset-0 backdrop-blur-md bg-black/40 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl w-96 p-6 text-gray-200 relative">
        
        <button  className="absolute top-2 right-2 text-gray-400 hover:text-gray-200" > &times;</button>
        <h2 className="text-xl font-bold mb-4 text-red-400"> Delete Item </h2>

        <p className="mb-6 text-sm"> Are you sure you want to delete{" "} <span className="text-white font-semibold">{name}</span>? <br />
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
            Cancel
          </button>

          <button onClick={onConfirm} className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    </div> 
    </div>
  );
};

export default Deletemodal;
