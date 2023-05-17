import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BookedTicket, DATE, Ticket, TicketForAdmin } from 'src/app/shared/types/ticket.type';
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
  public adminSessions: Ticket[] = [];
  public sessionsForAdmin: TicketForAdmin[] = [];

  constructor(
    private router: Router,
  ) {
    let date: DATE[] = [];
    let tempSession: Ticket;
    sessions.forEach(val => {
      val.date?.forEach((value, index) => {
        if(index && (val.date![index - 1].item.getDay() !== value.item.getDay() || index === val.date!.length - 1)) {
          if(val) {
            if(index === val.date!.length - 1) date.push(value);
            tempSession = Object.assign({}, val);
            tempSession.date! =  date;
            this.adminSessions.push(tempSession)
          }
          date = [];
        }
        if(index !== val.date!.length ) date.push(value);
      })
    })
    this.adminSessions.forEach(value => {
      value.date?.forEach(val => {

          this.sessionsForAdmin.push(
            {name: value.name, discription: value.discription, picture: value.picture, price: value.price, date: val}
          )

      })
    })
  }

  confirm() {

  }



}
