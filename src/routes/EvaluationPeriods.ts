import { Router, Request, Response } from "express";
import { 
  CreateEvaluationPeriod, 
  ReadAllEvaluationPeriods, 
  ReadEvaluationPeriod, 
  UpdateEvaluationPeriod, 
  DeleteEvaluationPeriod 
} from "../controllers/EvaluationPeriods";

const EvaluationPeriodsRouter = Router();

// Route to create an evaluation period
EvaluationPeriodsRouter.post("/", async (req: Request, res: Response) => {
  const { name, beginning, ending } = req.body;
  try {
    await CreateEvaluationPeriod(name, new Date(beginning), new Date(ending));
    res.status(201).send("Evaluation Period created");
  } catch (error) {
    console.error("Error creating Evaluation Period:", error);
    res.status(500).send("Error creating Evaluation Period");
  }
});

// Route to retrieve all evaluation periods
EvaluationPeriodsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const evaluationPeriods = await ReadAllEvaluationPeriods();
    res.status(200).json(evaluationPeriods);
  } catch (error) {
    console.error("Error retrieving Evaluation Periods:", error);
    res.status(500).send("Error retrieving Evaluation Periods");
  }
});

// Route to retrieve a specific evaluation period by ID
EvaluationPeriodsRouter.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const evaluationPeriod = await ReadEvaluationPeriod(id);
    if (evaluationPeriod) {
      res.status(200).json(evaluationPeriod);
    } else {
      res.status(404).send("Evaluation Period not found");
    }
  } catch (error) {
    console.error("Error retrieving Evaluation Period:", error);
    res.status(500).send("Error retrieving Evaluation Period");
  }
});

// Route to update a specific evaluation period by ID
EvaluationPeriodsRouter.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { name, beginning, ending } = req.body;
  try {
    const updatedEvaluationPeriod = await UpdateEvaluationPeriod(id, name, new Date(beginning), new Date(ending));
    if (updatedEvaluationPeriod) {
      res.status(200).send(`Evaluation Period with id ${id} updated`);
    } else {
      res.status(404).send("Evaluation Period not found");
    }
  } catch (error) {
    console.error("Error updating Evaluation Period:", error);
    res.status(500).send("Error updating Evaluation Period");
  }
});

// Route to delete a specific evaluation period by ID
EvaluationPeriodsRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const deleted = await DeleteEvaluationPeriod(id);
    if (deleted) {
      res.status(200).send(`Evaluation Period with id ${id} deleted`);
    } else {
      res.status(404).send("Evaluation Period not found");
    }
  } catch (error) {
    console.error("Error deleting Evaluation Period:", error);
    res.status(500).send("Error deleting Evaluation Period");
  }
});

export default EvaluationPeriodsRouter;
