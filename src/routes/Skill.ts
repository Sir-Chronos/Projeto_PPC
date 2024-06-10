import { Router, Request, Response } from "express";
import { CreateSkill, DeleteSkill, ReadAllSkills, ReadSkill, UpdateSkill } from "../controllers/Skill";

const SkillRouter = Router();

// Route to create a skill
SkillRouter.post("/", async (req: Request, res: Response) => {
    const { type, description } = req.body;
    try {
        await CreateSkill(type, description);
        res.status(201).send("Skill created");
    } catch (error) {
        console.error("Error creating skill:", error);
        res.status(500).send("Error creating skill");
    }
});

// Route to retrieve all skills
SkillRouter.get("/", async (req: Request, res: Response) => {
    try {
        const skills = await ReadAllSkills();
        res.status(200).json(skills);
    } catch (error) {
        console.error("Error retrieving skills:", error);
        res.status(500).send("Error retrieving skills");
    }
});

// Route to retrieve a specific skill
SkillRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const skill = await ReadSkill(id);
        if (skill) {
            res.status(200).json(skill);
        } else {
            res.status(404).send("Skill not found");
        }
    } catch (error) {
        console.error("Error retrieving skill:", error);
        res.status(500).send("Error retrieving skill");
    }
});

// Route to update a specific skill
SkillRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { type, description } = req.body;
    try {
        const updatedSkill = await UpdateSkill(id, type, description);
        if (updatedSkill) {
            res.status(200).send(`Skill with id ${id} updated`);
        } else {
            res.status(404).send("Skill not found");
        }
    } catch (error) {
        console.error("Error updating skill:", error);
        res.status(500).send("Error updating skill");
    }
});

// Route to delete a specific skill
SkillRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await DeleteSkill(id);
        if (deleted) {
            res.status(200).send(`Skill with id ${id} deleted`);
        } else {
            res.status(404).send("Skill not found");
        }
    } catch (error) {
        console.error("Error deleting skill:", error);
        res.status(500).send("Error deleting skill");
    }
});

export default SkillRouter;
