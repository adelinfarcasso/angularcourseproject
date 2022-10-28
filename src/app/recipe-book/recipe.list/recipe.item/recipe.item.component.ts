import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe.item.component.html',
  styleUrls: ['./recipe.item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor() {}
  @Input() recipeElem: Recipe;

  ngOnInit(): void {}
}

//   fireItemSelection(e: any) {
//  this.package = {
//    e: e,
//    item: this.recipeElem,
//  };
//  this.itemSelected.emit(e);
//  this.recipeService.recipeSelected.emit(this.recipeElem);
//  e.preventDefault();
//   }
