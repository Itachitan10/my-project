import React from 'react';
import { CheckCircle } from "lucide-react";
import { XCircle } from "lucide-react";


const Finalmodal = ({ success }) =>{
  if(!success) return
  
  const handleClick = () => { 
    success === "success" ? window.location.href = '/dashboard' : window.location.href = '/login';
  }



  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white/30 backdrop-blur-sm">
      {/* Modal box */}
      <div className='bg-white rounded-2xl shadow-2xl p-8 w-[300px] text-center'>
        <div className='flex justify-center mb-4'>{success == "success"?  
         <CheckCircle className="text-green-500" size={70} /> : 
          <XCircle className='text-red-500'  size={70}/>  
        }
        </div>
        <div className='text-lg mb-6'> {success == 'success' ? 'Welcome back! You are now logged in.' :  "invalid name or password"}
        </div>
        <button  
          onClick={handleClick}  
          className='bg-gray-100 hover:bg-gray-200 text-black font-semibold py-2 px-6 rounded-xl transition'
        >
          {success ? "Continue" : "Failed"}
        </button>
      </div>
    </div>
  );
}

export default Finalmodal;
