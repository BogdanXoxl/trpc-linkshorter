import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

import { createContext } from "./context";
import { appRouter } from "./routes";

const app = express();

dotenv.config();

app.use(cors());
app.use("/trpc", createExpressMiddleware({ router: appRouter, createContext }));
app.get("/helloworld", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

export { app, appRouter };
