const express = require("express");
const routes = express.Router();
const multer = require("multer");
const conn = require("../db/database"); 

const  VITE_API_UR = process.env.VITE_API_UR

routes.delete('/deleteItem/:id_delete' , async(req , res)=>{
  try{ 
   const temporary_id = req.params.id_delete; 

    const  id = parseInt(temporary_id)   
   if(!id) return 
   query = 'DELETE FROM admin_products WHERE id = ?'
   const result  =  await conn(query , [id])
    result ? res.status(200).json({mess  :'database succesful insert' }): res.status(400).json({mess : 'error inserting database'})
    
  }catch(err){ 
    console.error(("error"),err);
  }
})

const storage = multer.diskStorage({ 
  destination : 'upload/', 
  filename : (req , file , cd) =>{ 
    cd(null ,Date.now() + "-" + file.originalname);
  }
});

const upload =multer({storage : storage})

routes.post('/uploadIMg' , upload.single ('myimg'), async (req, res) =>{ 
     const {name, price , category , desc}  =req.body;
   
  
const imgurl = VITE_API_UR + req.file.path.replace(/\\/g, "/");


let query = 'INSERT INTO admin_products(name, price, category, description, img) VALUES (?, ?, ?, ?, ?)';

let value = [name, price, category, desc, imgurl];

try {
    const result = await conn(query, value);
    if (result) { 
        res.status(200).json({ mess: 'successful' }); 
    } else { 
        res.status(400).json({ mess: 'failed' }); 
    }
} catch (err) {
    console.error(err);
    res.status(500).json({ mess: 'Server error' });
}

  })



routes.put('/editProduct', upload.single('new_image'), async (req, res) => {

  console.log(req.body);
  console.log(req.file);

  try {
    const { name, edit_id, price, category, description, old_img } = req.body;

    let imgPath = old_img; // default: old image

    if (req.file) {
      imgPath = 'http://localhost:4000/' + req.file.path.replace(/\\/g, "/");
    }

    const query = `
      UPDATE admin_products
      SET name=?, price=?, category=?, description=?, img=?
      WHERE id=?
    `;

    const values = [name, price, category, description, imgPath, edit_id];

    const result = await conn(query, values);

    if (result) {
      res.status(200).json({ message: "success edit product" });
    } else {
      res.status(400).json({ message: "error edit product" });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server error" });
  }
});




    routes.get('/product' ,async (req ,res) =>{ 
    try{ 
          const results = await conn('SELECT * FROM admin_products')
          res.send(results)
    }catch(err){ 
      console.log(err);
      res.status(500) .json({mess : 'server error'})
    
    }
  } )
  module.exports = routes;



