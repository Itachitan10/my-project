import React, { useState } from "react";
import List from "../admin/list";

const Editmodal = ({editId, img, name,price, category, description}) => {


  

  
  const [names, setName] = useState(name);
  const [edited_id, setid] = useState(editId);
  const [prices, setPrice] = useState(price);
  const [new_img  , setnew_img] =  useState (null)
  const [urlImg, setUrl] = useState(null);
  const [categorys, setCategory] = useState(category || "");
  const [descriptions, setDescs] = useState(description);

  const [old_img , setold ] = useState(img)
  
  const onChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
     setnew_img(file)
    setUrl(URL.createObjectURL(file));
  };

  const save_product= async(new_imgs)=>{
   const new_form = new FormData() 
    new_form.append('name' , names)
    new_form.append('edit_id', edited_id)
    new_form.append('price', prices)
    new_form.append('description', descriptions)
    new_form.append('category' ,  categorys)
 

    if(new_imgs){
      new_form.append('new_image', new_imgs)
    }else{ 
      new_form.append('old_img' , img)
    }
  
   try{ 
    const res = await fetch("http://localhost:4000/editProduct",{ 
      method : 'PUT', 
      body : new_form
    })
    const data =await res.json();
    console.log(data);
    
    if(res.ok){ 
      window.location.reload(); 
    }else{ 
      alert('error')
    }
   }catch(error){ 
    console.error('error ' , error);
    
   }

  }
  


  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 w-full max-w-lg rounded-2xl shadow-2xl p-6 border border-gray-700 animate-in fade-in zoom-in duration-200 text-gray-200">
        <h2 className="text-xl font-bold mb-4 text-indigo-400">
          Edit Product
        </h2>

        <div className="flex justify-center mb-4">    
           <img  src={urlImg || img}   alt="preview" className="w-24 h-24 rounded-2xl border border-gray-600 object-cover" />
            </div>

        <div className="space-y-4">
          <div>
            <label className="font-semibold">Product Image</label>
            <input type="file"  onChange={onChange} className="mt-1 w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 hover:bg-gray-600 transition" />
          </div>

          <div>
            <label className="font-semibold">Product Name</label>
            <input   type="text"   value={names} onChange={(e) => setName(e.target.value)} placeholder="Product Name" className="mt-1 w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none" />
          </div>

          <div>
            <label className="font-semibold">Description</label>
            <textarea value={descriptions} onChange={(e) => setDescs(e.target.value)}  placeholder="Short description..."  className="mt-1 w-full border border-gray-600 rounded-lg p-2 h-24 resize-none bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none"/>
          </div>

          <div>
            <label className="font-semibold">Category</label>
            <select value={categorys}  onChange={(e) => setCategory(e.target.value)} className="mt-1 w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 focus:ring-2 focus:ring-indigo-400 outline-none" >
              <option value="" disabled> Select category </option>
              <option value="Ramen">Ramen</option>
              <option value="Coffee">Coffee</option>
              <option value="Drinks">Drinks</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Price</label>
            <input type="number" step="0.01" value={prices} onChange={(e) => setPrice(e.target.value)} placeholder="Price" className="mt-1 w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-indigo-400 outline-none"/>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-8 border-t border-gray-700 pt-4">
          <button  onClick={() => window.location.reload()}    className="rounded-xl px-4 py-2 border border-gray-500 bg-gray-700 hover:bg-gray-600 transition" > Cancel </button>
          <button  onClick={()=> save_product(new_img)} className="rounded-xl px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-600 transition"> Save </button>
        </div>
      </div>
    </div>
  );
};

export default Editmodal;
