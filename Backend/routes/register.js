import express from "express";
import db from "../models/index.js";

const router = express.Router();
const user = db.user;

router.get('/register', (req, res) => {
    res.render("register");
});

router.post('/register', (req, res) => {
    // console.log("Happy to reach post");
    // console.log(req.body);
    // res.send("reached");
    // next();
    const newUser = {
        User_Name: req.body.User_Name,
        Email: req.body.Email,
        Password: req.body.Password
    }
    console.log(newUser)
    let msg;
    user.findOne({ where: { Email: newUser.Email } })
        .then((User) => {
            if (User) {
                console.log("Email present in the database");
                // return res.status(400).json({
                //     status: 'error',
                //     error: 'req body cannot be empty',
                //   }).render("register");
            }
            else {
                console.log("Email not present in the database");
                user.create({
                    User_Name: req.body.User_Name,
                    Email: req.body.Email,
                    Password: req.body.Password
                });
                res.render("login");
            }
        })
});


export default router;