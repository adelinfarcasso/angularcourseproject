import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Burger 1',
      'Tasty burger 1',
      'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg',
      [
        new Ingredient('bread', '1'),
        new Ingredient('cheese', '2'),
        new Ingredient('tomatoes', '1'),
      ]
    ),
    new Recipe(
      'Burger 2',
      'Tasty burger 2',
      'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg',
      [
        new Ingredient('bread', '1'),
        new Ingredient('panceta', '2'),
        new Ingredient('sauce', '1'),
      ]
    ),
    new Recipe(
      'Burger 3',
      'Tasty burger 3',
      'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg',
      [
        new Ingredient('bread', '1'),
        new Ingredient('falafel', '2'),
        new Ingredient('sourcream', '1'),
      ]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
  currentRecipe: Recipe;
}
