# Build a REST API with Node JS and Express and MongoDB

# Introduction
Type "npm install" in console

Then type "npm start" to run API

Runs on http://localhost:3000 or https://shawnstodolist-api.herokuapp.com/ for live version

## To Get all Todos or Categories
Send a Get Request to
http://localhost:3000/todos

or

http://localhost:3000/categories

## To Get a Todo or Category
Send a Get Request to
http://localhost:3000/todos

or

http://localhost:3000/category/:id

## To Add A Todo or Category
Post Request a JSON object to http://localhost:3000/categories/:id/create-todo to add Todo for a Category
below is a Todo example
{
    "name": "name",
    "complete": true or false,
}


Post Request a JSON object to http://localhost:3000/create-category to add a Category
below is a Category example
{
    "name": "name",
}

## To Update A Todo or Category
Put Request with JSON data and the URL 
http://localhost:3000/todo/:id or http://localhost:3000/category/:id

below is a Todo example
{
    "name": "name",
    "complete": true or false,
}

below is a Category example
{
    "name": "name",
}

## To Delete A Todo or Category
Delete Request with the Todo or Category URL
http://localhost:3000/todo or http://localhost:3000/categories
This will Delete the lastest one added