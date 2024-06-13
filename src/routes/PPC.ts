import { Router, Request, Response } from "express";
import { 
  CreatePPC, 
  ReadAllPPCs, 
  ReadPPC, 
  UpdatePPC, 
  DeletePPC 
} from "../controllers/PPC";

const PPCRouter = Router();

// Route to create a PPC
PPCRouter.post("/", async (req: Request, res: Response) => {
  const { occupationArea, course, version } = req.body;
  try {
    await CreatePPC(occupationArea, course, new Date(version));
    res.status(201).send("PPC created");
  } catch (error) {
    console.error("Error creating PPC:", error);
    res.status(500).send("Error creating PPC");
  }
});

// Route to retrieve all PPCs
PPCRouter.get("/", async (req: Request, res: Response) => {
  try {
    const ppcs = await ReadAllPPCs();
    res.status(200).json(ppcs);
  } catch (error) {
    console.error("Error retrieving PPCs:", error);
    res.status(500).send("Error retrieving PPCs");
  }
});

// Route to retrieve a specific PPC by ID
PPCRouter.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const ppc = await ReadPPC(id);
    if (ppc) {
      res.status(200).json(ppc);
    } else {
      res.status(404).send("PPC not found");
    }
  } catch (error) {
    console.error("Error retrieving PPC:", error);
    res.status(500).send("Error retrieving PPC");
  }
});

// Route to update a specific PPC by ID
PPCRouter.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { occupationArea, course, version } = req.body;
  try {
    const updatedPPC = await UpdatePPC(id, occupationArea, course, new Date(version));
    if (updatedPPC) {
      res.status(200).send(`PPC with id ${id} updated`);
    } else {
      res.status(404).send("PPC not found");
    }
  } catch (error) {
    console.error("Error updating PPC:", error);
    res.status(500).send("Error updating PPC");
  }
});

// Route to delete a specific PPC by ID
PPCRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const deleted = await DeletePPC(id);
    if (deleted) {
      res.status(200).send(`PPC with id ${id} deleted`);
    } else {
      res.status(404).send("PPC not found");
    }
  } catch (error) {
    console.error("Error deleting PPC:", error);
    res.status(500).send("Error deleting PPC");
  }
});

export default PPCRouter;
