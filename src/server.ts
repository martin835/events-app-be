import listEndpoints from "express-list-endpoints";
import mongoose, { ConnectOptions } from "mongoose";
import app from "./app.js";
import { env } from "process";

// Server connection

const port = process.env.PORT || 3001;

//mongoose.connect(process.env.MONGO_CONNECTION as string);
mongoose.connect(process.env.MONGO_CONNECTION!);

mongoose.connection.on("connected", () => {
  console.log("👌 Connected to Mongo!");

  app.listen(port, () => {
    console.table(listEndpoints(app));
    console.log(`🟢 Server listening on port ${port} 🚀 `);
  });
});
