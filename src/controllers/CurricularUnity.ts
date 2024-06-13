import sequelize from "../config/sequelize";
import CurricularUnity from "../models/CurricularUnity";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateCurricularUnity(objective: string, name: string, ppcId: number) {
  try {
    const curricularUnity = await CurricularUnity.create({ objective, name, ppcId });
    console.log("CurricularUnity created successfully:", curricularUnity.id);
    return curricularUnity;
  } catch (error) {
    console.error("Error creating CurricularUnity:", error);
    throw error;
  }
}

async function ReadAllCurricularUnities() {
  try {
    const curricularUnities = await CurricularUnity.findAll();
    console.log("CurricularUnities retrieved successfully:", curricularUnities);
    return curricularUnities;
  } catch (error) {
    console.error("Error retrieving CurricularUnities:", error);
    throw error;
  }
}

async function ReadCurricularUnity(id: number) {
  try {
    const curricularUnity = await CurricularUnity.findByPk(id);
    if (curricularUnity) {
      console.log("CurricularUnity retrieved successfully:", curricularUnity);
      return curricularUnity;
    } else {
      console.log("CurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading CurricularUnity:", error);
    throw error;
  }
}

async function UpdateCurricularUnity(id: number, objective: string, name: string, ppcId: number) {
  try {
    const curricularUnity = await CurricularUnity.findByPk(id);
    if (curricularUnity) {
      curricularUnity.objective = objective;
      curricularUnity.name = name;
      curricularUnity.ppcId = ppcId;
      await curricularUnity.save();
      console.log("CurricularUnity updated successfully:", curricularUnity);
      return curricularUnity;
    } else {
      console.log("CurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating CurricularUnity:", error);
    throw error;
  }
}

async function DeleteCurricularUnity(id: number) {
  try {
    const curricularUnity = await CurricularUnity.findByPk(id);
    if (curricularUnity) {
      await curricularUnity.destroy();
      console.log("CurricularUnity deleted successfully");
      return true;
    } else {
      console.log("CurricularUnity not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting CurricularUnity:", error);
    throw error;
  }
}

export { CreateCurricularUnity, ReadAllCurricularUnities, ReadCurricularUnity, UpdateCurricularUnity, DeleteCurricularUnity };
