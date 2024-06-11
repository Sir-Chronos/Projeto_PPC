import sequelize from "../config/sequelize";
import Holidays from "../models/Holidays";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateHoliday(type: string, date: Date, compensation?: Date) {
  try {
    const holiday = await Holidays.create({ type, date, compensation });
    console.log("Holiday created successfully:", holiday.id);
    return holiday;
  } catch (error) {
    console.error("Error creating Holiday:", error);
    throw error;
  }
}

async function ReadAllHolidays() {
  try {
    const holidays = await Holidays.findAll();
    console.log("Holidays retrieved successfully:", holidays);
    return holidays;
  } catch (error) {
    console.error("Error retrieving Holidays:", error);
    throw error;
  }
}

async function ReadHoliday(id: number) {
  try {
    const holiday = await Holidays.findByPk(id);
    if (holiday) {
      console.log("Holiday retrieved successfully:", holiday);
      return holiday;
    } else {
      console.log("Holiday not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Holiday:", error);
    throw error;
  }
}

async function UpdateHoliday(id: number, type: string, date: Date, compensation?: Date) {
  try {
    const holiday = await Holidays.findByPk(id);
    if (holiday) {
      holiday.type = type;
      holiday.date = date;
      if (compensation !== undefined) holiday.compensation = compensation;
      await holiday.save();
      console.log("Holiday updated successfully:", holiday);
      return holiday;
    } else {
      console.log("Holiday not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Holiday:", error);
    throw error;
  }
}

async function DeleteHoliday(id: number) {
  try {
    const holiday = await Holidays.findByPk(id);
    if (holiday) {
      await holiday.destroy();
      console.log("Holiday deleted successfully");
      return true;
    } else {
      console.log("Holiday not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Holiday:", error);
    throw error;
  }
}

export { CreateHoliday, ReadAllHolidays, ReadHoliday, UpdateHoliday, DeleteHoliday };
