import { NextFunction, Request, Response } from "express";
import { AppError } from "../apperror/apperror"
import {prisma} from "../database/prisma";
import {parse} from "dotenv";
export class HandleErrors{
    static execute(err: Error, req: Request, res: Response, next: NextFunction){
        if(err instanceof AppError) {
            return res.status(err.statusCode).json({ error: err.message });
        } else {
            console.log(err);
            return res.status(400);
        }
    }
}

export async function categoryExists(req: Request, res: Response, next: NextFunction) {
    const categoryId  = parseInt(req.params.id);

    if (categoryId) {
        const categoria = await prisma.category.findUnique({
            where: { id: categoryId }
        });

        if (!categoria) {
            return res.status(404).json({ message: "Category not found" });
        }
    }
    next()
}

export async function taskExist(req: Request, res: Response, next: NextFunction) {
    const  taskId  = parseInt(req.params.id);

    if (taskId) {
        const task = await prisma.task.findUnique({
            where: { id: taskId }
        });

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
    }
    next()
}

export async function categoryExistsBody(req: Request, res: Response, next: NextFunction) {
    const {categoryId}  = req.body;

    if (categoryId) {
        const categoria = await prisma.category.findUnique({
            where: { id: categoryId }
        });

        if (!categoria) {
            return res.status(404).json({ message: "Category not found" });
        }
    }
    next()
}

export async function categoryExist(req: Request, res: Response, next: NextFunction) {
    const cat = req.query.category as string

    if (cat) {
        const categories = await prisma.task.findMany({
            where: {
                category: {
                    name: cat,
                }
            },
            include: {
                category: true
            }
        });
        return  res.status(200).json(categories)
    }

    next()
}



