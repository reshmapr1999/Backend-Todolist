const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file


//connect to DB
const dbUrl = `mongodb+srv://${process.env.DB_USERNAME}:${encodeURIComponent(process.env.DB_PASSWORD)}@todolist.5ncng.mongodb.net/?retryWrites=true&w=majority&appName=ToDoList`;
mongoose.connect(dbUrl);

//acquire the connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'Error Connecting Database'));

db.once('open', function(){
    console.log("successfully connected to Database")
});


module.exports = mongoose;