import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Portfolio1Component } from './portfolio1.component';

const routes: Routes = [
  {
    path: '',
    component: Portfolio1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Portfolio1RoutingModule { }
