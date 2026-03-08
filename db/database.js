// db/database.js



// const conn = mysql.createConnection({
//   host: "localhost",   
//   user: "root",         
//   password: "",          
//   database: "coffiedb",  
  
// });
// db/database.js


const mysql = require("mysql");

const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

console.log(host);
console.log(username);
console.log(database);
console.log(password);
console.log(port);

// CREATE CONNECTION POOL
const pool = mysql.createPool({
  connectionLimit: 5, // max connections
  host: host,
  user: username,
  password: password,
  database: database,
  port: port
});

// Query function
module.exports = (query, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
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