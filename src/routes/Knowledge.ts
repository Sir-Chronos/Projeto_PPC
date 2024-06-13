import { Router, Request, Response } from "express";
import { CreateBibliograph, ReadAllBibliographs, ReadBibliograph, UpdateBibliograph, DeleteBibliograph } from "../controllers/Bibliograph";

const BibliographRouter = Router();

// Route to create a Bibliograph
BibliographRouter.post("/", async (req: Request, res: Response) => {
    const { type, description, curricularUnityId } = req.body;
    try {
        const bibliograph = await CreateBibliograph(type, description);
        res.status(201).json(bibliograph);
    } catch (error) {
        console.error("Error creating Bibliograph:", error);
        res.status(500).send("Error creating Bibliograph");
    }
});

// Route to retrieve all Bibliographs
BibliographRouter.get("/", async (req: Request, res: Response) => {
    try {
        const bibliographs = await ReadAllBibliographs();
        res.status(200).json(bibliographs);
    } catch (error) {
        console.error("Error retrieving Bibliographs:", error);
        res.status(500).send("Error retrieving Bibliographs");
    }
});

// Route to retrieve a specific Bibliograph
BibliographRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const bibliograph = await ReadBibliograph(id);
        if (bibliograph) {
            res.status(200).json(bibliograph);
        } else {
            res.status(404).send("Bibliograph not found");
        }
    } catch (error) {
        console.error("Error retrieving Bibliograph:", error);
        res.status(500).send("Error retrieving Bibliograph");
    }
});

// Route to update a specific Bibliograph
BibliographRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { type, description, curricularUnityId } = req.body;
    try {
        const updatedBibliograph = await UpdateBibliograph(id, type, description);
        if (updatedBibliograph) {
            res.status(200).send(`Bibliograph with id ${id} updated`);
        } else {
            res.status(404).send("Bibliograph not found");
        }
    } catch (error) {
        console.error("Error updating Bibliograph:", error);
        res.status(500).send("Error updating Bibliograph");
    }
});

// Route to delete a specific Bibliograph
BibliographRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await DeleteBibliograph(id);
        if (deleted) {
            res.status(200).send(`Bibliograph with id ${id} deleted`);
        } else {
            res.status(404).send("Bibliograph not found");
        }
    } catch (error) {
        console.error("Error deleting Bibliograph:", error);
        res.status(500).send("Error deleting Bibliograph");
    }
});

export default BibliographRouter;
