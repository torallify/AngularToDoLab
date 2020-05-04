import { Component, OnInit } from '@angular/core';
import { Todo } from './interfaces/todo';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit{
  todoArray: Todo[];
  title = 'To-Do List';
  todoTitle:string;
  todoFilter:string;
 

  ngOnInit() {
    this.todoTitle = '';
    this.todoFilter = '';
    this.todoArray = [
      {task:"Wake up", completed: true},
      {task:"Study", completed: false},
      {task:"Buy some snacks", completed: false},
      {task:"Shop online", completed: false},
      {task:"Sing in the shower", completed: false},
    ];
  }
  

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }
    this.todoArray = [
      ...this.todoArray,
      {task:this.todoTitle, completed: false}
    ]
    this.todoTitle = "";
  }

  completeTask(index:number): void {
    const updatedArray = [
      ...this.todoArray
    ]

    updatedArray[index].completed = true;
    
    this.todoArray = updatedArray;
  }
  
  matchesFilter(task:string): boolean
  {

    return task.toLowerCase().includes(this.todoFilter.toLowerCase());
  }
  
  completedTodos() : boolean {
    for(let todo of this.todoArray)
    {
      if(todo.completed == false) {
        return false;
      }
    }
    return true;
  }

  editTodo(index:number) : void {
    const currentTask = this.todoArray[index].task;
    const message = `Rename to-do item "${currentTask}"?`;
    const edit =  prompt(message, currentTask)

    if(edit && edit.trim() != "" && edit != currentTask) {
      const updatedArray = [
        ...this.todoArray
      ]
  
      updatedArray[index].task = edit;
      updatedArray[index].completed = false;
      
      this.todoArray = updatedArray;
    }
   }

   deleteTodo(index:number): void {
    const updatedArray = [
      ...this.todoArray.slice(0,index),
      ...this.todoArray.slice(index+1,this.todoArray.length)
    ]

    this.todoArray = updatedArray;
  }

}


