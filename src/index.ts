    import express, { Request, Response } from "express";
    import sequelize from "./config/sequelize";

    import SkillRouter from "./routes/Skill";
    import KnowledgeRouter from "./routes/Knowledge";
    import BibliographRouter from "./routes/Bibliograph";
    import PPCRouter from "./routes/PPC";
    import HolidaysRouter from "./routes/Holidays";
    import EvaluationPeriodsRouter from "./routes/EvaluationPeriods";
    import CurricularUnityRouter from "./routes/CurricularUnity";
    import CurricularUnityBibliographRouter from "./routes/CurricularUnityBibliograph";
    import CurricularUnityKnowledgeRouter from "./routes/CurricularUnityKnowledge";
    import CurricularUnitySkillRouter from "./routes/CurricularUnitySkill";
import UserRouter from "./routes/User";

    const port = 8000;
    const app = express();

    app.use(express.json()); // Middleware for JSON handling
    app.use("/skill", SkillRouter); //tested
    app.use("/knowledge", KnowledgeRouter) //tested
    app.use("/bibliograph", BibliographRouter) //tested
    app.use("/holidays", HolidaysRouter) //tested
    app.use("/evaluation-periods", EvaluationPeriodsRouter)
    app.use("/curricular-unity", CurricularUnityRouter)
    app.use("/curricular-unity-bibliograph", CurricularUnityBibliographRouter)
    app.use("/curricular-unity-knowledge", CurricularUnityKnowledgeRouter)
    app.use("/curricular-unity-skill", CurricularUnitySkillRouter)
    app.use("/PPC", PPCRouter)
    app.use("/user", UserRouter)

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
