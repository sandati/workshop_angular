import { Component, Input } from '@angular/core';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-displayer',
  templateUrl: './product-displayer.component.html',
  styleUrls: ['./product-displayer.component.css']
})
export class ProductDisplayerComponent {
  @Input() products! : Product[];

  decrementStock(product: Product) {
    product.stock = product.stock - 1;
  }
}
