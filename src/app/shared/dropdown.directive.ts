import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openGroup = false;
  @HostListener('click') onGroupButtonClicked() {
    this.openGroup = !this.openGroup;
  }
  constructor() { }

}
