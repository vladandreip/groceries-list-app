import { Component, Output, OnInit, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit{
    @Output() contentSelected = new EventEmitter<string>();
    onSelect(selection: string){
        this.contentSelected.emit(selection);
    }

    ngOnInit() {
    }
}