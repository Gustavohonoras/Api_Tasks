import {Tasks, TCreateTasks} from "../interfaces/tasks.interfaces";
import {prisma} from "../database/prisma";


export class TasksServices {
    async create(body: TCreateTasks) {
        return await prisma.task.create({data: body})
    }

    async getId(id: number) {
        return await prisma.task.findUnique({
            where: { id: id }, include: {category: true,},});
    }


    async updateTask(id:number, body:TCreateTasks){
        return await prisma.task.update({where:{id:id}, data: body})
    }

    async deleteTask(id:number){
        return await prisma.task.delete({where:{id:id}})
    }

}
