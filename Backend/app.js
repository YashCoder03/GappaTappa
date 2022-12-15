const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyparser = require('body-parser');
const register = require("./Routes/registerRoute")
require("./Database/databaseConnection");


app.use(express.json());    
app.use(express.urlencoded({extended:true}));



app.use('/register',register);
app.get('/',(req,res) =>{
    res.send("<h1> hey this is yash</h1>");
    console.log(req.body);
});

app.listen(port,() =>{
    console.log("Server is running");
});
