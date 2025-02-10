const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    category :{
        type :String
    },
    dueDate : {
        type : Date
    }

});


module.exports =  mongoose.model("Task",TaskSchema);