const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    todo: [
        {
          type: Schema.Types.ObjectId,
          ref: "Todo",
        },
      ],
    });

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;