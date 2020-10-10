import { Component, OnInit, ViewChild } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { IonReorderGroup } from '@ionic/angular';
import { ItemReorderEventDetail } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  @ViewChild(IonReorderGroup) reorderGroup: IonReorderGroup;

  constructor(private todosservice: TodosService) {}

  private todoLimit = 5;
  
  public lastCreatedFiveTodos = [];
  
  ngOnInit(): void {
    this.findLastCreatedTodos();
  }

  findLastCreatedTodos() {
    this.todosservice.findLastCreatedTodos(this.todoLimit).subscribe(res => {
      this.lastCreatedFiveTodos = res;
    });
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

}
