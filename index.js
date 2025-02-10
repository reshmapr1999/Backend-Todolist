const express = require("express");
const path = require("path");
const port = 5000;
const mongoose = require("./config/db");
const model = require('./models/todo') ;
const bodyParser = require("body-parser");
const methodOverride = require("method-override");


const app = express();

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

// // Home Route
// app.get("/", (req, res) => {
//     res.render("list");
// });

// Routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/", todoRoutes);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});