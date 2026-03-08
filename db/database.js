// db/database.js




// db/database.js


const mysql = require("mysql");

// const host = process.env.DB_HOST;
// const username = process.env.DB_USER;
// const database = process.env.DB_NAME;
// const password = process.env.DB_PASSWORD;
// const port = process.env.DB_PORT;

const conn = mysql.createConnection({
 connectionLimit: 5,
  host: "localhost",   
  user: "root",         
  password: "",          
  database: "coffiedb",  
  
});

// CREATE CONNECTION POOL
// const conn = mysql.createPool({
//   connectionLimit: 5, // max connections
//   host: host,
//   user: username,
//   password: password,
//   database: database,
//   port: port
// });

// Query function
module.exports = (query, values = []) => {
  return new Promise((resolve, reject) => {
    conn.query(query, values, (error, results) => {
      if (error) {
        return reject(error);
      }
      resolve(results);
    });
  });
};




// const conn = mysql.createConnection({
//   host: "localhost",   
//   user: "root",         
//   password: "",          
//   database: "coffiedb",  
  
// });