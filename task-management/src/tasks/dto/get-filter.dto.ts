import { TaskStatus } from "../task.model";

export class GetFilterDTO{
    status?:TaskStatus;
    filtro?:string;
}