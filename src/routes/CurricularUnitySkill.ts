import { Router, Request, Response } from "express";
import { 
    CreateCurricularUnitySkill,
    DeleteCurricularUnitySkill,
    ReadAllCurricularUnitySkills,
    ReadCurricularUnitySkill,
    UpdateCurricularUnitySkill
} from "../controllers/CurricularUnitySkill";

const CurricularUnitySkillRouter = Router();

// Route to create a curricular unity skill
CurricularUnitySkillRouter.post("/", async (req: Request, res: Response) => {
    const { curricularUnityId, skillId } = req.body;
    try {
        const curricularUnitySkill = await CreateCurricularUnitySkill(curricularUnityId, skillId);
        res.status(201).json(curricularUnitySkill);
    } catch (error) {
        console.error("Error creating Curricular Unity Skill:", error);
        res.status(500).send("Error creating Curricular Unity Skill");
    }
});

// Route to retrieve all curricular unity skills
CurricularUnitySkillRouter.get("/", async (req: Request, res: Response) => {
    try {
        const curricularUnitySkills = await ReadAllCurricularUnitySkills();
        res.status(200).json(curricularUnitySkills);
    } catch (error) {
        console.error("Error retrieving Curricular Unity Skills:", error);
        res.status(500).send("Error retrieving Curricular Unity Skills");
    }
});

// Route to retrieve a specific curricular unity skill
CurricularUnitySkillRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const curricularUnitySkill = await ReadCurricularUnitySkill(id);
        if (curricularUnitySkill) {
            res.status(200).json(curricularUnitySkill);
        } else {
            res.status(404).send("Curricular Unity Skill not found");
        }
    } catch (error) {
        console.error("Error retrieving Curricular Unity Skill:", error);
        res.status(500).send("Error retrieving Curricular Unity Skill");
    }
});

// Route to update a specific curricular unity skill
CurricularUnitySkillRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { curricularUnityId, skillId } = req.body;
    try {
        const updatedCurricularUnitySkill = await UpdateCurricularUnitySkill(id, curricularUnityId, skillId);
        if (updatedCurricularUnitySkill) {
            res.status(200).json(updatedCurricularUnitySkill);
        } else {
            res.status(404).send("Curricular Unity Skill not found");
        }
    } catch (error) {
        console.error("Error updating Curricular Unity Skill:", error);
        res.status(500).send("Error updating Curricular Unity Skill");
    }
});

// Route to delete a specific curricular unity skill
CurricularUnitySkillRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await DeleteCurricularUnitySkill(id);
        if (deleted) {
            res.status(200).send(`Curricular Unity Skill with id ${id} deleted`);
        } else {
            res.status(404).send("Curricular Unity Skill not found");
        }
    } catch (error) {
        console.error("Error deleting Curricular Unity Skill:", error);
        res.status(500).send("Error deleting Curricular Unity Skill");
    }
});

export default CurricularUnitySkillRouter;
