import { Component, Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product: any;
  isClicked = false;

  shareViaTelegram(product: Product) {
    const url = encodeURIComponent(product.link);
    const telegramUrl = `https://telegram.me/share/url?url=${url}&text=${product.name}`;
    window.open(telegramUrl, '_blank');
  }

  clickLike(product: Product) {
    if(!this.isClicked){
      product.likes += 1;
    }
    this.isClicked = true;
  }

  removeItem(product: Product){
    product.remove = true;
    product.active = !product.active;
  }
}
