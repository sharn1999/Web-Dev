import { Component } from '@angular/core';
import { categories, Category } from '../categories';
import { products } from '../products';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  categories = [...categories];
  active: Category = {
    category: ""
  };

  addFilter(ev:any, category: Category){
    this.active = category;
    
    products.forEach(el => {
      if(el.categories == ev.target.innerHTML && !el.remove){
        el.active = !el.active;
      } else{
        el.active = false;
      }
    })
  }
}
