import sequelize from "../config/sequelize";
import Skill from "../models/Skill";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateSkill(type: string, description: string) {
  try {
    const skill = await Skill.create({ type, description });
    console.log("Skill created successfully:", skill.id);
    return skill;
  } catch (error) {
    console.error("Error creating skill:", error);
    throw error;
  }
}

async function ReadAllSkills() {
  try {
    const skills = await Skill.findAll();
    console.log("Skills retrieved successfully:", skills);
    return skills;
  } catch (error) {
    console.error("Error retrieving skills:", error);
    throw error;
  }
}

async function ReadSkill(id: number) {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      console.log("Skill retrieved successfully:", skill);
      return skill;
    } else {
      console.log("Skill not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading skill:", error);
    throw error;
  }
}

async function UpdateSkill(id: number, type: string, description: string) {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      skill.type = type;
      skill.description = description;
      await skill.save();
      console.log("Skill updated successfully:", skill);
      return skill;
    } else {
      console.log("Skill not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating skill:", error);
    throw error;
  }
}

async function DeleteSkill(id: number) {
  try {
    const skill = await Skill.findByPk(id);
    if (skill) {
      await skill.destroy();
      console.log("Skill deleted successfully");
      return true;
    } else {
      console.log("Skill not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting skill:", error);
    throw error;
  }
}

export { CreateSkill, ReadAllSkills, ReadSkill, UpdateSkill, DeleteSkill };
