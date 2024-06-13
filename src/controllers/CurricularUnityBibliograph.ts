import sequelize from "../config/sequelize";
import BibliographCurricularUnity from "../models/CurricularUnityBibliograph";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateBibliographCurricularUnity(bibliographId: number, curricularUnityId: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.create({ bibliographId, curricularUnityId });
    console.log("BibliographCurricularUnity created successfully:", bibliographCurricularUnity.id);
    return bibliographCurricularUnity;
  } catch (error) {
    console.error("Error creating BibliographCurricularUnity:", error);
    throw error;
  }
}

async function ReadAllBibliographCurricularUnity() {
  try {
    const bibliographCurricularUnityList = await BibliographCurricularUnity.findAll();
    console.log("BibliographCurricularUnity retrieved successfully:", bibliographCurricularUnityList);
    return bibliographCurricularUnityList;
  } catch (error) {
    console.error("Error retrieving BibliographCurricularUnity:", error);
    throw error;
  }
}

async function ReadBibliographCurricularUnity(id: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.findByPk(id);
    if (bibliographCurricularUnity) {
      console.log("BibliographCurricularUnity retrieved successfully:", bibliographCurricularUnity);
      return bibliographCurricularUnity;
    } else {
      console.log("BibliographCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading BibliographCurricularUnity:", error);
    throw error;
  }
}

async function UpdateBibliographCurricularUnity(id: number, bibliographId: number, curricularUnityId: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.findByPk(id);
    if (bibliographCurricularUnity) {
      bibliographCurricularUnity.bibliographId = bibliographId;
      bibliographCurricularUnity.curricularUnityId = curricularUnityId;
      await bibliographCurricularUnity.save();
      console.log("BibliographCurricularUnity updated successfully:", bibliographCurricularUnity);
      return bibliographCurricularUnity;
    } else {
      console.log("BibliographCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating BibliographCurricularUnity:", error);
    throw error;
  }
}

async function DeleteBibliographCurricularUnity(id: number) {
  try {
    const bibliographCurricularUnity = await BibliographCurricularUnity.findByPk(id);
    if (bibliographCurricularUnity) {
      await bibliographCurricularUnity.destroy();
      console.log("BibliographCurricularUnity deleted successfully");
      return true;
    } else {
      console.log("BibliographCurricularUnity not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting BibliographCurricularUnity:", error);
    throw error;
  }
}

export { CreateBibliographCurricularUnity, ReadAllBibliographCurricularUnity, ReadBibliographCurricularUnity, UpdateBibliographCurricularUnity, DeleteBibliographCurricularUnity };
