import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true}) nameReference: ElementRef;
  @ViewChild('amountInput', {static: true}) amountReference: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.shoppingListService.addIngredient(
      {name: this.nameReference.nativeElement.value, amount: this.amountReference.nativeElement.value});
  }

}
