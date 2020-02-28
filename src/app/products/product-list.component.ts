import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent
                implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    private _productService;
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
      this._productService = productService;
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
      this.products = this._productService.getProducts();
      this.filteredProducts = this.products;
    }

    onRatingClicked(message: string): void {
      this.pageTitle = 'Product List: ' + message;

    }
  }
