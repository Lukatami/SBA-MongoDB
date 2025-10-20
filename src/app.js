import express from "express";
import dotenv from "dotenv";

import errorHandler from "./middleware/errorHandler.js";
import route404Handler from "./middleware/route404Handler.js";
import logger from "./middleware/logger.js";

import usersRoutes from "./routes/users.js";
import suppliersRoutes from "./routes/suppliers.js";
import itemsRoutes from "./routes/items.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(logger);

// Basic health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is running",
  });
});

app.use("/api/users", usersRoutes);
app.use("/api/suppliers", suppliersRoutes);
app.use("/api/items", itemsRoutes);

app.use(route404Handler);
app.use(errorHandler);

export default app;
