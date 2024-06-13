import { Router, Request, Response } from "express";
import { CreateHoliday, ReadAllHolidays, ReadHoliday, UpdateHoliday, DeleteHoliday } from "../controllers/Holidays";

const HolidaysRouter = Router();

// Route to create a holiday
HolidaysRouter.post("/", async (req: Request, res: Response) => {
  const { type, date, compensation } = req.body;
  try {
    await CreateHoliday(type, new Date(date), compensation ? new Date(compensation) : undefined);
    res.status(201).send("Holiday created");
  } catch (error) {
    console.error("Error creating holiday:", error);
    res.status(500).send("Error creating holiday");
  }
});

// Route to retrieve all holidays
HolidaysRouter.get("/", async (req: Request, res: Response) => {
  try {
    const holidays = await ReadAllHolidays();
    res.status(200).json(holidays);
  } catch (error) {
    console.error("Error retrieving holidays:", error);
    res.status(500).send("Error retrieving holidays");
  }
});

// Route to retrieve a specific holiday by ID
HolidaysRouter.get("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const holiday = await ReadHoliday(id);
    if (holiday) {
      res.status(200).json(holiday);
    } else {
      res.status(404).send("Holiday not found");
    }
  } catch (error) {
    console.error("Error retrieving holiday:", error);
    res.status(500).send("Error retrieving holiday");
  }
});

// Route to update a specific holiday by ID
HolidaysRouter.put("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { type, date, compensation } = req.body;
  try {
    const updatedHoliday = await UpdateHoliday(id, type, new Date(date), compensation ? new Date(compensation) : undefined);
    if (updatedHoliday) {
      res.status(200).send(`Holiday with id ${id} updated`);
    } else {
      res.status(404).send("Holiday not found");
    }
  } catch (error) {
    console.error("Error updating holiday:", error);
    res.status(500).send("Error updating holiday");
  }
});

// Route to delete a specific holiday by ID
HolidaysRouter.delete("/:id", async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const deleted = await DeleteHoliday(id);
    if (deleted) {
      res.status(200).send(`Holiday with id ${id} deleted`);
    } else {
      res.status(404).send("Holiday not found");
    }
  } catch (error) {
    console.error("Error deleting holiday:", error);
    res.status(500).send("Error deleting holiday");
  }
});

export default HolidaysRouter;
