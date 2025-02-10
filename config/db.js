const mongoose = require("mongoose");

//connect to DB
mongoose.connect('mongodb://localhost/todoapp');

//acquire the connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'Error Connecting Database'));

db.once('open', function(){
    console.log("successfully connected to Database")
});


module.exports = mongoose;