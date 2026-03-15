import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../component/footer';
import Navbar from '../component/navbar';
import Verify from './verify';

import paypal from '../adnmin_img/paypalimg.png'; 
import gcash from '../adnmin_img/gcash.webp'
import cod from '../adnmin_img/OIP (1).png'
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

const API_URL =  "http://localhost:4000";

console.log(API_URL);

const Cart = () => {
  const [value_cart, set_value_cart] = useState([]);
  const [orders, setcart] = useState([]);
  const [userid, setuserid] = useState(null);
  const [verifyopen, setverfyopn] = useState(false);
  const [verify, setverify] = useState(null);
   const [verifyError , setverifyError ] = useState(null)
   const [information ,setinformation] = useState([])
   const [payment_method , set_payment_method] = useState(null)

//    const func_checkout =  async() => {
//       if(!information){ 
//         verfication()
//       }else{
//        if(!orders){ 
//         console.log('orders is emty');
//        }else{ 
//          try{ 
//     const response = await fetch('http://localhost:4000/create_payment',{ 
//       method : "GET" , 
//       headers : {'Content-Type'  : "application/json"},
//       body : JSON.stringify ({ 
//         amount : 10000, 
//         currency : 'php',
//         payment_method : "gcash",
//         user_cart : orders
//       })
//     })

//     const data = await response.json() 
//     console.log(data);
    
   
//   }catch(error){ 
//      console.error("Checkout error:", error);

//   }
//        }
//       }
// }




// const func_checkout =  async() => {
//   try{ 
//     const response = await fetch('http://localhost:4000/create_payment',{ 
//       method : "GET" , 
//       headers : {'Content-Type'  : "application/json"},
//       body : JSON.stringify ({ 
//         amount : 10000, 
//         currency : 'php',
//         payment_method : "gcash",
//         user_cart : orders
//       })
//     })

//     const data = await response.json() 
//     console.log(data);
    
   
//   }catch(error){ 
//      console.error("Checkout error:", error);

//   }
// }



const handleCheckout = () => {    
  if (verifyError) {
    alert(verifyError);
    return;
  }


  const verfication = ( ) =>{ 
  if (verify === false) {
    setverfyopn(true);
  } else 
    if (verify === true) {
  } else {
    alert("Still verifying user...");
  }
};
}


   useEffect(() => {
  const fetchVerify = async () => {
    try {
      const res = await fetch(`${API_URL}/getfull`, {
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error('Server error while verifying');
      }
      const data = await res.json();
      if (data && Object.keys(data).length > 0) {
        setinformation(data)
        setverify(true);
      } else {
        setverify(false);
      }

     setverifyError(null); 
    } catch (error) {
      console.error('Verify fetch error:', error);
     setverifyError("Unable to verify user. Please try again."); 
      setverify(null); 
    }
  };

  fetchVerify();
}, []);



  // Verify user fetch
  
  const Cancel = () => {
    setverfyopn(false);
  };

  const increment = (item) => {
    setcart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              real_price: (cartItem.quantity + 1) * cartItem.price,
            }
          : cartItem
      )
    );
  };

  const decrement = (item) => {
    setcart((prev) =>
      prev
        .map((value) =>
          value.id === item.id
            ? {
                ...value,
                quantity: value.quantity - 1,
                real_price: (value.quantity - 1) * value.price,
              }
            : value
        )
        .filter((value) => value.quantity > 0)
    );
  };

  // Initialize cart from value_cart
  useEffect(() => {
    const cart_val = [];

    value_cart.forEach((v) => {
      const item = cart_val.find((p) => p.name === v.name);

      if (item) {
        item.quantity += 1;
        item.realprice = item.quantity * item.price;
        item.all_Id.push(v.id);
      } else {
        cart_val.push({
          users_id : userid,
          id: v.id,
          all_Id: [v.id],
          name: v.name,
          price: v.price,
          img: v.image,
          quantity: 1,
          realprice: v.price,
        });
      }
    });

    setcart(cart_val);
  }, [value_cart]);

  const handleDelete = async (ids) => {
    if (!ids) return;
    try {
      const res = await fetch(`${API_URL}/del_customerItem/${ids}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        throw new Error('Failed to delete item');
      }
      const data = await res.json();
      if (!data) console.error('Failed to delete');
      else setcart((prev) => prev.filter((item) => !ids.includes(item.id)));
    } catch (error) {
      console.error(error);
    }
  };

  // Get user ID
  useEffect(() => {
    fetch(`${API_URL}/userId`, { credentials: 'include' })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => setuserid(data))
      .catch((err) => console.error('fetching error', err));
  }, []);

  // Fetch all cart items
  useEffect(() => {
    fetch(`${API_URL}/cartAllItem`, { credentials: 'include' })
      .then((res) => {
        if (!res.ok) return [];
        return res.json();
      })
      .then((data) => set_value_cart(data))
      .catch((err) => console.error('fetching error', err));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2200,
      once: false,
    });
  }, []);

  const links = [
    { label: 'Home', to: '/dashboard' },
    { label: 'Cart', to: '/dashboard/cart' },
    { label: 'Product', to: '/dashboard/product' },
  ];

  return (
    <div>
      {verifyopen && <Verify hadlecancel={Cancel} />}
      <div data-aos="fade-down">
        <Navbar link={links} />
      </div>

      {/* Desktop View */}
      <div data-aos="fade-left" className="flex justify-center">
        <div className="hidden md:flex flex-row bg-white rounded-2xl mt-10 w-[85vw] h-[65vh]">
          <div className="w-[80%] overflow-y-auto mx-auto px-30 my-10">
            <h1 className="text-xl font-extrabold mb-8">Shopping Cart</h1>

            <ul className="grid grid-cols-6 gap-4 font-semibold pb-3 border-b">
              <li className="text-center">Product</li>
              <li className="text-center">Name</li>
              <li className="text-center">Price</li>
              <li className="text-center">Quantity</li>
              <li className="text-center">Subtotal</li>
               <li className="text-center">Action</li>
            </ul>

            {orders.map((items, index) => (
              <ul key={index}
                className="grid grid-cols-6 gap-8 items-center pt-6 mt-4 " >
                <li className="flex items-center gap-4 mx-5">
                  <img  className="w-20 h-20 object-cover rounded-md"  src={items.img}   alt="product" />
                </li>

                <li className='flex justify-center'><p className="font-medium ">{items.name}</p></li>
                <li className="text-center font-medium">₱ {items.price}</li>
                <li className="flex justify-center">
                  <div className="flex items-center gap-3 border h-7 px-4 rounded-2xl">
                    <button onClick={() => increment(items)} className="font-bold"> +</button>
                    <p>{items.quantity}</p>
                    <button onClick={() => decrement(items)} className="font-bold"> - </button>
                  </div>
                </li>

                <li className="text-center font-semibold">{items.realprice}</li>
                <li className="text-right">
                  <button onClick={() => handleDelete(items.all_Id)} className="px-5 text-red-500 font-semibold"  >
                    Delete
                  </button>
                </li>
              </ul>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-xl h-24">
            <div className="flex justify-center items-center">
              <div className="shadow-lg border rounded-xl mt-10 px-10 w-[400px] h-auto">
                <h2 className="text-lg font-bold pt-3 ">
                  Order Summary
                </h2>   

                
                <div  className='font-semibold my-5'>    
                 <p>name:{information.fullname} </p>
                   <p>adress : {information.address}</p>
                    <p>payment method : {payment_method}</p>
                    </div>  
              

                <div className="flex justify-between mb-3">
                  <span>Subtotal</span> <span> ₱ {orders.reduce((sum, item) => sum + item.realprice, 0)}</span>
                </div>

                <div className="flex justify-between mb-3">
                  <span>Shipping</span>
                  <span>₱50.00</span>
                </div>
                <div></div>
                <div className="flex justify-between font-semibold border-t pt-4 mt-4">
                  <span>Total</span>  <span>    ₱{orders.reduce((sum, item) => sum + item.realprice, 0) + 50}</span>  </div>

                  <div  ><h1 className='font-bold flex justify-center text-center items-center'>payment method</h1></div>
                  <div className="px-10 flex gap-5 mt-5">
                      <label className="cursor-pointer ">
                        <input onChange={(e) => set_payment_method(e.target.value)}  type="radio"name="select_payment" value="onlinePayment" className="hidden peer" />
                        <div className=" gap-5 w-[150px] h-[30px] border shadow-xl rounded-2xl flex items-center justify-center peer-checked:border-green-500 peer-checked:border-2">
                      <img className='w-10 h-10' src={paypal} alt="" />    
                      <img className='w-10 h-6' src={gcash} alt="" />
                       </div>
                      </label>

                      <label className="cursor-pointer ">
                        <input  onChange={(e) => set_payment_method(e.target.value)} type="radio" name="select_payment" value="cod" className="hidden peer" />
                        <div className="w-[100px] h-[30px] border shadow-xl rounded-2xl flex items-center justify-center peer-checked:border-green-500 peer-checked:border-2 gap-2"> 
                        <img className='w-5 h-4 flex items-center justify' src={cod} alt="" />  
                        <p className='text-[12px] font-bold'>cod</p>
                         </div>        
                      </label>
                    </div>
              <button 
                onClick={() => (!verify ? setverfyopn(true) : func_checkout())} className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold mb-10" >  CHECKOUT
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default Cart;
