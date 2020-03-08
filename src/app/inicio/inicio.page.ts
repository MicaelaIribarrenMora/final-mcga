import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService, private router: Router, private authSvc: AuthService, public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

}
