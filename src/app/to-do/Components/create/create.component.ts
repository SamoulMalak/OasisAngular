import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public formModel:FormGroup ;

  constructor(private toDoService:TodoService,
             private router:Router) {
   
     this.formModel=new FormGroup(
      {
       
        title:new FormControl('',[Validators.required]),
        completed:new FormControl(false),
      });
  }
  ngOnInit(): void {
   this.formModel.get
  }

  get title ()
  {
    return this.formModel.controls['title'];
  }
  get completed ()
  {
    return this.formModel.controls['completed'];
  }

  CreateToDO()
  {
    console.log(this.formModel.value);
  this.toDoService.CreateToDo(this.formModel.value).subscribe(
  
    (
      
     (response)=>
     {
         if(response.status==200)
         {
         
          let Id =this.formModel.get('id');
             this.router.navigate([`todo/details/${Id}`]);
             alert('item added successfully');
         }
         else
         {
          console.log('error not resisteration')
          let msg ="can't  create this todo";
          localStorage.setItem('msg', msg);
           this.router.navigate(['error']);
         }
     }
    )
  );
  }

}
