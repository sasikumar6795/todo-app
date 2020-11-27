import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {Todo} from '../model/Todo'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos : Todo[];
  constructor() {
    this.todos = [
      {
        id: '111',
        title: "Learn Angular",
        isComplete: true,
        date: new Date()
      },
      {
        id: '121',
        title: "Learn Spring",
        isComplete: true,
        date: new Date()
      },
      {
        id: '131',
        title: "Learn Java",
        isComplete: false ,
        date: new Date()
      }
    ]
   }

   getTodos()
   {
     return of(this.todos);
   }
   createTodo(todo: Todo)
   {
     this.todos.push(todo);
   }

   changeTodo(todo : Todo)
   {
      this.todos.map((todoChangeStatus) => {
        if(todoChangeStatus.id == todo.id)
        {
          todo.isComplete=!todo.isComplete;
        }
      });
   }

   deleteTodo(todo: Todo) {
    const indexofTodo = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id,
    );
    this.todos.splice(indexofTodo, 1);
  }


}
