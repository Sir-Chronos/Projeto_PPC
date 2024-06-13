import { Router, Request, Response } from "express";
import {
    CreateBibliographCurricularUnity,
    DeleteBibliographCurricularUnity,
    ReadAllBibliographCurricularUnity,
    ReadBibliographCurricularUnity,
    UpdateBibliographCurricularUnity
} from "../controllers/CurricularUnityBibliograph";

const CurricularUnityBibliographRouter = Router();

// Route to create a bibliograph curricular unity
CurricularUnityBibliographRouter.post("/", async (req: Request, res: Response) => {
    const { bibliographId, curricularUnityId } = req.body;
    try {
        const bibliographCurricularUnity = await CreateBibliographCurricularUnity(bibliographId, curricularUnityId);
        res.status(201).json(bibliographCurricularUnity);
    } catch (error) {
        console.error("Error creating BibliographCurricularUnity:", error);
        res.status(500).send("Error creating BibliographCurricularUnity");
    }
});

// Route to retrieve all bibliograph curricular unities
CurricularUnityBibliographRouter.get("/", async (req: Request, res: Response) => {
    try {
        const bibliographCurricularUnities = await ReadAllBibliographCurricularUnity();
        res.status(200).json(bibliographCurricularUnities);
    } catch (error) {
        console.error("Error retrieving BibliographCurricularUnity:", error);
        res.status(500).send("Error retrieving BibliographCurricularUnity");
    }
});

// Route to retrieve a specific bibliograph curricular unity
CurricularUnityBibliographRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const bibliographCurricularUnity = await ReadBibliographCurricularUnity(id);
        if (bibliographCurricularUnity) {
            res.status(200).json(bibliographCurricularUnity);
        } else {
            res.status(404).send("BibliographCurricularUnity not found");
        }
    } catch (error) {
        console.error("Error retrieving BibliographCurricularUnity:", error);
        res.status(500).send("Error retrieving BibliographCurricularUnity");
    }
});

// Route to update a specific bibliograph curricular unity
CurricularUnityBibliographRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { bibliographId, curricularUnityId } = req.body;
    try {
        const updatedBibliographCurricularUnity = await UpdateBibliographCurricularUnity(id, bibliographId, curricularUnityId);
        if (updatedBibliographCurricularUnity) {
            res.status(200).json(updatedBibliographCurricularUnity);
        } else {
            res.status(404).send("BibliographCurricularUnity not found");
        }
    } catch (error) {
        console.error("Error updating BibliographCurricularUnity:", error);
        res.status(500).send("Error updating BibliographCurricularUnity");
    }
});

// Route to delete a specific bibliograph curricular unity
CurricularUnityBibliographRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await DeleteBibliographCurricularUnity(id);
        if (deleted) {
            res.status(200).send(`BibliographCurricularUnity with id ${id} deleted`);
        } else {
            res.status(404).send("BibliographCurricularUnity not found");
        }
    } catch (error) {
        console.error("Error deleting BibliographCurricularUnity:", error);
        res.status(500).send("Error deleting BibliographCurricularUnity");
    }
});

export default CurricularUnityBibliographRouter;
