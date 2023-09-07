import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './Components/home/home.component';
import { CreateComponent } from './Components/create/create.component';
import { UpdateComponent } from './Components/update/update.component';



@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToDOModule { }
