import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import db from "./models/index.js"


const app = express();
const PORT = process.env.PORT || 1000;

// setting up server
app.listen(PORT, (err) => {
    if (err) throw err;
    else console.log(`Server started at ${PORT} `);
});

// connection to the database
db.sequelize.authenticate().then(() => {
    console.log("connection success");
}).catch(err => {
    console.log("connection failed");
});

// synchronizing model and tables
await db.sequelize.sync({ force: false });
console.log("All models were synchronized successfully.");



