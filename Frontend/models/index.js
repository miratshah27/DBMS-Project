import Sequelize from "sequelize";
import mysql from "mysql2";
import { v4 as uuidv4 } from 'uuid';
import dbconfig from "../generic/dbconfig.js";
import user_model from "./user.model.js";

const sequelize = new Sequelize(
    dbconfig.DATABASE, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: "mysql",
    opeatorAliaces: false,
    define: {
        timestamps: false
    }
});

sequelize.authenticate().then(() => {
    console.log("connection success");
}).catch(err => {
    console.log("connection failed");
});


const db = {}; 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = user_model(sequelize, Sequelize);



export default db;