import dotenv from "dotenv";
import { app, appRouter } from "@/app";

dotenv.config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

export type AppRouter = typeof appRouter;
