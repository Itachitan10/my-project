const express = require("express")
const routes = express.Router()
const conn = require("../db/database")


// userorder
routes.get('/all_order_items', async(req , res)=>{ 
    try{
        const query = 'SELECT * FROM order_items'
        const result = await conn(query)
        res.json(result)
    }catch(err){ 
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }

})




module.exports = routes