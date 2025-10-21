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

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.get("/category/:category", getItemsByCategory);
router.get("/supplier/:supplierId", getItemsBySupplier);
router.post("/", createItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);

export default router;
