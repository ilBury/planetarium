import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {



  constructor(private router: Router) {

  }

  login() {
    this.router.navigate(['login']);
  }
}
