const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const register = 
require("./Database/databaseConnection");


app.use('/register',)
app.get('/',(res,rep) =>{
    rep.send("<h1> hey this is yash</h1>");
});

app.listen(port,() =>{
    console.log("Server is running");
});
