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

itemSchema.index({ category: 1 });
itemSchema.index({ supplier: 1 });
itemSchema.index({ name: "text" });

export default mongoose.model("Item", itemSchema);
