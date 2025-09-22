const express = require("express"); // access express
const mongoose = require("mongoose"); // access MongoDB
const Signup = require("./models/signup.model.js"); // access signup model
const signupRoute = require("./route/signup.route.js"); // access signup route
const app = express();


//middleware
app.use(express.json()); // parse JSON bodies


//route
app.use("/api", signupRoute); // use signup route under /api path

app.listen(5173, () => {
  console.log('Server is running on port 5173');
});

// create connection to MongoDB
mongoose.connect("mongodb+srv://admin:admin123@cluster0.fgcpzaw.mongodb.net/accounts?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Error connecting to MongoDB", err);
    });