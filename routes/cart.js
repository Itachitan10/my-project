const express = require("express");
const routes = express.Router();
const conn = require('../db/database');

// all cartvalues


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



routes.post("/deleteCartItem", async (req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ success: false, message: "Missing item ID" });
    }
    const query = `DELETE FROM products WHERE id = ? LIMIT 1`;

    try {
        const result = await conn(query, [id]);

        if (result.affectedRows === 0) {
            return res.json({ success: false, message: "Item not found" });
        }

        res.json({ success: true, message: "Item deleted successfully" });
    } catch (err) {
        console.error("Error deleting cart item:", err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

module.exports = routes;
 
// ako nalang mag tutuloy ng
// pangarap natin bro, congrats!







    
    // if (!Array.isArray(cartItems) || cartItems.length === 0) {
    //     return res.status(400).json({ message: "Cart is empty or invalid format" });
    // }
    // const query = `INSERT INTO products (price, img, name, user_id, quantity) VALUES (?, ?, ?, ?, ?)`;

    // try {
    //     for (const item of cartItems) {
    //         const { img, name, price, user_id, quantity } = item;

    //         // Validate each field
    //         if (!img || !name || !price || !user_id || !quantity) {
    //             return res.status(400).json({ message: "All fields are required for each cart item" });
    //         }

    //         const values = [price, img, name, user_id, quantity];
    //         await conn(query, values); // Assuming conn is a db query function (like using mysql2/promise or similar)
    //     }

    //     console.log("All items successfully inserted into database");
    //     res.status(200).json({ message: "All items successfully inserted into database" });

    // } catch (err) {
    //     console.error("Error inserting into database:", err);
    //     res.status(500).json({ message: "Database error" });
    // }