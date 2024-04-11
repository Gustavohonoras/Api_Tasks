import { Router } from "express";
import {TasksControllers} from "../controllers/tasks.controllers";
import {CategoriesControllers} from "../controllers/categories.controllers";
import {categoryExist, categoryExists, categoryExistsBody, taskExist} from "../middleware/middleware.tasks";
import {ValidationCategory, ValidationTask, ValidationTaskPatch,} from "../zod/zod";
import {ValidateRequest} from "../middleware/ValidateRequest";


export const TasksRouter = Router()

const tasksController = new TasksControllers()
const categoriescontroller = new CategoriesControllers()

TasksRouter.post("/tasks", categoryExistsBody , ValidateRequest.execute({ body: ValidationTask }), tasksController.postTasks)
TasksRouter.get("/tasks", categoryExist ,tasksController.getTasks)
TasksRouter.get("/categories", categoriescontroller.get)
TasksRouter.get("/tasks/:id" , taskExist, tasksController.getTasksId)
TasksRouter.patch("/tasks/:id" , taskExist ,ValidateRequest.execute({ body: ValidationTaskPatch }) , tasksController.updateTaskId)
TasksRouter.delete("/tasks/:id" , taskExist , tasksController.deleteTask)
TasksRouter.post("/categories", ValidateRequest.execute({ body: ValidationCategory }),categoriescontroller.postCategories)
TasksRouter.delete("/categories/:id", categoryExists ,categoriescontroller.deleteCategories)