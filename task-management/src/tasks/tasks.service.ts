import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import {v4 as uuid} from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetFilterDTO } from './dto/get-filter.dto';

@Injectable()
export class TasksService {
    private tasks:Task[] = [];

    public getAllTaks():Task[]{
        return this.tasks;
    }
    public getAllTaksFilter(filtroDto:GetFilterDTO):Task[]{
        const {status,filtro} = filtroDto;
        let tasks:Task[] = this.getAllTaks();
        if(status){
            tasks = tasks.filter(t=>t.status === status);
        }

        if(filtro){
            tasks = tasks.filter(t=>t.description.includes(filtro) || t.title.includes(filtro));
        }
        return tasks;
    }
    public createTask(taskDTO:CreateTaskDto):Task{
        const {title,description} = taskDTO;
        let task:Task = {id:uuid(), status: TaskStatus.OPEN, title, description};
        this.tasks.push(task);
        return task;
    }

    public delete(id:string){
        this.tasks  = this.tasks.filter((task)=>task.id!= id);
    }

    public getTaskById(id:string): Task{
        const task:Task = this.tasks.find(t=>t.id===id);
        if(!task){
            throw new NotFoundException(`TASK WITH ID ${id} not found`);
        }else
            return task;
    }
}
