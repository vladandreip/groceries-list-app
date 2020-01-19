import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is dummy', 'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg'),
    new Recipe('Another test Recipe', 'This is dummy', 'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg')
  ];

  getRecipes() {
    // slice retuneaza o noua instanta o copie a array-ului nostru
    return this.recipes.slice();
  }
}
