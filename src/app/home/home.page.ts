import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private todosservice: TodosService) {}

  private todoLimit = 5;
    public lastCreatedFiveTodos = [];
  
  ngOnInit(): void {
    this.findLastCreatedTodos();
  }
}
