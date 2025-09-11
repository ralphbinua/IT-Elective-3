// Binua, Ralph Gabriel B.
//3BSIT-5

const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());


const books = [
   {
     id: 1,
     title: "Application Development",
     author: "Ralph Binua"
   },
   {
     id: 2,
     title: "Information Management",
     author: "Juan Dela Cruz"
   },
   {
     id: 3,
     title: "Free Elective",
     author: "Jose Rizal"
   }
];


// GET route - return list of book
app.get('/books', (req, res) => {
   res.json(books);
});


// POST route - add a book
app.post('/books', (req, res) => {
   const newBook = req.body; books.push(newBook);
   res.json({
      message: "Book added successfully",
      books: newBook
   });
});


// DELETE route - delete a book by id
app.delete('/books/:id', (req, res) => {
  const booksID = parseInt(req.params.id);


  // Find the index of the book with that ID
  const index = books.findIndex(book => book.id === booksID);


  if (index !== -1) {
    // Remove the book from the array
    const deletedBook = books.splice(index, 1);
    res.json({
      message: `Books with ID ${booksID} deleted successfully`,
      books: deletedBook[0]
    });
  } else {
    // If no book found
    res.status(404).json({
      message: `Book with ID ${booksID} not found`
    });
  }
});

// PUT route - update a book by id
app.put('/books/:id', (req, res) => {
   const booksID = parseInt(req.params.id);
   const updatedBook = req.body;
    const index = books.findIndex(book => book.id === booksID);
    if (index !== -1) {
      books[index] = updatedBook;
      res.json({
        message: `Book with ID ${booksID} updated successfully`,
        books: updatedBook
      });
    } else {
      res.status(404).json({
        message: `Book with ID ${booksID} not found`
      });
    }
});

app.listen(port, () => {
   console.log(`API is running at http://localhost:${port}`);
});
