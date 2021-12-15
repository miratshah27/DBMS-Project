import express from "express";
import db from "../models/index.js";

const router = express.Router();
const user = db.user;

router.get('/login', (req, res) => {
    res.render("login");
})

router.post('/login', (req, res) => {
    console.log(req.body)
    // res.send("Reached")
    var newLogin = {
        Email : req.body.Email,
        Password : req.body.Password
    }
    user.findOne({
        where: {
            Email: newLogin.Email,
            Password: newLogin.Password
        }
    }).then((User) => {
        if(!User){
            
        }
        else{
           
        }
    })

})

export default router;
