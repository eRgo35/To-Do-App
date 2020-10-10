import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  todoForm: FormGroup;

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
