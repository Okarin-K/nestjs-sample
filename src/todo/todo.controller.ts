import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  public constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Post()
  add(@Body() createTodoDto: CreateTodoDto): void {
    this.todoService.add(createTodoDto);
  }
}
