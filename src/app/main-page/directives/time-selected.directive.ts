import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[timeSelected]'
})
export class TimeSelectedDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#6858DC';
    this.elementRef.nativeElement.style.cursor = 'default';
  }

}
