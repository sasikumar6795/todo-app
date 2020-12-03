import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {Todo} from './../../model/Todo'
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
   todos : Todo[];
  constructor(private todoService : TodoService) { }
  faTrashAlt =faTrashAlt;
  
  deleteTodo(todo: Todo)
  {
    this.todoService.deleteTodo(todo);
  }

  changeTodoStatus(todo : Todo)
  {
    this.todoService.changeTodo(todo);
  }
  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

}
