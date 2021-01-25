import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogGridRoutingModule } from './blog-grid-routing.module';

import { BlogGridComponent } from "./blog-grid.component";
import { BlogSidebarComponent } from '../../layouts/blog-sidebar/blog-sidebar.component';



@NgModule({
  declarations: [
    BlogGridComponent,
    BlogSidebarComponent
  ],
  imports: [
    CommonModule,
    BlogGridRoutingModule
  ],
  exports: []
})
export class BlogGridModule { }
