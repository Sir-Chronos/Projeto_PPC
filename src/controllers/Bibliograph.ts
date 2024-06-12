// import sequelize from "../config/sequelize";
// import Bibliograph from "../models/Bibliograph";

// const db = sequelize;

// db.authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch((err) => console.log("Error: ", err));

// async function CreateBibliograph(type: string, description: string, curricularUnityId: number) {
//   try {
//     const bibliograph = await Bibliograph.create({ type, description, curricularUnityId });
//     console.log("Bibliograph created successfully:", bibliograph.id);
//     return bibliograph;
//   } catch (error) {
//     console.error("Error creating Bibliograph:", error);
//     throw error;
//   }
// }

// async function ReadAllBibliographs() {
//   try {
//     const bibliographs = await Bibliograph.findAll();
//     console.log("Bibliographs retrieved successfully:", bibliographs);
//     return bibliographs;
//   } catch (error) {
//     console.error("Error retrieving Bibliographs:", error);
//     throw error;
//   }
// }

// async function ReadBibliograph(id: number) {
//   try {
//     const bibliograph = await Bibliograph.findByPk(id);
//     if (bibliograph) {
//       console.log("Bibliograph retrieved successfully:", bibliograph);
//       return bibliograph;
//     } else {
//       console.log("Bibliograph not found");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error reading Bibliograph:", error);
//     throw error;
//   }
// }

// async function UpdateBibliograph(id: number, type: string, description: string, curricularUnityId: number) {
//   try {
//     const bibliograph = await Bibliograph.findByPk(id);
//     if (bibliograph) {
//       bibliograph.type = type;
//       bibliograph.description = description;
//       bibliograph.curricularUnityId = curricularUnityId;
//       await bibliograph.save();
//       console.log("Bibliograph updated successfully:", bibliograph);
//       return bibliograph;
//     } else {
//       console.log("Bibliograph not found");
//       return null;
//     }
//   } catch (error) {
//     console.error("Error updating Bibliograph:", error);
//     throw error;
//   }
// }

// async function DeleteBibliograph(id: number) {
//   try {
//     const bibliograph = await Bibliograph.findByPk(id);
//     if (bibliograph) {
//       await bibliograph.destroy();
//       console.log("Bibliograph deleted successfully");
//       return true;
//     } else {
//       console.log("Bibliograph not found");
//       return false;
//     }
//   } catch (error) {
//     console.error("Error deleting Bibliograph:", error);
//     throw error;
//   }
// }

// export { CreateBibliograph, ReadAllBibliographs, ReadBibliograph, UpdateBibliograph, DeleteBibliograph };
