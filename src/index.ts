import express from "express";
import SkillRouter from "./routes/Skill";

const port = 8000;
const app = express();

app.use("/skill/", SkillRouter); // Usando as rotas

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
