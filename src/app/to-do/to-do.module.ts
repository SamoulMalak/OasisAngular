import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './Components/create/create.component';
import { UpdateComponent } from './Components/update/update.component';
import { Routes } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';
import { userauthenticatGuard } from '../Guards/userauthenticat.guard';

const routes:Routes =[ 
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'create', component:CreateComponent,canActivate:[userauthenticatGuard]  },
  { path: 'details/:id', component:DetailsComponent,canActivate:[userauthenticatGuard]  },
  { path: 'update/:id', component:UpdateComponent,canActivate:[userauthenticatGuard]  },
  

];

@NgModule({
  declarations: [
    
    CreateComponent,
    UpdateComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToDOModule { }
