const express = require('express');
const mongoose = require('mongoose');
const app = express()
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');

//middleware
app.use(express.json()); // access json file
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


// connect to the database
mongoose.connect('mongodb+srv://admin:admin123@cluster0.fgcpzaw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected!'))
  .catch(() =>
    console.log("error connecting to MongoDB")
);