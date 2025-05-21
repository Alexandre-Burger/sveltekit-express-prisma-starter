import { prisma } from "../../index";
import { Request, Response } from "express";

const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTask = await prisma.task.create({
      data: {
        title,
      },
    });
    res.status(201).json(newTask);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

export default {
  createTask,
  getTasks,
};
