import sequelize from "../config/sequelize";
import Skill from "../models/Skill";



const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));