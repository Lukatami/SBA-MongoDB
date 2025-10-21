import express from "express";
import {
  getAllItems,
  getItemById,
  getItemsByCategory,
  getItemsBySupplier,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/itemController.js";

const router = express.Router();

// GET /api/items to get all items
router.get("/", getAllItems);

// GET /api/items/:id to get item by id
router.get("/:id", getItemById);

// GET /api/items/category/:category to get all items with specific category
router.get("/category/:category", getItemsByCategory);

// GET /api/items/supplier/:supplierId to get all items from specific supplier
router.get("/supplier/:supplierId", getItemsBySupplier);

// POST /api/items/ to create a new item
router.post("/", createItem);

// PATCH /api/items/:id to update item by id
router.patch("/:id", updateItem);

// DELETE /api/items/:id to delete item by id
router.delete("/:id", deleteItem);

export default router;
