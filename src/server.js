import app from "./app.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to database first
  const dbConnected = await connectDB();

  // If it's not connected throw message
  if (!dbConnected) {
    console.log("❌ Server not started - database connection failed");
    return;
  }

  // Then start the server
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}/api/health`);
  });
};

// Main function npm run
startServer();
