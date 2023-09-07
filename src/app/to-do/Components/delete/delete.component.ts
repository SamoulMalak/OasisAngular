import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from 'src/app/Services/todo.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
Id :number =0;
  constructor(private activatedRoute:ActivatedRoute,
             private todoService:TodoService,
             private router:Router) 
{
  this.GetIdfromUrl();
  this.DeleteToDo();
 }

  DeleteToDo()
  {
     this.todoService.DeleteTodo(this.Id).subscribe(
      (response)=>
      {
        if(response.status===200)
        {
          alert('item deleted successfully');
        }
        else
        {
        alert('Item not deleted');
        }
      }
   
     );
     this.router.navigate(['livetodo']);
  }

  GetIdfromUrl()
  {
    this.Id=Number(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(this.Id)

  }


}
