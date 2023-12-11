import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() taskNew: any = [];
  newTask: any;
  constructor() { }

  ngOnInit(): void {
  }
  addTodo(){
    this.taskNew.unshift(this.newTask);
    localStorage.setItem('my_Task', JSON.stringify(this.taskNew))
    this.newTask ='';
  }
}
