import express from "express";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


import db from "./models/index.js";
import registrationRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";
import logoutRouter from "./routes/logout.js";
import dashboardRouter from "./routes/dashboard.js";
import songsRoute from "./routes/song.js"

const app = express();
const PORT = process.env.PORT || 1000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }))
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Setting up view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));
   
app.get('/', (req,res)=>{
    res.render("index") 
})

app.use('/', songsRoute);
app.use('/', registrationRouter);
app.use('/', loginRouter);
app.use('/', logoutRouter);
app.use('/', dashboardRouter);


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
 










