import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe.detail.component.html',
  styleUrls: ['./recipe.detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipeToDisplay: Recipe;
  //   @Input() recipeToDisplay: Recipe;

  constructor(
    private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute
  ) {}

  sendIngredients() {
    // inneficient - emits multiple events
    //  this.recipeToDisplay.ingredients.forEach((ing) => {
    //    this.shoppingListService.addIngredients(ing);
    //  });
    //  this.shoppingListService.addIngredients(this.recipeToDisplay.ingredients);
    console.log(this.shoppingListService.getIngredients());
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.recipeToDisplay = this.recipeService.getRecipe(this.id);
    });
  }
}
