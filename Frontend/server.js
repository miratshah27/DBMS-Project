import express from "express";
import bodyParser from "body-parser";
import db from "./models/index.js"


const app = express();
const PORT = process.env.PORT || 1000;

app.listen(PORT, (err) => {
    if (err) throw err;
    else console.log(`Server started at ${PORT} `);
});

await db.sequelize.sync({ force: false });
console.log("All models were synchronized successfully.");


// console.log(db.user);

// user.create({
//     User_ID : uuidv4(),
//     User_Name : "Prathamesh",
//     Email : "2002pratham1109@gmail.com",
//     Password : "12345"
// });

