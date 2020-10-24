// Imports and Packages
const express = require('express');
const http = require("http");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware
const Todo = require('./models/todo');
const Category = require('./models/category');

// Connect To DB
mongoose.connect(process.env.DB_CONNECTION,  { useNewUrlParser: true, useUnifiedTopology: true }, () =>
    console.log('Connected to DataBase')
);

app.get('/', (req, res) => {
  res.send('Welcome Shawns Todo App.');
})

// Server
server.listen(PORT, (req, res) => console.log(`Server running on: ${PORT}`));

// Route to create a Category
app.post("/categories", (req, res) => {
    Category.create({
      name: req.body.name,
    })
      .then((category) => {
        res.json(category);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Route to get all Category
  app.get("/categories", (req, res) => {
    Category.find({})
      .then((categories) => {
        res.json(categories);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Route to delete a Category
  app.delete("/categories", (req, res) => {
    Category.deleteOne({ name: req.body.name }, (err, manufactures) => {
      Category.find((err, categories) => {
        if (err) console.log(err);
  
        res.json(categories);
      });
    });
  });
  
  // Route for creating a new Todo and updating Category "Todo" field with it
  app.post("/categories/:id", (req, res) => {
    Todo.create({
      name: req.body.name,
      complete: req.body.complete
    })
  
      .then((todo) => {
        return Category.updateOne(
          { _id: req.params.id },
          { $addToSet: { todo: todo._id } }
        );
      })
      .then((category) => {
        res.json(category);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Route for retrieving a Category by id and populating it's Todos.
  app.get("/categories/:id", (req, res) => {
    Category.findById({ _id: req.params.id })
      .populate("todo")
      .then((category) => {
        res.json(category);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Route to get all Todos
  app.get("/alltodos", (req, res) => {
    Todo.find({})
      .then((todos) => {
        res.json(todos);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Route to delete a todo
  app.delete("/todos", (req, res) => {
    Todo.deleteOne({ name: req.body.name }, (err, todos) => {
      Todo.find((err, todos) => {
        if (err) console.log(err);
  
        res.json(todos);
      });
    });
  });
  
  // Get todo by id
  app.get("/todos/:id", (req, res) => {
    Todo.findById(req.params.id)
      .then((todos) => {
        res.json(todos);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  // Update todo by id
  app.put("/todos/:id", (req, res) => {
    Todo.findById({ _id: req.params.id }, (err, todo) => {
      if (err) console.log(err);
  
      todo.update(req.body, (err, todos) => {
        if (err) console.log(err);
  
        Todo.find((err, todos) => {
          if (err) console.log(handleError(err));
          res.json(todos);
        });
      });
    });
  });
  
  // Update Category by id
  app.put('/categories/:id', (req, res) =>{
      Category.findById({ _id: req.params.id}, (err, todo) => {
          if (err) console.log(err)
  
          category.update(req.body, (err, categories) => {
              if (err) console.log(err)
  
              Category.find((err, categories) => {
                  if (err) console.log(handleError(err))
  
                  res.json(categories)
              })
          })
      })
  })