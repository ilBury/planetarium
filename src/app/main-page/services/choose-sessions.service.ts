import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BookedTicket, DATE, Ticket } from 'src/app/shared/types/ticket.type';
import { sessions } from 'src/app/types/mocData';
import { Observable, filter, BehaviorSubject } from 'rxjs'
import { whatSelected } from '../components/sessions/sessions.component';

@Injectable({
  providedIn: 'root'
})
export class ChooseSessionsService {

  public tempSessions: Ticket[] = sessions;
  public selectedSession!: Ticket;
  public chooseSessions: Ticket[] = [];
  public chooseDaySessions: Ticket[] = [];
  public allDate!: DATE[];
  public day!: string;
  public date!: Date;
  public hour!: string;
  public hasTime!: boolean;
  public reservedSeats: BookedTicket[] = [];
  public currentHour!: string;
  public status!: whatSelected;
  public isPaymentComplete: boolean = false;

  constructor(
    private router: Router,
  ) { }

  confirm() {

  }



}
