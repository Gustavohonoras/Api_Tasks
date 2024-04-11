import express, { json } from "express";
import helmet from "helmet";
import {TasksRouter} from "./routes/tasks.routes";
import {HandleErrors} from "./middleware/middleware.tasks";

export const app = express();

app.use(helmet());
app.use(json());
app.use(TasksRouter )
app.use(HandleErrors.execute)