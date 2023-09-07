import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItoDoDetails } from 'src/IObjects/Todo/ito-do-details';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  Id :number =0;
  ToDoItem :ItoDoDetails={} as ItoDoDetails ;
   
  constructor(private activatedRouter :ActivatedRoute,
              private toDoService :TodoService,
              private router : Router) {

    this.getIdFromUrl();
    this.GetToDoDetails();
  }


  getIdFromUrl () 
  {
  this.Id= Number(this.activatedRouter.snapshot.paramMap.get('id'));
  }

  GetToDoDetails ()
  {
    this.toDoService.GetToDoById(this.Id).subscribe (
      (response)=>
      {
          if(response.status==200)
          {
          
              this.ToDoItem=response.Data;
          }
          else
          {
            let msg = "Can't Find this todo item";
            localStorage.setItem('msg', msg);
             this.router.navigate(['error']);
          }
      }
    );

  }

}
