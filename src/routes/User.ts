import { Router, Request, Response } from "express";
import { CreateUser, DeleteUser, ReadAllUsers, ReadUser, UpdateUser, loginUser } from "../controllers/User";

const UserRouter = Router();

// Rota para criar um usuário
UserRouter.post("/", async (req: Request, res: Response) => {
    const { name, password, email } = req.body;
    try {
        await CreateUser(name, password, email);
        res.status(201).send("User created");
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).send("Error creating user");
    }
});

// Rota para recuperar todos os usuários
UserRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await ReadAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error retrieving users:", error);
        res.status(500).send("Error retrieving users");
    }
});

// Rota para recuperar um usuário específico
UserRouter.get("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
        const user = await ReadUser(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error retrieving user:", error);
        res.status(500).send("Error retrieving user");
    }
});

// Rota para atualizar um usuário específico
UserRouter.put("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const { name, password, email } = req.body;
    try {
        const updatedUser = await UpdateUser(id, name, password, email);
        if (updatedUser) {
            res.status(200).send(`User with id ${id} updated`);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).send("Error updating user");
    }
});

// Rota para deletar um usuário específico
UserRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    try {
        const deleted = await DeleteUser(id);
        if (deleted) {
            res.status(200).send(`User with id ${id} deleted`);
        } else {
            res.status(404).send("User not found");
        }
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send("Error deleting user");
    }
});

// Rota para login de usuário
UserRouter.post("/login", async (req: Request, res: Response) => {
    try {
        await loginUser(req, res);
    } catch (error) {
        console.error("Error logging user:", error);
        res.status(500).send("Error logging user");
    }
});

export default UserRouter;
