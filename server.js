//Add server code here!
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
// const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

// Helper method for generating unique ids

const PORT = 3001;

const app = express();
const books = require('./db/books.json')

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// route to homepage
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, '/views/index.html')))

// show book data
app.get('/api/books', (req, res) => res.json(books));

// requestedTerm === termData[i].term
app.get('/api/books/:id', (req, res) =>{
   const requestedBook = req.params.id; 
for (let i = 0; i < books.length; i++) {
    if (requestedBook === books[i].id){
    console.log(books[i])
    return res.json(books[i])
    }
}
return res.json("no books at this ID")
})
// add books
app.post("/api/books/", (req,res) => {
    res.send("this will send books")
})
// 
app.get('*', (req, res) =>)

// app.get('*', (req, res) =>
//     res.send(
//         `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
//     )
// );


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});