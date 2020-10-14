import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {

  todoForm: FormGroup;

  myDate = false;
  myTime = false;

  constructor(
    private todosService: TodosService, 
    private controller: ModalController,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: [],
      date: []
    });
  }

  onSubmit() {
    if (!this.todoForm.valid) {
      return;
    }

    const todo = {
      title: this.todoForm.value.title,
      date: new Date(this.todoForm.value.date),
      created: new Date(),
      status: true
    };

    this.todosService.createTodo(todo);
    this.router.navigate(['/home']);
  }

  dismissModal() {
    this.controller.dismiss({
      'dismissed': true
    });
  }
}
