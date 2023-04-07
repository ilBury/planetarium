import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForwardsService } from 'src/app/shared/services/forwards.service';
import { User } from 'src/app/shared/types/user.type';
import { users } from 'src/app/types/mocData';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {


  private tempUsers: User[] = users;

  constructor(
    private forward: ForwardsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}


  addAvatar(event: any) {

    if(event.target.tagName === 'IMG' && event.target.getAttribute('class')) {
      const avatar = document.createElement('img');
      avatar.setAttribute('id', 'tempAvatar');

      let user = localStorage.getItem('userEmail');
      this.tempUsers.forEach((value, index, self) => {
        if(value.email === user) {
          avatar.setAttribute('src', `${value.avatarBody}`);
        }
      })
      if(avatar.getAttribute('src')) {
        const select = document.querySelector('.select-games');

        avatar.style.width = 160 + "px";
        avatar.style.height = 190 + "px";
        avatar.style.position = 'absolute'
        avatar.style.zIndex = "100";

        avatar.style.left = event.target.offsetLeft  + event.target.clientWidth/2 - 160/2  + "px";
        avatar.style.top = event.target.offsetTop - 190/2 + "px";
        avatar.style.cursor = "pointer";
        avatar.setAttribute('mouseout', `${this.removeAvatar(event)}`)
        select!.append(avatar);
      }
    }
  }

  removeAvatar(event: any) {
    const avatar = document.querySelector('#tempAvatar');
    if(event.relatedTarget !== avatar) {
      avatar?.remove();
    }

  }
  forwardGame(event: any): void {
    if(event.target.tagName === 'IMG' && event.target.getAttribute('class')) {
      const game = event.target.getAttribute('class');
      switch(game) {
        case 'solarSystemGame': this.forward.forwardSolarGame(this.router);break;
        case 'barleyBreakGame': this.forward.forwardBarleyGame(this.router); break;
        case 'memoGame': this.forward.forwardMemoryGame(this.router);break;
        case 'visualGame': break;
        case 'learnPlanetsGame': this.forward.forwardLearningGame(this.router);break;
      }
    }
  }
}
