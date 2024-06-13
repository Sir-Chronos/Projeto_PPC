import { Router, Request, Response } from "express";
import { CreateCurricularUnity, DeleteCurricularUnity, ReadAllCurricularUnities, ReadCurricularUnity, UpdateCurricularUnity } from "../controllers/CurricularUnity";

const CurricularUnityRouter = Router();

// Route to create a curricular unity
CurricularUnityRouter.post("/", async (req: Request, res: Response) => {
    const { objective, name, ppcId } = req.body;
    try {
        await CreateCurricularUnity(objective, name, ppcId);
        res.status(201).send("Curricular Unity created");
    } catch (error) {
        console.error("Error creating Curricular Unity:", error);
        res.status(500).send("Error creating Curricular Unity");
    }
});

// Route to retrieve all curricular unities
CurricularUnityRouter.get("/", async (req: Request, res: Response) => {
    try {
        const curricularUnities = await ReadAllCurricularUnities();
        res.status(200).json(curricularUnities);
    } catch (error) {
        console.error("Error retrieving Curricular Unities:", error);
        res.status(500).send("Error retrieving Curricular Unities");
    }
});

// Route to retrieve a specific curricular unity
CurricularUnityRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const curricularUnity = await ReadCurricularUnity(id);
        if (curricularUnity) {
            res.status(200).json(curricularUnity);
        } else {
            res.status(404).send("Curricular Unity not found");
        }
    } catch (error) {
        console.error("Error retrieving Curricular Unity:", error);
        res.status(500).send("Error retrieving Curricular Unity");
    }
});

// Route to update a specific curricular unity
CurricularUnityRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { objective, name, ppcId } = req.body;
    try {
        const updatedCurricularUnity = await UpdateCurricularUnity(id, objective, name, ppcId);
        if (updatedCurricularUnity) {
            res.status(200).send(`Curricular Unity with id ${id} updated`);
        } else {
            res.status(404).send("Curricular Unity not found");
        }
    } catch (error) {
        console.error("Error updating Curricular Unity:", error);
        res.status(500).send("Error updating Curricular Unity");
    }
});

// Route to delete a specific curricular unity
CurricularUnityRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const deleted = await DeleteCurricularUnity(id);
        if (deleted) {
            res.status(200).send(`Curricular Unity with id ${id} deleted`);
        } else {
            res.status(404).send("Curricular Unity not found");
        }
    } catch (error) {
        console.error("Error deleting Curricular Unity:", error);
        res.status(500).send("Error deleting Curricular Unity");
    }
});

export default CurricularUnityRouter;
