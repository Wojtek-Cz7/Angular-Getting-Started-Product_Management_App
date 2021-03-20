import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  // w delkaracjach definiujemy, jakie KOMPONENTY NALEŻĄ DO TEGO MODUŁU
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  // Tu deklarujemy jakie zewnętrzne moduły mają być dostępne dla wszystkich komponentów które należą do tego Angular Module
  imports: [
    BrowserModule,
    FormsModule
  ],
  // defines startup component of the application
  bootstrap: [AppComponent]
})
export class AppModule { }    // Angular Module jest zdefiniowany jako klasa
