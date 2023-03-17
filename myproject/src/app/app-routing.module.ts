import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LocateComponent } from './pages/locate/locate.component';
import { SingleComponent } from './pages/single/single.component';

import { Product2Component } from './pages/product2/product2.component';
const routes: Routes = [
  {
  path:'' ,component:HomeComponent
  },
  {
    path:'product' ,component:ProductsComponent
  },
  {
    path:'about' ,component:AboutComponent
  },
  {
    path:'contact' ,component:ContactComponent
  },
  {
    path:'login' ,component:LoginComponent
  },
  {
    path:'signup' ,component:SignupComponent
  },
  {
    path:'locate' ,component:LocateComponent
  },
  {
    path:'single' ,component:SingleComponent
  },
  {
 path:'product2' ,component:Product2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
