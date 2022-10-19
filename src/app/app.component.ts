import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipeApp';
  activeWindow = 'recipes';

  changeMenu(e: any) {
    this.activeWindow =
      // better to use data atrib.
      e.target.innerText === 'Recipes' ? 'recipes' : 'shopping-list';
    console.log(e);
  }
}
