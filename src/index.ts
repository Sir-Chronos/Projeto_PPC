import express, { Request, Response } from "express";
import SkillRouter from "./routes/Skill";
import sequelize from "./config/sequelize";

const port = 8000;
const app = express();

app.use(express.json()); // Middleware for JSON handling
app.use("/skill", SkillRouter); // Using the routes

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Now listening on port http://localhost:${port}`);
    });
}).catch((err: Error) => { // Ensuring type safety with Error type
    console.error('Unable to connect to the database:', err);
});

app.get("/", (req: Request, res: Response) => {
    res.send("Home page");
});
