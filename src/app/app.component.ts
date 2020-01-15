import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature='receipe'
  title = 'groceries-list-app';

  onNavigate(contentSelected: string){
    this.loadedFeature = contentSelected;
  }
  
}
