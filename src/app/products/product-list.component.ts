import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // Selector is no longer needed because we route to this component in module 11 instead of nesting it
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent
  implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private productService;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  products: IProduct[] = [];

  // Put as little as possible in the constructor function
  constructor(productService: ProductService) {
    this.productService = productService;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      // First syntax option
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      // Second syntax option
      error(err) { this.errorMessage = err; }
    });
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;

  }
}
