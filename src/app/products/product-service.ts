import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private http: HttpClient) {}  // dependency injection
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),   // tap operator
        catchError(this.handleError)                                // catchError operator
    );
  }
  private handleError(err: HttpErrorResponse) {
      // logujemy błędy tylko na  konsolę.
      // normalnie, wysyłamy taki błąd do infrastruktury logowania błędów ;) 
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occured: ${err.error.message}`;
    } else {
        // backend zwrócił jakis kod...
        errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
