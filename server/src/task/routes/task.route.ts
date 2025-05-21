import express from "express";

import taskController from "../controllers/controller";

const TaskRouter = express.Router();

TaskRouter.post("/", taskController.createTask);
TaskRouter.get("/", taskController.getTasks);

export default TaskRouter;
