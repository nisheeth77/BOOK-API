const express = require('express');


//database
const database = require('./database');

//Initilization
const booky = express();

/*
Route           /
Description     get all books
Access          PUBLIC
Parameters      NONE
Method          GET
*/
booky.get("/", (req,res) => {
    return res.json({ books: database.books });
});

/*
Route           /is
Description     get specific book based on ISBN
Access          PUBLIC
Parameters      isbn
Method          GET
*/
booky.get("/is/:isbn", (req, res) => {
    const getSpecificBook = database.books.filter(
      (book) => book.ISBN === req.params.isbn
    );
  
    if (getSpecificBook.length === 0) {
      return res.json({
        error: `No book found for the ISBN of ${req.params.isbn}`,
      });
    }
  
    return res.json({ book: getSpecificBook });
  });

  /*
Route           /c
Description     get specific books based on a category
Access          PUBLIC
Parameters      category
Method          GET
*/
booky.get("/c/:category", (req, res) => {
    const getSpecificBooks = database.books.filter((book) =>
      book.category.includes(req.params.category)
    );
  
    if (getSpecificBooks.length === 0) {
      return res.json({
        error: `No book found for the category of ${req.params.category}`,
      });
    }
  
    return res.json({ books: getSpecificBooks });
  });

  /*
Route           /author
Description     get all authors
Access          PUBLIC
Parameters      NONE
Method          GET
*/
booky.get("/author", (req, res) => {
    return res.json({ authors: database.authors });
  });
  
  /*
Route           /author
Description     get a list of authors based on a book's ISBN
Access          PUBLIC
Parameters      isbn
Method          GET
*/
booky.get("/author/:isbn", (req, res) => {
    const getSpecificAuthors = database.authors.filter((author) =>
      author.books.includes(req.params.isbn)
    );
  
    if (getSpecificAuthors.length === 0) {
      return res.json({
        error: `No author found for the book ${req.params.isbn}`,
      });
    }
  
    return res.json({ authors: getSpecificAuthors });
  });

  /*
Route           /publications
Description     get all publications
Access          PUBLIC
Parameters      NONE
Method          GET
*/
booky.get("/publications", (req, res) => {
    return res.json({ publications: database.publications });
  });


   /*
Route           /publications
Description     get all publications by isbn
Access          PUBLIC
Parameters      isbn
Method          G ET
*/

  booky.get("/publications/:isbn", (req, res) => {
    const getSpecificpublications = database.publications.filter((publication) =>
      publication.books.includes(req.params.isbn)
    );
  
    if (getSpecificpublications.length === 0) {
      return res.json({
        error: `No author found for the book ${req.params.isbn}`,
      });
    }
  
    return res.json({ publications: getSpecificpublications });
  });

booky.listen(3000,() => console.log("hey server is running"));
