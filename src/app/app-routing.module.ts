import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './Shared/error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'livetodo', pathMatch: 'full' },
  {
    path: 'account', 
    loadChildren: () => import('src/app/Account/account/account.module').then(m => m.AccountModule)
    
  },
  {
    path: 'todo', 
    loadChildren: () => import('src/app/to-do/to-do.module').then(m => m.ToDOModule)
    
  },
  {
    path: 'livetodo', 
    loadChildren: () => import('src/app/livetodo/livetodo.module').then(m => m.LivetodoModule)
    
  },
  {path:'error' ,component:ErrorPageComponent},
  {path:'**',redirectTo:'livetodo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
 }
