import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Homepage2Component } from "./components/pages/homepage2/homepage2.component";
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { ShopSidebarComponent } from './components/layouts/shop-sidebar/shop-sidebar.component';
import { ServiceSidebarComponent } from './components/layouts/service-sidebar/service-sidebar.component';
import { Footer1Component } from './components/layouts/footer1/footer1.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Homepage2Component,
    PreloaderComponent,
    Header2Component,
    ShopSidebarComponent,
    ServiceSidebarComponent,
    Footer1Component,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
