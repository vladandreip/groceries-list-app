import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number
  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService, private route: ActivatedRoute, private recipeListService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeListService.getRecipe(this.id);
      }
    )
  }

  toShoppingList() {
    this.shoppingListService.toShoppingList.emit('shopping-list');
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    //this 2 things are similar shit
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
    //computing complex path
  }

}
