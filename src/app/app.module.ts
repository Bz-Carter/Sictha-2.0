import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { Header2Component } from './components/layouts/header2/header2.component';
import { ShopSidebarComponent } from './components/layouts/shop-sidebar/shop-sidebar.component';
import { BlogSidebarComponent } from './components/layouts/blog-sidebar/blog-sidebar.component';
import { ServiceSidebarComponent } from './components/layouts/service-sidebar/service-sidebar.component';
import { Footer1Component } from './components/layouts/footer1/footer1.component';
import { Homepage2Component } from './components/pages/homepage2/homepage2.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamDetailsComponent } from './components/pages/team-details/team-details.component';
import { CareerComponent } from './components/pages/career/career.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { Service1Component } from './components/pages/service1/service1.component';
import { Service2Component } from './components/pages/service2/service2.component';
import { ServiceDetailComponent } from './components/pages/service-detail/service-detail.component';
import { BlogStandardComponent } from './components/pages/blog-standard/blog-standard.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogDetailComponent } from './components/pages/blog-detail/blog-detail.component';
import { Portfolio1Component } from './components/pages/portfolio1/portfolio1.component';
import { Portfolio2Component } from './components/pages/portfolio2/portfolio2.component';
import { PortfolioDetailComponent } from './components/pages/portfolio-detail/portfolio-detail.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { ShopDetailComponent } from './components/pages/shop-detail/shop-detail.component';
import { ContactusComponent } from './components/pages/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    Header2Component,
    ShopSidebarComponent,
    BlogSidebarComponent,
    ServiceSidebarComponent,
    Footer1Component,
    Homepage2Component,
    AboutusComponent,
    TeamComponent,
    TeamDetailsComponent,
    CareerComponent,
    FaqComponent,
    Service1Component,
    Service2Component,
    ServiceDetailComponent,
    BlogStandardComponent,
    BlogGridComponent,
    BlogDetailComponent,
    Portfolio1Component,
    Portfolio2Component,
    PortfolioDetailComponent,
    ShopComponent,
    ShopDetailComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
