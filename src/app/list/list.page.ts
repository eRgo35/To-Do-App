import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private todosService: TodosService) { }

  public todos = [];

  ngOnInit() {
    this.findAllTodos();
  }

  findAllTodos() {
    this.todosService.findAllTodos().subscribe(res => {
      this.todos = res;
    });
  }

  updateToDo(id) {
    this.todosService.updateTodo(id, {status: false});
  }

}
