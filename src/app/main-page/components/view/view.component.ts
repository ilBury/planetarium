import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ForwardsService } from 'src/app/shared/services/forwards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(
    private forwards: ForwardsService,
    private activatedRoute: ActivatedRoute
    ) {

  }

  forwardSession(): void {
    this.forwards.forwardSession(this.activatedRoute);
  }

}
