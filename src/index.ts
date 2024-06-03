import express, { Express, Request, Response } from "express";
import sequelize from "./config/sequelize";

// Database
const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

db.sync({ force: true }).then(() => console.log('All models were synchronized successfully.'));

const port = 8000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("HOME PAGE");
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
