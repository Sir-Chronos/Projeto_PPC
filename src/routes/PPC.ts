import { Router, Request, Response, NextFunction } from "express";
import { 
  CreatePPC, 
  ReadAllPPCs, 
  ReadPPC, 
  UpdatePPC, 
  DeletePPC 
} from "../controllers/PPC";

const PPCRouter = Router();

const handleAsyncErrors = (fn: Function) => (req: Request, res: Response, next: NextFunction) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

PPCRouter.post("/", handleAsyncErrors(async (req: Request, res: Response) => {
  const { occupationArea, course, version } = req.body;
  if (!occupationArea || !course || !version) {
    return res.status(400).json({ success: false, message: "Missing required fields" });
  }

  const dateVersion = new Date(version);
  if (isNaN(dateVersion.getTime())) {
    return res.status(400).json({ success: false, message: "Invalid date format" });
  }

  await CreatePPC(occupationArea, course, dateVersion);
  res.status(201).json({ success: true, message: "PPC created" });
}));

PPCRouter.get("/", handleAsyncErrors(async (req: Request, res: Response) => {
  const ppcs = await ReadAllPPCs();
  res.status(200).json({ success: true, data: ppcs });
}));

PPCRouter.get("/:id", handleAsyncErrors(async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const ppc = await ReadPPC(id);
  if (ppc) {
    res.status(200).json({ success: true, data: ppc });
  } else {
    res.status(404).json({ success: false, message: "PPC not found" });
  }
}));

PPCRouter.put("/:id", handleAsyncErrors(async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const { occupationArea, course, version } = req.body;
  const dateVersion = new Date(version);

  if (!occupationArea || !course || isNaN(dateVersion.getTime())) {
    return res.status(400).json({ success: false, message: "Invalid input data" });
  }

  const updatedPPC = await UpdatePPC(id, occupationArea, course, dateVersion);
  if (updatedPPC) {
    res.status(200).json({ success: true, message: `PPC with id ${id} updated`, data: updatedPPC });
  } else {
    res.status(404).json({ success: false, message: "PPC not found" });
  }
}));

PPCRouter.delete("/:id", handleAsyncErrors(async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const deleted = await DeletePPC(id);
  if (deleted) {
    res.status(200).json({ success: true, message: `PPC with id ${id} deleted` });
  } else {
    res.status(404).json({ success: false, message: "PPC not found" });
  }
}));

export default PPCRouter;
