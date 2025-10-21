import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// GET /api/users to get all users
router.get("/", getAllUsers);

// GET /api/users/:id to get user by id
router.get("/:id", getUserById);

// POST /api/users/ to create a new user
router.post("/", createUser);

// PATCH /api/users/:id to update user by id
router.patch("/:id", updateUser);

// DELETE /api/users/:id to delete user by id
router.delete("/:id", deleteUser);

export default router;
