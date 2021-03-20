import { Component } from '@angular/core';

// decorator - TO JEST JAK ATRYBUT W C#
// nie ma po nim ;
// dekorator jest funkcją, więc ma ()
// przekazujemy mu obiekt w {}
// obiekt, który przekazujemy ma propertisy
@Component({
  selector: 'pm-root', // selector is a custom HTML tag - pm from product management ;)
  template : `<div><h1>{{pageTitle}}</h1>
  <pm-products></pm-products>
  </div>`,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Acme Product Management';
}
