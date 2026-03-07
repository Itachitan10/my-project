// db/database.js
const mysql = require('mysql');



const host = process.env.DB_HOST;
const username = process.env.DB_USER;
const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;


const conn = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: database,
  port: port
}); 

conn.connect((err) => {
  if (err) {
    console.error(" Error connecting to MySQL database:", err);
    return;
  }
  console.log(" Connected to MySQL database.");
});

module.exports = (query, values = []) => {
  return new Promise((resolve, reject) => {
    conn.query(query, values, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
};





// const conn = mysql.createConnection({
//   host: "localhost",   
//   user: "root",         
//   password: "",          
//   database: "coffiedb",  
  
// });