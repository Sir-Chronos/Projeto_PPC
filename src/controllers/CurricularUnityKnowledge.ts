import sequelize from "../config/sequelize";
import KnowledgeCurricularUnity from "../models/CurricularUnityKnowledge";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateKnowledgeCurricularUnity(knowledgeId: number, curricularUnityId: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.create({ knowledgeId, curricularUnityId });
    console.log("KnowledgeCurricularUnity created successfully:", knowledgeCurricularUnity.id);
    return knowledgeCurricularUnity;
  } catch (error) {
    console.error("Error creating KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function ReadAllKnowledgeCurricularUnity() {
  try {
    const knowledgeCurricularUnityList = await KnowledgeCurricularUnity.findAll();
    console.log("KnowledgeCurricularUnity retrieved successfully:", knowledgeCurricularUnityList);
    return knowledgeCurricularUnityList;
  } catch (error) {
    console.error("Error retrieving KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function ReadKnowledgeCurricularUnity(id: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.findByPk(id);
    if (knowledgeCurricularUnity) {
      console.log("KnowledgeCurricularUnity retrieved successfully:", knowledgeCurricularUnity);
      return knowledgeCurricularUnity;
    } else {
      console.log("KnowledgeCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function UpdateKnowledgeCurricularUnity(id: number, knowledgeId: number, curricularUnityId: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.findByPk(id);
    if (knowledgeCurricularUnity) {
      knowledgeCurricularUnity.knowledgeId = knowledgeId;
      knowledgeCurricularUnity.curricularUnityId = curricularUnityId;
      await knowledgeCurricularUnity.save();
      console.log("KnowledgeCurricularUnity updated successfully:", knowledgeCurricularUnity);
      return knowledgeCurricularUnity;
    } else {
      console.log("KnowledgeCurricularUnity not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating KnowledgeCurricularUnity:", error);
    throw error;
  }
}

async function DeleteKnowledgeCurricularUnity(id: number) {
  try {
    const knowledgeCurricularUnity = await KnowledgeCurricularUnity.findByPk(id);
    if (knowledgeCurricularUnity) {
      await knowledgeCurricularUnity.destroy();
      console.log("KnowledgeCurricularUnity deleted successfully");
      return true;
    } else {
      console.log("KnowledgeCurricularUnity not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting KnowledgeCurricularUnity:", error);
    throw error;
  }
}

export { CreateKnowledgeCurricularUnity, ReadAllKnowledgeCurricularUnity, ReadKnowledgeCurricularUnity, UpdateKnowledgeCurricularUnity, DeleteKnowledgeCurricularUnity };
