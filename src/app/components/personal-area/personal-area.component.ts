import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { users } from 'src/app/types/mocData';


@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {

  public personalUsers = users;
  public user!: string;
  public discount!: number;
  public avatarBody!: string;

  constructor(
    private authService: AuthService,

  ) {}

  ngOnInit(): void {
    for(let i = 0; i < this.personalUsers.length; i++) {
      if(this.personalUsers[i].email === localStorage.getItem('userEmail')) {
        this.user = this.personalUsers[i].login;
        this.discount = this.personalUsers[i].discount;
        this.avatarBody = this.personalUsers[i].avatarBody;
      }
    }

  }


  logout() {
    this.authService.logout();

  }

}
