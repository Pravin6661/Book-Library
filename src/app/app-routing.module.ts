import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ManagebookComponent } from './managebook/managebook.component';

const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"addbook",
    component:AddbookComponent
  },
  {
    path:"managebook",
    component:ManagebookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
