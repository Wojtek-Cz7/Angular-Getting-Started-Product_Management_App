import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  // w delkaracjach definiujemy, jakie KOMPONENTY NALEŻĄ DO TEGO MODUŁU
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  // Tu deklarujemy jakie zewnętrzne moduły mają być dostępne dla wszystkich komponentów które należą do tego Angular Module
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  // defines startup component of the application
  bootstrap: [AppComponent]
})
export class AppModule { }    // Angular Module jest zdefiniowany jako klasa
