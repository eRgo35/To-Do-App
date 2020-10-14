import { Component, OnInit, ViewChild } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(private todosService: TodosService) { }

  private todoLimit = 5;

  public todos = [];

  done: boolean;

  public lastCreatedFiveTodos = [];

  ngOnInit(): void {
    // this.findLastCreatedTodos();
    this.findAllTodos();
  }

  findLastCreatedTodos() {
    this.todosService.findLastCreatedTodos(this.todoLimit).subscribe(res => {
      this.lastCreatedFiveTodos = res;
    });
  }


  findAllTodos() {
    this.todosService.findAllTodos().subscribe(res => {
      this.todos = res;
    });
  }

  updateToDo(id, current_status) {
    this.todosService.updateTodo(id, { status: !current_status });
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    ev.detail.complete(this.todos);
  }

  log(e) {
    console.log(e);
  }

}
