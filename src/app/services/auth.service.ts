import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, BehaviorSubject } from 'rxjs';

import { RoleUsers } from '../shared/types/role-users.enum';
import { users } from '../types/mocData';
import { User } from '../shared/types/user.type';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAdmin: boolean = false;
  private _logTitle$: BehaviorSubject<RoleUsers> = new BehaviorSubject<RoleUsers>(!localStorage.getItem('userEmail') ?
  RoleUsers.NONAME : (this.checkIsAdmin() ? RoleUsers.ADMIN : RoleUsers.USER));

  get logTitle$() {
    return this._logTitle$.asObservable();
  }



  constructor(
    private router: Router,
    private http: HttpClient
  ) {

  }

  checkIsAdmin(): boolean {
    let mail = localStorage.getItem('userEmail');
    let isAdmin = false;
    if(mail) {
      users.forEach(val => {
        if(val.email === mail && val.role === RoleUsers.ADMIN) {
          isAdmin = true;
        }
      })
    } else return false;
    if(isAdmin) {
      return true;
    } else {
      return false;
    }
  }

  changeRoles(login: string) {
    let isAdmin = false;
    users.forEach(val => {
      if(val.login === login && val.role === RoleUsers.ADMIN) {
        isAdmin = true;
      }
    })
    isAdmin ? this._logTitle$.next(RoleUsers.ADMIN) : this._logTitle$.next(RoleUsers.USER)
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




