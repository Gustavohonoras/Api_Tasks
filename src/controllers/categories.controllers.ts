import { Request, Response } from "express";
import {CategoriesServices} from "../services/categories.services";
import {prisma} from "../database/prisma";
import * as querystring from "querystring";



export class CategoriesControllers{

    async postCategories(req: Request, res: Response){
        const categoriesservices = new CategoriesServices()
        const name = req.body
        const post = await categoriesservices.create(name)
        return res.status(201).json(post)
    }

    async deleteCategories(req:Request, res:Response){
        const categorieservices = new CategoriesServices()
        const id = parseInt(req.params.id)
        const categorie = await categorieservices.delete(id)
        return res.status(204).json(categorie)
    }
    async get(req: Request, res: Response){
        const cat = await prisma.category.findMany()
        return res.status(200).json(cat)
    }

}