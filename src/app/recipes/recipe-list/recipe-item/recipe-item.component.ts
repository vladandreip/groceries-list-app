import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {RecipeService} from '../../recipe.service';
import {ShoppingListService} from '../../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //@Output() recipeSelected = new EventEmitter<void>();
  @Input() recipe: Recipe;
  @Input() index: number;
  
  ngOnInit() {
  }

}
