import { Router, Request, Response } from "express";
import {
    CreateKnowledge,
    DeleteKnowledge, 
    ReadAllKnowledge, 
    ReadKnowledge, 
    UpdateKnowledge 
} from "../controllers/Knowledge";

const KnowledgeRouter = Router();

// Route to create a knowledge entry
KnowledgeRouter.post("/", async (req: Request, res: Response) => {
    const { description, knowFatherId } = req.body;
    try {
        const knowledge = await CreateKnowledge(description, knowFatherId);
        res.status(201).json(knowledge);
    } catch (error) {
        console.error("Error creating Knowledge:", error);
        res.status(500).send("Error creating Knowledge");
    }
});

// Route to retrieve all knowledge entries
KnowledgeRouter.get("/", async (req: Request, res: Response) => {
    try {
        const knowledgeList = await ReadAllKnowledge();
        res.status(200).json(knowledgeList);
    } catch (error) {
        console.error("Error retrieving Knowledge:", error);
        res.status(500).send("Error retrieving Knowledge");
    }
});

// Route to retrieve a specific knowledge entry
KnowledgeRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const knowledge = await ReadKnowledge(id);
        if (knowledge) {
            res.status(200).json(knowledge);
        } else {
            res.status(404).send("Knowledge not found");
        }
    } catch (error) {
        console.error("Error retrieving Knowledge:", error);
        res.status(500).send("Error retrieving Knowledge");
    }
});

// Route to update a specific knowledge entry
KnowledgeRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { description, knowFatherId } = req.body;
    try {
        const updatedKnowledge = await UpdateKnowledge(id, description, knowFatherId);
        if (updatedKnowledge) {
            res.status(200).json(updatedKnowledge);
        } else {
            res.status(404).send("Knowledge not found");
        }
    } catch (error) {
        console.error("Error updating Knowledge:", error);
        res.status(500).send("Error updating Knowledge");
    }
});

// Route to delete a specific knowledge entry
KnowledgeRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await DeleteKnowledge(id);
        if (deleted) {
            res.status(200).send(`Knowledge with id ${id} deleted`);
        } else {
            res.status(404).send("Knowledge not found");
        }
    } catch (error) {
        console.error("Error deleting Knowledge:", error);
        res.status(500).send("Error deleting Knowledge");
    }
});

export default KnowledgeRouter;
