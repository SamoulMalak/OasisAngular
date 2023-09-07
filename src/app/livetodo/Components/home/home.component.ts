import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ILiveToDo } from 'src/IObjects/LiveToDO/ilive-to-do';
import { LivetoDoService } from 'src/app/Services/liveto-do.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public PageNumber : number=1 ;
  public LiveToDoData :ILiveToDo[] = [];
  constructor(private LiveToDoService:LivetoDoService,
              private router : Router) 
  {
 
    this.GetLiveToDoItems(1,10);
  }

  GetLiveToDoItems(pageNumber: number,pageSize: number)
  {
    this.LiveToDoService.GetLiveToDO(pageNumber,pageSize)
    .subscribe((a) =>
    {
      if(a.status===200)
      {
        this.LiveToDoData=a.Data;
        console.log(a.Data);
      }
      else{
        let msg ="There is no items to show ";
        localStorage.setItem ('msg',msg);
        this.router.navigate(['/error'])
      }
    }
    );
  }


  PreviousPage()
  {
    if (this.PageNumber > 1) {
      this.PageNumber--;
      this.GetLiveToDoItems(this.PageNumber, 10);
    }
  }

  NextPage()
  {
    this.PageNumber++;
    this.GetLiveToDoItems(this.PageNumber, 10);
  }

}
