
import { createContext, useState ,useRef, useEffect} from 'react';
import Cart from './cart'

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
const Verify = ({hadlebutton, hadlecancel}) => {

  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const numberRef = useRef(null);
  const emailRef = useRef(null);
  const addressRef = useRef(null);
  const [userIDs  , setId] =useState(null)


    useEffect(()=>{ 
    fetch(`${API_URL}/userId`,{ 
      credentials : 'include'
    })
    .then((res) => { 
      if(res.ok){ 
        return res.json()
      }
    }).then((data) => setId(data)
    ).catch((err) => console.error("fething error" ,err))
   },[])


  

  const handleclick= async(id)=>{

      try{ 
        const response= await fetch(`${API_URL}/fullVerify`,{ 

          method : 'POST', 
          headers : {'Content-Type' : 'application/json' },
          body : JSON.stringify({
              userID : id,
              name: nameRef.current.value,
              age: parseInt(ageRef.current.value),
              gmail: emailRef.current.value,
              number: numberRef.current.value,
              address: addressRef.current.value
       
          })
        })
        
        if(!response.ok){ 
          throw new Error("May error sa request");

        }else{ 
          const  result =  await response.json()
          if(result)
            return window.location.reload()
          
        }

      }catch(err){ 
        console.error(err.message);
      }
       
    
  }

   return (
    <div>
<div className="fixed inset-0 z-50 flex items-center justify-center">
  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

 
  <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">


    <h2 className="text-2xl font-bold text-gray-800 text-center">
      Verify Your Information
    </h2>
    <p className="text-sm text-gray-500 text-center mt-1">
      Please confirm your details before checkout
    </p>


    <div className="mt-6 space-y-4">

      <input
      ref={nameRef}
        type="text"
        placeholder="Full Name"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <input
      ref={ageRef}
        type="number"
        placeholder="Age"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <input
      ref={numberRef}
        type="text"
        placeholder="Mobile Number"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <input
        ref={emailRef}
        type="email"
        placeholder="Email Address"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
      />

      <textarea
      ref={addressRef}
        rows="3"
        placeholder="Full Address"
        className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
      />
    </div>

    <div className="mt-6 flex gap-3">
      <button onClick={ () =>hadlecancel()} className="flex-1 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">Cancel</button>

      <button onClick={() => handleclick(userIDs)}
        className="flex-1 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">
        Verify
      </button>
    </div>
  </div>
</div>

      
    </div>
  )
}
export default Verify
