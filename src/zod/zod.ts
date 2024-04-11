import {AnyZodObject, z} from "zod";

export const ValidationTask = z.object({
    title: z.string().min(3),
    content:z.string(),
    categoryId:z.number().optional()

})

export const ValidationTaskPatch = z.object({
    title: z.string().min(3),
    content:z.string(),
    finished:z.boolean().optional(),
    categoryId:z.number().optional()

})

export const ValidationCategory = z.object({
    name: z.string()
})


export interface IRequestSchemas {
    body?: AnyZodObject;
    params?: AnyZodObject;
    query?: AnyZodObject;
}
