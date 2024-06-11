import sequelize from "../config/sequelize";
import CurricularUnitySkill from "../models/CurricularUnitySkill";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateCurricularUnitySkill(curricularUnityId: number, skillId: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.create({ curricularUnityId, skillId });
    console.log("CurricularUnitySkill created successfully:", curricularUnitySkill.id);
    return curricularUnitySkill;
  } catch (error) {
    console.error("Error creating CurricularUnitySkill:", error);
    throw error;
  }
}

async function ReadAllCurricularUnitySkills() {
  try {
    const curricularUnitySkills = await CurricularUnitySkill.findAll();
    console.log("CurricularUnitySkills retrieved successfully:", curricularUnitySkills);
    return curricularUnitySkills;
  } catch (error) {
    console.error("Error retrieving CurricularUnitySkills:", error);
    throw error;
  }
}

async function ReadCurricularUnitySkill(id: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.findByPk(id);
    if (curricularUnitySkill) {
      console.log("CurricularUnitySkill retrieved successfully:", curricularUnitySkill);
      return curricularUnitySkill;
    } else {
      console.log("CurricularUnitySkill not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading CurricularUnitySkill:", error);
    throw error;
  }
}

async function UpdateCurricularUnitySkill(id: number, curricularUnityId: number, skillId: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.findByPk(id);
    if (curricularUnitySkill) {
      curricularUnitySkill.curricularUnityId = curricularUnityId;
      curricularUnitySkill.skillId = skillId;
      await curricularUnitySkill.save();
      console.log("CurricularUnitySkill updated successfully:", curricularUnitySkill);
      return curricularUnitySkill;
    } else {
      console.log("CurricularUnitySkill not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating CurricularUnitySkill:", error);
    throw error;
  }
}

async function DeleteCurricularUnitySkill(id: number) {
  try {
    const curricularUnitySkill = await CurricularUnitySkill.findByPk(id);
    if (curricularUnitySkill) {
      await curricularUnitySkill.destroy();
      console.log("CurricularUnitySkill deleted successfully");
      return true;
    } else {
      console.log("CurricularUnitySkill not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting CurricularUnitySkill:", error);
    throw error;
  }
}

export { CreateCurricularUnitySkill, ReadAllCurricularUnitySkills, ReadCurricularUnitySkill, UpdateCurricularUnitySkill, DeleteCurricularUnitySkill };
