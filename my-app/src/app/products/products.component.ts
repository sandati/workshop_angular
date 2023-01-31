import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : Product[] = [
    {name: "chaises", stock: 4, price: 10},
    {name: "tables", stock: 1, price: 100},
    {name: "yacht", stock: 0, price: 1},
  ];
}
