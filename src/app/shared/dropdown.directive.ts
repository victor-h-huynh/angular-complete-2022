import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  // Name of html element
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // Apply class to html element
  @HostBinding('class.open') isOpen = false;

  constructor() { }

  // Click listener toggle on and off
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
