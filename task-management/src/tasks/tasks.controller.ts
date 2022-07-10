import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetFilterDTO } from './dto/get-filter.dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService){

    }

    @Get( )
    getAllTaks(@Query() filtro:GetFilterDTO):Task[]{
        if(Object.keys(filtro).length)
            return this.taskService.getAllTaksFilter(filtro);
        else
            return this.taskService.getAllTaks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id:string):Task{
        return this.taskService.getTaskById(id);
    }

    @Delete("/:id")
    deleteTask(@Param('id') id:string):string{
        this.taskService.delete(id);
        return "ok";
    }

    @Post()
    createTask(@Body() createTask:CreateTaskDto):Task{
        
        return this.taskService.createTask(createTask);
    }


}
