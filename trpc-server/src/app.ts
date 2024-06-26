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

export { app, appRouter };
