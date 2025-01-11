const express = require('express');

const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

const dotenv = require("dotenv").config();

const  app = express();

const port = process.env.PORT || 5000;

app.use(express.json());


app.use("/api/contact", require("./routes/contactRoutes"));

app.use(errorHandler);
connectDb();
app.listen(port, ()=> console.log('serever running port', port))