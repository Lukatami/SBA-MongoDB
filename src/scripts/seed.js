import { connectDB } from "../config/database.js";
import dotenv from "dotenv";

import User from "../models/User.js";
import Supplier from "../models/Supplier.js";
import Item from "../models/Item.js";

import sampleUsers from "../data/sampleUsers.js";
import sampleSuppliers from "../data/sampleSuppliers.js";
import sampleItems from "../data/sampleItems.js";

dotenv.config();

async function seedData() {
  try {
    await connectDB();

    // Clear all data
    await User.deleteMany({});
    await Supplier.deleteMany({});
    await Item.deleteMany({});

    console.log("-------------------------------------");
    console.log("✅ Database cleared!");
    console.log("-------------------------------------");

    // Create Users
    const users = await User.create(sampleUsers);
    console.log(`✅ Created ${users.length} users`);

    // Create Suppliers
    const suppliers = await Supplier.create(sampleSuppliers);
    console.log(`✅ Created ${suppliers.length} suppliers`);

    // Create Items
    const itemsData = sampleItems.map((item) => {
      const randomIndex = Math.floor(Math.random() * suppliers.length);
      return {
        ...item,
        supplier: suppliers[randomIndex].id,
      };
    });
    const items = await Item.create(itemsData);
    console.log(`✅ Created ${items.length} items`);

    console.log("-------------------------------------");
    console.log("✅ Sample data created successfully!");
    console.log("-------------------------------------");

    console.log(
      `✅ Created: ${users.length} users, ${suppliers.length} suppliers, ${items.length} items`
    );
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    process.exit(1);
  }
}

seedData();
