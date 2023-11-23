import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`<h1>Hello world</h1>`
})
export class AppComponent {
  title = 'My First Angular Project';
  todolist = [
    {
      task:'Gym' ,
      completed :false
    },
    {
      task:'Walk' ,
      completed :false
    },
    {
      task:'Reading' ,
      completed :false
    },
    {
      task:'Lunch' ,
      completed :false
    },
    {
      task:'Swim' ,
      venue1:'Marena',
      venue2:'Sundar' ,
      completed :false
    },
  ]
}
