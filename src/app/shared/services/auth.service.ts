import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, filter, BehaviorSubject } from 'rxjs';
import { RoleUsers } from '../types/role-users.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public logBtn: boolean = false;
  public title: string = 'Вход';
  public currentRole: RoleUsers = RoleUsers.NONAME;
  private _logTitle$: BehaviorSubject<RoleUsers> = new BehaviorSubject<RoleUsers>(RoleUsers.NONAME);

  get logTitle$() {
    return this._logTitle$.asObservable();
  }


  changeRoles() {
    this._logTitle$.next(RoleUsers.USER);
  }

  constructor() {

  }




  login(login: string, password: string): Promise<void> {
    const userToLogin = users.find(user => user.login === login && user.password === password);
    if(userToLogin) {
      return Promise.resolve();
    }else {
      return Promise.reject();
    }
  }

  logout() {

  }
}


const users = [
 {
  login: 'Maloletka',
  password: '1234qwer!',
  role: RoleUsers.USER
 },
 {
  login: 'Katletka',
  password: '1234qwer!',
  role: RoleUsers.USER
 },
 {
  login: 'Svetka',
  password: '1234qwer!',
  role: RoleUsers.USER
 }
]
