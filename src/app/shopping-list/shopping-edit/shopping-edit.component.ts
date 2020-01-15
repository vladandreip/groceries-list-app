import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:true}) nameReference: ElementRef;
  @ViewChild('amountInput', {static:true}) amountReference: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
