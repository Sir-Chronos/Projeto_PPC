import sequelize from "../config/sequelize";
import User from "../models/User";

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateUser(name: string, password: string, email: string) {
  try {
    const user = await User.create({ name, password, email });
    console.log("User created successfully:", user.id);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function ReadAllUsers() {
  try {
    const users = await User.findAll();
    console.log("Users retrieved successfully:", users);
    return users;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
}

async function ReadUser(id: number) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      console.log("User retrieved successfully:", user);
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error reading user:", error);
    throw error;
  }
}

async function UpdateUser(id: number, name: string, password: string, email: string) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      user.name = name;
      user.password = password; // Be cautious with storing plain text passwords
      user.email = email;
      await user.save();
      console.log("User updated successfully:", user);
      return user;
    } else {
      console.log("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

async function DeleteUser(id: number) {
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      console.log("User deleted successfully");
      return true;
    } else {
      console.log("User not found");
      return false;
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

export { CreateUser, ReadAllUsers, ReadUser, UpdateUser, DeleteUser };
