import { Ingredient } from '../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredient: Ingredient;
  private ingredients: Ingredient[] = [
    new Ingredient('bun', '1'),
    new Ingredient('patty', '1'),
    new Ingredient('cheese', '2'),
  ];

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    this.ingredients.push(new Ingredient(name.value, amount.value));

    name.value = '';
    amount.value = '';

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  // code does not work with addIngredient above bcoz we're pushing to original ingredients[], but we're getting a copy of ingredients[] in the getIngredients method
  // to solve -> emit an event on getIngredients function

  getIngredients() {
    return this.ingredients.slice();
  }
}
