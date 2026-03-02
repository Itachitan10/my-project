const express = require('express')
const routes = express.Router()
const conn = require('../db/database')



// cart value
routes.post("/cartValue", async (req, res) => {
    const user_values_cart = req.body
        const { name , price, category, description , img , user_Id , quantity } = user_values_cart;

        console.log(name , price, category, description , img , user_Id ,quantity );
        
    try{ 

    if( !name ||!price || !category || !description || !img  || !quantity || !user_Id) return res.status(400).json({mess: "Missing required fields"})
   const  values =[price  ,img  ,name  , user_Id, quantity ,description,category] 
    const query = `INSERT INTO products( price ,img ,name,user_id,quantity,description,category) VALUES(?, ? ,? ,?, ? ,? ,?)`               
    const result = await conn(query, values);
   result ? res.status(201).json({mess: "Item inserted successfully",insertId: result.insertId}) : res.status(201).json({mess :"error"})
    
  }catch(err){ 
    console.log('fetching error',err);
     return res.status(500).json({ mess: "Server error" });
  }
}) 

routes.post("/checkout_item", async (req, res) => { 
  const orders = req.body;

  if (!orders || orders.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  try {

    for (let item of orders) {
      const { users_id, name, price, quantity, img, realprice } = item;

      const itemQuery = `
        INSERT INTO order_items(order_id, product_name, price, quantity, img, realprice)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      const values = [
        users_id.userId,   // <-- THIS IS WRONG until I see your schema
        name,
        price,
        quantity,
        img,
        realprice
      ];

      const result = await conn(itemQuery, values);
      console.log(result);
    }

    res.json({ message: "Checkout inserted!" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err });
  }
});

 
module.exports = routes






  // try {

  //   const cart = req.body;


    

  //   if (!cart || cart.length === 0) {
  //     return res.status(400).json({ message: "Cart is empty" });
  //   }

  //   const { users_id,id, name, price, quantity, category } = cart[0];


    

  //   const subtotal = price * quantity;

  //   const itemQuery = `
  //     INSERT INTO order_items
  //     (order_id, product_id, product_name, category, price, quantity, subtotal)
  //     VALUES (?, ?, ?, ?, ?, ?, ?)
  //   `;

  //   console.log( users_id.userId, id,name, category,price,  quantity,subtotal);
    

  //   const values = [ users_id.userId, id, name,category, price,quantity, subtotal
  //   ];

  //   const result = await conn(itemQuery, values);

  //   res.status(200).json({ 
  //     message: "Success inserting data",
  //     insertId: result.insertId
  //   });

  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: "Database error" });
  // }