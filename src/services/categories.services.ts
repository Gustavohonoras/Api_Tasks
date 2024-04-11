
import {prisma} from "../database/prisma";
import {TCreateCategories} from "../interfaces/categories.interfaces";


export class CategoriesServices {
    async create(body: TCreateCategories) {
        return await prisma.category.create({data: body})
    }

    async delete(id:number){
        return await prisma.category.delete({where: {id: id,},})
    }
}