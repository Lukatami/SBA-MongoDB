import express from "express";
import {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "../controllers/supplierController.js";

const router = express.Router();

// GET /api/suppliers to get all suppliers
router.get("/", getAllSuppliers);

// GET /api/suppliers/:id to get supplier by id
router.get("/:id", getSupplierById);

// POST /api/suppliers/ to create a new supplier
router.post("/", createSupplier);

// PATCH /api/suppliers/:id to update supplier by id
router.patch("/:id", updateSupplier);

// DELETE /api/suppliers/:id to delete supplier by id
router.delete("/:id", deleteSupplier);

export default router;
