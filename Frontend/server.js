import express from "express";
import bodyParser from "body-parser";
import Sequelize from "sequelize";
import mysql from "mysql2";
import { v4 as uuidv4 } from 'uuid';
import dbconfig from "./generic/dbconfig.js"; 
import user_model from "./models/user.model.js";


const app = express();
const PORT = process.env.PORT || 1000;

app.listen(PORT , (err)=>{
    if(err) throw err;
    else console.log( `Server started at ${PORT} `);
});

const sequelize = new Sequelize(
    dbconfig.DATABASE, dbconfig.USER, dbconfig.PASSWORD, {
        host: dbconfig.HOST,
        dialect: "mysql",
        opeatorAliaces: false,
        define : {
            timestamps : false
        }
    });
    
    
    
    sequelize.authenticate().then(() => {
        console.log("connection success");
    }).catch(err => {
        console.log("connection failed");
    });

    const user = user_model(sequelize,Sequelize); 
    
    
    // const db = {}; 
    // db.Sequelize = Sequelize;
    // db.sequelize = sequelize;
    // db.user = user;

// console.log(db.user);
// const user = users(sequelize,Sequelize);

// user.create({
//     User_ID : uuidv4(),
//     User_Name : "Prathamesh",
//     Email : "2002pratham1109@gmail.com",
//     Password : "12345"
// });

await sequelize.sync({ force: false });
console.log("All models were synchronized successfully.");

// export default db;