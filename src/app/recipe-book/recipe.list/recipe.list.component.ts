import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe.list.component.html',
  styleUrls: ['./recipe.list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  constructor(
    private recipeService: RecipeService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  showSelectedItem(e: any, recipe: Recipe): void {
    e.preventDefault();
    //  this.recipeService.selectedRecipe = recipe;
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  openRecipe(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  goToNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
