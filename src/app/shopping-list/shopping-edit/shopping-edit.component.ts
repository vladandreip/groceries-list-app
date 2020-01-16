import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:true}) nameReference: ElementRef;
  @ViewChild('amountInput', {static:true}) amountReference: ElementRef;
  @Output() createIngredientEmitter = new EventEmitter<Ingredient>();
  ingredient: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  addRecipe(){
      //this.ingredient = new Ingredient(this.nameReference.nativeElement.value, this.amountReference.nativeElement.value);
  }
  onAddIngredient(){
    this.createIngredientEmitter.emit({name: this.nameReference.nativeElement.value,amount: this.amountReference.nativeElement.value});
  }

}
