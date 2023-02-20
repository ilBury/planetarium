import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService, users } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {

  public personalUsers = users;
  public user!: string;

  constructor(
    private authService: AuthService,

  ) {}

  ngOnInit(): void {
    for(let i = 0; i < this.personalUsers.length; i++) {
      if(this.personalUsers[i].email === localStorage.getItem('userEmail')) {
        this.user = this.personalUsers[i].login;
        console.log(this.user);
      }
    }

  }


  logout() {
    this.authService.logout();

  }

}
