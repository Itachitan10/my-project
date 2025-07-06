import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import About from './aboout';
import { FaShoppingCart } from "react-icons/fa";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  function logout(){ 
    alert('hellow')
    fetch('http://localhost:4000/logout',{ 
      method : 'POST', 
      credentials : "include"
    }).then(res => { 
      !res.ok ? ({mess : "logout error"}) :
      setTimeout(() => {
      window.location.href ='http://localhost:3000/login'   
      }, 1000);
     
    })
    .then(data => console.log(data))
    .catch(err  => console.error('fetching err', err)
    )
  }
    useEffect(() => {
      fetch("http://localhost:4000/userId", { credentials: "include" })
        .then((res) => (res.ok ? res.json() : setTimeout(() => {
          window.location.href= '/login'
        }, 1000))
      )
        .catch(console.error)
    }, []);
  return (
    <div  className="h-screen w-screen bg-[url('https://tse1.mm.bing.net/th/id/OIP.kCZGyPUl02MAYSoGvfTmfwHaEK?rs=1&pid=ImgDetMain')] bg-cover bg-center">
      <div className="bg-[#221f1f]">
        <nav className="p-4 flex justify-between items-center mx-4 md:mx-20">
       
          <h1 className="font-bold text-white text-2xl">
            my <span className="text-[yellow]">ramen shop</span>
          </h1>

          <ul className="hidden md:flex flex-row gap-5 text-[yellow] font-bold">
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about">About</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact">Contact</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/product">Product</Link>
            </li>
           <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/cart"> <FaShoppingCart size={22}/></Link> 
            </li>

             <li className="hover:underline cursor-pointer">
             <button className="bg-black   hover:bg-[red] text-white font-bold px-3 rounded-full" onClick={logout}>logout</button>
            </li>     </ul>

 
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[yellow] focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>


        {isOpen && (
          <ul className="flex flex-col gap-4 text-[yellow] font-bold text-center py-4 md:hidden">
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/dashboard/product" onClick={() => setIsOpen(false)}>
                Product
              </Link>
            </li>

             <li className="hover:underline cursor-pointer items-center flex justify-center">
              <Link to="/dashboard/cart" onClick={() => setIsOpen(false)}>
                 <FaShoppingCart size={22}/>
        
              </Link>
            </li>
            

            <li className="hover:underline cursor-pointer">
                <button className="bg-black   hover:bg-[red] text-white font-bold px-3 rounded-full" onClick={logout}>logout</button>
            </li>
          </ul>
        )}
      </div>

      <div className="mt-[50px]">
        <div className="mx-6 md:mx-[50px]">
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
            <div className="lg:w-[600px] text-center lg:text-left pt-[80px] max-w-3xl ">
             <h1 className="text-4xl font-bold text-[yellow]">
                ICHIRAKU <span className="text-[white]">RAMEN</span>
              </h1>

              <p className="text-[15px] font-light text-[white] py-5">
                “Authentic, heartwarming ramen made with passion and tradition.
                Every bowl is crafted to bring you the rich flavors and comforting
                warmth of Japan. Come and find your perfect bowl today — a taste
                that feels like home in every sip.”
              </p>

              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded shadow-md transition duration-300 mt-4">
                Order Now
              </button>
            </div>
            <div className="flex-1 hidden lg:block">
              <img  src="https://static.vecteezy.com/system/resources/previews/036/083/981/non_2x/ai-generated-plate-of-ramen-isolated-on-transparent-background-free-png.png" alt="Ramen Plate" className="w-full max-w-[500px] h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default Dashboard;
