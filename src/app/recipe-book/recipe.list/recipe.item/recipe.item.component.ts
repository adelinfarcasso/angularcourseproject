import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe.item.component.html',
  styleUrls: ['./recipe.item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeElem: Recipe;
  @Output() itemSelected = new EventEmitter();

  //   package: { e: any; item: any };

  fireItemSelection(e: any) {
    //  this.package = {
    //    e: e,
    //    item: this.recipeElem,
    //  };
    this.itemSelected.emit(e);
  }

  constructor() {}

  ngOnInit(): void {}
}
