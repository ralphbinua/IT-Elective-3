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

// get route - get all books
app.get('/books', (req, res) => {
   res.json(books);
});

// post route - add a new book
app.post('/books', (req, res) => {
    const newBook = req.body; books.push(newBooks);
    res.json({
         message: "New book added",
            book: newBook
    })
});

// delete route - delete a book by id
app.delete('/books/:id', (req, res) => {
   const id = parseInt(req.params.id);
   const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
         const deletedBook = books.splice(index, 1);
            res.json({
                message: "Book deleted",
                book: deletedBook[0]
            });
    } else {
         res.status(404).json({ message: "Book not found" });
    }
});


// check if server is running
app.listen(port, () => {
   console.log(`API is running at http://localhost:${port}`);
});
