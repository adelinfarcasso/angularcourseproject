import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe.item.component.html',
  styleUrls: ['./recipe.item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  @Input() recipeElem: Recipe;

  //   package: { e: any; item: any };

  fireItemSelection(e: any) {
    //  this.package = {
    //    e: e,
    //    item: this.recipeElem,
    //  };
    //  this.itemSelected.emit(e);
    this.recipeService.recipeSelected.emit(this.recipeElem);
    e.preventDefault();
  }

  ngOnInit(): void {}
}
