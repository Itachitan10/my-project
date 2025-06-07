import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dash from './dashboard';
import Home  from './home';
import About  from './aboout';
import Contact from './contact';
import Login from './login';
import Register from './register'
import Product from './product'
import Display from './display.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>         
          <Route path='/dashboard' element={<Dash/>} />
           <Route path='/dashboard/home' element={<Home/>}/>
           <Route path='/dashboard/about' element={<About/>}/>
             <Route path='/dashboard/contact' element={<Contact/>} />
           <Route path='/login' element={<Login/>} />
           <Route path='/Register' element={<Register/>} />
           <Route path='/dashboard/product' element={<Product/>}/>
             <Route path='/display' element={<Display/>}/> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

