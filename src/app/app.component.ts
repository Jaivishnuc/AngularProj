import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'My Task list';
  taskList: string[] = [];
  
  ngOnInit(): void {
    const storedData = localStorage.getItem('my_Task');
    if (storedData !== null) {
      this.taskList = JSON.parse(storedData);
    }
  }

}