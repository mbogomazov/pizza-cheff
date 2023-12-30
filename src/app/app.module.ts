import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { AdvantageCardComponent } from './components/advantages/advantage-card/advantage-card.component';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, AdvantagesComponent, AdvantageCardComponent, ProductCardComponent, ProductsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule { }
