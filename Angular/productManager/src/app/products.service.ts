import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Product } from './product';

@Injectable()
export class ProductsService {
  products: Array<Product> = [];     //= [{id: 1, title: 'Frosted Flakes', price: 3.99, imageUrl: 'flakes.jpg'}, {id: 2, title: "Froot Loops", price: 3.99, imageUrl: ''}];
  currentId: number = 1;
  constructor( private _http: Http) { }

  createProduct(product): void {
    this.products.push(product);
  }
}
