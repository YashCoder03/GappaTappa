const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@cluster0.38zr3lp.mongodb.net/?retryWrites=true&w=majority",
{useNewUrlParser : true}).then(() => {
    console.log("Database Connection is established");
}).catch(() => {
    console.log("Error in Database Connection");
});
