import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private afs: AngularFirestore) { }

  findLastCreatedTodos(limit: number) {
    return this.afs.collection('Todos', ref => ref
    .orderBy('date', 'desc')
    .limit(limit)
    ).snapshotChanges();
  }

  findAllTodos() {
    return this.afs.collection('Todos', ref => ref
      .orderBy('date', 'desc')).snapshotChanges();
  }

  updateTodo(id: string, todo: {}) {
    return this.afs.collection('Todos').doc(id).set(todo, {merge: true});
  }

  createTodo(todo: {}) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('Todos').add(todo).then(res => {}, err => reject(err));
    });
  }

}
