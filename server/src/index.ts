import { PrismaClient } from "../generated/prisma";
import express from "express";
import TaskRouter from "./task/routes/task.route";
import { errorHandler } from "./middleware/errorHandler";

export const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

async function main() {
  app.use(express.json());

  app.use("/api/v1/tasks", TaskRouter);

  app.use((req, res) => {
    res.status(404).json({ message: `Route ${req.originalUrl} not found` });
  });

  app.use(errorHandler);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
