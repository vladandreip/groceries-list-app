import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  toShoppingList = new EventEmitter<string>();
  private ingredients: Ingredient[] = [];
  /*
  private ingredients: Ingredient[] = [
    new Ingredient('mere', 2),
    new Ingredient('rosii', 3),
    new Ingredient('patlagina', 15)];
   */

  public getIngredients() {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  publishIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }
}
