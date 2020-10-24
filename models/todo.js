const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    complete: {
        type: Boolean,
        require: true
    },
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;