import { Request, Response } from "express";
import {TasksServices} from "../services/tasks.services";
import {prisma} from "../database/prisma";



export class TasksControllers{

    async postTasks(req: Request, res: Response){
    const tasksservices = new TasksServices()
    const {title, content,  categoryId } = req.body
    const post = await tasksservices.create({title,content, categoryId})
    return res.status(201).json(post)
    }

    async getTasks(req: Request, res: Response){
    const task = await prisma.task.findMany({
        include: {
            category: true,
        },
    })
    return res.status(200).json(task)
    }

    async getTasksId(req:Request, res:Response){
        const id = parseInt(req.params.id)
        const tasksservices = new TasksServices()
        const task = await tasksservices.getId(id)
        return res.status(200).json(task)
    }

    async updateTaskId(req:Request, res:Response){
        const id:number = parseInt(req.params.id)
        const newtask = req.body
        const taskservices = new TasksServices()
        const update = await taskservices.updateTask(id, newtask)
        return res.status(200).json(update)
    }

    async deleteTask(req:Request, res:Response) {
        const taskservices = new TasksServices()
        const id: number = parseInt(req.params.id)
        const deletetask = await taskservices.deleteTask(id)
        return res.status(204).json(deletetask)
    }

}