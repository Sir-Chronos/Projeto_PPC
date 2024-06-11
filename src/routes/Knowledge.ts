import { Router, Request, Response } from "express";
import { CreateKnowledge, ReadAllKnowledge, ReadKnowledge, UpdateKnowledge, DeleteKnowledge } from "../controllers/Knowledge";

const KnowledgeRouter = Router();

// Route to create a Knowledge
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

// Route to retrieve all Knowledges
KnowledgeRouter.get("/", async (req: Request, res: Response) => {
    try {
        const knowledges = await ReadAllKnowledge();
        res.status(200).json(knowledges);
    } catch (error) {
        console.error("Error retrieving Knowledges:", error);
        res.status(500).send("Error retrieving Knowledges");
    }
});

// Route to retrieve a specific Knowledge
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

// Route to update a specific Knowledge
KnowledgeRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { description, knowFatherId } = req.body;
    try {
        const updatedKnowledge = await UpdateKnowledge(id, description, knowFatherId);
        if (updatedKnowledge) {
            res.status(200).send(`Knowledge with id ${id} updated`);
        } else {
            res.status(404).send("Knowledge not found");
        }
    } catch (error) {
        console.error("Error updating Knowledge:", error);
        res.status(500).send("Error updating Knowledge");
    }
});

// Route to delete a specific Knowledge
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
