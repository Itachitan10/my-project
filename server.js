const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");
require('dotenv').config()
  


app.use(express.json());
app.use('/upload', express.static('upload'));


const F_PORT = process.env.FRONT_URL || 'http://localhost:3000'
// const F_PORT = 3000


app.use(cors({
  origin: F_PORT,
  credentials : true,
}));
app.use(express.json());
app.use(cookieParser());

app.use(session({
  secret: "your_secret_key", 
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24   }
}));




const checkout = require("./routes/insert")
const paymongo = require('./routes/paymongo')
const login = require('./routes/login');
const register = require('./routes/register');
const product = require('./routes/product');

const fullVerify = require('./routes/verefy');
const deletefiles = require('./routes/delete')
const retrive = require('./routes/retrive');


app.use('/', retrive)
app.use('/', deletefiles)
app.use('/', login);
app.use('/', register);
app.use('/', product); 
app.use('/', fullVerify);
app.use('/', checkout)
app.use('/' , paymongo)



// Server port (number)
const PORT = process.env.API_URL || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});