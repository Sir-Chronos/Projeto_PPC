import sequelize from "../config/sequelize";
import User from "../models/User";
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

const db = sequelize;

db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: ", err));

async function CreateUser(name: string, password: string, email: string) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({ name, password: hashedPassword, email });
    console.log("User created successfully:", user.id);
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

async function ReadAllUsers() {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] } // Exclude the password field
    });
    console.log("Users retrieved successfully:", users);
    return users;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
}

async function ReadUser(id: number) {
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] } // Exclude the password field
    });
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

      // Check if the password needs to be updated
      if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }

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

async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send('Invalid credentials');

    // Generate a token (JWT) or set a session here
    res.status(200).send('User logged in');
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send('Error logging in');
  }
}

export { CreateUser, ReadAllUsers, ReadUser, UpdateUser, DeleteUser, loginUser };
