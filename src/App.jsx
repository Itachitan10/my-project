import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./login";
import Dash from "./dashboard";
import Home from "./home";
import About from "./aboout";
import Contact from "./contact";
import Register from "./register";
import Product from "./product";
import Display from "./display";
import Cart from "./cart";
import FullVerify from "./verify";
import Props_product from "../component/props_product";
import ProceedToCheckout from "./proc_to_checkout"
import Register_add from "../admin/register_admin";
import Profile from "./profile";
import Process from "../admin/process";
import Infomation_conferm from "./infomation_conferm";

// client side
import Admin_login from "../admin/Admin_login";
import AdminDashboard from '../admin/admin_dash';
import Addproduct from "../admin/addproduct";

import Testing from "../modal/testing";
 




const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/dashboard/cart/confimation" element={<Infomation_conferm />} />
        {/* testing */}
        <Route path="/testing" element={< Testing />} />
        {/* admin */} 
       <Route path="/admin-register" element={<Register_add />} />
        <Route path="/adminlogin" element={<Admin_login/>} />
        <Route path='/admindash' element={<AdminDashboard/>} /> 
        <Route path="/productadd" element={<Addproduct/>} />
        
        {/* client side */}
        <Route path='/proces' element={<Process/>} /> 
        <Route path="/dashboard/profile" element={<Profile/>} />  
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/about" element={<About />} />
        <Route path="/dashboard/contact" element={<Contact />} />
        <Route path="/dashboard/product" element={<Product />} />
        <Route path="/dashboard/cart" element={<Cart />} />
        <Route path="/dashboard/display" element={<Display />} />
        <Route path="/dashboard/fullVerify" element={<FullVerify />} />     
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Props_product />} />
        <Route path="/checkout" element={<ProceedToCheckout/>}/>
  
      </Routes>
    </BrowserRouter>
  );
};

                                                                                                                                                                                                 

export default App;
