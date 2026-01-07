const express = require('express')
const routes = express.Router(); 
const conn = require('../db/database');

routes.delete(`/del_customerItem/:id`, async (req, res) => {
    const ids =req.params.id.split(',').map(Number); 
    console.log(ids); 
  if (!ids) {
    return res.status(400).json({ msg: 'ID required' });
  }

  try {
    const query =   'DELETE FROM products WHERE id IN (?)';
    const result = await conn(query, [ids]);

    console.log(result);

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: 'No existing ID' });
    }

    res.status(200).json({ msg: 'Deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});



module.exports  = routes;