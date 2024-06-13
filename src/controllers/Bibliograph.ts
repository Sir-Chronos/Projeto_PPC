import sequelize from "../config/sequelize";
import Bibliograph from "../models/Bibliograph";

// Authenticate the database connection
sequelize.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.error("Error: ", err));

// Function to create a new Bibliograph record
async function CreateBibliograph(type: string, description: string) {
  try {
    const bibliograph = await Bibliograph.create({ type, description });
    console.log("Bibliograph created successfully:", bibliograph.id);
    return bibliograph;
  } catch (error) {
    console.error("Error creating Bibliograph:", error);
    throw new Error("Failed to create Bibliograph");
  }
}

// Function to retrieve all Bibliograph records
async function ReadAllBibliographs() {
  try {
    const bibliographs = await Bibliograph.findAll();
    console.log("Bibliographs retrieved successfully:", bibliographs);
    return bibliographs;
  } catch (error) {
    console.error("Error retrieving Bibliographs:", error);
    throw new Error("Failed to retrieve Bibliographs");
  }
}

// Function to retrieve a specific Bibliograph record by ID
async function ReadBibliograph(id: number) {
  try {
    const bibliograph = await Bibliograph.findByPk(id);
    if (bibliograph) {
      console.log("Bibliograph retrieved successfully:", bibliograph);
      return bibliograph;
    } else {
      console.log("Bibliograph not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Bibliograph:", error);
    throw new Error("Failed to read Bibliograph");
  }
}

// Function to update a specific Bibliograph record by ID
async function UpdateBibliograph(id: number, type: string, description: string) {
  try {
    const bibliograph = await Bibliograph.findByPk(id);
    if (bibliograph) {
      bibliograph.type = type;
      bibliograph.description = description;
      await bibliograph.save();
      console.log("Bibliograph updated successfully:", bibliograph);
      return bibliograph;
    } else {
      console.log("Bibliograph not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Bibliograph:", error);
    throw new Error("Failed to update Bibliograph");
  }
}

// Function to delete a specific Bibliograph record by ID
async function DeleteBibliograph(id: number) {
  try {
    const bibliograph = await Bibliograph.findByPk(id);
    if (bibliograph) {
      await bibliograph.destroy();
      console.log("Bibliograph deleted successfully");
      return true;
    } else {
      console.log("Bibliograph not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Bibliograph:", error);
    throw new Error("Failed to delete Bibliograph");
  }
}

export {
  CreateBibliograph,
  ReadAllBibliographs,
  ReadBibliograph,
  UpdateBibliograph,
  DeleteBibliograph
};
