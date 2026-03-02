const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser");
const session = require("express-session");

  
app.use(express.json());
app.use('/upload', express.static('upload'));


app.use(cors({
  origin: ['http://localhost:3000', "tangerine-pixie-30405b.netlify.app"],
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
const retrive = require('./routes/retrive')


app.use('/', retrive)
app.use('/', deletefiles)
app.use('/', login);
app.use('/', register);
app.use('/', product); 
app.use('/', fullVerify);
app.use('/', checkout)
app.use('/'  ,paymongo)
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

