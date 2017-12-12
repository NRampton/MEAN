import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  products: Array<Product> = [];
  product: Product;
  idx: number;
  constructor( 
    private _ps: ProductsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
  
  
  ngOnInit() {
    this.products = this._ps.products;
    this._route.paramMap.subscribe( 
      params => this.id = (parseInt(params.get('id'))),
      err => this._router.navigate(['home']),
      () => console.log("All done.")
    );    
    this.product = this.retrieveProduct(this.products, this.id);
  }
  
  retrieveProduct = function(arr, id) {
   for (let idx in arr) {
     if (arr[idx].id === id) {
       return arr[idx];
     }
   } 
  }
  update() {
    let oldAndBusted = this.retrieveProduct(this.products, this.id);
    oldAndBusted = this.product;
    this._router.navigate(['products']);
  }

}
