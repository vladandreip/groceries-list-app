import { Component } from '@angular/core';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='receipe';
  title = 'groceries-list-app';

  constructor(private shoppingListService: ShoppingListService) {
    shoppingListService.toShoppingList.subscribe((navigationString: string) => {
      this.onNavigate(navigationString);
    });
  }

  onNavigate(contentSelected: string){
    this.loadedFeature = contentSelected;
  }



}
