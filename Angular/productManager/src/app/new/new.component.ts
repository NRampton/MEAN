import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product = new Product();
  constructor(
    private _ps: ProductsService,
    private _router: Router
  ) { }

  submitHandler() {
    if (!this.product.imageUrl) {
      this.product.imageUrl = '';
    }
    console.log(this._ps.currentId);
    this.product.id = this._ps.currentId;
    this._ps.currentId += 1;
    console.log(this._ps.currentId);
    console.log(this.product);
    this._ps.products.push(this.product);
    this._router.navigate(['products']);
    // console.log(this._ps.products);
    // this.product = new Product();
  }
  ngOnInit() {
  }
}
