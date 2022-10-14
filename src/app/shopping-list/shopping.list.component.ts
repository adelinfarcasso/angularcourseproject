import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping.list.component.html',
  styles: [''],
})
export class ShoppingList {
  ingredients: Ingredient[] = [
    new Ingredient('bun', 1),
    new Ingredient('patty', 1),
    new Ingredient('cheese', 2),
  ];
}
