import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Homepage2Component } from "./components/pages/homepage2/homepage2.component";
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: Homepage2Component, },
  
  {
    path: 'about/crapme',
    loadChildren: () => import('./components/pages/aboutus/aboutus.module')
      .then(mod => mod.AboutusModule)
  },
  {
    path: 'about/presentation',
    loadChildren: () => import('./components/pages/service1/service1.module')
      .then(mod => mod.Service1Module)
  },
  {
    path: 'actvities/news',
    loadChildren: () => import('./components/pages/blog-grid/blog-grid.module')
      .then(mod => mod.BlogGridModule)
  },
  {
    path: 'actvities/galleries',
    loadChildren: () => import('./components/pages/portfolio1/portfolio1.module')
      .then(mod => mod.Portfolio1Module)
  },
  {
    path: 'internal-regulations',
    loadChildren: () => import('./components/pages/faq/faq.module')
      .then(mod => mod.FaqModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./components/pages/career/career.module')
      .then(mod => mod.CareerModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./components/pages/contactus/contactus.module')
      .then(mod => mod.ContactusModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [

{path: '', component: Homepage2Component},
{path: 'about/presentation', component: Service1Component},
{path: 'about/crapme', component: AboutusComponent},
{path: 'actvities/news', component: BlogGridComponent},
{path: 'actvities/galleries', component: Portfolio1Component},
{path: 'internal-regulations', component: FaqComponent},
{path: 'registration', component: CareerComponent},
{path: 'contact-us', component: ContactusComponent},


{path: 'team', component: TeamComponent},
{path: 'team-detail', component: TeamDetailsComponent},
{path: 'service-one', component: Service1Component},
{path: 'service-two', component: Service2Component},
{path: 'service-detail', component: ServiceDetailComponent},
{path: 'blog-standard', component: BlogStandardComponent},
{path: 'blog-detail', component: BlogDetailComponent},
{path: 'portfolio-two', component: Portfolio2Component},
{path: 'portfolio-detail', component: PortfolioDetailComponent},
{path: 'shop', component: ShopComponent},
{path: 'shop-detail', component: ShopDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/