import Item from "../models/Item.js";

export async function getAllItems(req, res, next) {
  try {
    const items = await Item.find({}).populate("supplier", "name contact");
    res.json(items);
  } catch (error) {
    next(error);
  }
}

export async function getItemById(req, res, next) {
  try {
    const item = await Item.findById(req.params.id).populate(
      "supplier",
      "name contact"
    );
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
}

export async function getItemsByCategory(req, res, next) {
  try {
    const { category } = req.params;
    const items = await Item.find({ category }).populate("supplier", "name");
    res.json(items);
  } catch (error) {
    next(error);
  }
}

export async function createItem(req, res, next) {
  try {
    const { name, supplier } = req.body;

    const existingItem = await Item.findOne({ name, supplier });
    if (existingItem) {
      return res
        .status(409)
        .json({ error: `Item ${name} already exists for this supplier` });
    }

    const item = new Item(req.body);
    const savedItem = await item.save();

    const populatedItem = await Item.findById(savedItem._id).populate(
      "supplier",
      "name"
    );

    res.status(201).json(populatedItem);
  } catch (error) {
    next(error);
  }
}

export async function updateItem(req, res, next) {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("supplier", "name");

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (error) {
    next(error);
  }
}

export async function deleteItem(req, res, next) {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }
    res.json({ message: "Item deleted" });
  } catch (error) {
    next(error);
  }
}
