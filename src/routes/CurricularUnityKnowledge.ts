import { Router, Request, Response } from "express";
import {
    CreateKnowledgeCurricularUnity,
    DeleteKnowledgeCurricularUnity,
    ReadAllKnowledgeCurricularUnity,
    ReadKnowledgeCurricularUnity,
    UpdateKnowledgeCurricularUnity
} from "../controllers/CurricularUnityKnowledge";

const CurricularUnityKnowledgeRouter = Router();

// Route to create a knowledge curricular unity
CurricularUnityKnowledgeRouter.post("/", async (req: Request, res: Response) => {
    const { knowledgeId, curricularUnityId } = req.body;
    try {
        const knowledgeCurricularUnity = await CreateKnowledgeCurricularUnity(knowledgeId, curricularUnityId);
        res.status(201).json(knowledgeCurricularUnity);
    } catch (error) {
        console.error("Error creating KnowledgeCurricularUnity:", error);
        res.status(500).send("Error creating KnowledgeCurricularUnity");
    }
});

// Route to retrieve all knowledge curricular unities
CurricularUnityKnowledgeRouter.get("/", async (req: Request, res: Response) => {
    try {
        const knowledgeCurricularUnities = await ReadAllKnowledgeCurricularUnity();
        res.status(200).json(knowledgeCurricularUnities);
    } catch (error) {
        console.error("Error retrieving KnowledgeCurricularUnity:", error);
        res.status(500).send("Error retrieving KnowledgeCurricularUnity");
    }
});

// Route to retrieve a specific knowledge curricular unity
CurricularUnityKnowledgeRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const knowledgeCurricularUnity = await ReadKnowledgeCurricularUnity(id);
        if (knowledgeCurricularUnity) {
            res.status(200).json(knowledgeCurricularUnity);
        } else {
            res.status(404).send("KnowledgeCurricularUnity not found");
        }
    } catch (error) {
        console.error("Error retrieving KnowledgeCurricularUnity:", error);
        res.status(500).send("Error retrieving KnowledgeCurricularUnity");
    }
});

// Route to update a specific knowledge curricular unity
CurricularUnityKnowledgeRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { knowledgeId, curricularUnityId } = req.body;
    try {
        const updatedKnowledgeCurricularUnity = await UpdateKnowledgeCurricularUnity(id, knowledgeId, curricularUnityId);
        if (updatedKnowledgeCurricularUnity) {
            res.status(200).json(updatedKnowledgeCurricularUnity);
        } else {
            res.status(404).send("KnowledgeCurricularUnity not found");
        }
    } catch (error) {
        console.error("Error updating KnowledgeCurricularUnity:", error);
        res.status(500).send("Error updating KnowledgeCurricularUnity");
    }
});

// Route to delete a specific knowledge curricular unity
CurricularUnityKnowledgeRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await DeleteKnowledgeCurricularUnity(id);
        if (deleted) {
            res.status(200).send(`KnowledgeCurricularUnity with id ${id} deleted`);
        } else {
            res.status(404).send("KnowledgeCurricularUnity not found");
        }
    } catch (error) {
        console.error("Error deleting KnowledgeCurricularUnity:", error);
        res.status(500).send("Error deleting KnowledgeCurricularUnity");
    }
});

export default CurricularUnityKnowledgeRouter;
