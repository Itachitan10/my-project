// db/database.js
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "localhost",   
  user: "root",         
  password: "",          
  database: "coffiedb",  
  
});



// const conn = mysql.createConnection({
//   host: "u3yjji.h.filess.io",
//   user: "coffiedb_handskill",
//   password: "657fa7b10405c32005013c43572c1b7656feeed0",
//   database: "coffiedb_handskill",
//   port: 3306
// })



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
