import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
@NgModule({
  // w delkaracjach definiujemy, jakie KOMPONENTY NALEŻĄ DO TEGO MODUŁU
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // Tu deklarujemy jakie zewnętrzne moduły mają być dostępne dla wszystkich komponentów które należą do tego Angular Module
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },  // default route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // dla nieistniejącej strony
    ]),
    ProductModule
  ],
  // defines startup component of the application
  bootstrap: [AppComponent]
})
export class AppModule { }    // Angular Module jest zdefiniowany jako klasa
