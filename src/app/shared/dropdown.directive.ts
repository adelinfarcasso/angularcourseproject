import { parseHostBindings } from '@angular/compiler';
import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  //   isOpen = false;
  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event']) onClick($event: Event) {
    // bad practice, accesez dom direct
    //  this.elementRef.nativeElement.classList.toggle('open');

    this.isOpen = !this.isOpen;
    console.log($event); // undefined
  }

  @HostBinding('class.open') isOpen = false;
}

/*
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
*/
