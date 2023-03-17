import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { UnitsComponent } from './units/units.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LocateComponent } from './pages/locate/locate.component';
import { SingleComponent } from './pages/single/single.component';
import { FooterComponent } from './units/footer/footer.component';
import { Product2Component } from './pages/product2/product2.component';
import { Product3Component } from './pages/product3/product3.component';
import { CartComponent } from './pages/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    UnitsComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    LocateComponent,
    SingleComponent,
    FooterComponent,
    Product2Component,
    Product3Component,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
