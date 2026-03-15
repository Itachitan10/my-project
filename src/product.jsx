// Product.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import AOS from 'aos'; 
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
import 'aos/dist/aos.css';
const Product = () => {
  const [products, setProducts] = useState([]);
  const [allcategory, setallcartegory] = useState("all");
  const [userId, setuserid] = useState([]); 
  
  
    //  for Animation scroling
      useEffect(()=>{ 
        AOS.init({duration  : 800 , 
          once : false
        })
      },[])
      useEffect(() => {    
          AOS.refresh();
      }, []);
  
      // users_Id
  useEffect(()=>{
    fetch(`${API_URL}/userId`, {credentials : 'include'})
     .then((res) => {
      if(res.ok){
        return res.json() 
      }else{ 
        // window.location.href='/login'
      }
     })
    .then((data) => setuserid(data))
    .catch((err) => console.error('fetching error', err))
  },[])
 

  


  const addcart = (user_values_cart) => { 

    console.log(user_values_cart);
    
  
    
  if(!user_values_cart) return;
  
  fetch(`${API}/cartValue`, {
    credentials : 'include',
    method: 'POST', 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user_values_cart),
  })
  .then(res => res.json())  // return json() para sa next then
  .then(data => console.log(data))
  .catch(err => console.error('fetching error', err));
};

  const fillter =  allcategory === "all"   ? products : products.filter((items) => items.category === allcategory );

  // CHOICE BUTTONS — UPDATED COLORS (only colors changed)
  const choice = [
    {  buttons: "all",   color:"p-1 w-20 rounded-2xl font-sans border border-[#020826] text-[#020826] hover:bg-[#020826] hover:text-[#fffffe] hover:duration-300",  },
    {  buttons: "Ramen",color: "p-1 w-20 rounded-2xl font-sans border border-[#020826] text-[#020826] hover:bg-[#020826] hover:text-[#fffffe] hover:duration-300", },
     { buttons: "Coffee", color: "p-1 w-20 rounded-2xl font-sans border border-[#020826] text-[#020826] hover:bg-[#020826] hover:text-[#fffffe] hover:duration-300", },
  ];


  useEffect(() => {
    fetch(`${API_URL}/product`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("Unexpected response format", data);
          setProducts([]);
        }
      })
      .catch((err) => {
        console.error("Fetching error", err);
        setProducts([]);
      });
  }, []);

    const link_nav = [
    { label: 'Home', to: '/dashboard' },
    { label: 'Cart', to: '/dashboard/cart' },
    { label: 'Product', to: '/dashboard/product' },
  ];
  return (
    <div > 
    <div className="md:flex hidden min-h-screen flex-col bg-[#f9f4ef] text-[#020826] font-sans">
    <div data-aos="fade-down">
      <Navbar link={link_nav} />
      </div>
      <div data-aos="fade-up" className="h-20 flex items-center justify-center text-3xl font-semibold text-[#020826] border-b border-[#eaddcf]">
        All Products
      </div>

      <div data-aos=' fade-right' className="px-10 py-5 flex justify-center gap-5">
        {choice.map((buttons1, index) => (
          <div key={index}>
            <button
              onClick={() => setallcartegory(buttons1.buttons)}
              className={buttons1.color}
            >
              {buttons1.buttons}
            </button>
          </div>
        ))}
      </div>

      <main  className="items-center mb-10 flex justify-center">
        <div  data-aos='fade-down' className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {fillter.map((p, index) => (
            <div  key={index} className="border border-[#eaddcf] p-3 rounded-2xl shadow bg-[#fffffe]">
              <img alt="preview" className="rounded-2xl md:w-40 h-45" src={p.img} />
              <h6 className="mt-4 flex justify-center font-semibold text-[#020826]"> ${p.price.toFixed(1)}
                <span className="font-light pl-5 text-sm text-[#716040]">stock/0 </span>
              </h6>

              <p className="pt-2 m-4 flex justify-center text-[#716040]">
                {p.name}
              </p>

              <div className="flex flex-row gap-3 justify-center">
                <button onClick={() => addcart({...p , user_Id:userId.userId, quantity : 1 })} className="w-20 h-10 rounded-xl border border-[#020826] hover:bg-[#020826] hover:text-[#fffffe] hover:duration-300"> add cart
                </button>
                <button
                   className="w-20 h-10 rounded-xl border border-[#020826] hover:bg-[#020826] hover:text-[#fffffe] hover:duration-300">
                  checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
         <style>{`@keyframes scroll-left { 
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        } .carousel-track {
           animation: scroll-left 30s linear infinite;
           will-change: transform;
          }
        `}</style>

      <div data-aos="fade-up"><Footer /></div>
     
    </div>

    

    {/* phone view */}
      <Navbar link={link_nav} />
     <div className="md:hidden flex flex-col bg-[#f9f4ef] text-[#020826] font-sans">
  
      <div data-aos="fade-up" className="h-20 flex items-center justify-center text-3xl font-semibold text-[#020826] border-b border-[#eaddcf]">
        All Products
      </div>

      <div data-aos='fade-right' className="px-10 py-5 flex justify-center gap-5">
        {choice.map((buttons1, index) => (
          <div key={index}>
            <button
              onClick={() => setallcartegory(buttons1.buttons)}
              className={buttons1.color}
            >
              {buttons1.buttons}
            </button>
          </div>
        ))}
      </div>

      <main className="items-center flex justify-center">
        <div  data-aos='fade-down' className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {fillter.map((p, index) => (
            <div  key={index} className="border border-[#eaddcf] p-3 rounded-2xl shadow bg-[#fffffe]">
              <img alt="preview" className="rounded-2xl md:w-40 h-45" src={p.img} />
              <h6 className="mt-4 flex justify-center font-semibold text-[#020826]"> ${p.price.toFixed(1)}
                <span className="font-light pl-5 text-sm text-[#716040]">stock/0 </span>
              </h6>

              <p className="pt-2 m-4 flex justify-center text-[#716040]">
                {p.name}
              </p>

              <div className="flex flex-row gap-3 justify-center">
                <button onClick={() => addcart({...p , user_Id:userId.userId, quantity : 1 })} className="w-20 h-10 rounded-xl border border-[#020826] hover:bg-[#020826] hover:text-[#fffffe] hover:duration-300"> add cart
                </button>
                <button
                   className="w-20 h-10 rounded-xl border border-[#020826] hover:bg-[#020826] hover:text-[#fffffe] hover:duration-300">
                  checkout
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
         <style>{`@keyframes scroll-left { 
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        } .carousel-track {
           animation: scroll-left 30s linear infinite;
           will-change: transform;
          }
        `}</style>

      <div className="mt-10" data-aos="fade-up">< Footer /></div>
     
    </div>
    </div>
  );
};

export default Product;
