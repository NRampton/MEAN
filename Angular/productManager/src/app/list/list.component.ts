import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  constructor(private _ps: ProductsService) { }

  ngOnInit() {
    this.products = this._ps.products;
  }

  delete(id): void {
    let idx = id -1;
    this._ps.products.splice(idx);
    this.products = this._ps.products;
  }
}
