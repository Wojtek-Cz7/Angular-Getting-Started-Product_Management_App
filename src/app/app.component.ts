import { Component } from '@angular/core';

// decorator - TO JEST JAK ATRYBUT W C#
// nie ma po nim ;
// dekorator jest funkcją, więc ma ()
// przekazujemy mu obiekt w {}
// obiekt, który przekazujemy ma propertisy
@Component({
  selector: 'pm-root', // selector is a custom HTML tag - pm from product management ;)
  template : `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'> {{ pageTitle }} </a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `,
 // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Product Management App';
}
