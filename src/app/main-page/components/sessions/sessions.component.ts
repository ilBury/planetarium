import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { DATE, Ticket } from 'src/app/shared/types/ticket.type';
import { sessions } from 'src/app/types/mocData';
import { ChooseSessionsService } from '../../services/choose-sessions.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss']
})
export class SessionsComponent {

  public tempSessions: Ticket[] = sessions;
  public chooseSessions: Ticket[] = [];
  public chooseDaySessions: Ticket[] = [];
  public allDate: DATE[] = [];

  public day!: string;


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private choose: ChooseSessionsService
    ) {

  }

  booking(session: Ticket, allDate: DATE[]) : void {

    this.choose.booking(session, allDate);

    this.router.navigate(['booking'], {relativeTo: this.activatedRoute})
  }



  chooseDay(event: any): void {
   this.choose.chooseDay(event);
   this.allDate = Array.from(this.choose.allDate);
   this.chooseSessions = Array.from(this.choose.chooseSessions);
   this.chooseDaySessions = Array.from(this.choose.chooseDaySessions);

  }

  choiceTime(event: any): void {
    this.choose.choiceTime(event);
    this.allDate = Array.from(this.choose.allDate);
    this.chooseSessions = Array.from(this.choose.chooseSessions);
    this.chooseDaySessions = Array.from(this.choose.chooseDaySessions);
    console.log(typeof event.source._elementRef.nativeElement.lastChild.lastChild.innerHTML.split(':')[0])
  }



}
