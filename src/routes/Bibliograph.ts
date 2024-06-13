import { Router, Request, Response } from "express";
import { 
  CreateBibliograph, 
  DeleteBibliograph, 
  ReadAllBibliographs, 
  ReadBibliograph, 
  UpdateBibliograph 
} from "../controllers/Bibliograph";

const BibliographRouter = Router();

// Route to create a bibliograph
BibliographRouter.post("/", async (req: Request, res: Response) => {
  const { type, description } = req.body;
  try {
    await CreateBibliograph(type, description);
    res.status(201).send("Bibliograph created");
  } catch (error) {
    console.error("Error creating bibliograph:", error);
    res.status(500).send("Error creating bibliograph");
  }
});

// Route to retrieve all bibliographs
BibliographRouter.get("/", async (req: Request, res: Response) => {
  try {
    const bibliographs = await ReadAllBibliographs();
    res.status(200).json(bibliographs);
  } catch (error) {
    console.error("Error retrieving bibliographs:", error);
    res.status(500).send("Error retrieving bibliographs");
  }
});

// Route to retrieve a specific bibliograph
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
    console.error("Error retrieving bibliograph:", error);
    res.status(500).send("Error retrieving bibliograph");
  }
});

// Route to update a specific bibliograph
BibliographRouter.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { type, description } = req.body;
  try {
    const updatedBibliograph = await UpdateBibliograph(id, type, description);
    if (updatedBibliograph) {
      res.status(200).send(`Bibliograph with id ${id} updated`);
    } else {
      res.status(404).send("Bibliograph not found");
    }
  } catch (error) {
    console.error("Error updating bibliograph:", error);
    res.status(500).send("Error updating bibliograph");
  }
});

// Route to delete a specific bibliograph
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
    console.error("Error deleting bibliograph:", error);
    res.status(500).send("Error deleting bibliograph");
  }
});

export default BibliographRouter;
