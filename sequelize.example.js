import express, { Express, Request, Response } from "express";
import sequelize from "./config/sequelize";
import Skill from "./models/Skill";

// Database
const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

// db.sync({ force: true }).then(() => console.log('All models were synchronized successfully.'));



(async () => {
  // Create a new skill
  const skill = await Skill.create({ type: 'Redes', description: 'Saber ligar uma vm da china' });
  console.log("Skill created sucessfully:", skill.id);
})();