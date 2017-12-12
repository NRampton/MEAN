import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';

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
    for (let idx in this._ps.products) {
      if (this._ps.products[idx].id === id) {
        this._ps.products.splice(parseInt(idx), 1);
      }
    }
  }
}
