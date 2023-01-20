import { Component, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChangeProgressService } from '../../services/change-progress.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() progressValue: number = 0;

  constructor(private changeProgressService: ChangeProgressService){}

  changeProgress(event: any): number {
    this.progressValue = this.changeProgressService.changeProgress(event);
    return this.progressValue;
  }






}
