import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(
      'Shaorma',
      'This is yummeh',
      'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg',
      [
        new Ingredient('Carne', 1),
        new Ingredient('Cartofi', 50),
        new Ingredient('Cu de toate', 1)
      ]),
    new Recipe(
      'Pui cu varza',
      'Facuta de mata mare',
      'https://storage.needpix.com/rsynced_images/fish-1101436_1280.jpg',
      [
        new Ingredient('Pui', 1),
        new Ingredient('Varza', 1)
      ])
  ];

  getRecipes() {
    // slice retuneaza o noua instanta o copie a array-ului nostru
    return this.recipes.slice();
  }
}
