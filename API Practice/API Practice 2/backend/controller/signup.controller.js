const Signup = require("../models/signup.model.js");

/*
const postSignup = async (req, res) => {
    try {
        const signup = await Signup.create(req.body);
        req.status(200).json(signup);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

/*
const getSignup = async (req, res) => {
    try {
        const signups = await Signup.find();
        res.status(200).json(signups);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

*/

 async function postSignup(req, res) {
    try {
        const { username, email } = req.body;
        const newSignup = new Signup({ username, email });
        await newSignup.save();
        res.status(201).json(newSignup);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

 async function getSignup(req, res) {
    try {
        const signups = await Signup.find();
        res.status(200).json(signups);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { postSignup, getSignup };