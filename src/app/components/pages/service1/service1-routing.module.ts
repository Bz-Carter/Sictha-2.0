import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Service1Component } from './service1.component';

const routes: Routes = [
  {
    path: '',
    component: Service1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Service1RoutingModule { }
