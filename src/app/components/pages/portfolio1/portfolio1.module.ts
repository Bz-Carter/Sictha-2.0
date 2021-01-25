import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Portfolio1RoutingModule } from './portfolio1-routing.module';

import { Portfolio1Component } from "./portfolio1.component";


@NgModule({
  declarations: [
    Portfolio1Component
  ],
  imports: [
    CommonModule,
    Portfolio1RoutingModule
  ],
  exports: []
})
export class Portfolio1Module { }
