import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

// component decorator
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['.//product-list.component.css'],
})
// klasa
export class ProductListComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  pageTitle: string = 'Products List';
  // tslint:disable-next-line: no-inferrable-types
  imageWidth: number = 60;
  // tslint:disable-next-line: no-inferrable-types
  imageMargin: number = 1;
  showImage = false;  
  _listFilter = 'cart';             // backing field
  get listFilter(): string {        // getter
      return this._listFilter;
  }
  set listFilter(value: string) {   // setter
      this._listFilter = value;
      // filtrowanie jest wołane w setterze! ciekawe :)
      // bo setter jest wywoływany zawsze kiedy value się zmienia - czyli kiedy użytkownik wpisuje coś
      this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage: string;
  // constructor
  constructor(private productService: ProductService) {
    this.listFilter = '';
  }
  // methods
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('Message form ngOnInit!');
    this.productService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
    });
    
  }
  performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter(
          (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;
  }
}
