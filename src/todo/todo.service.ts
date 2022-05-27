import { Injectable } from '@nestjs/common';
import { Todo } from './todo.interface';

@Injectable()
export class TodoService {
  private readonly todos: Todo[] = [];

  add(todo: Readonly<Todo>): void {
    this.todos.push(todo);
  }

  findAll(): Todo[] {
    return { ...this.todos };
  }
}
