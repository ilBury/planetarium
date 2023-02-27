import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, BehaviorSubject } from 'rxjs';

import { RoleUsers } from '../shared/types/role-users.enum';
import { users } from '../types/mocData';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _logTitle$: BehaviorSubject<RoleUsers> = new BehaviorSubject<RoleUsers>(localStorage.getItem('userEmail') ? RoleUsers.USER : RoleUsers.NONAME);

  get logTitle$() {
    return this._logTitle$.asObservable();
  }

  changeRoles() {
    this._logTitle$.next(RoleUsers.USER);

  }

  constructor(
    private router: Router
  ) {


  }




  login(login: string, password: string): Promise<void> {
    const userToLogin = users.find(user => user.login === login && user.password === password);
    if(userToLogin) {
      localStorage.setItem('userEmail', userToLogin.email );
      return Promise.resolve();
    }else {
      return Promise.reject();
    }

  }

  logout() {
    this._logTitle$.next(RoleUsers.NONAME);
    this.router.navigate(['planetarium', 'view']);
    localStorage.removeItem('userEmail');
  }
}



/*
export const users = [
 {
  login: 'Maloletka',
  password: '1234qwer!',
  email: 'maloletka@gmail.com',
  role: RoleUsers.USER
 },
 {
  login: 'Katletka',
  password: '1234qwer!',
  email: 'katletka@gmail.com',
  role: RoleUsers.USER
 },
 {
  login: 'Svetka',
  password: '1234qwer!',
  email: 'svetka@gmail.com',
  role: RoleUsers.USER
 }
] */
