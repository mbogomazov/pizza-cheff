import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MaskitoModule } from '@maskito/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { AdvantageCardComponent } from './components/advantages/advantage-card/advantage-card.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdvantagesComponent,
    AdvantageCardComponent,
    ProductCardComponent,
    ProductsComponent,
    OrderComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, MaskitoModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
