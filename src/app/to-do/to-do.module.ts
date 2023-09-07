import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateComponent } from './Components/create/create.component';
import { UpdateComponent } from './Components/update/update.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './Components/details/details.component';
import { userauthenticatGuard } from '../Guards/userauthenticat.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from './Components/delete/delete.component';

const routes:Routes =[ 
  { path: '', redirectTo: 'create', pathMatch: 'full' },
  { path: 'create', component:CreateComponent,canActivate:[userauthenticatGuard]  },
  { path: 'details', component:DetailsComponent,canActivate:[userauthenticatGuard]  },
  { path: 'update/:id', component:UpdateComponent,canActivate:[userauthenticatGuard]  },
  { path: 'delete/:id', component:DeleteComponent,canActivate:[userauthenticatGuard]  }
  

];

@NgModule({
  declarations: [
    
    CreateComponent,
    UpdateComponent,
    DetailsComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)

  ]
})
export class ToDOModule { }
