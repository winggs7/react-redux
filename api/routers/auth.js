const User = require("../models/User");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//REGISTER
router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashPassword
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
});

//LOGIN
router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email });
        !user && res.status(400).json("User not found");

        const checkPassword = bcrypt.compareSync(req.body.password, user.password);
        !checkPassword && res.status(400).json("Wrong password");

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_TEXT,
            { expiresIn: "5d" }
        );

        const { password, ...info } = user._doc;

        res.status(200).json({ ...info, accessToken });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
