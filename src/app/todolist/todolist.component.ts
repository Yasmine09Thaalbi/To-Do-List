import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray=[{taskName: 'Brush teeth' , isCompleted: false }]

  onSubmit(form: NgForm){
    this.taskArray.push({
      taskName: form.controls['task'].value ,
      isCompleted: false
    })

  }

  onDelete(index: number){
    this.taskArray.splice(index , 1); 
    // array.splice(index, count) removes count elements starting from the index.
  }

}
