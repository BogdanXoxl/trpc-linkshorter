import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();
const app: Express = express();
app.use(cors());

app.get("/helloworld", async (req: Request, res: Response) => {
  const links = await prisma.link.findMany();

  return res.json({ links });
});

export { app };
