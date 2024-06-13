import sequelize from "../config/sequelize";
import EvaluationPeriods from "../models/EvaluationPeriods";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateEvaluationPeriod(name: string, beginning: Date, ending: Date) {
  try {
    const evaluationPeriod = await EvaluationPeriods.create({ name, beginning, ending });
    console.log("Evaluation Period created successfully:", evaluationPeriod.id);
    return evaluationPeriod;
  } catch (error) {
    console.error("Error creating Evaluation Period:", error);
    throw error;
  }
}

async function ReadAllEvaluationPeriods() {
  try {
    const evaluationPeriods = await EvaluationPeriods.findAll();
    console.log("Evaluation Periods retrieved successfully:", evaluationPeriods);
    return evaluationPeriods;
  } catch (error) {
    console.error("Error retrieving Evaluation Periods:", error);
    throw error;
  }
}

async function ReadEvaluationPeriod(id: number) {
  try {
    const evaluationPeriod = await EvaluationPeriods.findByPk(id);
    if (evaluationPeriod) {
      console.log("Evaluation Period retrieved successfully:", evaluationPeriod);
      return evaluationPeriod;
    } else {
      console.log("Evaluation Period not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading Evaluation Period:", error);
    throw error;
  }
}

async function UpdateEvaluationPeriod(id: number, name: string, beginning: Date, ending: Date) {
  try {
    const evaluationPeriod = await EvaluationPeriods.findByPk(id);
    if (evaluationPeriod) {
      evaluationPeriod.name = name;
      evaluationPeriod.beginning = beginning;
      evaluationPeriod.ending = ending;
      await evaluationPeriod.save();
      console.log("Evaluation Period updated successfully:", evaluationPeriod);
      return evaluationPeriod;
    } else {
      console.log("Evaluation Period not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating Evaluation Period:", error);
    throw error;
  }
}

async function DeleteEvaluationPeriod(id: number) {
  try {
    const evaluationPeriod = await EvaluationPeriods.findByPk(id);
    if (evaluationPeriod) {
      await evaluationPeriod.destroy();
      console.log("Evaluation Period deleted successfully");
      return true;
    } else {
      console.log("Evaluation Period not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting Evaluation Period:", error);
    throw error;
  }
}

export { CreateEvaluationPeriod, ReadAllEvaluationPeriods, ReadEvaluationPeriod, UpdateEvaluationPeriod, DeleteEvaluationPeriod };
