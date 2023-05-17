import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { ValidationService } from 'src/app/shared/services/validation.service';
import { news, users } from 'src/app/types/mocData';
import { News } from 'src/app/shared/types/news.type';
import { RoleUsers } from 'src/app/shared/types/role-users.enum';
import { User } from 'src/app/shared/types/user.type';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent    {

  public userAvatars = [
    'avatar_1.png',
    'avatar_2.png',
    'avatar_3.png',
    'avatar_4.png',
    'avatar_5.png',
    'avatar_6.png',
    'avatar_7.png',
    'avatar_8.png',
    'avatar_9.png',
    'avatar_10.png',
    'avatar_11.png',
  ]

  public activeAvatarIndex = 0;

  @Input() stepRegistration: StepRegistration = StepRegistration.writeData;

  public showPaswword: boolean = false;
  public newsItems: News[] = news;
  public form = this.fb.group( {
    login: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(19),
      ValidationService.loginValidator()
    ]),
    email: new FormControl<string>('', [
      Validators.required,
    ]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(8),
      ValidationService.passwordValidator()
    ])
  });
  public get steps(): typeof StepRegistration {
    return StepRegistration;
  }
  private tempUser?: User;
  private isSelected: boolean = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {

  }


  choice(event: any): void {

    if(event.target.src) {
      const avatarImageName = String(event.target.src.match(/[a-zA-Z0-9_]{1,}.png/)?.[0]);
      const imageSrc = 'assets/images/' + avatarImageName;
      this.tempUser!.avatar = imageSrc;

      const avatarIndex = this.userAvatars.indexOf(avatarImageName)
      this.activeAvatarIndex = avatarIndex !== -1 ? avatarIndex : 0;

      this.tempUser!.avatarBody =  this.tempUser!.avatar.replace(/_/g, '');
    }
  }

  news(event: any): void {
    this.tempUser!.interested.find(el => el === event.source.value) ? this.isSelected = false : this.isSelected = true;
    if(this.isSelected) {
      this.tempUser!.interested.push(event.source.value);
    }else {
      let index =  this.tempUser!.interested.findIndex(el => el === event.source.value);
      this.tempUser!.interested.splice(index, 1);
    }
  }


  login() {
    this.router.navigate(['login']);
  }

  togglePasswordVisibility() {
    this.showPaswword = !this.showPaswword;
  }

  next(event: any): void {
    if(this.form.valid) {
      if(this.stepRegistration === StepRegistration.writeData) {
        this.tempUser = {login: this.form.value.login!,
          password: this.form.value.password!,
          email: this.form.value.email!,
          role: RoleUsers.USER,
          avatar: '',
          avatarBody: '',
          interested: [],
          discount: 0}
          this.stepRegistration = StepRegistration.choiceAvatar;
      } else if(this.stepRegistration === StepRegistration.choiceAvatar) {
        if(this.tempUser!.avatar != '') {
          this.stepRegistration = StepRegistration.choiceNews;
        }
      }else {
        this.stepRegistration = StepRegistration.writeData;
        this.router.navigate(['planetarium']);
        this.authService.changeRoles('hello');
        users.push(this.tempUser!);
        localStorage.setItem('userEmail',this.tempUser!.email);
      }
    }
  }

}

let user2: User[] = [];


enum StepRegistration {
  writeData = 1,
  choiceAvatar,
  choiceNews
}
