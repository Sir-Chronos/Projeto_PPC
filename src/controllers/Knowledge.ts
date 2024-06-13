import sequelize from "../config/sequelize";
import Knowledge from "../models/Knowledge";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateKnowledge(description: string, knowFatherId?: number) {
  try {
    const knowledge = await Knowledge.create({ description, knowFatherId });
    console.log("Knowledge created successfully:", knowledge.id);
    return knowledge;
  } catch (error) {
    console.error("Error creating Knowledge:", error);
    throw error;
  }
}

async function ReadAllKnowledge() {
  try {
    const knowledgeList = await Knowledge.findAll({
      include: [
        { model: Knowledge, as: 'childKnowledges' },
        { model: Knowledge, as: 'parentKnowledge' }
      ]
    });
    console.log("Knowledge retrieved successfully:", knowledgeList);
    return knowledgeList;
  } catch (error) {
    console.error("Error retrieving Knowledge:", error);
    throw error;
  }
}

async function ReadKnowledge(id: number) {
  try {
    const knowledge = await Knowledge.findByPk(id, {
      include: [
        { model: Knowledge, as: 'childKnowledges' },
        { model: Knowledge, as: 'parentKnowledge' }
      ]
    });
    if (knowledge) {
      console.log("Knowledge retrieved successfully:", knowledge);
      return knowledge;
    } else {
      console.log("Knowledge not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Knowledge:", error);
    throw error;
  }
}

async function UpdateKnowledge(id: number, description: string, knowFatherId?: number) {
  try {
    const knowledge = await Knowledge.findByPk(id);
    if (knowledge) {
      knowledge.description = description;
      if (knowFatherId !== undefined) knowledge.knowFatherId = knowFatherId;
      await knowledge.save();
      console.log("Knowledge updated successfully:", knowledge);
      return knowledge;
    } else {
      console.log("Knowledge not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Knowledge:", error);
    throw error;
  }
}

async function DeleteKnowledge(id: number) {
  try {
    const knowledge = await Knowledge.findByPk(id);
    if (knowledge) {
      await knowledge.destroy();
      console.log("Knowledge deleted successfully");
      return true;
    } else {
      console.log("Knowledge not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Knowledge:", error);
    throw error;
  }
}

export { CreateKnowledge, ReadAllKnowledge, ReadKnowledge, UpdateKnowledge, DeleteKnowledge };
