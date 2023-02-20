import { Component, Input, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { find, Observable, Subscription } from 'rxjs';
import { AuthService, users } from '../../services/auth.service';
import { ChangeProgressService } from '../../services/change-progress.service';
import { ForwardsService } from '../../services/forwards.service';
import { RoleUsers } from '../../types/role-users.enum';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {

  @Input() progressValue: number = 0;
  public userRoles!: RoleUsers;
  public title$: Observable<RoleUsers> = this.authService.logTitle$;

  public get roleUsers(): typeof RoleUsers {
    return RoleUsers;
  }

  public get _authService(): AuthService {
    return this.authService;
  }

  constructor(
    private changeProgressService: ChangeProgressService,
    private router: Router,
    private authService: AuthService,
    private forwards: ForwardsService,
    private activatedRoute: ActivatedRoute
  ){
    authService.logTitle$.subscribe(value => {

     this.userRoles = value;

    });


  }

  ngOnInit(): void {

  }

  changeProgress(event: any): number {
    this.progressValue = this.changeProgressService.changeProgress(event);
    return this.progressValue;
  }


  login(): void {
    this.router.navigate(['login']);
  }

  personal(): void {
    this.router.navigate(['personal']);
  }

  forwardView(): void {
    this.forwards.forwardView();
  }

  forwardSession(): void {
    this.forwards.forwardSession(this.activatedRoute);
  }

  forwardContacts(): void {
    this.forwards.forwardContacts(this.activatedRoute);
  }

  forwardNews(): void {
    this.forwards.forwardNews(this.activatedRoute);
  }

}
