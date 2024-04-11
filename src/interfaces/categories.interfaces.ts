

// model Category{
//     id Int @id @default(autoincrement())
//     name String
//     tasks Task[]
// }
import {Tasks} from "./tasks.interfaces";

export interface Categories{
    id: number
    name:string
    tasks?: Tasks
}

export type TCreateCategories = Omit<Categories, 'id' | 'tasks'>