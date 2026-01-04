import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Footer from '../component/footer';
import Navbar from '../component/navbar'
import { useState, useEffect } from 'react';


const cart = () => {
  const [value_cart , set_value_cart] = useState([])
  const [cart ,setcart] = useState([]);
  const [userid , setuserid] = useState([]);

  
console.log(cart);

useEffect(() => {
  const cart_val = [];

  value_cart.forEach(v => {
  
    const item = cart_val.find(p => p.name === v.name);

    if (item) {
      item.price += item.quantity * item.real_price
      item.quantity +=1 ;
    } else {
      cart_val.push({
        id: v.id,
        name: v.name,
        price: 0,
        img: v.image,
        quantity: 1,
        real_price : v.price
     
      });
    }
  });

  setcart(cart_val);
}, [value_cart]);

  
  
  useEffect(()=>{ 
  fetch('http://localhost:4000/userId',{ 
    credentials : 'include'
  })
  .then((res) => { 
    if(res.ok){ 
      return res.json()
    }
  }).then((data) => setuserid(data)
  ).catch((err) => console.error("fething error" ,err))
 },[])




  useEffect (()=>{ 
     try{ 
  fetch('http://localhost:4000/cartAllItem',{
    credentials : 'include'
  })
  .then((res)=>{ 
    if(res.ok) { 
      return res.json()
    } else{ 
      console.error('no item existing'); 
    }
  }).then((data)=>{
   set_value_cart(data)
  }).catch((err) => console.error("fetching error" , err))

  }catch(err){ 
    console.error('fetch has no data' , err)
    }
},[])



  useEffect(()=>{ 
    AOS.init({duration :2200, 
      once : false
    })
  },[])
    const links = [
    { label: "Home", to: "/dashboard" },
    { label: "Cart", to: "/dashboard/cart" },
    { label: "Product", to: "/dashboard/product" },
  ];
  return (
    <div>
    <div data-aos='fade-down'>
  <Navbar link={links} />
</div>

<div data-aos="fade-left" className="flex justify-center">
  <div className="hidden md:flex flex-row bg-white rounded-2xl mt-10 w-[85vw] h-[65vh]">

    <div className="w-[80%] mx-auto px-30 my-10">
      <h1 className="text-xl font-extrabold mb-8">
        Shopping Cart
      </h1>

      <ul className="grid grid-cols-4 gap-4 font-semibold pb-3 border-b">
        <li className="text-left">Product</li>
        <li className="text-center">Price</li>
        <li className="text-center">Quantity</li>
        <li className="text-right">Subtotal</li>
      </ul>

      {cart.map((items, index) => (
        <ul
          key={index}
          className="grid grid-cols-4 gap-4 items-center pt-6 mt-4 border-b"
        >
          <li className="flex items-center gap-4">
            <img
              className="w-20 h-20 object-cover rounded-md"
              src={items.img}
              alt="product"
            />
          </li>

          <li className="text-center font-medium">
            ₱{items.price}
          </li>

          <li className="flex justify-center">
            <div className="flex items-center gap-4 border h-7 px-4 rounded-2xl">
              <button onClick={() =>setcart({quantity : 0})} className="font-bold">+</button>
              <p>{items.quantity}</p>
              <button className="font-bold">-</button>
            </div>
          </li>

          <li className="text-right font-semibold">
            ₱{items.totalprice}
          </li>
        </ul>
      ))}
    </div>

    <div className="w-xl h-24">
      <div className="flex justify-center items-center">
        <div className="shadow-lg border rounded-xl mt-10 px-10 w-[400px] h-[400px]">

          <h2 className="text-lg font-bold pt-8 pb-6">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>₱600.00</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Shipping</span>
            <span>₱50.00</span>
          </div>

          <div className="flex justify-between font-semibold border-t pt-4 mt-4">
            <span>Total</span>
            <span>₱650.00</span>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl font-semibold">
            CHECKOUT
          </button>

        </div>
      </div>
    </div>

  </div>
</div>

    <div >




  <div className="md:hidden min-h-screen bg-gray-100 flex justify-center p-4">

   {cart.map((itm, index) => (
     <div key={index} className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-4 flex flex-col"> <h1 className="text-xl font-bold mb-4">CART</h1>
    <div className="border rounded-xl p-3 mb-4">
       <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">

          
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">U</div>
          
       <div>
            <p className="font-semibold">user</p>
            <p className="text-xs text-gray-500">{itm.quantity}items</p>
          </div>
        </div>
        <p className="font-semibold">$596.00</p>
        </div>

        {/* Item 2 */}
         <div className="flex gap-3">
         <img
              className="w-18 h-20 object-cover rounded-md"
              src={itm.img}
              alt="product"
            />
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
            <p className="font-semibold">Christian</p>
            <p className="text-xs text-gray-500">{itm.quantity} items</p>
          </div>
        </div>
        <p className="font-semibold">${itm.price}</p>
      </div>
    </div>

    {/* CHECKOUT */}
    <div className=" fixed bottom-16 left-0 right-0 px-4">
      <button className="w-full max-w-sm mx-auto bg-black text-white py-3 rounded-xl font-semibold block">
        CHECKOUT
      </button>
    </div>

  
  </div>
     ))}

</div>
    </div>
    <Footer/>
    </div>
  )

}


export default cart

