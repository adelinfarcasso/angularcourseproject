import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipePleaseSelectComponent } from './recipe-book/recipe-please-select/recipe-please-select.component';
import { RecipeDetailComponent } from './recipe-book/recipe.detail/recipe.detail.component';

import { RecipesComponent } from './recipe-book/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping.list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: '', component: RecipePleaseSelectComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
      },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
