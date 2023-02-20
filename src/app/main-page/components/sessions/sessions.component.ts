import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  booking() : void {
    this.router.navigate(['booking'], {relativeTo: this.activatedRoute})

  }
}
