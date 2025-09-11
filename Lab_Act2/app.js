// Binua, Ralph Gabriel B.
//3BSIT-5

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const book = [
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


