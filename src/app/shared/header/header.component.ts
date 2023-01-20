import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() progressValue: number = 0;
  @Input() resultWidth: number = 0;

  private progressBar!: Element | null;
  private first!: Element | null;
  private last!: Element | null;
  private star!: HTMLImageElement | null;
  private checkChange!: boolean;


  constructor(){}

  changeProgress(event: any): number {
    this.first = document.querySelector('#first');
    this.last = document.querySelector('#last');
    this.progressBar = document.querySelector('.header-progress');
    this.star = document.querySelector('img');
    event.target === this.first ? this.progressValue = 0 : this.progressValue = Math.abs(((((window.innerWidth - this.progressBar!.clientWidth)/2 - event.target.offsetLeft) - this.progressBar!.clientWidth/4) - event.target.clientWidth/2) + this.progressBar!.clientWidth/4)*0.25;
    this.star!.style.left = this.progressValue*4 - this.star!.clientWidth/2 + "px";
    if(event.target === this.last){
      this.star!.style.left = this.progressValue*4  + "px";
      this.progressValue = 100
    };
    this.checkChange = true;

    return this.progressValue;
  }


 /*  foo(event: any): void {
    console.log(this.star!.style.left);
    if(this.checkChange) {
      this.star!.style.left = this.progressValue*4  + "px";
    } else {
      this.star!.style.left = Math.abs(((((window.innerWidth - this.progressBar!.clientWidth)/2 - event.target.offsetLeft) - this.progressBar!.clientWidth/4) - event.target.clientWidth/2) + this.progressBar!.clientWidth/4) + "px";
    }
 */




}
