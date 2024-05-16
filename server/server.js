const dotenv = require("dotenv");
dotenv.config({ path: './.env.local' });

const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

require('./db/conn');

//read json file
app.use(express.json());

// cookie-parser middleware
app.use(cookieParser()); 

// Rout Link
app.use(require('./route/userRoute'));
// app.use('/user-signin', require('./route/stockRoute'));
// app.use(require('./route/stockRoute'));

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`server is runing at port ${PORT}`);
});