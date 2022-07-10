import { IsNotEmpty } from "class-validator";
export class CreateTaskDto{
    @IsNotEmpty()
    title:string;
    @IsNotEmpty()
    description?:string; // el ? significa que es opcional
}