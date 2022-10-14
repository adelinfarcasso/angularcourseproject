import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe.list.component.html',
  styleUrls: ['./recipe.list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Burger',
      'Tasty burger',
      'https://assets.bonappetit.com/photos/5b919cb83d923e31d08fed17/1:1/w_2560%2Cc_limit/basically-burger-1.jpg'
    ),
  ];
  getDetails(event: any): void {
    console.log(event);
  }

  constructor() {
    console.log(this.recipes);
  }

  ngOnInit(): void {}
}
