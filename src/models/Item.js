import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      enum: ["lb", "pcs", "pack", "bunch", "case"],
      required: true,
    },
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Special db index to protect from duplicates with name and supplier combination
itemSchema.index({ name: 1, supplier: 1 }, { unique: true });

// Optimize request via category
itemSchema.index({ category: 1 });
// Optimize request via supplier
itemSchema.index({ supplier: 1 });
// Optimize request via text search
itemSchema.index({ name: "text" });

export default mongoose.model("Item", itemSchema);
