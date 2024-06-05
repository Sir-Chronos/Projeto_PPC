import { Router, Request, Response } from "express";

const SkillRouter = Router();

// Rota para criar uma skill
SkillRouter.post("/", (req: Request, res: Response) => {
    res.send("create skill");
});

// Rota para todas as skills
SkillRouter.get("/", (req: Request, res: Response) => {
    res.send("request skill");
});

// Rota para requisitar uma skill específica
SkillRouter.get("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`request skill with id ${id}`);
});

// Rota para atualizar uma skill específica
SkillRouter.put("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`update skill with id ${id}`);
});

// Rota para deletar uma skill específica
SkillRouter.delete("/:id", (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(`delete skill with id ${id}`);
});

export default SkillRouter;
