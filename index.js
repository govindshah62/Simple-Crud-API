const express = require('express');
const dbconnection = require('./database/connection');
const bodyparser = require('body-parser');
const app = express();

//database connectivity
dbconnection();

//request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/v1/users',require('./routes/userroutes'));    
app.use('/api/v1/product',require('./routes/productroutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`server running on Port ${PORT}`);
});