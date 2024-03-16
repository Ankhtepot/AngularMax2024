import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';
// import {Constants} from "../common/constants";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  // Second solution
  // @HostListener('click') onClick() {
  //   if (this.elementRef.nativeElement.classList.contains(Constants.OPEN)) {
  //     this.renderer.removeClass(this.elementRef.nativeElement, Constants.OPEN)
  //   } else {
  //     this.renderer.addClass(this.elementRef.nativeElement, Constants.OPEN);
  //   }
  // }
}
