import {Categories} from "./categories.interfaces";


export interface Tasks {
    title: string,
    content: string;
    finished?: boolean;
    categoryId: number;
    category: Categories;
    }
    
    
export type TCreateTasks = Omit<Tasks, 'id'| 'category' >

// export type TGetTasks = Omit<Tasks, 'id'| 'categoryId'>
