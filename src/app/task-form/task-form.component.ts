import { Component, OnInit, Input, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() taskNew: any = [];
  newTask: any;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }
  addTodo(){
    const element = this.el.nativeElement.querySelector('#warning');
    const value = this.newTask;
    if(value !== undefined && value !== null && this.newTask.trim() !== ''){
      this.renderer.addClass(element, 'd-none');
      this.taskNew.unshift(this.newTask);
      localStorage.setItem('my_Task', JSON.stringify(this.taskNew))
      this.newTask ='';
    }
    else{
      this.renderer.removeClass(element, 'd-none')
    }
    
  }
}
